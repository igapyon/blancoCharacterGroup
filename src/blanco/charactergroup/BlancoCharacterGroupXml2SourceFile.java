/*
 * blanco Framework
 * Copyright (C) 2004-2006 IGA Tosiki
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 */
package blanco.charactergroup;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;

import blanco.cg.BlancoCgObjectFactory;
import blanco.cg.BlancoCgSupportedLang;
import blanco.cg.transformer.BlancoCgTransformerFactory;
import blanco.cg.util.BlancoCgLineUtil;
import blanco.cg.util.BlancoCgSourceUtil;
import blanco.cg.valueobject.BlancoCgClass;
import blanco.cg.valueobject.BlancoCgMethod;
import blanco.cg.valueobject.BlancoCgSourceFile;
import blanco.charactergroup.message.BlancoCharacterGroupMessage;
import blanco.charactergroup.resourcebundle.BlancoCharacterGroupResourceBundle;
import blanco.charactergroup.valueobject.BlancoCharacterGroupFieldStructure;
import blanco.charactergroup.valueobject.BlancoCharacterGroupStructure;
import blanco.commons.util.BlancoNameAdjuster;
import blanco.commons.util.BlancoStringUtil;
import blanco.xml.bind.BlancoXmlBindingUtil;
import blanco.xml.bind.BlancoXmlUnmarshaller;
import blanco.xml.bind.valueobject.BlancoXmlDocument;
import blanco.xml.bind.valueobject.BlancoXmlElement;

/**
 * �u�����O���[�v��`���vExcel�l�����當���O���[�v����������N���X�E�\�[�X�R�[�h�𐶐��B
 * 
 * ���̃N���X�́A����XML�t�@�C������\�[�X�R�[�h��������������@�\��S���܂��B
 * 
 * @author IGA Tosiki
 */
public class BlancoCharacterGroupXml2SourceFile {
    /**
     * ���b�Z�[�W�B
     */
    private final BlancoCharacterGroupMessage fMsg = new BlancoCharacterGroupMessage();

    /**
     * ���̃v���_�N�g�̃��\�[�X�o���h���ւ̃A�N�Z�X�I�u�W�F�N�g�B
     */
    private final BlancoCharacterGroupResourceBundle fBundle = new BlancoCharacterGroupResourceBundle();

    /**
     * �o�͑ΏۂƂȂ�v���O���~���O����B
     */
    private int fTargetLang = BlancoCgSupportedLang.NOT_DEFINED;

    /**
     * �����I�ɗ��p����blancoCg�p�t�@�N�g���B
     */
    private BlancoCgObjectFactory fCgFactory = null;

    /**
     * �����I�ɗ��p����blancoCg�p�\�[�X�t�@�C�����B
     */
    private BlancoCgSourceFile fCgSourceFile = null;

    /**
     * �����I�ɗ��p����blancoCg�p�N���X���B
     */
    private BlancoCgClass fCgClass = null;

    /**
     * ������������\�[�X�t�@�C���̕����G���R�[�f�B���O�B
     */
    private String fEncoding = null;

    public void setEncoding(final String argEncoding) {
        fEncoding = argEncoding;
    }

    /**
     * ����XML�t�@�C������\�[�X�R�[�h�������������܂��B
     * 
     * @param argMetaXmlSourceFile
     *            ���^��񂪊܂܂�Ă���XML�t�@�C���B
     * @param argDirectoryTarget
     *            �\�[�X�R�[�h������f�B���N�g�� (/main�������������w�肵�܂�)�B
     * @throws IOException
     *             ���o�͗�O�����������ꍇ�B
     */
    public void process(final File argMetaXmlSourceFile,
            final String argTargetLang, final File argDirectoryTarget)
            throws IOException {

        fTargetLang = new BlancoCgSupportedLang().convertToInt(argTargetLang);
        switch (fTargetLang) {
        case BlancoCgSupportedLang.JAVA:
        case BlancoCgSupportedLang.CS:
        case BlancoCgSupportedLang.JS:
        case BlancoCgSupportedLang.VB:
        case BlancoCgSupportedLang.PHP:
        case BlancoCgSupportedLang.RUBY:
        case BlancoCgSupportedLang.PYTHON:
        case BlancoCgSupportedLang.DELPHI:
            break;
        default:
            throw new IllegalArgumentException(fMsg.getMbchgi02(argTargetLang));
        }

        // ���^������͂��ăo�����[�I�u�W�F�N�g�̃c���[���擾���܂��B
        final BlancoXmlDocument documentMeta = new BlancoXmlUnmarshaller()
                .unmarshal(argMetaXmlSourceFile);

        // ���[�g�G�������g���擾���܂��B
        final BlancoXmlElement elementRoot = BlancoXmlBindingUtil
                .getDocumentElement(documentMeta);
        if (elementRoot == null) {
            // ���[�g�G�������g�������ꍇ�ɂ͏������f���܂��B
            return;
        }

        final BlancoCharacterGroupStructure[] structures = new BlancoCharacterGroupXmlParser()
                .parse(argMetaXmlSourceFile);

        for (int index = 0; index < structures.length; index++) {
            // ���^���̉�͌��ʂ����ƂɃ\�[�X�R�[�h�������������s���܂��B
            structure2Source(structures[index], argDirectoryTarget);
        }
    }

    /**
     * ���W���ꂽ�������ɁA�\�[�X�R�[�h�������������܂��B
     * 
     * @param argProcessStructure
     *            ���^�t�@�C��������W�ł��������\���f�[�^�B
     * @param argDirectoryTarget
     *            �\�[�X�R�[�h�̏o�͐�t�H���_�B
     */
    public void structure2Source(
            final BlancoCharacterGroupStructure argProcessStructure,
            final File argDirectoryTarget) {

        // �]���ƌ݊������������邽�߁A/main�T�u�t�H���_�ɏo�͂��܂��B
        final File fileBlancoMain = new File(argDirectoryTarget
                .getAbsolutePath()
                + "/main");

        fCgFactory = BlancoCgObjectFactory.getInstance();
        fCgSourceFile = fCgFactory.createSourceFile(argProcessStructure
                .getPackage(), "���̃\�[�X�R�[�h�� blanco Framework�ɂ���Ď�����������Ă��܂��B");
        fCgSourceFile.setEncoding(fEncoding);
        switch (fTargetLang) {
        case BlancoCgSupportedLang.DELPHI:
            // Delphi����ł́AUnit���Ƃ̖��O�Փ˂�����邽�߁A����ɏ]���N���X���ɋ����I��T�����܂��B
            fCgSourceFile.setName(argProcessStructure.getName()
                    + BlancoStringUtil.null2Blank(argProcessStructure
                            .getSuffix()));
            fCgClass = fCgFactory.createClass("T"
                    + argProcessStructure.getName()
                    + BlancoStringUtil.null2Blank(argProcessStructure
                            .getSuffix()), BlancoStringUtil
                    .null2Blank(argProcessStructure.getDescription()));
            break;
        default:
            fCgClass = fCgFactory.createClass(argProcessStructure.getName()
                    + BlancoStringUtil.null2Blank(argProcessStructure
                            .getSuffix()), BlancoStringUtil
                    .null2Blank(argProcessStructure.getDescription()));
            break;
        }
        fCgSourceFile.getClassList().add(fCgClass);

        switch (fTargetLang) {
        case BlancoCgSupportedLang.PYTHON:
            expandMethodInit(argProcessStructure);
            break;
        }
        expandMethodMatch(argProcessStructure);
        expandMethodMatchAll(argProcessStructure);
        expandMethodMatchAny(argProcessStructure);

        BlancoCgTransformerFactory.getSourceTransformer(fTargetLang).transform(
                fCgSourceFile, fileBlancoMain);
    }

    private void expandMethodInit(
            BlancoCharacterGroupStructure argProcessStructure) {
        final BlancoCgMethod cgMethod = fCgFactory.createMethod(
                getMethodName("__init__"), "�N���X���������\�b�h");
        fCgClass.getMethodList().add(cgMethod);
        cgMethod.getParameterList().add(
                fCgFactory.createParameter("encoding='cp932'", getTypeChar(),
                        "�G���R�[�f�B���O�B�f�t�H���g��'cp932'"));

        final List<java.lang.String> lineList = cgMethod.getLineList();
        lineList.add("self.encoding = encoding");
    }

    /**
     * match���\�b�h��W�J���܂��B
     * 
     * @param argProcessStructure
     *            ���^�t�@�C��������W�ł��������\���f�[�^�B
     */
    private void expandMethodMatch(
            final BlancoCharacterGroupStructure argProcessStructure) {

        final BlancoCgMethod cgMethod = fCgFactory.createMethod(
                getMethodName("match"), "�����O���[�v�Ɋ܂܂�镶���ł��邩�ǂ����𔻒肵�܂��B");
        fCgClass.getMethodList().add(cgMethod);
        cgMethod.getParameterList().add(
                fCgFactory.createParameter("argCheck", getTypeChar(),
                        "�`�F�b�N���s�����������B"));
        cgMethod.setReturn(fCgFactory.createReturn(getTypeBoolean(),
                "�����O���[�v�Ɋ܂܂�Ă����ture�B�O���[�v�Ɋ܂܂�Ȃ������ł����false�B"));

        final List<java.lang.String> lineList = cgMethod.getLineList();

        switch (fTargetLang) {
        case BlancoCgSupportedLang.PYTHON:
            lineList.add("argCheckUnicode = unicode(argCheck, self.encoding)");
            break;
        }

        for (int indexField = 0; indexField < argProcessStructure
                .getFieldList().size(); indexField++) {
            final BlancoCharacterGroupFieldStructure fieldLook = (BlancoCharacterGroupFieldStructure) argProcessStructure
                    .getFieldList().get(indexField);

            // ��������ʂ̕����ɑ΂��鏈�����L�q���܂��B
            if (fieldLook.getNo() != null) {
                lineList.add(BlancoCgLineUtil
                        .getSingleLineCommentPrefix(fTargetLang)
                        + fBundle.getXml2sourceFileFieldNo(fieldLook.getNo()));
            }
            if (fieldLook.getDescription() != null) {
                lineList.add(BlancoCgLineUtil
                        .getSingleLineCommentPrefix(fTargetLang)
                        + fBundle.getXml2sourceFileDescription(fieldLook
                                .getDescription()));
            }

            // �R�[�h�̃_���v���o�͂��܂��B
            try {
                lineList
                        .add(BlancoCgLineUtil
                                .getSingleLineCommentPrefix(fTargetLang)
                                + fBundle
                                        .getXml2sourceFileDumpEncodingMsg(
                                                BlancoStringUtil
                                                        .toHexString(fieldLook
                                                                .getValue()
                                                                .getBytes(
                                                                        fBundle
                                                                                .getXml2sourceFileDumpEncoding())),
                                                fBundle
                                                        .getXml2sourceFileDumpEncoding()));
                lineList
                        .add(BlancoCgLineUtil
                                .getSingleLineCommentPrefix(fTargetLang)
                                + fBundle
                                        .getXml2sourceFileDumpUtf16beMsg(BlancoStringUtil
                                                .toHexString(fieldLook
                                                        .getValue().getBytes(
                                                                "UTF-16BE"))));
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

            String compareValue = null;

            switch (fTargetLang) {
            case BlancoCgSupportedLang.JAVA:
            case BlancoCgSupportedLang.CS:
            case BlancoCgSupportedLang.JS:
            case BlancoCgSupportedLang.PHP:
            case BlancoCgSupportedLang.RUBY:
            case BlancoCgSupportedLang.PYTHON:
                String escapedValue = "";
                if (fieldLook.getValue().equals("'")) {
                    escapedValue = "\\'";
                } else {
                    escapedValue = BlancoCgSourceUtil.escapeStringAsSource(
                            fTargetLang, fieldLook.getValue());
                }
                compareValue = "'" + escapedValue + "'";
                break;
            case BlancoCgSupportedLang.VB:
                if (fieldLook.getValue().equals("\\")) {
                    // �o�b�N�X���b�V���������ʂɏ����B
                    compareValue = "\"\\\"c";
                } else {
                    compareValue = "\""
                            + BlancoCgSourceUtil.escapeStringAsSource(
                                    fTargetLang, fieldLook.getValue()) + "\"c";
                }
                break;
            case BlancoCgSupportedLang.DELPHI:
                String escapedValueDelphi = "";
                if (fieldLook.getValue().equals("'")) {
                    escapedValueDelphi = "''";
                } else {
                    escapedValueDelphi = BlancoCgSourceUtil
                            .escapeStringAsSource(fTargetLang, fieldLook
                                    .getValue());
                }
                compareValue = "'" + escapedValueDelphi + "'";
                break;
            }

            switch (fTargetLang) {
            case BlancoCgSupportedLang.JAVA:
            case BlancoCgSupportedLang.CS:
            case BlancoCgSupportedLang.JS:
            case BlancoCgSupportedLang.RUBY:
                lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang,
                        "argCheck == " + compareValue));
                break;
            case BlancoCgSupportedLang.VB:
            case BlancoCgSupportedLang.DELPHI:
                lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang,
                        "argCheck = " + compareValue));
                break;
            case BlancoCgSupportedLang.PHP:
                lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang,
                        "$argCheck === " + compareValue));
                break;
            case BlancoCgSupportedLang.PYTHON:
                lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang,
                        "argCheckUnicode == u" + compareValue));
                break;
            }

            switch (fTargetLang) {
            case BlancoCgSupportedLang.PYTHON:
                lineList.add(BlancoCgLineUtil.getReturn(fTargetLang, "True")
                        + BlancoCgLineUtil.getTerminator(fTargetLang));
                break;
            case BlancoCgSupportedLang.DELPHI:
                lineList.add("result := true"
                        + BlancoCgLineUtil.getTerminator(fTargetLang));
                lineList.add("exit"
                        + BlancoCgLineUtil.getTerminator(fTargetLang));
                break;
            default:
                lineList.add(BlancoCgLineUtil.getReturn(fTargetLang, "true")
                        + BlancoCgLineUtil.getTerminator(fTargetLang));
                break;
            }

            lineList.add(BlancoCgLineUtil.getIfEnd(fTargetLang));
        }

        switch (fTargetLang) {
        case BlancoCgSupportedLang.PYTHON:
            lineList.add(BlancoCgLineUtil.getReturn(fTargetLang, "False")
                    + BlancoCgLineUtil.getTerminator(fTargetLang));
            break;
        case BlancoCgSupportedLang.DELPHI:
            lineList.add("result := false"
                    + BlancoCgLineUtil.getTerminator(fTargetLang));
            lineList.add("exit" + BlancoCgLineUtil.getTerminator(fTargetLang));
            break;
        default:
            lineList.add(BlancoCgLineUtil.getReturn(fTargetLang, "false"
                    + BlancoCgLineUtil.getTerminator(fTargetLang)));
            break;
        }

    }

    /**
     * matchAll���\�b�h��W�J���܂��B
     * 
     * @param argProcessStructure
     *            ���^�t�@�C��������W�ł��������\���f�[�^�B
     */
    private void expandMethodMatchAll(
            final BlancoCharacterGroupStructure argProcessStructure) {

        final BlancoCgMethod cgMethod = fCgFactory.createMethod(
                getMethodName("matchAll"),
                "�^����ꂽ�����񂪁A�S�ĕ����O���[�v�Ɋ܂܂�镶���ł��邩�ǂ����𔻒肵�܂��B");
        fCgClass.getMethodList().add(cgMethod);
        cgMethod.getParameterList().add(
                fCgFactory.createParameter("argCheck", getTypeString(),
                        "�`�F�b�N���s������������B", true));
        cgMethod.setReturn(fCgFactory.createReturn(getTypeBoolean(),
                "�S�Ă̕����������O���[�v�Ɋ܂܂�Ă����ture�B�O���[�v�Ɋ܂܂�Ȃ��������܂܂�Ă����false�B"));

        final List<java.lang.String> lineList = cgMethod.getLineList();

        switch (fTargetLang) {
        case BlancoCgSupportedLang.JAVA:
        case BlancoCgSupportedLang.CS:
            lineList.add("char[] arrayArg = argCheck."
                    + getMethodName("toCharArray") + "();");
            lineList.add("int arraySize = arrayArg." + getMethodName("length")
                    + ";");
            lineList.add(BlancoCgLineUtil.getForBeginJava(fTargetLang,
                    "int index = 0", "index < arraySize", "index++"));
            lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang,
                    getMethodName("match") + "(arrayArg[index]) == false"));
            break;
        case BlancoCgSupportedLang.JS:
            lineList.add("var arraySize = argCheck.length;");
            lineList.add(BlancoCgLineUtil.getForBeginJava(fTargetLang,
                    "index = 0", "index < arraySize", "index++"));
            lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang,
                    "this.match(argCheck.charAt(index)) === false"));
            break;
        case BlancoCgSupportedLang.VB:
            lineList.add("Dim arrayArg As Char() = argCheck."
                    + getMethodName("toCharArray") + "()");
            lineList.add("Dim arraySize As Integer= arrayArg."
                    + getMethodName("Length"));
            lineList.add(BlancoCgLineUtil.getForBeginVb(fTargetLang,
                    "index As Integer = 0", "arraySize - 1"));
            lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang,
                    getMethodName("match") + "(arrayArg(index)) = False"));
            break;
        case BlancoCgSupportedLang.PHP:
            fCgSourceFile.getImportList().add("mbstring.mb_strlen");
            lineList.add("$arraySize = mb_strlen($argCheck);");
            lineList.add(BlancoCgLineUtil.getForBeginJava(fTargetLang,
                    "$index = 0", "$index < $arraySize", "$index++"));
            lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang,
                    "$this->match(mb_substr($argCheck, $index, 1)) === false"));
            break;
        case BlancoCgSupportedLang.RUBY:
            lineList.add("argArray = argCheck." + getMethodName("scan")
                    + "(/./)");
            lineList.add(BlancoCgLineUtil.getEachBeginRuby(fTargetLang,
                    "argArray", "arg"));
            lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang,
                    getMethodName("match") + "(arg) == false"));
            break;
        case BlancoCgSupportedLang.PYTHON:
            lineList.add("argCheckUnicode = unicode(argCheck, self.encoding)");
            lineList.add(BlancoCgLineUtil.getForBeginPython(fTargetLang, "arg",
                    "argCheckUnicode"));
            lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang, "self."
                    + getMethodName("match")
                    + "(arg.encode(self.encoding)) == False"));
            break;
        case BlancoCgSupportedLang.DELPHI:
            cgMethod.getLocalVariableList().add(
                    fCgFactory
                            .createLocalVariable("argCheckWide", "WideString"));
            lineList.add("argCheckWide := WideString(argCheck);");
            cgMethod.getLocalVariableList().add(
                    fCgFactory
                            .createLocalVariable("index", "integer"));
            lineList.add("index := 1;");
            lineList.add(BlancoCgLineUtil.getWhileBeginDelphi(fTargetLang,
                    "index <= length(argCheckWide)"));
            lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang,
                    getMethodName("match") + "(argCheckWide[index]) = false"));
            break;
        default:
            break;
        }

        switch (fTargetLang) {
        case BlancoCgSupportedLang.PYTHON:
            lineList.add(BlancoCgLineUtil.getReturn(fTargetLang, "False"
                    + BlancoCgLineUtil.getTerminator(fTargetLang)));
            break;
        case BlancoCgSupportedLang.DELPHI:
            lineList.add("result := false"
                    + BlancoCgLineUtil.getTerminator(fTargetLang));
            lineList.add("exit"
                    + BlancoCgLineUtil.getTerminator(fTargetLang));
            break;
        default:
            lineList.add(BlancoCgLineUtil.getReturn(fTargetLang, "false"
                    + BlancoCgLineUtil.getTerminator(fTargetLang)));
            break;
        }
        lineList.add(BlancoCgLineUtil.getIfEnd(fTargetLang));

        switch (fTargetLang) {
        case BlancoCgSupportedLang.RUBY:
            lineList.add(BlancoCgLineUtil.getEachEnd(fTargetLang));
            break;
        case BlancoCgSupportedLang.DELPHI:
            lineList.add("index := index + 1;");
            lineList.add(BlancoCgLineUtil.getForEnd(fTargetLang));
            break;
        default:
            lineList.add(BlancoCgLineUtil.getForEnd(fTargetLang));
            break;
        }

        switch (fTargetLang) {
        case BlancoCgSupportedLang.PYTHON:
            lineList.add(BlancoCgLineUtil.getReturn(fTargetLang, "True"
                    + BlancoCgLineUtil.getTerminator(fTargetLang)));
            break;
        case BlancoCgSupportedLang.DELPHI:
            lineList.add("result := true"
                    + BlancoCgLineUtil.getTerminator(fTargetLang));
            lineList.add("exit"
                    + BlancoCgLineUtil.getTerminator(fTargetLang));
            break;
        default:
            lineList.add(BlancoCgLineUtil.getReturn(fTargetLang, "true"
                    + BlancoCgLineUtil.getTerminator(fTargetLang)));
            break;
        }
    }

    /**
     * matchAny���\�b�h��W�J���܂��B
     * 
     * @param argProcessStructure
     *            ���^�t�@�C��������W�ł��������\���f�[�^�B
     */
    private void expandMethodMatchAny(
            final BlancoCharacterGroupStructure argProcessStructure) {

        final BlancoCgMethod cgMethod = fCgFactory.createMethod(
                getMethodName("matchAny"),
                "�^����ꂽ�����񂪁A�����O���[�v�Ɋ܂܂�镶�����ЂƂł��܂�ł��邩�ǂ����𔻒肵�܂��B");
        fCgClass.getMethodList().add(cgMethod);
        cgMethod.getParameterList().add(
                fCgFactory.createParameter("argCheck", getTypeString(),
                        "�`�F�b�N���s������������B", true));
        cgMethod
                .setReturn(fCgFactory
                        .createReturn(getTypeBoolean(),
                                "�����O���[�v�Ɋ܂܂�Ă��镶�����ЂƂł��܂�ł����ture�B�O���[�v�Ɋ܂܂�镶�����ЂƂ��܂܂Ȃ��ꍇ��false�B"));

        final List<java.lang.String> lineList = cgMethod.getLineList();

        switch (fTargetLang) {
        case BlancoCgSupportedLang.JAVA:
        case BlancoCgSupportedLang.CS:
            lineList.add("char[] arrayArg = argCheck."
                    + getMethodName("toCharArray") + "();");
            lineList.add("int arraySize = arrayArg." + getMethodName("length")
                    + ";");
            lineList.add(BlancoCgLineUtil.getForBeginJava(fTargetLang,
                    "int index = 0", "index < arraySize", "index++"));
            lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang,
                    getMethodName("match") + "(arrayArg[index])"));
            break;
        case BlancoCgSupportedLang.JS:
            lineList.add("var arraySize = argCheck.length;");
            lineList.add(BlancoCgLineUtil.getForBeginJava(fTargetLang,
                    "index = 0", "index < arraySize", "index++"));
            lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang,
                    "this.match(argCheck.charAt(index))"));
            break;
        case BlancoCgSupportedLang.VB:
            lineList.add("Dim arrayArg As Char() = argCheck."
                    + getMethodName("toCharArray") + "()");
            lineList.add("Dim arraySize As Integer= arrayArg."
                    + getMethodName("Length"));
            lineList.add(BlancoCgLineUtil.getForBeginVb(fTargetLang,
                    "index As Integer = 0", "arraySize - 1"));
            lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang,
                    "Match(arrayArg(index))"));
            break;
        case BlancoCgSupportedLang.PHP:
            lineList.add("$arraySize = mb_strlen($argCheck);");
            lineList.add(BlancoCgLineUtil.getForBeginJava(fTargetLang,
                    "$index = 0", "$index < $arraySize", "$index++"));
            lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang,
                    "$this->match(mb_substr($argCheck, $index, 1))"));
            break;
        case BlancoCgSupportedLang.RUBY:
            lineList.add("argArray = argCheck.scan(/./)");
            lineList.add(BlancoCgLineUtil.getEachBeginRuby(fTargetLang,
                    "argArray", "arg"));
            lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang,
                    getMethodName("match") + "(arg)"));
            break;
        case BlancoCgSupportedLang.PYTHON:
            lineList.add("argCheckUnicode = unicode(argCheck, self.encoding)");
            lineList.add(BlancoCgLineUtil.getForBeginPython(fTargetLang, "arg",
                    "argCheckUnicode"));
            lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang, "self."
                    + getMethodName("match") + "(arg.encode(self.encoding))"));
            break;
        case BlancoCgSupportedLang.DELPHI:
            cgMethod.getLocalVariableList().add(
                    fCgFactory
                            .createLocalVariable("argCheckWide", "WideString"));
            lineList.add("argCheckWide := WideString(argCheck);");
            cgMethod.getLocalVariableList().add(
                    fCgFactory
                            .createLocalVariable("index", "integer"));
            lineList.add("index := 1;");
            lineList.add(BlancoCgLineUtil.getWhileBeginDelphi(fTargetLang,
                    "index <= length(argCheckWide)"));
            lineList.add(BlancoCgLineUtil.getIfBegin(fTargetLang,
                    getMethodName("match") + "(argCheckWide[index])"));
            break;
        default:
            break;
        }

        switch (fTargetLang) {
        case BlancoCgSupportedLang.PYTHON:
            lineList.add(BlancoCgLineUtil.getReturn(fTargetLang, "True"
                    + BlancoCgLineUtil.getTerminator(fTargetLang)));
            break;
        case BlancoCgSupportedLang.DELPHI:
            lineList.add("result := true"
                    + BlancoCgLineUtil.getTerminator(fTargetLang));
            lineList.add("exit"
                    + BlancoCgLineUtil.getTerminator(fTargetLang));
            break;
        default:
            lineList.add(BlancoCgLineUtil.getReturn(fTargetLang, "true"
                    + BlancoCgLineUtil.getTerminator(fTargetLang)));
            break;
        }
        lineList.add(BlancoCgLineUtil.getIfEnd(fTargetLang));

        switch (fTargetLang) {
        case BlancoCgSupportedLang.RUBY:
            lineList.add(BlancoCgLineUtil.getEachEnd(fTargetLang));
            break;
        case BlancoCgSupportedLang.DELPHI:
            lineList.add("index := index + 1;");
            lineList.add(BlancoCgLineUtil.getForEnd(fTargetLang));
            break;
        default:
            lineList.add(BlancoCgLineUtil.getForEnd(fTargetLang));
            break;
        }

        switch (fTargetLang) {
        case BlancoCgSupportedLang.PYTHON:
            lineList.add(BlancoCgLineUtil.getReturn(fTargetLang, "False"
                    + BlancoCgLineUtil.getTerminator(fTargetLang)));
            break;
        case BlancoCgSupportedLang.DELPHI:
            lineList.add("result := false"
                    + BlancoCgLineUtil.getTerminator(fTargetLang));
            lineList.add("exit"
                    + BlancoCgLineUtil.getTerminator(fTargetLang));
            break;
        default:
            lineList.add(BlancoCgLineUtil.getReturn(fTargetLang, "false"
                    + BlancoCgLineUtil.getTerminator(fTargetLang)));
            break;
        }
    }

    /**
     * �v���O���~���O���ꏈ���n�ɍ����� boolean �^�̖��̂��擾���܂��B
     * 
     * �^�̓ǂݑւ��B
     * 
     * @return
     */
    private final String getTypeBoolean() {
        switch (fTargetLang) {
        case BlancoCgSupportedLang.JAVA:
        default:
            return "boolean";
        case BlancoCgSupportedLang.CS:
            return "bool";
        case BlancoCgSupportedLang.JS:
            return "boolean";
        case BlancoCgSupportedLang.VB:
        case BlancoCgSupportedLang.DELPHI:
            return "Boolean";
        case BlancoCgSupportedLang.PHP:
            return "boolean";
        }
    }

    /**
     * �v���O���~���O���ꏈ���n�ɍ����� String �^�̖��̂��擾���܂��B
     * 
     * �^�̓ǂݑւ��B
     * 
     * @return
     */
    private final String getTypeString() {
        switch (fTargetLang) {
        case BlancoCgSupportedLang.JAVA:
        default:
            return "java.lang.String";
        case BlancoCgSupportedLang.CS:
            return "string";
        case BlancoCgSupportedLang.JS:
            return "string";
        case BlancoCgSupportedLang.VB:
        case BlancoCgSupportedLang.DELPHI:
            return "String";
        case BlancoCgSupportedLang.PHP:
            return "string";
        }
    }

    /**
     * �v���O���~���O���ꏈ���n�ɍ����� char �^�̖��̂��擾���܂��B
     * 
     * �^�̓ǂݑւ��B
     * 
     * @return
     */
    private final String getTypeChar() {
        switch (fTargetLang) {
        case BlancoCgSupportedLang.JAVA:
        default:
            return "char";
        case BlancoCgSupportedLang.CS:
            return "char";
        case BlancoCgSupportedLang.JS:
            return "string";
        case BlancoCgSupportedLang.VB:
            return "Char";
        case BlancoCgSupportedLang.DELPHI:
            return "WideChar";
        case BlancoCgSupportedLang.PHP:
            return "string";
        }
    }

    /**
     * �v���O���~���O���ꏈ���n�ɍ����� ���\�b�h�̖��O�ό`�������Ȃ��܂��B
     * 
     * ���\�b�h���̓ǂݑւ��B
     * 
     * @return
     */
    private final String getMethodName(final String argMethodName) {
        switch (fTargetLang) {
        case BlancoCgSupportedLang.JAVA:
        default:
            return argMethodName;
        case BlancoCgSupportedLang.CS:
        case BlancoCgSupportedLang.VB:
            return BlancoNameAdjuster.toUpperCaseTitle(argMethodName);
        case BlancoCgSupportedLang.JS:
            return argMethodName;
        case BlancoCgSupportedLang.PHP:
            return argMethodName;
        }
    }
}

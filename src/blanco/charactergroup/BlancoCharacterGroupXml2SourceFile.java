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
 * 「文字グループ定義書」Excel様式から文字グループを処理するクラス・ソースコードを生成。
 * 
 * このクラスは、中間XMLファイルからソースコードを自動生成する機能を担います。
 * 
 * @author IGA Tosiki
 */
public class BlancoCharacterGroupXml2SourceFile {
    /**
     * メッセージ。
     */
    private final BlancoCharacterGroupMessage fMsg = new BlancoCharacterGroupMessage();

    /**
     * このプロダクトのリソースバンドルへのアクセスオブジェクト。
     */
    private final BlancoCharacterGroupResourceBundle fBundle = new BlancoCharacterGroupResourceBundle();

    /**
     * 出力対象となるプログラミング言語。
     */
    private int fTargetLang = BlancoCgSupportedLang.NOT_DEFINED;

    /**
     * 内部的に利用するblancoCg用ファクトリ。
     */
    private BlancoCgObjectFactory fCgFactory = null;

    /**
     * 内部的に利用するblancoCg用ソースファイル情報。
     */
    private BlancoCgSourceFile fCgSourceFile = null;

    /**
     * 内部的に利用するblancoCg用クラス情報。
     */
    private BlancoCgClass fCgClass = null;

    /**
     * 自動生成するソースファイルの文字エンコーディング。
     */
    private String fEncoding = null;

    public void setEncoding(final String argEncoding) {
        fEncoding = argEncoding;
    }

    /**
     * 中間XMLファイルからソースコードを自動生成します。
     * 
     * @param argMetaXmlSourceFile
     *            メタ情報が含まれているXMLファイル。
     * @param argDirectoryTarget
     *            ソースコード生成先ディレクトリ (/mainを除く部分を指定します)。
     * @throws IOException
     *             入出力例外が発生した場合。
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

        // メタ情報を解析してバリューオブジェクトのツリーを取得します。
        final BlancoXmlDocument documentMeta = new BlancoXmlUnmarshaller()
                .unmarshal(argMetaXmlSourceFile);

        // ルートエレメントを取得します。
        final BlancoXmlElement elementRoot = BlancoXmlBindingUtil
                .getDocumentElement(documentMeta);
        if (elementRoot == null) {
            // ルートエレメントが無い場合には処理中断します。
            return;
        }

        final BlancoCharacterGroupStructure[] structures = new BlancoCharacterGroupXmlParser()
                .parse(argMetaXmlSourceFile);

        for (int index = 0; index < structures.length; index++) {
            // メタ情報の解析結果をもとにソースコード自動生成を実行します。
            structure2Source(structures[index], argDirectoryTarget);
        }
    }

    /**
     * 収集された情報を元に、ソースコードを自動生成します。
     * 
     * @param argProcessStructure
     *            メタファイルから収集できた処理構造データ。
     * @param argDirectoryTarget
     *            ソースコードの出力先フォルダ。
     */
    public void structure2Source(
            final BlancoCharacterGroupStructure argProcessStructure,
            final File argDirectoryTarget) {

        // 従来と互換性を持たせるため、/mainサブフォルダに出力します。
        final File fileBlancoMain = new File(argDirectoryTarget
                .getAbsolutePath()
                + "/main");

        fCgFactory = BlancoCgObjectFactory.getInstance();
        fCgSourceFile = fCgFactory.createSourceFile(argProcessStructure
                .getPackage(), "このソースコードは blanco Frameworkによって自動生成されています。");
        fCgSourceFile.setEncoding(fEncoding);
        switch (fTargetLang) {
        case BlancoCgSupportedLang.DELPHI:
            // Delphi言語では、Unit名との名前衝突を避けるため、慣例に従いクラス名に強制的にTをつけます。
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
                getMethodName("__init__"), "クラス初期化メソッド");
        fCgClass.getMethodList().add(cgMethod);
        cgMethod.getParameterList().add(
                fCgFactory.createParameter("encoding='cp932'", getTypeChar(),
                        "エンコーディング。デフォルトは'cp932'"));

        final List<java.lang.String> lineList = cgMethod.getLineList();
        lineList.add("self.encoding = encoding");
    }

    /**
     * matchメソッドを展開します。
     * 
     * @param argProcessStructure
     *            メタファイルから収集できた処理構造データ。
     */
    private void expandMethodMatch(
            final BlancoCharacterGroupStructure argProcessStructure) {

        final BlancoCgMethod cgMethod = fCgFactory.createMethod(
                getMethodName("match"), "文字グループに含まれる文字であるかどうかを判定します。");
        fCgClass.getMethodList().add(cgMethod);
        cgMethod.getParameterList().add(
                fCgFactory.createParameter("argCheck", getTypeChar(),
                        "チェックを行いたい文字。"));
        cgMethod.setReturn(fCgFactory.createReturn(getTypeBoolean(),
                "文字グループに含まれていればture。グループに含まれない文字であればfalse。"));

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

            // ここから個別の文字に対する処理を記述します。
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

            // コードのダンプを出力します。
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
                    // バックスラッシュだけ特別に処理。
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
     * matchAllメソッドを展開します。
     * 
     * @param argProcessStructure
     *            メタファイルから収集できた処理構造データ。
     */
    private void expandMethodMatchAll(
            final BlancoCharacterGroupStructure argProcessStructure) {

        final BlancoCgMethod cgMethod = fCgFactory.createMethod(
                getMethodName("matchAll"),
                "与えられた文字列が、全て文字グループに含まれる文字であるかどうかを判定します。");
        fCgClass.getMethodList().add(cgMethod);
        cgMethod.getParameterList().add(
                fCgFactory.createParameter("argCheck", getTypeString(),
                        "チェックを行いたい文字列。", true));
        cgMethod.setReturn(fCgFactory.createReturn(getTypeBoolean(),
                "全ての文字が文字グループに含まれていればture。グループに含まれない文字が含まれていればfalse。"));

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
     * matchAnyメソッドを展開します。
     * 
     * @param argProcessStructure
     *            メタファイルから収集できた処理構造データ。
     */
    private void expandMethodMatchAny(
            final BlancoCharacterGroupStructure argProcessStructure) {

        final BlancoCgMethod cgMethod = fCgFactory.createMethod(
                getMethodName("matchAny"),
                "与えられた文字列が、文字グループに含まれる文字をひとつでも含んでいるかどうかを判定します。");
        fCgClass.getMethodList().add(cgMethod);
        cgMethod.getParameterList().add(
                fCgFactory.createParameter("argCheck", getTypeString(),
                        "チェックを行いたい文字列。", true));
        cgMethod
                .setReturn(fCgFactory
                        .createReturn(getTypeBoolean(),
                                "文字グループに含まれている文字をひとつでも含んでいればture。グループに含まれる文字をひとつも含まない場合はfalse。"));

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
     * プログラミング言語処理系に合った boolean 型の名称を取得します。
     * 
     * 型の読み替え。
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
     * プログラミング言語処理系に合った String 型の名称を取得します。
     * 
     * 型の読み替え。
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
     * プログラミング言語処理系に合った char 型の名称を取得します。
     * 
     * 型の読み替え。
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
     * プログラミング言語処理系に合った メソッドの名前変形をおこないます。
     * 
     * メソッド名の読み替え。
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

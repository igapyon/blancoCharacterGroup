/*
 * blanco Framework
 * Copyright (C) 2004-2007 IGA Tosiki
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 */
package blanco.charactergroup;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import blanco.charactergroup.message.BlancoCharacterGroupMessage;
import blanco.charactergroup.valueobject.BlancoCharacterGroupFieldStructure;
import blanco.charactergroup.valueobject.BlancoCharacterGroupStructure;
import blanco.commons.util.BlancoStringUtil;
import blanco.xml.bind.BlancoXmlBindingUtil;
import blanco.xml.bind.BlancoXmlUnmarshaller;
import blanco.xml.bind.valueobject.BlancoXmlDocument;
import blanco.xml.bind.valueobject.BlancoXmlElement;

/**
 * blancoValueObject�� ����XML�t�@�C���`�����p�[�X(�ǂݏ���)����N���X�B
 * 
 * @author IGA Tosiki
 */
public class BlancoCharacterGroupXmlParser {
    /**
     * ���b�Z�[�W�B
     */
    private final BlancoCharacterGroupMessage fMsg = new BlancoCharacterGroupMessage();

    /**
     * ����XML�t�@�C����XML�h�L�������g���p�[�X���āA�o�����[�I�u�W�F�N�g���̔z����擾���܂��B
     * 
     * @param argMetaXmlSourceFile
     *            ����XML�t�@�C���B
     * @return �p�[�X�̌��ʓ���ꂽ�o�����[�I�u�W�F�N�g���̔z��B
     */
    public BlancoCharacterGroupStructure[] parse(final File argMetaXmlSourceFile) {
        final BlancoXmlDocument documentMeta = new BlancoXmlUnmarshaller()
                .unmarshal(argMetaXmlSourceFile);
        if (documentMeta == null) {
            return null;
        }

        return parse(documentMeta);

    }

    /**
     * ����XML�t�@�C���`����XML�h�L�������g���p�[�X���āA�o�����[�I�u�W�F�N�g���̔z����擾���܂��B
     * 
     * @param argXmlDocument
     *            ����XML�t�@�C����XML�h�L�������g�B
     * @return �p�[�X�̌��ʓ���ꂽ�o�����[�I�u�W�F�N�g���̔z��B
     */
    public BlancoCharacterGroupStructure[] parse(
            final BlancoXmlDocument argXmlDocument) {
        final List<BlancoCharacterGroupStructure> listStructure = new ArrayList<BlancoCharacterGroupStructure>();

        // ���[�g�G�������g���擾���܂��B
        final BlancoXmlElement elementRoot = BlancoXmlBindingUtil
                .getDocumentElement(argXmlDocument);
        if (elementRoot == null) {
            // ���[�g�G�������g�������ꍇ�ɂ͏������f���܂��B
            return null;
        }

        // sheet(Excel�V�[�g)�̃��X�g���擾���܂��B
        final List<BlancoXmlElement> listSheet = BlancoXmlBindingUtil
                .getElementsByTagName(elementRoot, "sheet");

        for (int index = 0; index < listSheet.size(); index++) {
            final BlancoXmlElement elementSheet = listSheet.get(index);

            final BlancoCharacterGroupStructure objClassStructure = parseElementSheet(elementSheet);
            if (objClassStructure != null) {
                // ����ꂽ�����L�����܂��B
                listStructure.add(objClassStructure);
            }
        }

        final BlancoCharacterGroupStructure[] result = new BlancoCharacterGroupStructure[listStructure
                .size()];
        listStructure.toArray(result);
        return result;
    }

    /**
     * ����XML�t�@�C���`���́usheet�vXML�G�������g���p�[�X���āA�o�����[�I�u�W�F�N�g�����擾���܂��B
     * 
     * @param argElementSheet
     *            ����XML�t�@�C���́usheet�vXML�G�������g�B
     * @return �p�[�X�̌��ʓ���ꂽ�o�����[�I�u�W�F�N�g���B�uname�v��������Ȃ������ꍇ�ɂ� null��߂��܂��B
     */
    public BlancoCharacterGroupStructure parseElementSheet(
            final BlancoXmlElement argElementSheet) {
        final BlancoCharacterGroupStructure classStructure = new BlancoCharacterGroupStructure();
        final List<BlancoXmlElement> listCommon = BlancoXmlBindingUtil
                .getElementsByTagName(argElementSheet,
                        "blancocharactergroup-common");
        if (listCommon == null || listCommon.size() == 0) {
            // common�������ꍇ�ɂ̓X�L�b�v���܂��B
            return null;
        }

        final BlancoXmlElement elementCommon = listCommon.get(0);
        classStructure.setName(BlancoXmlBindingUtil.getTextContent(
                elementCommon, "name"));
        classStructure.setPackage(BlancoXmlBindingUtil.getTextContent(
                elementCommon, "package"));
        classStructure.setDescription(BlancoXmlBindingUtil.getTextContent(
                elementCommon, "description"));
        if (BlancoXmlBindingUtil.getTextContent(elementCommon, "suffix") != null) {
            classStructure.setSuffix(BlancoXmlBindingUtil.getTextContent(
                    elementCommon, "suffix"));
        }

        if (BlancoStringUtil.null2Blank(classStructure.getName()).length() == 0) {
            // ���O���������̂̓X�L�b�v���܂��B
            return null;
        }

        if (classStructure.getPackage() == null) {
            throw new IllegalArgumentException(fMsg.getMbchgi01(classStructure
                    .getName()));
        }

        final List<BlancoXmlElement> listList = BlancoXmlBindingUtil
                .getElementsByTagName(argElementSheet,
                        "blancocharactergroup-list");
        if (listList != null && listList.size() != 0) {
            final BlancoXmlElement elementListRoot = listList.get(0);
            final List<BlancoXmlElement> listChildNodes = BlancoXmlBindingUtil
                    .getElementsByTagName(elementListRoot, "field");
            for (int index = 0; index < listChildNodes.size(); index++) {
                final BlancoXmlElement elementList = listChildNodes.get(index);
                final BlancoCharacterGroupFieldStructure fieldStructure = new BlancoCharacterGroupFieldStructure();

                fieldStructure.setNo(BlancoXmlBindingUtil.getTextContent(
                        elementList, "no"));
                fieldStructure.setValue(BlancoXmlBindingUtil.getTextContent(
                        elementList, "value"));
                fieldStructure.setDescription(BlancoXmlBindingUtil
                        .getTextContent(elementList, "description"));
                if (fieldStructure.getValue() == null) {
                    // value�� trim���đ��ݔ��肵�Ă͂Ȃ�܂���B���p�󔒂� value �Ƃ��Ă��蓾�邩��ł��B
                    continue;
                }

                // value�̒������`�F�b�N�B
                if (fieldStructure.getValue().length() > 1) {
                    throw new IllegalArgumentException(fMsg.getMbchgi04(
                            classStructure.getName(),
                            fieldStructure.getValue(),
                            String.valueOf(fieldStructure.getValue().length())));
                }

                // ���ɓ������e���o�^����Ă��Ȃ����ǂ����̃`�F�b�N�B
                for (int indexPast = 0; indexPast < classStructure
                        .getFieldList().size(); indexPast++) {
                    final BlancoCharacterGroupFieldStructure fieldPast = (BlancoCharacterGroupFieldStructure) classStructure
                            .getFieldList().get(indexPast);
                    if (fieldPast.getValue().equals(fieldStructure.getValue())) {
                        throw new IllegalArgumentException(fMsg.getMbchgi03(
                                classStructure.getName(), fieldStructure
                                        .getValue()));
                    }
                }

                classStructure.getFieldList().add(fieldStructure);
            }
        }

        return classStructure;
    }
}

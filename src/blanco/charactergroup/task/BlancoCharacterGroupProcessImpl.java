/*
 * blanco Framework
 * Copyright (C) 2004-2006 IGA Tosiki
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 */
package blanco.charactergroup.task;

import java.io.File;
import java.io.IOException;

import javax.xml.transform.TransformerException;

import blanco.charactergroup.BlancoCharacterGroupConstants;
import blanco.charactergroup.BlancoCharacterGroupMeta2Xml;
import blanco.charactergroup.BlancoCharacterGroupXml2SourceFile;
import blanco.charactergroup.message.BlancoCharacterGroupMessage;
import blanco.charactergroup.task.valueobject.BlancoCharacterGroupProcessInput;

public class BlancoCharacterGroupProcessImpl implements
        BlancoCharacterGroupProcess {
    /**
     * ���b�Z�[�W�B
     */
    private final BlancoCharacterGroupMessage fMsg = new BlancoCharacterGroupMessage();

    public int execute(final BlancoCharacterGroupProcessInput input)
            throws IOException, IllegalArgumentException {
        System.out.println("- " + BlancoCharacterGroupConstants.PRODUCT_NAME
                + " (" + BlancoCharacterGroupConstants.VERSION + ")");

        try {
            final File fileMetadir = new File(input.getMetadir());
            if (fileMetadir.exists() == false) {
                throw new IllegalArgumentException(fMsg.getMbchga01(input
                        .getMetadir()));
            }

            // �e���|�����f�B���N�g�����쐬�B
            new File(input.getTmpdir()
                    + BlancoCharacterGroupConstants.TARGET_SUBDIRECTORY)
                    .mkdirs();

            // �w�肳�ꂽ���^�f�B���N�g�����������܂��B
            new BlancoCharacterGroupMeta2Xml()
                    .processDirectory(fileMetadir, input.getTmpdir()
                            + BlancoCharacterGroupConstants.TARGET_SUBDIRECTORY);

            // XML�����ꂽ���ԃt�@�C������\�[�X�R�[�h�𐶐�
            final File[] fileMeta2 = new File(input.getTmpdir()
                    + BlancoCharacterGroupConstants.TARGET_SUBDIRECTORY)
                    .listFiles();
            for (int index = 0; index < fileMeta2.length; index++) {
                if (fileMeta2[index].getName().endsWith(".xml") == false) {
                    continue;
                }

                final BlancoCharacterGroupXml2SourceFile xml2source = new BlancoCharacterGroupXml2SourceFile();
                xml2source.setEncoding(input.getEncoding());
                xml2source.process(fileMeta2[index], input.getTargetlang(),
                        new File(input.getTargetdir()));
            }

            return BlancoCharacterGroupBatchProcess.END_SUCCESS;
        } catch (TransformerException e) {
            throw new IOException("XML�ϊ��̉ߒ��ŗ�O���������܂���: " + e.toString());
        }
    }
}
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
 * blancoValueObjectの 中間XMLファイル形式をパース(読み書き)するクラス。
 * 
 * @author IGA Tosiki
 */
public class BlancoCharacterGroupXmlParser {
    /**
     * メッセージ。
     */
    private final BlancoCharacterGroupMessage fMsg = new BlancoCharacterGroupMessage();

    /**
     * 中間XMLファイルのXMLドキュメントをパースして、バリューオブジェクト情報の配列を取得します。
     * 
     * @param argMetaXmlSourceFile
     *            中間XMLファイル。
     * @return パースの結果得られたバリューオブジェクト情報の配列。
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
     * 中間XMLファイル形式のXMLドキュメントをパースして、バリューオブジェクト情報の配列を取得します。
     * 
     * @param argXmlDocument
     *            中間XMLファイルのXMLドキュメント。
     * @return パースの結果得られたバリューオブジェクト情報の配列。
     */
    public BlancoCharacterGroupStructure[] parse(
            final BlancoXmlDocument argXmlDocument) {
        final List<BlancoCharacterGroupStructure> listStructure = new ArrayList<BlancoCharacterGroupStructure>();

        // ルートエレメントを取得します。
        final BlancoXmlElement elementRoot = BlancoXmlBindingUtil
                .getDocumentElement(argXmlDocument);
        if (elementRoot == null) {
            // ルートエレメントが無い場合には処理中断します。
            return null;
        }

        // sheet(Excelシート)のリストを取得します。
        final List<BlancoXmlElement> listSheet = BlancoXmlBindingUtil
                .getElementsByTagName(elementRoot, "sheet");

        for (int index = 0; index < listSheet.size(); index++) {
            final BlancoXmlElement elementSheet = listSheet.get(index);

            final BlancoCharacterGroupStructure objClassStructure = parseElementSheet(elementSheet);
            if (objClassStructure != null) {
                // 得られた情報を記憶します。
                listStructure.add(objClassStructure);
            }
        }

        final BlancoCharacterGroupStructure[] result = new BlancoCharacterGroupStructure[listStructure
                .size()];
        listStructure.toArray(result);
        return result;
    }

    /**
     * 中間XMLファイル形式の「sheet」XMLエレメントをパースして、バリューオブジェクト情報を取得します。
     * 
     * @param argElementSheet
     *            中間XMLファイルの「sheet」XMLエレメント。
     * @return パースの結果得られたバリューオブジェクト情報。「name」が見つからなかった場合には nullを戻します。
     */
    public BlancoCharacterGroupStructure parseElementSheet(
            final BlancoXmlElement argElementSheet) {
        final BlancoCharacterGroupStructure classStructure = new BlancoCharacterGroupStructure();
        final List<BlancoXmlElement> listCommon = BlancoXmlBindingUtil
                .getElementsByTagName(argElementSheet,
                        "blancocharactergroup-common");
        if (listCommon == null || listCommon.size() == 0) {
            // commonが無い場合にはスキップします。
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
            // 名前が無いものはスキップします。
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
                    // valueを trimして存在判定してはなりません。半角空白が value としてあり得るからです。
                    continue;
                }

                // valueの長さをチェック。
                if (fieldStructure.getValue().length() > 1) {
                    throw new IllegalArgumentException(fMsg.getMbchgi04(
                            classStructure.getName(),
                            fieldStructure.getValue(),
                            String.valueOf(fieldStructure.getValue().length())));
                }

                // 既に同じ内容が登録されていないかどうかのチェック。
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

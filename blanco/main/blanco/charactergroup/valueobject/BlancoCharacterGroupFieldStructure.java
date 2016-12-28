/*
 * このソースコードは blanco Frameworkにより自動生成されました。
 */
package blanco.charactergroup.valueobject;

/**
 * BlancoCharacterGroupのなかで利用されるValueObjectです。
 */
public class BlancoCharacterGroupFieldStructure {
    /**
     * フィールド [no]
     *
     * 項目の型 [java.lang.String]<br>
     * 項目番号
     */
    private String fNo;

    /**
     * フィールド [value]
     *
     * 項目の型 [java.lang.String]<br>
     * 文字を指定します。必須項目です。
     */
    private String fValue;

    /**
     * フィールド [description]
     *
     * 項目の型 [java.lang.String]<br>
     * 文字に対する説明を指定します。
     */
    private String fDescription;

    /**
     * フィールド [no]のセッターメソッド
     *
     * 項目の型 [java.lang.String]<br>
     * 項目番号
     *
     * @param argNo フィールド[no]に格納したい値
     */
    public void setNo(final String argNo) {
        fNo = argNo;
    }

    /**
     * フィールド[no]のゲッターメソッド
     *
     * 項目の型 [java.lang.String]<br>
     * 項目番号
     *
     * @return フィールド[no]に格納されている値
     */
    public String getNo() {
        return fNo;
    }

    /**
     * フィールド [value]のセッターメソッド
     *
     * 項目の型 [java.lang.String]<br>
     * 文字を指定します。必須項目です。
     *
     * @param argValue フィールド[value]に格納したい値
     */
    public void setValue(final String argValue) {
        fValue = argValue;
    }

    /**
     * フィールド[value]のゲッターメソッド
     *
     * 項目の型 [java.lang.String]<br>
     * 文字を指定します。必須項目です。
     *
     * @return フィールド[value]に格納されている値
     */
    public String getValue() {
        return fValue;
    }

    /**
     * フィールド [description]のセッターメソッド
     *
     * 項目の型 [java.lang.String]<br>
     * 文字に対する説明を指定します。
     *
     * @param argDescription フィールド[description]に格納したい値
     */
    public void setDescription(final String argDescription) {
        fDescription = argDescription;
    }

    /**
     * フィールド[description]のゲッターメソッド
     *
     * 項目の型 [java.lang.String]<br>
     * 文字に対する説明を指定します。
     *
     * @return フィールド[description]に格納されている値
     */
    public String getDescription() {
        return fDescription;
    }

    /**
     * このバリューオブジェクトの文字列表現を取得します。
     *
     * オブジェクトのシャロー範囲でしかtoStringされない点に注意して利用してください。
     *
     * @return バリューオブジェクトの文字列表現。
     */
    public String toString() {
        final StringBuffer buf = new StringBuffer();
        buf.append("blanco.charactergroup.valueobject.BlancoCharacterGroupFieldStructure[");
        buf.append("no=" + fNo);
        buf.append(",value=" + fValue);
        buf.append(",description=" + fDescription);
        buf.append("]");
        return buf.toString();
    }
}

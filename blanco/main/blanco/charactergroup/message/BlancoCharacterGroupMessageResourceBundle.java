/*
 * このソースコードは blanco Frameworkによって自動生成されています。
 * リソースバンドル定義書から作成されたリソースバンドルクラス。
 */
package blanco.charactergroup.message;

import java.text.MessageFormat;
import java.util.Locale;
import java.util.MissingResourceException;
import java.util.ResourceBundle;

/**
 * リソースバンドル定義[BlancoCharacterGroupMessage/メッセージ定義[BlancoCharacterGroup]が内部的に利用するリソースバンドルクラス。]のリソースバンドルクラス。
 *
 * このクラスはリソースバンドル定義書から自動生成されたリソースバンドルクラスです。<BR>
 */
class BlancoCharacterGroupMessageResourceBundle {
    /**
     * リソースバンドルオブジェクト。
     *
     * 内部的に実際に入力を行うリソースバンドルを記憶します。
     */
    private ResourceBundle fResourceBundle;

    /**
     * BlancoCharacterGroupMessageResourceBundleクラスのコンストラクタ。
     *
     * 基底名[BlancoCharacterGroupMessage]、デフォルトのロケール、呼び出し側のクラスローダを使用して、リソースバンドルを取得します。
     */
    public BlancoCharacterGroupMessageResourceBundle() {
        try {
            fResourceBundle = ResourceBundle.getBundle("blanco/charactergroup/message/BlancoCharacterGroupMessage");
        } catch (MissingResourceException ex) {
        }
    }

    /**
     * BlancoCharacterGroupMessageResourceBundleクラスのコンストラクタ。
     *
     * 基底名[BlancoCharacterGroupMessage]、指定されたロケール、呼び出し側のクラスローダを使用して、リソースバンドルを取得します。
     *
     * @param locale ロケールの指定
     */
    public BlancoCharacterGroupMessageResourceBundle(final Locale locale) {
        try {
            fResourceBundle = ResourceBundle.getBundle("blanco/charactergroup/message/BlancoCharacterGroupMessage", locale);
        } catch (MissingResourceException ex) {
        }
    }

    /**
     * BlancoCharacterGroupMessageResourceBundleクラスのコンストラクタ。
     *
     * 基底名[BlancoCharacterGroupMessage]、指定されたロケール、指定されたクラスローダを使用して、リソースバンドルを取得します。
     *
     * @param locale ロケールの指定
     * @param loader クラスローダの指定
     */
    public BlancoCharacterGroupMessageResourceBundle(final Locale locale, final ClassLoader loader) {
        try {
            fResourceBundle = ResourceBundle.getBundle("blanco/charactergroup/message/BlancoCharacterGroupMessage", locale, loader);
        } catch (MissingResourceException ex) {
        }
    }

    /**
     * 内部的に保持しているリソースバンドルオブジェクトを取得します。
     *
     * @return 内部的に保持しているリソースバンドルオブジェクト。
     */
    public ResourceBundle getResourceBundle() {
        return fResourceBundle;
    }

    /**
     * bundle[BlancoCharacterGroupMessage], key[MBCHGI01]
     *
     * [文字グループ定義ID[{0}]のパッケージ名が指定されていません。] (ja)<br>
     *
     * @param arg0 置換文字列{0}を置換する値。java.lang.String型を与えてください。
     * @return key[MBCHGI01]に対応する値。外部から読み込みができない場合には、定義書の値を戻します。必ずnull以外の値が戻ります。
     */
    public String getMbchgi01(final String arg0) {
        // 初期値として定義書の値を利用します。
        String strFormat = "文字グループ定義ID[{0}]のパッケージ名が指定されていません。";
        try {
            if (fResourceBundle != null) {
                strFormat = fResourceBundle.getString("MBCHGI01");
            }
        } catch (MissingResourceException ex) {
        }
        final MessageFormat messageFormat = new MessageFormat(strFormat);
        final StringBuffer strbuf = new StringBuffer();
        // 与えられた引数を元に置換文字列を置き換えます。
        messageFormat.format(new Object[] {arg0}, strbuf, null);
        return strbuf.toString();
    }

    /**
     * bundle[BlancoCharacterGroupMessage], key[MBCHGI02]
     *
     * [サポートしない出力プログラミング言語処理系[{0}]が指定されました。] (ja)<br>
     *
     * @param arg0 置換文字列{0}を置換する値。java.lang.String型を与えてください。
     * @return key[MBCHGI02]に対応する値。外部から読み込みができない場合には、定義書の値を戻します。必ずnull以外の値が戻ります。
     */
    public String getMbchgi02(final String arg0) {
        // 初期値として定義書の値を利用します。
        String strFormat = "サポートしない出力プログラミング言語処理系[{0}]が指定されました。";
        try {
            if (fResourceBundle != null) {
                strFormat = fResourceBundle.getString("MBCHGI02");
            }
        } catch (MissingResourceException ex) {
        }
        final MessageFormat messageFormat = new MessageFormat(strFormat);
        final StringBuffer strbuf = new StringBuffer();
        // 与えられた引数を元に置換文字列を置き換えます。
        messageFormat.format(new Object[] {arg0}, strbuf, null);
        return strbuf.toString();
    }

    /**
     * bundle[BlancoCharacterGroupMessage], key[MBCHGI03]
     *
     * [文字グループ定義ID[{0}]において、文字[{1}]が2回以上あらわれました。同じ値は2回以上指定できません。] (ja)<br>
     *
     * @param arg0 置換文字列{0}を置換する値。java.lang.String型を与えてください。
     * @param arg1 置換文字列{1}を置換する値。java.lang.String型を与えてください。
     * @return key[MBCHGI03]に対応する値。外部から読み込みができない場合には、定義書の値を戻します。必ずnull以外の値が戻ります。
     */
    public String getMbchgi03(final String arg0, final String arg1) {
        // 初期値として定義書の値を利用します。
        String strFormat = "文字グループ定義ID[{0}]において、文字[{1}]が2回以上あらわれました。同じ値は2回以上指定できません。";
        try {
            if (fResourceBundle != null) {
                strFormat = fResourceBundle.getString("MBCHGI03");
            }
        } catch (MissingResourceException ex) {
        }
        final MessageFormat messageFormat = new MessageFormat(strFormat);
        final StringBuffer strbuf = new StringBuffer();
        // 与えられた引数を元に置換文字列を置き換えます。
        messageFormat.format(new Object[] {arg0, arg1}, strbuf, null);
        return strbuf.toString();
    }

    /**
     * bundle[BlancoCharacterGroupMessage], key[MBCHGI04]
     *
     * [文字グループ定義ID[{0}]において、文字[{1}]が指定されました。長さは{2}です。文字グループ定義では、文字は1文字で指定する必要があります。] (ja)<br>
     *
     * @param arg0 置換文字列{0}を置換する値。java.lang.String型を与えてください。
     * @param arg1 置換文字列{1}を置換する値。java.lang.String型を与えてください。
     * @param arg2 置換文字列{2}を置換する値。java.lang.String型を与えてください。
     * @return key[MBCHGI04]に対応する値。外部から読み込みができない場合には、定義書の値を戻します。必ずnull以外の値が戻ります。
     */
    public String getMbchgi04(final String arg0, final String arg1, final String arg2) {
        // 初期値として定義書の値を利用します。
        String strFormat = "文字グループ定義ID[{0}]において、文字[{1}]が指定されました。長さは{2}です。文字グループ定義では、文字は1文字で指定する必要があります。";
        try {
            if (fResourceBundle != null) {
                strFormat = fResourceBundle.getString("MBCHGI04");
            }
        } catch (MissingResourceException ex) {
        }
        final MessageFormat messageFormat = new MessageFormat(strFormat);
        final StringBuffer strbuf = new StringBuffer();
        // 与えられた引数を元に置換文字列を置き換えます。
        messageFormat.format(new Object[] {arg0, arg1, arg2}, strbuf, null);
        return strbuf.toString();
    }

    /**
     * bundle[BlancoCharacterGroupMessage], key[MBCHGA01]
     *
     * [メタディレクトリ[{0}]が存在しません。] (ja)<br>
     *
     * @param arg0 置換文字列{0}を置換する値。java.lang.String型を与えてください。
     * @return key[MBCHGA01]に対応する値。外部から読み込みができない場合には、定義書の値を戻します。必ずnull以外の値が戻ります。
     */
    public String getMbchga01(final String arg0) {
        // 初期値として定義書の値を利用します。
        String strFormat = "メタディレクトリ[{0}]が存在しません。";
        try {
            if (fResourceBundle != null) {
                strFormat = fResourceBundle.getString("MBCHGA01");
            }
        } catch (MissingResourceException ex) {
        }
        final MessageFormat messageFormat = new MessageFormat(strFormat);
        final StringBuffer strbuf = new StringBuffer();
        // 与えられた引数を元に置換文字列を置き換えます。
        messageFormat.format(new Object[] {arg0}, strbuf, null);
        return strbuf.toString();
    }
}

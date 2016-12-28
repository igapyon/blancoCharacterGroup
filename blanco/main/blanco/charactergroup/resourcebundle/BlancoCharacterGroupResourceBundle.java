/*
 * このソースコードは blanco Frameworkによって自動生成されています。
 * リソースバンドル定義書から作成されたリソースバンドルクラス。
 */
package blanco.charactergroup.resourcebundle;

import java.text.MessageFormat;
import java.util.Locale;
import java.util.MissingResourceException;
import java.util.ResourceBundle;

/**
 * リソースバンドル定義[BlancoCharacterGroup]のリソースバンドルクラス。
 *
 * このクラスはリソースバンドル定義書から自動生成されたリソースバンドルクラスです。<BR>
 * 既知のロケール<BR>
 * <UL>
 * <LI>ja
 * </UL>
 */
public class BlancoCharacterGroupResourceBundle {
    /**
     * リソースバンドルオブジェクト。
     *
     * 内部的に実際に入力を行うリソースバンドルを記憶します。
     */
    private ResourceBundle fResourceBundle;

    /**
     * BlancoCharacterGroupResourceBundleクラスのコンストラクタ。
     *
     * 基底名[BlancoCharacterGroup]、デフォルトのロケール、呼び出し側のクラスローダを使用して、リソースバンドルを取得します。
     */
    public BlancoCharacterGroupResourceBundle() {
        try {
            fResourceBundle = ResourceBundle.getBundle("blanco/charactergroup/resourcebundle/BlancoCharacterGroup");
        } catch (MissingResourceException ex) {
        }
    }

    /**
     * BlancoCharacterGroupResourceBundleクラスのコンストラクタ。
     *
     * 基底名[BlancoCharacterGroup]、指定されたロケール、呼び出し側のクラスローダを使用して、リソースバンドルを取得します。
     *
     * @param locale ロケールの指定
     */
    public BlancoCharacterGroupResourceBundle(final Locale locale) {
        try {
            fResourceBundle = ResourceBundle.getBundle("blanco/charactergroup/resourcebundle/BlancoCharacterGroup", locale);
        } catch (MissingResourceException ex) {
        }
    }

    /**
     * BlancoCharacterGroupResourceBundleクラスのコンストラクタ。
     *
     * 基底名[BlancoCharacterGroup]、指定されたロケール、指定されたクラスローダを使用して、リソースバンドルを取得します。
     *
     * @param locale ロケールの指定
     * @param loader クラスローダの指定
     */
    public BlancoCharacterGroupResourceBundle(final Locale locale, final ClassLoader loader) {
        try {
            fResourceBundle = ResourceBundle.getBundle("blanco/charactergroup/resourcebundle/BlancoCharacterGroup", locale, loader);
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
     * bundle[BlancoCharacterGroup], key[METAFILE_DISPLAYNAME]
     *
     * [文字グループ定義書] (ja)<br>
     *
     * @return key[METAFILE_DISPLAYNAME]に対応する値。外部から読み込みができない場合には、定義書の値を戻します。必ずnull以外の値が戻ります。
     */
    public String getMetafileDisplayname() {
        // 初期値として定義書の値を利用します。
        String strFormat = "文字グループ定義書";
        try {
            if (fResourceBundle != null) {
                strFormat = fResourceBundle.getString("METAFILE_DISPLAYNAME");
            }
        } catch (MissingResourceException ex) {
        }
        // 置換文字列はひとつもありません。
        return strFormat;
    }

    /**
     * bundle[BlancoCharacterGroup], key[XML2SOURCE_FILE.FIELD_NO]
     *
     * [No.{0}] (ja)<br>
     *
     * @param arg0 置換文字列{0}を置換する値。java.lang.String型を与えてください。
     * @return key[XML2SOURCE_FILE.FIELD_NO]に対応する値。外部から読み込みができない場合には、定義書の値を戻します。必ずnull以外の値が戻ります。
     */
    public String getXml2sourceFileFieldNo(final String arg0) {
        // 初期値として定義書の値を利用します。
        String strFormat = "No.{0}";
        try {
            if (fResourceBundle != null) {
                strFormat = fResourceBundle.getString("XML2SOURCE_FILE.FIELD_NO");
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
     * bundle[BlancoCharacterGroup], key[XML2SOURCE_FILE.DESCRIPTION]
     *
     * [説明:{0}] (ja)<br>
     *
     * @param arg0 置換文字列{0}を置換する値。java.lang.String型を与えてください。
     * @return key[XML2SOURCE_FILE.DESCRIPTION]に対応する値。外部から読み込みができない場合には、定義書の値を戻します。必ずnull以外の値が戻ります。
     */
    public String getXml2sourceFileDescription(final String arg0) {
        // 初期値として定義書の値を利用します。
        String strFormat = "説明:{0}";
        try {
            if (fResourceBundle != null) {
                strFormat = fResourceBundle.getString("XML2SOURCE_FILE.DESCRIPTION");
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
     * bundle[BlancoCharacterGroup], key[XML2SOURCE_FILE.DUMP.ENCODING]
     *
     * [Windows-31J] (ja)<br>
     *
     * @return key[XML2SOURCE_FILE.DUMP.ENCODING]に対応する値。外部から読み込みができない場合には、定義書の値を戻します。必ずnull以外の値が戻ります。
     */
    public String getXml2sourceFileDumpEncoding() {
        // 初期値として定義書の値を利用します。
        String strFormat = "Windows-31J";
        try {
            if (fResourceBundle != null) {
                strFormat = fResourceBundle.getString("XML2SOURCE_FILE.DUMP.ENCODING");
            }
        } catch (MissingResourceException ex) {
        }
        // 置換文字列はひとつもありません。
        return strFormat;
    }

    /**
     * bundle[BlancoCharacterGroup], key[XML2SOURCE_FILE.DUMP.ENCODING.MSG]
     *
     * [0x{0} ({1})] (ja)<br>
     *
     * @param arg0 置換文字列{0}を置換する値。java.lang.String型を与えてください。
     * @param arg1 置換文字列{1}を置換する値。java.lang.String型を与えてください。
     * @return key[XML2SOURCE_FILE.DUMP.ENCODING.MSG]に対応する値。外部から読み込みができない場合には、定義書の値を戻します。必ずnull以外の値が戻ります。
     */
    public String getXml2sourceFileDumpEncodingMsg(final String arg0, final String arg1) {
        // 初期値として定義書の値を利用します。
        String strFormat = "0x{0} ({1})";
        try {
            if (fResourceBundle != null) {
                strFormat = fResourceBundle.getString("XML2SOURCE_FILE.DUMP.ENCODING.MSG");
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
     * bundle[BlancoCharacterGroup], key[XML2SOURCE_FILE.DUMP.UTF16BE.MSG]
     *
     * [0x{0} (UTF-16BE)] (ja)<br>
     *
     * @param arg0 置換文字列{0}を置換する値。java.lang.String型を与えてください。
     * @return key[XML2SOURCE_FILE.DUMP.UTF16BE.MSG]に対応する値。外部から読み込みができない場合には、定義書の値を戻します。必ずnull以外の値が戻ります。
     */
    public String getXml2sourceFileDumpUtf16beMsg(final String arg0) {
        // 初期値として定義書の値を利用します。
        String strFormat = "0x{0} (UTF-16BE)";
        try {
            if (fResourceBundle != null) {
                strFormat = fResourceBundle.getString("XML2SOURCE_FILE.DUMP.UTF16BE.MSG");
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

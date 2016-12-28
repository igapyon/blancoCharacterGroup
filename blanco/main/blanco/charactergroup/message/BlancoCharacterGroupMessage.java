/*
 * このソースコードは blanco Frameworkによって自動生成されています。
 */
package blanco.charactergroup.message;

/**
 * blancoCharacterGroupが利用する定数を蓄えます。
 */
public class BlancoCharacterGroupMessage {
    /**
     * メッセージをプロパティファイル対応させるための内部的に利用するリソースバンドルクラス。
     */
    protected final BlancoCharacterGroupMessageResourceBundle fBundle = new BlancoCharacterGroupMessageResourceBundle();

    /**
     * メッセージ定義ID[BlancoCharacterGroup]、キー[MBCHGI01]の文字列を取得します。
     *
     * No.2:
     * 文字列[文字グループ定義ID[{0}]のパッケージ名が指定されていません。]
     *
     * @param arg0 置換文字列{0}の値。
     * @return メッセージ文字列。
     */
    public String getMbchgi01(final String arg0) {
        if (arg0 == null) {
            throw new IllegalArgumentException("メソッド[getMbchgi01]のパラメータ[arg0]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。");
        }

        return "[MBCHGI01] " + fBundle.getMbchgi01(arg0);
    }

    /**
     * メッセージ定義ID[BlancoCharacterGroup]、キー[MBCHGI02]の文字列を取得します。
     *
     * No.3:
     * 文字列[サポートしない出力プログラミング言語処理系[{0}]が指定されました。]
     *
     * @param arg0 置換文字列{0}の値。
     * @return メッセージ文字列。
     */
    public String getMbchgi02(final String arg0) {
        if (arg0 == null) {
            throw new IllegalArgumentException("メソッド[getMbchgi02]のパラメータ[arg0]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。");
        }

        return "[MBCHGI02] " + fBundle.getMbchgi02(arg0);
    }

    /**
     * メッセージ定義ID[BlancoCharacterGroup]、キー[MBCHGI03]の文字列を取得します。
     *
     * No.4:
     * 文字列[文字グループ定義ID[{0}]において、文字[{1}]が2回以上あらわれました。同じ値は2回以上指定できません。]
     *
     * @param arg0 置換文字列{0}の値。
     * @param arg1 置換文字列{1}の値。
     * @return メッセージ文字列。
     */
    public String getMbchgi03(final String arg0, final String arg1) {
        if (arg0 == null) {
            throw new IllegalArgumentException("メソッド[getMbchgi03]のパラメータ[arg0]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。");
        }
        if (arg1 == null) {
            throw new IllegalArgumentException("メソッド[getMbchgi03]のパラメータ[arg1]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。");
        }

        return "[MBCHGI03] " + fBundle.getMbchgi03(arg0, arg1);
    }

    /**
     * メッセージ定義ID[BlancoCharacterGroup]、キー[MBCHGI04]の文字列を取得します。
     *
     * No.5:
     * 文字列[文字グループ定義ID[{0}]において、文字[{1}]が指定されました。長さは{2}です。文字グループ定義では、文字は1文字で指定する必要があります。]
     *
     * @param arg0 置換文字列{0}の値。
     * @param arg1 置換文字列{1}の値。
     * @param arg2 置換文字列{2}の値。
     * @return メッセージ文字列。
     */
    public String getMbchgi04(final String arg0, final String arg1, final String arg2) {
        if (arg0 == null) {
            throw new IllegalArgumentException("メソッド[getMbchgi04]のパラメータ[arg0]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。");
        }
        if (arg1 == null) {
            throw new IllegalArgumentException("メソッド[getMbchgi04]のパラメータ[arg1]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。");
        }
        if (arg2 == null) {
            throw new IllegalArgumentException("メソッド[getMbchgi04]のパラメータ[arg2]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。");
        }

        return "[MBCHGI04] " + fBundle.getMbchgi04(arg0, arg1, arg2);
    }

    /**
     * メッセージ定義ID[BlancoCharacterGroup]、キー[MBCHGA01]の文字列を取得します。
     *
     * No.8:
     * 文字列[メタディレクトリ[{0}]が存在しません。]
     *
     * @param arg0 置換文字列{0}の値。
     * @return メッセージ文字列。
     */
    public String getMbchga01(final String arg0) {
        if (arg0 == null) {
            throw new IllegalArgumentException("メソッド[getMbchga01]のパラメータ[arg0]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。");
        }

        return "[MBCHGA01] " + fBundle.getMbchga01(arg0);
    }
}

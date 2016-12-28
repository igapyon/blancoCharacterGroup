/*
 * このソースコードは blanco Frameworkによって自動生成されています。
 */

/**
 * デフォルトコンストラクタ
 * @fileoverview このソースコードは blanco Frameworkによって自動生成されています。
 * @class 全角ひらがなのサンプル。blancoCharacterGroupの実装には影響しません。
 * @constructor
 */
function SampleZenHiraganaCharacterGroup() {
    /* パラメータの数、型チェックを行います。 */
    if (arguments.length !== 0) {
        throw new Error("[ArgumentException]: SampleZenHiraganaCharacterGroup.SampleZenHiraganaCharacterGroup のパラメータは[0]個である必要があります。しかし実際には[" + arguments.length +  "]個のパラメータを伴って呼び出されました。");
    }

}

/**
 * 文字グループに含まれる文字であるかどうかを判定します。
 * @addon
 * @param {string} argCheck チェックを行いたい文字。
 * @return 文字グループに含まれていればture。グループに含まれない文字であればfalse。
 * @type boolean
 */
SampleZenHiraganaCharacterGroup.prototype.match = function(/* string */ argCheck) {
    /* パラメータの数、型チェックを行います。 */
    if (arguments.length !== 1) {
        throw new Error("[ArgumentException]: SampleZenHiraganaCharacterGroup.match のパラメータは[1]個である必要があります。しかし実際には[" + arguments.length +  "]個のパラメータを伴って呼び出されました。");
    }
    if (typeof(argCheck) != "string") {
        throw new Error("[ArgumentException]: SampleZenHiraganaCharacterGroup.match の1番目のパラメータは[string]型でなくてはなりません。しかし実際には[" + typeof(argCheck) + "]型が与えられました。");
    }

    // No.1
    // 説明:829f: ひらがな。ぁ。
    // 0x829f (Windows-31J)
    // 0x3041 (UTF-16BE)
    if (argCheck == 'ぁ') {
        return true;
    }
    // No.2
    // 説明:82a0: ひらがな。あ。
    // 0x82a0 (Windows-31J)
    // 0x3042 (UTF-16BE)
    if (argCheck == 'あ') {
        return true;
    }
    // No.3
    // 0x82a1 (Windows-31J)
    // 0x3043 (UTF-16BE)
    if (argCheck == 'ぃ') {
        return true;
    }
    // No.4
    // 0x82a2 (Windows-31J)
    // 0x3044 (UTF-16BE)
    if (argCheck == 'い') {
        return true;
    }
    // No.5
    // 0x82a3 (Windows-31J)
    // 0x3045 (UTF-16BE)
    if (argCheck == 'ぅ') {
        return true;
    }
    // No.6
    // 0x82a4 (Windows-31J)
    // 0x3046 (UTF-16BE)
    if (argCheck == 'う') {
        return true;
    }
    // No.7
    // 0x82a5 (Windows-31J)
    // 0x3047 (UTF-16BE)
    if (argCheck == 'ぇ') {
        return true;
    }
    // No.8
    // 0x82a6 (Windows-31J)
    // 0x3048 (UTF-16BE)
    if (argCheck == 'え') {
        return true;
    }
    // No.9
    // 0x82a7 (Windows-31J)
    // 0x3049 (UTF-16BE)
    if (argCheck == 'ぉ') {
        return true;
    }
    // No.10
    // 0x82a8 (Windows-31J)
    // 0x304a (UTF-16BE)
    if (argCheck == 'お') {
        return true;
    }
    // No.11
    // 0x82a9 (Windows-31J)
    // 0x304b (UTF-16BE)
    if (argCheck == 'か') {
        return true;
    }
    // No.12
    // 0x82aa (Windows-31J)
    // 0x304c (UTF-16BE)
    if (argCheck == 'が') {
        return true;
    }
    // No.13
    // 0x82ab (Windows-31J)
    // 0x304d (UTF-16BE)
    if (argCheck == 'き') {
        return true;
    }
    // No.14
    // 0x82ac (Windows-31J)
    // 0x304e (UTF-16BE)
    if (argCheck == 'ぎ') {
        return true;
    }
    // No.15
    // 0x82ad (Windows-31J)
    // 0x304f (UTF-16BE)
    if (argCheck == 'く') {
        return true;
    }
    // No.16
    // 0x82ae (Windows-31J)
    // 0x3050 (UTF-16BE)
    if (argCheck == 'ぐ') {
        return true;
    }
    // No.17
    // 0x82af (Windows-31J)
    // 0x3051 (UTF-16BE)
    if (argCheck == 'け') {
        return true;
    }
    // No.18
    // 0x82b0 (Windows-31J)
    // 0x3052 (UTF-16BE)
    if (argCheck == 'げ') {
        return true;
    }
    // No.19
    // 0x82b1 (Windows-31J)
    // 0x3053 (UTF-16BE)
    if (argCheck == 'こ') {
        return true;
    }
    // No.20
    // 0x82b2 (Windows-31J)
    // 0x3054 (UTF-16BE)
    if (argCheck == 'ご') {
        return true;
    }
    // No.21
    // 0x82b3 (Windows-31J)
    // 0x3055 (UTF-16BE)
    if (argCheck == 'さ') {
        return true;
    }
    // No.22
    // 0x82b4 (Windows-31J)
    // 0x3056 (UTF-16BE)
    if (argCheck == 'ざ') {
        return true;
    }
    // No.23
    // 0x82b5 (Windows-31J)
    // 0x3057 (UTF-16BE)
    if (argCheck == 'し') {
        return true;
    }
    // No.24
    // 0x82b6 (Windows-31J)
    // 0x3058 (UTF-16BE)
    if (argCheck == 'じ') {
        return true;
    }
    // No.25
    // 0x82b7 (Windows-31J)
    // 0x3059 (UTF-16BE)
    if (argCheck == 'す') {
        return true;
    }
    // No.26
    // 0x82b8 (Windows-31J)
    // 0x305a (UTF-16BE)
    if (argCheck == 'ず') {
        return true;
    }
    // No.27
    // 0x82b9 (Windows-31J)
    // 0x305b (UTF-16BE)
    if (argCheck == 'せ') {
        return true;
    }
    // No.28
    // 0x82ba (Windows-31J)
    // 0x305c (UTF-16BE)
    if (argCheck == 'ぜ') {
        return true;
    }
    // No.29
    // 0x82bb (Windows-31J)
    // 0x305d (UTF-16BE)
    if (argCheck == 'そ') {
        return true;
    }
    // No.30
    // 0x82bc (Windows-31J)
    // 0x305e (UTF-16BE)
    if (argCheck == 'ぞ') {
        return true;
    }
    // No.31
    // 0x82bd (Windows-31J)
    // 0x305f (UTF-16BE)
    if (argCheck == 'た') {
        return true;
    }
    // No.32
    // 0x82be (Windows-31J)
    // 0x3060 (UTF-16BE)
    if (argCheck == 'だ') {
        return true;
    }
    // No.33
    // 0x82bf (Windows-31J)
    // 0x3061 (UTF-16BE)
    if (argCheck == 'ち') {
        return true;
    }
    // No.34
    // 0x82c0 (Windows-31J)
    // 0x3062 (UTF-16BE)
    if (argCheck == 'ぢ') {
        return true;
    }
    // No.35
    // 0x82c1 (Windows-31J)
    // 0x3063 (UTF-16BE)
    if (argCheck == 'っ') {
        return true;
    }
    // No.36
    // 0x82c2 (Windows-31J)
    // 0x3064 (UTF-16BE)
    if (argCheck == 'つ') {
        return true;
    }
    // No.37
    // 0x82c3 (Windows-31J)
    // 0x3065 (UTF-16BE)
    if (argCheck == 'づ') {
        return true;
    }
    // No.38
    // 0x82c4 (Windows-31J)
    // 0x3066 (UTF-16BE)
    if (argCheck == 'て') {
        return true;
    }
    // No.39
    // 0x82c5 (Windows-31J)
    // 0x3067 (UTF-16BE)
    if (argCheck == 'で') {
        return true;
    }
    // No.40
    // 0x82c6 (Windows-31J)
    // 0x3068 (UTF-16BE)
    if (argCheck == 'と') {
        return true;
    }
    // No.41
    // 0x82c7 (Windows-31J)
    // 0x3069 (UTF-16BE)
    if (argCheck == 'ど') {
        return true;
    }
    // No.42
    // 0x82c8 (Windows-31J)
    // 0x306a (UTF-16BE)
    if (argCheck == 'な') {
        return true;
    }
    // No.43
    // 0x82c9 (Windows-31J)
    // 0x306b (UTF-16BE)
    if (argCheck == 'に') {
        return true;
    }
    // No.44
    // 0x82ca (Windows-31J)
    // 0x306c (UTF-16BE)
    if (argCheck == 'ぬ') {
        return true;
    }
    // No.45
    // 0x82cb (Windows-31J)
    // 0x306d (UTF-16BE)
    if (argCheck == 'ね') {
        return true;
    }
    // No.46
    // 0x82cc (Windows-31J)
    // 0x306e (UTF-16BE)
    if (argCheck == 'の') {
        return true;
    }
    // No.47
    // 0x82cd (Windows-31J)
    // 0x306f (UTF-16BE)
    if (argCheck == 'は') {
        return true;
    }
    // No.48
    // 0x82ce (Windows-31J)
    // 0x3070 (UTF-16BE)
    if (argCheck == 'ば') {
        return true;
    }
    // No.49
    // 0x82cf (Windows-31J)
    // 0x3071 (UTF-16BE)
    if (argCheck == 'ぱ') {
        return true;
    }
    // No.50
    // 0x82d0 (Windows-31J)
    // 0x3072 (UTF-16BE)
    if (argCheck == 'ひ') {
        return true;
    }
    // No.51
    // 0x82d1 (Windows-31J)
    // 0x3073 (UTF-16BE)
    if (argCheck == 'び') {
        return true;
    }
    // No.52
    // 0x82d2 (Windows-31J)
    // 0x3074 (UTF-16BE)
    if (argCheck == 'ぴ') {
        return true;
    }
    // No.53
    // 0x82d3 (Windows-31J)
    // 0x3075 (UTF-16BE)
    if (argCheck == 'ふ') {
        return true;
    }
    // No.54
    // 0x82d4 (Windows-31J)
    // 0x3076 (UTF-16BE)
    if (argCheck == 'ぶ') {
        return true;
    }
    // No.55
    // 0x82d5 (Windows-31J)
    // 0x3077 (UTF-16BE)
    if (argCheck == 'ぷ') {
        return true;
    }
    // No.56
    // 0x82d6 (Windows-31J)
    // 0x3078 (UTF-16BE)
    if (argCheck == 'へ') {
        return true;
    }
    // No.57
    // 0x82d7 (Windows-31J)
    // 0x3079 (UTF-16BE)
    if (argCheck == 'べ') {
        return true;
    }
    // No.58
    // 0x82d8 (Windows-31J)
    // 0x307a (UTF-16BE)
    if (argCheck == 'ぺ') {
        return true;
    }
    // No.59
    // 0x82d9 (Windows-31J)
    // 0x307b (UTF-16BE)
    if (argCheck == 'ほ') {
        return true;
    }
    // No.60
    // 0x82da (Windows-31J)
    // 0x307c (UTF-16BE)
    if (argCheck == 'ぼ') {
        return true;
    }
    // No.61
    // 0x82db (Windows-31J)
    // 0x307d (UTF-16BE)
    if (argCheck == 'ぽ') {
        return true;
    }
    // No.62
    // 0x82dc (Windows-31J)
    // 0x307e (UTF-16BE)
    if (argCheck == 'ま') {
        return true;
    }
    // No.63
    // 0x82dd (Windows-31J)
    // 0x307f (UTF-16BE)
    if (argCheck == 'み') {
        return true;
    }
    // No.64
    // 0x82de (Windows-31J)
    // 0x3080 (UTF-16BE)
    if (argCheck == 'む') {
        return true;
    }
    // No.65
    // 0x82df (Windows-31J)
    // 0x3081 (UTF-16BE)
    if (argCheck == 'め') {
        return true;
    }
    // No.66
    // 0x82e0 (Windows-31J)
    // 0x3082 (UTF-16BE)
    if (argCheck == 'も') {
        return true;
    }
    // No.67
    // 0x82e1 (Windows-31J)
    // 0x3083 (UTF-16BE)
    if (argCheck == 'ゃ') {
        return true;
    }
    // No.68
    // 0x82e2 (Windows-31J)
    // 0x3084 (UTF-16BE)
    if (argCheck == 'や') {
        return true;
    }
    // No.69
    // 0x82e3 (Windows-31J)
    // 0x3085 (UTF-16BE)
    if (argCheck == 'ゅ') {
        return true;
    }
    // No.70
    // 0x82e4 (Windows-31J)
    // 0x3086 (UTF-16BE)
    if (argCheck == 'ゆ') {
        return true;
    }
    // No.71
    // 0x82e5 (Windows-31J)
    // 0x3087 (UTF-16BE)
    if (argCheck == 'ょ') {
        return true;
    }
    // No.72
    // 0x82e6 (Windows-31J)
    // 0x3088 (UTF-16BE)
    if (argCheck == 'よ') {
        return true;
    }
    // No.73
    // 0x82e7 (Windows-31J)
    // 0x3089 (UTF-16BE)
    if (argCheck == 'ら') {
        return true;
    }
    // No.74
    // 0x82e8 (Windows-31J)
    // 0x308a (UTF-16BE)
    if (argCheck == 'り') {
        return true;
    }
    // No.75
    // 0x82e9 (Windows-31J)
    // 0x308b (UTF-16BE)
    if (argCheck == 'る') {
        return true;
    }
    // No.76
    // 0x82ea (Windows-31J)
    // 0x308c (UTF-16BE)
    if (argCheck == 'れ') {
        return true;
    }
    // No.77
    // 0x82eb (Windows-31J)
    // 0x308d (UTF-16BE)
    if (argCheck == 'ろ') {
        return true;
    }
    // No.78
    // 0x82ec (Windows-31J)
    // 0x308e (UTF-16BE)
    if (argCheck == 'ゎ') {
        return true;
    }
    // No.79
    // 0x82ed (Windows-31J)
    // 0x308f (UTF-16BE)
    if (argCheck == 'わ') {
        return true;
    }
    // No.80
    // 0x82ee (Windows-31J)
    // 0x3090 (UTF-16BE)
    if (argCheck == 'ゐ') {
        return true;
    }
    // No.81
    // 0x82ef (Windows-31J)
    // 0x3091 (UTF-16BE)
    if (argCheck == 'ゑ') {
        return true;
    }
    // No.82
    // 0x82f0 (Windows-31J)
    // 0x3092 (UTF-16BE)
    if (argCheck == 'を') {
        return true;
    }
    // No.83
    // 説明:82f1: ひらがな。ん。
    // 0x82f1 (Windows-31J)
    // 0x3093 (UTF-16BE)
    if (argCheck == 'ん') {
        return true;
    }
    return false;
};

/**
 * 与えられた文字列が、全て文字グループに含まれる文字であるかどうかを判定します。
 * @addon
 * @param {string} argCheck チェックを行いたい文字列。
 * @return 全ての文字が文字グループに含まれていればture。グループに含まれない文字が含まれていればfalse。
 * @type boolean
 */
SampleZenHiraganaCharacterGroup.prototype.matchAll = function(/* string */ argCheck) {
    /* パラメータの数、型チェックを行います。 */
    if (arguments.length !== 1) {
        throw new Error("[ArgumentException]: SampleZenHiraganaCharacterGroup.matchAll のパラメータは[1]個である必要があります。しかし実際には[" + arguments.length +  "]個のパラメータを伴って呼び出されました。");
    }
    if (typeof(argCheck) != "string") {
        throw new Error("[ArgumentException]: SampleZenHiraganaCharacterGroup.matchAll の1番目のパラメータは[string]型でなくてはなりません。しかし実際には[" + typeof(argCheck) + "]型が与えられました。");
    }

    var arraySize = argCheck.length;
    for (index = 0; index < arraySize; index++) {
        if (this.match(argCheck.charAt(index)) === false) {
            return false;
        }
    }
    return true;
};

/**
 * 与えられた文字列が、文字グループに含まれる文字をひとつでも含んでいるかどうかを判定します。
 * @addon
 * @param {string} argCheck チェックを行いたい文字列。
 * @return 文字グループに含まれている文字をひとつでも含んでいればture。グループに含まれる文字をひとつも含まない場合はfalse。
 * @type boolean
 */
SampleZenHiraganaCharacterGroup.prototype.matchAny = function(/* string */ argCheck) {
    /* パラメータの数、型チェックを行います。 */
    if (arguments.length !== 1) {
        throw new Error("[ArgumentException]: SampleZenHiraganaCharacterGroup.matchAny のパラメータは[1]個である必要があります。しかし実際には[" + arguments.length +  "]個のパラメータを伴って呼び出されました。");
    }
    if (typeof(argCheck) != "string") {
        throw new Error("[ArgumentException]: SampleZenHiraganaCharacterGroup.matchAny の1番目のパラメータは[string]型でなくてはなりません。しかし実際には[" + typeof(argCheck) + "]型が与えられました。");
    }

    var arraySize = argCheck.length;
    for (index = 0; index < arraySize; index++) {
        if (this.match(argCheck.charAt(index))) {
            return true;
        }
    }
    return false;
};
/* クラス[SampleZenHiraganaCharacterGroup]宣言の終了。 */

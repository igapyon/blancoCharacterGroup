/*
 * このソースコードは blanco Frameworkによって自動生成されています。
 */

/**
 * デフォルトコンストラクタ
 * @fileoverview このソースコードは blanco Frameworkによって自動生成されています。
 * @class ISO646-JP(JIS X 0201)の0x20から0x7eまでのサンプル。blancoCharacterGroupの実装には影響しません。
 * @constructor
 */
function SampleIso646JpCharacterGroup() {
    /* パラメータの数、型チェックを行います。 */
    if (arguments.length !== 0) {
        throw new Error("[ArgumentException]: SampleIso646JpCharacterGroup.SampleIso646JpCharacterGroup のパラメータは[0]個である必要があります。しかし実際には[" + arguments.length +  "]個のパラメータを伴って呼び出されました。");
    }

}

/**
 * 文字グループに含まれる文字であるかどうかを判定します。
 * @addon
 * @param {string} argCheck チェックを行いたい文字。
 * @return 文字グループに含まれていればture。グループに含まれない文字であればfalse。
 * @type boolean
 */
SampleIso646JpCharacterGroup.prototype.match = function(/* string */ argCheck) {
    /* パラメータの数、型チェックを行います。 */
    if (arguments.length !== 1) {
        throw new Error("[ArgumentException]: SampleIso646JpCharacterGroup.match のパラメータは[1]個である必要があります。しかし実際には[" + arguments.length +  "]個のパラメータを伴って呼び出されました。");
    }
    if (typeof(argCheck) != "string") {
        throw new Error("[ArgumentException]: SampleIso646JpCharacterGroup.match の1番目のパラメータは[string]型でなくてはなりません。しかし実際には[" + typeof(argCheck) + "]型が与えられました。");
    }

    // No.1
    // 説明:0x20: 半角スペース。
    // 0x20 (Windows-31J)
    // 0x0020 (UTF-16BE)
    if (argCheck == ' ') {
        return true;
    }
    // No.2
    // 説明:0x21
    // 0x21 (Windows-31J)
    // 0x0021 (UTF-16BE)
    if (argCheck == '!') {
        return true;
    }
    // No.3
    // 説明:0x22: ダブルクオーテーション。
    // 0x22 (Windows-31J)
    // 0x0022 (UTF-16BE)
    if (argCheck == '\"') {
        return true;
    }
    // No.4
    // 説明:0x23: ISO646-USでも＃。
    // 0x23 (Windows-31J)
    // 0x0023 (UTF-16BE)
    if (argCheck == '#') {
        return true;
    }
    // No.5
    // 説明:0x24: ISO646-USでも＄。
    // 0x24 (Windows-31J)
    // 0x0024 (UTF-16BE)
    if (argCheck == '$') {
        return true;
    }
    // No.6
    // 説明:0x25
    // 0x25 (Windows-31J)
    // 0x0025 (UTF-16BE)
    if (argCheck == '%') {
        return true;
    }
    // No.7
    // 説明:0x26
    // 0x26 (Windows-31J)
    // 0x0026 (UTF-16BE)
    if (argCheck == '&') {
        return true;
    }
    // No.8
    // 説明:0x27: クオーテーション。
    // 0x27 (Windows-31J)
    // 0x0027 (UTF-16BE)
    if (argCheck == '\'') {
        return true;
    }
    // No.9
    // 説明:0x28
    // 0x28 (Windows-31J)
    // 0x0028 (UTF-16BE)
    if (argCheck == '(') {
        return true;
    }
    // No.10
    // 説明:0x29
    // 0x29 (Windows-31J)
    // 0x0029 (UTF-16BE)
    if (argCheck == ')') {
        return true;
    }
    // No.11
    // 説明:0x2a
    // 0x2a (Windows-31J)
    // 0x002a (UTF-16BE)
    if (argCheck == '*') {
        return true;
    }
    // No.12
    // 説明:0x2b
    // 0x2b (Windows-31J)
    // 0x002b (UTF-16BE)
    if (argCheck == '+') {
        return true;
    }
    // No.13
    // 説明:0x2c
    // 0x2c (Windows-31J)
    // 0x002c (UTF-16BE)
    if (argCheck == ',') {
        return true;
    }
    // No.14
    // 説明:0x2d
    // 0x2d (Windows-31J)
    // 0x002d (UTF-16BE)
    if (argCheck == '-') {
        return true;
    }
    // No.15
    // 説明:0x2e
    // 0x2e (Windows-31J)
    // 0x002e (UTF-16BE)
    if (argCheck == '.') {
        return true;
    }
    // No.16
    // 説明:0x2f: スラッシュ。
    // 0x2f (Windows-31J)
    // 0x002f (UTF-16BE)
    if (argCheck == '/') {
        return true;
    }
    // No.17
    // 説明:0x30: 数字の0。
    // 0x30 (Windows-31J)
    // 0x0030 (UTF-16BE)
    if (argCheck == '0') {
        return true;
    }
    // No.18
    // 説明:0x31: 数字の1。
    // 0x31 (Windows-31J)
    // 0x0031 (UTF-16BE)
    if (argCheck == '1') {
        return true;
    }
    // No.19
    // 説明:0x32: 数字の2。
    // 0x32 (Windows-31J)
    // 0x0032 (UTF-16BE)
    if (argCheck == '2') {
        return true;
    }
    // No.20
    // 説明:0x33: 数字の3。
    // 0x33 (Windows-31J)
    // 0x0033 (UTF-16BE)
    if (argCheck == '3') {
        return true;
    }
    // No.21
    // 説明:0x34: 数字の4。
    // 0x34 (Windows-31J)
    // 0x0034 (UTF-16BE)
    if (argCheck == '4') {
        return true;
    }
    // No.22
    // 説明:0x35: 数字の5。
    // 0x35 (Windows-31J)
    // 0x0035 (UTF-16BE)
    if (argCheck == '5') {
        return true;
    }
    // No.23
    // 説明:0x36: 数字の6。
    // 0x36 (Windows-31J)
    // 0x0036 (UTF-16BE)
    if (argCheck == '6') {
        return true;
    }
    // No.24
    // 説明:0x37: 数字の7。
    // 0x37 (Windows-31J)
    // 0x0037 (UTF-16BE)
    if (argCheck == '7') {
        return true;
    }
    // No.25
    // 説明:0x38: 数字の8。
    // 0x38 (Windows-31J)
    // 0x0038 (UTF-16BE)
    if (argCheck == '8') {
        return true;
    }
    // No.26
    // 説明:0x39: 数字の9。
    // 0x39 (Windows-31J)
    // 0x0039 (UTF-16BE)
    if (argCheck == '9') {
        return true;
    }
    // No.27
    // 説明:0x3a: コロン。
    // 0x3a (Windows-31J)
    // 0x003a (UTF-16BE)
    if (argCheck == ':') {
        return true;
    }
    // No.28
    // 説明:0x3b: セミコロン。
    // 0x3b (Windows-31J)
    // 0x003b (UTF-16BE)
    if (argCheck == ';') {
        return true;
    }
    // No.29
    // 0x3c (Windows-31J)
    // 0x003c (UTF-16BE)
    if (argCheck == '<') {
        return true;
    }
    // No.30
    // 0x3d (Windows-31J)
    // 0x003d (UTF-16BE)
    if (argCheck == '=') {
        return true;
    }
    // No.31
    // 0x3e (Windows-31J)
    // 0x003e (UTF-16BE)
    if (argCheck == '>') {
        return true;
    }
    // No.32
    // 説明:0x3f
    // 0x3f (Windows-31J)
    // 0x003f (UTF-16BE)
    if (argCheck == '?') {
        return true;
    }
    // No.33
    // 説明:0x40: ISO646-USでも＠。
    // 0x40 (Windows-31J)
    // 0x0040 (UTF-16BE)
    if (argCheck == '@') {
        return true;
    }
    // No.34
    // 説明:0x41: アルファベットのA
    // 0x41 (Windows-31J)
    // 0x0041 (UTF-16BE)
    if (argCheck == 'A') {
        return true;
    }
    // No.35
    // 0x42 (Windows-31J)
    // 0x0042 (UTF-16BE)
    if (argCheck == 'B') {
        return true;
    }
    // No.36
    // 0x43 (Windows-31J)
    // 0x0043 (UTF-16BE)
    if (argCheck == 'C') {
        return true;
    }
    // No.37
    // 0x44 (Windows-31J)
    // 0x0044 (UTF-16BE)
    if (argCheck == 'D') {
        return true;
    }
    // No.38
    // 0x45 (Windows-31J)
    // 0x0045 (UTF-16BE)
    if (argCheck == 'E') {
        return true;
    }
    // No.39
    // 0x46 (Windows-31J)
    // 0x0046 (UTF-16BE)
    if (argCheck == 'F') {
        return true;
    }
    // No.40
    // 0x47 (Windows-31J)
    // 0x0047 (UTF-16BE)
    if (argCheck == 'G') {
        return true;
    }
    // No.41
    // 0x48 (Windows-31J)
    // 0x0048 (UTF-16BE)
    if (argCheck == 'H') {
        return true;
    }
    // No.42
    // 0x49 (Windows-31J)
    // 0x0049 (UTF-16BE)
    if (argCheck == 'I') {
        return true;
    }
    // No.43
    // 0x4a (Windows-31J)
    // 0x004a (UTF-16BE)
    if (argCheck == 'J') {
        return true;
    }
    // No.44
    // 0x4b (Windows-31J)
    // 0x004b (UTF-16BE)
    if (argCheck == 'K') {
        return true;
    }
    // No.45
    // 0x4c (Windows-31J)
    // 0x004c (UTF-16BE)
    if (argCheck == 'L') {
        return true;
    }
    // No.46
    // 0x4d (Windows-31J)
    // 0x004d (UTF-16BE)
    if (argCheck == 'M') {
        return true;
    }
    // No.47
    // 0x4e (Windows-31J)
    // 0x004e (UTF-16BE)
    if (argCheck == 'N') {
        return true;
    }
    // No.48
    // 0x4f (Windows-31J)
    // 0x004f (UTF-16BE)
    if (argCheck == 'O') {
        return true;
    }
    // No.49
    // 0x50 (Windows-31J)
    // 0x0050 (UTF-16BE)
    if (argCheck == 'P') {
        return true;
    }
    // No.50
    // 0x51 (Windows-31J)
    // 0x0051 (UTF-16BE)
    if (argCheck == 'Q') {
        return true;
    }
    // No.51
    // 0x52 (Windows-31J)
    // 0x0052 (UTF-16BE)
    if (argCheck == 'R') {
        return true;
    }
    // No.52
    // 0x53 (Windows-31J)
    // 0x0053 (UTF-16BE)
    if (argCheck == 'S') {
        return true;
    }
    // No.53
    // 0x54 (Windows-31J)
    // 0x0054 (UTF-16BE)
    if (argCheck == 'T') {
        return true;
    }
    // No.54
    // 0x55 (Windows-31J)
    // 0x0055 (UTF-16BE)
    if (argCheck == 'U') {
        return true;
    }
    // No.55
    // 0x56 (Windows-31J)
    // 0x0056 (UTF-16BE)
    if (argCheck == 'V') {
        return true;
    }
    // No.56
    // 0x57 (Windows-31J)
    // 0x0057 (UTF-16BE)
    if (argCheck == 'W') {
        return true;
    }
    // No.57
    // 0x58 (Windows-31J)
    // 0x0058 (UTF-16BE)
    if (argCheck == 'X') {
        return true;
    }
    // No.58
    // 0x59 (Windows-31J)
    // 0x0059 (UTF-16BE)
    if (argCheck == 'Y') {
        return true;
    }
    // No.59
    // 説明:0x5a: アルファベットのZ。
    // 0x5a (Windows-31J)
    // 0x005a (UTF-16BE)
    if (argCheck == 'Z') {
        return true;
    }
    // No.60
    // 説明:0x5b: ISO646-USでも[。
    // 0x5b (Windows-31J)
    // 0x005b (UTF-16BE)
    if (argCheck == '[') {
        return true;
    }
    // No.61
    // 説明:0x5c: ISO646-USでは＼。ISO646-JP (JIS X 0201)では￥。
    // 0x5c (Windows-31J)
    // 0x005c (UTF-16BE)
    if (argCheck == '\\') {
        return true;
    }
    // No.62
    // 説明:0x5d: ISO646-USでも]。
    // 0x5d (Windows-31J)
    // 0x005d (UTF-16BE)
    if (argCheck == ']') {
        return true;
    }
    // No.63
    // 説明:0x5e: ISO646-USでも^。
    // 0x5e (Windows-31J)
    // 0x005e (UTF-16BE)
    if (argCheck == '^') {
        return true;
    }
    // No.64
    // 説明:0x5f
    // 0x5f (Windows-31J)
    // 0x005f (UTF-16BE)
    if (argCheck == '_') {
        return true;
    }
    // No.65
    // 説明:0x60: ISO646-USでも`。
    // 0x60 (Windows-31J)
    // 0x0060 (UTF-16BE)
    if (argCheck == '`') {
        return true;
    }
    // No.66
    // 説明:0x61: アルファベットのa。
    // 0x61 (Windows-31J)
    // 0x0061 (UTF-16BE)
    if (argCheck == 'a') {
        return true;
    }
    // No.67
    // 0x62 (Windows-31J)
    // 0x0062 (UTF-16BE)
    if (argCheck == 'b') {
        return true;
    }
    // No.68
    // 0x63 (Windows-31J)
    // 0x0063 (UTF-16BE)
    if (argCheck == 'c') {
        return true;
    }
    // No.69
    // 0x64 (Windows-31J)
    // 0x0064 (UTF-16BE)
    if (argCheck == 'd') {
        return true;
    }
    // No.70
    // 0x65 (Windows-31J)
    // 0x0065 (UTF-16BE)
    if (argCheck == 'e') {
        return true;
    }
    // No.71
    // 0x66 (Windows-31J)
    // 0x0066 (UTF-16BE)
    if (argCheck == 'f') {
        return true;
    }
    // No.72
    // 0x67 (Windows-31J)
    // 0x0067 (UTF-16BE)
    if (argCheck == 'g') {
        return true;
    }
    // No.73
    // 0x68 (Windows-31J)
    // 0x0068 (UTF-16BE)
    if (argCheck == 'h') {
        return true;
    }
    // No.74
    // 0x69 (Windows-31J)
    // 0x0069 (UTF-16BE)
    if (argCheck == 'i') {
        return true;
    }
    // No.75
    // 0x6a (Windows-31J)
    // 0x006a (UTF-16BE)
    if (argCheck == 'j') {
        return true;
    }
    // No.76
    // 0x6b (Windows-31J)
    // 0x006b (UTF-16BE)
    if (argCheck == 'k') {
        return true;
    }
    // No.77
    // 0x6c (Windows-31J)
    // 0x006c (UTF-16BE)
    if (argCheck == 'l') {
        return true;
    }
    // No.78
    // 0x6d (Windows-31J)
    // 0x006d (UTF-16BE)
    if (argCheck == 'm') {
        return true;
    }
    // No.79
    // 0x6e (Windows-31J)
    // 0x006e (UTF-16BE)
    if (argCheck == 'n') {
        return true;
    }
    // No.80
    // 0x6f (Windows-31J)
    // 0x006f (UTF-16BE)
    if (argCheck == 'o') {
        return true;
    }
    // No.81
    // 0x70 (Windows-31J)
    // 0x0070 (UTF-16BE)
    if (argCheck == 'p') {
        return true;
    }
    // No.82
    // 0x71 (Windows-31J)
    // 0x0071 (UTF-16BE)
    if (argCheck == 'q') {
        return true;
    }
    // No.83
    // 0x72 (Windows-31J)
    // 0x0072 (UTF-16BE)
    if (argCheck == 'r') {
        return true;
    }
    // No.84
    // 0x73 (Windows-31J)
    // 0x0073 (UTF-16BE)
    if (argCheck == 's') {
        return true;
    }
    // No.85
    // 0x74 (Windows-31J)
    // 0x0074 (UTF-16BE)
    if (argCheck == 't') {
        return true;
    }
    // No.86
    // 0x75 (Windows-31J)
    // 0x0075 (UTF-16BE)
    if (argCheck == 'u') {
        return true;
    }
    // No.87
    // 0x76 (Windows-31J)
    // 0x0076 (UTF-16BE)
    if (argCheck == 'v') {
        return true;
    }
    // No.88
    // 0x77 (Windows-31J)
    // 0x0077 (UTF-16BE)
    if (argCheck == 'w') {
        return true;
    }
    // No.89
    // 0x78 (Windows-31J)
    // 0x0078 (UTF-16BE)
    if (argCheck == 'x') {
        return true;
    }
    // No.90
    // 説明:0x79
    // 0x79 (Windows-31J)
    // 0x0079 (UTF-16BE)
    if (argCheck == 'y') {
        return true;
    }
    // No.91
    // 説明:0x7a: アルファベットのz。
    // 0x7a (Windows-31J)
    // 0x007a (UTF-16BE)
    if (argCheck == 'z') {
        return true;
    }
    // No.92
    // 説明:0x7b: ISO646-USでも{。
    // 0x7b (Windows-31J)
    // 0x007b (UTF-16BE)
    if (argCheck == '{') {
        return true;
    }
    // No.93
    // 説明:0x7c: ISO646-USでも|。
    // 0x7c (Windows-31J)
    // 0x007c (UTF-16BE)
    if (argCheck == '|') {
        return true;
    }
    // No.94
    // 説明:0x7d: ISO646-USでも}。
    // 0x7d (Windows-31J)
    // 0x007d (UTF-16BE)
    if (argCheck == '}') {
        return true;
    }
    // No.95
    // 説明:0x7e: ISO646-USでは～。ISO646-JP (JIS X 0201)では￣。
    // 0x7e (Windows-31J)
    // 0x007e (UTF-16BE)
    if (argCheck == '~') {
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
SampleIso646JpCharacterGroup.prototype.matchAll = function(/* string */ argCheck) {
    /* パラメータの数、型チェックを行います。 */
    if (arguments.length !== 1) {
        throw new Error("[ArgumentException]: SampleIso646JpCharacterGroup.matchAll のパラメータは[1]個である必要があります。しかし実際には[" + arguments.length +  "]個のパラメータを伴って呼び出されました。");
    }
    if (typeof(argCheck) != "string") {
        throw new Error("[ArgumentException]: SampleIso646JpCharacterGroup.matchAll の1番目のパラメータは[string]型でなくてはなりません。しかし実際には[" + typeof(argCheck) + "]型が与えられました。");
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
SampleIso646JpCharacterGroup.prototype.matchAny = function(/* string */ argCheck) {
    /* パラメータの数、型チェックを行います。 */
    if (arguments.length !== 1) {
        throw new Error("[ArgumentException]: SampleIso646JpCharacterGroup.matchAny のパラメータは[1]個である必要があります。しかし実際には[" + arguments.length +  "]個のパラメータを伴って呼び出されました。");
    }
    if (typeof(argCheck) != "string") {
        throw new Error("[ArgumentException]: SampleIso646JpCharacterGroup.matchAny の1番目のパラメータは[string]型でなくてはなりません。しかし実際には[" + typeof(argCheck) + "]型が与えられました。");
    }

    var arraySize = argCheck.length;
    for (index = 0; index < arraySize; index++) {
        if (this.match(argCheck.charAt(index))) {
            return true;
        }
    }
    return false;
};
/* クラス[SampleIso646JpCharacterGroup]宣言の終了。 */

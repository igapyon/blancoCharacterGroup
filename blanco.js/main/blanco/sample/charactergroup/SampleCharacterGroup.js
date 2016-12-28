/*
 * このソースコードは blanco Frameworkによって自動生成されています。
 */

/**
 * デフォルトコンストラクタ
 * @fileoverview このソースコードは blanco Frameworkによって自動生成されています。
 * @class 文字グループのサンプル。このクラスは単にサンプルです。実際の動作には利用されません。
 * @constructor
 */
function SampleCharacterGroup() {
    /* パラメータの数、型チェックを行います。 */
    if (arguments.length !== 0) {
        throw new Error("[ArgumentException]: SampleCharacterGroup.SampleCharacterGroup のパラメータは[0]個である必要があります。しかし実際には[" + arguments.length +  "]個のパラメータを伴って呼び出されました。");
    }

}

/**
 * 文字グループに含まれる文字であるかどうかを判定します。
 * @addon
 * @param {string} argCheck チェックを行いたい文字。
 * @return 文字グループに含まれていればture。グループに含まれない文字であればfalse。
 * @type boolean
 */
SampleCharacterGroup.prototype.match = function(/* string */ argCheck) {
    /* パラメータの数、型チェックを行います。 */
    if (arguments.length !== 1) {
        throw new Error("[ArgumentException]: SampleCharacterGroup.match のパラメータは[1]個である必要があります。しかし実際には[" + arguments.length +  "]個のパラメータを伴って呼び出されました。");
    }
    if (typeof(argCheck) != "string") {
        throw new Error("[ArgumentException]: SampleCharacterGroup.match の1番目のパラメータは[string]型でなくてはなりません。しかし実際には[" + typeof(argCheck) + "]型が与えられました。");
    }

    // No.1
    // 説明:0の文字
    // 0x30 (Windows-31J)
    // 0x0030 (UTF-16BE)
    if (argCheck == '0') {
        return true;
    }
    // No.2
    // 説明:1の文字
    // 0x31 (Windows-31J)
    // 0x0031 (UTF-16BE)
    if (argCheck == '1') {
        return true;
    }
    // No.3
    // 説明:2の文字
    // 0x32 (Windows-31J)
    // 0x0032 (UTF-16BE)
    if (argCheck == '2') {
        return true;
    }
    // No.4
    // 説明:3の文字
    // 0x33 (Windows-31J)
    // 0x0033 (UTF-16BE)
    if (argCheck == '3') {
        return true;
    }
    // No.5
    // 説明:4の文字
    // 0x34 (Windows-31J)
    // 0x0034 (UTF-16BE)
    if (argCheck == '4') {
        return true;
    }
    // No.6
    // 説明:5の文字
    // 0x35 (Windows-31J)
    // 0x0035 (UTF-16BE)
    if (argCheck == '5') {
        return true;
    }
    // No.7
    // 説明:6の文字
    // 0x36 (Windows-31J)
    // 0x0036 (UTF-16BE)
    if (argCheck == '6') {
        return true;
    }
    // No.8
    // 説明:7の文字
    // 0x37 (Windows-31J)
    // 0x0037 (UTF-16BE)
    if (argCheck == '7') {
        return true;
    }
    // No.9
    // 説明:8の文字
    // 0x38 (Windows-31J)
    // 0x0038 (UTF-16BE)
    if (argCheck == '8') {
        return true;
    }
    // No.10
    // 説明:9の文字
    // 0x39 (Windows-31J)
    // 0x0039 (UTF-16BE)
    if (argCheck == '9') {
        return true;
    }
    // No.11
    // 説明:シングルクオートが展開されることの確認。
    // 0x27 (Windows-31J)
    // 0x0027 (UTF-16BE)
    if (argCheck == '\'') {
        return true;
    }
    // No.12
    // 説明:ダブルクオートが展開されることの確認。
    // 0x22 (Windows-31J)
    // 0x0022 (UTF-16BE)
    if (argCheck == '\"') {
        return true;
    }
    // No.13
    // 説明:バックスラッシュが展開されることの確認。
    // 0x5c (Windows-31J)
    // 0x005c (UTF-16BE)
    if (argCheck == '\\') {
        return true;
    }
    // No.14
    // 説明:JExcelApi 2.6のオリジナル版において正常に×として展開できない文字。
    // 0x817e (Windows-31J)
    // 0x00d7 (UTF-16BE)
    if (argCheck == '×') {
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
SampleCharacterGroup.prototype.matchAll = function(/* string */ argCheck) {
    /* パラメータの数、型チェックを行います。 */
    if (arguments.length !== 1) {
        throw new Error("[ArgumentException]: SampleCharacterGroup.matchAll のパラメータは[1]個である必要があります。しかし実際には[" + arguments.length +  "]個のパラメータを伴って呼び出されました。");
    }
    if (typeof(argCheck) != "string") {
        throw new Error("[ArgumentException]: SampleCharacterGroup.matchAll の1番目のパラメータは[string]型でなくてはなりません。しかし実際には[" + typeof(argCheck) + "]型が与えられました。");
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
SampleCharacterGroup.prototype.matchAny = function(/* string */ argCheck) {
    /* パラメータの数、型チェックを行います。 */
    if (arguments.length !== 1) {
        throw new Error("[ArgumentException]: SampleCharacterGroup.matchAny のパラメータは[1]個である必要があります。しかし実際には[" + arguments.length +  "]個のパラメータを伴って呼び出されました。");
    }
    if (typeof(argCheck) != "string") {
        throw new Error("[ArgumentException]: SampleCharacterGroup.matchAny の1番目のパラメータは[string]型でなくてはなりません。しかし実際には[" + typeof(argCheck) + "]型が与えられました。");
    }

    var arraySize = argCheck.length;
    for (index = 0; index < arraySize; index++) {
        if (this.match(argCheck.charAt(index))) {
            return true;
        }
    }
    return false;
};
/* クラス[SampleCharacterGroup]宣言の終了。 */

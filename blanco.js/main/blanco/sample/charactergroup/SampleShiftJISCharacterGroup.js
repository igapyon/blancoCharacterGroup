/*
 * このソースコードは blanco Frameworkによって自動生成されています。
 */

/**
 * デフォルトコンストラクタ
 * @fileoverview このソースコードは blanco Frameworkによって自動生成されています。
 * @class Shift_JISのうち２バイト文字一覧のサンプル。機種依存文字などは含みません。blancoCharacterGroupの実装には影響しません。
 * @constructor
 */
function SampleShiftJISCharacterGroup() {
    /* パラメータの数、型チェックを行います。 */
    if (arguments.length !== 0) {
        throw new Error("[ArgumentException]: SampleShiftJISCharacterGroup.SampleShiftJISCharacterGroup のパラメータは[0]個である必要があります。しかし実際には[" + arguments.length +  "]個のパラメータを伴って呼び出されました。");
    }

}

/**
 * 文字グループに含まれる文字であるかどうかを判定します。
 * @addon
 * @param {string} argCheck チェックを行いたい文字。
 * @return 文字グループに含まれていればture。グループに含まれない文字であればfalse。
 * @type boolean
 */
SampleShiftJISCharacterGroup.prototype.match = function(/* string */ argCheck) {
    /* パラメータの数、型チェックを行います。 */
    if (arguments.length !== 1) {
        throw new Error("[ArgumentException]: SampleShiftJISCharacterGroup.match のパラメータは[1]個である必要があります。しかし実際には[" + arguments.length +  "]個のパラメータを伴って呼び出されました。");
    }
    if (typeof(argCheck) != "string") {
        throw new Error("[ArgumentException]: SampleShiftJISCharacterGroup.match の1番目のパラメータは[string]型でなくてはなりません。しかし実際には[" + typeof(argCheck) + "]型が与えられました。");
    }

    // No.2
    // 説明:8140
    // 0x8140 (Windows-31J)
    // 0x3000 (UTF-16BE)
    if (argCheck == '　') {
        return true;
    }
    // No.3
    // 説明:8141
    // 0x8141 (Windows-31J)
    // 0x3001 (UTF-16BE)
    if (argCheck == '、') {
        return true;
    }
    // No.4
    // 説明:8142
    // 0x8142 (Windows-31J)
    // 0x3002 (UTF-16BE)
    if (argCheck == '。') {
        return true;
    }
    // No.5
    // 説明:8143
    // 0x8143 (Windows-31J)
    // 0xff0c (UTF-16BE)
    if (argCheck == '，') {
        return true;
    }
    // No.6
    // 説明:8144
    // 0x8144 (Windows-31J)
    // 0xff0e (UTF-16BE)
    if (argCheck == '．') {
        return true;
    }
    // No.7
    // 説明:8145
    // 0x8145 (Windows-31J)
    // 0x30fb (UTF-16BE)
    if (argCheck == '・') {
        return true;
    }
    // No.8
    // 説明:8146
    // 0x8146 (Windows-31J)
    // 0xff1a (UTF-16BE)
    if (argCheck == '：') {
        return true;
    }
    // No.9
    // 説明:8147
    // 0x8147 (Windows-31J)
    // 0xff1b (UTF-16BE)
    if (argCheck == '；') {
        return true;
    }
    // No.10
    // 説明:8148
    // 0x8148 (Windows-31J)
    // 0xff1f (UTF-16BE)
    if (argCheck == '？') {
        return true;
    }
    // No.11
    // 説明:8149
    // 0x8149 (Windows-31J)
    // 0xff01 (UTF-16BE)
    if (argCheck == '！') {
        return true;
    }
    // No.12
    // 説明:814a
    // 0x814a (Windows-31J)
    // 0x309b (UTF-16BE)
    if (argCheck == '゛') {
        return true;
    }
    // No.13
    // 説明:814b
    // 0x814b (Windows-31J)
    // 0x309c (UTF-16BE)
    if (argCheck == '゜') {
        return true;
    }
    // No.14
    // 説明:814c
    // 0x814c (Windows-31J)
    // 0x00b4 (UTF-16BE)
    if (argCheck == '´') {
        return true;
    }
    // No.15
    // 説明:814d
    // 0x814d (Windows-31J)
    // 0xff40 (UTF-16BE)
    if (argCheck == '｀') {
        return true;
    }
    // No.16
    // 説明:814e
    // 0x814e (Windows-31J)
    // 0x00a8 (UTF-16BE)
    if (argCheck == '¨') {
        return true;
    }
    // No.17
    // 説明:814f
    // 0x814f (Windows-31J)
    // 0xff3e (UTF-16BE)
    if (argCheck == '＾') {
        return true;
    }
    // No.18
    // 説明:8150
    // 0x8150 (Windows-31J)
    // 0xffe3 (UTF-16BE)
    if (argCheck == '￣') {
        return true;
    }
    // No.19
    // 説明:8151
    // 0x8151 (Windows-31J)
    // 0xff3f (UTF-16BE)
    if (argCheck == '＿') {
        return true;
    }
    // No.20
    // 説明:8152
    // 0x8152 (Windows-31J)
    // 0x30fd (UTF-16BE)
    if (argCheck == 'ヽ') {
        return true;
    }
    // No.21
    // 説明:8153
    // 0x8153 (Windows-31J)
    // 0x30fe (UTF-16BE)
    if (argCheck == 'ヾ') {
        return true;
    }
    // No.22
    // 説明:8154
    // 0x8154 (Windows-31J)
    // 0x309d (UTF-16BE)
    if (argCheck == 'ゝ') {
        return true;
    }
    // No.23
    // 説明:8155
    // 0x8155 (Windows-31J)
    // 0x309e (UTF-16BE)
    if (argCheck == 'ゞ') {
        return true;
    }
    // No.24
    // 説明:8156
    // 0x8156 (Windows-31J)
    // 0x3003 (UTF-16BE)
    if (argCheck == '〃') {
        return true;
    }
    // No.25
    // 説明:8157
    // 0x8157 (Windows-31J)
    // 0x4edd (UTF-16BE)
    if (argCheck == '仝') {
        return true;
    }
    // No.26
    // 説明:8158
    // 0x8158 (Windows-31J)
    // 0x3005 (UTF-16BE)
    if (argCheck == '々') {
        return true;
    }
    // No.27
    // 説明:8159
    // 0x8159 (Windows-31J)
    // 0x3006 (UTF-16BE)
    if (argCheck == '〆') {
        return true;
    }
    // No.28
    // 説明:815a
    // 0x815a (Windows-31J)
    // 0x3007 (UTF-16BE)
    if (argCheck == '〇') {
        return true;
    }
    // No.29
    // 説明:815b
    // 0x815b (Windows-31J)
    // 0x30fc (UTF-16BE)
    if (argCheck == 'ー') {
        return true;
    }
    // No.30
    // 説明:815c 【重複符号化】(EM DASH) は、U+2014(EM DASH) と U+2015(HORIZONTAL BAR)←(Windows-31J) の２箇所からマッピングされる。
    // 0x815c (Windows-31J)
    // 0x2015 (UTF-16BE)
    if (argCheck == '―') {
        return true;
    }
    // No.31
    // 説明:815d
    // 0x815d (Windows-31J)
    // 0x2010 (UTF-16BE)
    if (argCheck == '‐') {
        return true;
    }
    // No.32
    // 説明:815e
    // 0x815e (Windows-31J)
    // 0xff0f (UTF-16BE)
    if (argCheck == '／') {
        return true;
    }
    // No.33
    // 説明:815f 【重複符号化】純粋な Unicode では U+005c(REVERSE SOLIDUS) であるが、U+ff3c(FULLWIDTH REVERSE SOLIDUS)←(Windows-31J)にマッピングされている。日本語文字コード事情的に 005cにマッピングするのは 現実的には ほぼ不可能。
    // 0x815f (Windows-31J)
    // 0xff3c (UTF-16BE)
    if (argCheck == '＼') {
        return true;
    }
    // No.34
    // 説明:8160 【重複符号化】(WAVE DASH) は U+301c(WAVE DASH) と U+ff5e(FULLWIDTH TILDE)←(Windows-31J) の２箇所にマッピングされる。
    // 0x8160 (Windows-31J)
    // 0xff5e (UTF-16BE)
    if (argCheck == '〜') {
        return true;
    }
    // No.35
    // 説明:8161 【重複符号化】(DOUBLEVERTICAL LINE) は、U+2016(DOUBLEVERTICAL LINE) と U+2225(PARALLEL TO)←(Windows-31J)の２箇所にマッピングされる。
    // 0x8161 (Windows-31J)
    // 0x2225 (UTF-16BE)
    if (argCheck == '‖') {
        return true;
    }
    // No.36
    // 説明:8162
    // 0x8162 (Windows-31J)
    // 0xff5c (UTF-16BE)
    if (argCheck == '｜') {
        return true;
    }
    // No.37
    // 説明:8163
    // 0x8163 (Windows-31J)
    // 0x2026 (UTF-16BE)
    if (argCheck == '…') {
        return true;
    }
    // No.38
    // 説明:8164
    // 0x8164 (Windows-31J)
    // 0x2025 (UTF-16BE)
    if (argCheck == '‥') {
        return true;
    }
    // No.39
    // 説明:8165
    // 0x8165 (Windows-31J)
    // 0x2018 (UTF-16BE)
    if (argCheck == '‘') {
        return true;
    }
    // No.40
    // 説明:8166
    // 0x8166 (Windows-31J)
    // 0x2019 (UTF-16BE)
    if (argCheck == '’') {
        return true;
    }
    // No.41
    // 説明:8167
    // 0x8167 (Windows-31J)
    // 0x201c (UTF-16BE)
    if (argCheck == '“') {
        return true;
    }
    // No.42
    // 説明:8168
    // 0x8168 (Windows-31J)
    // 0x201d (UTF-16BE)
    if (argCheck == '”') {
        return true;
    }
    // No.43
    // 説明:8169
    // 0x8169 (Windows-31J)
    // 0xff08 (UTF-16BE)
    if (argCheck == '（') {
        return true;
    }
    // No.44
    // 説明:816a
    // 0x816a (Windows-31J)
    // 0xff09 (UTF-16BE)
    if (argCheck == '）') {
        return true;
    }
    // No.45
    // 説明:816b
    // 0x816b (Windows-31J)
    // 0x3014 (UTF-16BE)
    if (argCheck == '〔') {
        return true;
    }
    // No.46
    // 説明:816c
    // 0x816c (Windows-31J)
    // 0x3015 (UTF-16BE)
    if (argCheck == '〕') {
        return true;
    }
    // No.47
    // 説明:816d
    // 0x816d (Windows-31J)
    // 0xff3b (UTF-16BE)
    if (argCheck == '［') {
        return true;
    }
    // No.48
    // 説明:816e
    // 0x816e (Windows-31J)
    // 0xff3d (UTF-16BE)
    if (argCheck == '］') {
        return true;
    }
    // No.49
    // 説明:816f
    // 0x816f (Windows-31J)
    // 0xff5b (UTF-16BE)
    if (argCheck == '｛') {
        return true;
    }
    // No.50
    // 説明:8170
    // 0x8170 (Windows-31J)
    // 0xff5d (UTF-16BE)
    if (argCheck == '｝') {
        return true;
    }
    // No.51
    // 説明:8171
    // 0x8171 (Windows-31J)
    // 0x3008 (UTF-16BE)
    if (argCheck == '〈') {
        return true;
    }
    // No.52
    // 説明:8172
    // 0x8172 (Windows-31J)
    // 0x3009 (UTF-16BE)
    if (argCheck == '〉') {
        return true;
    }
    // No.53
    // 説明:8173
    // 0x8173 (Windows-31J)
    // 0x300a (UTF-16BE)
    if (argCheck == '《') {
        return true;
    }
    // No.54
    // 説明:8174
    // 0x8174 (Windows-31J)
    // 0x300b (UTF-16BE)
    if (argCheck == '》') {
        return true;
    }
    // No.55
    // 説明:8175
    // 0x8175 (Windows-31J)
    // 0x300c (UTF-16BE)
    if (argCheck == '「') {
        return true;
    }
    // No.56
    // 説明:8176
    // 0x8176 (Windows-31J)
    // 0x300d (UTF-16BE)
    if (argCheck == '」') {
        return true;
    }
    // No.57
    // 説明:8177
    // 0x8177 (Windows-31J)
    // 0x300e (UTF-16BE)
    if (argCheck == '『') {
        return true;
    }
    // No.58
    // 説明:8178
    // 0x8178 (Windows-31J)
    // 0x300f (UTF-16BE)
    if (argCheck == '』') {
        return true;
    }
    // No.59
    // 説明:8179
    // 0x8179 (Windows-31J)
    // 0x3010 (UTF-16BE)
    if (argCheck == '【') {
        return true;
    }
    // No.60
    // 説明:817a
    // 0x817a (Windows-31J)
    // 0x3011 (UTF-16BE)
    if (argCheck == '】') {
        return true;
    }
    // No.61
    // 説明:817b
    // 0x817b (Windows-31J)
    // 0xff0b (UTF-16BE)
    if (argCheck == '＋') {
        return true;
    }
    // No.62
    // 説明:817c 【重複符号化】(MINUS SIGN)は U+2212(MINUS SIGN)  U+ff0d(FULLWIDTH HYPHEN-MINUS)←(Windows-31J)の２箇所にマッピングされる。
    // 0x817c (Windows-31J)
    // 0xff0d (UTF-16BE)
    if (argCheck == '−') {
        return true;
    }
    // No.63
    // 説明:817d
    // 0x817d (Windows-31J)
    // 0x00b1 (UTF-16BE)
    if (argCheck == '±') {
        return true;
    }
    // No.64
    // 説明:817e
    // 0x817e (Windows-31J)
    // 0x00d7 (UTF-16BE)
    if (argCheck == '×') {
        return true;
    }
    // No.65
    // 説明:8180
    // 0x8180 (Windows-31J)
    // 0x00f7 (UTF-16BE)
    if (argCheck == '÷') {
        return true;
    }
    // No.66
    // 説明:8181
    // 0x8181 (Windows-31J)
    // 0xff1d (UTF-16BE)
    if (argCheck == '＝') {
        return true;
    }
    // No.67
    // 説明:8182
    // 0x8182 (Windows-31J)
    // 0x2260 (UTF-16BE)
    if (argCheck == '≠') {
        return true;
    }
    // No.68
    // 説明:8183
    // 0x8183 (Windows-31J)
    // 0xff1c (UTF-16BE)
    if (argCheck == '＜') {
        return true;
    }
    // No.69
    // 説明:8184
    // 0x8184 (Windows-31J)
    // 0xff1e (UTF-16BE)
    if (argCheck == '＞') {
        return true;
    }
    // No.70
    // 説明:8185
    // 0x8185 (Windows-31J)
    // 0x2266 (UTF-16BE)
    if (argCheck == '≦') {
        return true;
    }
    // No.71
    // 説明:8186
    // 0x8186 (Windows-31J)
    // 0x2267 (UTF-16BE)
    if (argCheck == '≧') {
        return true;
    }
    // No.72
    // 説明:8187
    // 0x8187 (Windows-31J)
    // 0x221e (UTF-16BE)
    if (argCheck == '∞') {
        return true;
    }
    // No.73
    // 説明:8188
    // 0x8188 (Windows-31J)
    // 0x2234 (UTF-16BE)
    if (argCheck == '∴') {
        return true;
    }
    // No.74
    // 説明:8189
    // 0x8189 (Windows-31J)
    // 0x2642 (UTF-16BE)
    if (argCheck == '♂') {
        return true;
    }
    // No.75
    // 説明:818a
    // 0x818a (Windows-31J)
    // 0x2640 (UTF-16BE)
    if (argCheck == '♀') {
        return true;
    }
    // No.76
    // 説明:818b
    // 0x818b (Windows-31J)
    // 0x00b0 (UTF-16BE)
    if (argCheck == '°') {
        return true;
    }
    // No.77
    // 説明:818c
    // 0x818c (Windows-31J)
    // 0x2032 (UTF-16BE)
    if (argCheck == '′') {
        return true;
    }
    // No.78
    // 説明:818d
    // 0x818d (Windows-31J)
    // 0x2033 (UTF-16BE)
    if (argCheck == '″') {
        return true;
    }
    // No.79
    // 説明:818e
    // 0x818e (Windows-31J)
    // 0x2103 (UTF-16BE)
    if (argCheck == '℃') {
        return true;
    }
    // No.80
    // 説明:818f
    // 0x818f (Windows-31J)
    // 0xffe5 (UTF-16BE)
    if (argCheck == '￥') {
        return true;
    }
    // No.81
    // 説明:8190
    // 0x8190 (Windows-31J)
    // 0xff04 (UTF-16BE)
    if (argCheck == '＄') {
        return true;
    }
    // No.82
    // 説明:8191 【重複符号化】(CENT SIGN) は U+00a2(CENT SIGN) と U+ffe0(FULLWIDTH CENT SIGN)←(Windows-31J)とにマッピングされる。
    // 0x8191 (Windows-31J)
    // 0xffe0 (UTF-16BE)
    if (argCheck == '¢') {
        return true;
    }
    // No.83
    // 説明:8192 【重複符号化】(POUND SIGN) は   U+00a3(POUND SIGN) と U+ffe1(FULLWIDTH POUND SIGN)←(Windows-31J)とにマッピングされる。
    // 0x8192 (Windows-31J)
    // 0xffe1 (UTF-16BE)
    if (argCheck == '£') {
        return true;
    }
    // No.84
    // 説明:8193
    // 0x8193 (Windows-31J)
    // 0xff05 (UTF-16BE)
    if (argCheck == '％') {
        return true;
    }
    // No.85
    // 説明:8194
    // 0x8194 (Windows-31J)
    // 0xff03 (UTF-16BE)
    if (argCheck == '＃') {
        return true;
    }
    // No.86
    // 説明:8195
    // 0x8195 (Windows-31J)
    // 0xff06 (UTF-16BE)
    if (argCheck == '＆') {
        return true;
    }
    // No.87
    // 説明:8196
    // 0x8196 (Windows-31J)
    // 0xff0a (UTF-16BE)
    if (argCheck == '＊') {
        return true;
    }
    // No.88
    // 説明:8197
    // 0x8197 (Windows-31J)
    // 0xff20 (UTF-16BE)
    if (argCheck == '＠') {
        return true;
    }
    // No.89
    // 説明:8198
    // 0x8198 (Windows-31J)
    // 0x00a7 (UTF-16BE)
    if (argCheck == '§') {
        return true;
    }
    // No.90
    // 説明:8199
    // 0x8199 (Windows-31J)
    // 0x2606 (UTF-16BE)
    if (argCheck == '☆') {
        return true;
    }
    // No.91
    // 説明:819a
    // 0x819a (Windows-31J)
    // 0x2605 (UTF-16BE)
    if (argCheck == '★') {
        return true;
    }
    // No.92
    // 説明:819b
    // 0x819b (Windows-31J)
    // 0x25cb (UTF-16BE)
    if (argCheck == '○') {
        return true;
    }
    // No.93
    // 説明:819c
    // 0x819c (Windows-31J)
    // 0x25cf (UTF-16BE)
    if (argCheck == '●') {
        return true;
    }
    // No.94
    // 説明:819d
    // 0x819d (Windows-31J)
    // 0x25ce (UTF-16BE)
    if (argCheck == '◎') {
        return true;
    }
    // No.95
    // 説明:819e
    // 0x819e (Windows-31J)
    // 0x25c7 (UTF-16BE)
    if (argCheck == '◇') {
        return true;
    }
    // No.96
    // 説明:819f
    // 0x819f (Windows-31J)
    // 0x25c6 (UTF-16BE)
    if (argCheck == '◆') {
        return true;
    }
    // No.97
    // 説明:81a0
    // 0x81a0 (Windows-31J)
    // 0x25a1 (UTF-16BE)
    if (argCheck == '□') {
        return true;
    }
    // No.98
    // 説明:81a1
    // 0x81a1 (Windows-31J)
    // 0x25a0 (UTF-16BE)
    if (argCheck == '■') {
        return true;
    }
    // No.99
    // 説明:81a2
    // 0x81a2 (Windows-31J)
    // 0x25b3 (UTF-16BE)
    if (argCheck == '△') {
        return true;
    }
    // No.100
    // 説明:81a3
    // 0x81a3 (Windows-31J)
    // 0x25b2 (UTF-16BE)
    if (argCheck == '▲') {
        return true;
    }
    // No.101
    // 説明:81a4
    // 0x81a4 (Windows-31J)
    // 0x25bd (UTF-16BE)
    if (argCheck == '▽') {
        return true;
    }
    // No.102
    // 説明:81a5
    // 0x81a5 (Windows-31J)
    // 0x25bc (UTF-16BE)
    if (argCheck == '▼') {
        return true;
    }
    // No.103
    // 説明:81a6
    // 0x81a6 (Windows-31J)
    // 0x203b (UTF-16BE)
    if (argCheck == '※') {
        return true;
    }
    // No.104
    // 説明:81a7
    // 0x81a7 (Windows-31J)
    // 0x3012 (UTF-16BE)
    if (argCheck == '〒') {
        return true;
    }
    // No.105
    // 説明:81a8
    // 0x81a8 (Windows-31J)
    // 0x2192 (UTF-16BE)
    if (argCheck == '→') {
        return true;
    }
    // No.106
    // 説明:81a9
    // 0x81a9 (Windows-31J)
    // 0x2190 (UTF-16BE)
    if (argCheck == '←') {
        return true;
    }
    // No.107
    // 説明:81aa
    // 0x81aa (Windows-31J)
    // 0x2191 (UTF-16BE)
    if (argCheck == '↑') {
        return true;
    }
    // No.108
    // 説明:81ab
    // 0x81ab (Windows-31J)
    // 0x2193 (UTF-16BE)
    if (argCheck == '↓') {
        return true;
    }
    // No.109
    // 説明:81ac
    // 0x81ac (Windows-31J)
    // 0x3013 (UTF-16BE)
    if (argCheck == '〓') {
        return true;
    }
    // No.113
    // 説明:81b8
    // 0x81b8 (Windows-31J)
    // 0x2208 (UTF-16BE)
    if (argCheck == '∈') {
        return true;
    }
    // No.114
    // 説明:81b9
    // 0x81b9 (Windows-31J)
    // 0x220b (UTF-16BE)
    if (argCheck == '∋') {
        return true;
    }
    // No.115
    // 説明:81ba
    // 0x81ba (Windows-31J)
    // 0x2286 (UTF-16BE)
    if (argCheck == '⊆') {
        return true;
    }
    // No.116
    // 説明:81bb
    // 0x81bb (Windows-31J)
    // 0x2287 (UTF-16BE)
    if (argCheck == '⊇') {
        return true;
    }
    // No.117
    // 説明:81bc
    // 0x81bc (Windows-31J)
    // 0x2282 (UTF-16BE)
    if (argCheck == '⊂') {
        return true;
    }
    // No.118
    // 説明:81bd
    // 0x81bd (Windows-31J)
    // 0x2283 (UTF-16BE)
    if (argCheck == '⊃') {
        return true;
    }
    // No.119
    // 説明:81be
    // 0x81be (Windows-31J)
    // 0x222a (UTF-16BE)
    if (argCheck == '∪') {
        return true;
    }
    // No.120
    // 説明:81bf
    // 0x81bf (Windows-31J)
    // 0x2229 (UTF-16BE)
    if (argCheck == '∩') {
        return true;
    }
    // No.124
    // 説明:81c8
    // 0x81c8 (Windows-31J)
    // 0x2227 (UTF-16BE)
    if (argCheck == '∧') {
        return true;
    }
    // No.125
    // 説明:81c9
    // 0x81c9 (Windows-31J)
    // 0x2228 (UTF-16BE)
    if (argCheck == '∨') {
        return true;
    }
    // No.126
    // 説明:81ca 【重複符号化】(NOT SIGN) は U+00ac(NOT SIGN) と   U+ffe2(FULLWIDTH NOT SIGN)←(Windows-31J)とにマッピングされる。日本語文字コード事情的に 00acにマッピングするのは 現実的には ほぼ不可能。
    // 0x81ca (Windows-31J)
    // 0xffe2 (UTF-16BE)
    if (argCheck == '¬') {
        return true;
    }
    // No.127
    // 説明:81cb
    // 0x81cb (Windows-31J)
    // 0x21d2 (UTF-16BE)
    if (argCheck == '⇒') {
        return true;
    }
    // No.128
    // 説明:81cc
    // 0x81cc (Windows-31J)
    // 0x21d4 (UTF-16BE)
    if (argCheck == '⇔') {
        return true;
    }
    // No.129
    // 説明:81cd
    // 0x81cd (Windows-31J)
    // 0x2200 (UTF-16BE)
    if (argCheck == '∀') {
        return true;
    }
    // No.130
    // 説明:81ce
    // 0x81ce (Windows-31J)
    // 0x2203 (UTF-16BE)
    if (argCheck == '∃') {
        return true;
    }
    // No.134
    // 説明:81da
    // 0x81da (Windows-31J)
    // 0x2220 (UTF-16BE)
    if (argCheck == '∠') {
        return true;
    }
    // No.135
    // 説明:81db
    // 0x81db (Windows-31J)
    // 0x22a5 (UTF-16BE)
    if (argCheck == '⊥') {
        return true;
    }
    // No.136
    // 説明:81dc
    // 0x81dc (Windows-31J)
    // 0x2312 (UTF-16BE)
    if (argCheck == '⌒') {
        return true;
    }
    // No.137
    // 説明:81dd
    // 0x81dd (Windows-31J)
    // 0x2202 (UTF-16BE)
    if (argCheck == '∂') {
        return true;
    }
    // No.138
    // 説明:81de
    // 0x81de (Windows-31J)
    // 0x2207 (UTF-16BE)
    if (argCheck == '∇') {
        return true;
    }
    // No.139
    // 説明:81df
    // 0x81df (Windows-31J)
    // 0x2261 (UTF-16BE)
    if (argCheck == '≡') {
        return true;
    }
    // No.140
    // 説明:81e0
    // 0x81e0 (Windows-31J)
    // 0x2252 (UTF-16BE)
    if (argCheck == '≒') {
        return true;
    }
    // No.141
    // 説明:81e1
    // 0x81e1 (Windows-31J)
    // 0x226a (UTF-16BE)
    if (argCheck == '≪') {
        return true;
    }
    // No.142
    // 説明:81e2
    // 0x81e2 (Windows-31J)
    // 0x226b (UTF-16BE)
    if (argCheck == '≫') {
        return true;
    }
    // No.143
    // 説明:81e3
    // 0x81e3 (Windows-31J)
    // 0x221a (UTF-16BE)
    if (argCheck == '√') {
        return true;
    }
    // No.144
    // 説明:81e4
    // 0x81e4 (Windows-31J)
    // 0x223d (UTF-16BE)
    if (argCheck == '∽') {
        return true;
    }
    // No.145
    // 説明:81e5
    // 0x81e5 (Windows-31J)
    // 0x221d (UTF-16BE)
    if (argCheck == '∝') {
        return true;
    }
    // No.146
    // 説明:81e6
    // 0x81e6 (Windows-31J)
    // 0x2235 (UTF-16BE)
    if (argCheck == '∵') {
        return true;
    }
    // No.147
    // 説明:81e7
    // 0x81e7 (Windows-31J)
    // 0x222b (UTF-16BE)
    if (argCheck == '∫') {
        return true;
    }
    // No.148
    // 説明:81e8
    // 0x81e8 (Windows-31J)
    // 0x222c (UTF-16BE)
    if (argCheck == '∬') {
        return true;
    }
    // No.152
    // 説明:81f0
    // 0x81f0 (Windows-31J)
    // 0x212b (UTF-16BE)
    if (argCheck == 'Å') {
        return true;
    }
    // No.153
    // 説明:81f1
    // 0x81f1 (Windows-31J)
    // 0x2030 (UTF-16BE)
    if (argCheck == '‰') {
        return true;
    }
    // No.154
    // 説明:81f2
    // 0x81f2 (Windows-31J)
    // 0x266f (UTF-16BE)
    if (argCheck == '♯') {
        return true;
    }
    // No.155
    // 説明:81f3
    // 0x81f3 (Windows-31J)
    // 0x266d (UTF-16BE)
    if (argCheck == '♭') {
        return true;
    }
    // No.156
    // 説明:81f4
    // 0x81f4 (Windows-31J)
    // 0x266a (UTF-16BE)
    if (argCheck == '♪') {
        return true;
    }
    // No.157
    // 説明:81f5
    // 0x81f5 (Windows-31J)
    // 0x2020 (UTF-16BE)
    if (argCheck == '†') {
        return true;
    }
    // No.158
    // 説明:81f6
    // 0x81f6 (Windows-31J)
    // 0x2021 (UTF-16BE)
    if (argCheck == '‡') {
        return true;
    }
    // No.159
    // 説明:81f7
    // 0x81f7 (Windows-31J)
    // 0x00b6 (UTF-16BE)
    if (argCheck == '¶') {
        return true;
    }
    // No.163
    // 説明:81fc
    // 0x81fc (Windows-31J)
    // 0x25ef (UTF-16BE)
    if (argCheck == '◯') {
        return true;
    }
    // No.167
    // 説明:824f
    // 0x824f (Windows-31J)
    // 0xff10 (UTF-16BE)
    if (argCheck == '０') {
        return true;
    }
    // No.168
    // 説明:8250
    // 0x8250 (Windows-31J)
    // 0xff11 (UTF-16BE)
    if (argCheck == '１') {
        return true;
    }
    // No.169
    // 説明:8251
    // 0x8251 (Windows-31J)
    // 0xff12 (UTF-16BE)
    if (argCheck == '２') {
        return true;
    }
    // No.170
    // 説明:8252
    // 0x8252 (Windows-31J)
    // 0xff13 (UTF-16BE)
    if (argCheck == '３') {
        return true;
    }
    // No.171
    // 説明:8253
    // 0x8253 (Windows-31J)
    // 0xff14 (UTF-16BE)
    if (argCheck == '４') {
        return true;
    }
    // No.172
    // 説明:8254
    // 0x8254 (Windows-31J)
    // 0xff15 (UTF-16BE)
    if (argCheck == '５') {
        return true;
    }
    // No.173
    // 説明:8255
    // 0x8255 (Windows-31J)
    // 0xff16 (UTF-16BE)
    if (argCheck == '６') {
        return true;
    }
    // No.174
    // 説明:8256
    // 0x8256 (Windows-31J)
    // 0xff17 (UTF-16BE)
    if (argCheck == '７') {
        return true;
    }
    // No.175
    // 説明:8257
    // 0x8257 (Windows-31J)
    // 0xff18 (UTF-16BE)
    if (argCheck == '８') {
        return true;
    }
    // No.176
    // 説明:8258
    // 0x8258 (Windows-31J)
    // 0xff19 (UTF-16BE)
    if (argCheck == '９') {
        return true;
    }
    // No.180
    // 説明:8260
    // 0x8260 (Windows-31J)
    // 0xff21 (UTF-16BE)
    if (argCheck == 'Ａ') {
        return true;
    }
    // No.181
    // 説明:8261
    // 0x8261 (Windows-31J)
    // 0xff22 (UTF-16BE)
    if (argCheck == 'Ｂ') {
        return true;
    }
    // No.182
    // 説明:8262
    // 0x8262 (Windows-31J)
    // 0xff23 (UTF-16BE)
    if (argCheck == 'Ｃ') {
        return true;
    }
    // No.183
    // 説明:8263
    // 0x8263 (Windows-31J)
    // 0xff24 (UTF-16BE)
    if (argCheck == 'Ｄ') {
        return true;
    }
    // No.184
    // 説明:8264
    // 0x8264 (Windows-31J)
    // 0xff25 (UTF-16BE)
    if (argCheck == 'Ｅ') {
        return true;
    }
    // No.185
    // 説明:8265
    // 0x8265 (Windows-31J)
    // 0xff26 (UTF-16BE)
    if (argCheck == 'Ｆ') {
        return true;
    }
    // No.186
    // 説明:8266
    // 0x8266 (Windows-31J)
    // 0xff27 (UTF-16BE)
    if (argCheck == 'Ｇ') {
        return true;
    }
    // No.187
    // 説明:8267
    // 0x8267 (Windows-31J)
    // 0xff28 (UTF-16BE)
    if (argCheck == 'Ｈ') {
        return true;
    }
    // No.188
    // 説明:8268
    // 0x8268 (Windows-31J)
    // 0xff29 (UTF-16BE)
    if (argCheck == 'Ｉ') {
        return true;
    }
    // No.189
    // 説明:8269
    // 0x8269 (Windows-31J)
    // 0xff2a (UTF-16BE)
    if (argCheck == 'Ｊ') {
        return true;
    }
    // No.190
    // 説明:826a
    // 0x826a (Windows-31J)
    // 0xff2b (UTF-16BE)
    if (argCheck == 'Ｋ') {
        return true;
    }
    // No.191
    // 説明:826b
    // 0x826b (Windows-31J)
    // 0xff2c (UTF-16BE)
    if (argCheck == 'Ｌ') {
        return true;
    }
    // No.192
    // 説明:826c
    // 0x826c (Windows-31J)
    // 0xff2d (UTF-16BE)
    if (argCheck == 'Ｍ') {
        return true;
    }
    // No.193
    // 説明:826d
    // 0x826d (Windows-31J)
    // 0xff2e (UTF-16BE)
    if (argCheck == 'Ｎ') {
        return true;
    }
    // No.194
    // 説明:826e
    // 0x826e (Windows-31J)
    // 0xff2f (UTF-16BE)
    if (argCheck == 'Ｏ') {
        return true;
    }
    // No.195
    // 説明:826f
    // 0x826f (Windows-31J)
    // 0xff30 (UTF-16BE)
    if (argCheck == 'Ｐ') {
        return true;
    }
    // No.196
    // 説明:8270
    // 0x8270 (Windows-31J)
    // 0xff31 (UTF-16BE)
    if (argCheck == 'Ｑ') {
        return true;
    }
    // No.197
    // 説明:8271
    // 0x8271 (Windows-31J)
    // 0xff32 (UTF-16BE)
    if (argCheck == 'Ｒ') {
        return true;
    }
    // No.198
    // 説明:8272
    // 0x8272 (Windows-31J)
    // 0xff33 (UTF-16BE)
    if (argCheck == 'Ｓ') {
        return true;
    }
    // No.199
    // 説明:8273
    // 0x8273 (Windows-31J)
    // 0xff34 (UTF-16BE)
    if (argCheck == 'Ｔ') {
        return true;
    }
    // No.200
    // 説明:8274
    // 0x8274 (Windows-31J)
    // 0xff35 (UTF-16BE)
    if (argCheck == 'Ｕ') {
        return true;
    }
    // No.201
    // 説明:8275
    // 0x8275 (Windows-31J)
    // 0xff36 (UTF-16BE)
    if (argCheck == 'Ｖ') {
        return true;
    }
    // No.202
    // 説明:8276
    // 0x8276 (Windows-31J)
    // 0xff37 (UTF-16BE)
    if (argCheck == 'Ｗ') {
        return true;
    }
    // No.203
    // 説明:8277
    // 0x8277 (Windows-31J)
    // 0xff38 (UTF-16BE)
    if (argCheck == 'Ｘ') {
        return true;
    }
    // No.204
    // 説明:8278
    // 0x8278 (Windows-31J)
    // 0xff39 (UTF-16BE)
    if (argCheck == 'Ｙ') {
        return true;
    }
    // No.205
    // 説明:8279
    // 0x8279 (Windows-31J)
    // 0xff3a (UTF-16BE)
    if (argCheck == 'Ｚ') {
        return true;
    }
    // No.209
    // 説明:8281
    // 0x8281 (Windows-31J)
    // 0xff41 (UTF-16BE)
    if (argCheck == 'ａ') {
        return true;
    }
    // No.210
    // 説明:8282
    // 0x8282 (Windows-31J)
    // 0xff42 (UTF-16BE)
    if (argCheck == 'ｂ') {
        return true;
    }
    // No.211
    // 説明:8283
    // 0x8283 (Windows-31J)
    // 0xff43 (UTF-16BE)
    if (argCheck == 'ｃ') {
        return true;
    }
    // No.212
    // 説明:8284
    // 0x8284 (Windows-31J)
    // 0xff44 (UTF-16BE)
    if (argCheck == 'ｄ') {
        return true;
    }
    // No.213
    // 説明:8285
    // 0x8285 (Windows-31J)
    // 0xff45 (UTF-16BE)
    if (argCheck == 'ｅ') {
        return true;
    }
    // No.214
    // 説明:8286
    // 0x8286 (Windows-31J)
    // 0xff46 (UTF-16BE)
    if (argCheck == 'ｆ') {
        return true;
    }
    // No.215
    // 説明:8287
    // 0x8287 (Windows-31J)
    // 0xff47 (UTF-16BE)
    if (argCheck == 'ｇ') {
        return true;
    }
    // No.216
    // 説明:8288
    // 0x8288 (Windows-31J)
    // 0xff48 (UTF-16BE)
    if (argCheck == 'ｈ') {
        return true;
    }
    // No.217
    // 説明:8289
    // 0x8289 (Windows-31J)
    // 0xff49 (UTF-16BE)
    if (argCheck == 'ｉ') {
        return true;
    }
    // No.218
    // 説明:828a
    // 0x828a (Windows-31J)
    // 0xff4a (UTF-16BE)
    if (argCheck == 'ｊ') {
        return true;
    }
    // No.219
    // 説明:828b
    // 0x828b (Windows-31J)
    // 0xff4b (UTF-16BE)
    if (argCheck == 'ｋ') {
        return true;
    }
    // No.220
    // 説明:828c
    // 0x828c (Windows-31J)
    // 0xff4c (UTF-16BE)
    if (argCheck == 'ｌ') {
        return true;
    }
    // No.221
    // 説明:828d
    // 0x828d (Windows-31J)
    // 0xff4d (UTF-16BE)
    if (argCheck == 'ｍ') {
        return true;
    }
    // No.222
    // 説明:828e
    // 0x828e (Windows-31J)
    // 0xff4e (UTF-16BE)
    if (argCheck == 'ｎ') {
        return true;
    }
    // No.223
    // 説明:828f
    // 0x828f (Windows-31J)
    // 0xff4f (UTF-16BE)
    if (argCheck == 'ｏ') {
        return true;
    }
    // No.224
    // 説明:8290
    // 0x8290 (Windows-31J)
    // 0xff50 (UTF-16BE)
    if (argCheck == 'ｐ') {
        return true;
    }
    // No.225
    // 説明:8291
    // 0x8291 (Windows-31J)
    // 0xff51 (UTF-16BE)
    if (argCheck == 'ｑ') {
        return true;
    }
    // No.226
    // 説明:8292
    // 0x8292 (Windows-31J)
    // 0xff52 (UTF-16BE)
    if (argCheck == 'ｒ') {
        return true;
    }
    // No.227
    // 説明:8293
    // 0x8293 (Windows-31J)
    // 0xff53 (UTF-16BE)
    if (argCheck == 'ｓ') {
        return true;
    }
    // No.228
    // 説明:8294
    // 0x8294 (Windows-31J)
    // 0xff54 (UTF-16BE)
    if (argCheck == 'ｔ') {
        return true;
    }
    // No.229
    // 説明:8295
    // 0x8295 (Windows-31J)
    // 0xff55 (UTF-16BE)
    if (argCheck == 'ｕ') {
        return true;
    }
    // No.230
    // 説明:8296
    // 0x8296 (Windows-31J)
    // 0xff56 (UTF-16BE)
    if (argCheck == 'ｖ') {
        return true;
    }
    // No.231
    // 説明:8297
    // 0x8297 (Windows-31J)
    // 0xff57 (UTF-16BE)
    if (argCheck == 'ｗ') {
        return true;
    }
    // No.232
    // 説明:8298
    // 0x8298 (Windows-31J)
    // 0xff58 (UTF-16BE)
    if (argCheck == 'ｘ') {
        return true;
    }
    // No.233
    // 説明:8299
    // 0x8299 (Windows-31J)
    // 0xff59 (UTF-16BE)
    if (argCheck == 'ｙ') {
        return true;
    }
    // No.234
    // 説明:829a
    // 0x829a (Windows-31J)
    // 0xff5a (UTF-16BE)
    if (argCheck == 'ｚ') {
        return true;
    }
    // No.238
    // 説明:829f
    // 0x829f (Windows-31J)
    // 0x3041 (UTF-16BE)
    if (argCheck == 'ぁ') {
        return true;
    }
    // No.239
    // 説明:82a0
    // 0x82a0 (Windows-31J)
    // 0x3042 (UTF-16BE)
    if (argCheck == 'あ') {
        return true;
    }
    // No.240
    // 説明:82a1
    // 0x82a1 (Windows-31J)
    // 0x3043 (UTF-16BE)
    if (argCheck == 'ぃ') {
        return true;
    }
    // No.241
    // 説明:82a2
    // 0x82a2 (Windows-31J)
    // 0x3044 (UTF-16BE)
    if (argCheck == 'い') {
        return true;
    }
    // No.242
    // 説明:82a3
    // 0x82a3 (Windows-31J)
    // 0x3045 (UTF-16BE)
    if (argCheck == 'ぅ') {
        return true;
    }
    // No.243
    // 説明:82a4
    // 0x82a4 (Windows-31J)
    // 0x3046 (UTF-16BE)
    if (argCheck == 'う') {
        return true;
    }
    // No.244
    // 説明:82a5
    // 0x82a5 (Windows-31J)
    // 0x3047 (UTF-16BE)
    if (argCheck == 'ぇ') {
        return true;
    }
    // No.245
    // 説明:82a6
    // 0x82a6 (Windows-31J)
    // 0x3048 (UTF-16BE)
    if (argCheck == 'え') {
        return true;
    }
    // No.246
    // 説明:82a7
    // 0x82a7 (Windows-31J)
    // 0x3049 (UTF-16BE)
    if (argCheck == 'ぉ') {
        return true;
    }
    // No.247
    // 説明:82a8
    // 0x82a8 (Windows-31J)
    // 0x304a (UTF-16BE)
    if (argCheck == 'お') {
        return true;
    }
    // No.248
    // 説明:82a9
    // 0x82a9 (Windows-31J)
    // 0x304b (UTF-16BE)
    if (argCheck == 'か') {
        return true;
    }
    // No.249
    // 説明:82aa
    // 0x82aa (Windows-31J)
    // 0x304c (UTF-16BE)
    if (argCheck == 'が') {
        return true;
    }
    // No.250
    // 説明:82ab
    // 0x82ab (Windows-31J)
    // 0x304d (UTF-16BE)
    if (argCheck == 'き') {
        return true;
    }
    // No.251
    // 説明:82ac
    // 0x82ac (Windows-31J)
    // 0x304e (UTF-16BE)
    if (argCheck == 'ぎ') {
        return true;
    }
    // No.252
    // 説明:82ad
    // 0x82ad (Windows-31J)
    // 0x304f (UTF-16BE)
    if (argCheck == 'く') {
        return true;
    }
    // No.253
    // 説明:82ae
    // 0x82ae (Windows-31J)
    // 0x3050 (UTF-16BE)
    if (argCheck == 'ぐ') {
        return true;
    }
    // No.254
    // 説明:82af
    // 0x82af (Windows-31J)
    // 0x3051 (UTF-16BE)
    if (argCheck == 'け') {
        return true;
    }
    // No.255
    // 説明:82b0
    // 0x82b0 (Windows-31J)
    // 0x3052 (UTF-16BE)
    if (argCheck == 'げ') {
        return true;
    }
    // No.256
    // 説明:82b1
    // 0x82b1 (Windows-31J)
    // 0x3053 (UTF-16BE)
    if (argCheck == 'こ') {
        return true;
    }
    // No.257
    // 説明:82b2
    // 0x82b2 (Windows-31J)
    // 0x3054 (UTF-16BE)
    if (argCheck == 'ご') {
        return true;
    }
    // No.258
    // 説明:82b3
    // 0x82b3 (Windows-31J)
    // 0x3055 (UTF-16BE)
    if (argCheck == 'さ') {
        return true;
    }
    // No.259
    // 説明:82b4
    // 0x82b4 (Windows-31J)
    // 0x3056 (UTF-16BE)
    if (argCheck == 'ざ') {
        return true;
    }
    // No.260
    // 説明:82b5
    // 0x82b5 (Windows-31J)
    // 0x3057 (UTF-16BE)
    if (argCheck == 'し') {
        return true;
    }
    // No.261
    // 説明:82b6
    // 0x82b6 (Windows-31J)
    // 0x3058 (UTF-16BE)
    if (argCheck == 'じ') {
        return true;
    }
    // No.262
    // 説明:82b7
    // 0x82b7 (Windows-31J)
    // 0x3059 (UTF-16BE)
    if (argCheck == 'す') {
        return true;
    }
    // No.263
    // 説明:82b8
    // 0x82b8 (Windows-31J)
    // 0x305a (UTF-16BE)
    if (argCheck == 'ず') {
        return true;
    }
    // No.264
    // 説明:82b9
    // 0x82b9 (Windows-31J)
    // 0x305b (UTF-16BE)
    if (argCheck == 'せ') {
        return true;
    }
    // No.265
    // 説明:82ba
    // 0x82ba (Windows-31J)
    // 0x305c (UTF-16BE)
    if (argCheck == 'ぜ') {
        return true;
    }
    // No.266
    // 説明:82bb
    // 0x82bb (Windows-31J)
    // 0x305d (UTF-16BE)
    if (argCheck == 'そ') {
        return true;
    }
    // No.267
    // 説明:82bc
    // 0x82bc (Windows-31J)
    // 0x305e (UTF-16BE)
    if (argCheck == 'ぞ') {
        return true;
    }
    // No.268
    // 説明:82bd
    // 0x82bd (Windows-31J)
    // 0x305f (UTF-16BE)
    if (argCheck == 'た') {
        return true;
    }
    // No.269
    // 説明:82be
    // 0x82be (Windows-31J)
    // 0x3060 (UTF-16BE)
    if (argCheck == 'だ') {
        return true;
    }
    // No.270
    // 説明:82bf
    // 0x82bf (Windows-31J)
    // 0x3061 (UTF-16BE)
    if (argCheck == 'ち') {
        return true;
    }
    // No.271
    // 説明:82c0
    // 0x82c0 (Windows-31J)
    // 0x3062 (UTF-16BE)
    if (argCheck == 'ぢ') {
        return true;
    }
    // No.272
    // 説明:82c1
    // 0x82c1 (Windows-31J)
    // 0x3063 (UTF-16BE)
    if (argCheck == 'っ') {
        return true;
    }
    // No.273
    // 説明:82c2
    // 0x82c2 (Windows-31J)
    // 0x3064 (UTF-16BE)
    if (argCheck == 'つ') {
        return true;
    }
    // No.274
    // 説明:82c3
    // 0x82c3 (Windows-31J)
    // 0x3065 (UTF-16BE)
    if (argCheck == 'づ') {
        return true;
    }
    // No.275
    // 説明:82c4
    // 0x82c4 (Windows-31J)
    // 0x3066 (UTF-16BE)
    if (argCheck == 'て') {
        return true;
    }
    // No.276
    // 説明:82c5
    // 0x82c5 (Windows-31J)
    // 0x3067 (UTF-16BE)
    if (argCheck == 'で') {
        return true;
    }
    // No.277
    // 説明:82c6
    // 0x82c6 (Windows-31J)
    // 0x3068 (UTF-16BE)
    if (argCheck == 'と') {
        return true;
    }
    // No.278
    // 説明:82c7
    // 0x82c7 (Windows-31J)
    // 0x3069 (UTF-16BE)
    if (argCheck == 'ど') {
        return true;
    }
    // No.279
    // 説明:82c8
    // 0x82c8 (Windows-31J)
    // 0x306a (UTF-16BE)
    if (argCheck == 'な') {
        return true;
    }
    // No.280
    // 説明:82c9
    // 0x82c9 (Windows-31J)
    // 0x306b (UTF-16BE)
    if (argCheck == 'に') {
        return true;
    }
    // No.281
    // 説明:82ca
    // 0x82ca (Windows-31J)
    // 0x306c (UTF-16BE)
    if (argCheck == 'ぬ') {
        return true;
    }
    // No.282
    // 説明:82cb
    // 0x82cb (Windows-31J)
    // 0x306d (UTF-16BE)
    if (argCheck == 'ね') {
        return true;
    }
    // No.283
    // 説明:82cc
    // 0x82cc (Windows-31J)
    // 0x306e (UTF-16BE)
    if (argCheck == 'の') {
        return true;
    }
    // No.284
    // 説明:82cd
    // 0x82cd (Windows-31J)
    // 0x306f (UTF-16BE)
    if (argCheck == 'は') {
        return true;
    }
    // No.285
    // 説明:82ce
    // 0x82ce (Windows-31J)
    // 0x3070 (UTF-16BE)
    if (argCheck == 'ば') {
        return true;
    }
    // No.286
    // 説明:82cf
    // 0x82cf (Windows-31J)
    // 0x3071 (UTF-16BE)
    if (argCheck == 'ぱ') {
        return true;
    }
    // No.287
    // 説明:82d0
    // 0x82d0 (Windows-31J)
    // 0x3072 (UTF-16BE)
    if (argCheck == 'ひ') {
        return true;
    }
    // No.288
    // 説明:82d1
    // 0x82d1 (Windows-31J)
    // 0x3073 (UTF-16BE)
    if (argCheck == 'び') {
        return true;
    }
    // No.289
    // 説明:82d2
    // 0x82d2 (Windows-31J)
    // 0x3074 (UTF-16BE)
    if (argCheck == 'ぴ') {
        return true;
    }
    // No.290
    // 説明:82d3
    // 0x82d3 (Windows-31J)
    // 0x3075 (UTF-16BE)
    if (argCheck == 'ふ') {
        return true;
    }
    // No.291
    // 説明:82d4
    // 0x82d4 (Windows-31J)
    // 0x3076 (UTF-16BE)
    if (argCheck == 'ぶ') {
        return true;
    }
    // No.292
    // 説明:82d5
    // 0x82d5 (Windows-31J)
    // 0x3077 (UTF-16BE)
    if (argCheck == 'ぷ') {
        return true;
    }
    // No.293
    // 説明:82d6
    // 0x82d6 (Windows-31J)
    // 0x3078 (UTF-16BE)
    if (argCheck == 'へ') {
        return true;
    }
    // No.294
    // 説明:82d7
    // 0x82d7 (Windows-31J)
    // 0x3079 (UTF-16BE)
    if (argCheck == 'べ') {
        return true;
    }
    // No.295
    // 説明:82d8
    // 0x82d8 (Windows-31J)
    // 0x307a (UTF-16BE)
    if (argCheck == 'ぺ') {
        return true;
    }
    // No.296
    // 説明:82d9
    // 0x82d9 (Windows-31J)
    // 0x307b (UTF-16BE)
    if (argCheck == 'ほ') {
        return true;
    }
    // No.297
    // 説明:82da
    // 0x82da (Windows-31J)
    // 0x307c (UTF-16BE)
    if (argCheck == 'ぼ') {
        return true;
    }
    // No.298
    // 説明:82db
    // 0x82db (Windows-31J)
    // 0x307d (UTF-16BE)
    if (argCheck == 'ぽ') {
        return true;
    }
    // No.299
    // 説明:82dc
    // 0x82dc (Windows-31J)
    // 0x307e (UTF-16BE)
    if (argCheck == 'ま') {
        return true;
    }
    // No.300
    // 説明:82dd
    // 0x82dd (Windows-31J)
    // 0x307f (UTF-16BE)
    if (argCheck == 'み') {
        return true;
    }
    // No.301
    // 説明:82de
    // 0x82de (Windows-31J)
    // 0x3080 (UTF-16BE)
    if (argCheck == 'む') {
        return true;
    }
    // No.302
    // 説明:82df
    // 0x82df (Windows-31J)
    // 0x3081 (UTF-16BE)
    if (argCheck == 'め') {
        return true;
    }
    // No.303
    // 説明:82e0
    // 0x82e0 (Windows-31J)
    // 0x3082 (UTF-16BE)
    if (argCheck == 'も') {
        return true;
    }
    // No.304
    // 説明:82e1
    // 0x82e1 (Windows-31J)
    // 0x3083 (UTF-16BE)
    if (argCheck == 'ゃ') {
        return true;
    }
    // No.305
    // 説明:82e2
    // 0x82e2 (Windows-31J)
    // 0x3084 (UTF-16BE)
    if (argCheck == 'や') {
        return true;
    }
    // No.306
    // 説明:82e3
    // 0x82e3 (Windows-31J)
    // 0x3085 (UTF-16BE)
    if (argCheck == 'ゅ') {
        return true;
    }
    // No.307
    // 説明:82e4
    // 0x82e4 (Windows-31J)
    // 0x3086 (UTF-16BE)
    if (argCheck == 'ゆ') {
        return true;
    }
    // No.308
    // 説明:82e5
    // 0x82e5 (Windows-31J)
    // 0x3087 (UTF-16BE)
    if (argCheck == 'ょ') {
        return true;
    }
    // No.309
    // 説明:82e6
    // 0x82e6 (Windows-31J)
    // 0x3088 (UTF-16BE)
    if (argCheck == 'よ') {
        return true;
    }
    // No.310
    // 説明:82e7
    // 0x82e7 (Windows-31J)
    // 0x3089 (UTF-16BE)
    if (argCheck == 'ら') {
        return true;
    }
    // No.311
    // 説明:82e8
    // 0x82e8 (Windows-31J)
    // 0x308a (UTF-16BE)
    if (argCheck == 'り') {
        return true;
    }
    // No.312
    // 説明:82e9
    // 0x82e9 (Windows-31J)
    // 0x308b (UTF-16BE)
    if (argCheck == 'る') {
        return true;
    }
    // No.313
    // 説明:82ea
    // 0x82ea (Windows-31J)
    // 0x308c (UTF-16BE)
    if (argCheck == 'れ') {
        return true;
    }
    // No.314
    // 説明:82eb
    // 0x82eb (Windows-31J)
    // 0x308d (UTF-16BE)
    if (argCheck == 'ろ') {
        return true;
    }
    // No.315
    // 説明:82ec
    // 0x82ec (Windows-31J)
    // 0x308e (UTF-16BE)
    if (argCheck == 'ゎ') {
        return true;
    }
    // No.316
    // 説明:82ed
    // 0x82ed (Windows-31J)
    // 0x308f (UTF-16BE)
    if (argCheck == 'わ') {
        return true;
    }
    // No.317
    // 説明:82ee
    // 0x82ee (Windows-31J)
    // 0x3090 (UTF-16BE)
    if (argCheck == 'ゐ') {
        return true;
    }
    // No.318
    // 説明:82ef
    // 0x82ef (Windows-31J)
    // 0x3091 (UTF-16BE)
    if (argCheck == 'ゑ') {
        return true;
    }
    // No.319
    // 説明:82f0
    // 0x82f0 (Windows-31J)
    // 0x3092 (UTF-16BE)
    if (argCheck == 'を') {
        return true;
    }
    // No.320
    // 説明:82f1
    // 0x82f1 (Windows-31J)
    // 0x3093 (UTF-16BE)
    if (argCheck == 'ん') {
        return true;
    }
    // No.324
    // 説明:8340
    // 0x8340 (Windows-31J)
    // 0x30a1 (UTF-16BE)
    if (argCheck == 'ァ') {
        return true;
    }
    // No.325
    // 説明:8341
    // 0x8341 (Windows-31J)
    // 0x30a2 (UTF-16BE)
    if (argCheck == 'ア') {
        return true;
    }
    // No.326
    // 説明:8342
    // 0x8342 (Windows-31J)
    // 0x30a3 (UTF-16BE)
    if (argCheck == 'ィ') {
        return true;
    }
    // No.327
    // 説明:8343
    // 0x8343 (Windows-31J)
    // 0x30a4 (UTF-16BE)
    if (argCheck == 'イ') {
        return true;
    }
    // No.328
    // 説明:8344
    // 0x8344 (Windows-31J)
    // 0x30a5 (UTF-16BE)
    if (argCheck == 'ゥ') {
        return true;
    }
    // No.329
    // 説明:8345
    // 0x8345 (Windows-31J)
    // 0x30a6 (UTF-16BE)
    if (argCheck == 'ウ') {
        return true;
    }
    // No.330
    // 説明:8346
    // 0x8346 (Windows-31J)
    // 0x30a7 (UTF-16BE)
    if (argCheck == 'ェ') {
        return true;
    }
    // No.331
    // 説明:8347
    // 0x8347 (Windows-31J)
    // 0x30a8 (UTF-16BE)
    if (argCheck == 'エ') {
        return true;
    }
    // No.332
    // 説明:8348
    // 0x8348 (Windows-31J)
    // 0x30a9 (UTF-16BE)
    if (argCheck == 'ォ') {
        return true;
    }
    // No.333
    // 説明:8349
    // 0x8349 (Windows-31J)
    // 0x30aa (UTF-16BE)
    if (argCheck == 'オ') {
        return true;
    }
    // No.334
    // 説明:834a
    // 0x834a (Windows-31J)
    // 0x30ab (UTF-16BE)
    if (argCheck == 'カ') {
        return true;
    }
    // No.335
    // 説明:834b
    // 0x834b (Windows-31J)
    // 0x30ac (UTF-16BE)
    if (argCheck == 'ガ') {
        return true;
    }
    // No.336
    // 説明:834c
    // 0x834c (Windows-31J)
    // 0x30ad (UTF-16BE)
    if (argCheck == 'キ') {
        return true;
    }
    // No.337
    // 説明:834d
    // 0x834d (Windows-31J)
    // 0x30ae (UTF-16BE)
    if (argCheck == 'ギ') {
        return true;
    }
    // No.338
    // 説明:834e
    // 0x834e (Windows-31J)
    // 0x30af (UTF-16BE)
    if (argCheck == 'ク') {
        return true;
    }
    // No.339
    // 説明:834f
    // 0x834f (Windows-31J)
    // 0x30b0 (UTF-16BE)
    if (argCheck == 'グ') {
        return true;
    }
    // No.340
    // 説明:8350
    // 0x8350 (Windows-31J)
    // 0x30b1 (UTF-16BE)
    if (argCheck == 'ケ') {
        return true;
    }
    // No.341
    // 説明:8351
    // 0x8351 (Windows-31J)
    // 0x30b2 (UTF-16BE)
    if (argCheck == 'ゲ') {
        return true;
    }
    // No.342
    // 説明:8352
    // 0x8352 (Windows-31J)
    // 0x30b3 (UTF-16BE)
    if (argCheck == 'コ') {
        return true;
    }
    // No.343
    // 説明:8353
    // 0x8353 (Windows-31J)
    // 0x30b4 (UTF-16BE)
    if (argCheck == 'ゴ') {
        return true;
    }
    // No.344
    // 説明:8354
    // 0x8354 (Windows-31J)
    // 0x30b5 (UTF-16BE)
    if (argCheck == 'サ') {
        return true;
    }
    // No.345
    // 説明:8355
    // 0x8355 (Windows-31J)
    // 0x30b6 (UTF-16BE)
    if (argCheck == 'ザ') {
        return true;
    }
    // No.346
    // 説明:8356
    // 0x8356 (Windows-31J)
    // 0x30b7 (UTF-16BE)
    if (argCheck == 'シ') {
        return true;
    }
    // No.347
    // 説明:8357
    // 0x8357 (Windows-31J)
    // 0x30b8 (UTF-16BE)
    if (argCheck == 'ジ') {
        return true;
    }
    // No.348
    // 説明:8358
    // 0x8358 (Windows-31J)
    // 0x30b9 (UTF-16BE)
    if (argCheck == 'ス') {
        return true;
    }
    // No.349
    // 説明:8359
    // 0x8359 (Windows-31J)
    // 0x30ba (UTF-16BE)
    if (argCheck == 'ズ') {
        return true;
    }
    // No.350
    // 説明:835a
    // 0x835a (Windows-31J)
    // 0x30bb (UTF-16BE)
    if (argCheck == 'セ') {
        return true;
    }
    // No.351
    // 説明:835b
    // 0x835b (Windows-31J)
    // 0x30bc (UTF-16BE)
    if (argCheck == 'ゼ') {
        return true;
    }
    // No.352
    // 説明:835c
    // 0x835c (Windows-31J)
    // 0x30bd (UTF-16BE)
    if (argCheck == 'ソ') {
        return true;
    }
    // No.353
    // 説明:835d
    // 0x835d (Windows-31J)
    // 0x30be (UTF-16BE)
    if (argCheck == 'ゾ') {
        return true;
    }
    // No.354
    // 説明:835e
    // 0x835e (Windows-31J)
    // 0x30bf (UTF-16BE)
    if (argCheck == 'タ') {
        return true;
    }
    // No.355
    // 説明:835f
    // 0x835f (Windows-31J)
    // 0x30c0 (UTF-16BE)
    if (argCheck == 'ダ') {
        return true;
    }
    // No.356
    // 説明:8360
    // 0x8360 (Windows-31J)
    // 0x30c1 (UTF-16BE)
    if (argCheck == 'チ') {
        return true;
    }
    // No.357
    // 説明:8361
    // 0x8361 (Windows-31J)
    // 0x30c2 (UTF-16BE)
    if (argCheck == 'ヂ') {
        return true;
    }
    // No.358
    // 説明:8362
    // 0x8362 (Windows-31J)
    // 0x30c3 (UTF-16BE)
    if (argCheck == 'ッ') {
        return true;
    }
    // No.359
    // 説明:8363
    // 0x8363 (Windows-31J)
    // 0x30c4 (UTF-16BE)
    if (argCheck == 'ツ') {
        return true;
    }
    // No.360
    // 説明:8364
    // 0x8364 (Windows-31J)
    // 0x30c5 (UTF-16BE)
    if (argCheck == 'ヅ') {
        return true;
    }
    // No.361
    // 説明:8365
    // 0x8365 (Windows-31J)
    // 0x30c6 (UTF-16BE)
    if (argCheck == 'テ') {
        return true;
    }
    // No.362
    // 説明:8366
    // 0x8366 (Windows-31J)
    // 0x30c7 (UTF-16BE)
    if (argCheck == 'デ') {
        return true;
    }
    // No.363
    // 説明:8367
    // 0x8367 (Windows-31J)
    // 0x30c8 (UTF-16BE)
    if (argCheck == 'ト') {
        return true;
    }
    // No.364
    // 説明:8368
    // 0x8368 (Windows-31J)
    // 0x30c9 (UTF-16BE)
    if (argCheck == 'ド') {
        return true;
    }
    // No.365
    // 説明:8369
    // 0x8369 (Windows-31J)
    // 0x30ca (UTF-16BE)
    if (argCheck == 'ナ') {
        return true;
    }
    // No.366
    // 説明:836a
    // 0x836a (Windows-31J)
    // 0x30cb (UTF-16BE)
    if (argCheck == 'ニ') {
        return true;
    }
    // No.367
    // 説明:836b
    // 0x836b (Windows-31J)
    // 0x30cc (UTF-16BE)
    if (argCheck == 'ヌ') {
        return true;
    }
    // No.368
    // 説明:836c
    // 0x836c (Windows-31J)
    // 0x30cd (UTF-16BE)
    if (argCheck == 'ネ') {
        return true;
    }
    // No.369
    // 説明:836d
    // 0x836d (Windows-31J)
    // 0x30ce (UTF-16BE)
    if (argCheck == 'ノ') {
        return true;
    }
    // No.370
    // 説明:836e
    // 0x836e (Windows-31J)
    // 0x30cf (UTF-16BE)
    if (argCheck == 'ハ') {
        return true;
    }
    // No.371
    // 説明:836f
    // 0x836f (Windows-31J)
    // 0x30d0 (UTF-16BE)
    if (argCheck == 'バ') {
        return true;
    }
    // No.372
    // 説明:8370
    // 0x8370 (Windows-31J)
    // 0x30d1 (UTF-16BE)
    if (argCheck == 'パ') {
        return true;
    }
    // No.373
    // 説明:8371
    // 0x8371 (Windows-31J)
    // 0x30d2 (UTF-16BE)
    if (argCheck == 'ヒ') {
        return true;
    }
    // No.374
    // 説明:8372
    // 0x8372 (Windows-31J)
    // 0x30d3 (UTF-16BE)
    if (argCheck == 'ビ') {
        return true;
    }
    // No.375
    // 説明:8373
    // 0x8373 (Windows-31J)
    // 0x30d4 (UTF-16BE)
    if (argCheck == 'ピ') {
        return true;
    }
    // No.376
    // 説明:8374
    // 0x8374 (Windows-31J)
    // 0x30d5 (UTF-16BE)
    if (argCheck == 'フ') {
        return true;
    }
    // No.377
    // 説明:8375
    // 0x8375 (Windows-31J)
    // 0x30d6 (UTF-16BE)
    if (argCheck == 'ブ') {
        return true;
    }
    // No.378
    // 説明:8376
    // 0x8376 (Windows-31J)
    // 0x30d7 (UTF-16BE)
    if (argCheck == 'プ') {
        return true;
    }
    // No.379
    // 説明:8377
    // 0x8377 (Windows-31J)
    // 0x30d8 (UTF-16BE)
    if (argCheck == 'ヘ') {
        return true;
    }
    // No.380
    // 説明:8378
    // 0x8378 (Windows-31J)
    // 0x30d9 (UTF-16BE)
    if (argCheck == 'ベ') {
        return true;
    }
    // No.381
    // 説明:8379
    // 0x8379 (Windows-31J)
    // 0x30da (UTF-16BE)
    if (argCheck == 'ペ') {
        return true;
    }
    // No.382
    // 説明:837a
    // 0x837a (Windows-31J)
    // 0x30db (UTF-16BE)
    if (argCheck == 'ホ') {
        return true;
    }
    // No.383
    // 説明:837b
    // 0x837b (Windows-31J)
    // 0x30dc (UTF-16BE)
    if (argCheck == 'ボ') {
        return true;
    }
    // No.384
    // 説明:837c
    // 0x837c (Windows-31J)
    // 0x30dd (UTF-16BE)
    if (argCheck == 'ポ') {
        return true;
    }
    // No.385
    // 説明:837d
    // 0x837d (Windows-31J)
    // 0x30de (UTF-16BE)
    if (argCheck == 'マ') {
        return true;
    }
    // No.386
    // 説明:837e
    // 0x837e (Windows-31J)
    // 0x30df (UTF-16BE)
    if (argCheck == 'ミ') {
        return true;
    }
    // No.387
    // 説明:8380
    // 0x8380 (Windows-31J)
    // 0x30e0 (UTF-16BE)
    if (argCheck == 'ム') {
        return true;
    }
    // No.388
    // 説明:8381
    // 0x8381 (Windows-31J)
    // 0x30e1 (UTF-16BE)
    if (argCheck == 'メ') {
        return true;
    }
    // No.389
    // 説明:8382
    // 0x8382 (Windows-31J)
    // 0x30e2 (UTF-16BE)
    if (argCheck == 'モ') {
        return true;
    }
    // No.390
    // 説明:8383
    // 0x8383 (Windows-31J)
    // 0x30e3 (UTF-16BE)
    if (argCheck == 'ャ') {
        return true;
    }
    // No.391
    // 説明:8384
    // 0x8384 (Windows-31J)
    // 0x30e4 (UTF-16BE)
    if (argCheck == 'ヤ') {
        return true;
    }
    // No.392
    // 説明:8385
    // 0x8385 (Windows-31J)
    // 0x30e5 (UTF-16BE)
    if (argCheck == 'ュ') {
        return true;
    }
    // No.393
    // 説明:8386
    // 0x8386 (Windows-31J)
    // 0x30e6 (UTF-16BE)
    if (argCheck == 'ユ') {
        return true;
    }
    // No.394
    // 説明:8387
    // 0x8387 (Windows-31J)
    // 0x30e7 (UTF-16BE)
    if (argCheck == 'ョ') {
        return true;
    }
    // No.395
    // 説明:8388
    // 0x8388 (Windows-31J)
    // 0x30e8 (UTF-16BE)
    if (argCheck == 'ヨ') {
        return true;
    }
    // No.396
    // 説明:8389
    // 0x8389 (Windows-31J)
    // 0x30e9 (UTF-16BE)
    if (argCheck == 'ラ') {
        return true;
    }
    // No.397
    // 説明:838a
    // 0x838a (Windows-31J)
    // 0x30ea (UTF-16BE)
    if (argCheck == 'リ') {
        return true;
    }
    // No.398
    // 説明:838b
    // 0x838b (Windows-31J)
    // 0x30eb (UTF-16BE)
    if (argCheck == 'ル') {
        return true;
    }
    // No.399
    // 説明:838c
    // 0x838c (Windows-31J)
    // 0x30ec (UTF-16BE)
    if (argCheck == 'レ') {
        return true;
    }
    // No.400
    // 説明:838d
    // 0x838d (Windows-31J)
    // 0x30ed (UTF-16BE)
    if (argCheck == 'ロ') {
        return true;
    }
    // No.401
    // 説明:838e
    // 0x838e (Windows-31J)
    // 0x30ee (UTF-16BE)
    if (argCheck == 'ヮ') {
        return true;
    }
    // No.402
    // 説明:838f
    // 0x838f (Windows-31J)
    // 0x30ef (UTF-16BE)
    if (argCheck == 'ワ') {
        return true;
    }
    // No.403
    // 説明:8390
    // 0x8390 (Windows-31J)
    // 0x30f0 (UTF-16BE)
    if (argCheck == 'ヰ') {
        return true;
    }
    // No.404
    // 説明:8391
    // 0x8391 (Windows-31J)
    // 0x30f1 (UTF-16BE)
    if (argCheck == 'ヱ') {
        return true;
    }
    // No.405
    // 説明:8392
    // 0x8392 (Windows-31J)
    // 0x30f2 (UTF-16BE)
    if (argCheck == 'ヲ') {
        return true;
    }
    // No.406
    // 説明:8393
    // 0x8393 (Windows-31J)
    // 0x30f3 (UTF-16BE)
    if (argCheck == 'ン') {
        return true;
    }
    // No.407
    // 説明:8394
    // 0x8394 (Windows-31J)
    // 0x30f4 (UTF-16BE)
    if (argCheck == 'ヴ') {
        return true;
    }
    // No.408
    // 説明:8395
    // 0x8395 (Windows-31J)
    // 0x30f5 (UTF-16BE)
    if (argCheck == 'ヵ') {
        return true;
    }
    // No.409
    // 説明:8396
    // 0x8396 (Windows-31J)
    // 0x30f6 (UTF-16BE)
    if (argCheck == 'ヶ') {
        return true;
    }
    // No.413
    // 説明:839f
    // 0x839f (Windows-31J)
    // 0x0391 (UTF-16BE)
    if (argCheck == 'Α') {
        return true;
    }
    // No.414
    // 説明:83a0
    // 0x83a0 (Windows-31J)
    // 0x0392 (UTF-16BE)
    if (argCheck == 'Β') {
        return true;
    }
    // No.415
    // 説明:83a1
    // 0x83a1 (Windows-31J)
    // 0x0393 (UTF-16BE)
    if (argCheck == 'Γ') {
        return true;
    }
    // No.416
    // 説明:83a2
    // 0x83a2 (Windows-31J)
    // 0x0394 (UTF-16BE)
    if (argCheck == 'Δ') {
        return true;
    }
    // No.417
    // 説明:83a3
    // 0x83a3 (Windows-31J)
    // 0x0395 (UTF-16BE)
    if (argCheck == 'Ε') {
        return true;
    }
    // No.418
    // 説明:83a4
    // 0x83a4 (Windows-31J)
    // 0x0396 (UTF-16BE)
    if (argCheck == 'Ζ') {
        return true;
    }
    // No.419
    // 説明:83a5
    // 0x83a5 (Windows-31J)
    // 0x0397 (UTF-16BE)
    if (argCheck == 'Η') {
        return true;
    }
    // No.420
    // 説明:83a6
    // 0x83a6 (Windows-31J)
    // 0x0398 (UTF-16BE)
    if (argCheck == 'Θ') {
        return true;
    }
    // No.421
    // 説明:83a7
    // 0x83a7 (Windows-31J)
    // 0x0399 (UTF-16BE)
    if (argCheck == 'Ι') {
        return true;
    }
    // No.422
    // 説明:83a8
    // 0x83a8 (Windows-31J)
    // 0x039a (UTF-16BE)
    if (argCheck == 'Κ') {
        return true;
    }
    // No.423
    // 説明:83a9
    // 0x83a9 (Windows-31J)
    // 0x039b (UTF-16BE)
    if (argCheck == 'Λ') {
        return true;
    }
    // No.424
    // 説明:83aa
    // 0x83aa (Windows-31J)
    // 0x039c (UTF-16BE)
    if (argCheck == 'Μ') {
        return true;
    }
    // No.425
    // 説明:83ab
    // 0x83ab (Windows-31J)
    // 0x039d (UTF-16BE)
    if (argCheck == 'Ν') {
        return true;
    }
    // No.426
    // 説明:83ac
    // 0x83ac (Windows-31J)
    // 0x039e (UTF-16BE)
    if (argCheck == 'Ξ') {
        return true;
    }
    // No.427
    // 説明:83ad
    // 0x83ad (Windows-31J)
    // 0x039f (UTF-16BE)
    if (argCheck == 'Ο') {
        return true;
    }
    // No.428
    // 説明:83ae
    // 0x83ae (Windows-31J)
    // 0x03a0 (UTF-16BE)
    if (argCheck == 'Π') {
        return true;
    }
    // No.429
    // 説明:83af
    // 0x83af (Windows-31J)
    // 0x03a1 (UTF-16BE)
    if (argCheck == 'Ρ') {
        return true;
    }
    // No.430
    // 説明:83b0
    // 0x83b0 (Windows-31J)
    // 0x03a3 (UTF-16BE)
    if (argCheck == 'Σ') {
        return true;
    }
    // No.431
    // 説明:83b1
    // 0x83b1 (Windows-31J)
    // 0x03a4 (UTF-16BE)
    if (argCheck == 'Τ') {
        return true;
    }
    // No.432
    // 説明:83b2
    // 0x83b2 (Windows-31J)
    // 0x03a5 (UTF-16BE)
    if (argCheck == 'Υ') {
        return true;
    }
    // No.433
    // 説明:83b3
    // 0x83b3 (Windows-31J)
    // 0x03a6 (UTF-16BE)
    if (argCheck == 'Φ') {
        return true;
    }
    // No.434
    // 説明:83b4
    // 0x83b4 (Windows-31J)
    // 0x03a7 (UTF-16BE)
    if (argCheck == 'Χ') {
        return true;
    }
    // No.435
    // 説明:83b5
    // 0x83b5 (Windows-31J)
    // 0x03a8 (UTF-16BE)
    if (argCheck == 'Ψ') {
        return true;
    }
    // No.436
    // 説明:83b6
    // 0x83b6 (Windows-31J)
    // 0x03a9 (UTF-16BE)
    if (argCheck == 'Ω') {
        return true;
    }
    // No.440
    // 説明:83bf
    // 0x83bf (Windows-31J)
    // 0x03b1 (UTF-16BE)
    if (argCheck == 'α') {
        return true;
    }
    // No.441
    // 説明:83c0
    // 0x83c0 (Windows-31J)
    // 0x03b2 (UTF-16BE)
    if (argCheck == 'β') {
        return true;
    }
    // No.442
    // 説明:83c1
    // 0x83c1 (Windows-31J)
    // 0x03b3 (UTF-16BE)
    if (argCheck == 'γ') {
        return true;
    }
    // No.443
    // 説明:83c2
    // 0x83c2 (Windows-31J)
    // 0x03b4 (UTF-16BE)
    if (argCheck == 'δ') {
        return true;
    }
    // No.444
    // 説明:83c3
    // 0x83c3 (Windows-31J)
    // 0x03b5 (UTF-16BE)
    if (argCheck == 'ε') {
        return true;
    }
    // No.445
    // 説明:83c4
    // 0x83c4 (Windows-31J)
    // 0x03b6 (UTF-16BE)
    if (argCheck == 'ζ') {
        return true;
    }
    // No.446
    // 説明:83c5
    // 0x83c5 (Windows-31J)
    // 0x03b7 (UTF-16BE)
    if (argCheck == 'η') {
        return true;
    }
    // No.447
    // 説明:83c6
    // 0x83c6 (Windows-31J)
    // 0x03b8 (UTF-16BE)
    if (argCheck == 'θ') {
        return true;
    }
    // No.448
    // 説明:83c7
    // 0x83c7 (Windows-31J)
    // 0x03b9 (UTF-16BE)
    if (argCheck == 'ι') {
        return true;
    }
    // No.449
    // 説明:83c8
    // 0x83c8 (Windows-31J)
    // 0x03ba (UTF-16BE)
    if (argCheck == 'κ') {
        return true;
    }
    // No.450
    // 説明:83c9
    // 0x83c9 (Windows-31J)
    // 0x03bb (UTF-16BE)
    if (argCheck == 'λ') {
        return true;
    }
    // No.451
    // 説明:83ca
    // 0x83ca (Windows-31J)
    // 0x03bc (UTF-16BE)
    if (argCheck == 'μ') {
        return true;
    }
    // No.452
    // 説明:83cb
    // 0x83cb (Windows-31J)
    // 0x03bd (UTF-16BE)
    if (argCheck == 'ν') {
        return true;
    }
    // No.453
    // 説明:83cc
    // 0x83cc (Windows-31J)
    // 0x03be (UTF-16BE)
    if (argCheck == 'ξ') {
        return true;
    }
    // No.454
    // 説明:83cd
    // 0x83cd (Windows-31J)
    // 0x03bf (UTF-16BE)
    if (argCheck == 'ο') {
        return true;
    }
    // No.455
    // 説明:83ce
    // 0x83ce (Windows-31J)
    // 0x03c0 (UTF-16BE)
    if (argCheck == 'π') {
        return true;
    }
    // No.456
    // 説明:83cf
    // 0x83cf (Windows-31J)
    // 0x03c1 (UTF-16BE)
    if (argCheck == 'ρ') {
        return true;
    }
    // No.457
    // 説明:83d0
    // 0x83d0 (Windows-31J)
    // 0x03c3 (UTF-16BE)
    if (argCheck == 'σ') {
        return true;
    }
    // No.458
    // 説明:83d1
    // 0x83d1 (Windows-31J)
    // 0x03c4 (UTF-16BE)
    if (argCheck == 'τ') {
        return true;
    }
    // No.459
    // 説明:83d2
    // 0x83d2 (Windows-31J)
    // 0x03c5 (UTF-16BE)
    if (argCheck == 'υ') {
        return true;
    }
    // No.460
    // 説明:83d3
    // 0x83d3 (Windows-31J)
    // 0x03c6 (UTF-16BE)
    if (argCheck == 'φ') {
        return true;
    }
    // No.461
    // 説明:83d4
    // 0x83d4 (Windows-31J)
    // 0x03c7 (UTF-16BE)
    if (argCheck == 'χ') {
        return true;
    }
    // No.462
    // 説明:83d5
    // 0x83d5 (Windows-31J)
    // 0x03c8 (UTF-16BE)
    if (argCheck == 'ψ') {
        return true;
    }
    // No.463
    // 説明:83d6
    // 0x83d6 (Windows-31J)
    // 0x03c9 (UTF-16BE)
    if (argCheck == 'ω') {
        return true;
    }
    // No.467
    // 説明:8440
    // 0x8440 (Windows-31J)
    // 0x0410 (UTF-16BE)
    if (argCheck == 'А') {
        return true;
    }
    // No.468
    // 説明:8441
    // 0x8441 (Windows-31J)
    // 0x0411 (UTF-16BE)
    if (argCheck == 'Б') {
        return true;
    }
    // No.469
    // 説明:8442
    // 0x8442 (Windows-31J)
    // 0x0412 (UTF-16BE)
    if (argCheck == 'В') {
        return true;
    }
    // No.470
    // 説明:8443
    // 0x8443 (Windows-31J)
    // 0x0413 (UTF-16BE)
    if (argCheck == 'Г') {
        return true;
    }
    // No.471
    // 説明:8444
    // 0x8444 (Windows-31J)
    // 0x0414 (UTF-16BE)
    if (argCheck == 'Д') {
        return true;
    }
    // No.472
    // 説明:8445
    // 0x8445 (Windows-31J)
    // 0x0415 (UTF-16BE)
    if (argCheck == 'Е') {
        return true;
    }
    // No.473
    // 説明:8446
    // 0x8446 (Windows-31J)
    // 0x0401 (UTF-16BE)
    if (argCheck == 'Ё') {
        return true;
    }
    // No.474
    // 説明:8447
    // 0x8447 (Windows-31J)
    // 0x0416 (UTF-16BE)
    if (argCheck == 'Ж') {
        return true;
    }
    // No.475
    // 説明:8448
    // 0x8448 (Windows-31J)
    // 0x0417 (UTF-16BE)
    if (argCheck == 'З') {
        return true;
    }
    // No.476
    // 説明:8449
    // 0x8449 (Windows-31J)
    // 0x0418 (UTF-16BE)
    if (argCheck == 'И') {
        return true;
    }
    // No.477
    // 説明:844a
    // 0x844a (Windows-31J)
    // 0x0419 (UTF-16BE)
    if (argCheck == 'Й') {
        return true;
    }
    // No.478
    // 説明:844b
    // 0x844b (Windows-31J)
    // 0x041a (UTF-16BE)
    if (argCheck == 'К') {
        return true;
    }
    // No.479
    // 説明:844c
    // 0x844c (Windows-31J)
    // 0x041b (UTF-16BE)
    if (argCheck == 'Л') {
        return true;
    }
    // No.480
    // 説明:844d
    // 0x844d (Windows-31J)
    // 0x041c (UTF-16BE)
    if (argCheck == 'М') {
        return true;
    }
    // No.481
    // 説明:844e
    // 0x844e (Windows-31J)
    // 0x041d (UTF-16BE)
    if (argCheck == 'Н') {
        return true;
    }
    // No.482
    // 説明:844f
    // 0x844f (Windows-31J)
    // 0x041e (UTF-16BE)
    if (argCheck == 'О') {
        return true;
    }
    // No.483
    // 説明:8450
    // 0x8450 (Windows-31J)
    // 0x041f (UTF-16BE)
    if (argCheck == 'П') {
        return true;
    }
    // No.484
    // 説明:8451
    // 0x8451 (Windows-31J)
    // 0x0420 (UTF-16BE)
    if (argCheck == 'Р') {
        return true;
    }
    // No.485
    // 説明:8452
    // 0x8452 (Windows-31J)
    // 0x0421 (UTF-16BE)
    if (argCheck == 'С') {
        return true;
    }
    // No.486
    // 説明:8453
    // 0x8453 (Windows-31J)
    // 0x0422 (UTF-16BE)
    if (argCheck == 'Т') {
        return true;
    }
    // No.487
    // 説明:8454
    // 0x8454 (Windows-31J)
    // 0x0423 (UTF-16BE)
    if (argCheck == 'У') {
        return true;
    }
    // No.488
    // 説明:8455
    // 0x8455 (Windows-31J)
    // 0x0424 (UTF-16BE)
    if (argCheck == 'Ф') {
        return true;
    }
    // No.489
    // 説明:8456
    // 0x8456 (Windows-31J)
    // 0x0425 (UTF-16BE)
    if (argCheck == 'Х') {
        return true;
    }
    // No.490
    // 説明:8457
    // 0x8457 (Windows-31J)
    // 0x0426 (UTF-16BE)
    if (argCheck == 'Ц') {
        return true;
    }
    // No.491
    // 説明:8458
    // 0x8458 (Windows-31J)
    // 0x0427 (UTF-16BE)
    if (argCheck == 'Ч') {
        return true;
    }
    // No.492
    // 説明:8459
    // 0x8459 (Windows-31J)
    // 0x0428 (UTF-16BE)
    if (argCheck == 'Ш') {
        return true;
    }
    // No.493
    // 説明:845a
    // 0x845a (Windows-31J)
    // 0x0429 (UTF-16BE)
    if (argCheck == 'Щ') {
        return true;
    }
    // No.494
    // 説明:845b
    // 0x845b (Windows-31J)
    // 0x042a (UTF-16BE)
    if (argCheck == 'Ъ') {
        return true;
    }
    // No.495
    // 説明:845c
    // 0x845c (Windows-31J)
    // 0x042b (UTF-16BE)
    if (argCheck == 'Ы') {
        return true;
    }
    // No.496
    // 説明:845d
    // 0x845d (Windows-31J)
    // 0x042c (UTF-16BE)
    if (argCheck == 'Ь') {
        return true;
    }
    // No.497
    // 説明:845e
    // 0x845e (Windows-31J)
    // 0x042d (UTF-16BE)
    if (argCheck == 'Э') {
        return true;
    }
    // No.498
    // 説明:845f
    // 0x845f (Windows-31J)
    // 0x042e (UTF-16BE)
    if (argCheck == 'Ю') {
        return true;
    }
    // No.499
    // 説明:8460
    // 0x8460 (Windows-31J)
    // 0x042f (UTF-16BE)
    if (argCheck == 'Я') {
        return true;
    }
    // No.503
    // 説明:8470
    // 0x8470 (Windows-31J)
    // 0x0430 (UTF-16BE)
    if (argCheck == 'а') {
        return true;
    }
    // No.504
    // 説明:8471
    // 0x8471 (Windows-31J)
    // 0x0431 (UTF-16BE)
    if (argCheck == 'б') {
        return true;
    }
    // No.505
    // 説明:8472
    // 0x8472 (Windows-31J)
    // 0x0432 (UTF-16BE)
    if (argCheck == 'в') {
        return true;
    }
    // No.506
    // 説明:8473
    // 0x8473 (Windows-31J)
    // 0x0433 (UTF-16BE)
    if (argCheck == 'г') {
        return true;
    }
    // No.507
    // 説明:8474
    // 0x8474 (Windows-31J)
    // 0x0434 (UTF-16BE)
    if (argCheck == 'д') {
        return true;
    }
    // No.508
    // 説明:8475
    // 0x8475 (Windows-31J)
    // 0x0435 (UTF-16BE)
    if (argCheck == 'е') {
        return true;
    }
    // No.509
    // 説明:8476
    // 0x8476 (Windows-31J)
    // 0x0451 (UTF-16BE)
    if (argCheck == 'ё') {
        return true;
    }
    // No.510
    // 説明:8477
    // 0x8477 (Windows-31J)
    // 0x0436 (UTF-16BE)
    if (argCheck == 'ж') {
        return true;
    }
    // No.511
    // 説明:8478
    // 0x8478 (Windows-31J)
    // 0x0437 (UTF-16BE)
    if (argCheck == 'з') {
        return true;
    }
    // No.512
    // 説明:8479
    // 0x8479 (Windows-31J)
    // 0x0438 (UTF-16BE)
    if (argCheck == 'и') {
        return true;
    }
    // No.513
    // 説明:847a
    // 0x847a (Windows-31J)
    // 0x0439 (UTF-16BE)
    if (argCheck == 'й') {
        return true;
    }
    // No.514
    // 説明:847b
    // 0x847b (Windows-31J)
    // 0x043a (UTF-16BE)
    if (argCheck == 'к') {
        return true;
    }
    // No.515
    // 説明:847c
    // 0x847c (Windows-31J)
    // 0x043b (UTF-16BE)
    if (argCheck == 'л') {
        return true;
    }
    // No.516
    // 説明:847d
    // 0x847d (Windows-31J)
    // 0x043c (UTF-16BE)
    if (argCheck == 'м') {
        return true;
    }
    // No.517
    // 説明:847e
    // 0x847e (Windows-31J)
    // 0x043d (UTF-16BE)
    if (argCheck == 'н') {
        return true;
    }
    // No.518
    // 説明:8480
    // 0x8480 (Windows-31J)
    // 0x043e (UTF-16BE)
    if (argCheck == 'о') {
        return true;
    }
    // No.519
    // 説明:8481
    // 0x8481 (Windows-31J)
    // 0x043f (UTF-16BE)
    if (argCheck == 'п') {
        return true;
    }
    // No.520
    // 説明:8482
    // 0x8482 (Windows-31J)
    // 0x0440 (UTF-16BE)
    if (argCheck == 'р') {
        return true;
    }
    // No.521
    // 説明:8483
    // 0x8483 (Windows-31J)
    // 0x0441 (UTF-16BE)
    if (argCheck == 'с') {
        return true;
    }
    // No.522
    // 説明:8484
    // 0x8484 (Windows-31J)
    // 0x0442 (UTF-16BE)
    if (argCheck == 'т') {
        return true;
    }
    // No.523
    // 説明:8485
    // 0x8485 (Windows-31J)
    // 0x0443 (UTF-16BE)
    if (argCheck == 'у') {
        return true;
    }
    // No.524
    // 説明:8486
    // 0x8486 (Windows-31J)
    // 0x0444 (UTF-16BE)
    if (argCheck == 'ф') {
        return true;
    }
    // No.525
    // 説明:8487
    // 0x8487 (Windows-31J)
    // 0x0445 (UTF-16BE)
    if (argCheck == 'х') {
        return true;
    }
    // No.526
    // 説明:8488
    // 0x8488 (Windows-31J)
    // 0x0446 (UTF-16BE)
    if (argCheck == 'ц') {
        return true;
    }
    // No.527
    // 説明:8489
    // 0x8489 (Windows-31J)
    // 0x0447 (UTF-16BE)
    if (argCheck == 'ч') {
        return true;
    }
    // No.528
    // 説明:848a
    // 0x848a (Windows-31J)
    // 0x0448 (UTF-16BE)
    if (argCheck == 'ш') {
        return true;
    }
    // No.529
    // 説明:848b
    // 0x848b (Windows-31J)
    // 0x0449 (UTF-16BE)
    if (argCheck == 'щ') {
        return true;
    }
    // No.530
    // 説明:848c
    // 0x848c (Windows-31J)
    // 0x044a (UTF-16BE)
    if (argCheck == 'ъ') {
        return true;
    }
    // No.531
    // 説明:848d
    // 0x848d (Windows-31J)
    // 0x044b (UTF-16BE)
    if (argCheck == 'ы') {
        return true;
    }
    // No.532
    // 説明:848e
    // 0x848e (Windows-31J)
    // 0x044c (UTF-16BE)
    if (argCheck == 'ь') {
        return true;
    }
    // No.533
    // 説明:848f
    // 0x848f (Windows-31J)
    // 0x044d (UTF-16BE)
    if (argCheck == 'э') {
        return true;
    }
    // No.534
    // 説明:8490
    // 0x8490 (Windows-31J)
    // 0x044e (UTF-16BE)
    if (argCheck == 'ю') {
        return true;
    }
    // No.535
    // 説明:8491
    // 0x8491 (Windows-31J)
    // 0x044f (UTF-16BE)
    if (argCheck == 'я') {
        return true;
    }
    // No.539
    // 説明:849f
    // 0x849f (Windows-31J)
    // 0x2500 (UTF-16BE)
    if (argCheck == '─') {
        return true;
    }
    // No.540
    // 説明:84a0
    // 0x84a0 (Windows-31J)
    // 0x2502 (UTF-16BE)
    if (argCheck == '│') {
        return true;
    }
    // No.541
    // 説明:84a1
    // 0x84a1 (Windows-31J)
    // 0x250c (UTF-16BE)
    if (argCheck == '┌') {
        return true;
    }
    // No.542
    // 説明:84a2
    // 0x84a2 (Windows-31J)
    // 0x2510 (UTF-16BE)
    if (argCheck == '┐') {
        return true;
    }
    // No.543
    // 説明:84a3
    // 0x84a3 (Windows-31J)
    // 0x2518 (UTF-16BE)
    if (argCheck == '┘') {
        return true;
    }
    // No.544
    // 説明:84a4
    // 0x84a4 (Windows-31J)
    // 0x2514 (UTF-16BE)
    if (argCheck == '└') {
        return true;
    }
    // No.545
    // 説明:84a5
    // 0x84a5 (Windows-31J)
    // 0x251c (UTF-16BE)
    if (argCheck == '├') {
        return true;
    }
    // No.546
    // 説明:84a6
    // 0x84a6 (Windows-31J)
    // 0x252c (UTF-16BE)
    if (argCheck == '┬') {
        return true;
    }
    // No.547
    // 説明:84a7
    // 0x84a7 (Windows-31J)
    // 0x2524 (UTF-16BE)
    if (argCheck == '┤') {
        return true;
    }
    // No.548
    // 説明:84a8
    // 0x84a8 (Windows-31J)
    // 0x2534 (UTF-16BE)
    if (argCheck == '┴') {
        return true;
    }
    // No.549
    // 説明:84a9
    // 0x84a9 (Windows-31J)
    // 0x253c (UTF-16BE)
    if (argCheck == '┼') {
        return true;
    }
    // No.550
    // 説明:84aa
    // 0x84aa (Windows-31J)
    // 0x2501 (UTF-16BE)
    if (argCheck == '━') {
        return true;
    }
    // No.551
    // 説明:84ab
    // 0x84ab (Windows-31J)
    // 0x2503 (UTF-16BE)
    if (argCheck == '┃') {
        return true;
    }
    // No.552
    // 説明:84ac
    // 0x84ac (Windows-31J)
    // 0x250f (UTF-16BE)
    if (argCheck == '┏') {
        return true;
    }
    // No.553
    // 説明:84ad
    // 0x84ad (Windows-31J)
    // 0x2513 (UTF-16BE)
    if (argCheck == '┓') {
        return true;
    }
    // No.554
    // 説明:84ae
    // 0x84ae (Windows-31J)
    // 0x251b (UTF-16BE)
    if (argCheck == '┛') {
        return true;
    }
    // No.555
    // 説明:84af
    // 0x84af (Windows-31J)
    // 0x2517 (UTF-16BE)
    if (argCheck == '┗') {
        return true;
    }
    // No.556
    // 説明:84b0
    // 0x84b0 (Windows-31J)
    // 0x2523 (UTF-16BE)
    if (argCheck == '┣') {
        return true;
    }
    // No.557
    // 説明:84b1
    // 0x84b1 (Windows-31J)
    // 0x2533 (UTF-16BE)
    if (argCheck == '┳') {
        return true;
    }
    // No.558
    // 説明:84b2
    // 0x84b2 (Windows-31J)
    // 0x252b (UTF-16BE)
    if (argCheck == '┫') {
        return true;
    }
    // No.559
    // 説明:84b3
    // 0x84b3 (Windows-31J)
    // 0x253b (UTF-16BE)
    if (argCheck == '┻') {
        return true;
    }
    // No.560
    // 説明:84b4
    // 0x84b4 (Windows-31J)
    // 0x254b (UTF-16BE)
    if (argCheck == '╋') {
        return true;
    }
    // No.561
    // 説明:84b5
    // 0x84b5 (Windows-31J)
    // 0x2520 (UTF-16BE)
    if (argCheck == '┠') {
        return true;
    }
    // No.562
    // 説明:84b6
    // 0x84b6 (Windows-31J)
    // 0x252f (UTF-16BE)
    if (argCheck == '┯') {
        return true;
    }
    // No.563
    // 説明:84b7
    // 0x84b7 (Windows-31J)
    // 0x2528 (UTF-16BE)
    if (argCheck == '┨') {
        return true;
    }
    // No.564
    // 説明:84b8
    // 0x84b8 (Windows-31J)
    // 0x2537 (UTF-16BE)
    if (argCheck == '┷') {
        return true;
    }
    // No.565
    // 説明:84b9
    // 0x84b9 (Windows-31J)
    // 0x253f (UTF-16BE)
    if (argCheck == '┿') {
        return true;
    }
    // No.566
    // 説明:84ba
    // 0x84ba (Windows-31J)
    // 0x251d (UTF-16BE)
    if (argCheck == '┝') {
        return true;
    }
    // No.567
    // 説明:84bb
    // 0x84bb (Windows-31J)
    // 0x2530 (UTF-16BE)
    if (argCheck == '┰') {
        return true;
    }
    // No.568
    // 説明:84bc
    // 0x84bc (Windows-31J)
    // 0x2525 (UTF-16BE)
    if (argCheck == '┥') {
        return true;
    }
    // No.569
    // 説明:84bd
    // 0x84bd (Windows-31J)
    // 0x2538 (UTF-16BE)
    if (argCheck == '┸') {
        return true;
    }
    // No.570
    // 説明:84be
    // 0x84be (Windows-31J)
    // 0x2542 (UTF-16BE)
    if (argCheck == '╂') {
        return true;
    }
    // No.575
    // 説明:889f
    // 0x889f (Windows-31J)
    // 0x4e9c (UTF-16BE)
    if (argCheck == '亜') {
        return true;
    }
    // No.576
    // 説明:88a0
    // 0x88a0 (Windows-31J)
    // 0x5516 (UTF-16BE)
    if (argCheck == '唖') {
        return true;
    }
    // No.577
    // 説明:88a1
    // 0x88a1 (Windows-31J)
    // 0x5a03 (UTF-16BE)
    if (argCheck == '娃') {
        return true;
    }
    // No.578
    // 説明:88a2
    // 0x88a2 (Windows-31J)
    // 0x963f (UTF-16BE)
    if (argCheck == '阿') {
        return true;
    }
    // No.579
    // 説明:88a3
    // 0x88a3 (Windows-31J)
    // 0x54c0 (UTF-16BE)
    if (argCheck == '哀') {
        return true;
    }
    // No.580
    // 説明:88a4
    // 0x88a4 (Windows-31J)
    // 0x611b (UTF-16BE)
    if (argCheck == '愛') {
        return true;
    }
    // No.581
    // 説明:88a5
    // 0x88a5 (Windows-31J)
    // 0x6328 (UTF-16BE)
    if (argCheck == '挨') {
        return true;
    }
    // No.582
    // 説明:88a6
    // 0x88a6 (Windows-31J)
    // 0x59f6 (UTF-16BE)
    if (argCheck == '姶') {
        return true;
    }
    // No.583
    // 説明:88a7
    // 0x88a7 (Windows-31J)
    // 0x9022 (UTF-16BE)
    if (argCheck == '逢') {
        return true;
    }
    // No.584
    // 説明:88a8
    // 0x88a8 (Windows-31J)
    // 0x8475 (UTF-16BE)
    if (argCheck == '葵') {
        return true;
    }
    // No.585
    // 説明:88a9
    // 0x88a9 (Windows-31J)
    // 0x831c (UTF-16BE)
    if (argCheck == '茜') {
        return true;
    }
    // No.586
    // 説明:88aa
    // 0x88aa (Windows-31J)
    // 0x7a50 (UTF-16BE)
    if (argCheck == '穐') {
        return true;
    }
    // No.587
    // 説明:88ab
    // 0x88ab (Windows-31J)
    // 0x60aa (UTF-16BE)
    if (argCheck == '悪') {
        return true;
    }
    // No.588
    // 説明:88ac
    // 0x88ac (Windows-31J)
    // 0x63e1 (UTF-16BE)
    if (argCheck == '握') {
        return true;
    }
    // No.589
    // 説明:88ad
    // 0x88ad (Windows-31J)
    // 0x6e25 (UTF-16BE)
    if (argCheck == '渥') {
        return true;
    }
    // No.590
    // 説明:88ae
    // 0x88ae (Windows-31J)
    // 0x65ed (UTF-16BE)
    if (argCheck == '旭') {
        return true;
    }
    // No.591
    // 説明:88af
    // 0x88af (Windows-31J)
    // 0x8466 (UTF-16BE)
    if (argCheck == '葦') {
        return true;
    }
    // No.592
    // 説明:88b0
    // 0x88b0 (Windows-31J)
    // 0x82a6 (UTF-16BE)
    if (argCheck == '芦') {
        return true;
    }
    // No.593
    // 説明:88b1
    // 0x88b1 (Windows-31J)
    // 0x9bf5 (UTF-16BE)
    if (argCheck == '鯵') {
        return true;
    }
    // No.594
    // 説明:88b2
    // 0x88b2 (Windows-31J)
    // 0x6893 (UTF-16BE)
    if (argCheck == '梓') {
        return true;
    }
    // No.595
    // 説明:88b3
    // 0x88b3 (Windows-31J)
    // 0x5727 (UTF-16BE)
    if (argCheck == '圧') {
        return true;
    }
    // No.596
    // 説明:88b4
    // 0x88b4 (Windows-31J)
    // 0x65a1 (UTF-16BE)
    if (argCheck == '斡') {
        return true;
    }
    // No.597
    // 説明:88b5
    // 0x88b5 (Windows-31J)
    // 0x6271 (UTF-16BE)
    if (argCheck == '扱') {
        return true;
    }
    // No.598
    // 説明:88b6
    // 0x88b6 (Windows-31J)
    // 0x5b9b (UTF-16BE)
    if (argCheck == '宛') {
        return true;
    }
    // No.599
    // 説明:88b7
    // 0x88b7 (Windows-31J)
    // 0x59d0 (UTF-16BE)
    if (argCheck == '姐') {
        return true;
    }
    // No.600
    // 説明:88b8
    // 0x88b8 (Windows-31J)
    // 0x867b (UTF-16BE)
    if (argCheck == '虻') {
        return true;
    }
    // No.601
    // 説明:88b9
    // 0x88b9 (Windows-31J)
    // 0x98f4 (UTF-16BE)
    if (argCheck == '飴') {
        return true;
    }
    // No.602
    // 説明:88ba
    // 0x88ba (Windows-31J)
    // 0x7d62 (UTF-16BE)
    if (argCheck == '絢') {
        return true;
    }
    // No.603
    // 説明:88bb
    // 0x88bb (Windows-31J)
    // 0x7dbe (UTF-16BE)
    if (argCheck == '綾') {
        return true;
    }
    // No.604
    // 説明:88bc
    // 0x88bc (Windows-31J)
    // 0x9b8e (UTF-16BE)
    if (argCheck == '鮎') {
        return true;
    }
    // No.605
    // 説明:88bd
    // 0x88bd (Windows-31J)
    // 0x6216 (UTF-16BE)
    if (argCheck == '或') {
        return true;
    }
    // No.606
    // 説明:88be
    // 0x88be (Windows-31J)
    // 0x7c9f (UTF-16BE)
    if (argCheck == '粟') {
        return true;
    }
    // No.607
    // 説明:88bf
    // 0x88bf (Windows-31J)
    // 0x88b7 (UTF-16BE)
    if (argCheck == '袷') {
        return true;
    }
    // No.608
    // 説明:88c0
    // 0x88c0 (Windows-31J)
    // 0x5b89 (UTF-16BE)
    if (argCheck == '安') {
        return true;
    }
    // No.609
    // 説明:88c1
    // 0x88c1 (Windows-31J)
    // 0x5eb5 (UTF-16BE)
    if (argCheck == '庵') {
        return true;
    }
    // No.610
    // 説明:88c2
    // 0x88c2 (Windows-31J)
    // 0x6309 (UTF-16BE)
    if (argCheck == '按') {
        return true;
    }
    // No.611
    // 説明:88c3
    // 0x88c3 (Windows-31J)
    // 0x6697 (UTF-16BE)
    if (argCheck == '暗') {
        return true;
    }
    // No.612
    // 説明:88c4
    // 0x88c4 (Windows-31J)
    // 0x6848 (UTF-16BE)
    if (argCheck == '案') {
        return true;
    }
    // No.613
    // 説明:88c5
    // 0x88c5 (Windows-31J)
    // 0x95c7 (UTF-16BE)
    if (argCheck == '闇') {
        return true;
    }
    // No.614
    // 説明:88c6
    // 0x88c6 (Windows-31J)
    // 0x978d (UTF-16BE)
    if (argCheck == '鞍') {
        return true;
    }
    // No.615
    // 説明:88c7
    // 0x88c7 (Windows-31J)
    // 0x674f (UTF-16BE)
    if (argCheck == '杏') {
        return true;
    }
    // No.616
    // 説明:88c8
    // 0x88c8 (Windows-31J)
    // 0x4ee5 (UTF-16BE)
    if (argCheck == '以') {
        return true;
    }
    // No.617
    // 説明:88c9
    // 0x88c9 (Windows-31J)
    // 0x4f0a (UTF-16BE)
    if (argCheck == '伊') {
        return true;
    }
    // No.618
    // 説明:88ca
    // 0x88ca (Windows-31J)
    // 0x4f4d (UTF-16BE)
    if (argCheck == '位') {
        return true;
    }
    // No.619
    // 説明:88cb
    // 0x88cb (Windows-31J)
    // 0x4f9d (UTF-16BE)
    if (argCheck == '依') {
        return true;
    }
    // No.620
    // 説明:88cc
    // 0x88cc (Windows-31J)
    // 0x5049 (UTF-16BE)
    if (argCheck == '偉') {
        return true;
    }
    // No.621
    // 説明:88cd
    // 0x88cd (Windows-31J)
    // 0x56f2 (UTF-16BE)
    if (argCheck == '囲') {
        return true;
    }
    // No.622
    // 説明:88ce
    // 0x88ce (Windows-31J)
    // 0x5937 (UTF-16BE)
    if (argCheck == '夷') {
        return true;
    }
    // No.623
    // 説明:88cf
    // 0x88cf (Windows-31J)
    // 0x59d4 (UTF-16BE)
    if (argCheck == '委') {
        return true;
    }
    // No.624
    // 説明:88d0
    // 0x88d0 (Windows-31J)
    // 0x5a01 (UTF-16BE)
    if (argCheck == '威') {
        return true;
    }
    // No.625
    // 説明:88d1
    // 0x88d1 (Windows-31J)
    // 0x5c09 (UTF-16BE)
    if (argCheck == '尉') {
        return true;
    }
    // No.626
    // 説明:88d2
    // 0x88d2 (Windows-31J)
    // 0x60df (UTF-16BE)
    if (argCheck == '惟') {
        return true;
    }
    // No.627
    // 説明:88d3
    // 0x88d3 (Windows-31J)
    // 0x610f (UTF-16BE)
    if (argCheck == '意') {
        return true;
    }
    // No.628
    // 説明:88d4
    // 0x88d4 (Windows-31J)
    // 0x6170 (UTF-16BE)
    if (argCheck == '慰') {
        return true;
    }
    // No.629
    // 説明:88d5
    // 0x88d5 (Windows-31J)
    // 0x6613 (UTF-16BE)
    if (argCheck == '易') {
        return true;
    }
    // No.630
    // 説明:88d6
    // 0x88d6 (Windows-31J)
    // 0x6905 (UTF-16BE)
    if (argCheck == '椅') {
        return true;
    }
    // No.631
    // 説明:88d7
    // 0x88d7 (Windows-31J)
    // 0x70ba (UTF-16BE)
    if (argCheck == '為') {
        return true;
    }
    // No.632
    // 説明:88d8
    // 0x88d8 (Windows-31J)
    // 0x754f (UTF-16BE)
    if (argCheck == '畏') {
        return true;
    }
    // No.633
    // 説明:88d9
    // 0x88d9 (Windows-31J)
    // 0x7570 (UTF-16BE)
    if (argCheck == '異') {
        return true;
    }
    // No.634
    // 説明:88da
    // 0x88da (Windows-31J)
    // 0x79fb (UTF-16BE)
    if (argCheck == '移') {
        return true;
    }
    // No.635
    // 説明:88db
    // 0x88db (Windows-31J)
    // 0x7dad (UTF-16BE)
    if (argCheck == '維') {
        return true;
    }
    // No.636
    // 説明:88dc
    // 0x88dc (Windows-31J)
    // 0x7def (UTF-16BE)
    if (argCheck == '緯') {
        return true;
    }
    // No.637
    // 説明:88dd
    // 0x88dd (Windows-31J)
    // 0x80c3 (UTF-16BE)
    if (argCheck == '胃') {
        return true;
    }
    // No.638
    // 説明:88de
    // 0x88de (Windows-31J)
    // 0x840e (UTF-16BE)
    if (argCheck == '萎') {
        return true;
    }
    // No.639
    // 説明:88df
    // 0x88df (Windows-31J)
    // 0x8863 (UTF-16BE)
    if (argCheck == '衣') {
        return true;
    }
    // No.640
    // 説明:88e0
    // 0x88e0 (Windows-31J)
    // 0x8b02 (UTF-16BE)
    if (argCheck == '謂') {
        return true;
    }
    // No.641
    // 説明:88e1
    // 0x88e1 (Windows-31J)
    // 0x9055 (UTF-16BE)
    if (argCheck == '違') {
        return true;
    }
    // No.642
    // 説明:88e2
    // 0x88e2 (Windows-31J)
    // 0x907a (UTF-16BE)
    if (argCheck == '遺') {
        return true;
    }
    // No.643
    // 説明:88e3
    // 0x88e3 (Windows-31J)
    // 0x533b (UTF-16BE)
    if (argCheck == '医') {
        return true;
    }
    // No.644
    // 説明:88e4
    // 0x88e4 (Windows-31J)
    // 0x4e95 (UTF-16BE)
    if (argCheck == '井') {
        return true;
    }
    // No.645
    // 説明:88e5
    // 0x88e5 (Windows-31J)
    // 0x4ea5 (UTF-16BE)
    if (argCheck == '亥') {
        return true;
    }
    // No.646
    // 説明:88e6
    // 0x88e6 (Windows-31J)
    // 0x57df (UTF-16BE)
    if (argCheck == '域') {
        return true;
    }
    // No.647
    // 説明:88e7
    // 0x88e7 (Windows-31J)
    // 0x80b2 (UTF-16BE)
    if (argCheck == '育') {
        return true;
    }
    // No.648
    // 説明:88e8
    // 0x88e8 (Windows-31J)
    // 0x90c1 (UTF-16BE)
    if (argCheck == '郁') {
        return true;
    }
    // No.649
    // 説明:88e9
    // 0x88e9 (Windows-31J)
    // 0x78ef (UTF-16BE)
    if (argCheck == '磯') {
        return true;
    }
    // No.650
    // 説明:88ea
    // 0x88ea (Windows-31J)
    // 0x4e00 (UTF-16BE)
    if (argCheck == '一') {
        return true;
    }
    // No.651
    // 説明:88eb
    // 0x88eb (Windows-31J)
    // 0x58f1 (UTF-16BE)
    if (argCheck == '壱') {
        return true;
    }
    // No.652
    // 説明:88ec
    // 0x88ec (Windows-31J)
    // 0x6ea2 (UTF-16BE)
    if (argCheck == '溢') {
        return true;
    }
    // No.653
    // 説明:88ed
    // 0x88ed (Windows-31J)
    // 0x9038 (UTF-16BE)
    if (argCheck == '逸') {
        return true;
    }
    // No.654
    // 説明:88ee
    // 0x88ee (Windows-31J)
    // 0x7a32 (UTF-16BE)
    if (argCheck == '稲') {
        return true;
    }
    // No.655
    // 説明:88ef
    // 0x88ef (Windows-31J)
    // 0x8328 (UTF-16BE)
    if (argCheck == '茨') {
        return true;
    }
    // No.656
    // 説明:88f0
    // 0x88f0 (Windows-31J)
    // 0x828b (UTF-16BE)
    if (argCheck == '芋') {
        return true;
    }
    // No.657
    // 説明:88f1
    // 0x88f1 (Windows-31J)
    // 0x9c2f (UTF-16BE)
    if (argCheck == '鰯') {
        return true;
    }
    // No.658
    // 説明:88f2
    // 0x88f2 (Windows-31J)
    // 0x5141 (UTF-16BE)
    if (argCheck == '允') {
        return true;
    }
    // No.659
    // 説明:88f3
    // 0x88f3 (Windows-31J)
    // 0x5370 (UTF-16BE)
    if (argCheck == '印') {
        return true;
    }
    // No.660
    // 説明:88f4
    // 0x88f4 (Windows-31J)
    // 0x54bd (UTF-16BE)
    if (argCheck == '咽') {
        return true;
    }
    // No.661
    // 説明:88f5
    // 0x88f5 (Windows-31J)
    // 0x54e1 (UTF-16BE)
    if (argCheck == '員') {
        return true;
    }
    // No.662
    // 説明:88f6
    // 0x88f6 (Windows-31J)
    // 0x56e0 (UTF-16BE)
    if (argCheck == '因') {
        return true;
    }
    // No.663
    // 説明:88f7
    // 0x88f7 (Windows-31J)
    // 0x59fb (UTF-16BE)
    if (argCheck == '姻') {
        return true;
    }
    // No.664
    // 説明:88f8
    // 0x88f8 (Windows-31J)
    // 0x5f15 (UTF-16BE)
    if (argCheck == '引') {
        return true;
    }
    // No.665
    // 説明:88f9
    // 0x88f9 (Windows-31J)
    // 0x98f2 (UTF-16BE)
    if (argCheck == '飲') {
        return true;
    }
    // No.666
    // 説明:88fa
    // 0x88fa (Windows-31J)
    // 0x6deb (UTF-16BE)
    if (argCheck == '淫') {
        return true;
    }
    // No.667
    // 説明:88fb
    // 0x88fb (Windows-31J)
    // 0x80e4 (UTF-16BE)
    if (argCheck == '胤') {
        return true;
    }
    // No.668
    // 説明:88fc
    // 0x88fc (Windows-31J)
    // 0x852d (UTF-16BE)
    if (argCheck == '蔭') {
        return true;
    }
    // No.669
    // 説明:8940
    // 0x8940 (Windows-31J)
    // 0x9662 (UTF-16BE)
    if (argCheck == '院') {
        return true;
    }
    // No.670
    // 説明:8941
    // 0x8941 (Windows-31J)
    // 0x9670 (UTF-16BE)
    if (argCheck == '陰') {
        return true;
    }
    // No.671
    // 説明:8942
    // 0x8942 (Windows-31J)
    // 0x96a0 (UTF-16BE)
    if (argCheck == '隠') {
        return true;
    }
    // No.672
    // 説明:8943
    // 0x8943 (Windows-31J)
    // 0x97fb (UTF-16BE)
    if (argCheck == '韻') {
        return true;
    }
    // No.673
    // 説明:8944
    // 0x8944 (Windows-31J)
    // 0x540b (UTF-16BE)
    if (argCheck == '吋') {
        return true;
    }
    // No.674
    // 説明:8945
    // 0x8945 (Windows-31J)
    // 0x53f3 (UTF-16BE)
    if (argCheck == '右') {
        return true;
    }
    // No.675
    // 説明:8946
    // 0x8946 (Windows-31J)
    // 0x5b87 (UTF-16BE)
    if (argCheck == '宇') {
        return true;
    }
    // No.676
    // 説明:8947
    // 0x8947 (Windows-31J)
    // 0x70cf (UTF-16BE)
    if (argCheck == '烏') {
        return true;
    }
    // No.677
    // 説明:8948
    // 0x8948 (Windows-31J)
    // 0x7fbd (UTF-16BE)
    if (argCheck == '羽') {
        return true;
    }
    // No.678
    // 説明:8949
    // 0x8949 (Windows-31J)
    // 0x8fc2 (UTF-16BE)
    if (argCheck == '迂') {
        return true;
    }
    // No.679
    // 説明:894a
    // 0x894a (Windows-31J)
    // 0x96e8 (UTF-16BE)
    if (argCheck == '雨') {
        return true;
    }
    // No.680
    // 説明:894b
    // 0x894b (Windows-31J)
    // 0x536f (UTF-16BE)
    if (argCheck == '卯') {
        return true;
    }
    // No.681
    // 説明:894c
    // 0x894c (Windows-31J)
    // 0x9d5c (UTF-16BE)
    if (argCheck == '鵜') {
        return true;
    }
    // No.682
    // 説明:894d
    // 0x894d (Windows-31J)
    // 0x7aba (UTF-16BE)
    if (argCheck == '窺') {
        return true;
    }
    // No.683
    // 説明:894e
    // 0x894e (Windows-31J)
    // 0x4e11 (UTF-16BE)
    if (argCheck == '丑') {
        return true;
    }
    // No.684
    // 説明:894f
    // 0x894f (Windows-31J)
    // 0x7893 (UTF-16BE)
    if (argCheck == '碓') {
        return true;
    }
    // No.685
    // 説明:8950
    // 0x8950 (Windows-31J)
    // 0x81fc (UTF-16BE)
    if (argCheck == '臼') {
        return true;
    }
    // No.686
    // 説明:8951
    // 0x8951 (Windows-31J)
    // 0x6e26 (UTF-16BE)
    if (argCheck == '渦') {
        return true;
    }
    // No.687
    // 説明:8952
    // 0x8952 (Windows-31J)
    // 0x5618 (UTF-16BE)
    if (argCheck == '嘘') {
        return true;
    }
    // No.688
    // 説明:8953
    // 0x8953 (Windows-31J)
    // 0x5504 (UTF-16BE)
    if (argCheck == '唄') {
        return true;
    }
    // No.689
    // 説明:8954
    // 0x8954 (Windows-31J)
    // 0x6b1d (UTF-16BE)
    if (argCheck == '欝') {
        return true;
    }
    // No.690
    // 説明:8955
    // 0x8955 (Windows-31J)
    // 0x851a (UTF-16BE)
    if (argCheck == '蔚') {
        return true;
    }
    // No.691
    // 説明:8956
    // 0x8956 (Windows-31J)
    // 0x9c3b (UTF-16BE)
    if (argCheck == '鰻') {
        return true;
    }
    // No.692
    // 説明:8957
    // 0x8957 (Windows-31J)
    // 0x59e5 (UTF-16BE)
    if (argCheck == '姥') {
        return true;
    }
    // No.693
    // 説明:8958
    // 0x8958 (Windows-31J)
    // 0x53a9 (UTF-16BE)
    if (argCheck == '厩') {
        return true;
    }
    // No.694
    // 説明:8959
    // 0x8959 (Windows-31J)
    // 0x6d66 (UTF-16BE)
    if (argCheck == '浦') {
        return true;
    }
    // No.695
    // 説明:895a
    // 0x895a (Windows-31J)
    // 0x74dc (UTF-16BE)
    if (argCheck == '瓜') {
        return true;
    }
    // No.696
    // 説明:895b
    // 0x895b (Windows-31J)
    // 0x958f (UTF-16BE)
    if (argCheck == '閏') {
        return true;
    }
    // No.697
    // 説明:895c
    // 0x895c (Windows-31J)
    // 0x5642 (UTF-16BE)
    if (argCheck == '噂') {
        return true;
    }
    // No.698
    // 説明:895d
    // 0x895d (Windows-31J)
    // 0x4e91 (UTF-16BE)
    if (argCheck == '云') {
        return true;
    }
    // No.699
    // 説明:895e
    // 0x895e (Windows-31J)
    // 0x904b (UTF-16BE)
    if (argCheck == '運') {
        return true;
    }
    // No.700
    // 説明:895f
    // 0x895f (Windows-31J)
    // 0x96f2 (UTF-16BE)
    if (argCheck == '雲') {
        return true;
    }
    // No.701
    // 説明:8960
    // 0x8960 (Windows-31J)
    // 0x834f (UTF-16BE)
    if (argCheck == '荏') {
        return true;
    }
    // No.702
    // 説明:8961
    // 0x8961 (Windows-31J)
    // 0x990c (UTF-16BE)
    if (argCheck == '餌') {
        return true;
    }
    // No.703
    // 説明:8962
    // 0x8962 (Windows-31J)
    // 0x53e1 (UTF-16BE)
    if (argCheck == '叡') {
        return true;
    }
    // No.704
    // 説明:8963
    // 0x8963 (Windows-31J)
    // 0x55b6 (UTF-16BE)
    if (argCheck == '営') {
        return true;
    }
    // No.705
    // 説明:8964
    // 0x8964 (Windows-31J)
    // 0x5b30 (UTF-16BE)
    if (argCheck == '嬰') {
        return true;
    }
    // No.706
    // 説明:8965
    // 0x8965 (Windows-31J)
    // 0x5f71 (UTF-16BE)
    if (argCheck == '影') {
        return true;
    }
    // No.707
    // 説明:8966
    // 0x8966 (Windows-31J)
    // 0x6620 (UTF-16BE)
    if (argCheck == '映') {
        return true;
    }
    // No.708
    // 説明:8967
    // 0x8967 (Windows-31J)
    // 0x66f3 (UTF-16BE)
    if (argCheck == '曳') {
        return true;
    }
    // No.709
    // 説明:8968
    // 0x8968 (Windows-31J)
    // 0x6804 (UTF-16BE)
    if (argCheck == '栄') {
        return true;
    }
    // No.710
    // 説明:8969
    // 0x8969 (Windows-31J)
    // 0x6c38 (UTF-16BE)
    if (argCheck == '永') {
        return true;
    }
    // No.711
    // 説明:896a
    // 0x896a (Windows-31J)
    // 0x6cf3 (UTF-16BE)
    if (argCheck == '泳') {
        return true;
    }
    // No.712
    // 説明:896b
    // 0x896b (Windows-31J)
    // 0x6d29 (UTF-16BE)
    if (argCheck == '洩') {
        return true;
    }
    // No.713
    // 説明:896c
    // 0x896c (Windows-31J)
    // 0x745b (UTF-16BE)
    if (argCheck == '瑛') {
        return true;
    }
    // No.714
    // 説明:896d
    // 0x896d (Windows-31J)
    // 0x76c8 (UTF-16BE)
    if (argCheck == '盈') {
        return true;
    }
    // No.715
    // 説明:896e
    // 0x896e (Windows-31J)
    // 0x7a4e (UTF-16BE)
    if (argCheck == '穎') {
        return true;
    }
    // No.716
    // 説明:896f
    // 0x896f (Windows-31J)
    // 0x9834 (UTF-16BE)
    if (argCheck == '頴') {
        return true;
    }
    // No.717
    // 説明:8970
    // 0x8970 (Windows-31J)
    // 0x82f1 (UTF-16BE)
    if (argCheck == '英') {
        return true;
    }
    // No.718
    // 説明:8971
    // 0x8971 (Windows-31J)
    // 0x885b (UTF-16BE)
    if (argCheck == '衛') {
        return true;
    }
    // No.719
    // 説明:8972
    // 0x8972 (Windows-31J)
    // 0x8a60 (UTF-16BE)
    if (argCheck == '詠') {
        return true;
    }
    // No.720
    // 説明:8973
    // 0x8973 (Windows-31J)
    // 0x92ed (UTF-16BE)
    if (argCheck == '鋭') {
        return true;
    }
    // No.721
    // 説明:8974
    // 0x8974 (Windows-31J)
    // 0x6db2 (UTF-16BE)
    if (argCheck == '液') {
        return true;
    }
    // No.722
    // 説明:8975
    // 0x8975 (Windows-31J)
    // 0x75ab (UTF-16BE)
    if (argCheck == '疫') {
        return true;
    }
    // No.723
    // 説明:8976
    // 0x8976 (Windows-31J)
    // 0x76ca (UTF-16BE)
    if (argCheck == '益') {
        return true;
    }
    // No.724
    // 説明:8977
    // 0x8977 (Windows-31J)
    // 0x99c5 (UTF-16BE)
    if (argCheck == '駅') {
        return true;
    }
    // No.725
    // 説明:8978
    // 0x8978 (Windows-31J)
    // 0x60a6 (UTF-16BE)
    if (argCheck == '悦') {
        return true;
    }
    // No.726
    // 説明:8979
    // 0x8979 (Windows-31J)
    // 0x8b01 (UTF-16BE)
    if (argCheck == '謁') {
        return true;
    }
    // No.727
    // 説明:897a
    // 0x897a (Windows-31J)
    // 0x8d8a (UTF-16BE)
    if (argCheck == '越') {
        return true;
    }
    // No.728
    // 説明:897b
    // 0x897b (Windows-31J)
    // 0x95b2 (UTF-16BE)
    if (argCheck == '閲') {
        return true;
    }
    // No.729
    // 説明:897c
    // 0x897c (Windows-31J)
    // 0x698e (UTF-16BE)
    if (argCheck == '榎') {
        return true;
    }
    // No.730
    // 説明:897d
    // 0x897d (Windows-31J)
    // 0x53ad (UTF-16BE)
    if (argCheck == '厭') {
        return true;
    }
    // No.731
    // 説明:897e
    // 0x897e (Windows-31J)
    // 0x5186 (UTF-16BE)
    if (argCheck == '円') {
        return true;
    }
    // No.732
    // 説明:8980
    // 0x8980 (Windows-31J)
    // 0x5712 (UTF-16BE)
    if (argCheck == '園') {
        return true;
    }
    // No.733
    // 説明:8981
    // 0x8981 (Windows-31J)
    // 0x5830 (UTF-16BE)
    if (argCheck == '堰') {
        return true;
    }
    // No.734
    // 説明:8982
    // 0x8982 (Windows-31J)
    // 0x5944 (UTF-16BE)
    if (argCheck == '奄') {
        return true;
    }
    // No.735
    // 説明:8983
    // 0x8983 (Windows-31J)
    // 0x5bb4 (UTF-16BE)
    if (argCheck == '宴') {
        return true;
    }
    // No.736
    // 説明:8984
    // 0x8984 (Windows-31J)
    // 0x5ef6 (UTF-16BE)
    if (argCheck == '延') {
        return true;
    }
    // No.737
    // 説明:8985
    // 0x8985 (Windows-31J)
    // 0x6028 (UTF-16BE)
    if (argCheck == '怨') {
        return true;
    }
    // No.738
    // 説明:8986
    // 0x8986 (Windows-31J)
    // 0x63a9 (UTF-16BE)
    if (argCheck == '掩') {
        return true;
    }
    // No.739
    // 説明:8987
    // 0x8987 (Windows-31J)
    // 0x63f4 (UTF-16BE)
    if (argCheck == '援') {
        return true;
    }
    // No.740
    // 説明:8988
    // 0x8988 (Windows-31J)
    // 0x6cbf (UTF-16BE)
    if (argCheck == '沿') {
        return true;
    }
    // No.741
    // 説明:8989
    // 0x8989 (Windows-31J)
    // 0x6f14 (UTF-16BE)
    if (argCheck == '演') {
        return true;
    }
    // No.742
    // 説明:898a
    // 0x898a (Windows-31J)
    // 0x708e (UTF-16BE)
    if (argCheck == '炎') {
        return true;
    }
    // No.743
    // 説明:898b
    // 0x898b (Windows-31J)
    // 0x7114 (UTF-16BE)
    if (argCheck == '焔') {
        return true;
    }
    // No.744
    // 説明:898c
    // 0x898c (Windows-31J)
    // 0x7159 (UTF-16BE)
    if (argCheck == '煙') {
        return true;
    }
    // No.745
    // 説明:898d
    // 0x898d (Windows-31J)
    // 0x71d5 (UTF-16BE)
    if (argCheck == '燕') {
        return true;
    }
    // No.746
    // 説明:898e
    // 0x898e (Windows-31J)
    // 0x733f (UTF-16BE)
    if (argCheck == '猿') {
        return true;
    }
    // No.747
    // 説明:898f
    // 0x898f (Windows-31J)
    // 0x7e01 (UTF-16BE)
    if (argCheck == '縁') {
        return true;
    }
    // No.748
    // 説明:8990
    // 0x8990 (Windows-31J)
    // 0x8276 (UTF-16BE)
    if (argCheck == '艶') {
        return true;
    }
    // No.749
    // 説明:8991
    // 0x8991 (Windows-31J)
    // 0x82d1 (UTF-16BE)
    if (argCheck == '苑') {
        return true;
    }
    // No.750
    // 説明:8992
    // 0x8992 (Windows-31J)
    // 0x8597 (UTF-16BE)
    if (argCheck == '薗') {
        return true;
    }
    // No.751
    // 説明:8993
    // 0x8993 (Windows-31J)
    // 0x9060 (UTF-16BE)
    if (argCheck == '遠') {
        return true;
    }
    // No.752
    // 説明:8994
    // 0x8994 (Windows-31J)
    // 0x925b (UTF-16BE)
    if (argCheck == '鉛') {
        return true;
    }
    // No.753
    // 説明:8995
    // 0x8995 (Windows-31J)
    // 0x9d1b (UTF-16BE)
    if (argCheck == '鴛') {
        return true;
    }
    // No.754
    // 説明:8996
    // 0x8996 (Windows-31J)
    // 0x5869 (UTF-16BE)
    if (argCheck == '塩') {
        return true;
    }
    // No.755
    // 説明:8997
    // 0x8997 (Windows-31J)
    // 0x65bc (UTF-16BE)
    if (argCheck == '於') {
        return true;
    }
    // No.756
    // 説明:8998
    // 0x8998 (Windows-31J)
    // 0x6c5a (UTF-16BE)
    if (argCheck == '汚') {
        return true;
    }
    // No.757
    // 説明:8999
    // 0x8999 (Windows-31J)
    // 0x7525 (UTF-16BE)
    if (argCheck == '甥') {
        return true;
    }
    // No.758
    // 説明:899a
    // 0x899a (Windows-31J)
    // 0x51f9 (UTF-16BE)
    if (argCheck == '凹') {
        return true;
    }
    // No.759
    // 説明:899b
    // 0x899b (Windows-31J)
    // 0x592e (UTF-16BE)
    if (argCheck == '央') {
        return true;
    }
    // No.760
    // 説明:899c
    // 0x899c (Windows-31J)
    // 0x5965 (UTF-16BE)
    if (argCheck == '奥') {
        return true;
    }
    // No.761
    // 説明:899d
    // 0x899d (Windows-31J)
    // 0x5f80 (UTF-16BE)
    if (argCheck == '往') {
        return true;
    }
    // No.762
    // 説明:899e
    // 0x899e (Windows-31J)
    // 0x5fdc (UTF-16BE)
    if (argCheck == '応') {
        return true;
    }
    // No.763
    // 説明:899f
    // 0x899f (Windows-31J)
    // 0x62bc (UTF-16BE)
    if (argCheck == '押') {
        return true;
    }
    // No.764
    // 説明:89a0
    // 0x89a0 (Windows-31J)
    // 0x65fa (UTF-16BE)
    if (argCheck == '旺') {
        return true;
    }
    // No.765
    // 説明:89a1
    // 0x89a1 (Windows-31J)
    // 0x6a2a (UTF-16BE)
    if (argCheck == '横') {
        return true;
    }
    // No.766
    // 説明:89a2
    // 0x89a2 (Windows-31J)
    // 0x6b27 (UTF-16BE)
    if (argCheck == '欧') {
        return true;
    }
    // No.767
    // 説明:89a3
    // 0x89a3 (Windows-31J)
    // 0x6bb4 (UTF-16BE)
    if (argCheck == '殴') {
        return true;
    }
    // No.768
    // 説明:89a4
    // 0x89a4 (Windows-31J)
    // 0x738b (UTF-16BE)
    if (argCheck == '王') {
        return true;
    }
    // No.769
    // 説明:89a5
    // 0x89a5 (Windows-31J)
    // 0x7fc1 (UTF-16BE)
    if (argCheck == '翁') {
        return true;
    }
    // No.770
    // 説明:89a6
    // 0x89a6 (Windows-31J)
    // 0x8956 (UTF-16BE)
    if (argCheck == '襖') {
        return true;
    }
    // No.771
    // 説明:89a7
    // 0x89a7 (Windows-31J)
    // 0x9d2c (UTF-16BE)
    if (argCheck == '鴬') {
        return true;
    }
    // No.772
    // 説明:89a8
    // 0x89a8 (Windows-31J)
    // 0x9d0e (UTF-16BE)
    if (argCheck == '鴎') {
        return true;
    }
    // No.773
    // 説明:89a9
    // 0x89a9 (Windows-31J)
    // 0x9ec4 (UTF-16BE)
    if (argCheck == '黄') {
        return true;
    }
    // No.774
    // 説明:89aa
    // 0x89aa (Windows-31J)
    // 0x5ca1 (UTF-16BE)
    if (argCheck == '岡') {
        return true;
    }
    // No.775
    // 説明:89ab
    // 0x89ab (Windows-31J)
    // 0x6c96 (UTF-16BE)
    if (argCheck == '沖') {
        return true;
    }
    // No.776
    // 説明:89ac
    // 0x89ac (Windows-31J)
    // 0x837b (UTF-16BE)
    if (argCheck == '荻') {
        return true;
    }
    // No.777
    // 説明:89ad
    // 0x89ad (Windows-31J)
    // 0x5104 (UTF-16BE)
    if (argCheck == '億') {
        return true;
    }
    // No.778
    // 説明:89ae
    // 0x89ae (Windows-31J)
    // 0x5c4b (UTF-16BE)
    if (argCheck == '屋') {
        return true;
    }
    // No.779
    // 説明:89af
    // 0x89af (Windows-31J)
    // 0x61b6 (UTF-16BE)
    if (argCheck == '憶') {
        return true;
    }
    // No.780
    // 説明:89b0
    // 0x89b0 (Windows-31J)
    // 0x81c6 (UTF-16BE)
    if (argCheck == '臆') {
        return true;
    }
    // No.781
    // 説明:89b1
    // 0x89b1 (Windows-31J)
    // 0x6876 (UTF-16BE)
    if (argCheck == '桶') {
        return true;
    }
    // No.782
    // 説明:89b2
    // 0x89b2 (Windows-31J)
    // 0x7261 (UTF-16BE)
    if (argCheck == '牡') {
        return true;
    }
    // No.783
    // 説明:89b3
    // 0x89b3 (Windows-31J)
    // 0x4e59 (UTF-16BE)
    if (argCheck == '乙') {
        return true;
    }
    // No.784
    // 説明:89b4
    // 0x89b4 (Windows-31J)
    // 0x4ffa (UTF-16BE)
    if (argCheck == '俺') {
        return true;
    }
    // No.785
    // 説明:89b5
    // 0x89b5 (Windows-31J)
    // 0x5378 (UTF-16BE)
    if (argCheck == '卸') {
        return true;
    }
    // No.786
    // 説明:89b6
    // 0x89b6 (Windows-31J)
    // 0x6069 (UTF-16BE)
    if (argCheck == '恩') {
        return true;
    }
    // No.787
    // 説明:89b7
    // 0x89b7 (Windows-31J)
    // 0x6e29 (UTF-16BE)
    if (argCheck == '温') {
        return true;
    }
    // No.788
    // 説明:89b8
    // 0x89b8 (Windows-31J)
    // 0x7a4f (UTF-16BE)
    if (argCheck == '穏') {
        return true;
    }
    // No.789
    // 説明:89b9
    // 0x89b9 (Windows-31J)
    // 0x97f3 (UTF-16BE)
    if (argCheck == '音') {
        return true;
    }
    // No.790
    // 説明:89ba
    // 0x89ba (Windows-31J)
    // 0x4e0b (UTF-16BE)
    if (argCheck == '下') {
        return true;
    }
    // No.791
    // 説明:89bb
    // 0x89bb (Windows-31J)
    // 0x5316 (UTF-16BE)
    if (argCheck == '化') {
        return true;
    }
    // No.792
    // 説明:89bc
    // 0x89bc (Windows-31J)
    // 0x4eee (UTF-16BE)
    if (argCheck == '仮') {
        return true;
    }
    // No.793
    // 説明:89bd
    // 0x89bd (Windows-31J)
    // 0x4f55 (UTF-16BE)
    if (argCheck == '何') {
        return true;
    }
    // No.794
    // 説明:89be
    // 0x89be (Windows-31J)
    // 0x4f3d (UTF-16BE)
    if (argCheck == '伽') {
        return true;
    }
    // No.795
    // 説明:89bf
    // 0x89bf (Windows-31J)
    // 0x4fa1 (UTF-16BE)
    if (argCheck == '価') {
        return true;
    }
    // No.796
    // 説明:89c0
    // 0x89c0 (Windows-31J)
    // 0x4f73 (UTF-16BE)
    if (argCheck == '佳') {
        return true;
    }
    // No.797
    // 説明:89c1
    // 0x89c1 (Windows-31J)
    // 0x52a0 (UTF-16BE)
    if (argCheck == '加') {
        return true;
    }
    // No.798
    // 説明:89c2
    // 0x89c2 (Windows-31J)
    // 0x53ef (UTF-16BE)
    if (argCheck == '可') {
        return true;
    }
    // No.799
    // 説明:89c3
    // 0x89c3 (Windows-31J)
    // 0x5609 (UTF-16BE)
    if (argCheck == '嘉') {
        return true;
    }
    // No.800
    // 説明:89c4
    // 0x89c4 (Windows-31J)
    // 0x590f (UTF-16BE)
    if (argCheck == '夏') {
        return true;
    }
    // No.801
    // 説明:89c5
    // 0x89c5 (Windows-31J)
    // 0x5ac1 (UTF-16BE)
    if (argCheck == '嫁') {
        return true;
    }
    // No.802
    // 説明:89c6
    // 0x89c6 (Windows-31J)
    // 0x5bb6 (UTF-16BE)
    if (argCheck == '家') {
        return true;
    }
    // No.803
    // 説明:89c7
    // 0x89c7 (Windows-31J)
    // 0x5be1 (UTF-16BE)
    if (argCheck == '寡') {
        return true;
    }
    // No.804
    // 説明:89c8
    // 0x89c8 (Windows-31J)
    // 0x79d1 (UTF-16BE)
    if (argCheck == '科') {
        return true;
    }
    // No.805
    // 説明:89c9
    // 0x89c9 (Windows-31J)
    // 0x6687 (UTF-16BE)
    if (argCheck == '暇') {
        return true;
    }
    // No.806
    // 説明:89ca
    // 0x89ca (Windows-31J)
    // 0x679c (UTF-16BE)
    if (argCheck == '果') {
        return true;
    }
    // No.807
    // 説明:89cb
    // 0x89cb (Windows-31J)
    // 0x67b6 (UTF-16BE)
    if (argCheck == '架') {
        return true;
    }
    // No.808
    // 説明:89cc
    // 0x89cc (Windows-31J)
    // 0x6b4c (UTF-16BE)
    if (argCheck == '歌') {
        return true;
    }
    // No.809
    // 説明:89cd
    // 0x89cd (Windows-31J)
    // 0x6cb3 (UTF-16BE)
    if (argCheck == '河') {
        return true;
    }
    // No.810
    // 説明:89ce
    // 0x89ce (Windows-31J)
    // 0x706b (UTF-16BE)
    if (argCheck == '火') {
        return true;
    }
    // No.811
    // 説明:89cf
    // 0x89cf (Windows-31J)
    // 0x73c2 (UTF-16BE)
    if (argCheck == '珂') {
        return true;
    }
    // No.812
    // 説明:89d0
    // 0x89d0 (Windows-31J)
    // 0x798d (UTF-16BE)
    if (argCheck == '禍') {
        return true;
    }
    // No.813
    // 説明:89d1
    // 0x89d1 (Windows-31J)
    // 0x79be (UTF-16BE)
    if (argCheck == '禾') {
        return true;
    }
    // No.814
    // 説明:89d2
    // 0x89d2 (Windows-31J)
    // 0x7a3c (UTF-16BE)
    if (argCheck == '稼') {
        return true;
    }
    // No.815
    // 説明:89d3
    // 0x89d3 (Windows-31J)
    // 0x7b87 (UTF-16BE)
    if (argCheck == '箇') {
        return true;
    }
    // No.816
    // 説明:89d4
    // 0x89d4 (Windows-31J)
    // 0x82b1 (UTF-16BE)
    if (argCheck == '花') {
        return true;
    }
    // No.817
    // 説明:89d5
    // 0x89d5 (Windows-31J)
    // 0x82db (UTF-16BE)
    if (argCheck == '苛') {
        return true;
    }
    // No.818
    // 説明:89d6
    // 0x89d6 (Windows-31J)
    // 0x8304 (UTF-16BE)
    if (argCheck == '茄') {
        return true;
    }
    // No.819
    // 説明:89d7
    // 0x89d7 (Windows-31J)
    // 0x8377 (UTF-16BE)
    if (argCheck == '荷') {
        return true;
    }
    // No.820
    // 説明:89d8
    // 0x89d8 (Windows-31J)
    // 0x83ef (UTF-16BE)
    if (argCheck == '華') {
        return true;
    }
    // No.821
    // 説明:89d9
    // 0x89d9 (Windows-31J)
    // 0x83d3 (UTF-16BE)
    if (argCheck == '菓') {
        return true;
    }
    // No.822
    // 説明:89da
    // 0x89da (Windows-31J)
    // 0x8766 (UTF-16BE)
    if (argCheck == '蝦') {
        return true;
    }
    // No.823
    // 説明:89db
    // 0x89db (Windows-31J)
    // 0x8ab2 (UTF-16BE)
    if (argCheck == '課') {
        return true;
    }
    // No.824
    // 説明:89dc
    // 0x89dc (Windows-31J)
    // 0x5629 (UTF-16BE)
    if (argCheck == '嘩') {
        return true;
    }
    // No.825
    // 説明:89dd
    // 0x89dd (Windows-31J)
    // 0x8ca8 (UTF-16BE)
    if (argCheck == '貨') {
        return true;
    }
    // No.826
    // 説明:89de
    // 0x89de (Windows-31J)
    // 0x8fe6 (UTF-16BE)
    if (argCheck == '迦') {
        return true;
    }
    // No.827
    // 説明:89df
    // 0x89df (Windows-31J)
    // 0x904e (UTF-16BE)
    if (argCheck == '過') {
        return true;
    }
    // No.828
    // 説明:89e0
    // 0x89e0 (Windows-31J)
    // 0x971e (UTF-16BE)
    if (argCheck == '霞') {
        return true;
    }
    // No.829
    // 説明:89e1
    // 0x89e1 (Windows-31J)
    // 0x868a (UTF-16BE)
    if (argCheck == '蚊') {
        return true;
    }
    // No.830
    // 説明:89e2
    // 0x89e2 (Windows-31J)
    // 0x4fc4 (UTF-16BE)
    if (argCheck == '俄') {
        return true;
    }
    // No.831
    // 説明:89e3
    // 0x89e3 (Windows-31J)
    // 0x5ce8 (UTF-16BE)
    if (argCheck == '峨') {
        return true;
    }
    // No.832
    // 説明:89e4
    // 0x89e4 (Windows-31J)
    // 0x6211 (UTF-16BE)
    if (argCheck == '我') {
        return true;
    }
    // No.833
    // 説明:89e5
    // 0x89e5 (Windows-31J)
    // 0x7259 (UTF-16BE)
    if (argCheck == '牙') {
        return true;
    }
    // No.834
    // 説明:89e6
    // 0x89e6 (Windows-31J)
    // 0x753b (UTF-16BE)
    if (argCheck == '画') {
        return true;
    }
    // No.835
    // 説明:89e7
    // 0x89e7 (Windows-31J)
    // 0x81e5 (UTF-16BE)
    if (argCheck == '臥') {
        return true;
    }
    // No.836
    // 説明:89e8
    // 0x89e8 (Windows-31J)
    // 0x82bd (UTF-16BE)
    if (argCheck == '芽') {
        return true;
    }
    // No.837
    // 説明:89e9
    // 0x89e9 (Windows-31J)
    // 0x86fe (UTF-16BE)
    if (argCheck == '蛾') {
        return true;
    }
    // No.838
    // 説明:89ea
    // 0x89ea (Windows-31J)
    // 0x8cc0 (UTF-16BE)
    if (argCheck == '賀') {
        return true;
    }
    // No.839
    // 説明:89eb
    // 0x89eb (Windows-31J)
    // 0x96c5 (UTF-16BE)
    if (argCheck == '雅') {
        return true;
    }
    // No.840
    // 説明:89ec
    // 0x89ec (Windows-31J)
    // 0x9913 (UTF-16BE)
    if (argCheck == '餓') {
        return true;
    }
    // No.841
    // 説明:89ed
    // 0x89ed (Windows-31J)
    // 0x99d5 (UTF-16BE)
    if (argCheck == '駕') {
        return true;
    }
    // No.842
    // 説明:89ee
    // 0x89ee (Windows-31J)
    // 0x4ecb (UTF-16BE)
    if (argCheck == '介') {
        return true;
    }
    // No.843
    // 説明:89ef
    // 0x89ef (Windows-31J)
    // 0x4f1a (UTF-16BE)
    if (argCheck == '会') {
        return true;
    }
    // No.844
    // 説明:89f0
    // 0x89f0 (Windows-31J)
    // 0x89e3 (UTF-16BE)
    if (argCheck == '解') {
        return true;
    }
    // No.845
    // 説明:89f1
    // 0x89f1 (Windows-31J)
    // 0x56de (UTF-16BE)
    if (argCheck == '回') {
        return true;
    }
    // No.846
    // 説明:89f2
    // 0x89f2 (Windows-31J)
    // 0x584a (UTF-16BE)
    if (argCheck == '塊') {
        return true;
    }
    // No.847
    // 説明:89f3
    // 0x89f3 (Windows-31J)
    // 0x58ca (UTF-16BE)
    if (argCheck == '壊') {
        return true;
    }
    // No.848
    // 説明:89f4
    // 0x89f4 (Windows-31J)
    // 0x5efb (UTF-16BE)
    if (argCheck == '廻') {
        return true;
    }
    // No.849
    // 説明:89f5
    // 0x89f5 (Windows-31J)
    // 0x5feb (UTF-16BE)
    if (argCheck == '快') {
        return true;
    }
    // No.850
    // 説明:89f6
    // 0x89f6 (Windows-31J)
    // 0x602a (UTF-16BE)
    if (argCheck == '怪') {
        return true;
    }
    // No.851
    // 説明:89f7
    // 0x89f7 (Windows-31J)
    // 0x6094 (UTF-16BE)
    if (argCheck == '悔') {
        return true;
    }
    // No.852
    // 説明:89f8
    // 0x89f8 (Windows-31J)
    // 0x6062 (UTF-16BE)
    if (argCheck == '恢') {
        return true;
    }
    // No.853
    // 説明:89f9
    // 0x89f9 (Windows-31J)
    // 0x61d0 (UTF-16BE)
    if (argCheck == '懐') {
        return true;
    }
    // No.854
    // 説明:89fa
    // 0x89fa (Windows-31J)
    // 0x6212 (UTF-16BE)
    if (argCheck == '戒') {
        return true;
    }
    // No.855
    // 説明:89fb
    // 0x89fb (Windows-31J)
    // 0x62d0 (UTF-16BE)
    if (argCheck == '拐') {
        return true;
    }
    // No.856
    // 説明:89fc
    // 0x89fc (Windows-31J)
    // 0x6539 (UTF-16BE)
    if (argCheck == '改') {
        return true;
    }
    // No.857
    // 説明:8a40
    // 0x8a40 (Windows-31J)
    // 0x9b41 (UTF-16BE)
    if (argCheck == '魁') {
        return true;
    }
    // No.858
    // 説明:8a41
    // 0x8a41 (Windows-31J)
    // 0x6666 (UTF-16BE)
    if (argCheck == '晦') {
        return true;
    }
    // No.859
    // 説明:8a42
    // 0x8a42 (Windows-31J)
    // 0x68b0 (UTF-16BE)
    if (argCheck == '械') {
        return true;
    }
    // No.860
    // 説明:8a43
    // 0x8a43 (Windows-31J)
    // 0x6d77 (UTF-16BE)
    if (argCheck == '海') {
        return true;
    }
    // No.861
    // 説明:8a44
    // 0x8a44 (Windows-31J)
    // 0x7070 (UTF-16BE)
    if (argCheck == '灰') {
        return true;
    }
    // No.862
    // 説明:8a45
    // 0x8a45 (Windows-31J)
    // 0x754c (UTF-16BE)
    if (argCheck == '界') {
        return true;
    }
    // No.863
    // 説明:8a46
    // 0x8a46 (Windows-31J)
    // 0x7686 (UTF-16BE)
    if (argCheck == '皆') {
        return true;
    }
    // No.864
    // 説明:8a47
    // 0x8a47 (Windows-31J)
    // 0x7d75 (UTF-16BE)
    if (argCheck == '絵') {
        return true;
    }
    // No.865
    // 説明:8a48
    // 0x8a48 (Windows-31J)
    // 0x82a5 (UTF-16BE)
    if (argCheck == '芥') {
        return true;
    }
    // No.866
    // 説明:8a49
    // 0x8a49 (Windows-31J)
    // 0x87f9 (UTF-16BE)
    if (argCheck == '蟹') {
        return true;
    }
    // No.867
    // 説明:8a4a
    // 0x8a4a (Windows-31J)
    // 0x958b (UTF-16BE)
    if (argCheck == '開') {
        return true;
    }
    // No.868
    // 説明:8a4b
    // 0x8a4b (Windows-31J)
    // 0x968e (UTF-16BE)
    if (argCheck == '階') {
        return true;
    }
    // No.869
    // 説明:8a4c
    // 0x8a4c (Windows-31J)
    // 0x8c9d (UTF-16BE)
    if (argCheck == '貝') {
        return true;
    }
    // No.870
    // 説明:8a4d
    // 0x8a4d (Windows-31J)
    // 0x51f1 (UTF-16BE)
    if (argCheck == '凱') {
        return true;
    }
    // No.871
    // 説明:8a4e
    // 0x8a4e (Windows-31J)
    // 0x52be (UTF-16BE)
    if (argCheck == '劾') {
        return true;
    }
    // No.872
    // 説明:8a4f
    // 0x8a4f (Windows-31J)
    // 0x5916 (UTF-16BE)
    if (argCheck == '外') {
        return true;
    }
    // No.873
    // 説明:8a50
    // 0x8a50 (Windows-31J)
    // 0x54b3 (UTF-16BE)
    if (argCheck == '咳') {
        return true;
    }
    // No.874
    // 説明:8a51
    // 0x8a51 (Windows-31J)
    // 0x5bb3 (UTF-16BE)
    if (argCheck == '害') {
        return true;
    }
    // No.875
    // 説明:8a52
    // 0x8a52 (Windows-31J)
    // 0x5d16 (UTF-16BE)
    if (argCheck == '崖') {
        return true;
    }
    // No.876
    // 説明:8a53
    // 0x8a53 (Windows-31J)
    // 0x6168 (UTF-16BE)
    if (argCheck == '慨') {
        return true;
    }
    // No.877
    // 説明:8a54
    // 0x8a54 (Windows-31J)
    // 0x6982 (UTF-16BE)
    if (argCheck == '概') {
        return true;
    }
    // No.878
    // 説明:8a55
    // 0x8a55 (Windows-31J)
    // 0x6daf (UTF-16BE)
    if (argCheck == '涯') {
        return true;
    }
    // No.879
    // 説明:8a56
    // 0x8a56 (Windows-31J)
    // 0x788d (UTF-16BE)
    if (argCheck == '碍') {
        return true;
    }
    // No.880
    // 説明:8a57
    // 0x8a57 (Windows-31J)
    // 0x84cb (UTF-16BE)
    if (argCheck == '蓋') {
        return true;
    }
    // No.881
    // 説明:8a58
    // 0x8a58 (Windows-31J)
    // 0x8857 (UTF-16BE)
    if (argCheck == '街') {
        return true;
    }
    // No.882
    // 説明:8a59
    // 0x8a59 (Windows-31J)
    // 0x8a72 (UTF-16BE)
    if (argCheck == '該') {
        return true;
    }
    // No.883
    // 説明:8a5a
    // 0x8a5a (Windows-31J)
    // 0x93a7 (UTF-16BE)
    if (argCheck == '鎧') {
        return true;
    }
    // No.884
    // 説明:8a5b
    // 0x8a5b (Windows-31J)
    // 0x9ab8 (UTF-16BE)
    if (argCheck == '骸') {
        return true;
    }
    // No.885
    // 説明:8a5c
    // 0x8a5c (Windows-31J)
    // 0x6d6c (UTF-16BE)
    if (argCheck == '浬') {
        return true;
    }
    // No.886
    // 説明:8a5d
    // 0x8a5d (Windows-31J)
    // 0x99a8 (UTF-16BE)
    if (argCheck == '馨') {
        return true;
    }
    // No.887
    // 説明:8a5e
    // 0x8a5e (Windows-31J)
    // 0x86d9 (UTF-16BE)
    if (argCheck == '蛙') {
        return true;
    }
    // No.888
    // 説明:8a5f
    // 0x8a5f (Windows-31J)
    // 0x57a3 (UTF-16BE)
    if (argCheck == '垣') {
        return true;
    }
    // No.889
    // 説明:8a60
    // 0x8a60 (Windows-31J)
    // 0x67ff (UTF-16BE)
    if (argCheck == '柿') {
        return true;
    }
    // No.890
    // 説明:8a61
    // 0x8a61 (Windows-31J)
    // 0x86ce (UTF-16BE)
    if (argCheck == '蛎') {
        return true;
    }
    // No.891
    // 説明:8a62
    // 0x8a62 (Windows-31J)
    // 0x920e (UTF-16BE)
    if (argCheck == '鈎') {
        return true;
    }
    // No.892
    // 説明:8a63
    // 0x8a63 (Windows-31J)
    // 0x5283 (UTF-16BE)
    if (argCheck == '劃') {
        return true;
    }
    // No.893
    // 説明:8a64
    // 0x8a64 (Windows-31J)
    // 0x5687 (UTF-16BE)
    if (argCheck == '嚇') {
        return true;
    }
    // No.894
    // 説明:8a65
    // 0x8a65 (Windows-31J)
    // 0x5404 (UTF-16BE)
    if (argCheck == '各') {
        return true;
    }
    // No.895
    // 説明:8a66
    // 0x8a66 (Windows-31J)
    // 0x5ed3 (UTF-16BE)
    if (argCheck == '廓') {
        return true;
    }
    // No.896
    // 説明:8a67
    // 0x8a67 (Windows-31J)
    // 0x62e1 (UTF-16BE)
    if (argCheck == '拡') {
        return true;
    }
    // No.897
    // 説明:8a68
    // 0x8a68 (Windows-31J)
    // 0x64b9 (UTF-16BE)
    if (argCheck == '撹') {
        return true;
    }
    // No.898
    // 説明:8a69
    // 0x8a69 (Windows-31J)
    // 0x683c (UTF-16BE)
    if (argCheck == '格') {
        return true;
    }
    // No.899
    // 説明:8a6a
    // 0x8a6a (Windows-31J)
    // 0x6838 (UTF-16BE)
    if (argCheck == '核') {
        return true;
    }
    // No.900
    // 説明:8a6b
    // 0x8a6b (Windows-31J)
    // 0x6bbb (UTF-16BE)
    if (argCheck == '殻') {
        return true;
    }
    // No.901
    // 説明:8a6c
    // 0x8a6c (Windows-31J)
    // 0x7372 (UTF-16BE)
    if (argCheck == '獲') {
        return true;
    }
    // No.902
    // 説明:8a6d
    // 0x8a6d (Windows-31J)
    // 0x78ba (UTF-16BE)
    if (argCheck == '確') {
        return true;
    }
    // No.903
    // 説明:8a6e
    // 0x8a6e (Windows-31J)
    // 0x7a6b (UTF-16BE)
    if (argCheck == '穫') {
        return true;
    }
    // No.904
    // 説明:8a6f
    // 0x8a6f (Windows-31J)
    // 0x899a (UTF-16BE)
    if (argCheck == '覚') {
        return true;
    }
    // No.905
    // 説明:8a70
    // 0x8a70 (Windows-31J)
    // 0x89d2 (UTF-16BE)
    if (argCheck == '角') {
        return true;
    }
    // No.906
    // 説明:8a71
    // 0x8a71 (Windows-31J)
    // 0x8d6b (UTF-16BE)
    if (argCheck == '赫') {
        return true;
    }
    // No.907
    // 説明:8a72
    // 0x8a72 (Windows-31J)
    // 0x8f03 (UTF-16BE)
    if (argCheck == '較') {
        return true;
    }
    // No.908
    // 説明:8a73
    // 0x8a73 (Windows-31J)
    // 0x90ed (UTF-16BE)
    if (argCheck == '郭') {
        return true;
    }
    // No.909
    // 説明:8a74
    // 0x8a74 (Windows-31J)
    // 0x95a3 (UTF-16BE)
    if (argCheck == '閣') {
        return true;
    }
    // No.910
    // 説明:8a75
    // 0x8a75 (Windows-31J)
    // 0x9694 (UTF-16BE)
    if (argCheck == '隔') {
        return true;
    }
    // No.911
    // 説明:8a76
    // 0x8a76 (Windows-31J)
    // 0x9769 (UTF-16BE)
    if (argCheck == '革') {
        return true;
    }
    // No.912
    // 説明:8a77
    // 0x8a77 (Windows-31J)
    // 0x5b66 (UTF-16BE)
    if (argCheck == '学') {
        return true;
    }
    // No.913
    // 説明:8a78
    // 0x8a78 (Windows-31J)
    // 0x5cb3 (UTF-16BE)
    if (argCheck == '岳') {
        return true;
    }
    // No.914
    // 説明:8a79
    // 0x8a79 (Windows-31J)
    // 0x697d (UTF-16BE)
    if (argCheck == '楽') {
        return true;
    }
    // No.915
    // 説明:8a7a
    // 0x8a7a (Windows-31J)
    // 0x984d (UTF-16BE)
    if (argCheck == '額') {
        return true;
    }
    // No.916
    // 説明:8a7b
    // 0x8a7b (Windows-31J)
    // 0x984e (UTF-16BE)
    if (argCheck == '顎') {
        return true;
    }
    // No.917
    // 説明:8a7c
    // 0x8a7c (Windows-31J)
    // 0x639b (UTF-16BE)
    if (argCheck == '掛') {
        return true;
    }
    // No.918
    // 説明:8a7d
    // 0x8a7d (Windows-31J)
    // 0x7b20 (UTF-16BE)
    if (argCheck == '笠') {
        return true;
    }
    // No.919
    // 説明:8a7e
    // 0x8a7e (Windows-31J)
    // 0x6a2b (UTF-16BE)
    if (argCheck == '樫') {
        return true;
    }
    // No.920
    // 説明:8a80
    // 0x8a80 (Windows-31J)
    // 0x6a7f (UTF-16BE)
    if (argCheck == '橿') {
        return true;
    }
    // No.921
    // 説明:8a81
    // 0x8a81 (Windows-31J)
    // 0x68b6 (UTF-16BE)
    if (argCheck == '梶') {
        return true;
    }
    // No.922
    // 説明:8a82
    // 0x8a82 (Windows-31J)
    // 0x9c0d (UTF-16BE)
    if (argCheck == '鰍') {
        return true;
    }
    // No.923
    // 説明:8a83
    // 0x8a83 (Windows-31J)
    // 0x6f5f (UTF-16BE)
    if (argCheck == '潟') {
        return true;
    }
    // No.924
    // 説明:8a84
    // 0x8a84 (Windows-31J)
    // 0x5272 (UTF-16BE)
    if (argCheck == '割') {
        return true;
    }
    // No.925
    // 説明:8a85
    // 0x8a85 (Windows-31J)
    // 0x559d (UTF-16BE)
    if (argCheck == '喝') {
        return true;
    }
    // No.926
    // 説明:8a86
    // 0x8a86 (Windows-31J)
    // 0x6070 (UTF-16BE)
    if (argCheck == '恰') {
        return true;
    }
    // No.927
    // 説明:8a87
    // 0x8a87 (Windows-31J)
    // 0x62ec (UTF-16BE)
    if (argCheck == '括') {
        return true;
    }
    // No.928
    // 説明:8a88
    // 0x8a88 (Windows-31J)
    // 0x6d3b (UTF-16BE)
    if (argCheck == '活') {
        return true;
    }
    // No.929
    // 説明:8a89
    // 0x8a89 (Windows-31J)
    // 0x6e07 (UTF-16BE)
    if (argCheck == '渇') {
        return true;
    }
    // No.930
    // 説明:8a8a
    // 0x8a8a (Windows-31J)
    // 0x6ed1 (UTF-16BE)
    if (argCheck == '滑') {
        return true;
    }
    // No.931
    // 説明:8a8b
    // 0x8a8b (Windows-31J)
    // 0x845b (UTF-16BE)
    if (argCheck == '葛') {
        return true;
    }
    // No.932
    // 説明:8a8c
    // 0x8a8c (Windows-31J)
    // 0x8910 (UTF-16BE)
    if (argCheck == '褐') {
        return true;
    }
    // No.933
    // 説明:8a8d
    // 0x8a8d (Windows-31J)
    // 0x8f44 (UTF-16BE)
    if (argCheck == '轄') {
        return true;
    }
    // No.934
    // 説明:8a8e
    // 0x8a8e (Windows-31J)
    // 0x4e14 (UTF-16BE)
    if (argCheck == '且') {
        return true;
    }
    // No.935
    // 説明:8a8f
    // 0x8a8f (Windows-31J)
    // 0x9c39 (UTF-16BE)
    if (argCheck == '鰹') {
        return true;
    }
    // No.936
    // 説明:8a90
    // 0x8a90 (Windows-31J)
    // 0x53f6 (UTF-16BE)
    if (argCheck == '叶') {
        return true;
    }
    // No.937
    // 説明:8a91
    // 0x8a91 (Windows-31J)
    // 0x691b (UTF-16BE)
    if (argCheck == '椛') {
        return true;
    }
    // No.938
    // 説明:8a92
    // 0x8a92 (Windows-31J)
    // 0x6a3a (UTF-16BE)
    if (argCheck == '樺') {
        return true;
    }
    // No.939
    // 説明:8a93
    // 0x8a93 (Windows-31J)
    // 0x9784 (UTF-16BE)
    if (argCheck == '鞄') {
        return true;
    }
    // No.940
    // 説明:8a94
    // 0x8a94 (Windows-31J)
    // 0x682a (UTF-16BE)
    if (argCheck == '株') {
        return true;
    }
    // No.941
    // 説明:8a95
    // 0x8a95 (Windows-31J)
    // 0x515c (UTF-16BE)
    if (argCheck == '兜') {
        return true;
    }
    // No.942
    // 説明:8a96
    // 0x8a96 (Windows-31J)
    // 0x7ac3 (UTF-16BE)
    if (argCheck == '竃') {
        return true;
    }
    // No.943
    // 説明:8a97
    // 0x8a97 (Windows-31J)
    // 0x84b2 (UTF-16BE)
    if (argCheck == '蒲') {
        return true;
    }
    // No.944
    // 説明:8a98
    // 0x8a98 (Windows-31J)
    // 0x91dc (UTF-16BE)
    if (argCheck == '釜') {
        return true;
    }
    // No.945
    // 説明:8a99
    // 0x8a99 (Windows-31J)
    // 0x938c (UTF-16BE)
    if (argCheck == '鎌') {
        return true;
    }
    // No.946
    // 説明:8a9a
    // 0x8a9a (Windows-31J)
    // 0x565b (UTF-16BE)
    if (argCheck == '噛') {
        return true;
    }
    // No.947
    // 説明:8a9b
    // 0x8a9b (Windows-31J)
    // 0x9d28 (UTF-16BE)
    if (argCheck == '鴨') {
        return true;
    }
    // No.948
    // 説明:8a9c
    // 0x8a9c (Windows-31J)
    // 0x6822 (UTF-16BE)
    if (argCheck == '栢') {
        return true;
    }
    // No.949
    // 説明:8a9d
    // 0x8a9d (Windows-31J)
    // 0x8305 (UTF-16BE)
    if (argCheck == '茅') {
        return true;
    }
    // No.950
    // 説明:8a9e
    // 0x8a9e (Windows-31J)
    // 0x8431 (UTF-16BE)
    if (argCheck == '萱') {
        return true;
    }
    // No.951
    // 説明:8a9f
    // 0x8a9f (Windows-31J)
    // 0x7ca5 (UTF-16BE)
    if (argCheck == '粥') {
        return true;
    }
    // No.952
    // 説明:8aa0
    // 0x8aa0 (Windows-31J)
    // 0x5208 (UTF-16BE)
    if (argCheck == '刈') {
        return true;
    }
    // No.953
    // 説明:8aa1
    // 0x8aa1 (Windows-31J)
    // 0x82c5 (UTF-16BE)
    if (argCheck == '苅') {
        return true;
    }
    // No.954
    // 説明:8aa2
    // 0x8aa2 (Windows-31J)
    // 0x74e6 (UTF-16BE)
    if (argCheck == '瓦') {
        return true;
    }
    // No.955
    // 説明:8aa3
    // 0x8aa3 (Windows-31J)
    // 0x4e7e (UTF-16BE)
    if (argCheck == '乾') {
        return true;
    }
    // No.956
    // 説明:8aa4
    // 0x8aa4 (Windows-31J)
    // 0x4f83 (UTF-16BE)
    if (argCheck == '侃') {
        return true;
    }
    // No.957
    // 説明:8aa5
    // 0x8aa5 (Windows-31J)
    // 0x51a0 (UTF-16BE)
    if (argCheck == '冠') {
        return true;
    }
    // No.958
    // 説明:8aa6
    // 0x8aa6 (Windows-31J)
    // 0x5bd2 (UTF-16BE)
    if (argCheck == '寒') {
        return true;
    }
    // No.959
    // 説明:8aa7
    // 0x8aa7 (Windows-31J)
    // 0x520a (UTF-16BE)
    if (argCheck == '刊') {
        return true;
    }
    // No.960
    // 説明:8aa8
    // 0x8aa8 (Windows-31J)
    // 0x52d8 (UTF-16BE)
    if (argCheck == '勘') {
        return true;
    }
    // No.961
    // 説明:8aa9
    // 0x8aa9 (Windows-31J)
    // 0x52e7 (UTF-16BE)
    if (argCheck == '勧') {
        return true;
    }
    // No.962
    // 説明:8aaa
    // 0x8aaa (Windows-31J)
    // 0x5dfb (UTF-16BE)
    if (argCheck == '巻') {
        return true;
    }
    // No.963
    // 説明:8aab
    // 0x8aab (Windows-31J)
    // 0x559a (UTF-16BE)
    if (argCheck == '喚') {
        return true;
    }
    // No.964
    // 説明:8aac
    // 0x8aac (Windows-31J)
    // 0x582a (UTF-16BE)
    if (argCheck == '堪') {
        return true;
    }
    // No.965
    // 説明:8aad
    // 0x8aad (Windows-31J)
    // 0x59e6 (UTF-16BE)
    if (argCheck == '姦') {
        return true;
    }
    // No.966
    // 説明:8aae
    // 0x8aae (Windows-31J)
    // 0x5b8c (UTF-16BE)
    if (argCheck == '完') {
        return true;
    }
    // No.967
    // 説明:8aaf
    // 0x8aaf (Windows-31J)
    // 0x5b98 (UTF-16BE)
    if (argCheck == '官') {
        return true;
    }
    // No.968
    // 説明:8ab0
    // 0x8ab0 (Windows-31J)
    // 0x5bdb (UTF-16BE)
    if (argCheck == '寛') {
        return true;
    }
    // No.969
    // 説明:8ab1
    // 0x8ab1 (Windows-31J)
    // 0x5e72 (UTF-16BE)
    if (argCheck == '干') {
        return true;
    }
    // No.970
    // 説明:8ab2
    // 0x8ab2 (Windows-31J)
    // 0x5e79 (UTF-16BE)
    if (argCheck == '幹') {
        return true;
    }
    // No.971
    // 説明:8ab3
    // 0x8ab3 (Windows-31J)
    // 0x60a3 (UTF-16BE)
    if (argCheck == '患') {
        return true;
    }
    // No.972
    // 説明:8ab4
    // 0x8ab4 (Windows-31J)
    // 0x611f (UTF-16BE)
    if (argCheck == '感') {
        return true;
    }
    // No.973
    // 説明:8ab5
    // 0x8ab5 (Windows-31J)
    // 0x6163 (UTF-16BE)
    if (argCheck == '慣') {
        return true;
    }
    // No.974
    // 説明:8ab6
    // 0x8ab6 (Windows-31J)
    // 0x61be (UTF-16BE)
    if (argCheck == '憾') {
        return true;
    }
    // No.975
    // 説明:8ab7
    // 0x8ab7 (Windows-31J)
    // 0x63db (UTF-16BE)
    if (argCheck == '換') {
        return true;
    }
    // No.976
    // 説明:8ab8
    // 0x8ab8 (Windows-31J)
    // 0x6562 (UTF-16BE)
    if (argCheck == '敢') {
        return true;
    }
    // No.977
    // 説明:8ab9
    // 0x8ab9 (Windows-31J)
    // 0x67d1 (UTF-16BE)
    if (argCheck == '柑') {
        return true;
    }
    // No.978
    // 説明:8aba
    // 0x8aba (Windows-31J)
    // 0x6853 (UTF-16BE)
    if (argCheck == '桓') {
        return true;
    }
    // No.979
    // 説明:8abb
    // 0x8abb (Windows-31J)
    // 0x68fa (UTF-16BE)
    if (argCheck == '棺') {
        return true;
    }
    // No.980
    // 説明:8abc
    // 0x8abc (Windows-31J)
    // 0x6b3e (UTF-16BE)
    if (argCheck == '款') {
        return true;
    }
    // No.981
    // 説明:8abd
    // 0x8abd (Windows-31J)
    // 0x6b53 (UTF-16BE)
    if (argCheck == '歓') {
        return true;
    }
    // No.982
    // 説明:8abe
    // 0x8abe (Windows-31J)
    // 0x6c57 (UTF-16BE)
    if (argCheck == '汗') {
        return true;
    }
    // No.983
    // 説明:8abf
    // 0x8abf (Windows-31J)
    // 0x6f22 (UTF-16BE)
    if (argCheck == '漢') {
        return true;
    }
    // No.984
    // 説明:8ac0
    // 0x8ac0 (Windows-31J)
    // 0x6f97 (UTF-16BE)
    if (argCheck == '澗') {
        return true;
    }
    // No.985
    // 説明:8ac1
    // 0x8ac1 (Windows-31J)
    // 0x6f45 (UTF-16BE)
    if (argCheck == '潅') {
        return true;
    }
    // No.986
    // 説明:8ac2
    // 0x8ac2 (Windows-31J)
    // 0x74b0 (UTF-16BE)
    if (argCheck == '環') {
        return true;
    }
    // No.987
    // 説明:8ac3
    // 0x8ac3 (Windows-31J)
    // 0x7518 (UTF-16BE)
    if (argCheck == '甘') {
        return true;
    }
    // No.988
    // 説明:8ac4
    // 0x8ac4 (Windows-31J)
    // 0x76e3 (UTF-16BE)
    if (argCheck == '監') {
        return true;
    }
    // No.989
    // 説明:8ac5
    // 0x8ac5 (Windows-31J)
    // 0x770b (UTF-16BE)
    if (argCheck == '看') {
        return true;
    }
    // No.990
    // 説明:8ac6
    // 0x8ac6 (Windows-31J)
    // 0x7aff (UTF-16BE)
    if (argCheck == '竿') {
        return true;
    }
    // No.991
    // 説明:8ac7
    // 0x8ac7 (Windows-31J)
    // 0x7ba1 (UTF-16BE)
    if (argCheck == '管') {
        return true;
    }
    // No.992
    // 説明:8ac8
    // 0x8ac8 (Windows-31J)
    // 0x7c21 (UTF-16BE)
    if (argCheck == '簡') {
        return true;
    }
    // No.993
    // 説明:8ac9
    // 0x8ac9 (Windows-31J)
    // 0x7de9 (UTF-16BE)
    if (argCheck == '緩') {
        return true;
    }
    // No.994
    // 説明:8aca
    // 0x8aca (Windows-31J)
    // 0x7f36 (UTF-16BE)
    if (argCheck == '缶') {
        return true;
    }
    // No.995
    // 説明:8acb
    // 0x8acb (Windows-31J)
    // 0x7ff0 (UTF-16BE)
    if (argCheck == '翰') {
        return true;
    }
    // No.996
    // 説明:8acc
    // 0x8acc (Windows-31J)
    // 0x809d (UTF-16BE)
    if (argCheck == '肝') {
        return true;
    }
    // No.997
    // 説明:8acd
    // 0x8acd (Windows-31J)
    // 0x8266 (UTF-16BE)
    if (argCheck == '艦') {
        return true;
    }
    // No.998
    // 説明:8ace
    // 0x8ace (Windows-31J)
    // 0x839e (UTF-16BE)
    if (argCheck == '莞') {
        return true;
    }
    // No.999
    // 説明:8acf
    // 0x8acf (Windows-31J)
    // 0x89b3 (UTF-16BE)
    if (argCheck == '観') {
        return true;
    }
    // No.1000
    // 説明:8ad0
    // 0x8ad0 (Windows-31J)
    // 0x8acc (UTF-16BE)
    if (argCheck == '諌') {
        return true;
    }
    // No.1001
    // 説明:8ad1
    // 0x8ad1 (Windows-31J)
    // 0x8cab (UTF-16BE)
    if (argCheck == '貫') {
        return true;
    }
    // No.1002
    // 説明:8ad2
    // 0x8ad2 (Windows-31J)
    // 0x9084 (UTF-16BE)
    if (argCheck == '還') {
        return true;
    }
    // No.1003
    // 説明:8ad3
    // 0x8ad3 (Windows-31J)
    // 0x9451 (UTF-16BE)
    if (argCheck == '鑑') {
        return true;
    }
    // No.1004
    // 説明:8ad4
    // 0x8ad4 (Windows-31J)
    // 0x9593 (UTF-16BE)
    if (argCheck == '間') {
        return true;
    }
    // No.1005
    // 説明:8ad5
    // 0x8ad5 (Windows-31J)
    // 0x9591 (UTF-16BE)
    if (argCheck == '閑') {
        return true;
    }
    // No.1006
    // 説明:8ad6
    // 0x8ad6 (Windows-31J)
    // 0x95a2 (UTF-16BE)
    if (argCheck == '関') {
        return true;
    }
    // No.1007
    // 説明:8ad7
    // 0x8ad7 (Windows-31J)
    // 0x9665 (UTF-16BE)
    if (argCheck == '陥') {
        return true;
    }
    // No.1008
    // 説明:8ad8
    // 0x8ad8 (Windows-31J)
    // 0x97d3 (UTF-16BE)
    if (argCheck == '韓') {
        return true;
    }
    // No.1009
    // 説明:8ad9
    // 0x8ad9 (Windows-31J)
    // 0x9928 (UTF-16BE)
    if (argCheck == '館') {
        return true;
    }
    // No.1010
    // 説明:8ada
    // 0x8ada (Windows-31J)
    // 0x8218 (UTF-16BE)
    if (argCheck == '舘') {
        return true;
    }
    // No.1011
    // 説明:8adb
    // 0x8adb (Windows-31J)
    // 0x4e38 (UTF-16BE)
    if (argCheck == '丸') {
        return true;
    }
    // No.1012
    // 説明:8adc
    // 0x8adc (Windows-31J)
    // 0x542b (UTF-16BE)
    if (argCheck == '含') {
        return true;
    }
    // No.1013
    // 説明:8add
    // 0x8add (Windows-31J)
    // 0x5cb8 (UTF-16BE)
    if (argCheck == '岸') {
        return true;
    }
    // No.1014
    // 説明:8ade
    // 0x8ade (Windows-31J)
    // 0x5dcc (UTF-16BE)
    if (argCheck == '巌') {
        return true;
    }
    // No.1015
    // 説明:8adf
    // 0x8adf (Windows-31J)
    // 0x73a9 (UTF-16BE)
    if (argCheck == '玩') {
        return true;
    }
    // No.1016
    // 説明:8ae0
    // 0x8ae0 (Windows-31J)
    // 0x764c (UTF-16BE)
    if (argCheck == '癌') {
        return true;
    }
    // No.1017
    // 説明:8ae1
    // 0x8ae1 (Windows-31J)
    // 0x773c (UTF-16BE)
    if (argCheck == '眼') {
        return true;
    }
    // No.1018
    // 説明:8ae2
    // 0x8ae2 (Windows-31J)
    // 0x5ca9 (UTF-16BE)
    if (argCheck == '岩') {
        return true;
    }
    // No.1019
    // 説明:8ae3
    // 0x8ae3 (Windows-31J)
    // 0x7feb (UTF-16BE)
    if (argCheck == '翫') {
        return true;
    }
    // No.1020
    // 説明:8ae4
    // 0x8ae4 (Windows-31J)
    // 0x8d0b (UTF-16BE)
    if (argCheck == '贋') {
        return true;
    }
    // No.1021
    // 説明:8ae5
    // 0x8ae5 (Windows-31J)
    // 0x96c1 (UTF-16BE)
    if (argCheck == '雁') {
        return true;
    }
    // No.1022
    // 説明:8ae6
    // 0x8ae6 (Windows-31J)
    // 0x9811 (UTF-16BE)
    if (argCheck == '頑') {
        return true;
    }
    // No.1023
    // 説明:8ae7
    // 0x8ae7 (Windows-31J)
    // 0x9854 (UTF-16BE)
    if (argCheck == '顔') {
        return true;
    }
    // No.1024
    // 説明:8ae8
    // 0x8ae8 (Windows-31J)
    // 0x9858 (UTF-16BE)
    if (argCheck == '願') {
        return true;
    }
    // No.1025
    // 説明:8ae9
    // 0x8ae9 (Windows-31J)
    // 0x4f01 (UTF-16BE)
    if (argCheck == '企') {
        return true;
    }
    // No.1026
    // 説明:8aea
    // 0x8aea (Windows-31J)
    // 0x4f0e (UTF-16BE)
    if (argCheck == '伎') {
        return true;
    }
    // No.1027
    // 説明:8aeb
    // 0x8aeb (Windows-31J)
    // 0x5371 (UTF-16BE)
    if (argCheck == '危') {
        return true;
    }
    // No.1028
    // 説明:8aec
    // 0x8aec (Windows-31J)
    // 0x559c (UTF-16BE)
    if (argCheck == '喜') {
        return true;
    }
    // No.1029
    // 説明:8aed
    // 0x8aed (Windows-31J)
    // 0x5668 (UTF-16BE)
    if (argCheck == '器') {
        return true;
    }
    // No.1030
    // 説明:8aee
    // 0x8aee (Windows-31J)
    // 0x57fa (UTF-16BE)
    if (argCheck == '基') {
        return true;
    }
    // No.1031
    // 説明:8aef
    // 0x8aef (Windows-31J)
    // 0x5947 (UTF-16BE)
    if (argCheck == '奇') {
        return true;
    }
    // No.1032
    // 説明:8af0
    // 0x8af0 (Windows-31J)
    // 0x5b09 (UTF-16BE)
    if (argCheck == '嬉') {
        return true;
    }
    // No.1033
    // 説明:8af1
    // 0x8af1 (Windows-31J)
    // 0x5bc4 (UTF-16BE)
    if (argCheck == '寄') {
        return true;
    }
    // No.1034
    // 説明:8af2
    // 0x8af2 (Windows-31J)
    // 0x5c90 (UTF-16BE)
    if (argCheck == '岐') {
        return true;
    }
    // No.1035
    // 説明:8af3
    // 0x8af3 (Windows-31J)
    // 0x5e0c (UTF-16BE)
    if (argCheck == '希') {
        return true;
    }
    // No.1036
    // 説明:8af4
    // 0x8af4 (Windows-31J)
    // 0x5e7e (UTF-16BE)
    if (argCheck == '幾') {
        return true;
    }
    // No.1037
    // 説明:8af5
    // 0x8af5 (Windows-31J)
    // 0x5fcc (UTF-16BE)
    if (argCheck == '忌') {
        return true;
    }
    // No.1038
    // 説明:8af6
    // 0x8af6 (Windows-31J)
    // 0x63ee (UTF-16BE)
    if (argCheck == '揮') {
        return true;
    }
    // No.1039
    // 説明:8af7
    // 0x8af7 (Windows-31J)
    // 0x673a (UTF-16BE)
    if (argCheck == '机') {
        return true;
    }
    // No.1040
    // 説明:8af8
    // 0x8af8 (Windows-31J)
    // 0x65d7 (UTF-16BE)
    if (argCheck == '旗') {
        return true;
    }
    // No.1041
    // 説明:8af9
    // 0x8af9 (Windows-31J)
    // 0x65e2 (UTF-16BE)
    if (argCheck == '既') {
        return true;
    }
    // No.1042
    // 説明:8afa
    // 0x8afa (Windows-31J)
    // 0x671f (UTF-16BE)
    if (argCheck == '期') {
        return true;
    }
    // No.1043
    // 説明:8afb
    // 0x8afb (Windows-31J)
    // 0x68cb (UTF-16BE)
    if (argCheck == '棋') {
        return true;
    }
    // No.1044
    // 説明:8afc
    // 0x8afc (Windows-31J)
    // 0x68c4 (UTF-16BE)
    if (argCheck == '棄') {
        return true;
    }
    // No.1045
    // 説明:8b40
    // 0x8b40 (Windows-31J)
    // 0x6a5f (UTF-16BE)
    if (argCheck == '機') {
        return true;
    }
    // No.1046
    // 説明:8b41
    // 0x8b41 (Windows-31J)
    // 0x5e30 (UTF-16BE)
    if (argCheck == '帰') {
        return true;
    }
    // No.1047
    // 説明:8b42
    // 0x8b42 (Windows-31J)
    // 0x6bc5 (UTF-16BE)
    if (argCheck == '毅') {
        return true;
    }
    // No.1048
    // 説明:8b43
    // 0x8b43 (Windows-31J)
    // 0x6c17 (UTF-16BE)
    if (argCheck == '気') {
        return true;
    }
    // No.1049
    // 説明:8b44
    // 0x8b44 (Windows-31J)
    // 0x6c7d (UTF-16BE)
    if (argCheck == '汽') {
        return true;
    }
    // No.1050
    // 説明:8b45
    // 0x8b45 (Windows-31J)
    // 0x757f (UTF-16BE)
    if (argCheck == '畿') {
        return true;
    }
    // No.1051
    // 説明:8b46
    // 0x8b46 (Windows-31J)
    // 0x7948 (UTF-16BE)
    if (argCheck == '祈') {
        return true;
    }
    // No.1052
    // 説明:8b47
    // 0x8b47 (Windows-31J)
    // 0x5b63 (UTF-16BE)
    if (argCheck == '季') {
        return true;
    }
    // No.1053
    // 説明:8b48
    // 0x8b48 (Windows-31J)
    // 0x7a00 (UTF-16BE)
    if (argCheck == '稀') {
        return true;
    }
    // No.1054
    // 説明:8b49
    // 0x8b49 (Windows-31J)
    // 0x7d00 (UTF-16BE)
    if (argCheck == '紀') {
        return true;
    }
    // No.1055
    // 説明:8b4a
    // 0x8b4a (Windows-31J)
    // 0x5fbd (UTF-16BE)
    if (argCheck == '徽') {
        return true;
    }
    // No.1056
    // 説明:8b4b
    // 0x8b4b (Windows-31J)
    // 0x898f (UTF-16BE)
    if (argCheck == '規') {
        return true;
    }
    // No.1057
    // 説明:8b4c
    // 0x8b4c (Windows-31J)
    // 0x8a18 (UTF-16BE)
    if (argCheck == '記') {
        return true;
    }
    // No.1058
    // 説明:8b4d
    // 0x8b4d (Windows-31J)
    // 0x8cb4 (UTF-16BE)
    if (argCheck == '貴') {
        return true;
    }
    // No.1059
    // 説明:8b4e
    // 0x8b4e (Windows-31J)
    // 0x8d77 (UTF-16BE)
    if (argCheck == '起') {
        return true;
    }
    // No.1060
    // 説明:8b4f
    // 0x8b4f (Windows-31J)
    // 0x8ecc (UTF-16BE)
    if (argCheck == '軌') {
        return true;
    }
    // No.1061
    // 説明:8b50
    // 0x8b50 (Windows-31J)
    // 0x8f1d (UTF-16BE)
    if (argCheck == '輝') {
        return true;
    }
    // No.1062
    // 説明:8b51
    // 0x8b51 (Windows-31J)
    // 0x98e2 (UTF-16BE)
    if (argCheck == '飢') {
        return true;
    }
    // No.1063
    // 説明:8b52
    // 0x8b52 (Windows-31J)
    // 0x9a0e (UTF-16BE)
    if (argCheck == '騎') {
        return true;
    }
    // No.1064
    // 説明:8b53
    // 0x8b53 (Windows-31J)
    // 0x9b3c (UTF-16BE)
    if (argCheck == '鬼') {
        return true;
    }
    // No.1065
    // 説明:8b54
    // 0x8b54 (Windows-31J)
    // 0x4e80 (UTF-16BE)
    if (argCheck == '亀') {
        return true;
    }
    // No.1066
    // 説明:8b55
    // 0x8b55 (Windows-31J)
    // 0x507d (UTF-16BE)
    if (argCheck == '偽') {
        return true;
    }
    // No.1067
    // 説明:8b56
    // 0x8b56 (Windows-31J)
    // 0x5100 (UTF-16BE)
    if (argCheck == '儀') {
        return true;
    }
    // No.1068
    // 説明:8b57
    // 0x8b57 (Windows-31J)
    // 0x5993 (UTF-16BE)
    if (argCheck == '妓') {
        return true;
    }
    // No.1069
    // 説明:8b58
    // 0x8b58 (Windows-31J)
    // 0x5b9c (UTF-16BE)
    if (argCheck == '宜') {
        return true;
    }
    // No.1070
    // 説明:8b59
    // 0x8b59 (Windows-31J)
    // 0x622f (UTF-16BE)
    if (argCheck == '戯') {
        return true;
    }
    // No.1071
    // 説明:8b5a
    // 0x8b5a (Windows-31J)
    // 0x6280 (UTF-16BE)
    if (argCheck == '技') {
        return true;
    }
    // No.1072
    // 説明:8b5b
    // 0x8b5b (Windows-31J)
    // 0x64ec (UTF-16BE)
    if (argCheck == '擬') {
        return true;
    }
    // No.1073
    // 説明:8b5c
    // 0x8b5c (Windows-31J)
    // 0x6b3a (UTF-16BE)
    if (argCheck == '欺') {
        return true;
    }
    // No.1074
    // 説明:8b5d
    // 0x8b5d (Windows-31J)
    // 0x72a0 (UTF-16BE)
    if (argCheck == '犠') {
        return true;
    }
    // No.1075
    // 説明:8b5e
    // 0x8b5e (Windows-31J)
    // 0x7591 (UTF-16BE)
    if (argCheck == '疑') {
        return true;
    }
    // No.1076
    // 説明:8b5f
    // 0x8b5f (Windows-31J)
    // 0x7947 (UTF-16BE)
    if (argCheck == '祇') {
        return true;
    }
    // No.1077
    // 説明:8b60
    // 0x8b60 (Windows-31J)
    // 0x7fa9 (UTF-16BE)
    if (argCheck == '義') {
        return true;
    }
    // No.1078
    // 説明:8b61
    // 0x8b61 (Windows-31J)
    // 0x87fb (UTF-16BE)
    if (argCheck == '蟻') {
        return true;
    }
    // No.1079
    // 説明:8b62
    // 0x8b62 (Windows-31J)
    // 0x8abc (UTF-16BE)
    if (argCheck == '誼') {
        return true;
    }
    // No.1080
    // 説明:8b63
    // 0x8b63 (Windows-31J)
    // 0x8b70 (UTF-16BE)
    if (argCheck == '議') {
        return true;
    }
    // No.1081
    // 説明:8b64
    // 0x8b64 (Windows-31J)
    // 0x63ac (UTF-16BE)
    if (argCheck == '掬') {
        return true;
    }
    // No.1082
    // 説明:8b65
    // 0x8b65 (Windows-31J)
    // 0x83ca (UTF-16BE)
    if (argCheck == '菊') {
        return true;
    }
    // No.1083
    // 説明:8b66
    // 0x8b66 (Windows-31J)
    // 0x97a0 (UTF-16BE)
    if (argCheck == '鞠') {
        return true;
    }
    // No.1084
    // 説明:8b67
    // 0x8b67 (Windows-31J)
    // 0x5409 (UTF-16BE)
    if (argCheck == '吉') {
        return true;
    }
    // No.1085
    // 説明:8b68
    // 0x8b68 (Windows-31J)
    // 0x5403 (UTF-16BE)
    if (argCheck == '吃') {
        return true;
    }
    // No.1086
    // 説明:8b69
    // 0x8b69 (Windows-31J)
    // 0x55ab (UTF-16BE)
    if (argCheck == '喫') {
        return true;
    }
    // No.1087
    // 説明:8b6a
    // 0x8b6a (Windows-31J)
    // 0x6854 (UTF-16BE)
    if (argCheck == '桔') {
        return true;
    }
    // No.1088
    // 説明:8b6b
    // 0x8b6b (Windows-31J)
    // 0x6a58 (UTF-16BE)
    if (argCheck == '橘') {
        return true;
    }
    // No.1089
    // 説明:8b6c
    // 0x8b6c (Windows-31J)
    // 0x8a70 (UTF-16BE)
    if (argCheck == '詰') {
        return true;
    }
    // No.1090
    // 説明:8b6d
    // 0x8b6d (Windows-31J)
    // 0x7827 (UTF-16BE)
    if (argCheck == '砧') {
        return true;
    }
    // No.1091
    // 説明:8b6e
    // 0x8b6e (Windows-31J)
    // 0x6775 (UTF-16BE)
    if (argCheck == '杵') {
        return true;
    }
    // No.1092
    // 説明:8b6f
    // 0x8b6f (Windows-31J)
    // 0x9ecd (UTF-16BE)
    if (argCheck == '黍') {
        return true;
    }
    // No.1093
    // 説明:8b70
    // 0x8b70 (Windows-31J)
    // 0x5374 (UTF-16BE)
    if (argCheck == '却') {
        return true;
    }
    // No.1094
    // 説明:8b71
    // 0x8b71 (Windows-31J)
    // 0x5ba2 (UTF-16BE)
    if (argCheck == '客') {
        return true;
    }
    // No.1095
    // 説明:8b72
    // 0x8b72 (Windows-31J)
    // 0x811a (UTF-16BE)
    if (argCheck == '脚') {
        return true;
    }
    // No.1096
    // 説明:8b73
    // 0x8b73 (Windows-31J)
    // 0x8650 (UTF-16BE)
    if (argCheck == '虐') {
        return true;
    }
    // No.1097
    // 説明:8b74
    // 0x8b74 (Windows-31J)
    // 0x9006 (UTF-16BE)
    if (argCheck == '逆') {
        return true;
    }
    // No.1098
    // 説明:8b75
    // 0x8b75 (Windows-31J)
    // 0x4e18 (UTF-16BE)
    if (argCheck == '丘') {
        return true;
    }
    // No.1099
    // 説明:8b76
    // 0x8b76 (Windows-31J)
    // 0x4e45 (UTF-16BE)
    if (argCheck == '久') {
        return true;
    }
    // No.1100
    // 説明:8b77
    // 0x8b77 (Windows-31J)
    // 0x4ec7 (UTF-16BE)
    if (argCheck == '仇') {
        return true;
    }
    // No.1101
    // 説明:8b78
    // 0x8b78 (Windows-31J)
    // 0x4f11 (UTF-16BE)
    if (argCheck == '休') {
        return true;
    }
    // No.1102
    // 説明:8b79
    // 0x8b79 (Windows-31J)
    // 0x53ca (UTF-16BE)
    if (argCheck == '及') {
        return true;
    }
    // No.1103
    // 説明:8b7a
    // 0x8b7a (Windows-31J)
    // 0x5438 (UTF-16BE)
    if (argCheck == '吸') {
        return true;
    }
    // No.1104
    // 説明:8b7b
    // 0x8b7b (Windows-31J)
    // 0x5bae (UTF-16BE)
    if (argCheck == '宮') {
        return true;
    }
    // No.1105
    // 説明:8b7c
    // 0x8b7c (Windows-31J)
    // 0x5f13 (UTF-16BE)
    if (argCheck == '弓') {
        return true;
    }
    // No.1106
    // 説明:8b7d
    // 0x8b7d (Windows-31J)
    // 0x6025 (UTF-16BE)
    if (argCheck == '急') {
        return true;
    }
    // No.1107
    // 説明:8b7e
    // 0x8b7e (Windows-31J)
    // 0x6551 (UTF-16BE)
    if (argCheck == '救') {
        return true;
    }
    // No.1108
    // 説明:8b80
    // 0x8b80 (Windows-31J)
    // 0x673d (UTF-16BE)
    if (argCheck == '朽') {
        return true;
    }
    // No.1109
    // 説明:8b81
    // 0x8b81 (Windows-31J)
    // 0x6c42 (UTF-16BE)
    if (argCheck == '求') {
        return true;
    }
    // No.1110
    // 説明:8b82
    // 0x8b82 (Windows-31J)
    // 0x6c72 (UTF-16BE)
    if (argCheck == '汲') {
        return true;
    }
    // No.1111
    // 説明:8b83
    // 0x8b83 (Windows-31J)
    // 0x6ce3 (UTF-16BE)
    if (argCheck == '泣') {
        return true;
    }
    // No.1112
    // 説明:8b84
    // 0x8b84 (Windows-31J)
    // 0x7078 (UTF-16BE)
    if (argCheck == '灸') {
        return true;
    }
    // No.1113
    // 説明:8b85
    // 0x8b85 (Windows-31J)
    // 0x7403 (UTF-16BE)
    if (argCheck == '球') {
        return true;
    }
    // No.1114
    // 説明:8b86
    // 0x8b86 (Windows-31J)
    // 0x7a76 (UTF-16BE)
    if (argCheck == '究') {
        return true;
    }
    // No.1115
    // 説明:8b87
    // 0x8b87 (Windows-31J)
    // 0x7aae (UTF-16BE)
    if (argCheck == '窮') {
        return true;
    }
    // No.1116
    // 説明:8b88
    // 0x8b88 (Windows-31J)
    // 0x7b08 (UTF-16BE)
    if (argCheck == '笈') {
        return true;
    }
    // No.1117
    // 説明:8b89
    // 0x8b89 (Windows-31J)
    // 0x7d1a (UTF-16BE)
    if (argCheck == '級') {
        return true;
    }
    // No.1118
    // 説明:8b8a
    // 0x8b8a (Windows-31J)
    // 0x7cfe (UTF-16BE)
    if (argCheck == '糾') {
        return true;
    }
    // No.1119
    // 説明:8b8b
    // 0x8b8b (Windows-31J)
    // 0x7d66 (UTF-16BE)
    if (argCheck == '給') {
        return true;
    }
    // No.1120
    // 説明:8b8c
    // 0x8b8c (Windows-31J)
    // 0x65e7 (UTF-16BE)
    if (argCheck == '旧') {
        return true;
    }
    // No.1121
    // 説明:8b8d
    // 0x8b8d (Windows-31J)
    // 0x725b (UTF-16BE)
    if (argCheck == '牛') {
        return true;
    }
    // No.1122
    // 説明:8b8e
    // 0x8b8e (Windows-31J)
    // 0x53bb (UTF-16BE)
    if (argCheck == '去') {
        return true;
    }
    // No.1123
    // 説明:8b8f
    // 0x8b8f (Windows-31J)
    // 0x5c45 (UTF-16BE)
    if (argCheck == '居') {
        return true;
    }
    // No.1124
    // 説明:8b90
    // 0x8b90 (Windows-31J)
    // 0x5de8 (UTF-16BE)
    if (argCheck == '巨') {
        return true;
    }
    // No.1125
    // 説明:8b91
    // 0x8b91 (Windows-31J)
    // 0x62d2 (UTF-16BE)
    if (argCheck == '拒') {
        return true;
    }
    // No.1126
    // 説明:8b92
    // 0x8b92 (Windows-31J)
    // 0x62e0 (UTF-16BE)
    if (argCheck == '拠') {
        return true;
    }
    // No.1127
    // 説明:8b93
    // 0x8b93 (Windows-31J)
    // 0x6319 (UTF-16BE)
    if (argCheck == '挙') {
        return true;
    }
    // No.1128
    // 説明:8b94
    // 0x8b94 (Windows-31J)
    // 0x6e20 (UTF-16BE)
    if (argCheck == '渠') {
        return true;
    }
    // No.1129
    // 説明:8b95
    // 0x8b95 (Windows-31J)
    // 0x865a (UTF-16BE)
    if (argCheck == '虚') {
        return true;
    }
    // No.1130
    // 説明:8b96
    // 0x8b96 (Windows-31J)
    // 0x8a31 (UTF-16BE)
    if (argCheck == '許') {
        return true;
    }
    // No.1131
    // 説明:8b97
    // 0x8b97 (Windows-31J)
    // 0x8ddd (UTF-16BE)
    if (argCheck == '距') {
        return true;
    }
    // No.1132
    // 説明:8b98
    // 0x8b98 (Windows-31J)
    // 0x92f8 (UTF-16BE)
    if (argCheck == '鋸') {
        return true;
    }
    // No.1133
    // 説明:8b99
    // 0x8b99 (Windows-31J)
    // 0x6f01 (UTF-16BE)
    if (argCheck == '漁') {
        return true;
    }
    // No.1134
    // 説明:8b9a
    // 0x8b9a (Windows-31J)
    // 0x79a6 (UTF-16BE)
    if (argCheck == '禦') {
        return true;
    }
    // No.1135
    // 説明:8b9b
    // 0x8b9b (Windows-31J)
    // 0x9b5a (UTF-16BE)
    if (argCheck == '魚') {
        return true;
    }
    // No.1136
    // 説明:8b9c
    // 0x8b9c (Windows-31J)
    // 0x4ea8 (UTF-16BE)
    if (argCheck == '亨') {
        return true;
    }
    // No.1137
    // 説明:8b9d
    // 0x8b9d (Windows-31J)
    // 0x4eab (UTF-16BE)
    if (argCheck == '享') {
        return true;
    }
    // No.1138
    // 説明:8b9e
    // 0x8b9e (Windows-31J)
    // 0x4eac (UTF-16BE)
    if (argCheck == '京') {
        return true;
    }
    // No.1139
    // 説明:8b9f
    // 0x8b9f (Windows-31J)
    // 0x4f9b (UTF-16BE)
    if (argCheck == '供') {
        return true;
    }
    // No.1140
    // 説明:8ba0
    // 0x8ba0 (Windows-31J)
    // 0x4fa0 (UTF-16BE)
    if (argCheck == '侠') {
        return true;
    }
    // No.1141
    // 説明:8ba1
    // 0x8ba1 (Windows-31J)
    // 0x50d1 (UTF-16BE)
    if (argCheck == '僑') {
        return true;
    }
    // No.1142
    // 説明:8ba2
    // 0x8ba2 (Windows-31J)
    // 0x5147 (UTF-16BE)
    if (argCheck == '兇') {
        return true;
    }
    // No.1143
    // 説明:8ba3
    // 0x8ba3 (Windows-31J)
    // 0x7af6 (UTF-16BE)
    if (argCheck == '競') {
        return true;
    }
    // No.1144
    // 説明:8ba4
    // 0x8ba4 (Windows-31J)
    // 0x5171 (UTF-16BE)
    if (argCheck == '共') {
        return true;
    }
    // No.1145
    // 説明:8ba5
    // 0x8ba5 (Windows-31J)
    // 0x51f6 (UTF-16BE)
    if (argCheck == '凶') {
        return true;
    }
    // No.1146
    // 説明:8ba6
    // 0x8ba6 (Windows-31J)
    // 0x5354 (UTF-16BE)
    if (argCheck == '協') {
        return true;
    }
    // No.1147
    // 説明:8ba7
    // 0x8ba7 (Windows-31J)
    // 0x5321 (UTF-16BE)
    if (argCheck == '匡') {
        return true;
    }
    // No.1148
    // 説明:8ba8
    // 0x8ba8 (Windows-31J)
    // 0x537f (UTF-16BE)
    if (argCheck == '卿') {
        return true;
    }
    // No.1149
    // 説明:8ba9
    // 0x8ba9 (Windows-31J)
    // 0x53eb (UTF-16BE)
    if (argCheck == '叫') {
        return true;
    }
    // No.1150
    // 説明:8baa
    // 0x8baa (Windows-31J)
    // 0x55ac (UTF-16BE)
    if (argCheck == '喬') {
        return true;
    }
    // No.1151
    // 説明:8bab
    // 0x8bab (Windows-31J)
    // 0x5883 (UTF-16BE)
    if (argCheck == '境') {
        return true;
    }
    // No.1152
    // 説明:8bac
    // 0x8bac (Windows-31J)
    // 0x5ce1 (UTF-16BE)
    if (argCheck == '峡') {
        return true;
    }
    // No.1153
    // 説明:8bad
    // 0x8bad (Windows-31J)
    // 0x5f37 (UTF-16BE)
    if (argCheck == '強') {
        return true;
    }
    // No.1154
    // 説明:8bae
    // 0x8bae (Windows-31J)
    // 0x5f4a (UTF-16BE)
    if (argCheck == '彊') {
        return true;
    }
    // No.1155
    // 説明:8baf
    // 0x8baf (Windows-31J)
    // 0x602f (UTF-16BE)
    if (argCheck == '怯') {
        return true;
    }
    // No.1156
    // 説明:8bb0
    // 0x8bb0 (Windows-31J)
    // 0x6050 (UTF-16BE)
    if (argCheck == '恐') {
        return true;
    }
    // No.1157
    // 説明:8bb1
    // 0x8bb1 (Windows-31J)
    // 0x606d (UTF-16BE)
    if (argCheck == '恭') {
        return true;
    }
    // No.1158
    // 説明:8bb2
    // 0x8bb2 (Windows-31J)
    // 0x631f (UTF-16BE)
    if (argCheck == '挟') {
        return true;
    }
    // No.1159
    // 説明:8bb3
    // 0x8bb3 (Windows-31J)
    // 0x6559 (UTF-16BE)
    if (argCheck == '教') {
        return true;
    }
    // No.1160
    // 説明:8bb4
    // 0x8bb4 (Windows-31J)
    // 0x6a4b (UTF-16BE)
    if (argCheck == '橋') {
        return true;
    }
    // No.1161
    // 説明:8bb5
    // 0x8bb5 (Windows-31J)
    // 0x6cc1 (UTF-16BE)
    if (argCheck == '況') {
        return true;
    }
    // No.1162
    // 説明:8bb6
    // 0x8bb6 (Windows-31J)
    // 0x72c2 (UTF-16BE)
    if (argCheck == '狂') {
        return true;
    }
    // No.1163
    // 説明:8bb7
    // 0x8bb7 (Windows-31J)
    // 0x72ed (UTF-16BE)
    if (argCheck == '狭') {
        return true;
    }
    // No.1164
    // 説明:8bb8
    // 0x8bb8 (Windows-31J)
    // 0x77ef (UTF-16BE)
    if (argCheck == '矯') {
        return true;
    }
    // No.1165
    // 説明:8bb9
    // 0x8bb9 (Windows-31J)
    // 0x80f8 (UTF-16BE)
    if (argCheck == '胸') {
        return true;
    }
    // No.1166
    // 説明:8bba
    // 0x8bba (Windows-31J)
    // 0x8105 (UTF-16BE)
    if (argCheck == '脅') {
        return true;
    }
    // No.1167
    // 説明:8bbb
    // 0x8bbb (Windows-31J)
    // 0x8208 (UTF-16BE)
    if (argCheck == '興') {
        return true;
    }
    // No.1168
    // 説明:8bbc
    // 0x8bbc (Windows-31J)
    // 0x854e (UTF-16BE)
    if (argCheck == '蕎') {
        return true;
    }
    // No.1169
    // 説明:8bbd
    // 0x8bbd (Windows-31J)
    // 0x90f7 (UTF-16BE)
    if (argCheck == '郷') {
        return true;
    }
    // No.1170
    // 説明:8bbe
    // 0x8bbe (Windows-31J)
    // 0x93e1 (UTF-16BE)
    if (argCheck == '鏡') {
        return true;
    }
    // No.1171
    // 説明:8bbf
    // 0x8bbf (Windows-31J)
    // 0x97ff (UTF-16BE)
    if (argCheck == '響') {
        return true;
    }
    // No.1172
    // 説明:8bc0
    // 0x8bc0 (Windows-31J)
    // 0x9957 (UTF-16BE)
    if (argCheck == '饗') {
        return true;
    }
    // No.1173
    // 説明:8bc1
    // 0x8bc1 (Windows-31J)
    // 0x9a5a (UTF-16BE)
    if (argCheck == '驚') {
        return true;
    }
    // No.1174
    // 説明:8bc2
    // 0x8bc2 (Windows-31J)
    // 0x4ef0 (UTF-16BE)
    if (argCheck == '仰') {
        return true;
    }
    // No.1175
    // 説明:8bc3
    // 0x8bc3 (Windows-31J)
    // 0x51dd (UTF-16BE)
    if (argCheck == '凝') {
        return true;
    }
    // No.1176
    // 説明:8bc4
    // 0x8bc4 (Windows-31J)
    // 0x5c2d (UTF-16BE)
    if (argCheck == '尭') {
        return true;
    }
    // No.1177
    // 説明:8bc5
    // 0x8bc5 (Windows-31J)
    // 0x6681 (UTF-16BE)
    if (argCheck == '暁') {
        return true;
    }
    // No.1178
    // 説明:8bc6
    // 0x8bc6 (Windows-31J)
    // 0x696d (UTF-16BE)
    if (argCheck == '業') {
        return true;
    }
    // No.1179
    // 説明:8bc7
    // 0x8bc7 (Windows-31J)
    // 0x5c40 (UTF-16BE)
    if (argCheck == '局') {
        return true;
    }
    // No.1180
    // 説明:8bc8
    // 0x8bc8 (Windows-31J)
    // 0x66f2 (UTF-16BE)
    if (argCheck == '曲') {
        return true;
    }
    // No.1181
    // 説明:8bc9
    // 0x8bc9 (Windows-31J)
    // 0x6975 (UTF-16BE)
    if (argCheck == '極') {
        return true;
    }
    // No.1182
    // 説明:8bca
    // 0x8bca (Windows-31J)
    // 0x7389 (UTF-16BE)
    if (argCheck == '玉') {
        return true;
    }
    // No.1183
    // 説明:8bcb
    // 0x8bcb (Windows-31J)
    // 0x6850 (UTF-16BE)
    if (argCheck == '桐') {
        return true;
    }
    // No.1184
    // 説明:8bcc
    // 0x8bcc (Windows-31J)
    // 0x7c81 (UTF-16BE)
    if (argCheck == '粁') {
        return true;
    }
    // No.1185
    // 説明:8bcd
    // 0x8bcd (Windows-31J)
    // 0x50c5 (UTF-16BE)
    if (argCheck == '僅') {
        return true;
    }
    // No.1186
    // 説明:8bce
    // 0x8bce (Windows-31J)
    // 0x52e4 (UTF-16BE)
    if (argCheck == '勤') {
        return true;
    }
    // No.1187
    // 説明:8bcf
    // 0x8bcf (Windows-31J)
    // 0x5747 (UTF-16BE)
    if (argCheck == '均') {
        return true;
    }
    // No.1188
    // 説明:8bd0
    // 0x8bd0 (Windows-31J)
    // 0x5dfe (UTF-16BE)
    if (argCheck == '巾') {
        return true;
    }
    // No.1189
    // 説明:8bd1
    // 0x8bd1 (Windows-31J)
    // 0x9326 (UTF-16BE)
    if (argCheck == '錦') {
        return true;
    }
    // No.1190
    // 説明:8bd2
    // 0x8bd2 (Windows-31J)
    // 0x65a4 (UTF-16BE)
    if (argCheck == '斤') {
        return true;
    }
    // No.1191
    // 説明:8bd3
    // 0x8bd3 (Windows-31J)
    // 0x6b23 (UTF-16BE)
    if (argCheck == '欣') {
        return true;
    }
    // No.1192
    // 説明:8bd4
    // 0x8bd4 (Windows-31J)
    // 0x6b3d (UTF-16BE)
    if (argCheck == '欽') {
        return true;
    }
    // No.1193
    // 説明:8bd5
    // 0x8bd5 (Windows-31J)
    // 0x7434 (UTF-16BE)
    if (argCheck == '琴') {
        return true;
    }
    // No.1194
    // 説明:8bd6
    // 0x8bd6 (Windows-31J)
    // 0x7981 (UTF-16BE)
    if (argCheck == '禁') {
        return true;
    }
    // No.1195
    // 説明:8bd7
    // 0x8bd7 (Windows-31J)
    // 0x79bd (UTF-16BE)
    if (argCheck == '禽') {
        return true;
    }
    // No.1196
    // 説明:8bd8
    // 0x8bd8 (Windows-31J)
    // 0x7b4b (UTF-16BE)
    if (argCheck == '筋') {
        return true;
    }
    // No.1197
    // 説明:8bd9
    // 0x8bd9 (Windows-31J)
    // 0x7dca (UTF-16BE)
    if (argCheck == '緊') {
        return true;
    }
    // No.1198
    // 説明:8bda
    // 0x8bda (Windows-31J)
    // 0x82b9 (UTF-16BE)
    if (argCheck == '芹') {
        return true;
    }
    // No.1199
    // 説明:8bdb
    // 0x8bdb (Windows-31J)
    // 0x83cc (UTF-16BE)
    if (argCheck == '菌') {
        return true;
    }
    // No.1200
    // 説明:8bdc
    // 0x8bdc (Windows-31J)
    // 0x887f (UTF-16BE)
    if (argCheck == '衿') {
        return true;
    }
    // No.1201
    // 説明:8bdd
    // 0x8bdd (Windows-31J)
    // 0x895f (UTF-16BE)
    if (argCheck == '襟') {
        return true;
    }
    // No.1202
    // 説明:8bde
    // 0x8bde (Windows-31J)
    // 0x8b39 (UTF-16BE)
    if (argCheck == '謹') {
        return true;
    }
    // No.1203
    // 説明:8bdf
    // 0x8bdf (Windows-31J)
    // 0x8fd1 (UTF-16BE)
    if (argCheck == '近') {
        return true;
    }
    // No.1204
    // 説明:8be0
    // 0x8be0 (Windows-31J)
    // 0x91d1 (UTF-16BE)
    if (argCheck == '金') {
        return true;
    }
    // No.1205
    // 説明:8be1
    // 0x8be1 (Windows-31J)
    // 0x541f (UTF-16BE)
    if (argCheck == '吟') {
        return true;
    }
    // No.1206
    // 説明:8be2
    // 0x8be2 (Windows-31J)
    // 0x9280 (UTF-16BE)
    if (argCheck == '銀') {
        return true;
    }
    // No.1207
    // 説明:8be3
    // 0x8be3 (Windows-31J)
    // 0x4e5d (UTF-16BE)
    if (argCheck == '九') {
        return true;
    }
    // No.1208
    // 説明:8be4
    // 0x8be4 (Windows-31J)
    // 0x5036 (UTF-16BE)
    if (argCheck == '倶') {
        return true;
    }
    // No.1209
    // 説明:8be5
    // 0x8be5 (Windows-31J)
    // 0x53e5 (UTF-16BE)
    if (argCheck == '句') {
        return true;
    }
    // No.1210
    // 説明:8be6
    // 0x8be6 (Windows-31J)
    // 0x533a (UTF-16BE)
    if (argCheck == '区') {
        return true;
    }
    // No.1211
    // 説明:8be7
    // 0x8be7 (Windows-31J)
    // 0x72d7 (UTF-16BE)
    if (argCheck == '狗') {
        return true;
    }
    // No.1212
    // 説明:8be8
    // 0x8be8 (Windows-31J)
    // 0x7396 (UTF-16BE)
    if (argCheck == '玖') {
        return true;
    }
    // No.1213
    // 説明:8be9
    // 0x8be9 (Windows-31J)
    // 0x77e9 (UTF-16BE)
    if (argCheck == '矩') {
        return true;
    }
    // No.1214
    // 説明:8bea
    // 0x8bea (Windows-31J)
    // 0x82e6 (UTF-16BE)
    if (argCheck == '苦') {
        return true;
    }
    // No.1215
    // 説明:8beb
    // 0x8beb (Windows-31J)
    // 0x8eaf (UTF-16BE)
    if (argCheck == '躯') {
        return true;
    }
    // No.1216
    // 説明:8bec
    // 0x8bec (Windows-31J)
    // 0x99c6 (UTF-16BE)
    if (argCheck == '駆') {
        return true;
    }
    // No.1217
    // 説明:8bed
    // 0x8bed (Windows-31J)
    // 0x99c8 (UTF-16BE)
    if (argCheck == '駈') {
        return true;
    }
    // No.1218
    // 説明:8bee
    // 0x8bee (Windows-31J)
    // 0x99d2 (UTF-16BE)
    if (argCheck == '駒') {
        return true;
    }
    // No.1219
    // 説明:8bef
    // 0x8bef (Windows-31J)
    // 0x5177 (UTF-16BE)
    if (argCheck == '具') {
        return true;
    }
    // No.1220
    // 説明:8bf0
    // 0x8bf0 (Windows-31J)
    // 0x611a (UTF-16BE)
    if (argCheck == '愚') {
        return true;
    }
    // No.1221
    // 説明:8bf1
    // 0x8bf1 (Windows-31J)
    // 0x865e (UTF-16BE)
    if (argCheck == '虞') {
        return true;
    }
    // No.1222
    // 説明:8bf2
    // 0x8bf2 (Windows-31J)
    // 0x55b0 (UTF-16BE)
    if (argCheck == '喰') {
        return true;
    }
    // No.1223
    // 説明:8bf3
    // 0x8bf3 (Windows-31J)
    // 0x7a7a (UTF-16BE)
    if (argCheck == '空') {
        return true;
    }
    // No.1224
    // 説明:8bf4
    // 0x8bf4 (Windows-31J)
    // 0x5076 (UTF-16BE)
    if (argCheck == '偶') {
        return true;
    }
    // No.1225
    // 説明:8bf5
    // 0x8bf5 (Windows-31J)
    // 0x5bd3 (UTF-16BE)
    if (argCheck == '寓') {
        return true;
    }
    // No.1226
    // 説明:8bf6
    // 0x8bf6 (Windows-31J)
    // 0x9047 (UTF-16BE)
    if (argCheck == '遇') {
        return true;
    }
    // No.1227
    // 説明:8bf7
    // 0x8bf7 (Windows-31J)
    // 0x9685 (UTF-16BE)
    if (argCheck == '隅') {
        return true;
    }
    // No.1228
    // 説明:8bf8
    // 0x8bf8 (Windows-31J)
    // 0x4e32 (UTF-16BE)
    if (argCheck == '串') {
        return true;
    }
    // No.1229
    // 説明:8bf9
    // 0x8bf9 (Windows-31J)
    // 0x6adb (UTF-16BE)
    if (argCheck == '櫛') {
        return true;
    }
    // No.1230
    // 説明:8bfa
    // 0x8bfa (Windows-31J)
    // 0x91e7 (UTF-16BE)
    if (argCheck == '釧') {
        return true;
    }
    // No.1231
    // 説明:8bfb
    // 0x8bfb (Windows-31J)
    // 0x5c51 (UTF-16BE)
    if (argCheck == '屑') {
        return true;
    }
    // No.1232
    // 説明:8bfc
    // 0x8bfc (Windows-31J)
    // 0x5c48 (UTF-16BE)
    if (argCheck == '屈') {
        return true;
    }
    // No.1233
    // 説明:8c40
    // 0x8c40 (Windows-31J)
    // 0x6398 (UTF-16BE)
    if (argCheck == '掘') {
        return true;
    }
    // No.1234
    // 説明:8c41
    // 0x8c41 (Windows-31J)
    // 0x7a9f (UTF-16BE)
    if (argCheck == '窟') {
        return true;
    }
    // No.1235
    // 説明:8c42
    // 0x8c42 (Windows-31J)
    // 0x6c93 (UTF-16BE)
    if (argCheck == '沓') {
        return true;
    }
    // No.1236
    // 説明:8c43
    // 0x8c43 (Windows-31J)
    // 0x9774 (UTF-16BE)
    if (argCheck == '靴') {
        return true;
    }
    // No.1237
    // 説明:8c44
    // 0x8c44 (Windows-31J)
    // 0x8f61 (UTF-16BE)
    if (argCheck == '轡') {
        return true;
    }
    // No.1238
    // 説明:8c45
    // 0x8c45 (Windows-31J)
    // 0x7aaa (UTF-16BE)
    if (argCheck == '窪') {
        return true;
    }
    // No.1239
    // 説明:8c46
    // 0x8c46 (Windows-31J)
    // 0x718a (UTF-16BE)
    if (argCheck == '熊') {
        return true;
    }
    // No.1240
    // 説明:8c47
    // 0x8c47 (Windows-31J)
    // 0x9688 (UTF-16BE)
    if (argCheck == '隈') {
        return true;
    }
    // No.1241
    // 説明:8c48
    // 0x8c48 (Windows-31J)
    // 0x7c82 (UTF-16BE)
    if (argCheck == '粂') {
        return true;
    }
    // No.1242
    // 説明:8c49
    // 0x8c49 (Windows-31J)
    // 0x6817 (UTF-16BE)
    if (argCheck == '栗') {
        return true;
    }
    // No.1243
    // 説明:8c4a
    // 0x8c4a (Windows-31J)
    // 0x7e70 (UTF-16BE)
    if (argCheck == '繰') {
        return true;
    }
    // No.1244
    // 説明:8c4b
    // 0x8c4b (Windows-31J)
    // 0x6851 (UTF-16BE)
    if (argCheck == '桑') {
        return true;
    }
    // No.1245
    // 説明:8c4c
    // 0x8c4c (Windows-31J)
    // 0x936c (UTF-16BE)
    if (argCheck == '鍬') {
        return true;
    }
    // No.1246
    // 説明:8c4d
    // 0x8c4d (Windows-31J)
    // 0x52f2 (UTF-16BE)
    if (argCheck == '勲') {
        return true;
    }
    // No.1247
    // 説明:8c4e
    // 0x8c4e (Windows-31J)
    // 0x541b (UTF-16BE)
    if (argCheck == '君') {
        return true;
    }
    // No.1248
    // 説明:8c4f
    // 0x8c4f (Windows-31J)
    // 0x85ab (UTF-16BE)
    if (argCheck == '薫') {
        return true;
    }
    // No.1249
    // 説明:8c50
    // 0x8c50 (Windows-31J)
    // 0x8a13 (UTF-16BE)
    if (argCheck == '訓') {
        return true;
    }
    // No.1250
    // 説明:8c51
    // 0x8c51 (Windows-31J)
    // 0x7fa4 (UTF-16BE)
    if (argCheck == '群') {
        return true;
    }
    // No.1251
    // 説明:8c52
    // 0x8c52 (Windows-31J)
    // 0x8ecd (UTF-16BE)
    if (argCheck == '軍') {
        return true;
    }
    // No.1252
    // 説明:8c53
    // 0x8c53 (Windows-31J)
    // 0x90e1 (UTF-16BE)
    if (argCheck == '郡') {
        return true;
    }
    // No.1253
    // 説明:8c54
    // 0x8c54 (Windows-31J)
    // 0x5366 (UTF-16BE)
    if (argCheck == '卦') {
        return true;
    }
    // No.1254
    // 説明:8c55
    // 0x8c55 (Windows-31J)
    // 0x8888 (UTF-16BE)
    if (argCheck == '袈') {
        return true;
    }
    // No.1255
    // 説明:8c56
    // 0x8c56 (Windows-31J)
    // 0x7941 (UTF-16BE)
    if (argCheck == '祁') {
        return true;
    }
    // No.1256
    // 説明:8c57
    // 0x8c57 (Windows-31J)
    // 0x4fc2 (UTF-16BE)
    if (argCheck == '係') {
        return true;
    }
    // No.1257
    // 説明:8c58
    // 0x8c58 (Windows-31J)
    // 0x50be (UTF-16BE)
    if (argCheck == '傾') {
        return true;
    }
    // No.1258
    // 説明:8c59
    // 0x8c59 (Windows-31J)
    // 0x5211 (UTF-16BE)
    if (argCheck == '刑') {
        return true;
    }
    // No.1259
    // 説明:8c5a
    // 0x8c5a (Windows-31J)
    // 0x5144 (UTF-16BE)
    if (argCheck == '兄') {
        return true;
    }
    // No.1260
    // 説明:8c5b
    // 0x8c5b (Windows-31J)
    // 0x5553 (UTF-16BE)
    if (argCheck == '啓') {
        return true;
    }
    // No.1261
    // 説明:8c5c
    // 0x8c5c (Windows-31J)
    // 0x572d (UTF-16BE)
    if (argCheck == '圭') {
        return true;
    }
    // No.1262
    // 説明:8c5d
    // 0x8c5d (Windows-31J)
    // 0x73ea (UTF-16BE)
    if (argCheck == '珪') {
        return true;
    }
    // No.1263
    // 説明:8c5e
    // 0x8c5e (Windows-31J)
    // 0x578b (UTF-16BE)
    if (argCheck == '型') {
        return true;
    }
    // No.1264
    // 説明:8c5f
    // 0x8c5f (Windows-31J)
    // 0x5951 (UTF-16BE)
    if (argCheck == '契') {
        return true;
    }
    // No.1265
    // 説明:8c60
    // 0x8c60 (Windows-31J)
    // 0x5f62 (UTF-16BE)
    if (argCheck == '形') {
        return true;
    }
    // No.1266
    // 説明:8c61
    // 0x8c61 (Windows-31J)
    // 0x5f84 (UTF-16BE)
    if (argCheck == '径') {
        return true;
    }
    // No.1267
    // 説明:8c62
    // 0x8c62 (Windows-31J)
    // 0x6075 (UTF-16BE)
    if (argCheck == '恵') {
        return true;
    }
    // No.1268
    // 説明:8c63
    // 0x8c63 (Windows-31J)
    // 0x6176 (UTF-16BE)
    if (argCheck == '慶') {
        return true;
    }
    // No.1269
    // 説明:8c64
    // 0x8c64 (Windows-31J)
    // 0x6167 (UTF-16BE)
    if (argCheck == '慧') {
        return true;
    }
    // No.1270
    // 説明:8c65
    // 0x8c65 (Windows-31J)
    // 0x61a9 (UTF-16BE)
    if (argCheck == '憩') {
        return true;
    }
    // No.1271
    // 説明:8c66
    // 0x8c66 (Windows-31J)
    // 0x63b2 (UTF-16BE)
    if (argCheck == '掲') {
        return true;
    }
    // No.1272
    // 説明:8c67
    // 0x8c67 (Windows-31J)
    // 0x643a (UTF-16BE)
    if (argCheck == '携') {
        return true;
    }
    // No.1273
    // 説明:8c68
    // 0x8c68 (Windows-31J)
    // 0x656c (UTF-16BE)
    if (argCheck == '敬') {
        return true;
    }
    // No.1274
    // 説明:8c69
    // 0x8c69 (Windows-31J)
    // 0x666f (UTF-16BE)
    if (argCheck == '景') {
        return true;
    }
    // No.1275
    // 説明:8c6a
    // 0x8c6a (Windows-31J)
    // 0x6842 (UTF-16BE)
    if (argCheck == '桂') {
        return true;
    }
    // No.1276
    // 説明:8c6b
    // 0x8c6b (Windows-31J)
    // 0x6e13 (UTF-16BE)
    if (argCheck == '渓') {
        return true;
    }
    // No.1277
    // 説明:8c6c
    // 0x8c6c (Windows-31J)
    // 0x7566 (UTF-16BE)
    if (argCheck == '畦') {
        return true;
    }
    // No.1278
    // 説明:8c6d
    // 0x8c6d (Windows-31J)
    // 0x7a3d (UTF-16BE)
    if (argCheck == '稽') {
        return true;
    }
    // No.1279
    // 説明:8c6e
    // 0x8c6e (Windows-31J)
    // 0x7cfb (UTF-16BE)
    if (argCheck == '系') {
        return true;
    }
    // No.1280
    // 説明:8c6f
    // 0x8c6f (Windows-31J)
    // 0x7d4c (UTF-16BE)
    if (argCheck == '経') {
        return true;
    }
    // No.1281
    // 説明:8c70
    // 0x8c70 (Windows-31J)
    // 0x7d99 (UTF-16BE)
    if (argCheck == '継') {
        return true;
    }
    // No.1282
    // 説明:8c71
    // 0x8c71 (Windows-31J)
    // 0x7e4b (UTF-16BE)
    if (argCheck == '繋') {
        return true;
    }
    // No.1283
    // 説明:8c72
    // 0x8c72 (Windows-31J)
    // 0x7f6b (UTF-16BE)
    if (argCheck == '罫') {
        return true;
    }
    // No.1284
    // 説明:8c73
    // 0x8c73 (Windows-31J)
    // 0x830e (UTF-16BE)
    if (argCheck == '茎') {
        return true;
    }
    // No.1285
    // 説明:8c74
    // 0x8c74 (Windows-31J)
    // 0x834a (UTF-16BE)
    if (argCheck == '荊') {
        return true;
    }
    // No.1286
    // 説明:8c75
    // 0x8c75 (Windows-31J)
    // 0x86cd (UTF-16BE)
    if (argCheck == '蛍') {
        return true;
    }
    // No.1287
    // 説明:8c76
    // 0x8c76 (Windows-31J)
    // 0x8a08 (UTF-16BE)
    if (argCheck == '計') {
        return true;
    }
    // No.1288
    // 説明:8c77
    // 0x8c77 (Windows-31J)
    // 0x8a63 (UTF-16BE)
    if (argCheck == '詣') {
        return true;
    }
    // No.1289
    // 説明:8c78
    // 0x8c78 (Windows-31J)
    // 0x8b66 (UTF-16BE)
    if (argCheck == '警') {
        return true;
    }
    // No.1290
    // 説明:8c79
    // 0x8c79 (Windows-31J)
    // 0x8efd (UTF-16BE)
    if (argCheck == '軽') {
        return true;
    }
    // No.1291
    // 説明:8c7a
    // 0x8c7a (Windows-31J)
    // 0x981a (UTF-16BE)
    if (argCheck == '頚') {
        return true;
    }
    // No.1292
    // 説明:8c7b
    // 0x8c7b (Windows-31J)
    // 0x9d8f (UTF-16BE)
    if (argCheck == '鶏') {
        return true;
    }
    // No.1293
    // 説明:8c7c
    // 0x8c7c (Windows-31J)
    // 0x82b8 (UTF-16BE)
    if (argCheck == '芸') {
        return true;
    }
    // No.1294
    // 説明:8c7d
    // 0x8c7d (Windows-31J)
    // 0x8fce (UTF-16BE)
    if (argCheck == '迎') {
        return true;
    }
    // No.1295
    // 説明:8c7e
    // 0x8c7e (Windows-31J)
    // 0x9be8 (UTF-16BE)
    if (argCheck == '鯨') {
        return true;
    }
    // No.1296
    // 説明:8c80
    // 0x8c80 (Windows-31J)
    // 0x5287 (UTF-16BE)
    if (argCheck == '劇') {
        return true;
    }
    // No.1297
    // 説明:8c81
    // 0x8c81 (Windows-31J)
    // 0x621f (UTF-16BE)
    if (argCheck == '戟') {
        return true;
    }
    // No.1298
    // 説明:8c82
    // 0x8c82 (Windows-31J)
    // 0x6483 (UTF-16BE)
    if (argCheck == '撃') {
        return true;
    }
    // No.1299
    // 説明:8c83
    // 0x8c83 (Windows-31J)
    // 0x6fc0 (UTF-16BE)
    if (argCheck == '激') {
        return true;
    }
    // No.1300
    // 説明:8c84
    // 0x8c84 (Windows-31J)
    // 0x9699 (UTF-16BE)
    if (argCheck == '隙') {
        return true;
    }
    // No.1301
    // 説明:8c85
    // 0x8c85 (Windows-31J)
    // 0x6841 (UTF-16BE)
    if (argCheck == '桁') {
        return true;
    }
    // No.1302
    // 説明:8c86
    // 0x8c86 (Windows-31J)
    // 0x5091 (UTF-16BE)
    if (argCheck == '傑') {
        return true;
    }
    // No.1303
    // 説明:8c87
    // 0x8c87 (Windows-31J)
    // 0x6b20 (UTF-16BE)
    if (argCheck == '欠') {
        return true;
    }
    // No.1304
    // 説明:8c88
    // 0x8c88 (Windows-31J)
    // 0x6c7a (UTF-16BE)
    if (argCheck == '決') {
        return true;
    }
    // No.1305
    // 説明:8c89
    // 0x8c89 (Windows-31J)
    // 0x6f54 (UTF-16BE)
    if (argCheck == '潔') {
        return true;
    }
    // No.1306
    // 説明:8c8a
    // 0x8c8a (Windows-31J)
    // 0x7a74 (UTF-16BE)
    if (argCheck == '穴') {
        return true;
    }
    // No.1307
    // 説明:8c8b
    // 0x8c8b (Windows-31J)
    // 0x7d50 (UTF-16BE)
    if (argCheck == '結') {
        return true;
    }
    // No.1308
    // 説明:8c8c
    // 0x8c8c (Windows-31J)
    // 0x8840 (UTF-16BE)
    if (argCheck == '血') {
        return true;
    }
    // No.1309
    // 説明:8c8d
    // 0x8c8d (Windows-31J)
    // 0x8a23 (UTF-16BE)
    if (argCheck == '訣') {
        return true;
    }
    // No.1310
    // 説明:8c8e
    // 0x8c8e (Windows-31J)
    // 0x6708 (UTF-16BE)
    if (argCheck == '月') {
        return true;
    }
    // No.1311
    // 説明:8c8f
    // 0x8c8f (Windows-31J)
    // 0x4ef6 (UTF-16BE)
    if (argCheck == '件') {
        return true;
    }
    // No.1312
    // 説明:8c90
    // 0x8c90 (Windows-31J)
    // 0x5039 (UTF-16BE)
    if (argCheck == '倹') {
        return true;
    }
    // No.1313
    // 説明:8c91
    // 0x8c91 (Windows-31J)
    // 0x5026 (UTF-16BE)
    if (argCheck == '倦') {
        return true;
    }
    // No.1314
    // 説明:8c92
    // 0x8c92 (Windows-31J)
    // 0x5065 (UTF-16BE)
    if (argCheck == '健') {
        return true;
    }
    // No.1315
    // 説明:8c93
    // 0x8c93 (Windows-31J)
    // 0x517c (UTF-16BE)
    if (argCheck == '兼') {
        return true;
    }
    // No.1316
    // 説明:8c94
    // 0x8c94 (Windows-31J)
    // 0x5238 (UTF-16BE)
    if (argCheck == '券') {
        return true;
    }
    // No.1317
    // 説明:8c95
    // 0x8c95 (Windows-31J)
    // 0x5263 (UTF-16BE)
    if (argCheck == '剣') {
        return true;
    }
    // No.1318
    // 説明:8c96
    // 0x8c96 (Windows-31J)
    // 0x55a7 (UTF-16BE)
    if (argCheck == '喧') {
        return true;
    }
    // No.1319
    // 説明:8c97
    // 0x8c97 (Windows-31J)
    // 0x570f (UTF-16BE)
    if (argCheck == '圏') {
        return true;
    }
    // No.1320
    // 説明:8c98
    // 0x8c98 (Windows-31J)
    // 0x5805 (UTF-16BE)
    if (argCheck == '堅') {
        return true;
    }
    // No.1321
    // 説明:8c99
    // 0x8c99 (Windows-31J)
    // 0x5acc (UTF-16BE)
    if (argCheck == '嫌') {
        return true;
    }
    // No.1322
    // 説明:8c9a
    // 0x8c9a (Windows-31J)
    // 0x5efa (UTF-16BE)
    if (argCheck == '建') {
        return true;
    }
    // No.1323
    // 説明:8c9b
    // 0x8c9b (Windows-31J)
    // 0x61b2 (UTF-16BE)
    if (argCheck == '憲') {
        return true;
    }
    // No.1324
    // 説明:8c9c
    // 0x8c9c (Windows-31J)
    // 0x61f8 (UTF-16BE)
    if (argCheck == '懸') {
        return true;
    }
    // No.1325
    // 説明:8c9d
    // 0x8c9d (Windows-31J)
    // 0x62f3 (UTF-16BE)
    if (argCheck == '拳') {
        return true;
    }
    // No.1326
    // 説明:8c9e
    // 0x8c9e (Windows-31J)
    // 0x6372 (UTF-16BE)
    if (argCheck == '捲') {
        return true;
    }
    // No.1327
    // 説明:8c9f
    // 0x8c9f (Windows-31J)
    // 0x691c (UTF-16BE)
    if (argCheck == '検') {
        return true;
    }
    // No.1328
    // 説明:8ca0
    // 0x8ca0 (Windows-31J)
    // 0x6a29 (UTF-16BE)
    if (argCheck == '権') {
        return true;
    }
    // No.1329
    // 説明:8ca1
    // 0x8ca1 (Windows-31J)
    // 0x727d (UTF-16BE)
    if (argCheck == '牽') {
        return true;
    }
    // No.1330
    // 説明:8ca2
    // 0x8ca2 (Windows-31J)
    // 0x72ac (UTF-16BE)
    if (argCheck == '犬') {
        return true;
    }
    // No.1331
    // 説明:8ca3
    // 0x8ca3 (Windows-31J)
    // 0x732e (UTF-16BE)
    if (argCheck == '献') {
        return true;
    }
    // No.1332
    // 説明:8ca4
    // 0x8ca4 (Windows-31J)
    // 0x7814 (UTF-16BE)
    if (argCheck == '研') {
        return true;
    }
    // No.1333
    // 説明:8ca5
    // 0x8ca5 (Windows-31J)
    // 0x786f (UTF-16BE)
    if (argCheck == '硯') {
        return true;
    }
    // No.1334
    // 説明:8ca6
    // 0x8ca6 (Windows-31J)
    // 0x7d79 (UTF-16BE)
    if (argCheck == '絹') {
        return true;
    }
    // No.1335
    // 説明:8ca7
    // 0x8ca7 (Windows-31J)
    // 0x770c (UTF-16BE)
    if (argCheck == '県') {
        return true;
    }
    // No.1336
    // 説明:8ca8
    // 0x8ca8 (Windows-31J)
    // 0x80a9 (UTF-16BE)
    if (argCheck == '肩') {
        return true;
    }
    // No.1337
    // 説明:8ca9
    // 0x8ca9 (Windows-31J)
    // 0x898b (UTF-16BE)
    if (argCheck == '見') {
        return true;
    }
    // No.1338
    // 説明:8caa
    // 0x8caa (Windows-31J)
    // 0x8b19 (UTF-16BE)
    if (argCheck == '謙') {
        return true;
    }
    // No.1339
    // 説明:8cab
    // 0x8cab (Windows-31J)
    // 0x8ce2 (UTF-16BE)
    if (argCheck == '賢') {
        return true;
    }
    // No.1340
    // 説明:8cac
    // 0x8cac (Windows-31J)
    // 0x8ed2 (UTF-16BE)
    if (argCheck == '軒') {
        return true;
    }
    // No.1341
    // 説明:8cad
    // 0x8cad (Windows-31J)
    // 0x9063 (UTF-16BE)
    if (argCheck == '遣') {
        return true;
    }
    // No.1342
    // 説明:8cae
    // 0x8cae (Windows-31J)
    // 0x9375 (UTF-16BE)
    if (argCheck == '鍵') {
        return true;
    }
    // No.1343
    // 説明:8caf
    // 0x8caf (Windows-31J)
    // 0x967a (UTF-16BE)
    if (argCheck == '険') {
        return true;
    }
    // No.1344
    // 説明:8cb0
    // 0x8cb0 (Windows-31J)
    // 0x9855 (UTF-16BE)
    if (argCheck == '顕') {
        return true;
    }
    // No.1345
    // 説明:8cb1
    // 0x8cb1 (Windows-31J)
    // 0x9a13 (UTF-16BE)
    if (argCheck == '験') {
        return true;
    }
    // No.1346
    // 説明:8cb2
    // 0x8cb2 (Windows-31J)
    // 0x9e78 (UTF-16BE)
    if (argCheck == '鹸') {
        return true;
    }
    // No.1347
    // 説明:8cb3
    // 0x8cb3 (Windows-31J)
    // 0x5143 (UTF-16BE)
    if (argCheck == '元') {
        return true;
    }
    // No.1348
    // 説明:8cb4
    // 0x8cb4 (Windows-31J)
    // 0x539f (UTF-16BE)
    if (argCheck == '原') {
        return true;
    }
    // No.1349
    // 説明:8cb5
    // 0x8cb5 (Windows-31J)
    // 0x53b3 (UTF-16BE)
    if (argCheck == '厳') {
        return true;
    }
    // No.1350
    // 説明:8cb6
    // 0x8cb6 (Windows-31J)
    // 0x5e7b (UTF-16BE)
    if (argCheck == '幻') {
        return true;
    }
    // No.1351
    // 説明:8cb7
    // 0x8cb7 (Windows-31J)
    // 0x5f26 (UTF-16BE)
    if (argCheck == '弦') {
        return true;
    }
    // No.1352
    // 説明:8cb8
    // 0x8cb8 (Windows-31J)
    // 0x6e1b (UTF-16BE)
    if (argCheck == '減') {
        return true;
    }
    // No.1353
    // 説明:8cb9
    // 0x8cb9 (Windows-31J)
    // 0x6e90 (UTF-16BE)
    if (argCheck == '源') {
        return true;
    }
    // No.1354
    // 説明:8cba
    // 0x8cba (Windows-31J)
    // 0x7384 (UTF-16BE)
    if (argCheck == '玄') {
        return true;
    }
    // No.1355
    // 説明:8cbb
    // 0x8cbb (Windows-31J)
    // 0x73fe (UTF-16BE)
    if (argCheck == '現') {
        return true;
    }
    // No.1356
    // 説明:8cbc
    // 0x8cbc (Windows-31J)
    // 0x7d43 (UTF-16BE)
    if (argCheck == '絃') {
        return true;
    }
    // No.1357
    // 説明:8cbd
    // 0x8cbd (Windows-31J)
    // 0x8237 (UTF-16BE)
    if (argCheck == '舷') {
        return true;
    }
    // No.1358
    // 説明:8cbe
    // 0x8cbe (Windows-31J)
    // 0x8a00 (UTF-16BE)
    if (argCheck == '言') {
        return true;
    }
    // No.1359
    // 説明:8cbf
    // 0x8cbf (Windows-31J)
    // 0x8afa (UTF-16BE)
    if (argCheck == '諺') {
        return true;
    }
    // No.1360
    // 説明:8cc0
    // 0x8cc0 (Windows-31J)
    // 0x9650 (UTF-16BE)
    if (argCheck == '限') {
        return true;
    }
    // No.1361
    // 説明:8cc1
    // 0x8cc1 (Windows-31J)
    // 0x4e4e (UTF-16BE)
    if (argCheck == '乎') {
        return true;
    }
    // No.1362
    // 説明:8cc2
    // 0x8cc2 (Windows-31J)
    // 0x500b (UTF-16BE)
    if (argCheck == '個') {
        return true;
    }
    // No.1363
    // 説明:8cc3
    // 0x8cc3 (Windows-31J)
    // 0x53e4 (UTF-16BE)
    if (argCheck == '古') {
        return true;
    }
    // No.1364
    // 説明:8cc4
    // 0x8cc4 (Windows-31J)
    // 0x547c (UTF-16BE)
    if (argCheck == '呼') {
        return true;
    }
    // No.1365
    // 説明:8cc5
    // 0x8cc5 (Windows-31J)
    // 0x56fa (UTF-16BE)
    if (argCheck == '固') {
        return true;
    }
    // No.1366
    // 説明:8cc6
    // 0x8cc6 (Windows-31J)
    // 0x59d1 (UTF-16BE)
    if (argCheck == '姑') {
        return true;
    }
    // No.1367
    // 説明:8cc7
    // 0x8cc7 (Windows-31J)
    // 0x5b64 (UTF-16BE)
    if (argCheck == '孤') {
        return true;
    }
    // No.1368
    // 説明:8cc8
    // 0x8cc8 (Windows-31J)
    // 0x5df1 (UTF-16BE)
    if (argCheck == '己') {
        return true;
    }
    // No.1369
    // 説明:8cc9
    // 0x8cc9 (Windows-31J)
    // 0x5eab (UTF-16BE)
    if (argCheck == '庫') {
        return true;
    }
    // No.1370
    // 説明:8cca
    // 0x8cca (Windows-31J)
    // 0x5f27 (UTF-16BE)
    if (argCheck == '弧') {
        return true;
    }
    // No.1371
    // 説明:8ccb
    // 0x8ccb (Windows-31J)
    // 0x6238 (UTF-16BE)
    if (argCheck == '戸') {
        return true;
    }
    // No.1372
    // 説明:8ccc
    // 0x8ccc (Windows-31J)
    // 0x6545 (UTF-16BE)
    if (argCheck == '故') {
        return true;
    }
    // No.1373
    // 説明:8ccd
    // 0x8ccd (Windows-31J)
    // 0x67af (UTF-16BE)
    if (argCheck == '枯') {
        return true;
    }
    // No.1374
    // 説明:8cce
    // 0x8cce (Windows-31J)
    // 0x6e56 (UTF-16BE)
    if (argCheck == '湖') {
        return true;
    }
    // No.1375
    // 説明:8ccf
    // 0x8ccf (Windows-31J)
    // 0x72d0 (UTF-16BE)
    if (argCheck == '狐') {
        return true;
    }
    // No.1376
    // 説明:8cd0
    // 0x8cd0 (Windows-31J)
    // 0x7cca (UTF-16BE)
    if (argCheck == '糊') {
        return true;
    }
    // No.1377
    // 説明:8cd1
    // 0x8cd1 (Windows-31J)
    // 0x88b4 (UTF-16BE)
    if (argCheck == '袴') {
        return true;
    }
    // No.1378
    // 説明:8cd2
    // 0x8cd2 (Windows-31J)
    // 0x80a1 (UTF-16BE)
    if (argCheck == '股') {
        return true;
    }
    // No.1379
    // 説明:8cd3
    // 0x8cd3 (Windows-31J)
    // 0x80e1 (UTF-16BE)
    if (argCheck == '胡') {
        return true;
    }
    // No.1380
    // 説明:8cd4
    // 0x8cd4 (Windows-31J)
    // 0x83f0 (UTF-16BE)
    if (argCheck == '菰') {
        return true;
    }
    // No.1381
    // 説明:8cd5
    // 0x8cd5 (Windows-31J)
    // 0x864e (UTF-16BE)
    if (argCheck == '虎') {
        return true;
    }
    // No.1382
    // 説明:8cd6
    // 0x8cd6 (Windows-31J)
    // 0x8a87 (UTF-16BE)
    if (argCheck == '誇') {
        return true;
    }
    // No.1383
    // 説明:8cd7
    // 0x8cd7 (Windows-31J)
    // 0x8de8 (UTF-16BE)
    if (argCheck == '跨') {
        return true;
    }
    // No.1384
    // 説明:8cd8
    // 0x8cd8 (Windows-31J)
    // 0x9237 (UTF-16BE)
    if (argCheck == '鈷') {
        return true;
    }
    // No.1385
    // 説明:8cd9
    // 0x8cd9 (Windows-31J)
    // 0x96c7 (UTF-16BE)
    if (argCheck == '雇') {
        return true;
    }
    // No.1386
    // 説明:8cda
    // 0x8cda (Windows-31J)
    // 0x9867 (UTF-16BE)
    if (argCheck == '顧') {
        return true;
    }
    // No.1387
    // 説明:8cdb
    // 0x8cdb (Windows-31J)
    // 0x9f13 (UTF-16BE)
    if (argCheck == '鼓') {
        return true;
    }
    // No.1388
    // 説明:8cdc
    // 0x8cdc (Windows-31J)
    // 0x4e94 (UTF-16BE)
    if (argCheck == '五') {
        return true;
    }
    // No.1389
    // 説明:8cdd
    // 0x8cdd (Windows-31J)
    // 0x4e92 (UTF-16BE)
    if (argCheck == '互') {
        return true;
    }
    // No.1390
    // 説明:8cde
    // 0x8cde (Windows-31J)
    // 0x4f0d (UTF-16BE)
    if (argCheck == '伍') {
        return true;
    }
    // No.1391
    // 説明:8cdf
    // 0x8cdf (Windows-31J)
    // 0x5348 (UTF-16BE)
    if (argCheck == '午') {
        return true;
    }
    // No.1392
    // 説明:8ce0
    // 0x8ce0 (Windows-31J)
    // 0x5449 (UTF-16BE)
    if (argCheck == '呉') {
        return true;
    }
    // No.1393
    // 説明:8ce1
    // 0x8ce1 (Windows-31J)
    // 0x543e (UTF-16BE)
    if (argCheck == '吾') {
        return true;
    }
    // No.1394
    // 説明:8ce2
    // 0x8ce2 (Windows-31J)
    // 0x5a2f (UTF-16BE)
    if (argCheck == '娯') {
        return true;
    }
    // No.1395
    // 説明:8ce3
    // 0x8ce3 (Windows-31J)
    // 0x5f8c (UTF-16BE)
    if (argCheck == '後') {
        return true;
    }
    // No.1396
    // 説明:8ce4
    // 0x8ce4 (Windows-31J)
    // 0x5fa1 (UTF-16BE)
    if (argCheck == '御') {
        return true;
    }
    // No.1397
    // 説明:8ce5
    // 0x8ce5 (Windows-31J)
    // 0x609f (UTF-16BE)
    if (argCheck == '悟') {
        return true;
    }
    // No.1398
    // 説明:8ce6
    // 0x8ce6 (Windows-31J)
    // 0x68a7 (UTF-16BE)
    if (argCheck == '梧') {
        return true;
    }
    // No.1399
    // 説明:8ce7
    // 0x8ce7 (Windows-31J)
    // 0x6a8e (UTF-16BE)
    if (argCheck == '檎') {
        return true;
    }
    // No.1400
    // 説明:8ce8
    // 0x8ce8 (Windows-31J)
    // 0x745a (UTF-16BE)
    if (argCheck == '瑚') {
        return true;
    }
    // No.1401
    // 説明:8ce9
    // 0x8ce9 (Windows-31J)
    // 0x7881 (UTF-16BE)
    if (argCheck == '碁') {
        return true;
    }
    // No.1402
    // 説明:8cea
    // 0x8cea (Windows-31J)
    // 0x8a9e (UTF-16BE)
    if (argCheck == '語') {
        return true;
    }
    // No.1403
    // 説明:8ceb
    // 0x8ceb (Windows-31J)
    // 0x8aa4 (UTF-16BE)
    if (argCheck == '誤') {
        return true;
    }
    // No.1404
    // 説明:8cec
    // 0x8cec (Windows-31J)
    // 0x8b77 (UTF-16BE)
    if (argCheck == '護') {
        return true;
    }
    // No.1405
    // 説明:8ced
    // 0x8ced (Windows-31J)
    // 0x9190 (UTF-16BE)
    if (argCheck == '醐') {
        return true;
    }
    // No.1406
    // 説明:8cee
    // 0x8cee (Windows-31J)
    // 0x4e5e (UTF-16BE)
    if (argCheck == '乞') {
        return true;
    }
    // No.1407
    // 説明:8cef
    // 0x8cef (Windows-31J)
    // 0x9bc9 (UTF-16BE)
    if (argCheck == '鯉') {
        return true;
    }
    // No.1408
    // 説明:8cf0
    // 0x8cf0 (Windows-31J)
    // 0x4ea4 (UTF-16BE)
    if (argCheck == '交') {
        return true;
    }
    // No.1409
    // 説明:8cf1
    // 0x8cf1 (Windows-31J)
    // 0x4f7c (UTF-16BE)
    if (argCheck == '佼') {
        return true;
    }
    // No.1410
    // 説明:8cf2
    // 0x8cf2 (Windows-31J)
    // 0x4faf (UTF-16BE)
    if (argCheck == '侯') {
        return true;
    }
    // No.1411
    // 説明:8cf3
    // 0x8cf3 (Windows-31J)
    // 0x5019 (UTF-16BE)
    if (argCheck == '候') {
        return true;
    }
    // No.1412
    // 説明:8cf4
    // 0x8cf4 (Windows-31J)
    // 0x5016 (UTF-16BE)
    if (argCheck == '倖') {
        return true;
    }
    // No.1413
    // 説明:8cf5
    // 0x8cf5 (Windows-31J)
    // 0x5149 (UTF-16BE)
    if (argCheck == '光') {
        return true;
    }
    // No.1414
    // 説明:8cf6
    // 0x8cf6 (Windows-31J)
    // 0x516c (UTF-16BE)
    if (argCheck == '公') {
        return true;
    }
    // No.1415
    // 説明:8cf7
    // 0x8cf7 (Windows-31J)
    // 0x529f (UTF-16BE)
    if (argCheck == '功') {
        return true;
    }
    // No.1416
    // 説明:8cf8
    // 0x8cf8 (Windows-31J)
    // 0x52b9 (UTF-16BE)
    if (argCheck == '効') {
        return true;
    }
    // No.1417
    // 説明:8cf9
    // 0x8cf9 (Windows-31J)
    // 0x52fe (UTF-16BE)
    if (argCheck == '勾') {
        return true;
    }
    // No.1418
    // 説明:8cfa
    // 0x8cfa (Windows-31J)
    // 0x539a (UTF-16BE)
    if (argCheck == '厚') {
        return true;
    }
    // No.1419
    // 説明:8cfb
    // 0x8cfb (Windows-31J)
    // 0x53e3 (UTF-16BE)
    if (argCheck == '口') {
        return true;
    }
    // No.1420
    // 説明:8cfc
    // 0x8cfc (Windows-31J)
    // 0x5411 (UTF-16BE)
    if (argCheck == '向') {
        return true;
    }
    // No.1421
    // 説明:8d40
    // 0x8d40 (Windows-31J)
    // 0x540e (UTF-16BE)
    if (argCheck == '后') {
        return true;
    }
    // No.1422
    // 説明:8d41
    // 0x8d41 (Windows-31J)
    // 0x5589 (UTF-16BE)
    if (argCheck == '喉') {
        return true;
    }
    // No.1423
    // 説明:8d42
    // 0x8d42 (Windows-31J)
    // 0x5751 (UTF-16BE)
    if (argCheck == '坑') {
        return true;
    }
    // No.1424
    // 説明:8d43
    // 0x8d43 (Windows-31J)
    // 0x57a2 (UTF-16BE)
    if (argCheck == '垢') {
        return true;
    }
    // No.1425
    // 説明:8d44
    // 0x8d44 (Windows-31J)
    // 0x597d (UTF-16BE)
    if (argCheck == '好') {
        return true;
    }
    // No.1426
    // 説明:8d45
    // 0x8d45 (Windows-31J)
    // 0x5b54 (UTF-16BE)
    if (argCheck == '孔') {
        return true;
    }
    // No.1427
    // 説明:8d46
    // 0x8d46 (Windows-31J)
    // 0x5b5d (UTF-16BE)
    if (argCheck == '孝') {
        return true;
    }
    // No.1428
    // 説明:8d47
    // 0x8d47 (Windows-31J)
    // 0x5b8f (UTF-16BE)
    if (argCheck == '宏') {
        return true;
    }
    // No.1429
    // 説明:8d48
    // 0x8d48 (Windows-31J)
    // 0x5de5 (UTF-16BE)
    if (argCheck == '工') {
        return true;
    }
    // No.1430
    // 説明:8d49
    // 0x8d49 (Windows-31J)
    // 0x5de7 (UTF-16BE)
    if (argCheck == '巧') {
        return true;
    }
    // No.1431
    // 説明:8d4a
    // 0x8d4a (Windows-31J)
    // 0x5df7 (UTF-16BE)
    if (argCheck == '巷') {
        return true;
    }
    // No.1432
    // 説明:8d4b
    // 0x8d4b (Windows-31J)
    // 0x5e78 (UTF-16BE)
    if (argCheck == '幸') {
        return true;
    }
    // No.1433
    // 説明:8d4c
    // 0x8d4c (Windows-31J)
    // 0x5e83 (UTF-16BE)
    if (argCheck == '広') {
        return true;
    }
    // No.1434
    // 説明:8d4d
    // 0x8d4d (Windows-31J)
    // 0x5e9a (UTF-16BE)
    if (argCheck == '庚') {
        return true;
    }
    // No.1435
    // 説明:8d4e
    // 0x8d4e (Windows-31J)
    // 0x5eb7 (UTF-16BE)
    if (argCheck == '康') {
        return true;
    }
    // No.1436
    // 説明:8d4f
    // 0x8d4f (Windows-31J)
    // 0x5f18 (UTF-16BE)
    if (argCheck == '弘') {
        return true;
    }
    // No.1437
    // 説明:8d50
    // 0x8d50 (Windows-31J)
    // 0x6052 (UTF-16BE)
    if (argCheck == '恒') {
        return true;
    }
    // No.1438
    // 説明:8d51
    // 0x8d51 (Windows-31J)
    // 0x614c (UTF-16BE)
    if (argCheck == '慌') {
        return true;
    }
    // No.1439
    // 説明:8d52
    // 0x8d52 (Windows-31J)
    // 0x6297 (UTF-16BE)
    if (argCheck == '抗') {
        return true;
    }
    // No.1440
    // 説明:8d53
    // 0x8d53 (Windows-31J)
    // 0x62d8 (UTF-16BE)
    if (argCheck == '拘') {
        return true;
    }
    // No.1441
    // 説明:8d54
    // 0x8d54 (Windows-31J)
    // 0x63a7 (UTF-16BE)
    if (argCheck == '控') {
        return true;
    }
    // No.1442
    // 説明:8d55
    // 0x8d55 (Windows-31J)
    // 0x653b (UTF-16BE)
    if (argCheck == '攻') {
        return true;
    }
    // No.1443
    // 説明:8d56
    // 0x8d56 (Windows-31J)
    // 0x6602 (UTF-16BE)
    if (argCheck == '昂') {
        return true;
    }
    // No.1444
    // 説明:8d57
    // 0x8d57 (Windows-31J)
    // 0x6643 (UTF-16BE)
    if (argCheck == '晃') {
        return true;
    }
    // No.1445
    // 説明:8d58
    // 0x8d58 (Windows-31J)
    // 0x66f4 (UTF-16BE)
    if (argCheck == '更') {
        return true;
    }
    // No.1446
    // 説明:8d59
    // 0x8d59 (Windows-31J)
    // 0x676d (UTF-16BE)
    if (argCheck == '杭') {
        return true;
    }
    // No.1447
    // 説明:8d5a
    // 0x8d5a (Windows-31J)
    // 0x6821 (UTF-16BE)
    if (argCheck == '校') {
        return true;
    }
    // No.1448
    // 説明:8d5b
    // 0x8d5b (Windows-31J)
    // 0x6897 (UTF-16BE)
    if (argCheck == '梗') {
        return true;
    }
    // No.1449
    // 説明:8d5c
    // 0x8d5c (Windows-31J)
    // 0x69cb (UTF-16BE)
    if (argCheck == '構') {
        return true;
    }
    // No.1450
    // 説明:8d5d
    // 0x8d5d (Windows-31J)
    // 0x6c5f (UTF-16BE)
    if (argCheck == '江') {
        return true;
    }
    // No.1451
    // 説明:8d5e
    // 0x8d5e (Windows-31J)
    // 0x6d2a (UTF-16BE)
    if (argCheck == '洪') {
        return true;
    }
    // No.1452
    // 説明:8d5f
    // 0x8d5f (Windows-31J)
    // 0x6d69 (UTF-16BE)
    if (argCheck == '浩') {
        return true;
    }
    // No.1453
    // 説明:8d60
    // 0x8d60 (Windows-31J)
    // 0x6e2f (UTF-16BE)
    if (argCheck == '港') {
        return true;
    }
    // No.1454
    // 説明:8d61
    // 0x8d61 (Windows-31J)
    // 0x6e9d (UTF-16BE)
    if (argCheck == '溝') {
        return true;
    }
    // No.1455
    // 説明:8d62
    // 0x8d62 (Windows-31J)
    // 0x7532 (UTF-16BE)
    if (argCheck == '甲') {
        return true;
    }
    // No.1456
    // 説明:8d63
    // 0x8d63 (Windows-31J)
    // 0x7687 (UTF-16BE)
    if (argCheck == '皇') {
        return true;
    }
    // No.1457
    // 説明:8d64
    // 0x8d64 (Windows-31J)
    // 0x786c (UTF-16BE)
    if (argCheck == '硬') {
        return true;
    }
    // No.1458
    // 説明:8d65
    // 0x8d65 (Windows-31J)
    // 0x7a3f (UTF-16BE)
    if (argCheck == '稿') {
        return true;
    }
    // No.1459
    // 説明:8d66
    // 0x8d66 (Windows-31J)
    // 0x7ce0 (UTF-16BE)
    if (argCheck == '糠') {
        return true;
    }
    // No.1460
    // 説明:8d67
    // 0x8d67 (Windows-31J)
    // 0x7d05 (UTF-16BE)
    if (argCheck == '紅') {
        return true;
    }
    // No.1461
    // 説明:8d68
    // 0x8d68 (Windows-31J)
    // 0x7d18 (UTF-16BE)
    if (argCheck == '紘') {
        return true;
    }
    // No.1462
    // 説明:8d69
    // 0x8d69 (Windows-31J)
    // 0x7d5e (UTF-16BE)
    if (argCheck == '絞') {
        return true;
    }
    // No.1463
    // 説明:8d6a
    // 0x8d6a (Windows-31J)
    // 0x7db1 (UTF-16BE)
    if (argCheck == '綱') {
        return true;
    }
    // No.1464
    // 説明:8d6b
    // 0x8d6b (Windows-31J)
    // 0x8015 (UTF-16BE)
    if (argCheck == '耕') {
        return true;
    }
    // No.1465
    // 説明:8d6c
    // 0x8d6c (Windows-31J)
    // 0x8003 (UTF-16BE)
    if (argCheck == '考') {
        return true;
    }
    // No.1466
    // 説明:8d6d
    // 0x8d6d (Windows-31J)
    // 0x80af (UTF-16BE)
    if (argCheck == '肯') {
        return true;
    }
    // No.1467
    // 説明:8d6e
    // 0x8d6e (Windows-31J)
    // 0x80b1 (UTF-16BE)
    if (argCheck == '肱') {
        return true;
    }
    // No.1468
    // 説明:8d6f
    // 0x8d6f (Windows-31J)
    // 0x8154 (UTF-16BE)
    if (argCheck == '腔') {
        return true;
    }
    // No.1469
    // 説明:8d70
    // 0x8d70 (Windows-31J)
    // 0x818f (UTF-16BE)
    if (argCheck == '膏') {
        return true;
    }
    // No.1470
    // 説明:8d71
    // 0x8d71 (Windows-31J)
    // 0x822a (UTF-16BE)
    if (argCheck == '航') {
        return true;
    }
    // No.1471
    // 説明:8d72
    // 0x8d72 (Windows-31J)
    // 0x8352 (UTF-16BE)
    if (argCheck == '荒') {
        return true;
    }
    // No.1472
    // 説明:8d73
    // 0x8d73 (Windows-31J)
    // 0x884c (UTF-16BE)
    if (argCheck == '行') {
        return true;
    }
    // No.1473
    // 説明:8d74
    // 0x8d74 (Windows-31J)
    // 0x8861 (UTF-16BE)
    if (argCheck == '衡') {
        return true;
    }
    // No.1474
    // 説明:8d75
    // 0x8d75 (Windows-31J)
    // 0x8b1b (UTF-16BE)
    if (argCheck == '講') {
        return true;
    }
    // No.1475
    // 説明:8d76
    // 0x8d76 (Windows-31J)
    // 0x8ca2 (UTF-16BE)
    if (argCheck == '貢') {
        return true;
    }
    // No.1476
    // 説明:8d77
    // 0x8d77 (Windows-31J)
    // 0x8cfc (UTF-16BE)
    if (argCheck == '購') {
        return true;
    }
    // No.1477
    // 説明:8d78
    // 0x8d78 (Windows-31J)
    // 0x90ca (UTF-16BE)
    if (argCheck == '郊') {
        return true;
    }
    // No.1478
    // 説明:8d79
    // 0x8d79 (Windows-31J)
    // 0x9175 (UTF-16BE)
    if (argCheck == '酵') {
        return true;
    }
    // No.1479
    // 説明:8d7a
    // 0x8d7a (Windows-31J)
    // 0x9271 (UTF-16BE)
    if (argCheck == '鉱') {
        return true;
    }
    // No.1480
    // 説明:8d7b
    // 0x8d7b (Windows-31J)
    // 0x783f (UTF-16BE)
    if (argCheck == '砿') {
        return true;
    }
    // No.1481
    // 説明:8d7c
    // 0x8d7c (Windows-31J)
    // 0x92fc (UTF-16BE)
    if (argCheck == '鋼') {
        return true;
    }
    // No.1482
    // 説明:8d7d
    // 0x8d7d (Windows-31J)
    // 0x95a4 (UTF-16BE)
    if (argCheck == '閤') {
        return true;
    }
    // No.1483
    // 説明:8d7e
    // 0x8d7e (Windows-31J)
    // 0x964d (UTF-16BE)
    if (argCheck == '降') {
        return true;
    }
    // No.1484
    // 説明:8d80
    // 0x8d80 (Windows-31J)
    // 0x9805 (UTF-16BE)
    if (argCheck == '項') {
        return true;
    }
    // No.1485
    // 説明:8d81
    // 0x8d81 (Windows-31J)
    // 0x9999 (UTF-16BE)
    if (argCheck == '香') {
        return true;
    }
    // No.1486
    // 説明:8d82
    // 0x8d82 (Windows-31J)
    // 0x9ad8 (UTF-16BE)
    if (argCheck == '高') {
        return true;
    }
    // No.1487
    // 説明:8d83
    // 0x8d83 (Windows-31J)
    // 0x9d3b (UTF-16BE)
    if (argCheck == '鴻') {
        return true;
    }
    // No.1488
    // 説明:8d84
    // 0x8d84 (Windows-31J)
    // 0x525b (UTF-16BE)
    if (argCheck == '剛') {
        return true;
    }
    // No.1489
    // 説明:8d85
    // 0x8d85 (Windows-31J)
    // 0x52ab (UTF-16BE)
    if (argCheck == '劫') {
        return true;
    }
    // No.1490
    // 説明:8d86
    // 0x8d86 (Windows-31J)
    // 0x53f7 (UTF-16BE)
    if (argCheck == '号') {
        return true;
    }
    // No.1491
    // 説明:8d87
    // 0x8d87 (Windows-31J)
    // 0x5408 (UTF-16BE)
    if (argCheck == '合') {
        return true;
    }
    // No.1492
    // 説明:8d88
    // 0x8d88 (Windows-31J)
    // 0x58d5 (UTF-16BE)
    if (argCheck == '壕') {
        return true;
    }
    // No.1493
    // 説明:8d89
    // 0x8d89 (Windows-31J)
    // 0x62f7 (UTF-16BE)
    if (argCheck == '拷') {
        return true;
    }
    // No.1494
    // 説明:8d8a
    // 0x8d8a (Windows-31J)
    // 0x6fe0 (UTF-16BE)
    if (argCheck == '濠') {
        return true;
    }
    // No.1495
    // 説明:8d8b
    // 0x8d8b (Windows-31J)
    // 0x8c6a (UTF-16BE)
    if (argCheck == '豪') {
        return true;
    }
    // No.1496
    // 説明:8d8c
    // 0x8d8c (Windows-31J)
    // 0x8f5f (UTF-16BE)
    if (argCheck == '轟') {
        return true;
    }
    // No.1497
    // 説明:8d8d
    // 0x8d8d (Windows-31J)
    // 0x9eb9 (UTF-16BE)
    if (argCheck == '麹') {
        return true;
    }
    // No.1498
    // 説明:8d8e
    // 0x8d8e (Windows-31J)
    // 0x514b (UTF-16BE)
    if (argCheck == '克') {
        return true;
    }
    // No.1499
    // 説明:8d8f
    // 0x8d8f (Windows-31J)
    // 0x523b (UTF-16BE)
    if (argCheck == '刻') {
        return true;
    }
    // No.1500
    // 説明:8d90
    // 0x8d90 (Windows-31J)
    // 0x544a (UTF-16BE)
    if (argCheck == '告') {
        return true;
    }
    // No.1501
    // 説明:8d91
    // 0x8d91 (Windows-31J)
    // 0x56fd (UTF-16BE)
    if (argCheck == '国') {
        return true;
    }
    // No.1502
    // 説明:8d92
    // 0x8d92 (Windows-31J)
    // 0x7a40 (UTF-16BE)
    if (argCheck == '穀') {
        return true;
    }
    // No.1503
    // 説明:8d93
    // 0x8d93 (Windows-31J)
    // 0x9177 (UTF-16BE)
    if (argCheck == '酷') {
        return true;
    }
    // No.1504
    // 説明:8d94
    // 0x8d94 (Windows-31J)
    // 0x9d60 (UTF-16BE)
    if (argCheck == '鵠') {
        return true;
    }
    // No.1505
    // 説明:8d95
    // 0x8d95 (Windows-31J)
    // 0x9ed2 (UTF-16BE)
    if (argCheck == '黒') {
        return true;
    }
    // No.1506
    // 説明:8d96
    // 0x8d96 (Windows-31J)
    // 0x7344 (UTF-16BE)
    if (argCheck == '獄') {
        return true;
    }
    // No.1507
    // 説明:8d97
    // 0x8d97 (Windows-31J)
    // 0x6f09 (UTF-16BE)
    if (argCheck == '漉') {
        return true;
    }
    // No.1508
    // 説明:8d98
    // 0x8d98 (Windows-31J)
    // 0x8170 (UTF-16BE)
    if (argCheck == '腰') {
        return true;
    }
    // No.1509
    // 説明:8d99
    // 0x8d99 (Windows-31J)
    // 0x7511 (UTF-16BE)
    if (argCheck == '甑') {
        return true;
    }
    // No.1510
    // 説明:8d9a
    // 0x8d9a (Windows-31J)
    // 0x5ffd (UTF-16BE)
    if (argCheck == '忽') {
        return true;
    }
    // No.1511
    // 説明:8d9b
    // 0x8d9b (Windows-31J)
    // 0x60da (UTF-16BE)
    if (argCheck == '惚') {
        return true;
    }
    // No.1512
    // 説明:8d9c
    // 0x8d9c (Windows-31J)
    // 0x9aa8 (UTF-16BE)
    if (argCheck == '骨') {
        return true;
    }
    // No.1513
    // 説明:8d9d
    // 0x8d9d (Windows-31J)
    // 0x72db (UTF-16BE)
    if (argCheck == '狛') {
        return true;
    }
    // No.1514
    // 説明:8d9e
    // 0x8d9e (Windows-31J)
    // 0x8fbc (UTF-16BE)
    if (argCheck == '込') {
        return true;
    }
    // No.1515
    // 説明:8d9f
    // 0x8d9f (Windows-31J)
    // 0x6b64 (UTF-16BE)
    if (argCheck == '此') {
        return true;
    }
    // No.1516
    // 説明:8da0
    // 0x8da0 (Windows-31J)
    // 0x9803 (UTF-16BE)
    if (argCheck == '頃') {
        return true;
    }
    // No.1517
    // 説明:8da1
    // 0x8da1 (Windows-31J)
    // 0x4eca (UTF-16BE)
    if (argCheck == '今') {
        return true;
    }
    // No.1518
    // 説明:8da2
    // 0x8da2 (Windows-31J)
    // 0x56f0 (UTF-16BE)
    if (argCheck == '困') {
        return true;
    }
    // No.1519
    // 説明:8da3
    // 0x8da3 (Windows-31J)
    // 0x5764 (UTF-16BE)
    if (argCheck == '坤') {
        return true;
    }
    // No.1520
    // 説明:8da4
    // 0x8da4 (Windows-31J)
    // 0x58be (UTF-16BE)
    if (argCheck == '墾') {
        return true;
    }
    // No.1521
    // 説明:8da5
    // 0x8da5 (Windows-31J)
    // 0x5a5a (UTF-16BE)
    if (argCheck == '婚') {
        return true;
    }
    // No.1522
    // 説明:8da6
    // 0x8da6 (Windows-31J)
    // 0x6068 (UTF-16BE)
    if (argCheck == '恨') {
        return true;
    }
    // No.1523
    // 説明:8da7
    // 0x8da7 (Windows-31J)
    // 0x61c7 (UTF-16BE)
    if (argCheck == '懇') {
        return true;
    }
    // No.1524
    // 説明:8da8
    // 0x8da8 (Windows-31J)
    // 0x660f (UTF-16BE)
    if (argCheck == '昏') {
        return true;
    }
    // No.1525
    // 説明:8da9
    // 0x8da9 (Windows-31J)
    // 0x6606 (UTF-16BE)
    if (argCheck == '昆') {
        return true;
    }
    // No.1526
    // 説明:8daa
    // 0x8daa (Windows-31J)
    // 0x6839 (UTF-16BE)
    if (argCheck == '根') {
        return true;
    }
    // No.1527
    // 説明:8dab
    // 0x8dab (Windows-31J)
    // 0x68b1 (UTF-16BE)
    if (argCheck == '梱') {
        return true;
    }
    // No.1528
    // 説明:8dac
    // 0x8dac (Windows-31J)
    // 0x6df7 (UTF-16BE)
    if (argCheck == '混') {
        return true;
    }
    // No.1529
    // 説明:8dad
    // 0x8dad (Windows-31J)
    // 0x75d5 (UTF-16BE)
    if (argCheck == '痕') {
        return true;
    }
    // No.1530
    // 説明:8dae
    // 0x8dae (Windows-31J)
    // 0x7d3a (UTF-16BE)
    if (argCheck == '紺') {
        return true;
    }
    // No.1531
    // 説明:8daf
    // 0x8daf (Windows-31J)
    // 0x826e (UTF-16BE)
    if (argCheck == '艮') {
        return true;
    }
    // No.1532
    // 説明:8db0
    // 0x8db0 (Windows-31J)
    // 0x9b42 (UTF-16BE)
    if (argCheck == '魂') {
        return true;
    }
    // No.1533
    // 説明:8db1
    // 0x8db1 (Windows-31J)
    // 0x4e9b (UTF-16BE)
    if (argCheck == '些') {
        return true;
    }
    // No.1534
    // 説明:8db2
    // 0x8db2 (Windows-31J)
    // 0x4f50 (UTF-16BE)
    if (argCheck == '佐') {
        return true;
    }
    // No.1535
    // 説明:8db3
    // 0x8db3 (Windows-31J)
    // 0x53c9 (UTF-16BE)
    if (argCheck == '叉') {
        return true;
    }
    // No.1536
    // 説明:8db4
    // 0x8db4 (Windows-31J)
    // 0x5506 (UTF-16BE)
    if (argCheck == '唆') {
        return true;
    }
    // No.1537
    // 説明:8db5
    // 0x8db5 (Windows-31J)
    // 0x5d6f (UTF-16BE)
    if (argCheck == '嵯') {
        return true;
    }
    // No.1538
    // 説明:8db6
    // 0x8db6 (Windows-31J)
    // 0x5de6 (UTF-16BE)
    if (argCheck == '左') {
        return true;
    }
    // No.1539
    // 説明:8db7
    // 0x8db7 (Windows-31J)
    // 0x5dee (UTF-16BE)
    if (argCheck == '差') {
        return true;
    }
    // No.1540
    // 説明:8db8
    // 0x8db8 (Windows-31J)
    // 0x67fb (UTF-16BE)
    if (argCheck == '査') {
        return true;
    }
    // No.1541
    // 説明:8db9
    // 0x8db9 (Windows-31J)
    // 0x6c99 (UTF-16BE)
    if (argCheck == '沙') {
        return true;
    }
    // No.1542
    // 説明:8dba
    // 0x8dba (Windows-31J)
    // 0x7473 (UTF-16BE)
    if (argCheck == '瑳') {
        return true;
    }
    // No.1543
    // 説明:8dbb
    // 0x8dbb (Windows-31J)
    // 0x7802 (UTF-16BE)
    if (argCheck == '砂') {
        return true;
    }
    // No.1544
    // 説明:8dbc
    // 0x8dbc (Windows-31J)
    // 0x8a50 (UTF-16BE)
    if (argCheck == '詐') {
        return true;
    }
    // No.1545
    // 説明:8dbd
    // 0x8dbd (Windows-31J)
    // 0x9396 (UTF-16BE)
    if (argCheck == '鎖') {
        return true;
    }
    // No.1546
    // 説明:8dbe
    // 0x8dbe (Windows-31J)
    // 0x88df (UTF-16BE)
    if (argCheck == '裟') {
        return true;
    }
    // No.1547
    // 説明:8dbf
    // 0x8dbf (Windows-31J)
    // 0x5750 (UTF-16BE)
    if (argCheck == '坐') {
        return true;
    }
    // No.1548
    // 説明:8dc0
    // 0x8dc0 (Windows-31J)
    // 0x5ea7 (UTF-16BE)
    if (argCheck == '座') {
        return true;
    }
    // No.1549
    // 説明:8dc1
    // 0x8dc1 (Windows-31J)
    // 0x632b (UTF-16BE)
    if (argCheck == '挫') {
        return true;
    }
    // No.1550
    // 説明:8dc2
    // 0x8dc2 (Windows-31J)
    // 0x50b5 (UTF-16BE)
    if (argCheck == '債') {
        return true;
    }
    // No.1551
    // 説明:8dc3
    // 0x8dc3 (Windows-31J)
    // 0x50ac (UTF-16BE)
    if (argCheck == '催') {
        return true;
    }
    // No.1552
    // 説明:8dc4
    // 0x8dc4 (Windows-31J)
    // 0x518d (UTF-16BE)
    if (argCheck == '再') {
        return true;
    }
    // No.1553
    // 説明:8dc5
    // 0x8dc5 (Windows-31J)
    // 0x6700 (UTF-16BE)
    if (argCheck == '最') {
        return true;
    }
    // No.1554
    // 説明:8dc6
    // 0x8dc6 (Windows-31J)
    // 0x54c9 (UTF-16BE)
    if (argCheck == '哉') {
        return true;
    }
    // No.1555
    // 説明:8dc7
    // 0x8dc7 (Windows-31J)
    // 0x585e (UTF-16BE)
    if (argCheck == '塞') {
        return true;
    }
    // No.1556
    // 説明:8dc8
    // 0x8dc8 (Windows-31J)
    // 0x59bb (UTF-16BE)
    if (argCheck == '妻') {
        return true;
    }
    // No.1557
    // 説明:8dc9
    // 0x8dc9 (Windows-31J)
    // 0x5bb0 (UTF-16BE)
    if (argCheck == '宰') {
        return true;
    }
    // No.1558
    // 説明:8dca
    // 0x8dca (Windows-31J)
    // 0x5f69 (UTF-16BE)
    if (argCheck == '彩') {
        return true;
    }
    // No.1559
    // 説明:8dcb
    // 0x8dcb (Windows-31J)
    // 0x624d (UTF-16BE)
    if (argCheck == '才') {
        return true;
    }
    // No.1560
    // 説明:8dcc
    // 0x8dcc (Windows-31J)
    // 0x63a1 (UTF-16BE)
    if (argCheck == '採') {
        return true;
    }
    // No.1561
    // 説明:8dcd
    // 0x8dcd (Windows-31J)
    // 0x683d (UTF-16BE)
    if (argCheck == '栽') {
        return true;
    }
    // No.1562
    // 説明:8dce
    // 0x8dce (Windows-31J)
    // 0x6b73 (UTF-16BE)
    if (argCheck == '歳') {
        return true;
    }
    // No.1563
    // 説明:8dcf
    // 0x8dcf (Windows-31J)
    // 0x6e08 (UTF-16BE)
    if (argCheck == '済') {
        return true;
    }
    // No.1564
    // 説明:8dd0
    // 0x8dd0 (Windows-31J)
    // 0x707d (UTF-16BE)
    if (argCheck == '災') {
        return true;
    }
    // No.1565
    // 説明:8dd1
    // 0x8dd1 (Windows-31J)
    // 0x91c7 (UTF-16BE)
    if (argCheck == '采') {
        return true;
    }
    // No.1566
    // 説明:8dd2
    // 0x8dd2 (Windows-31J)
    // 0x7280 (UTF-16BE)
    if (argCheck == '犀') {
        return true;
    }
    // No.1567
    // 説明:8dd3
    // 0x8dd3 (Windows-31J)
    // 0x7815 (UTF-16BE)
    if (argCheck == '砕') {
        return true;
    }
    // No.1568
    // 説明:8dd4
    // 0x8dd4 (Windows-31J)
    // 0x7826 (UTF-16BE)
    if (argCheck == '砦') {
        return true;
    }
    // No.1569
    // 説明:8dd5
    // 0x8dd5 (Windows-31J)
    // 0x796d (UTF-16BE)
    if (argCheck == '祭') {
        return true;
    }
    // No.1570
    // 説明:8dd6
    // 0x8dd6 (Windows-31J)
    // 0x658e (UTF-16BE)
    if (argCheck == '斎') {
        return true;
    }
    // No.1571
    // 説明:8dd7
    // 0x8dd7 (Windows-31J)
    // 0x7d30 (UTF-16BE)
    if (argCheck == '細') {
        return true;
    }
    // No.1572
    // 説明:8dd8
    // 0x8dd8 (Windows-31J)
    // 0x83dc (UTF-16BE)
    if (argCheck == '菜') {
        return true;
    }
    // No.1573
    // 説明:8dd9
    // 0x8dd9 (Windows-31J)
    // 0x88c1 (UTF-16BE)
    if (argCheck == '裁') {
        return true;
    }
    // No.1574
    // 説明:8dda
    // 0x8dda (Windows-31J)
    // 0x8f09 (UTF-16BE)
    if (argCheck == '載') {
        return true;
    }
    // No.1575
    // 説明:8ddb
    // 0x8ddb (Windows-31J)
    // 0x969b (UTF-16BE)
    if (argCheck == '際') {
        return true;
    }
    // No.1576
    // 説明:8ddc
    // 0x8ddc (Windows-31J)
    // 0x5264 (UTF-16BE)
    if (argCheck == '剤') {
        return true;
    }
    // No.1577
    // 説明:8ddd
    // 0x8ddd (Windows-31J)
    // 0x5728 (UTF-16BE)
    if (argCheck == '在') {
        return true;
    }
    // No.1578
    // 説明:8dde
    // 0x8dde (Windows-31J)
    // 0x6750 (UTF-16BE)
    if (argCheck == '材') {
        return true;
    }
    // No.1579
    // 説明:8ddf
    // 0x8ddf (Windows-31J)
    // 0x7f6a (UTF-16BE)
    if (argCheck == '罪') {
        return true;
    }
    // No.1580
    // 説明:8de0
    // 0x8de0 (Windows-31J)
    // 0x8ca1 (UTF-16BE)
    if (argCheck == '財') {
        return true;
    }
    // No.1581
    // 説明:8de1
    // 0x8de1 (Windows-31J)
    // 0x51b4 (UTF-16BE)
    if (argCheck == '冴') {
        return true;
    }
    // No.1582
    // 説明:8de2
    // 0x8de2 (Windows-31J)
    // 0x5742 (UTF-16BE)
    if (argCheck == '坂') {
        return true;
    }
    // No.1583
    // 説明:8de3
    // 0x8de3 (Windows-31J)
    // 0x962a (UTF-16BE)
    if (argCheck == '阪') {
        return true;
    }
    // No.1584
    // 説明:8de4
    // 0x8de4 (Windows-31J)
    // 0x583a (UTF-16BE)
    if (argCheck == '堺') {
        return true;
    }
    // No.1585
    // 説明:8de5
    // 0x8de5 (Windows-31J)
    // 0x698a (UTF-16BE)
    if (argCheck == '榊') {
        return true;
    }
    // No.1586
    // 説明:8de6
    // 0x8de6 (Windows-31J)
    // 0x80b4 (UTF-16BE)
    if (argCheck == '肴') {
        return true;
    }
    // No.1587
    // 説明:8de7
    // 0x8de7 (Windows-31J)
    // 0x54b2 (UTF-16BE)
    if (argCheck == '咲') {
        return true;
    }
    // No.1588
    // 説明:8de8
    // 0x8de8 (Windows-31J)
    // 0x5d0e (UTF-16BE)
    if (argCheck == '崎') {
        return true;
    }
    // No.1589
    // 説明:8de9
    // 0x8de9 (Windows-31J)
    // 0x57fc (UTF-16BE)
    if (argCheck == '埼') {
        return true;
    }
    // No.1590
    // 説明:8dea
    // 0x8dea (Windows-31J)
    // 0x7895 (UTF-16BE)
    if (argCheck == '碕') {
        return true;
    }
    // No.1591
    // 説明:8deb
    // 0x8deb (Windows-31J)
    // 0x9dfa (UTF-16BE)
    if (argCheck == '鷺') {
        return true;
    }
    // No.1592
    // 説明:8dec
    // 0x8dec (Windows-31J)
    // 0x4f5c (UTF-16BE)
    if (argCheck == '作') {
        return true;
    }
    // No.1593
    // 説明:8ded
    // 0x8ded (Windows-31J)
    // 0x524a (UTF-16BE)
    if (argCheck == '削') {
        return true;
    }
    // No.1594
    // 説明:8dee
    // 0x8dee (Windows-31J)
    // 0x548b (UTF-16BE)
    if (argCheck == '咋') {
        return true;
    }
    // No.1595
    // 説明:8def
    // 0x8def (Windows-31J)
    // 0x643e (UTF-16BE)
    if (argCheck == '搾') {
        return true;
    }
    // No.1596
    // 説明:8df0
    // 0x8df0 (Windows-31J)
    // 0x6628 (UTF-16BE)
    if (argCheck == '昨') {
        return true;
    }
    // No.1597
    // 説明:8df1
    // 0x8df1 (Windows-31J)
    // 0x6714 (UTF-16BE)
    if (argCheck == '朔') {
        return true;
    }
    // No.1598
    // 説明:8df2
    // 0x8df2 (Windows-31J)
    // 0x67f5 (UTF-16BE)
    if (argCheck == '柵') {
        return true;
    }
    // No.1599
    // 説明:8df3
    // 0x8df3 (Windows-31J)
    // 0x7a84 (UTF-16BE)
    if (argCheck == '窄') {
        return true;
    }
    // No.1600
    // 説明:8df4
    // 0x8df4 (Windows-31J)
    // 0x7b56 (UTF-16BE)
    if (argCheck == '策') {
        return true;
    }
    // No.1601
    // 説明:8df5
    // 0x8df5 (Windows-31J)
    // 0x7d22 (UTF-16BE)
    if (argCheck == '索') {
        return true;
    }
    // No.1602
    // 説明:8df6
    // 0x8df6 (Windows-31J)
    // 0x932f (UTF-16BE)
    if (argCheck == '錯') {
        return true;
    }
    // No.1603
    // 説明:8df7
    // 0x8df7 (Windows-31J)
    // 0x685c (UTF-16BE)
    if (argCheck == '桜') {
        return true;
    }
    // No.1604
    // 説明:8df8
    // 0x8df8 (Windows-31J)
    // 0x9bad (UTF-16BE)
    if (argCheck == '鮭') {
        return true;
    }
    // No.1605
    // 説明:8df9
    // 0x8df9 (Windows-31J)
    // 0x7b39 (UTF-16BE)
    if (argCheck == '笹') {
        return true;
    }
    // No.1606
    // 説明:8dfa
    // 0x8dfa (Windows-31J)
    // 0x5319 (UTF-16BE)
    if (argCheck == '匙') {
        return true;
    }
    // No.1607
    // 説明:8dfb
    // 0x8dfb (Windows-31J)
    // 0x518a (UTF-16BE)
    if (argCheck == '冊') {
        return true;
    }
    // No.1608
    // 説明:8dfc
    // 0x8dfc (Windows-31J)
    // 0x5237 (UTF-16BE)
    if (argCheck == '刷') {
        return true;
    }
    // No.1609
    // 説明:8e40
    // 0x8e40 (Windows-31J)
    // 0x5bdf (UTF-16BE)
    if (argCheck == '察') {
        return true;
    }
    // No.1610
    // 説明:8e41
    // 0x8e41 (Windows-31J)
    // 0x62f6 (UTF-16BE)
    if (argCheck == '拶') {
        return true;
    }
    // No.1611
    // 説明:8e42
    // 0x8e42 (Windows-31J)
    // 0x64ae (UTF-16BE)
    if (argCheck == '撮') {
        return true;
    }
    // No.1612
    // 説明:8e43
    // 0x8e43 (Windows-31J)
    // 0x64e6 (UTF-16BE)
    if (argCheck == '擦') {
        return true;
    }
    // No.1613
    // 説明:8e44
    // 0x8e44 (Windows-31J)
    // 0x672d (UTF-16BE)
    if (argCheck == '札') {
        return true;
    }
    // No.1614
    // 説明:8e45
    // 0x8e45 (Windows-31J)
    // 0x6bba (UTF-16BE)
    if (argCheck == '殺') {
        return true;
    }
    // No.1615
    // 説明:8e46
    // 0x8e46 (Windows-31J)
    // 0x85a9 (UTF-16BE)
    if (argCheck == '薩') {
        return true;
    }
    // No.1616
    // 説明:8e47
    // 0x8e47 (Windows-31J)
    // 0x96d1 (UTF-16BE)
    if (argCheck == '雑') {
        return true;
    }
    // No.1617
    // 説明:8e48
    // 0x8e48 (Windows-31J)
    // 0x7690 (UTF-16BE)
    if (argCheck == '皐') {
        return true;
    }
    // No.1618
    // 説明:8e49
    // 0x8e49 (Windows-31J)
    // 0x9bd6 (UTF-16BE)
    if (argCheck == '鯖') {
        return true;
    }
    // No.1619
    // 説明:8e4a
    // 0x8e4a (Windows-31J)
    // 0x634c (UTF-16BE)
    if (argCheck == '捌') {
        return true;
    }
    // No.1620
    // 説明:8e4b
    // 0x8e4b (Windows-31J)
    // 0x9306 (UTF-16BE)
    if (argCheck == '錆') {
        return true;
    }
    // No.1621
    // 説明:8e4c
    // 0x8e4c (Windows-31J)
    // 0x9bab (UTF-16BE)
    if (argCheck == '鮫') {
        return true;
    }
    // No.1622
    // 説明:8e4d
    // 0x8e4d (Windows-31J)
    // 0x76bf (UTF-16BE)
    if (argCheck == '皿') {
        return true;
    }
    // No.1623
    // 説明:8e4e
    // 0x8e4e (Windows-31J)
    // 0x6652 (UTF-16BE)
    if (argCheck == '晒') {
        return true;
    }
    // No.1624
    // 説明:8e4f
    // 0x8e4f (Windows-31J)
    // 0x4e09 (UTF-16BE)
    if (argCheck == '三') {
        return true;
    }
    // No.1625
    // 説明:8e50
    // 0x8e50 (Windows-31J)
    // 0x5098 (UTF-16BE)
    if (argCheck == '傘') {
        return true;
    }
    // No.1626
    // 説明:8e51
    // 0x8e51 (Windows-31J)
    // 0x53c2 (UTF-16BE)
    if (argCheck == '参') {
        return true;
    }
    // No.1627
    // 説明:8e52
    // 0x8e52 (Windows-31J)
    // 0x5c71 (UTF-16BE)
    if (argCheck == '山') {
        return true;
    }
    // No.1628
    // 説明:8e53
    // 0x8e53 (Windows-31J)
    // 0x60e8 (UTF-16BE)
    if (argCheck == '惨') {
        return true;
    }
    // No.1629
    // 説明:8e54
    // 0x8e54 (Windows-31J)
    // 0x6492 (UTF-16BE)
    if (argCheck == '撒') {
        return true;
    }
    // No.1630
    // 説明:8e55
    // 0x8e55 (Windows-31J)
    // 0x6563 (UTF-16BE)
    if (argCheck == '散') {
        return true;
    }
    // No.1631
    // 説明:8e56
    // 0x8e56 (Windows-31J)
    // 0x685f (UTF-16BE)
    if (argCheck == '桟') {
        return true;
    }
    // No.1632
    // 説明:8e57
    // 0x8e57 (Windows-31J)
    // 0x71e6 (UTF-16BE)
    if (argCheck == '燦') {
        return true;
    }
    // No.1633
    // 説明:8e58
    // 0x8e58 (Windows-31J)
    // 0x73ca (UTF-16BE)
    if (argCheck == '珊') {
        return true;
    }
    // No.1634
    // 説明:8e59
    // 0x8e59 (Windows-31J)
    // 0x7523 (UTF-16BE)
    if (argCheck == '産') {
        return true;
    }
    // No.1635
    // 説明:8e5a
    // 0x8e5a (Windows-31J)
    // 0x7b97 (UTF-16BE)
    if (argCheck == '算') {
        return true;
    }
    // No.1636
    // 説明:8e5b
    // 0x8e5b (Windows-31J)
    // 0x7e82 (UTF-16BE)
    if (argCheck == '纂') {
        return true;
    }
    // No.1637
    // 説明:8e5c
    // 0x8e5c (Windows-31J)
    // 0x8695 (UTF-16BE)
    if (argCheck == '蚕') {
        return true;
    }
    // No.1638
    // 説明:8e5d
    // 0x8e5d (Windows-31J)
    // 0x8b83 (UTF-16BE)
    if (argCheck == '讃') {
        return true;
    }
    // No.1639
    // 説明:8e5e
    // 0x8e5e (Windows-31J)
    // 0x8cdb (UTF-16BE)
    if (argCheck == '賛') {
        return true;
    }
    // No.1640
    // 説明:8e5f
    // 0x8e5f (Windows-31J)
    // 0x9178 (UTF-16BE)
    if (argCheck == '酸') {
        return true;
    }
    // No.1641
    // 説明:8e60
    // 0x8e60 (Windows-31J)
    // 0x9910 (UTF-16BE)
    if (argCheck == '餐') {
        return true;
    }
    // No.1642
    // 説明:8e61
    // 0x8e61 (Windows-31J)
    // 0x65ac (UTF-16BE)
    if (argCheck == '斬') {
        return true;
    }
    // No.1643
    // 説明:8e62
    // 0x8e62 (Windows-31J)
    // 0x66ab (UTF-16BE)
    if (argCheck == '暫') {
        return true;
    }
    // No.1644
    // 説明:8e63
    // 0x8e63 (Windows-31J)
    // 0x6b8b (UTF-16BE)
    if (argCheck == '残') {
        return true;
    }
    // No.1645
    // 説明:8e64
    // 0x8e64 (Windows-31J)
    // 0x4ed5 (UTF-16BE)
    if (argCheck == '仕') {
        return true;
    }
    // No.1646
    // 説明:8e65
    // 0x8e65 (Windows-31J)
    // 0x4ed4 (UTF-16BE)
    if (argCheck == '仔') {
        return true;
    }
    // No.1647
    // 説明:8e66
    // 0x8e66 (Windows-31J)
    // 0x4f3a (UTF-16BE)
    if (argCheck == '伺') {
        return true;
    }
    // No.1648
    // 説明:8e67
    // 0x8e67 (Windows-31J)
    // 0x4f7f (UTF-16BE)
    if (argCheck == '使') {
        return true;
    }
    // No.1649
    // 説明:8e68
    // 0x8e68 (Windows-31J)
    // 0x523a (UTF-16BE)
    if (argCheck == '刺') {
        return true;
    }
    // No.1650
    // 説明:8e69
    // 0x8e69 (Windows-31J)
    // 0x53f8 (UTF-16BE)
    if (argCheck == '司') {
        return true;
    }
    // No.1651
    // 説明:8e6a
    // 0x8e6a (Windows-31J)
    // 0x53f2 (UTF-16BE)
    if (argCheck == '史') {
        return true;
    }
    // No.1652
    // 説明:8e6b
    // 0x8e6b (Windows-31J)
    // 0x55e3 (UTF-16BE)
    if (argCheck == '嗣') {
        return true;
    }
    // No.1653
    // 説明:8e6c
    // 0x8e6c (Windows-31J)
    // 0x56db (UTF-16BE)
    if (argCheck == '四') {
        return true;
    }
    // No.1654
    // 説明:8e6d
    // 0x8e6d (Windows-31J)
    // 0x58eb (UTF-16BE)
    if (argCheck == '士') {
        return true;
    }
    // No.1655
    // 説明:8e6e
    // 0x8e6e (Windows-31J)
    // 0x59cb (UTF-16BE)
    if (argCheck == '始') {
        return true;
    }
    // No.1656
    // 説明:8e6f
    // 0x8e6f (Windows-31J)
    // 0x59c9 (UTF-16BE)
    if (argCheck == '姉') {
        return true;
    }
    // No.1657
    // 説明:8e70
    // 0x8e70 (Windows-31J)
    // 0x59ff (UTF-16BE)
    if (argCheck == '姿') {
        return true;
    }
    // No.1658
    // 説明:8e71
    // 0x8e71 (Windows-31J)
    // 0x5b50 (UTF-16BE)
    if (argCheck == '子') {
        return true;
    }
    // No.1659
    // 説明:8e72
    // 0x8e72 (Windows-31J)
    // 0x5c4d (UTF-16BE)
    if (argCheck == '屍') {
        return true;
    }
    // No.1660
    // 説明:8e73
    // 0x8e73 (Windows-31J)
    // 0x5e02 (UTF-16BE)
    if (argCheck == '市') {
        return true;
    }
    // No.1661
    // 説明:8e74
    // 0x8e74 (Windows-31J)
    // 0x5e2b (UTF-16BE)
    if (argCheck == '師') {
        return true;
    }
    // No.1662
    // 説明:8e75
    // 0x8e75 (Windows-31J)
    // 0x5fd7 (UTF-16BE)
    if (argCheck == '志') {
        return true;
    }
    // No.1663
    // 説明:8e76
    // 0x8e76 (Windows-31J)
    // 0x601d (UTF-16BE)
    if (argCheck == '思') {
        return true;
    }
    // No.1664
    // 説明:8e77
    // 0x8e77 (Windows-31J)
    // 0x6307 (UTF-16BE)
    if (argCheck == '指') {
        return true;
    }
    // No.1665
    // 説明:8e78
    // 0x8e78 (Windows-31J)
    // 0x652f (UTF-16BE)
    if (argCheck == '支') {
        return true;
    }
    // No.1666
    // 説明:8e79
    // 0x8e79 (Windows-31J)
    // 0x5b5c (UTF-16BE)
    if (argCheck == '孜') {
        return true;
    }
    // No.1667
    // 説明:8e7a
    // 0x8e7a (Windows-31J)
    // 0x65af (UTF-16BE)
    if (argCheck == '斯') {
        return true;
    }
    // No.1668
    // 説明:8e7b
    // 0x8e7b (Windows-31J)
    // 0x65bd (UTF-16BE)
    if (argCheck == '施') {
        return true;
    }
    // No.1669
    // 説明:8e7c
    // 0x8e7c (Windows-31J)
    // 0x65e8 (UTF-16BE)
    if (argCheck == '旨') {
        return true;
    }
    // No.1670
    // 説明:8e7d
    // 0x8e7d (Windows-31J)
    // 0x679d (UTF-16BE)
    if (argCheck == '枝') {
        return true;
    }
    // No.1671
    // 説明:8e7e
    // 0x8e7e (Windows-31J)
    // 0x6b62 (UTF-16BE)
    if (argCheck == '止') {
        return true;
    }
    // No.1672
    // 説明:8e80
    // 0x8e80 (Windows-31J)
    // 0x6b7b (UTF-16BE)
    if (argCheck == '死') {
        return true;
    }
    // No.1673
    // 説明:8e81
    // 0x8e81 (Windows-31J)
    // 0x6c0f (UTF-16BE)
    if (argCheck == '氏') {
        return true;
    }
    // No.1674
    // 説明:8e82
    // 0x8e82 (Windows-31J)
    // 0x7345 (UTF-16BE)
    if (argCheck == '獅') {
        return true;
    }
    // No.1675
    // 説明:8e83
    // 0x8e83 (Windows-31J)
    // 0x7949 (UTF-16BE)
    if (argCheck == '祉') {
        return true;
    }
    // No.1676
    // 説明:8e84
    // 0x8e84 (Windows-31J)
    // 0x79c1 (UTF-16BE)
    if (argCheck == '私') {
        return true;
    }
    // No.1677
    // 説明:8e85
    // 0x8e85 (Windows-31J)
    // 0x7cf8 (UTF-16BE)
    if (argCheck == '糸') {
        return true;
    }
    // No.1678
    // 説明:8e86
    // 0x8e86 (Windows-31J)
    // 0x7d19 (UTF-16BE)
    if (argCheck == '紙') {
        return true;
    }
    // No.1679
    // 説明:8e87
    // 0x8e87 (Windows-31J)
    // 0x7d2b (UTF-16BE)
    if (argCheck == '紫') {
        return true;
    }
    // No.1680
    // 説明:8e88
    // 0x8e88 (Windows-31J)
    // 0x80a2 (UTF-16BE)
    if (argCheck == '肢') {
        return true;
    }
    // No.1681
    // 説明:8e89
    // 0x8e89 (Windows-31J)
    // 0x8102 (UTF-16BE)
    if (argCheck == '脂') {
        return true;
    }
    // No.1682
    // 説明:8e8a
    // 0x8e8a (Windows-31J)
    // 0x81f3 (UTF-16BE)
    if (argCheck == '至') {
        return true;
    }
    // No.1683
    // 説明:8e8b
    // 0x8e8b (Windows-31J)
    // 0x8996 (UTF-16BE)
    if (argCheck == '視') {
        return true;
    }
    // No.1684
    // 説明:8e8c
    // 0x8e8c (Windows-31J)
    // 0x8a5e (UTF-16BE)
    if (argCheck == '詞') {
        return true;
    }
    // No.1685
    // 説明:8e8d
    // 0x8e8d (Windows-31J)
    // 0x8a69 (UTF-16BE)
    if (argCheck == '詩') {
        return true;
    }
    // No.1686
    // 説明:8e8e
    // 0x8e8e (Windows-31J)
    // 0x8a66 (UTF-16BE)
    if (argCheck == '試') {
        return true;
    }
    // No.1687
    // 説明:8e8f
    // 0x8e8f (Windows-31J)
    // 0x8a8c (UTF-16BE)
    if (argCheck == '誌') {
        return true;
    }
    // No.1688
    // 説明:8e90
    // 0x8e90 (Windows-31J)
    // 0x8aee (UTF-16BE)
    if (argCheck == '諮') {
        return true;
    }
    // No.1689
    // 説明:8e91
    // 0x8e91 (Windows-31J)
    // 0x8cc7 (UTF-16BE)
    if (argCheck == '資') {
        return true;
    }
    // No.1690
    // 説明:8e92
    // 0x8e92 (Windows-31J)
    // 0x8cdc (UTF-16BE)
    if (argCheck == '賜') {
        return true;
    }
    // No.1691
    // 説明:8e93
    // 0x8e93 (Windows-31J)
    // 0x96cc (UTF-16BE)
    if (argCheck == '雌') {
        return true;
    }
    // No.1692
    // 説明:8e94
    // 0x8e94 (Windows-31J)
    // 0x98fc (UTF-16BE)
    if (argCheck == '飼') {
        return true;
    }
    // No.1693
    // 説明:8e95
    // 0x8e95 (Windows-31J)
    // 0x6b6f (UTF-16BE)
    if (argCheck == '歯') {
        return true;
    }
    // No.1694
    // 説明:8e96
    // 0x8e96 (Windows-31J)
    // 0x4e8b (UTF-16BE)
    if (argCheck == '事') {
        return true;
    }
    // No.1695
    // 説明:8e97
    // 0x8e97 (Windows-31J)
    // 0x4f3c (UTF-16BE)
    if (argCheck == '似') {
        return true;
    }
    // No.1696
    // 説明:8e98
    // 0x8e98 (Windows-31J)
    // 0x4f8d (UTF-16BE)
    if (argCheck == '侍') {
        return true;
    }
    // No.1697
    // 説明:8e99
    // 0x8e99 (Windows-31J)
    // 0x5150 (UTF-16BE)
    if (argCheck == '児') {
        return true;
    }
    // No.1698
    // 説明:8e9a
    // 0x8e9a (Windows-31J)
    // 0x5b57 (UTF-16BE)
    if (argCheck == '字') {
        return true;
    }
    // No.1699
    // 説明:8e9b
    // 0x8e9b (Windows-31J)
    // 0x5bfa (UTF-16BE)
    if (argCheck == '寺') {
        return true;
    }
    // No.1700
    // 説明:8e9c
    // 0x8e9c (Windows-31J)
    // 0x6148 (UTF-16BE)
    if (argCheck == '慈') {
        return true;
    }
    // No.1701
    // 説明:8e9d
    // 0x8e9d (Windows-31J)
    // 0x6301 (UTF-16BE)
    if (argCheck == '持') {
        return true;
    }
    // No.1702
    // 説明:8e9e
    // 0x8e9e (Windows-31J)
    // 0x6642 (UTF-16BE)
    if (argCheck == '時') {
        return true;
    }
    // No.1703
    // 説明:8e9f
    // 0x8e9f (Windows-31J)
    // 0x6b21 (UTF-16BE)
    if (argCheck == '次') {
        return true;
    }
    // No.1704
    // 説明:8ea0
    // 0x8ea0 (Windows-31J)
    // 0x6ecb (UTF-16BE)
    if (argCheck == '滋') {
        return true;
    }
    // No.1705
    // 説明:8ea1
    // 0x8ea1 (Windows-31J)
    // 0x6cbb (UTF-16BE)
    if (argCheck == '治') {
        return true;
    }
    // No.1706
    // 説明:8ea2
    // 0x8ea2 (Windows-31J)
    // 0x723e (UTF-16BE)
    if (argCheck == '爾') {
        return true;
    }
    // No.1707
    // 説明:8ea3
    // 0x8ea3 (Windows-31J)
    // 0x74bd (UTF-16BE)
    if (argCheck == '璽') {
        return true;
    }
    // No.1708
    // 説明:8ea4
    // 0x8ea4 (Windows-31J)
    // 0x75d4 (UTF-16BE)
    if (argCheck == '痔') {
        return true;
    }
    // No.1709
    // 説明:8ea5
    // 0x8ea5 (Windows-31J)
    // 0x78c1 (UTF-16BE)
    if (argCheck == '磁') {
        return true;
    }
    // No.1710
    // 説明:8ea6
    // 0x8ea6 (Windows-31J)
    // 0x793a (UTF-16BE)
    if (argCheck == '示') {
        return true;
    }
    // No.1711
    // 説明:8ea7
    // 0x8ea7 (Windows-31J)
    // 0x800c (UTF-16BE)
    if (argCheck == '而') {
        return true;
    }
    // No.1712
    // 説明:8ea8
    // 0x8ea8 (Windows-31J)
    // 0x8033 (UTF-16BE)
    if (argCheck == '耳') {
        return true;
    }
    // No.1713
    // 説明:8ea9
    // 0x8ea9 (Windows-31J)
    // 0x81ea (UTF-16BE)
    if (argCheck == '自') {
        return true;
    }
    // No.1714
    // 説明:8eaa
    // 0x8eaa (Windows-31J)
    // 0x8494 (UTF-16BE)
    if (argCheck == '蒔') {
        return true;
    }
    // No.1715
    // 説明:8eab
    // 0x8eab (Windows-31J)
    // 0x8f9e (UTF-16BE)
    if (argCheck == '辞') {
        return true;
    }
    // No.1716
    // 説明:8eac
    // 0x8eac (Windows-31J)
    // 0x6c50 (UTF-16BE)
    if (argCheck == '汐') {
        return true;
    }
    // No.1717
    // 説明:8ead
    // 0x8ead (Windows-31J)
    // 0x9e7f (UTF-16BE)
    if (argCheck == '鹿') {
        return true;
    }
    // No.1718
    // 説明:8eae
    // 0x8eae (Windows-31J)
    // 0x5f0f (UTF-16BE)
    if (argCheck == '式') {
        return true;
    }
    // No.1719
    // 説明:8eaf
    // 0x8eaf (Windows-31J)
    // 0x8b58 (UTF-16BE)
    if (argCheck == '識') {
        return true;
    }
    // No.1720
    // 説明:8eb0
    // 0x8eb0 (Windows-31J)
    // 0x9d2b (UTF-16BE)
    if (argCheck == '鴫') {
        return true;
    }
    // No.1721
    // 説明:8eb1
    // 0x8eb1 (Windows-31J)
    // 0x7afa (UTF-16BE)
    if (argCheck == '竺') {
        return true;
    }
    // No.1722
    // 説明:8eb2
    // 0x8eb2 (Windows-31J)
    // 0x8ef8 (UTF-16BE)
    if (argCheck == '軸') {
        return true;
    }
    // No.1723
    // 説明:8eb3
    // 0x8eb3 (Windows-31J)
    // 0x5b8d (UTF-16BE)
    if (argCheck == '宍') {
        return true;
    }
    // No.1724
    // 説明:8eb4
    // 0x8eb4 (Windows-31J)
    // 0x96eb (UTF-16BE)
    if (argCheck == '雫') {
        return true;
    }
    // No.1725
    // 説明:8eb5
    // 0x8eb5 (Windows-31J)
    // 0x4e03 (UTF-16BE)
    if (argCheck == '七') {
        return true;
    }
    // No.1726
    // 説明:8eb6
    // 0x8eb6 (Windows-31J)
    // 0x53f1 (UTF-16BE)
    if (argCheck == '叱') {
        return true;
    }
    // No.1727
    // 説明:8eb7
    // 0x8eb7 (Windows-31J)
    // 0x57f7 (UTF-16BE)
    if (argCheck == '執') {
        return true;
    }
    // No.1728
    // 説明:8eb8
    // 0x8eb8 (Windows-31J)
    // 0x5931 (UTF-16BE)
    if (argCheck == '失') {
        return true;
    }
    // No.1729
    // 説明:8eb9
    // 0x8eb9 (Windows-31J)
    // 0x5ac9 (UTF-16BE)
    if (argCheck == '嫉') {
        return true;
    }
    // No.1730
    // 説明:8eba
    // 0x8eba (Windows-31J)
    // 0x5ba4 (UTF-16BE)
    if (argCheck == '室') {
        return true;
    }
    // No.1731
    // 説明:8ebb
    // 0x8ebb (Windows-31J)
    // 0x6089 (UTF-16BE)
    if (argCheck == '悉') {
        return true;
    }
    // No.1732
    // 説明:8ebc
    // 0x8ebc (Windows-31J)
    // 0x6e7f (UTF-16BE)
    if (argCheck == '湿') {
        return true;
    }
    // No.1733
    // 説明:8ebd
    // 0x8ebd (Windows-31J)
    // 0x6f06 (UTF-16BE)
    if (argCheck == '漆') {
        return true;
    }
    // No.1734
    // 説明:8ebe
    // 0x8ebe (Windows-31J)
    // 0x75be (UTF-16BE)
    if (argCheck == '疾') {
        return true;
    }
    // No.1735
    // 説明:8ebf
    // 0x8ebf (Windows-31J)
    // 0x8cea (UTF-16BE)
    if (argCheck == '質') {
        return true;
    }
    // No.1736
    // 説明:8ec0
    // 0x8ec0 (Windows-31J)
    // 0x5b9f (UTF-16BE)
    if (argCheck == '実') {
        return true;
    }
    // No.1737
    // 説明:8ec1
    // 0x8ec1 (Windows-31J)
    // 0x8500 (UTF-16BE)
    if (argCheck == '蔀') {
        return true;
    }
    // No.1738
    // 説明:8ec2
    // 0x8ec2 (Windows-31J)
    // 0x7be0 (UTF-16BE)
    if (argCheck == '篠') {
        return true;
    }
    // No.1739
    // 説明:8ec3
    // 0x8ec3 (Windows-31J)
    // 0x5072 (UTF-16BE)
    if (argCheck == '偲') {
        return true;
    }
    // No.1740
    // 説明:8ec4
    // 0x8ec4 (Windows-31J)
    // 0x67f4 (UTF-16BE)
    if (argCheck == '柴') {
        return true;
    }
    // No.1741
    // 説明:8ec5
    // 0x8ec5 (Windows-31J)
    // 0x829d (UTF-16BE)
    if (argCheck == '芝') {
        return true;
    }
    // No.1742
    // 説明:8ec6
    // 0x8ec6 (Windows-31J)
    // 0x5c61 (UTF-16BE)
    if (argCheck == '屡') {
        return true;
    }
    // No.1743
    // 説明:8ec7
    // 0x8ec7 (Windows-31J)
    // 0x854a (UTF-16BE)
    if (argCheck == '蕊') {
        return true;
    }
    // No.1744
    // 説明:8ec8
    // 0x8ec8 (Windows-31J)
    // 0x7e1e (UTF-16BE)
    if (argCheck == '縞') {
        return true;
    }
    // No.1745
    // 説明:8ec9
    // 0x8ec9 (Windows-31J)
    // 0x820e (UTF-16BE)
    if (argCheck == '舎') {
        return true;
    }
    // No.1746
    // 説明:8eca
    // 0x8eca (Windows-31J)
    // 0x5199 (UTF-16BE)
    if (argCheck == '写') {
        return true;
    }
    // No.1747
    // 説明:8ecb
    // 0x8ecb (Windows-31J)
    // 0x5c04 (UTF-16BE)
    if (argCheck == '射') {
        return true;
    }
    // No.1748
    // 説明:8ecc
    // 0x8ecc (Windows-31J)
    // 0x6368 (UTF-16BE)
    if (argCheck == '捨') {
        return true;
    }
    // No.1749
    // 説明:8ecd
    // 0x8ecd (Windows-31J)
    // 0x8d66 (UTF-16BE)
    if (argCheck == '赦') {
        return true;
    }
    // No.1750
    // 説明:8ece
    // 0x8ece (Windows-31J)
    // 0x659c (UTF-16BE)
    if (argCheck == '斜') {
        return true;
    }
    // No.1751
    // 説明:8ecf
    // 0x8ecf (Windows-31J)
    // 0x716e (UTF-16BE)
    if (argCheck == '煮') {
        return true;
    }
    // No.1752
    // 説明:8ed0
    // 0x8ed0 (Windows-31J)
    // 0x793e (UTF-16BE)
    if (argCheck == '社') {
        return true;
    }
    // No.1753
    // 説明:8ed1
    // 0x8ed1 (Windows-31J)
    // 0x7d17 (UTF-16BE)
    if (argCheck == '紗') {
        return true;
    }
    // No.1754
    // 説明:8ed2
    // 0x8ed2 (Windows-31J)
    // 0x8005 (UTF-16BE)
    if (argCheck == '者') {
        return true;
    }
    // No.1755
    // 説明:8ed3
    // 0x8ed3 (Windows-31J)
    // 0x8b1d (UTF-16BE)
    if (argCheck == '謝') {
        return true;
    }
    // No.1756
    // 説明:8ed4
    // 0x8ed4 (Windows-31J)
    // 0x8eca (UTF-16BE)
    if (argCheck == '車') {
        return true;
    }
    // No.1757
    // 説明:8ed5
    // 0x8ed5 (Windows-31J)
    // 0x906e (UTF-16BE)
    if (argCheck == '遮') {
        return true;
    }
    // No.1758
    // 説明:8ed6
    // 0x8ed6 (Windows-31J)
    // 0x86c7 (UTF-16BE)
    if (argCheck == '蛇') {
        return true;
    }
    // No.1759
    // 説明:8ed7
    // 0x8ed7 (Windows-31J)
    // 0x90aa (UTF-16BE)
    if (argCheck == '邪') {
        return true;
    }
    // No.1760
    // 説明:8ed8
    // 0x8ed8 (Windows-31J)
    // 0x501f (UTF-16BE)
    if (argCheck == '借') {
        return true;
    }
    // No.1761
    // 説明:8ed9
    // 0x8ed9 (Windows-31J)
    // 0x52fa (UTF-16BE)
    if (argCheck == '勺') {
        return true;
    }
    // No.1762
    // 説明:8eda
    // 0x8eda (Windows-31J)
    // 0x5c3a (UTF-16BE)
    if (argCheck == '尺') {
        return true;
    }
    // No.1763
    // 説明:8edb
    // 0x8edb (Windows-31J)
    // 0x6753 (UTF-16BE)
    if (argCheck == '杓') {
        return true;
    }
    // No.1764
    // 説明:8edc
    // 0x8edc (Windows-31J)
    // 0x707c (UTF-16BE)
    if (argCheck == '灼') {
        return true;
    }
    // No.1765
    // 説明:8edd
    // 0x8edd (Windows-31J)
    // 0x7235 (UTF-16BE)
    if (argCheck == '爵') {
        return true;
    }
    // No.1766
    // 説明:8ede
    // 0x8ede (Windows-31J)
    // 0x914c (UTF-16BE)
    if (argCheck == '酌') {
        return true;
    }
    // No.1767
    // 説明:8edf
    // 0x8edf (Windows-31J)
    // 0x91c8 (UTF-16BE)
    if (argCheck == '釈') {
        return true;
    }
    // No.1768
    // 説明:8ee0
    // 0x8ee0 (Windows-31J)
    // 0x932b (UTF-16BE)
    if (argCheck == '錫') {
        return true;
    }
    // No.1769
    // 説明:8ee1
    // 0x8ee1 (Windows-31J)
    // 0x82e5 (UTF-16BE)
    if (argCheck == '若') {
        return true;
    }
    // No.1770
    // 説明:8ee2
    // 0x8ee2 (Windows-31J)
    // 0x5bc2 (UTF-16BE)
    if (argCheck == '寂') {
        return true;
    }
    // No.1771
    // 説明:8ee3
    // 0x8ee3 (Windows-31J)
    // 0x5f31 (UTF-16BE)
    if (argCheck == '弱') {
        return true;
    }
    // No.1772
    // 説明:8ee4
    // 0x8ee4 (Windows-31J)
    // 0x60f9 (UTF-16BE)
    if (argCheck == '惹') {
        return true;
    }
    // No.1773
    // 説明:8ee5
    // 0x8ee5 (Windows-31J)
    // 0x4e3b (UTF-16BE)
    if (argCheck == '主') {
        return true;
    }
    // No.1774
    // 説明:8ee6
    // 0x8ee6 (Windows-31J)
    // 0x53d6 (UTF-16BE)
    if (argCheck == '取') {
        return true;
    }
    // No.1775
    // 説明:8ee7
    // 0x8ee7 (Windows-31J)
    // 0x5b88 (UTF-16BE)
    if (argCheck == '守') {
        return true;
    }
    // No.1776
    // 説明:8ee8
    // 0x8ee8 (Windows-31J)
    // 0x624b (UTF-16BE)
    if (argCheck == '手') {
        return true;
    }
    // No.1777
    // 説明:8ee9
    // 0x8ee9 (Windows-31J)
    // 0x6731 (UTF-16BE)
    if (argCheck == '朱') {
        return true;
    }
    // No.1778
    // 説明:8eea
    // 0x8eea (Windows-31J)
    // 0x6b8a (UTF-16BE)
    if (argCheck == '殊') {
        return true;
    }
    // No.1779
    // 説明:8eeb
    // 0x8eeb (Windows-31J)
    // 0x72e9 (UTF-16BE)
    if (argCheck == '狩') {
        return true;
    }
    // No.1780
    // 説明:8eec
    // 0x8eec (Windows-31J)
    // 0x73e0 (UTF-16BE)
    if (argCheck == '珠') {
        return true;
    }
    // No.1781
    // 説明:8eed
    // 0x8eed (Windows-31J)
    // 0x7a2e (UTF-16BE)
    if (argCheck == '種') {
        return true;
    }
    // No.1782
    // 説明:8eee
    // 0x8eee (Windows-31J)
    // 0x816b (UTF-16BE)
    if (argCheck == '腫') {
        return true;
    }
    // No.1783
    // 説明:8eef
    // 0x8eef (Windows-31J)
    // 0x8da3 (UTF-16BE)
    if (argCheck == '趣') {
        return true;
    }
    // No.1784
    // 説明:8ef0
    // 0x8ef0 (Windows-31J)
    // 0x9152 (UTF-16BE)
    if (argCheck == '酒') {
        return true;
    }
    // No.1785
    // 説明:8ef1
    // 0x8ef1 (Windows-31J)
    // 0x9996 (UTF-16BE)
    if (argCheck == '首') {
        return true;
    }
    // No.1786
    // 説明:8ef2
    // 0x8ef2 (Windows-31J)
    // 0x5112 (UTF-16BE)
    if (argCheck == '儒') {
        return true;
    }
    // No.1787
    // 説明:8ef3
    // 0x8ef3 (Windows-31J)
    // 0x53d7 (UTF-16BE)
    if (argCheck == '受') {
        return true;
    }
    // No.1788
    // 説明:8ef4
    // 0x8ef4 (Windows-31J)
    // 0x546a (UTF-16BE)
    if (argCheck == '呪') {
        return true;
    }
    // No.1789
    // 説明:8ef5
    // 0x8ef5 (Windows-31J)
    // 0x5bff (UTF-16BE)
    if (argCheck == '寿') {
        return true;
    }
    // No.1790
    // 説明:8ef6
    // 0x8ef6 (Windows-31J)
    // 0x6388 (UTF-16BE)
    if (argCheck == '授') {
        return true;
    }
    // No.1791
    // 説明:8ef7
    // 0x8ef7 (Windows-31J)
    // 0x6a39 (UTF-16BE)
    if (argCheck == '樹') {
        return true;
    }
    // No.1792
    // 説明:8ef8
    // 0x8ef8 (Windows-31J)
    // 0x7dac (UTF-16BE)
    if (argCheck == '綬') {
        return true;
    }
    // No.1793
    // 説明:8ef9
    // 0x8ef9 (Windows-31J)
    // 0x9700 (UTF-16BE)
    if (argCheck == '需') {
        return true;
    }
    // No.1794
    // 説明:8efa
    // 0x8efa (Windows-31J)
    // 0x56da (UTF-16BE)
    if (argCheck == '囚') {
        return true;
    }
    // No.1795
    // 説明:8efb
    // 0x8efb (Windows-31J)
    // 0x53ce (UTF-16BE)
    if (argCheck == '収') {
        return true;
    }
    // No.1796
    // 説明:8efc
    // 0x8efc (Windows-31J)
    // 0x5468 (UTF-16BE)
    if (argCheck == '周') {
        return true;
    }
    // No.1797
    // 説明:8f40
    // 0x8f40 (Windows-31J)
    // 0x5b97 (UTF-16BE)
    if (argCheck == '宗') {
        return true;
    }
    // No.1798
    // 説明:8f41
    // 0x8f41 (Windows-31J)
    // 0x5c31 (UTF-16BE)
    if (argCheck == '就') {
        return true;
    }
    // No.1799
    // 説明:8f42
    // 0x8f42 (Windows-31J)
    // 0x5dde (UTF-16BE)
    if (argCheck == '州') {
        return true;
    }
    // No.1800
    // 説明:8f43
    // 0x8f43 (Windows-31J)
    // 0x4fee (UTF-16BE)
    if (argCheck == '修') {
        return true;
    }
    // No.1801
    // 説明:8f44
    // 0x8f44 (Windows-31J)
    // 0x6101 (UTF-16BE)
    if (argCheck == '愁') {
        return true;
    }
    // No.1802
    // 説明:8f45
    // 0x8f45 (Windows-31J)
    // 0x62fe (UTF-16BE)
    if (argCheck == '拾') {
        return true;
    }
    // No.1803
    // 説明:8f46
    // 0x8f46 (Windows-31J)
    // 0x6d32 (UTF-16BE)
    if (argCheck == '洲') {
        return true;
    }
    // No.1804
    // 説明:8f47
    // 0x8f47 (Windows-31J)
    // 0x79c0 (UTF-16BE)
    if (argCheck == '秀') {
        return true;
    }
    // No.1805
    // 説明:8f48
    // 0x8f48 (Windows-31J)
    // 0x79cb (UTF-16BE)
    if (argCheck == '秋') {
        return true;
    }
    // No.1806
    // 説明:8f49
    // 0x8f49 (Windows-31J)
    // 0x7d42 (UTF-16BE)
    if (argCheck == '終') {
        return true;
    }
    // No.1807
    // 説明:8f4a
    // 0x8f4a (Windows-31J)
    // 0x7e4d (UTF-16BE)
    if (argCheck == '繍') {
        return true;
    }
    // No.1808
    // 説明:8f4b
    // 0x8f4b (Windows-31J)
    // 0x7fd2 (UTF-16BE)
    if (argCheck == '習') {
        return true;
    }
    // No.1809
    // 説明:8f4c
    // 0x8f4c (Windows-31J)
    // 0x81ed (UTF-16BE)
    if (argCheck == '臭') {
        return true;
    }
    // No.1810
    // 説明:8f4d
    // 0x8f4d (Windows-31J)
    // 0x821f (UTF-16BE)
    if (argCheck == '舟') {
        return true;
    }
    // No.1811
    // 説明:8f4e
    // 0x8f4e (Windows-31J)
    // 0x8490 (UTF-16BE)
    if (argCheck == '蒐') {
        return true;
    }
    // No.1812
    // 説明:8f4f
    // 0x8f4f (Windows-31J)
    // 0x8846 (UTF-16BE)
    if (argCheck == '衆') {
        return true;
    }
    // No.1813
    // 説明:8f50
    // 0x8f50 (Windows-31J)
    // 0x8972 (UTF-16BE)
    if (argCheck == '襲') {
        return true;
    }
    // No.1814
    // 説明:8f51
    // 0x8f51 (Windows-31J)
    // 0x8b90 (UTF-16BE)
    if (argCheck == '讐') {
        return true;
    }
    // No.1815
    // 説明:8f52
    // 0x8f52 (Windows-31J)
    // 0x8e74 (UTF-16BE)
    if (argCheck == '蹴') {
        return true;
    }
    // No.1816
    // 説明:8f53
    // 0x8f53 (Windows-31J)
    // 0x8f2f (UTF-16BE)
    if (argCheck == '輯') {
        return true;
    }
    // No.1817
    // 説明:8f54
    // 0x8f54 (Windows-31J)
    // 0x9031 (UTF-16BE)
    if (argCheck == '週') {
        return true;
    }
    // No.1818
    // 説明:8f55
    // 0x8f55 (Windows-31J)
    // 0x914b (UTF-16BE)
    if (argCheck == '酋') {
        return true;
    }
    // No.1819
    // 説明:8f56
    // 0x8f56 (Windows-31J)
    // 0x916c (UTF-16BE)
    if (argCheck == '酬') {
        return true;
    }
    // No.1820
    // 説明:8f57
    // 0x8f57 (Windows-31J)
    // 0x96c6 (UTF-16BE)
    if (argCheck == '集') {
        return true;
    }
    // No.1821
    // 説明:8f58
    // 0x8f58 (Windows-31J)
    // 0x919c (UTF-16BE)
    if (argCheck == '醜') {
        return true;
    }
    // No.1822
    // 説明:8f59
    // 0x8f59 (Windows-31J)
    // 0x4ec0 (UTF-16BE)
    if (argCheck == '什') {
        return true;
    }
    // No.1823
    // 説明:8f5a
    // 0x8f5a (Windows-31J)
    // 0x4f4f (UTF-16BE)
    if (argCheck == '住') {
        return true;
    }
    // No.1824
    // 説明:8f5b
    // 0x8f5b (Windows-31J)
    // 0x5145 (UTF-16BE)
    if (argCheck == '充') {
        return true;
    }
    // No.1825
    // 説明:8f5c
    // 0x8f5c (Windows-31J)
    // 0x5341 (UTF-16BE)
    if (argCheck == '十') {
        return true;
    }
    // No.1826
    // 説明:8f5d
    // 0x8f5d (Windows-31J)
    // 0x5f93 (UTF-16BE)
    if (argCheck == '従') {
        return true;
    }
    // No.1827
    // 説明:8f5e
    // 0x8f5e (Windows-31J)
    // 0x620e (UTF-16BE)
    if (argCheck == '戎') {
        return true;
    }
    // No.1828
    // 説明:8f5f
    // 0x8f5f (Windows-31J)
    // 0x67d4 (UTF-16BE)
    if (argCheck == '柔') {
        return true;
    }
    // No.1829
    // 説明:8f60
    // 0x8f60 (Windows-31J)
    // 0x6c41 (UTF-16BE)
    if (argCheck == '汁') {
        return true;
    }
    // No.1830
    // 説明:8f61
    // 0x8f61 (Windows-31J)
    // 0x6e0b (UTF-16BE)
    if (argCheck == '渋') {
        return true;
    }
    // No.1831
    // 説明:8f62
    // 0x8f62 (Windows-31J)
    // 0x7363 (UTF-16BE)
    if (argCheck == '獣') {
        return true;
    }
    // No.1832
    // 説明:8f63
    // 0x8f63 (Windows-31J)
    // 0x7e26 (UTF-16BE)
    if (argCheck == '縦') {
        return true;
    }
    // No.1833
    // 説明:8f64
    // 0x8f64 (Windows-31J)
    // 0x91cd (UTF-16BE)
    if (argCheck == '重') {
        return true;
    }
    // No.1834
    // 説明:8f65
    // 0x8f65 (Windows-31J)
    // 0x9283 (UTF-16BE)
    if (argCheck == '銃') {
        return true;
    }
    // No.1835
    // 説明:8f66
    // 0x8f66 (Windows-31J)
    // 0x53d4 (UTF-16BE)
    if (argCheck == '叔') {
        return true;
    }
    // No.1836
    // 説明:8f67
    // 0x8f67 (Windows-31J)
    // 0x5919 (UTF-16BE)
    if (argCheck == '夙') {
        return true;
    }
    // No.1837
    // 説明:8f68
    // 0x8f68 (Windows-31J)
    // 0x5bbf (UTF-16BE)
    if (argCheck == '宿') {
        return true;
    }
    // No.1838
    // 説明:8f69
    // 0x8f69 (Windows-31J)
    // 0x6dd1 (UTF-16BE)
    if (argCheck == '淑') {
        return true;
    }
    // No.1839
    // 説明:8f6a
    // 0x8f6a (Windows-31J)
    // 0x795d (UTF-16BE)
    if (argCheck == '祝') {
        return true;
    }
    // No.1840
    // 説明:8f6b
    // 0x8f6b (Windows-31J)
    // 0x7e2e (UTF-16BE)
    if (argCheck == '縮') {
        return true;
    }
    // No.1841
    // 説明:8f6c
    // 0x8f6c (Windows-31J)
    // 0x7c9b (UTF-16BE)
    if (argCheck == '粛') {
        return true;
    }
    // No.1842
    // 説明:8f6d
    // 0x8f6d (Windows-31J)
    // 0x587e (UTF-16BE)
    if (argCheck == '塾') {
        return true;
    }
    // No.1843
    // 説明:8f6e
    // 0x8f6e (Windows-31J)
    // 0x719f (UTF-16BE)
    if (argCheck == '熟') {
        return true;
    }
    // No.1844
    // 説明:8f6f
    // 0x8f6f (Windows-31J)
    // 0x51fa (UTF-16BE)
    if (argCheck == '出') {
        return true;
    }
    // No.1845
    // 説明:8f70
    // 0x8f70 (Windows-31J)
    // 0x8853 (UTF-16BE)
    if (argCheck == '術') {
        return true;
    }
    // No.1846
    // 説明:8f71
    // 0x8f71 (Windows-31J)
    // 0x8ff0 (UTF-16BE)
    if (argCheck == '述') {
        return true;
    }
    // No.1847
    // 説明:8f72
    // 0x8f72 (Windows-31J)
    // 0x4fca (UTF-16BE)
    if (argCheck == '俊') {
        return true;
    }
    // No.1848
    // 説明:8f73
    // 0x8f73 (Windows-31J)
    // 0x5cfb (UTF-16BE)
    if (argCheck == '峻') {
        return true;
    }
    // No.1849
    // 説明:8f74
    // 0x8f74 (Windows-31J)
    // 0x6625 (UTF-16BE)
    if (argCheck == '春') {
        return true;
    }
    // No.1850
    // 説明:8f75
    // 0x8f75 (Windows-31J)
    // 0x77ac (UTF-16BE)
    if (argCheck == '瞬') {
        return true;
    }
    // No.1851
    // 説明:8f76
    // 0x8f76 (Windows-31J)
    // 0x7ae3 (UTF-16BE)
    if (argCheck == '竣') {
        return true;
    }
    // No.1852
    // 説明:8f77
    // 0x8f77 (Windows-31J)
    // 0x821c (UTF-16BE)
    if (argCheck == '舜') {
        return true;
    }
    // No.1853
    // 説明:8f78
    // 0x8f78 (Windows-31J)
    // 0x99ff (UTF-16BE)
    if (argCheck == '駿') {
        return true;
    }
    // No.1854
    // 説明:8f79
    // 0x8f79 (Windows-31J)
    // 0x51c6 (UTF-16BE)
    if (argCheck == '准') {
        return true;
    }
    // No.1855
    // 説明:8f7a
    // 0x8f7a (Windows-31J)
    // 0x5faa (UTF-16BE)
    if (argCheck == '循') {
        return true;
    }
    // No.1856
    // 説明:8f7b
    // 0x8f7b (Windows-31J)
    // 0x65ec (UTF-16BE)
    if (argCheck == '旬') {
        return true;
    }
    // No.1857
    // 説明:8f7c
    // 0x8f7c (Windows-31J)
    // 0x696f (UTF-16BE)
    if (argCheck == '楯') {
        return true;
    }
    // No.1858
    // 説明:8f7d
    // 0x8f7d (Windows-31J)
    // 0x6b89 (UTF-16BE)
    if (argCheck == '殉') {
        return true;
    }
    // No.1859
    // 説明:8f7e
    // 0x8f7e (Windows-31J)
    // 0x6df3 (UTF-16BE)
    if (argCheck == '淳') {
        return true;
    }
    // No.1860
    // 説明:8f80
    // 0x8f80 (Windows-31J)
    // 0x6e96 (UTF-16BE)
    if (argCheck == '準') {
        return true;
    }
    // No.1861
    // 説明:8f81
    // 0x8f81 (Windows-31J)
    // 0x6f64 (UTF-16BE)
    if (argCheck == '潤') {
        return true;
    }
    // No.1862
    // 説明:8f82
    // 0x8f82 (Windows-31J)
    // 0x76fe (UTF-16BE)
    if (argCheck == '盾') {
        return true;
    }
    // No.1863
    // 説明:8f83
    // 0x8f83 (Windows-31J)
    // 0x7d14 (UTF-16BE)
    if (argCheck == '純') {
        return true;
    }
    // No.1864
    // 説明:8f84
    // 0x8f84 (Windows-31J)
    // 0x5de1 (UTF-16BE)
    if (argCheck == '巡') {
        return true;
    }
    // No.1865
    // 説明:8f85
    // 0x8f85 (Windows-31J)
    // 0x9075 (UTF-16BE)
    if (argCheck == '遵') {
        return true;
    }
    // No.1866
    // 説明:8f86
    // 0x8f86 (Windows-31J)
    // 0x9187 (UTF-16BE)
    if (argCheck == '醇') {
        return true;
    }
    // No.1867
    // 説明:8f87
    // 0x8f87 (Windows-31J)
    // 0x9806 (UTF-16BE)
    if (argCheck == '順') {
        return true;
    }
    // No.1868
    // 説明:8f88
    // 0x8f88 (Windows-31J)
    // 0x51e6 (UTF-16BE)
    if (argCheck == '処') {
        return true;
    }
    // No.1869
    // 説明:8f89
    // 0x8f89 (Windows-31J)
    // 0x521d (UTF-16BE)
    if (argCheck == '初') {
        return true;
    }
    // No.1870
    // 説明:8f8a
    // 0x8f8a (Windows-31J)
    // 0x6240 (UTF-16BE)
    if (argCheck == '所') {
        return true;
    }
    // No.1871
    // 説明:8f8b
    // 0x8f8b (Windows-31J)
    // 0x6691 (UTF-16BE)
    if (argCheck == '暑') {
        return true;
    }
    // No.1872
    // 説明:8f8c
    // 0x8f8c (Windows-31J)
    // 0x66d9 (UTF-16BE)
    if (argCheck == '曙') {
        return true;
    }
    // No.1873
    // 説明:8f8d
    // 0x8f8d (Windows-31J)
    // 0x6e1a (UTF-16BE)
    if (argCheck == '渚') {
        return true;
    }
    // No.1874
    // 説明:8f8e
    // 0x8f8e (Windows-31J)
    // 0x5eb6 (UTF-16BE)
    if (argCheck == '庶') {
        return true;
    }
    // No.1875
    // 説明:8f8f
    // 0x8f8f (Windows-31J)
    // 0x7dd2 (UTF-16BE)
    if (argCheck == '緒') {
        return true;
    }
    // No.1876
    // 説明:8f90
    // 0x8f90 (Windows-31J)
    // 0x7f72 (UTF-16BE)
    if (argCheck == '署') {
        return true;
    }
    // No.1877
    // 説明:8f91
    // 0x8f91 (Windows-31J)
    // 0x66f8 (UTF-16BE)
    if (argCheck == '書') {
        return true;
    }
    // No.1878
    // 説明:8f92
    // 0x8f92 (Windows-31J)
    // 0x85af (UTF-16BE)
    if (argCheck == '薯') {
        return true;
    }
    // No.1879
    // 説明:8f93
    // 0x8f93 (Windows-31J)
    // 0x85f7 (UTF-16BE)
    if (argCheck == '藷') {
        return true;
    }
    // No.1880
    // 説明:8f94
    // 0x8f94 (Windows-31J)
    // 0x8af8 (UTF-16BE)
    if (argCheck == '諸') {
        return true;
    }
    // No.1881
    // 説明:8f95
    // 0x8f95 (Windows-31J)
    // 0x52a9 (UTF-16BE)
    if (argCheck == '助') {
        return true;
    }
    // No.1882
    // 説明:8f96
    // 0x8f96 (Windows-31J)
    // 0x53d9 (UTF-16BE)
    if (argCheck == '叙') {
        return true;
    }
    // No.1883
    // 説明:8f97
    // 0x8f97 (Windows-31J)
    // 0x5973 (UTF-16BE)
    if (argCheck == '女') {
        return true;
    }
    // No.1884
    // 説明:8f98
    // 0x8f98 (Windows-31J)
    // 0x5e8f (UTF-16BE)
    if (argCheck == '序') {
        return true;
    }
    // No.1885
    // 説明:8f99
    // 0x8f99 (Windows-31J)
    // 0x5f90 (UTF-16BE)
    if (argCheck == '徐') {
        return true;
    }
    // No.1886
    // 説明:8f9a
    // 0x8f9a (Windows-31J)
    // 0x6055 (UTF-16BE)
    if (argCheck == '恕') {
        return true;
    }
    // No.1887
    // 説明:8f9b
    // 0x8f9b (Windows-31J)
    // 0x92e4 (UTF-16BE)
    if (argCheck == '鋤') {
        return true;
    }
    // No.1888
    // 説明:8f9c
    // 0x8f9c (Windows-31J)
    // 0x9664 (UTF-16BE)
    if (argCheck == '除') {
        return true;
    }
    // No.1889
    // 説明:8f9d
    // 0x8f9d (Windows-31J)
    // 0x50b7 (UTF-16BE)
    if (argCheck == '傷') {
        return true;
    }
    // No.1890
    // 説明:8f9e
    // 0x8f9e (Windows-31J)
    // 0x511f (UTF-16BE)
    if (argCheck == '償') {
        return true;
    }
    // No.1891
    // 説明:8f9f
    // 0x8f9f (Windows-31J)
    // 0x52dd (UTF-16BE)
    if (argCheck == '勝') {
        return true;
    }
    // No.1892
    // 説明:8fa0
    // 0x8fa0 (Windows-31J)
    // 0x5320 (UTF-16BE)
    if (argCheck == '匠') {
        return true;
    }
    // No.1893
    // 説明:8fa1
    // 0x8fa1 (Windows-31J)
    // 0x5347 (UTF-16BE)
    if (argCheck == '升') {
        return true;
    }
    // No.1894
    // 説明:8fa2
    // 0x8fa2 (Windows-31J)
    // 0x53ec (UTF-16BE)
    if (argCheck == '召') {
        return true;
    }
    // No.1895
    // 説明:8fa3
    // 0x8fa3 (Windows-31J)
    // 0x54e8 (UTF-16BE)
    if (argCheck == '哨') {
        return true;
    }
    // No.1896
    // 説明:8fa4
    // 0x8fa4 (Windows-31J)
    // 0x5546 (UTF-16BE)
    if (argCheck == '商') {
        return true;
    }
    // No.1897
    // 説明:8fa5
    // 0x8fa5 (Windows-31J)
    // 0x5531 (UTF-16BE)
    if (argCheck == '唱') {
        return true;
    }
    // No.1898
    // 説明:8fa6
    // 0x8fa6 (Windows-31J)
    // 0x5617 (UTF-16BE)
    if (argCheck == '嘗') {
        return true;
    }
    // No.1899
    // 説明:8fa7
    // 0x8fa7 (Windows-31J)
    // 0x5968 (UTF-16BE)
    if (argCheck == '奨') {
        return true;
    }
    // No.1900
    // 説明:8fa8
    // 0x8fa8 (Windows-31J)
    // 0x59be (UTF-16BE)
    if (argCheck == '妾') {
        return true;
    }
    // No.1901
    // 説明:8fa9
    // 0x8fa9 (Windows-31J)
    // 0x5a3c (UTF-16BE)
    if (argCheck == '娼') {
        return true;
    }
    // No.1902
    // 説明:8faa
    // 0x8faa (Windows-31J)
    // 0x5bb5 (UTF-16BE)
    if (argCheck == '宵') {
        return true;
    }
    // No.1903
    // 説明:8fab
    // 0x8fab (Windows-31J)
    // 0x5c06 (UTF-16BE)
    if (argCheck == '将') {
        return true;
    }
    // No.1904
    // 説明:8fac
    // 0x8fac (Windows-31J)
    // 0x5c0f (UTF-16BE)
    if (argCheck == '小') {
        return true;
    }
    // No.1905
    // 説明:8fad
    // 0x8fad (Windows-31J)
    // 0x5c11 (UTF-16BE)
    if (argCheck == '少') {
        return true;
    }
    // No.1906
    // 説明:8fae
    // 0x8fae (Windows-31J)
    // 0x5c1a (UTF-16BE)
    if (argCheck == '尚') {
        return true;
    }
    // No.1907
    // 説明:8faf
    // 0x8faf (Windows-31J)
    // 0x5e84 (UTF-16BE)
    if (argCheck == '庄') {
        return true;
    }
    // No.1908
    // 説明:8fb0
    // 0x8fb0 (Windows-31J)
    // 0x5e8a (UTF-16BE)
    if (argCheck == '床') {
        return true;
    }
    // No.1909
    // 説明:8fb1
    // 0x8fb1 (Windows-31J)
    // 0x5ee0 (UTF-16BE)
    if (argCheck == '廠') {
        return true;
    }
    // No.1910
    // 説明:8fb2
    // 0x8fb2 (Windows-31J)
    // 0x5f70 (UTF-16BE)
    if (argCheck == '彰') {
        return true;
    }
    // No.1911
    // 説明:8fb3
    // 0x8fb3 (Windows-31J)
    // 0x627f (UTF-16BE)
    if (argCheck == '承') {
        return true;
    }
    // No.1912
    // 説明:8fb4
    // 0x8fb4 (Windows-31J)
    // 0x6284 (UTF-16BE)
    if (argCheck == '抄') {
        return true;
    }
    // No.1913
    // 説明:8fb5
    // 0x8fb5 (Windows-31J)
    // 0x62db (UTF-16BE)
    if (argCheck == '招') {
        return true;
    }
    // No.1914
    // 説明:8fb6
    // 0x8fb6 (Windows-31J)
    // 0x638c (UTF-16BE)
    if (argCheck == '掌') {
        return true;
    }
    // No.1915
    // 説明:8fb7
    // 0x8fb7 (Windows-31J)
    // 0x6377 (UTF-16BE)
    if (argCheck == '捷') {
        return true;
    }
    // No.1916
    // 説明:8fb8
    // 0x8fb8 (Windows-31J)
    // 0x6607 (UTF-16BE)
    if (argCheck == '昇') {
        return true;
    }
    // No.1917
    // 説明:8fb9
    // 0x8fb9 (Windows-31J)
    // 0x660c (UTF-16BE)
    if (argCheck == '昌') {
        return true;
    }
    // No.1918
    // 説明:8fba
    // 0x8fba (Windows-31J)
    // 0x662d (UTF-16BE)
    if (argCheck == '昭') {
        return true;
    }
    // No.1919
    // 説明:8fbb
    // 0x8fbb (Windows-31J)
    // 0x6676 (UTF-16BE)
    if (argCheck == '晶') {
        return true;
    }
    // No.1920
    // 説明:8fbc
    // 0x8fbc (Windows-31J)
    // 0x677e (UTF-16BE)
    if (argCheck == '松') {
        return true;
    }
    // No.1921
    // 説明:8fbd
    // 0x8fbd (Windows-31J)
    // 0x68a2 (UTF-16BE)
    if (argCheck == '梢') {
        return true;
    }
    // No.1922
    // 説明:8fbe
    // 0x8fbe (Windows-31J)
    // 0x6a1f (UTF-16BE)
    if (argCheck == '樟') {
        return true;
    }
    // No.1923
    // 説明:8fbf
    // 0x8fbf (Windows-31J)
    // 0x6a35 (UTF-16BE)
    if (argCheck == '樵') {
        return true;
    }
    // No.1924
    // 説明:8fc0
    // 0x8fc0 (Windows-31J)
    // 0x6cbc (UTF-16BE)
    if (argCheck == '沼') {
        return true;
    }
    // No.1925
    // 説明:8fc1
    // 0x8fc1 (Windows-31J)
    // 0x6d88 (UTF-16BE)
    if (argCheck == '消') {
        return true;
    }
    // No.1926
    // 説明:8fc2
    // 0x8fc2 (Windows-31J)
    // 0x6e09 (UTF-16BE)
    if (argCheck == '渉') {
        return true;
    }
    // No.1927
    // 説明:8fc3
    // 0x8fc3 (Windows-31J)
    // 0x6e58 (UTF-16BE)
    if (argCheck == '湘') {
        return true;
    }
    // No.1928
    // 説明:8fc4
    // 0x8fc4 (Windows-31J)
    // 0x713c (UTF-16BE)
    if (argCheck == '焼') {
        return true;
    }
    // No.1929
    // 説明:8fc5
    // 0x8fc5 (Windows-31J)
    // 0x7126 (UTF-16BE)
    if (argCheck == '焦') {
        return true;
    }
    // No.1930
    // 説明:8fc6
    // 0x8fc6 (Windows-31J)
    // 0x7167 (UTF-16BE)
    if (argCheck == '照') {
        return true;
    }
    // No.1931
    // 説明:8fc7
    // 0x8fc7 (Windows-31J)
    // 0x75c7 (UTF-16BE)
    if (argCheck == '症') {
        return true;
    }
    // No.1932
    // 説明:8fc8
    // 0x8fc8 (Windows-31J)
    // 0x7701 (UTF-16BE)
    if (argCheck == '省') {
        return true;
    }
    // No.1933
    // 説明:8fc9
    // 0x8fc9 (Windows-31J)
    // 0x785d (UTF-16BE)
    if (argCheck == '硝') {
        return true;
    }
    // No.1934
    // 説明:8fca
    // 0x8fca (Windows-31J)
    // 0x7901 (UTF-16BE)
    if (argCheck == '礁') {
        return true;
    }
    // No.1935
    // 説明:8fcb
    // 0x8fcb (Windows-31J)
    // 0x7965 (UTF-16BE)
    if (argCheck == '祥') {
        return true;
    }
    // No.1936
    // 説明:8fcc
    // 0x8fcc (Windows-31J)
    // 0x79f0 (UTF-16BE)
    if (argCheck == '称') {
        return true;
    }
    // No.1937
    // 説明:8fcd
    // 0x8fcd (Windows-31J)
    // 0x7ae0 (UTF-16BE)
    if (argCheck == '章') {
        return true;
    }
    // No.1938
    // 説明:8fce
    // 0x8fce (Windows-31J)
    // 0x7b11 (UTF-16BE)
    if (argCheck == '笑') {
        return true;
    }
    // No.1939
    // 説明:8fcf
    // 0x8fcf (Windows-31J)
    // 0x7ca7 (UTF-16BE)
    if (argCheck == '粧') {
        return true;
    }
    // No.1940
    // 説明:8fd0
    // 0x8fd0 (Windows-31J)
    // 0x7d39 (UTF-16BE)
    if (argCheck == '紹') {
        return true;
    }
    // No.1941
    // 説明:8fd1
    // 0x8fd1 (Windows-31J)
    // 0x8096 (UTF-16BE)
    if (argCheck == '肖') {
        return true;
    }
    // No.1942
    // 説明:8fd2
    // 0x8fd2 (Windows-31J)
    // 0x83d6 (UTF-16BE)
    if (argCheck == '菖') {
        return true;
    }
    // No.1943
    // 説明:8fd3
    // 0x8fd3 (Windows-31J)
    // 0x848b (UTF-16BE)
    if (argCheck == '蒋') {
        return true;
    }
    // No.1944
    // 説明:8fd4
    // 0x8fd4 (Windows-31J)
    // 0x8549 (UTF-16BE)
    if (argCheck == '蕉') {
        return true;
    }
    // No.1945
    // 説明:8fd5
    // 0x8fd5 (Windows-31J)
    // 0x885d (UTF-16BE)
    if (argCheck == '衝') {
        return true;
    }
    // No.1946
    // 説明:8fd6
    // 0x8fd6 (Windows-31J)
    // 0x88f3 (UTF-16BE)
    if (argCheck == '裳') {
        return true;
    }
    // No.1947
    // 説明:8fd7
    // 0x8fd7 (Windows-31J)
    // 0x8a1f (UTF-16BE)
    if (argCheck == '訟') {
        return true;
    }
    // No.1948
    // 説明:8fd8
    // 0x8fd8 (Windows-31J)
    // 0x8a3c (UTF-16BE)
    if (argCheck == '証') {
        return true;
    }
    // No.1949
    // 説明:8fd9
    // 0x8fd9 (Windows-31J)
    // 0x8a54 (UTF-16BE)
    if (argCheck == '詔') {
        return true;
    }
    // No.1950
    // 説明:8fda
    // 0x8fda (Windows-31J)
    // 0x8a73 (UTF-16BE)
    if (argCheck == '詳') {
        return true;
    }
    // No.1951
    // 説明:8fdb
    // 0x8fdb (Windows-31J)
    // 0x8c61 (UTF-16BE)
    if (argCheck == '象') {
        return true;
    }
    // No.1952
    // 説明:8fdc
    // 0x8fdc (Windows-31J)
    // 0x8cde (UTF-16BE)
    if (argCheck == '賞') {
        return true;
    }
    // No.1953
    // 説明:8fdd
    // 0x8fdd (Windows-31J)
    // 0x91a4 (UTF-16BE)
    if (argCheck == '醤') {
        return true;
    }
    // No.1954
    // 説明:8fde
    // 0x8fde (Windows-31J)
    // 0x9266 (UTF-16BE)
    if (argCheck == '鉦') {
        return true;
    }
    // No.1955
    // 説明:8fdf
    // 0x8fdf (Windows-31J)
    // 0x937e (UTF-16BE)
    if (argCheck == '鍾') {
        return true;
    }
    // No.1956
    // 説明:8fe0
    // 0x8fe0 (Windows-31J)
    // 0x9418 (UTF-16BE)
    if (argCheck == '鐘') {
        return true;
    }
    // No.1957
    // 説明:8fe1
    // 0x8fe1 (Windows-31J)
    // 0x969c (UTF-16BE)
    if (argCheck == '障') {
        return true;
    }
    // No.1958
    // 説明:8fe2
    // 0x8fe2 (Windows-31J)
    // 0x9798 (UTF-16BE)
    if (argCheck == '鞘') {
        return true;
    }
    // No.1959
    // 説明:8fe3
    // 0x8fe3 (Windows-31J)
    // 0x4e0a (UTF-16BE)
    if (argCheck == '上') {
        return true;
    }
    // No.1960
    // 説明:8fe4
    // 0x8fe4 (Windows-31J)
    // 0x4e08 (UTF-16BE)
    if (argCheck == '丈') {
        return true;
    }
    // No.1961
    // 説明:8fe5
    // 0x8fe5 (Windows-31J)
    // 0x4e1e (UTF-16BE)
    if (argCheck == '丞') {
        return true;
    }
    // No.1962
    // 説明:8fe6
    // 0x8fe6 (Windows-31J)
    // 0x4e57 (UTF-16BE)
    if (argCheck == '乗') {
        return true;
    }
    // No.1963
    // 説明:8fe7
    // 0x8fe7 (Windows-31J)
    // 0x5197 (UTF-16BE)
    if (argCheck == '冗') {
        return true;
    }
    // No.1964
    // 説明:8fe8
    // 0x8fe8 (Windows-31J)
    // 0x5270 (UTF-16BE)
    if (argCheck == '剰') {
        return true;
    }
    // No.1965
    // 説明:8fe9
    // 0x8fe9 (Windows-31J)
    // 0x57ce (UTF-16BE)
    if (argCheck == '城') {
        return true;
    }
    // No.1966
    // 説明:8fea
    // 0x8fea (Windows-31J)
    // 0x5834 (UTF-16BE)
    if (argCheck == '場') {
        return true;
    }
    // No.1967
    // 説明:8feb
    // 0x8feb (Windows-31J)
    // 0x58cc (UTF-16BE)
    if (argCheck == '壌') {
        return true;
    }
    // No.1968
    // 説明:8fec
    // 0x8fec (Windows-31J)
    // 0x5b22 (UTF-16BE)
    if (argCheck == '嬢') {
        return true;
    }
    // No.1969
    // 説明:8fed
    // 0x8fed (Windows-31J)
    // 0x5e38 (UTF-16BE)
    if (argCheck == '常') {
        return true;
    }
    // No.1970
    // 説明:8fee
    // 0x8fee (Windows-31J)
    // 0x60c5 (UTF-16BE)
    if (argCheck == '情') {
        return true;
    }
    // No.1971
    // 説明:8fef
    // 0x8fef (Windows-31J)
    // 0x64fe (UTF-16BE)
    if (argCheck == '擾') {
        return true;
    }
    // No.1972
    // 説明:8ff0
    // 0x8ff0 (Windows-31J)
    // 0x6761 (UTF-16BE)
    if (argCheck == '条') {
        return true;
    }
    // No.1973
    // 説明:8ff1
    // 0x8ff1 (Windows-31J)
    // 0x6756 (UTF-16BE)
    if (argCheck == '杖') {
        return true;
    }
    // No.1974
    // 説明:8ff2
    // 0x8ff2 (Windows-31J)
    // 0x6d44 (UTF-16BE)
    if (argCheck == '浄') {
        return true;
    }
    // No.1975
    // 説明:8ff3
    // 0x8ff3 (Windows-31J)
    // 0x72b6 (UTF-16BE)
    if (argCheck == '状') {
        return true;
    }
    // No.1976
    // 説明:8ff4
    // 0x8ff4 (Windows-31J)
    // 0x7573 (UTF-16BE)
    if (argCheck == '畳') {
        return true;
    }
    // No.1977
    // 説明:8ff5
    // 0x8ff5 (Windows-31J)
    // 0x7a63 (UTF-16BE)
    if (argCheck == '穣') {
        return true;
    }
    // No.1978
    // 説明:8ff6
    // 0x8ff6 (Windows-31J)
    // 0x84b8 (UTF-16BE)
    if (argCheck == '蒸') {
        return true;
    }
    // No.1979
    // 説明:8ff7
    // 0x8ff7 (Windows-31J)
    // 0x8b72 (UTF-16BE)
    if (argCheck == '譲') {
        return true;
    }
    // No.1980
    // 説明:8ff8
    // 0x8ff8 (Windows-31J)
    // 0x91b8 (UTF-16BE)
    if (argCheck == '醸') {
        return true;
    }
    // No.1981
    // 説明:8ff9
    // 0x8ff9 (Windows-31J)
    // 0x9320 (UTF-16BE)
    if (argCheck == '錠') {
        return true;
    }
    // No.1982
    // 説明:8ffa
    // 0x8ffa (Windows-31J)
    // 0x5631 (UTF-16BE)
    if (argCheck == '嘱') {
        return true;
    }
    // No.1983
    // 説明:8ffb
    // 0x8ffb (Windows-31J)
    // 0x57f4 (UTF-16BE)
    if (argCheck == '埴') {
        return true;
    }
    // No.1984
    // 説明:8ffc
    // 0x8ffc (Windows-31J)
    // 0x98fe (UTF-16BE)
    if (argCheck == '飾') {
        return true;
    }
    // No.1985
    // 説明:9040
    // 0x9040 (Windows-31J)
    // 0x62ed (UTF-16BE)
    if (argCheck == '拭') {
        return true;
    }
    // No.1986
    // 説明:9041
    // 0x9041 (Windows-31J)
    // 0x690d (UTF-16BE)
    if (argCheck == '植') {
        return true;
    }
    // No.1987
    // 説明:9042
    // 0x9042 (Windows-31J)
    // 0x6b96 (UTF-16BE)
    if (argCheck == '殖') {
        return true;
    }
    // No.1988
    // 説明:9043
    // 0x9043 (Windows-31J)
    // 0x71ed (UTF-16BE)
    if (argCheck == '燭') {
        return true;
    }
    // No.1989
    // 説明:9044
    // 0x9044 (Windows-31J)
    // 0x7e54 (UTF-16BE)
    if (argCheck == '織') {
        return true;
    }
    // No.1990
    // 説明:9045
    // 0x9045 (Windows-31J)
    // 0x8077 (UTF-16BE)
    if (argCheck == '職') {
        return true;
    }
    // No.1991
    // 説明:9046
    // 0x9046 (Windows-31J)
    // 0x8272 (UTF-16BE)
    if (argCheck == '色') {
        return true;
    }
    // No.1992
    // 説明:9047
    // 0x9047 (Windows-31J)
    // 0x89e6 (UTF-16BE)
    if (argCheck == '触') {
        return true;
    }
    // No.1993
    // 説明:9048
    // 0x9048 (Windows-31J)
    // 0x98df (UTF-16BE)
    if (argCheck == '食') {
        return true;
    }
    // No.1994
    // 説明:9049
    // 0x9049 (Windows-31J)
    // 0x8755 (UTF-16BE)
    if (argCheck == '蝕') {
        return true;
    }
    // No.1995
    // 説明:904a
    // 0x904a (Windows-31J)
    // 0x8fb1 (UTF-16BE)
    if (argCheck == '辱') {
        return true;
    }
    // No.1996
    // 説明:904b
    // 0x904b (Windows-31J)
    // 0x5c3b (UTF-16BE)
    if (argCheck == '尻') {
        return true;
    }
    // No.1997
    // 説明:904c
    // 0x904c (Windows-31J)
    // 0x4f38 (UTF-16BE)
    if (argCheck == '伸') {
        return true;
    }
    // No.1998
    // 説明:904d
    // 0x904d (Windows-31J)
    // 0x4fe1 (UTF-16BE)
    if (argCheck == '信') {
        return true;
    }
    // No.1999
    // 説明:904e
    // 0x904e (Windows-31J)
    // 0x4fb5 (UTF-16BE)
    if (argCheck == '侵') {
        return true;
    }
    // No.2000
    // 説明:904f
    // 0x904f (Windows-31J)
    // 0x5507 (UTF-16BE)
    if (argCheck == '唇') {
        return true;
    }
    // No.2001
    // 説明:9050
    // 0x9050 (Windows-31J)
    // 0x5a20 (UTF-16BE)
    if (argCheck == '娠') {
        return true;
    }
    // No.2002
    // 説明:9051
    // 0x9051 (Windows-31J)
    // 0x5bdd (UTF-16BE)
    if (argCheck == '寝') {
        return true;
    }
    // No.2003
    // 説明:9052
    // 0x9052 (Windows-31J)
    // 0x5be9 (UTF-16BE)
    if (argCheck == '審') {
        return true;
    }
    // No.2004
    // 説明:9053
    // 0x9053 (Windows-31J)
    // 0x5fc3 (UTF-16BE)
    if (argCheck == '心') {
        return true;
    }
    // No.2005
    // 説明:9054
    // 0x9054 (Windows-31J)
    // 0x614e (UTF-16BE)
    if (argCheck == '慎') {
        return true;
    }
    // No.2006
    // 説明:9055
    // 0x9055 (Windows-31J)
    // 0x632f (UTF-16BE)
    if (argCheck == '振') {
        return true;
    }
    // No.2007
    // 説明:9056
    // 0x9056 (Windows-31J)
    // 0x65b0 (UTF-16BE)
    if (argCheck == '新') {
        return true;
    }
    // No.2008
    // 説明:9057
    // 0x9057 (Windows-31J)
    // 0x664b (UTF-16BE)
    if (argCheck == '晋') {
        return true;
    }
    // No.2009
    // 説明:9058
    // 0x9058 (Windows-31J)
    // 0x68ee (UTF-16BE)
    if (argCheck == '森') {
        return true;
    }
    // No.2010
    // 説明:9059
    // 0x9059 (Windows-31J)
    // 0x699b (UTF-16BE)
    if (argCheck == '榛') {
        return true;
    }
    // No.2011
    // 説明:905a
    // 0x905a (Windows-31J)
    // 0x6d78 (UTF-16BE)
    if (argCheck == '浸') {
        return true;
    }
    // No.2012
    // 説明:905b
    // 0x905b (Windows-31J)
    // 0x6df1 (UTF-16BE)
    if (argCheck == '深') {
        return true;
    }
    // No.2013
    // 説明:905c
    // 0x905c (Windows-31J)
    // 0x7533 (UTF-16BE)
    if (argCheck == '申') {
        return true;
    }
    // No.2014
    // 説明:905d
    // 0x905d (Windows-31J)
    // 0x75b9 (UTF-16BE)
    if (argCheck == '疹') {
        return true;
    }
    // No.2015
    // 説明:905e
    // 0x905e (Windows-31J)
    // 0x771f (UTF-16BE)
    if (argCheck == '真') {
        return true;
    }
    // No.2016
    // 説明:905f
    // 0x905f (Windows-31J)
    // 0x795e (UTF-16BE)
    if (argCheck == '神') {
        return true;
    }
    // No.2017
    // 説明:9060
    // 0x9060 (Windows-31J)
    // 0x79e6 (UTF-16BE)
    if (argCheck == '秦') {
        return true;
    }
    // No.2018
    // 説明:9061
    // 0x9061 (Windows-31J)
    // 0x7d33 (UTF-16BE)
    if (argCheck == '紳') {
        return true;
    }
    // No.2019
    // 説明:9062
    // 0x9062 (Windows-31J)
    // 0x81e3 (UTF-16BE)
    if (argCheck == '臣') {
        return true;
    }
    // No.2020
    // 説明:9063
    // 0x9063 (Windows-31J)
    // 0x82af (UTF-16BE)
    if (argCheck == '芯') {
        return true;
    }
    // No.2021
    // 説明:9064
    // 0x9064 (Windows-31J)
    // 0x85aa (UTF-16BE)
    if (argCheck == '薪') {
        return true;
    }
    // No.2022
    // 説明:9065
    // 0x9065 (Windows-31J)
    // 0x89aa (UTF-16BE)
    if (argCheck == '親') {
        return true;
    }
    // No.2023
    // 説明:9066
    // 0x9066 (Windows-31J)
    // 0x8a3a (UTF-16BE)
    if (argCheck == '診') {
        return true;
    }
    // No.2024
    // 説明:9067
    // 0x9067 (Windows-31J)
    // 0x8eab (UTF-16BE)
    if (argCheck == '身') {
        return true;
    }
    // No.2025
    // 説明:9068
    // 0x9068 (Windows-31J)
    // 0x8f9b (UTF-16BE)
    if (argCheck == '辛') {
        return true;
    }
    // No.2026
    // 説明:9069
    // 0x9069 (Windows-31J)
    // 0x9032 (UTF-16BE)
    if (argCheck == '進') {
        return true;
    }
    // No.2027
    // 説明:906a
    // 0x906a (Windows-31J)
    // 0x91dd (UTF-16BE)
    if (argCheck == '針') {
        return true;
    }
    // No.2028
    // 説明:906b
    // 0x906b (Windows-31J)
    // 0x9707 (UTF-16BE)
    if (argCheck == '震') {
        return true;
    }
    // No.2029
    // 説明:906c
    // 0x906c (Windows-31J)
    // 0x4eba (UTF-16BE)
    if (argCheck == '人') {
        return true;
    }
    // No.2030
    // 説明:906d
    // 0x906d (Windows-31J)
    // 0x4ec1 (UTF-16BE)
    if (argCheck == '仁') {
        return true;
    }
    // No.2031
    // 説明:906e
    // 0x906e (Windows-31J)
    // 0x5203 (UTF-16BE)
    if (argCheck == '刃') {
        return true;
    }
    // No.2032
    // 説明:906f
    // 0x906f (Windows-31J)
    // 0x5875 (UTF-16BE)
    if (argCheck == '塵') {
        return true;
    }
    // No.2033
    // 説明:9070
    // 0x9070 (Windows-31J)
    // 0x58ec (UTF-16BE)
    if (argCheck == '壬') {
        return true;
    }
    // No.2034
    // 説明:9071
    // 0x9071 (Windows-31J)
    // 0x5c0b (UTF-16BE)
    if (argCheck == '尋') {
        return true;
    }
    // No.2035
    // 説明:9072
    // 0x9072 (Windows-31J)
    // 0x751a (UTF-16BE)
    if (argCheck == '甚') {
        return true;
    }
    // No.2036
    // 説明:9073
    // 0x9073 (Windows-31J)
    // 0x5c3d (UTF-16BE)
    if (argCheck == '尽') {
        return true;
    }
    // No.2037
    // 説明:9074
    // 0x9074 (Windows-31J)
    // 0x814e (UTF-16BE)
    if (argCheck == '腎') {
        return true;
    }
    // No.2038
    // 説明:9075
    // 0x9075 (Windows-31J)
    // 0x8a0a (UTF-16BE)
    if (argCheck == '訊') {
        return true;
    }
    // No.2039
    // 説明:9076
    // 0x9076 (Windows-31J)
    // 0x8fc5 (UTF-16BE)
    if (argCheck == '迅') {
        return true;
    }
    // No.2040
    // 説明:9077
    // 0x9077 (Windows-31J)
    // 0x9663 (UTF-16BE)
    if (argCheck == '陣') {
        return true;
    }
    // No.2041
    // 説明:9078
    // 0x9078 (Windows-31J)
    // 0x976d (UTF-16BE)
    if (argCheck == '靭') {
        return true;
    }
    // No.2042
    // 説明:9079
    // 0x9079 (Windows-31J)
    // 0x7b25 (UTF-16BE)
    if (argCheck == '笥') {
        return true;
    }
    // No.2043
    // 説明:907a
    // 0x907a (Windows-31J)
    // 0x8acf (UTF-16BE)
    if (argCheck == '諏') {
        return true;
    }
    // No.2044
    // 説明:907b
    // 0x907b (Windows-31J)
    // 0x9808 (UTF-16BE)
    if (argCheck == '須') {
        return true;
    }
    // No.2045
    // 説明:907c
    // 0x907c (Windows-31J)
    // 0x9162 (UTF-16BE)
    if (argCheck == '酢') {
        return true;
    }
    // No.2046
    // 説明:907d
    // 0x907d (Windows-31J)
    // 0x56f3 (UTF-16BE)
    if (argCheck == '図') {
        return true;
    }
    // No.2047
    // 説明:907e
    // 0x907e (Windows-31J)
    // 0x53a8 (UTF-16BE)
    if (argCheck == '厨') {
        return true;
    }
    // No.2048
    // 説明:9080
    // 0x9080 (Windows-31J)
    // 0x9017 (UTF-16BE)
    if (argCheck == '逗') {
        return true;
    }
    // No.2049
    // 説明:9081
    // 0x9081 (Windows-31J)
    // 0x5439 (UTF-16BE)
    if (argCheck == '吹') {
        return true;
    }
    // No.2050
    // 説明:9082
    // 0x9082 (Windows-31J)
    // 0x5782 (UTF-16BE)
    if (argCheck == '垂') {
        return true;
    }
    // No.2051
    // 説明:9083
    // 0x9083 (Windows-31J)
    // 0x5e25 (UTF-16BE)
    if (argCheck == '帥') {
        return true;
    }
    // No.2052
    // 説明:9084
    // 0x9084 (Windows-31J)
    // 0x63a8 (UTF-16BE)
    if (argCheck == '推') {
        return true;
    }
    // No.2053
    // 説明:9085
    // 0x9085 (Windows-31J)
    // 0x6c34 (UTF-16BE)
    if (argCheck == '水') {
        return true;
    }
    // No.2054
    // 説明:9086
    // 0x9086 (Windows-31J)
    // 0x708a (UTF-16BE)
    if (argCheck == '炊') {
        return true;
    }
    // No.2055
    // 説明:9087
    // 0x9087 (Windows-31J)
    // 0x7761 (UTF-16BE)
    if (argCheck == '睡') {
        return true;
    }
    // No.2056
    // 説明:9088
    // 0x9088 (Windows-31J)
    // 0x7c8b (UTF-16BE)
    if (argCheck == '粋') {
        return true;
    }
    // No.2057
    // 説明:9089
    // 0x9089 (Windows-31J)
    // 0x7fe0 (UTF-16BE)
    if (argCheck == '翠') {
        return true;
    }
    // No.2058
    // 説明:908a
    // 0x908a (Windows-31J)
    // 0x8870 (UTF-16BE)
    if (argCheck == '衰') {
        return true;
    }
    // No.2059
    // 説明:908b
    // 0x908b (Windows-31J)
    // 0x9042 (UTF-16BE)
    if (argCheck == '遂') {
        return true;
    }
    // No.2060
    // 説明:908c
    // 0x908c (Windows-31J)
    // 0x9154 (UTF-16BE)
    if (argCheck == '酔') {
        return true;
    }
    // No.2061
    // 説明:908d
    // 0x908d (Windows-31J)
    // 0x9310 (UTF-16BE)
    if (argCheck == '錐') {
        return true;
    }
    // No.2062
    // 説明:908e
    // 0x908e (Windows-31J)
    // 0x9318 (UTF-16BE)
    if (argCheck == '錘') {
        return true;
    }
    // No.2063
    // 説明:908f
    // 0x908f (Windows-31J)
    // 0x968f (UTF-16BE)
    if (argCheck == '随') {
        return true;
    }
    // No.2064
    // 説明:9090
    // 0x9090 (Windows-31J)
    // 0x745e (UTF-16BE)
    if (argCheck == '瑞') {
        return true;
    }
    // No.2065
    // 説明:9091
    // 0x9091 (Windows-31J)
    // 0x9ac4 (UTF-16BE)
    if (argCheck == '髄') {
        return true;
    }
    // No.2066
    // 説明:9092
    // 0x9092 (Windows-31J)
    // 0x5d07 (UTF-16BE)
    if (argCheck == '崇') {
        return true;
    }
    // No.2067
    // 説明:9093
    // 0x9093 (Windows-31J)
    // 0x5d69 (UTF-16BE)
    if (argCheck == '嵩') {
        return true;
    }
    // No.2068
    // 説明:9094
    // 0x9094 (Windows-31J)
    // 0x6570 (UTF-16BE)
    if (argCheck == '数') {
        return true;
    }
    // No.2069
    // 説明:9095
    // 0x9095 (Windows-31J)
    // 0x67a2 (UTF-16BE)
    if (argCheck == '枢') {
        return true;
    }
    // No.2070
    // 説明:9096
    // 0x9096 (Windows-31J)
    // 0x8da8 (UTF-16BE)
    if (argCheck == '趨') {
        return true;
    }
    // No.2071
    // 説明:9097
    // 0x9097 (Windows-31J)
    // 0x96db (UTF-16BE)
    if (argCheck == '雛') {
        return true;
    }
    // No.2072
    // 説明:9098
    // 0x9098 (Windows-31J)
    // 0x636e (UTF-16BE)
    if (argCheck == '据') {
        return true;
    }
    // No.2073
    // 説明:9099
    // 0x9099 (Windows-31J)
    // 0x6749 (UTF-16BE)
    if (argCheck == '杉') {
        return true;
    }
    // No.2074
    // 説明:909a
    // 0x909a (Windows-31J)
    // 0x6919 (UTF-16BE)
    if (argCheck == '椙') {
        return true;
    }
    // No.2075
    // 説明:909b
    // 0x909b (Windows-31J)
    // 0x83c5 (UTF-16BE)
    if (argCheck == '菅') {
        return true;
    }
    // No.2076
    // 説明:909c
    // 0x909c (Windows-31J)
    // 0x9817 (UTF-16BE)
    if (argCheck == '頗') {
        return true;
    }
    // No.2077
    // 説明:909d
    // 0x909d (Windows-31J)
    // 0x96c0 (UTF-16BE)
    if (argCheck == '雀') {
        return true;
    }
    // No.2078
    // 説明:909e
    // 0x909e (Windows-31J)
    // 0x88fe (UTF-16BE)
    if (argCheck == '裾') {
        return true;
    }
    // No.2079
    // 説明:909f
    // 0x909f (Windows-31J)
    // 0x6f84 (UTF-16BE)
    if (argCheck == '澄') {
        return true;
    }
    // No.2080
    // 説明:90a0
    // 0x90a0 (Windows-31J)
    // 0x647a (UTF-16BE)
    if (argCheck == '摺') {
        return true;
    }
    // No.2081
    // 説明:90a1
    // 0x90a1 (Windows-31J)
    // 0x5bf8 (UTF-16BE)
    if (argCheck == '寸') {
        return true;
    }
    // No.2082
    // 説明:90a2
    // 0x90a2 (Windows-31J)
    // 0x4e16 (UTF-16BE)
    if (argCheck == '世') {
        return true;
    }
    // No.2083
    // 説明:90a3
    // 0x90a3 (Windows-31J)
    // 0x702c (UTF-16BE)
    if (argCheck == '瀬') {
        return true;
    }
    // No.2084
    // 説明:90a4
    // 0x90a4 (Windows-31J)
    // 0x755d (UTF-16BE)
    if (argCheck == '畝') {
        return true;
    }
    // No.2085
    // 説明:90a5
    // 0x90a5 (Windows-31J)
    // 0x662f (UTF-16BE)
    if (argCheck == '是') {
        return true;
    }
    // No.2086
    // 説明:90a6
    // 0x90a6 (Windows-31J)
    // 0x51c4 (UTF-16BE)
    if (argCheck == '凄') {
        return true;
    }
    // No.2087
    // 説明:90a7
    // 0x90a7 (Windows-31J)
    // 0x5236 (UTF-16BE)
    if (argCheck == '制') {
        return true;
    }
    // No.2088
    // 説明:90a8
    // 0x90a8 (Windows-31J)
    // 0x52e2 (UTF-16BE)
    if (argCheck == '勢') {
        return true;
    }
    // No.2089
    // 説明:90a9
    // 0x90a9 (Windows-31J)
    // 0x59d3 (UTF-16BE)
    if (argCheck == '姓') {
        return true;
    }
    // No.2090
    // 説明:90aa
    // 0x90aa (Windows-31J)
    // 0x5f81 (UTF-16BE)
    if (argCheck == '征') {
        return true;
    }
    // No.2091
    // 説明:90ab
    // 0x90ab (Windows-31J)
    // 0x6027 (UTF-16BE)
    if (argCheck == '性') {
        return true;
    }
    // No.2092
    // 説明:90ac
    // 0x90ac (Windows-31J)
    // 0x6210 (UTF-16BE)
    if (argCheck == '成') {
        return true;
    }
    // No.2093
    // 説明:90ad
    // 0x90ad (Windows-31J)
    // 0x653f (UTF-16BE)
    if (argCheck == '政') {
        return true;
    }
    // No.2094
    // 説明:90ae
    // 0x90ae (Windows-31J)
    // 0x6574 (UTF-16BE)
    if (argCheck == '整') {
        return true;
    }
    // No.2095
    // 説明:90af
    // 0x90af (Windows-31J)
    // 0x661f (UTF-16BE)
    if (argCheck == '星') {
        return true;
    }
    // No.2096
    // 説明:90b0
    // 0x90b0 (Windows-31J)
    // 0x6674 (UTF-16BE)
    if (argCheck == '晴') {
        return true;
    }
    // No.2097
    // 説明:90b1
    // 0x90b1 (Windows-31J)
    // 0x68f2 (UTF-16BE)
    if (argCheck == '棲') {
        return true;
    }
    // No.2098
    // 説明:90b2
    // 0x90b2 (Windows-31J)
    // 0x6816 (UTF-16BE)
    if (argCheck == '栖') {
        return true;
    }
    // No.2099
    // 説明:90b3
    // 0x90b3 (Windows-31J)
    // 0x6b63 (UTF-16BE)
    if (argCheck == '正') {
        return true;
    }
    // No.2100
    // 説明:90b4
    // 0x90b4 (Windows-31J)
    // 0x6e05 (UTF-16BE)
    if (argCheck == '清') {
        return true;
    }
    // No.2101
    // 説明:90b5
    // 0x90b5 (Windows-31J)
    // 0x7272 (UTF-16BE)
    if (argCheck == '牲') {
        return true;
    }
    // No.2102
    // 説明:90b6
    // 0x90b6 (Windows-31J)
    // 0x751f (UTF-16BE)
    if (argCheck == '生') {
        return true;
    }
    // No.2103
    // 説明:90b7
    // 0x90b7 (Windows-31J)
    // 0x76db (UTF-16BE)
    if (argCheck == '盛') {
        return true;
    }
    // No.2104
    // 説明:90b8
    // 0x90b8 (Windows-31J)
    // 0x7cbe (UTF-16BE)
    if (argCheck == '精') {
        return true;
    }
    // No.2105
    // 説明:90b9
    // 0x90b9 (Windows-31J)
    // 0x8056 (UTF-16BE)
    if (argCheck == '聖') {
        return true;
    }
    // No.2106
    // 説明:90ba
    // 0x90ba (Windows-31J)
    // 0x58f0 (UTF-16BE)
    if (argCheck == '声') {
        return true;
    }
    // No.2107
    // 説明:90bb
    // 0x90bb (Windows-31J)
    // 0x88fd (UTF-16BE)
    if (argCheck == '製') {
        return true;
    }
    // No.2108
    // 説明:90bc
    // 0x90bc (Windows-31J)
    // 0x897f (UTF-16BE)
    if (argCheck == '西') {
        return true;
    }
    // No.2109
    // 説明:90bd
    // 0x90bd (Windows-31J)
    // 0x8aa0 (UTF-16BE)
    if (argCheck == '誠') {
        return true;
    }
    // No.2110
    // 説明:90be
    // 0x90be (Windows-31J)
    // 0x8a93 (UTF-16BE)
    if (argCheck == '誓') {
        return true;
    }
    // No.2111
    // 説明:90bf
    // 0x90bf (Windows-31J)
    // 0x8acb (UTF-16BE)
    if (argCheck == '請') {
        return true;
    }
    // No.2112
    // 説明:90c0
    // 0x90c0 (Windows-31J)
    // 0x901d (UTF-16BE)
    if (argCheck == '逝') {
        return true;
    }
    // No.2113
    // 説明:90c1
    // 0x90c1 (Windows-31J)
    // 0x9192 (UTF-16BE)
    if (argCheck == '醒') {
        return true;
    }
    // No.2114
    // 説明:90c2
    // 0x90c2 (Windows-31J)
    // 0x9752 (UTF-16BE)
    if (argCheck == '青') {
        return true;
    }
    // No.2115
    // 説明:90c3
    // 0x90c3 (Windows-31J)
    // 0x9759 (UTF-16BE)
    if (argCheck == '静') {
        return true;
    }
    // No.2116
    // 説明:90c4
    // 0x90c4 (Windows-31J)
    // 0x6589 (UTF-16BE)
    if (argCheck == '斉') {
        return true;
    }
    // No.2117
    // 説明:90c5
    // 0x90c5 (Windows-31J)
    // 0x7a0e (UTF-16BE)
    if (argCheck == '税') {
        return true;
    }
    // No.2118
    // 説明:90c6
    // 0x90c6 (Windows-31J)
    // 0x8106 (UTF-16BE)
    if (argCheck == '脆') {
        return true;
    }
    // No.2119
    // 説明:90c7
    // 0x90c7 (Windows-31J)
    // 0x96bb (UTF-16BE)
    if (argCheck == '隻') {
        return true;
    }
    // No.2120
    // 説明:90c8
    // 0x90c8 (Windows-31J)
    // 0x5e2d (UTF-16BE)
    if (argCheck == '席') {
        return true;
    }
    // No.2121
    // 説明:90c9
    // 0x90c9 (Windows-31J)
    // 0x60dc (UTF-16BE)
    if (argCheck == '惜') {
        return true;
    }
    // No.2122
    // 説明:90ca
    // 0x90ca (Windows-31J)
    // 0x621a (UTF-16BE)
    if (argCheck == '戚') {
        return true;
    }
    // No.2123
    // 説明:90cb
    // 0x90cb (Windows-31J)
    // 0x65a5 (UTF-16BE)
    if (argCheck == '斥') {
        return true;
    }
    // No.2124
    // 説明:90cc
    // 0x90cc (Windows-31J)
    // 0x6614 (UTF-16BE)
    if (argCheck == '昔') {
        return true;
    }
    // No.2125
    // 説明:90cd
    // 0x90cd (Windows-31J)
    // 0x6790 (UTF-16BE)
    if (argCheck == '析') {
        return true;
    }
    // No.2126
    // 説明:90ce
    // 0x90ce (Windows-31J)
    // 0x77f3 (UTF-16BE)
    if (argCheck == '石') {
        return true;
    }
    // No.2127
    // 説明:90cf
    // 0x90cf (Windows-31J)
    // 0x7a4d (UTF-16BE)
    if (argCheck == '積') {
        return true;
    }
    // No.2128
    // 説明:90d0
    // 0x90d0 (Windows-31J)
    // 0x7c4d (UTF-16BE)
    if (argCheck == '籍') {
        return true;
    }
    // No.2129
    // 説明:90d1
    // 0x90d1 (Windows-31J)
    // 0x7e3e (UTF-16BE)
    if (argCheck == '績') {
        return true;
    }
    // No.2130
    // 説明:90d2
    // 0x90d2 (Windows-31J)
    // 0x810a (UTF-16BE)
    if (argCheck == '脊') {
        return true;
    }
    // No.2131
    // 説明:90d3
    // 0x90d3 (Windows-31J)
    // 0x8cac (UTF-16BE)
    if (argCheck == '責') {
        return true;
    }
    // No.2132
    // 説明:90d4
    // 0x90d4 (Windows-31J)
    // 0x8d64 (UTF-16BE)
    if (argCheck == '赤') {
        return true;
    }
    // No.2133
    // 説明:90d5
    // 0x90d5 (Windows-31J)
    // 0x8de1 (UTF-16BE)
    if (argCheck == '跡') {
        return true;
    }
    // No.2134
    // 説明:90d6
    // 0x90d6 (Windows-31J)
    // 0x8e5f (UTF-16BE)
    if (argCheck == '蹟') {
        return true;
    }
    // No.2135
    // 説明:90d7
    // 0x90d7 (Windows-31J)
    // 0x78a9 (UTF-16BE)
    if (argCheck == '碩') {
        return true;
    }
    // No.2136
    // 説明:90d8
    // 0x90d8 (Windows-31J)
    // 0x5207 (UTF-16BE)
    if (argCheck == '切') {
        return true;
    }
    // No.2137
    // 説明:90d9
    // 0x90d9 (Windows-31J)
    // 0x62d9 (UTF-16BE)
    if (argCheck == '拙') {
        return true;
    }
    // No.2138
    // 説明:90da
    // 0x90da (Windows-31J)
    // 0x63a5 (UTF-16BE)
    if (argCheck == '接') {
        return true;
    }
    // No.2139
    // 説明:90db
    // 0x90db (Windows-31J)
    // 0x6442 (UTF-16BE)
    if (argCheck == '摂') {
        return true;
    }
    // No.2140
    // 説明:90dc
    // 0x90dc (Windows-31J)
    // 0x6298 (UTF-16BE)
    if (argCheck == '折') {
        return true;
    }
    // No.2141
    // 説明:90dd
    // 0x90dd (Windows-31J)
    // 0x8a2d (UTF-16BE)
    if (argCheck == '設') {
        return true;
    }
    // No.2142
    // 説明:90de
    // 0x90de (Windows-31J)
    // 0x7a83 (UTF-16BE)
    if (argCheck == '窃') {
        return true;
    }
    // No.2143
    // 説明:90df
    // 0x90df (Windows-31J)
    // 0x7bc0 (UTF-16BE)
    if (argCheck == '節') {
        return true;
    }
    // No.2144
    // 説明:90e0
    // 0x90e0 (Windows-31J)
    // 0x8aac (UTF-16BE)
    if (argCheck == '説') {
        return true;
    }
    // No.2145
    // 説明:90e1
    // 0x90e1 (Windows-31J)
    // 0x96ea (UTF-16BE)
    if (argCheck == '雪') {
        return true;
    }
    // No.2146
    // 説明:90e2
    // 0x90e2 (Windows-31J)
    // 0x7d76 (UTF-16BE)
    if (argCheck == '絶') {
        return true;
    }
    // No.2147
    // 説明:90e3
    // 0x90e3 (Windows-31J)
    // 0x820c (UTF-16BE)
    if (argCheck == '舌') {
        return true;
    }
    // No.2148
    // 説明:90e4
    // 0x90e4 (Windows-31J)
    // 0x8749 (UTF-16BE)
    if (argCheck == '蝉') {
        return true;
    }
    // No.2149
    // 説明:90e5
    // 0x90e5 (Windows-31J)
    // 0x4ed9 (UTF-16BE)
    if (argCheck == '仙') {
        return true;
    }
    // No.2150
    // 説明:90e6
    // 0x90e6 (Windows-31J)
    // 0x5148 (UTF-16BE)
    if (argCheck == '先') {
        return true;
    }
    // No.2151
    // 説明:90e7
    // 0x90e7 (Windows-31J)
    // 0x5343 (UTF-16BE)
    if (argCheck == '千') {
        return true;
    }
    // No.2152
    // 説明:90e8
    // 0x90e8 (Windows-31J)
    // 0x5360 (UTF-16BE)
    if (argCheck == '占') {
        return true;
    }
    // No.2153
    // 説明:90e9
    // 0x90e9 (Windows-31J)
    // 0x5ba3 (UTF-16BE)
    if (argCheck == '宣') {
        return true;
    }
    // No.2154
    // 説明:90ea
    // 0x90ea (Windows-31J)
    // 0x5c02 (UTF-16BE)
    if (argCheck == '専') {
        return true;
    }
    // No.2155
    // 説明:90eb
    // 0x90eb (Windows-31J)
    // 0x5c16 (UTF-16BE)
    if (argCheck == '尖') {
        return true;
    }
    // No.2156
    // 説明:90ec
    // 0x90ec (Windows-31J)
    // 0x5ddd (UTF-16BE)
    if (argCheck == '川') {
        return true;
    }
    // No.2157
    // 説明:90ed
    // 0x90ed (Windows-31J)
    // 0x6226 (UTF-16BE)
    if (argCheck == '戦') {
        return true;
    }
    // No.2158
    // 説明:90ee
    // 0x90ee (Windows-31J)
    // 0x6247 (UTF-16BE)
    if (argCheck == '扇') {
        return true;
    }
    // No.2159
    // 説明:90ef
    // 0x90ef (Windows-31J)
    // 0x64b0 (UTF-16BE)
    if (argCheck == '撰') {
        return true;
    }
    // No.2160
    // 説明:90f0
    // 0x90f0 (Windows-31J)
    // 0x6813 (UTF-16BE)
    if (argCheck == '栓') {
        return true;
    }
    // No.2161
    // 説明:90f1
    // 0x90f1 (Windows-31J)
    // 0x6834 (UTF-16BE)
    if (argCheck == '栴') {
        return true;
    }
    // No.2162
    // 説明:90f2
    // 0x90f2 (Windows-31J)
    // 0x6cc9 (UTF-16BE)
    if (argCheck == '泉') {
        return true;
    }
    // No.2163
    // 説明:90f3
    // 0x90f3 (Windows-31J)
    // 0x6d45 (UTF-16BE)
    if (argCheck == '浅') {
        return true;
    }
    // No.2164
    // 説明:90f4
    // 0x90f4 (Windows-31J)
    // 0x6d17 (UTF-16BE)
    if (argCheck == '洗') {
        return true;
    }
    // No.2165
    // 説明:90f5
    // 0x90f5 (Windows-31J)
    // 0x67d3 (UTF-16BE)
    if (argCheck == '染') {
        return true;
    }
    // No.2166
    // 説明:90f6
    // 0x90f6 (Windows-31J)
    // 0x6f5c (UTF-16BE)
    if (argCheck == '潜') {
        return true;
    }
    // No.2167
    // 説明:90f7
    // 0x90f7 (Windows-31J)
    // 0x714e (UTF-16BE)
    if (argCheck == '煎') {
        return true;
    }
    // No.2168
    // 説明:90f8
    // 0x90f8 (Windows-31J)
    // 0x717d (UTF-16BE)
    if (argCheck == '煽') {
        return true;
    }
    // No.2169
    // 説明:90f9
    // 0x90f9 (Windows-31J)
    // 0x65cb (UTF-16BE)
    if (argCheck == '旋') {
        return true;
    }
    // No.2170
    // 説明:90fa
    // 0x90fa (Windows-31J)
    // 0x7a7f (UTF-16BE)
    if (argCheck == '穿') {
        return true;
    }
    // No.2171
    // 説明:90fb
    // 0x90fb (Windows-31J)
    // 0x7bad (UTF-16BE)
    if (argCheck == '箭') {
        return true;
    }
    // No.2172
    // 説明:90fc
    // 0x90fc (Windows-31J)
    // 0x7dda (UTF-16BE)
    if (argCheck == '線') {
        return true;
    }
    // No.2173
    // 説明:9140
    // 0x9140 (Windows-31J)
    // 0x7e4a (UTF-16BE)
    if (argCheck == '繊') {
        return true;
    }
    // No.2174
    // 説明:9141
    // 0x9141 (Windows-31J)
    // 0x7fa8 (UTF-16BE)
    if (argCheck == '羨') {
        return true;
    }
    // No.2175
    // 説明:9142
    // 0x9142 (Windows-31J)
    // 0x817a (UTF-16BE)
    if (argCheck == '腺') {
        return true;
    }
    // No.2176
    // 説明:9143
    // 0x9143 (Windows-31J)
    // 0x821b (UTF-16BE)
    if (argCheck == '舛') {
        return true;
    }
    // No.2177
    // 説明:9144
    // 0x9144 (Windows-31J)
    // 0x8239 (UTF-16BE)
    if (argCheck == '船') {
        return true;
    }
    // No.2178
    // 説明:9145
    // 0x9145 (Windows-31J)
    // 0x85a6 (UTF-16BE)
    if (argCheck == '薦') {
        return true;
    }
    // No.2179
    // 説明:9146
    // 0x9146 (Windows-31J)
    // 0x8a6e (UTF-16BE)
    if (argCheck == '詮') {
        return true;
    }
    // No.2180
    // 説明:9147
    // 0x9147 (Windows-31J)
    // 0x8cce (UTF-16BE)
    if (argCheck == '賎') {
        return true;
    }
    // No.2181
    // 説明:9148
    // 0x9148 (Windows-31J)
    // 0x8df5 (UTF-16BE)
    if (argCheck == '践') {
        return true;
    }
    // No.2182
    // 説明:9149
    // 0x9149 (Windows-31J)
    // 0x9078 (UTF-16BE)
    if (argCheck == '選') {
        return true;
    }
    // No.2183
    // 説明:914a
    // 0x914a (Windows-31J)
    // 0x9077 (UTF-16BE)
    if (argCheck == '遷') {
        return true;
    }
    // No.2184
    // 説明:914b
    // 0x914b (Windows-31J)
    // 0x92ad (UTF-16BE)
    if (argCheck == '銭') {
        return true;
    }
    // No.2185
    // 説明:914c
    // 0x914c (Windows-31J)
    // 0x9291 (UTF-16BE)
    if (argCheck == '銑') {
        return true;
    }
    // No.2186
    // 説明:914d
    // 0x914d (Windows-31J)
    // 0x9583 (UTF-16BE)
    if (argCheck == '閃') {
        return true;
    }
    // No.2187
    // 説明:914e
    // 0x914e (Windows-31J)
    // 0x9bae (UTF-16BE)
    if (argCheck == '鮮') {
        return true;
    }
    // No.2188
    // 説明:914f
    // 0x914f (Windows-31J)
    // 0x524d (UTF-16BE)
    if (argCheck == '前') {
        return true;
    }
    // No.2189
    // 説明:9150
    // 0x9150 (Windows-31J)
    // 0x5584 (UTF-16BE)
    if (argCheck == '善') {
        return true;
    }
    // No.2190
    // 説明:9151
    // 0x9151 (Windows-31J)
    // 0x6f38 (UTF-16BE)
    if (argCheck == '漸') {
        return true;
    }
    // No.2191
    // 説明:9152
    // 0x9152 (Windows-31J)
    // 0x7136 (UTF-16BE)
    if (argCheck == '然') {
        return true;
    }
    // No.2192
    // 説明:9153
    // 0x9153 (Windows-31J)
    // 0x5168 (UTF-16BE)
    if (argCheck == '全') {
        return true;
    }
    // No.2193
    // 説明:9154
    // 0x9154 (Windows-31J)
    // 0x7985 (UTF-16BE)
    if (argCheck == '禅') {
        return true;
    }
    // No.2194
    // 説明:9155
    // 0x9155 (Windows-31J)
    // 0x7e55 (UTF-16BE)
    if (argCheck == '繕') {
        return true;
    }
    // No.2195
    // 説明:9156
    // 0x9156 (Windows-31J)
    // 0x81b3 (UTF-16BE)
    if (argCheck == '膳') {
        return true;
    }
    // No.2196
    // 説明:9157
    // 0x9157 (Windows-31J)
    // 0x7cce (UTF-16BE)
    if (argCheck == '糎') {
        return true;
    }
    // No.2197
    // 説明:9158
    // 0x9158 (Windows-31J)
    // 0x564c (UTF-16BE)
    if (argCheck == '噌') {
        return true;
    }
    // No.2198
    // 説明:9159
    // 0x9159 (Windows-31J)
    // 0x5851 (UTF-16BE)
    if (argCheck == '塑') {
        return true;
    }
    // No.2199
    // 説明:915a
    // 0x915a (Windows-31J)
    // 0x5ca8 (UTF-16BE)
    if (argCheck == '岨') {
        return true;
    }
    // No.2200
    // 説明:915b
    // 0x915b (Windows-31J)
    // 0x63aa (UTF-16BE)
    if (argCheck == '措') {
        return true;
    }
    // No.2201
    // 説明:915c
    // 0x915c (Windows-31J)
    // 0x66fe (UTF-16BE)
    if (argCheck == '曾') {
        return true;
    }
    // No.2202
    // 説明:915d
    // 0x915d (Windows-31J)
    // 0x66fd (UTF-16BE)
    if (argCheck == '曽') {
        return true;
    }
    // No.2203
    // 説明:915e
    // 0x915e (Windows-31J)
    // 0x695a (UTF-16BE)
    if (argCheck == '楚') {
        return true;
    }
    // No.2204
    // 説明:915f
    // 0x915f (Windows-31J)
    // 0x72d9 (UTF-16BE)
    if (argCheck == '狙') {
        return true;
    }
    // No.2205
    // 説明:9160
    // 0x9160 (Windows-31J)
    // 0x758f (UTF-16BE)
    if (argCheck == '疏') {
        return true;
    }
    // No.2206
    // 説明:9161
    // 0x9161 (Windows-31J)
    // 0x758e (UTF-16BE)
    if (argCheck == '疎') {
        return true;
    }
    // No.2207
    // 説明:9162
    // 0x9162 (Windows-31J)
    // 0x790e (UTF-16BE)
    if (argCheck == '礎') {
        return true;
    }
    // No.2208
    // 説明:9163
    // 0x9163 (Windows-31J)
    // 0x7956 (UTF-16BE)
    if (argCheck == '祖') {
        return true;
    }
    // No.2209
    // 説明:9164
    // 0x9164 (Windows-31J)
    // 0x79df (UTF-16BE)
    if (argCheck == '租') {
        return true;
    }
    // No.2210
    // 説明:9165
    // 0x9165 (Windows-31J)
    // 0x7c97 (UTF-16BE)
    if (argCheck == '粗') {
        return true;
    }
    // No.2211
    // 説明:9166
    // 0x9166 (Windows-31J)
    // 0x7d20 (UTF-16BE)
    if (argCheck == '素') {
        return true;
    }
    // No.2212
    // 説明:9167
    // 0x9167 (Windows-31J)
    // 0x7d44 (UTF-16BE)
    if (argCheck == '組') {
        return true;
    }
    // No.2213
    // 説明:9168
    // 0x9168 (Windows-31J)
    // 0x8607 (UTF-16BE)
    if (argCheck == '蘇') {
        return true;
    }
    // No.2214
    // 説明:9169
    // 0x9169 (Windows-31J)
    // 0x8a34 (UTF-16BE)
    if (argCheck == '訴') {
        return true;
    }
    // No.2215
    // 説明:916a
    // 0x916a (Windows-31J)
    // 0x963b (UTF-16BE)
    if (argCheck == '阻') {
        return true;
    }
    // No.2216
    // 説明:916b
    // 0x916b (Windows-31J)
    // 0x9061 (UTF-16BE)
    if (argCheck == '遡') {
        return true;
    }
    // No.2217
    // 説明:916c
    // 0x916c (Windows-31J)
    // 0x9f20 (UTF-16BE)
    if (argCheck == '鼠') {
        return true;
    }
    // No.2218
    // 説明:916d
    // 0x916d (Windows-31J)
    // 0x50e7 (UTF-16BE)
    if (argCheck == '僧') {
        return true;
    }
    // No.2219
    // 説明:916e
    // 0x916e (Windows-31J)
    // 0x5275 (UTF-16BE)
    if (argCheck == '創') {
        return true;
    }
    // No.2220
    // 説明:916f
    // 0x916f (Windows-31J)
    // 0x53cc (UTF-16BE)
    if (argCheck == '双') {
        return true;
    }
    // No.2221
    // 説明:9170
    // 0x9170 (Windows-31J)
    // 0x53e2 (UTF-16BE)
    if (argCheck == '叢') {
        return true;
    }
    // No.2222
    // 説明:9171
    // 0x9171 (Windows-31J)
    // 0x5009 (UTF-16BE)
    if (argCheck == '倉') {
        return true;
    }
    // No.2223
    // 説明:9172
    // 0x9172 (Windows-31J)
    // 0x55aa (UTF-16BE)
    if (argCheck == '喪') {
        return true;
    }
    // No.2224
    // 説明:9173
    // 0x9173 (Windows-31J)
    // 0x58ee (UTF-16BE)
    if (argCheck == '壮') {
        return true;
    }
    // No.2225
    // 説明:9174
    // 0x9174 (Windows-31J)
    // 0x594f (UTF-16BE)
    if (argCheck == '奏') {
        return true;
    }
    // No.2226
    // 説明:9175
    // 0x9175 (Windows-31J)
    // 0x723d (UTF-16BE)
    if (argCheck == '爽') {
        return true;
    }
    // No.2227
    // 説明:9176
    // 0x9176 (Windows-31J)
    // 0x5b8b (UTF-16BE)
    if (argCheck == '宋') {
        return true;
    }
    // No.2228
    // 説明:9177
    // 0x9177 (Windows-31J)
    // 0x5c64 (UTF-16BE)
    if (argCheck == '層') {
        return true;
    }
    // No.2229
    // 説明:9178
    // 0x9178 (Windows-31J)
    // 0x531d (UTF-16BE)
    if (argCheck == '匝') {
        return true;
    }
    // No.2230
    // 説明:9179
    // 0x9179 (Windows-31J)
    // 0x60e3 (UTF-16BE)
    if (argCheck == '惣') {
        return true;
    }
    // No.2231
    // 説明:917a
    // 0x917a (Windows-31J)
    // 0x60f3 (UTF-16BE)
    if (argCheck == '想') {
        return true;
    }
    // No.2232
    // 説明:917b
    // 0x917b (Windows-31J)
    // 0x635c (UTF-16BE)
    if (argCheck == '捜') {
        return true;
    }
    // No.2233
    // 説明:917c
    // 0x917c (Windows-31J)
    // 0x6383 (UTF-16BE)
    if (argCheck == '掃') {
        return true;
    }
    // No.2234
    // 説明:917d
    // 0x917d (Windows-31J)
    // 0x633f (UTF-16BE)
    if (argCheck == '挿') {
        return true;
    }
    // No.2235
    // 説明:917e
    // 0x917e (Windows-31J)
    // 0x63bb (UTF-16BE)
    if (argCheck == '掻') {
        return true;
    }
    // No.2236
    // 説明:9180
    // 0x9180 (Windows-31J)
    // 0x64cd (UTF-16BE)
    if (argCheck == '操') {
        return true;
    }
    // No.2237
    // 説明:9181
    // 0x9181 (Windows-31J)
    // 0x65e9 (UTF-16BE)
    if (argCheck == '早') {
        return true;
    }
    // No.2238
    // 説明:9182
    // 0x9182 (Windows-31J)
    // 0x66f9 (UTF-16BE)
    if (argCheck == '曹') {
        return true;
    }
    // No.2239
    // 説明:9183
    // 0x9183 (Windows-31J)
    // 0x5de3 (UTF-16BE)
    if (argCheck == '巣') {
        return true;
    }
    // No.2240
    // 説明:9184
    // 0x9184 (Windows-31J)
    // 0x69cd (UTF-16BE)
    if (argCheck == '槍') {
        return true;
    }
    // No.2241
    // 説明:9185
    // 0x9185 (Windows-31J)
    // 0x69fd (UTF-16BE)
    if (argCheck == '槽') {
        return true;
    }
    // No.2242
    // 説明:9186
    // 0x9186 (Windows-31J)
    // 0x6f15 (UTF-16BE)
    if (argCheck == '漕') {
        return true;
    }
    // No.2243
    // 説明:9187
    // 0x9187 (Windows-31J)
    // 0x71e5 (UTF-16BE)
    if (argCheck == '燥') {
        return true;
    }
    // No.2244
    // 説明:9188
    // 0x9188 (Windows-31J)
    // 0x4e89 (UTF-16BE)
    if (argCheck == '争') {
        return true;
    }
    // No.2245
    // 説明:9189
    // 0x9189 (Windows-31J)
    // 0x75e9 (UTF-16BE)
    if (argCheck == '痩') {
        return true;
    }
    // No.2246
    // 説明:918a
    // 0x918a (Windows-31J)
    // 0x76f8 (UTF-16BE)
    if (argCheck == '相') {
        return true;
    }
    // No.2247
    // 説明:918b
    // 0x918b (Windows-31J)
    // 0x7a93 (UTF-16BE)
    if (argCheck == '窓') {
        return true;
    }
    // No.2248
    // 説明:918c
    // 0x918c (Windows-31J)
    // 0x7cdf (UTF-16BE)
    if (argCheck == '糟') {
        return true;
    }
    // No.2249
    // 説明:918d
    // 0x918d (Windows-31J)
    // 0x7dcf (UTF-16BE)
    if (argCheck == '総') {
        return true;
    }
    // No.2250
    // 説明:918e
    // 0x918e (Windows-31J)
    // 0x7d9c (UTF-16BE)
    if (argCheck == '綜') {
        return true;
    }
    // No.2251
    // 説明:918f
    // 0x918f (Windows-31J)
    // 0x8061 (UTF-16BE)
    if (argCheck == '聡') {
        return true;
    }
    // No.2252
    // 説明:9190
    // 0x9190 (Windows-31J)
    // 0x8349 (UTF-16BE)
    if (argCheck == '草') {
        return true;
    }
    // No.2253
    // 説明:9191
    // 0x9191 (Windows-31J)
    // 0x8358 (UTF-16BE)
    if (argCheck == '荘') {
        return true;
    }
    // No.2254
    // 説明:9192
    // 0x9192 (Windows-31J)
    // 0x846c (UTF-16BE)
    if (argCheck == '葬') {
        return true;
    }
    // No.2255
    // 説明:9193
    // 0x9193 (Windows-31J)
    // 0x84bc (UTF-16BE)
    if (argCheck == '蒼') {
        return true;
    }
    // No.2256
    // 説明:9194
    // 0x9194 (Windows-31J)
    // 0x85fb (UTF-16BE)
    if (argCheck == '藻') {
        return true;
    }
    // No.2257
    // 説明:9195
    // 0x9195 (Windows-31J)
    // 0x88c5 (UTF-16BE)
    if (argCheck == '装') {
        return true;
    }
    // No.2258
    // 説明:9196
    // 0x9196 (Windows-31J)
    // 0x8d70 (UTF-16BE)
    if (argCheck == '走') {
        return true;
    }
    // No.2259
    // 説明:9197
    // 0x9197 (Windows-31J)
    // 0x9001 (UTF-16BE)
    if (argCheck == '送') {
        return true;
    }
    // No.2260
    // 説明:9198
    // 0x9198 (Windows-31J)
    // 0x906d (UTF-16BE)
    if (argCheck == '遭') {
        return true;
    }
    // No.2261
    // 説明:9199
    // 0x9199 (Windows-31J)
    // 0x9397 (UTF-16BE)
    if (argCheck == '鎗') {
        return true;
    }
    // No.2262
    // 説明:919a
    // 0x919a (Windows-31J)
    // 0x971c (UTF-16BE)
    if (argCheck == '霜') {
        return true;
    }
    // No.2263
    // 説明:919b
    // 0x919b (Windows-31J)
    // 0x9a12 (UTF-16BE)
    if (argCheck == '騒') {
        return true;
    }
    // No.2264
    // 説明:919c
    // 0x919c (Windows-31J)
    // 0x50cf (UTF-16BE)
    if (argCheck == '像') {
        return true;
    }
    // No.2265
    // 説明:919d
    // 0x919d (Windows-31J)
    // 0x5897 (UTF-16BE)
    if (argCheck == '増') {
        return true;
    }
    // No.2266
    // 説明:919e
    // 0x919e (Windows-31J)
    // 0x618e (UTF-16BE)
    if (argCheck == '憎') {
        return true;
    }
    // No.2267
    // 説明:919f
    // 0x919f (Windows-31J)
    // 0x81d3 (UTF-16BE)
    if (argCheck == '臓') {
        return true;
    }
    // No.2268
    // 説明:91a0
    // 0x91a0 (Windows-31J)
    // 0x8535 (UTF-16BE)
    if (argCheck == '蔵') {
        return true;
    }
    // No.2269
    // 説明:91a1
    // 0x91a1 (Windows-31J)
    // 0x8d08 (UTF-16BE)
    if (argCheck == '贈') {
        return true;
    }
    // No.2270
    // 説明:91a2
    // 0x91a2 (Windows-31J)
    // 0x9020 (UTF-16BE)
    if (argCheck == '造') {
        return true;
    }
    // No.2271
    // 説明:91a3
    // 0x91a3 (Windows-31J)
    // 0x4fc3 (UTF-16BE)
    if (argCheck == '促') {
        return true;
    }
    // No.2272
    // 説明:91a4
    // 0x91a4 (Windows-31J)
    // 0x5074 (UTF-16BE)
    if (argCheck == '側') {
        return true;
    }
    // No.2273
    // 説明:91a5
    // 0x91a5 (Windows-31J)
    // 0x5247 (UTF-16BE)
    if (argCheck == '則') {
        return true;
    }
    // No.2274
    // 説明:91a6
    // 0x91a6 (Windows-31J)
    // 0x5373 (UTF-16BE)
    if (argCheck == '即') {
        return true;
    }
    // No.2275
    // 説明:91a7
    // 0x91a7 (Windows-31J)
    // 0x606f (UTF-16BE)
    if (argCheck == '息') {
        return true;
    }
    // No.2276
    // 説明:91a8
    // 0x91a8 (Windows-31J)
    // 0x6349 (UTF-16BE)
    if (argCheck == '捉') {
        return true;
    }
    // No.2277
    // 説明:91a9
    // 0x91a9 (Windows-31J)
    // 0x675f (UTF-16BE)
    if (argCheck == '束') {
        return true;
    }
    // No.2278
    // 説明:91aa
    // 0x91aa (Windows-31J)
    // 0x6e2c (UTF-16BE)
    if (argCheck == '測') {
        return true;
    }
    // No.2279
    // 説明:91ab
    // 0x91ab (Windows-31J)
    // 0x8db3 (UTF-16BE)
    if (argCheck == '足') {
        return true;
    }
    // No.2280
    // 説明:91ac
    // 0x91ac (Windows-31J)
    // 0x901f (UTF-16BE)
    if (argCheck == '速') {
        return true;
    }
    // No.2281
    // 説明:91ad
    // 0x91ad (Windows-31J)
    // 0x4fd7 (UTF-16BE)
    if (argCheck == '俗') {
        return true;
    }
    // No.2282
    // 説明:91ae
    // 0x91ae (Windows-31J)
    // 0x5c5e (UTF-16BE)
    if (argCheck == '属') {
        return true;
    }
    // No.2283
    // 説明:91af
    // 0x91af (Windows-31J)
    // 0x8cca (UTF-16BE)
    if (argCheck == '賊') {
        return true;
    }
    // No.2284
    // 説明:91b0
    // 0x91b0 (Windows-31J)
    // 0x65cf (UTF-16BE)
    if (argCheck == '族') {
        return true;
    }
    // No.2285
    // 説明:91b1
    // 0x91b1 (Windows-31J)
    // 0x7d9a (UTF-16BE)
    if (argCheck == '続') {
        return true;
    }
    // No.2286
    // 説明:91b2
    // 0x91b2 (Windows-31J)
    // 0x5352 (UTF-16BE)
    if (argCheck == '卒') {
        return true;
    }
    // No.2287
    // 説明:91b3
    // 0x91b3 (Windows-31J)
    // 0x8896 (UTF-16BE)
    if (argCheck == '袖') {
        return true;
    }
    // No.2288
    // 説明:91b4
    // 0x91b4 (Windows-31J)
    // 0x5176 (UTF-16BE)
    if (argCheck == '其') {
        return true;
    }
    // No.2289
    // 説明:91b5
    // 0x91b5 (Windows-31J)
    // 0x63c3 (UTF-16BE)
    if (argCheck == '揃') {
        return true;
    }
    // No.2290
    // 説明:91b6
    // 0x91b6 (Windows-31J)
    // 0x5b58 (UTF-16BE)
    if (argCheck == '存') {
        return true;
    }
    // No.2291
    // 説明:91b7
    // 0x91b7 (Windows-31J)
    // 0x5b6b (UTF-16BE)
    if (argCheck == '孫') {
        return true;
    }
    // No.2292
    // 説明:91b8
    // 0x91b8 (Windows-31J)
    // 0x5c0a (UTF-16BE)
    if (argCheck == '尊') {
        return true;
    }
    // No.2293
    // 説明:91b9
    // 0x91b9 (Windows-31J)
    // 0x640d (UTF-16BE)
    if (argCheck == '損') {
        return true;
    }
    // No.2294
    // 説明:91ba
    // 0x91ba (Windows-31J)
    // 0x6751 (UTF-16BE)
    if (argCheck == '村') {
        return true;
    }
    // No.2295
    // 説明:91bb
    // 0x91bb (Windows-31J)
    // 0x905c (UTF-16BE)
    if (argCheck == '遜') {
        return true;
    }
    // No.2296
    // 説明:91bc
    // 0x91bc (Windows-31J)
    // 0x4ed6 (UTF-16BE)
    if (argCheck == '他') {
        return true;
    }
    // No.2297
    // 説明:91bd
    // 0x91bd (Windows-31J)
    // 0x591a (UTF-16BE)
    if (argCheck == '多') {
        return true;
    }
    // No.2298
    // 説明:91be
    // 0x91be (Windows-31J)
    // 0x592a (UTF-16BE)
    if (argCheck == '太') {
        return true;
    }
    // No.2299
    // 説明:91bf
    // 0x91bf (Windows-31J)
    // 0x6c70 (UTF-16BE)
    if (argCheck == '汰') {
        return true;
    }
    // No.2300
    // 説明:91c0
    // 0x91c0 (Windows-31J)
    // 0x8a51 (UTF-16BE)
    if (argCheck == '詑') {
        return true;
    }
    // No.2301
    // 説明:91c1
    // 0x91c1 (Windows-31J)
    // 0x553e (UTF-16BE)
    if (argCheck == '唾') {
        return true;
    }
    // No.2302
    // 説明:91c2
    // 0x91c2 (Windows-31J)
    // 0x5815 (UTF-16BE)
    if (argCheck == '堕') {
        return true;
    }
    // No.2303
    // 説明:91c3
    // 0x91c3 (Windows-31J)
    // 0x59a5 (UTF-16BE)
    if (argCheck == '妥') {
        return true;
    }
    // No.2304
    // 説明:91c4
    // 0x91c4 (Windows-31J)
    // 0x60f0 (UTF-16BE)
    if (argCheck == '惰') {
        return true;
    }
    // No.2305
    // 説明:91c5
    // 0x91c5 (Windows-31J)
    // 0x6253 (UTF-16BE)
    if (argCheck == '打') {
        return true;
    }
    // No.2306
    // 説明:91c6
    // 0x91c6 (Windows-31J)
    // 0x67c1 (UTF-16BE)
    if (argCheck == '柁') {
        return true;
    }
    // No.2307
    // 説明:91c7
    // 0x91c7 (Windows-31J)
    // 0x8235 (UTF-16BE)
    if (argCheck == '舵') {
        return true;
    }
    // No.2308
    // 説明:91c8
    // 0x91c8 (Windows-31J)
    // 0x6955 (UTF-16BE)
    if (argCheck == '楕') {
        return true;
    }
    // No.2309
    // 説明:91c9
    // 0x91c9 (Windows-31J)
    // 0x9640 (UTF-16BE)
    if (argCheck == '陀') {
        return true;
    }
    // No.2310
    // 説明:91ca
    // 0x91ca (Windows-31J)
    // 0x99c4 (UTF-16BE)
    if (argCheck == '駄') {
        return true;
    }
    // No.2311
    // 説明:91cb
    // 0x91cb (Windows-31J)
    // 0x9a28 (UTF-16BE)
    if (argCheck == '騨') {
        return true;
    }
    // No.2312
    // 説明:91cc
    // 0x91cc (Windows-31J)
    // 0x4f53 (UTF-16BE)
    if (argCheck == '体') {
        return true;
    }
    // No.2313
    // 説明:91cd
    // 0x91cd (Windows-31J)
    // 0x5806 (UTF-16BE)
    if (argCheck == '堆') {
        return true;
    }
    // No.2314
    // 説明:91ce
    // 0x91ce (Windows-31J)
    // 0x5bfe (UTF-16BE)
    if (argCheck == '対') {
        return true;
    }
    // No.2315
    // 説明:91cf
    // 0x91cf (Windows-31J)
    // 0x8010 (UTF-16BE)
    if (argCheck == '耐') {
        return true;
    }
    // No.2316
    // 説明:91d0
    // 0x91d0 (Windows-31J)
    // 0x5cb1 (UTF-16BE)
    if (argCheck == '岱') {
        return true;
    }
    // No.2317
    // 説明:91d1
    // 0x91d1 (Windows-31J)
    // 0x5e2f (UTF-16BE)
    if (argCheck == '帯') {
        return true;
    }
    // No.2318
    // 説明:91d2
    // 0x91d2 (Windows-31J)
    // 0x5f85 (UTF-16BE)
    if (argCheck == '待') {
        return true;
    }
    // No.2319
    // 説明:91d3
    // 0x91d3 (Windows-31J)
    // 0x6020 (UTF-16BE)
    if (argCheck == '怠') {
        return true;
    }
    // No.2320
    // 説明:91d4
    // 0x91d4 (Windows-31J)
    // 0x614b (UTF-16BE)
    if (argCheck == '態') {
        return true;
    }
    // No.2321
    // 説明:91d5
    // 0x91d5 (Windows-31J)
    // 0x6234 (UTF-16BE)
    if (argCheck == '戴') {
        return true;
    }
    // No.2322
    // 説明:91d6
    // 0x91d6 (Windows-31J)
    // 0x66ff (UTF-16BE)
    if (argCheck == '替') {
        return true;
    }
    // No.2323
    // 説明:91d7
    // 0x91d7 (Windows-31J)
    // 0x6cf0 (UTF-16BE)
    if (argCheck == '泰') {
        return true;
    }
    // No.2324
    // 説明:91d8
    // 0x91d8 (Windows-31J)
    // 0x6ede (UTF-16BE)
    if (argCheck == '滞') {
        return true;
    }
    // No.2325
    // 説明:91d9
    // 0x91d9 (Windows-31J)
    // 0x80ce (UTF-16BE)
    if (argCheck == '胎') {
        return true;
    }
    // No.2326
    // 説明:91da
    // 0x91da (Windows-31J)
    // 0x817f (UTF-16BE)
    if (argCheck == '腿') {
        return true;
    }
    // No.2327
    // 説明:91db
    // 0x91db (Windows-31J)
    // 0x82d4 (UTF-16BE)
    if (argCheck == '苔') {
        return true;
    }
    // No.2328
    // 説明:91dc
    // 0x91dc (Windows-31J)
    // 0x888b (UTF-16BE)
    if (argCheck == '袋') {
        return true;
    }
    // No.2329
    // 説明:91dd
    // 0x91dd (Windows-31J)
    // 0x8cb8 (UTF-16BE)
    if (argCheck == '貸') {
        return true;
    }
    // No.2330
    // 説明:91de
    // 0x91de (Windows-31J)
    // 0x9000 (UTF-16BE)
    if (argCheck == '退') {
        return true;
    }
    // No.2331
    // 説明:91df
    // 0x91df (Windows-31J)
    // 0x902e (UTF-16BE)
    if (argCheck == '逮') {
        return true;
    }
    // No.2332
    // 説明:91e0
    // 0x91e0 (Windows-31J)
    // 0x968a (UTF-16BE)
    if (argCheck == '隊') {
        return true;
    }
    // No.2333
    // 説明:91e1
    // 0x91e1 (Windows-31J)
    // 0x9edb (UTF-16BE)
    if (argCheck == '黛') {
        return true;
    }
    // No.2334
    // 説明:91e2
    // 0x91e2 (Windows-31J)
    // 0x9bdb (UTF-16BE)
    if (argCheck == '鯛') {
        return true;
    }
    // No.2335
    // 説明:91e3
    // 0x91e3 (Windows-31J)
    // 0x4ee3 (UTF-16BE)
    if (argCheck == '代') {
        return true;
    }
    // No.2336
    // 説明:91e4
    // 0x91e4 (Windows-31J)
    // 0x53f0 (UTF-16BE)
    if (argCheck == '台') {
        return true;
    }
    // No.2337
    // 説明:91e5
    // 0x91e5 (Windows-31J)
    // 0x5927 (UTF-16BE)
    if (argCheck == '大') {
        return true;
    }
    // No.2338
    // 説明:91e6
    // 0x91e6 (Windows-31J)
    // 0x7b2c (UTF-16BE)
    if (argCheck == '第') {
        return true;
    }
    // No.2339
    // 説明:91e7
    // 0x91e7 (Windows-31J)
    // 0x918d (UTF-16BE)
    if (argCheck == '醍') {
        return true;
    }
    // No.2340
    // 説明:91e8
    // 0x91e8 (Windows-31J)
    // 0x984c (UTF-16BE)
    if (argCheck == '題') {
        return true;
    }
    // No.2341
    // 説明:91e9
    // 0x91e9 (Windows-31J)
    // 0x9df9 (UTF-16BE)
    if (argCheck == '鷹') {
        return true;
    }
    // No.2342
    // 説明:91ea
    // 0x91ea (Windows-31J)
    // 0x6edd (UTF-16BE)
    if (argCheck == '滝') {
        return true;
    }
    // No.2343
    // 説明:91eb
    // 0x91eb (Windows-31J)
    // 0x7027 (UTF-16BE)
    if (argCheck == '瀧') {
        return true;
    }
    // No.2344
    // 説明:91ec
    // 0x91ec (Windows-31J)
    // 0x5353 (UTF-16BE)
    if (argCheck == '卓') {
        return true;
    }
    // No.2345
    // 説明:91ed
    // 0x91ed (Windows-31J)
    // 0x5544 (UTF-16BE)
    if (argCheck == '啄') {
        return true;
    }
    // No.2346
    // 説明:91ee
    // 0x91ee (Windows-31J)
    // 0x5b85 (UTF-16BE)
    if (argCheck == '宅') {
        return true;
    }
    // No.2347
    // 説明:91ef
    // 0x91ef (Windows-31J)
    // 0x6258 (UTF-16BE)
    if (argCheck == '托') {
        return true;
    }
    // No.2348
    // 説明:91f0
    // 0x91f0 (Windows-31J)
    // 0x629e (UTF-16BE)
    if (argCheck == '択') {
        return true;
    }
    // No.2349
    // 説明:91f1
    // 0x91f1 (Windows-31J)
    // 0x62d3 (UTF-16BE)
    if (argCheck == '拓') {
        return true;
    }
    // No.2350
    // 説明:91f2
    // 0x91f2 (Windows-31J)
    // 0x6ca2 (UTF-16BE)
    if (argCheck == '沢') {
        return true;
    }
    // No.2351
    // 説明:91f3
    // 0x91f3 (Windows-31J)
    // 0x6fef (UTF-16BE)
    if (argCheck == '濯') {
        return true;
    }
    // No.2352
    // 説明:91f4
    // 0x91f4 (Windows-31J)
    // 0x7422 (UTF-16BE)
    if (argCheck == '琢') {
        return true;
    }
    // No.2353
    // 説明:91f5
    // 0x91f5 (Windows-31J)
    // 0x8a17 (UTF-16BE)
    if (argCheck == '託') {
        return true;
    }
    // No.2354
    // 説明:91f6
    // 0x91f6 (Windows-31J)
    // 0x9438 (UTF-16BE)
    if (argCheck == '鐸') {
        return true;
    }
    // No.2355
    // 説明:91f7
    // 0x91f7 (Windows-31J)
    // 0x6fc1 (UTF-16BE)
    if (argCheck == '濁') {
        return true;
    }
    // No.2356
    // 説明:91f8
    // 0x91f8 (Windows-31J)
    // 0x8afe (UTF-16BE)
    if (argCheck == '諾') {
        return true;
    }
    // No.2357
    // 説明:91f9
    // 0x91f9 (Windows-31J)
    // 0x8338 (UTF-16BE)
    if (argCheck == '茸') {
        return true;
    }
    // No.2358
    // 説明:91fa
    // 0x91fa (Windows-31J)
    // 0x51e7 (UTF-16BE)
    if (argCheck == '凧') {
        return true;
    }
    // No.2359
    // 説明:91fb
    // 0x91fb (Windows-31J)
    // 0x86f8 (UTF-16BE)
    if (argCheck == '蛸') {
        return true;
    }
    // No.2360
    // 説明:91fc
    // 0x91fc (Windows-31J)
    // 0x53ea (UTF-16BE)
    if (argCheck == '只') {
        return true;
    }
    // No.2361
    // 説明:9240
    // 0x9240 (Windows-31J)
    // 0x53e9 (UTF-16BE)
    if (argCheck == '叩') {
        return true;
    }
    // No.2362
    // 説明:9241
    // 0x9241 (Windows-31J)
    // 0x4f46 (UTF-16BE)
    if (argCheck == '但') {
        return true;
    }
    // No.2363
    // 説明:9242
    // 0x9242 (Windows-31J)
    // 0x9054 (UTF-16BE)
    if (argCheck == '達') {
        return true;
    }
    // No.2364
    // 説明:9243
    // 0x9243 (Windows-31J)
    // 0x8fb0 (UTF-16BE)
    if (argCheck == '辰') {
        return true;
    }
    // No.2365
    // 説明:9244
    // 0x9244 (Windows-31J)
    // 0x596a (UTF-16BE)
    if (argCheck == '奪') {
        return true;
    }
    // No.2366
    // 説明:9245
    // 0x9245 (Windows-31J)
    // 0x8131 (UTF-16BE)
    if (argCheck == '脱') {
        return true;
    }
    // No.2367
    // 説明:9246
    // 0x9246 (Windows-31J)
    // 0x5dfd (UTF-16BE)
    if (argCheck == '巽') {
        return true;
    }
    // No.2368
    // 説明:9247
    // 0x9247 (Windows-31J)
    // 0x7aea (UTF-16BE)
    if (argCheck == '竪') {
        return true;
    }
    // No.2369
    // 説明:9248
    // 0x9248 (Windows-31J)
    // 0x8fbf (UTF-16BE)
    if (argCheck == '辿') {
        return true;
    }
    // No.2370
    // 説明:9249
    // 0x9249 (Windows-31J)
    // 0x68da (UTF-16BE)
    if (argCheck == '棚') {
        return true;
    }
    // No.2371
    // 説明:924a
    // 0x924a (Windows-31J)
    // 0x8c37 (UTF-16BE)
    if (argCheck == '谷') {
        return true;
    }
    // No.2372
    // 説明:924b
    // 0x924b (Windows-31J)
    // 0x72f8 (UTF-16BE)
    if (argCheck == '狸') {
        return true;
    }
    // No.2373
    // 説明:924c
    // 0x924c (Windows-31J)
    // 0x9c48 (UTF-16BE)
    if (argCheck == '鱈') {
        return true;
    }
    // No.2374
    // 説明:924d
    // 0x924d (Windows-31J)
    // 0x6a3d (UTF-16BE)
    if (argCheck == '樽') {
        return true;
    }
    // No.2375
    // 説明:924e
    // 0x924e (Windows-31J)
    // 0x8ab0 (UTF-16BE)
    if (argCheck == '誰') {
        return true;
    }
    // No.2376
    // 説明:924f
    // 0x924f (Windows-31J)
    // 0x4e39 (UTF-16BE)
    if (argCheck == '丹') {
        return true;
    }
    // No.2377
    // 説明:9250
    // 0x9250 (Windows-31J)
    // 0x5358 (UTF-16BE)
    if (argCheck == '単') {
        return true;
    }
    // No.2378
    // 説明:9251
    // 0x9251 (Windows-31J)
    // 0x5606 (UTF-16BE)
    if (argCheck == '嘆') {
        return true;
    }
    // No.2379
    // 説明:9252
    // 0x9252 (Windows-31J)
    // 0x5766 (UTF-16BE)
    if (argCheck == '坦') {
        return true;
    }
    // No.2380
    // 説明:9253
    // 0x9253 (Windows-31J)
    // 0x62c5 (UTF-16BE)
    if (argCheck == '担') {
        return true;
    }
    // No.2381
    // 説明:9254
    // 0x9254 (Windows-31J)
    // 0x63a2 (UTF-16BE)
    if (argCheck == '探') {
        return true;
    }
    // No.2382
    // 説明:9255
    // 0x9255 (Windows-31J)
    // 0x65e6 (UTF-16BE)
    if (argCheck == '旦') {
        return true;
    }
    // No.2383
    // 説明:9256
    // 0x9256 (Windows-31J)
    // 0x6b4e (UTF-16BE)
    if (argCheck == '歎') {
        return true;
    }
    // No.2384
    // 説明:9257
    // 0x9257 (Windows-31J)
    // 0x6de1 (UTF-16BE)
    if (argCheck == '淡') {
        return true;
    }
    // No.2385
    // 説明:9258
    // 0x9258 (Windows-31J)
    // 0x6e5b (UTF-16BE)
    if (argCheck == '湛') {
        return true;
    }
    // No.2386
    // 説明:9259
    // 0x9259 (Windows-31J)
    // 0x70ad (UTF-16BE)
    if (argCheck == '炭') {
        return true;
    }
    // No.2387
    // 説明:925a
    // 0x925a (Windows-31J)
    // 0x77ed (UTF-16BE)
    if (argCheck == '短') {
        return true;
    }
    // No.2388
    // 説明:925b
    // 0x925b (Windows-31J)
    // 0x7aef (UTF-16BE)
    if (argCheck == '端') {
        return true;
    }
    // No.2389
    // 説明:925c
    // 0x925c (Windows-31J)
    // 0x7baa (UTF-16BE)
    if (argCheck == '箪') {
        return true;
    }
    // No.2390
    // 説明:925d
    // 0x925d (Windows-31J)
    // 0x7dbb (UTF-16BE)
    if (argCheck == '綻') {
        return true;
    }
    // No.2391
    // 説明:925e
    // 0x925e (Windows-31J)
    // 0x803d (UTF-16BE)
    if (argCheck == '耽') {
        return true;
    }
    // No.2392
    // 説明:925f
    // 0x925f (Windows-31J)
    // 0x80c6 (UTF-16BE)
    if (argCheck == '胆') {
        return true;
    }
    // No.2393
    // 説明:9260
    // 0x9260 (Windows-31J)
    // 0x86cb (UTF-16BE)
    if (argCheck == '蛋') {
        return true;
    }
    // No.2394
    // 説明:9261
    // 0x9261 (Windows-31J)
    // 0x8a95 (UTF-16BE)
    if (argCheck == '誕') {
        return true;
    }
    // No.2395
    // 説明:9262
    // 0x9262 (Windows-31J)
    // 0x935b (UTF-16BE)
    if (argCheck == '鍛') {
        return true;
    }
    // No.2396
    // 説明:9263
    // 0x9263 (Windows-31J)
    // 0x56e3 (UTF-16BE)
    if (argCheck == '団') {
        return true;
    }
    // No.2397
    // 説明:9264
    // 0x9264 (Windows-31J)
    // 0x58c7 (UTF-16BE)
    if (argCheck == '壇') {
        return true;
    }
    // No.2398
    // 説明:9265
    // 0x9265 (Windows-31J)
    // 0x5f3e (UTF-16BE)
    if (argCheck == '弾') {
        return true;
    }
    // No.2399
    // 説明:9266
    // 0x9266 (Windows-31J)
    // 0x65ad (UTF-16BE)
    if (argCheck == '断') {
        return true;
    }
    // No.2400
    // 説明:9267
    // 0x9267 (Windows-31J)
    // 0x6696 (UTF-16BE)
    if (argCheck == '暖') {
        return true;
    }
    // No.2401
    // 説明:9268
    // 0x9268 (Windows-31J)
    // 0x6a80 (UTF-16BE)
    if (argCheck == '檀') {
        return true;
    }
    // No.2402
    // 説明:9269
    // 0x9269 (Windows-31J)
    // 0x6bb5 (UTF-16BE)
    if (argCheck == '段') {
        return true;
    }
    // No.2403
    // 説明:926a
    // 0x926a (Windows-31J)
    // 0x7537 (UTF-16BE)
    if (argCheck == '男') {
        return true;
    }
    // No.2404
    // 説明:926b
    // 0x926b (Windows-31J)
    // 0x8ac7 (UTF-16BE)
    if (argCheck == '談') {
        return true;
    }
    // No.2405
    // 説明:926c
    // 0x926c (Windows-31J)
    // 0x5024 (UTF-16BE)
    if (argCheck == '値') {
        return true;
    }
    // No.2406
    // 説明:926d
    // 0x926d (Windows-31J)
    // 0x77e5 (UTF-16BE)
    if (argCheck == '知') {
        return true;
    }
    // No.2407
    // 説明:926e
    // 0x926e (Windows-31J)
    // 0x5730 (UTF-16BE)
    if (argCheck == '地') {
        return true;
    }
    // No.2408
    // 説明:926f
    // 0x926f (Windows-31J)
    // 0x5f1b (UTF-16BE)
    if (argCheck == '弛') {
        return true;
    }
    // No.2409
    // 説明:9270
    // 0x9270 (Windows-31J)
    // 0x6065 (UTF-16BE)
    if (argCheck == '恥') {
        return true;
    }
    // No.2410
    // 説明:9271
    // 0x9271 (Windows-31J)
    // 0x667a (UTF-16BE)
    if (argCheck == '智') {
        return true;
    }
    // No.2411
    // 説明:9272
    // 0x9272 (Windows-31J)
    // 0x6c60 (UTF-16BE)
    if (argCheck == '池') {
        return true;
    }
    // No.2412
    // 説明:9273
    // 0x9273 (Windows-31J)
    // 0x75f4 (UTF-16BE)
    if (argCheck == '痴') {
        return true;
    }
    // No.2413
    // 説明:9274
    // 0x9274 (Windows-31J)
    // 0x7a1a (UTF-16BE)
    if (argCheck == '稚') {
        return true;
    }
    // No.2414
    // 説明:9275
    // 0x9275 (Windows-31J)
    // 0x7f6e (UTF-16BE)
    if (argCheck == '置') {
        return true;
    }
    // No.2415
    // 説明:9276
    // 0x9276 (Windows-31J)
    // 0x81f4 (UTF-16BE)
    if (argCheck == '致') {
        return true;
    }
    // No.2416
    // 説明:9277
    // 0x9277 (Windows-31J)
    // 0x8718 (UTF-16BE)
    if (argCheck == '蜘') {
        return true;
    }
    // No.2417
    // 説明:9278
    // 0x9278 (Windows-31J)
    // 0x9045 (UTF-16BE)
    if (argCheck == '遅') {
        return true;
    }
    // No.2418
    // 説明:9279
    // 0x9279 (Windows-31J)
    // 0x99b3 (UTF-16BE)
    if (argCheck == '馳') {
        return true;
    }
    // No.2419
    // 説明:927a
    // 0x927a (Windows-31J)
    // 0x7bc9 (UTF-16BE)
    if (argCheck == '築') {
        return true;
    }
    // No.2420
    // 説明:927b
    // 0x927b (Windows-31J)
    // 0x755c (UTF-16BE)
    if (argCheck == '畜') {
        return true;
    }
    // No.2421
    // 説明:927c
    // 0x927c (Windows-31J)
    // 0x7af9 (UTF-16BE)
    if (argCheck == '竹') {
        return true;
    }
    // No.2422
    // 説明:927d
    // 0x927d (Windows-31J)
    // 0x7b51 (UTF-16BE)
    if (argCheck == '筑') {
        return true;
    }
    // No.2423
    // 説明:927e
    // 0x927e (Windows-31J)
    // 0x84c4 (UTF-16BE)
    if (argCheck == '蓄') {
        return true;
    }
    // No.2424
    // 説明:9280
    // 0x9280 (Windows-31J)
    // 0x9010 (UTF-16BE)
    if (argCheck == '逐') {
        return true;
    }
    // No.2425
    // 説明:9281
    // 0x9281 (Windows-31J)
    // 0x79e9 (UTF-16BE)
    if (argCheck == '秩') {
        return true;
    }
    // No.2426
    // 説明:9282
    // 0x9282 (Windows-31J)
    // 0x7a92 (UTF-16BE)
    if (argCheck == '窒') {
        return true;
    }
    // No.2427
    // 説明:9283
    // 0x9283 (Windows-31J)
    // 0x8336 (UTF-16BE)
    if (argCheck == '茶') {
        return true;
    }
    // No.2428
    // 説明:9284
    // 0x9284 (Windows-31J)
    // 0x5ae1 (UTF-16BE)
    if (argCheck == '嫡') {
        return true;
    }
    // No.2429
    // 説明:9285
    // 0x9285 (Windows-31J)
    // 0x7740 (UTF-16BE)
    if (argCheck == '着') {
        return true;
    }
    // No.2430
    // 説明:9286
    // 0x9286 (Windows-31J)
    // 0x4e2d (UTF-16BE)
    if (argCheck == '中') {
        return true;
    }
    // No.2431
    // 説明:9287
    // 0x9287 (Windows-31J)
    // 0x4ef2 (UTF-16BE)
    if (argCheck == '仲') {
        return true;
    }
    // No.2432
    // 説明:9288
    // 0x9288 (Windows-31J)
    // 0x5b99 (UTF-16BE)
    if (argCheck == '宙') {
        return true;
    }
    // No.2433
    // 説明:9289
    // 0x9289 (Windows-31J)
    // 0x5fe0 (UTF-16BE)
    if (argCheck == '忠') {
        return true;
    }
    // No.2434
    // 説明:928a
    // 0x928a (Windows-31J)
    // 0x62bd (UTF-16BE)
    if (argCheck == '抽') {
        return true;
    }
    // No.2435
    // 説明:928b
    // 0x928b (Windows-31J)
    // 0x663c (UTF-16BE)
    if (argCheck == '昼') {
        return true;
    }
    // No.2436
    // 説明:928c
    // 0x928c (Windows-31J)
    // 0x67f1 (UTF-16BE)
    if (argCheck == '柱') {
        return true;
    }
    // No.2437
    // 説明:928d
    // 0x928d (Windows-31J)
    // 0x6ce8 (UTF-16BE)
    if (argCheck == '注') {
        return true;
    }
    // No.2438
    // 説明:928e
    // 0x928e (Windows-31J)
    // 0x866b (UTF-16BE)
    if (argCheck == '虫') {
        return true;
    }
    // No.2439
    // 説明:928f
    // 0x928f (Windows-31J)
    // 0x8877 (UTF-16BE)
    if (argCheck == '衷') {
        return true;
    }
    // No.2440
    // 説明:9290
    // 0x9290 (Windows-31J)
    // 0x8a3b (UTF-16BE)
    if (argCheck == '註') {
        return true;
    }
    // No.2441
    // 説明:9291
    // 0x9291 (Windows-31J)
    // 0x914e (UTF-16BE)
    if (argCheck == '酎') {
        return true;
    }
    // No.2442
    // 説明:9292
    // 0x9292 (Windows-31J)
    // 0x92f3 (UTF-16BE)
    if (argCheck == '鋳') {
        return true;
    }
    // No.2443
    // 説明:9293
    // 0x9293 (Windows-31J)
    // 0x99d0 (UTF-16BE)
    if (argCheck == '駐') {
        return true;
    }
    // No.2444
    // 説明:9294
    // 0x9294 (Windows-31J)
    // 0x6a17 (UTF-16BE)
    if (argCheck == '樗') {
        return true;
    }
    // No.2445
    // 説明:9295
    // 0x9295 (Windows-31J)
    // 0x7026 (UTF-16BE)
    if (argCheck == '瀦') {
        return true;
    }
    // No.2446
    // 説明:9296
    // 0x9296 (Windows-31J)
    // 0x732a (UTF-16BE)
    if (argCheck == '猪') {
        return true;
    }
    // No.2447
    // 説明:9297
    // 0x9297 (Windows-31J)
    // 0x82e7 (UTF-16BE)
    if (argCheck == '苧') {
        return true;
    }
    // No.2448
    // 説明:9298
    // 0x9298 (Windows-31J)
    // 0x8457 (UTF-16BE)
    if (argCheck == '著') {
        return true;
    }
    // No.2449
    // 説明:9299
    // 0x9299 (Windows-31J)
    // 0x8caf (UTF-16BE)
    if (argCheck == '貯') {
        return true;
    }
    // No.2450
    // 説明:929a
    // 0x929a (Windows-31J)
    // 0x4e01 (UTF-16BE)
    if (argCheck == '丁') {
        return true;
    }
    // No.2451
    // 説明:929b
    // 0x929b (Windows-31J)
    // 0x5146 (UTF-16BE)
    if (argCheck == '兆') {
        return true;
    }
    // No.2452
    // 説明:929c
    // 0x929c (Windows-31J)
    // 0x51cb (UTF-16BE)
    if (argCheck == '凋') {
        return true;
    }
    // No.2453
    // 説明:929d
    // 0x929d (Windows-31J)
    // 0x558b (UTF-16BE)
    if (argCheck == '喋') {
        return true;
    }
    // No.2454
    // 説明:929e
    // 0x929e (Windows-31J)
    // 0x5bf5 (UTF-16BE)
    if (argCheck == '寵') {
        return true;
    }
    // No.2455
    // 説明:929f
    // 0x929f (Windows-31J)
    // 0x5e16 (UTF-16BE)
    if (argCheck == '帖') {
        return true;
    }
    // No.2456
    // 説明:92a0
    // 0x92a0 (Windows-31J)
    // 0x5e33 (UTF-16BE)
    if (argCheck == '帳') {
        return true;
    }
    // No.2457
    // 説明:92a1
    // 0x92a1 (Windows-31J)
    // 0x5e81 (UTF-16BE)
    if (argCheck == '庁') {
        return true;
    }
    // No.2458
    // 説明:92a2
    // 0x92a2 (Windows-31J)
    // 0x5f14 (UTF-16BE)
    if (argCheck == '弔') {
        return true;
    }
    // No.2459
    // 説明:92a3
    // 0x92a3 (Windows-31J)
    // 0x5f35 (UTF-16BE)
    if (argCheck == '張') {
        return true;
    }
    // No.2460
    // 説明:92a4
    // 0x92a4 (Windows-31J)
    // 0x5f6b (UTF-16BE)
    if (argCheck == '彫') {
        return true;
    }
    // No.2461
    // 説明:92a5
    // 0x92a5 (Windows-31J)
    // 0x5fb4 (UTF-16BE)
    if (argCheck == '徴') {
        return true;
    }
    // No.2462
    // 説明:92a6
    // 0x92a6 (Windows-31J)
    // 0x61f2 (UTF-16BE)
    if (argCheck == '懲') {
        return true;
    }
    // No.2463
    // 説明:92a7
    // 0x92a7 (Windows-31J)
    // 0x6311 (UTF-16BE)
    if (argCheck == '挑') {
        return true;
    }
    // No.2464
    // 説明:92a8
    // 0x92a8 (Windows-31J)
    // 0x66a2 (UTF-16BE)
    if (argCheck == '暢') {
        return true;
    }
    // No.2465
    // 説明:92a9
    // 0x92a9 (Windows-31J)
    // 0x671d (UTF-16BE)
    if (argCheck == '朝') {
        return true;
    }
    // No.2466
    // 説明:92aa
    // 0x92aa (Windows-31J)
    // 0x6f6e (UTF-16BE)
    if (argCheck == '潮') {
        return true;
    }
    // No.2467
    // 説明:92ab
    // 0x92ab (Windows-31J)
    // 0x7252 (UTF-16BE)
    if (argCheck == '牒') {
        return true;
    }
    // No.2468
    // 説明:92ac
    // 0x92ac (Windows-31J)
    // 0x753a (UTF-16BE)
    if (argCheck == '町') {
        return true;
    }
    // No.2469
    // 説明:92ad
    // 0x92ad (Windows-31J)
    // 0x773a (UTF-16BE)
    if (argCheck == '眺') {
        return true;
    }
    // No.2470
    // 説明:92ae
    // 0x92ae (Windows-31J)
    // 0x8074 (UTF-16BE)
    if (argCheck == '聴') {
        return true;
    }
    // No.2471
    // 説明:92af
    // 0x92af (Windows-31J)
    // 0x8139 (UTF-16BE)
    if (argCheck == '脹') {
        return true;
    }
    // No.2472
    // 説明:92b0
    // 0x92b0 (Windows-31J)
    // 0x8178 (UTF-16BE)
    if (argCheck == '腸') {
        return true;
    }
    // No.2473
    // 説明:92b1
    // 0x92b1 (Windows-31J)
    // 0x8776 (UTF-16BE)
    if (argCheck == '蝶') {
        return true;
    }
    // No.2474
    // 説明:92b2
    // 0x92b2 (Windows-31J)
    // 0x8abf (UTF-16BE)
    if (argCheck == '調') {
        return true;
    }
    // No.2475
    // 説明:92b3
    // 0x92b3 (Windows-31J)
    // 0x8adc (UTF-16BE)
    if (argCheck == '諜') {
        return true;
    }
    // No.2476
    // 説明:92b4
    // 0x92b4 (Windows-31J)
    // 0x8d85 (UTF-16BE)
    if (argCheck == '超') {
        return true;
    }
    // No.2477
    // 説明:92b5
    // 0x92b5 (Windows-31J)
    // 0x8df3 (UTF-16BE)
    if (argCheck == '跳') {
        return true;
    }
    // No.2478
    // 説明:92b6
    // 0x92b6 (Windows-31J)
    // 0x929a (UTF-16BE)
    if (argCheck == '銚') {
        return true;
    }
    // No.2479
    // 説明:92b7
    // 0x92b7 (Windows-31J)
    // 0x9577 (UTF-16BE)
    if (argCheck == '長') {
        return true;
    }
    // No.2480
    // 説明:92b8
    // 0x92b8 (Windows-31J)
    // 0x9802 (UTF-16BE)
    if (argCheck == '頂') {
        return true;
    }
    // No.2481
    // 説明:92b9
    // 0x92b9 (Windows-31J)
    // 0x9ce5 (UTF-16BE)
    if (argCheck == '鳥') {
        return true;
    }
    // No.2482
    // 説明:92ba
    // 0x92ba (Windows-31J)
    // 0x52c5 (UTF-16BE)
    if (argCheck == '勅') {
        return true;
    }
    // No.2483
    // 説明:92bb
    // 0x92bb (Windows-31J)
    // 0x6357 (UTF-16BE)
    if (argCheck == '捗') {
        return true;
    }
    // No.2484
    // 説明:92bc
    // 0x92bc (Windows-31J)
    // 0x76f4 (UTF-16BE)
    if (argCheck == '直') {
        return true;
    }
    // No.2485
    // 説明:92bd
    // 0x92bd (Windows-31J)
    // 0x6715 (UTF-16BE)
    if (argCheck == '朕') {
        return true;
    }
    // No.2486
    // 説明:92be
    // 0x92be (Windows-31J)
    // 0x6c88 (UTF-16BE)
    if (argCheck == '沈') {
        return true;
    }
    // No.2487
    // 説明:92bf
    // 0x92bf (Windows-31J)
    // 0x73cd (UTF-16BE)
    if (argCheck == '珍') {
        return true;
    }
    // No.2488
    // 説明:92c0
    // 0x92c0 (Windows-31J)
    // 0x8cc3 (UTF-16BE)
    if (argCheck == '賃') {
        return true;
    }
    // No.2489
    // 説明:92c1
    // 0x92c1 (Windows-31J)
    // 0x93ae (UTF-16BE)
    if (argCheck == '鎮') {
        return true;
    }
    // No.2490
    // 説明:92c2
    // 0x92c2 (Windows-31J)
    // 0x9673 (UTF-16BE)
    if (argCheck == '陳') {
        return true;
    }
    // No.2491
    // 説明:92c3
    // 0x92c3 (Windows-31J)
    // 0x6d25 (UTF-16BE)
    if (argCheck == '津') {
        return true;
    }
    // No.2492
    // 説明:92c4
    // 0x92c4 (Windows-31J)
    // 0x589c (UTF-16BE)
    if (argCheck == '墜') {
        return true;
    }
    // No.2493
    // 説明:92c5
    // 0x92c5 (Windows-31J)
    // 0x690e (UTF-16BE)
    if (argCheck == '椎') {
        return true;
    }
    // No.2494
    // 説明:92c6
    // 0x92c6 (Windows-31J)
    // 0x69cc (UTF-16BE)
    if (argCheck == '槌') {
        return true;
    }
    // No.2495
    // 説明:92c7
    // 0x92c7 (Windows-31J)
    // 0x8ffd (UTF-16BE)
    if (argCheck == '追') {
        return true;
    }
    // No.2496
    // 説明:92c8
    // 0x92c8 (Windows-31J)
    // 0x939a (UTF-16BE)
    if (argCheck == '鎚') {
        return true;
    }
    // No.2497
    // 説明:92c9
    // 0x92c9 (Windows-31J)
    // 0x75db (UTF-16BE)
    if (argCheck == '痛') {
        return true;
    }
    // No.2498
    // 説明:92ca
    // 0x92ca (Windows-31J)
    // 0x901a (UTF-16BE)
    if (argCheck == '通') {
        return true;
    }
    // No.2499
    // 説明:92cb
    // 0x92cb (Windows-31J)
    // 0x585a (UTF-16BE)
    if (argCheck == '塚') {
        return true;
    }
    // No.2500
    // 説明:92cc
    // 0x92cc (Windows-31J)
    // 0x6802 (UTF-16BE)
    if (argCheck == '栂') {
        return true;
    }
    // No.2501
    // 説明:92cd
    // 0x92cd (Windows-31J)
    // 0x63b4 (UTF-16BE)
    if (argCheck == '掴') {
        return true;
    }
    // No.2502
    // 説明:92ce
    // 0x92ce (Windows-31J)
    // 0x69fb (UTF-16BE)
    if (argCheck == '槻') {
        return true;
    }
    // No.2503
    // 説明:92cf
    // 0x92cf (Windows-31J)
    // 0x4f43 (UTF-16BE)
    if (argCheck == '佃') {
        return true;
    }
    // No.2504
    // 説明:92d0
    // 0x92d0 (Windows-31J)
    // 0x6f2c (UTF-16BE)
    if (argCheck == '漬') {
        return true;
    }
    // No.2505
    // 説明:92d1
    // 0x92d1 (Windows-31J)
    // 0x67d8 (UTF-16BE)
    if (argCheck == '柘') {
        return true;
    }
    // No.2506
    // 説明:92d2
    // 0x92d2 (Windows-31J)
    // 0x8fbb (UTF-16BE)
    if (argCheck == '辻') {
        return true;
    }
    // No.2507
    // 説明:92d3
    // 0x92d3 (Windows-31J)
    // 0x8526 (UTF-16BE)
    if (argCheck == '蔦') {
        return true;
    }
    // No.2508
    // 説明:92d4
    // 0x92d4 (Windows-31J)
    // 0x7db4 (UTF-16BE)
    if (argCheck == '綴') {
        return true;
    }
    // No.2509
    // 説明:92d5
    // 0x92d5 (Windows-31J)
    // 0x9354 (UTF-16BE)
    if (argCheck == '鍔') {
        return true;
    }
    // No.2510
    // 説明:92d6
    // 0x92d6 (Windows-31J)
    // 0x693f (UTF-16BE)
    if (argCheck == '椿') {
        return true;
    }
    // No.2511
    // 説明:92d7
    // 0x92d7 (Windows-31J)
    // 0x6f70 (UTF-16BE)
    if (argCheck == '潰') {
        return true;
    }
    // No.2512
    // 説明:92d8
    // 0x92d8 (Windows-31J)
    // 0x576a (UTF-16BE)
    if (argCheck == '坪') {
        return true;
    }
    // No.2513
    // 説明:92d9
    // 0x92d9 (Windows-31J)
    // 0x58f7 (UTF-16BE)
    if (argCheck == '壷') {
        return true;
    }
    // No.2514
    // 説明:92da
    // 0x92da (Windows-31J)
    // 0x5b2c (UTF-16BE)
    if (argCheck == '嬬') {
        return true;
    }
    // No.2515
    // 説明:92db
    // 0x92db (Windows-31J)
    // 0x7d2c (UTF-16BE)
    if (argCheck == '紬') {
        return true;
    }
    // No.2516
    // 説明:92dc
    // 0x92dc (Windows-31J)
    // 0x722a (UTF-16BE)
    if (argCheck == '爪') {
        return true;
    }
    // No.2517
    // 説明:92dd
    // 0x92dd (Windows-31J)
    // 0x540a (UTF-16BE)
    if (argCheck == '吊') {
        return true;
    }
    // No.2518
    // 説明:92de
    // 0x92de (Windows-31J)
    // 0x91e3 (UTF-16BE)
    if (argCheck == '釣') {
        return true;
    }
    // No.2519
    // 説明:92df
    // 0x92df (Windows-31J)
    // 0x9db4 (UTF-16BE)
    if (argCheck == '鶴') {
        return true;
    }
    // No.2520
    // 説明:92e0
    // 0x92e0 (Windows-31J)
    // 0x4ead (UTF-16BE)
    if (argCheck == '亭') {
        return true;
    }
    // No.2521
    // 説明:92e1
    // 0x92e1 (Windows-31J)
    // 0x4f4e (UTF-16BE)
    if (argCheck == '低') {
        return true;
    }
    // No.2522
    // 説明:92e2
    // 0x92e2 (Windows-31J)
    // 0x505c (UTF-16BE)
    if (argCheck == '停') {
        return true;
    }
    // No.2523
    // 説明:92e3
    // 0x92e3 (Windows-31J)
    // 0x5075 (UTF-16BE)
    if (argCheck == '偵') {
        return true;
    }
    // No.2524
    // 説明:92e4
    // 0x92e4 (Windows-31J)
    // 0x5243 (UTF-16BE)
    if (argCheck == '剃') {
        return true;
    }
    // No.2525
    // 説明:92e5
    // 0x92e5 (Windows-31J)
    // 0x8c9e (UTF-16BE)
    if (argCheck == '貞') {
        return true;
    }
    // No.2526
    // 説明:92e6
    // 0x92e6 (Windows-31J)
    // 0x5448 (UTF-16BE)
    if (argCheck == '呈') {
        return true;
    }
    // No.2527
    // 説明:92e7
    // 0x92e7 (Windows-31J)
    // 0x5824 (UTF-16BE)
    if (argCheck == '堤') {
        return true;
    }
    // No.2528
    // 説明:92e8
    // 0x92e8 (Windows-31J)
    // 0x5b9a (UTF-16BE)
    if (argCheck == '定') {
        return true;
    }
    // No.2529
    // 説明:92e9
    // 0x92e9 (Windows-31J)
    // 0x5e1d (UTF-16BE)
    if (argCheck == '帝') {
        return true;
    }
    // No.2530
    // 説明:92ea
    // 0x92ea (Windows-31J)
    // 0x5e95 (UTF-16BE)
    if (argCheck == '底') {
        return true;
    }
    // No.2531
    // 説明:92eb
    // 0x92eb (Windows-31J)
    // 0x5ead (UTF-16BE)
    if (argCheck == '庭') {
        return true;
    }
    // No.2532
    // 説明:92ec
    // 0x92ec (Windows-31J)
    // 0x5ef7 (UTF-16BE)
    if (argCheck == '廷') {
        return true;
    }
    // No.2533
    // 説明:92ed
    // 0x92ed (Windows-31J)
    // 0x5f1f (UTF-16BE)
    if (argCheck == '弟') {
        return true;
    }
    // No.2534
    // 説明:92ee
    // 0x92ee (Windows-31J)
    // 0x608c (UTF-16BE)
    if (argCheck == '悌') {
        return true;
    }
    // No.2535
    // 説明:92ef
    // 0x92ef (Windows-31J)
    // 0x62b5 (UTF-16BE)
    if (argCheck == '抵') {
        return true;
    }
    // No.2536
    // 説明:92f0
    // 0x92f0 (Windows-31J)
    // 0x633a (UTF-16BE)
    if (argCheck == '挺') {
        return true;
    }
    // No.2537
    // 説明:92f1
    // 0x92f1 (Windows-31J)
    // 0x63d0 (UTF-16BE)
    if (argCheck == '提') {
        return true;
    }
    // No.2538
    // 説明:92f2
    // 0x92f2 (Windows-31J)
    // 0x68af (UTF-16BE)
    if (argCheck == '梯') {
        return true;
    }
    // No.2539
    // 説明:92f3
    // 0x92f3 (Windows-31J)
    // 0x6c40 (UTF-16BE)
    if (argCheck == '汀') {
        return true;
    }
    // No.2540
    // 説明:92f4
    // 0x92f4 (Windows-31J)
    // 0x7887 (UTF-16BE)
    if (argCheck == '碇') {
        return true;
    }
    // No.2541
    // 説明:92f5
    // 0x92f5 (Windows-31J)
    // 0x798e (UTF-16BE)
    if (argCheck == '禎') {
        return true;
    }
    // No.2542
    // 説明:92f6
    // 0x92f6 (Windows-31J)
    // 0x7a0b (UTF-16BE)
    if (argCheck == '程') {
        return true;
    }
    // No.2543
    // 説明:92f7
    // 0x92f7 (Windows-31J)
    // 0x7de0 (UTF-16BE)
    if (argCheck == '締') {
        return true;
    }
    // No.2544
    // 説明:92f8
    // 0x92f8 (Windows-31J)
    // 0x8247 (UTF-16BE)
    if (argCheck == '艇') {
        return true;
    }
    // No.2545
    // 説明:92f9
    // 0x92f9 (Windows-31J)
    // 0x8a02 (UTF-16BE)
    if (argCheck == '訂') {
        return true;
    }
    // No.2546
    // 説明:92fa
    // 0x92fa (Windows-31J)
    // 0x8ae6 (UTF-16BE)
    if (argCheck == '諦') {
        return true;
    }
    // No.2547
    // 説明:92fb
    // 0x92fb (Windows-31J)
    // 0x8e44 (UTF-16BE)
    if (argCheck == '蹄') {
        return true;
    }
    // No.2548
    // 説明:92fc
    // 0x92fc (Windows-31J)
    // 0x9013 (UTF-16BE)
    if (argCheck == '逓') {
        return true;
    }
    // No.2549
    // 説明:9340
    // 0x9340 (Windows-31J)
    // 0x90b8 (UTF-16BE)
    if (argCheck == '邸') {
        return true;
    }
    // No.2550
    // 説明:9341
    // 0x9341 (Windows-31J)
    // 0x912d (UTF-16BE)
    if (argCheck == '鄭') {
        return true;
    }
    // No.2551
    // 説明:9342
    // 0x9342 (Windows-31J)
    // 0x91d8 (UTF-16BE)
    if (argCheck == '釘') {
        return true;
    }
    // No.2552
    // 説明:9343
    // 0x9343 (Windows-31J)
    // 0x9f0e (UTF-16BE)
    if (argCheck == '鼎') {
        return true;
    }
    // No.2553
    // 説明:9344
    // 0x9344 (Windows-31J)
    // 0x6ce5 (UTF-16BE)
    if (argCheck == '泥') {
        return true;
    }
    // No.2554
    // 説明:9345
    // 0x9345 (Windows-31J)
    // 0x6458 (UTF-16BE)
    if (argCheck == '摘') {
        return true;
    }
    // No.2555
    // 説明:9346
    // 0x9346 (Windows-31J)
    // 0x64e2 (UTF-16BE)
    if (argCheck == '擢') {
        return true;
    }
    // No.2556
    // 説明:9347
    // 0x9347 (Windows-31J)
    // 0x6575 (UTF-16BE)
    if (argCheck == '敵') {
        return true;
    }
    // No.2557
    // 説明:9348
    // 0x9348 (Windows-31J)
    // 0x6ef4 (UTF-16BE)
    if (argCheck == '滴') {
        return true;
    }
    // No.2558
    // 説明:9349
    // 0x9349 (Windows-31J)
    // 0x7684 (UTF-16BE)
    if (argCheck == '的') {
        return true;
    }
    // No.2559
    // 説明:934a
    // 0x934a (Windows-31J)
    // 0x7b1b (UTF-16BE)
    if (argCheck == '笛') {
        return true;
    }
    // No.2560
    // 説明:934b
    // 0x934b (Windows-31J)
    // 0x9069 (UTF-16BE)
    if (argCheck == '適') {
        return true;
    }
    // No.2561
    // 説明:934c
    // 0x934c (Windows-31J)
    // 0x93d1 (UTF-16BE)
    if (argCheck == '鏑') {
        return true;
    }
    // No.2562
    // 説明:934d
    // 0x934d (Windows-31J)
    // 0x6eba (UTF-16BE)
    if (argCheck == '溺') {
        return true;
    }
    // No.2563
    // 説明:934e
    // 0x934e (Windows-31J)
    // 0x54f2 (UTF-16BE)
    if (argCheck == '哲') {
        return true;
    }
    // No.2564
    // 説明:934f
    // 0x934f (Windows-31J)
    // 0x5fb9 (UTF-16BE)
    if (argCheck == '徹') {
        return true;
    }
    // No.2565
    // 説明:9350
    // 0x9350 (Windows-31J)
    // 0x64a4 (UTF-16BE)
    if (argCheck == '撤') {
        return true;
    }
    // No.2566
    // 説明:9351
    // 0x9351 (Windows-31J)
    // 0x8f4d (UTF-16BE)
    if (argCheck == '轍') {
        return true;
    }
    // No.2567
    // 説明:9352
    // 0x9352 (Windows-31J)
    // 0x8fed (UTF-16BE)
    if (argCheck == '迭') {
        return true;
    }
    // No.2568
    // 説明:9353
    // 0x9353 (Windows-31J)
    // 0x9244 (UTF-16BE)
    if (argCheck == '鉄') {
        return true;
    }
    // No.2569
    // 説明:9354
    // 0x9354 (Windows-31J)
    // 0x5178 (UTF-16BE)
    if (argCheck == '典') {
        return true;
    }
    // No.2570
    // 説明:9355
    // 0x9355 (Windows-31J)
    // 0x586b (UTF-16BE)
    if (argCheck == '填') {
        return true;
    }
    // No.2571
    // 説明:9356
    // 0x9356 (Windows-31J)
    // 0x5929 (UTF-16BE)
    if (argCheck == '天') {
        return true;
    }
    // No.2572
    // 説明:9357
    // 0x9357 (Windows-31J)
    // 0x5c55 (UTF-16BE)
    if (argCheck == '展') {
        return true;
    }
    // No.2573
    // 説明:9358
    // 0x9358 (Windows-31J)
    // 0x5e97 (UTF-16BE)
    if (argCheck == '店') {
        return true;
    }
    // No.2574
    // 説明:9359
    // 0x9359 (Windows-31J)
    // 0x6dfb (UTF-16BE)
    if (argCheck == '添') {
        return true;
    }
    // No.2575
    // 説明:935a
    // 0x935a (Windows-31J)
    // 0x7e8f (UTF-16BE)
    if (argCheck == '纏') {
        return true;
    }
    // No.2576
    // 説明:935b
    // 0x935b (Windows-31J)
    // 0x751c (UTF-16BE)
    if (argCheck == '甜') {
        return true;
    }
    // No.2577
    // 説明:935c
    // 0x935c (Windows-31J)
    // 0x8cbc (UTF-16BE)
    if (argCheck == '貼') {
        return true;
    }
    // No.2578
    // 説明:935d
    // 0x935d (Windows-31J)
    // 0x8ee2 (UTF-16BE)
    if (argCheck == '転') {
        return true;
    }
    // No.2579
    // 説明:935e
    // 0x935e (Windows-31J)
    // 0x985b (UTF-16BE)
    if (argCheck == '顛') {
        return true;
    }
    // No.2580
    // 説明:935f
    // 0x935f (Windows-31J)
    // 0x70b9 (UTF-16BE)
    if (argCheck == '点') {
        return true;
    }
    // No.2581
    // 説明:9360
    // 0x9360 (Windows-31J)
    // 0x4f1d (UTF-16BE)
    if (argCheck == '伝') {
        return true;
    }
    // No.2582
    // 説明:9361
    // 0x9361 (Windows-31J)
    // 0x6bbf (UTF-16BE)
    if (argCheck == '殿') {
        return true;
    }
    // No.2583
    // 説明:9362
    // 0x9362 (Windows-31J)
    // 0x6fb1 (UTF-16BE)
    if (argCheck == '澱') {
        return true;
    }
    // No.2584
    // 説明:9363
    // 0x9363 (Windows-31J)
    // 0x7530 (UTF-16BE)
    if (argCheck == '田') {
        return true;
    }
    // No.2585
    // 説明:9364
    // 0x9364 (Windows-31J)
    // 0x96fb (UTF-16BE)
    if (argCheck == '電') {
        return true;
    }
    // No.2586
    // 説明:9365
    // 0x9365 (Windows-31J)
    // 0x514e (UTF-16BE)
    if (argCheck == '兎') {
        return true;
    }
    // No.2587
    // 説明:9366
    // 0x9366 (Windows-31J)
    // 0x5410 (UTF-16BE)
    if (argCheck == '吐') {
        return true;
    }
    // No.2588
    // 説明:9367
    // 0x9367 (Windows-31J)
    // 0x5835 (UTF-16BE)
    if (argCheck == '堵') {
        return true;
    }
    // No.2589
    // 説明:9368
    // 0x9368 (Windows-31J)
    // 0x5857 (UTF-16BE)
    if (argCheck == '塗') {
        return true;
    }
    // No.2590
    // 説明:9369
    // 0x9369 (Windows-31J)
    // 0x59ac (UTF-16BE)
    if (argCheck == '妬') {
        return true;
    }
    // No.2591
    // 説明:936a
    // 0x936a (Windows-31J)
    // 0x5c60 (UTF-16BE)
    if (argCheck == '屠') {
        return true;
    }
    // No.2592
    // 説明:936b
    // 0x936b (Windows-31J)
    // 0x5f92 (UTF-16BE)
    if (argCheck == '徒') {
        return true;
    }
    // No.2593
    // 説明:936c
    // 0x936c (Windows-31J)
    // 0x6597 (UTF-16BE)
    if (argCheck == '斗') {
        return true;
    }
    // No.2594
    // 説明:936d
    // 0x936d (Windows-31J)
    // 0x675c (UTF-16BE)
    if (argCheck == '杜') {
        return true;
    }
    // No.2595
    // 説明:936e
    // 0x936e (Windows-31J)
    // 0x6e21 (UTF-16BE)
    if (argCheck == '渡') {
        return true;
    }
    // No.2596
    // 説明:936f
    // 0x936f (Windows-31J)
    // 0x767b (UTF-16BE)
    if (argCheck == '登') {
        return true;
    }
    // No.2597
    // 説明:9370
    // 0x9370 (Windows-31J)
    // 0x83df (UTF-16BE)
    if (argCheck == '菟') {
        return true;
    }
    // No.2598
    // 説明:9371
    // 0x9371 (Windows-31J)
    // 0x8ced (UTF-16BE)
    if (argCheck == '賭') {
        return true;
    }
    // No.2599
    // 説明:9372
    // 0x9372 (Windows-31J)
    // 0x9014 (UTF-16BE)
    if (argCheck == '途') {
        return true;
    }
    // No.2600
    // 説明:9373
    // 0x9373 (Windows-31J)
    // 0x90fd (UTF-16BE)
    if (argCheck == '都') {
        return true;
    }
    // No.2601
    // 説明:9374
    // 0x9374 (Windows-31J)
    // 0x934d (UTF-16BE)
    if (argCheck == '鍍') {
        return true;
    }
    // No.2602
    // 説明:9375
    // 0x9375 (Windows-31J)
    // 0x7825 (UTF-16BE)
    if (argCheck == '砥') {
        return true;
    }
    // No.2603
    // 説明:9376
    // 0x9376 (Windows-31J)
    // 0x783a (UTF-16BE)
    if (argCheck == '砺') {
        return true;
    }
    // No.2604
    // 説明:9377
    // 0x9377 (Windows-31J)
    // 0x52aa (UTF-16BE)
    if (argCheck == '努') {
        return true;
    }
    // No.2605
    // 説明:9378
    // 0x9378 (Windows-31J)
    // 0x5ea6 (UTF-16BE)
    if (argCheck == '度') {
        return true;
    }
    // No.2606
    // 説明:9379
    // 0x9379 (Windows-31J)
    // 0x571f (UTF-16BE)
    if (argCheck == '土') {
        return true;
    }
    // No.2607
    // 説明:937a
    // 0x937a (Windows-31J)
    // 0x5974 (UTF-16BE)
    if (argCheck == '奴') {
        return true;
    }
    // No.2608
    // 説明:937b
    // 0x937b (Windows-31J)
    // 0x6012 (UTF-16BE)
    if (argCheck == '怒') {
        return true;
    }
    // No.2609
    // 説明:937c
    // 0x937c (Windows-31J)
    // 0x5012 (UTF-16BE)
    if (argCheck == '倒') {
        return true;
    }
    // No.2610
    // 説明:937d
    // 0x937d (Windows-31J)
    // 0x515a (UTF-16BE)
    if (argCheck == '党') {
        return true;
    }
    // No.2611
    // 説明:937e
    // 0x937e (Windows-31J)
    // 0x51ac (UTF-16BE)
    if (argCheck == '冬') {
        return true;
    }
    // No.2612
    // 説明:9380
    // 0x9380 (Windows-31J)
    // 0x51cd (UTF-16BE)
    if (argCheck == '凍') {
        return true;
    }
    // No.2613
    // 説明:9381
    // 0x9381 (Windows-31J)
    // 0x5200 (UTF-16BE)
    if (argCheck == '刀') {
        return true;
    }
    // No.2614
    // 説明:9382
    // 0x9382 (Windows-31J)
    // 0x5510 (UTF-16BE)
    if (argCheck == '唐') {
        return true;
    }
    // No.2615
    // 説明:9383
    // 0x9383 (Windows-31J)
    // 0x5854 (UTF-16BE)
    if (argCheck == '塔') {
        return true;
    }
    // No.2616
    // 説明:9384
    // 0x9384 (Windows-31J)
    // 0x5858 (UTF-16BE)
    if (argCheck == '塘') {
        return true;
    }
    // No.2617
    // 説明:9385
    // 0x9385 (Windows-31J)
    // 0x5957 (UTF-16BE)
    if (argCheck == '套') {
        return true;
    }
    // No.2618
    // 説明:9386
    // 0x9386 (Windows-31J)
    // 0x5b95 (UTF-16BE)
    if (argCheck == '宕') {
        return true;
    }
    // No.2619
    // 説明:9387
    // 0x9387 (Windows-31J)
    // 0x5cf6 (UTF-16BE)
    if (argCheck == '島') {
        return true;
    }
    // No.2620
    // 説明:9388
    // 0x9388 (Windows-31J)
    // 0x5d8b (UTF-16BE)
    if (argCheck == '嶋') {
        return true;
    }
    // No.2621
    // 説明:9389
    // 0x9389 (Windows-31J)
    // 0x60bc (UTF-16BE)
    if (argCheck == '悼') {
        return true;
    }
    // No.2622
    // 説明:938a
    // 0x938a (Windows-31J)
    // 0x6295 (UTF-16BE)
    if (argCheck == '投') {
        return true;
    }
    // No.2623
    // 説明:938b
    // 0x938b (Windows-31J)
    // 0x642d (UTF-16BE)
    if (argCheck == '搭') {
        return true;
    }
    // No.2624
    // 説明:938c
    // 0x938c (Windows-31J)
    // 0x6771 (UTF-16BE)
    if (argCheck == '東') {
        return true;
    }
    // No.2625
    // 説明:938d
    // 0x938d (Windows-31J)
    // 0x6843 (UTF-16BE)
    if (argCheck == '桃') {
        return true;
    }
    // No.2626
    // 説明:938e
    // 0x938e (Windows-31J)
    // 0x68bc (UTF-16BE)
    if (argCheck == '梼') {
        return true;
    }
    // No.2627
    // 説明:938f
    // 0x938f (Windows-31J)
    // 0x68df (UTF-16BE)
    if (argCheck == '棟') {
        return true;
    }
    // No.2628
    // 説明:9390
    // 0x9390 (Windows-31J)
    // 0x76d7 (UTF-16BE)
    if (argCheck == '盗') {
        return true;
    }
    // No.2629
    // 説明:9391
    // 0x9391 (Windows-31J)
    // 0x6dd8 (UTF-16BE)
    if (argCheck == '淘') {
        return true;
    }
    // No.2630
    // 説明:9392
    // 0x9392 (Windows-31J)
    // 0x6e6f (UTF-16BE)
    if (argCheck == '湯') {
        return true;
    }
    // No.2631
    // 説明:9393
    // 0x9393 (Windows-31J)
    // 0x6d9b (UTF-16BE)
    if (argCheck == '涛') {
        return true;
    }
    // No.2632
    // 説明:9394
    // 0x9394 (Windows-31J)
    // 0x706f (UTF-16BE)
    if (argCheck == '灯') {
        return true;
    }
    // No.2633
    // 説明:9395
    // 0x9395 (Windows-31J)
    // 0x71c8 (UTF-16BE)
    if (argCheck == '燈') {
        return true;
    }
    // No.2634
    // 説明:9396
    // 0x9396 (Windows-31J)
    // 0x5f53 (UTF-16BE)
    if (argCheck == '当') {
        return true;
    }
    // No.2635
    // 説明:9397
    // 0x9397 (Windows-31J)
    // 0x75d8 (UTF-16BE)
    if (argCheck == '痘') {
        return true;
    }
    // No.2636
    // 説明:9398
    // 0x9398 (Windows-31J)
    // 0x7977 (UTF-16BE)
    if (argCheck == '祷') {
        return true;
    }
    // No.2637
    // 説明:9399
    // 0x9399 (Windows-31J)
    // 0x7b49 (UTF-16BE)
    if (argCheck == '等') {
        return true;
    }
    // No.2638
    // 説明:939a
    // 0x939a (Windows-31J)
    // 0x7b54 (UTF-16BE)
    if (argCheck == '答') {
        return true;
    }
    // No.2639
    // 説明:939b
    // 0x939b (Windows-31J)
    // 0x7b52 (UTF-16BE)
    if (argCheck == '筒') {
        return true;
    }
    // No.2640
    // 説明:939c
    // 0x939c (Windows-31J)
    // 0x7cd6 (UTF-16BE)
    if (argCheck == '糖') {
        return true;
    }
    // No.2641
    // 説明:939d
    // 0x939d (Windows-31J)
    // 0x7d71 (UTF-16BE)
    if (argCheck == '統') {
        return true;
    }
    // No.2642
    // 説明:939e
    // 0x939e (Windows-31J)
    // 0x5230 (UTF-16BE)
    if (argCheck == '到') {
        return true;
    }
    // No.2643
    // 説明:939f
    // 0x939f (Windows-31J)
    // 0x8463 (UTF-16BE)
    if (argCheck == '董') {
        return true;
    }
    // No.2644
    // 説明:93a0
    // 0x93a0 (Windows-31J)
    // 0x8569 (UTF-16BE)
    if (argCheck == '蕩') {
        return true;
    }
    // No.2645
    // 説明:93a1
    // 0x93a1 (Windows-31J)
    // 0x85e4 (UTF-16BE)
    if (argCheck == '藤') {
        return true;
    }
    // No.2646
    // 説明:93a2
    // 0x93a2 (Windows-31J)
    // 0x8a0e (UTF-16BE)
    if (argCheck == '討') {
        return true;
    }
    // No.2647
    // 説明:93a3
    // 0x93a3 (Windows-31J)
    // 0x8b04 (UTF-16BE)
    if (argCheck == '謄') {
        return true;
    }
    // No.2648
    // 説明:93a4
    // 0x93a4 (Windows-31J)
    // 0x8c46 (UTF-16BE)
    if (argCheck == '豆') {
        return true;
    }
    // No.2649
    // 説明:93a5
    // 0x93a5 (Windows-31J)
    // 0x8e0f (UTF-16BE)
    if (argCheck == '踏') {
        return true;
    }
    // No.2650
    // 説明:93a6
    // 0x93a6 (Windows-31J)
    // 0x9003 (UTF-16BE)
    if (argCheck == '逃') {
        return true;
    }
    // No.2651
    // 説明:93a7
    // 0x93a7 (Windows-31J)
    // 0x900f (UTF-16BE)
    if (argCheck == '透') {
        return true;
    }
    // No.2652
    // 説明:93a8
    // 0x93a8 (Windows-31J)
    // 0x9419 (UTF-16BE)
    if (argCheck == '鐙') {
        return true;
    }
    // No.2653
    // 説明:93a9
    // 0x93a9 (Windows-31J)
    // 0x9676 (UTF-16BE)
    if (argCheck == '陶') {
        return true;
    }
    // No.2654
    // 説明:93aa
    // 0x93aa (Windows-31J)
    // 0x982d (UTF-16BE)
    if (argCheck == '頭') {
        return true;
    }
    // No.2655
    // 説明:93ab
    // 0x93ab (Windows-31J)
    // 0x9a30 (UTF-16BE)
    if (argCheck == '騰') {
        return true;
    }
    // No.2656
    // 説明:93ac
    // 0x93ac (Windows-31J)
    // 0x95d8 (UTF-16BE)
    if (argCheck == '闘') {
        return true;
    }
    // No.2657
    // 説明:93ad
    // 0x93ad (Windows-31J)
    // 0x50cd (UTF-16BE)
    if (argCheck == '働') {
        return true;
    }
    // No.2658
    // 説明:93ae
    // 0x93ae (Windows-31J)
    // 0x52d5 (UTF-16BE)
    if (argCheck == '動') {
        return true;
    }
    // No.2659
    // 説明:93af
    // 0x93af (Windows-31J)
    // 0x540c (UTF-16BE)
    if (argCheck == '同') {
        return true;
    }
    // No.2660
    // 説明:93b0
    // 0x93b0 (Windows-31J)
    // 0x5802 (UTF-16BE)
    if (argCheck == '堂') {
        return true;
    }
    // No.2661
    // 説明:93b1
    // 0x93b1 (Windows-31J)
    // 0x5c0e (UTF-16BE)
    if (argCheck == '導') {
        return true;
    }
    // No.2662
    // 説明:93b2
    // 0x93b2 (Windows-31J)
    // 0x61a7 (UTF-16BE)
    if (argCheck == '憧') {
        return true;
    }
    // No.2663
    // 説明:93b3
    // 0x93b3 (Windows-31J)
    // 0x649e (UTF-16BE)
    if (argCheck == '撞') {
        return true;
    }
    // No.2664
    // 説明:93b4
    // 0x93b4 (Windows-31J)
    // 0x6d1e (UTF-16BE)
    if (argCheck == '洞') {
        return true;
    }
    // No.2665
    // 説明:93b5
    // 0x93b5 (Windows-31J)
    // 0x77b3 (UTF-16BE)
    if (argCheck == '瞳') {
        return true;
    }
    // No.2666
    // 説明:93b6
    // 0x93b6 (Windows-31J)
    // 0x7ae5 (UTF-16BE)
    if (argCheck == '童') {
        return true;
    }
    // No.2667
    // 説明:93b7
    // 0x93b7 (Windows-31J)
    // 0x80f4 (UTF-16BE)
    if (argCheck == '胴') {
        return true;
    }
    // No.2668
    // 説明:93b8
    // 0x93b8 (Windows-31J)
    // 0x8404 (UTF-16BE)
    if (argCheck == '萄') {
        return true;
    }
    // No.2669
    // 説明:93b9
    // 0x93b9 (Windows-31J)
    // 0x9053 (UTF-16BE)
    if (argCheck == '道') {
        return true;
    }
    // No.2670
    // 説明:93ba
    // 0x93ba (Windows-31J)
    // 0x9285 (UTF-16BE)
    if (argCheck == '銅') {
        return true;
    }
    // No.2671
    // 説明:93bb
    // 0x93bb (Windows-31J)
    // 0x5ce0 (UTF-16BE)
    if (argCheck == '峠') {
        return true;
    }
    // No.2672
    // 説明:93bc
    // 0x93bc (Windows-31J)
    // 0x9d07 (UTF-16BE)
    if (argCheck == '鴇') {
        return true;
    }
    // No.2673
    // 説明:93bd
    // 0x93bd (Windows-31J)
    // 0x533f (UTF-16BE)
    if (argCheck == '匿') {
        return true;
    }
    // No.2674
    // 説明:93be
    // 0x93be (Windows-31J)
    // 0x5f97 (UTF-16BE)
    if (argCheck == '得') {
        return true;
    }
    // No.2675
    // 説明:93bf
    // 0x93bf (Windows-31J)
    // 0x5fb3 (UTF-16BE)
    if (argCheck == '徳') {
        return true;
    }
    // No.2676
    // 説明:93c0
    // 0x93c0 (Windows-31J)
    // 0x6d9c (UTF-16BE)
    if (argCheck == '涜') {
        return true;
    }
    // No.2677
    // 説明:93c1
    // 0x93c1 (Windows-31J)
    // 0x7279 (UTF-16BE)
    if (argCheck == '特') {
        return true;
    }
    // No.2678
    // 説明:93c2
    // 0x93c2 (Windows-31J)
    // 0x7763 (UTF-16BE)
    if (argCheck == '督') {
        return true;
    }
    // No.2679
    // 説明:93c3
    // 0x93c3 (Windows-31J)
    // 0x79bf (UTF-16BE)
    if (argCheck == '禿') {
        return true;
    }
    // No.2680
    // 説明:93c4
    // 0x93c4 (Windows-31J)
    // 0x7be4 (UTF-16BE)
    if (argCheck == '篤') {
        return true;
    }
    // No.2681
    // 説明:93c5
    // 0x93c5 (Windows-31J)
    // 0x6bd2 (UTF-16BE)
    if (argCheck == '毒') {
        return true;
    }
    // No.2682
    // 説明:93c6
    // 0x93c6 (Windows-31J)
    // 0x72ec (UTF-16BE)
    if (argCheck == '独') {
        return true;
    }
    // No.2683
    // 説明:93c7
    // 0x93c7 (Windows-31J)
    // 0x8aad (UTF-16BE)
    if (argCheck == '読') {
        return true;
    }
    // No.2684
    // 説明:93c8
    // 0x93c8 (Windows-31J)
    // 0x6803 (UTF-16BE)
    if (argCheck == '栃') {
        return true;
    }
    // No.2685
    // 説明:93c9
    // 0x93c9 (Windows-31J)
    // 0x6a61 (UTF-16BE)
    if (argCheck == '橡') {
        return true;
    }
    // No.2686
    // 説明:93ca
    // 0x93ca (Windows-31J)
    // 0x51f8 (UTF-16BE)
    if (argCheck == '凸') {
        return true;
    }
    // No.2687
    // 説明:93cb
    // 0x93cb (Windows-31J)
    // 0x7a81 (UTF-16BE)
    if (argCheck == '突') {
        return true;
    }
    // No.2688
    // 説明:93cc
    // 0x93cc (Windows-31J)
    // 0x6934 (UTF-16BE)
    if (argCheck == '椴') {
        return true;
    }
    // No.2689
    // 説明:93cd
    // 0x93cd (Windows-31J)
    // 0x5c4a (UTF-16BE)
    if (argCheck == '届') {
        return true;
    }
    // No.2690
    // 説明:93ce
    // 0x93ce (Windows-31J)
    // 0x9cf6 (UTF-16BE)
    if (argCheck == '鳶') {
        return true;
    }
    // No.2691
    // 説明:93cf
    // 0x93cf (Windows-31J)
    // 0x82eb (UTF-16BE)
    if (argCheck == '苫') {
        return true;
    }
    // No.2692
    // 説明:93d0
    // 0x93d0 (Windows-31J)
    // 0x5bc5 (UTF-16BE)
    if (argCheck == '寅') {
        return true;
    }
    // No.2693
    // 説明:93d1
    // 0x93d1 (Windows-31J)
    // 0x9149 (UTF-16BE)
    if (argCheck == '酉') {
        return true;
    }
    // No.2694
    // 説明:93d2
    // 0x93d2 (Windows-31J)
    // 0x701e (UTF-16BE)
    if (argCheck == '瀞') {
        return true;
    }
    // No.2695
    // 説明:93d3
    // 0x93d3 (Windows-31J)
    // 0x5678 (UTF-16BE)
    if (argCheck == '噸') {
        return true;
    }
    // No.2696
    // 説明:93d4
    // 0x93d4 (Windows-31J)
    // 0x5c6f (UTF-16BE)
    if (argCheck == '屯') {
        return true;
    }
    // No.2697
    // 説明:93d5
    // 0x93d5 (Windows-31J)
    // 0x60c7 (UTF-16BE)
    if (argCheck == '惇') {
        return true;
    }
    // No.2698
    // 説明:93d6
    // 0x93d6 (Windows-31J)
    // 0x6566 (UTF-16BE)
    if (argCheck == '敦') {
        return true;
    }
    // No.2699
    // 説明:93d7
    // 0x93d7 (Windows-31J)
    // 0x6c8c (UTF-16BE)
    if (argCheck == '沌') {
        return true;
    }
    // No.2700
    // 説明:93d8
    // 0x93d8 (Windows-31J)
    // 0x8c5a (UTF-16BE)
    if (argCheck == '豚') {
        return true;
    }
    // No.2701
    // 説明:93d9
    // 0x93d9 (Windows-31J)
    // 0x9041 (UTF-16BE)
    if (argCheck == '遁') {
        return true;
    }
    // No.2702
    // 説明:93da
    // 0x93da (Windows-31J)
    // 0x9813 (UTF-16BE)
    if (argCheck == '頓') {
        return true;
    }
    // No.2703
    // 説明:93db
    // 0x93db (Windows-31J)
    // 0x5451 (UTF-16BE)
    if (argCheck == '呑') {
        return true;
    }
    // No.2704
    // 説明:93dc
    // 0x93dc (Windows-31J)
    // 0x66c7 (UTF-16BE)
    if (argCheck == '曇') {
        return true;
    }
    // No.2705
    // 説明:93dd
    // 0x93dd (Windows-31J)
    // 0x920d (UTF-16BE)
    if (argCheck == '鈍') {
        return true;
    }
    // No.2706
    // 説明:93de
    // 0x93de (Windows-31J)
    // 0x5948 (UTF-16BE)
    if (argCheck == '奈') {
        return true;
    }
    // No.2707
    // 説明:93df
    // 0x93df (Windows-31J)
    // 0x90a3 (UTF-16BE)
    if (argCheck == '那') {
        return true;
    }
    // No.2708
    // 説明:93e0
    // 0x93e0 (Windows-31J)
    // 0x5185 (UTF-16BE)
    if (argCheck == '内') {
        return true;
    }
    // No.2709
    // 説明:93e1
    // 0x93e1 (Windows-31J)
    // 0x4e4d (UTF-16BE)
    if (argCheck == '乍') {
        return true;
    }
    // No.2710
    // 説明:93e2
    // 0x93e2 (Windows-31J)
    // 0x51ea (UTF-16BE)
    if (argCheck == '凪') {
        return true;
    }
    // No.2711
    // 説明:93e3
    // 0x93e3 (Windows-31J)
    // 0x8599 (UTF-16BE)
    if (argCheck == '薙') {
        return true;
    }
    // No.2712
    // 説明:93e4
    // 0x93e4 (Windows-31J)
    // 0x8b0e (UTF-16BE)
    if (argCheck == '謎') {
        return true;
    }
    // No.2713
    // 説明:93e5
    // 0x93e5 (Windows-31J)
    // 0x7058 (UTF-16BE)
    if (argCheck == '灘') {
        return true;
    }
    // No.2714
    // 説明:93e6
    // 0x93e6 (Windows-31J)
    // 0x637a (UTF-16BE)
    if (argCheck == '捺') {
        return true;
    }
    // No.2715
    // 説明:93e7
    // 0x93e7 (Windows-31J)
    // 0x934b (UTF-16BE)
    if (argCheck == '鍋') {
        return true;
    }
    // No.2716
    // 説明:93e8
    // 0x93e8 (Windows-31J)
    // 0x6962 (UTF-16BE)
    if (argCheck == '楢') {
        return true;
    }
    // No.2717
    // 説明:93e9
    // 0x93e9 (Windows-31J)
    // 0x99b4 (UTF-16BE)
    if (argCheck == '馴') {
        return true;
    }
    // No.2718
    // 説明:93ea
    // 0x93ea (Windows-31J)
    // 0x7e04 (UTF-16BE)
    if (argCheck == '縄') {
        return true;
    }
    // No.2719
    // 説明:93eb
    // 0x93eb (Windows-31J)
    // 0x7577 (UTF-16BE)
    if (argCheck == '畷') {
        return true;
    }
    // No.2720
    // 説明:93ec
    // 0x93ec (Windows-31J)
    // 0x5357 (UTF-16BE)
    if (argCheck == '南') {
        return true;
    }
    // No.2721
    // 説明:93ed
    // 0x93ed (Windows-31J)
    // 0x6960 (UTF-16BE)
    if (argCheck == '楠') {
        return true;
    }
    // No.2722
    // 説明:93ee
    // 0x93ee (Windows-31J)
    // 0x8edf (UTF-16BE)
    if (argCheck == '軟') {
        return true;
    }
    // No.2723
    // 説明:93ef
    // 0x93ef (Windows-31J)
    // 0x96e3 (UTF-16BE)
    if (argCheck == '難') {
        return true;
    }
    // No.2724
    // 説明:93f0
    // 0x93f0 (Windows-31J)
    // 0x6c5d (UTF-16BE)
    if (argCheck == '汝') {
        return true;
    }
    // No.2725
    // 説明:93f1
    // 0x93f1 (Windows-31J)
    // 0x4e8c (UTF-16BE)
    if (argCheck == '二') {
        return true;
    }
    // No.2726
    // 説明:93f2
    // 0x93f2 (Windows-31J)
    // 0x5c3c (UTF-16BE)
    if (argCheck == '尼') {
        return true;
    }
    // No.2727
    // 説明:93f3
    // 0x93f3 (Windows-31J)
    // 0x5f10 (UTF-16BE)
    if (argCheck == '弐') {
        return true;
    }
    // No.2728
    // 説明:93f4
    // 0x93f4 (Windows-31J)
    // 0x8fe9 (UTF-16BE)
    if (argCheck == '迩') {
        return true;
    }
    // No.2729
    // 説明:93f5
    // 0x93f5 (Windows-31J)
    // 0x5302 (UTF-16BE)
    if (argCheck == '匂') {
        return true;
    }
    // No.2730
    // 説明:93f6
    // 0x93f6 (Windows-31J)
    // 0x8cd1 (UTF-16BE)
    if (argCheck == '賑') {
        return true;
    }
    // No.2731
    // 説明:93f7
    // 0x93f7 (Windows-31J)
    // 0x8089 (UTF-16BE)
    if (argCheck == '肉') {
        return true;
    }
    // No.2732
    // 説明:93f8
    // 0x93f8 (Windows-31J)
    // 0x8679 (UTF-16BE)
    if (argCheck == '虹') {
        return true;
    }
    // No.2733
    // 説明:93f9
    // 0x93f9 (Windows-31J)
    // 0x5eff (UTF-16BE)
    if (argCheck == '廿') {
        return true;
    }
    // No.2734
    // 説明:93fa
    // 0x93fa (Windows-31J)
    // 0x65e5 (UTF-16BE)
    if (argCheck == '日') {
        return true;
    }
    // No.2735
    // 説明:93fb
    // 0x93fb (Windows-31J)
    // 0x4e73 (UTF-16BE)
    if (argCheck == '乳') {
        return true;
    }
    // No.2736
    // 説明:93fc
    // 0x93fc (Windows-31J)
    // 0x5165 (UTF-16BE)
    if (argCheck == '入') {
        return true;
    }
    // No.2737
    // 説明:9440
    // 0x9440 (Windows-31J)
    // 0x5982 (UTF-16BE)
    if (argCheck == '如') {
        return true;
    }
    // No.2738
    // 説明:9441
    // 0x9441 (Windows-31J)
    // 0x5c3f (UTF-16BE)
    if (argCheck == '尿') {
        return true;
    }
    // No.2739
    // 説明:9442
    // 0x9442 (Windows-31J)
    // 0x97ee (UTF-16BE)
    if (argCheck == '韮') {
        return true;
    }
    // No.2740
    // 説明:9443
    // 0x9443 (Windows-31J)
    // 0x4efb (UTF-16BE)
    if (argCheck == '任') {
        return true;
    }
    // No.2741
    // 説明:9444
    // 0x9444 (Windows-31J)
    // 0x598a (UTF-16BE)
    if (argCheck == '妊') {
        return true;
    }
    // No.2742
    // 説明:9445
    // 0x9445 (Windows-31J)
    // 0x5fcd (UTF-16BE)
    if (argCheck == '忍') {
        return true;
    }
    // No.2743
    // 説明:9446
    // 0x9446 (Windows-31J)
    // 0x8a8d (UTF-16BE)
    if (argCheck == '認') {
        return true;
    }
    // No.2744
    // 説明:9447
    // 0x9447 (Windows-31J)
    // 0x6fe1 (UTF-16BE)
    if (argCheck == '濡') {
        return true;
    }
    // No.2745
    // 説明:9448
    // 0x9448 (Windows-31J)
    // 0x79b0 (UTF-16BE)
    if (argCheck == '禰') {
        return true;
    }
    // No.2746
    // 説明:9449
    // 0x9449 (Windows-31J)
    // 0x7962 (UTF-16BE)
    if (argCheck == '祢') {
        return true;
    }
    // No.2747
    // 説明:944a
    // 0x944a (Windows-31J)
    // 0x5be7 (UTF-16BE)
    if (argCheck == '寧') {
        return true;
    }
    // No.2748
    // 説明:944b
    // 0x944b (Windows-31J)
    // 0x8471 (UTF-16BE)
    if (argCheck == '葱') {
        return true;
    }
    // No.2749
    // 説明:944c
    // 0x944c (Windows-31J)
    // 0x732b (UTF-16BE)
    if (argCheck == '猫') {
        return true;
    }
    // No.2750
    // 説明:944d
    // 0x944d (Windows-31J)
    // 0x71b1 (UTF-16BE)
    if (argCheck == '熱') {
        return true;
    }
    // No.2751
    // 説明:944e
    // 0x944e (Windows-31J)
    // 0x5e74 (UTF-16BE)
    if (argCheck == '年') {
        return true;
    }
    // No.2752
    // 説明:944f
    // 0x944f (Windows-31J)
    // 0x5ff5 (UTF-16BE)
    if (argCheck == '念') {
        return true;
    }
    // No.2753
    // 説明:9450
    // 0x9450 (Windows-31J)
    // 0x637b (UTF-16BE)
    if (argCheck == '捻') {
        return true;
    }
    // No.2754
    // 説明:9451
    // 0x9451 (Windows-31J)
    // 0x649a (UTF-16BE)
    if (argCheck == '撚') {
        return true;
    }
    // No.2755
    // 説明:9452
    // 0x9452 (Windows-31J)
    // 0x71c3 (UTF-16BE)
    if (argCheck == '燃') {
        return true;
    }
    // No.2756
    // 説明:9453
    // 0x9453 (Windows-31J)
    // 0x7c98 (UTF-16BE)
    if (argCheck == '粘') {
        return true;
    }
    // No.2757
    // 説明:9454
    // 0x9454 (Windows-31J)
    // 0x4e43 (UTF-16BE)
    if (argCheck == '乃') {
        return true;
    }
    // No.2758
    // 説明:9455
    // 0x9455 (Windows-31J)
    // 0x5efc (UTF-16BE)
    if (argCheck == '廼') {
        return true;
    }
    // No.2759
    // 説明:9456
    // 0x9456 (Windows-31J)
    // 0x4e4b (UTF-16BE)
    if (argCheck == '之') {
        return true;
    }
    // No.2760
    // 説明:9457
    // 0x9457 (Windows-31J)
    // 0x57dc (UTF-16BE)
    if (argCheck == '埜') {
        return true;
    }
    // No.2761
    // 説明:9458
    // 0x9458 (Windows-31J)
    // 0x56a2 (UTF-16BE)
    if (argCheck == '嚢') {
        return true;
    }
    // No.2762
    // 説明:9459
    // 0x9459 (Windows-31J)
    // 0x60a9 (UTF-16BE)
    if (argCheck == '悩') {
        return true;
    }
    // No.2763
    // 説明:945a
    // 0x945a (Windows-31J)
    // 0x6fc3 (UTF-16BE)
    if (argCheck == '濃') {
        return true;
    }
    // No.2764
    // 説明:945b
    // 0x945b (Windows-31J)
    // 0x7d0d (UTF-16BE)
    if (argCheck == '納') {
        return true;
    }
    // No.2765
    // 説明:945c
    // 0x945c (Windows-31J)
    // 0x80fd (UTF-16BE)
    if (argCheck == '能') {
        return true;
    }
    // No.2766
    // 説明:945d
    // 0x945d (Windows-31J)
    // 0x8133 (UTF-16BE)
    if (argCheck == '脳') {
        return true;
    }
    // No.2767
    // 説明:945e
    // 0x945e (Windows-31J)
    // 0x81bf (UTF-16BE)
    if (argCheck == '膿') {
        return true;
    }
    // No.2768
    // 説明:945f
    // 0x945f (Windows-31J)
    // 0x8fb2 (UTF-16BE)
    if (argCheck == '農') {
        return true;
    }
    // No.2769
    // 説明:9460
    // 0x9460 (Windows-31J)
    // 0x8997 (UTF-16BE)
    if (argCheck == '覗') {
        return true;
    }
    // No.2770
    // 説明:9461
    // 0x9461 (Windows-31J)
    // 0x86a4 (UTF-16BE)
    if (argCheck == '蚤') {
        return true;
    }
    // No.2771
    // 説明:9462
    // 0x9462 (Windows-31J)
    // 0x5df4 (UTF-16BE)
    if (argCheck == '巴') {
        return true;
    }
    // No.2772
    // 説明:9463
    // 0x9463 (Windows-31J)
    // 0x628a (UTF-16BE)
    if (argCheck == '把') {
        return true;
    }
    // No.2773
    // 説明:9464
    // 0x9464 (Windows-31J)
    // 0x64ad (UTF-16BE)
    if (argCheck == '播') {
        return true;
    }
    // No.2774
    // 説明:9465
    // 0x9465 (Windows-31J)
    // 0x8987 (UTF-16BE)
    if (argCheck == '覇') {
        return true;
    }
    // No.2775
    // 説明:9466
    // 0x9466 (Windows-31J)
    // 0x6777 (UTF-16BE)
    if (argCheck == '杷') {
        return true;
    }
    // No.2776
    // 説明:9467
    // 0x9467 (Windows-31J)
    // 0x6ce2 (UTF-16BE)
    if (argCheck == '波') {
        return true;
    }
    // No.2777
    // 説明:9468
    // 0x9468 (Windows-31J)
    // 0x6d3e (UTF-16BE)
    if (argCheck == '派') {
        return true;
    }
    // No.2778
    // 説明:9469
    // 0x9469 (Windows-31J)
    // 0x7436 (UTF-16BE)
    if (argCheck == '琶') {
        return true;
    }
    // No.2779
    // 説明:946a
    // 0x946a (Windows-31J)
    // 0x7834 (UTF-16BE)
    if (argCheck == '破') {
        return true;
    }
    // No.2780
    // 説明:946b
    // 0x946b (Windows-31J)
    // 0x5a46 (UTF-16BE)
    if (argCheck == '婆') {
        return true;
    }
    // No.2781
    // 説明:946c
    // 0x946c (Windows-31J)
    // 0x7f75 (UTF-16BE)
    if (argCheck == '罵') {
        return true;
    }
    // No.2782
    // 説明:946d
    // 0x946d (Windows-31J)
    // 0x82ad (UTF-16BE)
    if (argCheck == '芭') {
        return true;
    }
    // No.2783
    // 説明:946e
    // 0x946e (Windows-31J)
    // 0x99ac (UTF-16BE)
    if (argCheck == '馬') {
        return true;
    }
    // No.2784
    // 説明:946f
    // 0x946f (Windows-31J)
    // 0x4ff3 (UTF-16BE)
    if (argCheck == '俳') {
        return true;
    }
    // No.2785
    // 説明:9470
    // 0x9470 (Windows-31J)
    // 0x5ec3 (UTF-16BE)
    if (argCheck == '廃') {
        return true;
    }
    // No.2786
    // 説明:9471
    // 0x9471 (Windows-31J)
    // 0x62dd (UTF-16BE)
    if (argCheck == '拝') {
        return true;
    }
    // No.2787
    // 説明:9472
    // 0x9472 (Windows-31J)
    // 0x6392 (UTF-16BE)
    if (argCheck == '排') {
        return true;
    }
    // No.2788
    // 説明:9473
    // 0x9473 (Windows-31J)
    // 0x6557 (UTF-16BE)
    if (argCheck == '敗') {
        return true;
    }
    // No.2789
    // 説明:9474
    // 0x9474 (Windows-31J)
    // 0x676f (UTF-16BE)
    if (argCheck == '杯') {
        return true;
    }
    // No.2790
    // 説明:9475
    // 0x9475 (Windows-31J)
    // 0x76c3 (UTF-16BE)
    if (argCheck == '盃') {
        return true;
    }
    // No.2791
    // 説明:9476
    // 0x9476 (Windows-31J)
    // 0x724c (UTF-16BE)
    if (argCheck == '牌') {
        return true;
    }
    // No.2792
    // 説明:9477
    // 0x9477 (Windows-31J)
    // 0x80cc (UTF-16BE)
    if (argCheck == '背') {
        return true;
    }
    // No.2793
    // 説明:9478
    // 0x9478 (Windows-31J)
    // 0x80ba (UTF-16BE)
    if (argCheck == '肺') {
        return true;
    }
    // No.2794
    // 説明:9479
    // 0x9479 (Windows-31J)
    // 0x8f29 (UTF-16BE)
    if (argCheck == '輩') {
        return true;
    }
    // No.2795
    // 説明:947a
    // 0x947a (Windows-31J)
    // 0x914d (UTF-16BE)
    if (argCheck == '配') {
        return true;
    }
    // No.2796
    // 説明:947b
    // 0x947b (Windows-31J)
    // 0x500d (UTF-16BE)
    if (argCheck == '倍') {
        return true;
    }
    // No.2797
    // 説明:947c
    // 0x947c (Windows-31J)
    // 0x57f9 (UTF-16BE)
    if (argCheck == '培') {
        return true;
    }
    // No.2798
    // 説明:947d
    // 0x947d (Windows-31J)
    // 0x5a92 (UTF-16BE)
    if (argCheck == '媒') {
        return true;
    }
    // No.2799
    // 説明:947e
    // 0x947e (Windows-31J)
    // 0x6885 (UTF-16BE)
    if (argCheck == '梅') {
        return true;
    }
    // No.2800
    // 説明:9480
    // 0x9480 (Windows-31J)
    // 0x6973 (UTF-16BE)
    if (argCheck == '楳') {
        return true;
    }
    // No.2801
    // 説明:9481
    // 0x9481 (Windows-31J)
    // 0x7164 (UTF-16BE)
    if (argCheck == '煤') {
        return true;
    }
    // No.2802
    // 説明:9482
    // 0x9482 (Windows-31J)
    // 0x72fd (UTF-16BE)
    if (argCheck == '狽') {
        return true;
    }
    // No.2803
    // 説明:9483
    // 0x9483 (Windows-31J)
    // 0x8cb7 (UTF-16BE)
    if (argCheck == '買') {
        return true;
    }
    // No.2804
    // 説明:9484
    // 0x9484 (Windows-31J)
    // 0x58f2 (UTF-16BE)
    if (argCheck == '売') {
        return true;
    }
    // No.2805
    // 説明:9485
    // 0x9485 (Windows-31J)
    // 0x8ce0 (UTF-16BE)
    if (argCheck == '賠') {
        return true;
    }
    // No.2806
    // 説明:9486
    // 0x9486 (Windows-31J)
    // 0x966a (UTF-16BE)
    if (argCheck == '陪') {
        return true;
    }
    // No.2807
    // 説明:9487
    // 0x9487 (Windows-31J)
    // 0x9019 (UTF-16BE)
    if (argCheck == '這') {
        return true;
    }
    // No.2808
    // 説明:9488
    // 0x9488 (Windows-31J)
    // 0x877f (UTF-16BE)
    if (argCheck == '蝿') {
        return true;
    }
    // No.2809
    // 説明:9489
    // 0x9489 (Windows-31J)
    // 0x79e4 (UTF-16BE)
    if (argCheck == '秤') {
        return true;
    }
    // No.2810
    // 説明:948a
    // 0x948a (Windows-31J)
    // 0x77e7 (UTF-16BE)
    if (argCheck == '矧') {
        return true;
    }
    // No.2811
    // 説明:948b
    // 0x948b (Windows-31J)
    // 0x8429 (UTF-16BE)
    if (argCheck == '萩') {
        return true;
    }
    // No.2812
    // 説明:948c
    // 0x948c (Windows-31J)
    // 0x4f2f (UTF-16BE)
    if (argCheck == '伯') {
        return true;
    }
    // No.2813
    // 説明:948d
    // 0x948d (Windows-31J)
    // 0x5265 (UTF-16BE)
    if (argCheck == '剥') {
        return true;
    }
    // No.2814
    // 説明:948e
    // 0x948e (Windows-31J)
    // 0x535a (UTF-16BE)
    if (argCheck == '博') {
        return true;
    }
    // No.2815
    // 説明:948f
    // 0x948f (Windows-31J)
    // 0x62cd (UTF-16BE)
    if (argCheck == '拍') {
        return true;
    }
    // No.2816
    // 説明:9490
    // 0x9490 (Windows-31J)
    // 0x67cf (UTF-16BE)
    if (argCheck == '柏') {
        return true;
    }
    // No.2817
    // 説明:9491
    // 0x9491 (Windows-31J)
    // 0x6cca (UTF-16BE)
    if (argCheck == '泊') {
        return true;
    }
    // No.2818
    // 説明:9492
    // 0x9492 (Windows-31J)
    // 0x767d (UTF-16BE)
    if (argCheck == '白') {
        return true;
    }
    // No.2819
    // 説明:9493
    // 0x9493 (Windows-31J)
    // 0x7b94 (UTF-16BE)
    if (argCheck == '箔') {
        return true;
    }
    // No.2820
    // 説明:9494
    // 0x9494 (Windows-31J)
    // 0x7c95 (UTF-16BE)
    if (argCheck == '粕') {
        return true;
    }
    // No.2821
    // 説明:9495
    // 0x9495 (Windows-31J)
    // 0x8236 (UTF-16BE)
    if (argCheck == '舶') {
        return true;
    }
    // No.2822
    // 説明:9496
    // 0x9496 (Windows-31J)
    // 0x8584 (UTF-16BE)
    if (argCheck == '薄') {
        return true;
    }
    // No.2823
    // 説明:9497
    // 0x9497 (Windows-31J)
    // 0x8feb (UTF-16BE)
    if (argCheck == '迫') {
        return true;
    }
    // No.2824
    // 説明:9498
    // 0x9498 (Windows-31J)
    // 0x66dd (UTF-16BE)
    if (argCheck == '曝') {
        return true;
    }
    // No.2825
    // 説明:9499
    // 0x9499 (Windows-31J)
    // 0x6f20 (UTF-16BE)
    if (argCheck == '漠') {
        return true;
    }
    // No.2826
    // 説明:949a
    // 0x949a (Windows-31J)
    // 0x7206 (UTF-16BE)
    if (argCheck == '爆') {
        return true;
    }
    // No.2827
    // 説明:949b
    // 0x949b (Windows-31J)
    // 0x7e1b (UTF-16BE)
    if (argCheck == '縛') {
        return true;
    }
    // No.2828
    // 説明:949c
    // 0x949c (Windows-31J)
    // 0x83ab (UTF-16BE)
    if (argCheck == '莫') {
        return true;
    }
    // No.2829
    // 説明:949d
    // 0x949d (Windows-31J)
    // 0x99c1 (UTF-16BE)
    if (argCheck == '駁') {
        return true;
    }
    // No.2830
    // 説明:949e
    // 0x949e (Windows-31J)
    // 0x9ea6 (UTF-16BE)
    if (argCheck == '麦') {
        return true;
    }
    // No.2831
    // 説明:949f
    // 0x949f (Windows-31J)
    // 0x51fd (UTF-16BE)
    if (argCheck == '函') {
        return true;
    }
    // No.2832
    // 説明:94a0
    // 0x94a0 (Windows-31J)
    // 0x7bb1 (UTF-16BE)
    if (argCheck == '箱') {
        return true;
    }
    // No.2833
    // 説明:94a1
    // 0x94a1 (Windows-31J)
    // 0x7872 (UTF-16BE)
    if (argCheck == '硲') {
        return true;
    }
    // No.2834
    // 説明:94a2
    // 0x94a2 (Windows-31J)
    // 0x7bb8 (UTF-16BE)
    if (argCheck == '箸') {
        return true;
    }
    // No.2835
    // 説明:94a3
    // 0x94a3 (Windows-31J)
    // 0x8087 (UTF-16BE)
    if (argCheck == '肇') {
        return true;
    }
    // No.2836
    // 説明:94a4
    // 0x94a4 (Windows-31J)
    // 0x7b48 (UTF-16BE)
    if (argCheck == '筈') {
        return true;
    }
    // No.2837
    // 説明:94a5
    // 0x94a5 (Windows-31J)
    // 0x6ae8 (UTF-16BE)
    if (argCheck == '櫨') {
        return true;
    }
    // No.2838
    // 説明:94a6
    // 0x94a6 (Windows-31J)
    // 0x5e61 (UTF-16BE)
    if (argCheck == '幡') {
        return true;
    }
    // No.2839
    // 説明:94a7
    // 0x94a7 (Windows-31J)
    // 0x808c (UTF-16BE)
    if (argCheck == '肌') {
        return true;
    }
    // No.2840
    // 説明:94a8
    // 0x94a8 (Windows-31J)
    // 0x7551 (UTF-16BE)
    if (argCheck == '畑') {
        return true;
    }
    // No.2841
    // 説明:94a9
    // 0x94a9 (Windows-31J)
    // 0x7560 (UTF-16BE)
    if (argCheck == '畠') {
        return true;
    }
    // No.2842
    // 説明:94aa
    // 0x94aa (Windows-31J)
    // 0x516b (UTF-16BE)
    if (argCheck == '八') {
        return true;
    }
    // No.2843
    // 説明:94ab
    // 0x94ab (Windows-31J)
    // 0x9262 (UTF-16BE)
    if (argCheck == '鉢') {
        return true;
    }
    // No.2844
    // 説明:94ac
    // 0x94ac (Windows-31J)
    // 0x6e8c (UTF-16BE)
    if (argCheck == '溌') {
        return true;
    }
    // No.2845
    // 説明:94ad
    // 0x94ad (Windows-31J)
    // 0x767a (UTF-16BE)
    if (argCheck == '発') {
        return true;
    }
    // No.2846
    // 説明:94ae
    // 0x94ae (Windows-31J)
    // 0x9197 (UTF-16BE)
    if (argCheck == '醗') {
        return true;
    }
    // No.2847
    // 説明:94af
    // 0x94af (Windows-31J)
    // 0x9aea (UTF-16BE)
    if (argCheck == '髪') {
        return true;
    }
    // No.2848
    // 説明:94b0
    // 0x94b0 (Windows-31J)
    // 0x4f10 (UTF-16BE)
    if (argCheck == '伐') {
        return true;
    }
    // No.2849
    // 説明:94b1
    // 0x94b1 (Windows-31J)
    // 0x7f70 (UTF-16BE)
    if (argCheck == '罰') {
        return true;
    }
    // No.2850
    // 説明:94b2
    // 0x94b2 (Windows-31J)
    // 0x629c (UTF-16BE)
    if (argCheck == '抜') {
        return true;
    }
    // No.2851
    // 説明:94b3
    // 0x94b3 (Windows-31J)
    // 0x7b4f (UTF-16BE)
    if (argCheck == '筏') {
        return true;
    }
    // No.2852
    // 説明:94b4
    // 0x94b4 (Windows-31J)
    // 0x95a5 (UTF-16BE)
    if (argCheck == '閥') {
        return true;
    }
    // No.2853
    // 説明:94b5
    // 0x94b5 (Windows-31J)
    // 0x9ce9 (UTF-16BE)
    if (argCheck == '鳩') {
        return true;
    }
    // No.2854
    // 説明:94b6
    // 0x94b6 (Windows-31J)
    // 0x567a (UTF-16BE)
    if (argCheck == '噺') {
        return true;
    }
    // No.2855
    // 説明:94b7
    // 0x94b7 (Windows-31J)
    // 0x5859 (UTF-16BE)
    if (argCheck == '塙') {
        return true;
    }
    // No.2856
    // 説明:94b8
    // 0x94b8 (Windows-31J)
    // 0x86e4 (UTF-16BE)
    if (argCheck == '蛤') {
        return true;
    }
    // No.2857
    // 説明:94b9
    // 0x94b9 (Windows-31J)
    // 0x96bc (UTF-16BE)
    if (argCheck == '隼') {
        return true;
    }
    // No.2858
    // 説明:94ba
    // 0x94ba (Windows-31J)
    // 0x4f34 (UTF-16BE)
    if (argCheck == '伴') {
        return true;
    }
    // No.2859
    // 説明:94bb
    // 0x94bb (Windows-31J)
    // 0x5224 (UTF-16BE)
    if (argCheck == '判') {
        return true;
    }
    // No.2860
    // 説明:94bc
    // 0x94bc (Windows-31J)
    // 0x534a (UTF-16BE)
    if (argCheck == '半') {
        return true;
    }
    // No.2861
    // 説明:94bd
    // 0x94bd (Windows-31J)
    // 0x53cd (UTF-16BE)
    if (argCheck == '反') {
        return true;
    }
    // No.2862
    // 説明:94be
    // 0x94be (Windows-31J)
    // 0x53db (UTF-16BE)
    if (argCheck == '叛') {
        return true;
    }
    // No.2863
    // 説明:94bf
    // 0x94bf (Windows-31J)
    // 0x5e06 (UTF-16BE)
    if (argCheck == '帆') {
        return true;
    }
    // No.2864
    // 説明:94c0
    // 0x94c0 (Windows-31J)
    // 0x642c (UTF-16BE)
    if (argCheck == '搬') {
        return true;
    }
    // No.2865
    // 説明:94c1
    // 0x94c1 (Windows-31J)
    // 0x6591 (UTF-16BE)
    if (argCheck == '斑') {
        return true;
    }
    // No.2866
    // 説明:94c2
    // 0x94c2 (Windows-31J)
    // 0x677f (UTF-16BE)
    if (argCheck == '板') {
        return true;
    }
    // No.2867
    // 説明:94c3
    // 0x94c3 (Windows-31J)
    // 0x6c3e (UTF-16BE)
    if (argCheck == '氾') {
        return true;
    }
    // No.2868
    // 説明:94c4
    // 0x94c4 (Windows-31J)
    // 0x6c4e (UTF-16BE)
    if (argCheck == '汎') {
        return true;
    }
    // No.2869
    // 説明:94c5
    // 0x94c5 (Windows-31J)
    // 0x7248 (UTF-16BE)
    if (argCheck == '版') {
        return true;
    }
    // No.2870
    // 説明:94c6
    // 0x94c6 (Windows-31J)
    // 0x72af (UTF-16BE)
    if (argCheck == '犯') {
        return true;
    }
    // No.2871
    // 説明:94c7
    // 0x94c7 (Windows-31J)
    // 0x73ed (UTF-16BE)
    if (argCheck == '班') {
        return true;
    }
    // No.2872
    // 説明:94c8
    // 0x94c8 (Windows-31J)
    // 0x7554 (UTF-16BE)
    if (argCheck == '畔') {
        return true;
    }
    // No.2873
    // 説明:94c9
    // 0x94c9 (Windows-31J)
    // 0x7e41 (UTF-16BE)
    if (argCheck == '繁') {
        return true;
    }
    // No.2874
    // 説明:94ca
    // 0x94ca (Windows-31J)
    // 0x822c (UTF-16BE)
    if (argCheck == '般') {
        return true;
    }
    // No.2875
    // 説明:94cb
    // 0x94cb (Windows-31J)
    // 0x85e9 (UTF-16BE)
    if (argCheck == '藩') {
        return true;
    }
    // No.2876
    // 説明:94cc
    // 0x94cc (Windows-31J)
    // 0x8ca9 (UTF-16BE)
    if (argCheck == '販') {
        return true;
    }
    // No.2877
    // 説明:94cd
    // 0x94cd (Windows-31J)
    // 0x7bc4 (UTF-16BE)
    if (argCheck == '範') {
        return true;
    }
    // No.2878
    // 説明:94ce
    // 0x94ce (Windows-31J)
    // 0x91c6 (UTF-16BE)
    if (argCheck == '釆') {
        return true;
    }
    // No.2879
    // 説明:94cf
    // 0x94cf (Windows-31J)
    // 0x7169 (UTF-16BE)
    if (argCheck == '煩') {
        return true;
    }
    // No.2880
    // 説明:94d0
    // 0x94d0 (Windows-31J)
    // 0x9812 (UTF-16BE)
    if (argCheck == '頒') {
        return true;
    }
    // No.2881
    // 説明:94d1
    // 0x94d1 (Windows-31J)
    // 0x98ef (UTF-16BE)
    if (argCheck == '飯') {
        return true;
    }
    // No.2882
    // 説明:94d2
    // 0x94d2 (Windows-31J)
    // 0x633d (UTF-16BE)
    if (argCheck == '挽') {
        return true;
    }
    // No.2883
    // 説明:94d3
    // 0x94d3 (Windows-31J)
    // 0x6669 (UTF-16BE)
    if (argCheck == '晩') {
        return true;
    }
    // No.2884
    // 説明:94d4
    // 0x94d4 (Windows-31J)
    // 0x756a (UTF-16BE)
    if (argCheck == '番') {
        return true;
    }
    // No.2885
    // 説明:94d5
    // 0x94d5 (Windows-31J)
    // 0x76e4 (UTF-16BE)
    if (argCheck == '盤') {
        return true;
    }
    // No.2886
    // 説明:94d6
    // 0x94d6 (Windows-31J)
    // 0x78d0 (UTF-16BE)
    if (argCheck == '磐') {
        return true;
    }
    // No.2887
    // 説明:94d7
    // 0x94d7 (Windows-31J)
    // 0x8543 (UTF-16BE)
    if (argCheck == '蕃') {
        return true;
    }
    // No.2888
    // 説明:94d8
    // 0x94d8 (Windows-31J)
    // 0x86ee (UTF-16BE)
    if (argCheck == '蛮') {
        return true;
    }
    // No.2889
    // 説明:94d9
    // 0x94d9 (Windows-31J)
    // 0x532a (UTF-16BE)
    if (argCheck == '匪') {
        return true;
    }
    // No.2890
    // 説明:94da
    // 0x94da (Windows-31J)
    // 0x5351 (UTF-16BE)
    if (argCheck == '卑') {
        return true;
    }
    // No.2891
    // 説明:94db
    // 0x94db (Windows-31J)
    // 0x5426 (UTF-16BE)
    if (argCheck == '否') {
        return true;
    }
    // No.2892
    // 説明:94dc
    // 0x94dc (Windows-31J)
    // 0x5983 (UTF-16BE)
    if (argCheck == '妃') {
        return true;
    }
    // No.2893
    // 説明:94dd
    // 0x94dd (Windows-31J)
    // 0x5e87 (UTF-16BE)
    if (argCheck == '庇') {
        return true;
    }
    // No.2894
    // 説明:94de
    // 0x94de (Windows-31J)
    // 0x5f7c (UTF-16BE)
    if (argCheck == '彼') {
        return true;
    }
    // No.2895
    // 説明:94df
    // 0x94df (Windows-31J)
    // 0x60b2 (UTF-16BE)
    if (argCheck == '悲') {
        return true;
    }
    // No.2896
    // 説明:94e0
    // 0x94e0 (Windows-31J)
    // 0x6249 (UTF-16BE)
    if (argCheck == '扉') {
        return true;
    }
    // No.2897
    // 説明:94e1
    // 0x94e1 (Windows-31J)
    // 0x6279 (UTF-16BE)
    if (argCheck == '批') {
        return true;
    }
    // No.2898
    // 説明:94e2
    // 0x94e2 (Windows-31J)
    // 0x62ab (UTF-16BE)
    if (argCheck == '披') {
        return true;
    }
    // No.2899
    // 説明:94e3
    // 0x94e3 (Windows-31J)
    // 0x6590 (UTF-16BE)
    if (argCheck == '斐') {
        return true;
    }
    // No.2900
    // 説明:94e4
    // 0x94e4 (Windows-31J)
    // 0x6bd4 (UTF-16BE)
    if (argCheck == '比') {
        return true;
    }
    // No.2901
    // 説明:94e5
    // 0x94e5 (Windows-31J)
    // 0x6ccc (UTF-16BE)
    if (argCheck == '泌') {
        return true;
    }
    // No.2902
    // 説明:94e6
    // 0x94e6 (Windows-31J)
    // 0x75b2 (UTF-16BE)
    if (argCheck == '疲') {
        return true;
    }
    // No.2903
    // 説明:94e7
    // 0x94e7 (Windows-31J)
    // 0x76ae (UTF-16BE)
    if (argCheck == '皮') {
        return true;
    }
    // No.2904
    // 説明:94e8
    // 0x94e8 (Windows-31J)
    // 0x7891 (UTF-16BE)
    if (argCheck == '碑') {
        return true;
    }
    // No.2905
    // 説明:94e9
    // 0x94e9 (Windows-31J)
    // 0x79d8 (UTF-16BE)
    if (argCheck == '秘') {
        return true;
    }
    // No.2906
    // 説明:94ea
    // 0x94ea (Windows-31J)
    // 0x7dcb (UTF-16BE)
    if (argCheck == '緋') {
        return true;
    }
    // No.2907
    // 説明:94eb
    // 0x94eb (Windows-31J)
    // 0x7f77 (UTF-16BE)
    if (argCheck == '罷') {
        return true;
    }
    // No.2908
    // 説明:94ec
    // 0x94ec (Windows-31J)
    // 0x80a5 (UTF-16BE)
    if (argCheck == '肥') {
        return true;
    }
    // No.2909
    // 説明:94ed
    // 0x94ed (Windows-31J)
    // 0x88ab (UTF-16BE)
    if (argCheck == '被') {
        return true;
    }
    // No.2910
    // 説明:94ee
    // 0x94ee (Windows-31J)
    // 0x8ab9 (UTF-16BE)
    if (argCheck == '誹') {
        return true;
    }
    // No.2911
    // 説明:94ef
    // 0x94ef (Windows-31J)
    // 0x8cbb (UTF-16BE)
    if (argCheck == '費') {
        return true;
    }
    // No.2912
    // 説明:94f0
    // 0x94f0 (Windows-31J)
    // 0x907f (UTF-16BE)
    if (argCheck == '避') {
        return true;
    }
    // No.2913
    // 説明:94f1
    // 0x94f1 (Windows-31J)
    // 0x975e (UTF-16BE)
    if (argCheck == '非') {
        return true;
    }
    // No.2914
    // 説明:94f2
    // 0x94f2 (Windows-31J)
    // 0x98db (UTF-16BE)
    if (argCheck == '飛') {
        return true;
    }
    // No.2915
    // 説明:94f3
    // 0x94f3 (Windows-31J)
    // 0x6a0b (UTF-16BE)
    if (argCheck == '樋') {
        return true;
    }
    // No.2916
    // 説明:94f4
    // 0x94f4 (Windows-31J)
    // 0x7c38 (UTF-16BE)
    if (argCheck == '簸') {
        return true;
    }
    // No.2917
    // 説明:94f5
    // 0x94f5 (Windows-31J)
    // 0x5099 (UTF-16BE)
    if (argCheck == '備') {
        return true;
    }
    // No.2918
    // 説明:94f6
    // 0x94f6 (Windows-31J)
    // 0x5c3e (UTF-16BE)
    if (argCheck == '尾') {
        return true;
    }
    // No.2919
    // 説明:94f7
    // 0x94f7 (Windows-31J)
    // 0x5fae (UTF-16BE)
    if (argCheck == '微') {
        return true;
    }
    // No.2920
    // 説明:94f8
    // 0x94f8 (Windows-31J)
    // 0x6787 (UTF-16BE)
    if (argCheck == '枇') {
        return true;
    }
    // No.2921
    // 説明:94f9
    // 0x94f9 (Windows-31J)
    // 0x6bd8 (UTF-16BE)
    if (argCheck == '毘') {
        return true;
    }
    // No.2922
    // 説明:94fa
    // 0x94fa (Windows-31J)
    // 0x7435 (UTF-16BE)
    if (argCheck == '琵') {
        return true;
    }
    // No.2923
    // 説明:94fb
    // 0x94fb (Windows-31J)
    // 0x7709 (UTF-16BE)
    if (argCheck == '眉') {
        return true;
    }
    // No.2924
    // 説明:94fc
    // 0x94fc (Windows-31J)
    // 0x7f8e (UTF-16BE)
    if (argCheck == '美') {
        return true;
    }
    // No.2925
    // 説明:9540
    // 0x9540 (Windows-31J)
    // 0x9f3b (UTF-16BE)
    if (argCheck == '鼻') {
        return true;
    }
    // No.2926
    // 説明:9541
    // 0x9541 (Windows-31J)
    // 0x67ca (UTF-16BE)
    if (argCheck == '柊') {
        return true;
    }
    // No.2927
    // 説明:9542
    // 0x9542 (Windows-31J)
    // 0x7a17 (UTF-16BE)
    if (argCheck == '稗') {
        return true;
    }
    // No.2928
    // 説明:9543
    // 0x9543 (Windows-31J)
    // 0x5339 (UTF-16BE)
    if (argCheck == '匹') {
        return true;
    }
    // No.2929
    // 説明:9544
    // 0x9544 (Windows-31J)
    // 0x758b (UTF-16BE)
    if (argCheck == '疋') {
        return true;
    }
    // No.2930
    // 説明:9545
    // 0x9545 (Windows-31J)
    // 0x9aed (UTF-16BE)
    if (argCheck == '髭') {
        return true;
    }
    // No.2931
    // 説明:9546
    // 0x9546 (Windows-31J)
    // 0x5f66 (UTF-16BE)
    if (argCheck == '彦') {
        return true;
    }
    // No.2932
    // 説明:9547
    // 0x9547 (Windows-31J)
    // 0x819d (UTF-16BE)
    if (argCheck == '膝') {
        return true;
    }
    // No.2933
    // 説明:9548
    // 0x9548 (Windows-31J)
    // 0x83f1 (UTF-16BE)
    if (argCheck == '菱') {
        return true;
    }
    // No.2934
    // 説明:9549
    // 0x9549 (Windows-31J)
    // 0x8098 (UTF-16BE)
    if (argCheck == '肘') {
        return true;
    }
    // No.2935
    // 説明:954a
    // 0x954a (Windows-31J)
    // 0x5f3c (UTF-16BE)
    if (argCheck == '弼') {
        return true;
    }
    // No.2936
    // 説明:954b
    // 0x954b (Windows-31J)
    // 0x5fc5 (UTF-16BE)
    if (argCheck == '必') {
        return true;
    }
    // No.2937
    // 説明:954c
    // 0x954c (Windows-31J)
    // 0x7562 (UTF-16BE)
    if (argCheck == '畢') {
        return true;
    }
    // No.2938
    // 説明:954d
    // 0x954d (Windows-31J)
    // 0x7b46 (UTF-16BE)
    if (argCheck == '筆') {
        return true;
    }
    // No.2939
    // 説明:954e
    // 0x954e (Windows-31J)
    // 0x903c (UTF-16BE)
    if (argCheck == '逼') {
        return true;
    }
    // No.2940
    // 説明:954f
    // 0x954f (Windows-31J)
    // 0x6867 (UTF-16BE)
    if (argCheck == '桧') {
        return true;
    }
    // No.2941
    // 説明:9550
    // 0x9550 (Windows-31J)
    // 0x59eb (UTF-16BE)
    if (argCheck == '姫') {
        return true;
    }
    // No.2942
    // 説明:9551
    // 0x9551 (Windows-31J)
    // 0x5a9b (UTF-16BE)
    if (argCheck == '媛') {
        return true;
    }
    // No.2943
    // 説明:9552
    // 0x9552 (Windows-31J)
    // 0x7d10 (UTF-16BE)
    if (argCheck == '紐') {
        return true;
    }
    // No.2944
    // 説明:9553
    // 0x9553 (Windows-31J)
    // 0x767e (UTF-16BE)
    if (argCheck == '百') {
        return true;
    }
    // No.2945
    // 説明:9554
    // 0x9554 (Windows-31J)
    // 0x8b2c (UTF-16BE)
    if (argCheck == '謬') {
        return true;
    }
    // No.2946
    // 説明:9555
    // 0x9555 (Windows-31J)
    // 0x4ff5 (UTF-16BE)
    if (argCheck == '俵') {
        return true;
    }
    // No.2947
    // 説明:9556
    // 0x9556 (Windows-31J)
    // 0x5f6a (UTF-16BE)
    if (argCheck == '彪') {
        return true;
    }
    // No.2948
    // 説明:9557
    // 0x9557 (Windows-31J)
    // 0x6a19 (UTF-16BE)
    if (argCheck == '標') {
        return true;
    }
    // No.2949
    // 説明:9558
    // 0x9558 (Windows-31J)
    // 0x6c37 (UTF-16BE)
    if (argCheck == '氷') {
        return true;
    }
    // No.2950
    // 説明:9559
    // 0x9559 (Windows-31J)
    // 0x6f02 (UTF-16BE)
    if (argCheck == '漂') {
        return true;
    }
    // No.2951
    // 説明:955a
    // 0x955a (Windows-31J)
    // 0x74e2 (UTF-16BE)
    if (argCheck == '瓢') {
        return true;
    }
    // No.2952
    // 説明:955b
    // 0x955b (Windows-31J)
    // 0x7968 (UTF-16BE)
    if (argCheck == '票') {
        return true;
    }
    // No.2953
    // 説明:955c
    // 0x955c (Windows-31J)
    // 0x8868 (UTF-16BE)
    if (argCheck == '表') {
        return true;
    }
    // No.2954
    // 説明:955d
    // 0x955d (Windows-31J)
    // 0x8a55 (UTF-16BE)
    if (argCheck == '評') {
        return true;
    }
    // No.2955
    // 説明:955e
    // 0x955e (Windows-31J)
    // 0x8c79 (UTF-16BE)
    if (argCheck == '豹') {
        return true;
    }
    // No.2956
    // 説明:955f
    // 0x955f (Windows-31J)
    // 0x5edf (UTF-16BE)
    if (argCheck == '廟') {
        return true;
    }
    // No.2957
    // 説明:9560
    // 0x9560 (Windows-31J)
    // 0x63cf (UTF-16BE)
    if (argCheck == '描') {
        return true;
    }
    // No.2958
    // 説明:9561
    // 0x9561 (Windows-31J)
    // 0x75c5 (UTF-16BE)
    if (argCheck == '病') {
        return true;
    }
    // No.2959
    // 説明:9562
    // 0x9562 (Windows-31J)
    // 0x79d2 (UTF-16BE)
    if (argCheck == '秒') {
        return true;
    }
    // No.2960
    // 説明:9563
    // 0x9563 (Windows-31J)
    // 0x82d7 (UTF-16BE)
    if (argCheck == '苗') {
        return true;
    }
    // No.2961
    // 説明:9564
    // 0x9564 (Windows-31J)
    // 0x9328 (UTF-16BE)
    if (argCheck == '錨') {
        return true;
    }
    // No.2962
    // 説明:9565
    // 0x9565 (Windows-31J)
    // 0x92f2 (UTF-16BE)
    if (argCheck == '鋲') {
        return true;
    }
    // No.2963
    // 説明:9566
    // 0x9566 (Windows-31J)
    // 0x849c (UTF-16BE)
    if (argCheck == '蒜') {
        return true;
    }
    // No.2964
    // 説明:9567
    // 0x9567 (Windows-31J)
    // 0x86ed (UTF-16BE)
    if (argCheck == '蛭') {
        return true;
    }
    // No.2965
    // 説明:9568
    // 0x9568 (Windows-31J)
    // 0x9c2d (UTF-16BE)
    if (argCheck == '鰭') {
        return true;
    }
    // No.2966
    // 説明:9569
    // 0x9569 (Windows-31J)
    // 0x54c1 (UTF-16BE)
    if (argCheck == '品') {
        return true;
    }
    // No.2967
    // 説明:956a
    // 0x956a (Windows-31J)
    // 0x5f6c (UTF-16BE)
    if (argCheck == '彬') {
        return true;
    }
    // No.2968
    // 説明:956b
    // 0x956b (Windows-31J)
    // 0x658c (UTF-16BE)
    if (argCheck == '斌') {
        return true;
    }
    // No.2969
    // 説明:956c
    // 0x956c (Windows-31J)
    // 0x6d5c (UTF-16BE)
    if (argCheck == '浜') {
        return true;
    }
    // No.2970
    // 説明:956d
    // 0x956d (Windows-31J)
    // 0x7015 (UTF-16BE)
    if (argCheck == '瀕') {
        return true;
    }
    // No.2971
    // 説明:956e
    // 0x956e (Windows-31J)
    // 0x8ca7 (UTF-16BE)
    if (argCheck == '貧') {
        return true;
    }
    // No.2972
    // 説明:956f
    // 0x956f (Windows-31J)
    // 0x8cd3 (UTF-16BE)
    if (argCheck == '賓') {
        return true;
    }
    // No.2973
    // 説明:9570
    // 0x9570 (Windows-31J)
    // 0x983b (UTF-16BE)
    if (argCheck == '頻') {
        return true;
    }
    // No.2974
    // 説明:9571
    // 0x9571 (Windows-31J)
    // 0x654f (UTF-16BE)
    if (argCheck == '敏') {
        return true;
    }
    // No.2975
    // 説明:9572
    // 0x9572 (Windows-31J)
    // 0x74f6 (UTF-16BE)
    if (argCheck == '瓶') {
        return true;
    }
    // No.2976
    // 説明:9573
    // 0x9573 (Windows-31J)
    // 0x4e0d (UTF-16BE)
    if (argCheck == '不') {
        return true;
    }
    // No.2977
    // 説明:9574
    // 0x9574 (Windows-31J)
    // 0x4ed8 (UTF-16BE)
    if (argCheck == '付') {
        return true;
    }
    // No.2978
    // 説明:9575
    // 0x9575 (Windows-31J)
    // 0x57e0 (UTF-16BE)
    if (argCheck == '埠') {
        return true;
    }
    // No.2979
    // 説明:9576
    // 0x9576 (Windows-31J)
    // 0x592b (UTF-16BE)
    if (argCheck == '夫') {
        return true;
    }
    // No.2980
    // 説明:9577
    // 0x9577 (Windows-31J)
    // 0x5a66 (UTF-16BE)
    if (argCheck == '婦') {
        return true;
    }
    // No.2981
    // 説明:9578
    // 0x9578 (Windows-31J)
    // 0x5bcc (UTF-16BE)
    if (argCheck == '富') {
        return true;
    }
    // No.2982
    // 説明:9579
    // 0x9579 (Windows-31J)
    // 0x51a8 (UTF-16BE)
    if (argCheck == '冨') {
        return true;
    }
    // No.2983
    // 説明:957a
    // 0x957a (Windows-31J)
    // 0x5e03 (UTF-16BE)
    if (argCheck == '布') {
        return true;
    }
    // No.2984
    // 説明:957b
    // 0x957b (Windows-31J)
    // 0x5e9c (UTF-16BE)
    if (argCheck == '府') {
        return true;
    }
    // No.2985
    // 説明:957c
    // 0x957c (Windows-31J)
    // 0x6016 (UTF-16BE)
    if (argCheck == '怖') {
        return true;
    }
    // No.2986
    // 説明:957d
    // 0x957d (Windows-31J)
    // 0x6276 (UTF-16BE)
    if (argCheck == '扶') {
        return true;
    }
    // No.2987
    // 説明:957e
    // 0x957e (Windows-31J)
    // 0x6577 (UTF-16BE)
    if (argCheck == '敷') {
        return true;
    }
    // No.2988
    // 説明:9580
    // 0x9580 (Windows-31J)
    // 0x65a7 (UTF-16BE)
    if (argCheck == '斧') {
        return true;
    }
    // No.2989
    // 説明:9581
    // 0x9581 (Windows-31J)
    // 0x666e (UTF-16BE)
    if (argCheck == '普') {
        return true;
    }
    // No.2990
    // 説明:9582
    // 0x9582 (Windows-31J)
    // 0x6d6e (UTF-16BE)
    if (argCheck == '浮') {
        return true;
    }
    // No.2991
    // 説明:9583
    // 0x9583 (Windows-31J)
    // 0x7236 (UTF-16BE)
    if (argCheck == '父') {
        return true;
    }
    // No.2992
    // 説明:9584
    // 0x9584 (Windows-31J)
    // 0x7b26 (UTF-16BE)
    if (argCheck == '符') {
        return true;
    }
    // No.2993
    // 説明:9585
    // 0x9585 (Windows-31J)
    // 0x8150 (UTF-16BE)
    if (argCheck == '腐') {
        return true;
    }
    // No.2994
    // 説明:9586
    // 0x9586 (Windows-31J)
    // 0x819a (UTF-16BE)
    if (argCheck == '膚') {
        return true;
    }
    // No.2995
    // 説明:9587
    // 0x9587 (Windows-31J)
    // 0x8299 (UTF-16BE)
    if (argCheck == '芙') {
        return true;
    }
    // No.2996
    // 説明:9588
    // 0x9588 (Windows-31J)
    // 0x8b5c (UTF-16BE)
    if (argCheck == '譜') {
        return true;
    }
    // No.2997
    // 説明:9589
    // 0x9589 (Windows-31J)
    // 0x8ca0 (UTF-16BE)
    if (argCheck == '負') {
        return true;
    }
    // No.2998
    // 説明:958a
    // 0x958a (Windows-31J)
    // 0x8ce6 (UTF-16BE)
    if (argCheck == '賦') {
        return true;
    }
    // No.2999
    // 説明:958b
    // 0x958b (Windows-31J)
    // 0x8d74 (UTF-16BE)
    if (argCheck == '赴') {
        return true;
    }
    // No.3000
    // 説明:958c
    // 0x958c (Windows-31J)
    // 0x961c (UTF-16BE)
    if (argCheck == '阜') {
        return true;
    }
    // No.3001
    // 説明:958d
    // 0x958d (Windows-31J)
    // 0x9644 (UTF-16BE)
    if (argCheck == '附') {
        return true;
    }
    // No.3002
    // 説明:958e
    // 0x958e (Windows-31J)
    // 0x4fae (UTF-16BE)
    if (argCheck == '侮') {
        return true;
    }
    // No.3003
    // 説明:958f
    // 0x958f (Windows-31J)
    // 0x64ab (UTF-16BE)
    if (argCheck == '撫') {
        return true;
    }
    // No.3004
    // 説明:9590
    // 0x9590 (Windows-31J)
    // 0x6b66 (UTF-16BE)
    if (argCheck == '武') {
        return true;
    }
    // No.3005
    // 説明:9591
    // 0x9591 (Windows-31J)
    // 0x821e (UTF-16BE)
    if (argCheck == '舞') {
        return true;
    }
    // No.3006
    // 説明:9592
    // 0x9592 (Windows-31J)
    // 0x8461 (UTF-16BE)
    if (argCheck == '葡') {
        return true;
    }
    // No.3007
    // 説明:9593
    // 0x9593 (Windows-31J)
    // 0x856a (UTF-16BE)
    if (argCheck == '蕪') {
        return true;
    }
    // No.3008
    // 説明:9594
    // 0x9594 (Windows-31J)
    // 0x90e8 (UTF-16BE)
    if (argCheck == '部') {
        return true;
    }
    // No.3009
    // 説明:9595
    // 0x9595 (Windows-31J)
    // 0x5c01 (UTF-16BE)
    if (argCheck == '封') {
        return true;
    }
    // No.3010
    // 説明:9596
    // 0x9596 (Windows-31J)
    // 0x6953 (UTF-16BE)
    if (argCheck == '楓') {
        return true;
    }
    // No.3011
    // 説明:9597
    // 0x9597 (Windows-31J)
    // 0x98a8 (UTF-16BE)
    if (argCheck == '風') {
        return true;
    }
    // No.3012
    // 説明:9598
    // 0x9598 (Windows-31J)
    // 0x847a (UTF-16BE)
    if (argCheck == '葺') {
        return true;
    }
    // No.3013
    // 説明:9599
    // 0x9599 (Windows-31J)
    // 0x8557 (UTF-16BE)
    if (argCheck == '蕗') {
        return true;
    }
    // No.3014
    // 説明:959a
    // 0x959a (Windows-31J)
    // 0x4f0f (UTF-16BE)
    if (argCheck == '伏') {
        return true;
    }
    // No.3015
    // 説明:959b
    // 0x959b (Windows-31J)
    // 0x526f (UTF-16BE)
    if (argCheck == '副') {
        return true;
    }
    // No.3016
    // 説明:959c
    // 0x959c (Windows-31J)
    // 0x5fa9 (UTF-16BE)
    if (argCheck == '復') {
        return true;
    }
    // No.3017
    // 説明:959d
    // 0x959d (Windows-31J)
    // 0x5e45 (UTF-16BE)
    if (argCheck == '幅') {
        return true;
    }
    // No.3018
    // 説明:959e
    // 0x959e (Windows-31J)
    // 0x670d (UTF-16BE)
    if (argCheck == '服') {
        return true;
    }
    // No.3019
    // 説明:959f
    // 0x959f (Windows-31J)
    // 0x798f (UTF-16BE)
    if (argCheck == '福') {
        return true;
    }
    // No.3020
    // 説明:95a0
    // 0x95a0 (Windows-31J)
    // 0x8179 (UTF-16BE)
    if (argCheck == '腹') {
        return true;
    }
    // No.3021
    // 説明:95a1
    // 0x95a1 (Windows-31J)
    // 0x8907 (UTF-16BE)
    if (argCheck == '複') {
        return true;
    }
    // No.3022
    // 説明:95a2
    // 0x95a2 (Windows-31J)
    // 0x8986 (UTF-16BE)
    if (argCheck == '覆') {
        return true;
    }
    // No.3023
    // 説明:95a3
    // 0x95a3 (Windows-31J)
    // 0x6df5 (UTF-16BE)
    if (argCheck == '淵') {
        return true;
    }
    // No.3024
    // 説明:95a4
    // 0x95a4 (Windows-31J)
    // 0x5f17 (UTF-16BE)
    if (argCheck == '弗') {
        return true;
    }
    // No.3025
    // 説明:95a5
    // 0x95a5 (Windows-31J)
    // 0x6255 (UTF-16BE)
    if (argCheck == '払') {
        return true;
    }
    // No.3026
    // 説明:95a6
    // 0x95a6 (Windows-31J)
    // 0x6cb8 (UTF-16BE)
    if (argCheck == '沸') {
        return true;
    }
    // No.3027
    // 説明:95a7
    // 0x95a7 (Windows-31J)
    // 0x4ecf (UTF-16BE)
    if (argCheck == '仏') {
        return true;
    }
    // No.3028
    // 説明:95a8
    // 0x95a8 (Windows-31J)
    // 0x7269 (UTF-16BE)
    if (argCheck == '物') {
        return true;
    }
    // No.3029
    // 説明:95a9
    // 0x95a9 (Windows-31J)
    // 0x9b92 (UTF-16BE)
    if (argCheck == '鮒') {
        return true;
    }
    // No.3030
    // 説明:95aa
    // 0x95aa (Windows-31J)
    // 0x5206 (UTF-16BE)
    if (argCheck == '分') {
        return true;
    }
    // No.3031
    // 説明:95ab
    // 0x95ab (Windows-31J)
    // 0x543b (UTF-16BE)
    if (argCheck == '吻') {
        return true;
    }
    // No.3032
    // 説明:95ac
    // 0x95ac (Windows-31J)
    // 0x5674 (UTF-16BE)
    if (argCheck == '噴') {
        return true;
    }
    // No.3033
    // 説明:95ad
    // 0x95ad (Windows-31J)
    // 0x58b3 (UTF-16BE)
    if (argCheck == '墳') {
        return true;
    }
    // No.3034
    // 説明:95ae
    // 0x95ae (Windows-31J)
    // 0x61a4 (UTF-16BE)
    if (argCheck == '憤') {
        return true;
    }
    // No.3035
    // 説明:95af
    // 0x95af (Windows-31J)
    // 0x626e (UTF-16BE)
    if (argCheck == '扮') {
        return true;
    }
    // No.3036
    // 説明:95b0
    // 0x95b0 (Windows-31J)
    // 0x711a (UTF-16BE)
    if (argCheck == '焚') {
        return true;
    }
    // No.3037
    // 説明:95b1
    // 0x95b1 (Windows-31J)
    // 0x596e (UTF-16BE)
    if (argCheck == '奮') {
        return true;
    }
    // No.3038
    // 説明:95b2
    // 0x95b2 (Windows-31J)
    // 0x7c89 (UTF-16BE)
    if (argCheck == '粉') {
        return true;
    }
    // No.3039
    // 説明:95b3
    // 0x95b3 (Windows-31J)
    // 0x7cde (UTF-16BE)
    if (argCheck == '糞') {
        return true;
    }
    // No.3040
    // 説明:95b4
    // 0x95b4 (Windows-31J)
    // 0x7d1b (UTF-16BE)
    if (argCheck == '紛') {
        return true;
    }
    // No.3041
    // 説明:95b5
    // 0x95b5 (Windows-31J)
    // 0x96f0 (UTF-16BE)
    if (argCheck == '雰') {
        return true;
    }
    // No.3042
    // 説明:95b6
    // 0x95b6 (Windows-31J)
    // 0x6587 (UTF-16BE)
    if (argCheck == '文') {
        return true;
    }
    // No.3043
    // 説明:95b7
    // 0x95b7 (Windows-31J)
    // 0x805e (UTF-16BE)
    if (argCheck == '聞') {
        return true;
    }
    // No.3044
    // 説明:95b8
    // 0x95b8 (Windows-31J)
    // 0x4e19 (UTF-16BE)
    if (argCheck == '丙') {
        return true;
    }
    // No.3045
    // 説明:95b9
    // 0x95b9 (Windows-31J)
    // 0x4f75 (UTF-16BE)
    if (argCheck == '併') {
        return true;
    }
    // No.3046
    // 説明:95ba
    // 0x95ba (Windows-31J)
    // 0x5175 (UTF-16BE)
    if (argCheck == '兵') {
        return true;
    }
    // No.3047
    // 説明:95bb
    // 0x95bb (Windows-31J)
    // 0x5840 (UTF-16BE)
    if (argCheck == '塀') {
        return true;
    }
    // No.3048
    // 説明:95bc
    // 0x95bc (Windows-31J)
    // 0x5e63 (UTF-16BE)
    if (argCheck == '幣') {
        return true;
    }
    // No.3049
    // 説明:95bd
    // 0x95bd (Windows-31J)
    // 0x5e73 (UTF-16BE)
    if (argCheck == '平') {
        return true;
    }
    // No.3050
    // 説明:95be
    // 0x95be (Windows-31J)
    // 0x5f0a (UTF-16BE)
    if (argCheck == '弊') {
        return true;
    }
    // No.3051
    // 説明:95bf
    // 0x95bf (Windows-31J)
    // 0x67c4 (UTF-16BE)
    if (argCheck == '柄') {
        return true;
    }
    // No.3052
    // 説明:95c0
    // 0x95c0 (Windows-31J)
    // 0x4e26 (UTF-16BE)
    if (argCheck == '並') {
        return true;
    }
    // No.3053
    // 説明:95c1
    // 0x95c1 (Windows-31J)
    // 0x853d (UTF-16BE)
    if (argCheck == '蔽') {
        return true;
    }
    // No.3054
    // 説明:95c2
    // 0x95c2 (Windows-31J)
    // 0x9589 (UTF-16BE)
    if (argCheck == '閉') {
        return true;
    }
    // No.3055
    // 説明:95c3
    // 0x95c3 (Windows-31J)
    // 0x965b (UTF-16BE)
    if (argCheck == '陛') {
        return true;
    }
    // No.3056
    // 説明:95c4
    // 0x95c4 (Windows-31J)
    // 0x7c73 (UTF-16BE)
    if (argCheck == '米') {
        return true;
    }
    // No.3057
    // 説明:95c5
    // 0x95c5 (Windows-31J)
    // 0x9801 (UTF-16BE)
    if (argCheck == '頁') {
        return true;
    }
    // No.3058
    // 説明:95c6
    // 0x95c6 (Windows-31J)
    // 0x50fb (UTF-16BE)
    if (argCheck == '僻') {
        return true;
    }
    // No.3059
    // 説明:95c7
    // 0x95c7 (Windows-31J)
    // 0x58c1 (UTF-16BE)
    if (argCheck == '壁') {
        return true;
    }
    // No.3060
    // 説明:95c8
    // 0x95c8 (Windows-31J)
    // 0x7656 (UTF-16BE)
    if (argCheck == '癖') {
        return true;
    }
    // No.3061
    // 説明:95c9
    // 0x95c9 (Windows-31J)
    // 0x78a7 (UTF-16BE)
    if (argCheck == '碧') {
        return true;
    }
    // No.3062
    // 説明:95ca
    // 0x95ca (Windows-31J)
    // 0x5225 (UTF-16BE)
    if (argCheck == '別') {
        return true;
    }
    // No.3063
    // 説明:95cb
    // 0x95cb (Windows-31J)
    // 0x77a5 (UTF-16BE)
    if (argCheck == '瞥') {
        return true;
    }
    // No.3064
    // 説明:95cc
    // 0x95cc (Windows-31J)
    // 0x8511 (UTF-16BE)
    if (argCheck == '蔑') {
        return true;
    }
    // No.3065
    // 説明:95cd
    // 0x95cd (Windows-31J)
    // 0x7b86 (UTF-16BE)
    if (argCheck == '箆') {
        return true;
    }
    // No.3066
    // 説明:95ce
    // 0x95ce (Windows-31J)
    // 0x504f (UTF-16BE)
    if (argCheck == '偏') {
        return true;
    }
    // No.3067
    // 説明:95cf
    // 0x95cf (Windows-31J)
    // 0x5909 (UTF-16BE)
    if (argCheck == '変') {
        return true;
    }
    // No.3068
    // 説明:95d0
    // 0x95d0 (Windows-31J)
    // 0x7247 (UTF-16BE)
    if (argCheck == '片') {
        return true;
    }
    // No.3069
    // 説明:95d1
    // 0x95d1 (Windows-31J)
    // 0x7bc7 (UTF-16BE)
    if (argCheck == '篇') {
        return true;
    }
    // No.3070
    // 説明:95d2
    // 0x95d2 (Windows-31J)
    // 0x7de8 (UTF-16BE)
    if (argCheck == '編') {
        return true;
    }
    // No.3071
    // 説明:95d3
    // 0x95d3 (Windows-31J)
    // 0x8fba (UTF-16BE)
    if (argCheck == '辺') {
        return true;
    }
    // No.3072
    // 説明:95d4
    // 0x95d4 (Windows-31J)
    // 0x8fd4 (UTF-16BE)
    if (argCheck == '返') {
        return true;
    }
    // No.3073
    // 説明:95d5
    // 0x95d5 (Windows-31J)
    // 0x904d (UTF-16BE)
    if (argCheck == '遍') {
        return true;
    }
    // No.3074
    // 説明:95d6
    // 0x95d6 (Windows-31J)
    // 0x4fbf (UTF-16BE)
    if (argCheck == '便') {
        return true;
    }
    // No.3075
    // 説明:95d7
    // 0x95d7 (Windows-31J)
    // 0x52c9 (UTF-16BE)
    if (argCheck == '勉') {
        return true;
    }
    // No.3076
    // 説明:95d8
    // 0x95d8 (Windows-31J)
    // 0x5a29 (UTF-16BE)
    if (argCheck == '娩') {
        return true;
    }
    // No.3077
    // 説明:95d9
    // 0x95d9 (Windows-31J)
    // 0x5f01 (UTF-16BE)
    if (argCheck == '弁') {
        return true;
    }
    // No.3078
    // 説明:95da
    // 0x95da (Windows-31J)
    // 0x97ad (UTF-16BE)
    if (argCheck == '鞭') {
        return true;
    }
    // No.3079
    // 説明:95db
    // 0x95db (Windows-31J)
    // 0x4fdd (UTF-16BE)
    if (argCheck == '保') {
        return true;
    }
    // No.3080
    // 説明:95dc
    // 0x95dc (Windows-31J)
    // 0x8217 (UTF-16BE)
    if (argCheck == '舗') {
        return true;
    }
    // No.3081
    // 説明:95dd
    // 0x95dd (Windows-31J)
    // 0x92ea (UTF-16BE)
    if (argCheck == '鋪') {
        return true;
    }
    // No.3082
    // 説明:95de
    // 0x95de (Windows-31J)
    // 0x5703 (UTF-16BE)
    if (argCheck == '圃') {
        return true;
    }
    // No.3083
    // 説明:95df
    // 0x95df (Windows-31J)
    // 0x6355 (UTF-16BE)
    if (argCheck == '捕') {
        return true;
    }
    // No.3084
    // 説明:95e0
    // 0x95e0 (Windows-31J)
    // 0x6b69 (UTF-16BE)
    if (argCheck == '歩') {
        return true;
    }
    // No.3085
    // 説明:95e1
    // 0x95e1 (Windows-31J)
    // 0x752b (UTF-16BE)
    if (argCheck == '甫') {
        return true;
    }
    // No.3086
    // 説明:95e2
    // 0x95e2 (Windows-31J)
    // 0x88dc (UTF-16BE)
    if (argCheck == '補') {
        return true;
    }
    // No.3087
    // 説明:95e3
    // 0x95e3 (Windows-31J)
    // 0x8f14 (UTF-16BE)
    if (argCheck == '輔') {
        return true;
    }
    // No.3088
    // 説明:95e4
    // 0x95e4 (Windows-31J)
    // 0x7a42 (UTF-16BE)
    if (argCheck == '穂') {
        return true;
    }
    // No.3089
    // 説明:95e5
    // 0x95e5 (Windows-31J)
    // 0x52df (UTF-16BE)
    if (argCheck == '募') {
        return true;
    }
    // No.3090
    // 説明:95e6
    // 0x95e6 (Windows-31J)
    // 0x5893 (UTF-16BE)
    if (argCheck == '墓') {
        return true;
    }
    // No.3091
    // 説明:95e7
    // 0x95e7 (Windows-31J)
    // 0x6155 (UTF-16BE)
    if (argCheck == '慕') {
        return true;
    }
    // No.3092
    // 説明:95e8
    // 0x95e8 (Windows-31J)
    // 0x620a (UTF-16BE)
    if (argCheck == '戊') {
        return true;
    }
    // No.3093
    // 説明:95e9
    // 0x95e9 (Windows-31J)
    // 0x66ae (UTF-16BE)
    if (argCheck == '暮') {
        return true;
    }
    // No.3094
    // 説明:95ea
    // 0x95ea (Windows-31J)
    // 0x6bcd (UTF-16BE)
    if (argCheck == '母') {
        return true;
    }
    // No.3095
    // 説明:95eb
    // 0x95eb (Windows-31J)
    // 0x7c3f (UTF-16BE)
    if (argCheck == '簿') {
        return true;
    }
    // No.3096
    // 説明:95ec
    // 0x95ec (Windows-31J)
    // 0x83e9 (UTF-16BE)
    if (argCheck == '菩') {
        return true;
    }
    // No.3097
    // 説明:95ed
    // 0x95ed (Windows-31J)
    // 0x5023 (UTF-16BE)
    if (argCheck == '倣') {
        return true;
    }
    // No.3098
    // 説明:95ee
    // 0x95ee (Windows-31J)
    // 0x4ff8 (UTF-16BE)
    if (argCheck == '俸') {
        return true;
    }
    // No.3099
    // 説明:95ef
    // 0x95ef (Windows-31J)
    // 0x5305 (UTF-16BE)
    if (argCheck == '包') {
        return true;
    }
    // No.3100
    // 説明:95f0
    // 0x95f0 (Windows-31J)
    // 0x5446 (UTF-16BE)
    if (argCheck == '呆') {
        return true;
    }
    // No.3101
    // 説明:95f1
    // 0x95f1 (Windows-31J)
    // 0x5831 (UTF-16BE)
    if (argCheck == '報') {
        return true;
    }
    // No.3102
    // 説明:95f2
    // 0x95f2 (Windows-31J)
    // 0x5949 (UTF-16BE)
    if (argCheck == '奉') {
        return true;
    }
    // No.3103
    // 説明:95f3
    // 0x95f3 (Windows-31J)
    // 0x5b9d (UTF-16BE)
    if (argCheck == '宝') {
        return true;
    }
    // No.3104
    // 説明:95f4
    // 0x95f4 (Windows-31J)
    // 0x5cf0 (UTF-16BE)
    if (argCheck == '峰') {
        return true;
    }
    // No.3105
    // 説明:95f5
    // 0x95f5 (Windows-31J)
    // 0x5cef (UTF-16BE)
    if (argCheck == '峯') {
        return true;
    }
    // No.3106
    // 説明:95f6
    // 0x95f6 (Windows-31J)
    // 0x5d29 (UTF-16BE)
    if (argCheck == '崩') {
        return true;
    }
    // No.3107
    // 説明:95f7
    // 0x95f7 (Windows-31J)
    // 0x5e96 (UTF-16BE)
    if (argCheck == '庖') {
        return true;
    }
    // No.3108
    // 説明:95f8
    // 0x95f8 (Windows-31J)
    // 0x62b1 (UTF-16BE)
    if (argCheck == '抱') {
        return true;
    }
    // No.3109
    // 説明:95f9
    // 0x95f9 (Windows-31J)
    // 0x6367 (UTF-16BE)
    if (argCheck == '捧') {
        return true;
    }
    // No.3110
    // 説明:95fa
    // 0x95fa (Windows-31J)
    // 0x653e (UTF-16BE)
    if (argCheck == '放') {
        return true;
    }
    // No.3111
    // 説明:95fb
    // 0x95fb (Windows-31J)
    // 0x65b9 (UTF-16BE)
    if (argCheck == '方') {
        return true;
    }
    // No.3112
    // 説明:95fc
    // 0x95fc (Windows-31J)
    // 0x670b (UTF-16BE)
    if (argCheck == '朋') {
        return true;
    }
    // No.3113
    // 説明:9640
    // 0x9640 (Windows-31J)
    // 0x6cd5 (UTF-16BE)
    if (argCheck == '法') {
        return true;
    }
    // No.3114
    // 説明:9641
    // 0x9641 (Windows-31J)
    // 0x6ce1 (UTF-16BE)
    if (argCheck == '泡') {
        return true;
    }
    // No.3115
    // 説明:9642
    // 0x9642 (Windows-31J)
    // 0x70f9 (UTF-16BE)
    if (argCheck == '烹') {
        return true;
    }
    // No.3116
    // 説明:9643
    // 0x9643 (Windows-31J)
    // 0x7832 (UTF-16BE)
    if (argCheck == '砲') {
        return true;
    }
    // No.3117
    // 説明:9644
    // 0x9644 (Windows-31J)
    // 0x7e2b (UTF-16BE)
    if (argCheck == '縫') {
        return true;
    }
    // No.3118
    // 説明:9645
    // 0x9645 (Windows-31J)
    // 0x80de (UTF-16BE)
    if (argCheck == '胞') {
        return true;
    }
    // No.3119
    // 説明:9646
    // 0x9646 (Windows-31J)
    // 0x82b3 (UTF-16BE)
    if (argCheck == '芳') {
        return true;
    }
    // No.3120
    // 説明:9647
    // 0x9647 (Windows-31J)
    // 0x840c (UTF-16BE)
    if (argCheck == '萌') {
        return true;
    }
    // No.3121
    // 説明:9648
    // 0x9648 (Windows-31J)
    // 0x84ec (UTF-16BE)
    if (argCheck == '蓬') {
        return true;
    }
    // No.3122
    // 説明:9649
    // 0x9649 (Windows-31J)
    // 0x8702 (UTF-16BE)
    if (argCheck == '蜂') {
        return true;
    }
    // No.3123
    // 説明:964a
    // 0x964a (Windows-31J)
    // 0x8912 (UTF-16BE)
    if (argCheck == '褒') {
        return true;
    }
    // No.3124
    // 説明:964b
    // 0x964b (Windows-31J)
    // 0x8a2a (UTF-16BE)
    if (argCheck == '訪') {
        return true;
    }
    // No.3125
    // 説明:964c
    // 0x964c (Windows-31J)
    // 0x8c4a (UTF-16BE)
    if (argCheck == '豊') {
        return true;
    }
    // No.3126
    // 説明:964d
    // 0x964d (Windows-31J)
    // 0x90a6 (UTF-16BE)
    if (argCheck == '邦') {
        return true;
    }
    // No.3127
    // 説明:964e
    // 0x964e (Windows-31J)
    // 0x92d2 (UTF-16BE)
    if (argCheck == '鋒') {
        return true;
    }
    // No.3128
    // 説明:964f
    // 0x964f (Windows-31J)
    // 0x98fd (UTF-16BE)
    if (argCheck == '飽') {
        return true;
    }
    // No.3129
    // 説明:9650
    // 0x9650 (Windows-31J)
    // 0x9cf3 (UTF-16BE)
    if (argCheck == '鳳') {
        return true;
    }
    // No.3130
    // 説明:9651
    // 0x9651 (Windows-31J)
    // 0x9d6c (UTF-16BE)
    if (argCheck == '鵬') {
        return true;
    }
    // No.3131
    // 説明:9652
    // 0x9652 (Windows-31J)
    // 0x4e4f (UTF-16BE)
    if (argCheck == '乏') {
        return true;
    }
    // No.3132
    // 説明:9653
    // 0x9653 (Windows-31J)
    // 0x4ea1 (UTF-16BE)
    if (argCheck == '亡') {
        return true;
    }
    // No.3133
    // 説明:9654
    // 0x9654 (Windows-31J)
    // 0x508d (UTF-16BE)
    if (argCheck == '傍') {
        return true;
    }
    // No.3134
    // 説明:9655
    // 0x9655 (Windows-31J)
    // 0x5256 (UTF-16BE)
    if (argCheck == '剖') {
        return true;
    }
    // No.3135
    // 説明:9656
    // 0x9656 (Windows-31J)
    // 0x574a (UTF-16BE)
    if (argCheck == '坊') {
        return true;
    }
    // No.3136
    // 説明:9657
    // 0x9657 (Windows-31J)
    // 0x59a8 (UTF-16BE)
    if (argCheck == '妨') {
        return true;
    }
    // No.3137
    // 説明:9658
    // 0x9658 (Windows-31J)
    // 0x5e3d (UTF-16BE)
    if (argCheck == '帽') {
        return true;
    }
    // No.3138
    // 説明:9659
    // 0x9659 (Windows-31J)
    // 0x5fd8 (UTF-16BE)
    if (argCheck == '忘') {
        return true;
    }
    // No.3139
    // 説明:965a
    // 0x965a (Windows-31J)
    // 0x5fd9 (UTF-16BE)
    if (argCheck == '忙') {
        return true;
    }
    // No.3140
    // 説明:965b
    // 0x965b (Windows-31J)
    // 0x623f (UTF-16BE)
    if (argCheck == '房') {
        return true;
    }
    // No.3141
    // 説明:965c
    // 0x965c (Windows-31J)
    // 0x66b4 (UTF-16BE)
    if (argCheck == '暴') {
        return true;
    }
    // No.3142
    // 説明:965d
    // 0x965d (Windows-31J)
    // 0x671b (UTF-16BE)
    if (argCheck == '望') {
        return true;
    }
    // No.3143
    // 説明:965e
    // 0x965e (Windows-31J)
    // 0x67d0 (UTF-16BE)
    if (argCheck == '某') {
        return true;
    }
    // No.3144
    // 説明:965f
    // 0x965f (Windows-31J)
    // 0x68d2 (UTF-16BE)
    if (argCheck == '棒') {
        return true;
    }
    // No.3145
    // 説明:9660
    // 0x9660 (Windows-31J)
    // 0x5192 (UTF-16BE)
    if (argCheck == '冒') {
        return true;
    }
    // No.3146
    // 説明:9661
    // 0x9661 (Windows-31J)
    // 0x7d21 (UTF-16BE)
    if (argCheck == '紡') {
        return true;
    }
    // No.3147
    // 説明:9662
    // 0x9662 (Windows-31J)
    // 0x80aa (UTF-16BE)
    if (argCheck == '肪') {
        return true;
    }
    // No.3148
    // 説明:9663
    // 0x9663 (Windows-31J)
    // 0x81a8 (UTF-16BE)
    if (argCheck == '膨') {
        return true;
    }
    // No.3149
    // 説明:9664
    // 0x9664 (Windows-31J)
    // 0x8b00 (UTF-16BE)
    if (argCheck == '謀') {
        return true;
    }
    // No.3150
    // 説明:9665
    // 0x9665 (Windows-31J)
    // 0x8c8c (UTF-16BE)
    if (argCheck == '貌') {
        return true;
    }
    // No.3151
    // 説明:9666
    // 0x9666 (Windows-31J)
    // 0x8cbf (UTF-16BE)
    if (argCheck == '貿') {
        return true;
    }
    // No.3152
    // 説明:9667
    // 0x9667 (Windows-31J)
    // 0x927e (UTF-16BE)
    if (argCheck == '鉾') {
        return true;
    }
    // No.3153
    // 説明:9668
    // 0x9668 (Windows-31J)
    // 0x9632 (UTF-16BE)
    if (argCheck == '防') {
        return true;
    }
    // No.3154
    // 説明:9669
    // 0x9669 (Windows-31J)
    // 0x5420 (UTF-16BE)
    if (argCheck == '吠') {
        return true;
    }
    // No.3155
    // 説明:966a
    // 0x966a (Windows-31J)
    // 0x982c (UTF-16BE)
    if (argCheck == '頬') {
        return true;
    }
    // No.3156
    // 説明:966b
    // 0x966b (Windows-31J)
    // 0x5317 (UTF-16BE)
    if (argCheck == '北') {
        return true;
    }
    // No.3157
    // 説明:966c
    // 0x966c (Windows-31J)
    // 0x50d5 (UTF-16BE)
    if (argCheck == '僕') {
        return true;
    }
    // No.3158
    // 説明:966d
    // 0x966d (Windows-31J)
    // 0x535c (UTF-16BE)
    if (argCheck == '卜') {
        return true;
    }
    // No.3159
    // 説明:966e
    // 0x966e (Windows-31J)
    // 0x58a8 (UTF-16BE)
    if (argCheck == '墨') {
        return true;
    }
    // No.3160
    // 説明:966f
    // 0x966f (Windows-31J)
    // 0x64b2 (UTF-16BE)
    if (argCheck == '撲') {
        return true;
    }
    // No.3161
    // 説明:9670
    // 0x9670 (Windows-31J)
    // 0x6734 (UTF-16BE)
    if (argCheck == '朴') {
        return true;
    }
    // No.3162
    // 説明:9671
    // 0x9671 (Windows-31J)
    // 0x7267 (UTF-16BE)
    if (argCheck == '牧') {
        return true;
    }
    // No.3163
    // 説明:9672
    // 0x9672 (Windows-31J)
    // 0x7766 (UTF-16BE)
    if (argCheck == '睦') {
        return true;
    }
    // No.3164
    // 説明:9673
    // 0x9673 (Windows-31J)
    // 0x7a46 (UTF-16BE)
    if (argCheck == '穆') {
        return true;
    }
    // No.3165
    // 説明:9674
    // 0x9674 (Windows-31J)
    // 0x91e6 (UTF-16BE)
    if (argCheck == '釦') {
        return true;
    }
    // No.3166
    // 説明:9675
    // 0x9675 (Windows-31J)
    // 0x52c3 (UTF-16BE)
    if (argCheck == '勃') {
        return true;
    }
    // No.3167
    // 説明:9676
    // 0x9676 (Windows-31J)
    // 0x6ca1 (UTF-16BE)
    if (argCheck == '没') {
        return true;
    }
    // No.3168
    // 説明:9677
    // 0x9677 (Windows-31J)
    // 0x6b86 (UTF-16BE)
    if (argCheck == '殆') {
        return true;
    }
    // No.3169
    // 説明:9678
    // 0x9678 (Windows-31J)
    // 0x5800 (UTF-16BE)
    if (argCheck == '堀') {
        return true;
    }
    // No.3170
    // 説明:9679
    // 0x9679 (Windows-31J)
    // 0x5e4c (UTF-16BE)
    if (argCheck == '幌') {
        return true;
    }
    // No.3171
    // 説明:967a
    // 0x967a (Windows-31J)
    // 0x5954 (UTF-16BE)
    if (argCheck == '奔') {
        return true;
    }
    // No.3172
    // 説明:967b
    // 0x967b (Windows-31J)
    // 0x672c (UTF-16BE)
    if (argCheck == '本') {
        return true;
    }
    // No.3173
    // 説明:967c
    // 0x967c (Windows-31J)
    // 0x7ffb (UTF-16BE)
    if (argCheck == '翻') {
        return true;
    }
    // No.3174
    // 説明:967d
    // 0x967d (Windows-31J)
    // 0x51e1 (UTF-16BE)
    if (argCheck == '凡') {
        return true;
    }
    // No.3175
    // 説明:967e
    // 0x967e (Windows-31J)
    // 0x76c6 (UTF-16BE)
    if (argCheck == '盆') {
        return true;
    }
    // No.3176
    // 説明:9680
    // 0x9680 (Windows-31J)
    // 0x6469 (UTF-16BE)
    if (argCheck == '摩') {
        return true;
    }
    // No.3177
    // 説明:9681
    // 0x9681 (Windows-31J)
    // 0x78e8 (UTF-16BE)
    if (argCheck == '磨') {
        return true;
    }
    // No.3178
    // 説明:9682
    // 0x9682 (Windows-31J)
    // 0x9b54 (UTF-16BE)
    if (argCheck == '魔') {
        return true;
    }
    // No.3179
    // 説明:9683
    // 0x9683 (Windows-31J)
    // 0x9ebb (UTF-16BE)
    if (argCheck == '麻') {
        return true;
    }
    // No.3180
    // 説明:9684
    // 0x9684 (Windows-31J)
    // 0x57cb (UTF-16BE)
    if (argCheck == '埋') {
        return true;
    }
    // No.3181
    // 説明:9685
    // 0x9685 (Windows-31J)
    // 0x59b9 (UTF-16BE)
    if (argCheck == '妹') {
        return true;
    }
    // No.3182
    // 説明:9686
    // 0x9686 (Windows-31J)
    // 0x6627 (UTF-16BE)
    if (argCheck == '昧') {
        return true;
    }
    // No.3183
    // 説明:9687
    // 0x9687 (Windows-31J)
    // 0x679a (UTF-16BE)
    if (argCheck == '枚') {
        return true;
    }
    // No.3184
    // 説明:9688
    // 0x9688 (Windows-31J)
    // 0x6bce (UTF-16BE)
    if (argCheck == '毎') {
        return true;
    }
    // No.3185
    // 説明:9689
    // 0x9689 (Windows-31J)
    // 0x54e9 (UTF-16BE)
    if (argCheck == '哩') {
        return true;
    }
    // No.3186
    // 説明:968a
    // 0x968a (Windows-31J)
    // 0x69d9 (UTF-16BE)
    if (argCheck == '槙') {
        return true;
    }
    // No.3187
    // 説明:968b
    // 0x968b (Windows-31J)
    // 0x5e55 (UTF-16BE)
    if (argCheck == '幕') {
        return true;
    }
    // No.3188
    // 説明:968c
    // 0x968c (Windows-31J)
    // 0x819c (UTF-16BE)
    if (argCheck == '膜') {
        return true;
    }
    // No.3189
    // 説明:968d
    // 0x968d (Windows-31J)
    // 0x6795 (UTF-16BE)
    if (argCheck == '枕') {
        return true;
    }
    // No.3190
    // 説明:968e
    // 0x968e (Windows-31J)
    // 0x9baa (UTF-16BE)
    if (argCheck == '鮪') {
        return true;
    }
    // No.3191
    // 説明:968f
    // 0x968f (Windows-31J)
    // 0x67fe (UTF-16BE)
    if (argCheck == '柾') {
        return true;
    }
    // No.3192
    // 説明:9690
    // 0x9690 (Windows-31J)
    // 0x9c52 (UTF-16BE)
    if (argCheck == '鱒') {
        return true;
    }
    // No.3193
    // 説明:9691
    // 0x9691 (Windows-31J)
    // 0x685d (UTF-16BE)
    if (argCheck == '桝') {
        return true;
    }
    // No.3194
    // 説明:9692
    // 0x9692 (Windows-31J)
    // 0x4ea6 (UTF-16BE)
    if (argCheck == '亦') {
        return true;
    }
    // No.3195
    // 説明:9693
    // 0x9693 (Windows-31J)
    // 0x4fe3 (UTF-16BE)
    if (argCheck == '俣') {
        return true;
    }
    // No.3196
    // 説明:9694
    // 0x9694 (Windows-31J)
    // 0x53c8 (UTF-16BE)
    if (argCheck == '又') {
        return true;
    }
    // No.3197
    // 説明:9695
    // 0x9695 (Windows-31J)
    // 0x62b9 (UTF-16BE)
    if (argCheck == '抹') {
        return true;
    }
    // No.3198
    // 説明:9696
    // 0x9696 (Windows-31J)
    // 0x672b (UTF-16BE)
    if (argCheck == '末') {
        return true;
    }
    // No.3199
    // 説明:9697
    // 0x9697 (Windows-31J)
    // 0x6cab (UTF-16BE)
    if (argCheck == '沫') {
        return true;
    }
    // No.3200
    // 説明:9698
    // 0x9698 (Windows-31J)
    // 0x8fc4 (UTF-16BE)
    if (argCheck == '迄') {
        return true;
    }
    // No.3201
    // 説明:9699
    // 0x9699 (Windows-31J)
    // 0x4fad (UTF-16BE)
    if (argCheck == '侭') {
        return true;
    }
    // No.3202
    // 説明:969a
    // 0x969a (Windows-31J)
    // 0x7e6d (UTF-16BE)
    if (argCheck == '繭') {
        return true;
    }
    // No.3203
    // 説明:969b
    // 0x969b (Windows-31J)
    // 0x9ebf (UTF-16BE)
    if (argCheck == '麿') {
        return true;
    }
    // No.3204
    // 説明:969c
    // 0x969c (Windows-31J)
    // 0x4e07 (UTF-16BE)
    if (argCheck == '万') {
        return true;
    }
    // No.3205
    // 説明:969d
    // 0x969d (Windows-31J)
    // 0x6162 (UTF-16BE)
    if (argCheck == '慢') {
        return true;
    }
    // No.3206
    // 説明:969e
    // 0x969e (Windows-31J)
    // 0x6e80 (UTF-16BE)
    if (argCheck == '満') {
        return true;
    }
    // No.3207
    // 説明:969f
    // 0x969f (Windows-31J)
    // 0x6f2b (UTF-16BE)
    if (argCheck == '漫') {
        return true;
    }
    // No.3208
    // 説明:96a0
    // 0x96a0 (Windows-31J)
    // 0x8513 (UTF-16BE)
    if (argCheck == '蔓') {
        return true;
    }
    // No.3209
    // 説明:96a1
    // 0x96a1 (Windows-31J)
    // 0x5473 (UTF-16BE)
    if (argCheck == '味') {
        return true;
    }
    // No.3210
    // 説明:96a2
    // 0x96a2 (Windows-31J)
    // 0x672a (UTF-16BE)
    if (argCheck == '未') {
        return true;
    }
    // No.3211
    // 説明:96a3
    // 0x96a3 (Windows-31J)
    // 0x9b45 (UTF-16BE)
    if (argCheck == '魅') {
        return true;
    }
    // No.3212
    // 説明:96a4
    // 0x96a4 (Windows-31J)
    // 0x5df3 (UTF-16BE)
    if (argCheck == '巳') {
        return true;
    }
    // No.3213
    // 説明:96a5
    // 0x96a5 (Windows-31J)
    // 0x7b95 (UTF-16BE)
    if (argCheck == '箕') {
        return true;
    }
    // No.3214
    // 説明:96a6
    // 0x96a6 (Windows-31J)
    // 0x5cac (UTF-16BE)
    if (argCheck == '岬') {
        return true;
    }
    // No.3215
    // 説明:96a7
    // 0x96a7 (Windows-31J)
    // 0x5bc6 (UTF-16BE)
    if (argCheck == '密') {
        return true;
    }
    // No.3216
    // 説明:96a8
    // 0x96a8 (Windows-31J)
    // 0x871c (UTF-16BE)
    if (argCheck == '蜜') {
        return true;
    }
    // No.3217
    // 説明:96a9
    // 0x96a9 (Windows-31J)
    // 0x6e4a (UTF-16BE)
    if (argCheck == '湊') {
        return true;
    }
    // No.3218
    // 説明:96aa
    // 0x96aa (Windows-31J)
    // 0x84d1 (UTF-16BE)
    if (argCheck == '蓑') {
        return true;
    }
    // No.3219
    // 説明:96ab
    // 0x96ab (Windows-31J)
    // 0x7a14 (UTF-16BE)
    if (argCheck == '稔') {
        return true;
    }
    // No.3220
    // 説明:96ac
    // 0x96ac (Windows-31J)
    // 0x8108 (UTF-16BE)
    if (argCheck == '脈') {
        return true;
    }
    // No.3221
    // 説明:96ad
    // 0x96ad (Windows-31J)
    // 0x5999 (UTF-16BE)
    if (argCheck == '妙') {
        return true;
    }
    // No.3222
    // 説明:96ae
    // 0x96ae (Windows-31J)
    // 0x7c8d (UTF-16BE)
    if (argCheck == '粍') {
        return true;
    }
    // No.3223
    // 説明:96af
    // 0x96af (Windows-31J)
    // 0x6c11 (UTF-16BE)
    if (argCheck == '民') {
        return true;
    }
    // No.3224
    // 説明:96b0
    // 0x96b0 (Windows-31J)
    // 0x7720 (UTF-16BE)
    if (argCheck == '眠') {
        return true;
    }
    // No.3225
    // 説明:96b1
    // 0x96b1 (Windows-31J)
    // 0x52d9 (UTF-16BE)
    if (argCheck == '務') {
        return true;
    }
    // No.3226
    // 説明:96b2
    // 0x96b2 (Windows-31J)
    // 0x5922 (UTF-16BE)
    if (argCheck == '夢') {
        return true;
    }
    // No.3227
    // 説明:96b3
    // 0x96b3 (Windows-31J)
    // 0x7121 (UTF-16BE)
    if (argCheck == '無') {
        return true;
    }
    // No.3228
    // 説明:96b4
    // 0x96b4 (Windows-31J)
    // 0x725f (UTF-16BE)
    if (argCheck == '牟') {
        return true;
    }
    // No.3229
    // 説明:96b5
    // 0x96b5 (Windows-31J)
    // 0x77db (UTF-16BE)
    if (argCheck == '矛') {
        return true;
    }
    // No.3230
    // 説明:96b6
    // 0x96b6 (Windows-31J)
    // 0x9727 (UTF-16BE)
    if (argCheck == '霧') {
        return true;
    }
    // No.3231
    // 説明:96b7
    // 0x96b7 (Windows-31J)
    // 0x9d61 (UTF-16BE)
    if (argCheck == '鵡') {
        return true;
    }
    // No.3232
    // 説明:96b8
    // 0x96b8 (Windows-31J)
    // 0x690b (UTF-16BE)
    if (argCheck == '椋') {
        return true;
    }
    // No.3233
    // 説明:96b9
    // 0x96b9 (Windows-31J)
    // 0x5a7f (UTF-16BE)
    if (argCheck == '婿') {
        return true;
    }
    // No.3234
    // 説明:96ba
    // 0x96ba (Windows-31J)
    // 0x5a18 (UTF-16BE)
    if (argCheck == '娘') {
        return true;
    }
    // No.3235
    // 説明:96bb
    // 0x96bb (Windows-31J)
    // 0x51a5 (UTF-16BE)
    if (argCheck == '冥') {
        return true;
    }
    // No.3236
    // 説明:96bc
    // 0x96bc (Windows-31J)
    // 0x540d (UTF-16BE)
    if (argCheck == '名') {
        return true;
    }
    // No.3237
    // 説明:96bd
    // 0x96bd (Windows-31J)
    // 0x547d (UTF-16BE)
    if (argCheck == '命') {
        return true;
    }
    // No.3238
    // 説明:96be
    // 0x96be (Windows-31J)
    // 0x660e (UTF-16BE)
    if (argCheck == '明') {
        return true;
    }
    // No.3239
    // 説明:96bf
    // 0x96bf (Windows-31J)
    // 0x76df (UTF-16BE)
    if (argCheck == '盟') {
        return true;
    }
    // No.3240
    // 説明:96c0
    // 0x96c0 (Windows-31J)
    // 0x8ff7 (UTF-16BE)
    if (argCheck == '迷') {
        return true;
    }
    // No.3241
    // 説明:96c1
    // 0x96c1 (Windows-31J)
    // 0x9298 (UTF-16BE)
    if (argCheck == '銘') {
        return true;
    }
    // No.3242
    // 説明:96c2
    // 0x96c2 (Windows-31J)
    // 0x9cf4 (UTF-16BE)
    if (argCheck == '鳴') {
        return true;
    }
    // No.3243
    // 説明:96c3
    // 0x96c3 (Windows-31J)
    // 0x59ea (UTF-16BE)
    if (argCheck == '姪') {
        return true;
    }
    // No.3244
    // 説明:96c4
    // 0x96c4 (Windows-31J)
    // 0x725d (UTF-16BE)
    if (argCheck == '牝') {
        return true;
    }
    // No.3245
    // 説明:96c5
    // 0x96c5 (Windows-31J)
    // 0x6ec5 (UTF-16BE)
    if (argCheck == '滅') {
        return true;
    }
    // No.3246
    // 説明:96c6
    // 0x96c6 (Windows-31J)
    // 0x514d (UTF-16BE)
    if (argCheck == '免') {
        return true;
    }
    // No.3247
    // 説明:96c7
    // 0x96c7 (Windows-31J)
    // 0x68c9 (UTF-16BE)
    if (argCheck == '棉') {
        return true;
    }
    // No.3248
    // 説明:96c8
    // 0x96c8 (Windows-31J)
    // 0x7dbf (UTF-16BE)
    if (argCheck == '綿') {
        return true;
    }
    // No.3249
    // 説明:96c9
    // 0x96c9 (Windows-31J)
    // 0x7dec (UTF-16BE)
    if (argCheck == '緬') {
        return true;
    }
    // No.3250
    // 説明:96ca
    // 0x96ca (Windows-31J)
    // 0x9762 (UTF-16BE)
    if (argCheck == '面') {
        return true;
    }
    // No.3251
    // 説明:96cb
    // 0x96cb (Windows-31J)
    // 0x9eba (UTF-16BE)
    if (argCheck == '麺') {
        return true;
    }
    // No.3252
    // 説明:96cc
    // 0x96cc (Windows-31J)
    // 0x6478 (UTF-16BE)
    if (argCheck == '摸') {
        return true;
    }
    // No.3253
    // 説明:96cd
    // 0x96cd (Windows-31J)
    // 0x6a21 (UTF-16BE)
    if (argCheck == '模') {
        return true;
    }
    // No.3254
    // 説明:96ce
    // 0x96ce (Windows-31J)
    // 0x8302 (UTF-16BE)
    if (argCheck == '茂') {
        return true;
    }
    // No.3255
    // 説明:96cf
    // 0x96cf (Windows-31J)
    // 0x5984 (UTF-16BE)
    if (argCheck == '妄') {
        return true;
    }
    // No.3256
    // 説明:96d0
    // 0x96d0 (Windows-31J)
    // 0x5b5f (UTF-16BE)
    if (argCheck == '孟') {
        return true;
    }
    // No.3257
    // 説明:96d1
    // 0x96d1 (Windows-31J)
    // 0x6bdb (UTF-16BE)
    if (argCheck == '毛') {
        return true;
    }
    // No.3258
    // 説明:96d2
    // 0x96d2 (Windows-31J)
    // 0x731b (UTF-16BE)
    if (argCheck == '猛') {
        return true;
    }
    // No.3259
    // 説明:96d3
    // 0x96d3 (Windows-31J)
    // 0x76f2 (UTF-16BE)
    if (argCheck == '盲') {
        return true;
    }
    // No.3260
    // 説明:96d4
    // 0x96d4 (Windows-31J)
    // 0x7db2 (UTF-16BE)
    if (argCheck == '網') {
        return true;
    }
    // No.3261
    // 説明:96d5
    // 0x96d5 (Windows-31J)
    // 0x8017 (UTF-16BE)
    if (argCheck == '耗') {
        return true;
    }
    // No.3262
    // 説明:96d6
    // 0x96d6 (Windows-31J)
    // 0x8499 (UTF-16BE)
    if (argCheck == '蒙') {
        return true;
    }
    // No.3263
    // 説明:96d7
    // 0x96d7 (Windows-31J)
    // 0x5132 (UTF-16BE)
    if (argCheck == '儲') {
        return true;
    }
    // No.3264
    // 説明:96d8
    // 0x96d8 (Windows-31J)
    // 0x6728 (UTF-16BE)
    if (argCheck == '木') {
        return true;
    }
    // No.3265
    // 説明:96d9
    // 0x96d9 (Windows-31J)
    // 0x9ed9 (UTF-16BE)
    if (argCheck == '黙') {
        return true;
    }
    // No.3266
    // 説明:96da
    // 0x96da (Windows-31J)
    // 0x76ee (UTF-16BE)
    if (argCheck == '目') {
        return true;
    }
    // No.3267
    // 説明:96db
    // 0x96db (Windows-31J)
    // 0x6762 (UTF-16BE)
    if (argCheck == '杢') {
        return true;
    }
    // No.3268
    // 説明:96dc
    // 0x96dc (Windows-31J)
    // 0x52ff (UTF-16BE)
    if (argCheck == '勿') {
        return true;
    }
    // No.3269
    // 説明:96dd
    // 0x96dd (Windows-31J)
    // 0x9905 (UTF-16BE)
    if (argCheck == '餅') {
        return true;
    }
    // No.3270
    // 説明:96de
    // 0x96de (Windows-31J)
    // 0x5c24 (UTF-16BE)
    if (argCheck == '尤') {
        return true;
    }
    // No.3271
    // 説明:96df
    // 0x96df (Windows-31J)
    // 0x623b (UTF-16BE)
    if (argCheck == '戻') {
        return true;
    }
    // No.3272
    // 説明:96e0
    // 0x96e0 (Windows-31J)
    // 0x7c7e (UTF-16BE)
    if (argCheck == '籾') {
        return true;
    }
    // No.3273
    // 説明:96e1
    // 0x96e1 (Windows-31J)
    // 0x8cb0 (UTF-16BE)
    if (argCheck == '貰') {
        return true;
    }
    // No.3274
    // 説明:96e2
    // 0x96e2 (Windows-31J)
    // 0x554f (UTF-16BE)
    if (argCheck == '問') {
        return true;
    }
    // No.3275
    // 説明:96e3
    // 0x96e3 (Windows-31J)
    // 0x60b6 (UTF-16BE)
    if (argCheck == '悶') {
        return true;
    }
    // No.3276
    // 説明:96e4
    // 0x96e4 (Windows-31J)
    // 0x7d0b (UTF-16BE)
    if (argCheck == '紋') {
        return true;
    }
    // No.3277
    // 説明:96e5
    // 0x96e5 (Windows-31J)
    // 0x9580 (UTF-16BE)
    if (argCheck == '門') {
        return true;
    }
    // No.3278
    // 説明:96e6
    // 0x96e6 (Windows-31J)
    // 0x5301 (UTF-16BE)
    if (argCheck == '匁') {
        return true;
    }
    // No.3279
    // 説明:96e7
    // 0x96e7 (Windows-31J)
    // 0x4e5f (UTF-16BE)
    if (argCheck == '也') {
        return true;
    }
    // No.3280
    // 説明:96e8
    // 0x96e8 (Windows-31J)
    // 0x51b6 (UTF-16BE)
    if (argCheck == '冶') {
        return true;
    }
    // No.3281
    // 説明:96e9
    // 0x96e9 (Windows-31J)
    // 0x591c (UTF-16BE)
    if (argCheck == '夜') {
        return true;
    }
    // No.3282
    // 説明:96ea
    // 0x96ea (Windows-31J)
    // 0x723a (UTF-16BE)
    if (argCheck == '爺') {
        return true;
    }
    // No.3283
    // 説明:96eb
    // 0x96eb (Windows-31J)
    // 0x8036 (UTF-16BE)
    if (argCheck == '耶') {
        return true;
    }
    // No.3284
    // 説明:96ec
    // 0x96ec (Windows-31J)
    // 0x91ce (UTF-16BE)
    if (argCheck == '野') {
        return true;
    }
    // No.3285
    // 説明:96ed
    // 0x96ed (Windows-31J)
    // 0x5f25 (UTF-16BE)
    if (argCheck == '弥') {
        return true;
    }
    // No.3286
    // 説明:96ee
    // 0x96ee (Windows-31J)
    // 0x77e2 (UTF-16BE)
    if (argCheck == '矢') {
        return true;
    }
    // No.3287
    // 説明:96ef
    // 0x96ef (Windows-31J)
    // 0x5384 (UTF-16BE)
    if (argCheck == '厄') {
        return true;
    }
    // No.3288
    // 説明:96f0
    // 0x96f0 (Windows-31J)
    // 0x5f79 (UTF-16BE)
    if (argCheck == '役') {
        return true;
    }
    // No.3289
    // 説明:96f1
    // 0x96f1 (Windows-31J)
    // 0x7d04 (UTF-16BE)
    if (argCheck == '約') {
        return true;
    }
    // No.3290
    // 説明:96f2
    // 0x96f2 (Windows-31J)
    // 0x85ac (UTF-16BE)
    if (argCheck == '薬') {
        return true;
    }
    // No.3291
    // 説明:96f3
    // 0x96f3 (Windows-31J)
    // 0x8a33 (UTF-16BE)
    if (argCheck == '訳') {
        return true;
    }
    // No.3292
    // 説明:96f4
    // 0x96f4 (Windows-31J)
    // 0x8e8d (UTF-16BE)
    if (argCheck == '躍') {
        return true;
    }
    // No.3293
    // 説明:96f5
    // 0x96f5 (Windows-31J)
    // 0x9756 (UTF-16BE)
    if (argCheck == '靖') {
        return true;
    }
    // No.3294
    // 説明:96f6
    // 0x96f6 (Windows-31J)
    // 0x67f3 (UTF-16BE)
    if (argCheck == '柳') {
        return true;
    }
    // No.3295
    // 説明:96f7
    // 0x96f7 (Windows-31J)
    // 0x85ae (UTF-16BE)
    if (argCheck == '薮') {
        return true;
    }
    // No.3296
    // 説明:96f8
    // 0x96f8 (Windows-31J)
    // 0x9453 (UTF-16BE)
    if (argCheck == '鑓') {
        return true;
    }
    // No.3297
    // 説明:96f9
    // 0x96f9 (Windows-31J)
    // 0x6109 (UTF-16BE)
    if (argCheck == '愉') {
        return true;
    }
    // No.3298
    // 説明:96fa
    // 0x96fa (Windows-31J)
    // 0x6108 (UTF-16BE)
    if (argCheck == '愈') {
        return true;
    }
    // No.3299
    // 説明:96fb
    // 0x96fb (Windows-31J)
    // 0x6cb9 (UTF-16BE)
    if (argCheck == '油') {
        return true;
    }
    // No.3300
    // 説明:96fc
    // 0x96fc (Windows-31J)
    // 0x7652 (UTF-16BE)
    if (argCheck == '癒') {
        return true;
    }
    // No.3301
    // 説明:9740
    // 0x9740 (Windows-31J)
    // 0x8aed (UTF-16BE)
    if (argCheck == '諭') {
        return true;
    }
    // No.3302
    // 説明:9741
    // 0x9741 (Windows-31J)
    // 0x8f38 (UTF-16BE)
    if (argCheck == '輸') {
        return true;
    }
    // No.3303
    // 説明:9742
    // 0x9742 (Windows-31J)
    // 0x552f (UTF-16BE)
    if (argCheck == '唯') {
        return true;
    }
    // No.3304
    // 説明:9743
    // 0x9743 (Windows-31J)
    // 0x4f51 (UTF-16BE)
    if (argCheck == '佑') {
        return true;
    }
    // No.3305
    // 説明:9744
    // 0x9744 (Windows-31J)
    // 0x512a (UTF-16BE)
    if (argCheck == '優') {
        return true;
    }
    // No.3306
    // 説明:9745
    // 0x9745 (Windows-31J)
    // 0x52c7 (UTF-16BE)
    if (argCheck == '勇') {
        return true;
    }
    // No.3307
    // 説明:9746
    // 0x9746 (Windows-31J)
    // 0x53cb (UTF-16BE)
    if (argCheck == '友') {
        return true;
    }
    // No.3308
    // 説明:9747
    // 0x9747 (Windows-31J)
    // 0x5ba5 (UTF-16BE)
    if (argCheck == '宥') {
        return true;
    }
    // No.3309
    // 説明:9748
    // 0x9748 (Windows-31J)
    // 0x5e7d (UTF-16BE)
    if (argCheck == '幽') {
        return true;
    }
    // No.3310
    // 説明:9749
    // 0x9749 (Windows-31J)
    // 0x60a0 (UTF-16BE)
    if (argCheck == '悠') {
        return true;
    }
    // No.3311
    // 説明:974a
    // 0x974a (Windows-31J)
    // 0x6182 (UTF-16BE)
    if (argCheck == '憂') {
        return true;
    }
    // No.3312
    // 説明:974b
    // 0x974b (Windows-31J)
    // 0x63d6 (UTF-16BE)
    if (argCheck == '揖') {
        return true;
    }
    // No.3313
    // 説明:974c
    // 0x974c (Windows-31J)
    // 0x6709 (UTF-16BE)
    if (argCheck == '有') {
        return true;
    }
    // No.3314
    // 説明:974d
    // 0x974d (Windows-31J)
    // 0x67da (UTF-16BE)
    if (argCheck == '柚') {
        return true;
    }
    // No.3315
    // 説明:974e
    // 0x974e (Windows-31J)
    // 0x6e67 (UTF-16BE)
    if (argCheck == '湧') {
        return true;
    }
    // No.3316
    // 説明:974f
    // 0x974f (Windows-31J)
    // 0x6d8c (UTF-16BE)
    if (argCheck == '涌') {
        return true;
    }
    // No.3317
    // 説明:9750
    // 0x9750 (Windows-31J)
    // 0x7336 (UTF-16BE)
    if (argCheck == '猶') {
        return true;
    }
    // No.3318
    // 説明:9751
    // 0x9751 (Windows-31J)
    // 0x7337 (UTF-16BE)
    if (argCheck == '猷') {
        return true;
    }
    // No.3319
    // 説明:9752
    // 0x9752 (Windows-31J)
    // 0x7531 (UTF-16BE)
    if (argCheck == '由') {
        return true;
    }
    // No.3320
    // 説明:9753
    // 0x9753 (Windows-31J)
    // 0x7950 (UTF-16BE)
    if (argCheck == '祐') {
        return true;
    }
    // No.3321
    // 説明:9754
    // 0x9754 (Windows-31J)
    // 0x88d5 (UTF-16BE)
    if (argCheck == '裕') {
        return true;
    }
    // No.3322
    // 説明:9755
    // 0x9755 (Windows-31J)
    // 0x8a98 (UTF-16BE)
    if (argCheck == '誘') {
        return true;
    }
    // No.3323
    // 説明:9756
    // 0x9756 (Windows-31J)
    // 0x904a (UTF-16BE)
    if (argCheck == '遊') {
        return true;
    }
    // No.3324
    // 説明:9757
    // 0x9757 (Windows-31J)
    // 0x9091 (UTF-16BE)
    if (argCheck == '邑') {
        return true;
    }
    // No.3325
    // 説明:9758
    // 0x9758 (Windows-31J)
    // 0x90f5 (UTF-16BE)
    if (argCheck == '郵') {
        return true;
    }
    // No.3326
    // 説明:9759
    // 0x9759 (Windows-31J)
    // 0x96c4 (UTF-16BE)
    if (argCheck == '雄') {
        return true;
    }
    // No.3327
    // 説明:975a
    // 0x975a (Windows-31J)
    // 0x878d (UTF-16BE)
    if (argCheck == '融') {
        return true;
    }
    // No.3328
    // 説明:975b
    // 0x975b (Windows-31J)
    // 0x5915 (UTF-16BE)
    if (argCheck == '夕') {
        return true;
    }
    // No.3329
    // 説明:975c
    // 0x975c (Windows-31J)
    // 0x4e88 (UTF-16BE)
    if (argCheck == '予') {
        return true;
    }
    // No.3330
    // 説明:975d
    // 0x975d (Windows-31J)
    // 0x4f59 (UTF-16BE)
    if (argCheck == '余') {
        return true;
    }
    // No.3331
    // 説明:975e
    // 0x975e (Windows-31J)
    // 0x4e0e (UTF-16BE)
    if (argCheck == '与') {
        return true;
    }
    // No.3332
    // 説明:975f
    // 0x975f (Windows-31J)
    // 0x8a89 (UTF-16BE)
    if (argCheck == '誉') {
        return true;
    }
    // No.3333
    // 説明:9760
    // 0x9760 (Windows-31J)
    // 0x8f3f (UTF-16BE)
    if (argCheck == '輿') {
        return true;
    }
    // No.3334
    // 説明:9761
    // 0x9761 (Windows-31J)
    // 0x9810 (UTF-16BE)
    if (argCheck == '預') {
        return true;
    }
    // No.3335
    // 説明:9762
    // 0x9762 (Windows-31J)
    // 0x50ad (UTF-16BE)
    if (argCheck == '傭') {
        return true;
    }
    // No.3336
    // 説明:9763
    // 0x9763 (Windows-31J)
    // 0x5e7c (UTF-16BE)
    if (argCheck == '幼') {
        return true;
    }
    // No.3337
    // 説明:9764
    // 0x9764 (Windows-31J)
    // 0x5996 (UTF-16BE)
    if (argCheck == '妖') {
        return true;
    }
    // No.3338
    // 説明:9765
    // 0x9765 (Windows-31J)
    // 0x5bb9 (UTF-16BE)
    if (argCheck == '容') {
        return true;
    }
    // No.3339
    // 説明:9766
    // 0x9766 (Windows-31J)
    // 0x5eb8 (UTF-16BE)
    if (argCheck == '庸') {
        return true;
    }
    // No.3340
    // 説明:9767
    // 0x9767 (Windows-31J)
    // 0x63da (UTF-16BE)
    if (argCheck == '揚') {
        return true;
    }
    // No.3341
    // 説明:9768
    // 0x9768 (Windows-31J)
    // 0x63fa (UTF-16BE)
    if (argCheck == '揺') {
        return true;
    }
    // No.3342
    // 説明:9769
    // 0x9769 (Windows-31J)
    // 0x64c1 (UTF-16BE)
    if (argCheck == '擁') {
        return true;
    }
    // No.3343
    // 説明:976a
    // 0x976a (Windows-31J)
    // 0x66dc (UTF-16BE)
    if (argCheck == '曜') {
        return true;
    }
    // No.3344
    // 説明:976b
    // 0x976b (Windows-31J)
    // 0x694a (UTF-16BE)
    if (argCheck == '楊') {
        return true;
    }
    // No.3345
    // 説明:976c
    // 0x976c (Windows-31J)
    // 0x69d8 (UTF-16BE)
    if (argCheck == '様') {
        return true;
    }
    // No.3346
    // 説明:976d
    // 0x976d (Windows-31J)
    // 0x6d0b (UTF-16BE)
    if (argCheck == '洋') {
        return true;
    }
    // No.3347
    // 説明:976e
    // 0x976e (Windows-31J)
    // 0x6eb6 (UTF-16BE)
    if (argCheck == '溶') {
        return true;
    }
    // No.3348
    // 説明:976f
    // 0x976f (Windows-31J)
    // 0x7194 (UTF-16BE)
    if (argCheck == '熔') {
        return true;
    }
    // No.3349
    // 説明:9770
    // 0x9770 (Windows-31J)
    // 0x7528 (UTF-16BE)
    if (argCheck == '用') {
        return true;
    }
    // No.3350
    // 説明:9771
    // 0x9771 (Windows-31J)
    // 0x7aaf (UTF-16BE)
    if (argCheck == '窯') {
        return true;
    }
    // No.3351
    // 説明:9772
    // 0x9772 (Windows-31J)
    // 0x7f8a (UTF-16BE)
    if (argCheck == '羊') {
        return true;
    }
    // No.3352
    // 説明:9773
    // 0x9773 (Windows-31J)
    // 0x8000 (UTF-16BE)
    if (argCheck == '耀') {
        return true;
    }
    // No.3353
    // 説明:9774
    // 0x9774 (Windows-31J)
    // 0x8449 (UTF-16BE)
    if (argCheck == '葉') {
        return true;
    }
    // No.3354
    // 説明:9775
    // 0x9775 (Windows-31J)
    // 0x84c9 (UTF-16BE)
    if (argCheck == '蓉') {
        return true;
    }
    // No.3355
    // 説明:9776
    // 0x9776 (Windows-31J)
    // 0x8981 (UTF-16BE)
    if (argCheck == '要') {
        return true;
    }
    // No.3356
    // 説明:9777
    // 0x9777 (Windows-31J)
    // 0x8b21 (UTF-16BE)
    if (argCheck == '謡') {
        return true;
    }
    // No.3357
    // 説明:9778
    // 0x9778 (Windows-31J)
    // 0x8e0a (UTF-16BE)
    if (argCheck == '踊') {
        return true;
    }
    // No.3358
    // 説明:9779
    // 0x9779 (Windows-31J)
    // 0x9065 (UTF-16BE)
    if (argCheck == '遥') {
        return true;
    }
    // No.3359
    // 説明:977a
    // 0x977a (Windows-31J)
    // 0x967d (UTF-16BE)
    if (argCheck == '陽') {
        return true;
    }
    // No.3360
    // 説明:977b
    // 0x977b (Windows-31J)
    // 0x990a (UTF-16BE)
    if (argCheck == '養') {
        return true;
    }
    // No.3361
    // 説明:977c
    // 0x977c (Windows-31J)
    // 0x617e (UTF-16BE)
    if (argCheck == '慾') {
        return true;
    }
    // No.3362
    // 説明:977d
    // 0x977d (Windows-31J)
    // 0x6291 (UTF-16BE)
    if (argCheck == '抑') {
        return true;
    }
    // No.3363
    // 説明:977e
    // 0x977e (Windows-31J)
    // 0x6b32 (UTF-16BE)
    if (argCheck == '欲') {
        return true;
    }
    // No.3364
    // 説明:9780
    // 0x9780 (Windows-31J)
    // 0x6c83 (UTF-16BE)
    if (argCheck == '沃') {
        return true;
    }
    // No.3365
    // 説明:9781
    // 0x9781 (Windows-31J)
    // 0x6d74 (UTF-16BE)
    if (argCheck == '浴') {
        return true;
    }
    // No.3366
    // 説明:9782
    // 0x9782 (Windows-31J)
    // 0x7fcc (UTF-16BE)
    if (argCheck == '翌') {
        return true;
    }
    // No.3367
    // 説明:9783
    // 0x9783 (Windows-31J)
    // 0x7ffc (UTF-16BE)
    if (argCheck == '翼') {
        return true;
    }
    // No.3368
    // 説明:9784
    // 0x9784 (Windows-31J)
    // 0x6dc0 (UTF-16BE)
    if (argCheck == '淀') {
        return true;
    }
    // No.3369
    // 説明:9785
    // 0x9785 (Windows-31J)
    // 0x7f85 (UTF-16BE)
    if (argCheck == '羅') {
        return true;
    }
    // No.3370
    // 説明:9786
    // 0x9786 (Windows-31J)
    // 0x87ba (UTF-16BE)
    if (argCheck == '螺') {
        return true;
    }
    // No.3371
    // 説明:9787
    // 0x9787 (Windows-31J)
    // 0x88f8 (UTF-16BE)
    if (argCheck == '裸') {
        return true;
    }
    // No.3372
    // 説明:9788
    // 0x9788 (Windows-31J)
    // 0x6765 (UTF-16BE)
    if (argCheck == '来') {
        return true;
    }
    // No.3373
    // 説明:9789
    // 0x9789 (Windows-31J)
    // 0x83b1 (UTF-16BE)
    if (argCheck == '莱') {
        return true;
    }
    // No.3374
    // 説明:978a
    // 0x978a (Windows-31J)
    // 0x983c (UTF-16BE)
    if (argCheck == '頼') {
        return true;
    }
    // No.3375
    // 説明:978b
    // 0x978b (Windows-31J)
    // 0x96f7 (UTF-16BE)
    if (argCheck == '雷') {
        return true;
    }
    // No.3376
    // 説明:978c
    // 0x978c (Windows-31J)
    // 0x6d1b (UTF-16BE)
    if (argCheck == '洛') {
        return true;
    }
    // No.3377
    // 説明:978d
    // 0x978d (Windows-31J)
    // 0x7d61 (UTF-16BE)
    if (argCheck == '絡') {
        return true;
    }
    // No.3378
    // 説明:978e
    // 0x978e (Windows-31J)
    // 0x843d (UTF-16BE)
    if (argCheck == '落') {
        return true;
    }
    // No.3379
    // 説明:978f
    // 0x978f (Windows-31J)
    // 0x916a (UTF-16BE)
    if (argCheck == '酪') {
        return true;
    }
    // No.3380
    // 説明:9790
    // 0x9790 (Windows-31J)
    // 0x4e71 (UTF-16BE)
    if (argCheck == '乱') {
        return true;
    }
    // No.3381
    // 説明:9791
    // 0x9791 (Windows-31J)
    // 0x5375 (UTF-16BE)
    if (argCheck == '卵') {
        return true;
    }
    // No.3382
    // 説明:9792
    // 0x9792 (Windows-31J)
    // 0x5d50 (UTF-16BE)
    if (argCheck == '嵐') {
        return true;
    }
    // No.3383
    // 説明:9793
    // 0x9793 (Windows-31J)
    // 0x6b04 (UTF-16BE)
    if (argCheck == '欄') {
        return true;
    }
    // No.3384
    // 説明:9794
    // 0x9794 (Windows-31J)
    // 0x6feb (UTF-16BE)
    if (argCheck == '濫') {
        return true;
    }
    // No.3385
    // 説明:9795
    // 0x9795 (Windows-31J)
    // 0x85cd (UTF-16BE)
    if (argCheck == '藍') {
        return true;
    }
    // No.3386
    // 説明:9796
    // 0x9796 (Windows-31J)
    // 0x862d (UTF-16BE)
    if (argCheck == '蘭') {
        return true;
    }
    // No.3387
    // 説明:9797
    // 0x9797 (Windows-31J)
    // 0x89a7 (UTF-16BE)
    if (argCheck == '覧') {
        return true;
    }
    // No.3388
    // 説明:9798
    // 0x9798 (Windows-31J)
    // 0x5229 (UTF-16BE)
    if (argCheck == '利') {
        return true;
    }
    // No.3389
    // 説明:9799
    // 0x9799 (Windows-31J)
    // 0x540f (UTF-16BE)
    if (argCheck == '吏') {
        return true;
    }
    // No.3390
    // 説明:979a
    // 0x979a (Windows-31J)
    // 0x5c65 (UTF-16BE)
    if (argCheck == '履') {
        return true;
    }
    // No.3391
    // 説明:979b
    // 0x979b (Windows-31J)
    // 0x674e (UTF-16BE)
    if (argCheck == '李') {
        return true;
    }
    // No.3392
    // 説明:979c
    // 0x979c (Windows-31J)
    // 0x68a8 (UTF-16BE)
    if (argCheck == '梨') {
        return true;
    }
    // No.3393
    // 説明:979d
    // 0x979d (Windows-31J)
    // 0x7406 (UTF-16BE)
    if (argCheck == '理') {
        return true;
    }
    // No.3394
    // 説明:979e
    // 0x979e (Windows-31J)
    // 0x7483 (UTF-16BE)
    if (argCheck == '璃') {
        return true;
    }
    // No.3395
    // 説明:979f
    // 0x979f (Windows-31J)
    // 0x75e2 (UTF-16BE)
    if (argCheck == '痢') {
        return true;
    }
    // No.3396
    // 説明:97a0
    // 0x97a0 (Windows-31J)
    // 0x88cf (UTF-16BE)
    if (argCheck == '裏') {
        return true;
    }
    // No.3397
    // 説明:97a1
    // 0x97a1 (Windows-31J)
    // 0x88e1 (UTF-16BE)
    if (argCheck == '裡') {
        return true;
    }
    // No.3398
    // 説明:97a2
    // 0x97a2 (Windows-31J)
    // 0x91cc (UTF-16BE)
    if (argCheck == '里') {
        return true;
    }
    // No.3399
    // 説明:97a3
    // 0x97a3 (Windows-31J)
    // 0x96e2 (UTF-16BE)
    if (argCheck == '離') {
        return true;
    }
    // No.3400
    // 説明:97a4
    // 0x97a4 (Windows-31J)
    // 0x9678 (UTF-16BE)
    if (argCheck == '陸') {
        return true;
    }
    // No.3401
    // 説明:97a5
    // 0x97a5 (Windows-31J)
    // 0x5f8b (UTF-16BE)
    if (argCheck == '律') {
        return true;
    }
    // No.3402
    // 説明:97a6
    // 0x97a6 (Windows-31J)
    // 0x7387 (UTF-16BE)
    if (argCheck == '率') {
        return true;
    }
    // No.3403
    // 説明:97a7
    // 0x97a7 (Windows-31J)
    // 0x7acb (UTF-16BE)
    if (argCheck == '立') {
        return true;
    }
    // No.3404
    // 説明:97a8
    // 0x97a8 (Windows-31J)
    // 0x844e (UTF-16BE)
    if (argCheck == '葎') {
        return true;
    }
    // No.3405
    // 説明:97a9
    // 0x97a9 (Windows-31J)
    // 0x63a0 (UTF-16BE)
    if (argCheck == '掠') {
        return true;
    }
    // No.3406
    // 説明:97aa
    // 0x97aa (Windows-31J)
    // 0x7565 (UTF-16BE)
    if (argCheck == '略') {
        return true;
    }
    // No.3407
    // 説明:97ab
    // 0x97ab (Windows-31J)
    // 0x5289 (UTF-16BE)
    if (argCheck == '劉') {
        return true;
    }
    // No.3408
    // 説明:97ac
    // 0x97ac (Windows-31J)
    // 0x6d41 (UTF-16BE)
    if (argCheck == '流') {
        return true;
    }
    // No.3409
    // 説明:97ad
    // 0x97ad (Windows-31J)
    // 0x6e9c (UTF-16BE)
    if (argCheck == '溜') {
        return true;
    }
    // No.3410
    // 説明:97ae
    // 0x97ae (Windows-31J)
    // 0x7409 (UTF-16BE)
    if (argCheck == '琉') {
        return true;
    }
    // No.3411
    // 説明:97af
    // 0x97af (Windows-31J)
    // 0x7559 (UTF-16BE)
    if (argCheck == '留') {
        return true;
    }
    // No.3412
    // 説明:97b0
    // 0x97b0 (Windows-31J)
    // 0x786b (UTF-16BE)
    if (argCheck == '硫') {
        return true;
    }
    // No.3413
    // 説明:97b1
    // 0x97b1 (Windows-31J)
    // 0x7c92 (UTF-16BE)
    if (argCheck == '粒') {
        return true;
    }
    // No.3414
    // 説明:97b2
    // 0x97b2 (Windows-31J)
    // 0x9686 (UTF-16BE)
    if (argCheck == '隆') {
        return true;
    }
    // No.3415
    // 説明:97b3
    // 0x97b3 (Windows-31J)
    // 0x7adc (UTF-16BE)
    if (argCheck == '竜') {
        return true;
    }
    // No.3416
    // 説明:97b4
    // 0x97b4 (Windows-31J)
    // 0x9f8d (UTF-16BE)
    if (argCheck == '龍') {
        return true;
    }
    // No.3417
    // 説明:97b5
    // 0x97b5 (Windows-31J)
    // 0x4fb6 (UTF-16BE)
    if (argCheck == '侶') {
        return true;
    }
    // No.3418
    // 説明:97b6
    // 0x97b6 (Windows-31J)
    // 0x616e (UTF-16BE)
    if (argCheck == '慮') {
        return true;
    }
    // No.3419
    // 説明:97b7
    // 0x97b7 (Windows-31J)
    // 0x65c5 (UTF-16BE)
    if (argCheck == '旅') {
        return true;
    }
    // No.3420
    // 説明:97b8
    // 0x97b8 (Windows-31J)
    // 0x865c (UTF-16BE)
    if (argCheck == '虜') {
        return true;
    }
    // No.3421
    // 説明:97b9
    // 0x97b9 (Windows-31J)
    // 0x4e86 (UTF-16BE)
    if (argCheck == '了') {
        return true;
    }
    // No.3422
    // 説明:97ba
    // 0x97ba (Windows-31J)
    // 0x4eae (UTF-16BE)
    if (argCheck == '亮') {
        return true;
    }
    // No.3423
    // 説明:97bb
    // 0x97bb (Windows-31J)
    // 0x50da (UTF-16BE)
    if (argCheck == '僚') {
        return true;
    }
    // No.3424
    // 説明:97bc
    // 0x97bc (Windows-31J)
    // 0x4e21 (UTF-16BE)
    if (argCheck == '両') {
        return true;
    }
    // No.3425
    // 説明:97bd
    // 0x97bd (Windows-31J)
    // 0x51cc (UTF-16BE)
    if (argCheck == '凌') {
        return true;
    }
    // No.3426
    // 説明:97be
    // 0x97be (Windows-31J)
    // 0x5bee (UTF-16BE)
    if (argCheck == '寮') {
        return true;
    }
    // No.3427
    // 説明:97bf
    // 0x97bf (Windows-31J)
    // 0x6599 (UTF-16BE)
    if (argCheck == '料') {
        return true;
    }
    // No.3428
    // 説明:97c0
    // 0x97c0 (Windows-31J)
    // 0x6881 (UTF-16BE)
    if (argCheck == '梁') {
        return true;
    }
    // No.3429
    // 説明:97c1
    // 0x97c1 (Windows-31J)
    // 0x6dbc (UTF-16BE)
    if (argCheck == '涼') {
        return true;
    }
    // No.3430
    // 説明:97c2
    // 0x97c2 (Windows-31J)
    // 0x731f (UTF-16BE)
    if (argCheck == '猟') {
        return true;
    }
    // No.3431
    // 説明:97c3
    // 0x97c3 (Windows-31J)
    // 0x7642 (UTF-16BE)
    if (argCheck == '療') {
        return true;
    }
    // No.3432
    // 説明:97c4
    // 0x97c4 (Windows-31J)
    // 0x77ad (UTF-16BE)
    if (argCheck == '瞭') {
        return true;
    }
    // No.3433
    // 説明:97c5
    // 0x97c5 (Windows-31J)
    // 0x7a1c (UTF-16BE)
    if (argCheck == '稜') {
        return true;
    }
    // No.3434
    // 説明:97c6
    // 0x97c6 (Windows-31J)
    // 0x7ce7 (UTF-16BE)
    if (argCheck == '糧') {
        return true;
    }
    // No.3435
    // 説明:97c7
    // 0x97c7 (Windows-31J)
    // 0x826f (UTF-16BE)
    if (argCheck == '良') {
        return true;
    }
    // No.3436
    // 説明:97c8
    // 0x97c8 (Windows-31J)
    // 0x8ad2 (UTF-16BE)
    if (argCheck == '諒') {
        return true;
    }
    // No.3437
    // 説明:97c9
    // 0x97c9 (Windows-31J)
    // 0x907c (UTF-16BE)
    if (argCheck == '遼') {
        return true;
    }
    // No.3438
    // 説明:97ca
    // 0x97ca (Windows-31J)
    // 0x91cf (UTF-16BE)
    if (argCheck == '量') {
        return true;
    }
    // No.3439
    // 説明:97cb
    // 0x97cb (Windows-31J)
    // 0x9675 (UTF-16BE)
    if (argCheck == '陵') {
        return true;
    }
    // No.3440
    // 説明:97cc
    // 0x97cc (Windows-31J)
    // 0x9818 (UTF-16BE)
    if (argCheck == '領') {
        return true;
    }
    // No.3441
    // 説明:97cd
    // 0x97cd (Windows-31J)
    // 0x529b (UTF-16BE)
    if (argCheck == '力') {
        return true;
    }
    // No.3442
    // 説明:97ce
    // 0x97ce (Windows-31J)
    // 0x7dd1 (UTF-16BE)
    if (argCheck == '緑') {
        return true;
    }
    // No.3443
    // 説明:97cf
    // 0x97cf (Windows-31J)
    // 0x502b (UTF-16BE)
    if (argCheck == '倫') {
        return true;
    }
    // No.3444
    // 説明:97d0
    // 0x97d0 (Windows-31J)
    // 0x5398 (UTF-16BE)
    if (argCheck == '厘') {
        return true;
    }
    // No.3445
    // 説明:97d1
    // 0x97d1 (Windows-31J)
    // 0x6797 (UTF-16BE)
    if (argCheck == '林') {
        return true;
    }
    // No.3446
    // 説明:97d2
    // 0x97d2 (Windows-31J)
    // 0x6dcb (UTF-16BE)
    if (argCheck == '淋') {
        return true;
    }
    // No.3447
    // 説明:97d3
    // 0x97d3 (Windows-31J)
    // 0x71d0 (UTF-16BE)
    if (argCheck == '燐') {
        return true;
    }
    // No.3448
    // 説明:97d4
    // 0x97d4 (Windows-31J)
    // 0x7433 (UTF-16BE)
    if (argCheck == '琳') {
        return true;
    }
    // No.3449
    // 説明:97d5
    // 0x97d5 (Windows-31J)
    // 0x81e8 (UTF-16BE)
    if (argCheck == '臨') {
        return true;
    }
    // No.3450
    // 説明:97d6
    // 0x97d6 (Windows-31J)
    // 0x8f2a (UTF-16BE)
    if (argCheck == '輪') {
        return true;
    }
    // No.3451
    // 説明:97d7
    // 0x97d7 (Windows-31J)
    // 0x96a3 (UTF-16BE)
    if (argCheck == '隣') {
        return true;
    }
    // No.3452
    // 説明:97d8
    // 0x97d8 (Windows-31J)
    // 0x9c57 (UTF-16BE)
    if (argCheck == '鱗') {
        return true;
    }
    // No.3453
    // 説明:97d9
    // 0x97d9 (Windows-31J)
    // 0x9e9f (UTF-16BE)
    if (argCheck == '麟') {
        return true;
    }
    // No.3454
    // 説明:97da
    // 0x97da (Windows-31J)
    // 0x7460 (UTF-16BE)
    if (argCheck == '瑠') {
        return true;
    }
    // No.3455
    // 説明:97db
    // 0x97db (Windows-31J)
    // 0x5841 (UTF-16BE)
    if (argCheck == '塁') {
        return true;
    }
    // No.3456
    // 説明:97dc
    // 0x97dc (Windows-31J)
    // 0x6d99 (UTF-16BE)
    if (argCheck == '涙') {
        return true;
    }
    // No.3457
    // 説明:97dd
    // 0x97dd (Windows-31J)
    // 0x7d2f (UTF-16BE)
    if (argCheck == '累') {
        return true;
    }
    // No.3458
    // 説明:97de
    // 0x97de (Windows-31J)
    // 0x985e (UTF-16BE)
    if (argCheck == '類') {
        return true;
    }
    // No.3459
    // 説明:97df
    // 0x97df (Windows-31J)
    // 0x4ee4 (UTF-16BE)
    if (argCheck == '令') {
        return true;
    }
    // No.3460
    // 説明:97e0
    // 0x97e0 (Windows-31J)
    // 0x4f36 (UTF-16BE)
    if (argCheck == '伶') {
        return true;
    }
    // No.3461
    // 説明:97e1
    // 0x97e1 (Windows-31J)
    // 0x4f8b (UTF-16BE)
    if (argCheck == '例') {
        return true;
    }
    // No.3462
    // 説明:97e2
    // 0x97e2 (Windows-31J)
    // 0x51b7 (UTF-16BE)
    if (argCheck == '冷') {
        return true;
    }
    // No.3463
    // 説明:97e3
    // 0x97e3 (Windows-31J)
    // 0x52b1 (UTF-16BE)
    if (argCheck == '励') {
        return true;
    }
    // No.3464
    // 説明:97e4
    // 0x97e4 (Windows-31J)
    // 0x5dba (UTF-16BE)
    if (argCheck == '嶺') {
        return true;
    }
    // No.3465
    // 説明:97e5
    // 0x97e5 (Windows-31J)
    // 0x601c (UTF-16BE)
    if (argCheck == '怜') {
        return true;
    }
    // No.3466
    // 説明:97e6
    // 0x97e6 (Windows-31J)
    // 0x73b2 (UTF-16BE)
    if (argCheck == '玲') {
        return true;
    }
    // No.3467
    // 説明:97e7
    // 0x97e7 (Windows-31J)
    // 0x793c (UTF-16BE)
    if (argCheck == '礼') {
        return true;
    }
    // No.3468
    // 説明:97e8
    // 0x97e8 (Windows-31J)
    // 0x82d3 (UTF-16BE)
    if (argCheck == '苓') {
        return true;
    }
    // No.3469
    // 説明:97e9
    // 0x97e9 (Windows-31J)
    // 0x9234 (UTF-16BE)
    if (argCheck == '鈴') {
        return true;
    }
    // No.3470
    // 説明:97ea
    // 0x97ea (Windows-31J)
    // 0x96b7 (UTF-16BE)
    if (argCheck == '隷') {
        return true;
    }
    // No.3471
    // 説明:97eb
    // 0x97eb (Windows-31J)
    // 0x96f6 (UTF-16BE)
    if (argCheck == '零') {
        return true;
    }
    // No.3472
    // 説明:97ec
    // 0x97ec (Windows-31J)
    // 0x970a (UTF-16BE)
    if (argCheck == '霊') {
        return true;
    }
    // No.3473
    // 説明:97ed
    // 0x97ed (Windows-31J)
    // 0x9e97 (UTF-16BE)
    if (argCheck == '麗') {
        return true;
    }
    // No.3474
    // 説明:97ee
    // 0x97ee (Windows-31J)
    // 0x9f62 (UTF-16BE)
    if (argCheck == '齢') {
        return true;
    }
    // No.3475
    // 説明:97ef
    // 0x97ef (Windows-31J)
    // 0x66a6 (UTF-16BE)
    if (argCheck == '暦') {
        return true;
    }
    // No.3476
    // 説明:97f0
    // 0x97f0 (Windows-31J)
    // 0x6b74 (UTF-16BE)
    if (argCheck == '歴') {
        return true;
    }
    // No.3477
    // 説明:97f1
    // 0x97f1 (Windows-31J)
    // 0x5217 (UTF-16BE)
    if (argCheck == '列') {
        return true;
    }
    // No.3478
    // 説明:97f2
    // 0x97f2 (Windows-31J)
    // 0x52a3 (UTF-16BE)
    if (argCheck == '劣') {
        return true;
    }
    // No.3479
    // 説明:97f3
    // 0x97f3 (Windows-31J)
    // 0x70c8 (UTF-16BE)
    if (argCheck == '烈') {
        return true;
    }
    // No.3480
    // 説明:97f4
    // 0x97f4 (Windows-31J)
    // 0x88c2 (UTF-16BE)
    if (argCheck == '裂') {
        return true;
    }
    // No.3481
    // 説明:97f5
    // 0x97f5 (Windows-31J)
    // 0x5ec9 (UTF-16BE)
    if (argCheck == '廉') {
        return true;
    }
    // No.3482
    // 説明:97f6
    // 0x97f6 (Windows-31J)
    // 0x604b (UTF-16BE)
    if (argCheck == '恋') {
        return true;
    }
    // No.3483
    // 説明:97f7
    // 0x97f7 (Windows-31J)
    // 0x6190 (UTF-16BE)
    if (argCheck == '憐') {
        return true;
    }
    // No.3484
    // 説明:97f8
    // 0x97f8 (Windows-31J)
    // 0x6f23 (UTF-16BE)
    if (argCheck == '漣') {
        return true;
    }
    // No.3485
    // 説明:97f9
    // 0x97f9 (Windows-31J)
    // 0x7149 (UTF-16BE)
    if (argCheck == '煉') {
        return true;
    }
    // No.3486
    // 説明:97fa
    // 0x97fa (Windows-31J)
    // 0x7c3e (UTF-16BE)
    if (argCheck == '簾') {
        return true;
    }
    // No.3487
    // 説明:97fb
    // 0x97fb (Windows-31J)
    // 0x7df4 (UTF-16BE)
    if (argCheck == '練') {
        return true;
    }
    // No.3488
    // 説明:97fc
    // 0x97fc (Windows-31J)
    // 0x806f (UTF-16BE)
    if (argCheck == '聯') {
        return true;
    }
    // No.3489
    // 説明:9840
    // 0x9840 (Windows-31J)
    // 0x84ee (UTF-16BE)
    if (argCheck == '蓮') {
        return true;
    }
    // No.3490
    // 説明:9841
    // 0x9841 (Windows-31J)
    // 0x9023 (UTF-16BE)
    if (argCheck == '連') {
        return true;
    }
    // No.3491
    // 説明:9842
    // 0x9842 (Windows-31J)
    // 0x932c (UTF-16BE)
    if (argCheck == '錬') {
        return true;
    }
    // No.3492
    // 説明:9843
    // 0x9843 (Windows-31J)
    // 0x5442 (UTF-16BE)
    if (argCheck == '呂') {
        return true;
    }
    // No.3493
    // 説明:9844
    // 0x9844 (Windows-31J)
    // 0x9b6f (UTF-16BE)
    if (argCheck == '魯') {
        return true;
    }
    // No.3494
    // 説明:9845
    // 0x9845 (Windows-31J)
    // 0x6ad3 (UTF-16BE)
    if (argCheck == '櫓') {
        return true;
    }
    // No.3495
    // 説明:9846
    // 0x9846 (Windows-31J)
    // 0x7089 (UTF-16BE)
    if (argCheck == '炉') {
        return true;
    }
    // No.3496
    // 説明:9847
    // 0x9847 (Windows-31J)
    // 0x8cc2 (UTF-16BE)
    if (argCheck == '賂') {
        return true;
    }
    // No.3497
    // 説明:9848
    // 0x9848 (Windows-31J)
    // 0x8def (UTF-16BE)
    if (argCheck == '路') {
        return true;
    }
    // No.3498
    // 説明:9849
    // 0x9849 (Windows-31J)
    // 0x9732 (UTF-16BE)
    if (argCheck == '露') {
        return true;
    }
    // No.3499
    // 説明:984a
    // 0x984a (Windows-31J)
    // 0x52b4 (UTF-16BE)
    if (argCheck == '労') {
        return true;
    }
    // No.3500
    // 説明:984b
    // 0x984b (Windows-31J)
    // 0x5a41 (UTF-16BE)
    if (argCheck == '婁') {
        return true;
    }
    // No.3501
    // 説明:984c
    // 0x984c (Windows-31J)
    // 0x5eca (UTF-16BE)
    if (argCheck == '廊') {
        return true;
    }
    // No.3502
    // 説明:984d
    // 0x984d (Windows-31J)
    // 0x5f04 (UTF-16BE)
    if (argCheck == '弄') {
        return true;
    }
    // No.3503
    // 説明:984e
    // 0x984e (Windows-31J)
    // 0x6717 (UTF-16BE)
    if (argCheck == '朗') {
        return true;
    }
    // No.3504
    // 説明:984f
    // 0x984f (Windows-31J)
    // 0x697c (UTF-16BE)
    if (argCheck == '楼') {
        return true;
    }
    // No.3505
    // 説明:9850
    // 0x9850 (Windows-31J)
    // 0x6994 (UTF-16BE)
    if (argCheck == '榔') {
        return true;
    }
    // No.3506
    // 説明:9851
    // 0x9851 (Windows-31J)
    // 0x6d6a (UTF-16BE)
    if (argCheck == '浪') {
        return true;
    }
    // No.3507
    // 説明:9852
    // 0x9852 (Windows-31J)
    // 0x6f0f (UTF-16BE)
    if (argCheck == '漏') {
        return true;
    }
    // No.3508
    // 説明:9853
    // 0x9853 (Windows-31J)
    // 0x7262 (UTF-16BE)
    if (argCheck == '牢') {
        return true;
    }
    // No.3509
    // 説明:9854
    // 0x9854 (Windows-31J)
    // 0x72fc (UTF-16BE)
    if (argCheck == '狼') {
        return true;
    }
    // No.3510
    // 説明:9855
    // 0x9855 (Windows-31J)
    // 0x7bed (UTF-16BE)
    if (argCheck == '篭') {
        return true;
    }
    // No.3511
    // 説明:9856
    // 0x9856 (Windows-31J)
    // 0x8001 (UTF-16BE)
    if (argCheck == '老') {
        return true;
    }
    // No.3512
    // 説明:9857
    // 0x9857 (Windows-31J)
    // 0x807e (UTF-16BE)
    if (argCheck == '聾') {
        return true;
    }
    // No.3513
    // 説明:9858
    // 0x9858 (Windows-31J)
    // 0x874b (UTF-16BE)
    if (argCheck == '蝋') {
        return true;
    }
    // No.3514
    // 説明:9859
    // 0x9859 (Windows-31J)
    // 0x90ce (UTF-16BE)
    if (argCheck == '郎') {
        return true;
    }
    // No.3515
    // 説明:985a
    // 0x985a (Windows-31J)
    // 0x516d (UTF-16BE)
    if (argCheck == '六') {
        return true;
    }
    // No.3516
    // 説明:985b
    // 0x985b (Windows-31J)
    // 0x9e93 (UTF-16BE)
    if (argCheck == '麓') {
        return true;
    }
    // No.3517
    // 説明:985c
    // 0x985c (Windows-31J)
    // 0x7984 (UTF-16BE)
    if (argCheck == '禄') {
        return true;
    }
    // No.3518
    // 説明:985d
    // 0x985d (Windows-31J)
    // 0x808b (UTF-16BE)
    if (argCheck == '肋') {
        return true;
    }
    // No.3519
    // 説明:985e
    // 0x985e (Windows-31J)
    // 0x9332 (UTF-16BE)
    if (argCheck == '録') {
        return true;
    }
    // No.3520
    // 説明:985f
    // 0x985f (Windows-31J)
    // 0x8ad6 (UTF-16BE)
    if (argCheck == '論') {
        return true;
    }
    // No.3521
    // 説明:9860
    // 0x9860 (Windows-31J)
    // 0x502d (UTF-16BE)
    if (argCheck == '倭') {
        return true;
    }
    // No.3522
    // 説明:9861
    // 0x9861 (Windows-31J)
    // 0x548c (UTF-16BE)
    if (argCheck == '和') {
        return true;
    }
    // No.3523
    // 説明:9862
    // 0x9862 (Windows-31J)
    // 0x8a71 (UTF-16BE)
    if (argCheck == '話') {
        return true;
    }
    // No.3524
    // 説明:9863
    // 0x9863 (Windows-31J)
    // 0x6b6a (UTF-16BE)
    if (argCheck == '歪') {
        return true;
    }
    // No.3525
    // 説明:9864
    // 0x9864 (Windows-31J)
    // 0x8cc4 (UTF-16BE)
    if (argCheck == '賄') {
        return true;
    }
    // No.3526
    // 説明:9865
    // 0x9865 (Windows-31J)
    // 0x8107 (UTF-16BE)
    if (argCheck == '脇') {
        return true;
    }
    // No.3527
    // 説明:9866
    // 0x9866 (Windows-31J)
    // 0x60d1 (UTF-16BE)
    if (argCheck == '惑') {
        return true;
    }
    // No.3528
    // 説明:9867
    // 0x9867 (Windows-31J)
    // 0x67a0 (UTF-16BE)
    if (argCheck == '枠') {
        return true;
    }
    // No.3529
    // 説明:9868
    // 0x9868 (Windows-31J)
    // 0x9df2 (UTF-16BE)
    if (argCheck == '鷲') {
        return true;
    }
    // No.3530
    // 説明:9869
    // 0x9869 (Windows-31J)
    // 0x4e99 (UTF-16BE)
    if (argCheck == '亙') {
        return true;
    }
    // No.3531
    // 説明:986a
    // 0x986a (Windows-31J)
    // 0x4e98 (UTF-16BE)
    if (argCheck == '亘') {
        return true;
    }
    // No.3532
    // 説明:986b
    // 0x986b (Windows-31J)
    // 0x9c10 (UTF-16BE)
    if (argCheck == '鰐') {
        return true;
    }
    // No.3533
    // 説明:986c
    // 0x986c (Windows-31J)
    // 0x8a6b (UTF-16BE)
    if (argCheck == '詫') {
        return true;
    }
    // No.3534
    // 説明:986d
    // 0x986d (Windows-31J)
    // 0x85c1 (UTF-16BE)
    if (argCheck == '藁') {
        return true;
    }
    // No.3535
    // 説明:986e
    // 0x986e (Windows-31J)
    // 0x8568 (UTF-16BE)
    if (argCheck == '蕨') {
        return true;
    }
    // No.3536
    // 説明:986f
    // 0x986f (Windows-31J)
    // 0x6900 (UTF-16BE)
    if (argCheck == '椀') {
        return true;
    }
    // No.3537
    // 説明:9870
    // 0x9870 (Windows-31J)
    // 0x6e7e (UTF-16BE)
    if (argCheck == '湾') {
        return true;
    }
    // No.3538
    // 説明:9871
    // 0x9871 (Windows-31J)
    // 0x7897 (UTF-16BE)
    if (argCheck == '碗') {
        return true;
    }
    // No.3539
    // 説明:9872
    // 0x9872 (Windows-31J)
    // 0x8155 (UTF-16BE)
    if (argCheck == '腕') {
        return true;
    }
    // No.3543
    // 説明:989f
    // 0x989f (Windows-31J)
    // 0x5f0c (UTF-16BE)
    if (argCheck == '弌') {
        return true;
    }
    // No.3544
    // 説明:98a0
    // 0x98a0 (Windows-31J)
    // 0x4e10 (UTF-16BE)
    if (argCheck == '丐') {
        return true;
    }
    // No.3545
    // 説明:98a1
    // 0x98a1 (Windows-31J)
    // 0x4e15 (UTF-16BE)
    if (argCheck == '丕') {
        return true;
    }
    // No.3546
    // 説明:98a2
    // 0x98a2 (Windows-31J)
    // 0x4e2a (UTF-16BE)
    if (argCheck == '个') {
        return true;
    }
    // No.3547
    // 説明:98a3
    // 0x98a3 (Windows-31J)
    // 0x4e31 (UTF-16BE)
    if (argCheck == '丱') {
        return true;
    }
    // No.3548
    // 説明:98a4
    // 0x98a4 (Windows-31J)
    // 0x4e36 (UTF-16BE)
    if (argCheck == '丶') {
        return true;
    }
    // No.3549
    // 説明:98a5
    // 0x98a5 (Windows-31J)
    // 0x4e3c (UTF-16BE)
    if (argCheck == '丼') {
        return true;
    }
    // No.3550
    // 説明:98a6
    // 0x98a6 (Windows-31J)
    // 0x4e3f (UTF-16BE)
    if (argCheck == '丿') {
        return true;
    }
    // No.3551
    // 説明:98a7
    // 0x98a7 (Windows-31J)
    // 0x4e42 (UTF-16BE)
    if (argCheck == '乂') {
        return true;
    }
    // No.3552
    // 説明:98a8
    // 0x98a8 (Windows-31J)
    // 0x4e56 (UTF-16BE)
    if (argCheck == '乖') {
        return true;
    }
    // No.3553
    // 説明:98a9
    // 0x98a9 (Windows-31J)
    // 0x4e58 (UTF-16BE)
    if (argCheck == '乘') {
        return true;
    }
    // No.3554
    // 説明:98aa
    // 0x98aa (Windows-31J)
    // 0x4e82 (UTF-16BE)
    if (argCheck == '亂') {
        return true;
    }
    // No.3555
    // 説明:98ab
    // 0x98ab (Windows-31J)
    // 0x4e85 (UTF-16BE)
    if (argCheck == '亅') {
        return true;
    }
    // No.3556
    // 説明:98ac
    // 0x98ac (Windows-31J)
    // 0x8c6b (UTF-16BE)
    if (argCheck == '豫') {
        return true;
    }
    // No.3557
    // 説明:98ad
    // 0x98ad (Windows-31J)
    // 0x4e8a (UTF-16BE)
    if (argCheck == '亊') {
        return true;
    }
    // No.3558
    // 説明:98ae
    // 0x98ae (Windows-31J)
    // 0x8212 (UTF-16BE)
    if (argCheck == '舒') {
        return true;
    }
    // No.3559
    // 説明:98af
    // 0x98af (Windows-31J)
    // 0x5f0d (UTF-16BE)
    if (argCheck == '弍') {
        return true;
    }
    // No.3560
    // 説明:98b0
    // 0x98b0 (Windows-31J)
    // 0x4e8e (UTF-16BE)
    if (argCheck == '于') {
        return true;
    }
    // No.3561
    // 説明:98b1
    // 0x98b1 (Windows-31J)
    // 0x4e9e (UTF-16BE)
    if (argCheck == '亞') {
        return true;
    }
    // No.3562
    // 説明:98b2
    // 0x98b2 (Windows-31J)
    // 0x4e9f (UTF-16BE)
    if (argCheck == '亟') {
        return true;
    }
    // No.3563
    // 説明:98b3
    // 0x98b3 (Windows-31J)
    // 0x4ea0 (UTF-16BE)
    if (argCheck == '亠') {
        return true;
    }
    // No.3564
    // 説明:98b4
    // 0x98b4 (Windows-31J)
    // 0x4ea2 (UTF-16BE)
    if (argCheck == '亢') {
        return true;
    }
    // No.3565
    // 説明:98b5
    // 0x98b5 (Windows-31J)
    // 0x4eb0 (UTF-16BE)
    if (argCheck == '亰') {
        return true;
    }
    // No.3566
    // 説明:98b6
    // 0x98b6 (Windows-31J)
    // 0x4eb3 (UTF-16BE)
    if (argCheck == '亳') {
        return true;
    }
    // No.3567
    // 説明:98b7
    // 0x98b7 (Windows-31J)
    // 0x4eb6 (UTF-16BE)
    if (argCheck == '亶') {
        return true;
    }
    // No.3568
    // 説明:98b8
    // 0x98b8 (Windows-31J)
    // 0x4ece (UTF-16BE)
    if (argCheck == '从') {
        return true;
    }
    // No.3569
    // 説明:98b9
    // 0x98b9 (Windows-31J)
    // 0x4ecd (UTF-16BE)
    if (argCheck == '仍') {
        return true;
    }
    // No.3570
    // 説明:98ba
    // 0x98ba (Windows-31J)
    // 0x4ec4 (UTF-16BE)
    if (argCheck == '仄') {
        return true;
    }
    // No.3571
    // 説明:98bb
    // 0x98bb (Windows-31J)
    // 0x4ec6 (UTF-16BE)
    if (argCheck == '仆') {
        return true;
    }
    // No.3572
    // 説明:98bc
    // 0x98bc (Windows-31J)
    // 0x4ec2 (UTF-16BE)
    if (argCheck == '仂') {
        return true;
    }
    // No.3573
    // 説明:98bd
    // 0x98bd (Windows-31J)
    // 0x4ed7 (UTF-16BE)
    if (argCheck == '仗') {
        return true;
    }
    // No.3574
    // 説明:98be
    // 0x98be (Windows-31J)
    // 0x4ede (UTF-16BE)
    if (argCheck == '仞') {
        return true;
    }
    // No.3575
    // 説明:98bf
    // 0x98bf (Windows-31J)
    // 0x4eed (UTF-16BE)
    if (argCheck == '仭') {
        return true;
    }
    // No.3576
    // 説明:98c0
    // 0x98c0 (Windows-31J)
    // 0x4edf (UTF-16BE)
    if (argCheck == '仟') {
        return true;
    }
    // No.3577
    // 説明:98c1
    // 0x98c1 (Windows-31J)
    // 0x4ef7 (UTF-16BE)
    if (argCheck == '价') {
        return true;
    }
    // No.3578
    // 説明:98c2
    // 0x98c2 (Windows-31J)
    // 0x4f09 (UTF-16BE)
    if (argCheck == '伉') {
        return true;
    }
    // No.3579
    // 説明:98c3
    // 0x98c3 (Windows-31J)
    // 0x4f5a (UTF-16BE)
    if (argCheck == '佚') {
        return true;
    }
    // No.3580
    // 説明:98c4
    // 0x98c4 (Windows-31J)
    // 0x4f30 (UTF-16BE)
    if (argCheck == '估') {
        return true;
    }
    // No.3581
    // 説明:98c5
    // 0x98c5 (Windows-31J)
    // 0x4f5b (UTF-16BE)
    if (argCheck == '佛') {
        return true;
    }
    // No.3582
    // 説明:98c6
    // 0x98c6 (Windows-31J)
    // 0x4f5d (UTF-16BE)
    if (argCheck == '佝') {
        return true;
    }
    // No.3583
    // 説明:98c7
    // 0x98c7 (Windows-31J)
    // 0x4f57 (UTF-16BE)
    if (argCheck == '佗') {
        return true;
    }
    // No.3584
    // 説明:98c8
    // 0x98c8 (Windows-31J)
    // 0x4f47 (UTF-16BE)
    if (argCheck == '佇') {
        return true;
    }
    // No.3585
    // 説明:98c9
    // 0x98c9 (Windows-31J)
    // 0x4f76 (UTF-16BE)
    if (argCheck == '佶') {
        return true;
    }
    // No.3586
    // 説明:98ca
    // 0x98ca (Windows-31J)
    // 0x4f88 (UTF-16BE)
    if (argCheck == '侈') {
        return true;
    }
    // No.3587
    // 説明:98cb
    // 0x98cb (Windows-31J)
    // 0x4f8f (UTF-16BE)
    if (argCheck == '侏') {
        return true;
    }
    // No.3588
    // 説明:98cc
    // 0x98cc (Windows-31J)
    // 0x4f98 (UTF-16BE)
    if (argCheck == '侘') {
        return true;
    }
    // No.3589
    // 説明:98cd
    // 0x98cd (Windows-31J)
    // 0x4f7b (UTF-16BE)
    if (argCheck == '佻') {
        return true;
    }
    // No.3590
    // 説明:98ce
    // 0x98ce (Windows-31J)
    // 0x4f69 (UTF-16BE)
    if (argCheck == '佩') {
        return true;
    }
    // No.3591
    // 説明:98cf
    // 0x98cf (Windows-31J)
    // 0x4f70 (UTF-16BE)
    if (argCheck == '佰') {
        return true;
    }
    // No.3592
    // 説明:98d0
    // 0x98d0 (Windows-31J)
    // 0x4f91 (UTF-16BE)
    if (argCheck == '侑') {
        return true;
    }
    // No.3593
    // 説明:98d1
    // 0x98d1 (Windows-31J)
    // 0x4f6f (UTF-16BE)
    if (argCheck == '佯') {
        return true;
    }
    // No.3594
    // 説明:98d2
    // 0x98d2 (Windows-31J)
    // 0x4f86 (UTF-16BE)
    if (argCheck == '來') {
        return true;
    }
    // No.3595
    // 説明:98d3
    // 0x98d3 (Windows-31J)
    // 0x4f96 (UTF-16BE)
    if (argCheck == '侖') {
        return true;
    }
    // No.3596
    // 説明:98d4
    // 0x98d4 (Windows-31J)
    // 0x5118 (UTF-16BE)
    if (argCheck == '儘') {
        return true;
    }
    // No.3597
    // 説明:98d5
    // 0x98d5 (Windows-31J)
    // 0x4fd4 (UTF-16BE)
    if (argCheck == '俔') {
        return true;
    }
    // No.3598
    // 説明:98d6
    // 0x98d6 (Windows-31J)
    // 0x4fdf (UTF-16BE)
    if (argCheck == '俟') {
        return true;
    }
    // No.3599
    // 説明:98d7
    // 0x98d7 (Windows-31J)
    // 0x4fce (UTF-16BE)
    if (argCheck == '俎') {
        return true;
    }
    // No.3600
    // 説明:98d8
    // 0x98d8 (Windows-31J)
    // 0x4fd8 (UTF-16BE)
    if (argCheck == '俘') {
        return true;
    }
    // No.3601
    // 説明:98d9
    // 0x98d9 (Windows-31J)
    // 0x4fdb (UTF-16BE)
    if (argCheck == '俛') {
        return true;
    }
    // No.3602
    // 説明:98da
    // 0x98da (Windows-31J)
    // 0x4fd1 (UTF-16BE)
    if (argCheck == '俑') {
        return true;
    }
    // No.3603
    // 説明:98db
    // 0x98db (Windows-31J)
    // 0x4fda (UTF-16BE)
    if (argCheck == '俚') {
        return true;
    }
    // No.3604
    // 説明:98dc
    // 0x98dc (Windows-31J)
    // 0x4fd0 (UTF-16BE)
    if (argCheck == '俐') {
        return true;
    }
    // No.3605
    // 説明:98dd
    // 0x98dd (Windows-31J)
    // 0x4fe4 (UTF-16BE)
    if (argCheck == '俤') {
        return true;
    }
    // No.3606
    // 説明:98de
    // 0x98de (Windows-31J)
    // 0x4fe5 (UTF-16BE)
    if (argCheck == '俥') {
        return true;
    }
    // No.3607
    // 説明:98df
    // 0x98df (Windows-31J)
    // 0x501a (UTF-16BE)
    if (argCheck == '倚') {
        return true;
    }
    // No.3608
    // 説明:98e0
    // 0x98e0 (Windows-31J)
    // 0x5028 (UTF-16BE)
    if (argCheck == '倨') {
        return true;
    }
    // No.3609
    // 説明:98e1
    // 0x98e1 (Windows-31J)
    // 0x5014 (UTF-16BE)
    if (argCheck == '倔') {
        return true;
    }
    // No.3610
    // 説明:98e2
    // 0x98e2 (Windows-31J)
    // 0x502a (UTF-16BE)
    if (argCheck == '倪') {
        return true;
    }
    // No.3611
    // 説明:98e3
    // 0x98e3 (Windows-31J)
    // 0x5025 (UTF-16BE)
    if (argCheck == '倥') {
        return true;
    }
    // No.3612
    // 説明:98e4
    // 0x98e4 (Windows-31J)
    // 0x5005 (UTF-16BE)
    if (argCheck == '倅') {
        return true;
    }
    // No.3613
    // 説明:98e5
    // 0x98e5 (Windows-31J)
    // 0x4f1c (UTF-16BE)
    if (argCheck == '伜') {
        return true;
    }
    // No.3614
    // 説明:98e6
    // 0x98e6 (Windows-31J)
    // 0x4ff6 (UTF-16BE)
    if (argCheck == '俶') {
        return true;
    }
    // No.3615
    // 説明:98e7
    // 0x98e7 (Windows-31J)
    // 0x5021 (UTF-16BE)
    if (argCheck == '倡') {
        return true;
    }
    // No.3616
    // 説明:98e8
    // 0x98e8 (Windows-31J)
    // 0x5029 (UTF-16BE)
    if (argCheck == '倩') {
        return true;
    }
    // No.3617
    // 説明:98e9
    // 0x98e9 (Windows-31J)
    // 0x502c (UTF-16BE)
    if (argCheck == '倬') {
        return true;
    }
    // No.3618
    // 説明:98ea
    // 0x98ea (Windows-31J)
    // 0x4ffe (UTF-16BE)
    if (argCheck == '俾') {
        return true;
    }
    // No.3619
    // 説明:98eb
    // 0x98eb (Windows-31J)
    // 0x4fef (UTF-16BE)
    if (argCheck == '俯') {
        return true;
    }
    // No.3620
    // 説明:98ec
    // 0x98ec (Windows-31J)
    // 0x5011 (UTF-16BE)
    if (argCheck == '們') {
        return true;
    }
    // No.3621
    // 説明:98ed
    // 0x98ed (Windows-31J)
    // 0x5006 (UTF-16BE)
    if (argCheck == '倆') {
        return true;
    }
    // No.3622
    // 説明:98ee
    // 0x98ee (Windows-31J)
    // 0x5043 (UTF-16BE)
    if (argCheck == '偃') {
        return true;
    }
    // No.3623
    // 説明:98ef
    // 0x98ef (Windows-31J)
    // 0x5047 (UTF-16BE)
    if (argCheck == '假') {
        return true;
    }
    // No.3624
    // 説明:98f0
    // 0x98f0 (Windows-31J)
    // 0x6703 (UTF-16BE)
    if (argCheck == '會') {
        return true;
    }
    // No.3625
    // 説明:98f1
    // 0x98f1 (Windows-31J)
    // 0x5055 (UTF-16BE)
    if (argCheck == '偕') {
        return true;
    }
    // No.3626
    // 説明:98f2
    // 0x98f2 (Windows-31J)
    // 0x5050 (UTF-16BE)
    if (argCheck == '偐') {
        return true;
    }
    // No.3627
    // 説明:98f3
    // 0x98f3 (Windows-31J)
    // 0x5048 (UTF-16BE)
    if (argCheck == '偈') {
        return true;
    }
    // No.3628
    // 説明:98f4
    // 0x98f4 (Windows-31J)
    // 0x505a (UTF-16BE)
    if (argCheck == '做') {
        return true;
    }
    // No.3629
    // 説明:98f5
    // 0x98f5 (Windows-31J)
    // 0x5056 (UTF-16BE)
    if (argCheck == '偖') {
        return true;
    }
    // No.3630
    // 説明:98f6
    // 0x98f6 (Windows-31J)
    // 0x506c (UTF-16BE)
    if (argCheck == '偬') {
        return true;
    }
    // No.3631
    // 説明:98f7
    // 0x98f7 (Windows-31J)
    // 0x5078 (UTF-16BE)
    if (argCheck == '偸') {
        return true;
    }
    // No.3632
    // 説明:98f8
    // 0x98f8 (Windows-31J)
    // 0x5080 (UTF-16BE)
    if (argCheck == '傀') {
        return true;
    }
    // No.3633
    // 説明:98f9
    // 0x98f9 (Windows-31J)
    // 0x509a (UTF-16BE)
    if (argCheck == '傚') {
        return true;
    }
    // No.3634
    // 説明:98fa
    // 0x98fa (Windows-31J)
    // 0x5085 (UTF-16BE)
    if (argCheck == '傅') {
        return true;
    }
    // No.3635
    // 説明:98fb
    // 0x98fb (Windows-31J)
    // 0x50b4 (UTF-16BE)
    if (argCheck == '傴') {
        return true;
    }
    // No.3636
    // 説明:98fc
    // 0x98fc (Windows-31J)
    // 0x50b2 (UTF-16BE)
    if (argCheck == '傲') {
        return true;
    }
    // No.3637
    // 説明:9940
    // 0x9940 (Windows-31J)
    // 0x50c9 (UTF-16BE)
    if (argCheck == '僉') {
        return true;
    }
    // No.3638
    // 説明:9941
    // 0x9941 (Windows-31J)
    // 0x50ca (UTF-16BE)
    if (argCheck == '僊') {
        return true;
    }
    // No.3639
    // 説明:9942
    // 0x9942 (Windows-31J)
    // 0x50b3 (UTF-16BE)
    if (argCheck == '傳') {
        return true;
    }
    // No.3640
    // 説明:9943
    // 0x9943 (Windows-31J)
    // 0x50c2 (UTF-16BE)
    if (argCheck == '僂') {
        return true;
    }
    // No.3641
    // 説明:9944
    // 0x9944 (Windows-31J)
    // 0x50d6 (UTF-16BE)
    if (argCheck == '僖') {
        return true;
    }
    // No.3642
    // 説明:9945
    // 0x9945 (Windows-31J)
    // 0x50de (UTF-16BE)
    if (argCheck == '僞') {
        return true;
    }
    // No.3643
    // 説明:9946
    // 0x9946 (Windows-31J)
    // 0x50e5 (UTF-16BE)
    if (argCheck == '僥') {
        return true;
    }
    // No.3644
    // 説明:9947
    // 0x9947 (Windows-31J)
    // 0x50ed (UTF-16BE)
    if (argCheck == '僭') {
        return true;
    }
    // No.3645
    // 説明:9948
    // 0x9948 (Windows-31J)
    // 0x50e3 (UTF-16BE)
    if (argCheck == '僣') {
        return true;
    }
    // No.3646
    // 説明:9949
    // 0x9949 (Windows-31J)
    // 0x50ee (UTF-16BE)
    if (argCheck == '僮') {
        return true;
    }
    // No.3647
    // 説明:994a
    // 0x994a (Windows-31J)
    // 0x50f9 (UTF-16BE)
    if (argCheck == '價') {
        return true;
    }
    // No.3648
    // 説明:994b
    // 0x994b (Windows-31J)
    // 0x50f5 (UTF-16BE)
    if (argCheck == '僵') {
        return true;
    }
    // No.3649
    // 説明:994c
    // 0x994c (Windows-31J)
    // 0x5109 (UTF-16BE)
    if (argCheck == '儉') {
        return true;
    }
    // No.3650
    // 説明:994d
    // 0x994d (Windows-31J)
    // 0x5101 (UTF-16BE)
    if (argCheck == '儁') {
        return true;
    }
    // No.3651
    // 説明:994e
    // 0x994e (Windows-31J)
    // 0x5102 (UTF-16BE)
    if (argCheck == '儂') {
        return true;
    }
    // No.3652
    // 説明:994f
    // 0x994f (Windows-31J)
    // 0x5116 (UTF-16BE)
    if (argCheck == '儖') {
        return true;
    }
    // No.3653
    // 説明:9950
    // 0x9950 (Windows-31J)
    // 0x5115 (UTF-16BE)
    if (argCheck == '儕') {
        return true;
    }
    // No.3654
    // 説明:9951
    // 0x9951 (Windows-31J)
    // 0x5114 (UTF-16BE)
    if (argCheck == '儔') {
        return true;
    }
    // No.3655
    // 説明:9952
    // 0x9952 (Windows-31J)
    // 0x511a (UTF-16BE)
    if (argCheck == '儚') {
        return true;
    }
    // No.3656
    // 説明:9953
    // 0x9953 (Windows-31J)
    // 0x5121 (UTF-16BE)
    if (argCheck == '儡') {
        return true;
    }
    // No.3657
    // 説明:9954
    // 0x9954 (Windows-31J)
    // 0x513a (UTF-16BE)
    if (argCheck == '儺') {
        return true;
    }
    // No.3658
    // 説明:9955
    // 0x9955 (Windows-31J)
    // 0x5137 (UTF-16BE)
    if (argCheck == '儷') {
        return true;
    }
    // No.3659
    // 説明:9956
    // 0x9956 (Windows-31J)
    // 0x513c (UTF-16BE)
    if (argCheck == '儼') {
        return true;
    }
    // No.3660
    // 説明:9957
    // 0x9957 (Windows-31J)
    // 0x513b (UTF-16BE)
    if (argCheck == '儻') {
        return true;
    }
    // No.3661
    // 説明:9958
    // 0x9958 (Windows-31J)
    // 0x513f (UTF-16BE)
    if (argCheck == '儿') {
        return true;
    }
    // No.3662
    // 説明:9959
    // 0x9959 (Windows-31J)
    // 0x5140 (UTF-16BE)
    if (argCheck == '兀') {
        return true;
    }
    // No.3663
    // 説明:995a
    // 0x995a (Windows-31J)
    // 0x5152 (UTF-16BE)
    if (argCheck == '兒') {
        return true;
    }
    // No.3664
    // 説明:995b
    // 0x995b (Windows-31J)
    // 0x514c (UTF-16BE)
    if (argCheck == '兌') {
        return true;
    }
    // No.3665
    // 説明:995c
    // 0x995c (Windows-31J)
    // 0x5154 (UTF-16BE)
    if (argCheck == '兔') {
        return true;
    }
    // No.3666
    // 説明:995d
    // 0x995d (Windows-31J)
    // 0x5162 (UTF-16BE)
    if (argCheck == '兢') {
        return true;
    }
    // No.3667
    // 説明:995e
    // 0x995e (Windows-31J)
    // 0x7af8 (UTF-16BE)
    if (argCheck == '竸') {
        return true;
    }
    // No.3668
    // 説明:995f
    // 0x995f (Windows-31J)
    // 0x5169 (UTF-16BE)
    if (argCheck == '兩') {
        return true;
    }
    // No.3669
    // 説明:9960
    // 0x9960 (Windows-31J)
    // 0x516a (UTF-16BE)
    if (argCheck == '兪') {
        return true;
    }
    // No.3670
    // 説明:9961
    // 0x9961 (Windows-31J)
    // 0x516e (UTF-16BE)
    if (argCheck == '兮') {
        return true;
    }
    // No.3671
    // 説明:9962
    // 0x9962 (Windows-31J)
    // 0x5180 (UTF-16BE)
    if (argCheck == '冀') {
        return true;
    }
    // No.3672
    // 説明:9963
    // 0x9963 (Windows-31J)
    // 0x5182 (UTF-16BE)
    if (argCheck == '冂') {
        return true;
    }
    // No.3673
    // 説明:9964
    // 0x9964 (Windows-31J)
    // 0x56d8 (UTF-16BE)
    if (argCheck == '囘') {
        return true;
    }
    // No.3674
    // 説明:9965
    // 0x9965 (Windows-31J)
    // 0x518c (UTF-16BE)
    if (argCheck == '册') {
        return true;
    }
    // No.3675
    // 説明:9966
    // 0x9966 (Windows-31J)
    // 0x5189 (UTF-16BE)
    if (argCheck == '冉') {
        return true;
    }
    // No.3676
    // 説明:9967
    // 0x9967 (Windows-31J)
    // 0x518f (UTF-16BE)
    if (argCheck == '冏') {
        return true;
    }
    // No.3677
    // 説明:9968
    // 0x9968 (Windows-31J)
    // 0x5191 (UTF-16BE)
    if (argCheck == '冑') {
        return true;
    }
    // No.3678
    // 説明:9969
    // 0x9969 (Windows-31J)
    // 0x5193 (UTF-16BE)
    if (argCheck == '冓') {
        return true;
    }
    // No.3679
    // 説明:996a
    // 0x996a (Windows-31J)
    // 0x5195 (UTF-16BE)
    if (argCheck == '冕') {
        return true;
    }
    // No.3680
    // 説明:996b
    // 0x996b (Windows-31J)
    // 0x5196 (UTF-16BE)
    if (argCheck == '冖') {
        return true;
    }
    // No.3681
    // 説明:996c
    // 0x996c (Windows-31J)
    // 0x51a4 (UTF-16BE)
    if (argCheck == '冤') {
        return true;
    }
    // No.3682
    // 説明:996d
    // 0x996d (Windows-31J)
    // 0x51a6 (UTF-16BE)
    if (argCheck == '冦') {
        return true;
    }
    // No.3683
    // 説明:996e
    // 0x996e (Windows-31J)
    // 0x51a2 (UTF-16BE)
    if (argCheck == '冢') {
        return true;
    }
    // No.3684
    // 説明:996f
    // 0x996f (Windows-31J)
    // 0x51a9 (UTF-16BE)
    if (argCheck == '冩') {
        return true;
    }
    // No.3685
    // 説明:9970
    // 0x9970 (Windows-31J)
    // 0x51aa (UTF-16BE)
    if (argCheck == '冪') {
        return true;
    }
    // No.3686
    // 説明:9971
    // 0x9971 (Windows-31J)
    // 0x51ab (UTF-16BE)
    if (argCheck == '冫') {
        return true;
    }
    // No.3687
    // 説明:9972
    // 0x9972 (Windows-31J)
    // 0x51b3 (UTF-16BE)
    if (argCheck == '决') {
        return true;
    }
    // No.3688
    // 説明:9973
    // 0x9973 (Windows-31J)
    // 0x51b1 (UTF-16BE)
    if (argCheck == '冱') {
        return true;
    }
    // No.3689
    // 説明:9974
    // 0x9974 (Windows-31J)
    // 0x51b2 (UTF-16BE)
    if (argCheck == '冲') {
        return true;
    }
    // No.3690
    // 説明:9975
    // 0x9975 (Windows-31J)
    // 0x51b0 (UTF-16BE)
    if (argCheck == '冰') {
        return true;
    }
    // No.3691
    // 説明:9976
    // 0x9976 (Windows-31J)
    // 0x51b5 (UTF-16BE)
    if (argCheck == '况') {
        return true;
    }
    // No.3692
    // 説明:9977
    // 0x9977 (Windows-31J)
    // 0x51bd (UTF-16BE)
    if (argCheck == '冽') {
        return true;
    }
    // No.3693
    // 説明:9978
    // 0x9978 (Windows-31J)
    // 0x51c5 (UTF-16BE)
    if (argCheck == '凅') {
        return true;
    }
    // No.3694
    // 説明:9979
    // 0x9979 (Windows-31J)
    // 0x51c9 (UTF-16BE)
    if (argCheck == '凉') {
        return true;
    }
    // No.3695
    // 説明:997a
    // 0x997a (Windows-31J)
    // 0x51db (UTF-16BE)
    if (argCheck == '凛') {
        return true;
    }
    // No.3696
    // 説明:997b
    // 0x997b (Windows-31J)
    // 0x51e0 (UTF-16BE)
    if (argCheck == '几') {
        return true;
    }
    // No.3697
    // 説明:997c
    // 0x997c (Windows-31J)
    // 0x8655 (UTF-16BE)
    if (argCheck == '處') {
        return true;
    }
    // No.3698
    // 説明:997d
    // 0x997d (Windows-31J)
    // 0x51e9 (UTF-16BE)
    if (argCheck == '凩') {
        return true;
    }
    // No.3699
    // 説明:997e
    // 0x997e (Windows-31J)
    // 0x51ed (UTF-16BE)
    if (argCheck == '凭') {
        return true;
    }
    // No.3700
    // 説明:9980
    // 0x9980 (Windows-31J)
    // 0x51f0 (UTF-16BE)
    if (argCheck == '凰') {
        return true;
    }
    // No.3701
    // 説明:9981
    // 0x9981 (Windows-31J)
    // 0x51f5 (UTF-16BE)
    if (argCheck == '凵') {
        return true;
    }
    // No.3702
    // 説明:9982
    // 0x9982 (Windows-31J)
    // 0x51fe (UTF-16BE)
    if (argCheck == '凾') {
        return true;
    }
    // No.3703
    // 説明:9983
    // 0x9983 (Windows-31J)
    // 0x5204 (UTF-16BE)
    if (argCheck == '刄') {
        return true;
    }
    // No.3704
    // 説明:9984
    // 0x9984 (Windows-31J)
    // 0x520b (UTF-16BE)
    if (argCheck == '刋') {
        return true;
    }
    // No.3705
    // 説明:9985
    // 0x9985 (Windows-31J)
    // 0x5214 (UTF-16BE)
    if (argCheck == '刔') {
        return true;
    }
    // No.3706
    // 説明:9986
    // 0x9986 (Windows-31J)
    // 0x520e (UTF-16BE)
    if (argCheck == '刎') {
        return true;
    }
    // No.3707
    // 説明:9987
    // 0x9987 (Windows-31J)
    // 0x5227 (UTF-16BE)
    if (argCheck == '刧') {
        return true;
    }
    // No.3708
    // 説明:9988
    // 0x9988 (Windows-31J)
    // 0x522a (UTF-16BE)
    if (argCheck == '刪') {
        return true;
    }
    // No.3709
    // 説明:9989
    // 0x9989 (Windows-31J)
    // 0x522e (UTF-16BE)
    if (argCheck == '刮') {
        return true;
    }
    // No.3710
    // 説明:998a
    // 0x998a (Windows-31J)
    // 0x5233 (UTF-16BE)
    if (argCheck == '刳') {
        return true;
    }
    // No.3711
    // 説明:998b
    // 0x998b (Windows-31J)
    // 0x5239 (UTF-16BE)
    if (argCheck == '刹') {
        return true;
    }
    // No.3712
    // 説明:998c
    // 0x998c (Windows-31J)
    // 0x524f (UTF-16BE)
    if (argCheck == '剏') {
        return true;
    }
    // No.3713
    // 説明:998d
    // 0x998d (Windows-31J)
    // 0x5244 (UTF-16BE)
    if (argCheck == '剄') {
        return true;
    }
    // No.3714
    // 説明:998e
    // 0x998e (Windows-31J)
    // 0x524b (UTF-16BE)
    if (argCheck == '剋') {
        return true;
    }
    // No.3715
    // 説明:998f
    // 0x998f (Windows-31J)
    // 0x524c (UTF-16BE)
    if (argCheck == '剌') {
        return true;
    }
    // No.3716
    // 説明:9990
    // 0x9990 (Windows-31J)
    // 0x525e (UTF-16BE)
    if (argCheck == '剞') {
        return true;
    }
    // No.3717
    // 説明:9991
    // 0x9991 (Windows-31J)
    // 0x5254 (UTF-16BE)
    if (argCheck == '剔') {
        return true;
    }
    // No.3718
    // 説明:9992
    // 0x9992 (Windows-31J)
    // 0x526a (UTF-16BE)
    if (argCheck == '剪') {
        return true;
    }
    // No.3719
    // 説明:9993
    // 0x9993 (Windows-31J)
    // 0x5274 (UTF-16BE)
    if (argCheck == '剴') {
        return true;
    }
    // No.3720
    // 説明:9994
    // 0x9994 (Windows-31J)
    // 0x5269 (UTF-16BE)
    if (argCheck == '剩') {
        return true;
    }
    // No.3721
    // 説明:9995
    // 0x9995 (Windows-31J)
    // 0x5273 (UTF-16BE)
    if (argCheck == '剳') {
        return true;
    }
    // No.3722
    // 説明:9996
    // 0x9996 (Windows-31J)
    // 0x527f (UTF-16BE)
    if (argCheck == '剿') {
        return true;
    }
    // No.3723
    // 説明:9997
    // 0x9997 (Windows-31J)
    // 0x527d (UTF-16BE)
    if (argCheck == '剽') {
        return true;
    }
    // No.3724
    // 説明:9998
    // 0x9998 (Windows-31J)
    // 0x528d (UTF-16BE)
    if (argCheck == '劍') {
        return true;
    }
    // No.3725
    // 説明:9999
    // 0x9999 (Windows-31J)
    // 0x5294 (UTF-16BE)
    if (argCheck == '劔') {
        return true;
    }
    // No.3726
    // 説明:999a
    // 0x999a (Windows-31J)
    // 0x5292 (UTF-16BE)
    if (argCheck == '劒') {
        return true;
    }
    // No.3727
    // 説明:999b
    // 0x999b (Windows-31J)
    // 0x5271 (UTF-16BE)
    if (argCheck == '剱') {
        return true;
    }
    // No.3728
    // 説明:999c
    // 0x999c (Windows-31J)
    // 0x5288 (UTF-16BE)
    if (argCheck == '劈') {
        return true;
    }
    // No.3729
    // 説明:999d
    // 0x999d (Windows-31J)
    // 0x5291 (UTF-16BE)
    if (argCheck == '劑') {
        return true;
    }
    // No.3730
    // 説明:999e
    // 0x999e (Windows-31J)
    // 0x8fa8 (UTF-16BE)
    if (argCheck == '辨') {
        return true;
    }
    // No.3731
    // 説明:999f
    // 0x999f (Windows-31J)
    // 0x8fa7 (UTF-16BE)
    if (argCheck == '辧') {
        return true;
    }
    // No.3732
    // 説明:99a0
    // 0x99a0 (Windows-31J)
    // 0x52ac (UTF-16BE)
    if (argCheck == '劬') {
        return true;
    }
    // No.3733
    // 説明:99a1
    // 0x99a1 (Windows-31J)
    // 0x52ad (UTF-16BE)
    if (argCheck == '劭') {
        return true;
    }
    // No.3734
    // 説明:99a2
    // 0x99a2 (Windows-31J)
    // 0x52bc (UTF-16BE)
    if (argCheck == '劼') {
        return true;
    }
    // No.3735
    // 説明:99a3
    // 0x99a3 (Windows-31J)
    // 0x52b5 (UTF-16BE)
    if (argCheck == '劵') {
        return true;
    }
    // No.3736
    // 説明:99a4
    // 0x99a4 (Windows-31J)
    // 0x52c1 (UTF-16BE)
    if (argCheck == '勁') {
        return true;
    }
    // No.3737
    // 説明:99a5
    // 0x99a5 (Windows-31J)
    // 0x52cd (UTF-16BE)
    if (argCheck == '勍') {
        return true;
    }
    // No.3738
    // 説明:99a6
    // 0x99a6 (Windows-31J)
    // 0x52d7 (UTF-16BE)
    if (argCheck == '勗') {
        return true;
    }
    // No.3739
    // 説明:99a7
    // 0x99a7 (Windows-31J)
    // 0x52de (UTF-16BE)
    if (argCheck == '勞') {
        return true;
    }
    // No.3740
    // 説明:99a8
    // 0x99a8 (Windows-31J)
    // 0x52e3 (UTF-16BE)
    if (argCheck == '勣') {
        return true;
    }
    // No.3741
    // 説明:99a9
    // 0x99a9 (Windows-31J)
    // 0x52e6 (UTF-16BE)
    if (argCheck == '勦') {
        return true;
    }
    // No.3742
    // 説明:99aa
    // 0x99aa (Windows-31J)
    // 0x98ed (UTF-16BE)
    if (argCheck == '飭') {
        return true;
    }
    // No.3743
    // 説明:99ab
    // 0x99ab (Windows-31J)
    // 0x52e0 (UTF-16BE)
    if (argCheck == '勠') {
        return true;
    }
    // No.3744
    // 説明:99ac
    // 0x99ac (Windows-31J)
    // 0x52f3 (UTF-16BE)
    if (argCheck == '勳') {
        return true;
    }
    // No.3745
    // 説明:99ad
    // 0x99ad (Windows-31J)
    // 0x52f5 (UTF-16BE)
    if (argCheck == '勵') {
        return true;
    }
    // No.3746
    // 説明:99ae
    // 0x99ae (Windows-31J)
    // 0x52f8 (UTF-16BE)
    if (argCheck == '勸') {
        return true;
    }
    // No.3747
    // 説明:99af
    // 0x99af (Windows-31J)
    // 0x52f9 (UTF-16BE)
    if (argCheck == '勹') {
        return true;
    }
    // No.3748
    // 説明:99b0
    // 0x99b0 (Windows-31J)
    // 0x5306 (UTF-16BE)
    if (argCheck == '匆') {
        return true;
    }
    // No.3749
    // 説明:99b1
    // 0x99b1 (Windows-31J)
    // 0x5308 (UTF-16BE)
    if (argCheck == '匈') {
        return true;
    }
    // No.3750
    // 説明:99b2
    // 0x99b2 (Windows-31J)
    // 0x7538 (UTF-16BE)
    if (argCheck == '甸') {
        return true;
    }
    // No.3751
    // 説明:99b3
    // 0x99b3 (Windows-31J)
    // 0x530d (UTF-16BE)
    if (argCheck == '匍') {
        return true;
    }
    // No.3752
    // 説明:99b4
    // 0x99b4 (Windows-31J)
    // 0x5310 (UTF-16BE)
    if (argCheck == '匐') {
        return true;
    }
    // No.3753
    // 説明:99b5
    // 0x99b5 (Windows-31J)
    // 0x530f (UTF-16BE)
    if (argCheck == '匏') {
        return true;
    }
    // No.3754
    // 説明:99b6
    // 0x99b6 (Windows-31J)
    // 0x5315 (UTF-16BE)
    if (argCheck == '匕') {
        return true;
    }
    // No.3755
    // 説明:99b7
    // 0x99b7 (Windows-31J)
    // 0x531a (UTF-16BE)
    if (argCheck == '匚') {
        return true;
    }
    // No.3756
    // 説明:99b8
    // 0x99b8 (Windows-31J)
    // 0x5323 (UTF-16BE)
    if (argCheck == '匣') {
        return true;
    }
    // No.3757
    // 説明:99b9
    // 0x99b9 (Windows-31J)
    // 0x532f (UTF-16BE)
    if (argCheck == '匯') {
        return true;
    }
    // No.3758
    // 説明:99ba
    // 0x99ba (Windows-31J)
    // 0x5331 (UTF-16BE)
    if (argCheck == '匱') {
        return true;
    }
    // No.3759
    // 説明:99bb
    // 0x99bb (Windows-31J)
    // 0x5333 (UTF-16BE)
    if (argCheck == '匳') {
        return true;
    }
    // No.3760
    // 説明:99bc
    // 0x99bc (Windows-31J)
    // 0x5338 (UTF-16BE)
    if (argCheck == '匸') {
        return true;
    }
    // No.3761
    // 説明:99bd
    // 0x99bd (Windows-31J)
    // 0x5340 (UTF-16BE)
    if (argCheck == '區') {
        return true;
    }
    // No.3762
    // 説明:99be
    // 0x99be (Windows-31J)
    // 0x5346 (UTF-16BE)
    if (argCheck == '卆') {
        return true;
    }
    // No.3763
    // 説明:99bf
    // 0x99bf (Windows-31J)
    // 0x5345 (UTF-16BE)
    if (argCheck == '卅') {
        return true;
    }
    // No.3764
    // 説明:99c0
    // 0x99c0 (Windows-31J)
    // 0x4e17 (UTF-16BE)
    if (argCheck == '丗') {
        return true;
    }
    // No.3765
    // 説明:99c1
    // 0x99c1 (Windows-31J)
    // 0x5349 (UTF-16BE)
    if (argCheck == '卉') {
        return true;
    }
    // No.3766
    // 説明:99c2
    // 0x99c2 (Windows-31J)
    // 0x534d (UTF-16BE)
    if (argCheck == '卍') {
        return true;
    }
    // No.3767
    // 説明:99c3
    // 0x99c3 (Windows-31J)
    // 0x51d6 (UTF-16BE)
    if (argCheck == '凖') {
        return true;
    }
    // No.3768
    // 説明:99c4
    // 0x99c4 (Windows-31J)
    // 0x535e (UTF-16BE)
    if (argCheck == '卞') {
        return true;
    }
    // No.3769
    // 説明:99c5
    // 0x99c5 (Windows-31J)
    // 0x5369 (UTF-16BE)
    if (argCheck == '卩') {
        return true;
    }
    // No.3770
    // 説明:99c6
    // 0x99c6 (Windows-31J)
    // 0x536e (UTF-16BE)
    if (argCheck == '卮') {
        return true;
    }
    // No.3771
    // 説明:99c7
    // 0x99c7 (Windows-31J)
    // 0x5918 (UTF-16BE)
    if (argCheck == '夘') {
        return true;
    }
    // No.3772
    // 説明:99c8
    // 0x99c8 (Windows-31J)
    // 0x537b (UTF-16BE)
    if (argCheck == '卻') {
        return true;
    }
    // No.3773
    // 説明:99c9
    // 0x99c9 (Windows-31J)
    // 0x5377 (UTF-16BE)
    if (argCheck == '卷') {
        return true;
    }
    // No.3774
    // 説明:99ca
    // 0x99ca (Windows-31J)
    // 0x5382 (UTF-16BE)
    if (argCheck == '厂') {
        return true;
    }
    // No.3775
    // 説明:99cb
    // 0x99cb (Windows-31J)
    // 0x5396 (UTF-16BE)
    if (argCheck == '厖') {
        return true;
    }
    // No.3776
    // 説明:99cc
    // 0x99cc (Windows-31J)
    // 0x53a0 (UTF-16BE)
    if (argCheck == '厠') {
        return true;
    }
    // No.3777
    // 説明:99cd
    // 0x99cd (Windows-31J)
    // 0x53a6 (UTF-16BE)
    if (argCheck == '厦') {
        return true;
    }
    // No.3778
    // 説明:99ce
    // 0x99ce (Windows-31J)
    // 0x53a5 (UTF-16BE)
    if (argCheck == '厥') {
        return true;
    }
    // No.3779
    // 説明:99cf
    // 0x99cf (Windows-31J)
    // 0x53ae (UTF-16BE)
    if (argCheck == '厮') {
        return true;
    }
    // No.3780
    // 説明:99d0
    // 0x99d0 (Windows-31J)
    // 0x53b0 (UTF-16BE)
    if (argCheck == '厰') {
        return true;
    }
    // No.3781
    // 説明:99d1
    // 0x99d1 (Windows-31J)
    // 0x53b6 (UTF-16BE)
    if (argCheck == '厶') {
        return true;
    }
    // No.3782
    // 説明:99d2
    // 0x99d2 (Windows-31J)
    // 0x53c3 (UTF-16BE)
    if (argCheck == '參') {
        return true;
    }
    // No.3783
    // 説明:99d3
    // 0x99d3 (Windows-31J)
    // 0x7c12 (UTF-16BE)
    if (argCheck == '簒') {
        return true;
    }
    // No.3784
    // 説明:99d4
    // 0x99d4 (Windows-31J)
    // 0x96d9 (UTF-16BE)
    if (argCheck == '雙') {
        return true;
    }
    // No.3785
    // 説明:99d5
    // 0x99d5 (Windows-31J)
    // 0x53df (UTF-16BE)
    if (argCheck == '叟') {
        return true;
    }
    // No.3786
    // 説明:99d6
    // 0x99d6 (Windows-31J)
    // 0x66fc (UTF-16BE)
    if (argCheck == '曼') {
        return true;
    }
    // No.3787
    // 説明:99d7
    // 0x99d7 (Windows-31J)
    // 0x71ee (UTF-16BE)
    if (argCheck == '燮') {
        return true;
    }
    // No.3788
    // 説明:99d8
    // 0x99d8 (Windows-31J)
    // 0x53ee (UTF-16BE)
    if (argCheck == '叮') {
        return true;
    }
    // No.3789
    // 説明:99d9
    // 0x99d9 (Windows-31J)
    // 0x53e8 (UTF-16BE)
    if (argCheck == '叨') {
        return true;
    }
    // No.3790
    // 説明:99da
    // 0x99da (Windows-31J)
    // 0x53ed (UTF-16BE)
    if (argCheck == '叭') {
        return true;
    }
    // No.3791
    // 説明:99db
    // 0x99db (Windows-31J)
    // 0x53fa (UTF-16BE)
    if (argCheck == '叺') {
        return true;
    }
    // No.3792
    // 説明:99dc
    // 0x99dc (Windows-31J)
    // 0x5401 (UTF-16BE)
    if (argCheck == '吁') {
        return true;
    }
    // No.3793
    // 説明:99dd
    // 0x99dd (Windows-31J)
    // 0x543d (UTF-16BE)
    if (argCheck == '吽') {
        return true;
    }
    // No.3794
    // 説明:99de
    // 0x99de (Windows-31J)
    // 0x5440 (UTF-16BE)
    if (argCheck == '呀') {
        return true;
    }
    // No.3795
    // 説明:99df
    // 0x99df (Windows-31J)
    // 0x542c (UTF-16BE)
    if (argCheck == '听') {
        return true;
    }
    // No.3796
    // 説明:99e0
    // 0x99e0 (Windows-31J)
    // 0x542d (UTF-16BE)
    if (argCheck == '吭') {
        return true;
    }
    // No.3797
    // 説明:99e1
    // 0x99e1 (Windows-31J)
    // 0x543c (UTF-16BE)
    if (argCheck == '吼') {
        return true;
    }
    // No.3798
    // 説明:99e2
    // 0x99e2 (Windows-31J)
    // 0x542e (UTF-16BE)
    if (argCheck == '吮') {
        return true;
    }
    // No.3799
    // 説明:99e3
    // 0x99e3 (Windows-31J)
    // 0x5436 (UTF-16BE)
    if (argCheck == '吶') {
        return true;
    }
    // No.3800
    // 説明:99e4
    // 0x99e4 (Windows-31J)
    // 0x5429 (UTF-16BE)
    if (argCheck == '吩') {
        return true;
    }
    // No.3801
    // 説明:99e5
    // 0x99e5 (Windows-31J)
    // 0x541d (UTF-16BE)
    if (argCheck == '吝') {
        return true;
    }
    // No.3802
    // 説明:99e6
    // 0x99e6 (Windows-31J)
    // 0x544e (UTF-16BE)
    if (argCheck == '呎') {
        return true;
    }
    // No.3803
    // 説明:99e7
    // 0x99e7 (Windows-31J)
    // 0x548f (UTF-16BE)
    if (argCheck == '咏') {
        return true;
    }
    // No.3804
    // 説明:99e8
    // 0x99e8 (Windows-31J)
    // 0x5475 (UTF-16BE)
    if (argCheck == '呵') {
        return true;
    }
    // No.3805
    // 説明:99e9
    // 0x99e9 (Windows-31J)
    // 0x548e (UTF-16BE)
    if (argCheck == '咎') {
        return true;
    }
    // No.3806
    // 説明:99ea
    // 0x99ea (Windows-31J)
    // 0x545f (UTF-16BE)
    if (argCheck == '呟') {
        return true;
    }
    // No.3807
    // 説明:99eb
    // 0x99eb (Windows-31J)
    // 0x5471 (UTF-16BE)
    if (argCheck == '呱') {
        return true;
    }
    // No.3808
    // 説明:99ec
    // 0x99ec (Windows-31J)
    // 0x5477 (UTF-16BE)
    if (argCheck == '呷') {
        return true;
    }
    // No.3809
    // 説明:99ed
    // 0x99ed (Windows-31J)
    // 0x5470 (UTF-16BE)
    if (argCheck == '呰') {
        return true;
    }
    // No.3810
    // 説明:99ee
    // 0x99ee (Windows-31J)
    // 0x5492 (UTF-16BE)
    if (argCheck == '咒') {
        return true;
    }
    // No.3811
    // 説明:99ef
    // 0x99ef (Windows-31J)
    // 0x547b (UTF-16BE)
    if (argCheck == '呻') {
        return true;
    }
    // No.3812
    // 説明:99f0
    // 0x99f0 (Windows-31J)
    // 0x5480 (UTF-16BE)
    if (argCheck == '咀') {
        return true;
    }
    // No.3813
    // 説明:99f1
    // 0x99f1 (Windows-31J)
    // 0x5476 (UTF-16BE)
    if (argCheck == '呶') {
        return true;
    }
    // No.3814
    // 説明:99f2
    // 0x99f2 (Windows-31J)
    // 0x5484 (UTF-16BE)
    if (argCheck == '咄') {
        return true;
    }
    // No.3815
    // 説明:99f3
    // 0x99f3 (Windows-31J)
    // 0x5490 (UTF-16BE)
    if (argCheck == '咐') {
        return true;
    }
    // No.3816
    // 説明:99f4
    // 0x99f4 (Windows-31J)
    // 0x5486 (UTF-16BE)
    if (argCheck == '咆') {
        return true;
    }
    // No.3817
    // 説明:99f5
    // 0x99f5 (Windows-31J)
    // 0x54c7 (UTF-16BE)
    if (argCheck == '哇') {
        return true;
    }
    // No.3818
    // 説明:99f6
    // 0x99f6 (Windows-31J)
    // 0x54a2 (UTF-16BE)
    if (argCheck == '咢') {
        return true;
    }
    // No.3819
    // 説明:99f7
    // 0x99f7 (Windows-31J)
    // 0x54b8 (UTF-16BE)
    if (argCheck == '咸') {
        return true;
    }
    // No.3820
    // 説明:99f8
    // 0x99f8 (Windows-31J)
    // 0x54a5 (UTF-16BE)
    if (argCheck == '咥') {
        return true;
    }
    // No.3821
    // 説明:99f9
    // 0x99f9 (Windows-31J)
    // 0x54ac (UTF-16BE)
    if (argCheck == '咬') {
        return true;
    }
    // No.3822
    // 説明:99fa
    // 0x99fa (Windows-31J)
    // 0x54c4 (UTF-16BE)
    if (argCheck == '哄') {
        return true;
    }
    // No.3823
    // 説明:99fb
    // 0x99fb (Windows-31J)
    // 0x54c8 (UTF-16BE)
    if (argCheck == '哈') {
        return true;
    }
    // No.3824
    // 説明:99fc
    // 0x99fc (Windows-31J)
    // 0x54a8 (UTF-16BE)
    if (argCheck == '咨') {
        return true;
    }
    // No.3825
    // 説明:9a40
    // 0x9a40 (Windows-31J)
    // 0x54ab (UTF-16BE)
    if (argCheck == '咫') {
        return true;
    }
    // No.3826
    // 説明:9a41
    // 0x9a41 (Windows-31J)
    // 0x54c2 (UTF-16BE)
    if (argCheck == '哂') {
        return true;
    }
    // No.3827
    // 説明:9a42
    // 0x9a42 (Windows-31J)
    // 0x54a4 (UTF-16BE)
    if (argCheck == '咤') {
        return true;
    }
    // No.3828
    // 説明:9a43
    // 0x9a43 (Windows-31J)
    // 0x54be (UTF-16BE)
    if (argCheck == '咾') {
        return true;
    }
    // No.3829
    // 説明:9a44
    // 0x9a44 (Windows-31J)
    // 0x54bc (UTF-16BE)
    if (argCheck == '咼') {
        return true;
    }
    // No.3830
    // 説明:9a45
    // 0x9a45 (Windows-31J)
    // 0x54d8 (UTF-16BE)
    if (argCheck == '哘') {
        return true;
    }
    // No.3831
    // 説明:9a46
    // 0x9a46 (Windows-31J)
    // 0x54e5 (UTF-16BE)
    if (argCheck == '哥') {
        return true;
    }
    // No.3832
    // 説明:9a47
    // 0x9a47 (Windows-31J)
    // 0x54e6 (UTF-16BE)
    if (argCheck == '哦') {
        return true;
    }
    // No.3833
    // 説明:9a48
    // 0x9a48 (Windows-31J)
    // 0x550f (UTF-16BE)
    if (argCheck == '唏') {
        return true;
    }
    // No.3834
    // 説明:9a49
    // 0x9a49 (Windows-31J)
    // 0x5514 (UTF-16BE)
    if (argCheck == '唔') {
        return true;
    }
    // No.3835
    // 説明:9a4a
    // 0x9a4a (Windows-31J)
    // 0x54fd (UTF-16BE)
    if (argCheck == '哽') {
        return true;
    }
    // No.3836
    // 説明:9a4b
    // 0x9a4b (Windows-31J)
    // 0x54ee (UTF-16BE)
    if (argCheck == '哮') {
        return true;
    }
    // No.3837
    // 説明:9a4c
    // 0x9a4c (Windows-31J)
    // 0x54ed (UTF-16BE)
    if (argCheck == '哭') {
        return true;
    }
    // No.3838
    // 説明:9a4d
    // 0x9a4d (Windows-31J)
    // 0x54fa (UTF-16BE)
    if (argCheck == '哺') {
        return true;
    }
    // No.3839
    // 説明:9a4e
    // 0x9a4e (Windows-31J)
    // 0x54e2 (UTF-16BE)
    if (argCheck == '哢') {
        return true;
    }
    // No.3840
    // 説明:9a4f
    // 0x9a4f (Windows-31J)
    // 0x5539 (UTF-16BE)
    if (argCheck == '唹') {
        return true;
    }
    // No.3841
    // 説明:9a50
    // 0x9a50 (Windows-31J)
    // 0x5540 (UTF-16BE)
    if (argCheck == '啀') {
        return true;
    }
    // No.3842
    // 説明:9a51
    // 0x9a51 (Windows-31J)
    // 0x5563 (UTF-16BE)
    if (argCheck == '啣') {
        return true;
    }
    // No.3843
    // 説明:9a52
    // 0x9a52 (Windows-31J)
    // 0x554c (UTF-16BE)
    if (argCheck == '啌') {
        return true;
    }
    // No.3844
    // 説明:9a53
    // 0x9a53 (Windows-31J)
    // 0x552e (UTF-16BE)
    if (argCheck == '售') {
        return true;
    }
    // No.3845
    // 説明:9a54
    // 0x9a54 (Windows-31J)
    // 0x555c (UTF-16BE)
    if (argCheck == '啜') {
        return true;
    }
    // No.3846
    // 説明:9a55
    // 0x9a55 (Windows-31J)
    // 0x5545 (UTF-16BE)
    if (argCheck == '啅') {
        return true;
    }
    // No.3847
    // 説明:9a56
    // 0x9a56 (Windows-31J)
    // 0x5556 (UTF-16BE)
    if (argCheck == '啖') {
        return true;
    }
    // No.3848
    // 説明:9a57
    // 0x9a57 (Windows-31J)
    // 0x5557 (UTF-16BE)
    if (argCheck == '啗') {
        return true;
    }
    // No.3849
    // 説明:9a58
    // 0x9a58 (Windows-31J)
    // 0x5538 (UTF-16BE)
    if (argCheck == '唸') {
        return true;
    }
    // No.3850
    // 説明:9a59
    // 0x9a59 (Windows-31J)
    // 0x5533 (UTF-16BE)
    if (argCheck == '唳') {
        return true;
    }
    // No.3851
    // 説明:9a5a
    // 0x9a5a (Windows-31J)
    // 0x555d (UTF-16BE)
    if (argCheck == '啝') {
        return true;
    }
    // No.3852
    // 説明:9a5b
    // 0x9a5b (Windows-31J)
    // 0x5599 (UTF-16BE)
    if (argCheck == '喙') {
        return true;
    }
    // No.3853
    // 説明:9a5c
    // 0x9a5c (Windows-31J)
    // 0x5580 (UTF-16BE)
    if (argCheck == '喀') {
        return true;
    }
    // No.3854
    // 説明:9a5d
    // 0x9a5d (Windows-31J)
    // 0x54af (UTF-16BE)
    if (argCheck == '咯') {
        return true;
    }
    // No.3855
    // 説明:9a5e
    // 0x9a5e (Windows-31J)
    // 0x558a (UTF-16BE)
    if (argCheck == '喊') {
        return true;
    }
    // No.3856
    // 説明:9a5f
    // 0x9a5f (Windows-31J)
    // 0x559f (UTF-16BE)
    if (argCheck == '喟') {
        return true;
    }
    // No.3857
    // 説明:9a60
    // 0x9a60 (Windows-31J)
    // 0x557b (UTF-16BE)
    if (argCheck == '啻') {
        return true;
    }
    // No.3858
    // 説明:9a61
    // 0x9a61 (Windows-31J)
    // 0x557e (UTF-16BE)
    if (argCheck == '啾') {
        return true;
    }
    // No.3859
    // 説明:9a62
    // 0x9a62 (Windows-31J)
    // 0x5598 (UTF-16BE)
    if (argCheck == '喘') {
        return true;
    }
    // No.3860
    // 説明:9a63
    // 0x9a63 (Windows-31J)
    // 0x559e (UTF-16BE)
    if (argCheck == '喞') {
        return true;
    }
    // No.3861
    // 説明:9a64
    // 0x9a64 (Windows-31J)
    // 0x55ae (UTF-16BE)
    if (argCheck == '單') {
        return true;
    }
    // No.3862
    // 説明:9a65
    // 0x9a65 (Windows-31J)
    // 0x557c (UTF-16BE)
    if (argCheck == '啼') {
        return true;
    }
    // No.3863
    // 説明:9a66
    // 0x9a66 (Windows-31J)
    // 0x5583 (UTF-16BE)
    if (argCheck == '喃') {
        return true;
    }
    // No.3864
    // 説明:9a67
    // 0x9a67 (Windows-31J)
    // 0x55a9 (UTF-16BE)
    if (argCheck == '喩') {
        return true;
    }
    // No.3865
    // 説明:9a68
    // 0x9a68 (Windows-31J)
    // 0x5587 (UTF-16BE)
    if (argCheck == '喇') {
        return true;
    }
    // No.3866
    // 説明:9a69
    // 0x9a69 (Windows-31J)
    // 0x55a8 (UTF-16BE)
    if (argCheck == '喨') {
        return true;
    }
    // No.3867
    // 説明:9a6a
    // 0x9a6a (Windows-31J)
    // 0x55da (UTF-16BE)
    if (argCheck == '嗚') {
        return true;
    }
    // No.3868
    // 説明:9a6b
    // 0x9a6b (Windows-31J)
    // 0x55c5 (UTF-16BE)
    if (argCheck == '嗅') {
        return true;
    }
    // No.3869
    // 説明:9a6c
    // 0x9a6c (Windows-31J)
    // 0x55df (UTF-16BE)
    if (argCheck == '嗟') {
        return true;
    }
    // No.3870
    // 説明:9a6d
    // 0x9a6d (Windows-31J)
    // 0x55c4 (UTF-16BE)
    if (argCheck == '嗄') {
        return true;
    }
    // No.3871
    // 説明:9a6e
    // 0x9a6e (Windows-31J)
    // 0x55dc (UTF-16BE)
    if (argCheck == '嗜') {
        return true;
    }
    // No.3872
    // 説明:9a6f
    // 0x9a6f (Windows-31J)
    // 0x55e4 (UTF-16BE)
    if (argCheck == '嗤') {
        return true;
    }
    // No.3873
    // 説明:9a70
    // 0x9a70 (Windows-31J)
    // 0x55d4 (UTF-16BE)
    if (argCheck == '嗔') {
        return true;
    }
    // No.3874
    // 説明:9a71
    // 0x9a71 (Windows-31J)
    // 0x5614 (UTF-16BE)
    if (argCheck == '嘔') {
        return true;
    }
    // No.3875
    // 説明:9a72
    // 0x9a72 (Windows-31J)
    // 0x55f7 (UTF-16BE)
    if (argCheck == '嗷') {
        return true;
    }
    // No.3876
    // 説明:9a73
    // 0x9a73 (Windows-31J)
    // 0x5616 (UTF-16BE)
    if (argCheck == '嘖') {
        return true;
    }
    // No.3877
    // 説明:9a74
    // 0x9a74 (Windows-31J)
    // 0x55fe (UTF-16BE)
    if (argCheck == '嗾') {
        return true;
    }
    // No.3878
    // 説明:9a75
    // 0x9a75 (Windows-31J)
    // 0x55fd (UTF-16BE)
    if (argCheck == '嗽') {
        return true;
    }
    // No.3879
    // 説明:9a76
    // 0x9a76 (Windows-31J)
    // 0x561b (UTF-16BE)
    if (argCheck == '嘛') {
        return true;
    }
    // No.3880
    // 説明:9a77
    // 0x9a77 (Windows-31J)
    // 0x55f9 (UTF-16BE)
    if (argCheck == '嗹') {
        return true;
    }
    // No.3881
    // 説明:9a78
    // 0x9a78 (Windows-31J)
    // 0x564e (UTF-16BE)
    if (argCheck == '噎') {
        return true;
    }
    // No.3882
    // 説明:9a79
    // 0x9a79 (Windows-31J)
    // 0x5650 (UTF-16BE)
    if (argCheck == '噐') {
        return true;
    }
    // No.3883
    // 説明:9a7a
    // 0x9a7a (Windows-31J)
    // 0x71df (UTF-16BE)
    if (argCheck == '營') {
        return true;
    }
    // No.3884
    // 説明:9a7b
    // 0x9a7b (Windows-31J)
    // 0x5634 (UTF-16BE)
    if (argCheck == '嘴') {
        return true;
    }
    // No.3885
    // 説明:9a7c
    // 0x9a7c (Windows-31J)
    // 0x5636 (UTF-16BE)
    if (argCheck == '嘶') {
        return true;
    }
    // No.3886
    // 説明:9a7d
    // 0x9a7d (Windows-31J)
    // 0x5632 (UTF-16BE)
    if (argCheck == '嘲') {
        return true;
    }
    // No.3887
    // 説明:9a7e
    // 0x9a7e (Windows-31J)
    // 0x5638 (UTF-16BE)
    if (argCheck == '嘸') {
        return true;
    }
    // No.3888
    // 説明:9a80
    // 0x9a80 (Windows-31J)
    // 0x566b (UTF-16BE)
    if (argCheck == '噫') {
        return true;
    }
    // No.3889
    // 説明:9a81
    // 0x9a81 (Windows-31J)
    // 0x5664 (UTF-16BE)
    if (argCheck == '噤') {
        return true;
    }
    // No.3890
    // 説明:9a82
    // 0x9a82 (Windows-31J)
    // 0x562f (UTF-16BE)
    if (argCheck == '嘯') {
        return true;
    }
    // No.3891
    // 説明:9a83
    // 0x9a83 (Windows-31J)
    // 0x566c (UTF-16BE)
    if (argCheck == '噬') {
        return true;
    }
    // No.3892
    // 説明:9a84
    // 0x9a84 (Windows-31J)
    // 0x566a (UTF-16BE)
    if (argCheck == '噪') {
        return true;
    }
    // No.3893
    // 説明:9a85
    // 0x9a85 (Windows-31J)
    // 0x5686 (UTF-16BE)
    if (argCheck == '嚆') {
        return true;
    }
    // No.3894
    // 説明:9a86
    // 0x9a86 (Windows-31J)
    // 0x5680 (UTF-16BE)
    if (argCheck == '嚀') {
        return true;
    }
    // No.3895
    // 説明:9a87
    // 0x9a87 (Windows-31J)
    // 0x568a (UTF-16BE)
    if (argCheck == '嚊') {
        return true;
    }
    // No.3896
    // 説明:9a88
    // 0x9a88 (Windows-31J)
    // 0x56a0 (UTF-16BE)
    if (argCheck == '嚠') {
        return true;
    }
    // No.3897
    // 説明:9a89
    // 0x9a89 (Windows-31J)
    // 0x5694 (UTF-16BE)
    if (argCheck == '嚔') {
        return true;
    }
    // No.3898
    // 説明:9a8a
    // 0x9a8a (Windows-31J)
    // 0x568f (UTF-16BE)
    if (argCheck == '嚏') {
        return true;
    }
    // No.3899
    // 説明:9a8b
    // 0x9a8b (Windows-31J)
    // 0x56a5 (UTF-16BE)
    if (argCheck == '嚥') {
        return true;
    }
    // No.3900
    // 説明:9a8c
    // 0x9a8c (Windows-31J)
    // 0x56ae (UTF-16BE)
    if (argCheck == '嚮') {
        return true;
    }
    // No.3901
    // 説明:9a8d
    // 0x9a8d (Windows-31J)
    // 0x56b6 (UTF-16BE)
    if (argCheck == '嚶') {
        return true;
    }
    // No.3902
    // 説明:9a8e
    // 0x9a8e (Windows-31J)
    // 0x56b4 (UTF-16BE)
    if (argCheck == '嚴') {
        return true;
    }
    // No.3903
    // 説明:9a8f
    // 0x9a8f (Windows-31J)
    // 0x56c2 (UTF-16BE)
    if (argCheck == '囂') {
        return true;
    }
    // No.3904
    // 説明:9a90
    // 0x9a90 (Windows-31J)
    // 0x56bc (UTF-16BE)
    if (argCheck == '嚼') {
        return true;
    }
    // No.3905
    // 説明:9a91
    // 0x9a91 (Windows-31J)
    // 0x56c1 (UTF-16BE)
    if (argCheck == '囁') {
        return true;
    }
    // No.3906
    // 説明:9a92
    // 0x9a92 (Windows-31J)
    // 0x56c3 (UTF-16BE)
    if (argCheck == '囃') {
        return true;
    }
    // No.3907
    // 説明:9a93
    // 0x9a93 (Windows-31J)
    // 0x56c0 (UTF-16BE)
    if (argCheck == '囀') {
        return true;
    }
    // No.3908
    // 説明:9a94
    // 0x9a94 (Windows-31J)
    // 0x56c8 (UTF-16BE)
    if (argCheck == '囈') {
        return true;
    }
    // No.3909
    // 説明:9a95
    // 0x9a95 (Windows-31J)
    // 0x56ce (UTF-16BE)
    if (argCheck == '囎') {
        return true;
    }
    // No.3910
    // 説明:9a96
    // 0x9a96 (Windows-31J)
    // 0x56d1 (UTF-16BE)
    if (argCheck == '囑') {
        return true;
    }
    // No.3911
    // 説明:9a97
    // 0x9a97 (Windows-31J)
    // 0x56d3 (UTF-16BE)
    if (argCheck == '囓') {
        return true;
    }
    // No.3912
    // 説明:9a98
    // 0x9a98 (Windows-31J)
    // 0x56d7 (UTF-16BE)
    if (argCheck == '囗') {
        return true;
    }
    // No.3913
    // 説明:9a99
    // 0x9a99 (Windows-31J)
    // 0x56ee (UTF-16BE)
    if (argCheck == '囮') {
        return true;
    }
    // No.3914
    // 説明:9a9a
    // 0x9a9a (Windows-31J)
    // 0x56f9 (UTF-16BE)
    if (argCheck == '囹') {
        return true;
    }
    // No.3915
    // 説明:9a9b
    // 0x9a9b (Windows-31J)
    // 0x5700 (UTF-16BE)
    if (argCheck == '圀') {
        return true;
    }
    // No.3916
    // 説明:9a9c
    // 0x9a9c (Windows-31J)
    // 0x56ff (UTF-16BE)
    if (argCheck == '囿') {
        return true;
    }
    // No.3917
    // 説明:9a9d
    // 0x9a9d (Windows-31J)
    // 0x5704 (UTF-16BE)
    if (argCheck == '圄') {
        return true;
    }
    // No.3918
    // 説明:9a9e
    // 0x9a9e (Windows-31J)
    // 0x5709 (UTF-16BE)
    if (argCheck == '圉') {
        return true;
    }
    // No.3919
    // 説明:9a9f
    // 0x9a9f (Windows-31J)
    // 0x5708 (UTF-16BE)
    if (argCheck == '圈') {
        return true;
    }
    // No.3920
    // 説明:9aa0
    // 0x9aa0 (Windows-31J)
    // 0x570b (UTF-16BE)
    if (argCheck == '國') {
        return true;
    }
    // No.3921
    // 説明:9aa1
    // 0x9aa1 (Windows-31J)
    // 0x570d (UTF-16BE)
    if (argCheck == '圍') {
        return true;
    }
    // No.3922
    // 説明:9aa2
    // 0x9aa2 (Windows-31J)
    // 0x5713 (UTF-16BE)
    if (argCheck == '圓') {
        return true;
    }
    // No.3923
    // 説明:9aa3
    // 0x9aa3 (Windows-31J)
    // 0x5718 (UTF-16BE)
    if (argCheck == '團') {
        return true;
    }
    // No.3924
    // 説明:9aa4
    // 0x9aa4 (Windows-31J)
    // 0x5716 (UTF-16BE)
    if (argCheck == '圖') {
        return true;
    }
    // No.3925
    // 説明:9aa5
    // 0x9aa5 (Windows-31J)
    // 0x55c7 (UTF-16BE)
    if (argCheck == '嗇') {
        return true;
    }
    // No.3926
    // 説明:9aa6
    // 0x9aa6 (Windows-31J)
    // 0x571c (UTF-16BE)
    if (argCheck == '圜') {
        return true;
    }
    // No.3927
    // 説明:9aa7
    // 0x9aa7 (Windows-31J)
    // 0x5726 (UTF-16BE)
    if (argCheck == '圦') {
        return true;
    }
    // No.3928
    // 説明:9aa8
    // 0x9aa8 (Windows-31J)
    // 0x5737 (UTF-16BE)
    if (argCheck == '圷') {
        return true;
    }
    // No.3929
    // 説明:9aa9
    // 0x9aa9 (Windows-31J)
    // 0x5738 (UTF-16BE)
    if (argCheck == '圸') {
        return true;
    }
    // No.3930
    // 説明:9aaa
    // 0x9aaa (Windows-31J)
    // 0x574e (UTF-16BE)
    if (argCheck == '坎') {
        return true;
    }
    // No.3931
    // 説明:9aab
    // 0x9aab (Windows-31J)
    // 0x573b (UTF-16BE)
    if (argCheck == '圻') {
        return true;
    }
    // No.3932
    // 説明:9aac
    // 0x9aac (Windows-31J)
    // 0x5740 (UTF-16BE)
    if (argCheck == '址') {
        return true;
    }
    // No.3933
    // 説明:9aad
    // 0x9aad (Windows-31J)
    // 0x574f (UTF-16BE)
    if (argCheck == '坏') {
        return true;
    }
    // No.3934
    // 説明:9aae
    // 0x9aae (Windows-31J)
    // 0x5769 (UTF-16BE)
    if (argCheck == '坩') {
        return true;
    }
    // No.3935
    // 説明:9aaf
    // 0x9aaf (Windows-31J)
    // 0x57c0 (UTF-16BE)
    if (argCheck == '埀') {
        return true;
    }
    // No.3936
    // 説明:9ab0
    // 0x9ab0 (Windows-31J)
    // 0x5788 (UTF-16BE)
    if (argCheck == '垈') {
        return true;
    }
    // No.3937
    // 説明:9ab1
    // 0x9ab1 (Windows-31J)
    // 0x5761 (UTF-16BE)
    if (argCheck == '坡') {
        return true;
    }
    // No.3938
    // 説明:9ab2
    // 0x9ab2 (Windows-31J)
    // 0x577f (UTF-16BE)
    if (argCheck == '坿') {
        return true;
    }
    // No.3939
    // 説明:9ab3
    // 0x9ab3 (Windows-31J)
    // 0x5789 (UTF-16BE)
    if (argCheck == '垉') {
        return true;
    }
    // No.3940
    // 説明:9ab4
    // 0x9ab4 (Windows-31J)
    // 0x5793 (UTF-16BE)
    if (argCheck == '垓') {
        return true;
    }
    // No.3941
    // 説明:9ab5
    // 0x9ab5 (Windows-31J)
    // 0x57a0 (UTF-16BE)
    if (argCheck == '垠') {
        return true;
    }
    // No.3942
    // 説明:9ab6
    // 0x9ab6 (Windows-31J)
    // 0x57b3 (UTF-16BE)
    if (argCheck == '垳') {
        return true;
    }
    // No.3943
    // 説明:9ab7
    // 0x9ab7 (Windows-31J)
    // 0x57a4 (UTF-16BE)
    if (argCheck == '垤') {
        return true;
    }
    // No.3944
    // 説明:9ab8
    // 0x9ab8 (Windows-31J)
    // 0x57aa (UTF-16BE)
    if (argCheck == '垪') {
        return true;
    }
    // No.3945
    // 説明:9ab9
    // 0x9ab9 (Windows-31J)
    // 0x57b0 (UTF-16BE)
    if (argCheck == '垰') {
        return true;
    }
    // No.3946
    // 説明:9aba
    // 0x9aba (Windows-31J)
    // 0x57c3 (UTF-16BE)
    if (argCheck == '埃') {
        return true;
    }
    // No.3947
    // 説明:9abb
    // 0x9abb (Windows-31J)
    // 0x57c6 (UTF-16BE)
    if (argCheck == '埆') {
        return true;
    }
    // No.3948
    // 説明:9abc
    // 0x9abc (Windows-31J)
    // 0x57d4 (UTF-16BE)
    if (argCheck == '埔') {
        return true;
    }
    // No.3949
    // 説明:9abd
    // 0x9abd (Windows-31J)
    // 0x57d2 (UTF-16BE)
    if (argCheck == '埒') {
        return true;
    }
    // No.3950
    // 説明:9abe
    // 0x9abe (Windows-31J)
    // 0x57d3 (UTF-16BE)
    if (argCheck == '埓') {
        return true;
    }
    // No.3951
    // 説明:9abf
    // 0x9abf (Windows-31J)
    // 0x580a (UTF-16BE)
    if (argCheck == '堊') {
        return true;
    }
    // No.3952
    // 説明:9ac0
    // 0x9ac0 (Windows-31J)
    // 0x57d6 (UTF-16BE)
    if (argCheck == '埖') {
        return true;
    }
    // No.3953
    // 説明:9ac1
    // 0x9ac1 (Windows-31J)
    // 0x57e3 (UTF-16BE)
    if (argCheck == '埣') {
        return true;
    }
    // No.3954
    // 説明:9ac2
    // 0x9ac2 (Windows-31J)
    // 0x580b (UTF-16BE)
    if (argCheck == '堋') {
        return true;
    }
    // No.3955
    // 説明:9ac3
    // 0x9ac3 (Windows-31J)
    // 0x5819 (UTF-16BE)
    if (argCheck == '堙') {
        return true;
    }
    // No.3956
    // 説明:9ac4
    // 0x9ac4 (Windows-31J)
    // 0x581d (UTF-16BE)
    if (argCheck == '堝') {
        return true;
    }
    // No.3957
    // 説明:9ac5
    // 0x9ac5 (Windows-31J)
    // 0x5872 (UTF-16BE)
    if (argCheck == '塲') {
        return true;
    }
    // No.3958
    // 説明:9ac6
    // 0x9ac6 (Windows-31J)
    // 0x5821 (UTF-16BE)
    if (argCheck == '堡') {
        return true;
    }
    // No.3959
    // 説明:9ac7
    // 0x9ac7 (Windows-31J)
    // 0x5862 (UTF-16BE)
    if (argCheck == '塢') {
        return true;
    }
    // No.3960
    // 説明:9ac8
    // 0x9ac8 (Windows-31J)
    // 0x584b (UTF-16BE)
    if (argCheck == '塋') {
        return true;
    }
    // No.3961
    // 説明:9ac9
    // 0x9ac9 (Windows-31J)
    // 0x5870 (UTF-16BE)
    if (argCheck == '塰') {
        return true;
    }
    // No.3962
    // 説明:9aca
    // 0x9aca (Windows-31J)
    // 0x6bc0 (UTF-16BE)
    if (argCheck == '毀') {
        return true;
    }
    // No.3963
    // 説明:9acb
    // 0x9acb (Windows-31J)
    // 0x5852 (UTF-16BE)
    if (argCheck == '塒') {
        return true;
    }
    // No.3964
    // 説明:9acc
    // 0x9acc (Windows-31J)
    // 0x583d (UTF-16BE)
    if (argCheck == '堽') {
        return true;
    }
    // No.3965
    // 説明:9acd
    // 0x9acd (Windows-31J)
    // 0x5879 (UTF-16BE)
    if (argCheck == '塹') {
        return true;
    }
    // No.3966
    // 説明:9ace
    // 0x9ace (Windows-31J)
    // 0x5885 (UTF-16BE)
    if (argCheck == '墅') {
        return true;
    }
    // No.3967
    // 説明:9acf
    // 0x9acf (Windows-31J)
    // 0x58b9 (UTF-16BE)
    if (argCheck == '墹') {
        return true;
    }
    // No.3968
    // 説明:9ad0
    // 0x9ad0 (Windows-31J)
    // 0x589f (UTF-16BE)
    if (argCheck == '墟') {
        return true;
    }
    // No.3969
    // 説明:9ad1
    // 0x9ad1 (Windows-31J)
    // 0x58ab (UTF-16BE)
    if (argCheck == '墫') {
        return true;
    }
    // No.3970
    // 説明:9ad2
    // 0x9ad2 (Windows-31J)
    // 0x58ba (UTF-16BE)
    if (argCheck == '墺') {
        return true;
    }
    // No.3971
    // 説明:9ad3
    // 0x9ad3 (Windows-31J)
    // 0x58de (UTF-16BE)
    if (argCheck == '壞') {
        return true;
    }
    // No.3972
    // 説明:9ad4
    // 0x9ad4 (Windows-31J)
    // 0x58bb (UTF-16BE)
    if (argCheck == '墻') {
        return true;
    }
    // No.3973
    // 説明:9ad5
    // 0x9ad5 (Windows-31J)
    // 0x58b8 (UTF-16BE)
    if (argCheck == '墸') {
        return true;
    }
    // No.3974
    // 説明:9ad6
    // 0x9ad6 (Windows-31J)
    // 0x58ae (UTF-16BE)
    if (argCheck == '墮') {
        return true;
    }
    // No.3975
    // 説明:9ad7
    // 0x9ad7 (Windows-31J)
    // 0x58c5 (UTF-16BE)
    if (argCheck == '壅') {
        return true;
    }
    // No.3976
    // 説明:9ad8
    // 0x9ad8 (Windows-31J)
    // 0x58d3 (UTF-16BE)
    if (argCheck == '壓') {
        return true;
    }
    // No.3977
    // 説明:9ad9
    // 0x9ad9 (Windows-31J)
    // 0x58d1 (UTF-16BE)
    if (argCheck == '壑') {
        return true;
    }
    // No.3978
    // 説明:9ada
    // 0x9ada (Windows-31J)
    // 0x58d7 (UTF-16BE)
    if (argCheck == '壗') {
        return true;
    }
    // No.3979
    // 説明:9adb
    // 0x9adb (Windows-31J)
    // 0x58d9 (UTF-16BE)
    if (argCheck == '壙') {
        return true;
    }
    // No.3980
    // 説明:9adc
    // 0x9adc (Windows-31J)
    // 0x58d8 (UTF-16BE)
    if (argCheck == '壘') {
        return true;
    }
    // No.3981
    // 説明:9add
    // 0x9add (Windows-31J)
    // 0x58e5 (UTF-16BE)
    if (argCheck == '壥') {
        return true;
    }
    // No.3982
    // 説明:9ade
    // 0x9ade (Windows-31J)
    // 0x58dc (UTF-16BE)
    if (argCheck == '壜') {
        return true;
    }
    // No.3983
    // 説明:9adf
    // 0x9adf (Windows-31J)
    // 0x58e4 (UTF-16BE)
    if (argCheck == '壤') {
        return true;
    }
    // No.3984
    // 説明:9ae0
    // 0x9ae0 (Windows-31J)
    // 0x58df (UTF-16BE)
    if (argCheck == '壟') {
        return true;
    }
    // No.3985
    // 説明:9ae1
    // 0x9ae1 (Windows-31J)
    // 0x58ef (UTF-16BE)
    if (argCheck == '壯') {
        return true;
    }
    // No.3986
    // 説明:9ae2
    // 0x9ae2 (Windows-31J)
    // 0x58fa (UTF-16BE)
    if (argCheck == '壺') {
        return true;
    }
    // No.3987
    // 説明:9ae3
    // 0x9ae3 (Windows-31J)
    // 0x58f9 (UTF-16BE)
    if (argCheck == '壹') {
        return true;
    }
    // No.3988
    // 説明:9ae4
    // 0x9ae4 (Windows-31J)
    // 0x58fb (UTF-16BE)
    if (argCheck == '壻') {
        return true;
    }
    // No.3989
    // 説明:9ae5
    // 0x9ae5 (Windows-31J)
    // 0x58fc (UTF-16BE)
    if (argCheck == '壼') {
        return true;
    }
    // No.3990
    // 説明:9ae6
    // 0x9ae6 (Windows-31J)
    // 0x58fd (UTF-16BE)
    if (argCheck == '壽') {
        return true;
    }
    // No.3991
    // 説明:9ae7
    // 0x9ae7 (Windows-31J)
    // 0x5902 (UTF-16BE)
    if (argCheck == '夂') {
        return true;
    }
    // No.3992
    // 説明:9ae8
    // 0x9ae8 (Windows-31J)
    // 0x590a (UTF-16BE)
    if (argCheck == '夊') {
        return true;
    }
    // No.3993
    // 説明:9ae9
    // 0x9ae9 (Windows-31J)
    // 0x5910 (UTF-16BE)
    if (argCheck == '夐') {
        return true;
    }
    // No.3994
    // 説明:9aea
    // 0x9aea (Windows-31J)
    // 0x591b (UTF-16BE)
    if (argCheck == '夛') {
        return true;
    }
    // No.3995
    // 説明:9aeb
    // 0x9aeb (Windows-31J)
    // 0x68a6 (UTF-16BE)
    if (argCheck == '梦') {
        return true;
    }
    // No.3996
    // 説明:9aec
    // 0x9aec (Windows-31J)
    // 0x5925 (UTF-16BE)
    if (argCheck == '夥') {
        return true;
    }
    // No.3997
    // 説明:9aed
    // 0x9aed (Windows-31J)
    // 0x592c (UTF-16BE)
    if (argCheck == '夬') {
        return true;
    }
    // No.3998
    // 説明:9aee
    // 0x9aee (Windows-31J)
    // 0x592d (UTF-16BE)
    if (argCheck == '夭') {
        return true;
    }
    // No.3999
    // 説明:9aef
    // 0x9aef (Windows-31J)
    // 0x5932 (UTF-16BE)
    if (argCheck == '夲') {
        return true;
    }
    // No.4000
    // 説明:9af0
    // 0x9af0 (Windows-31J)
    // 0x5938 (UTF-16BE)
    if (argCheck == '夸') {
        return true;
    }
    // No.4001
    // 説明:9af1
    // 0x9af1 (Windows-31J)
    // 0x593e (UTF-16BE)
    if (argCheck == '夾') {
        return true;
    }
    // No.4002
    // 説明:9af2
    // 0x9af2 (Windows-31J)
    // 0x7ad2 (UTF-16BE)
    if (argCheck == '竒') {
        return true;
    }
    // No.4003
    // 説明:9af3
    // 0x9af3 (Windows-31J)
    // 0x5955 (UTF-16BE)
    if (argCheck == '奕') {
        return true;
    }
    // No.4004
    // 説明:9af4
    // 0x9af4 (Windows-31J)
    // 0x5950 (UTF-16BE)
    if (argCheck == '奐') {
        return true;
    }
    // No.4005
    // 説明:9af5
    // 0x9af5 (Windows-31J)
    // 0x594e (UTF-16BE)
    if (argCheck == '奎') {
        return true;
    }
    // No.4006
    // 説明:9af6
    // 0x9af6 (Windows-31J)
    // 0x595a (UTF-16BE)
    if (argCheck == '奚') {
        return true;
    }
    // No.4007
    // 説明:9af7
    // 0x9af7 (Windows-31J)
    // 0x5958 (UTF-16BE)
    if (argCheck == '奘') {
        return true;
    }
    // No.4008
    // 説明:9af8
    // 0x9af8 (Windows-31J)
    // 0x5962 (UTF-16BE)
    if (argCheck == '奢') {
        return true;
    }
    // No.4009
    // 説明:9af9
    // 0x9af9 (Windows-31J)
    // 0x5960 (UTF-16BE)
    if (argCheck == '奠') {
        return true;
    }
    // No.4010
    // 説明:9afa
    // 0x9afa (Windows-31J)
    // 0x5967 (UTF-16BE)
    if (argCheck == '奧') {
        return true;
    }
    // No.4011
    // 説明:9afb
    // 0x9afb (Windows-31J)
    // 0x596c (UTF-16BE)
    if (argCheck == '奬') {
        return true;
    }
    // No.4012
    // 説明:9afc
    // 0x9afc (Windows-31J)
    // 0x5969 (UTF-16BE)
    if (argCheck == '奩') {
        return true;
    }
    // No.4013
    // 説明:9b40
    // 0x9b40 (Windows-31J)
    // 0x5978 (UTF-16BE)
    if (argCheck == '奸') {
        return true;
    }
    // No.4014
    // 説明:9b41
    // 0x9b41 (Windows-31J)
    // 0x5981 (UTF-16BE)
    if (argCheck == '妁') {
        return true;
    }
    // No.4015
    // 説明:9b42
    // 0x9b42 (Windows-31J)
    // 0x599d (UTF-16BE)
    if (argCheck == '妝') {
        return true;
    }
    // No.4016
    // 説明:9b43
    // 0x9b43 (Windows-31J)
    // 0x4f5e (UTF-16BE)
    if (argCheck == '佞') {
        return true;
    }
    // No.4017
    // 説明:9b44
    // 0x9b44 (Windows-31J)
    // 0x4fab (UTF-16BE)
    if (argCheck == '侫') {
        return true;
    }
    // No.4018
    // 説明:9b45
    // 0x9b45 (Windows-31J)
    // 0x59a3 (UTF-16BE)
    if (argCheck == '妣') {
        return true;
    }
    // No.4019
    // 説明:9b46
    // 0x9b46 (Windows-31J)
    // 0x59b2 (UTF-16BE)
    if (argCheck == '妲') {
        return true;
    }
    // No.4020
    // 説明:9b47
    // 0x9b47 (Windows-31J)
    // 0x59c6 (UTF-16BE)
    if (argCheck == '姆') {
        return true;
    }
    // No.4021
    // 説明:9b48
    // 0x9b48 (Windows-31J)
    // 0x59e8 (UTF-16BE)
    if (argCheck == '姨') {
        return true;
    }
    // No.4022
    // 説明:9b49
    // 0x9b49 (Windows-31J)
    // 0x59dc (UTF-16BE)
    if (argCheck == '姜') {
        return true;
    }
    // No.4023
    // 説明:9b4a
    // 0x9b4a (Windows-31J)
    // 0x598d (UTF-16BE)
    if (argCheck == '妍') {
        return true;
    }
    // No.4024
    // 説明:9b4b
    // 0x9b4b (Windows-31J)
    // 0x59d9 (UTF-16BE)
    if (argCheck == '姙') {
        return true;
    }
    // No.4025
    // 説明:9b4c
    // 0x9b4c (Windows-31J)
    // 0x59da (UTF-16BE)
    if (argCheck == '姚') {
        return true;
    }
    // No.4026
    // 説明:9b4d
    // 0x9b4d (Windows-31J)
    // 0x5a25 (UTF-16BE)
    if (argCheck == '娥') {
        return true;
    }
    // No.4027
    // 説明:9b4e
    // 0x9b4e (Windows-31J)
    // 0x5a1f (UTF-16BE)
    if (argCheck == '娟') {
        return true;
    }
    // No.4028
    // 説明:9b4f
    // 0x9b4f (Windows-31J)
    // 0x5a11 (UTF-16BE)
    if (argCheck == '娑') {
        return true;
    }
    // No.4029
    // 説明:9b50
    // 0x9b50 (Windows-31J)
    // 0x5a1c (UTF-16BE)
    if (argCheck == '娜') {
        return true;
    }
    // No.4030
    // 説明:9b51
    // 0x9b51 (Windows-31J)
    // 0x5a09 (UTF-16BE)
    if (argCheck == '娉') {
        return true;
    }
    // No.4031
    // 説明:9b52
    // 0x9b52 (Windows-31J)
    // 0x5a1a (UTF-16BE)
    if (argCheck == '娚') {
        return true;
    }
    // No.4032
    // 説明:9b53
    // 0x9b53 (Windows-31J)
    // 0x5a40 (UTF-16BE)
    if (argCheck == '婀') {
        return true;
    }
    // No.4033
    // 説明:9b54
    // 0x9b54 (Windows-31J)
    // 0x5a6c (UTF-16BE)
    if (argCheck == '婬') {
        return true;
    }
    // No.4034
    // 説明:9b55
    // 0x9b55 (Windows-31J)
    // 0x5a49 (UTF-16BE)
    if (argCheck == '婉') {
        return true;
    }
    // No.4035
    // 説明:9b56
    // 0x9b56 (Windows-31J)
    // 0x5a35 (UTF-16BE)
    if (argCheck == '娵') {
        return true;
    }
    // No.4036
    // 説明:9b57
    // 0x9b57 (Windows-31J)
    // 0x5a36 (UTF-16BE)
    if (argCheck == '娶') {
        return true;
    }
    // No.4037
    // 説明:9b58
    // 0x9b58 (Windows-31J)
    // 0x5a62 (UTF-16BE)
    if (argCheck == '婢') {
        return true;
    }
    // No.4038
    // 説明:9b59
    // 0x9b59 (Windows-31J)
    // 0x5a6a (UTF-16BE)
    if (argCheck == '婪') {
        return true;
    }
    // No.4039
    // 説明:9b5a
    // 0x9b5a (Windows-31J)
    // 0x5a9a (UTF-16BE)
    if (argCheck == '媚') {
        return true;
    }
    // No.4040
    // 説明:9b5b
    // 0x9b5b (Windows-31J)
    // 0x5abc (UTF-16BE)
    if (argCheck == '媼') {
        return true;
    }
    // No.4041
    // 説明:9b5c
    // 0x9b5c (Windows-31J)
    // 0x5abe (UTF-16BE)
    if (argCheck == '媾') {
        return true;
    }
    // No.4042
    // 説明:9b5d
    // 0x9b5d (Windows-31J)
    // 0x5acb (UTF-16BE)
    if (argCheck == '嫋') {
        return true;
    }
    // No.4043
    // 説明:9b5e
    // 0x9b5e (Windows-31J)
    // 0x5ac2 (UTF-16BE)
    if (argCheck == '嫂') {
        return true;
    }
    // No.4044
    // 説明:9b5f
    // 0x9b5f (Windows-31J)
    // 0x5abd (UTF-16BE)
    if (argCheck == '媽') {
        return true;
    }
    // No.4045
    // 説明:9b60
    // 0x9b60 (Windows-31J)
    // 0x5ae3 (UTF-16BE)
    if (argCheck == '嫣') {
        return true;
    }
    // No.4046
    // 説明:9b61
    // 0x9b61 (Windows-31J)
    // 0x5ad7 (UTF-16BE)
    if (argCheck == '嫗') {
        return true;
    }
    // No.4047
    // 説明:9b62
    // 0x9b62 (Windows-31J)
    // 0x5ae6 (UTF-16BE)
    if (argCheck == '嫦') {
        return true;
    }
    // No.4048
    // 説明:9b63
    // 0x9b63 (Windows-31J)
    // 0x5ae9 (UTF-16BE)
    if (argCheck == '嫩') {
        return true;
    }
    // No.4049
    // 説明:9b64
    // 0x9b64 (Windows-31J)
    // 0x5ad6 (UTF-16BE)
    if (argCheck == '嫖') {
        return true;
    }
    // No.4050
    // 説明:9b65
    // 0x9b65 (Windows-31J)
    // 0x5afa (UTF-16BE)
    if (argCheck == '嫺') {
        return true;
    }
    // No.4051
    // 説明:9b66
    // 0x9b66 (Windows-31J)
    // 0x5afb (UTF-16BE)
    if (argCheck == '嫻') {
        return true;
    }
    // No.4052
    // 説明:9b67
    // 0x9b67 (Windows-31J)
    // 0x5b0c (UTF-16BE)
    if (argCheck == '嬌') {
        return true;
    }
    // No.4053
    // 説明:9b68
    // 0x9b68 (Windows-31J)
    // 0x5b0b (UTF-16BE)
    if (argCheck == '嬋') {
        return true;
    }
    // No.4054
    // 説明:9b69
    // 0x9b69 (Windows-31J)
    // 0x5b16 (UTF-16BE)
    if (argCheck == '嬖') {
        return true;
    }
    // No.4055
    // 説明:9b6a
    // 0x9b6a (Windows-31J)
    // 0x5b32 (UTF-16BE)
    if (argCheck == '嬲') {
        return true;
    }
    // No.4056
    // 説明:9b6b
    // 0x9b6b (Windows-31J)
    // 0x5ad0 (UTF-16BE)
    if (argCheck == '嫐') {
        return true;
    }
    // No.4057
    // 説明:9b6c
    // 0x9b6c (Windows-31J)
    // 0x5b2a (UTF-16BE)
    if (argCheck == '嬪') {
        return true;
    }
    // No.4058
    // 説明:9b6d
    // 0x9b6d (Windows-31J)
    // 0x5b36 (UTF-16BE)
    if (argCheck == '嬶') {
        return true;
    }
    // No.4059
    // 説明:9b6e
    // 0x9b6e (Windows-31J)
    // 0x5b3e (UTF-16BE)
    if (argCheck == '嬾') {
        return true;
    }
    // No.4060
    // 説明:9b6f
    // 0x9b6f (Windows-31J)
    // 0x5b43 (UTF-16BE)
    if (argCheck == '孃') {
        return true;
    }
    // No.4061
    // 説明:9b70
    // 0x9b70 (Windows-31J)
    // 0x5b45 (UTF-16BE)
    if (argCheck == '孅') {
        return true;
    }
    // No.4062
    // 説明:9b71
    // 0x9b71 (Windows-31J)
    // 0x5b40 (UTF-16BE)
    if (argCheck == '孀') {
        return true;
    }
    // No.4063
    // 説明:9b72
    // 0x9b72 (Windows-31J)
    // 0x5b51 (UTF-16BE)
    if (argCheck == '孑') {
        return true;
    }
    // No.4064
    // 説明:9b73
    // 0x9b73 (Windows-31J)
    // 0x5b55 (UTF-16BE)
    if (argCheck == '孕') {
        return true;
    }
    // No.4065
    // 説明:9b74
    // 0x9b74 (Windows-31J)
    // 0x5b5a (UTF-16BE)
    if (argCheck == '孚') {
        return true;
    }
    // No.4066
    // 説明:9b75
    // 0x9b75 (Windows-31J)
    // 0x5b5b (UTF-16BE)
    if (argCheck == '孛') {
        return true;
    }
    // No.4067
    // 説明:9b76
    // 0x9b76 (Windows-31J)
    // 0x5b65 (UTF-16BE)
    if (argCheck == '孥') {
        return true;
    }
    // No.4068
    // 説明:9b77
    // 0x9b77 (Windows-31J)
    // 0x5b69 (UTF-16BE)
    if (argCheck == '孩') {
        return true;
    }
    // No.4069
    // 説明:9b78
    // 0x9b78 (Windows-31J)
    // 0x5b70 (UTF-16BE)
    if (argCheck == '孰') {
        return true;
    }
    // No.4070
    // 説明:9b79
    // 0x9b79 (Windows-31J)
    // 0x5b73 (UTF-16BE)
    if (argCheck == '孳') {
        return true;
    }
    // No.4071
    // 説明:9b7a
    // 0x9b7a (Windows-31J)
    // 0x5b75 (UTF-16BE)
    if (argCheck == '孵') {
        return true;
    }
    // No.4072
    // 説明:9b7b
    // 0x9b7b (Windows-31J)
    // 0x5b78 (UTF-16BE)
    if (argCheck == '學') {
        return true;
    }
    // No.4073
    // 説明:9b7c
    // 0x9b7c (Windows-31J)
    // 0x6588 (UTF-16BE)
    if (argCheck == '斈') {
        return true;
    }
    // No.4074
    // 説明:9b7d
    // 0x9b7d (Windows-31J)
    // 0x5b7a (UTF-16BE)
    if (argCheck == '孺') {
        return true;
    }
    // No.4075
    // 説明:9b7e
    // 0x9b7e (Windows-31J)
    // 0x5b80 (UTF-16BE)
    if (argCheck == '宀') {
        return true;
    }
    // No.4076
    // 説明:9b80
    // 0x9b80 (Windows-31J)
    // 0x5b83 (UTF-16BE)
    if (argCheck == '它') {
        return true;
    }
    // No.4077
    // 説明:9b81
    // 0x9b81 (Windows-31J)
    // 0x5ba6 (UTF-16BE)
    if (argCheck == '宦') {
        return true;
    }
    // No.4078
    // 説明:9b82
    // 0x9b82 (Windows-31J)
    // 0x5bb8 (UTF-16BE)
    if (argCheck == '宸') {
        return true;
    }
    // No.4079
    // 説明:9b83
    // 0x9b83 (Windows-31J)
    // 0x5bc3 (UTF-16BE)
    if (argCheck == '寃') {
        return true;
    }
    // No.4080
    // 説明:9b84
    // 0x9b84 (Windows-31J)
    // 0x5bc7 (UTF-16BE)
    if (argCheck == '寇') {
        return true;
    }
    // No.4081
    // 説明:9b85
    // 0x9b85 (Windows-31J)
    // 0x5bc9 (UTF-16BE)
    if (argCheck == '寉') {
        return true;
    }
    // No.4082
    // 説明:9b86
    // 0x9b86 (Windows-31J)
    // 0x5bd4 (UTF-16BE)
    if (argCheck == '寔') {
        return true;
    }
    // No.4083
    // 説明:9b87
    // 0x9b87 (Windows-31J)
    // 0x5bd0 (UTF-16BE)
    if (argCheck == '寐') {
        return true;
    }
    // No.4084
    // 説明:9b88
    // 0x9b88 (Windows-31J)
    // 0x5be4 (UTF-16BE)
    if (argCheck == '寤') {
        return true;
    }
    // No.4085
    // 説明:9b89
    // 0x9b89 (Windows-31J)
    // 0x5be6 (UTF-16BE)
    if (argCheck == '實') {
        return true;
    }
    // No.4086
    // 説明:9b8a
    // 0x9b8a (Windows-31J)
    // 0x5be2 (UTF-16BE)
    if (argCheck == '寢') {
        return true;
    }
    // No.4087
    // 説明:9b8b
    // 0x9b8b (Windows-31J)
    // 0x5bde (UTF-16BE)
    if (argCheck == '寞') {
        return true;
    }
    // No.4088
    // 説明:9b8c
    // 0x9b8c (Windows-31J)
    // 0x5be5 (UTF-16BE)
    if (argCheck == '寥') {
        return true;
    }
    // No.4089
    // 説明:9b8d
    // 0x9b8d (Windows-31J)
    // 0x5beb (UTF-16BE)
    if (argCheck == '寫') {
        return true;
    }
    // No.4090
    // 説明:9b8e
    // 0x9b8e (Windows-31J)
    // 0x5bf0 (UTF-16BE)
    if (argCheck == '寰') {
        return true;
    }
    // No.4091
    // 説明:9b8f
    // 0x9b8f (Windows-31J)
    // 0x5bf6 (UTF-16BE)
    if (argCheck == '寶') {
        return true;
    }
    // No.4092
    // 説明:9b90
    // 0x9b90 (Windows-31J)
    // 0x5bf3 (UTF-16BE)
    if (argCheck == '寳') {
        return true;
    }
    // No.4093
    // 説明:9b91
    // 0x9b91 (Windows-31J)
    // 0x5c05 (UTF-16BE)
    if (argCheck == '尅') {
        return true;
    }
    // No.4094
    // 説明:9b92
    // 0x9b92 (Windows-31J)
    // 0x5c07 (UTF-16BE)
    if (argCheck == '將') {
        return true;
    }
    // No.4095
    // 説明:9b93
    // 0x9b93 (Windows-31J)
    // 0x5c08 (UTF-16BE)
    if (argCheck == '專') {
        return true;
    }
    // No.4096
    // 説明:9b94
    // 0x9b94 (Windows-31J)
    // 0x5c0d (UTF-16BE)
    if (argCheck == '對') {
        return true;
    }
    // No.4097
    // 説明:9b95
    // 0x9b95 (Windows-31J)
    // 0x5c13 (UTF-16BE)
    if (argCheck == '尓') {
        return true;
    }
    // No.4098
    // 説明:9b96
    // 0x9b96 (Windows-31J)
    // 0x5c20 (UTF-16BE)
    if (argCheck == '尠') {
        return true;
    }
    // No.4099
    // 説明:9b97
    // 0x9b97 (Windows-31J)
    // 0x5c22 (UTF-16BE)
    if (argCheck == '尢') {
        return true;
    }
    // No.4100
    // 説明:9b98
    // 0x9b98 (Windows-31J)
    // 0x5c28 (UTF-16BE)
    if (argCheck == '尨') {
        return true;
    }
    // No.4101
    // 説明:9b99
    // 0x9b99 (Windows-31J)
    // 0x5c38 (UTF-16BE)
    if (argCheck == '尸') {
        return true;
    }
    // No.4102
    // 説明:9b9a
    // 0x9b9a (Windows-31J)
    // 0x5c39 (UTF-16BE)
    if (argCheck == '尹') {
        return true;
    }
    // No.4103
    // 説明:9b9b
    // 0x9b9b (Windows-31J)
    // 0x5c41 (UTF-16BE)
    if (argCheck == '屁') {
        return true;
    }
    // No.4104
    // 説明:9b9c
    // 0x9b9c (Windows-31J)
    // 0x5c46 (UTF-16BE)
    if (argCheck == '屆') {
        return true;
    }
    // No.4105
    // 説明:9b9d
    // 0x9b9d (Windows-31J)
    // 0x5c4e (UTF-16BE)
    if (argCheck == '屎') {
        return true;
    }
    // No.4106
    // 説明:9b9e
    // 0x9b9e (Windows-31J)
    // 0x5c53 (UTF-16BE)
    if (argCheck == '屓') {
        return true;
    }
    // No.4107
    // 説明:9b9f
    // 0x9b9f (Windows-31J)
    // 0x5c50 (UTF-16BE)
    if (argCheck == '屐') {
        return true;
    }
    // No.4108
    // 説明:9ba0
    // 0x9ba0 (Windows-31J)
    // 0x5c4f (UTF-16BE)
    if (argCheck == '屏') {
        return true;
    }
    // No.4109
    // 説明:9ba1
    // 0x9ba1 (Windows-31J)
    // 0x5b71 (UTF-16BE)
    if (argCheck == '孱') {
        return true;
    }
    // No.4110
    // 説明:9ba2
    // 0x9ba2 (Windows-31J)
    // 0x5c6c (UTF-16BE)
    if (argCheck == '屬') {
        return true;
    }
    // No.4111
    // 説明:9ba3
    // 0x9ba3 (Windows-31J)
    // 0x5c6e (UTF-16BE)
    if (argCheck == '屮') {
        return true;
    }
    // No.4112
    // 説明:9ba4
    // 0x9ba4 (Windows-31J)
    // 0x4e62 (UTF-16BE)
    if (argCheck == '乢') {
        return true;
    }
    // No.4113
    // 説明:9ba5
    // 0x9ba5 (Windows-31J)
    // 0x5c76 (UTF-16BE)
    if (argCheck == '屶') {
        return true;
    }
    // No.4114
    // 説明:9ba6
    // 0x9ba6 (Windows-31J)
    // 0x5c79 (UTF-16BE)
    if (argCheck == '屹') {
        return true;
    }
    // No.4115
    // 説明:9ba7
    // 0x9ba7 (Windows-31J)
    // 0x5c8c (UTF-16BE)
    if (argCheck == '岌') {
        return true;
    }
    // No.4116
    // 説明:9ba8
    // 0x9ba8 (Windows-31J)
    // 0x5c91 (UTF-16BE)
    if (argCheck == '岑') {
        return true;
    }
    // No.4117
    // 説明:9ba9
    // 0x9ba9 (Windows-31J)
    // 0x5c94 (UTF-16BE)
    if (argCheck == '岔') {
        return true;
    }
    // No.4118
    // 説明:9baa
    // 0x9baa (Windows-31J)
    // 0x599b (UTF-16BE)
    if (argCheck == '妛') {
        return true;
    }
    // No.4119
    // 説明:9bab
    // 0x9bab (Windows-31J)
    // 0x5cab (UTF-16BE)
    if (argCheck == '岫') {
        return true;
    }
    // No.4120
    // 説明:9bac
    // 0x9bac (Windows-31J)
    // 0x5cbb (UTF-16BE)
    if (argCheck == '岻') {
        return true;
    }
    // No.4121
    // 説明:9bad
    // 0x9bad (Windows-31J)
    // 0x5cb6 (UTF-16BE)
    if (argCheck == '岶') {
        return true;
    }
    // No.4122
    // 説明:9bae
    // 0x9bae (Windows-31J)
    // 0x5cbc (UTF-16BE)
    if (argCheck == '岼') {
        return true;
    }
    // No.4123
    // 説明:9baf
    // 0x9baf (Windows-31J)
    // 0x5cb7 (UTF-16BE)
    if (argCheck == '岷') {
        return true;
    }
    // No.4124
    // 説明:9bb0
    // 0x9bb0 (Windows-31J)
    // 0x5cc5 (UTF-16BE)
    if (argCheck == '峅') {
        return true;
    }
    // No.4125
    // 説明:9bb1
    // 0x9bb1 (Windows-31J)
    // 0x5cbe (UTF-16BE)
    if (argCheck == '岾') {
        return true;
    }
    // No.4126
    // 説明:9bb2
    // 0x9bb2 (Windows-31J)
    // 0x5cc7 (UTF-16BE)
    if (argCheck == '峇') {
        return true;
    }
    // No.4127
    // 説明:9bb3
    // 0x9bb3 (Windows-31J)
    // 0x5cd9 (UTF-16BE)
    if (argCheck == '峙') {
        return true;
    }
    // No.4128
    // 説明:9bb4
    // 0x9bb4 (Windows-31J)
    // 0x5ce9 (UTF-16BE)
    if (argCheck == '峩') {
        return true;
    }
    // No.4129
    // 説明:9bb5
    // 0x9bb5 (Windows-31J)
    // 0x5cfd (UTF-16BE)
    if (argCheck == '峽') {
        return true;
    }
    // No.4130
    // 説明:9bb6
    // 0x9bb6 (Windows-31J)
    // 0x5cfa (UTF-16BE)
    if (argCheck == '峺') {
        return true;
    }
    // No.4131
    // 説明:9bb7
    // 0x9bb7 (Windows-31J)
    // 0x5ced (UTF-16BE)
    if (argCheck == '峭') {
        return true;
    }
    // No.4132
    // 説明:9bb8
    // 0x9bb8 (Windows-31J)
    // 0x5d8c (UTF-16BE)
    if (argCheck == '嶌') {
        return true;
    }
    // No.4133
    // 説明:9bb9
    // 0x9bb9 (Windows-31J)
    // 0x5cea (UTF-16BE)
    if (argCheck == '峪') {
        return true;
    }
    // No.4134
    // 説明:9bba
    // 0x9bba (Windows-31J)
    // 0x5d0b (UTF-16BE)
    if (argCheck == '崋') {
        return true;
    }
    // No.4135
    // 説明:9bbb
    // 0x9bbb (Windows-31J)
    // 0x5d15 (UTF-16BE)
    if (argCheck == '崕') {
        return true;
    }
    // No.4136
    // 説明:9bbc
    // 0x9bbc (Windows-31J)
    // 0x5d17 (UTF-16BE)
    if (argCheck == '崗') {
        return true;
    }
    // No.4137
    // 説明:9bbd
    // 0x9bbd (Windows-31J)
    // 0x5d5c (UTF-16BE)
    if (argCheck == '嵜') {
        return true;
    }
    // No.4138
    // 説明:9bbe
    // 0x9bbe (Windows-31J)
    // 0x5d1f (UTF-16BE)
    if (argCheck == '崟') {
        return true;
    }
    // No.4139
    // 説明:9bbf
    // 0x9bbf (Windows-31J)
    // 0x5d1b (UTF-16BE)
    if (argCheck == '崛') {
        return true;
    }
    // No.4140
    // 説明:9bc0
    // 0x9bc0 (Windows-31J)
    // 0x5d11 (UTF-16BE)
    if (argCheck == '崑') {
        return true;
    }
    // No.4141
    // 説明:9bc1
    // 0x9bc1 (Windows-31J)
    // 0x5d14 (UTF-16BE)
    if (argCheck == '崔') {
        return true;
    }
    // No.4142
    // 説明:9bc2
    // 0x9bc2 (Windows-31J)
    // 0x5d22 (UTF-16BE)
    if (argCheck == '崢') {
        return true;
    }
    // No.4143
    // 説明:9bc3
    // 0x9bc3 (Windows-31J)
    // 0x5d1a (UTF-16BE)
    if (argCheck == '崚') {
        return true;
    }
    // No.4144
    // 説明:9bc4
    // 0x9bc4 (Windows-31J)
    // 0x5d19 (UTF-16BE)
    if (argCheck == '崙') {
        return true;
    }
    // No.4145
    // 説明:9bc5
    // 0x9bc5 (Windows-31J)
    // 0x5d18 (UTF-16BE)
    if (argCheck == '崘') {
        return true;
    }
    // No.4146
    // 説明:9bc6
    // 0x9bc6 (Windows-31J)
    // 0x5d4c (UTF-16BE)
    if (argCheck == '嵌') {
        return true;
    }
    // No.4147
    // 説明:9bc7
    // 0x9bc7 (Windows-31J)
    // 0x5d52 (UTF-16BE)
    if (argCheck == '嵒') {
        return true;
    }
    // No.4148
    // 説明:9bc8
    // 0x9bc8 (Windows-31J)
    // 0x5d4e (UTF-16BE)
    if (argCheck == '嵎') {
        return true;
    }
    // No.4149
    // 説明:9bc9
    // 0x9bc9 (Windows-31J)
    // 0x5d4b (UTF-16BE)
    if (argCheck == '嵋') {
        return true;
    }
    // No.4150
    // 説明:9bca
    // 0x9bca (Windows-31J)
    // 0x5d6c (UTF-16BE)
    if (argCheck == '嵬') {
        return true;
    }
    // No.4151
    // 説明:9bcb
    // 0x9bcb (Windows-31J)
    // 0x5d73 (UTF-16BE)
    if (argCheck == '嵳') {
        return true;
    }
    // No.4152
    // 説明:9bcc
    // 0x9bcc (Windows-31J)
    // 0x5d76 (UTF-16BE)
    if (argCheck == '嵶') {
        return true;
    }
    // No.4153
    // 説明:9bcd
    // 0x9bcd (Windows-31J)
    // 0x5d87 (UTF-16BE)
    if (argCheck == '嶇') {
        return true;
    }
    // No.4154
    // 説明:9bce
    // 0x9bce (Windows-31J)
    // 0x5d84 (UTF-16BE)
    if (argCheck == '嶄') {
        return true;
    }
    // No.4155
    // 説明:9bcf
    // 0x9bcf (Windows-31J)
    // 0x5d82 (UTF-16BE)
    if (argCheck == '嶂') {
        return true;
    }
    // No.4156
    // 説明:9bd0
    // 0x9bd0 (Windows-31J)
    // 0x5da2 (UTF-16BE)
    if (argCheck == '嶢') {
        return true;
    }
    // No.4157
    // 説明:9bd1
    // 0x9bd1 (Windows-31J)
    // 0x5d9d (UTF-16BE)
    if (argCheck == '嶝') {
        return true;
    }
    // No.4158
    // 説明:9bd2
    // 0x9bd2 (Windows-31J)
    // 0x5dac (UTF-16BE)
    if (argCheck == '嶬') {
        return true;
    }
    // No.4159
    // 説明:9bd3
    // 0x9bd3 (Windows-31J)
    // 0x5dae (UTF-16BE)
    if (argCheck == '嶮') {
        return true;
    }
    // No.4160
    // 説明:9bd4
    // 0x9bd4 (Windows-31J)
    // 0x5dbd (UTF-16BE)
    if (argCheck == '嶽') {
        return true;
    }
    // No.4161
    // 説明:9bd5
    // 0x9bd5 (Windows-31J)
    // 0x5d90 (UTF-16BE)
    if (argCheck == '嶐') {
        return true;
    }
    // No.4162
    // 説明:9bd6
    // 0x9bd6 (Windows-31J)
    // 0x5db7 (UTF-16BE)
    if (argCheck == '嶷') {
        return true;
    }
    // No.4163
    // 説明:9bd7
    // 0x9bd7 (Windows-31J)
    // 0x5dbc (UTF-16BE)
    if (argCheck == '嶼') {
        return true;
    }
    // No.4164
    // 説明:9bd8
    // 0x9bd8 (Windows-31J)
    // 0x5dc9 (UTF-16BE)
    if (argCheck == '巉') {
        return true;
    }
    // No.4165
    // 説明:9bd9
    // 0x9bd9 (Windows-31J)
    // 0x5dcd (UTF-16BE)
    if (argCheck == '巍') {
        return true;
    }
    // No.4166
    // 説明:9bda
    // 0x9bda (Windows-31J)
    // 0x5dd3 (UTF-16BE)
    if (argCheck == '巓') {
        return true;
    }
    // No.4167
    // 説明:9bdb
    // 0x9bdb (Windows-31J)
    // 0x5dd2 (UTF-16BE)
    if (argCheck == '巒') {
        return true;
    }
    // No.4168
    // 説明:9bdc
    // 0x9bdc (Windows-31J)
    // 0x5dd6 (UTF-16BE)
    if (argCheck == '巖') {
        return true;
    }
    // No.4169
    // 説明:9bdd
    // 0x9bdd (Windows-31J)
    // 0x5ddb (UTF-16BE)
    if (argCheck == '巛') {
        return true;
    }
    // No.4170
    // 説明:9bde
    // 0x9bde (Windows-31J)
    // 0x5deb (UTF-16BE)
    if (argCheck == '巫') {
        return true;
    }
    // No.4171
    // 説明:9bdf
    // 0x9bdf (Windows-31J)
    // 0x5df2 (UTF-16BE)
    if (argCheck == '已') {
        return true;
    }
    // No.4172
    // 説明:9be0
    // 0x9be0 (Windows-31J)
    // 0x5df5 (UTF-16BE)
    if (argCheck == '巵') {
        return true;
    }
    // No.4173
    // 説明:9be1
    // 0x9be1 (Windows-31J)
    // 0x5e0b (UTF-16BE)
    if (argCheck == '帋') {
        return true;
    }
    // No.4174
    // 説明:9be2
    // 0x9be2 (Windows-31J)
    // 0x5e1a (UTF-16BE)
    if (argCheck == '帚') {
        return true;
    }
    // No.4175
    // 説明:9be3
    // 0x9be3 (Windows-31J)
    // 0x5e19 (UTF-16BE)
    if (argCheck == '帙') {
        return true;
    }
    // No.4176
    // 説明:9be4
    // 0x9be4 (Windows-31J)
    // 0x5e11 (UTF-16BE)
    if (argCheck == '帑') {
        return true;
    }
    // No.4177
    // 説明:9be5
    // 0x9be5 (Windows-31J)
    // 0x5e1b (UTF-16BE)
    if (argCheck == '帛') {
        return true;
    }
    // No.4178
    // 説明:9be6
    // 0x9be6 (Windows-31J)
    // 0x5e36 (UTF-16BE)
    if (argCheck == '帶') {
        return true;
    }
    // No.4179
    // 説明:9be7
    // 0x9be7 (Windows-31J)
    // 0x5e37 (UTF-16BE)
    if (argCheck == '帷') {
        return true;
    }
    // No.4180
    // 説明:9be8
    // 0x9be8 (Windows-31J)
    // 0x5e44 (UTF-16BE)
    if (argCheck == '幄') {
        return true;
    }
    // No.4181
    // 説明:9be9
    // 0x9be9 (Windows-31J)
    // 0x5e43 (UTF-16BE)
    if (argCheck == '幃') {
        return true;
    }
    // No.4182
    // 説明:9bea
    // 0x9bea (Windows-31J)
    // 0x5e40 (UTF-16BE)
    if (argCheck == '幀') {
        return true;
    }
    // No.4183
    // 説明:9beb
    // 0x9beb (Windows-31J)
    // 0x5e4e (UTF-16BE)
    if (argCheck == '幎') {
        return true;
    }
    // No.4184
    // 説明:9bec
    // 0x9bec (Windows-31J)
    // 0x5e57 (UTF-16BE)
    if (argCheck == '幗') {
        return true;
    }
    // No.4185
    // 説明:9bed
    // 0x9bed (Windows-31J)
    // 0x5e54 (UTF-16BE)
    if (argCheck == '幔') {
        return true;
    }
    // No.4186
    // 説明:9bee
    // 0x9bee (Windows-31J)
    // 0x5e5f (UTF-16BE)
    if (argCheck == '幟') {
        return true;
    }
    // No.4187
    // 説明:9bef
    // 0x9bef (Windows-31J)
    // 0x5e62 (UTF-16BE)
    if (argCheck == '幢') {
        return true;
    }
    // No.4188
    // 説明:9bf0
    // 0x9bf0 (Windows-31J)
    // 0x5e64 (UTF-16BE)
    if (argCheck == '幤') {
        return true;
    }
    // No.4189
    // 説明:9bf1
    // 0x9bf1 (Windows-31J)
    // 0x5e47 (UTF-16BE)
    if (argCheck == '幇') {
        return true;
    }
    // No.4190
    // 説明:9bf2
    // 0x9bf2 (Windows-31J)
    // 0x5e75 (UTF-16BE)
    if (argCheck == '幵') {
        return true;
    }
    // No.4191
    // 説明:9bf3
    // 0x9bf3 (Windows-31J)
    // 0x5e76 (UTF-16BE)
    if (argCheck == '并') {
        return true;
    }
    // No.4192
    // 説明:9bf4
    // 0x9bf4 (Windows-31J)
    // 0x5e7a (UTF-16BE)
    if (argCheck == '幺') {
        return true;
    }
    // No.4193
    // 説明:9bf5
    // 0x9bf5 (Windows-31J)
    // 0x9ebc (UTF-16BE)
    if (argCheck == '麼') {
        return true;
    }
    // No.4194
    // 説明:9bf6
    // 0x9bf6 (Windows-31J)
    // 0x5e7f (UTF-16BE)
    if (argCheck == '广') {
        return true;
    }
    // No.4195
    // 説明:9bf7
    // 0x9bf7 (Windows-31J)
    // 0x5ea0 (UTF-16BE)
    if (argCheck == '庠') {
        return true;
    }
    // No.4196
    // 説明:9bf8
    // 0x9bf8 (Windows-31J)
    // 0x5ec1 (UTF-16BE)
    if (argCheck == '廁') {
        return true;
    }
    // No.4197
    // 説明:9bf9
    // 0x9bf9 (Windows-31J)
    // 0x5ec2 (UTF-16BE)
    if (argCheck == '廂') {
        return true;
    }
    // No.4198
    // 説明:9bfa
    // 0x9bfa (Windows-31J)
    // 0x5ec8 (UTF-16BE)
    if (argCheck == '廈') {
        return true;
    }
    // No.4199
    // 説明:9bfb
    // 0x9bfb (Windows-31J)
    // 0x5ed0 (UTF-16BE)
    if (argCheck == '廐') {
        return true;
    }
    // No.4200
    // 説明:9bfc
    // 0x9bfc (Windows-31J)
    // 0x5ecf (UTF-16BE)
    if (argCheck == '廏') {
        return true;
    }
    // No.4201
    // 説明:9c40
    // 0x9c40 (Windows-31J)
    // 0x5ed6 (UTF-16BE)
    if (argCheck == '廖') {
        return true;
    }
    // No.4202
    // 説明:9c41
    // 0x9c41 (Windows-31J)
    // 0x5ee3 (UTF-16BE)
    if (argCheck == '廣') {
        return true;
    }
    // No.4203
    // 説明:9c42
    // 0x9c42 (Windows-31J)
    // 0x5edd (UTF-16BE)
    if (argCheck == '廝') {
        return true;
    }
    // No.4204
    // 説明:9c43
    // 0x9c43 (Windows-31J)
    // 0x5eda (UTF-16BE)
    if (argCheck == '廚') {
        return true;
    }
    // No.4205
    // 説明:9c44
    // 0x9c44 (Windows-31J)
    // 0x5edb (UTF-16BE)
    if (argCheck == '廛') {
        return true;
    }
    // No.4206
    // 説明:9c45
    // 0x9c45 (Windows-31J)
    // 0x5ee2 (UTF-16BE)
    if (argCheck == '廢') {
        return true;
    }
    // No.4207
    // 説明:9c46
    // 0x9c46 (Windows-31J)
    // 0x5ee1 (UTF-16BE)
    if (argCheck == '廡') {
        return true;
    }
    // No.4208
    // 説明:9c47
    // 0x9c47 (Windows-31J)
    // 0x5ee8 (UTF-16BE)
    if (argCheck == '廨') {
        return true;
    }
    // No.4209
    // 説明:9c48
    // 0x9c48 (Windows-31J)
    // 0x5ee9 (UTF-16BE)
    if (argCheck == '廩') {
        return true;
    }
    // No.4210
    // 説明:9c49
    // 0x9c49 (Windows-31J)
    // 0x5eec (UTF-16BE)
    if (argCheck == '廬') {
        return true;
    }
    // No.4211
    // 説明:9c4a
    // 0x9c4a (Windows-31J)
    // 0x5ef1 (UTF-16BE)
    if (argCheck == '廱') {
        return true;
    }
    // No.4212
    // 説明:9c4b
    // 0x9c4b (Windows-31J)
    // 0x5ef3 (UTF-16BE)
    if (argCheck == '廳') {
        return true;
    }
    // No.4213
    // 説明:9c4c
    // 0x9c4c (Windows-31J)
    // 0x5ef0 (UTF-16BE)
    if (argCheck == '廰') {
        return true;
    }
    // No.4214
    // 説明:9c4d
    // 0x9c4d (Windows-31J)
    // 0x5ef4 (UTF-16BE)
    if (argCheck == '廴') {
        return true;
    }
    // No.4215
    // 説明:9c4e
    // 0x9c4e (Windows-31J)
    // 0x5ef8 (UTF-16BE)
    if (argCheck == '廸') {
        return true;
    }
    // No.4216
    // 説明:9c4f
    // 0x9c4f (Windows-31J)
    // 0x5efe (UTF-16BE)
    if (argCheck == '廾') {
        return true;
    }
    // No.4217
    // 説明:9c50
    // 0x9c50 (Windows-31J)
    // 0x5f03 (UTF-16BE)
    if (argCheck == '弃') {
        return true;
    }
    // No.4218
    // 説明:9c51
    // 0x9c51 (Windows-31J)
    // 0x5f09 (UTF-16BE)
    if (argCheck == '弉') {
        return true;
    }
    // No.4219
    // 説明:9c52
    // 0x9c52 (Windows-31J)
    // 0x5f5d (UTF-16BE)
    if (argCheck == '彝') {
        return true;
    }
    // No.4220
    // 説明:9c53
    // 0x9c53 (Windows-31J)
    // 0x5f5c (UTF-16BE)
    if (argCheck == '彜') {
        return true;
    }
    // No.4221
    // 説明:9c54
    // 0x9c54 (Windows-31J)
    // 0x5f0b (UTF-16BE)
    if (argCheck == '弋') {
        return true;
    }
    // No.4222
    // 説明:9c55
    // 0x9c55 (Windows-31J)
    // 0x5f11 (UTF-16BE)
    if (argCheck == '弑') {
        return true;
    }
    // No.4223
    // 説明:9c56
    // 0x9c56 (Windows-31J)
    // 0x5f16 (UTF-16BE)
    if (argCheck == '弖') {
        return true;
    }
    // No.4224
    // 説明:9c57
    // 0x9c57 (Windows-31J)
    // 0x5f29 (UTF-16BE)
    if (argCheck == '弩') {
        return true;
    }
    // No.4225
    // 説明:9c58
    // 0x9c58 (Windows-31J)
    // 0x5f2d (UTF-16BE)
    if (argCheck == '弭') {
        return true;
    }
    // No.4226
    // 説明:9c59
    // 0x9c59 (Windows-31J)
    // 0x5f38 (UTF-16BE)
    if (argCheck == '弸') {
        return true;
    }
    // No.4227
    // 説明:9c5a
    // 0x9c5a (Windows-31J)
    // 0x5f41 (UTF-16BE)
    if (argCheck == '彁') {
        return true;
    }
    // No.4228
    // 説明:9c5b
    // 0x9c5b (Windows-31J)
    // 0x5f48 (UTF-16BE)
    if (argCheck == '彈') {
        return true;
    }
    // No.4229
    // 説明:9c5c
    // 0x9c5c (Windows-31J)
    // 0x5f4c (UTF-16BE)
    if (argCheck == '彌') {
        return true;
    }
    // No.4230
    // 説明:9c5d
    // 0x9c5d (Windows-31J)
    // 0x5f4e (UTF-16BE)
    if (argCheck == '彎') {
        return true;
    }
    // No.4231
    // 説明:9c5e
    // 0x9c5e (Windows-31J)
    // 0x5f2f (UTF-16BE)
    if (argCheck == '弯') {
        return true;
    }
    // No.4232
    // 説明:9c5f
    // 0x9c5f (Windows-31J)
    // 0x5f51 (UTF-16BE)
    if (argCheck == '彑') {
        return true;
    }
    // No.4233
    // 説明:9c60
    // 0x9c60 (Windows-31J)
    // 0x5f56 (UTF-16BE)
    if (argCheck == '彖') {
        return true;
    }
    // No.4234
    // 説明:9c61
    // 0x9c61 (Windows-31J)
    // 0x5f57 (UTF-16BE)
    if (argCheck == '彗') {
        return true;
    }
    // No.4235
    // 説明:9c62
    // 0x9c62 (Windows-31J)
    // 0x5f59 (UTF-16BE)
    if (argCheck == '彙') {
        return true;
    }
    // No.4236
    // 説明:9c63
    // 0x9c63 (Windows-31J)
    // 0x5f61 (UTF-16BE)
    if (argCheck == '彡') {
        return true;
    }
    // No.4237
    // 説明:9c64
    // 0x9c64 (Windows-31J)
    // 0x5f6d (UTF-16BE)
    if (argCheck == '彭') {
        return true;
    }
    // No.4238
    // 説明:9c65
    // 0x9c65 (Windows-31J)
    // 0x5f73 (UTF-16BE)
    if (argCheck == '彳') {
        return true;
    }
    // No.4239
    // 説明:9c66
    // 0x9c66 (Windows-31J)
    // 0x5f77 (UTF-16BE)
    if (argCheck == '彷') {
        return true;
    }
    // No.4240
    // 説明:9c67
    // 0x9c67 (Windows-31J)
    // 0x5f83 (UTF-16BE)
    if (argCheck == '徃') {
        return true;
    }
    // No.4241
    // 説明:9c68
    // 0x9c68 (Windows-31J)
    // 0x5f82 (UTF-16BE)
    if (argCheck == '徂') {
        return true;
    }
    // No.4242
    // 説明:9c69
    // 0x9c69 (Windows-31J)
    // 0x5f7f (UTF-16BE)
    if (argCheck == '彿') {
        return true;
    }
    // No.4243
    // 説明:9c6a
    // 0x9c6a (Windows-31J)
    // 0x5f8a (UTF-16BE)
    if (argCheck == '徊') {
        return true;
    }
    // No.4244
    // 説明:9c6b
    // 0x9c6b (Windows-31J)
    // 0x5f88 (UTF-16BE)
    if (argCheck == '很') {
        return true;
    }
    // No.4245
    // 説明:9c6c
    // 0x9c6c (Windows-31J)
    // 0x5f91 (UTF-16BE)
    if (argCheck == '徑') {
        return true;
    }
    // No.4246
    // 説明:9c6d
    // 0x9c6d (Windows-31J)
    // 0x5f87 (UTF-16BE)
    if (argCheck == '徇') {
        return true;
    }
    // No.4247
    // 説明:9c6e
    // 0x9c6e (Windows-31J)
    // 0x5f9e (UTF-16BE)
    if (argCheck == '從') {
        return true;
    }
    // No.4248
    // 説明:9c6f
    // 0x9c6f (Windows-31J)
    // 0x5f99 (UTF-16BE)
    if (argCheck == '徙') {
        return true;
    }
    // No.4249
    // 説明:9c70
    // 0x9c70 (Windows-31J)
    // 0x5f98 (UTF-16BE)
    if (argCheck == '徘') {
        return true;
    }
    // No.4250
    // 説明:9c71
    // 0x9c71 (Windows-31J)
    // 0x5fa0 (UTF-16BE)
    if (argCheck == '徠') {
        return true;
    }
    // No.4251
    // 説明:9c72
    // 0x9c72 (Windows-31J)
    // 0x5fa8 (UTF-16BE)
    if (argCheck == '徨') {
        return true;
    }
    // No.4252
    // 説明:9c73
    // 0x9c73 (Windows-31J)
    // 0x5fad (UTF-16BE)
    if (argCheck == '徭') {
        return true;
    }
    // No.4253
    // 説明:9c74
    // 0x9c74 (Windows-31J)
    // 0x5fbc (UTF-16BE)
    if (argCheck == '徼') {
        return true;
    }
    // No.4254
    // 説明:9c75
    // 0x9c75 (Windows-31J)
    // 0x5fd6 (UTF-16BE)
    if (argCheck == '忖') {
        return true;
    }
    // No.4255
    // 説明:9c76
    // 0x9c76 (Windows-31J)
    // 0x5ffb (UTF-16BE)
    if (argCheck == '忻') {
        return true;
    }
    // No.4256
    // 説明:9c77
    // 0x9c77 (Windows-31J)
    // 0x5fe4 (UTF-16BE)
    if (argCheck == '忤') {
        return true;
    }
    // No.4257
    // 説明:9c78
    // 0x9c78 (Windows-31J)
    // 0x5ff8 (UTF-16BE)
    if (argCheck == '忸') {
        return true;
    }
    // No.4258
    // 説明:9c79
    // 0x9c79 (Windows-31J)
    // 0x5ff1 (UTF-16BE)
    if (argCheck == '忱') {
        return true;
    }
    // No.4259
    // 説明:9c7a
    // 0x9c7a (Windows-31J)
    // 0x5fdd (UTF-16BE)
    if (argCheck == '忝') {
        return true;
    }
    // No.4260
    // 説明:9c7b
    // 0x9c7b (Windows-31J)
    // 0x60b3 (UTF-16BE)
    if (argCheck == '悳') {
        return true;
    }
    // No.4261
    // 説明:9c7c
    // 0x9c7c (Windows-31J)
    // 0x5fff (UTF-16BE)
    if (argCheck == '忿') {
        return true;
    }
    // No.4262
    // 説明:9c7d
    // 0x9c7d (Windows-31J)
    // 0x6021 (UTF-16BE)
    if (argCheck == '怡') {
        return true;
    }
    // No.4263
    // 説明:9c7e
    // 0x9c7e (Windows-31J)
    // 0x6060 (UTF-16BE)
    if (argCheck == '恠') {
        return true;
    }
    // No.4264
    // 説明:9c80
    // 0x9c80 (Windows-31J)
    // 0x6019 (UTF-16BE)
    if (argCheck == '怙') {
        return true;
    }
    // No.4265
    // 説明:9c81
    // 0x9c81 (Windows-31J)
    // 0x6010 (UTF-16BE)
    if (argCheck == '怐') {
        return true;
    }
    // No.4266
    // 説明:9c82
    // 0x9c82 (Windows-31J)
    // 0x6029 (UTF-16BE)
    if (argCheck == '怩') {
        return true;
    }
    // No.4267
    // 説明:9c83
    // 0x9c83 (Windows-31J)
    // 0x600e (UTF-16BE)
    if (argCheck == '怎') {
        return true;
    }
    // No.4268
    // 説明:9c84
    // 0x9c84 (Windows-31J)
    // 0x6031 (UTF-16BE)
    if (argCheck == '怱') {
        return true;
    }
    // No.4269
    // 説明:9c85
    // 0x9c85 (Windows-31J)
    // 0x601b (UTF-16BE)
    if (argCheck == '怛') {
        return true;
    }
    // No.4270
    // 説明:9c86
    // 0x9c86 (Windows-31J)
    // 0x6015 (UTF-16BE)
    if (argCheck == '怕') {
        return true;
    }
    // No.4271
    // 説明:9c87
    // 0x9c87 (Windows-31J)
    // 0x602b (UTF-16BE)
    if (argCheck == '怫') {
        return true;
    }
    // No.4272
    // 説明:9c88
    // 0x9c88 (Windows-31J)
    // 0x6026 (UTF-16BE)
    if (argCheck == '怦') {
        return true;
    }
    // No.4273
    // 説明:9c89
    // 0x9c89 (Windows-31J)
    // 0x600f (UTF-16BE)
    if (argCheck == '怏') {
        return true;
    }
    // No.4274
    // 説明:9c8a
    // 0x9c8a (Windows-31J)
    // 0x603a (UTF-16BE)
    if (argCheck == '怺') {
        return true;
    }
    // No.4275
    // 説明:9c8b
    // 0x9c8b (Windows-31J)
    // 0x605a (UTF-16BE)
    if (argCheck == '恚') {
        return true;
    }
    // No.4276
    // 説明:9c8c
    // 0x9c8c (Windows-31J)
    // 0x6041 (UTF-16BE)
    if (argCheck == '恁') {
        return true;
    }
    // No.4277
    // 説明:9c8d
    // 0x9c8d (Windows-31J)
    // 0x606a (UTF-16BE)
    if (argCheck == '恪') {
        return true;
    }
    // No.4278
    // 説明:9c8e
    // 0x9c8e (Windows-31J)
    // 0x6077 (UTF-16BE)
    if (argCheck == '恷') {
        return true;
    }
    // No.4279
    // 説明:9c8f
    // 0x9c8f (Windows-31J)
    // 0x605f (UTF-16BE)
    if (argCheck == '恟') {
        return true;
    }
    // No.4280
    // 説明:9c90
    // 0x9c90 (Windows-31J)
    // 0x604a (UTF-16BE)
    if (argCheck == '恊') {
        return true;
    }
    // No.4281
    // 説明:9c91
    // 0x9c91 (Windows-31J)
    // 0x6046 (UTF-16BE)
    if (argCheck == '恆') {
        return true;
    }
    // No.4282
    // 説明:9c92
    // 0x9c92 (Windows-31J)
    // 0x604d (UTF-16BE)
    if (argCheck == '恍') {
        return true;
    }
    // No.4283
    // 説明:9c93
    // 0x9c93 (Windows-31J)
    // 0x6063 (UTF-16BE)
    if (argCheck == '恣') {
        return true;
    }
    // No.4284
    // 説明:9c94
    // 0x9c94 (Windows-31J)
    // 0x6043 (UTF-16BE)
    if (argCheck == '恃') {
        return true;
    }
    // No.4285
    // 説明:9c95
    // 0x9c95 (Windows-31J)
    // 0x6064 (UTF-16BE)
    if (argCheck == '恤') {
        return true;
    }
    // No.4286
    // 説明:9c96
    // 0x9c96 (Windows-31J)
    // 0x6042 (UTF-16BE)
    if (argCheck == '恂') {
        return true;
    }
    // No.4287
    // 説明:9c97
    // 0x9c97 (Windows-31J)
    // 0x606c (UTF-16BE)
    if (argCheck == '恬') {
        return true;
    }
    // No.4288
    // 説明:9c98
    // 0x9c98 (Windows-31J)
    // 0x606b (UTF-16BE)
    if (argCheck == '恫') {
        return true;
    }
    // No.4289
    // 説明:9c99
    // 0x9c99 (Windows-31J)
    // 0x6059 (UTF-16BE)
    if (argCheck == '恙') {
        return true;
    }
    // No.4290
    // 説明:9c9a
    // 0x9c9a (Windows-31J)
    // 0x6081 (UTF-16BE)
    if (argCheck == '悁') {
        return true;
    }
    // No.4291
    // 説明:9c9b
    // 0x9c9b (Windows-31J)
    // 0x608d (UTF-16BE)
    if (argCheck == '悍') {
        return true;
    }
    // No.4292
    // 説明:9c9c
    // 0x9c9c (Windows-31J)
    // 0x60e7 (UTF-16BE)
    if (argCheck == '惧') {
        return true;
    }
    // No.4293
    // 説明:9c9d
    // 0x9c9d (Windows-31J)
    // 0x6083 (UTF-16BE)
    if (argCheck == '悃') {
        return true;
    }
    // No.4294
    // 説明:9c9e
    // 0x9c9e (Windows-31J)
    // 0x609a (UTF-16BE)
    if (argCheck == '悚') {
        return true;
    }
    // No.4295
    // 説明:9c9f
    // 0x9c9f (Windows-31J)
    // 0x6084 (UTF-16BE)
    if (argCheck == '悄') {
        return true;
    }
    // No.4296
    // 説明:9ca0
    // 0x9ca0 (Windows-31J)
    // 0x609b (UTF-16BE)
    if (argCheck == '悛') {
        return true;
    }
    // No.4297
    // 説明:9ca1
    // 0x9ca1 (Windows-31J)
    // 0x6096 (UTF-16BE)
    if (argCheck == '悖') {
        return true;
    }
    // No.4298
    // 説明:9ca2
    // 0x9ca2 (Windows-31J)
    // 0x6097 (UTF-16BE)
    if (argCheck == '悗') {
        return true;
    }
    // No.4299
    // 説明:9ca3
    // 0x9ca3 (Windows-31J)
    // 0x6092 (UTF-16BE)
    if (argCheck == '悒') {
        return true;
    }
    // No.4300
    // 説明:9ca4
    // 0x9ca4 (Windows-31J)
    // 0x60a7 (UTF-16BE)
    if (argCheck == '悧') {
        return true;
    }
    // No.4301
    // 説明:9ca5
    // 0x9ca5 (Windows-31J)
    // 0x608b (UTF-16BE)
    if (argCheck == '悋') {
        return true;
    }
    // No.4302
    // 説明:9ca6
    // 0x9ca6 (Windows-31J)
    // 0x60e1 (UTF-16BE)
    if (argCheck == '惡') {
        return true;
    }
    // No.4303
    // 説明:9ca7
    // 0x9ca7 (Windows-31J)
    // 0x60b8 (UTF-16BE)
    if (argCheck == '悸') {
        return true;
    }
    // No.4304
    // 説明:9ca8
    // 0x9ca8 (Windows-31J)
    // 0x60e0 (UTF-16BE)
    if (argCheck == '惠') {
        return true;
    }
    // No.4305
    // 説明:9ca9
    // 0x9ca9 (Windows-31J)
    // 0x60d3 (UTF-16BE)
    if (argCheck == '惓') {
        return true;
    }
    // No.4306
    // 説明:9caa
    // 0x9caa (Windows-31J)
    // 0x60b4 (UTF-16BE)
    if (argCheck == '悴') {
        return true;
    }
    // No.4307
    // 説明:9cab
    // 0x9cab (Windows-31J)
    // 0x5ff0 (UTF-16BE)
    if (argCheck == '忰') {
        return true;
    }
    // No.4308
    // 説明:9cac
    // 0x9cac (Windows-31J)
    // 0x60bd (UTF-16BE)
    if (argCheck == '悽') {
        return true;
    }
    // No.4309
    // 説明:9cad
    // 0x9cad (Windows-31J)
    // 0x60c6 (UTF-16BE)
    if (argCheck == '惆') {
        return true;
    }
    // No.4310
    // 説明:9cae
    // 0x9cae (Windows-31J)
    // 0x60b5 (UTF-16BE)
    if (argCheck == '悵') {
        return true;
    }
    // No.4311
    // 説明:9caf
    // 0x9caf (Windows-31J)
    // 0x60d8 (UTF-16BE)
    if (argCheck == '惘') {
        return true;
    }
    // No.4312
    // 説明:9cb0
    // 0x9cb0 (Windows-31J)
    // 0x614d (UTF-16BE)
    if (argCheck == '慍') {
        return true;
    }
    // No.4313
    // 説明:9cb1
    // 0x9cb1 (Windows-31J)
    // 0x6115 (UTF-16BE)
    if (argCheck == '愕') {
        return true;
    }
    // No.4314
    // 説明:9cb2
    // 0x9cb2 (Windows-31J)
    // 0x6106 (UTF-16BE)
    if (argCheck == '愆') {
        return true;
    }
    // No.4315
    // 説明:9cb3
    // 0x9cb3 (Windows-31J)
    // 0x60f6 (UTF-16BE)
    if (argCheck == '惶') {
        return true;
    }
    // No.4316
    // 説明:9cb4
    // 0x9cb4 (Windows-31J)
    // 0x60f7 (UTF-16BE)
    if (argCheck == '惷') {
        return true;
    }
    // No.4317
    // 説明:9cb5
    // 0x9cb5 (Windows-31J)
    // 0x6100 (UTF-16BE)
    if (argCheck == '愀') {
        return true;
    }
    // No.4318
    // 説明:9cb6
    // 0x9cb6 (Windows-31J)
    // 0x60f4 (UTF-16BE)
    if (argCheck == '惴') {
        return true;
    }
    // No.4319
    // 説明:9cb7
    // 0x9cb7 (Windows-31J)
    // 0x60fa (UTF-16BE)
    if (argCheck == '惺') {
        return true;
    }
    // No.4320
    // 説明:9cb8
    // 0x9cb8 (Windows-31J)
    // 0x6103 (UTF-16BE)
    if (argCheck == '愃') {
        return true;
    }
    // No.4321
    // 説明:9cb9
    // 0x9cb9 (Windows-31J)
    // 0x6121 (UTF-16BE)
    if (argCheck == '愡') {
        return true;
    }
    // No.4322
    // 説明:9cba
    // 0x9cba (Windows-31J)
    // 0x60fb (UTF-16BE)
    if (argCheck == '惻') {
        return true;
    }
    // No.4323
    // 説明:9cbb
    // 0x9cbb (Windows-31J)
    // 0x60f1 (UTF-16BE)
    if (argCheck == '惱') {
        return true;
    }
    // No.4324
    // 説明:9cbc
    // 0x9cbc (Windows-31J)
    // 0x610d (UTF-16BE)
    if (argCheck == '愍') {
        return true;
    }
    // No.4325
    // 説明:9cbd
    // 0x9cbd (Windows-31J)
    // 0x610e (UTF-16BE)
    if (argCheck == '愎') {
        return true;
    }
    // No.4326
    // 説明:9cbe
    // 0x9cbe (Windows-31J)
    // 0x6147 (UTF-16BE)
    if (argCheck == '慇') {
        return true;
    }
    // No.4327
    // 説明:9cbf
    // 0x9cbf (Windows-31J)
    // 0x613e (UTF-16BE)
    if (argCheck == '愾') {
        return true;
    }
    // No.4328
    // 説明:9cc0
    // 0x9cc0 (Windows-31J)
    // 0x6128 (UTF-16BE)
    if (argCheck == '愨') {
        return true;
    }
    // No.4329
    // 説明:9cc1
    // 0x9cc1 (Windows-31J)
    // 0x6127 (UTF-16BE)
    if (argCheck == '愧') {
        return true;
    }
    // No.4330
    // 説明:9cc2
    // 0x9cc2 (Windows-31J)
    // 0x614a (UTF-16BE)
    if (argCheck == '慊') {
        return true;
    }
    // No.4331
    // 説明:9cc3
    // 0x9cc3 (Windows-31J)
    // 0x613f (UTF-16BE)
    if (argCheck == '愿') {
        return true;
    }
    // No.4332
    // 説明:9cc4
    // 0x9cc4 (Windows-31J)
    // 0x613c (UTF-16BE)
    if (argCheck == '愼') {
        return true;
    }
    // No.4333
    // 説明:9cc5
    // 0x9cc5 (Windows-31J)
    // 0x612c (UTF-16BE)
    if (argCheck == '愬') {
        return true;
    }
    // No.4334
    // 説明:9cc6
    // 0x9cc6 (Windows-31J)
    // 0x6134 (UTF-16BE)
    if (argCheck == '愴') {
        return true;
    }
    // No.4335
    // 説明:9cc7
    // 0x9cc7 (Windows-31J)
    // 0x613d (UTF-16BE)
    if (argCheck == '愽') {
        return true;
    }
    // No.4336
    // 説明:9cc8
    // 0x9cc8 (Windows-31J)
    // 0x6142 (UTF-16BE)
    if (argCheck == '慂') {
        return true;
    }
    // No.4337
    // 説明:9cc9
    // 0x9cc9 (Windows-31J)
    // 0x6144 (UTF-16BE)
    if (argCheck == '慄') {
        return true;
    }
    // No.4338
    // 説明:9cca
    // 0x9cca (Windows-31J)
    // 0x6173 (UTF-16BE)
    if (argCheck == '慳') {
        return true;
    }
    // No.4339
    // 説明:9ccb
    // 0x9ccb (Windows-31J)
    // 0x6177 (UTF-16BE)
    if (argCheck == '慷') {
        return true;
    }
    // No.4340
    // 説明:9ccc
    // 0x9ccc (Windows-31J)
    // 0x6158 (UTF-16BE)
    if (argCheck == '慘') {
        return true;
    }
    // No.4341
    // 説明:9ccd
    // 0x9ccd (Windows-31J)
    // 0x6159 (UTF-16BE)
    if (argCheck == '慙') {
        return true;
    }
    // No.4342
    // 説明:9cce
    // 0x9cce (Windows-31J)
    // 0x615a (UTF-16BE)
    if (argCheck == '慚') {
        return true;
    }
    // No.4343
    // 説明:9ccf
    // 0x9ccf (Windows-31J)
    // 0x616b (UTF-16BE)
    if (argCheck == '慫') {
        return true;
    }
    // No.4344
    // 説明:9cd0
    // 0x9cd0 (Windows-31J)
    // 0x6174 (UTF-16BE)
    if (argCheck == '慴') {
        return true;
    }
    // No.4345
    // 説明:9cd1
    // 0x9cd1 (Windows-31J)
    // 0x616f (UTF-16BE)
    if (argCheck == '慯') {
        return true;
    }
    // No.4346
    // 説明:9cd2
    // 0x9cd2 (Windows-31J)
    // 0x6165 (UTF-16BE)
    if (argCheck == '慥') {
        return true;
    }
    // No.4347
    // 説明:9cd3
    // 0x9cd3 (Windows-31J)
    // 0x6171 (UTF-16BE)
    if (argCheck == '慱') {
        return true;
    }
    // No.4348
    // 説明:9cd4
    // 0x9cd4 (Windows-31J)
    // 0x615f (UTF-16BE)
    if (argCheck == '慟') {
        return true;
    }
    // No.4349
    // 説明:9cd5
    // 0x9cd5 (Windows-31J)
    // 0x615d (UTF-16BE)
    if (argCheck == '慝') {
        return true;
    }
    // No.4350
    // 説明:9cd6
    // 0x9cd6 (Windows-31J)
    // 0x6153 (UTF-16BE)
    if (argCheck == '慓') {
        return true;
    }
    // No.4351
    // 説明:9cd7
    // 0x9cd7 (Windows-31J)
    // 0x6175 (UTF-16BE)
    if (argCheck == '慵') {
        return true;
    }
    // No.4352
    // 説明:9cd8
    // 0x9cd8 (Windows-31J)
    // 0x6199 (UTF-16BE)
    if (argCheck == '憙') {
        return true;
    }
    // No.4353
    // 説明:9cd9
    // 0x9cd9 (Windows-31J)
    // 0x6196 (UTF-16BE)
    if (argCheck == '憖') {
        return true;
    }
    // No.4354
    // 説明:9cda
    // 0x9cda (Windows-31J)
    // 0x6187 (UTF-16BE)
    if (argCheck == '憇') {
        return true;
    }
    // No.4355
    // 説明:9cdb
    // 0x9cdb (Windows-31J)
    // 0x61ac (UTF-16BE)
    if (argCheck == '憬') {
        return true;
    }
    // No.4356
    // 説明:9cdc
    // 0x9cdc (Windows-31J)
    // 0x6194 (UTF-16BE)
    if (argCheck == '憔') {
        return true;
    }
    // No.4357
    // 説明:9cdd
    // 0x9cdd (Windows-31J)
    // 0x619a (UTF-16BE)
    if (argCheck == '憚') {
        return true;
    }
    // No.4358
    // 説明:9cde
    // 0x9cde (Windows-31J)
    // 0x618a (UTF-16BE)
    if (argCheck == '憊') {
        return true;
    }
    // No.4359
    // 説明:9cdf
    // 0x9cdf (Windows-31J)
    // 0x6191 (UTF-16BE)
    if (argCheck == '憑') {
        return true;
    }
    // No.4360
    // 説明:9ce0
    // 0x9ce0 (Windows-31J)
    // 0x61ab (UTF-16BE)
    if (argCheck == '憫') {
        return true;
    }
    // No.4361
    // 説明:9ce1
    // 0x9ce1 (Windows-31J)
    // 0x61ae (UTF-16BE)
    if (argCheck == '憮') {
        return true;
    }
    // No.4362
    // 説明:9ce2
    // 0x9ce2 (Windows-31J)
    // 0x61cc (UTF-16BE)
    if (argCheck == '懌') {
        return true;
    }
    // No.4363
    // 説明:9ce3
    // 0x9ce3 (Windows-31J)
    // 0x61ca (UTF-16BE)
    if (argCheck == '懊') {
        return true;
    }
    // No.4364
    // 説明:9ce4
    // 0x9ce4 (Windows-31J)
    // 0x61c9 (UTF-16BE)
    if (argCheck == '應') {
        return true;
    }
    // No.4365
    // 説明:9ce5
    // 0x9ce5 (Windows-31J)
    // 0x61f7 (UTF-16BE)
    if (argCheck == '懷') {
        return true;
    }
    // No.4366
    // 説明:9ce6
    // 0x9ce6 (Windows-31J)
    // 0x61c8 (UTF-16BE)
    if (argCheck == '懈') {
        return true;
    }
    // No.4367
    // 説明:9ce7
    // 0x9ce7 (Windows-31J)
    // 0x61c3 (UTF-16BE)
    if (argCheck == '懃') {
        return true;
    }
    // No.4368
    // 説明:9ce8
    // 0x9ce8 (Windows-31J)
    // 0x61c6 (UTF-16BE)
    if (argCheck == '懆') {
        return true;
    }
    // No.4369
    // 説明:9ce9
    // 0x9ce9 (Windows-31J)
    // 0x61ba (UTF-16BE)
    if (argCheck == '憺') {
        return true;
    }
    // No.4370
    // 説明:9cea
    // 0x9cea (Windows-31J)
    // 0x61cb (UTF-16BE)
    if (argCheck == '懋') {
        return true;
    }
    // No.4371
    // 説明:9ceb
    // 0x9ceb (Windows-31J)
    // 0x7f79 (UTF-16BE)
    if (argCheck == '罹') {
        return true;
    }
    // No.4372
    // 説明:9cec
    // 0x9cec (Windows-31J)
    // 0x61cd (UTF-16BE)
    if (argCheck == '懍') {
        return true;
    }
    // No.4373
    // 説明:9ced
    // 0x9ced (Windows-31J)
    // 0x61e6 (UTF-16BE)
    if (argCheck == '懦') {
        return true;
    }
    // No.4374
    // 説明:9cee
    // 0x9cee (Windows-31J)
    // 0x61e3 (UTF-16BE)
    if (argCheck == '懣') {
        return true;
    }
    // No.4375
    // 説明:9cef
    // 0x9cef (Windows-31J)
    // 0x61f6 (UTF-16BE)
    if (argCheck == '懶') {
        return true;
    }
    // No.4376
    // 説明:9cf0
    // 0x9cf0 (Windows-31J)
    // 0x61fa (UTF-16BE)
    if (argCheck == '懺') {
        return true;
    }
    // No.4377
    // 説明:9cf1
    // 0x9cf1 (Windows-31J)
    // 0x61f4 (UTF-16BE)
    if (argCheck == '懴') {
        return true;
    }
    // No.4378
    // 説明:9cf2
    // 0x9cf2 (Windows-31J)
    // 0x61ff (UTF-16BE)
    if (argCheck == '懿') {
        return true;
    }
    // No.4379
    // 説明:9cf3
    // 0x9cf3 (Windows-31J)
    // 0x61fd (UTF-16BE)
    if (argCheck == '懽') {
        return true;
    }
    // No.4380
    // 説明:9cf4
    // 0x9cf4 (Windows-31J)
    // 0x61fc (UTF-16BE)
    if (argCheck == '懼') {
        return true;
    }
    // No.4381
    // 説明:9cf5
    // 0x9cf5 (Windows-31J)
    // 0x61fe (UTF-16BE)
    if (argCheck == '懾') {
        return true;
    }
    // No.4382
    // 説明:9cf6
    // 0x9cf6 (Windows-31J)
    // 0x6200 (UTF-16BE)
    if (argCheck == '戀') {
        return true;
    }
    // No.4383
    // 説明:9cf7
    // 0x9cf7 (Windows-31J)
    // 0x6208 (UTF-16BE)
    if (argCheck == '戈') {
        return true;
    }
    // No.4384
    // 説明:9cf8
    // 0x9cf8 (Windows-31J)
    // 0x6209 (UTF-16BE)
    if (argCheck == '戉') {
        return true;
    }
    // No.4385
    // 説明:9cf9
    // 0x9cf9 (Windows-31J)
    // 0x620d (UTF-16BE)
    if (argCheck == '戍') {
        return true;
    }
    // No.4386
    // 説明:9cfa
    // 0x9cfa (Windows-31J)
    // 0x620c (UTF-16BE)
    if (argCheck == '戌') {
        return true;
    }
    // No.4387
    // 説明:9cfb
    // 0x9cfb (Windows-31J)
    // 0x6214 (UTF-16BE)
    if (argCheck == '戔') {
        return true;
    }
    // No.4388
    // 説明:9cfc
    // 0x9cfc (Windows-31J)
    // 0x621b (UTF-16BE)
    if (argCheck == '戛') {
        return true;
    }
    // No.4389
    // 説明:9d40
    // 0x9d40 (Windows-31J)
    // 0x621e (UTF-16BE)
    if (argCheck == '戞') {
        return true;
    }
    // No.4390
    // 説明:9d41
    // 0x9d41 (Windows-31J)
    // 0x6221 (UTF-16BE)
    if (argCheck == '戡') {
        return true;
    }
    // No.4391
    // 説明:9d42
    // 0x9d42 (Windows-31J)
    // 0x622a (UTF-16BE)
    if (argCheck == '截') {
        return true;
    }
    // No.4392
    // 説明:9d43
    // 0x9d43 (Windows-31J)
    // 0x622e (UTF-16BE)
    if (argCheck == '戮') {
        return true;
    }
    // No.4393
    // 説明:9d44
    // 0x9d44 (Windows-31J)
    // 0x6230 (UTF-16BE)
    if (argCheck == '戰') {
        return true;
    }
    // No.4394
    // 説明:9d45
    // 0x9d45 (Windows-31J)
    // 0x6232 (UTF-16BE)
    if (argCheck == '戲') {
        return true;
    }
    // No.4395
    // 説明:9d46
    // 0x9d46 (Windows-31J)
    // 0x6233 (UTF-16BE)
    if (argCheck == '戳') {
        return true;
    }
    // No.4396
    // 説明:9d47
    // 0x9d47 (Windows-31J)
    // 0x6241 (UTF-16BE)
    if (argCheck == '扁') {
        return true;
    }
    // No.4397
    // 説明:9d48
    // 0x9d48 (Windows-31J)
    // 0x624e (UTF-16BE)
    if (argCheck == '扎') {
        return true;
    }
    // No.4398
    // 説明:9d49
    // 0x9d49 (Windows-31J)
    // 0x625e (UTF-16BE)
    if (argCheck == '扞') {
        return true;
    }
    // No.4399
    // 説明:9d4a
    // 0x9d4a (Windows-31J)
    // 0x6263 (UTF-16BE)
    if (argCheck == '扣') {
        return true;
    }
    // No.4400
    // 説明:9d4b
    // 0x9d4b (Windows-31J)
    // 0x625b (UTF-16BE)
    if (argCheck == '扛') {
        return true;
    }
    // No.4401
    // 説明:9d4c
    // 0x9d4c (Windows-31J)
    // 0x6260 (UTF-16BE)
    if (argCheck == '扠') {
        return true;
    }
    // No.4402
    // 説明:9d4d
    // 0x9d4d (Windows-31J)
    // 0x6268 (UTF-16BE)
    if (argCheck == '扨') {
        return true;
    }
    // No.4403
    // 説明:9d4e
    // 0x9d4e (Windows-31J)
    // 0x627c (UTF-16BE)
    if (argCheck == '扼') {
        return true;
    }
    // No.4404
    // 説明:9d4f
    // 0x9d4f (Windows-31J)
    // 0x6282 (UTF-16BE)
    if (argCheck == '抂') {
        return true;
    }
    // No.4405
    // 説明:9d50
    // 0x9d50 (Windows-31J)
    // 0x6289 (UTF-16BE)
    if (argCheck == '抉') {
        return true;
    }
    // No.4406
    // 説明:9d51
    // 0x9d51 (Windows-31J)
    // 0x627e (UTF-16BE)
    if (argCheck == '找') {
        return true;
    }
    // No.4407
    // 説明:9d52
    // 0x9d52 (Windows-31J)
    // 0x6292 (UTF-16BE)
    if (argCheck == '抒') {
        return true;
    }
    // No.4408
    // 説明:9d53
    // 0x9d53 (Windows-31J)
    // 0x6293 (UTF-16BE)
    if (argCheck == '抓') {
        return true;
    }
    // No.4409
    // 説明:9d54
    // 0x9d54 (Windows-31J)
    // 0x6296 (UTF-16BE)
    if (argCheck == '抖') {
        return true;
    }
    // No.4410
    // 説明:9d55
    // 0x9d55 (Windows-31J)
    // 0x62d4 (UTF-16BE)
    if (argCheck == '拔') {
        return true;
    }
    // No.4411
    // 説明:9d56
    // 0x9d56 (Windows-31J)
    // 0x6283 (UTF-16BE)
    if (argCheck == '抃') {
        return true;
    }
    // No.4412
    // 説明:9d57
    // 0x9d57 (Windows-31J)
    // 0x6294 (UTF-16BE)
    if (argCheck == '抔') {
        return true;
    }
    // No.4413
    // 説明:9d58
    // 0x9d58 (Windows-31J)
    // 0x62d7 (UTF-16BE)
    if (argCheck == '拗') {
        return true;
    }
    // No.4414
    // 説明:9d59
    // 0x9d59 (Windows-31J)
    // 0x62d1 (UTF-16BE)
    if (argCheck == '拑') {
        return true;
    }
    // No.4415
    // 説明:9d5a
    // 0x9d5a (Windows-31J)
    // 0x62bb (UTF-16BE)
    if (argCheck == '抻') {
        return true;
    }
    // No.4416
    // 説明:9d5b
    // 0x9d5b (Windows-31J)
    // 0x62cf (UTF-16BE)
    if (argCheck == '拏') {
        return true;
    }
    // No.4417
    // 説明:9d5c
    // 0x9d5c (Windows-31J)
    // 0x62ff (UTF-16BE)
    if (argCheck == '拿') {
        return true;
    }
    // No.4418
    // 説明:9d5d
    // 0x9d5d (Windows-31J)
    // 0x62c6 (UTF-16BE)
    if (argCheck == '拆') {
        return true;
    }
    // No.4419
    // 説明:9d5e
    // 0x9d5e (Windows-31J)
    // 0x64d4 (UTF-16BE)
    if (argCheck == '擔') {
        return true;
    }
    // No.4420
    // 説明:9d5f
    // 0x9d5f (Windows-31J)
    // 0x62c8 (UTF-16BE)
    if (argCheck == '拈') {
        return true;
    }
    // No.4421
    // 説明:9d60
    // 0x9d60 (Windows-31J)
    // 0x62dc (UTF-16BE)
    if (argCheck == '拜') {
        return true;
    }
    // No.4422
    // 説明:9d61
    // 0x9d61 (Windows-31J)
    // 0x62cc (UTF-16BE)
    if (argCheck == '拌') {
        return true;
    }
    // No.4423
    // 説明:9d62
    // 0x9d62 (Windows-31J)
    // 0x62ca (UTF-16BE)
    if (argCheck == '拊') {
        return true;
    }
    // No.4424
    // 説明:9d63
    // 0x9d63 (Windows-31J)
    // 0x62c2 (UTF-16BE)
    if (argCheck == '拂') {
        return true;
    }
    // No.4425
    // 説明:9d64
    // 0x9d64 (Windows-31J)
    // 0x62c7 (UTF-16BE)
    if (argCheck == '拇') {
        return true;
    }
    // No.4426
    // 説明:9d65
    // 0x9d65 (Windows-31J)
    // 0x629b (UTF-16BE)
    if (argCheck == '抛') {
        return true;
    }
    // No.4427
    // 説明:9d66
    // 0x9d66 (Windows-31J)
    // 0x62c9 (UTF-16BE)
    if (argCheck == '拉') {
        return true;
    }
    // No.4428
    // 説明:9d67
    // 0x9d67 (Windows-31J)
    // 0x630c (UTF-16BE)
    if (argCheck == '挌') {
        return true;
    }
    // No.4429
    // 説明:9d68
    // 0x9d68 (Windows-31J)
    // 0x62ee (UTF-16BE)
    if (argCheck == '拮') {
        return true;
    }
    // No.4430
    // 説明:9d69
    // 0x9d69 (Windows-31J)
    // 0x62f1 (UTF-16BE)
    if (argCheck == '拱') {
        return true;
    }
    // No.4431
    // 説明:9d6a
    // 0x9d6a (Windows-31J)
    // 0x6327 (UTF-16BE)
    if (argCheck == '挧') {
        return true;
    }
    // No.4432
    // 説明:9d6b
    // 0x9d6b (Windows-31J)
    // 0x6302 (UTF-16BE)
    if (argCheck == '挂') {
        return true;
    }
    // No.4433
    // 説明:9d6c
    // 0x9d6c (Windows-31J)
    // 0x6308 (UTF-16BE)
    if (argCheck == '挈') {
        return true;
    }
    // No.4434
    // 説明:9d6d
    // 0x9d6d (Windows-31J)
    // 0x62ef (UTF-16BE)
    if (argCheck == '拯') {
        return true;
    }
    // No.4435
    // 説明:9d6e
    // 0x9d6e (Windows-31J)
    // 0x62f5 (UTF-16BE)
    if (argCheck == '拵') {
        return true;
    }
    // No.4436
    // 説明:9d6f
    // 0x9d6f (Windows-31J)
    // 0x6350 (UTF-16BE)
    if (argCheck == '捐') {
        return true;
    }
    // No.4437
    // 説明:9d70
    // 0x9d70 (Windows-31J)
    // 0x633e (UTF-16BE)
    if (argCheck == '挾') {
        return true;
    }
    // No.4438
    // 説明:9d71
    // 0x9d71 (Windows-31J)
    // 0x634d (UTF-16BE)
    if (argCheck == '捍') {
        return true;
    }
    // No.4439
    // 説明:9d72
    // 0x9d72 (Windows-31J)
    // 0x641c (UTF-16BE)
    if (argCheck == '搜') {
        return true;
    }
    // No.4440
    // 説明:9d73
    // 0x9d73 (Windows-31J)
    // 0x634f (UTF-16BE)
    if (argCheck == '捏') {
        return true;
    }
    // No.4441
    // 説明:9d74
    // 0x9d74 (Windows-31J)
    // 0x6396 (UTF-16BE)
    if (argCheck == '掖') {
        return true;
    }
    // No.4442
    // 説明:9d75
    // 0x9d75 (Windows-31J)
    // 0x638e (UTF-16BE)
    if (argCheck == '掎') {
        return true;
    }
    // No.4443
    // 説明:9d76
    // 0x9d76 (Windows-31J)
    // 0x6380 (UTF-16BE)
    if (argCheck == '掀') {
        return true;
    }
    // No.4444
    // 説明:9d77
    // 0x9d77 (Windows-31J)
    // 0x63ab (UTF-16BE)
    if (argCheck == '掫') {
        return true;
    }
    // No.4445
    // 説明:9d78
    // 0x9d78 (Windows-31J)
    // 0x6376 (UTF-16BE)
    if (argCheck == '捶') {
        return true;
    }
    // No.4446
    // 説明:9d79
    // 0x9d79 (Windows-31J)
    // 0x63a3 (UTF-16BE)
    if (argCheck == '掣') {
        return true;
    }
    // No.4447
    // 説明:9d7a
    // 0x9d7a (Windows-31J)
    // 0x638f (UTF-16BE)
    if (argCheck == '掏') {
        return true;
    }
    // No.4448
    // 説明:9d7b
    // 0x9d7b (Windows-31J)
    // 0x6389 (UTF-16BE)
    if (argCheck == '掉') {
        return true;
    }
    // No.4449
    // 説明:9d7c
    // 0x9d7c (Windows-31J)
    // 0x639f (UTF-16BE)
    if (argCheck == '掟') {
        return true;
    }
    // No.4450
    // 説明:9d7d
    // 0x9d7d (Windows-31J)
    // 0x63b5 (UTF-16BE)
    if (argCheck == '掵') {
        return true;
    }
    // No.4451
    // 説明:9d7e
    // 0x9d7e (Windows-31J)
    // 0x636b (UTF-16BE)
    if (argCheck == '捫') {
        return true;
    }
    // No.4452
    // 説明:9d80
    // 0x9d80 (Windows-31J)
    // 0x6369 (UTF-16BE)
    if (argCheck == '捩') {
        return true;
    }
    // No.4453
    // 説明:9d81
    // 0x9d81 (Windows-31J)
    // 0x63be (UTF-16BE)
    if (argCheck == '掾') {
        return true;
    }
    // No.4454
    // 説明:9d82
    // 0x9d82 (Windows-31J)
    // 0x63e9 (UTF-16BE)
    if (argCheck == '揩') {
        return true;
    }
    // No.4455
    // 説明:9d83
    // 0x9d83 (Windows-31J)
    // 0x63c0 (UTF-16BE)
    if (argCheck == '揀') {
        return true;
    }
    // No.4456
    // 説明:9d84
    // 0x9d84 (Windows-31J)
    // 0x63c6 (UTF-16BE)
    if (argCheck == '揆') {
        return true;
    }
    // No.4457
    // 説明:9d85
    // 0x9d85 (Windows-31J)
    // 0x63e3 (UTF-16BE)
    if (argCheck == '揣') {
        return true;
    }
    // No.4458
    // 説明:9d86
    // 0x9d86 (Windows-31J)
    // 0x63c9 (UTF-16BE)
    if (argCheck == '揉') {
        return true;
    }
    // No.4459
    // 説明:9d87
    // 0x9d87 (Windows-31J)
    // 0x63d2 (UTF-16BE)
    if (argCheck == '插') {
        return true;
    }
    // No.4460
    // 説明:9d88
    // 0x9d88 (Windows-31J)
    // 0x63f6 (UTF-16BE)
    if (argCheck == '揶') {
        return true;
    }
    // No.4461
    // 説明:9d89
    // 0x9d89 (Windows-31J)
    // 0x63c4 (UTF-16BE)
    if (argCheck == '揄') {
        return true;
    }
    // No.4462
    // 説明:9d8a
    // 0x9d8a (Windows-31J)
    // 0x6416 (UTF-16BE)
    if (argCheck == '搖') {
        return true;
    }
    // No.4463
    // 説明:9d8b
    // 0x9d8b (Windows-31J)
    // 0x6434 (UTF-16BE)
    if (argCheck == '搴') {
        return true;
    }
    // No.4464
    // 説明:9d8c
    // 0x9d8c (Windows-31J)
    // 0x6406 (UTF-16BE)
    if (argCheck == '搆') {
        return true;
    }
    // No.4465
    // 説明:9d8d
    // 0x9d8d (Windows-31J)
    // 0x6413 (UTF-16BE)
    if (argCheck == '搓') {
        return true;
    }
    // No.4466
    // 説明:9d8e
    // 0x9d8e (Windows-31J)
    // 0x6426 (UTF-16BE)
    if (argCheck == '搦') {
        return true;
    }
    // No.4467
    // 説明:9d8f
    // 0x9d8f (Windows-31J)
    // 0x6436 (UTF-16BE)
    if (argCheck == '搶') {
        return true;
    }
    // No.4468
    // 説明:9d90
    // 0x9d90 (Windows-31J)
    // 0x651d (UTF-16BE)
    if (argCheck == '攝') {
        return true;
    }
    // No.4469
    // 説明:9d91
    // 0x9d91 (Windows-31J)
    // 0x6417 (UTF-16BE)
    if (argCheck == '搗') {
        return true;
    }
    // No.4470
    // 説明:9d92
    // 0x9d92 (Windows-31J)
    // 0x6428 (UTF-16BE)
    if (argCheck == '搨') {
        return true;
    }
    // No.4471
    // 説明:9d93
    // 0x9d93 (Windows-31J)
    // 0x640f (UTF-16BE)
    if (argCheck == '搏') {
        return true;
    }
    // No.4472
    // 説明:9d94
    // 0x9d94 (Windows-31J)
    // 0x6467 (UTF-16BE)
    if (argCheck == '摧') {
        return true;
    }
    // No.4473
    // 説明:9d95
    // 0x9d95 (Windows-31J)
    // 0x646f (UTF-16BE)
    if (argCheck == '摯') {
        return true;
    }
    // No.4474
    // 説明:9d96
    // 0x9d96 (Windows-31J)
    // 0x6476 (UTF-16BE)
    if (argCheck == '摶') {
        return true;
    }
    // No.4475
    // 説明:9d97
    // 0x9d97 (Windows-31J)
    // 0x644e (UTF-16BE)
    if (argCheck == '摎') {
        return true;
    }
    // No.4476
    // 説明:9d98
    // 0x9d98 (Windows-31J)
    // 0x652a (UTF-16BE)
    if (argCheck == '攪') {
        return true;
    }
    // No.4477
    // 説明:9d99
    // 0x9d99 (Windows-31J)
    // 0x6495 (UTF-16BE)
    if (argCheck == '撕') {
        return true;
    }
    // No.4478
    // 説明:9d9a
    // 0x9d9a (Windows-31J)
    // 0x6493 (UTF-16BE)
    if (argCheck == '撓') {
        return true;
    }
    // No.4479
    // 説明:9d9b
    // 0x9d9b (Windows-31J)
    // 0x64a5 (UTF-16BE)
    if (argCheck == '撥') {
        return true;
    }
    // No.4480
    // 説明:9d9c
    // 0x9d9c (Windows-31J)
    // 0x64a9 (UTF-16BE)
    if (argCheck == '撩') {
        return true;
    }
    // No.4481
    // 説明:9d9d
    // 0x9d9d (Windows-31J)
    // 0x6488 (UTF-16BE)
    if (argCheck == '撈') {
        return true;
    }
    // No.4482
    // 説明:9d9e
    // 0x9d9e (Windows-31J)
    // 0x64bc (UTF-16BE)
    if (argCheck == '撼') {
        return true;
    }
    // No.4483
    // 説明:9d9f
    // 0x9d9f (Windows-31J)
    // 0x64da (UTF-16BE)
    if (argCheck == '據') {
        return true;
    }
    // No.4484
    // 説明:9da0
    // 0x9da0 (Windows-31J)
    // 0x64d2 (UTF-16BE)
    if (argCheck == '擒') {
        return true;
    }
    // No.4485
    // 説明:9da1
    // 0x9da1 (Windows-31J)
    // 0x64c5 (UTF-16BE)
    if (argCheck == '擅') {
        return true;
    }
    // No.4486
    // 説明:9da2
    // 0x9da2 (Windows-31J)
    // 0x64c7 (UTF-16BE)
    if (argCheck == '擇') {
        return true;
    }
    // No.4487
    // 説明:9da3
    // 0x9da3 (Windows-31J)
    // 0x64bb (UTF-16BE)
    if (argCheck == '撻') {
        return true;
    }
    // No.4488
    // 説明:9da4
    // 0x9da4 (Windows-31J)
    // 0x64d8 (UTF-16BE)
    if (argCheck == '擘') {
        return true;
    }
    // No.4489
    // 説明:9da5
    // 0x9da5 (Windows-31J)
    // 0x64c2 (UTF-16BE)
    if (argCheck == '擂') {
        return true;
    }
    // No.4490
    // 説明:9da6
    // 0x9da6 (Windows-31J)
    // 0x64f1 (UTF-16BE)
    if (argCheck == '擱') {
        return true;
    }
    // No.4491
    // 説明:9da7
    // 0x9da7 (Windows-31J)
    // 0x64e7 (UTF-16BE)
    if (argCheck == '擧') {
        return true;
    }
    // No.4492
    // 説明:9da8
    // 0x9da8 (Windows-31J)
    // 0x8209 (UTF-16BE)
    if (argCheck == '舉') {
        return true;
    }
    // No.4493
    // 説明:9da9
    // 0x9da9 (Windows-31J)
    // 0x64e0 (UTF-16BE)
    if (argCheck == '擠') {
        return true;
    }
    // No.4494
    // 説明:9daa
    // 0x9daa (Windows-31J)
    // 0x64e1 (UTF-16BE)
    if (argCheck == '擡') {
        return true;
    }
    // No.4495
    // 説明:9dab
    // 0x9dab (Windows-31J)
    // 0x62ac (UTF-16BE)
    if (argCheck == '抬') {
        return true;
    }
    // No.4496
    // 説明:9dac
    // 0x9dac (Windows-31J)
    // 0x64e3 (UTF-16BE)
    if (argCheck == '擣') {
        return true;
    }
    // No.4497
    // 説明:9dad
    // 0x9dad (Windows-31J)
    // 0x64ef (UTF-16BE)
    if (argCheck == '擯') {
        return true;
    }
    // No.4498
    // 説明:9dae
    // 0x9dae (Windows-31J)
    // 0x652c (UTF-16BE)
    if (argCheck == '攬') {
        return true;
    }
    // No.4499
    // 説明:9daf
    // 0x9daf (Windows-31J)
    // 0x64f6 (UTF-16BE)
    if (argCheck == '擶') {
        return true;
    }
    // No.4500
    // 説明:9db0
    // 0x9db0 (Windows-31J)
    // 0x64f4 (UTF-16BE)
    if (argCheck == '擴') {
        return true;
    }
    // No.4501
    // 説明:9db1
    // 0x9db1 (Windows-31J)
    // 0x64f2 (UTF-16BE)
    if (argCheck == '擲') {
        return true;
    }
    // No.4502
    // 説明:9db2
    // 0x9db2 (Windows-31J)
    // 0x64fa (UTF-16BE)
    if (argCheck == '擺') {
        return true;
    }
    // No.4503
    // 説明:9db3
    // 0x9db3 (Windows-31J)
    // 0x6500 (UTF-16BE)
    if (argCheck == '攀') {
        return true;
    }
    // No.4504
    // 説明:9db4
    // 0x9db4 (Windows-31J)
    // 0x64fd (UTF-16BE)
    if (argCheck == '擽') {
        return true;
    }
    // No.4505
    // 説明:9db5
    // 0x9db5 (Windows-31J)
    // 0x6518 (UTF-16BE)
    if (argCheck == '攘') {
        return true;
    }
    // No.4506
    // 説明:9db6
    // 0x9db6 (Windows-31J)
    // 0x651c (UTF-16BE)
    if (argCheck == '攜') {
        return true;
    }
    // No.4507
    // 説明:9db7
    // 0x9db7 (Windows-31J)
    // 0x6505 (UTF-16BE)
    if (argCheck == '攅') {
        return true;
    }
    // No.4508
    // 説明:9db8
    // 0x9db8 (Windows-31J)
    // 0x6524 (UTF-16BE)
    if (argCheck == '攤') {
        return true;
    }
    // No.4509
    // 説明:9db9
    // 0x9db9 (Windows-31J)
    // 0x6523 (UTF-16BE)
    if (argCheck == '攣') {
        return true;
    }
    // No.4510
    // 説明:9dba
    // 0x9dba (Windows-31J)
    // 0x652b (UTF-16BE)
    if (argCheck == '攫') {
        return true;
    }
    // No.4511
    // 説明:9dbb
    // 0x9dbb (Windows-31J)
    // 0x6534 (UTF-16BE)
    if (argCheck == '攴') {
        return true;
    }
    // No.4512
    // 説明:9dbc
    // 0x9dbc (Windows-31J)
    // 0x6535 (UTF-16BE)
    if (argCheck == '攵') {
        return true;
    }
    // No.4513
    // 説明:9dbd
    // 0x9dbd (Windows-31J)
    // 0x6537 (UTF-16BE)
    if (argCheck == '攷') {
        return true;
    }
    // No.4514
    // 説明:9dbe
    // 0x9dbe (Windows-31J)
    // 0x6536 (UTF-16BE)
    if (argCheck == '收') {
        return true;
    }
    // No.4515
    // 説明:9dbf
    // 0x9dbf (Windows-31J)
    // 0x6538 (UTF-16BE)
    if (argCheck == '攸') {
        return true;
    }
    // No.4516
    // 説明:9dc0
    // 0x9dc0 (Windows-31J)
    // 0x754b (UTF-16BE)
    if (argCheck == '畋') {
        return true;
    }
    // No.4517
    // 説明:9dc1
    // 0x9dc1 (Windows-31J)
    // 0x6548 (UTF-16BE)
    if (argCheck == '效') {
        return true;
    }
    // No.4518
    // 説明:9dc2
    // 0x9dc2 (Windows-31J)
    // 0x6556 (UTF-16BE)
    if (argCheck == '敖') {
        return true;
    }
    // No.4519
    // 説明:9dc3
    // 0x9dc3 (Windows-31J)
    // 0x6555 (UTF-16BE)
    if (argCheck == '敕') {
        return true;
    }
    // No.4520
    // 説明:9dc4
    // 0x9dc4 (Windows-31J)
    // 0x654d (UTF-16BE)
    if (argCheck == '敍') {
        return true;
    }
    // No.4521
    // 説明:9dc5
    // 0x9dc5 (Windows-31J)
    // 0x6558 (UTF-16BE)
    if (argCheck == '敘') {
        return true;
    }
    // No.4522
    // 説明:9dc6
    // 0x9dc6 (Windows-31J)
    // 0x655e (UTF-16BE)
    if (argCheck == '敞') {
        return true;
    }
    // No.4523
    // 説明:9dc7
    // 0x9dc7 (Windows-31J)
    // 0x655d (UTF-16BE)
    if (argCheck == '敝') {
        return true;
    }
    // No.4524
    // 説明:9dc8
    // 0x9dc8 (Windows-31J)
    // 0x6572 (UTF-16BE)
    if (argCheck == '敲') {
        return true;
    }
    // No.4525
    // 説明:9dc9
    // 0x9dc9 (Windows-31J)
    // 0x6578 (UTF-16BE)
    if (argCheck == '數') {
        return true;
    }
    // No.4526
    // 説明:9dca
    // 0x9dca (Windows-31J)
    // 0x6582 (UTF-16BE)
    if (argCheck == '斂') {
        return true;
    }
    // No.4527
    // 説明:9dcb
    // 0x9dcb (Windows-31J)
    // 0x6583 (UTF-16BE)
    if (argCheck == '斃') {
        return true;
    }
    // No.4528
    // 説明:9dcc
    // 0x9dcc (Windows-31J)
    // 0x8b8a (UTF-16BE)
    if (argCheck == '變') {
        return true;
    }
    // No.4529
    // 説明:9dcd
    // 0x9dcd (Windows-31J)
    // 0x659b (UTF-16BE)
    if (argCheck == '斛') {
        return true;
    }
    // No.4530
    // 説明:9dce
    // 0x9dce (Windows-31J)
    // 0x659f (UTF-16BE)
    if (argCheck == '斟') {
        return true;
    }
    // No.4531
    // 説明:9dcf
    // 0x9dcf (Windows-31J)
    // 0x65ab (UTF-16BE)
    if (argCheck == '斫') {
        return true;
    }
    // No.4532
    // 説明:9dd0
    // 0x9dd0 (Windows-31J)
    // 0x65b7 (UTF-16BE)
    if (argCheck == '斷') {
        return true;
    }
    // No.4533
    // 説明:9dd1
    // 0x9dd1 (Windows-31J)
    // 0x65c3 (UTF-16BE)
    if (argCheck == '旃') {
        return true;
    }
    // No.4534
    // 説明:9dd2
    // 0x9dd2 (Windows-31J)
    // 0x65c6 (UTF-16BE)
    if (argCheck == '旆') {
        return true;
    }
    // No.4535
    // 説明:9dd3
    // 0x9dd3 (Windows-31J)
    // 0x65c1 (UTF-16BE)
    if (argCheck == '旁') {
        return true;
    }
    // No.4536
    // 説明:9dd4
    // 0x9dd4 (Windows-31J)
    // 0x65c4 (UTF-16BE)
    if (argCheck == '旄') {
        return true;
    }
    // No.4537
    // 説明:9dd5
    // 0x9dd5 (Windows-31J)
    // 0x65cc (UTF-16BE)
    if (argCheck == '旌') {
        return true;
    }
    // No.4538
    // 説明:9dd6
    // 0x9dd6 (Windows-31J)
    // 0x65d2 (UTF-16BE)
    if (argCheck == '旒') {
        return true;
    }
    // No.4539
    // 説明:9dd7
    // 0x9dd7 (Windows-31J)
    // 0x65db (UTF-16BE)
    if (argCheck == '旛') {
        return true;
    }
    // No.4540
    // 説明:9dd8
    // 0x9dd8 (Windows-31J)
    // 0x65d9 (UTF-16BE)
    if (argCheck == '旙') {
        return true;
    }
    // No.4541
    // 説明:9dd9
    // 0x9dd9 (Windows-31J)
    // 0x65e0 (UTF-16BE)
    if (argCheck == '无') {
        return true;
    }
    // No.4542
    // 説明:9dda
    // 0x9dda (Windows-31J)
    // 0x65e1 (UTF-16BE)
    if (argCheck == '旡') {
        return true;
    }
    // No.4543
    // 説明:9ddb
    // 0x9ddb (Windows-31J)
    // 0x65f1 (UTF-16BE)
    if (argCheck == '旱') {
        return true;
    }
    // No.4544
    // 説明:9ddc
    // 0x9ddc (Windows-31J)
    // 0x6772 (UTF-16BE)
    if (argCheck == '杲') {
        return true;
    }
    // No.4545
    // 説明:9ddd
    // 0x9ddd (Windows-31J)
    // 0x660a (UTF-16BE)
    if (argCheck == '昊') {
        return true;
    }
    // No.4546
    // 説明:9dde
    // 0x9dde (Windows-31J)
    // 0x6603 (UTF-16BE)
    if (argCheck == '昃') {
        return true;
    }
    // No.4547
    // 説明:9ddf
    // 0x9ddf (Windows-31J)
    // 0x65fb (UTF-16BE)
    if (argCheck == '旻') {
        return true;
    }
    // No.4548
    // 説明:9de0
    // 0x9de0 (Windows-31J)
    // 0x6773 (UTF-16BE)
    if (argCheck == '杳') {
        return true;
    }
    // No.4549
    // 説明:9de1
    // 0x9de1 (Windows-31J)
    // 0x6635 (UTF-16BE)
    if (argCheck == '昵') {
        return true;
    }
    // No.4550
    // 説明:9de2
    // 0x9de2 (Windows-31J)
    // 0x6636 (UTF-16BE)
    if (argCheck == '昶') {
        return true;
    }
    // No.4551
    // 説明:9de3
    // 0x9de3 (Windows-31J)
    // 0x6634 (UTF-16BE)
    if (argCheck == '昴') {
        return true;
    }
    // No.4552
    // 説明:9de4
    // 0x9de4 (Windows-31J)
    // 0x661c (UTF-16BE)
    if (argCheck == '昜') {
        return true;
    }
    // No.4553
    // 説明:9de5
    // 0x9de5 (Windows-31J)
    // 0x664f (UTF-16BE)
    if (argCheck == '晏') {
        return true;
    }
    // No.4554
    // 説明:9de6
    // 0x9de6 (Windows-31J)
    // 0x6644 (UTF-16BE)
    if (argCheck == '晄') {
        return true;
    }
    // No.4555
    // 説明:9de7
    // 0x9de7 (Windows-31J)
    // 0x6649 (UTF-16BE)
    if (argCheck == '晉') {
        return true;
    }
    // No.4556
    // 説明:9de8
    // 0x9de8 (Windows-31J)
    // 0x6641 (UTF-16BE)
    if (argCheck == '晁') {
        return true;
    }
    // No.4557
    // 説明:9de9
    // 0x9de9 (Windows-31J)
    // 0x665e (UTF-16BE)
    if (argCheck == '晞') {
        return true;
    }
    // No.4558
    // 説明:9dea
    // 0x9dea (Windows-31J)
    // 0x665d (UTF-16BE)
    if (argCheck == '晝') {
        return true;
    }
    // No.4559
    // 説明:9deb
    // 0x9deb (Windows-31J)
    // 0x6664 (UTF-16BE)
    if (argCheck == '晤') {
        return true;
    }
    // No.4560
    // 説明:9dec
    // 0x9dec (Windows-31J)
    // 0x6667 (UTF-16BE)
    if (argCheck == '晧') {
        return true;
    }
    // No.4561
    // 説明:9ded
    // 0x9ded (Windows-31J)
    // 0x6668 (UTF-16BE)
    if (argCheck == '晨') {
        return true;
    }
    // No.4562
    // 説明:9dee
    // 0x9dee (Windows-31J)
    // 0x665f (UTF-16BE)
    if (argCheck == '晟') {
        return true;
    }
    // No.4563
    // 説明:9def
    // 0x9def (Windows-31J)
    // 0x6662 (UTF-16BE)
    if (argCheck == '晢') {
        return true;
    }
    // No.4564
    // 説明:9df0
    // 0x9df0 (Windows-31J)
    // 0x6670 (UTF-16BE)
    if (argCheck == '晰') {
        return true;
    }
    // No.4565
    // 説明:9df1
    // 0x9df1 (Windows-31J)
    // 0x6683 (UTF-16BE)
    if (argCheck == '暃') {
        return true;
    }
    // No.4566
    // 説明:9df2
    // 0x9df2 (Windows-31J)
    // 0x6688 (UTF-16BE)
    if (argCheck == '暈') {
        return true;
    }
    // No.4567
    // 説明:9df3
    // 0x9df3 (Windows-31J)
    // 0x668e (UTF-16BE)
    if (argCheck == '暎') {
        return true;
    }
    // No.4568
    // 説明:9df4
    // 0x9df4 (Windows-31J)
    // 0x6689 (UTF-16BE)
    if (argCheck == '暉') {
        return true;
    }
    // No.4569
    // 説明:9df5
    // 0x9df5 (Windows-31J)
    // 0x6684 (UTF-16BE)
    if (argCheck == '暄') {
        return true;
    }
    // No.4570
    // 説明:9df6
    // 0x9df6 (Windows-31J)
    // 0x6698 (UTF-16BE)
    if (argCheck == '暘') {
        return true;
    }
    // No.4571
    // 説明:9df7
    // 0x9df7 (Windows-31J)
    // 0x669d (UTF-16BE)
    if (argCheck == '暝') {
        return true;
    }
    // No.4572
    // 説明:9df8
    // 0x9df8 (Windows-31J)
    // 0x66c1 (UTF-16BE)
    if (argCheck == '曁') {
        return true;
    }
    // No.4573
    // 説明:9df9
    // 0x9df9 (Windows-31J)
    // 0x66b9 (UTF-16BE)
    if (argCheck == '暹') {
        return true;
    }
    // No.4574
    // 説明:9dfa
    // 0x9dfa (Windows-31J)
    // 0x66c9 (UTF-16BE)
    if (argCheck == '曉') {
        return true;
    }
    // No.4575
    // 説明:9dfb
    // 0x9dfb (Windows-31J)
    // 0x66be (UTF-16BE)
    if (argCheck == '暾') {
        return true;
    }
    // No.4576
    // 説明:9dfc
    // 0x9dfc (Windows-31J)
    // 0x66bc (UTF-16BE)
    if (argCheck == '暼') {
        return true;
    }
    // No.4577
    // 説明:9e40
    // 0x9e40 (Windows-31J)
    // 0x66c4 (UTF-16BE)
    if (argCheck == '曄') {
        return true;
    }
    // No.4578
    // 説明:9e41
    // 0x9e41 (Windows-31J)
    // 0x66b8 (UTF-16BE)
    if (argCheck == '暸') {
        return true;
    }
    // No.4579
    // 説明:9e42
    // 0x9e42 (Windows-31J)
    // 0x66d6 (UTF-16BE)
    if (argCheck == '曖') {
        return true;
    }
    // No.4580
    // 説明:9e43
    // 0x9e43 (Windows-31J)
    // 0x66da (UTF-16BE)
    if (argCheck == '曚') {
        return true;
    }
    // No.4581
    // 説明:9e44
    // 0x9e44 (Windows-31J)
    // 0x66e0 (UTF-16BE)
    if (argCheck == '曠') {
        return true;
    }
    // No.4582
    // 説明:9e45
    // 0x9e45 (Windows-31J)
    // 0x663f (UTF-16BE)
    if (argCheck == '昿') {
        return true;
    }
    // No.4583
    // 説明:9e46
    // 0x9e46 (Windows-31J)
    // 0x66e6 (UTF-16BE)
    if (argCheck == '曦') {
        return true;
    }
    // No.4584
    // 説明:9e47
    // 0x9e47 (Windows-31J)
    // 0x66e9 (UTF-16BE)
    if (argCheck == '曩') {
        return true;
    }
    // No.4585
    // 説明:9e48
    // 0x9e48 (Windows-31J)
    // 0x66f0 (UTF-16BE)
    if (argCheck == '曰') {
        return true;
    }
    // No.4586
    // 説明:9e49
    // 0x9e49 (Windows-31J)
    // 0x66f5 (UTF-16BE)
    if (argCheck == '曵') {
        return true;
    }
    // No.4587
    // 説明:9e4a
    // 0x9e4a (Windows-31J)
    // 0x66f7 (UTF-16BE)
    if (argCheck == '曷') {
        return true;
    }
    // No.4588
    // 説明:9e4b
    // 0x9e4b (Windows-31J)
    // 0x670f (UTF-16BE)
    if (argCheck == '朏') {
        return true;
    }
    // No.4589
    // 説明:9e4c
    // 0x9e4c (Windows-31J)
    // 0x6716 (UTF-16BE)
    if (argCheck == '朖') {
        return true;
    }
    // No.4590
    // 説明:9e4d
    // 0x9e4d (Windows-31J)
    // 0x671e (UTF-16BE)
    if (argCheck == '朞') {
        return true;
    }
    // No.4591
    // 説明:9e4e
    // 0x9e4e (Windows-31J)
    // 0x6726 (UTF-16BE)
    if (argCheck == '朦') {
        return true;
    }
    // No.4592
    // 説明:9e4f
    // 0x9e4f (Windows-31J)
    // 0x6727 (UTF-16BE)
    if (argCheck == '朧') {
        return true;
    }
    // No.4593
    // 説明:9e50
    // 0x9e50 (Windows-31J)
    // 0x9738 (UTF-16BE)
    if (argCheck == '霸') {
        return true;
    }
    // No.4594
    // 説明:9e51
    // 0x9e51 (Windows-31J)
    // 0x672e (UTF-16BE)
    if (argCheck == '朮') {
        return true;
    }
    // No.4595
    // 説明:9e52
    // 0x9e52 (Windows-31J)
    // 0x673f (UTF-16BE)
    if (argCheck == '朿') {
        return true;
    }
    // No.4596
    // 説明:9e53
    // 0x9e53 (Windows-31J)
    // 0x6736 (UTF-16BE)
    if (argCheck == '朶') {
        return true;
    }
    // No.4597
    // 説明:9e54
    // 0x9e54 (Windows-31J)
    // 0x6741 (UTF-16BE)
    if (argCheck == '杁') {
        return true;
    }
    // No.4598
    // 説明:9e55
    // 0x9e55 (Windows-31J)
    // 0x6738 (UTF-16BE)
    if (argCheck == '朸') {
        return true;
    }
    // No.4599
    // 説明:9e56
    // 0x9e56 (Windows-31J)
    // 0x6737 (UTF-16BE)
    if (argCheck == '朷') {
        return true;
    }
    // No.4600
    // 説明:9e57
    // 0x9e57 (Windows-31J)
    // 0x6746 (UTF-16BE)
    if (argCheck == '杆') {
        return true;
    }
    // No.4601
    // 説明:9e58
    // 0x9e58 (Windows-31J)
    // 0x675e (UTF-16BE)
    if (argCheck == '杞') {
        return true;
    }
    // No.4602
    // 説明:9e59
    // 0x9e59 (Windows-31J)
    // 0x6760 (UTF-16BE)
    if (argCheck == '杠') {
        return true;
    }
    // No.4603
    // 説明:9e5a
    // 0x9e5a (Windows-31J)
    // 0x6759 (UTF-16BE)
    if (argCheck == '杙') {
        return true;
    }
    // No.4604
    // 説明:9e5b
    // 0x9e5b (Windows-31J)
    // 0x6763 (UTF-16BE)
    if (argCheck == '杣') {
        return true;
    }
    // No.4605
    // 説明:9e5c
    // 0x9e5c (Windows-31J)
    // 0x6764 (UTF-16BE)
    if (argCheck == '杤') {
        return true;
    }
    // No.4606
    // 説明:9e5d
    // 0x9e5d (Windows-31J)
    // 0x6789 (UTF-16BE)
    if (argCheck == '枉') {
        return true;
    }
    // No.4607
    // 説明:9e5e
    // 0x9e5e (Windows-31J)
    // 0x6770 (UTF-16BE)
    if (argCheck == '杰') {
        return true;
    }
    // No.4608
    // 説明:9e5f
    // 0x9e5f (Windows-31J)
    // 0x67a9 (UTF-16BE)
    if (argCheck == '枩') {
        return true;
    }
    // No.4609
    // 説明:9e60
    // 0x9e60 (Windows-31J)
    // 0x677c (UTF-16BE)
    if (argCheck == '杼') {
        return true;
    }
    // No.4610
    // 説明:9e61
    // 0x9e61 (Windows-31J)
    // 0x676a (UTF-16BE)
    if (argCheck == '杪') {
        return true;
    }
    // No.4611
    // 説明:9e62
    // 0x9e62 (Windows-31J)
    // 0x678c (UTF-16BE)
    if (argCheck == '枌') {
        return true;
    }
    // No.4612
    // 説明:9e63
    // 0x9e63 (Windows-31J)
    // 0x678b (UTF-16BE)
    if (argCheck == '枋') {
        return true;
    }
    // No.4613
    // 説明:9e64
    // 0x9e64 (Windows-31J)
    // 0x67a6 (UTF-16BE)
    if (argCheck == '枦') {
        return true;
    }
    // No.4614
    // 説明:9e65
    // 0x9e65 (Windows-31J)
    // 0x67a1 (UTF-16BE)
    if (argCheck == '枡') {
        return true;
    }
    // No.4615
    // 説明:9e66
    // 0x9e66 (Windows-31J)
    // 0x6785 (UTF-16BE)
    if (argCheck == '枅') {
        return true;
    }
    // No.4616
    // 説明:9e67
    // 0x9e67 (Windows-31J)
    // 0x67b7 (UTF-16BE)
    if (argCheck == '枷') {
        return true;
    }
    // No.4617
    // 説明:9e68
    // 0x9e68 (Windows-31J)
    // 0x67ef (UTF-16BE)
    if (argCheck == '柯') {
        return true;
    }
    // No.4618
    // 説明:9e69
    // 0x9e69 (Windows-31J)
    // 0x67b4 (UTF-16BE)
    if (argCheck == '枴') {
        return true;
    }
    // No.4619
    // 説明:9e6a
    // 0x9e6a (Windows-31J)
    // 0x67ec (UTF-16BE)
    if (argCheck == '柬') {
        return true;
    }
    // No.4620
    // 説明:9e6b
    // 0x9e6b (Windows-31J)
    // 0x67b3 (UTF-16BE)
    if (argCheck == '枳') {
        return true;
    }
    // No.4621
    // 説明:9e6c
    // 0x9e6c (Windows-31J)
    // 0x67e9 (UTF-16BE)
    if (argCheck == '柩') {
        return true;
    }
    // No.4622
    // 説明:9e6d
    // 0x9e6d (Windows-31J)
    // 0x67b8 (UTF-16BE)
    if (argCheck == '枸') {
        return true;
    }
    // No.4623
    // 説明:9e6e
    // 0x9e6e (Windows-31J)
    // 0x67e4 (UTF-16BE)
    if (argCheck == '柤') {
        return true;
    }
    // No.4624
    // 説明:9e6f
    // 0x9e6f (Windows-31J)
    // 0x67de (UTF-16BE)
    if (argCheck == '柞') {
        return true;
    }
    // No.4625
    // 説明:9e70
    // 0x9e70 (Windows-31J)
    // 0x67dd (UTF-16BE)
    if (argCheck == '柝') {
        return true;
    }
    // No.4626
    // 説明:9e71
    // 0x9e71 (Windows-31J)
    // 0x67e2 (UTF-16BE)
    if (argCheck == '柢') {
        return true;
    }
    // No.4627
    // 説明:9e72
    // 0x9e72 (Windows-31J)
    // 0x67ee (UTF-16BE)
    if (argCheck == '柮') {
        return true;
    }
    // No.4628
    // 説明:9e73
    // 0x9e73 (Windows-31J)
    // 0x67b9 (UTF-16BE)
    if (argCheck == '枹') {
        return true;
    }
    // No.4629
    // 説明:9e74
    // 0x9e74 (Windows-31J)
    // 0x67ce (UTF-16BE)
    if (argCheck == '柎') {
        return true;
    }
    // No.4630
    // 説明:9e75
    // 0x9e75 (Windows-31J)
    // 0x67c6 (UTF-16BE)
    if (argCheck == '柆') {
        return true;
    }
    // No.4631
    // 説明:9e76
    // 0x9e76 (Windows-31J)
    // 0x67e7 (UTF-16BE)
    if (argCheck == '柧') {
        return true;
    }
    // No.4632
    // 説明:9e77
    // 0x9e77 (Windows-31J)
    // 0x6a9c (UTF-16BE)
    if (argCheck == '檜') {
        return true;
    }
    // No.4633
    // 説明:9e78
    // 0x9e78 (Windows-31J)
    // 0x681e (UTF-16BE)
    if (argCheck == '栞') {
        return true;
    }
    // No.4634
    // 説明:9e79
    // 0x9e79 (Windows-31J)
    // 0x6846 (UTF-16BE)
    if (argCheck == '框') {
        return true;
    }
    // No.4635
    // 説明:9e7a
    // 0x9e7a (Windows-31J)
    // 0x6829 (UTF-16BE)
    if (argCheck == '栩') {
        return true;
    }
    // No.4636
    // 説明:9e7b
    // 0x9e7b (Windows-31J)
    // 0x6840 (UTF-16BE)
    if (argCheck == '桀') {
        return true;
    }
    // No.4637
    // 説明:9e7c
    // 0x9e7c (Windows-31J)
    // 0x684d (UTF-16BE)
    if (argCheck == '桍') {
        return true;
    }
    // No.4638
    // 説明:9e7d
    // 0x9e7d (Windows-31J)
    // 0x6832 (UTF-16BE)
    if (argCheck == '栲') {
        return true;
    }
    // No.4639
    // 説明:9e7e
    // 0x9e7e (Windows-31J)
    // 0x684e (UTF-16BE)
    if (argCheck == '桎') {
        return true;
    }
    // No.4640
    // 説明:9e80
    // 0x9e80 (Windows-31J)
    // 0x68b3 (UTF-16BE)
    if (argCheck == '梳') {
        return true;
    }
    // No.4641
    // 説明:9e81
    // 0x9e81 (Windows-31J)
    // 0x682b (UTF-16BE)
    if (argCheck == '栫') {
        return true;
    }
    // No.4642
    // 説明:9e82
    // 0x9e82 (Windows-31J)
    // 0x6859 (UTF-16BE)
    if (argCheck == '桙') {
        return true;
    }
    // No.4643
    // 説明:9e83
    // 0x9e83 (Windows-31J)
    // 0x6863 (UTF-16BE)
    if (argCheck == '档') {
        return true;
    }
    // No.4644
    // 説明:9e84
    // 0x9e84 (Windows-31J)
    // 0x6877 (UTF-16BE)
    if (argCheck == '桷') {
        return true;
    }
    // No.4645
    // 説明:9e85
    // 0x9e85 (Windows-31J)
    // 0x687f (UTF-16BE)
    if (argCheck == '桿') {
        return true;
    }
    // No.4646
    // 説明:9e86
    // 0x9e86 (Windows-31J)
    // 0x689f (UTF-16BE)
    if (argCheck == '梟') {
        return true;
    }
    // No.4647
    // 説明:9e87
    // 0x9e87 (Windows-31J)
    // 0x688f (UTF-16BE)
    if (argCheck == '梏') {
        return true;
    }
    // No.4648
    // 説明:9e88
    // 0x9e88 (Windows-31J)
    // 0x68ad (UTF-16BE)
    if (argCheck == '梭') {
        return true;
    }
    // No.4649
    // 説明:9e89
    // 0x9e89 (Windows-31J)
    // 0x6894 (UTF-16BE)
    if (argCheck == '梔') {
        return true;
    }
    // No.4650
    // 説明:9e8a
    // 0x9e8a (Windows-31J)
    // 0x689d (UTF-16BE)
    if (argCheck == '條') {
        return true;
    }
    // No.4651
    // 説明:9e8b
    // 0x9e8b (Windows-31J)
    // 0x689b (UTF-16BE)
    if (argCheck == '梛') {
        return true;
    }
    // No.4652
    // 説明:9e8c
    // 0x9e8c (Windows-31J)
    // 0x6883 (UTF-16BE)
    if (argCheck == '梃') {
        return true;
    }
    // No.4653
    // 説明:9e8d
    // 0x9e8d (Windows-31J)
    // 0x6aae (UTF-16BE)
    if (argCheck == '檮') {
        return true;
    }
    // No.4654
    // 説明:9e8e
    // 0x9e8e (Windows-31J)
    // 0x68b9 (UTF-16BE)
    if (argCheck == '梹') {
        return true;
    }
    // No.4655
    // 説明:9e8f
    // 0x9e8f (Windows-31J)
    // 0x6874 (UTF-16BE)
    if (argCheck == '桴') {
        return true;
    }
    // No.4656
    // 説明:9e90
    // 0x9e90 (Windows-31J)
    // 0x68b5 (UTF-16BE)
    if (argCheck == '梵') {
        return true;
    }
    // No.4657
    // 説明:9e91
    // 0x9e91 (Windows-31J)
    // 0x68a0 (UTF-16BE)
    if (argCheck == '梠') {
        return true;
    }
    // No.4658
    // 説明:9e92
    // 0x9e92 (Windows-31J)
    // 0x68ba (UTF-16BE)
    if (argCheck == '梺') {
        return true;
    }
    // No.4659
    // 説明:9e93
    // 0x9e93 (Windows-31J)
    // 0x690f (UTF-16BE)
    if (argCheck == '椏') {
        return true;
    }
    // No.4660
    // 説明:9e94
    // 0x9e94 (Windows-31J)
    // 0x688d (UTF-16BE)
    if (argCheck == '梍') {
        return true;
    }
    // No.4661
    // 説明:9e95
    // 0x9e95 (Windows-31J)
    // 0x687e (UTF-16BE)
    if (argCheck == '桾') {
        return true;
    }
    // No.4662
    // 説明:9e96
    // 0x9e96 (Windows-31J)
    // 0x6901 (UTF-16BE)
    if (argCheck == '椁') {
        return true;
    }
    // No.4663
    // 説明:9e97
    // 0x9e97 (Windows-31J)
    // 0x68ca (UTF-16BE)
    if (argCheck == '棊') {
        return true;
    }
    // No.4664
    // 説明:9e98
    // 0x9e98 (Windows-31J)
    // 0x6908 (UTF-16BE)
    if (argCheck == '椈') {
        return true;
    }
    // No.4665
    // 説明:9e99
    // 0x9e99 (Windows-31J)
    // 0x68d8 (UTF-16BE)
    if (argCheck == '棘') {
        return true;
    }
    // No.4666
    // 説明:9e9a
    // 0x9e9a (Windows-31J)
    // 0x6922 (UTF-16BE)
    if (argCheck == '椢') {
        return true;
    }
    // No.4667
    // 説明:9e9b
    // 0x9e9b (Windows-31J)
    // 0x6926 (UTF-16BE)
    if (argCheck == '椦') {
        return true;
    }
    // No.4668
    // 説明:9e9c
    // 0x9e9c (Windows-31J)
    // 0x68e1 (UTF-16BE)
    if (argCheck == '棡') {
        return true;
    }
    // No.4669
    // 説明:9e9d
    // 0x9e9d (Windows-31J)
    // 0x690c (UTF-16BE)
    if (argCheck == '椌') {
        return true;
    }
    // No.4670
    // 説明:9e9e
    // 0x9e9e (Windows-31J)
    // 0x68cd (UTF-16BE)
    if (argCheck == '棍') {
        return true;
    }
    // No.4671
    // 説明:9e9f
    // 0x9e9f (Windows-31J)
    // 0x68d4 (UTF-16BE)
    if (argCheck == '棔') {
        return true;
    }
    // No.4672
    // 説明:9ea0
    // 0x9ea0 (Windows-31J)
    // 0x68e7 (UTF-16BE)
    if (argCheck == '棧') {
        return true;
    }
    // No.4673
    // 説明:9ea1
    // 0x9ea1 (Windows-31J)
    // 0x68d5 (UTF-16BE)
    if (argCheck == '棕') {
        return true;
    }
    // No.4674
    // 説明:9ea2
    // 0x9ea2 (Windows-31J)
    // 0x6936 (UTF-16BE)
    if (argCheck == '椶') {
        return true;
    }
    // No.4675
    // 説明:9ea3
    // 0x9ea3 (Windows-31J)
    // 0x6912 (UTF-16BE)
    if (argCheck == '椒') {
        return true;
    }
    // No.4676
    // 説明:9ea4
    // 0x9ea4 (Windows-31J)
    // 0x6904 (UTF-16BE)
    if (argCheck == '椄') {
        return true;
    }
    // No.4677
    // 説明:9ea5
    // 0x9ea5 (Windows-31J)
    // 0x68d7 (UTF-16BE)
    if (argCheck == '棗') {
        return true;
    }
    // No.4678
    // 説明:9ea6
    // 0x9ea6 (Windows-31J)
    // 0x68e3 (UTF-16BE)
    if (argCheck == '棣') {
        return true;
    }
    // No.4679
    // 説明:9ea7
    // 0x9ea7 (Windows-31J)
    // 0x6925 (UTF-16BE)
    if (argCheck == '椥') {
        return true;
    }
    // No.4680
    // 説明:9ea8
    // 0x9ea8 (Windows-31J)
    // 0x68f9 (UTF-16BE)
    if (argCheck == '棹') {
        return true;
    }
    // No.4681
    // 説明:9ea9
    // 0x9ea9 (Windows-31J)
    // 0x68e0 (UTF-16BE)
    if (argCheck == '棠') {
        return true;
    }
    // No.4682
    // 説明:9eaa
    // 0x9eaa (Windows-31J)
    // 0x68ef (UTF-16BE)
    if (argCheck == '棯') {
        return true;
    }
    // No.4683
    // 説明:9eab
    // 0x9eab (Windows-31J)
    // 0x6928 (UTF-16BE)
    if (argCheck == '椨') {
        return true;
    }
    // No.4684
    // 説明:9eac
    // 0x9eac (Windows-31J)
    // 0x692a (UTF-16BE)
    if (argCheck == '椪') {
        return true;
    }
    // No.4685
    // 説明:9ead
    // 0x9ead (Windows-31J)
    // 0x691a (UTF-16BE)
    if (argCheck == '椚') {
        return true;
    }
    // No.4686
    // 説明:9eae
    // 0x9eae (Windows-31J)
    // 0x6923 (UTF-16BE)
    if (argCheck == '椣') {
        return true;
    }
    // No.4687
    // 説明:9eaf
    // 0x9eaf (Windows-31J)
    // 0x6921 (UTF-16BE)
    if (argCheck == '椡') {
        return true;
    }
    // No.4688
    // 説明:9eb0
    // 0x9eb0 (Windows-31J)
    // 0x68c6 (UTF-16BE)
    if (argCheck == '棆') {
        return true;
    }
    // No.4689
    // 説明:9eb1
    // 0x9eb1 (Windows-31J)
    // 0x6979 (UTF-16BE)
    if (argCheck == '楹') {
        return true;
    }
    // No.4690
    // 説明:9eb2
    // 0x9eb2 (Windows-31J)
    // 0x6977 (UTF-16BE)
    if (argCheck == '楷') {
        return true;
    }
    // No.4691
    // 説明:9eb3
    // 0x9eb3 (Windows-31J)
    // 0x695c (UTF-16BE)
    if (argCheck == '楜') {
        return true;
    }
    // No.4692
    // 説明:9eb4
    // 0x9eb4 (Windows-31J)
    // 0x6978 (UTF-16BE)
    if (argCheck == '楸') {
        return true;
    }
    // No.4693
    // 説明:9eb5
    // 0x9eb5 (Windows-31J)
    // 0x696b (UTF-16BE)
    if (argCheck == '楫') {
        return true;
    }
    // No.4694
    // 説明:9eb6
    // 0x9eb6 (Windows-31J)
    // 0x6954 (UTF-16BE)
    if (argCheck == '楔') {
        return true;
    }
    // No.4695
    // 説明:9eb7
    // 0x9eb7 (Windows-31J)
    // 0x697e (UTF-16BE)
    if (argCheck == '楾') {
        return true;
    }
    // No.4696
    // 説明:9eb8
    // 0x9eb8 (Windows-31J)
    // 0x696e (UTF-16BE)
    if (argCheck == '楮') {
        return true;
    }
    // No.4697
    // 説明:9eb9
    // 0x9eb9 (Windows-31J)
    // 0x6939 (UTF-16BE)
    if (argCheck == '椹') {
        return true;
    }
    // No.4698
    // 説明:9eba
    // 0x9eba (Windows-31J)
    // 0x6974 (UTF-16BE)
    if (argCheck == '楴') {
        return true;
    }
    // No.4699
    // 説明:9ebb
    // 0x9ebb (Windows-31J)
    // 0x693d (UTF-16BE)
    if (argCheck == '椽') {
        return true;
    }
    // No.4700
    // 説明:9ebc
    // 0x9ebc (Windows-31J)
    // 0x6959 (UTF-16BE)
    if (argCheck == '楙') {
        return true;
    }
    // No.4701
    // 説明:9ebd
    // 0x9ebd (Windows-31J)
    // 0x6930 (UTF-16BE)
    if (argCheck == '椰') {
        return true;
    }
    // No.4702
    // 説明:9ebe
    // 0x9ebe (Windows-31J)
    // 0x6961 (UTF-16BE)
    if (argCheck == '楡') {
        return true;
    }
    // No.4703
    // 説明:9ebf
    // 0x9ebf (Windows-31J)
    // 0x695e (UTF-16BE)
    if (argCheck == '楞') {
        return true;
    }
    // No.4704
    // 説明:9ec0
    // 0x9ec0 (Windows-31J)
    // 0x695d (UTF-16BE)
    if (argCheck == '楝') {
        return true;
    }
    // No.4705
    // 説明:9ec1
    // 0x9ec1 (Windows-31J)
    // 0x6981 (UTF-16BE)
    if (argCheck == '榁') {
        return true;
    }
    // No.4706
    // 説明:9ec2
    // 0x9ec2 (Windows-31J)
    // 0x696a (UTF-16BE)
    if (argCheck == '楪') {
        return true;
    }
    // No.4707
    // 説明:9ec3
    // 0x9ec3 (Windows-31J)
    // 0x69b2 (UTF-16BE)
    if (argCheck == '榲') {
        return true;
    }
    // No.4708
    // 説明:9ec4
    // 0x9ec4 (Windows-31J)
    // 0x69ae (UTF-16BE)
    if (argCheck == '榮') {
        return true;
    }
    // No.4709
    // 説明:9ec5
    // 0x9ec5 (Windows-31J)
    // 0x69d0 (UTF-16BE)
    if (argCheck == '槐') {
        return true;
    }
    // No.4710
    // 説明:9ec6
    // 0x9ec6 (Windows-31J)
    // 0x69bf (UTF-16BE)
    if (argCheck == '榿') {
        return true;
    }
    // No.4711
    // 説明:9ec7
    // 0x9ec7 (Windows-31J)
    // 0x69c1 (UTF-16BE)
    if (argCheck == '槁') {
        return true;
    }
    // No.4712
    // 説明:9ec8
    // 0x9ec8 (Windows-31J)
    // 0x69d3 (UTF-16BE)
    if (argCheck == '槓') {
        return true;
    }
    // No.4713
    // 説明:9ec9
    // 0x9ec9 (Windows-31J)
    // 0x69be (UTF-16BE)
    if (argCheck == '榾') {
        return true;
    }
    // No.4714
    // 説明:9eca
    // 0x9eca (Windows-31J)
    // 0x69ce (UTF-16BE)
    if (argCheck == '槎') {
        return true;
    }
    // No.4715
    // 説明:9ecb
    // 0x9ecb (Windows-31J)
    // 0x5be8 (UTF-16BE)
    if (argCheck == '寨') {
        return true;
    }
    // No.4716
    // 説明:9ecc
    // 0x9ecc (Windows-31J)
    // 0x69ca (UTF-16BE)
    if (argCheck == '槊') {
        return true;
    }
    // No.4717
    // 説明:9ecd
    // 0x9ecd (Windows-31J)
    // 0x69dd (UTF-16BE)
    if (argCheck == '槝') {
        return true;
    }
    // No.4718
    // 説明:9ece
    // 0x9ece (Windows-31J)
    // 0x69bb (UTF-16BE)
    if (argCheck == '榻') {
        return true;
    }
    // No.4719
    // 説明:9ecf
    // 0x9ecf (Windows-31J)
    // 0x69c3 (UTF-16BE)
    if (argCheck == '槃') {
        return true;
    }
    // No.4720
    // 説明:9ed0
    // 0x9ed0 (Windows-31J)
    // 0x69a7 (UTF-16BE)
    if (argCheck == '榧') {
        return true;
    }
    // No.4721
    // 説明:9ed1
    // 0x9ed1 (Windows-31J)
    // 0x6a2e (UTF-16BE)
    if (argCheck == '樮') {
        return true;
    }
    // No.4722
    // 説明:9ed2
    // 0x9ed2 (Windows-31J)
    // 0x6991 (UTF-16BE)
    if (argCheck == '榑') {
        return true;
    }
    // No.4723
    // 説明:9ed3
    // 0x9ed3 (Windows-31J)
    // 0x69a0 (UTF-16BE)
    if (argCheck == '榠') {
        return true;
    }
    // No.4724
    // 説明:9ed4
    // 0x9ed4 (Windows-31J)
    // 0x699c (UTF-16BE)
    if (argCheck == '榜') {
        return true;
    }
    // No.4725
    // 説明:9ed5
    // 0x9ed5 (Windows-31J)
    // 0x6995 (UTF-16BE)
    if (argCheck == '榕') {
        return true;
    }
    // No.4726
    // 説明:9ed6
    // 0x9ed6 (Windows-31J)
    // 0x69b4 (UTF-16BE)
    if (argCheck == '榴') {
        return true;
    }
    // No.4727
    // 説明:9ed7
    // 0x9ed7 (Windows-31J)
    // 0x69de (UTF-16BE)
    if (argCheck == '槞') {
        return true;
    }
    // No.4728
    // 説明:9ed8
    // 0x9ed8 (Windows-31J)
    // 0x69e8 (UTF-16BE)
    if (argCheck == '槨') {
        return true;
    }
    // No.4729
    // 説明:9ed9
    // 0x9ed9 (Windows-31J)
    // 0x6a02 (UTF-16BE)
    if (argCheck == '樂') {
        return true;
    }
    // No.4730
    // 説明:9eda
    // 0x9eda (Windows-31J)
    // 0x6a1b (UTF-16BE)
    if (argCheck == '樛') {
        return true;
    }
    // No.4731
    // 説明:9edb
    // 0x9edb (Windows-31J)
    // 0x69ff (UTF-16BE)
    if (argCheck == '槿') {
        return true;
    }
    // No.4732
    // 説明:9edc
    // 0x9edc (Windows-31J)
    // 0x6b0a (UTF-16BE)
    if (argCheck == '權') {
        return true;
    }
    // No.4733
    // 説明:9edd
    // 0x9edd (Windows-31J)
    // 0x69f9 (UTF-16BE)
    if (argCheck == '槹') {
        return true;
    }
    // No.4734
    // 説明:9ede
    // 0x9ede (Windows-31J)
    // 0x69f2 (UTF-16BE)
    if (argCheck == '槲') {
        return true;
    }
    // No.4735
    // 説明:9edf
    // 0x9edf (Windows-31J)
    // 0x69e7 (UTF-16BE)
    if (argCheck == '槧') {
        return true;
    }
    // No.4736
    // 説明:9ee0
    // 0x9ee0 (Windows-31J)
    // 0x6a05 (UTF-16BE)
    if (argCheck == '樅') {
        return true;
    }
    // No.4737
    // 説明:9ee1
    // 0x9ee1 (Windows-31J)
    // 0x69b1 (UTF-16BE)
    if (argCheck == '榱') {
        return true;
    }
    // No.4738
    // 説明:9ee2
    // 0x9ee2 (Windows-31J)
    // 0x6a1e (UTF-16BE)
    if (argCheck == '樞') {
        return true;
    }
    // No.4739
    // 説明:9ee3
    // 0x9ee3 (Windows-31J)
    // 0x69ed (UTF-16BE)
    if (argCheck == '槭') {
        return true;
    }
    // No.4740
    // 説明:9ee4
    // 0x9ee4 (Windows-31J)
    // 0x6a14 (UTF-16BE)
    if (argCheck == '樔') {
        return true;
    }
    // No.4741
    // 説明:9ee5
    // 0x9ee5 (Windows-31J)
    // 0x69eb (UTF-16BE)
    if (argCheck == '槫') {
        return true;
    }
    // No.4742
    // 説明:9ee6
    // 0x9ee6 (Windows-31J)
    // 0x6a0a (UTF-16BE)
    if (argCheck == '樊') {
        return true;
    }
    // No.4743
    // 説明:9ee7
    // 0x9ee7 (Windows-31J)
    // 0x6a12 (UTF-16BE)
    if (argCheck == '樒') {
        return true;
    }
    // No.4744
    // 説明:9ee8
    // 0x9ee8 (Windows-31J)
    // 0x6ac1 (UTF-16BE)
    if (argCheck == '櫁') {
        return true;
    }
    // No.4745
    // 説明:9ee9
    // 0x9ee9 (Windows-31J)
    // 0x6a23 (UTF-16BE)
    if (argCheck == '樣') {
        return true;
    }
    // No.4746
    // 説明:9eea
    // 0x9eea (Windows-31J)
    // 0x6a13 (UTF-16BE)
    if (argCheck == '樓') {
        return true;
    }
    // No.4747
    // 説明:9eeb
    // 0x9eeb (Windows-31J)
    // 0x6a44 (UTF-16BE)
    if (argCheck == '橄') {
        return true;
    }
    // No.4748
    // 説明:9eec
    // 0x9eec (Windows-31J)
    // 0x6a0c (UTF-16BE)
    if (argCheck == '樌') {
        return true;
    }
    // No.4749
    // 説明:9eed
    // 0x9eed (Windows-31J)
    // 0x6a72 (UTF-16BE)
    if (argCheck == '橲') {
        return true;
    }
    // No.4750
    // 説明:9eee
    // 0x9eee (Windows-31J)
    // 0x6a36 (UTF-16BE)
    if (argCheck == '樶') {
        return true;
    }
    // No.4751
    // 説明:9eef
    // 0x9eef (Windows-31J)
    // 0x6a78 (UTF-16BE)
    if (argCheck == '橸') {
        return true;
    }
    // No.4752
    // 説明:9ef0
    // 0x9ef0 (Windows-31J)
    // 0x6a47 (UTF-16BE)
    if (argCheck == '橇') {
        return true;
    }
    // No.4753
    // 説明:9ef1
    // 0x9ef1 (Windows-31J)
    // 0x6a62 (UTF-16BE)
    if (argCheck == '橢') {
        return true;
    }
    // No.4754
    // 説明:9ef2
    // 0x9ef2 (Windows-31J)
    // 0x6a59 (UTF-16BE)
    if (argCheck == '橙') {
        return true;
    }
    // No.4755
    // 説明:9ef3
    // 0x9ef3 (Windows-31J)
    // 0x6a66 (UTF-16BE)
    if (argCheck == '橦') {
        return true;
    }
    // No.4756
    // 説明:9ef4
    // 0x9ef4 (Windows-31J)
    // 0x6a48 (UTF-16BE)
    if (argCheck == '橈') {
        return true;
    }
    // No.4757
    // 説明:9ef5
    // 0x9ef5 (Windows-31J)
    // 0x6a38 (UTF-16BE)
    if (argCheck == '樸') {
        return true;
    }
    // No.4758
    // 説明:9ef6
    // 0x9ef6 (Windows-31J)
    // 0x6a22 (UTF-16BE)
    if (argCheck == '樢') {
        return true;
    }
    // No.4759
    // 説明:9ef7
    // 0x9ef7 (Windows-31J)
    // 0x6a90 (UTF-16BE)
    if (argCheck == '檐') {
        return true;
    }
    // No.4760
    // 説明:9ef8
    // 0x9ef8 (Windows-31J)
    // 0x6a8d (UTF-16BE)
    if (argCheck == '檍') {
        return true;
    }
    // No.4761
    // 説明:9ef9
    // 0x9ef9 (Windows-31J)
    // 0x6aa0 (UTF-16BE)
    if (argCheck == '檠') {
        return true;
    }
    // No.4762
    // 説明:9efa
    // 0x9efa (Windows-31J)
    // 0x6a84 (UTF-16BE)
    if (argCheck == '檄') {
        return true;
    }
    // No.4763
    // 説明:9efb
    // 0x9efb (Windows-31J)
    // 0x6aa2 (UTF-16BE)
    if (argCheck == '檢') {
        return true;
    }
    // No.4764
    // 説明:9efc
    // 0x9efc (Windows-31J)
    // 0x6aa3 (UTF-16BE)
    if (argCheck == '檣') {
        return true;
    }
    // No.4765
    // 説明:9f40
    // 0x9f40 (Windows-31J)
    // 0x6a97 (UTF-16BE)
    if (argCheck == '檗') {
        return true;
    }
    // No.4766
    // 説明:9f41
    // 0x9f41 (Windows-31J)
    // 0x8617 (UTF-16BE)
    if (argCheck == '蘗') {
        return true;
    }
    // No.4767
    // 説明:9f42
    // 0x9f42 (Windows-31J)
    // 0x6abb (UTF-16BE)
    if (argCheck == '檻') {
        return true;
    }
    // No.4768
    // 説明:9f43
    // 0x9f43 (Windows-31J)
    // 0x6ac3 (UTF-16BE)
    if (argCheck == '櫃') {
        return true;
    }
    // No.4769
    // 説明:9f44
    // 0x9f44 (Windows-31J)
    // 0x6ac2 (UTF-16BE)
    if (argCheck == '櫂') {
        return true;
    }
    // No.4770
    // 説明:9f45
    // 0x9f45 (Windows-31J)
    // 0x6ab8 (UTF-16BE)
    if (argCheck == '檸') {
        return true;
    }
    // No.4771
    // 説明:9f46
    // 0x9f46 (Windows-31J)
    // 0x6ab3 (UTF-16BE)
    if (argCheck == '檳') {
        return true;
    }
    // No.4772
    // 説明:9f47
    // 0x9f47 (Windows-31J)
    // 0x6aac (UTF-16BE)
    if (argCheck == '檬') {
        return true;
    }
    // No.4773
    // 説明:9f48
    // 0x9f48 (Windows-31J)
    // 0x6ade (UTF-16BE)
    if (argCheck == '櫞') {
        return true;
    }
    // No.4774
    // 説明:9f49
    // 0x9f49 (Windows-31J)
    // 0x6ad1 (UTF-16BE)
    if (argCheck == '櫑') {
        return true;
    }
    // No.4775
    // 説明:9f4a
    // 0x9f4a (Windows-31J)
    // 0x6adf (UTF-16BE)
    if (argCheck == '櫟') {
        return true;
    }
    // No.4776
    // 説明:9f4b
    // 0x9f4b (Windows-31J)
    // 0x6aaa (UTF-16BE)
    if (argCheck == '檪') {
        return true;
    }
    // No.4777
    // 説明:9f4c
    // 0x9f4c (Windows-31J)
    // 0x6ada (UTF-16BE)
    if (argCheck == '櫚') {
        return true;
    }
    // No.4778
    // 説明:9f4d
    // 0x9f4d (Windows-31J)
    // 0x6aea (UTF-16BE)
    if (argCheck == '櫪') {
        return true;
    }
    // No.4779
    // 説明:9f4e
    // 0x9f4e (Windows-31J)
    // 0x6afb (UTF-16BE)
    if (argCheck == '櫻') {
        return true;
    }
    // No.4780
    // 説明:9f4f
    // 0x9f4f (Windows-31J)
    // 0x6b05 (UTF-16BE)
    if (argCheck == '欅') {
        return true;
    }
    // No.4781
    // 説明:9f50
    // 0x9f50 (Windows-31J)
    // 0x8616 (UTF-16BE)
    if (argCheck == '蘖') {
        return true;
    }
    // No.4782
    // 説明:9f51
    // 0x9f51 (Windows-31J)
    // 0x6afa (UTF-16BE)
    if (argCheck == '櫺') {
        return true;
    }
    // No.4783
    // 説明:9f52
    // 0x9f52 (Windows-31J)
    // 0x6b12 (UTF-16BE)
    if (argCheck == '欒') {
        return true;
    }
    // No.4784
    // 説明:9f53
    // 0x9f53 (Windows-31J)
    // 0x6b16 (UTF-16BE)
    if (argCheck == '欖') {
        return true;
    }
    // No.4785
    // 説明:9f54
    // 0x9f54 (Windows-31J)
    // 0x9b31 (UTF-16BE)
    if (argCheck == '鬱') {
        return true;
    }
    // No.4786
    // 説明:9f55
    // 0x9f55 (Windows-31J)
    // 0x6b1f (UTF-16BE)
    if (argCheck == '欟') {
        return true;
    }
    // No.4787
    // 説明:9f56
    // 0x9f56 (Windows-31J)
    // 0x6b38 (UTF-16BE)
    if (argCheck == '欸') {
        return true;
    }
    // No.4788
    // 説明:9f57
    // 0x9f57 (Windows-31J)
    // 0x6b37 (UTF-16BE)
    if (argCheck == '欷') {
        return true;
    }
    // No.4789
    // 説明:9f58
    // 0x9f58 (Windows-31J)
    // 0x76dc (UTF-16BE)
    if (argCheck == '盜') {
        return true;
    }
    // No.4790
    // 説明:9f59
    // 0x9f59 (Windows-31J)
    // 0x6b39 (UTF-16BE)
    if (argCheck == '欹') {
        return true;
    }
    // No.4791
    // 説明:9f5a
    // 0x9f5a (Windows-31J)
    // 0x98ee (UTF-16BE)
    if (argCheck == '飮') {
        return true;
    }
    // No.4792
    // 説明:9f5b
    // 0x9f5b (Windows-31J)
    // 0x6b47 (UTF-16BE)
    if (argCheck == '歇') {
        return true;
    }
    // No.4793
    // 説明:9f5c
    // 0x9f5c (Windows-31J)
    // 0x6b43 (UTF-16BE)
    if (argCheck == '歃') {
        return true;
    }
    // No.4794
    // 説明:9f5d
    // 0x9f5d (Windows-31J)
    // 0x6b49 (UTF-16BE)
    if (argCheck == '歉') {
        return true;
    }
    // No.4795
    // 説明:9f5e
    // 0x9f5e (Windows-31J)
    // 0x6b50 (UTF-16BE)
    if (argCheck == '歐') {
        return true;
    }
    // No.4796
    // 説明:9f5f
    // 0x9f5f (Windows-31J)
    // 0x6b59 (UTF-16BE)
    if (argCheck == '歙') {
        return true;
    }
    // No.4797
    // 説明:9f60
    // 0x9f60 (Windows-31J)
    // 0x6b54 (UTF-16BE)
    if (argCheck == '歔') {
        return true;
    }
    // No.4798
    // 説明:9f61
    // 0x9f61 (Windows-31J)
    // 0x6b5b (UTF-16BE)
    if (argCheck == '歛') {
        return true;
    }
    // No.4799
    // 説明:9f62
    // 0x9f62 (Windows-31J)
    // 0x6b5f (UTF-16BE)
    if (argCheck == '歟') {
        return true;
    }
    // No.4800
    // 説明:9f63
    // 0x9f63 (Windows-31J)
    // 0x6b61 (UTF-16BE)
    if (argCheck == '歡') {
        return true;
    }
    // No.4801
    // 説明:9f64
    // 0x9f64 (Windows-31J)
    // 0x6b78 (UTF-16BE)
    if (argCheck == '歸') {
        return true;
    }
    // No.4802
    // 説明:9f65
    // 0x9f65 (Windows-31J)
    // 0x6b79 (UTF-16BE)
    if (argCheck == '歹') {
        return true;
    }
    // No.4803
    // 説明:9f66
    // 0x9f66 (Windows-31J)
    // 0x6b7f (UTF-16BE)
    if (argCheck == '歿') {
        return true;
    }
    // No.4804
    // 説明:9f67
    // 0x9f67 (Windows-31J)
    // 0x6b80 (UTF-16BE)
    if (argCheck == '殀') {
        return true;
    }
    // No.4805
    // 説明:9f68
    // 0x9f68 (Windows-31J)
    // 0x6b84 (UTF-16BE)
    if (argCheck == '殄') {
        return true;
    }
    // No.4806
    // 説明:9f69
    // 0x9f69 (Windows-31J)
    // 0x6b83 (UTF-16BE)
    if (argCheck == '殃') {
        return true;
    }
    // No.4807
    // 説明:9f6a
    // 0x9f6a (Windows-31J)
    // 0x6b8d (UTF-16BE)
    if (argCheck == '殍') {
        return true;
    }
    // No.4808
    // 説明:9f6b
    // 0x9f6b (Windows-31J)
    // 0x6b98 (UTF-16BE)
    if (argCheck == '殘') {
        return true;
    }
    // No.4809
    // 説明:9f6c
    // 0x9f6c (Windows-31J)
    // 0x6b95 (UTF-16BE)
    if (argCheck == '殕') {
        return true;
    }
    // No.4810
    // 説明:9f6d
    // 0x9f6d (Windows-31J)
    // 0x6b9e (UTF-16BE)
    if (argCheck == '殞') {
        return true;
    }
    // No.4811
    // 説明:9f6e
    // 0x9f6e (Windows-31J)
    // 0x6ba4 (UTF-16BE)
    if (argCheck == '殤') {
        return true;
    }
    // No.4812
    // 説明:9f6f
    // 0x9f6f (Windows-31J)
    // 0x6baa (UTF-16BE)
    if (argCheck == '殪') {
        return true;
    }
    // No.4813
    // 説明:9f70
    // 0x9f70 (Windows-31J)
    // 0x6bab (UTF-16BE)
    if (argCheck == '殫') {
        return true;
    }
    // No.4814
    // 説明:9f71
    // 0x9f71 (Windows-31J)
    // 0x6baf (UTF-16BE)
    if (argCheck == '殯') {
        return true;
    }
    // No.4815
    // 説明:9f72
    // 0x9f72 (Windows-31J)
    // 0x6bb2 (UTF-16BE)
    if (argCheck == '殲') {
        return true;
    }
    // No.4816
    // 説明:9f73
    // 0x9f73 (Windows-31J)
    // 0x6bb1 (UTF-16BE)
    if (argCheck == '殱') {
        return true;
    }
    // No.4817
    // 説明:9f74
    // 0x9f74 (Windows-31J)
    // 0x6bb3 (UTF-16BE)
    if (argCheck == '殳') {
        return true;
    }
    // No.4818
    // 説明:9f75
    // 0x9f75 (Windows-31J)
    // 0x6bb7 (UTF-16BE)
    if (argCheck == '殷') {
        return true;
    }
    // No.4819
    // 説明:9f76
    // 0x9f76 (Windows-31J)
    // 0x6bbc (UTF-16BE)
    if (argCheck == '殼') {
        return true;
    }
    // No.4820
    // 説明:9f77
    // 0x9f77 (Windows-31J)
    // 0x6bc6 (UTF-16BE)
    if (argCheck == '毆') {
        return true;
    }
    // No.4821
    // 説明:9f78
    // 0x9f78 (Windows-31J)
    // 0x6bcb (UTF-16BE)
    if (argCheck == '毋') {
        return true;
    }
    // No.4822
    // 説明:9f79
    // 0x9f79 (Windows-31J)
    // 0x6bd3 (UTF-16BE)
    if (argCheck == '毓') {
        return true;
    }
    // No.4823
    // 説明:9f7a
    // 0x9f7a (Windows-31J)
    // 0x6bdf (UTF-16BE)
    if (argCheck == '毟') {
        return true;
    }
    // No.4824
    // 説明:9f7b
    // 0x9f7b (Windows-31J)
    // 0x6bec (UTF-16BE)
    if (argCheck == '毬') {
        return true;
    }
    // No.4825
    // 説明:9f7c
    // 0x9f7c (Windows-31J)
    // 0x6beb (UTF-16BE)
    if (argCheck == '毫') {
        return true;
    }
    // No.4826
    // 説明:9f7d
    // 0x9f7d (Windows-31J)
    // 0x6bf3 (UTF-16BE)
    if (argCheck == '毳') {
        return true;
    }
    // No.4827
    // 説明:9f7e
    // 0x9f7e (Windows-31J)
    // 0x6bef (UTF-16BE)
    if (argCheck == '毯') {
        return true;
    }
    // No.4828
    // 説明:9f80
    // 0x9f80 (Windows-31J)
    // 0x9ebe (UTF-16BE)
    if (argCheck == '麾') {
        return true;
    }
    // No.4829
    // 説明:9f81
    // 0x9f81 (Windows-31J)
    // 0x6c08 (UTF-16BE)
    if (argCheck == '氈') {
        return true;
    }
    // No.4830
    // 説明:9f82
    // 0x9f82 (Windows-31J)
    // 0x6c13 (UTF-16BE)
    if (argCheck == '氓') {
        return true;
    }
    // No.4831
    // 説明:9f83
    // 0x9f83 (Windows-31J)
    // 0x6c14 (UTF-16BE)
    if (argCheck == '气') {
        return true;
    }
    // No.4832
    // 説明:9f84
    // 0x9f84 (Windows-31J)
    // 0x6c1b (UTF-16BE)
    if (argCheck == '氛') {
        return true;
    }
    // No.4833
    // 説明:9f85
    // 0x9f85 (Windows-31J)
    // 0x6c24 (UTF-16BE)
    if (argCheck == '氤') {
        return true;
    }
    // No.4834
    // 説明:9f86
    // 0x9f86 (Windows-31J)
    // 0x6c23 (UTF-16BE)
    if (argCheck == '氣') {
        return true;
    }
    // No.4835
    // 説明:9f87
    // 0x9f87 (Windows-31J)
    // 0x6c5e (UTF-16BE)
    if (argCheck == '汞') {
        return true;
    }
    // No.4836
    // 説明:9f88
    // 0x9f88 (Windows-31J)
    // 0x6c55 (UTF-16BE)
    if (argCheck == '汕') {
        return true;
    }
    // No.4837
    // 説明:9f89
    // 0x9f89 (Windows-31J)
    // 0x6c62 (UTF-16BE)
    if (argCheck == '汢') {
        return true;
    }
    // No.4838
    // 説明:9f8a
    // 0x9f8a (Windows-31J)
    // 0x6c6a (UTF-16BE)
    if (argCheck == '汪') {
        return true;
    }
    // No.4839
    // 説明:9f8b
    // 0x9f8b (Windows-31J)
    // 0x6c82 (UTF-16BE)
    if (argCheck == '沂') {
        return true;
    }
    // No.4840
    // 説明:9f8c
    // 0x9f8c (Windows-31J)
    // 0x6c8d (UTF-16BE)
    if (argCheck == '沍') {
        return true;
    }
    // No.4841
    // 説明:9f8d
    // 0x9f8d (Windows-31J)
    // 0x6c9a (UTF-16BE)
    if (argCheck == '沚') {
        return true;
    }
    // No.4842
    // 説明:9f8e
    // 0x9f8e (Windows-31J)
    // 0x6c81 (UTF-16BE)
    if (argCheck == '沁') {
        return true;
    }
    // No.4843
    // 説明:9f8f
    // 0x9f8f (Windows-31J)
    // 0x6c9b (UTF-16BE)
    if (argCheck == '沛') {
        return true;
    }
    // No.4844
    // 説明:9f90
    // 0x9f90 (Windows-31J)
    // 0x6c7e (UTF-16BE)
    if (argCheck == '汾') {
        return true;
    }
    // No.4845
    // 説明:9f91
    // 0x9f91 (Windows-31J)
    // 0x6c68 (UTF-16BE)
    if (argCheck == '汨') {
        return true;
    }
    // No.4846
    // 説明:9f92
    // 0x9f92 (Windows-31J)
    // 0x6c73 (UTF-16BE)
    if (argCheck == '汳') {
        return true;
    }
    // No.4847
    // 説明:9f93
    // 0x9f93 (Windows-31J)
    // 0x6c92 (UTF-16BE)
    if (argCheck == '沒') {
        return true;
    }
    // No.4848
    // 説明:9f94
    // 0x9f94 (Windows-31J)
    // 0x6c90 (UTF-16BE)
    if (argCheck == '沐') {
        return true;
    }
    // No.4849
    // 説明:9f95
    // 0x9f95 (Windows-31J)
    // 0x6cc4 (UTF-16BE)
    if (argCheck == '泄') {
        return true;
    }
    // No.4850
    // 説明:9f96
    // 0x9f96 (Windows-31J)
    // 0x6cf1 (UTF-16BE)
    if (argCheck == '泱') {
        return true;
    }
    // No.4851
    // 説明:9f97
    // 0x9f97 (Windows-31J)
    // 0x6cd3 (UTF-16BE)
    if (argCheck == '泓') {
        return true;
    }
    // No.4852
    // 説明:9f98
    // 0x9f98 (Windows-31J)
    // 0x6cbd (UTF-16BE)
    if (argCheck == '沽') {
        return true;
    }
    // No.4853
    // 説明:9f99
    // 0x9f99 (Windows-31J)
    // 0x6cd7 (UTF-16BE)
    if (argCheck == '泗') {
        return true;
    }
    // No.4854
    // 説明:9f9a
    // 0x9f9a (Windows-31J)
    // 0x6cc5 (UTF-16BE)
    if (argCheck == '泅') {
        return true;
    }
    // No.4855
    // 説明:9f9b
    // 0x9f9b (Windows-31J)
    // 0x6cdd (UTF-16BE)
    if (argCheck == '泝') {
        return true;
    }
    // No.4856
    // 説明:9f9c
    // 0x9f9c (Windows-31J)
    // 0x6cae (UTF-16BE)
    if (argCheck == '沮') {
        return true;
    }
    // No.4857
    // 説明:9f9d
    // 0x9f9d (Windows-31J)
    // 0x6cb1 (UTF-16BE)
    if (argCheck == '沱') {
        return true;
    }
    // No.4858
    // 説明:9f9e
    // 0x9f9e (Windows-31J)
    // 0x6cbe (UTF-16BE)
    if (argCheck == '沾') {
        return true;
    }
    // No.4859
    // 説明:9f9f
    // 0x9f9f (Windows-31J)
    // 0x6cba (UTF-16BE)
    if (argCheck == '沺') {
        return true;
    }
    // No.4860
    // 説明:9fa0
    // 0x9fa0 (Windows-31J)
    // 0x6cdb (UTF-16BE)
    if (argCheck == '泛') {
        return true;
    }
    // No.4861
    // 説明:9fa1
    // 0x9fa1 (Windows-31J)
    // 0x6cef (UTF-16BE)
    if (argCheck == '泯') {
        return true;
    }
    // No.4862
    // 説明:9fa2
    // 0x9fa2 (Windows-31J)
    // 0x6cd9 (UTF-16BE)
    if (argCheck == '泙') {
        return true;
    }
    // No.4863
    // 説明:9fa3
    // 0x9fa3 (Windows-31J)
    // 0x6cea (UTF-16BE)
    if (argCheck == '泪') {
        return true;
    }
    // No.4864
    // 説明:9fa4
    // 0x9fa4 (Windows-31J)
    // 0x6d1f (UTF-16BE)
    if (argCheck == '洟') {
        return true;
    }
    // No.4865
    // 説明:9fa5
    // 0x9fa5 (Windows-31J)
    // 0x884d (UTF-16BE)
    if (argCheck == '衍') {
        return true;
    }
    // No.4866
    // 説明:9fa6
    // 0x9fa6 (Windows-31J)
    // 0x6d36 (UTF-16BE)
    if (argCheck == '洶') {
        return true;
    }
    // No.4867
    // 説明:9fa7
    // 0x9fa7 (Windows-31J)
    // 0x6d2b (UTF-16BE)
    if (argCheck == '洫') {
        return true;
    }
    // No.4868
    // 説明:9fa8
    // 0x9fa8 (Windows-31J)
    // 0x6d3d (UTF-16BE)
    if (argCheck == '洽') {
        return true;
    }
    // No.4869
    // 説明:9fa9
    // 0x9fa9 (Windows-31J)
    // 0x6d38 (UTF-16BE)
    if (argCheck == '洸') {
        return true;
    }
    // No.4870
    // 説明:9faa
    // 0x9faa (Windows-31J)
    // 0x6d19 (UTF-16BE)
    if (argCheck == '洙') {
        return true;
    }
    // No.4871
    // 説明:9fab
    // 0x9fab (Windows-31J)
    // 0x6d35 (UTF-16BE)
    if (argCheck == '洵') {
        return true;
    }
    // No.4872
    // 説明:9fac
    // 0x9fac (Windows-31J)
    // 0x6d33 (UTF-16BE)
    if (argCheck == '洳') {
        return true;
    }
    // No.4873
    // 説明:9fad
    // 0x9fad (Windows-31J)
    // 0x6d12 (UTF-16BE)
    if (argCheck == '洒') {
        return true;
    }
    // No.4874
    // 説明:9fae
    // 0x9fae (Windows-31J)
    // 0x6d0c (UTF-16BE)
    if (argCheck == '洌') {
        return true;
    }
    // No.4875
    // 説明:9faf
    // 0x9faf (Windows-31J)
    // 0x6d63 (UTF-16BE)
    if (argCheck == '浣') {
        return true;
    }
    // No.4876
    // 説明:9fb0
    // 0x9fb0 (Windows-31J)
    // 0x6d93 (UTF-16BE)
    if (argCheck == '涓') {
        return true;
    }
    // No.4877
    // 説明:9fb1
    // 0x9fb1 (Windows-31J)
    // 0x6d64 (UTF-16BE)
    if (argCheck == '浤') {
        return true;
    }
    // No.4878
    // 説明:9fb2
    // 0x9fb2 (Windows-31J)
    // 0x6d5a (UTF-16BE)
    if (argCheck == '浚') {
        return true;
    }
    // No.4879
    // 説明:9fb3
    // 0x9fb3 (Windows-31J)
    // 0x6d79 (UTF-16BE)
    if (argCheck == '浹') {
        return true;
    }
    // No.4880
    // 説明:9fb4
    // 0x9fb4 (Windows-31J)
    // 0x6d59 (UTF-16BE)
    if (argCheck == '浙') {
        return true;
    }
    // No.4881
    // 説明:9fb5
    // 0x9fb5 (Windows-31J)
    // 0x6d8e (UTF-16BE)
    if (argCheck == '涎') {
        return true;
    }
    // No.4882
    // 説明:9fb6
    // 0x9fb6 (Windows-31J)
    // 0x6d95 (UTF-16BE)
    if (argCheck == '涕') {
        return true;
    }
    // No.4883
    // 説明:9fb7
    // 0x9fb7 (Windows-31J)
    // 0x6fe4 (UTF-16BE)
    if (argCheck == '濤') {
        return true;
    }
    // No.4884
    // 説明:9fb8
    // 0x9fb8 (Windows-31J)
    // 0x6d85 (UTF-16BE)
    if (argCheck == '涅') {
        return true;
    }
    // No.4885
    // 説明:9fb9
    // 0x9fb9 (Windows-31J)
    // 0x6df9 (UTF-16BE)
    if (argCheck == '淹') {
        return true;
    }
    // No.4886
    // 説明:9fba
    // 0x9fba (Windows-31J)
    // 0x6e15 (UTF-16BE)
    if (argCheck == '渕') {
        return true;
    }
    // No.4887
    // 説明:9fbb
    // 0x9fbb (Windows-31J)
    // 0x6e0a (UTF-16BE)
    if (argCheck == '渊') {
        return true;
    }
    // No.4888
    // 説明:9fbc
    // 0x9fbc (Windows-31J)
    // 0x6db5 (UTF-16BE)
    if (argCheck == '涵') {
        return true;
    }
    // No.4889
    // 説明:9fbd
    // 0x9fbd (Windows-31J)
    // 0x6dc7 (UTF-16BE)
    if (argCheck == '淇') {
        return true;
    }
    // No.4890
    // 説明:9fbe
    // 0x9fbe (Windows-31J)
    // 0x6de6 (UTF-16BE)
    if (argCheck == '淦') {
        return true;
    }
    // No.4891
    // 説明:9fbf
    // 0x9fbf (Windows-31J)
    // 0x6db8 (UTF-16BE)
    if (argCheck == '涸') {
        return true;
    }
    // No.4892
    // 説明:9fc0
    // 0x9fc0 (Windows-31J)
    // 0x6dc6 (UTF-16BE)
    if (argCheck == '淆') {
        return true;
    }
    // No.4893
    // 説明:9fc1
    // 0x9fc1 (Windows-31J)
    // 0x6dec (UTF-16BE)
    if (argCheck == '淬') {
        return true;
    }
    // No.4894
    // 説明:9fc2
    // 0x9fc2 (Windows-31J)
    // 0x6dde (UTF-16BE)
    if (argCheck == '淞') {
        return true;
    }
    // No.4895
    // 説明:9fc3
    // 0x9fc3 (Windows-31J)
    // 0x6dcc (UTF-16BE)
    if (argCheck == '淌') {
        return true;
    }
    // No.4896
    // 説明:9fc4
    // 0x9fc4 (Windows-31J)
    // 0x6de8 (UTF-16BE)
    if (argCheck == '淨') {
        return true;
    }
    // No.4897
    // 説明:9fc5
    // 0x9fc5 (Windows-31J)
    // 0x6dd2 (UTF-16BE)
    if (argCheck == '淒') {
        return true;
    }
    // No.4898
    // 説明:9fc6
    // 0x9fc6 (Windows-31J)
    // 0x6dc5 (UTF-16BE)
    if (argCheck == '淅') {
        return true;
    }
    // No.4899
    // 説明:9fc7
    // 0x9fc7 (Windows-31J)
    // 0x6dfa (UTF-16BE)
    if (argCheck == '淺') {
        return true;
    }
    // No.4900
    // 説明:9fc8
    // 0x9fc8 (Windows-31J)
    // 0x6dd9 (UTF-16BE)
    if (argCheck == '淙') {
        return true;
    }
    // No.4901
    // 説明:9fc9
    // 0x9fc9 (Windows-31J)
    // 0x6de4 (UTF-16BE)
    if (argCheck == '淤') {
        return true;
    }
    // No.4902
    // 説明:9fca
    // 0x9fca (Windows-31J)
    // 0x6dd5 (UTF-16BE)
    if (argCheck == '淕') {
        return true;
    }
    // No.4903
    // 説明:9fcb
    // 0x9fcb (Windows-31J)
    // 0x6dea (UTF-16BE)
    if (argCheck == '淪') {
        return true;
    }
    // No.4904
    // 説明:9fcc
    // 0x9fcc (Windows-31J)
    // 0x6dee (UTF-16BE)
    if (argCheck == '淮') {
        return true;
    }
    // No.4905
    // 説明:9fcd
    // 0x9fcd (Windows-31J)
    // 0x6e2d (UTF-16BE)
    if (argCheck == '渭') {
        return true;
    }
    // No.4906
    // 説明:9fce
    // 0x9fce (Windows-31J)
    // 0x6e6e (UTF-16BE)
    if (argCheck == '湮') {
        return true;
    }
    // No.4907
    // 説明:9fcf
    // 0x9fcf (Windows-31J)
    // 0x6e2e (UTF-16BE)
    if (argCheck == '渮') {
        return true;
    }
    // No.4908
    // 説明:9fd0
    // 0x9fd0 (Windows-31J)
    // 0x6e19 (UTF-16BE)
    if (argCheck == '渙') {
        return true;
    }
    // No.4909
    // 説明:9fd1
    // 0x9fd1 (Windows-31J)
    // 0x6e72 (UTF-16BE)
    if (argCheck == '湲') {
        return true;
    }
    // No.4910
    // 説明:9fd2
    // 0x9fd2 (Windows-31J)
    // 0x6e5f (UTF-16BE)
    if (argCheck == '湟') {
        return true;
    }
    // No.4911
    // 説明:9fd3
    // 0x9fd3 (Windows-31J)
    // 0x6e3e (UTF-16BE)
    if (argCheck == '渾') {
        return true;
    }
    // No.4912
    // 説明:9fd4
    // 0x9fd4 (Windows-31J)
    // 0x6e23 (UTF-16BE)
    if (argCheck == '渣') {
        return true;
    }
    // No.4913
    // 説明:9fd5
    // 0x9fd5 (Windows-31J)
    // 0x6e6b (UTF-16BE)
    if (argCheck == '湫') {
        return true;
    }
    // No.4914
    // 説明:9fd6
    // 0x9fd6 (Windows-31J)
    // 0x6e2b (UTF-16BE)
    if (argCheck == '渫') {
        return true;
    }
    // No.4915
    // 説明:9fd7
    // 0x9fd7 (Windows-31J)
    // 0x6e76 (UTF-16BE)
    if (argCheck == '湶') {
        return true;
    }
    // No.4916
    // 説明:9fd8
    // 0x9fd8 (Windows-31J)
    // 0x6e4d (UTF-16BE)
    if (argCheck == '湍') {
        return true;
    }
    // No.4917
    // 説明:9fd9
    // 0x9fd9 (Windows-31J)
    // 0x6e1f (UTF-16BE)
    if (argCheck == '渟') {
        return true;
    }
    // No.4918
    // 説明:9fda
    // 0x9fda (Windows-31J)
    // 0x6e43 (UTF-16BE)
    if (argCheck == '湃') {
        return true;
    }
    // No.4919
    // 説明:9fdb
    // 0x9fdb (Windows-31J)
    // 0x6e3a (UTF-16BE)
    if (argCheck == '渺') {
        return true;
    }
    // No.4920
    // 説明:9fdc
    // 0x9fdc (Windows-31J)
    // 0x6e4e (UTF-16BE)
    if (argCheck == '湎') {
        return true;
    }
    // No.4921
    // 説明:9fdd
    // 0x9fdd (Windows-31J)
    // 0x6e24 (UTF-16BE)
    if (argCheck == '渤') {
        return true;
    }
    // No.4922
    // 説明:9fde
    // 0x9fde (Windows-31J)
    // 0x6eff (UTF-16BE)
    if (argCheck == '滿') {
        return true;
    }
    // No.4923
    // 説明:9fdf
    // 0x9fdf (Windows-31J)
    // 0x6e1d (UTF-16BE)
    if (argCheck == '渝') {
        return true;
    }
    // No.4924
    // 説明:9fe0
    // 0x9fe0 (Windows-31J)
    // 0x6e38 (UTF-16BE)
    if (argCheck == '游') {
        return true;
    }
    // No.4925
    // 説明:9fe1
    // 0x9fe1 (Windows-31J)
    // 0x6e82 (UTF-16BE)
    if (argCheck == '溂') {
        return true;
    }
    // No.4926
    // 説明:9fe2
    // 0x9fe2 (Windows-31J)
    // 0x6eaa (UTF-16BE)
    if (argCheck == '溪') {
        return true;
    }
    // No.4927
    // 説明:9fe3
    // 0x9fe3 (Windows-31J)
    // 0x6e98 (UTF-16BE)
    if (argCheck == '溘') {
        return true;
    }
    // No.4928
    // 説明:9fe4
    // 0x9fe4 (Windows-31J)
    // 0x6ec9 (UTF-16BE)
    if (argCheck == '滉') {
        return true;
    }
    // No.4929
    // 説明:9fe5
    // 0x9fe5 (Windows-31J)
    // 0x6eb7 (UTF-16BE)
    if (argCheck == '溷') {
        return true;
    }
    // No.4930
    // 説明:9fe6
    // 0x9fe6 (Windows-31J)
    // 0x6ed3 (UTF-16BE)
    if (argCheck == '滓') {
        return true;
    }
    // No.4931
    // 説明:9fe7
    // 0x9fe7 (Windows-31J)
    // 0x6ebd (UTF-16BE)
    if (argCheck == '溽') {
        return true;
    }
    // No.4932
    // 説明:9fe8
    // 0x9fe8 (Windows-31J)
    // 0x6eaf (UTF-16BE)
    if (argCheck == '溯') {
        return true;
    }
    // No.4933
    // 説明:9fe9
    // 0x9fe9 (Windows-31J)
    // 0x6ec4 (UTF-16BE)
    if (argCheck == '滄') {
        return true;
    }
    // No.4934
    // 説明:9fea
    // 0x9fea (Windows-31J)
    // 0x6eb2 (UTF-16BE)
    if (argCheck == '溲') {
        return true;
    }
    // No.4935
    // 説明:9feb
    // 0x9feb (Windows-31J)
    // 0x6ed4 (UTF-16BE)
    if (argCheck == '滔') {
        return true;
    }
    // No.4936
    // 説明:9fec
    // 0x9fec (Windows-31J)
    // 0x6ed5 (UTF-16BE)
    if (argCheck == '滕') {
        return true;
    }
    // No.4937
    // 説明:9fed
    // 0x9fed (Windows-31J)
    // 0x6e8f (UTF-16BE)
    if (argCheck == '溏') {
        return true;
    }
    // No.4938
    // 説明:9fee
    // 0x9fee (Windows-31J)
    // 0x6ea5 (UTF-16BE)
    if (argCheck == '溥') {
        return true;
    }
    // No.4939
    // 説明:9fef
    // 0x9fef (Windows-31J)
    // 0x6ec2 (UTF-16BE)
    if (argCheck == '滂') {
        return true;
    }
    // No.4940
    // 説明:9ff0
    // 0x9ff0 (Windows-31J)
    // 0x6e9f (UTF-16BE)
    if (argCheck == '溟') {
        return true;
    }
    // No.4941
    // 説明:9ff1
    // 0x9ff1 (Windows-31J)
    // 0x6f41 (UTF-16BE)
    if (argCheck == '潁') {
        return true;
    }
    // No.4942
    // 説明:9ff2
    // 0x9ff2 (Windows-31J)
    // 0x6f11 (UTF-16BE)
    if (argCheck == '漑') {
        return true;
    }
    // No.4943
    // 説明:9ff3
    // 0x9ff3 (Windows-31J)
    // 0x704c (UTF-16BE)
    if (argCheck == '灌') {
        return true;
    }
    // No.4944
    // 説明:9ff4
    // 0x9ff4 (Windows-31J)
    // 0x6eec (UTF-16BE)
    if (argCheck == '滬') {
        return true;
    }
    // No.4945
    // 説明:9ff5
    // 0x9ff5 (Windows-31J)
    // 0x6ef8 (UTF-16BE)
    if (argCheck == '滸') {
        return true;
    }
    // No.4946
    // 説明:9ff6
    // 0x9ff6 (Windows-31J)
    // 0x6efe (UTF-16BE)
    if (argCheck == '滾') {
        return true;
    }
    // No.4947
    // 説明:9ff7
    // 0x9ff7 (Windows-31J)
    // 0x6f3f (UTF-16BE)
    if (argCheck == '漿') {
        return true;
    }
    // No.4948
    // 説明:9ff8
    // 0x9ff8 (Windows-31J)
    // 0x6ef2 (UTF-16BE)
    if (argCheck == '滲') {
        return true;
    }
    // No.4949
    // 説明:9ff9
    // 0x9ff9 (Windows-31J)
    // 0x6f31 (UTF-16BE)
    if (argCheck == '漱') {
        return true;
    }
    // No.4950
    // 説明:9ffa
    // 0x9ffa (Windows-31J)
    // 0x6eef (UTF-16BE)
    if (argCheck == '滯') {
        return true;
    }
    // No.4951
    // 説明:9ffb
    // 0x9ffb (Windows-31J)
    // 0x6f32 (UTF-16BE)
    if (argCheck == '漲') {
        return true;
    }
    // No.4952
    // 説明:9ffc
    // 0x9ffc (Windows-31J)
    // 0x6ecc (UTF-16BE)
    if (argCheck == '滌') {
        return true;
    }
    // No.4956
    // 説明:e040
    // 0xe040 (Windows-31J)
    // 0x6f3e (UTF-16BE)
    if (argCheck == '漾') {
        return true;
    }
    // No.4957
    // 説明:e041
    // 0xe041 (Windows-31J)
    // 0x6f13 (UTF-16BE)
    if (argCheck == '漓') {
        return true;
    }
    // No.4958
    // 説明:e042
    // 0xe042 (Windows-31J)
    // 0x6ef7 (UTF-16BE)
    if (argCheck == '滷') {
        return true;
    }
    // No.4959
    // 説明:e043
    // 0xe043 (Windows-31J)
    // 0x6f86 (UTF-16BE)
    if (argCheck == '澆') {
        return true;
    }
    // No.4960
    // 説明:e044
    // 0xe044 (Windows-31J)
    // 0x6f7a (UTF-16BE)
    if (argCheck == '潺') {
        return true;
    }
    // No.4961
    // 説明:e045
    // 0xe045 (Windows-31J)
    // 0x6f78 (UTF-16BE)
    if (argCheck == '潸') {
        return true;
    }
    // No.4962
    // 説明:e046
    // 0xe046 (Windows-31J)
    // 0x6f81 (UTF-16BE)
    if (argCheck == '澁') {
        return true;
    }
    // No.4963
    // 説明:e047
    // 0xe047 (Windows-31J)
    // 0x6f80 (UTF-16BE)
    if (argCheck == '澀') {
        return true;
    }
    // No.4964
    // 説明:e048
    // 0xe048 (Windows-31J)
    // 0x6f6f (UTF-16BE)
    if (argCheck == '潯') {
        return true;
    }
    // No.4965
    // 説明:e049
    // 0xe049 (Windows-31J)
    // 0x6f5b (UTF-16BE)
    if (argCheck == '潛') {
        return true;
    }
    // No.4966
    // 説明:e04a
    // 0xe04a (Windows-31J)
    // 0x6ff3 (UTF-16BE)
    if (argCheck == '濳') {
        return true;
    }
    // No.4967
    // 説明:e04b
    // 0xe04b (Windows-31J)
    // 0x6f6d (UTF-16BE)
    if (argCheck == '潭') {
        return true;
    }
    // No.4968
    // 説明:e04c
    // 0xe04c (Windows-31J)
    // 0x6f82 (UTF-16BE)
    if (argCheck == '澂') {
        return true;
    }
    // No.4969
    // 説明:e04d
    // 0xe04d (Windows-31J)
    // 0x6f7c (UTF-16BE)
    if (argCheck == '潼') {
        return true;
    }
    // No.4970
    // 説明:e04e
    // 0xe04e (Windows-31J)
    // 0x6f58 (UTF-16BE)
    if (argCheck == '潘') {
        return true;
    }
    // No.4971
    // 説明:e04f
    // 0xe04f (Windows-31J)
    // 0x6f8e (UTF-16BE)
    if (argCheck == '澎') {
        return true;
    }
    // No.4972
    // 説明:e050
    // 0xe050 (Windows-31J)
    // 0x6f91 (UTF-16BE)
    if (argCheck == '澑') {
        return true;
    }
    // No.4973
    // 説明:e051
    // 0xe051 (Windows-31J)
    // 0x6fc2 (UTF-16BE)
    if (argCheck == '濂') {
        return true;
    }
    // No.4974
    // 説明:e052
    // 0xe052 (Windows-31J)
    // 0x6f66 (UTF-16BE)
    if (argCheck == '潦') {
        return true;
    }
    // No.4975
    // 説明:e053
    // 0xe053 (Windows-31J)
    // 0x6fb3 (UTF-16BE)
    if (argCheck == '澳') {
        return true;
    }
    // No.4976
    // 説明:e054
    // 0xe054 (Windows-31J)
    // 0x6fa3 (UTF-16BE)
    if (argCheck == '澣') {
        return true;
    }
    // No.4977
    // 説明:e055
    // 0xe055 (Windows-31J)
    // 0x6fa1 (UTF-16BE)
    if (argCheck == '澡') {
        return true;
    }
    // No.4978
    // 説明:e056
    // 0xe056 (Windows-31J)
    // 0x6fa4 (UTF-16BE)
    if (argCheck == '澤') {
        return true;
    }
    // No.4979
    // 説明:e057
    // 0xe057 (Windows-31J)
    // 0x6fb9 (UTF-16BE)
    if (argCheck == '澹') {
        return true;
    }
    // No.4980
    // 説明:e058
    // 0xe058 (Windows-31J)
    // 0x6fc6 (UTF-16BE)
    if (argCheck == '濆') {
        return true;
    }
    // No.4981
    // 説明:e059
    // 0xe059 (Windows-31J)
    // 0x6faa (UTF-16BE)
    if (argCheck == '澪') {
        return true;
    }
    // No.4982
    // 説明:e05a
    // 0xe05a (Windows-31J)
    // 0x6fdf (UTF-16BE)
    if (argCheck == '濟') {
        return true;
    }
    // No.4983
    // 説明:e05b
    // 0xe05b (Windows-31J)
    // 0x6fd5 (UTF-16BE)
    if (argCheck == '濕') {
        return true;
    }
    // No.4984
    // 説明:e05c
    // 0xe05c (Windows-31J)
    // 0x6fec (UTF-16BE)
    if (argCheck == '濬') {
        return true;
    }
    // No.4985
    // 説明:e05d
    // 0xe05d (Windows-31J)
    // 0x6fd4 (UTF-16BE)
    if (argCheck == '濔') {
        return true;
    }
    // No.4986
    // 説明:e05e
    // 0xe05e (Windows-31J)
    // 0x6fd8 (UTF-16BE)
    if (argCheck == '濘') {
        return true;
    }
    // No.4987
    // 説明:e05f
    // 0xe05f (Windows-31J)
    // 0x6ff1 (UTF-16BE)
    if (argCheck == '濱') {
        return true;
    }
    // No.4988
    // 説明:e060
    // 0xe060 (Windows-31J)
    // 0x6fee (UTF-16BE)
    if (argCheck == '濮') {
        return true;
    }
    // No.4989
    // 説明:e061
    // 0xe061 (Windows-31J)
    // 0x6fdb (UTF-16BE)
    if (argCheck == '濛') {
        return true;
    }
    // No.4990
    // 説明:e062
    // 0xe062 (Windows-31J)
    // 0x7009 (UTF-16BE)
    if (argCheck == '瀉') {
        return true;
    }
    // No.4991
    // 説明:e063
    // 0xe063 (Windows-31J)
    // 0x700b (UTF-16BE)
    if (argCheck == '瀋') {
        return true;
    }
    // No.4992
    // 説明:e064
    // 0xe064 (Windows-31J)
    // 0x6ffa (UTF-16BE)
    if (argCheck == '濺') {
        return true;
    }
    // No.4993
    // 説明:e065
    // 0xe065 (Windows-31J)
    // 0x7011 (UTF-16BE)
    if (argCheck == '瀑') {
        return true;
    }
    // No.4994
    // 説明:e066
    // 0xe066 (Windows-31J)
    // 0x7001 (UTF-16BE)
    if (argCheck == '瀁') {
        return true;
    }
    // No.4995
    // 説明:e067
    // 0xe067 (Windows-31J)
    // 0x700f (UTF-16BE)
    if (argCheck == '瀏') {
        return true;
    }
    // No.4996
    // 説明:e068
    // 0xe068 (Windows-31J)
    // 0x6ffe (UTF-16BE)
    if (argCheck == '濾') {
        return true;
    }
    // No.4997
    // 説明:e069
    // 0xe069 (Windows-31J)
    // 0x701b (UTF-16BE)
    if (argCheck == '瀛') {
        return true;
    }
    // No.4998
    // 説明:e06a
    // 0xe06a (Windows-31J)
    // 0x701a (UTF-16BE)
    if (argCheck == '瀚') {
        return true;
    }
    // No.4999
    // 説明:e06b
    // 0xe06b (Windows-31J)
    // 0x6f74 (UTF-16BE)
    if (argCheck == '潴') {
        return true;
    }
    // No.5000
    // 説明:e06c
    // 0xe06c (Windows-31J)
    // 0x701d (UTF-16BE)
    if (argCheck == '瀝') {
        return true;
    }
    // No.5001
    // 説明:e06d
    // 0xe06d (Windows-31J)
    // 0x7018 (UTF-16BE)
    if (argCheck == '瀘') {
        return true;
    }
    // No.5002
    // 説明:e06e
    // 0xe06e (Windows-31J)
    // 0x701f (UTF-16BE)
    if (argCheck == '瀟') {
        return true;
    }
    // No.5003
    // 説明:e06f
    // 0xe06f (Windows-31J)
    // 0x7030 (UTF-16BE)
    if (argCheck == '瀰') {
        return true;
    }
    // No.5004
    // 説明:e070
    // 0xe070 (Windows-31J)
    // 0x703e (UTF-16BE)
    if (argCheck == '瀾') {
        return true;
    }
    // No.5005
    // 説明:e071
    // 0xe071 (Windows-31J)
    // 0x7032 (UTF-16BE)
    if (argCheck == '瀲') {
        return true;
    }
    // No.5006
    // 説明:e072
    // 0xe072 (Windows-31J)
    // 0x7051 (UTF-16BE)
    if (argCheck == '灑') {
        return true;
    }
    // No.5007
    // 説明:e073
    // 0xe073 (Windows-31J)
    // 0x7063 (UTF-16BE)
    if (argCheck == '灣') {
        return true;
    }
    // No.5008
    // 説明:e074
    // 0xe074 (Windows-31J)
    // 0x7099 (UTF-16BE)
    if (argCheck == '炙') {
        return true;
    }
    // No.5009
    // 説明:e075
    // 0xe075 (Windows-31J)
    // 0x7092 (UTF-16BE)
    if (argCheck == '炒') {
        return true;
    }
    // No.5010
    // 説明:e076
    // 0xe076 (Windows-31J)
    // 0x70af (UTF-16BE)
    if (argCheck == '炯') {
        return true;
    }
    // No.5011
    // 説明:e077
    // 0xe077 (Windows-31J)
    // 0x70f1 (UTF-16BE)
    if (argCheck == '烱') {
        return true;
    }
    // No.5012
    // 説明:e078
    // 0xe078 (Windows-31J)
    // 0x70ac (UTF-16BE)
    if (argCheck == '炬') {
        return true;
    }
    // No.5013
    // 説明:e079
    // 0xe079 (Windows-31J)
    // 0x70b8 (UTF-16BE)
    if (argCheck == '炸') {
        return true;
    }
    // No.5014
    // 説明:e07a
    // 0xe07a (Windows-31J)
    // 0x70b3 (UTF-16BE)
    if (argCheck == '炳') {
        return true;
    }
    // No.5015
    // 説明:e07b
    // 0xe07b (Windows-31J)
    // 0x70ae (UTF-16BE)
    if (argCheck == '炮') {
        return true;
    }
    // No.5016
    // 説明:e07c
    // 0xe07c (Windows-31J)
    // 0x70df (UTF-16BE)
    if (argCheck == '烟') {
        return true;
    }
    // No.5017
    // 説明:e07d
    // 0xe07d (Windows-31J)
    // 0x70cb (UTF-16BE)
    if (argCheck == '烋') {
        return true;
    }
    // No.5018
    // 説明:e07e
    // 0xe07e (Windows-31J)
    // 0x70dd (UTF-16BE)
    if (argCheck == '烝') {
        return true;
    }
    // No.5019
    // 説明:e080
    // 0xe080 (Windows-31J)
    // 0x70d9 (UTF-16BE)
    if (argCheck == '烙') {
        return true;
    }
    // No.5020
    // 説明:e081
    // 0xe081 (Windows-31J)
    // 0x7109 (UTF-16BE)
    if (argCheck == '焉') {
        return true;
    }
    // No.5021
    // 説明:e082
    // 0xe082 (Windows-31J)
    // 0x70fd (UTF-16BE)
    if (argCheck == '烽') {
        return true;
    }
    // No.5022
    // 説明:e083
    // 0xe083 (Windows-31J)
    // 0x711c (UTF-16BE)
    if (argCheck == '焜') {
        return true;
    }
    // No.5023
    // 説明:e084
    // 0xe084 (Windows-31J)
    // 0x7119 (UTF-16BE)
    if (argCheck == '焙') {
        return true;
    }
    // No.5024
    // 説明:e085
    // 0xe085 (Windows-31J)
    // 0x7165 (UTF-16BE)
    if (argCheck == '煥') {
        return true;
    }
    // No.5025
    // 説明:e086
    // 0xe086 (Windows-31J)
    // 0x7155 (UTF-16BE)
    if (argCheck == '煕') {
        return true;
    }
    // No.5026
    // 説明:e087
    // 0xe087 (Windows-31J)
    // 0x7188 (UTF-16BE)
    if (argCheck == '熈') {
        return true;
    }
    // No.5027
    // 説明:e088
    // 0xe088 (Windows-31J)
    // 0x7166 (UTF-16BE)
    if (argCheck == '煦') {
        return true;
    }
    // No.5028
    // 説明:e089
    // 0xe089 (Windows-31J)
    // 0x7162 (UTF-16BE)
    if (argCheck == '煢') {
        return true;
    }
    // No.5029
    // 説明:e08a
    // 0xe08a (Windows-31J)
    // 0x714c (UTF-16BE)
    if (argCheck == '煌') {
        return true;
    }
    // No.5030
    // 説明:e08b
    // 0xe08b (Windows-31J)
    // 0x7156 (UTF-16BE)
    if (argCheck == '煖') {
        return true;
    }
    // No.5031
    // 説明:e08c
    // 0xe08c (Windows-31J)
    // 0x716c (UTF-16BE)
    if (argCheck == '煬') {
        return true;
    }
    // No.5032
    // 説明:e08d
    // 0xe08d (Windows-31J)
    // 0x718f (UTF-16BE)
    if (argCheck == '熏') {
        return true;
    }
    // No.5033
    // 説明:e08e
    // 0xe08e (Windows-31J)
    // 0x71fb (UTF-16BE)
    if (argCheck == '燻') {
        return true;
    }
    // No.5034
    // 説明:e08f
    // 0xe08f (Windows-31J)
    // 0x7184 (UTF-16BE)
    if (argCheck == '熄') {
        return true;
    }
    // No.5035
    // 説明:e090
    // 0xe090 (Windows-31J)
    // 0x7195 (UTF-16BE)
    if (argCheck == '熕') {
        return true;
    }
    // No.5036
    // 説明:e091
    // 0xe091 (Windows-31J)
    // 0x71a8 (UTF-16BE)
    if (argCheck == '熨') {
        return true;
    }
    // No.5037
    // 説明:e092
    // 0xe092 (Windows-31J)
    // 0x71ac (UTF-16BE)
    if (argCheck == '熬') {
        return true;
    }
    // No.5038
    // 説明:e093
    // 0xe093 (Windows-31J)
    // 0x71d7 (UTF-16BE)
    if (argCheck == '燗') {
        return true;
    }
    // No.5039
    // 説明:e094
    // 0xe094 (Windows-31J)
    // 0x71b9 (UTF-16BE)
    if (argCheck == '熹') {
        return true;
    }
    // No.5040
    // 説明:e095
    // 0xe095 (Windows-31J)
    // 0x71be (UTF-16BE)
    if (argCheck == '熾') {
        return true;
    }
    // No.5041
    // 説明:e096
    // 0xe096 (Windows-31J)
    // 0x71d2 (UTF-16BE)
    if (argCheck == '燒') {
        return true;
    }
    // No.5042
    // 説明:e097
    // 0xe097 (Windows-31J)
    // 0x71c9 (UTF-16BE)
    if (argCheck == '燉') {
        return true;
    }
    // No.5043
    // 説明:e098
    // 0xe098 (Windows-31J)
    // 0x71d4 (UTF-16BE)
    if (argCheck == '燔') {
        return true;
    }
    // No.5044
    // 説明:e099
    // 0xe099 (Windows-31J)
    // 0x71ce (UTF-16BE)
    if (argCheck == '燎') {
        return true;
    }
    // No.5045
    // 説明:e09a
    // 0xe09a (Windows-31J)
    // 0x71e0 (UTF-16BE)
    if (argCheck == '燠') {
        return true;
    }
    // No.5046
    // 説明:e09b
    // 0xe09b (Windows-31J)
    // 0x71ec (UTF-16BE)
    if (argCheck == '燬') {
        return true;
    }
    // No.5047
    // 説明:e09c
    // 0xe09c (Windows-31J)
    // 0x71e7 (UTF-16BE)
    if (argCheck == '燧') {
        return true;
    }
    // No.5048
    // 説明:e09d
    // 0xe09d (Windows-31J)
    // 0x71f5 (UTF-16BE)
    if (argCheck == '燵') {
        return true;
    }
    // No.5049
    // 説明:e09e
    // 0xe09e (Windows-31J)
    // 0x71fc (UTF-16BE)
    if (argCheck == '燼') {
        return true;
    }
    // No.5050
    // 説明:e09f
    // 0xe09f (Windows-31J)
    // 0x71f9 (UTF-16BE)
    if (argCheck == '燹') {
        return true;
    }
    // No.5051
    // 説明:e0a0
    // 0xe0a0 (Windows-31J)
    // 0x71ff (UTF-16BE)
    if (argCheck == '燿') {
        return true;
    }
    // No.5052
    // 説明:e0a1
    // 0xe0a1 (Windows-31J)
    // 0x720d (UTF-16BE)
    if (argCheck == '爍') {
        return true;
    }
    // No.5053
    // 説明:e0a2
    // 0xe0a2 (Windows-31J)
    // 0x7210 (UTF-16BE)
    if (argCheck == '爐') {
        return true;
    }
    // No.5054
    // 説明:e0a3
    // 0xe0a3 (Windows-31J)
    // 0x721b (UTF-16BE)
    if (argCheck == '爛') {
        return true;
    }
    // No.5055
    // 説明:e0a4
    // 0xe0a4 (Windows-31J)
    // 0x7228 (UTF-16BE)
    if (argCheck == '爨') {
        return true;
    }
    // No.5056
    // 説明:e0a5
    // 0xe0a5 (Windows-31J)
    // 0x722d (UTF-16BE)
    if (argCheck == '爭') {
        return true;
    }
    // No.5057
    // 説明:e0a6
    // 0xe0a6 (Windows-31J)
    // 0x722c (UTF-16BE)
    if (argCheck == '爬') {
        return true;
    }
    // No.5058
    // 説明:e0a7
    // 0xe0a7 (Windows-31J)
    // 0x7230 (UTF-16BE)
    if (argCheck == '爰') {
        return true;
    }
    // No.5059
    // 説明:e0a8
    // 0xe0a8 (Windows-31J)
    // 0x7232 (UTF-16BE)
    if (argCheck == '爲') {
        return true;
    }
    // No.5060
    // 説明:e0a9
    // 0xe0a9 (Windows-31J)
    // 0x723b (UTF-16BE)
    if (argCheck == '爻') {
        return true;
    }
    // No.5061
    // 説明:e0aa
    // 0xe0aa (Windows-31J)
    // 0x723c (UTF-16BE)
    if (argCheck == '爼') {
        return true;
    }
    // No.5062
    // 説明:e0ab
    // 0xe0ab (Windows-31J)
    // 0x723f (UTF-16BE)
    if (argCheck == '爿') {
        return true;
    }
    // No.5063
    // 説明:e0ac
    // 0xe0ac (Windows-31J)
    // 0x7240 (UTF-16BE)
    if (argCheck == '牀') {
        return true;
    }
    // No.5064
    // 説明:e0ad
    // 0xe0ad (Windows-31J)
    // 0x7246 (UTF-16BE)
    if (argCheck == '牆') {
        return true;
    }
    // No.5065
    // 説明:e0ae
    // 0xe0ae (Windows-31J)
    // 0x724b (UTF-16BE)
    if (argCheck == '牋') {
        return true;
    }
    // No.5066
    // 説明:e0af
    // 0xe0af (Windows-31J)
    // 0x7258 (UTF-16BE)
    if (argCheck == '牘') {
        return true;
    }
    // No.5067
    // 説明:e0b0
    // 0xe0b0 (Windows-31J)
    // 0x7274 (UTF-16BE)
    if (argCheck == '牴') {
        return true;
    }
    // No.5068
    // 説明:e0b1
    // 0xe0b1 (Windows-31J)
    // 0x727e (UTF-16BE)
    if (argCheck == '牾') {
        return true;
    }
    // No.5069
    // 説明:e0b2
    // 0xe0b2 (Windows-31J)
    // 0x7282 (UTF-16BE)
    if (argCheck == '犂') {
        return true;
    }
    // No.5070
    // 説明:e0b3
    // 0xe0b3 (Windows-31J)
    // 0x7281 (UTF-16BE)
    if (argCheck == '犁') {
        return true;
    }
    // No.5071
    // 説明:e0b4
    // 0xe0b4 (Windows-31J)
    // 0x7287 (UTF-16BE)
    if (argCheck == '犇') {
        return true;
    }
    // No.5072
    // 説明:e0b5
    // 0xe0b5 (Windows-31J)
    // 0x7292 (UTF-16BE)
    if (argCheck == '犒') {
        return true;
    }
    // No.5073
    // 説明:e0b6
    // 0xe0b6 (Windows-31J)
    // 0x7296 (UTF-16BE)
    if (argCheck == '犖') {
        return true;
    }
    // No.5074
    // 説明:e0b7
    // 0xe0b7 (Windows-31J)
    // 0x72a2 (UTF-16BE)
    if (argCheck == '犢') {
        return true;
    }
    // No.5075
    // 説明:e0b8
    // 0xe0b8 (Windows-31J)
    // 0x72a7 (UTF-16BE)
    if (argCheck == '犧') {
        return true;
    }
    // No.5076
    // 説明:e0b9
    // 0xe0b9 (Windows-31J)
    // 0x72b9 (UTF-16BE)
    if (argCheck == '犹') {
        return true;
    }
    // No.5077
    // 説明:e0ba
    // 0xe0ba (Windows-31J)
    // 0x72b2 (UTF-16BE)
    if (argCheck == '犲') {
        return true;
    }
    // No.5078
    // 説明:e0bb
    // 0xe0bb (Windows-31J)
    // 0x72c3 (UTF-16BE)
    if (argCheck == '狃') {
        return true;
    }
    // No.5079
    // 説明:e0bc
    // 0xe0bc (Windows-31J)
    // 0x72c6 (UTF-16BE)
    if (argCheck == '狆') {
        return true;
    }
    // No.5080
    // 説明:e0bd
    // 0xe0bd (Windows-31J)
    // 0x72c4 (UTF-16BE)
    if (argCheck == '狄') {
        return true;
    }
    // No.5081
    // 説明:e0be
    // 0xe0be (Windows-31J)
    // 0x72ce (UTF-16BE)
    if (argCheck == '狎') {
        return true;
    }
    // No.5082
    // 説明:e0bf
    // 0xe0bf (Windows-31J)
    // 0x72d2 (UTF-16BE)
    if (argCheck == '狒') {
        return true;
    }
    // No.5083
    // 説明:e0c0
    // 0xe0c0 (Windows-31J)
    // 0x72e2 (UTF-16BE)
    if (argCheck == '狢') {
        return true;
    }
    // No.5084
    // 説明:e0c1
    // 0xe0c1 (Windows-31J)
    // 0x72e0 (UTF-16BE)
    if (argCheck == '狠') {
        return true;
    }
    // No.5085
    // 説明:e0c2
    // 0xe0c2 (Windows-31J)
    // 0x72e1 (UTF-16BE)
    if (argCheck == '狡') {
        return true;
    }
    // No.5086
    // 説明:e0c3
    // 0xe0c3 (Windows-31J)
    // 0x72f9 (UTF-16BE)
    if (argCheck == '狹') {
        return true;
    }
    // No.5087
    // 説明:e0c4
    // 0xe0c4 (Windows-31J)
    // 0x72f7 (UTF-16BE)
    if (argCheck == '狷') {
        return true;
    }
    // No.5088
    // 説明:e0c5
    // 0xe0c5 (Windows-31J)
    // 0x500f (UTF-16BE)
    if (argCheck == '倏') {
        return true;
    }
    // No.5089
    // 説明:e0c6
    // 0xe0c6 (Windows-31J)
    // 0x7317 (UTF-16BE)
    if (argCheck == '猗') {
        return true;
    }
    // No.5090
    // 説明:e0c7
    // 0xe0c7 (Windows-31J)
    // 0x730a (UTF-16BE)
    if (argCheck == '猊') {
        return true;
    }
    // No.5091
    // 説明:e0c8
    // 0xe0c8 (Windows-31J)
    // 0x731c (UTF-16BE)
    if (argCheck == '猜') {
        return true;
    }
    // No.5092
    // 説明:e0c9
    // 0xe0c9 (Windows-31J)
    // 0x7316 (UTF-16BE)
    if (argCheck == '猖') {
        return true;
    }
    // No.5093
    // 説明:e0ca
    // 0xe0ca (Windows-31J)
    // 0x731d (UTF-16BE)
    if (argCheck == '猝') {
        return true;
    }
    // No.5094
    // 説明:e0cb
    // 0xe0cb (Windows-31J)
    // 0x7334 (UTF-16BE)
    if (argCheck == '猴') {
        return true;
    }
    // No.5095
    // 説明:e0cc
    // 0xe0cc (Windows-31J)
    // 0x732f (UTF-16BE)
    if (argCheck == '猯') {
        return true;
    }
    // No.5096
    // 説明:e0cd
    // 0xe0cd (Windows-31J)
    // 0x7329 (UTF-16BE)
    if (argCheck == '猩') {
        return true;
    }
    // No.5097
    // 説明:e0ce
    // 0xe0ce (Windows-31J)
    // 0x7325 (UTF-16BE)
    if (argCheck == '猥') {
        return true;
    }
    // No.5098
    // 説明:e0cf
    // 0xe0cf (Windows-31J)
    // 0x733e (UTF-16BE)
    if (argCheck == '猾') {
        return true;
    }
    // No.5099
    // 説明:e0d0
    // 0xe0d0 (Windows-31J)
    // 0x734e (UTF-16BE)
    if (argCheck == '獎') {
        return true;
    }
    // No.5100
    // 説明:e0d1
    // 0xe0d1 (Windows-31J)
    // 0x734f (UTF-16BE)
    if (argCheck == '獏') {
        return true;
    }
    // No.5101
    // 説明:e0d2
    // 0xe0d2 (Windows-31J)
    // 0x9ed8 (UTF-16BE)
    if (argCheck == '默') {
        return true;
    }
    // No.5102
    // 説明:e0d3
    // 0xe0d3 (Windows-31J)
    // 0x7357 (UTF-16BE)
    if (argCheck == '獗') {
        return true;
    }
    // No.5103
    // 説明:e0d4
    // 0xe0d4 (Windows-31J)
    // 0x736a (UTF-16BE)
    if (argCheck == '獪') {
        return true;
    }
    // No.5104
    // 説明:e0d5
    // 0xe0d5 (Windows-31J)
    // 0x7368 (UTF-16BE)
    if (argCheck == '獨') {
        return true;
    }
    // No.5105
    // 説明:e0d6
    // 0xe0d6 (Windows-31J)
    // 0x7370 (UTF-16BE)
    if (argCheck == '獰') {
        return true;
    }
    // No.5106
    // 説明:e0d7
    // 0xe0d7 (Windows-31J)
    // 0x7378 (UTF-16BE)
    if (argCheck == '獸') {
        return true;
    }
    // No.5107
    // 説明:e0d8
    // 0xe0d8 (Windows-31J)
    // 0x7375 (UTF-16BE)
    if (argCheck == '獵') {
        return true;
    }
    // No.5108
    // 説明:e0d9
    // 0xe0d9 (Windows-31J)
    // 0x737b (UTF-16BE)
    if (argCheck == '獻') {
        return true;
    }
    // No.5109
    // 説明:e0da
    // 0xe0da (Windows-31J)
    // 0x737a (UTF-16BE)
    if (argCheck == '獺') {
        return true;
    }
    // No.5110
    // 説明:e0db
    // 0xe0db (Windows-31J)
    // 0x73c8 (UTF-16BE)
    if (argCheck == '珈') {
        return true;
    }
    // No.5111
    // 説明:e0dc
    // 0xe0dc (Windows-31J)
    // 0x73b3 (UTF-16BE)
    if (argCheck == '玳') {
        return true;
    }
    // No.5112
    // 説明:e0dd
    // 0xe0dd (Windows-31J)
    // 0x73ce (UTF-16BE)
    if (argCheck == '珎') {
        return true;
    }
    // No.5113
    // 説明:e0de
    // 0xe0de (Windows-31J)
    // 0x73bb (UTF-16BE)
    if (argCheck == '玻') {
        return true;
    }
    // No.5114
    // 説明:e0df
    // 0xe0df (Windows-31J)
    // 0x73c0 (UTF-16BE)
    if (argCheck == '珀') {
        return true;
    }
    // No.5115
    // 説明:e0e0
    // 0xe0e0 (Windows-31J)
    // 0x73e5 (UTF-16BE)
    if (argCheck == '珥') {
        return true;
    }
    // No.5116
    // 説明:e0e1
    // 0xe0e1 (Windows-31J)
    // 0x73ee (UTF-16BE)
    if (argCheck == '珮') {
        return true;
    }
    // No.5117
    // 説明:e0e2
    // 0xe0e2 (Windows-31J)
    // 0x73de (UTF-16BE)
    if (argCheck == '珞') {
        return true;
    }
    // No.5118
    // 説明:e0e3
    // 0xe0e3 (Windows-31J)
    // 0x74a2 (UTF-16BE)
    if (argCheck == '璢') {
        return true;
    }
    // No.5119
    // 説明:e0e4
    // 0xe0e4 (Windows-31J)
    // 0x7405 (UTF-16BE)
    if (argCheck == '琅') {
        return true;
    }
    // No.5120
    // 説明:e0e5
    // 0xe0e5 (Windows-31J)
    // 0x746f (UTF-16BE)
    if (argCheck == '瑯') {
        return true;
    }
    // No.5121
    // 説明:e0e6
    // 0xe0e6 (Windows-31J)
    // 0x7425 (UTF-16BE)
    if (argCheck == '琥') {
        return true;
    }
    // No.5122
    // 説明:e0e7
    // 0xe0e7 (Windows-31J)
    // 0x73f8 (UTF-16BE)
    if (argCheck == '珸') {
        return true;
    }
    // No.5123
    // 説明:e0e8
    // 0xe0e8 (Windows-31J)
    // 0x7432 (UTF-16BE)
    if (argCheck == '琲') {
        return true;
    }
    // No.5124
    // 説明:e0e9
    // 0xe0e9 (Windows-31J)
    // 0x743a (UTF-16BE)
    if (argCheck == '琺') {
        return true;
    }
    // No.5125
    // 説明:e0ea
    // 0xe0ea (Windows-31J)
    // 0x7455 (UTF-16BE)
    if (argCheck == '瑕') {
        return true;
    }
    // No.5126
    // 説明:e0eb
    // 0xe0eb (Windows-31J)
    // 0x743f (UTF-16BE)
    if (argCheck == '琿') {
        return true;
    }
    // No.5127
    // 説明:e0ec
    // 0xe0ec (Windows-31J)
    // 0x745f (UTF-16BE)
    if (argCheck == '瑟') {
        return true;
    }
    // No.5128
    // 説明:e0ed
    // 0xe0ed (Windows-31J)
    // 0x7459 (UTF-16BE)
    if (argCheck == '瑙') {
        return true;
    }
    // No.5129
    // 説明:e0ee
    // 0xe0ee (Windows-31J)
    // 0x7441 (UTF-16BE)
    if (argCheck == '瑁') {
        return true;
    }
    // No.5130
    // 説明:e0ef
    // 0xe0ef (Windows-31J)
    // 0x745c (UTF-16BE)
    if (argCheck == '瑜') {
        return true;
    }
    // No.5131
    // 説明:e0f0
    // 0xe0f0 (Windows-31J)
    // 0x7469 (UTF-16BE)
    if (argCheck == '瑩') {
        return true;
    }
    // No.5132
    // 説明:e0f1
    // 0xe0f1 (Windows-31J)
    // 0x7470 (UTF-16BE)
    if (argCheck == '瑰') {
        return true;
    }
    // No.5133
    // 説明:e0f2
    // 0xe0f2 (Windows-31J)
    // 0x7463 (UTF-16BE)
    if (argCheck == '瑣') {
        return true;
    }
    // No.5134
    // 説明:e0f3
    // 0xe0f3 (Windows-31J)
    // 0x746a (UTF-16BE)
    if (argCheck == '瑪') {
        return true;
    }
    // No.5135
    // 説明:e0f4
    // 0xe0f4 (Windows-31J)
    // 0x7476 (UTF-16BE)
    if (argCheck == '瑶') {
        return true;
    }
    // No.5136
    // 説明:e0f5
    // 0xe0f5 (Windows-31J)
    // 0x747e (UTF-16BE)
    if (argCheck == '瑾') {
        return true;
    }
    // No.5137
    // 説明:e0f6
    // 0xe0f6 (Windows-31J)
    // 0x748b (UTF-16BE)
    if (argCheck == '璋') {
        return true;
    }
    // No.5138
    // 説明:e0f7
    // 0xe0f7 (Windows-31J)
    // 0x749e (UTF-16BE)
    if (argCheck == '璞') {
        return true;
    }
    // No.5139
    // 説明:e0f8
    // 0xe0f8 (Windows-31J)
    // 0x74a7 (UTF-16BE)
    if (argCheck == '璧') {
        return true;
    }
    // No.5140
    // 説明:e0f9
    // 0xe0f9 (Windows-31J)
    // 0x74ca (UTF-16BE)
    if (argCheck == '瓊') {
        return true;
    }
    // No.5141
    // 説明:e0fa
    // 0xe0fa (Windows-31J)
    // 0x74cf (UTF-16BE)
    if (argCheck == '瓏') {
        return true;
    }
    // No.5142
    // 説明:e0fb
    // 0xe0fb (Windows-31J)
    // 0x74d4 (UTF-16BE)
    if (argCheck == '瓔') {
        return true;
    }
    // No.5143
    // 説明:e0fc
    // 0xe0fc (Windows-31J)
    // 0x73f1 (UTF-16BE)
    if (argCheck == '珱') {
        return true;
    }
    // No.5144
    // 説明:e140
    // 0xe140 (Windows-31J)
    // 0x74e0 (UTF-16BE)
    if (argCheck == '瓠') {
        return true;
    }
    // No.5145
    // 説明:e141
    // 0xe141 (Windows-31J)
    // 0x74e3 (UTF-16BE)
    if (argCheck == '瓣') {
        return true;
    }
    // No.5146
    // 説明:e142
    // 0xe142 (Windows-31J)
    // 0x74e7 (UTF-16BE)
    if (argCheck == '瓧') {
        return true;
    }
    // No.5147
    // 説明:e143
    // 0xe143 (Windows-31J)
    // 0x74e9 (UTF-16BE)
    if (argCheck == '瓩') {
        return true;
    }
    // No.5148
    // 説明:e144
    // 0xe144 (Windows-31J)
    // 0x74ee (UTF-16BE)
    if (argCheck == '瓮') {
        return true;
    }
    // No.5149
    // 説明:e145
    // 0xe145 (Windows-31J)
    // 0x74f2 (UTF-16BE)
    if (argCheck == '瓲') {
        return true;
    }
    // No.5150
    // 説明:e146
    // 0xe146 (Windows-31J)
    // 0x74f0 (UTF-16BE)
    if (argCheck == '瓰') {
        return true;
    }
    // No.5151
    // 説明:e147
    // 0xe147 (Windows-31J)
    // 0x74f1 (UTF-16BE)
    if (argCheck == '瓱') {
        return true;
    }
    // No.5152
    // 説明:e148
    // 0xe148 (Windows-31J)
    // 0x74f8 (UTF-16BE)
    if (argCheck == '瓸') {
        return true;
    }
    // No.5153
    // 説明:e149
    // 0xe149 (Windows-31J)
    // 0x74f7 (UTF-16BE)
    if (argCheck == '瓷') {
        return true;
    }
    // No.5154
    // 説明:e14a
    // 0xe14a (Windows-31J)
    // 0x7504 (UTF-16BE)
    if (argCheck == '甄') {
        return true;
    }
    // No.5155
    // 説明:e14b
    // 0xe14b (Windows-31J)
    // 0x7503 (UTF-16BE)
    if (argCheck == '甃') {
        return true;
    }
    // No.5156
    // 説明:e14c
    // 0xe14c (Windows-31J)
    // 0x7505 (UTF-16BE)
    if (argCheck == '甅') {
        return true;
    }
    // No.5157
    // 説明:e14d
    // 0xe14d (Windows-31J)
    // 0x750c (UTF-16BE)
    if (argCheck == '甌') {
        return true;
    }
    // No.5158
    // 説明:e14e
    // 0xe14e (Windows-31J)
    // 0x750e (UTF-16BE)
    if (argCheck == '甎') {
        return true;
    }
    // No.5159
    // 説明:e14f
    // 0xe14f (Windows-31J)
    // 0x750d (UTF-16BE)
    if (argCheck == '甍') {
        return true;
    }
    // No.5160
    // 説明:e150
    // 0xe150 (Windows-31J)
    // 0x7515 (UTF-16BE)
    if (argCheck == '甕') {
        return true;
    }
    // No.5161
    // 説明:e151
    // 0xe151 (Windows-31J)
    // 0x7513 (UTF-16BE)
    if (argCheck == '甓') {
        return true;
    }
    // No.5162
    // 説明:e152
    // 0xe152 (Windows-31J)
    // 0x751e (UTF-16BE)
    if (argCheck == '甞') {
        return true;
    }
    // No.5163
    // 説明:e153
    // 0xe153 (Windows-31J)
    // 0x7526 (UTF-16BE)
    if (argCheck == '甦') {
        return true;
    }
    // No.5164
    // 説明:e154
    // 0xe154 (Windows-31J)
    // 0x752c (UTF-16BE)
    if (argCheck == '甬') {
        return true;
    }
    // No.5165
    // 説明:e155
    // 0xe155 (Windows-31J)
    // 0x753c (UTF-16BE)
    if (argCheck == '甼') {
        return true;
    }
    // No.5166
    // 説明:e156
    // 0xe156 (Windows-31J)
    // 0x7544 (UTF-16BE)
    if (argCheck == '畄') {
        return true;
    }
    // No.5167
    // 説明:e157
    // 0xe157 (Windows-31J)
    // 0x754d (UTF-16BE)
    if (argCheck == '畍') {
        return true;
    }
    // No.5168
    // 説明:e158
    // 0xe158 (Windows-31J)
    // 0x754a (UTF-16BE)
    if (argCheck == '畊') {
        return true;
    }
    // No.5169
    // 説明:e159
    // 0xe159 (Windows-31J)
    // 0x7549 (UTF-16BE)
    if (argCheck == '畉') {
        return true;
    }
    // No.5170
    // 説明:e15a
    // 0xe15a (Windows-31J)
    // 0x755b (UTF-16BE)
    if (argCheck == '畛') {
        return true;
    }
    // No.5171
    // 説明:e15b
    // 0xe15b (Windows-31J)
    // 0x7546 (UTF-16BE)
    if (argCheck == '畆') {
        return true;
    }
    // No.5172
    // 説明:e15c
    // 0xe15c (Windows-31J)
    // 0x755a (UTF-16BE)
    if (argCheck == '畚') {
        return true;
    }
    // No.5173
    // 説明:e15d
    // 0xe15d (Windows-31J)
    // 0x7569 (UTF-16BE)
    if (argCheck == '畩') {
        return true;
    }
    // No.5174
    // 説明:e15e
    // 0xe15e (Windows-31J)
    // 0x7564 (UTF-16BE)
    if (argCheck == '畤') {
        return true;
    }
    // No.5175
    // 説明:e15f
    // 0xe15f (Windows-31J)
    // 0x7567 (UTF-16BE)
    if (argCheck == '畧') {
        return true;
    }
    // No.5176
    // 説明:e160
    // 0xe160 (Windows-31J)
    // 0x756b (UTF-16BE)
    if (argCheck == '畫') {
        return true;
    }
    // No.5177
    // 説明:e161
    // 0xe161 (Windows-31J)
    // 0x756d (UTF-16BE)
    if (argCheck == '畭') {
        return true;
    }
    // No.5178
    // 説明:e162
    // 0xe162 (Windows-31J)
    // 0x7578 (UTF-16BE)
    if (argCheck == '畸') {
        return true;
    }
    // No.5179
    // 説明:e163
    // 0xe163 (Windows-31J)
    // 0x7576 (UTF-16BE)
    if (argCheck == '當') {
        return true;
    }
    // No.5180
    // 説明:e164
    // 0xe164 (Windows-31J)
    // 0x7586 (UTF-16BE)
    if (argCheck == '疆') {
        return true;
    }
    // No.5181
    // 説明:e165
    // 0xe165 (Windows-31J)
    // 0x7587 (UTF-16BE)
    if (argCheck == '疇') {
        return true;
    }
    // No.5182
    // 説明:e166
    // 0xe166 (Windows-31J)
    // 0x7574 (UTF-16BE)
    if (argCheck == '畴') {
        return true;
    }
    // No.5183
    // 説明:e167
    // 0xe167 (Windows-31J)
    // 0x758a (UTF-16BE)
    if (argCheck == '疊') {
        return true;
    }
    // No.5184
    // 説明:e168
    // 0xe168 (Windows-31J)
    // 0x7589 (UTF-16BE)
    if (argCheck == '疉') {
        return true;
    }
    // No.5185
    // 説明:e169
    // 0xe169 (Windows-31J)
    // 0x7582 (UTF-16BE)
    if (argCheck == '疂') {
        return true;
    }
    // No.5186
    // 説明:e16a
    // 0xe16a (Windows-31J)
    // 0x7594 (UTF-16BE)
    if (argCheck == '疔') {
        return true;
    }
    // No.5187
    // 説明:e16b
    // 0xe16b (Windows-31J)
    // 0x759a (UTF-16BE)
    if (argCheck == '疚') {
        return true;
    }
    // No.5188
    // 説明:e16c
    // 0xe16c (Windows-31J)
    // 0x759d (UTF-16BE)
    if (argCheck == '疝') {
        return true;
    }
    // No.5189
    // 説明:e16d
    // 0xe16d (Windows-31J)
    // 0x75a5 (UTF-16BE)
    if (argCheck == '疥') {
        return true;
    }
    // No.5190
    // 説明:e16e
    // 0xe16e (Windows-31J)
    // 0x75a3 (UTF-16BE)
    if (argCheck == '疣') {
        return true;
    }
    // No.5191
    // 説明:e16f
    // 0xe16f (Windows-31J)
    // 0x75c2 (UTF-16BE)
    if (argCheck == '痂') {
        return true;
    }
    // No.5192
    // 説明:e170
    // 0xe170 (Windows-31J)
    // 0x75b3 (UTF-16BE)
    if (argCheck == '疳') {
        return true;
    }
    // No.5193
    // 説明:e171
    // 0xe171 (Windows-31J)
    // 0x75c3 (UTF-16BE)
    if (argCheck == '痃') {
        return true;
    }
    // No.5194
    // 説明:e172
    // 0xe172 (Windows-31J)
    // 0x75b5 (UTF-16BE)
    if (argCheck == '疵') {
        return true;
    }
    // No.5195
    // 説明:e173
    // 0xe173 (Windows-31J)
    // 0x75bd (UTF-16BE)
    if (argCheck == '疽') {
        return true;
    }
    // No.5196
    // 説明:e174
    // 0xe174 (Windows-31J)
    // 0x75b8 (UTF-16BE)
    if (argCheck == '疸') {
        return true;
    }
    // No.5197
    // 説明:e175
    // 0xe175 (Windows-31J)
    // 0x75bc (UTF-16BE)
    if (argCheck == '疼') {
        return true;
    }
    // No.5198
    // 説明:e176
    // 0xe176 (Windows-31J)
    // 0x75b1 (UTF-16BE)
    if (argCheck == '疱') {
        return true;
    }
    // No.5199
    // 説明:e177
    // 0xe177 (Windows-31J)
    // 0x75cd (UTF-16BE)
    if (argCheck == '痍') {
        return true;
    }
    // No.5200
    // 説明:e178
    // 0xe178 (Windows-31J)
    // 0x75ca (UTF-16BE)
    if (argCheck == '痊') {
        return true;
    }
    // No.5201
    // 説明:e179
    // 0xe179 (Windows-31J)
    // 0x75d2 (UTF-16BE)
    if (argCheck == '痒') {
        return true;
    }
    // No.5202
    // 説明:e17a
    // 0xe17a (Windows-31J)
    // 0x75d9 (UTF-16BE)
    if (argCheck == '痙') {
        return true;
    }
    // No.5203
    // 説明:e17b
    // 0xe17b (Windows-31J)
    // 0x75e3 (UTF-16BE)
    if (argCheck == '痣') {
        return true;
    }
    // No.5204
    // 説明:e17c
    // 0xe17c (Windows-31J)
    // 0x75de (UTF-16BE)
    if (argCheck == '痞') {
        return true;
    }
    // No.5205
    // 説明:e17d
    // 0xe17d (Windows-31J)
    // 0x75fe (UTF-16BE)
    if (argCheck == '痾') {
        return true;
    }
    // No.5206
    // 説明:e17e
    // 0xe17e (Windows-31J)
    // 0x75ff (UTF-16BE)
    if (argCheck == '痿') {
        return true;
    }
    // No.5207
    // 説明:e180
    // 0xe180 (Windows-31J)
    // 0x75fc (UTF-16BE)
    if (argCheck == '痼') {
        return true;
    }
    // No.5208
    // 説明:e181
    // 0xe181 (Windows-31J)
    // 0x7601 (UTF-16BE)
    if (argCheck == '瘁') {
        return true;
    }
    // No.5209
    // 説明:e182
    // 0xe182 (Windows-31J)
    // 0x75f0 (UTF-16BE)
    if (argCheck == '痰') {
        return true;
    }
    // No.5210
    // 説明:e183
    // 0xe183 (Windows-31J)
    // 0x75fa (UTF-16BE)
    if (argCheck == '痺') {
        return true;
    }
    // No.5211
    // 説明:e184
    // 0xe184 (Windows-31J)
    // 0x75f2 (UTF-16BE)
    if (argCheck == '痲') {
        return true;
    }
    // No.5212
    // 説明:e185
    // 0xe185 (Windows-31J)
    // 0x75f3 (UTF-16BE)
    if (argCheck == '痳') {
        return true;
    }
    // No.5213
    // 説明:e186
    // 0xe186 (Windows-31J)
    // 0x760b (UTF-16BE)
    if (argCheck == '瘋') {
        return true;
    }
    // No.5214
    // 説明:e187
    // 0xe187 (Windows-31J)
    // 0x760d (UTF-16BE)
    if (argCheck == '瘍') {
        return true;
    }
    // No.5215
    // 説明:e188
    // 0xe188 (Windows-31J)
    // 0x7609 (UTF-16BE)
    if (argCheck == '瘉') {
        return true;
    }
    // No.5216
    // 説明:e189
    // 0xe189 (Windows-31J)
    // 0x761f (UTF-16BE)
    if (argCheck == '瘟') {
        return true;
    }
    // No.5217
    // 説明:e18a
    // 0xe18a (Windows-31J)
    // 0x7627 (UTF-16BE)
    if (argCheck == '瘧') {
        return true;
    }
    // No.5218
    // 説明:e18b
    // 0xe18b (Windows-31J)
    // 0x7620 (UTF-16BE)
    if (argCheck == '瘠') {
        return true;
    }
    // No.5219
    // 説明:e18c
    // 0xe18c (Windows-31J)
    // 0x7621 (UTF-16BE)
    if (argCheck == '瘡') {
        return true;
    }
    // No.5220
    // 説明:e18d
    // 0xe18d (Windows-31J)
    // 0x7622 (UTF-16BE)
    if (argCheck == '瘢') {
        return true;
    }
    // No.5221
    // 説明:e18e
    // 0xe18e (Windows-31J)
    // 0x7624 (UTF-16BE)
    if (argCheck == '瘤') {
        return true;
    }
    // No.5222
    // 説明:e18f
    // 0xe18f (Windows-31J)
    // 0x7634 (UTF-16BE)
    if (argCheck == '瘴') {
        return true;
    }
    // No.5223
    // 説明:e190
    // 0xe190 (Windows-31J)
    // 0x7630 (UTF-16BE)
    if (argCheck == '瘰') {
        return true;
    }
    // No.5224
    // 説明:e191
    // 0xe191 (Windows-31J)
    // 0x763b (UTF-16BE)
    if (argCheck == '瘻') {
        return true;
    }
    // No.5225
    // 説明:e192
    // 0xe192 (Windows-31J)
    // 0x7647 (UTF-16BE)
    if (argCheck == '癇') {
        return true;
    }
    // No.5226
    // 説明:e193
    // 0xe193 (Windows-31J)
    // 0x7648 (UTF-16BE)
    if (argCheck == '癈') {
        return true;
    }
    // No.5227
    // 説明:e194
    // 0xe194 (Windows-31J)
    // 0x7646 (UTF-16BE)
    if (argCheck == '癆') {
        return true;
    }
    // No.5228
    // 説明:e195
    // 0xe195 (Windows-31J)
    // 0x765c (UTF-16BE)
    if (argCheck == '癜') {
        return true;
    }
    // No.5229
    // 説明:e196
    // 0xe196 (Windows-31J)
    // 0x7658 (UTF-16BE)
    if (argCheck == '癘') {
        return true;
    }
    // No.5230
    // 説明:e197
    // 0xe197 (Windows-31J)
    // 0x7661 (UTF-16BE)
    if (argCheck == '癡') {
        return true;
    }
    // No.5231
    // 説明:e198
    // 0xe198 (Windows-31J)
    // 0x7662 (UTF-16BE)
    if (argCheck == '癢') {
        return true;
    }
    // No.5232
    // 説明:e199
    // 0xe199 (Windows-31J)
    // 0x7668 (UTF-16BE)
    if (argCheck == '癨') {
        return true;
    }
    // No.5233
    // 説明:e19a
    // 0xe19a (Windows-31J)
    // 0x7669 (UTF-16BE)
    if (argCheck == '癩') {
        return true;
    }
    // No.5234
    // 説明:e19b
    // 0xe19b (Windows-31J)
    // 0x766a (UTF-16BE)
    if (argCheck == '癪') {
        return true;
    }
    // No.5235
    // 説明:e19c
    // 0xe19c (Windows-31J)
    // 0x7667 (UTF-16BE)
    if (argCheck == '癧') {
        return true;
    }
    // No.5236
    // 説明:e19d
    // 0xe19d (Windows-31J)
    // 0x766c (UTF-16BE)
    if (argCheck == '癬') {
        return true;
    }
    // No.5237
    // 説明:e19e
    // 0xe19e (Windows-31J)
    // 0x7670 (UTF-16BE)
    if (argCheck == '癰') {
        return true;
    }
    // No.5238
    // 説明:e19f
    // 0xe19f (Windows-31J)
    // 0x7672 (UTF-16BE)
    if (argCheck == '癲') {
        return true;
    }
    // No.5239
    // 説明:e1a0
    // 0xe1a0 (Windows-31J)
    // 0x7676 (UTF-16BE)
    if (argCheck == '癶') {
        return true;
    }
    // No.5240
    // 説明:e1a1
    // 0xe1a1 (Windows-31J)
    // 0x7678 (UTF-16BE)
    if (argCheck == '癸') {
        return true;
    }
    // No.5241
    // 説明:e1a2
    // 0xe1a2 (Windows-31J)
    // 0x767c (UTF-16BE)
    if (argCheck == '發') {
        return true;
    }
    // No.5242
    // 説明:e1a3
    // 0xe1a3 (Windows-31J)
    // 0x7680 (UTF-16BE)
    if (argCheck == '皀') {
        return true;
    }
    // No.5243
    // 説明:e1a4
    // 0xe1a4 (Windows-31J)
    // 0x7683 (UTF-16BE)
    if (argCheck == '皃') {
        return true;
    }
    // No.5244
    // 説明:e1a5
    // 0xe1a5 (Windows-31J)
    // 0x7688 (UTF-16BE)
    if (argCheck == '皈') {
        return true;
    }
    // No.5245
    // 説明:e1a6
    // 0xe1a6 (Windows-31J)
    // 0x768b (UTF-16BE)
    if (argCheck == '皋') {
        return true;
    }
    // No.5246
    // 説明:e1a7
    // 0xe1a7 (Windows-31J)
    // 0x768e (UTF-16BE)
    if (argCheck == '皎') {
        return true;
    }
    // No.5247
    // 説明:e1a8
    // 0xe1a8 (Windows-31J)
    // 0x7696 (UTF-16BE)
    if (argCheck == '皖') {
        return true;
    }
    // No.5248
    // 説明:e1a9
    // 0xe1a9 (Windows-31J)
    // 0x7693 (UTF-16BE)
    if (argCheck == '皓') {
        return true;
    }
    // No.5249
    // 説明:e1aa
    // 0xe1aa (Windows-31J)
    // 0x7699 (UTF-16BE)
    if (argCheck == '皙') {
        return true;
    }
    // No.5250
    // 説明:e1ab
    // 0xe1ab (Windows-31J)
    // 0x769a (UTF-16BE)
    if (argCheck == '皚') {
        return true;
    }
    // No.5251
    // 説明:e1ac
    // 0xe1ac (Windows-31J)
    // 0x76b0 (UTF-16BE)
    if (argCheck == '皰') {
        return true;
    }
    // No.5252
    // 説明:e1ad
    // 0xe1ad (Windows-31J)
    // 0x76b4 (UTF-16BE)
    if (argCheck == '皴') {
        return true;
    }
    // No.5253
    // 説明:e1ae
    // 0xe1ae (Windows-31J)
    // 0x76b8 (UTF-16BE)
    if (argCheck == '皸') {
        return true;
    }
    // No.5254
    // 説明:e1af
    // 0xe1af (Windows-31J)
    // 0x76b9 (UTF-16BE)
    if (argCheck == '皹') {
        return true;
    }
    // No.5255
    // 説明:e1b0
    // 0xe1b0 (Windows-31J)
    // 0x76ba (UTF-16BE)
    if (argCheck == '皺') {
        return true;
    }
    // No.5256
    // 説明:e1b1
    // 0xe1b1 (Windows-31J)
    // 0x76c2 (UTF-16BE)
    if (argCheck == '盂') {
        return true;
    }
    // No.5257
    // 説明:e1b2
    // 0xe1b2 (Windows-31J)
    // 0x76cd (UTF-16BE)
    if (argCheck == '盍') {
        return true;
    }
    // No.5258
    // 説明:e1b3
    // 0xe1b3 (Windows-31J)
    // 0x76d6 (UTF-16BE)
    if (argCheck == '盖') {
        return true;
    }
    // No.5259
    // 説明:e1b4
    // 0xe1b4 (Windows-31J)
    // 0x76d2 (UTF-16BE)
    if (argCheck == '盒') {
        return true;
    }
    // No.5260
    // 説明:e1b5
    // 0xe1b5 (Windows-31J)
    // 0x76de (UTF-16BE)
    if (argCheck == '盞') {
        return true;
    }
    // No.5261
    // 説明:e1b6
    // 0xe1b6 (Windows-31J)
    // 0x76e1 (UTF-16BE)
    if (argCheck == '盡') {
        return true;
    }
    // No.5262
    // 説明:e1b7
    // 0xe1b7 (Windows-31J)
    // 0x76e5 (UTF-16BE)
    if (argCheck == '盥') {
        return true;
    }
    // No.5263
    // 説明:e1b8
    // 0xe1b8 (Windows-31J)
    // 0x76e7 (UTF-16BE)
    if (argCheck == '盧') {
        return true;
    }
    // No.5264
    // 説明:e1b9
    // 0xe1b9 (Windows-31J)
    // 0x76ea (UTF-16BE)
    if (argCheck == '盪') {
        return true;
    }
    // No.5265
    // 説明:e1ba
    // 0xe1ba (Windows-31J)
    // 0x862f (UTF-16BE)
    if (argCheck == '蘯') {
        return true;
    }
    // No.5266
    // 説明:e1bb
    // 0xe1bb (Windows-31J)
    // 0x76fb (UTF-16BE)
    if (argCheck == '盻') {
        return true;
    }
    // No.5267
    // 説明:e1bc
    // 0xe1bc (Windows-31J)
    // 0x7708 (UTF-16BE)
    if (argCheck == '眈') {
        return true;
    }
    // No.5268
    // 説明:e1bd
    // 0xe1bd (Windows-31J)
    // 0x7707 (UTF-16BE)
    if (argCheck == '眇') {
        return true;
    }
    // No.5269
    // 説明:e1be
    // 0xe1be (Windows-31J)
    // 0x7704 (UTF-16BE)
    if (argCheck == '眄') {
        return true;
    }
    // No.5270
    // 説明:e1bf
    // 0xe1bf (Windows-31J)
    // 0x7729 (UTF-16BE)
    if (argCheck == '眩') {
        return true;
    }
    // No.5271
    // 説明:e1c0
    // 0xe1c0 (Windows-31J)
    // 0x7724 (UTF-16BE)
    if (argCheck == '眤') {
        return true;
    }
    // No.5272
    // 説明:e1c1
    // 0xe1c1 (Windows-31J)
    // 0x771e (UTF-16BE)
    if (argCheck == '眞') {
        return true;
    }
    // No.5273
    // 説明:e1c2
    // 0xe1c2 (Windows-31J)
    // 0x7725 (UTF-16BE)
    if (argCheck == '眥') {
        return true;
    }
    // No.5274
    // 説明:e1c3
    // 0xe1c3 (Windows-31J)
    // 0x7726 (UTF-16BE)
    if (argCheck == '眦') {
        return true;
    }
    // No.5275
    // 説明:e1c4
    // 0xe1c4 (Windows-31J)
    // 0x771b (UTF-16BE)
    if (argCheck == '眛') {
        return true;
    }
    // No.5276
    // 説明:e1c5
    // 0xe1c5 (Windows-31J)
    // 0x7737 (UTF-16BE)
    if (argCheck == '眷') {
        return true;
    }
    // No.5277
    // 説明:e1c6
    // 0xe1c6 (Windows-31J)
    // 0x7738 (UTF-16BE)
    if (argCheck == '眸') {
        return true;
    }
    // No.5278
    // 説明:e1c7
    // 0xe1c7 (Windows-31J)
    // 0x7747 (UTF-16BE)
    if (argCheck == '睇') {
        return true;
    }
    // No.5279
    // 説明:e1c8
    // 0xe1c8 (Windows-31J)
    // 0x775a (UTF-16BE)
    if (argCheck == '睚') {
        return true;
    }
    // No.5280
    // 説明:e1c9
    // 0xe1c9 (Windows-31J)
    // 0x7768 (UTF-16BE)
    if (argCheck == '睨') {
        return true;
    }
    // No.5281
    // 説明:e1ca
    // 0xe1ca (Windows-31J)
    // 0x776b (UTF-16BE)
    if (argCheck == '睫') {
        return true;
    }
    // No.5282
    // 説明:e1cb
    // 0xe1cb (Windows-31J)
    // 0x775b (UTF-16BE)
    if (argCheck == '睛') {
        return true;
    }
    // No.5283
    // 説明:e1cc
    // 0xe1cc (Windows-31J)
    // 0x7765 (UTF-16BE)
    if (argCheck == '睥') {
        return true;
    }
    // No.5284
    // 説明:e1cd
    // 0xe1cd (Windows-31J)
    // 0x777f (UTF-16BE)
    if (argCheck == '睿') {
        return true;
    }
    // No.5285
    // 説明:e1ce
    // 0xe1ce (Windows-31J)
    // 0x777e (UTF-16BE)
    if (argCheck == '睾') {
        return true;
    }
    // No.5286
    // 説明:e1cf
    // 0xe1cf (Windows-31J)
    // 0x7779 (UTF-16BE)
    if (argCheck == '睹') {
        return true;
    }
    // No.5287
    // 説明:e1d0
    // 0xe1d0 (Windows-31J)
    // 0x778e (UTF-16BE)
    if (argCheck == '瞎') {
        return true;
    }
    // No.5288
    // 説明:e1d1
    // 0xe1d1 (Windows-31J)
    // 0x778b (UTF-16BE)
    if (argCheck == '瞋') {
        return true;
    }
    // No.5289
    // 説明:e1d2
    // 0xe1d2 (Windows-31J)
    // 0x7791 (UTF-16BE)
    if (argCheck == '瞑') {
        return true;
    }
    // No.5290
    // 説明:e1d3
    // 0xe1d3 (Windows-31J)
    // 0x77a0 (UTF-16BE)
    if (argCheck == '瞠') {
        return true;
    }
    // No.5291
    // 説明:e1d4
    // 0xe1d4 (Windows-31J)
    // 0x779e (UTF-16BE)
    if (argCheck == '瞞') {
        return true;
    }
    // No.5292
    // 説明:e1d5
    // 0xe1d5 (Windows-31J)
    // 0x77b0 (UTF-16BE)
    if (argCheck == '瞰') {
        return true;
    }
    // No.5293
    // 説明:e1d6
    // 0xe1d6 (Windows-31J)
    // 0x77b6 (UTF-16BE)
    if (argCheck == '瞶') {
        return true;
    }
    // No.5294
    // 説明:e1d7
    // 0xe1d7 (Windows-31J)
    // 0x77b9 (UTF-16BE)
    if (argCheck == '瞹') {
        return true;
    }
    // No.5295
    // 説明:e1d8
    // 0xe1d8 (Windows-31J)
    // 0x77bf (UTF-16BE)
    if (argCheck == '瞿') {
        return true;
    }
    // No.5296
    // 説明:e1d9
    // 0xe1d9 (Windows-31J)
    // 0x77bc (UTF-16BE)
    if (argCheck == '瞼') {
        return true;
    }
    // No.5297
    // 説明:e1da
    // 0xe1da (Windows-31J)
    // 0x77bd (UTF-16BE)
    if (argCheck == '瞽') {
        return true;
    }
    // No.5298
    // 説明:e1db
    // 0xe1db (Windows-31J)
    // 0x77bb (UTF-16BE)
    if (argCheck == '瞻') {
        return true;
    }
    // No.5299
    // 説明:e1dc
    // 0xe1dc (Windows-31J)
    // 0x77c7 (UTF-16BE)
    if (argCheck == '矇') {
        return true;
    }
    // No.5300
    // 説明:e1dd
    // 0xe1dd (Windows-31J)
    // 0x77cd (UTF-16BE)
    if (argCheck == '矍') {
        return true;
    }
    // No.5301
    // 説明:e1de
    // 0xe1de (Windows-31J)
    // 0x77d7 (UTF-16BE)
    if (argCheck == '矗') {
        return true;
    }
    // No.5302
    // 説明:e1df
    // 0xe1df (Windows-31J)
    // 0x77da (UTF-16BE)
    if (argCheck == '矚') {
        return true;
    }
    // No.5303
    // 説明:e1e0
    // 0xe1e0 (Windows-31J)
    // 0x77dc (UTF-16BE)
    if (argCheck == '矜') {
        return true;
    }
    // No.5304
    // 説明:e1e1
    // 0xe1e1 (Windows-31J)
    // 0x77e3 (UTF-16BE)
    if (argCheck == '矣') {
        return true;
    }
    // No.5305
    // 説明:e1e2
    // 0xe1e2 (Windows-31J)
    // 0x77ee (UTF-16BE)
    if (argCheck == '矮') {
        return true;
    }
    // No.5306
    // 説明:e1e3
    // 0xe1e3 (Windows-31J)
    // 0x77fc (UTF-16BE)
    if (argCheck == '矼') {
        return true;
    }
    // No.5307
    // 説明:e1e4
    // 0xe1e4 (Windows-31J)
    // 0x780c (UTF-16BE)
    if (argCheck == '砌') {
        return true;
    }
    // No.5308
    // 説明:e1e5
    // 0xe1e5 (Windows-31J)
    // 0x7812 (UTF-16BE)
    if (argCheck == '砒') {
        return true;
    }
    // No.5309
    // 説明:e1e6
    // 0xe1e6 (Windows-31J)
    // 0x7926 (UTF-16BE)
    if (argCheck == '礦') {
        return true;
    }
    // No.5310
    // 説明:e1e7
    // 0xe1e7 (Windows-31J)
    // 0x7820 (UTF-16BE)
    if (argCheck == '砠') {
        return true;
    }
    // No.5311
    // 説明:e1e8
    // 0xe1e8 (Windows-31J)
    // 0x792a (UTF-16BE)
    if (argCheck == '礪') {
        return true;
    }
    // No.5312
    // 説明:e1e9
    // 0xe1e9 (Windows-31J)
    // 0x7845 (UTF-16BE)
    if (argCheck == '硅') {
        return true;
    }
    // No.5313
    // 説明:e1ea
    // 0xe1ea (Windows-31J)
    // 0x788e (UTF-16BE)
    if (argCheck == '碎') {
        return true;
    }
    // No.5314
    // 説明:e1eb
    // 0xe1eb (Windows-31J)
    // 0x7874 (UTF-16BE)
    if (argCheck == '硴') {
        return true;
    }
    // No.5315
    // 説明:e1ec
    // 0xe1ec (Windows-31J)
    // 0x7886 (UTF-16BE)
    if (argCheck == '碆') {
        return true;
    }
    // No.5316
    // 説明:e1ed
    // 0xe1ed (Windows-31J)
    // 0x787c (UTF-16BE)
    if (argCheck == '硼') {
        return true;
    }
    // No.5317
    // 説明:e1ee
    // 0xe1ee (Windows-31J)
    // 0x789a (UTF-16BE)
    if (argCheck == '碚') {
        return true;
    }
    // No.5318
    // 説明:e1ef
    // 0xe1ef (Windows-31J)
    // 0x788c (UTF-16BE)
    if (argCheck == '碌') {
        return true;
    }
    // No.5319
    // 説明:e1f0
    // 0xe1f0 (Windows-31J)
    // 0x78a3 (UTF-16BE)
    if (argCheck == '碣') {
        return true;
    }
    // No.5320
    // 説明:e1f1
    // 0xe1f1 (Windows-31J)
    // 0x78b5 (UTF-16BE)
    if (argCheck == '碵') {
        return true;
    }
    // No.5321
    // 説明:e1f2
    // 0xe1f2 (Windows-31J)
    // 0x78aa (UTF-16BE)
    if (argCheck == '碪') {
        return true;
    }
    // No.5322
    // 説明:e1f3
    // 0xe1f3 (Windows-31J)
    // 0x78af (UTF-16BE)
    if (argCheck == '碯') {
        return true;
    }
    // No.5323
    // 説明:e1f4
    // 0xe1f4 (Windows-31J)
    // 0x78d1 (UTF-16BE)
    if (argCheck == '磑') {
        return true;
    }
    // No.5324
    // 説明:e1f5
    // 0xe1f5 (Windows-31J)
    // 0x78c6 (UTF-16BE)
    if (argCheck == '磆') {
        return true;
    }
    // No.5325
    // 説明:e1f6
    // 0xe1f6 (Windows-31J)
    // 0x78cb (UTF-16BE)
    if (argCheck == '磋') {
        return true;
    }
    // No.5326
    // 説明:e1f7
    // 0xe1f7 (Windows-31J)
    // 0x78d4 (UTF-16BE)
    if (argCheck == '磔') {
        return true;
    }
    // No.5327
    // 説明:e1f8
    // 0xe1f8 (Windows-31J)
    // 0x78be (UTF-16BE)
    if (argCheck == '碾') {
        return true;
    }
    // No.5328
    // 説明:e1f9
    // 0xe1f9 (Windows-31J)
    // 0x78bc (UTF-16BE)
    if (argCheck == '碼') {
        return true;
    }
    // No.5329
    // 説明:e1fa
    // 0xe1fa (Windows-31J)
    // 0x78c5 (UTF-16BE)
    if (argCheck == '磅') {
        return true;
    }
    // No.5330
    // 説明:e1fb
    // 0xe1fb (Windows-31J)
    // 0x78ca (UTF-16BE)
    if (argCheck == '磊') {
        return true;
    }
    // No.5331
    // 説明:e1fc
    // 0xe1fc (Windows-31J)
    // 0x78ec (UTF-16BE)
    if (argCheck == '磬') {
        return true;
    }
    // No.5332
    // 説明:e240
    // 0xe240 (Windows-31J)
    // 0x78e7 (UTF-16BE)
    if (argCheck == '磧') {
        return true;
    }
    // No.5333
    // 説明:e241
    // 0xe241 (Windows-31J)
    // 0x78da (UTF-16BE)
    if (argCheck == '磚') {
        return true;
    }
    // No.5334
    // 説明:e242
    // 0xe242 (Windows-31J)
    // 0x78fd (UTF-16BE)
    if (argCheck == '磽') {
        return true;
    }
    // No.5335
    // 説明:e243
    // 0xe243 (Windows-31J)
    // 0x78f4 (UTF-16BE)
    if (argCheck == '磴') {
        return true;
    }
    // No.5336
    // 説明:e244
    // 0xe244 (Windows-31J)
    // 0x7907 (UTF-16BE)
    if (argCheck == '礇') {
        return true;
    }
    // No.5337
    // 説明:e245
    // 0xe245 (Windows-31J)
    // 0x7912 (UTF-16BE)
    if (argCheck == '礒') {
        return true;
    }
    // No.5338
    // 説明:e246
    // 0xe246 (Windows-31J)
    // 0x7911 (UTF-16BE)
    if (argCheck == '礑') {
        return true;
    }
    // No.5339
    // 説明:e247
    // 0xe247 (Windows-31J)
    // 0x7919 (UTF-16BE)
    if (argCheck == '礙') {
        return true;
    }
    // No.5340
    // 説明:e248
    // 0xe248 (Windows-31J)
    // 0x792c (UTF-16BE)
    if (argCheck == '礬') {
        return true;
    }
    // No.5341
    // 説明:e249
    // 0xe249 (Windows-31J)
    // 0x792b (UTF-16BE)
    if (argCheck == '礫') {
        return true;
    }
    // No.5342
    // 説明:e24a
    // 0xe24a (Windows-31J)
    // 0x7940 (UTF-16BE)
    if (argCheck == '祀') {
        return true;
    }
    // No.5343
    // 説明:e24b
    // 0xe24b (Windows-31J)
    // 0x7960 (UTF-16BE)
    if (argCheck == '祠') {
        return true;
    }
    // No.5344
    // 説明:e24c
    // 0xe24c (Windows-31J)
    // 0x7957 (UTF-16BE)
    if (argCheck == '祗') {
        return true;
    }
    // No.5345
    // 説明:e24d
    // 0xe24d (Windows-31J)
    // 0x795f (UTF-16BE)
    if (argCheck == '祟') {
        return true;
    }
    // No.5346
    // 説明:e24e
    // 0xe24e (Windows-31J)
    // 0x795a (UTF-16BE)
    if (argCheck == '祚') {
        return true;
    }
    // No.5347
    // 説明:e24f
    // 0xe24f (Windows-31J)
    // 0x7955 (UTF-16BE)
    if (argCheck == '祕') {
        return true;
    }
    // No.5348
    // 説明:e250
    // 0xe250 (Windows-31J)
    // 0x7953 (UTF-16BE)
    if (argCheck == '祓') {
        return true;
    }
    // No.5349
    // 説明:e251
    // 0xe251 (Windows-31J)
    // 0x797a (UTF-16BE)
    if (argCheck == '祺') {
        return true;
    }
    // No.5350
    // 説明:e252
    // 0xe252 (Windows-31J)
    // 0x797f (UTF-16BE)
    if (argCheck == '祿') {
        return true;
    }
    // No.5351
    // 説明:e253
    // 0xe253 (Windows-31J)
    // 0x798a (UTF-16BE)
    if (argCheck == '禊') {
        return true;
    }
    // No.5352
    // 説明:e254
    // 0xe254 (Windows-31J)
    // 0x799d (UTF-16BE)
    if (argCheck == '禝') {
        return true;
    }
    // No.5353
    // 説明:e255
    // 0xe255 (Windows-31J)
    // 0x79a7 (UTF-16BE)
    if (argCheck == '禧') {
        return true;
    }
    // No.5354
    // 説明:e256
    // 0xe256 (Windows-31J)
    // 0x9f4b (UTF-16BE)
    if (argCheck == '齋') {
        return true;
    }
    // No.5355
    // 説明:e257
    // 0xe257 (Windows-31J)
    // 0x79aa (UTF-16BE)
    if (argCheck == '禪') {
        return true;
    }
    // No.5356
    // 説明:e258
    // 0xe258 (Windows-31J)
    // 0x79ae (UTF-16BE)
    if (argCheck == '禮') {
        return true;
    }
    // No.5357
    // 説明:e259
    // 0xe259 (Windows-31J)
    // 0x79b3 (UTF-16BE)
    if (argCheck == '禳') {
        return true;
    }
    // No.5358
    // 説明:e25a
    // 0xe25a (Windows-31J)
    // 0x79b9 (UTF-16BE)
    if (argCheck == '禹') {
        return true;
    }
    // No.5359
    // 説明:e25b
    // 0xe25b (Windows-31J)
    // 0x79ba (UTF-16BE)
    if (argCheck == '禺') {
        return true;
    }
    // No.5360
    // 説明:e25c
    // 0xe25c (Windows-31J)
    // 0x79c9 (UTF-16BE)
    if (argCheck == '秉') {
        return true;
    }
    // No.5361
    // 説明:e25d
    // 0xe25d (Windows-31J)
    // 0x79d5 (UTF-16BE)
    if (argCheck == '秕') {
        return true;
    }
    // No.5362
    // 説明:e25e
    // 0xe25e (Windows-31J)
    // 0x79e7 (UTF-16BE)
    if (argCheck == '秧') {
        return true;
    }
    // No.5363
    // 説明:e25f
    // 0xe25f (Windows-31J)
    // 0x79ec (UTF-16BE)
    if (argCheck == '秬') {
        return true;
    }
    // No.5364
    // 説明:e260
    // 0xe260 (Windows-31J)
    // 0x79e1 (UTF-16BE)
    if (argCheck == '秡') {
        return true;
    }
    // No.5365
    // 説明:e261
    // 0xe261 (Windows-31J)
    // 0x79e3 (UTF-16BE)
    if (argCheck == '秣') {
        return true;
    }
    // No.5366
    // 説明:e262
    // 0xe262 (Windows-31J)
    // 0x7a08 (UTF-16BE)
    if (argCheck == '稈') {
        return true;
    }
    // No.5367
    // 説明:e263
    // 0xe263 (Windows-31J)
    // 0x7a0d (UTF-16BE)
    if (argCheck == '稍') {
        return true;
    }
    // No.5368
    // 説明:e264
    // 0xe264 (Windows-31J)
    // 0x7a18 (UTF-16BE)
    if (argCheck == '稘') {
        return true;
    }
    // No.5369
    // 説明:e265
    // 0xe265 (Windows-31J)
    // 0x7a19 (UTF-16BE)
    if (argCheck == '稙') {
        return true;
    }
    // No.5370
    // 説明:e266
    // 0xe266 (Windows-31J)
    // 0x7a20 (UTF-16BE)
    if (argCheck == '稠') {
        return true;
    }
    // No.5371
    // 説明:e267
    // 0xe267 (Windows-31J)
    // 0x7a1f (UTF-16BE)
    if (argCheck == '稟') {
        return true;
    }
    // No.5372
    // 説明:e268
    // 0xe268 (Windows-31J)
    // 0x7980 (UTF-16BE)
    if (argCheck == '禀') {
        return true;
    }
    // No.5373
    // 説明:e269
    // 0xe269 (Windows-31J)
    // 0x7a31 (UTF-16BE)
    if (argCheck == '稱') {
        return true;
    }
    // No.5374
    // 説明:e26a
    // 0xe26a (Windows-31J)
    // 0x7a3b (UTF-16BE)
    if (argCheck == '稻') {
        return true;
    }
    // No.5375
    // 説明:e26b
    // 0xe26b (Windows-31J)
    // 0x7a3e (UTF-16BE)
    if (argCheck == '稾') {
        return true;
    }
    // No.5376
    // 説明:e26c
    // 0xe26c (Windows-31J)
    // 0x7a37 (UTF-16BE)
    if (argCheck == '稷') {
        return true;
    }
    // No.5377
    // 説明:e26d
    // 0xe26d (Windows-31J)
    // 0x7a43 (UTF-16BE)
    if (argCheck == '穃') {
        return true;
    }
    // No.5378
    // 説明:e26e
    // 0xe26e (Windows-31J)
    // 0x7a57 (UTF-16BE)
    if (argCheck == '穗') {
        return true;
    }
    // No.5379
    // 説明:e26f
    // 0xe26f (Windows-31J)
    // 0x7a49 (UTF-16BE)
    if (argCheck == '穉') {
        return true;
    }
    // No.5380
    // 説明:e270
    // 0xe270 (Windows-31J)
    // 0x7a61 (UTF-16BE)
    if (argCheck == '穡') {
        return true;
    }
    // No.5381
    // 説明:e271
    // 0xe271 (Windows-31J)
    // 0x7a62 (UTF-16BE)
    if (argCheck == '穢') {
        return true;
    }
    // No.5382
    // 説明:e272
    // 0xe272 (Windows-31J)
    // 0x7a69 (UTF-16BE)
    if (argCheck == '穩') {
        return true;
    }
    // No.5383
    // 説明:e273
    // 0xe273 (Windows-31J)
    // 0x9f9d (UTF-16BE)
    if (argCheck == '龝') {
        return true;
    }
    // No.5384
    // 説明:e274
    // 0xe274 (Windows-31J)
    // 0x7a70 (UTF-16BE)
    if (argCheck == '穰') {
        return true;
    }
    // No.5385
    // 説明:e275
    // 0xe275 (Windows-31J)
    // 0x7a79 (UTF-16BE)
    if (argCheck == '穹') {
        return true;
    }
    // No.5386
    // 説明:e276
    // 0xe276 (Windows-31J)
    // 0x7a7d (UTF-16BE)
    if (argCheck == '穽') {
        return true;
    }
    // No.5387
    // 説明:e277
    // 0xe277 (Windows-31J)
    // 0x7a88 (UTF-16BE)
    if (argCheck == '窈') {
        return true;
    }
    // No.5388
    // 説明:e278
    // 0xe278 (Windows-31J)
    // 0x7a97 (UTF-16BE)
    if (argCheck == '窗') {
        return true;
    }
    // No.5389
    // 説明:e279
    // 0xe279 (Windows-31J)
    // 0x7a95 (UTF-16BE)
    if (argCheck == '窕') {
        return true;
    }
    // No.5390
    // 説明:e27a
    // 0xe27a (Windows-31J)
    // 0x7a98 (UTF-16BE)
    if (argCheck == '窘') {
        return true;
    }
    // No.5391
    // 説明:e27b
    // 0xe27b (Windows-31J)
    // 0x7a96 (UTF-16BE)
    if (argCheck == '窖') {
        return true;
    }
    // No.5392
    // 説明:e27c
    // 0xe27c (Windows-31J)
    // 0x7aa9 (UTF-16BE)
    if (argCheck == '窩') {
        return true;
    }
    // No.5393
    // 説明:e27d
    // 0xe27d (Windows-31J)
    // 0x7ac8 (UTF-16BE)
    if (argCheck == '竈') {
        return true;
    }
    // No.5394
    // 説明:e27e
    // 0xe27e (Windows-31J)
    // 0x7ab0 (UTF-16BE)
    if (argCheck == '窰') {
        return true;
    }
    // No.5395
    // 説明:e280
    // 0xe280 (Windows-31J)
    // 0x7ab6 (UTF-16BE)
    if (argCheck == '窶') {
        return true;
    }
    // No.5396
    // 説明:e281
    // 0xe281 (Windows-31J)
    // 0x7ac5 (UTF-16BE)
    if (argCheck == '竅') {
        return true;
    }
    // No.5397
    // 説明:e282
    // 0xe282 (Windows-31J)
    // 0x7ac4 (UTF-16BE)
    if (argCheck == '竄') {
        return true;
    }
    // No.5398
    // 説明:e283
    // 0xe283 (Windows-31J)
    // 0x7abf (UTF-16BE)
    if (argCheck == '窿') {
        return true;
    }
    // No.5399
    // 説明:e284
    // 0xe284 (Windows-31J)
    // 0x9083 (UTF-16BE)
    if (argCheck == '邃') {
        return true;
    }
    // No.5400
    // 説明:e285
    // 0xe285 (Windows-31J)
    // 0x7ac7 (UTF-16BE)
    if (argCheck == '竇') {
        return true;
    }
    // No.5401
    // 説明:e286
    // 0xe286 (Windows-31J)
    // 0x7aca (UTF-16BE)
    if (argCheck == '竊') {
        return true;
    }
    // No.5402
    // 説明:e287
    // 0xe287 (Windows-31J)
    // 0x7acd (UTF-16BE)
    if (argCheck == '竍') {
        return true;
    }
    // No.5403
    // 説明:e288
    // 0xe288 (Windows-31J)
    // 0x7acf (UTF-16BE)
    if (argCheck == '竏') {
        return true;
    }
    // No.5404
    // 説明:e289
    // 0xe289 (Windows-31J)
    // 0x7ad5 (UTF-16BE)
    if (argCheck == '竕') {
        return true;
    }
    // No.5405
    // 説明:e28a
    // 0xe28a (Windows-31J)
    // 0x7ad3 (UTF-16BE)
    if (argCheck == '竓') {
        return true;
    }
    // No.5406
    // 説明:e28b
    // 0xe28b (Windows-31J)
    // 0x7ad9 (UTF-16BE)
    if (argCheck == '站') {
        return true;
    }
    // No.5407
    // 説明:e28c
    // 0xe28c (Windows-31J)
    // 0x7ada (UTF-16BE)
    if (argCheck == '竚') {
        return true;
    }
    // No.5408
    // 説明:e28d
    // 0xe28d (Windows-31J)
    // 0x7add (UTF-16BE)
    if (argCheck == '竝') {
        return true;
    }
    // No.5409
    // 説明:e28e
    // 0xe28e (Windows-31J)
    // 0x7ae1 (UTF-16BE)
    if (argCheck == '竡') {
        return true;
    }
    // No.5410
    // 説明:e28f
    // 0xe28f (Windows-31J)
    // 0x7ae2 (UTF-16BE)
    if (argCheck == '竢') {
        return true;
    }
    // No.5411
    // 説明:e290
    // 0xe290 (Windows-31J)
    // 0x7ae6 (UTF-16BE)
    if (argCheck == '竦') {
        return true;
    }
    // No.5412
    // 説明:e291
    // 0xe291 (Windows-31J)
    // 0x7aed (UTF-16BE)
    if (argCheck == '竭') {
        return true;
    }
    // No.5413
    // 説明:e292
    // 0xe292 (Windows-31J)
    // 0x7af0 (UTF-16BE)
    if (argCheck == '竰') {
        return true;
    }
    // No.5414
    // 説明:e293
    // 0xe293 (Windows-31J)
    // 0x7b02 (UTF-16BE)
    if (argCheck == '笂') {
        return true;
    }
    // No.5415
    // 説明:e294
    // 0xe294 (Windows-31J)
    // 0x7b0f (UTF-16BE)
    if (argCheck == '笏') {
        return true;
    }
    // No.5416
    // 説明:e295
    // 0xe295 (Windows-31J)
    // 0x7b0a (UTF-16BE)
    if (argCheck == '笊') {
        return true;
    }
    // No.5417
    // 説明:e296
    // 0xe296 (Windows-31J)
    // 0x7b06 (UTF-16BE)
    if (argCheck == '笆') {
        return true;
    }
    // No.5418
    // 説明:e297
    // 0xe297 (Windows-31J)
    // 0x7b33 (UTF-16BE)
    if (argCheck == '笳') {
        return true;
    }
    // No.5419
    // 説明:e298
    // 0xe298 (Windows-31J)
    // 0x7b18 (UTF-16BE)
    if (argCheck == '笘') {
        return true;
    }
    // No.5420
    // 説明:e299
    // 0xe299 (Windows-31J)
    // 0x7b19 (UTF-16BE)
    if (argCheck == '笙') {
        return true;
    }
    // No.5421
    // 説明:e29a
    // 0xe29a (Windows-31J)
    // 0x7b1e (UTF-16BE)
    if (argCheck == '笞') {
        return true;
    }
    // No.5422
    // 説明:e29b
    // 0xe29b (Windows-31J)
    // 0x7b35 (UTF-16BE)
    if (argCheck == '笵') {
        return true;
    }
    // No.5423
    // 説明:e29c
    // 0xe29c (Windows-31J)
    // 0x7b28 (UTF-16BE)
    if (argCheck == '笨') {
        return true;
    }
    // No.5424
    // 説明:e29d
    // 0xe29d (Windows-31J)
    // 0x7b36 (UTF-16BE)
    if (argCheck == '笶') {
        return true;
    }
    // No.5425
    // 説明:e29e
    // 0xe29e (Windows-31J)
    // 0x7b50 (UTF-16BE)
    if (argCheck == '筐') {
        return true;
    }
    // No.5426
    // 説明:e29f
    // 0xe29f (Windows-31J)
    // 0x7b7a (UTF-16BE)
    if (argCheck == '筺') {
        return true;
    }
    // No.5427
    // 説明:e2a0
    // 0xe2a0 (Windows-31J)
    // 0x7b04 (UTF-16BE)
    if (argCheck == '笄') {
        return true;
    }
    // No.5428
    // 説明:e2a1
    // 0xe2a1 (Windows-31J)
    // 0x7b4d (UTF-16BE)
    if (argCheck == '筍') {
        return true;
    }
    // No.5429
    // 説明:e2a2
    // 0xe2a2 (Windows-31J)
    // 0x7b0b (UTF-16BE)
    if (argCheck == '笋') {
        return true;
    }
    // No.5430
    // 説明:e2a3
    // 0xe2a3 (Windows-31J)
    // 0x7b4c (UTF-16BE)
    if (argCheck == '筌') {
        return true;
    }
    // No.5431
    // 説明:e2a4
    // 0xe2a4 (Windows-31J)
    // 0x7b45 (UTF-16BE)
    if (argCheck == '筅') {
        return true;
    }
    // No.5432
    // 説明:e2a5
    // 0xe2a5 (Windows-31J)
    // 0x7b75 (UTF-16BE)
    if (argCheck == '筵') {
        return true;
    }
    // No.5433
    // 説明:e2a6
    // 0xe2a6 (Windows-31J)
    // 0x7b65 (UTF-16BE)
    if (argCheck == '筥') {
        return true;
    }
    // No.5434
    // 説明:e2a7
    // 0xe2a7 (Windows-31J)
    // 0x7b74 (UTF-16BE)
    if (argCheck == '筴') {
        return true;
    }
    // No.5435
    // 説明:e2a8
    // 0xe2a8 (Windows-31J)
    // 0x7b67 (UTF-16BE)
    if (argCheck == '筧') {
        return true;
    }
    // No.5436
    // 説明:e2a9
    // 0xe2a9 (Windows-31J)
    // 0x7b70 (UTF-16BE)
    if (argCheck == '筰') {
        return true;
    }
    // No.5437
    // 説明:e2aa
    // 0xe2aa (Windows-31J)
    // 0x7b71 (UTF-16BE)
    if (argCheck == '筱') {
        return true;
    }
    // No.5438
    // 説明:e2ab
    // 0xe2ab (Windows-31J)
    // 0x7b6c (UTF-16BE)
    if (argCheck == '筬') {
        return true;
    }
    // No.5439
    // 説明:e2ac
    // 0xe2ac (Windows-31J)
    // 0x7b6e (UTF-16BE)
    if (argCheck == '筮') {
        return true;
    }
    // No.5440
    // 説明:e2ad
    // 0xe2ad (Windows-31J)
    // 0x7b9d (UTF-16BE)
    if (argCheck == '箝') {
        return true;
    }
    // No.5441
    // 説明:e2ae
    // 0xe2ae (Windows-31J)
    // 0x7b98 (UTF-16BE)
    if (argCheck == '箘') {
        return true;
    }
    // No.5442
    // 説明:e2af
    // 0xe2af (Windows-31J)
    // 0x7b9f (UTF-16BE)
    if (argCheck == '箟') {
        return true;
    }
    // No.5443
    // 説明:e2b0
    // 0xe2b0 (Windows-31J)
    // 0x7b8d (UTF-16BE)
    if (argCheck == '箍') {
        return true;
    }
    // No.5444
    // 説明:e2b1
    // 0xe2b1 (Windows-31J)
    // 0x7b9c (UTF-16BE)
    if (argCheck == '箜') {
        return true;
    }
    // No.5445
    // 説明:e2b2
    // 0xe2b2 (Windows-31J)
    // 0x7b9a (UTF-16BE)
    if (argCheck == '箚') {
        return true;
    }
    // No.5446
    // 説明:e2b3
    // 0xe2b3 (Windows-31J)
    // 0x7b8b (UTF-16BE)
    if (argCheck == '箋') {
        return true;
    }
    // No.5447
    // 説明:e2b4
    // 0xe2b4 (Windows-31J)
    // 0x7b92 (UTF-16BE)
    if (argCheck == '箒') {
        return true;
    }
    // No.5448
    // 説明:e2b5
    // 0xe2b5 (Windows-31J)
    // 0x7b8f (UTF-16BE)
    if (argCheck == '箏') {
        return true;
    }
    // No.5449
    // 説明:e2b6
    // 0xe2b6 (Windows-31J)
    // 0x7b5d (UTF-16BE)
    if (argCheck == '筝') {
        return true;
    }
    // No.5450
    // 説明:e2b7
    // 0xe2b7 (Windows-31J)
    // 0x7b99 (UTF-16BE)
    if (argCheck == '箙') {
        return true;
    }
    // No.5451
    // 説明:e2b8
    // 0xe2b8 (Windows-31J)
    // 0x7bcb (UTF-16BE)
    if (argCheck == '篋') {
        return true;
    }
    // No.5452
    // 説明:e2b9
    // 0xe2b9 (Windows-31J)
    // 0x7bc1 (UTF-16BE)
    if (argCheck == '篁') {
        return true;
    }
    // No.5453
    // 説明:e2ba
    // 0xe2ba (Windows-31J)
    // 0x7bcc (UTF-16BE)
    if (argCheck == '篌') {
        return true;
    }
    // No.5454
    // 説明:e2bb
    // 0xe2bb (Windows-31J)
    // 0x7bcf (UTF-16BE)
    if (argCheck == '篏') {
        return true;
    }
    // No.5455
    // 説明:e2bc
    // 0xe2bc (Windows-31J)
    // 0x7bb4 (UTF-16BE)
    if (argCheck == '箴') {
        return true;
    }
    // No.5456
    // 説明:e2bd
    // 0xe2bd (Windows-31J)
    // 0x7bc6 (UTF-16BE)
    if (argCheck == '篆') {
        return true;
    }
    // No.5457
    // 説明:e2be
    // 0xe2be (Windows-31J)
    // 0x7bdd (UTF-16BE)
    if (argCheck == '篝') {
        return true;
    }
    // No.5458
    // 説明:e2bf
    // 0xe2bf (Windows-31J)
    // 0x7be9 (UTF-16BE)
    if (argCheck == '篩') {
        return true;
    }
    // No.5459
    // 説明:e2c0
    // 0xe2c0 (Windows-31J)
    // 0x7c11 (UTF-16BE)
    if (argCheck == '簑') {
        return true;
    }
    // No.5460
    // 説明:e2c1
    // 0xe2c1 (Windows-31J)
    // 0x7c14 (UTF-16BE)
    if (argCheck == '簔') {
        return true;
    }
    // No.5461
    // 説明:e2c2
    // 0xe2c2 (Windows-31J)
    // 0x7be6 (UTF-16BE)
    if (argCheck == '篦') {
        return true;
    }
    // No.5462
    // 説明:e2c3
    // 0xe2c3 (Windows-31J)
    // 0x7be5 (UTF-16BE)
    if (argCheck == '篥') {
        return true;
    }
    // No.5463
    // 説明:e2c4
    // 0xe2c4 (Windows-31J)
    // 0x7c60 (UTF-16BE)
    if (argCheck == '籠') {
        return true;
    }
    // No.5464
    // 説明:e2c5
    // 0xe2c5 (Windows-31J)
    // 0x7c00 (UTF-16BE)
    if (argCheck == '簀') {
        return true;
    }
    // No.5465
    // 説明:e2c6
    // 0xe2c6 (Windows-31J)
    // 0x7c07 (UTF-16BE)
    if (argCheck == '簇') {
        return true;
    }
    // No.5466
    // 説明:e2c7
    // 0xe2c7 (Windows-31J)
    // 0x7c13 (UTF-16BE)
    if (argCheck == '簓') {
        return true;
    }
    // No.5467
    // 説明:e2c8
    // 0xe2c8 (Windows-31J)
    // 0x7bf3 (UTF-16BE)
    if (argCheck == '篳') {
        return true;
    }
    // No.5468
    // 説明:e2c9
    // 0xe2c9 (Windows-31J)
    // 0x7bf7 (UTF-16BE)
    if (argCheck == '篷') {
        return true;
    }
    // No.5469
    // 説明:e2ca
    // 0xe2ca (Windows-31J)
    // 0x7c17 (UTF-16BE)
    if (argCheck == '簗') {
        return true;
    }
    // No.5470
    // 説明:e2cb
    // 0xe2cb (Windows-31J)
    // 0x7c0d (UTF-16BE)
    if (argCheck == '簍') {
        return true;
    }
    // No.5471
    // 説明:e2cc
    // 0xe2cc (Windows-31J)
    // 0x7bf6 (UTF-16BE)
    if (argCheck == '篶') {
        return true;
    }
    // No.5472
    // 説明:e2cd
    // 0xe2cd (Windows-31J)
    // 0x7c23 (UTF-16BE)
    if (argCheck == '簣') {
        return true;
    }
    // No.5473
    // 説明:e2ce
    // 0xe2ce (Windows-31J)
    // 0x7c27 (UTF-16BE)
    if (argCheck == '簧') {
        return true;
    }
    // No.5474
    // 説明:e2cf
    // 0xe2cf (Windows-31J)
    // 0x7c2a (UTF-16BE)
    if (argCheck == '簪') {
        return true;
    }
    // No.5475
    // 説明:e2d0
    // 0xe2d0 (Windows-31J)
    // 0x7c1f (UTF-16BE)
    if (argCheck == '簟') {
        return true;
    }
    // No.5476
    // 説明:e2d1
    // 0xe2d1 (Windows-31J)
    // 0x7c37 (UTF-16BE)
    if (argCheck == '簷') {
        return true;
    }
    // No.5477
    // 説明:e2d2
    // 0xe2d2 (Windows-31J)
    // 0x7c2b (UTF-16BE)
    if (argCheck == '簫') {
        return true;
    }
    // No.5478
    // 説明:e2d3
    // 0xe2d3 (Windows-31J)
    // 0x7c3d (UTF-16BE)
    if (argCheck == '簽') {
        return true;
    }
    // No.5479
    // 説明:e2d4
    // 0xe2d4 (Windows-31J)
    // 0x7c4c (UTF-16BE)
    if (argCheck == '籌') {
        return true;
    }
    // No.5480
    // 説明:e2d5
    // 0xe2d5 (Windows-31J)
    // 0x7c43 (UTF-16BE)
    if (argCheck == '籃') {
        return true;
    }
    // No.5481
    // 説明:e2d6
    // 0xe2d6 (Windows-31J)
    // 0x7c54 (UTF-16BE)
    if (argCheck == '籔') {
        return true;
    }
    // No.5482
    // 説明:e2d7
    // 0xe2d7 (Windows-31J)
    // 0x7c4f (UTF-16BE)
    if (argCheck == '籏') {
        return true;
    }
    // No.5483
    // 説明:e2d8
    // 0xe2d8 (Windows-31J)
    // 0x7c40 (UTF-16BE)
    if (argCheck == '籀') {
        return true;
    }
    // No.5484
    // 説明:e2d9
    // 0xe2d9 (Windows-31J)
    // 0x7c50 (UTF-16BE)
    if (argCheck == '籐') {
        return true;
    }
    // No.5485
    // 説明:e2da
    // 0xe2da (Windows-31J)
    // 0x7c58 (UTF-16BE)
    if (argCheck == '籘') {
        return true;
    }
    // No.5486
    // 説明:e2db
    // 0xe2db (Windows-31J)
    // 0x7c5f (UTF-16BE)
    if (argCheck == '籟') {
        return true;
    }
    // No.5487
    // 説明:e2dc
    // 0xe2dc (Windows-31J)
    // 0x7c64 (UTF-16BE)
    if (argCheck == '籤') {
        return true;
    }
    // No.5488
    // 説明:e2dd
    // 0xe2dd (Windows-31J)
    // 0x7c56 (UTF-16BE)
    if (argCheck == '籖') {
        return true;
    }
    // No.5489
    // 説明:e2de
    // 0xe2de (Windows-31J)
    // 0x7c65 (UTF-16BE)
    if (argCheck == '籥') {
        return true;
    }
    // No.5490
    // 説明:e2df
    // 0xe2df (Windows-31J)
    // 0x7c6c (UTF-16BE)
    if (argCheck == '籬') {
        return true;
    }
    // No.5491
    // 説明:e2e0
    // 0xe2e0 (Windows-31J)
    // 0x7c75 (UTF-16BE)
    if (argCheck == '籵') {
        return true;
    }
    // No.5492
    // 説明:e2e1
    // 0xe2e1 (Windows-31J)
    // 0x7c83 (UTF-16BE)
    if (argCheck == '粃') {
        return true;
    }
    // No.5493
    // 説明:e2e2
    // 0xe2e2 (Windows-31J)
    // 0x7c90 (UTF-16BE)
    if (argCheck == '粐') {
        return true;
    }
    // No.5494
    // 説明:e2e3
    // 0xe2e3 (Windows-31J)
    // 0x7ca4 (UTF-16BE)
    if (argCheck == '粤') {
        return true;
    }
    // No.5495
    // 説明:e2e4
    // 0xe2e4 (Windows-31J)
    // 0x7cad (UTF-16BE)
    if (argCheck == '粭') {
        return true;
    }
    // No.5496
    // 説明:e2e5
    // 0xe2e5 (Windows-31J)
    // 0x7ca2 (UTF-16BE)
    if (argCheck == '粢') {
        return true;
    }
    // No.5497
    // 説明:e2e6
    // 0xe2e6 (Windows-31J)
    // 0x7cab (UTF-16BE)
    if (argCheck == '粫') {
        return true;
    }
    // No.5498
    // 説明:e2e7
    // 0xe2e7 (Windows-31J)
    // 0x7ca1 (UTF-16BE)
    if (argCheck == '粡') {
        return true;
    }
    // No.5499
    // 説明:e2e8
    // 0xe2e8 (Windows-31J)
    // 0x7ca8 (UTF-16BE)
    if (argCheck == '粨') {
        return true;
    }
    // No.5500
    // 説明:e2e9
    // 0xe2e9 (Windows-31J)
    // 0x7cb3 (UTF-16BE)
    if (argCheck == '粳') {
        return true;
    }
    // No.5501
    // 説明:e2ea
    // 0xe2ea (Windows-31J)
    // 0x7cb2 (UTF-16BE)
    if (argCheck == '粲') {
        return true;
    }
    // No.5502
    // 説明:e2eb
    // 0xe2eb (Windows-31J)
    // 0x7cb1 (UTF-16BE)
    if (argCheck == '粱') {
        return true;
    }
    // No.5503
    // 説明:e2ec
    // 0xe2ec (Windows-31J)
    // 0x7cae (UTF-16BE)
    if (argCheck == '粮') {
        return true;
    }
    // No.5504
    // 説明:e2ed
    // 0xe2ed (Windows-31J)
    // 0x7cb9 (UTF-16BE)
    if (argCheck == '粹') {
        return true;
    }
    // No.5505
    // 説明:e2ee
    // 0xe2ee (Windows-31J)
    // 0x7cbd (UTF-16BE)
    if (argCheck == '粽') {
        return true;
    }
    // No.5506
    // 説明:e2ef
    // 0xe2ef (Windows-31J)
    // 0x7cc0 (UTF-16BE)
    if (argCheck == '糀') {
        return true;
    }
    // No.5507
    // 説明:e2f0
    // 0xe2f0 (Windows-31J)
    // 0x7cc5 (UTF-16BE)
    if (argCheck == '糅') {
        return true;
    }
    // No.5508
    // 説明:e2f1
    // 0xe2f1 (Windows-31J)
    // 0x7cc2 (UTF-16BE)
    if (argCheck == '糂') {
        return true;
    }
    // No.5509
    // 説明:e2f2
    // 0xe2f2 (Windows-31J)
    // 0x7cd8 (UTF-16BE)
    if (argCheck == '糘') {
        return true;
    }
    // No.5510
    // 説明:e2f3
    // 0xe2f3 (Windows-31J)
    // 0x7cd2 (UTF-16BE)
    if (argCheck == '糒') {
        return true;
    }
    // No.5511
    // 説明:e2f4
    // 0xe2f4 (Windows-31J)
    // 0x7cdc (UTF-16BE)
    if (argCheck == '糜') {
        return true;
    }
    // No.5512
    // 説明:e2f5
    // 0xe2f5 (Windows-31J)
    // 0x7ce2 (UTF-16BE)
    if (argCheck == '糢') {
        return true;
    }
    // No.5513
    // 説明:e2f6
    // 0xe2f6 (Windows-31J)
    // 0x9b3b (UTF-16BE)
    if (argCheck == '鬻') {
        return true;
    }
    // No.5514
    // 説明:e2f7
    // 0xe2f7 (Windows-31J)
    // 0x7cef (UTF-16BE)
    if (argCheck == '糯') {
        return true;
    }
    // No.5515
    // 説明:e2f8
    // 0xe2f8 (Windows-31J)
    // 0x7cf2 (UTF-16BE)
    if (argCheck == '糲') {
        return true;
    }
    // No.5516
    // 説明:e2f9
    // 0xe2f9 (Windows-31J)
    // 0x7cf4 (UTF-16BE)
    if (argCheck == '糴') {
        return true;
    }
    // No.5517
    // 説明:e2fa
    // 0xe2fa (Windows-31J)
    // 0x7cf6 (UTF-16BE)
    if (argCheck == '糶') {
        return true;
    }
    // No.5518
    // 説明:e2fb
    // 0xe2fb (Windows-31J)
    // 0x7cfa (UTF-16BE)
    if (argCheck == '糺') {
        return true;
    }
    // No.5519
    // 説明:e2fc
    // 0xe2fc (Windows-31J)
    // 0x7d06 (UTF-16BE)
    if (argCheck == '紆') {
        return true;
    }
    // No.5520
    // 説明:e340
    // 0xe340 (Windows-31J)
    // 0x7d02 (UTF-16BE)
    if (argCheck == '紂') {
        return true;
    }
    // No.5521
    // 説明:e341
    // 0xe341 (Windows-31J)
    // 0x7d1c (UTF-16BE)
    if (argCheck == '紜') {
        return true;
    }
    // No.5522
    // 説明:e342
    // 0xe342 (Windows-31J)
    // 0x7d15 (UTF-16BE)
    if (argCheck == '紕') {
        return true;
    }
    // No.5523
    // 説明:e343
    // 0xe343 (Windows-31J)
    // 0x7d0a (UTF-16BE)
    if (argCheck == '紊') {
        return true;
    }
    // No.5524
    // 説明:e344
    // 0xe344 (Windows-31J)
    // 0x7d45 (UTF-16BE)
    if (argCheck == '絅') {
        return true;
    }
    // No.5525
    // 説明:e345
    // 0xe345 (Windows-31J)
    // 0x7d4b (UTF-16BE)
    if (argCheck == '絋') {
        return true;
    }
    // No.5526
    // 説明:e346
    // 0xe346 (Windows-31J)
    // 0x7d2e (UTF-16BE)
    if (argCheck == '紮') {
        return true;
    }
    // No.5527
    // 説明:e347
    // 0xe347 (Windows-31J)
    // 0x7d32 (UTF-16BE)
    if (argCheck == '紲') {
        return true;
    }
    // No.5528
    // 説明:e348
    // 0xe348 (Windows-31J)
    // 0x7d3f (UTF-16BE)
    if (argCheck == '紿') {
        return true;
    }
    // No.5529
    // 説明:e349
    // 0xe349 (Windows-31J)
    // 0x7d35 (UTF-16BE)
    if (argCheck == '紵') {
        return true;
    }
    // No.5530
    // 説明:e34a
    // 0xe34a (Windows-31J)
    // 0x7d46 (UTF-16BE)
    if (argCheck == '絆') {
        return true;
    }
    // No.5531
    // 説明:e34b
    // 0xe34b (Windows-31J)
    // 0x7d73 (UTF-16BE)
    if (argCheck == '絳') {
        return true;
    }
    // No.5532
    // 説明:e34c
    // 0xe34c (Windows-31J)
    // 0x7d56 (UTF-16BE)
    if (argCheck == '絖') {
        return true;
    }
    // No.5533
    // 説明:e34d
    // 0xe34d (Windows-31J)
    // 0x7d4e (UTF-16BE)
    if (argCheck == '絎') {
        return true;
    }
    // No.5534
    // 説明:e34e
    // 0xe34e (Windows-31J)
    // 0x7d72 (UTF-16BE)
    if (argCheck == '絲') {
        return true;
    }
    // No.5535
    // 説明:e34f
    // 0xe34f (Windows-31J)
    // 0x7d68 (UTF-16BE)
    if (argCheck == '絨') {
        return true;
    }
    // No.5536
    // 説明:e350
    // 0xe350 (Windows-31J)
    // 0x7d6e (UTF-16BE)
    if (argCheck == '絮') {
        return true;
    }
    // No.5537
    // 説明:e351
    // 0xe351 (Windows-31J)
    // 0x7d4f (UTF-16BE)
    if (argCheck == '絏') {
        return true;
    }
    // No.5538
    // 説明:e352
    // 0xe352 (Windows-31J)
    // 0x7d63 (UTF-16BE)
    if (argCheck == '絣') {
        return true;
    }
    // No.5539
    // 説明:e353
    // 0xe353 (Windows-31J)
    // 0x7d93 (UTF-16BE)
    if (argCheck == '經') {
        return true;
    }
    // No.5540
    // 説明:e354
    // 0xe354 (Windows-31J)
    // 0x7d89 (UTF-16BE)
    if (argCheck == '綉') {
        return true;
    }
    // No.5541
    // 説明:e355
    // 0xe355 (Windows-31J)
    // 0x7d5b (UTF-16BE)
    if (argCheck == '絛') {
        return true;
    }
    // No.5542
    // 説明:e356
    // 0xe356 (Windows-31J)
    // 0x7d8f (UTF-16BE)
    if (argCheck == '綏') {
        return true;
    }
    // No.5543
    // 説明:e357
    // 0xe357 (Windows-31J)
    // 0x7d7d (UTF-16BE)
    if (argCheck == '絽') {
        return true;
    }
    // No.5544
    // 説明:e358
    // 0xe358 (Windows-31J)
    // 0x7d9b (UTF-16BE)
    if (argCheck == '綛') {
        return true;
    }
    // No.5545
    // 説明:e359
    // 0xe359 (Windows-31J)
    // 0x7dba (UTF-16BE)
    if (argCheck == '綺') {
        return true;
    }
    // No.5546
    // 説明:e35a
    // 0xe35a (Windows-31J)
    // 0x7dae (UTF-16BE)
    if (argCheck == '綮') {
        return true;
    }
    // No.5547
    // 説明:e35b
    // 0xe35b (Windows-31J)
    // 0x7da3 (UTF-16BE)
    if (argCheck == '綣') {
        return true;
    }
    // No.5548
    // 説明:e35c
    // 0xe35c (Windows-31J)
    // 0x7db5 (UTF-16BE)
    if (argCheck == '綵') {
        return true;
    }
    // No.5549
    // 説明:e35d
    // 0xe35d (Windows-31J)
    // 0x7dc7 (UTF-16BE)
    if (argCheck == '緇') {
        return true;
    }
    // No.5550
    // 説明:e35e
    // 0xe35e (Windows-31J)
    // 0x7dbd (UTF-16BE)
    if (argCheck == '綽') {
        return true;
    }
    // No.5551
    // 説明:e35f
    // 0xe35f (Windows-31J)
    // 0x7dab (UTF-16BE)
    if (argCheck == '綫') {
        return true;
    }
    // No.5552
    // 説明:e360
    // 0xe360 (Windows-31J)
    // 0x7e3d (UTF-16BE)
    if (argCheck == '總') {
        return true;
    }
    // No.5553
    // 説明:e361
    // 0xe361 (Windows-31J)
    // 0x7da2 (UTF-16BE)
    if (argCheck == '綢') {
        return true;
    }
    // No.5554
    // 説明:e362
    // 0xe362 (Windows-31J)
    // 0x7daf (UTF-16BE)
    if (argCheck == '綯') {
        return true;
    }
    // No.5555
    // 説明:e363
    // 0xe363 (Windows-31J)
    // 0x7ddc (UTF-16BE)
    if (argCheck == '緜') {
        return true;
    }
    // No.5556
    // 説明:e364
    // 0xe364 (Windows-31J)
    // 0x7db8 (UTF-16BE)
    if (argCheck == '綸') {
        return true;
    }
    // No.5557
    // 説明:e365
    // 0xe365 (Windows-31J)
    // 0x7d9f (UTF-16BE)
    if (argCheck == '綟') {
        return true;
    }
    // No.5558
    // 説明:e366
    // 0xe366 (Windows-31J)
    // 0x7db0 (UTF-16BE)
    if (argCheck == '綰') {
        return true;
    }
    // No.5559
    // 説明:e367
    // 0xe367 (Windows-31J)
    // 0x7dd8 (UTF-16BE)
    if (argCheck == '緘') {
        return true;
    }
    // No.5560
    // 説明:e368
    // 0xe368 (Windows-31J)
    // 0x7ddd (UTF-16BE)
    if (argCheck == '緝') {
        return true;
    }
    // No.5561
    // 説明:e369
    // 0xe369 (Windows-31J)
    // 0x7de4 (UTF-16BE)
    if (argCheck == '緤') {
        return true;
    }
    // No.5562
    // 説明:e36a
    // 0xe36a (Windows-31J)
    // 0x7dde (UTF-16BE)
    if (argCheck == '緞') {
        return true;
    }
    // No.5563
    // 説明:e36b
    // 0xe36b (Windows-31J)
    // 0x7dfb (UTF-16BE)
    if (argCheck == '緻') {
        return true;
    }
    // No.5564
    // 説明:e36c
    // 0xe36c (Windows-31J)
    // 0x7df2 (UTF-16BE)
    if (argCheck == '緲') {
        return true;
    }
    // No.5565
    // 説明:e36d
    // 0xe36d (Windows-31J)
    // 0x7de1 (UTF-16BE)
    if (argCheck == '緡') {
        return true;
    }
    // No.5566
    // 説明:e36e
    // 0xe36e (Windows-31J)
    // 0x7e05 (UTF-16BE)
    if (argCheck == '縅') {
        return true;
    }
    // No.5567
    // 説明:e36f
    // 0xe36f (Windows-31J)
    // 0x7e0a (UTF-16BE)
    if (argCheck == '縊') {
        return true;
    }
    // No.5568
    // 説明:e370
    // 0xe370 (Windows-31J)
    // 0x7e23 (UTF-16BE)
    if (argCheck == '縣') {
        return true;
    }
    // No.5569
    // 説明:e371
    // 0xe371 (Windows-31J)
    // 0x7e21 (UTF-16BE)
    if (argCheck == '縡') {
        return true;
    }
    // No.5570
    // 説明:e372
    // 0xe372 (Windows-31J)
    // 0x7e12 (UTF-16BE)
    if (argCheck == '縒') {
        return true;
    }
    // No.5571
    // 説明:e373
    // 0xe373 (Windows-31J)
    // 0x7e31 (UTF-16BE)
    if (argCheck == '縱') {
        return true;
    }
    // No.5572
    // 説明:e374
    // 0xe374 (Windows-31J)
    // 0x7e1f (UTF-16BE)
    if (argCheck == '縟') {
        return true;
    }
    // No.5573
    // 説明:e375
    // 0xe375 (Windows-31J)
    // 0x7e09 (UTF-16BE)
    if (argCheck == '縉') {
        return true;
    }
    // No.5574
    // 説明:e376
    // 0xe376 (Windows-31J)
    // 0x7e0b (UTF-16BE)
    if (argCheck == '縋') {
        return true;
    }
    // No.5575
    // 説明:e377
    // 0xe377 (Windows-31J)
    // 0x7e22 (UTF-16BE)
    if (argCheck == '縢') {
        return true;
    }
    // No.5576
    // 説明:e378
    // 0xe378 (Windows-31J)
    // 0x7e46 (UTF-16BE)
    if (argCheck == '繆') {
        return true;
    }
    // No.5577
    // 説明:e379
    // 0xe379 (Windows-31J)
    // 0x7e66 (UTF-16BE)
    if (argCheck == '繦') {
        return true;
    }
    // No.5578
    // 説明:e37a
    // 0xe37a (Windows-31J)
    // 0x7e3b (UTF-16BE)
    if (argCheck == '縻') {
        return true;
    }
    // No.5579
    // 説明:e37b
    // 0xe37b (Windows-31J)
    // 0x7e35 (UTF-16BE)
    if (argCheck == '縵') {
        return true;
    }
    // No.5580
    // 説明:e37c
    // 0xe37c (Windows-31J)
    // 0x7e39 (UTF-16BE)
    if (argCheck == '縹') {
        return true;
    }
    // No.5581
    // 説明:e37d
    // 0xe37d (Windows-31J)
    // 0x7e43 (UTF-16BE)
    if (argCheck == '繃') {
        return true;
    }
    // No.5582
    // 説明:e37e
    // 0xe37e (Windows-31J)
    // 0x7e37 (UTF-16BE)
    if (argCheck == '縷') {
        return true;
    }
    // No.5583
    // 説明:e380
    // 0xe380 (Windows-31J)
    // 0x7e32 (UTF-16BE)
    if (argCheck == '縲') {
        return true;
    }
    // No.5584
    // 説明:e381
    // 0xe381 (Windows-31J)
    // 0x7e3a (UTF-16BE)
    if (argCheck == '縺') {
        return true;
    }
    // No.5585
    // 説明:e382
    // 0xe382 (Windows-31J)
    // 0x7e67 (UTF-16BE)
    if (argCheck == '繧') {
        return true;
    }
    // No.5586
    // 説明:e383
    // 0xe383 (Windows-31J)
    // 0x7e5d (UTF-16BE)
    if (argCheck == '繝') {
        return true;
    }
    // No.5587
    // 説明:e384
    // 0xe384 (Windows-31J)
    // 0x7e56 (UTF-16BE)
    if (argCheck == '繖') {
        return true;
    }
    // No.5588
    // 説明:e385
    // 0xe385 (Windows-31J)
    // 0x7e5e (UTF-16BE)
    if (argCheck == '繞') {
        return true;
    }
    // No.5589
    // 説明:e386
    // 0xe386 (Windows-31J)
    // 0x7e59 (UTF-16BE)
    if (argCheck == '繙') {
        return true;
    }
    // No.5590
    // 説明:e387
    // 0xe387 (Windows-31J)
    // 0x7e5a (UTF-16BE)
    if (argCheck == '繚') {
        return true;
    }
    // No.5591
    // 説明:e388
    // 0xe388 (Windows-31J)
    // 0x7e79 (UTF-16BE)
    if (argCheck == '繹') {
        return true;
    }
    // No.5592
    // 説明:e389
    // 0xe389 (Windows-31J)
    // 0x7e6a (UTF-16BE)
    if (argCheck == '繪') {
        return true;
    }
    // No.5593
    // 説明:e38a
    // 0xe38a (Windows-31J)
    // 0x7e69 (UTF-16BE)
    if (argCheck == '繩') {
        return true;
    }
    // No.5594
    // 説明:e38b
    // 0xe38b (Windows-31J)
    // 0x7e7c (UTF-16BE)
    if (argCheck == '繼') {
        return true;
    }
    // No.5595
    // 説明:e38c
    // 0xe38c (Windows-31J)
    // 0x7e7b (UTF-16BE)
    if (argCheck == '繻') {
        return true;
    }
    // No.5596
    // 説明:e38d
    // 0xe38d (Windows-31J)
    // 0x7e83 (UTF-16BE)
    if (argCheck == '纃') {
        return true;
    }
    // No.5597
    // 説明:e38e
    // 0xe38e (Windows-31J)
    // 0x7dd5 (UTF-16BE)
    if (argCheck == '緕') {
        return true;
    }
    // No.5598
    // 説明:e38f
    // 0xe38f (Windows-31J)
    // 0x7e7d (UTF-16BE)
    if (argCheck == '繽') {
        return true;
    }
    // No.5599
    // 説明:e390
    // 0xe390 (Windows-31J)
    // 0x8fae (UTF-16BE)
    if (argCheck == '辮') {
        return true;
    }
    // No.5600
    // 説明:e391
    // 0xe391 (Windows-31J)
    // 0x7e7f (UTF-16BE)
    if (argCheck == '繿') {
        return true;
    }
    // No.5601
    // 説明:e392
    // 0xe392 (Windows-31J)
    // 0x7e88 (UTF-16BE)
    if (argCheck == '纈') {
        return true;
    }
    // No.5602
    // 説明:e393
    // 0xe393 (Windows-31J)
    // 0x7e89 (UTF-16BE)
    if (argCheck == '纉') {
        return true;
    }
    // No.5603
    // 説明:e394
    // 0xe394 (Windows-31J)
    // 0x7e8c (UTF-16BE)
    if (argCheck == '續') {
        return true;
    }
    // No.5604
    // 説明:e395
    // 0xe395 (Windows-31J)
    // 0x7e92 (UTF-16BE)
    if (argCheck == '纒') {
        return true;
    }
    // No.5605
    // 説明:e396
    // 0xe396 (Windows-31J)
    // 0x7e90 (UTF-16BE)
    if (argCheck == '纐') {
        return true;
    }
    // No.5606
    // 説明:e397
    // 0xe397 (Windows-31J)
    // 0x7e93 (UTF-16BE)
    if (argCheck == '纓') {
        return true;
    }
    // No.5607
    // 説明:e398
    // 0xe398 (Windows-31J)
    // 0x7e94 (UTF-16BE)
    if (argCheck == '纔') {
        return true;
    }
    // No.5608
    // 説明:e399
    // 0xe399 (Windows-31J)
    // 0x7e96 (UTF-16BE)
    if (argCheck == '纖') {
        return true;
    }
    // No.5609
    // 説明:e39a
    // 0xe39a (Windows-31J)
    // 0x7e8e (UTF-16BE)
    if (argCheck == '纎') {
        return true;
    }
    // No.5610
    // 説明:e39b
    // 0xe39b (Windows-31J)
    // 0x7e9b (UTF-16BE)
    if (argCheck == '纛') {
        return true;
    }
    // No.5611
    // 説明:e39c
    // 0xe39c (Windows-31J)
    // 0x7e9c (UTF-16BE)
    if (argCheck == '纜') {
        return true;
    }
    // No.5612
    // 説明:e39d
    // 0xe39d (Windows-31J)
    // 0x7f38 (UTF-16BE)
    if (argCheck == '缸') {
        return true;
    }
    // No.5613
    // 説明:e39e
    // 0xe39e (Windows-31J)
    // 0x7f3a (UTF-16BE)
    if (argCheck == '缺') {
        return true;
    }
    // No.5614
    // 説明:e39f
    // 0xe39f (Windows-31J)
    // 0x7f45 (UTF-16BE)
    if (argCheck == '罅') {
        return true;
    }
    // No.5615
    // 説明:e3a0
    // 0xe3a0 (Windows-31J)
    // 0x7f4c (UTF-16BE)
    if (argCheck == '罌') {
        return true;
    }
    // No.5616
    // 説明:e3a1
    // 0xe3a1 (Windows-31J)
    // 0x7f4d (UTF-16BE)
    if (argCheck == '罍') {
        return true;
    }
    // No.5617
    // 説明:e3a2
    // 0xe3a2 (Windows-31J)
    // 0x7f4e (UTF-16BE)
    if (argCheck == '罎') {
        return true;
    }
    // No.5618
    // 説明:e3a3
    // 0xe3a3 (Windows-31J)
    // 0x7f50 (UTF-16BE)
    if (argCheck == '罐') {
        return true;
    }
    // No.5619
    // 説明:e3a4
    // 0xe3a4 (Windows-31J)
    // 0x7f51 (UTF-16BE)
    if (argCheck == '网') {
        return true;
    }
    // No.5620
    // 説明:e3a5
    // 0xe3a5 (Windows-31J)
    // 0x7f55 (UTF-16BE)
    if (argCheck == '罕') {
        return true;
    }
    // No.5621
    // 説明:e3a6
    // 0xe3a6 (Windows-31J)
    // 0x7f54 (UTF-16BE)
    if (argCheck == '罔') {
        return true;
    }
    // No.5622
    // 説明:e3a7
    // 0xe3a7 (Windows-31J)
    // 0x7f58 (UTF-16BE)
    if (argCheck == '罘') {
        return true;
    }
    // No.5623
    // 説明:e3a8
    // 0xe3a8 (Windows-31J)
    // 0x7f5f (UTF-16BE)
    if (argCheck == '罟') {
        return true;
    }
    // No.5624
    // 説明:e3a9
    // 0xe3a9 (Windows-31J)
    // 0x7f60 (UTF-16BE)
    if (argCheck == '罠') {
        return true;
    }
    // No.5625
    // 説明:e3aa
    // 0xe3aa (Windows-31J)
    // 0x7f68 (UTF-16BE)
    if (argCheck == '罨') {
        return true;
    }
    // No.5626
    // 説明:e3ab
    // 0xe3ab (Windows-31J)
    // 0x7f69 (UTF-16BE)
    if (argCheck == '罩') {
        return true;
    }
    // No.5627
    // 説明:e3ac
    // 0xe3ac (Windows-31J)
    // 0x7f67 (UTF-16BE)
    if (argCheck == '罧') {
        return true;
    }
    // No.5628
    // 説明:e3ad
    // 0xe3ad (Windows-31J)
    // 0x7f78 (UTF-16BE)
    if (argCheck == '罸') {
        return true;
    }
    // No.5629
    // 説明:e3ae
    // 0xe3ae (Windows-31J)
    // 0x7f82 (UTF-16BE)
    if (argCheck == '羂') {
        return true;
    }
    // No.5630
    // 説明:e3af
    // 0xe3af (Windows-31J)
    // 0x7f86 (UTF-16BE)
    if (argCheck == '羆') {
        return true;
    }
    // No.5631
    // 説明:e3b0
    // 0xe3b0 (Windows-31J)
    // 0x7f83 (UTF-16BE)
    if (argCheck == '羃') {
        return true;
    }
    // No.5632
    // 説明:e3b1
    // 0xe3b1 (Windows-31J)
    // 0x7f88 (UTF-16BE)
    if (argCheck == '羈') {
        return true;
    }
    // No.5633
    // 説明:e3b2
    // 0xe3b2 (Windows-31J)
    // 0x7f87 (UTF-16BE)
    if (argCheck == '羇') {
        return true;
    }
    // No.5634
    // 説明:e3b3
    // 0xe3b3 (Windows-31J)
    // 0x7f8c (UTF-16BE)
    if (argCheck == '羌') {
        return true;
    }
    // No.5635
    // 説明:e3b4
    // 0xe3b4 (Windows-31J)
    // 0x7f94 (UTF-16BE)
    if (argCheck == '羔') {
        return true;
    }
    // No.5636
    // 説明:e3b5
    // 0xe3b5 (Windows-31J)
    // 0x7f9e (UTF-16BE)
    if (argCheck == '羞') {
        return true;
    }
    // No.5637
    // 説明:e3b6
    // 0xe3b6 (Windows-31J)
    // 0x7f9d (UTF-16BE)
    if (argCheck == '羝') {
        return true;
    }
    // No.5638
    // 説明:e3b7
    // 0xe3b7 (Windows-31J)
    // 0x7f9a (UTF-16BE)
    if (argCheck == '羚') {
        return true;
    }
    // No.5639
    // 説明:e3b8
    // 0xe3b8 (Windows-31J)
    // 0x7fa3 (UTF-16BE)
    if (argCheck == '羣') {
        return true;
    }
    // No.5640
    // 説明:e3b9
    // 0xe3b9 (Windows-31J)
    // 0x7faf (UTF-16BE)
    if (argCheck == '羯') {
        return true;
    }
    // No.5641
    // 説明:e3ba
    // 0xe3ba (Windows-31J)
    // 0x7fb2 (UTF-16BE)
    if (argCheck == '羲') {
        return true;
    }
    // No.5642
    // 説明:e3bb
    // 0xe3bb (Windows-31J)
    // 0x7fb9 (UTF-16BE)
    if (argCheck == '羹') {
        return true;
    }
    // No.5643
    // 説明:e3bc
    // 0xe3bc (Windows-31J)
    // 0x7fae (UTF-16BE)
    if (argCheck == '羮') {
        return true;
    }
    // No.5644
    // 説明:e3bd
    // 0xe3bd (Windows-31J)
    // 0x7fb6 (UTF-16BE)
    if (argCheck == '羶') {
        return true;
    }
    // No.5645
    // 説明:e3be
    // 0xe3be (Windows-31J)
    // 0x7fb8 (UTF-16BE)
    if (argCheck == '羸') {
        return true;
    }
    // No.5646
    // 説明:e3bf
    // 0xe3bf (Windows-31J)
    // 0x8b71 (UTF-16BE)
    if (argCheck == '譱') {
        return true;
    }
    // No.5647
    // 説明:e3c0
    // 0xe3c0 (Windows-31J)
    // 0x7fc5 (UTF-16BE)
    if (argCheck == '翅') {
        return true;
    }
    // No.5648
    // 説明:e3c1
    // 0xe3c1 (Windows-31J)
    // 0x7fc6 (UTF-16BE)
    if (argCheck == '翆') {
        return true;
    }
    // No.5649
    // 説明:e3c2
    // 0xe3c2 (Windows-31J)
    // 0x7fca (UTF-16BE)
    if (argCheck == '翊') {
        return true;
    }
    // No.5650
    // 説明:e3c3
    // 0xe3c3 (Windows-31J)
    // 0x7fd5 (UTF-16BE)
    if (argCheck == '翕') {
        return true;
    }
    // No.5651
    // 説明:e3c4
    // 0xe3c4 (Windows-31J)
    // 0x7fd4 (UTF-16BE)
    if (argCheck == '翔') {
        return true;
    }
    // No.5652
    // 説明:e3c5
    // 0xe3c5 (Windows-31J)
    // 0x7fe1 (UTF-16BE)
    if (argCheck == '翡') {
        return true;
    }
    // No.5653
    // 説明:e3c6
    // 0xe3c6 (Windows-31J)
    // 0x7fe6 (UTF-16BE)
    if (argCheck == '翦') {
        return true;
    }
    // No.5654
    // 説明:e3c7
    // 0xe3c7 (Windows-31J)
    // 0x7fe9 (UTF-16BE)
    if (argCheck == '翩') {
        return true;
    }
    // No.5655
    // 説明:e3c8
    // 0xe3c8 (Windows-31J)
    // 0x7ff3 (UTF-16BE)
    if (argCheck == '翳') {
        return true;
    }
    // No.5656
    // 説明:e3c9
    // 0xe3c9 (Windows-31J)
    // 0x7ff9 (UTF-16BE)
    if (argCheck == '翹') {
        return true;
    }
    // No.5657
    // 説明:e3ca
    // 0xe3ca (Windows-31J)
    // 0x98dc (UTF-16BE)
    if (argCheck == '飜') {
        return true;
    }
    // No.5658
    // 説明:e3cb
    // 0xe3cb (Windows-31J)
    // 0x8006 (UTF-16BE)
    if (argCheck == '耆') {
        return true;
    }
    // No.5659
    // 説明:e3cc
    // 0xe3cc (Windows-31J)
    // 0x8004 (UTF-16BE)
    if (argCheck == '耄') {
        return true;
    }
    // No.5660
    // 説明:e3cd
    // 0xe3cd (Windows-31J)
    // 0x800b (UTF-16BE)
    if (argCheck == '耋') {
        return true;
    }
    // No.5661
    // 説明:e3ce
    // 0xe3ce (Windows-31J)
    // 0x8012 (UTF-16BE)
    if (argCheck == '耒') {
        return true;
    }
    // No.5662
    // 説明:e3cf
    // 0xe3cf (Windows-31J)
    // 0x8018 (UTF-16BE)
    if (argCheck == '耘') {
        return true;
    }
    // No.5663
    // 説明:e3d0
    // 0xe3d0 (Windows-31J)
    // 0x8019 (UTF-16BE)
    if (argCheck == '耙') {
        return true;
    }
    // No.5664
    // 説明:e3d1
    // 0xe3d1 (Windows-31J)
    // 0x801c (UTF-16BE)
    if (argCheck == '耜') {
        return true;
    }
    // No.5665
    // 説明:e3d2
    // 0xe3d2 (Windows-31J)
    // 0x8021 (UTF-16BE)
    if (argCheck == '耡') {
        return true;
    }
    // No.5666
    // 説明:e3d3
    // 0xe3d3 (Windows-31J)
    // 0x8028 (UTF-16BE)
    if (argCheck == '耨') {
        return true;
    }
    // No.5667
    // 説明:e3d4
    // 0xe3d4 (Windows-31J)
    // 0x803f (UTF-16BE)
    if (argCheck == '耿') {
        return true;
    }
    // No.5668
    // 説明:e3d5
    // 0xe3d5 (Windows-31J)
    // 0x803b (UTF-16BE)
    if (argCheck == '耻') {
        return true;
    }
    // No.5669
    // 説明:e3d6
    // 0xe3d6 (Windows-31J)
    // 0x804a (UTF-16BE)
    if (argCheck == '聊') {
        return true;
    }
    // No.5670
    // 説明:e3d7
    // 0xe3d7 (Windows-31J)
    // 0x8046 (UTF-16BE)
    if (argCheck == '聆') {
        return true;
    }
    // No.5671
    // 説明:e3d8
    // 0xe3d8 (Windows-31J)
    // 0x8052 (UTF-16BE)
    if (argCheck == '聒') {
        return true;
    }
    // No.5672
    // 説明:e3d9
    // 0xe3d9 (Windows-31J)
    // 0x8058 (UTF-16BE)
    if (argCheck == '聘') {
        return true;
    }
    // No.5673
    // 説明:e3da
    // 0xe3da (Windows-31J)
    // 0x805a (UTF-16BE)
    if (argCheck == '聚') {
        return true;
    }
    // No.5674
    // 説明:e3db
    // 0xe3db (Windows-31J)
    // 0x805f (UTF-16BE)
    if (argCheck == '聟') {
        return true;
    }
    // No.5675
    // 説明:e3dc
    // 0xe3dc (Windows-31J)
    // 0x8062 (UTF-16BE)
    if (argCheck == '聢') {
        return true;
    }
    // No.5676
    // 説明:e3dd
    // 0xe3dd (Windows-31J)
    // 0x8068 (UTF-16BE)
    if (argCheck == '聨') {
        return true;
    }
    // No.5677
    // 説明:e3de
    // 0xe3de (Windows-31J)
    // 0x8073 (UTF-16BE)
    if (argCheck == '聳') {
        return true;
    }
    // No.5678
    // 説明:e3df
    // 0xe3df (Windows-31J)
    // 0x8072 (UTF-16BE)
    if (argCheck == '聲') {
        return true;
    }
    // No.5679
    // 説明:e3e0
    // 0xe3e0 (Windows-31J)
    // 0x8070 (UTF-16BE)
    if (argCheck == '聰') {
        return true;
    }
    // No.5680
    // 説明:e3e1
    // 0xe3e1 (Windows-31J)
    // 0x8076 (UTF-16BE)
    if (argCheck == '聶') {
        return true;
    }
    // No.5681
    // 説明:e3e2
    // 0xe3e2 (Windows-31J)
    // 0x8079 (UTF-16BE)
    if (argCheck == '聹') {
        return true;
    }
    // No.5682
    // 説明:e3e3
    // 0xe3e3 (Windows-31J)
    // 0x807d (UTF-16BE)
    if (argCheck == '聽') {
        return true;
    }
    // No.5683
    // 説明:e3e4
    // 0xe3e4 (Windows-31J)
    // 0x807f (UTF-16BE)
    if (argCheck == '聿') {
        return true;
    }
    // No.5684
    // 説明:e3e5
    // 0xe3e5 (Windows-31J)
    // 0x8084 (UTF-16BE)
    if (argCheck == '肄') {
        return true;
    }
    // No.5685
    // 説明:e3e6
    // 0xe3e6 (Windows-31J)
    // 0x8086 (UTF-16BE)
    if (argCheck == '肆') {
        return true;
    }
    // No.5686
    // 説明:e3e7
    // 0xe3e7 (Windows-31J)
    // 0x8085 (UTF-16BE)
    if (argCheck == '肅') {
        return true;
    }
    // No.5687
    // 説明:e3e8
    // 0xe3e8 (Windows-31J)
    // 0x809b (UTF-16BE)
    if (argCheck == '肛') {
        return true;
    }
    // No.5688
    // 説明:e3e9
    // 0xe3e9 (Windows-31J)
    // 0x8093 (UTF-16BE)
    if (argCheck == '肓') {
        return true;
    }
    // No.5689
    // 説明:e3ea
    // 0xe3ea (Windows-31J)
    // 0x809a (UTF-16BE)
    if (argCheck == '肚') {
        return true;
    }
    // No.5690
    // 説明:e3eb
    // 0xe3eb (Windows-31J)
    // 0x80ad (UTF-16BE)
    if (argCheck == '肭') {
        return true;
    }
    // No.5691
    // 説明:e3ec
    // 0xe3ec (Windows-31J)
    // 0x5190 (UTF-16BE)
    if (argCheck == '冐') {
        return true;
    }
    // No.5692
    // 説明:e3ed
    // 0xe3ed (Windows-31J)
    // 0x80ac (UTF-16BE)
    if (argCheck == '肬') {
        return true;
    }
    // No.5693
    // 説明:e3ee
    // 0xe3ee (Windows-31J)
    // 0x80db (UTF-16BE)
    if (argCheck == '胛') {
        return true;
    }
    // No.5694
    // 説明:e3ef
    // 0xe3ef (Windows-31J)
    // 0x80e5 (UTF-16BE)
    if (argCheck == '胥') {
        return true;
    }
    // No.5695
    // 説明:e3f0
    // 0xe3f0 (Windows-31J)
    // 0x80d9 (UTF-16BE)
    if (argCheck == '胙') {
        return true;
    }
    // No.5696
    // 説明:e3f1
    // 0xe3f1 (Windows-31J)
    // 0x80dd (UTF-16BE)
    if (argCheck == '胝') {
        return true;
    }
    // No.5697
    // 説明:e3f2
    // 0xe3f2 (Windows-31J)
    // 0x80c4 (UTF-16BE)
    if (argCheck == '胄') {
        return true;
    }
    // No.5698
    // 説明:e3f3
    // 0xe3f3 (Windows-31J)
    // 0x80da (UTF-16BE)
    if (argCheck == '胚') {
        return true;
    }
    // No.5699
    // 説明:e3f4
    // 0xe3f4 (Windows-31J)
    // 0x80d6 (UTF-16BE)
    if (argCheck == '胖') {
        return true;
    }
    // No.5700
    // 説明:e3f5
    // 0xe3f5 (Windows-31J)
    // 0x8109 (UTF-16BE)
    if (argCheck == '脉') {
        return true;
    }
    // No.5701
    // 説明:e3f6
    // 0xe3f6 (Windows-31J)
    // 0x80ef (UTF-16BE)
    if (argCheck == '胯') {
        return true;
    }
    // No.5702
    // 説明:e3f7
    // 0xe3f7 (Windows-31J)
    // 0x80f1 (UTF-16BE)
    if (argCheck == '胱') {
        return true;
    }
    // No.5703
    // 説明:e3f8
    // 0xe3f8 (Windows-31J)
    // 0x811b (UTF-16BE)
    if (argCheck == '脛') {
        return true;
    }
    // No.5704
    // 説明:e3f9
    // 0xe3f9 (Windows-31J)
    // 0x8129 (UTF-16BE)
    if (argCheck == '脩') {
        return true;
    }
    // No.5705
    // 説明:e3fa
    // 0xe3fa (Windows-31J)
    // 0x8123 (UTF-16BE)
    if (argCheck == '脣') {
        return true;
    }
    // No.5706
    // 説明:e3fb
    // 0xe3fb (Windows-31J)
    // 0x812f (UTF-16BE)
    if (argCheck == '脯') {
        return true;
    }
    // No.5707
    // 説明:e3fc
    // 0xe3fc (Windows-31J)
    // 0x814b (UTF-16BE)
    if (argCheck == '腋') {
        return true;
    }
    // No.5708
    // 説明:e440
    // 0xe440 (Windows-31J)
    // 0x968b (UTF-16BE)
    if (argCheck == '隋') {
        return true;
    }
    // No.5709
    // 説明:e441
    // 0xe441 (Windows-31J)
    // 0x8146 (UTF-16BE)
    if (argCheck == '腆') {
        return true;
    }
    // No.5710
    // 説明:e442
    // 0xe442 (Windows-31J)
    // 0x813e (UTF-16BE)
    if (argCheck == '脾') {
        return true;
    }
    // No.5711
    // 説明:e443
    // 0xe443 (Windows-31J)
    // 0x8153 (UTF-16BE)
    if (argCheck == '腓') {
        return true;
    }
    // No.5712
    // 説明:e444
    // 0xe444 (Windows-31J)
    // 0x8151 (UTF-16BE)
    if (argCheck == '腑') {
        return true;
    }
    // No.5713
    // 説明:e445
    // 0xe445 (Windows-31J)
    // 0x80fc (UTF-16BE)
    if (argCheck == '胼') {
        return true;
    }
    // No.5714
    // 説明:e446
    // 0xe446 (Windows-31J)
    // 0x8171 (UTF-16BE)
    if (argCheck == '腱') {
        return true;
    }
    // No.5715
    // 説明:e447
    // 0xe447 (Windows-31J)
    // 0x816e (UTF-16BE)
    if (argCheck == '腮') {
        return true;
    }
    // No.5716
    // 説明:e448
    // 0xe448 (Windows-31J)
    // 0x8165 (UTF-16BE)
    if (argCheck == '腥') {
        return true;
    }
    // No.5717
    // 説明:e449
    // 0xe449 (Windows-31J)
    // 0x8166 (UTF-16BE)
    if (argCheck == '腦') {
        return true;
    }
    // No.5718
    // 説明:e44a
    // 0xe44a (Windows-31J)
    // 0x8174 (UTF-16BE)
    if (argCheck == '腴') {
        return true;
    }
    // No.5719
    // 説明:e44b
    // 0xe44b (Windows-31J)
    // 0x8183 (UTF-16BE)
    if (argCheck == '膃') {
        return true;
    }
    // No.5720
    // 説明:e44c
    // 0xe44c (Windows-31J)
    // 0x8188 (UTF-16BE)
    if (argCheck == '膈') {
        return true;
    }
    // No.5721
    // 説明:e44d
    // 0xe44d (Windows-31J)
    // 0x818a (UTF-16BE)
    if (argCheck == '膊') {
        return true;
    }
    // No.5722
    // 説明:e44e
    // 0xe44e (Windows-31J)
    // 0x8180 (UTF-16BE)
    if (argCheck == '膀') {
        return true;
    }
    // No.5723
    // 説明:e44f
    // 0xe44f (Windows-31J)
    // 0x8182 (UTF-16BE)
    if (argCheck == '膂') {
        return true;
    }
    // No.5724
    // 説明:e450
    // 0xe450 (Windows-31J)
    // 0x81a0 (UTF-16BE)
    if (argCheck == '膠') {
        return true;
    }
    // No.5725
    // 説明:e451
    // 0xe451 (Windows-31J)
    // 0x8195 (UTF-16BE)
    if (argCheck == '膕') {
        return true;
    }
    // No.5726
    // 説明:e452
    // 0xe452 (Windows-31J)
    // 0x81a4 (UTF-16BE)
    if (argCheck == '膤') {
        return true;
    }
    // No.5727
    // 説明:e453
    // 0xe453 (Windows-31J)
    // 0x81a3 (UTF-16BE)
    if (argCheck == '膣') {
        return true;
    }
    // No.5728
    // 説明:e454
    // 0xe454 (Windows-31J)
    // 0x815f (UTF-16BE)
    if (argCheck == '腟') {
        return true;
    }
    // No.5729
    // 説明:e455
    // 0xe455 (Windows-31J)
    // 0x8193 (UTF-16BE)
    if (argCheck == '膓') {
        return true;
    }
    // No.5730
    // 説明:e456
    // 0xe456 (Windows-31J)
    // 0x81a9 (UTF-16BE)
    if (argCheck == '膩') {
        return true;
    }
    // No.5731
    // 説明:e457
    // 0xe457 (Windows-31J)
    // 0x81b0 (UTF-16BE)
    if (argCheck == '膰') {
        return true;
    }
    // No.5732
    // 説明:e458
    // 0xe458 (Windows-31J)
    // 0x81b5 (UTF-16BE)
    if (argCheck == '膵') {
        return true;
    }
    // No.5733
    // 説明:e459
    // 0xe459 (Windows-31J)
    // 0x81be (UTF-16BE)
    if (argCheck == '膾') {
        return true;
    }
    // No.5734
    // 説明:e45a
    // 0xe45a (Windows-31J)
    // 0x81b8 (UTF-16BE)
    if (argCheck == '膸') {
        return true;
    }
    // No.5735
    // 説明:e45b
    // 0xe45b (Windows-31J)
    // 0x81bd (UTF-16BE)
    if (argCheck == '膽') {
        return true;
    }
    // No.5736
    // 説明:e45c
    // 0xe45c (Windows-31J)
    // 0x81c0 (UTF-16BE)
    if (argCheck == '臀') {
        return true;
    }
    // No.5737
    // 説明:e45d
    // 0xe45d (Windows-31J)
    // 0x81c2 (UTF-16BE)
    if (argCheck == '臂') {
        return true;
    }
    // No.5738
    // 説明:e45e
    // 0xe45e (Windows-31J)
    // 0x81ba (UTF-16BE)
    if (argCheck == '膺') {
        return true;
    }
    // No.5739
    // 説明:e45f
    // 0xe45f (Windows-31J)
    // 0x81c9 (UTF-16BE)
    if (argCheck == '臉') {
        return true;
    }
    // No.5740
    // 説明:e460
    // 0xe460 (Windows-31J)
    // 0x81cd (UTF-16BE)
    if (argCheck == '臍') {
        return true;
    }
    // No.5741
    // 説明:e461
    // 0xe461 (Windows-31J)
    // 0x81d1 (UTF-16BE)
    if (argCheck == '臑') {
        return true;
    }
    // No.5742
    // 説明:e462
    // 0xe462 (Windows-31J)
    // 0x81d9 (UTF-16BE)
    if (argCheck == '臙') {
        return true;
    }
    // No.5743
    // 説明:e463
    // 0xe463 (Windows-31J)
    // 0x81d8 (UTF-16BE)
    if (argCheck == '臘') {
        return true;
    }
    // No.5744
    // 説明:e464
    // 0xe464 (Windows-31J)
    // 0x81c8 (UTF-16BE)
    if (argCheck == '臈') {
        return true;
    }
    // No.5745
    // 説明:e465
    // 0xe465 (Windows-31J)
    // 0x81da (UTF-16BE)
    if (argCheck == '臚') {
        return true;
    }
    // No.5746
    // 説明:e466
    // 0xe466 (Windows-31J)
    // 0x81df (UTF-16BE)
    if (argCheck == '臟') {
        return true;
    }
    // No.5747
    // 説明:e467
    // 0xe467 (Windows-31J)
    // 0x81e0 (UTF-16BE)
    if (argCheck == '臠') {
        return true;
    }
    // No.5748
    // 説明:e468
    // 0xe468 (Windows-31J)
    // 0x81e7 (UTF-16BE)
    if (argCheck == '臧') {
        return true;
    }
    // No.5749
    // 説明:e469
    // 0xe469 (Windows-31J)
    // 0x81fa (UTF-16BE)
    if (argCheck == '臺') {
        return true;
    }
    // No.5750
    // 説明:e46a
    // 0xe46a (Windows-31J)
    // 0x81fb (UTF-16BE)
    if (argCheck == '臻') {
        return true;
    }
    // No.5751
    // 説明:e46b
    // 0xe46b (Windows-31J)
    // 0x81fe (UTF-16BE)
    if (argCheck == '臾') {
        return true;
    }
    // No.5752
    // 説明:e46c
    // 0xe46c (Windows-31J)
    // 0x8201 (UTF-16BE)
    if (argCheck == '舁') {
        return true;
    }
    // No.5753
    // 説明:e46d
    // 0xe46d (Windows-31J)
    // 0x8202 (UTF-16BE)
    if (argCheck == '舂') {
        return true;
    }
    // No.5754
    // 説明:e46e
    // 0xe46e (Windows-31J)
    // 0x8205 (UTF-16BE)
    if (argCheck == '舅') {
        return true;
    }
    // No.5755
    // 説明:e46f
    // 0xe46f (Windows-31J)
    // 0x8207 (UTF-16BE)
    if (argCheck == '與') {
        return true;
    }
    // No.5756
    // 説明:e470
    // 0xe470 (Windows-31J)
    // 0x820a (UTF-16BE)
    if (argCheck == '舊') {
        return true;
    }
    // No.5757
    // 説明:e471
    // 0xe471 (Windows-31J)
    // 0x820d (UTF-16BE)
    if (argCheck == '舍') {
        return true;
    }
    // No.5758
    // 説明:e472
    // 0xe472 (Windows-31J)
    // 0x8210 (UTF-16BE)
    if (argCheck == '舐') {
        return true;
    }
    // No.5759
    // 説明:e473
    // 0xe473 (Windows-31J)
    // 0x8216 (UTF-16BE)
    if (argCheck == '舖') {
        return true;
    }
    // No.5760
    // 説明:e474
    // 0xe474 (Windows-31J)
    // 0x8229 (UTF-16BE)
    if (argCheck == '舩') {
        return true;
    }
    // No.5761
    // 説明:e475
    // 0xe475 (Windows-31J)
    // 0x822b (UTF-16BE)
    if (argCheck == '舫') {
        return true;
    }
    // No.5762
    // 説明:e476
    // 0xe476 (Windows-31J)
    // 0x8238 (UTF-16BE)
    if (argCheck == '舸') {
        return true;
    }
    // No.5763
    // 説明:e477
    // 0xe477 (Windows-31J)
    // 0x8233 (UTF-16BE)
    if (argCheck == '舳') {
        return true;
    }
    // No.5764
    // 説明:e478
    // 0xe478 (Windows-31J)
    // 0x8240 (UTF-16BE)
    if (argCheck == '艀') {
        return true;
    }
    // No.5765
    // 説明:e479
    // 0xe479 (Windows-31J)
    // 0x8259 (UTF-16BE)
    if (argCheck == '艙') {
        return true;
    }
    // No.5766
    // 説明:e47a
    // 0xe47a (Windows-31J)
    // 0x8258 (UTF-16BE)
    if (argCheck == '艘') {
        return true;
    }
    // No.5767
    // 説明:e47b
    // 0xe47b (Windows-31J)
    // 0x825d (UTF-16BE)
    if (argCheck == '艝') {
        return true;
    }
    // No.5768
    // 説明:e47c
    // 0xe47c (Windows-31J)
    // 0x825a (UTF-16BE)
    if (argCheck == '艚') {
        return true;
    }
    // No.5769
    // 説明:e47d
    // 0xe47d (Windows-31J)
    // 0x825f (UTF-16BE)
    if (argCheck == '艟') {
        return true;
    }
    // No.5770
    // 説明:e47e
    // 0xe47e (Windows-31J)
    // 0x8264 (UTF-16BE)
    if (argCheck == '艤') {
        return true;
    }
    // No.5771
    // 説明:e480
    // 0xe480 (Windows-31J)
    // 0x8262 (UTF-16BE)
    if (argCheck == '艢') {
        return true;
    }
    // No.5772
    // 説明:e481
    // 0xe481 (Windows-31J)
    // 0x8268 (UTF-16BE)
    if (argCheck == '艨') {
        return true;
    }
    // No.5773
    // 説明:e482
    // 0xe482 (Windows-31J)
    // 0x826a (UTF-16BE)
    if (argCheck == '艪') {
        return true;
    }
    // No.5774
    // 説明:e483
    // 0xe483 (Windows-31J)
    // 0x826b (UTF-16BE)
    if (argCheck == '艫') {
        return true;
    }
    // No.5775
    // 説明:e484
    // 0xe484 (Windows-31J)
    // 0x822e (UTF-16BE)
    if (argCheck == '舮') {
        return true;
    }
    // No.5776
    // 説明:e485
    // 0xe485 (Windows-31J)
    // 0x8271 (UTF-16BE)
    if (argCheck == '艱') {
        return true;
    }
    // No.5777
    // 説明:e486
    // 0xe486 (Windows-31J)
    // 0x8277 (UTF-16BE)
    if (argCheck == '艷') {
        return true;
    }
    // No.5778
    // 説明:e487
    // 0xe487 (Windows-31J)
    // 0x8278 (UTF-16BE)
    if (argCheck == '艸') {
        return true;
    }
    // No.5779
    // 説明:e488
    // 0xe488 (Windows-31J)
    // 0x827e (UTF-16BE)
    if (argCheck == '艾') {
        return true;
    }
    // No.5780
    // 説明:e489
    // 0xe489 (Windows-31J)
    // 0x828d (UTF-16BE)
    if (argCheck == '芍') {
        return true;
    }
    // No.5781
    // 説明:e48a
    // 0xe48a (Windows-31J)
    // 0x8292 (UTF-16BE)
    if (argCheck == '芒') {
        return true;
    }
    // No.5782
    // 説明:e48b
    // 0xe48b (Windows-31J)
    // 0x82ab (UTF-16BE)
    if (argCheck == '芫') {
        return true;
    }
    // No.5783
    // 説明:e48c
    // 0xe48c (Windows-31J)
    // 0x829f (UTF-16BE)
    if (argCheck == '芟') {
        return true;
    }
    // No.5784
    // 説明:e48d
    // 0xe48d (Windows-31J)
    // 0x82bb (UTF-16BE)
    if (argCheck == '芻') {
        return true;
    }
    // No.5785
    // 説明:e48e
    // 0xe48e (Windows-31J)
    // 0x82ac (UTF-16BE)
    if (argCheck == '芬') {
        return true;
    }
    // No.5786
    // 説明:e48f
    // 0xe48f (Windows-31J)
    // 0x82e1 (UTF-16BE)
    if (argCheck == '苡') {
        return true;
    }
    // No.5787
    // 説明:e490
    // 0xe490 (Windows-31J)
    // 0x82e3 (UTF-16BE)
    if (argCheck == '苣') {
        return true;
    }
    // No.5788
    // 説明:e491
    // 0xe491 (Windows-31J)
    // 0x82df (UTF-16BE)
    if (argCheck == '苟') {
        return true;
    }
    // No.5789
    // 説明:e492
    // 0xe492 (Windows-31J)
    // 0x82d2 (UTF-16BE)
    if (argCheck == '苒') {
        return true;
    }
    // No.5790
    // 説明:e493
    // 0xe493 (Windows-31J)
    // 0x82f4 (UTF-16BE)
    if (argCheck == '苴') {
        return true;
    }
    // No.5791
    // 説明:e494
    // 0xe494 (Windows-31J)
    // 0x82f3 (UTF-16BE)
    if (argCheck == '苳') {
        return true;
    }
    // No.5792
    // 説明:e495
    // 0xe495 (Windows-31J)
    // 0x82fa (UTF-16BE)
    if (argCheck == '苺') {
        return true;
    }
    // No.5793
    // 説明:e496
    // 0xe496 (Windows-31J)
    // 0x8393 (UTF-16BE)
    if (argCheck == '莓') {
        return true;
    }
    // No.5794
    // 説明:e497
    // 0xe497 (Windows-31J)
    // 0x8303 (UTF-16BE)
    if (argCheck == '范') {
        return true;
    }
    // No.5795
    // 説明:e498
    // 0xe498 (Windows-31J)
    // 0x82fb (UTF-16BE)
    if (argCheck == '苻') {
        return true;
    }
    // No.5796
    // 説明:e499
    // 0xe499 (Windows-31J)
    // 0x82f9 (UTF-16BE)
    if (argCheck == '苹') {
        return true;
    }
    // No.5797
    // 説明:e49a
    // 0xe49a (Windows-31J)
    // 0x82de (UTF-16BE)
    if (argCheck == '苞') {
        return true;
    }
    // No.5798
    // 説明:e49b
    // 0xe49b (Windows-31J)
    // 0x8306 (UTF-16BE)
    if (argCheck == '茆') {
        return true;
    }
    // No.5799
    // 説明:e49c
    // 0xe49c (Windows-31J)
    // 0x82dc (UTF-16BE)
    if (argCheck == '苜') {
        return true;
    }
    // No.5800
    // 説明:e49d
    // 0xe49d (Windows-31J)
    // 0x8309 (UTF-16BE)
    if (argCheck == '茉') {
        return true;
    }
    // No.5801
    // 説明:e49e
    // 0xe49e (Windows-31J)
    // 0x82d9 (UTF-16BE)
    if (argCheck == '苙') {
        return true;
    }
    // No.5802
    // 説明:e49f
    // 0xe49f (Windows-31J)
    // 0x8335 (UTF-16BE)
    if (argCheck == '茵') {
        return true;
    }
    // No.5803
    // 説明:e4a0
    // 0xe4a0 (Windows-31J)
    // 0x8334 (UTF-16BE)
    if (argCheck == '茴') {
        return true;
    }
    // No.5804
    // 説明:e4a1
    // 0xe4a1 (Windows-31J)
    // 0x8316 (UTF-16BE)
    if (argCheck == '茖') {
        return true;
    }
    // No.5805
    // 説明:e4a2
    // 0xe4a2 (Windows-31J)
    // 0x8332 (UTF-16BE)
    if (argCheck == '茲') {
        return true;
    }
    // No.5806
    // 説明:e4a3
    // 0xe4a3 (Windows-31J)
    // 0x8331 (UTF-16BE)
    if (argCheck == '茱') {
        return true;
    }
    // No.5807
    // 説明:e4a4
    // 0xe4a4 (Windows-31J)
    // 0x8340 (UTF-16BE)
    if (argCheck == '荀') {
        return true;
    }
    // No.5808
    // 説明:e4a5
    // 0xe4a5 (Windows-31J)
    // 0x8339 (UTF-16BE)
    if (argCheck == '茹') {
        return true;
    }
    // No.5809
    // 説明:e4a6
    // 0xe4a6 (Windows-31J)
    // 0x8350 (UTF-16BE)
    if (argCheck == '荐') {
        return true;
    }
    // No.5810
    // 説明:e4a7
    // 0xe4a7 (Windows-31J)
    // 0x8345 (UTF-16BE)
    if (argCheck == '荅') {
        return true;
    }
    // No.5811
    // 説明:e4a8
    // 0xe4a8 (Windows-31J)
    // 0x832f (UTF-16BE)
    if (argCheck == '茯') {
        return true;
    }
    // No.5812
    // 説明:e4a9
    // 0xe4a9 (Windows-31J)
    // 0x832b (UTF-16BE)
    if (argCheck == '茫') {
        return true;
    }
    // No.5813
    // 説明:e4aa
    // 0xe4aa (Windows-31J)
    // 0x8317 (UTF-16BE)
    if (argCheck == '茗') {
        return true;
    }
    // No.5814
    // 説明:e4ab
    // 0xe4ab (Windows-31J)
    // 0x8318 (UTF-16BE)
    if (argCheck == '茘') {
        return true;
    }
    // No.5815
    // 説明:e4ac
    // 0xe4ac (Windows-31J)
    // 0x8385 (UTF-16BE)
    if (argCheck == '莅') {
        return true;
    }
    // No.5816
    // 説明:e4ad
    // 0xe4ad (Windows-31J)
    // 0x839a (UTF-16BE)
    if (argCheck == '莚') {
        return true;
    }
    // No.5817
    // 説明:e4ae
    // 0xe4ae (Windows-31J)
    // 0x83aa (UTF-16BE)
    if (argCheck == '莪') {
        return true;
    }
    // No.5818
    // 説明:e4af
    // 0xe4af (Windows-31J)
    // 0x839f (UTF-16BE)
    if (argCheck == '莟') {
        return true;
    }
    // No.5819
    // 説明:e4b0
    // 0xe4b0 (Windows-31J)
    // 0x83a2 (UTF-16BE)
    if (argCheck == '莢') {
        return true;
    }
    // No.5820
    // 説明:e4b1
    // 0xe4b1 (Windows-31J)
    // 0x8396 (UTF-16BE)
    if (argCheck == '莖') {
        return true;
    }
    // No.5821
    // 説明:e4b2
    // 0xe4b2 (Windows-31J)
    // 0x8323 (UTF-16BE)
    if (argCheck == '茣') {
        return true;
    }
    // No.5822
    // 説明:e4b3
    // 0xe4b3 (Windows-31J)
    // 0x838e (UTF-16BE)
    if (argCheck == '莎') {
        return true;
    }
    // No.5823
    // 説明:e4b4
    // 0xe4b4 (Windows-31J)
    // 0x8387 (UTF-16BE)
    if (argCheck == '莇') {
        return true;
    }
    // No.5824
    // 説明:e4b5
    // 0xe4b5 (Windows-31J)
    // 0x838a (UTF-16BE)
    if (argCheck == '莊') {
        return true;
    }
    // No.5825
    // 説明:e4b6
    // 0xe4b6 (Windows-31J)
    // 0x837c (UTF-16BE)
    if (argCheck == '荼') {
        return true;
    }
    // No.5826
    // 説明:e4b7
    // 0xe4b7 (Windows-31J)
    // 0x83b5 (UTF-16BE)
    if (argCheck == '莵') {
        return true;
    }
    // No.5827
    // 説明:e4b8
    // 0xe4b8 (Windows-31J)
    // 0x8373 (UTF-16BE)
    if (argCheck == '荳') {
        return true;
    }
    // No.5828
    // 説明:e4b9
    // 0xe4b9 (Windows-31J)
    // 0x8375 (UTF-16BE)
    if (argCheck == '荵') {
        return true;
    }
    // No.5829
    // 説明:e4ba
    // 0xe4ba (Windows-31J)
    // 0x83a0 (UTF-16BE)
    if (argCheck == '莠') {
        return true;
    }
    // No.5830
    // 説明:e4bb
    // 0xe4bb (Windows-31J)
    // 0x8389 (UTF-16BE)
    if (argCheck == '莉') {
        return true;
    }
    // No.5831
    // 説明:e4bc
    // 0xe4bc (Windows-31J)
    // 0x83a8 (UTF-16BE)
    if (argCheck == '莨') {
        return true;
    }
    // No.5832
    // 説明:e4bd
    // 0xe4bd (Windows-31J)
    // 0x83f4 (UTF-16BE)
    if (argCheck == '菴') {
        return true;
    }
    // No.5833
    // 説明:e4be
    // 0xe4be (Windows-31J)
    // 0x8413 (UTF-16BE)
    if (argCheck == '萓') {
        return true;
    }
    // No.5834
    // 説明:e4bf
    // 0xe4bf (Windows-31J)
    // 0x83eb (UTF-16BE)
    if (argCheck == '菫') {
        return true;
    }
    // No.5835
    // 説明:e4c0
    // 0xe4c0 (Windows-31J)
    // 0x83ce (UTF-16BE)
    if (argCheck == '菎') {
        return true;
    }
    // No.5836
    // 説明:e4c1
    // 0xe4c1 (Windows-31J)
    // 0x83fd (UTF-16BE)
    if (argCheck == '菽') {
        return true;
    }
    // No.5837
    // 説明:e4c2
    // 0xe4c2 (Windows-31J)
    // 0x8403 (UTF-16BE)
    if (argCheck == '萃') {
        return true;
    }
    // No.5838
    // 説明:e4c3
    // 0xe4c3 (Windows-31J)
    // 0x83d8 (UTF-16BE)
    if (argCheck == '菘') {
        return true;
    }
    // No.5839
    // 説明:e4c4
    // 0xe4c4 (Windows-31J)
    // 0x840b (UTF-16BE)
    if (argCheck == '萋') {
        return true;
    }
    // No.5840
    // 説明:e4c5
    // 0xe4c5 (Windows-31J)
    // 0x83c1 (UTF-16BE)
    if (argCheck == '菁') {
        return true;
    }
    // No.5841
    // 説明:e4c6
    // 0xe4c6 (Windows-31J)
    // 0x83f7 (UTF-16BE)
    if (argCheck == '菷') {
        return true;
    }
    // No.5842
    // 説明:e4c7
    // 0xe4c7 (Windows-31J)
    // 0x8407 (UTF-16BE)
    if (argCheck == '萇') {
        return true;
    }
    // No.5843
    // 説明:e4c8
    // 0xe4c8 (Windows-31J)
    // 0x83e0 (UTF-16BE)
    if (argCheck == '菠') {
        return true;
    }
    // No.5844
    // 説明:e4c9
    // 0xe4c9 (Windows-31J)
    // 0x83f2 (UTF-16BE)
    if (argCheck == '菲') {
        return true;
    }
    // No.5845
    // 説明:e4ca
    // 0xe4ca (Windows-31J)
    // 0x840d (UTF-16BE)
    if (argCheck == '萍') {
        return true;
    }
    // No.5846
    // 説明:e4cb
    // 0xe4cb (Windows-31J)
    // 0x8422 (UTF-16BE)
    if (argCheck == '萢') {
        return true;
    }
    // No.5847
    // 説明:e4cc
    // 0xe4cc (Windows-31J)
    // 0x8420 (UTF-16BE)
    if (argCheck == '萠') {
        return true;
    }
    // No.5848
    // 説明:e4cd
    // 0xe4cd (Windows-31J)
    // 0x83bd (UTF-16BE)
    if (argCheck == '莽') {
        return true;
    }
    // No.5849
    // 説明:e4ce
    // 0xe4ce (Windows-31J)
    // 0x8438 (UTF-16BE)
    if (argCheck == '萸') {
        return true;
    }
    // No.5850
    // 説明:e4cf
    // 0xe4cf (Windows-31J)
    // 0x8506 (UTF-16BE)
    if (argCheck == '蔆') {
        return true;
    }
    // No.5851
    // 説明:e4d0
    // 0xe4d0 (Windows-31J)
    // 0x83fb (UTF-16BE)
    if (argCheck == '菻') {
        return true;
    }
    // No.5852
    // 説明:e4d1
    // 0xe4d1 (Windows-31J)
    // 0x846d (UTF-16BE)
    if (argCheck == '葭') {
        return true;
    }
    // No.5853
    // 説明:e4d2
    // 0xe4d2 (Windows-31J)
    // 0x842a (UTF-16BE)
    if (argCheck == '萪') {
        return true;
    }
    // No.5854
    // 説明:e4d3
    // 0xe4d3 (Windows-31J)
    // 0x843c (UTF-16BE)
    if (argCheck == '萼') {
        return true;
    }
    // No.5855
    // 説明:e4d4
    // 0xe4d4 (Windows-31J)
    // 0x855a (UTF-16BE)
    if (argCheck == '蕚') {
        return true;
    }
    // No.5856
    // 説明:e4d5
    // 0xe4d5 (Windows-31J)
    // 0x8484 (UTF-16BE)
    if (argCheck == '蒄') {
        return true;
    }
    // No.5857
    // 説明:e4d6
    // 0xe4d6 (Windows-31J)
    // 0x8477 (UTF-16BE)
    if (argCheck == '葷') {
        return true;
    }
    // No.5858
    // 説明:e4d7
    // 0xe4d7 (Windows-31J)
    // 0x846b (UTF-16BE)
    if (argCheck == '葫') {
        return true;
    }
    // No.5859
    // 説明:e4d8
    // 0xe4d8 (Windows-31J)
    // 0x84ad (UTF-16BE)
    if (argCheck == '蒭') {
        return true;
    }
    // No.5860
    // 説明:e4d9
    // 0xe4d9 (Windows-31J)
    // 0x846e (UTF-16BE)
    if (argCheck == '葮') {
        return true;
    }
    // No.5861
    // 説明:e4da
    // 0xe4da (Windows-31J)
    // 0x8482 (UTF-16BE)
    if (argCheck == '蒂') {
        return true;
    }
    // No.5862
    // 説明:e4db
    // 0xe4db (Windows-31J)
    // 0x8469 (UTF-16BE)
    if (argCheck == '葩') {
        return true;
    }
    // No.5863
    // 説明:e4dc
    // 0xe4dc (Windows-31J)
    // 0x8446 (UTF-16BE)
    if (argCheck == '葆') {
        return true;
    }
    // No.5864
    // 説明:e4dd
    // 0xe4dd (Windows-31J)
    // 0x842c (UTF-16BE)
    if (argCheck == '萬') {
        return true;
    }
    // No.5865
    // 説明:e4de
    // 0xe4de (Windows-31J)
    // 0x846f (UTF-16BE)
    if (argCheck == '葯') {
        return true;
    }
    // No.5866
    // 説明:e4df
    // 0xe4df (Windows-31J)
    // 0x8479 (UTF-16BE)
    if (argCheck == '葹') {
        return true;
    }
    // No.5867
    // 説明:e4e0
    // 0xe4e0 (Windows-31J)
    // 0x8435 (UTF-16BE)
    if (argCheck == '萵') {
        return true;
    }
    // No.5868
    // 説明:e4e1
    // 0xe4e1 (Windows-31J)
    // 0x84ca (UTF-16BE)
    if (argCheck == '蓊') {
        return true;
    }
    // No.5869
    // 説明:e4e2
    // 0xe4e2 (Windows-31J)
    // 0x8462 (UTF-16BE)
    if (argCheck == '葢') {
        return true;
    }
    // No.5870
    // 説明:e4e3
    // 0xe4e3 (Windows-31J)
    // 0x84b9 (UTF-16BE)
    if (argCheck == '蒹') {
        return true;
    }
    // No.5871
    // 説明:e4e4
    // 0xe4e4 (Windows-31J)
    // 0x84bf (UTF-16BE)
    if (argCheck == '蒿') {
        return true;
    }
    // No.5872
    // 説明:e4e5
    // 0xe4e5 (Windows-31J)
    // 0x849f (UTF-16BE)
    if (argCheck == '蒟') {
        return true;
    }
    // No.5873
    // 説明:e4e6
    // 0xe4e6 (Windows-31J)
    // 0x84d9 (UTF-16BE)
    if (argCheck == '蓙') {
        return true;
    }
    // No.5874
    // 説明:e4e7
    // 0xe4e7 (Windows-31J)
    // 0x84cd (UTF-16BE)
    if (argCheck == '蓍') {
        return true;
    }
    // No.5875
    // 説明:e4e8
    // 0xe4e8 (Windows-31J)
    // 0x84bb (UTF-16BE)
    if (argCheck == '蒻') {
        return true;
    }
    // No.5876
    // 説明:e4e9
    // 0xe4e9 (Windows-31J)
    // 0x84da (UTF-16BE)
    if (argCheck == '蓚') {
        return true;
    }
    // No.5877
    // 説明:e4ea
    // 0xe4ea (Windows-31J)
    // 0x84d0 (UTF-16BE)
    if (argCheck == '蓐') {
        return true;
    }
    // No.5878
    // 説明:e4eb
    // 0xe4eb (Windows-31J)
    // 0x84c1 (UTF-16BE)
    if (argCheck == '蓁') {
        return true;
    }
    // No.5879
    // 説明:e4ec
    // 0xe4ec (Windows-31J)
    // 0x84c6 (UTF-16BE)
    if (argCheck == '蓆') {
        return true;
    }
    // No.5880
    // 説明:e4ed
    // 0xe4ed (Windows-31J)
    // 0x84d6 (UTF-16BE)
    if (argCheck == '蓖') {
        return true;
    }
    // No.5881
    // 説明:e4ee
    // 0xe4ee (Windows-31J)
    // 0x84a1 (UTF-16BE)
    if (argCheck == '蒡') {
        return true;
    }
    // No.5882
    // 説明:e4ef
    // 0xe4ef (Windows-31J)
    // 0x8521 (UTF-16BE)
    if (argCheck == '蔡') {
        return true;
    }
    // No.5883
    // 説明:e4f0
    // 0xe4f0 (Windows-31J)
    // 0x84ff (UTF-16BE)
    if (argCheck == '蓿') {
        return true;
    }
    // No.5884
    // 説明:e4f1
    // 0xe4f1 (Windows-31J)
    // 0x84f4 (UTF-16BE)
    if (argCheck == '蓴') {
        return true;
    }
    // No.5885
    // 説明:e4f2
    // 0xe4f2 (Windows-31J)
    // 0x8517 (UTF-16BE)
    if (argCheck == '蔗') {
        return true;
    }
    // No.5886
    // 説明:e4f3
    // 0xe4f3 (Windows-31J)
    // 0x8518 (UTF-16BE)
    if (argCheck == '蔘') {
        return true;
    }
    // No.5887
    // 説明:e4f4
    // 0xe4f4 (Windows-31J)
    // 0x852c (UTF-16BE)
    if (argCheck == '蔬') {
        return true;
    }
    // No.5888
    // 説明:e4f5
    // 0xe4f5 (Windows-31J)
    // 0x851f (UTF-16BE)
    if (argCheck == '蔟') {
        return true;
    }
    // No.5889
    // 説明:e4f6
    // 0xe4f6 (Windows-31J)
    // 0x8515 (UTF-16BE)
    if (argCheck == '蔕') {
        return true;
    }
    // No.5890
    // 説明:e4f7
    // 0xe4f7 (Windows-31J)
    // 0x8514 (UTF-16BE)
    if (argCheck == '蔔') {
        return true;
    }
    // No.5891
    // 説明:e4f8
    // 0xe4f8 (Windows-31J)
    // 0x84fc (UTF-16BE)
    if (argCheck == '蓼') {
        return true;
    }
    // No.5892
    // 説明:e4f9
    // 0xe4f9 (Windows-31J)
    // 0x8540 (UTF-16BE)
    if (argCheck == '蕀') {
        return true;
    }
    // No.5893
    // 説明:e4fa
    // 0xe4fa (Windows-31J)
    // 0x8563 (UTF-16BE)
    if (argCheck == '蕣') {
        return true;
    }
    // No.5894
    // 説明:e4fb
    // 0xe4fb (Windows-31J)
    // 0x8558 (UTF-16BE)
    if (argCheck == '蕘') {
        return true;
    }
    // No.5895
    // 説明:e4fc
    // 0xe4fc (Windows-31J)
    // 0x8548 (UTF-16BE)
    if (argCheck == '蕈') {
        return true;
    }
    // No.5896
    // 説明:e540
    // 0xe540 (Windows-31J)
    // 0x8541 (UTF-16BE)
    if (argCheck == '蕁') {
        return true;
    }
    // No.5897
    // 説明:e541
    // 0xe541 (Windows-31J)
    // 0x8602 (UTF-16BE)
    if (argCheck == '蘂') {
        return true;
    }
    // No.5898
    // 説明:e542
    // 0xe542 (Windows-31J)
    // 0x854b (UTF-16BE)
    if (argCheck == '蕋') {
        return true;
    }
    // No.5899
    // 説明:e543
    // 0xe543 (Windows-31J)
    // 0x8555 (UTF-16BE)
    if (argCheck == '蕕') {
        return true;
    }
    // No.5900
    // 説明:e544
    // 0xe544 (Windows-31J)
    // 0x8580 (UTF-16BE)
    if (argCheck == '薀') {
        return true;
    }
    // No.5901
    // 説明:e545
    // 0xe545 (Windows-31J)
    // 0x85a4 (UTF-16BE)
    if (argCheck == '薤') {
        return true;
    }
    // No.5902
    // 説明:e546
    // 0xe546 (Windows-31J)
    // 0x8588 (UTF-16BE)
    if (argCheck == '薈') {
        return true;
    }
    // No.5903
    // 説明:e547
    // 0xe547 (Windows-31J)
    // 0x8591 (UTF-16BE)
    if (argCheck == '薑') {
        return true;
    }
    // No.5904
    // 説明:e548
    // 0xe548 (Windows-31J)
    // 0x858a (UTF-16BE)
    if (argCheck == '薊') {
        return true;
    }
    // No.5905
    // 説明:e549
    // 0xe549 (Windows-31J)
    // 0x85a8 (UTF-16BE)
    if (argCheck == '薨') {
        return true;
    }
    // No.5906
    // 説明:e54a
    // 0xe54a (Windows-31J)
    // 0x856d (UTF-16BE)
    if (argCheck == '蕭') {
        return true;
    }
    // No.5907
    // 説明:e54b
    // 0xe54b (Windows-31J)
    // 0x8594 (UTF-16BE)
    if (argCheck == '薔') {
        return true;
    }
    // No.5908
    // 説明:e54c
    // 0xe54c (Windows-31J)
    // 0x859b (UTF-16BE)
    if (argCheck == '薛') {
        return true;
    }
    // No.5909
    // 説明:e54d
    // 0xe54d (Windows-31J)
    // 0x85ea (UTF-16BE)
    if (argCheck == '藪') {
        return true;
    }
    // No.5910
    // 説明:e54e
    // 0xe54e (Windows-31J)
    // 0x8587 (UTF-16BE)
    if (argCheck == '薇') {
        return true;
    }
    // No.5911
    // 説明:e54f
    // 0xe54f (Windows-31J)
    // 0x859c (UTF-16BE)
    if (argCheck == '薜') {
        return true;
    }
    // No.5912
    // 説明:e550
    // 0xe550 (Windows-31J)
    // 0x8577 (UTF-16BE)
    if (argCheck == '蕷') {
        return true;
    }
    // No.5913
    // 説明:e551
    // 0xe551 (Windows-31J)
    // 0x857e (UTF-16BE)
    if (argCheck == '蕾') {
        return true;
    }
    // No.5914
    // 説明:e552
    // 0xe552 (Windows-31J)
    // 0x8590 (UTF-16BE)
    if (argCheck == '薐') {
        return true;
    }
    // No.5915
    // 説明:e553
    // 0xe553 (Windows-31J)
    // 0x85c9 (UTF-16BE)
    if (argCheck == '藉') {
        return true;
    }
    // No.5916
    // 説明:e554
    // 0xe554 (Windows-31J)
    // 0x85ba (UTF-16BE)
    if (argCheck == '薺') {
        return true;
    }
    // No.5917
    // 説明:e555
    // 0xe555 (Windows-31J)
    // 0x85cf (UTF-16BE)
    if (argCheck == '藏') {
        return true;
    }
    // No.5918
    // 説明:e556
    // 0xe556 (Windows-31J)
    // 0x85b9 (UTF-16BE)
    if (argCheck == '薹') {
        return true;
    }
    // No.5919
    // 説明:e557
    // 0xe557 (Windows-31J)
    // 0x85d0 (UTF-16BE)
    if (argCheck == '藐') {
        return true;
    }
    // No.5920
    // 説明:e558
    // 0xe558 (Windows-31J)
    // 0x85d5 (UTF-16BE)
    if (argCheck == '藕') {
        return true;
    }
    // No.5921
    // 説明:e559
    // 0xe559 (Windows-31J)
    // 0x85dd (UTF-16BE)
    if (argCheck == '藝') {
        return true;
    }
    // No.5922
    // 説明:e55a
    // 0xe55a (Windows-31J)
    // 0x85e5 (UTF-16BE)
    if (argCheck == '藥') {
        return true;
    }
    // No.5923
    // 説明:e55b
    // 0xe55b (Windows-31J)
    // 0x85dc (UTF-16BE)
    if (argCheck == '藜') {
        return true;
    }
    // No.5924
    // 説明:e55c
    // 0xe55c (Windows-31J)
    // 0x85f9 (UTF-16BE)
    if (argCheck == '藹') {
        return true;
    }
    // No.5925
    // 説明:e55d
    // 0xe55d (Windows-31J)
    // 0x860a (UTF-16BE)
    if (argCheck == '蘊') {
        return true;
    }
    // No.5926
    // 説明:e55e
    // 0xe55e (Windows-31J)
    // 0x8613 (UTF-16BE)
    if (argCheck == '蘓') {
        return true;
    }
    // No.5927
    // 説明:e55f
    // 0xe55f (Windows-31J)
    // 0x860b (UTF-16BE)
    if (argCheck == '蘋') {
        return true;
    }
    // No.5928
    // 説明:e560
    // 0xe560 (Windows-31J)
    // 0x85fe (UTF-16BE)
    if (argCheck == '藾') {
        return true;
    }
    // No.5929
    // 説明:e561
    // 0xe561 (Windows-31J)
    // 0x85fa (UTF-16BE)
    if (argCheck == '藺') {
        return true;
    }
    // No.5930
    // 説明:e562
    // 0xe562 (Windows-31J)
    // 0x8606 (UTF-16BE)
    if (argCheck == '蘆') {
        return true;
    }
    // No.5931
    // 説明:e563
    // 0xe563 (Windows-31J)
    // 0x8622 (UTF-16BE)
    if (argCheck == '蘢') {
        return true;
    }
    // No.5932
    // 説明:e564
    // 0xe564 (Windows-31J)
    // 0x861a (UTF-16BE)
    if (argCheck == '蘚') {
        return true;
    }
    // No.5933
    // 説明:e565
    // 0xe565 (Windows-31J)
    // 0x8630 (UTF-16BE)
    if (argCheck == '蘰') {
        return true;
    }
    // No.5934
    // 説明:e566
    // 0xe566 (Windows-31J)
    // 0x863f (UTF-16BE)
    if (argCheck == '蘿') {
        return true;
    }
    // No.5935
    // 説明:e567
    // 0xe567 (Windows-31J)
    // 0x864d (UTF-16BE)
    if (argCheck == '虍') {
        return true;
    }
    // No.5936
    // 説明:e568
    // 0xe568 (Windows-31J)
    // 0x4e55 (UTF-16BE)
    if (argCheck == '乕') {
        return true;
    }
    // No.5937
    // 説明:e569
    // 0xe569 (Windows-31J)
    // 0x8654 (UTF-16BE)
    if (argCheck == '虔') {
        return true;
    }
    // No.5938
    // 説明:e56a
    // 0xe56a (Windows-31J)
    // 0x865f (UTF-16BE)
    if (argCheck == '號') {
        return true;
    }
    // No.5939
    // 説明:e56b
    // 0xe56b (Windows-31J)
    // 0x8667 (UTF-16BE)
    if (argCheck == '虧') {
        return true;
    }
    // No.5940
    // 説明:e56c
    // 0xe56c (Windows-31J)
    // 0x8671 (UTF-16BE)
    if (argCheck == '虱') {
        return true;
    }
    // No.5941
    // 説明:e56d
    // 0xe56d (Windows-31J)
    // 0x8693 (UTF-16BE)
    if (argCheck == '蚓') {
        return true;
    }
    // No.5942
    // 説明:e56e
    // 0xe56e (Windows-31J)
    // 0x86a3 (UTF-16BE)
    if (argCheck == '蚣') {
        return true;
    }
    // No.5943
    // 説明:e56f
    // 0xe56f (Windows-31J)
    // 0x86a9 (UTF-16BE)
    if (argCheck == '蚩') {
        return true;
    }
    // No.5944
    // 説明:e570
    // 0xe570 (Windows-31J)
    // 0x86aa (UTF-16BE)
    if (argCheck == '蚪') {
        return true;
    }
    // No.5945
    // 説明:e571
    // 0xe571 (Windows-31J)
    // 0x868b (UTF-16BE)
    if (argCheck == '蚋') {
        return true;
    }
    // No.5946
    // 説明:e572
    // 0xe572 (Windows-31J)
    // 0x868c (UTF-16BE)
    if (argCheck == '蚌') {
        return true;
    }
    // No.5947
    // 説明:e573
    // 0xe573 (Windows-31J)
    // 0x86b6 (UTF-16BE)
    if (argCheck == '蚶') {
        return true;
    }
    // No.5948
    // 説明:e574
    // 0xe574 (Windows-31J)
    // 0x86af (UTF-16BE)
    if (argCheck == '蚯') {
        return true;
    }
    // No.5949
    // 説明:e575
    // 0xe575 (Windows-31J)
    // 0x86c4 (UTF-16BE)
    if (argCheck == '蛄') {
        return true;
    }
    // No.5950
    // 説明:e576
    // 0xe576 (Windows-31J)
    // 0x86c6 (UTF-16BE)
    if (argCheck == '蛆') {
        return true;
    }
    // No.5951
    // 説明:e577
    // 0xe577 (Windows-31J)
    // 0x86b0 (UTF-16BE)
    if (argCheck == '蚰') {
        return true;
    }
    // No.5952
    // 説明:e578
    // 0xe578 (Windows-31J)
    // 0x86c9 (UTF-16BE)
    if (argCheck == '蛉') {
        return true;
    }
    // No.5953
    // 説明:e579
    // 0xe579 (Windows-31J)
    // 0x8823 (UTF-16BE)
    if (argCheck == '蠣') {
        return true;
    }
    // No.5954
    // 説明:e57a
    // 0xe57a (Windows-31J)
    // 0x86ab (UTF-16BE)
    if (argCheck == '蚫') {
        return true;
    }
    // No.5955
    // 説明:e57b
    // 0xe57b (Windows-31J)
    // 0x86d4 (UTF-16BE)
    if (argCheck == '蛔') {
        return true;
    }
    // No.5956
    // 説明:e57c
    // 0xe57c (Windows-31J)
    // 0x86de (UTF-16BE)
    if (argCheck == '蛞') {
        return true;
    }
    // No.5957
    // 説明:e57d
    // 0xe57d (Windows-31J)
    // 0x86e9 (UTF-16BE)
    if (argCheck == '蛩') {
        return true;
    }
    // No.5958
    // 説明:e57e
    // 0xe57e (Windows-31J)
    // 0x86ec (UTF-16BE)
    if (argCheck == '蛬') {
        return true;
    }
    // No.5959
    // 説明:e580
    // 0xe580 (Windows-31J)
    // 0x86df (UTF-16BE)
    if (argCheck == '蛟') {
        return true;
    }
    // No.5960
    // 説明:e581
    // 0xe581 (Windows-31J)
    // 0x86db (UTF-16BE)
    if (argCheck == '蛛') {
        return true;
    }
    // No.5961
    // 説明:e582
    // 0xe582 (Windows-31J)
    // 0x86ef (UTF-16BE)
    if (argCheck == '蛯') {
        return true;
    }
    // No.5962
    // 説明:e583
    // 0xe583 (Windows-31J)
    // 0x8712 (UTF-16BE)
    if (argCheck == '蜒') {
        return true;
    }
    // No.5963
    // 説明:e584
    // 0xe584 (Windows-31J)
    // 0x8706 (UTF-16BE)
    if (argCheck == '蜆') {
        return true;
    }
    // No.5964
    // 説明:e585
    // 0xe585 (Windows-31J)
    // 0x8708 (UTF-16BE)
    if (argCheck == '蜈') {
        return true;
    }
    // No.5965
    // 説明:e586
    // 0xe586 (Windows-31J)
    // 0x8700 (UTF-16BE)
    if (argCheck == '蜀') {
        return true;
    }
    // No.5966
    // 説明:e587
    // 0xe587 (Windows-31J)
    // 0x8703 (UTF-16BE)
    if (argCheck == '蜃') {
        return true;
    }
    // No.5967
    // 説明:e588
    // 0xe588 (Windows-31J)
    // 0x86fb (UTF-16BE)
    if (argCheck == '蛻') {
        return true;
    }
    // No.5968
    // 説明:e589
    // 0xe589 (Windows-31J)
    // 0x8711 (UTF-16BE)
    if (argCheck == '蜑') {
        return true;
    }
    // No.5969
    // 説明:e58a
    // 0xe58a (Windows-31J)
    // 0x8709 (UTF-16BE)
    if (argCheck == '蜉') {
        return true;
    }
    // No.5970
    // 説明:e58b
    // 0xe58b (Windows-31J)
    // 0x870d (UTF-16BE)
    if (argCheck == '蜍') {
        return true;
    }
    // No.5971
    // 説明:e58c
    // 0xe58c (Windows-31J)
    // 0x86f9 (UTF-16BE)
    if (argCheck == '蛹') {
        return true;
    }
    // No.5972
    // 説明:e58d
    // 0xe58d (Windows-31J)
    // 0x870a (UTF-16BE)
    if (argCheck == '蜊') {
        return true;
    }
    // No.5973
    // 説明:e58e
    // 0xe58e (Windows-31J)
    // 0x8734 (UTF-16BE)
    if (argCheck == '蜴') {
        return true;
    }
    // No.5974
    // 説明:e58f
    // 0xe58f (Windows-31J)
    // 0x873f (UTF-16BE)
    if (argCheck == '蜿') {
        return true;
    }
    // No.5975
    // 説明:e590
    // 0xe590 (Windows-31J)
    // 0x8737 (UTF-16BE)
    if (argCheck == '蜷') {
        return true;
    }
    // No.5976
    // 説明:e591
    // 0xe591 (Windows-31J)
    // 0x873b (UTF-16BE)
    if (argCheck == '蜻') {
        return true;
    }
    // No.5977
    // 説明:e592
    // 0xe592 (Windows-31J)
    // 0x8725 (UTF-16BE)
    if (argCheck == '蜥') {
        return true;
    }
    // No.5978
    // 説明:e593
    // 0xe593 (Windows-31J)
    // 0x8729 (UTF-16BE)
    if (argCheck == '蜩') {
        return true;
    }
    // No.5979
    // 説明:e594
    // 0xe594 (Windows-31J)
    // 0x871a (UTF-16BE)
    if (argCheck == '蜚') {
        return true;
    }
    // No.5980
    // 説明:e595
    // 0xe595 (Windows-31J)
    // 0x8760 (UTF-16BE)
    if (argCheck == '蝠') {
        return true;
    }
    // No.5981
    // 説明:e596
    // 0xe596 (Windows-31J)
    // 0x875f (UTF-16BE)
    if (argCheck == '蝟') {
        return true;
    }
    // No.5982
    // 説明:e597
    // 0xe597 (Windows-31J)
    // 0x8778 (UTF-16BE)
    if (argCheck == '蝸') {
        return true;
    }
    // No.5983
    // 説明:e598
    // 0xe598 (Windows-31J)
    // 0x874c (UTF-16BE)
    if (argCheck == '蝌') {
        return true;
    }
    // No.5984
    // 説明:e599
    // 0xe599 (Windows-31J)
    // 0x874e (UTF-16BE)
    if (argCheck == '蝎') {
        return true;
    }
    // No.5985
    // 説明:e59a
    // 0xe59a (Windows-31J)
    // 0x8774 (UTF-16BE)
    if (argCheck == '蝴') {
        return true;
    }
    // No.5986
    // 説明:e59b
    // 0xe59b (Windows-31J)
    // 0x8757 (UTF-16BE)
    if (argCheck == '蝗') {
        return true;
    }
    // No.5987
    // 説明:e59c
    // 0xe59c (Windows-31J)
    // 0x8768 (UTF-16BE)
    if (argCheck == '蝨') {
        return true;
    }
    // No.5988
    // 説明:e59d
    // 0xe59d (Windows-31J)
    // 0x876e (UTF-16BE)
    if (argCheck == '蝮') {
        return true;
    }
    // No.5989
    // 説明:e59e
    // 0xe59e (Windows-31J)
    // 0x8759 (UTF-16BE)
    if (argCheck == '蝙') {
        return true;
    }
    // No.5990
    // 説明:e59f
    // 0xe59f (Windows-31J)
    // 0x8753 (UTF-16BE)
    if (argCheck == '蝓') {
        return true;
    }
    // No.5991
    // 説明:e5a0
    // 0xe5a0 (Windows-31J)
    // 0x8763 (UTF-16BE)
    if (argCheck == '蝣') {
        return true;
    }
    // No.5992
    // 説明:e5a1
    // 0xe5a1 (Windows-31J)
    // 0x876a (UTF-16BE)
    if (argCheck == '蝪') {
        return true;
    }
    // No.5993
    // 説明:e5a2
    // 0xe5a2 (Windows-31J)
    // 0x8805 (UTF-16BE)
    if (argCheck == '蠅') {
        return true;
    }
    // No.5994
    // 説明:e5a3
    // 0xe5a3 (Windows-31J)
    // 0x87a2 (UTF-16BE)
    if (argCheck == '螢') {
        return true;
    }
    // No.5995
    // 説明:e5a4
    // 0xe5a4 (Windows-31J)
    // 0x879f (UTF-16BE)
    if (argCheck == '螟') {
        return true;
    }
    // No.5996
    // 説明:e5a5
    // 0xe5a5 (Windows-31J)
    // 0x8782 (UTF-16BE)
    if (argCheck == '螂') {
        return true;
    }
    // No.5997
    // 説明:e5a6
    // 0xe5a6 (Windows-31J)
    // 0x87af (UTF-16BE)
    if (argCheck == '螯') {
        return true;
    }
    // No.5998
    // 説明:e5a7
    // 0xe5a7 (Windows-31J)
    // 0x87cb (UTF-16BE)
    if (argCheck == '蟋') {
        return true;
    }
    // No.5999
    // 説明:e5a8
    // 0xe5a8 (Windows-31J)
    // 0x87bd (UTF-16BE)
    if (argCheck == '螽') {
        return true;
    }
    // No.6000
    // 説明:e5a9
    // 0xe5a9 (Windows-31J)
    // 0x87c0 (UTF-16BE)
    if (argCheck == '蟀') {
        return true;
    }
    // No.6001
    // 説明:e5aa
    // 0xe5aa (Windows-31J)
    // 0x87d0 (UTF-16BE)
    if (argCheck == '蟐') {
        return true;
    }
    // No.6002
    // 説明:e5ab
    // 0xe5ab (Windows-31J)
    // 0x96d6 (UTF-16BE)
    if (argCheck == '雖') {
        return true;
    }
    // No.6003
    // 説明:e5ac
    // 0xe5ac (Windows-31J)
    // 0x87ab (UTF-16BE)
    if (argCheck == '螫') {
        return true;
    }
    // No.6004
    // 説明:e5ad
    // 0xe5ad (Windows-31J)
    // 0x87c4 (UTF-16BE)
    if (argCheck == '蟄') {
        return true;
    }
    // No.6005
    // 説明:e5ae
    // 0xe5ae (Windows-31J)
    // 0x87b3 (UTF-16BE)
    if (argCheck == '螳') {
        return true;
    }
    // No.6006
    // 説明:e5af
    // 0xe5af (Windows-31J)
    // 0x87c7 (UTF-16BE)
    if (argCheck == '蟇') {
        return true;
    }
    // No.6007
    // 説明:e5b0
    // 0xe5b0 (Windows-31J)
    // 0x87c6 (UTF-16BE)
    if (argCheck == '蟆') {
        return true;
    }
    // No.6008
    // 説明:e5b1
    // 0xe5b1 (Windows-31J)
    // 0x87bb (UTF-16BE)
    if (argCheck == '螻') {
        return true;
    }
    // No.6009
    // 説明:e5b2
    // 0xe5b2 (Windows-31J)
    // 0x87ef (UTF-16BE)
    if (argCheck == '蟯') {
        return true;
    }
    // No.6010
    // 説明:e5b3
    // 0xe5b3 (Windows-31J)
    // 0x87f2 (UTF-16BE)
    if (argCheck == '蟲') {
        return true;
    }
    // No.6011
    // 説明:e5b4
    // 0xe5b4 (Windows-31J)
    // 0x87e0 (UTF-16BE)
    if (argCheck == '蟠') {
        return true;
    }
    // No.6012
    // 説明:e5b5
    // 0xe5b5 (Windows-31J)
    // 0x880f (UTF-16BE)
    if (argCheck == '蠏') {
        return true;
    }
    // No.6013
    // 説明:e5b6
    // 0xe5b6 (Windows-31J)
    // 0x880d (UTF-16BE)
    if (argCheck == '蠍') {
        return true;
    }
    // No.6014
    // 説明:e5b7
    // 0xe5b7 (Windows-31J)
    // 0x87fe (UTF-16BE)
    if (argCheck == '蟾') {
        return true;
    }
    // No.6015
    // 説明:e5b8
    // 0xe5b8 (Windows-31J)
    // 0x87f6 (UTF-16BE)
    if (argCheck == '蟶') {
        return true;
    }
    // No.6016
    // 説明:e5b9
    // 0xe5b9 (Windows-31J)
    // 0x87f7 (UTF-16BE)
    if (argCheck == '蟷') {
        return true;
    }
    // No.6017
    // 説明:e5ba
    // 0xe5ba (Windows-31J)
    // 0x880e (UTF-16BE)
    if (argCheck == '蠎') {
        return true;
    }
    // No.6018
    // 説明:e5bb
    // 0xe5bb (Windows-31J)
    // 0x87d2 (UTF-16BE)
    if (argCheck == '蟒') {
        return true;
    }
    // No.6019
    // 説明:e5bc
    // 0xe5bc (Windows-31J)
    // 0x8811 (UTF-16BE)
    if (argCheck == '蠑') {
        return true;
    }
    // No.6020
    // 説明:e5bd
    // 0xe5bd (Windows-31J)
    // 0x8816 (UTF-16BE)
    if (argCheck == '蠖') {
        return true;
    }
    // No.6021
    // 説明:e5be
    // 0xe5be (Windows-31J)
    // 0x8815 (UTF-16BE)
    if (argCheck == '蠕') {
        return true;
    }
    // No.6022
    // 説明:e5bf
    // 0xe5bf (Windows-31J)
    // 0x8822 (UTF-16BE)
    if (argCheck == '蠢') {
        return true;
    }
    // No.6023
    // 説明:e5c0
    // 0xe5c0 (Windows-31J)
    // 0x8821 (UTF-16BE)
    if (argCheck == '蠡') {
        return true;
    }
    // No.6024
    // 説明:e5c1
    // 0xe5c1 (Windows-31J)
    // 0x8831 (UTF-16BE)
    if (argCheck == '蠱') {
        return true;
    }
    // No.6025
    // 説明:e5c2
    // 0xe5c2 (Windows-31J)
    // 0x8836 (UTF-16BE)
    if (argCheck == '蠶') {
        return true;
    }
    // No.6026
    // 説明:e5c3
    // 0xe5c3 (Windows-31J)
    // 0x8839 (UTF-16BE)
    if (argCheck == '蠹') {
        return true;
    }
    // No.6027
    // 説明:e5c4
    // 0xe5c4 (Windows-31J)
    // 0x8827 (UTF-16BE)
    if (argCheck == '蠧') {
        return true;
    }
    // No.6028
    // 説明:e5c5
    // 0xe5c5 (Windows-31J)
    // 0x883b (UTF-16BE)
    if (argCheck == '蠻') {
        return true;
    }
    // No.6029
    // 説明:e5c6
    // 0xe5c6 (Windows-31J)
    // 0x8844 (UTF-16BE)
    if (argCheck == '衄') {
        return true;
    }
    // No.6030
    // 説明:e5c7
    // 0xe5c7 (Windows-31J)
    // 0x8842 (UTF-16BE)
    if (argCheck == '衂') {
        return true;
    }
    // No.6031
    // 説明:e5c8
    // 0xe5c8 (Windows-31J)
    // 0x8852 (UTF-16BE)
    if (argCheck == '衒') {
        return true;
    }
    // No.6032
    // 説明:e5c9
    // 0xe5c9 (Windows-31J)
    // 0x8859 (UTF-16BE)
    if (argCheck == '衙') {
        return true;
    }
    // No.6033
    // 説明:e5ca
    // 0xe5ca (Windows-31J)
    // 0x885e (UTF-16BE)
    if (argCheck == '衞') {
        return true;
    }
    // No.6034
    // 説明:e5cb
    // 0xe5cb (Windows-31J)
    // 0x8862 (UTF-16BE)
    if (argCheck == '衢') {
        return true;
    }
    // No.6035
    // 説明:e5cc
    // 0xe5cc (Windows-31J)
    // 0x886b (UTF-16BE)
    if (argCheck == '衫') {
        return true;
    }
    // No.6036
    // 説明:e5cd
    // 0xe5cd (Windows-31J)
    // 0x8881 (UTF-16BE)
    if (argCheck == '袁') {
        return true;
    }
    // No.6037
    // 説明:e5ce
    // 0xe5ce (Windows-31J)
    // 0x887e (UTF-16BE)
    if (argCheck == '衾') {
        return true;
    }
    // No.6038
    // 説明:e5cf
    // 0xe5cf (Windows-31J)
    // 0x889e (UTF-16BE)
    if (argCheck == '袞') {
        return true;
    }
    // No.6039
    // 説明:e5d0
    // 0xe5d0 (Windows-31J)
    // 0x8875 (UTF-16BE)
    if (argCheck == '衵') {
        return true;
    }
    // No.6040
    // 説明:e5d1
    // 0xe5d1 (Windows-31J)
    // 0x887d (UTF-16BE)
    if (argCheck == '衽') {
        return true;
    }
    // No.6041
    // 説明:e5d2
    // 0xe5d2 (Windows-31J)
    // 0x88b5 (UTF-16BE)
    if (argCheck == '袵') {
        return true;
    }
    // No.6042
    // 説明:e5d3
    // 0xe5d3 (Windows-31J)
    // 0x8872 (UTF-16BE)
    if (argCheck == '衲') {
        return true;
    }
    // No.6043
    // 説明:e5d4
    // 0xe5d4 (Windows-31J)
    // 0x8882 (UTF-16BE)
    if (argCheck == '袂') {
        return true;
    }
    // No.6044
    // 説明:e5d5
    // 0xe5d5 (Windows-31J)
    // 0x8897 (UTF-16BE)
    if (argCheck == '袗') {
        return true;
    }
    // No.6045
    // 説明:e5d6
    // 0xe5d6 (Windows-31J)
    // 0x8892 (UTF-16BE)
    if (argCheck == '袒') {
        return true;
    }
    // No.6046
    // 説明:e5d7
    // 0xe5d7 (Windows-31J)
    // 0x88ae (UTF-16BE)
    if (argCheck == '袮') {
        return true;
    }
    // No.6047
    // 説明:e5d8
    // 0xe5d8 (Windows-31J)
    // 0x8899 (UTF-16BE)
    if (argCheck == '袙') {
        return true;
    }
    // No.6048
    // 説明:e5d9
    // 0xe5d9 (Windows-31J)
    // 0x88a2 (UTF-16BE)
    if (argCheck == '袢') {
        return true;
    }
    // No.6049
    // 説明:e5da
    // 0xe5da (Windows-31J)
    // 0x888d (UTF-16BE)
    if (argCheck == '袍') {
        return true;
    }
    // No.6050
    // 説明:e5db
    // 0xe5db (Windows-31J)
    // 0x88a4 (UTF-16BE)
    if (argCheck == '袤') {
        return true;
    }
    // No.6051
    // 説明:e5dc
    // 0xe5dc (Windows-31J)
    // 0x88b0 (UTF-16BE)
    if (argCheck == '袰') {
        return true;
    }
    // No.6052
    // 説明:e5dd
    // 0xe5dd (Windows-31J)
    // 0x88bf (UTF-16BE)
    if (argCheck == '袿') {
        return true;
    }
    // No.6053
    // 説明:e5de
    // 0xe5de (Windows-31J)
    // 0x88b1 (UTF-16BE)
    if (argCheck == '袱') {
        return true;
    }
    // No.6054
    // 説明:e5df
    // 0xe5df (Windows-31J)
    // 0x88c3 (UTF-16BE)
    if (argCheck == '裃') {
        return true;
    }
    // No.6055
    // 説明:e5e0
    // 0xe5e0 (Windows-31J)
    // 0x88c4 (UTF-16BE)
    if (argCheck == '裄') {
        return true;
    }
    // No.6056
    // 説明:e5e1
    // 0xe5e1 (Windows-31J)
    // 0x88d4 (UTF-16BE)
    if (argCheck == '裔') {
        return true;
    }
    // No.6057
    // 説明:e5e2
    // 0xe5e2 (Windows-31J)
    // 0x88d8 (UTF-16BE)
    if (argCheck == '裘') {
        return true;
    }
    // No.6058
    // 説明:e5e3
    // 0xe5e3 (Windows-31J)
    // 0x88d9 (UTF-16BE)
    if (argCheck == '裙') {
        return true;
    }
    // No.6059
    // 説明:e5e4
    // 0xe5e4 (Windows-31J)
    // 0x88dd (UTF-16BE)
    if (argCheck == '裝') {
        return true;
    }
    // No.6060
    // 説明:e5e5
    // 0xe5e5 (Windows-31J)
    // 0x88f9 (UTF-16BE)
    if (argCheck == '裹') {
        return true;
    }
    // No.6061
    // 説明:e5e6
    // 0xe5e6 (Windows-31J)
    // 0x8902 (UTF-16BE)
    if (argCheck == '褂') {
        return true;
    }
    // No.6062
    // 説明:e5e7
    // 0xe5e7 (Windows-31J)
    // 0x88fc (UTF-16BE)
    if (argCheck == '裼') {
        return true;
    }
    // No.6063
    // 説明:e5e8
    // 0xe5e8 (Windows-31J)
    // 0x88f4 (UTF-16BE)
    if (argCheck == '裴') {
        return true;
    }
    // No.6064
    // 説明:e5e9
    // 0xe5e9 (Windows-31J)
    // 0x88e8 (UTF-16BE)
    if (argCheck == '裨') {
        return true;
    }
    // No.6065
    // 説明:e5ea
    // 0xe5ea (Windows-31J)
    // 0x88f2 (UTF-16BE)
    if (argCheck == '裲') {
        return true;
    }
    // No.6066
    // 説明:e5eb
    // 0xe5eb (Windows-31J)
    // 0x8904 (UTF-16BE)
    if (argCheck == '褄') {
        return true;
    }
    // No.6067
    // 説明:e5ec
    // 0xe5ec (Windows-31J)
    // 0x890c (UTF-16BE)
    if (argCheck == '褌') {
        return true;
    }
    // No.6068
    // 説明:e5ed
    // 0xe5ed (Windows-31J)
    // 0x890a (UTF-16BE)
    if (argCheck == '褊') {
        return true;
    }
    // No.6069
    // 説明:e5ee
    // 0xe5ee (Windows-31J)
    // 0x8913 (UTF-16BE)
    if (argCheck == '褓') {
        return true;
    }
    // No.6070
    // 説明:e5ef
    // 0xe5ef (Windows-31J)
    // 0x8943 (UTF-16BE)
    if (argCheck == '襃') {
        return true;
    }
    // No.6071
    // 説明:e5f0
    // 0xe5f0 (Windows-31J)
    // 0x891e (UTF-16BE)
    if (argCheck == '褞') {
        return true;
    }
    // No.6072
    // 説明:e5f1
    // 0xe5f1 (Windows-31J)
    // 0x8925 (UTF-16BE)
    if (argCheck == '褥') {
        return true;
    }
    // No.6073
    // 説明:e5f2
    // 0xe5f2 (Windows-31J)
    // 0x892a (UTF-16BE)
    if (argCheck == '褪') {
        return true;
    }
    // No.6074
    // 説明:e5f3
    // 0xe5f3 (Windows-31J)
    // 0x892b (UTF-16BE)
    if (argCheck == '褫') {
        return true;
    }
    // No.6075
    // 説明:e5f4
    // 0xe5f4 (Windows-31J)
    // 0x8941 (UTF-16BE)
    if (argCheck == '襁') {
        return true;
    }
    // No.6076
    // 説明:e5f5
    // 0xe5f5 (Windows-31J)
    // 0x8944 (UTF-16BE)
    if (argCheck == '襄') {
        return true;
    }
    // No.6077
    // 説明:e5f6
    // 0xe5f6 (Windows-31J)
    // 0x893b (UTF-16BE)
    if (argCheck == '褻') {
        return true;
    }
    // No.6078
    // 説明:e5f7
    // 0xe5f7 (Windows-31J)
    // 0x8936 (UTF-16BE)
    if (argCheck == '褶') {
        return true;
    }
    // No.6079
    // 説明:e5f8
    // 0xe5f8 (Windows-31J)
    // 0x8938 (UTF-16BE)
    if (argCheck == '褸') {
        return true;
    }
    // No.6080
    // 説明:e5f9
    // 0xe5f9 (Windows-31J)
    // 0x894c (UTF-16BE)
    if (argCheck == '襌') {
        return true;
    }
    // No.6081
    // 説明:e5fa
    // 0xe5fa (Windows-31J)
    // 0x891d (UTF-16BE)
    if (argCheck == '褝') {
        return true;
    }
    // No.6082
    // 説明:e5fb
    // 0xe5fb (Windows-31J)
    // 0x8960 (UTF-16BE)
    if (argCheck == '襠') {
        return true;
    }
    // No.6083
    // 説明:e5fc
    // 0xe5fc (Windows-31J)
    // 0x895e (UTF-16BE)
    if (argCheck == '襞') {
        return true;
    }
    // No.6084
    // 説明:e640
    // 0xe640 (Windows-31J)
    // 0x8966 (UTF-16BE)
    if (argCheck == '襦') {
        return true;
    }
    // No.6085
    // 説明:e641
    // 0xe641 (Windows-31J)
    // 0x8964 (UTF-16BE)
    if (argCheck == '襤') {
        return true;
    }
    // No.6086
    // 説明:e642
    // 0xe642 (Windows-31J)
    // 0x896d (UTF-16BE)
    if (argCheck == '襭') {
        return true;
    }
    // No.6087
    // 説明:e643
    // 0xe643 (Windows-31J)
    // 0x896a (UTF-16BE)
    if (argCheck == '襪') {
        return true;
    }
    // No.6088
    // 説明:e644
    // 0xe644 (Windows-31J)
    // 0x896f (UTF-16BE)
    if (argCheck == '襯') {
        return true;
    }
    // No.6089
    // 説明:e645
    // 0xe645 (Windows-31J)
    // 0x8974 (UTF-16BE)
    if (argCheck == '襴') {
        return true;
    }
    // No.6090
    // 説明:e646
    // 0xe646 (Windows-31J)
    // 0x8977 (UTF-16BE)
    if (argCheck == '襷') {
        return true;
    }
    // No.6091
    // 説明:e647
    // 0xe647 (Windows-31J)
    // 0x897e (UTF-16BE)
    if (argCheck == '襾') {
        return true;
    }
    // No.6092
    // 説明:e648
    // 0xe648 (Windows-31J)
    // 0x8983 (UTF-16BE)
    if (argCheck == '覃') {
        return true;
    }
    // No.6093
    // 説明:e649
    // 0xe649 (Windows-31J)
    // 0x8988 (UTF-16BE)
    if (argCheck == '覈') {
        return true;
    }
    // No.6094
    // 説明:e64a
    // 0xe64a (Windows-31J)
    // 0x898a (UTF-16BE)
    if (argCheck == '覊') {
        return true;
    }
    // No.6095
    // 説明:e64b
    // 0xe64b (Windows-31J)
    // 0x8993 (UTF-16BE)
    if (argCheck == '覓') {
        return true;
    }
    // No.6096
    // 説明:e64c
    // 0xe64c (Windows-31J)
    // 0x8998 (UTF-16BE)
    if (argCheck == '覘') {
        return true;
    }
    // No.6097
    // 説明:e64d
    // 0xe64d (Windows-31J)
    // 0x89a1 (UTF-16BE)
    if (argCheck == '覡') {
        return true;
    }
    // No.6098
    // 説明:e64e
    // 0xe64e (Windows-31J)
    // 0x89a9 (UTF-16BE)
    if (argCheck == '覩') {
        return true;
    }
    // No.6099
    // 説明:e64f
    // 0xe64f (Windows-31J)
    // 0x89a6 (UTF-16BE)
    if (argCheck == '覦') {
        return true;
    }
    // No.6100
    // 説明:e650
    // 0xe650 (Windows-31J)
    // 0x89ac (UTF-16BE)
    if (argCheck == '覬') {
        return true;
    }
    // No.6101
    // 説明:e651
    // 0xe651 (Windows-31J)
    // 0x89af (UTF-16BE)
    if (argCheck == '覯') {
        return true;
    }
    // No.6102
    // 説明:e652
    // 0xe652 (Windows-31J)
    // 0x89b2 (UTF-16BE)
    if (argCheck == '覲') {
        return true;
    }
    // No.6103
    // 説明:e653
    // 0xe653 (Windows-31J)
    // 0x89ba (UTF-16BE)
    if (argCheck == '覺') {
        return true;
    }
    // No.6104
    // 説明:e654
    // 0xe654 (Windows-31J)
    // 0x89bd (UTF-16BE)
    if (argCheck == '覽') {
        return true;
    }
    // No.6105
    // 説明:e655
    // 0xe655 (Windows-31J)
    // 0x89bf (UTF-16BE)
    if (argCheck == '覿') {
        return true;
    }
    // No.6106
    // 説明:e656
    // 0xe656 (Windows-31J)
    // 0x89c0 (UTF-16BE)
    if (argCheck == '觀') {
        return true;
    }
    // No.6107
    // 説明:e657
    // 0xe657 (Windows-31J)
    // 0x89da (UTF-16BE)
    if (argCheck == '觚') {
        return true;
    }
    // No.6108
    // 説明:e658
    // 0xe658 (Windows-31J)
    // 0x89dc (UTF-16BE)
    if (argCheck == '觜') {
        return true;
    }
    // No.6109
    // 説明:e659
    // 0xe659 (Windows-31J)
    // 0x89dd (UTF-16BE)
    if (argCheck == '觝') {
        return true;
    }
    // No.6110
    // 説明:e65a
    // 0xe65a (Windows-31J)
    // 0x89e7 (UTF-16BE)
    if (argCheck == '觧') {
        return true;
    }
    // No.6111
    // 説明:e65b
    // 0xe65b (Windows-31J)
    // 0x89f4 (UTF-16BE)
    if (argCheck == '觴') {
        return true;
    }
    // No.6112
    // 説明:e65c
    // 0xe65c (Windows-31J)
    // 0x89f8 (UTF-16BE)
    if (argCheck == '觸') {
        return true;
    }
    // No.6113
    // 説明:e65d
    // 0xe65d (Windows-31J)
    // 0x8a03 (UTF-16BE)
    if (argCheck == '訃') {
        return true;
    }
    // No.6114
    // 説明:e65e
    // 0xe65e (Windows-31J)
    // 0x8a16 (UTF-16BE)
    if (argCheck == '訖') {
        return true;
    }
    // No.6115
    // 説明:e65f
    // 0xe65f (Windows-31J)
    // 0x8a10 (UTF-16BE)
    if (argCheck == '訐') {
        return true;
    }
    // No.6116
    // 説明:e660
    // 0xe660 (Windows-31J)
    // 0x8a0c (UTF-16BE)
    if (argCheck == '訌') {
        return true;
    }
    // No.6117
    // 説明:e661
    // 0xe661 (Windows-31J)
    // 0x8a1b (UTF-16BE)
    if (argCheck == '訛') {
        return true;
    }
    // No.6118
    // 説明:e662
    // 0xe662 (Windows-31J)
    // 0x8a1d (UTF-16BE)
    if (argCheck == '訝') {
        return true;
    }
    // No.6119
    // 説明:e663
    // 0xe663 (Windows-31J)
    // 0x8a25 (UTF-16BE)
    if (argCheck == '訥') {
        return true;
    }
    // No.6120
    // 説明:e664
    // 0xe664 (Windows-31J)
    // 0x8a36 (UTF-16BE)
    if (argCheck == '訶') {
        return true;
    }
    // No.6121
    // 説明:e665
    // 0xe665 (Windows-31J)
    // 0x8a41 (UTF-16BE)
    if (argCheck == '詁') {
        return true;
    }
    // No.6122
    // 説明:e666
    // 0xe666 (Windows-31J)
    // 0x8a5b (UTF-16BE)
    if (argCheck == '詛') {
        return true;
    }
    // No.6123
    // 説明:e667
    // 0xe667 (Windows-31J)
    // 0x8a52 (UTF-16BE)
    if (argCheck == '詒') {
        return true;
    }
    // No.6124
    // 説明:e668
    // 0xe668 (Windows-31J)
    // 0x8a46 (UTF-16BE)
    if (argCheck == '詆') {
        return true;
    }
    // No.6125
    // 説明:e669
    // 0xe669 (Windows-31J)
    // 0x8a48 (UTF-16BE)
    if (argCheck == '詈') {
        return true;
    }
    // No.6126
    // 説明:e66a
    // 0xe66a (Windows-31J)
    // 0x8a7c (UTF-16BE)
    if (argCheck == '詼') {
        return true;
    }
    // No.6127
    // 説明:e66b
    // 0xe66b (Windows-31J)
    // 0x8a6d (UTF-16BE)
    if (argCheck == '詭') {
        return true;
    }
    // No.6128
    // 説明:e66c
    // 0xe66c (Windows-31J)
    // 0x8a6c (UTF-16BE)
    if (argCheck == '詬') {
        return true;
    }
    // No.6129
    // 説明:e66d
    // 0xe66d (Windows-31J)
    // 0x8a62 (UTF-16BE)
    if (argCheck == '詢') {
        return true;
    }
    // No.6130
    // 説明:e66e
    // 0xe66e (Windows-31J)
    // 0x8a85 (UTF-16BE)
    if (argCheck == '誅') {
        return true;
    }
    // No.6131
    // 説明:e66f
    // 0xe66f (Windows-31J)
    // 0x8a82 (UTF-16BE)
    if (argCheck == '誂') {
        return true;
    }
    // No.6132
    // 説明:e670
    // 0xe670 (Windows-31J)
    // 0x8a84 (UTF-16BE)
    if (argCheck == '誄') {
        return true;
    }
    // No.6133
    // 説明:e671
    // 0xe671 (Windows-31J)
    // 0x8aa8 (UTF-16BE)
    if (argCheck == '誨') {
        return true;
    }
    // No.6134
    // 説明:e672
    // 0xe672 (Windows-31J)
    // 0x8aa1 (UTF-16BE)
    if (argCheck == '誡') {
        return true;
    }
    // No.6135
    // 説明:e673
    // 0xe673 (Windows-31J)
    // 0x8a91 (UTF-16BE)
    if (argCheck == '誑') {
        return true;
    }
    // No.6136
    // 説明:e674
    // 0xe674 (Windows-31J)
    // 0x8aa5 (UTF-16BE)
    if (argCheck == '誥') {
        return true;
    }
    // No.6137
    // 説明:e675
    // 0xe675 (Windows-31J)
    // 0x8aa6 (UTF-16BE)
    if (argCheck == '誦') {
        return true;
    }
    // No.6138
    // 説明:e676
    // 0xe676 (Windows-31J)
    // 0x8a9a (UTF-16BE)
    if (argCheck == '誚') {
        return true;
    }
    // No.6139
    // 説明:e677
    // 0xe677 (Windows-31J)
    // 0x8aa3 (UTF-16BE)
    if (argCheck == '誣') {
        return true;
    }
    // No.6140
    // 説明:e678
    // 0xe678 (Windows-31J)
    // 0x8ac4 (UTF-16BE)
    if (argCheck == '諄') {
        return true;
    }
    // No.6141
    // 説明:e679
    // 0xe679 (Windows-31J)
    // 0x8acd (UTF-16BE)
    if (argCheck == '諍') {
        return true;
    }
    // No.6142
    // 説明:e67a
    // 0xe67a (Windows-31J)
    // 0x8ac2 (UTF-16BE)
    if (argCheck == '諂') {
        return true;
    }
    // No.6143
    // 説明:e67b
    // 0xe67b (Windows-31J)
    // 0x8ada (UTF-16BE)
    if (argCheck == '諚') {
        return true;
    }
    // No.6144
    // 説明:e67c
    // 0xe67c (Windows-31J)
    // 0x8aeb (UTF-16BE)
    if (argCheck == '諫') {
        return true;
    }
    // No.6145
    // 説明:e67d
    // 0xe67d (Windows-31J)
    // 0x8af3 (UTF-16BE)
    if (argCheck == '諳') {
        return true;
    }
    // No.6146
    // 説明:e67e
    // 0xe67e (Windows-31J)
    // 0x8ae7 (UTF-16BE)
    if (argCheck == '諧') {
        return true;
    }
    // No.6147
    // 説明:e680
    // 0xe680 (Windows-31J)
    // 0x8ae4 (UTF-16BE)
    if (argCheck == '諤') {
        return true;
    }
    // No.6148
    // 説明:e681
    // 0xe681 (Windows-31J)
    // 0x8af1 (UTF-16BE)
    if (argCheck == '諱') {
        return true;
    }
    // No.6149
    // 説明:e682
    // 0xe682 (Windows-31J)
    // 0x8b14 (UTF-16BE)
    if (argCheck == '謔') {
        return true;
    }
    // No.6150
    // 説明:e683
    // 0xe683 (Windows-31J)
    // 0x8ae0 (UTF-16BE)
    if (argCheck == '諠') {
        return true;
    }
    // No.6151
    // 説明:e684
    // 0xe684 (Windows-31J)
    // 0x8ae2 (UTF-16BE)
    if (argCheck == '諢') {
        return true;
    }
    // No.6152
    // 説明:e685
    // 0xe685 (Windows-31J)
    // 0x8af7 (UTF-16BE)
    if (argCheck == '諷') {
        return true;
    }
    // No.6153
    // 説明:e686
    // 0xe686 (Windows-31J)
    // 0x8ade (UTF-16BE)
    if (argCheck == '諞') {
        return true;
    }
    // No.6154
    // 説明:e687
    // 0xe687 (Windows-31J)
    // 0x8adb (UTF-16BE)
    if (argCheck == '諛') {
        return true;
    }
    // No.6155
    // 説明:e688
    // 0xe688 (Windows-31J)
    // 0x8b0c (UTF-16BE)
    if (argCheck == '謌') {
        return true;
    }
    // No.6156
    // 説明:e689
    // 0xe689 (Windows-31J)
    // 0x8b07 (UTF-16BE)
    if (argCheck == '謇') {
        return true;
    }
    // No.6157
    // 説明:e68a
    // 0xe68a (Windows-31J)
    // 0x8b1a (UTF-16BE)
    if (argCheck == '謚') {
        return true;
    }
    // No.6158
    // 説明:e68b
    // 0xe68b (Windows-31J)
    // 0x8ae1 (UTF-16BE)
    if (argCheck == '諡') {
        return true;
    }
    // No.6159
    // 説明:e68c
    // 0xe68c (Windows-31J)
    // 0x8b16 (UTF-16BE)
    if (argCheck == '謖') {
        return true;
    }
    // No.6160
    // 説明:e68d
    // 0xe68d (Windows-31J)
    // 0x8b10 (UTF-16BE)
    if (argCheck == '謐') {
        return true;
    }
    // No.6161
    // 説明:e68e
    // 0xe68e (Windows-31J)
    // 0x8b17 (UTF-16BE)
    if (argCheck == '謗') {
        return true;
    }
    // No.6162
    // 説明:e68f
    // 0xe68f (Windows-31J)
    // 0x8b20 (UTF-16BE)
    if (argCheck == '謠') {
        return true;
    }
    // No.6163
    // 説明:e690
    // 0xe690 (Windows-31J)
    // 0x8b33 (UTF-16BE)
    if (argCheck == '謳') {
        return true;
    }
    // No.6164
    // 説明:e691
    // 0xe691 (Windows-31J)
    // 0x97ab (UTF-16BE)
    if (argCheck == '鞫') {
        return true;
    }
    // No.6165
    // 説明:e692
    // 0xe692 (Windows-31J)
    // 0x8b26 (UTF-16BE)
    if (argCheck == '謦') {
        return true;
    }
    // No.6166
    // 説明:e693
    // 0xe693 (Windows-31J)
    // 0x8b2b (UTF-16BE)
    if (argCheck == '謫') {
        return true;
    }
    // No.6167
    // 説明:e694
    // 0xe694 (Windows-31J)
    // 0x8b3e (UTF-16BE)
    if (argCheck == '謾') {
        return true;
    }
    // No.6168
    // 説明:e695
    // 0xe695 (Windows-31J)
    // 0x8b28 (UTF-16BE)
    if (argCheck == '謨') {
        return true;
    }
    // No.6169
    // 説明:e696
    // 0xe696 (Windows-31J)
    // 0x8b41 (UTF-16BE)
    if (argCheck == '譁') {
        return true;
    }
    // No.6170
    // 説明:e697
    // 0xe697 (Windows-31J)
    // 0x8b4c (UTF-16BE)
    if (argCheck == '譌') {
        return true;
    }
    // No.6171
    // 説明:e698
    // 0xe698 (Windows-31J)
    // 0x8b4f (UTF-16BE)
    if (argCheck == '譏') {
        return true;
    }
    // No.6172
    // 説明:e699
    // 0xe699 (Windows-31J)
    // 0x8b4e (UTF-16BE)
    if (argCheck == '譎') {
        return true;
    }
    // No.6173
    // 説明:e69a
    // 0xe69a (Windows-31J)
    // 0x8b49 (UTF-16BE)
    if (argCheck == '證') {
        return true;
    }
    // No.6174
    // 説明:e69b
    // 0xe69b (Windows-31J)
    // 0x8b56 (UTF-16BE)
    if (argCheck == '譖') {
        return true;
    }
    // No.6175
    // 説明:e69c
    // 0xe69c (Windows-31J)
    // 0x8b5b (UTF-16BE)
    if (argCheck == '譛') {
        return true;
    }
    // No.6176
    // 説明:e69d
    // 0xe69d (Windows-31J)
    // 0x8b5a (UTF-16BE)
    if (argCheck == '譚') {
        return true;
    }
    // No.6177
    // 説明:e69e
    // 0xe69e (Windows-31J)
    // 0x8b6b (UTF-16BE)
    if (argCheck == '譫') {
        return true;
    }
    // No.6178
    // 説明:e69f
    // 0xe69f (Windows-31J)
    // 0x8b5f (UTF-16BE)
    if (argCheck == '譟') {
        return true;
    }
    // No.6179
    // 説明:e6a0
    // 0xe6a0 (Windows-31J)
    // 0x8b6c (UTF-16BE)
    if (argCheck == '譬') {
        return true;
    }
    // No.6180
    // 説明:e6a1
    // 0xe6a1 (Windows-31J)
    // 0x8b6f (UTF-16BE)
    if (argCheck == '譯') {
        return true;
    }
    // No.6181
    // 説明:e6a2
    // 0xe6a2 (Windows-31J)
    // 0x8b74 (UTF-16BE)
    if (argCheck == '譴') {
        return true;
    }
    // No.6182
    // 説明:e6a3
    // 0xe6a3 (Windows-31J)
    // 0x8b7d (UTF-16BE)
    if (argCheck == '譽') {
        return true;
    }
    // No.6183
    // 説明:e6a4
    // 0xe6a4 (Windows-31J)
    // 0x8b80 (UTF-16BE)
    if (argCheck == '讀') {
        return true;
    }
    // No.6184
    // 説明:e6a5
    // 0xe6a5 (Windows-31J)
    // 0x8b8c (UTF-16BE)
    if (argCheck == '讌') {
        return true;
    }
    // No.6185
    // 説明:e6a6
    // 0xe6a6 (Windows-31J)
    // 0x8b8e (UTF-16BE)
    if (argCheck == '讎') {
        return true;
    }
    // No.6186
    // 説明:e6a7
    // 0xe6a7 (Windows-31J)
    // 0x8b92 (UTF-16BE)
    if (argCheck == '讒') {
        return true;
    }
    // No.6187
    // 説明:e6a8
    // 0xe6a8 (Windows-31J)
    // 0x8b93 (UTF-16BE)
    if (argCheck == '讓') {
        return true;
    }
    // No.6188
    // 説明:e6a9
    // 0xe6a9 (Windows-31J)
    // 0x8b96 (UTF-16BE)
    if (argCheck == '讖') {
        return true;
    }
    // No.6189
    // 説明:e6aa
    // 0xe6aa (Windows-31J)
    // 0x8b99 (UTF-16BE)
    if (argCheck == '讙') {
        return true;
    }
    // No.6190
    // 説明:e6ab
    // 0xe6ab (Windows-31J)
    // 0x8b9a (UTF-16BE)
    if (argCheck == '讚') {
        return true;
    }
    // No.6191
    // 説明:e6ac
    // 0xe6ac (Windows-31J)
    // 0x8c3a (UTF-16BE)
    if (argCheck == '谺') {
        return true;
    }
    // No.6192
    // 説明:e6ad
    // 0xe6ad (Windows-31J)
    // 0x8c41 (UTF-16BE)
    if (argCheck == '豁') {
        return true;
    }
    // No.6193
    // 説明:e6ae
    // 0xe6ae (Windows-31J)
    // 0x8c3f (UTF-16BE)
    if (argCheck == '谿') {
        return true;
    }
    // No.6194
    // 説明:e6af
    // 0xe6af (Windows-31J)
    // 0x8c48 (UTF-16BE)
    if (argCheck == '豈') {
        return true;
    }
    // No.6195
    // 説明:e6b0
    // 0xe6b0 (Windows-31J)
    // 0x8c4c (UTF-16BE)
    if (argCheck == '豌') {
        return true;
    }
    // No.6196
    // 説明:e6b1
    // 0xe6b1 (Windows-31J)
    // 0x8c4e (UTF-16BE)
    if (argCheck == '豎') {
        return true;
    }
    // No.6197
    // 説明:e6b2
    // 0xe6b2 (Windows-31J)
    // 0x8c50 (UTF-16BE)
    if (argCheck == '豐') {
        return true;
    }
    // No.6198
    // 説明:e6b3
    // 0xe6b3 (Windows-31J)
    // 0x8c55 (UTF-16BE)
    if (argCheck == '豕') {
        return true;
    }
    // No.6199
    // 説明:e6b4
    // 0xe6b4 (Windows-31J)
    // 0x8c62 (UTF-16BE)
    if (argCheck == '豢') {
        return true;
    }
    // No.6200
    // 説明:e6b5
    // 0xe6b5 (Windows-31J)
    // 0x8c6c (UTF-16BE)
    if (argCheck == '豬') {
        return true;
    }
    // No.6201
    // 説明:e6b6
    // 0xe6b6 (Windows-31J)
    // 0x8c78 (UTF-16BE)
    if (argCheck == '豸') {
        return true;
    }
    // No.6202
    // 説明:e6b7
    // 0xe6b7 (Windows-31J)
    // 0x8c7a (UTF-16BE)
    if (argCheck == '豺') {
        return true;
    }
    // No.6203
    // 説明:e6b8
    // 0xe6b8 (Windows-31J)
    // 0x8c82 (UTF-16BE)
    if (argCheck == '貂') {
        return true;
    }
    // No.6204
    // 説明:e6b9
    // 0xe6b9 (Windows-31J)
    // 0x8c89 (UTF-16BE)
    if (argCheck == '貉') {
        return true;
    }
    // No.6205
    // 説明:e6ba
    // 0xe6ba (Windows-31J)
    // 0x8c85 (UTF-16BE)
    if (argCheck == '貅') {
        return true;
    }
    // No.6206
    // 説明:e6bb
    // 0xe6bb (Windows-31J)
    // 0x8c8a (UTF-16BE)
    if (argCheck == '貊') {
        return true;
    }
    // No.6207
    // 説明:e6bc
    // 0xe6bc (Windows-31J)
    // 0x8c8d (UTF-16BE)
    if (argCheck == '貍') {
        return true;
    }
    // No.6208
    // 説明:e6bd
    // 0xe6bd (Windows-31J)
    // 0x8c8e (UTF-16BE)
    if (argCheck == '貎') {
        return true;
    }
    // No.6209
    // 説明:e6be
    // 0xe6be (Windows-31J)
    // 0x8c94 (UTF-16BE)
    if (argCheck == '貔') {
        return true;
    }
    // No.6210
    // 説明:e6bf
    // 0xe6bf (Windows-31J)
    // 0x8c7c (UTF-16BE)
    if (argCheck == '豼') {
        return true;
    }
    // No.6211
    // 説明:e6c0
    // 0xe6c0 (Windows-31J)
    // 0x8c98 (UTF-16BE)
    if (argCheck == '貘') {
        return true;
    }
    // No.6212
    // 説明:e6c1
    // 0xe6c1 (Windows-31J)
    // 0x621d (UTF-16BE)
    if (argCheck == '戝') {
        return true;
    }
    // No.6213
    // 説明:e6c2
    // 0xe6c2 (Windows-31J)
    // 0x8cad (UTF-16BE)
    if (argCheck == '貭') {
        return true;
    }
    // No.6214
    // 説明:e6c3
    // 0xe6c3 (Windows-31J)
    // 0x8caa (UTF-16BE)
    if (argCheck == '貪') {
        return true;
    }
    // No.6215
    // 説明:e6c4
    // 0xe6c4 (Windows-31J)
    // 0x8cbd (UTF-16BE)
    if (argCheck == '貽') {
        return true;
    }
    // No.6216
    // 説明:e6c5
    // 0xe6c5 (Windows-31J)
    // 0x8cb2 (UTF-16BE)
    if (argCheck == '貲') {
        return true;
    }
    // No.6217
    // 説明:e6c6
    // 0xe6c6 (Windows-31J)
    // 0x8cb3 (UTF-16BE)
    if (argCheck == '貳') {
        return true;
    }
    // No.6218
    // 説明:e6c7
    // 0xe6c7 (Windows-31J)
    // 0x8cae (UTF-16BE)
    if (argCheck == '貮') {
        return true;
    }
    // No.6219
    // 説明:e6c8
    // 0xe6c8 (Windows-31J)
    // 0x8cb6 (UTF-16BE)
    if (argCheck == '貶') {
        return true;
    }
    // No.6220
    // 説明:e6c9
    // 0xe6c9 (Windows-31J)
    // 0x8cc8 (UTF-16BE)
    if (argCheck == '賈') {
        return true;
    }
    // No.6221
    // 説明:e6ca
    // 0xe6ca (Windows-31J)
    // 0x8cc1 (UTF-16BE)
    if (argCheck == '賁') {
        return true;
    }
    // No.6222
    // 説明:e6cb
    // 0xe6cb (Windows-31J)
    // 0x8ce4 (UTF-16BE)
    if (argCheck == '賤') {
        return true;
    }
    // No.6223
    // 説明:e6cc
    // 0xe6cc (Windows-31J)
    // 0x8ce3 (UTF-16BE)
    if (argCheck == '賣') {
        return true;
    }
    // No.6224
    // 説明:e6cd
    // 0xe6cd (Windows-31J)
    // 0x8cda (UTF-16BE)
    if (argCheck == '賚') {
        return true;
    }
    // No.6225
    // 説明:e6ce
    // 0xe6ce (Windows-31J)
    // 0x8cfd (UTF-16BE)
    if (argCheck == '賽') {
        return true;
    }
    // No.6226
    // 説明:e6cf
    // 0xe6cf (Windows-31J)
    // 0x8cfa (UTF-16BE)
    if (argCheck == '賺') {
        return true;
    }
    // No.6227
    // 説明:e6d0
    // 0xe6d0 (Windows-31J)
    // 0x8cfb (UTF-16BE)
    if (argCheck == '賻') {
        return true;
    }
    // No.6228
    // 説明:e6d1
    // 0xe6d1 (Windows-31J)
    // 0x8d04 (UTF-16BE)
    if (argCheck == '贄') {
        return true;
    }
    // No.6229
    // 説明:e6d2
    // 0xe6d2 (Windows-31J)
    // 0x8d05 (UTF-16BE)
    if (argCheck == '贅') {
        return true;
    }
    // No.6230
    // 説明:e6d3
    // 0xe6d3 (Windows-31J)
    // 0x8d0a (UTF-16BE)
    if (argCheck == '贊') {
        return true;
    }
    // No.6231
    // 説明:e6d4
    // 0xe6d4 (Windows-31J)
    // 0x8d07 (UTF-16BE)
    if (argCheck == '贇') {
        return true;
    }
    // No.6232
    // 説明:e6d5
    // 0xe6d5 (Windows-31J)
    // 0x8d0f (UTF-16BE)
    if (argCheck == '贏') {
        return true;
    }
    // No.6233
    // 説明:e6d6
    // 0xe6d6 (Windows-31J)
    // 0x8d0d (UTF-16BE)
    if (argCheck == '贍') {
        return true;
    }
    // No.6234
    // 説明:e6d7
    // 0xe6d7 (Windows-31J)
    // 0x8d10 (UTF-16BE)
    if (argCheck == '贐') {
        return true;
    }
    // No.6235
    // 説明:e6d8
    // 0xe6d8 (Windows-31J)
    // 0x9f4e (UTF-16BE)
    if (argCheck == '齎') {
        return true;
    }
    // No.6236
    // 説明:e6d9
    // 0xe6d9 (Windows-31J)
    // 0x8d13 (UTF-16BE)
    if (argCheck == '贓') {
        return true;
    }
    // No.6237
    // 説明:e6da
    // 0xe6da (Windows-31J)
    // 0x8ccd (UTF-16BE)
    if (argCheck == '賍') {
        return true;
    }
    // No.6238
    // 説明:e6db
    // 0xe6db (Windows-31J)
    // 0x8d14 (UTF-16BE)
    if (argCheck == '贔') {
        return true;
    }
    // No.6239
    // 説明:e6dc
    // 0xe6dc (Windows-31J)
    // 0x8d16 (UTF-16BE)
    if (argCheck == '贖') {
        return true;
    }
    // No.6240
    // 説明:e6dd
    // 0xe6dd (Windows-31J)
    // 0x8d67 (UTF-16BE)
    if (argCheck == '赧') {
        return true;
    }
    // No.6241
    // 説明:e6de
    // 0xe6de (Windows-31J)
    // 0x8d6d (UTF-16BE)
    if (argCheck == '赭') {
        return true;
    }
    // No.6242
    // 説明:e6df
    // 0xe6df (Windows-31J)
    // 0x8d71 (UTF-16BE)
    if (argCheck == '赱') {
        return true;
    }
    // No.6243
    // 説明:e6e0
    // 0xe6e0 (Windows-31J)
    // 0x8d73 (UTF-16BE)
    if (argCheck == '赳') {
        return true;
    }
    // No.6244
    // 説明:e6e1
    // 0xe6e1 (Windows-31J)
    // 0x8d81 (UTF-16BE)
    if (argCheck == '趁') {
        return true;
    }
    // No.6245
    // 説明:e6e2
    // 0xe6e2 (Windows-31J)
    // 0x8d99 (UTF-16BE)
    if (argCheck == '趙') {
        return true;
    }
    // No.6246
    // 説明:e6e3
    // 0xe6e3 (Windows-31J)
    // 0x8dc2 (UTF-16BE)
    if (argCheck == '跂') {
        return true;
    }
    // No.6247
    // 説明:e6e4
    // 0xe6e4 (Windows-31J)
    // 0x8dbe (UTF-16BE)
    if (argCheck == '趾') {
        return true;
    }
    // No.6248
    // 説明:e6e5
    // 0xe6e5 (Windows-31J)
    // 0x8dba (UTF-16BE)
    if (argCheck == '趺') {
        return true;
    }
    // No.6249
    // 説明:e6e6
    // 0xe6e6 (Windows-31J)
    // 0x8dcf (UTF-16BE)
    if (argCheck == '跏') {
        return true;
    }
    // No.6250
    // 説明:e6e7
    // 0xe6e7 (Windows-31J)
    // 0x8dda (UTF-16BE)
    if (argCheck == '跚') {
        return true;
    }
    // No.6251
    // 説明:e6e8
    // 0xe6e8 (Windows-31J)
    // 0x8dd6 (UTF-16BE)
    if (argCheck == '跖') {
        return true;
    }
    // No.6252
    // 説明:e6e9
    // 0xe6e9 (Windows-31J)
    // 0x8dcc (UTF-16BE)
    if (argCheck == '跌') {
        return true;
    }
    // No.6253
    // 説明:e6ea
    // 0xe6ea (Windows-31J)
    // 0x8ddb (UTF-16BE)
    if (argCheck == '跛') {
        return true;
    }
    // No.6254
    // 説明:e6eb
    // 0xe6eb (Windows-31J)
    // 0x8dcb (UTF-16BE)
    if (argCheck == '跋') {
        return true;
    }
    // No.6255
    // 説明:e6ec
    // 0xe6ec (Windows-31J)
    // 0x8dea (UTF-16BE)
    if (argCheck == '跪') {
        return true;
    }
    // No.6256
    // 説明:e6ed
    // 0xe6ed (Windows-31J)
    // 0x8deb (UTF-16BE)
    if (argCheck == '跫') {
        return true;
    }
    // No.6257
    // 説明:e6ee
    // 0xe6ee (Windows-31J)
    // 0x8ddf (UTF-16BE)
    if (argCheck == '跟') {
        return true;
    }
    // No.6258
    // 説明:e6ef
    // 0xe6ef (Windows-31J)
    // 0x8de3 (UTF-16BE)
    if (argCheck == '跣') {
        return true;
    }
    // No.6259
    // 説明:e6f0
    // 0xe6f0 (Windows-31J)
    // 0x8dfc (UTF-16BE)
    if (argCheck == '跼') {
        return true;
    }
    // No.6260
    // 説明:e6f1
    // 0xe6f1 (Windows-31J)
    // 0x8e08 (UTF-16BE)
    if (argCheck == '踈') {
        return true;
    }
    // No.6261
    // 説明:e6f2
    // 0xe6f2 (Windows-31J)
    // 0x8e09 (UTF-16BE)
    if (argCheck == '踉') {
        return true;
    }
    // No.6262
    // 説明:e6f3
    // 0xe6f3 (Windows-31J)
    // 0x8dff (UTF-16BE)
    if (argCheck == '跿') {
        return true;
    }
    // No.6263
    // 説明:e6f4
    // 0xe6f4 (Windows-31J)
    // 0x8e1d (UTF-16BE)
    if (argCheck == '踝') {
        return true;
    }
    // No.6264
    // 説明:e6f5
    // 0xe6f5 (Windows-31J)
    // 0x8e1e (UTF-16BE)
    if (argCheck == '踞') {
        return true;
    }
    // No.6265
    // 説明:e6f6
    // 0xe6f6 (Windows-31J)
    // 0x8e10 (UTF-16BE)
    if (argCheck == '踐') {
        return true;
    }
    // No.6266
    // 説明:e6f7
    // 0xe6f7 (Windows-31J)
    // 0x8e1f (UTF-16BE)
    if (argCheck == '踟') {
        return true;
    }
    // No.6267
    // 説明:e6f8
    // 0xe6f8 (Windows-31J)
    // 0x8e42 (UTF-16BE)
    if (argCheck == '蹂') {
        return true;
    }
    // No.6268
    // 説明:e6f9
    // 0xe6f9 (Windows-31J)
    // 0x8e35 (UTF-16BE)
    if (argCheck == '踵') {
        return true;
    }
    // No.6269
    // 説明:e6fa
    // 0xe6fa (Windows-31J)
    // 0x8e30 (UTF-16BE)
    if (argCheck == '踰') {
        return true;
    }
    // No.6270
    // 説明:e6fb
    // 0xe6fb (Windows-31J)
    // 0x8e34 (UTF-16BE)
    if (argCheck == '踴') {
        return true;
    }
    // No.6271
    // 説明:e6fc
    // 0xe6fc (Windows-31J)
    // 0x8e4a (UTF-16BE)
    if (argCheck == '蹊') {
        return true;
    }
    // No.6272
    // 説明:e740
    // 0xe740 (Windows-31J)
    // 0x8e47 (UTF-16BE)
    if (argCheck == '蹇') {
        return true;
    }
    // No.6273
    // 説明:e741
    // 0xe741 (Windows-31J)
    // 0x8e49 (UTF-16BE)
    if (argCheck == '蹉') {
        return true;
    }
    // No.6274
    // 説明:e742
    // 0xe742 (Windows-31J)
    // 0x8e4c (UTF-16BE)
    if (argCheck == '蹌') {
        return true;
    }
    // No.6275
    // 説明:e743
    // 0xe743 (Windows-31J)
    // 0x8e50 (UTF-16BE)
    if (argCheck == '蹐') {
        return true;
    }
    // No.6276
    // 説明:e744
    // 0xe744 (Windows-31J)
    // 0x8e48 (UTF-16BE)
    if (argCheck == '蹈') {
        return true;
    }
    // No.6277
    // 説明:e745
    // 0xe745 (Windows-31J)
    // 0x8e59 (UTF-16BE)
    if (argCheck == '蹙') {
        return true;
    }
    // No.6278
    // 説明:e746
    // 0xe746 (Windows-31J)
    // 0x8e64 (UTF-16BE)
    if (argCheck == '蹤') {
        return true;
    }
    // No.6279
    // 説明:e747
    // 0xe747 (Windows-31J)
    // 0x8e60 (UTF-16BE)
    if (argCheck == '蹠') {
        return true;
    }
    // No.6280
    // 説明:e748
    // 0xe748 (Windows-31J)
    // 0x8e2a (UTF-16BE)
    if (argCheck == '踪') {
        return true;
    }
    // No.6281
    // 説明:e749
    // 0xe749 (Windows-31J)
    // 0x8e63 (UTF-16BE)
    if (argCheck == '蹣') {
        return true;
    }
    // No.6282
    // 説明:e74a
    // 0xe74a (Windows-31J)
    // 0x8e55 (UTF-16BE)
    if (argCheck == '蹕') {
        return true;
    }
    // No.6283
    // 説明:e74b
    // 0xe74b (Windows-31J)
    // 0x8e76 (UTF-16BE)
    if (argCheck == '蹶') {
        return true;
    }
    // No.6284
    // 説明:e74c
    // 0xe74c (Windows-31J)
    // 0x8e72 (UTF-16BE)
    if (argCheck == '蹲') {
        return true;
    }
    // No.6285
    // 説明:e74d
    // 0xe74d (Windows-31J)
    // 0x8e7c (UTF-16BE)
    if (argCheck == '蹼') {
        return true;
    }
    // No.6286
    // 説明:e74e
    // 0xe74e (Windows-31J)
    // 0x8e81 (UTF-16BE)
    if (argCheck == '躁') {
        return true;
    }
    // No.6287
    // 説明:e74f
    // 0xe74f (Windows-31J)
    // 0x8e87 (UTF-16BE)
    if (argCheck == '躇') {
        return true;
    }
    // No.6288
    // 説明:e750
    // 0xe750 (Windows-31J)
    // 0x8e85 (UTF-16BE)
    if (argCheck == '躅') {
        return true;
    }
    // No.6289
    // 説明:e751
    // 0xe751 (Windows-31J)
    // 0x8e84 (UTF-16BE)
    if (argCheck == '躄') {
        return true;
    }
    // No.6290
    // 説明:e752
    // 0xe752 (Windows-31J)
    // 0x8e8b (UTF-16BE)
    if (argCheck == '躋') {
        return true;
    }
    // No.6291
    // 説明:e753
    // 0xe753 (Windows-31J)
    // 0x8e8a (UTF-16BE)
    if (argCheck == '躊') {
        return true;
    }
    // No.6292
    // 説明:e754
    // 0xe754 (Windows-31J)
    // 0x8e93 (UTF-16BE)
    if (argCheck == '躓') {
        return true;
    }
    // No.6293
    // 説明:e755
    // 0xe755 (Windows-31J)
    // 0x8e91 (UTF-16BE)
    if (argCheck == '躑') {
        return true;
    }
    // No.6294
    // 説明:e756
    // 0xe756 (Windows-31J)
    // 0x8e94 (UTF-16BE)
    if (argCheck == '躔') {
        return true;
    }
    // No.6295
    // 説明:e757
    // 0xe757 (Windows-31J)
    // 0x8e99 (UTF-16BE)
    if (argCheck == '躙') {
        return true;
    }
    // No.6296
    // 説明:e758
    // 0xe758 (Windows-31J)
    // 0x8eaa (UTF-16BE)
    if (argCheck == '躪') {
        return true;
    }
    // No.6297
    // 説明:e759
    // 0xe759 (Windows-31J)
    // 0x8ea1 (UTF-16BE)
    if (argCheck == '躡') {
        return true;
    }
    // No.6298
    // 説明:e75a
    // 0xe75a (Windows-31J)
    // 0x8eac (UTF-16BE)
    if (argCheck == '躬') {
        return true;
    }
    // No.6299
    // 説明:e75b
    // 0xe75b (Windows-31J)
    // 0x8eb0 (UTF-16BE)
    if (argCheck == '躰') {
        return true;
    }
    // No.6300
    // 説明:e75c
    // 0xe75c (Windows-31J)
    // 0x8ec6 (UTF-16BE)
    if (argCheck == '軆') {
        return true;
    }
    // No.6301
    // 説明:e75d
    // 0xe75d (Windows-31J)
    // 0x8eb1 (UTF-16BE)
    if (argCheck == '躱') {
        return true;
    }
    // No.6302
    // 説明:e75e
    // 0xe75e (Windows-31J)
    // 0x8ebe (UTF-16BE)
    if (argCheck == '躾') {
        return true;
    }
    // No.6303
    // 説明:e75f
    // 0xe75f (Windows-31J)
    // 0x8ec5 (UTF-16BE)
    if (argCheck == '軅') {
        return true;
    }
    // No.6304
    // 説明:e760
    // 0xe760 (Windows-31J)
    // 0x8ec8 (UTF-16BE)
    if (argCheck == '軈') {
        return true;
    }
    // No.6305
    // 説明:e761
    // 0xe761 (Windows-31J)
    // 0x8ecb (UTF-16BE)
    if (argCheck == '軋') {
        return true;
    }
    // No.6306
    // 説明:e762
    // 0xe762 (Windows-31J)
    // 0x8edb (UTF-16BE)
    if (argCheck == '軛') {
        return true;
    }
    // No.6307
    // 説明:e763
    // 0xe763 (Windows-31J)
    // 0x8ee3 (UTF-16BE)
    if (argCheck == '軣') {
        return true;
    }
    // No.6308
    // 説明:e764
    // 0xe764 (Windows-31J)
    // 0x8efc (UTF-16BE)
    if (argCheck == '軼') {
        return true;
    }
    // No.6309
    // 説明:e765
    // 0xe765 (Windows-31J)
    // 0x8efb (UTF-16BE)
    if (argCheck == '軻') {
        return true;
    }
    // No.6310
    // 説明:e766
    // 0xe766 (Windows-31J)
    // 0x8eeb (UTF-16BE)
    if (argCheck == '軫') {
        return true;
    }
    // No.6311
    // 説明:e767
    // 0xe767 (Windows-31J)
    // 0x8efe (UTF-16BE)
    if (argCheck == '軾') {
        return true;
    }
    // No.6312
    // 説明:e768
    // 0xe768 (Windows-31J)
    // 0x8f0a (UTF-16BE)
    if (argCheck == '輊') {
        return true;
    }
    // No.6313
    // 説明:e769
    // 0xe769 (Windows-31J)
    // 0x8f05 (UTF-16BE)
    if (argCheck == '輅') {
        return true;
    }
    // No.6314
    // 説明:e76a
    // 0xe76a (Windows-31J)
    // 0x8f15 (UTF-16BE)
    if (argCheck == '輕') {
        return true;
    }
    // No.6315
    // 説明:e76b
    // 0xe76b (Windows-31J)
    // 0x8f12 (UTF-16BE)
    if (argCheck == '輒') {
        return true;
    }
    // No.6316
    // 説明:e76c
    // 0xe76c (Windows-31J)
    // 0x8f19 (UTF-16BE)
    if (argCheck == '輙') {
        return true;
    }
    // No.6317
    // 説明:e76d
    // 0xe76d (Windows-31J)
    // 0x8f13 (UTF-16BE)
    if (argCheck == '輓') {
        return true;
    }
    // No.6318
    // 説明:e76e
    // 0xe76e (Windows-31J)
    // 0x8f1c (UTF-16BE)
    if (argCheck == '輜') {
        return true;
    }
    // No.6319
    // 説明:e76f
    // 0xe76f (Windows-31J)
    // 0x8f1f (UTF-16BE)
    if (argCheck == '輟') {
        return true;
    }
    // No.6320
    // 説明:e770
    // 0xe770 (Windows-31J)
    // 0x8f1b (UTF-16BE)
    if (argCheck == '輛') {
        return true;
    }
    // No.6321
    // 説明:e771
    // 0xe771 (Windows-31J)
    // 0x8f0c (UTF-16BE)
    if (argCheck == '輌') {
        return true;
    }
    // No.6322
    // 説明:e772
    // 0xe772 (Windows-31J)
    // 0x8f26 (UTF-16BE)
    if (argCheck == '輦') {
        return true;
    }
    // No.6323
    // 説明:e773
    // 0xe773 (Windows-31J)
    // 0x8f33 (UTF-16BE)
    if (argCheck == '輳') {
        return true;
    }
    // No.6324
    // 説明:e774
    // 0xe774 (Windows-31J)
    // 0x8f3b (UTF-16BE)
    if (argCheck == '輻') {
        return true;
    }
    // No.6325
    // 説明:e775
    // 0xe775 (Windows-31J)
    // 0x8f39 (UTF-16BE)
    if (argCheck == '輹') {
        return true;
    }
    // No.6326
    // 説明:e776
    // 0xe776 (Windows-31J)
    // 0x8f45 (UTF-16BE)
    if (argCheck == '轅') {
        return true;
    }
    // No.6327
    // 説明:e777
    // 0xe777 (Windows-31J)
    // 0x8f42 (UTF-16BE)
    if (argCheck == '轂') {
        return true;
    }
    // No.6328
    // 説明:e778
    // 0xe778 (Windows-31J)
    // 0x8f3e (UTF-16BE)
    if (argCheck == '輾') {
        return true;
    }
    // No.6329
    // 説明:e779
    // 0xe779 (Windows-31J)
    // 0x8f4c (UTF-16BE)
    if (argCheck == '轌') {
        return true;
    }
    // No.6330
    // 説明:e77a
    // 0xe77a (Windows-31J)
    // 0x8f49 (UTF-16BE)
    if (argCheck == '轉') {
        return true;
    }
    // No.6331
    // 説明:e77b
    // 0xe77b (Windows-31J)
    // 0x8f46 (UTF-16BE)
    if (argCheck == '轆') {
        return true;
    }
    // No.6332
    // 説明:e77c
    // 0xe77c (Windows-31J)
    // 0x8f4e (UTF-16BE)
    if (argCheck == '轎') {
        return true;
    }
    // No.6333
    // 説明:e77d
    // 0xe77d (Windows-31J)
    // 0x8f57 (UTF-16BE)
    if (argCheck == '轗') {
        return true;
    }
    // No.6334
    // 説明:e77e
    // 0xe77e (Windows-31J)
    // 0x8f5c (UTF-16BE)
    if (argCheck == '轜') {
        return true;
    }
    // No.6335
    // 説明:e780
    // 0xe780 (Windows-31J)
    // 0x8f62 (UTF-16BE)
    if (argCheck == '轢') {
        return true;
    }
    // No.6336
    // 説明:e781
    // 0xe781 (Windows-31J)
    // 0x8f63 (UTF-16BE)
    if (argCheck == '轣') {
        return true;
    }
    // No.6337
    // 説明:e782
    // 0xe782 (Windows-31J)
    // 0x8f64 (UTF-16BE)
    if (argCheck == '轤') {
        return true;
    }
    // No.6338
    // 説明:e783
    // 0xe783 (Windows-31J)
    // 0x8f9c (UTF-16BE)
    if (argCheck == '辜') {
        return true;
    }
    // No.6339
    // 説明:e784
    // 0xe784 (Windows-31J)
    // 0x8f9f (UTF-16BE)
    if (argCheck == '辟') {
        return true;
    }
    // No.6340
    // 説明:e785
    // 0xe785 (Windows-31J)
    // 0x8fa3 (UTF-16BE)
    if (argCheck == '辣') {
        return true;
    }
    // No.6341
    // 説明:e786
    // 0xe786 (Windows-31J)
    // 0x8fad (UTF-16BE)
    if (argCheck == '辭') {
        return true;
    }
    // No.6342
    // 説明:e787
    // 0xe787 (Windows-31J)
    // 0x8faf (UTF-16BE)
    if (argCheck == '辯') {
        return true;
    }
    // No.6343
    // 説明:e788
    // 0xe788 (Windows-31J)
    // 0x8fb7 (UTF-16BE)
    if (argCheck == '辷') {
        return true;
    }
    // No.6344
    // 説明:e789
    // 0xe789 (Windows-31J)
    // 0x8fda (UTF-16BE)
    if (argCheck == '迚') {
        return true;
    }
    // No.6345
    // 説明:e78a
    // 0xe78a (Windows-31J)
    // 0x8fe5 (UTF-16BE)
    if (argCheck == '迥') {
        return true;
    }
    // No.6346
    // 説明:e78b
    // 0xe78b (Windows-31J)
    // 0x8fe2 (UTF-16BE)
    if (argCheck == '迢') {
        return true;
    }
    // No.6347
    // 説明:e78c
    // 0xe78c (Windows-31J)
    // 0x8fea (UTF-16BE)
    if (argCheck == '迪') {
        return true;
    }
    // No.6348
    // 説明:e78d
    // 0xe78d (Windows-31J)
    // 0x8fef (UTF-16BE)
    if (argCheck == '迯') {
        return true;
    }
    // No.6349
    // 説明:e78e
    // 0xe78e (Windows-31J)
    // 0x9087 (UTF-16BE)
    if (argCheck == '邇') {
        return true;
    }
    // No.6350
    // 説明:e78f
    // 0xe78f (Windows-31J)
    // 0x8ff4 (UTF-16BE)
    if (argCheck == '迴') {
        return true;
    }
    // No.6351
    // 説明:e790
    // 0xe790 (Windows-31J)
    // 0x9005 (UTF-16BE)
    if (argCheck == '逅') {
        return true;
    }
    // No.6352
    // 説明:e791
    // 0xe791 (Windows-31J)
    // 0x8ff9 (UTF-16BE)
    if (argCheck == '迹') {
        return true;
    }
    // No.6353
    // 説明:e792
    // 0xe792 (Windows-31J)
    // 0x8ffa (UTF-16BE)
    if (argCheck == '迺') {
        return true;
    }
    // No.6354
    // 説明:e793
    // 0xe793 (Windows-31J)
    // 0x9011 (UTF-16BE)
    if (argCheck == '逑') {
        return true;
    }
    // No.6355
    // 説明:e794
    // 0xe794 (Windows-31J)
    // 0x9015 (UTF-16BE)
    if (argCheck == '逕') {
        return true;
    }
    // No.6356
    // 説明:e795
    // 0xe795 (Windows-31J)
    // 0x9021 (UTF-16BE)
    if (argCheck == '逡') {
        return true;
    }
    // No.6357
    // 説明:e796
    // 0xe796 (Windows-31J)
    // 0x900d (UTF-16BE)
    if (argCheck == '逍') {
        return true;
    }
    // No.6358
    // 説明:e797
    // 0xe797 (Windows-31J)
    // 0x901e (UTF-16BE)
    if (argCheck == '逞') {
        return true;
    }
    // No.6359
    // 説明:e798
    // 0xe798 (Windows-31J)
    // 0x9016 (UTF-16BE)
    if (argCheck == '逖') {
        return true;
    }
    // No.6360
    // 説明:e799
    // 0xe799 (Windows-31J)
    // 0x900b (UTF-16BE)
    if (argCheck == '逋') {
        return true;
    }
    // No.6361
    // 説明:e79a
    // 0xe79a (Windows-31J)
    // 0x9027 (UTF-16BE)
    if (argCheck == '逧') {
        return true;
    }
    // No.6362
    // 説明:e79b
    // 0xe79b (Windows-31J)
    // 0x9036 (UTF-16BE)
    if (argCheck == '逶') {
        return true;
    }
    // No.6363
    // 説明:e79c
    // 0xe79c (Windows-31J)
    // 0x9035 (UTF-16BE)
    if (argCheck == '逵') {
        return true;
    }
    // No.6364
    // 説明:e79d
    // 0xe79d (Windows-31J)
    // 0x9039 (UTF-16BE)
    if (argCheck == '逹') {
        return true;
    }
    // No.6365
    // 説明:e79e
    // 0xe79e (Windows-31J)
    // 0x8ff8 (UTF-16BE)
    if (argCheck == '迸') {
        return true;
    }
    // No.6366
    // 説明:e79f
    // 0xe79f (Windows-31J)
    // 0x904f (UTF-16BE)
    if (argCheck == '遏') {
        return true;
    }
    // No.6367
    // 説明:e7a0
    // 0xe7a0 (Windows-31J)
    // 0x9050 (UTF-16BE)
    if (argCheck == '遐') {
        return true;
    }
    // No.6368
    // 説明:e7a1
    // 0xe7a1 (Windows-31J)
    // 0x9051 (UTF-16BE)
    if (argCheck == '遑') {
        return true;
    }
    // No.6369
    // 説明:e7a2
    // 0xe7a2 (Windows-31J)
    // 0x9052 (UTF-16BE)
    if (argCheck == '遒') {
        return true;
    }
    // No.6370
    // 説明:e7a3
    // 0xe7a3 (Windows-31J)
    // 0x900e (UTF-16BE)
    if (argCheck == '逎') {
        return true;
    }
    // No.6371
    // 説明:e7a4
    // 0xe7a4 (Windows-31J)
    // 0x9049 (UTF-16BE)
    if (argCheck == '遉') {
        return true;
    }
    // No.6372
    // 説明:e7a5
    // 0xe7a5 (Windows-31J)
    // 0x903e (UTF-16BE)
    if (argCheck == '逾') {
        return true;
    }
    // No.6373
    // 説明:e7a6
    // 0xe7a6 (Windows-31J)
    // 0x9056 (UTF-16BE)
    if (argCheck == '遖') {
        return true;
    }
    // No.6374
    // 説明:e7a7
    // 0xe7a7 (Windows-31J)
    // 0x9058 (UTF-16BE)
    if (argCheck == '遘') {
        return true;
    }
    // No.6375
    // 説明:e7a8
    // 0xe7a8 (Windows-31J)
    // 0x905e (UTF-16BE)
    if (argCheck == '遞') {
        return true;
    }
    // No.6376
    // 説明:e7a9
    // 0xe7a9 (Windows-31J)
    // 0x9068 (UTF-16BE)
    if (argCheck == '遨') {
        return true;
    }
    // No.6377
    // 説明:e7aa
    // 0xe7aa (Windows-31J)
    // 0x906f (UTF-16BE)
    if (argCheck == '遯') {
        return true;
    }
    // No.6378
    // 説明:e7ab
    // 0xe7ab (Windows-31J)
    // 0x9076 (UTF-16BE)
    if (argCheck == '遶') {
        return true;
    }
    // No.6379
    // 説明:e7ac
    // 0xe7ac (Windows-31J)
    // 0x96a8 (UTF-16BE)
    if (argCheck == '隨') {
        return true;
    }
    // No.6380
    // 説明:e7ad
    // 0xe7ad (Windows-31J)
    // 0x9072 (UTF-16BE)
    if (argCheck == '遲') {
        return true;
    }
    // No.6381
    // 説明:e7ae
    // 0xe7ae (Windows-31J)
    // 0x9082 (UTF-16BE)
    if (argCheck == '邂') {
        return true;
    }
    // No.6382
    // 説明:e7af
    // 0xe7af (Windows-31J)
    // 0x907d (UTF-16BE)
    if (argCheck == '遽') {
        return true;
    }
    // No.6383
    // 説明:e7b0
    // 0xe7b0 (Windows-31J)
    // 0x9081 (UTF-16BE)
    if (argCheck == '邁') {
        return true;
    }
    // No.6384
    // 説明:e7b1
    // 0xe7b1 (Windows-31J)
    // 0x9080 (UTF-16BE)
    if (argCheck == '邀') {
        return true;
    }
    // No.6385
    // 説明:e7b2
    // 0xe7b2 (Windows-31J)
    // 0x908a (UTF-16BE)
    if (argCheck == '邊') {
        return true;
    }
    // No.6386
    // 説明:e7b3
    // 0xe7b3 (Windows-31J)
    // 0x9089 (UTF-16BE)
    if (argCheck == '邉') {
        return true;
    }
    // No.6387
    // 説明:e7b4
    // 0xe7b4 (Windows-31J)
    // 0x908f (UTF-16BE)
    if (argCheck == '邏') {
        return true;
    }
    // No.6388
    // 説明:e7b5
    // 0xe7b5 (Windows-31J)
    // 0x90a8 (UTF-16BE)
    if (argCheck == '邨') {
        return true;
    }
    // No.6389
    // 説明:e7b6
    // 0xe7b6 (Windows-31J)
    // 0x90af (UTF-16BE)
    if (argCheck == '邯') {
        return true;
    }
    // No.6390
    // 説明:e7b7
    // 0xe7b7 (Windows-31J)
    // 0x90b1 (UTF-16BE)
    if (argCheck == '邱') {
        return true;
    }
    // No.6391
    // 説明:e7b8
    // 0xe7b8 (Windows-31J)
    // 0x90b5 (UTF-16BE)
    if (argCheck == '邵') {
        return true;
    }
    // No.6392
    // 説明:e7b9
    // 0xe7b9 (Windows-31J)
    // 0x90e2 (UTF-16BE)
    if (argCheck == '郢') {
        return true;
    }
    // No.6393
    // 説明:e7ba
    // 0xe7ba (Windows-31J)
    // 0x90e4 (UTF-16BE)
    if (argCheck == '郤') {
        return true;
    }
    // No.6394
    // 説明:e7bb
    // 0xe7bb (Windows-31J)
    // 0x6248 (UTF-16BE)
    if (argCheck == '扈') {
        return true;
    }
    // No.6395
    // 説明:e7bc
    // 0xe7bc (Windows-31J)
    // 0x90db (UTF-16BE)
    if (argCheck == '郛') {
        return true;
    }
    // No.6396
    // 説明:e7bd
    // 0xe7bd (Windows-31J)
    // 0x9102 (UTF-16BE)
    if (argCheck == '鄂') {
        return true;
    }
    // No.6397
    // 説明:e7be
    // 0xe7be (Windows-31J)
    // 0x9112 (UTF-16BE)
    if (argCheck == '鄒') {
        return true;
    }
    // No.6398
    // 説明:e7bf
    // 0xe7bf (Windows-31J)
    // 0x9119 (UTF-16BE)
    if (argCheck == '鄙') {
        return true;
    }
    // No.6399
    // 説明:e7c0
    // 0xe7c0 (Windows-31J)
    // 0x9132 (UTF-16BE)
    if (argCheck == '鄲') {
        return true;
    }
    // No.6400
    // 説明:e7c1
    // 0xe7c1 (Windows-31J)
    // 0x9130 (UTF-16BE)
    if (argCheck == '鄰') {
        return true;
    }
    // No.6401
    // 説明:e7c2
    // 0xe7c2 (Windows-31J)
    // 0x914a (UTF-16BE)
    if (argCheck == '酊') {
        return true;
    }
    // No.6402
    // 説明:e7c3
    // 0xe7c3 (Windows-31J)
    // 0x9156 (UTF-16BE)
    if (argCheck == '酖') {
        return true;
    }
    // No.6403
    // 説明:e7c4
    // 0xe7c4 (Windows-31J)
    // 0x9158 (UTF-16BE)
    if (argCheck == '酘') {
        return true;
    }
    // No.6404
    // 説明:e7c5
    // 0xe7c5 (Windows-31J)
    // 0x9163 (UTF-16BE)
    if (argCheck == '酣') {
        return true;
    }
    // No.6405
    // 説明:e7c6
    // 0xe7c6 (Windows-31J)
    // 0x9165 (UTF-16BE)
    if (argCheck == '酥') {
        return true;
    }
    // No.6406
    // 説明:e7c7
    // 0xe7c7 (Windows-31J)
    // 0x9169 (UTF-16BE)
    if (argCheck == '酩') {
        return true;
    }
    // No.6407
    // 説明:e7c8
    // 0xe7c8 (Windows-31J)
    // 0x9173 (UTF-16BE)
    if (argCheck == '酳') {
        return true;
    }
    // No.6408
    // 説明:e7c9
    // 0xe7c9 (Windows-31J)
    // 0x9172 (UTF-16BE)
    if (argCheck == '酲') {
        return true;
    }
    // No.6409
    // 説明:e7ca
    // 0xe7ca (Windows-31J)
    // 0x918b (UTF-16BE)
    if (argCheck == '醋') {
        return true;
    }
    // No.6410
    // 説明:e7cb
    // 0xe7cb (Windows-31J)
    // 0x9189 (UTF-16BE)
    if (argCheck == '醉') {
        return true;
    }
    // No.6411
    // 説明:e7cc
    // 0xe7cc (Windows-31J)
    // 0x9182 (UTF-16BE)
    if (argCheck == '醂') {
        return true;
    }
    // No.6412
    // 説明:e7cd
    // 0xe7cd (Windows-31J)
    // 0x91a2 (UTF-16BE)
    if (argCheck == '醢') {
        return true;
    }
    // No.6413
    // 説明:e7ce
    // 0xe7ce (Windows-31J)
    // 0x91ab (UTF-16BE)
    if (argCheck == '醫') {
        return true;
    }
    // No.6414
    // 説明:e7cf
    // 0xe7cf (Windows-31J)
    // 0x91af (UTF-16BE)
    if (argCheck == '醯') {
        return true;
    }
    // No.6415
    // 説明:e7d0
    // 0xe7d0 (Windows-31J)
    // 0x91aa (UTF-16BE)
    if (argCheck == '醪') {
        return true;
    }
    // No.6416
    // 説明:e7d1
    // 0xe7d1 (Windows-31J)
    // 0x91b5 (UTF-16BE)
    if (argCheck == '醵') {
        return true;
    }
    // No.6417
    // 説明:e7d2
    // 0xe7d2 (Windows-31J)
    // 0x91b4 (UTF-16BE)
    if (argCheck == '醴') {
        return true;
    }
    // No.6418
    // 説明:e7d3
    // 0xe7d3 (Windows-31J)
    // 0x91ba (UTF-16BE)
    if (argCheck == '醺') {
        return true;
    }
    // No.6419
    // 説明:e7d4
    // 0xe7d4 (Windows-31J)
    // 0x91c0 (UTF-16BE)
    if (argCheck == '釀') {
        return true;
    }
    // No.6420
    // 説明:e7d5
    // 0xe7d5 (Windows-31J)
    // 0x91c1 (UTF-16BE)
    if (argCheck == '釁') {
        return true;
    }
    // No.6421
    // 説明:e7d6
    // 0xe7d6 (Windows-31J)
    // 0x91c9 (UTF-16BE)
    if (argCheck == '釉') {
        return true;
    }
    // No.6422
    // 説明:e7d7
    // 0xe7d7 (Windows-31J)
    // 0x91cb (UTF-16BE)
    if (argCheck == '釋') {
        return true;
    }
    // No.6423
    // 説明:e7d8
    // 0xe7d8 (Windows-31J)
    // 0x91d0 (UTF-16BE)
    if (argCheck == '釐') {
        return true;
    }
    // No.6424
    // 説明:e7d9
    // 0xe7d9 (Windows-31J)
    // 0x91d6 (UTF-16BE)
    if (argCheck == '釖') {
        return true;
    }
    // No.6425
    // 説明:e7da
    // 0xe7da (Windows-31J)
    // 0x91df (UTF-16BE)
    if (argCheck == '釟') {
        return true;
    }
    // No.6426
    // 説明:e7db
    // 0xe7db (Windows-31J)
    // 0x91e1 (UTF-16BE)
    if (argCheck == '釡') {
        return true;
    }
    // No.6427
    // 説明:e7dc
    // 0xe7dc (Windows-31J)
    // 0x91db (UTF-16BE)
    if (argCheck == '釛') {
        return true;
    }
    // No.6428
    // 説明:e7dd
    // 0xe7dd (Windows-31J)
    // 0x91fc (UTF-16BE)
    if (argCheck == '釼') {
        return true;
    }
    // No.6429
    // 説明:e7de
    // 0xe7de (Windows-31J)
    // 0x91f5 (UTF-16BE)
    if (argCheck == '釵') {
        return true;
    }
    // No.6430
    // 説明:e7df
    // 0xe7df (Windows-31J)
    // 0x91f6 (UTF-16BE)
    if (argCheck == '釶') {
        return true;
    }
    // No.6431
    // 説明:e7e0
    // 0xe7e0 (Windows-31J)
    // 0x921e (UTF-16BE)
    if (argCheck == '鈞') {
        return true;
    }
    // No.6432
    // 説明:e7e1
    // 0xe7e1 (Windows-31J)
    // 0x91ff (UTF-16BE)
    if (argCheck == '釿') {
        return true;
    }
    // No.6433
    // 説明:e7e2
    // 0xe7e2 (Windows-31J)
    // 0x9214 (UTF-16BE)
    if (argCheck == '鈔') {
        return true;
    }
    // No.6434
    // 説明:e7e3
    // 0xe7e3 (Windows-31J)
    // 0x922c (UTF-16BE)
    if (argCheck == '鈬') {
        return true;
    }
    // No.6435
    // 説明:e7e4
    // 0xe7e4 (Windows-31J)
    // 0x9215 (UTF-16BE)
    if (argCheck == '鈕') {
        return true;
    }
    // No.6436
    // 説明:e7e5
    // 0xe7e5 (Windows-31J)
    // 0x9211 (UTF-16BE)
    if (argCheck == '鈑') {
        return true;
    }
    // No.6437
    // 説明:e7e6
    // 0xe7e6 (Windows-31J)
    // 0x925e (UTF-16BE)
    if (argCheck == '鉞') {
        return true;
    }
    // No.6438
    // 説明:e7e7
    // 0xe7e7 (Windows-31J)
    // 0x9257 (UTF-16BE)
    if (argCheck == '鉗') {
        return true;
    }
    // No.6439
    // 説明:e7e8
    // 0xe7e8 (Windows-31J)
    // 0x9245 (UTF-16BE)
    if (argCheck == '鉅') {
        return true;
    }
    // No.6440
    // 説明:e7e9
    // 0xe7e9 (Windows-31J)
    // 0x9249 (UTF-16BE)
    if (argCheck == '鉉') {
        return true;
    }
    // No.6441
    // 説明:e7ea
    // 0xe7ea (Windows-31J)
    // 0x9264 (UTF-16BE)
    if (argCheck == '鉤') {
        return true;
    }
    // No.6442
    // 説明:e7eb
    // 0xe7eb (Windows-31J)
    // 0x9248 (UTF-16BE)
    if (argCheck == '鉈') {
        return true;
    }
    // No.6443
    // 説明:e7ec
    // 0xe7ec (Windows-31J)
    // 0x9295 (UTF-16BE)
    if (argCheck == '銕') {
        return true;
    }
    // No.6444
    // 説明:e7ed
    // 0xe7ed (Windows-31J)
    // 0x923f (UTF-16BE)
    if (argCheck == '鈿') {
        return true;
    }
    // No.6445
    // 説明:e7ee
    // 0xe7ee (Windows-31J)
    // 0x924b (UTF-16BE)
    if (argCheck == '鉋') {
        return true;
    }
    // No.6446
    // 説明:e7ef
    // 0xe7ef (Windows-31J)
    // 0x9250 (UTF-16BE)
    if (argCheck == '鉐') {
        return true;
    }
    // No.6447
    // 説明:e7f0
    // 0xe7f0 (Windows-31J)
    // 0x929c (UTF-16BE)
    if (argCheck == '銜') {
        return true;
    }
    // No.6448
    // 説明:e7f1
    // 0xe7f1 (Windows-31J)
    // 0x9296 (UTF-16BE)
    if (argCheck == '銖') {
        return true;
    }
    // No.6449
    // 説明:e7f2
    // 0xe7f2 (Windows-31J)
    // 0x9293 (UTF-16BE)
    if (argCheck == '銓') {
        return true;
    }
    // No.6450
    // 説明:e7f3
    // 0xe7f3 (Windows-31J)
    // 0x929b (UTF-16BE)
    if (argCheck == '銛') {
        return true;
    }
    // No.6451
    // 説明:e7f4
    // 0xe7f4 (Windows-31J)
    // 0x925a (UTF-16BE)
    if (argCheck == '鉚') {
        return true;
    }
    // No.6452
    // 説明:e7f5
    // 0xe7f5 (Windows-31J)
    // 0x92cf (UTF-16BE)
    if (argCheck == '鋏') {
        return true;
    }
    // No.6453
    // 説明:e7f6
    // 0xe7f6 (Windows-31J)
    // 0x92b9 (UTF-16BE)
    if (argCheck == '銹') {
        return true;
    }
    // No.6454
    // 説明:e7f7
    // 0xe7f7 (Windows-31J)
    // 0x92b7 (UTF-16BE)
    if (argCheck == '銷') {
        return true;
    }
    // No.6455
    // 説明:e7f8
    // 0xe7f8 (Windows-31J)
    // 0x92e9 (UTF-16BE)
    if (argCheck == '鋩') {
        return true;
    }
    // No.6456
    // 説明:e7f9
    // 0xe7f9 (Windows-31J)
    // 0x930f (UTF-16BE)
    if (argCheck == '錏') {
        return true;
    }
    // No.6457
    // 説明:e7fa
    // 0xe7fa (Windows-31J)
    // 0x92fa (UTF-16BE)
    if (argCheck == '鋺') {
        return true;
    }
    // No.6458
    // 説明:e7fb
    // 0xe7fb (Windows-31J)
    // 0x9344 (UTF-16BE)
    if (argCheck == '鍄') {
        return true;
    }
    // No.6459
    // 説明:e7fc
    // 0xe7fc (Windows-31J)
    // 0x932e (UTF-16BE)
    if (argCheck == '錮') {
        return true;
    }
    // No.6460
    // 説明:e840
    // 0xe840 (Windows-31J)
    // 0x9319 (UTF-16BE)
    if (argCheck == '錙') {
        return true;
    }
    // No.6461
    // 説明:e841
    // 0xe841 (Windows-31J)
    // 0x9322 (UTF-16BE)
    if (argCheck == '錢') {
        return true;
    }
    // No.6462
    // 説明:e842
    // 0xe842 (Windows-31J)
    // 0x931a (UTF-16BE)
    if (argCheck == '錚') {
        return true;
    }
    // No.6463
    // 説明:e843
    // 0xe843 (Windows-31J)
    // 0x9323 (UTF-16BE)
    if (argCheck == '錣') {
        return true;
    }
    // No.6464
    // 説明:e844
    // 0xe844 (Windows-31J)
    // 0x933a (UTF-16BE)
    if (argCheck == '錺') {
        return true;
    }
    // No.6465
    // 説明:e845
    // 0xe845 (Windows-31J)
    // 0x9335 (UTF-16BE)
    if (argCheck == '錵') {
        return true;
    }
    // No.6466
    // 説明:e846
    // 0xe846 (Windows-31J)
    // 0x933b (UTF-16BE)
    if (argCheck == '錻') {
        return true;
    }
    // No.6467
    // 説明:e847
    // 0xe847 (Windows-31J)
    // 0x935c (UTF-16BE)
    if (argCheck == '鍜') {
        return true;
    }
    // No.6468
    // 説明:e848
    // 0xe848 (Windows-31J)
    // 0x9360 (UTF-16BE)
    if (argCheck == '鍠') {
        return true;
    }
    // No.6469
    // 説明:e849
    // 0xe849 (Windows-31J)
    // 0x937c (UTF-16BE)
    if (argCheck == '鍼') {
        return true;
    }
    // No.6470
    // 説明:e84a
    // 0xe84a (Windows-31J)
    // 0x936e (UTF-16BE)
    if (argCheck == '鍮') {
        return true;
    }
    // No.6471
    // 説明:e84b
    // 0xe84b (Windows-31J)
    // 0x9356 (UTF-16BE)
    if (argCheck == '鍖') {
        return true;
    }
    // No.6472
    // 説明:e84c
    // 0xe84c (Windows-31J)
    // 0x93b0 (UTF-16BE)
    if (argCheck == '鎰') {
        return true;
    }
    // No.6473
    // 説明:e84d
    // 0xe84d (Windows-31J)
    // 0x93ac (UTF-16BE)
    if (argCheck == '鎬') {
        return true;
    }
    // No.6474
    // 説明:e84e
    // 0xe84e (Windows-31J)
    // 0x93ad (UTF-16BE)
    if (argCheck == '鎭') {
        return true;
    }
    // No.6475
    // 説明:e84f
    // 0xe84f (Windows-31J)
    // 0x9394 (UTF-16BE)
    if (argCheck == '鎔') {
        return true;
    }
    // No.6476
    // 説明:e850
    // 0xe850 (Windows-31J)
    // 0x93b9 (UTF-16BE)
    if (argCheck == '鎹') {
        return true;
    }
    // No.6477
    // 説明:e851
    // 0xe851 (Windows-31J)
    // 0x93d6 (UTF-16BE)
    if (argCheck == '鏖') {
        return true;
    }
    // No.6478
    // 説明:e852
    // 0xe852 (Windows-31J)
    // 0x93d7 (UTF-16BE)
    if (argCheck == '鏗') {
        return true;
    }
    // No.6479
    // 説明:e853
    // 0xe853 (Windows-31J)
    // 0x93e8 (UTF-16BE)
    if (argCheck == '鏨') {
        return true;
    }
    // No.6480
    // 説明:e854
    // 0xe854 (Windows-31J)
    // 0x93e5 (UTF-16BE)
    if (argCheck == '鏥') {
        return true;
    }
    // No.6481
    // 説明:e855
    // 0xe855 (Windows-31J)
    // 0x93d8 (UTF-16BE)
    if (argCheck == '鏘') {
        return true;
    }
    // No.6482
    // 説明:e856
    // 0xe856 (Windows-31J)
    // 0x93c3 (UTF-16BE)
    if (argCheck == '鏃') {
        return true;
    }
    // No.6483
    // 説明:e857
    // 0xe857 (Windows-31J)
    // 0x93dd (UTF-16BE)
    if (argCheck == '鏝') {
        return true;
    }
    // No.6484
    // 説明:e858
    // 0xe858 (Windows-31J)
    // 0x93d0 (UTF-16BE)
    if (argCheck == '鏐') {
        return true;
    }
    // No.6485
    // 説明:e859
    // 0xe859 (Windows-31J)
    // 0x93c8 (UTF-16BE)
    if (argCheck == '鏈') {
        return true;
    }
    // No.6486
    // 説明:e85a
    // 0xe85a (Windows-31J)
    // 0x93e4 (UTF-16BE)
    if (argCheck == '鏤') {
        return true;
    }
    // No.6487
    // 説明:e85b
    // 0xe85b (Windows-31J)
    // 0x941a (UTF-16BE)
    if (argCheck == '鐚') {
        return true;
    }
    // No.6488
    // 説明:e85c
    // 0xe85c (Windows-31J)
    // 0x9414 (UTF-16BE)
    if (argCheck == '鐔') {
        return true;
    }
    // No.6489
    // 説明:e85d
    // 0xe85d (Windows-31J)
    // 0x9413 (UTF-16BE)
    if (argCheck == '鐓') {
        return true;
    }
    // No.6490
    // 説明:e85e
    // 0xe85e (Windows-31J)
    // 0x9403 (UTF-16BE)
    if (argCheck == '鐃') {
        return true;
    }
    // No.6491
    // 説明:e85f
    // 0xe85f (Windows-31J)
    // 0x9407 (UTF-16BE)
    if (argCheck == '鐇') {
        return true;
    }
    // No.6492
    // 説明:e860
    // 0xe860 (Windows-31J)
    // 0x9410 (UTF-16BE)
    if (argCheck == '鐐') {
        return true;
    }
    // No.6493
    // 説明:e861
    // 0xe861 (Windows-31J)
    // 0x9436 (UTF-16BE)
    if (argCheck == '鐶') {
        return true;
    }
    // No.6494
    // 説明:e862
    // 0xe862 (Windows-31J)
    // 0x942b (UTF-16BE)
    if (argCheck == '鐫') {
        return true;
    }
    // No.6495
    // 説明:e863
    // 0xe863 (Windows-31J)
    // 0x9435 (UTF-16BE)
    if (argCheck == '鐵') {
        return true;
    }
    // No.6496
    // 説明:e864
    // 0xe864 (Windows-31J)
    // 0x9421 (UTF-16BE)
    if (argCheck == '鐡') {
        return true;
    }
    // No.6497
    // 説明:e865
    // 0xe865 (Windows-31J)
    // 0x943a (UTF-16BE)
    if (argCheck == '鐺') {
        return true;
    }
    // No.6498
    // 説明:e866
    // 0xe866 (Windows-31J)
    // 0x9441 (UTF-16BE)
    if (argCheck == '鑁') {
        return true;
    }
    // No.6499
    // 説明:e867
    // 0xe867 (Windows-31J)
    // 0x9452 (UTF-16BE)
    if (argCheck == '鑒') {
        return true;
    }
    // No.6500
    // 説明:e868
    // 0xe868 (Windows-31J)
    // 0x9444 (UTF-16BE)
    if (argCheck == '鑄') {
        return true;
    }
    // No.6501
    // 説明:e869
    // 0xe869 (Windows-31J)
    // 0x945b (UTF-16BE)
    if (argCheck == '鑛') {
        return true;
    }
    // No.6502
    // 説明:e86a
    // 0xe86a (Windows-31J)
    // 0x9460 (UTF-16BE)
    if (argCheck == '鑠') {
        return true;
    }
    // No.6503
    // 説明:e86b
    // 0xe86b (Windows-31J)
    // 0x9462 (UTF-16BE)
    if (argCheck == '鑢') {
        return true;
    }
    // No.6504
    // 説明:e86c
    // 0xe86c (Windows-31J)
    // 0x945e (UTF-16BE)
    if (argCheck == '鑞') {
        return true;
    }
    // No.6505
    // 説明:e86d
    // 0xe86d (Windows-31J)
    // 0x946a (UTF-16BE)
    if (argCheck == '鑪') {
        return true;
    }
    // No.6506
    // 説明:e86e
    // 0xe86e (Windows-31J)
    // 0x9229 (UTF-16BE)
    if (argCheck == '鈩') {
        return true;
    }
    // No.6507
    // 説明:e86f
    // 0xe86f (Windows-31J)
    // 0x9470 (UTF-16BE)
    if (argCheck == '鑰') {
        return true;
    }
    // No.6508
    // 説明:e870
    // 0xe870 (Windows-31J)
    // 0x9475 (UTF-16BE)
    if (argCheck == '鑵') {
        return true;
    }
    // No.6509
    // 説明:e871
    // 0xe871 (Windows-31J)
    // 0x9477 (UTF-16BE)
    if (argCheck == '鑷') {
        return true;
    }
    // No.6510
    // 説明:e872
    // 0xe872 (Windows-31J)
    // 0x947d (UTF-16BE)
    if (argCheck == '鑽') {
        return true;
    }
    // No.6511
    // 説明:e873
    // 0xe873 (Windows-31J)
    // 0x945a (UTF-16BE)
    if (argCheck == '鑚') {
        return true;
    }
    // No.6512
    // 説明:e874
    // 0xe874 (Windows-31J)
    // 0x947c (UTF-16BE)
    if (argCheck == '鑼') {
        return true;
    }
    // No.6513
    // 説明:e875
    // 0xe875 (Windows-31J)
    // 0x947e (UTF-16BE)
    if (argCheck == '鑾') {
        return true;
    }
    // No.6514
    // 説明:e876
    // 0xe876 (Windows-31J)
    // 0x9481 (UTF-16BE)
    if (argCheck == '钁') {
        return true;
    }
    // No.6515
    // 説明:e877
    // 0xe877 (Windows-31J)
    // 0x947f (UTF-16BE)
    if (argCheck == '鑿') {
        return true;
    }
    // No.6516
    // 説明:e878
    // 0xe878 (Windows-31J)
    // 0x9582 (UTF-16BE)
    if (argCheck == '閂') {
        return true;
    }
    // No.6517
    // 説明:e879
    // 0xe879 (Windows-31J)
    // 0x9587 (UTF-16BE)
    if (argCheck == '閇') {
        return true;
    }
    // No.6518
    // 説明:e87a
    // 0xe87a (Windows-31J)
    // 0x958a (UTF-16BE)
    if (argCheck == '閊') {
        return true;
    }
    // No.6519
    // 説明:e87b
    // 0xe87b (Windows-31J)
    // 0x9594 (UTF-16BE)
    if (argCheck == '閔') {
        return true;
    }
    // No.6520
    // 説明:e87c
    // 0xe87c (Windows-31J)
    // 0x9596 (UTF-16BE)
    if (argCheck == '閖') {
        return true;
    }
    // No.6521
    // 説明:e87d
    // 0xe87d (Windows-31J)
    // 0x9598 (UTF-16BE)
    if (argCheck == '閘') {
        return true;
    }
    // No.6522
    // 説明:e87e
    // 0xe87e (Windows-31J)
    // 0x9599 (UTF-16BE)
    if (argCheck == '閙') {
        return true;
    }
    // No.6523
    // 説明:e880
    // 0xe880 (Windows-31J)
    // 0x95a0 (UTF-16BE)
    if (argCheck == '閠') {
        return true;
    }
    // No.6524
    // 説明:e881
    // 0xe881 (Windows-31J)
    // 0x95a8 (UTF-16BE)
    if (argCheck == '閨') {
        return true;
    }
    // No.6525
    // 説明:e882
    // 0xe882 (Windows-31J)
    // 0x95a7 (UTF-16BE)
    if (argCheck == '閧') {
        return true;
    }
    // No.6526
    // 説明:e883
    // 0xe883 (Windows-31J)
    // 0x95ad (UTF-16BE)
    if (argCheck == '閭') {
        return true;
    }
    // No.6527
    // 説明:e884
    // 0xe884 (Windows-31J)
    // 0x95bc (UTF-16BE)
    if (argCheck == '閼') {
        return true;
    }
    // No.6528
    // 説明:e885
    // 0xe885 (Windows-31J)
    // 0x95bb (UTF-16BE)
    if (argCheck == '閻') {
        return true;
    }
    // No.6529
    // 説明:e886
    // 0xe886 (Windows-31J)
    // 0x95b9 (UTF-16BE)
    if (argCheck == '閹') {
        return true;
    }
    // No.6530
    // 説明:e887
    // 0xe887 (Windows-31J)
    // 0x95be (UTF-16BE)
    if (argCheck == '閾') {
        return true;
    }
    // No.6531
    // 説明:e888
    // 0xe888 (Windows-31J)
    // 0x95ca (UTF-16BE)
    if (argCheck == '闊') {
        return true;
    }
    // No.6532
    // 説明:e889
    // 0xe889 (Windows-31J)
    // 0x6ff6 (UTF-16BE)
    if (argCheck == '濶') {
        return true;
    }
    // No.6533
    // 説明:e88a
    // 0xe88a (Windows-31J)
    // 0x95c3 (UTF-16BE)
    if (argCheck == '闃') {
        return true;
    }
    // No.6534
    // 説明:e88b
    // 0xe88b (Windows-31J)
    // 0x95cd (UTF-16BE)
    if (argCheck == '闍') {
        return true;
    }
    // No.6535
    // 説明:e88c
    // 0xe88c (Windows-31J)
    // 0x95cc (UTF-16BE)
    if (argCheck == '闌') {
        return true;
    }
    // No.6536
    // 説明:e88d
    // 0xe88d (Windows-31J)
    // 0x95d5 (UTF-16BE)
    if (argCheck == '闕') {
        return true;
    }
    // No.6537
    // 説明:e88e
    // 0xe88e (Windows-31J)
    // 0x95d4 (UTF-16BE)
    if (argCheck == '闔') {
        return true;
    }
    // No.6538
    // 説明:e88f
    // 0xe88f (Windows-31J)
    // 0x95d6 (UTF-16BE)
    if (argCheck == '闖') {
        return true;
    }
    // No.6539
    // 説明:e890
    // 0xe890 (Windows-31J)
    // 0x95dc (UTF-16BE)
    if (argCheck == '關') {
        return true;
    }
    // No.6540
    // 説明:e891
    // 0xe891 (Windows-31J)
    // 0x95e1 (UTF-16BE)
    if (argCheck == '闡') {
        return true;
    }
    // No.6541
    // 説明:e892
    // 0xe892 (Windows-31J)
    // 0x95e5 (UTF-16BE)
    if (argCheck == '闥') {
        return true;
    }
    // No.6542
    // 説明:e893
    // 0xe893 (Windows-31J)
    // 0x95e2 (UTF-16BE)
    if (argCheck == '闢') {
        return true;
    }
    // No.6543
    // 説明:e894
    // 0xe894 (Windows-31J)
    // 0x9621 (UTF-16BE)
    if (argCheck == '阡') {
        return true;
    }
    // No.6544
    // 説明:e895
    // 0xe895 (Windows-31J)
    // 0x9628 (UTF-16BE)
    if (argCheck == '阨') {
        return true;
    }
    // No.6545
    // 説明:e896
    // 0xe896 (Windows-31J)
    // 0x962e (UTF-16BE)
    if (argCheck == '阮') {
        return true;
    }
    // No.6546
    // 説明:e897
    // 0xe897 (Windows-31J)
    // 0x962f (UTF-16BE)
    if (argCheck == '阯') {
        return true;
    }
    // No.6547
    // 説明:e898
    // 0xe898 (Windows-31J)
    // 0x9642 (UTF-16BE)
    if (argCheck == '陂') {
        return true;
    }
    // No.6548
    // 説明:e899
    // 0xe899 (Windows-31J)
    // 0x964c (UTF-16BE)
    if (argCheck == '陌') {
        return true;
    }
    // No.6549
    // 説明:e89a
    // 0xe89a (Windows-31J)
    // 0x964f (UTF-16BE)
    if (argCheck == '陏') {
        return true;
    }
    // No.6550
    // 説明:e89b
    // 0xe89b (Windows-31J)
    // 0x964b (UTF-16BE)
    if (argCheck == '陋') {
        return true;
    }
    // No.6551
    // 説明:e89c
    // 0xe89c (Windows-31J)
    // 0x9677 (UTF-16BE)
    if (argCheck == '陷') {
        return true;
    }
    // No.6552
    // 説明:e89d
    // 0xe89d (Windows-31J)
    // 0x965c (UTF-16BE)
    if (argCheck == '陜') {
        return true;
    }
    // No.6553
    // 説明:e89e
    // 0xe89e (Windows-31J)
    // 0x965e (UTF-16BE)
    if (argCheck == '陞') {
        return true;
    }
    // No.6554
    // 説明:e89f
    // 0xe89f (Windows-31J)
    // 0x965d (UTF-16BE)
    if (argCheck == '陝') {
        return true;
    }
    // No.6555
    // 説明:e8a0
    // 0xe8a0 (Windows-31J)
    // 0x965f (UTF-16BE)
    if (argCheck == '陟') {
        return true;
    }
    // No.6556
    // 説明:e8a1
    // 0xe8a1 (Windows-31J)
    // 0x9666 (UTF-16BE)
    if (argCheck == '陦') {
        return true;
    }
    // No.6557
    // 説明:e8a2
    // 0xe8a2 (Windows-31J)
    // 0x9672 (UTF-16BE)
    if (argCheck == '陲') {
        return true;
    }
    // No.6558
    // 説明:e8a3
    // 0xe8a3 (Windows-31J)
    // 0x966c (UTF-16BE)
    if (argCheck == '陬') {
        return true;
    }
    // No.6559
    // 説明:e8a4
    // 0xe8a4 (Windows-31J)
    // 0x968d (UTF-16BE)
    if (argCheck == '隍') {
        return true;
    }
    // No.6560
    // 説明:e8a5
    // 0xe8a5 (Windows-31J)
    // 0x9698 (UTF-16BE)
    if (argCheck == '隘') {
        return true;
    }
    // No.6561
    // 説明:e8a6
    // 0xe8a6 (Windows-31J)
    // 0x9695 (UTF-16BE)
    if (argCheck == '隕') {
        return true;
    }
    // No.6562
    // 説明:e8a7
    // 0xe8a7 (Windows-31J)
    // 0x9697 (UTF-16BE)
    if (argCheck == '隗') {
        return true;
    }
    // No.6563
    // 説明:e8a8
    // 0xe8a8 (Windows-31J)
    // 0x96aa (UTF-16BE)
    if (argCheck == '險') {
        return true;
    }
    // No.6564
    // 説明:e8a9
    // 0xe8a9 (Windows-31J)
    // 0x96a7 (UTF-16BE)
    if (argCheck == '隧') {
        return true;
    }
    // No.6565
    // 説明:e8aa
    // 0xe8aa (Windows-31J)
    // 0x96b1 (UTF-16BE)
    if (argCheck == '隱') {
        return true;
    }
    // No.6566
    // 説明:e8ab
    // 0xe8ab (Windows-31J)
    // 0x96b2 (UTF-16BE)
    if (argCheck == '隲') {
        return true;
    }
    // No.6567
    // 説明:e8ac
    // 0xe8ac (Windows-31J)
    // 0x96b0 (UTF-16BE)
    if (argCheck == '隰') {
        return true;
    }
    // No.6568
    // 説明:e8ad
    // 0xe8ad (Windows-31J)
    // 0x96b4 (UTF-16BE)
    if (argCheck == '隴') {
        return true;
    }
    // No.6569
    // 説明:e8ae
    // 0xe8ae (Windows-31J)
    // 0x96b6 (UTF-16BE)
    if (argCheck == '隶') {
        return true;
    }
    // No.6570
    // 説明:e8af
    // 0xe8af (Windows-31J)
    // 0x96b8 (UTF-16BE)
    if (argCheck == '隸') {
        return true;
    }
    // No.6571
    // 説明:e8b0
    // 0xe8b0 (Windows-31J)
    // 0x96b9 (UTF-16BE)
    if (argCheck == '隹') {
        return true;
    }
    // No.6572
    // 説明:e8b1
    // 0xe8b1 (Windows-31J)
    // 0x96ce (UTF-16BE)
    if (argCheck == '雎') {
        return true;
    }
    // No.6573
    // 説明:e8b2
    // 0xe8b2 (Windows-31J)
    // 0x96cb (UTF-16BE)
    if (argCheck == '雋') {
        return true;
    }
    // No.6574
    // 説明:e8b3
    // 0xe8b3 (Windows-31J)
    // 0x96c9 (UTF-16BE)
    if (argCheck == '雉') {
        return true;
    }
    // No.6575
    // 説明:e8b4
    // 0xe8b4 (Windows-31J)
    // 0x96cd (UTF-16BE)
    if (argCheck == '雍') {
        return true;
    }
    // No.6576
    // 説明:e8b5
    // 0xe8b5 (Windows-31J)
    // 0x894d (UTF-16BE)
    if (argCheck == '襍') {
        return true;
    }
    // No.6577
    // 説明:e8b6
    // 0xe8b6 (Windows-31J)
    // 0x96dc (UTF-16BE)
    if (argCheck == '雜') {
        return true;
    }
    // No.6578
    // 説明:e8b7
    // 0xe8b7 (Windows-31J)
    // 0x970d (UTF-16BE)
    if (argCheck == '霍') {
        return true;
    }
    // No.6579
    // 説明:e8b8
    // 0xe8b8 (Windows-31J)
    // 0x96d5 (UTF-16BE)
    if (argCheck == '雕') {
        return true;
    }
    // No.6580
    // 説明:e8b9
    // 0xe8b9 (Windows-31J)
    // 0x96f9 (UTF-16BE)
    if (argCheck == '雹') {
        return true;
    }
    // No.6581
    // 説明:e8ba
    // 0xe8ba (Windows-31J)
    // 0x9704 (UTF-16BE)
    if (argCheck == '霄') {
        return true;
    }
    // No.6582
    // 説明:e8bb
    // 0xe8bb (Windows-31J)
    // 0x9706 (UTF-16BE)
    if (argCheck == '霆') {
        return true;
    }
    // No.6583
    // 説明:e8bc
    // 0xe8bc (Windows-31J)
    // 0x9708 (UTF-16BE)
    if (argCheck == '霈') {
        return true;
    }
    // No.6584
    // 説明:e8bd
    // 0xe8bd (Windows-31J)
    // 0x9713 (UTF-16BE)
    if (argCheck == '霓') {
        return true;
    }
    // No.6585
    // 説明:e8be
    // 0xe8be (Windows-31J)
    // 0x970e (UTF-16BE)
    if (argCheck == '霎') {
        return true;
    }
    // No.6586
    // 説明:e8bf
    // 0xe8bf (Windows-31J)
    // 0x9711 (UTF-16BE)
    if (argCheck == '霑') {
        return true;
    }
    // No.6587
    // 説明:e8c0
    // 0xe8c0 (Windows-31J)
    // 0x970f (UTF-16BE)
    if (argCheck == '霏') {
        return true;
    }
    // No.6588
    // 説明:e8c1
    // 0xe8c1 (Windows-31J)
    // 0x9716 (UTF-16BE)
    if (argCheck == '霖') {
        return true;
    }
    // No.6589
    // 説明:e8c2
    // 0xe8c2 (Windows-31J)
    // 0x9719 (UTF-16BE)
    if (argCheck == '霙') {
        return true;
    }
    // No.6590
    // 説明:e8c3
    // 0xe8c3 (Windows-31J)
    // 0x9724 (UTF-16BE)
    if (argCheck == '霤') {
        return true;
    }
    // No.6591
    // 説明:e8c4
    // 0xe8c4 (Windows-31J)
    // 0x972a (UTF-16BE)
    if (argCheck == '霪') {
        return true;
    }
    // No.6592
    // 説明:e8c5
    // 0xe8c5 (Windows-31J)
    // 0x9730 (UTF-16BE)
    if (argCheck == '霰') {
        return true;
    }
    // No.6593
    // 説明:e8c6
    // 0xe8c6 (Windows-31J)
    // 0x9739 (UTF-16BE)
    if (argCheck == '霹') {
        return true;
    }
    // No.6594
    // 説明:e8c7
    // 0xe8c7 (Windows-31J)
    // 0x973d (UTF-16BE)
    if (argCheck == '霽') {
        return true;
    }
    // No.6595
    // 説明:e8c8
    // 0xe8c8 (Windows-31J)
    // 0x973e (UTF-16BE)
    if (argCheck == '霾') {
        return true;
    }
    // No.6596
    // 説明:e8c9
    // 0xe8c9 (Windows-31J)
    // 0x9744 (UTF-16BE)
    if (argCheck == '靄') {
        return true;
    }
    // No.6597
    // 説明:e8ca
    // 0xe8ca (Windows-31J)
    // 0x9746 (UTF-16BE)
    if (argCheck == '靆') {
        return true;
    }
    // No.6598
    // 説明:e8cb
    // 0xe8cb (Windows-31J)
    // 0x9748 (UTF-16BE)
    if (argCheck == '靈') {
        return true;
    }
    // No.6599
    // 説明:e8cc
    // 0xe8cc (Windows-31J)
    // 0x9742 (UTF-16BE)
    if (argCheck == '靂') {
        return true;
    }
    // No.6600
    // 説明:e8cd
    // 0xe8cd (Windows-31J)
    // 0x9749 (UTF-16BE)
    if (argCheck == '靉') {
        return true;
    }
    // No.6601
    // 説明:e8ce
    // 0xe8ce (Windows-31J)
    // 0x975c (UTF-16BE)
    if (argCheck == '靜') {
        return true;
    }
    // No.6602
    // 説明:e8cf
    // 0xe8cf (Windows-31J)
    // 0x9760 (UTF-16BE)
    if (argCheck == '靠') {
        return true;
    }
    // No.6603
    // 説明:e8d0
    // 0xe8d0 (Windows-31J)
    // 0x9764 (UTF-16BE)
    if (argCheck == '靤') {
        return true;
    }
    // No.6604
    // 説明:e8d1
    // 0xe8d1 (Windows-31J)
    // 0x9766 (UTF-16BE)
    if (argCheck == '靦') {
        return true;
    }
    // No.6605
    // 説明:e8d2
    // 0xe8d2 (Windows-31J)
    // 0x9768 (UTF-16BE)
    if (argCheck == '靨') {
        return true;
    }
    // No.6606
    // 説明:e8d3
    // 0xe8d3 (Windows-31J)
    // 0x52d2 (UTF-16BE)
    if (argCheck == '勒') {
        return true;
    }
    // No.6607
    // 説明:e8d4
    // 0xe8d4 (Windows-31J)
    // 0x976b (UTF-16BE)
    if (argCheck == '靫') {
        return true;
    }
    // No.6608
    // 説明:e8d5
    // 0xe8d5 (Windows-31J)
    // 0x9771 (UTF-16BE)
    if (argCheck == '靱') {
        return true;
    }
    // No.6609
    // 説明:e8d6
    // 0xe8d6 (Windows-31J)
    // 0x9779 (UTF-16BE)
    if (argCheck == '靹') {
        return true;
    }
    // No.6610
    // 説明:e8d7
    // 0xe8d7 (Windows-31J)
    // 0x9785 (UTF-16BE)
    if (argCheck == '鞅') {
        return true;
    }
    // No.6611
    // 説明:e8d8
    // 0xe8d8 (Windows-31J)
    // 0x977c (UTF-16BE)
    if (argCheck == '靼') {
        return true;
    }
    // No.6612
    // 説明:e8d9
    // 0xe8d9 (Windows-31J)
    // 0x9781 (UTF-16BE)
    if (argCheck == '鞁') {
        return true;
    }
    // No.6613
    // 説明:e8da
    // 0xe8da (Windows-31J)
    // 0x977a (UTF-16BE)
    if (argCheck == '靺') {
        return true;
    }
    // No.6614
    // 説明:e8db
    // 0xe8db (Windows-31J)
    // 0x9786 (UTF-16BE)
    if (argCheck == '鞆') {
        return true;
    }
    // No.6615
    // 説明:e8dc
    // 0xe8dc (Windows-31J)
    // 0x978b (UTF-16BE)
    if (argCheck == '鞋') {
        return true;
    }
    // No.6616
    // 説明:e8dd
    // 0xe8dd (Windows-31J)
    // 0x978f (UTF-16BE)
    if (argCheck == '鞏') {
        return true;
    }
    // No.6617
    // 説明:e8de
    // 0xe8de (Windows-31J)
    // 0x9790 (UTF-16BE)
    if (argCheck == '鞐') {
        return true;
    }
    // No.6618
    // 説明:e8df
    // 0xe8df (Windows-31J)
    // 0x979c (UTF-16BE)
    if (argCheck == '鞜') {
        return true;
    }
    // No.6619
    // 説明:e8e0
    // 0xe8e0 (Windows-31J)
    // 0x97a8 (UTF-16BE)
    if (argCheck == '鞨') {
        return true;
    }
    // No.6620
    // 説明:e8e1
    // 0xe8e1 (Windows-31J)
    // 0x97a6 (UTF-16BE)
    if (argCheck == '鞦') {
        return true;
    }
    // No.6621
    // 説明:e8e2
    // 0xe8e2 (Windows-31J)
    // 0x97a3 (UTF-16BE)
    if (argCheck == '鞣') {
        return true;
    }
    // No.6622
    // 説明:e8e3
    // 0xe8e3 (Windows-31J)
    // 0x97b3 (UTF-16BE)
    if (argCheck == '鞳') {
        return true;
    }
    // No.6623
    // 説明:e8e4
    // 0xe8e4 (Windows-31J)
    // 0x97b4 (UTF-16BE)
    if (argCheck == '鞴') {
        return true;
    }
    // No.6624
    // 説明:e8e5
    // 0xe8e5 (Windows-31J)
    // 0x97c3 (UTF-16BE)
    if (argCheck == '韃') {
        return true;
    }
    // No.6625
    // 説明:e8e6
    // 0xe8e6 (Windows-31J)
    // 0x97c6 (UTF-16BE)
    if (argCheck == '韆') {
        return true;
    }
    // No.6626
    // 説明:e8e7
    // 0xe8e7 (Windows-31J)
    // 0x97c8 (UTF-16BE)
    if (argCheck == '韈') {
        return true;
    }
    // No.6627
    // 説明:e8e8
    // 0xe8e8 (Windows-31J)
    // 0x97cb (UTF-16BE)
    if (argCheck == '韋') {
        return true;
    }
    // No.6628
    // 説明:e8e9
    // 0xe8e9 (Windows-31J)
    // 0x97dc (UTF-16BE)
    if (argCheck == '韜') {
        return true;
    }
    // No.6629
    // 説明:e8ea
    // 0xe8ea (Windows-31J)
    // 0x97ed (UTF-16BE)
    if (argCheck == '韭') {
        return true;
    }
    // No.6630
    // 説明:e8eb
    // 0xe8eb (Windows-31J)
    // 0x9f4f (UTF-16BE)
    if (argCheck == '齏') {
        return true;
    }
    // No.6631
    // 説明:e8ec
    // 0xe8ec (Windows-31J)
    // 0x97f2 (UTF-16BE)
    if (argCheck == '韲') {
        return true;
    }
    // No.6632
    // 説明:e8ed
    // 0xe8ed (Windows-31J)
    // 0x7adf (UTF-16BE)
    if (argCheck == '竟') {
        return true;
    }
    // No.6633
    // 説明:e8ee
    // 0xe8ee (Windows-31J)
    // 0x97f6 (UTF-16BE)
    if (argCheck == '韶') {
        return true;
    }
    // No.6634
    // 説明:e8ef
    // 0xe8ef (Windows-31J)
    // 0x97f5 (UTF-16BE)
    if (argCheck == '韵') {
        return true;
    }
    // No.6635
    // 説明:e8f0
    // 0xe8f0 (Windows-31J)
    // 0x980f (UTF-16BE)
    if (argCheck == '頏') {
        return true;
    }
    // No.6636
    // 説明:e8f1
    // 0xe8f1 (Windows-31J)
    // 0x980c (UTF-16BE)
    if (argCheck == '頌') {
        return true;
    }
    // No.6637
    // 説明:e8f2
    // 0xe8f2 (Windows-31J)
    // 0x9838 (UTF-16BE)
    if (argCheck == '頸') {
        return true;
    }
    // No.6638
    // 説明:e8f3
    // 0xe8f3 (Windows-31J)
    // 0x9824 (UTF-16BE)
    if (argCheck == '頤') {
        return true;
    }
    // No.6639
    // 説明:e8f4
    // 0xe8f4 (Windows-31J)
    // 0x9821 (UTF-16BE)
    if (argCheck == '頡') {
        return true;
    }
    // No.6640
    // 説明:e8f5
    // 0xe8f5 (Windows-31J)
    // 0x9837 (UTF-16BE)
    if (argCheck == '頷') {
        return true;
    }
    // No.6641
    // 説明:e8f6
    // 0xe8f6 (Windows-31J)
    // 0x983d (UTF-16BE)
    if (argCheck == '頽') {
        return true;
    }
    // No.6642
    // 説明:e8f7
    // 0xe8f7 (Windows-31J)
    // 0x9846 (UTF-16BE)
    if (argCheck == '顆') {
        return true;
    }
    // No.6643
    // 説明:e8f8
    // 0xe8f8 (Windows-31J)
    // 0x984f (UTF-16BE)
    if (argCheck == '顏') {
        return true;
    }
    // No.6644
    // 説明:e8f9
    // 0xe8f9 (Windows-31J)
    // 0x984b (UTF-16BE)
    if (argCheck == '顋') {
        return true;
    }
    // No.6645
    // 説明:e8fa
    // 0xe8fa (Windows-31J)
    // 0x986b (UTF-16BE)
    if (argCheck == '顫') {
        return true;
    }
    // No.6646
    // 説明:e8fb
    // 0xe8fb (Windows-31J)
    // 0x986f (UTF-16BE)
    if (argCheck == '顯') {
        return true;
    }
    // No.6647
    // 説明:e8fc
    // 0xe8fc (Windows-31J)
    // 0x9870 (UTF-16BE)
    if (argCheck == '顰') {
        return true;
    }
    // No.6648
    // 説明:e940
    // 0xe940 (Windows-31J)
    // 0x9871 (UTF-16BE)
    if (argCheck == '顱') {
        return true;
    }
    // No.6649
    // 説明:e941
    // 0xe941 (Windows-31J)
    // 0x9874 (UTF-16BE)
    if (argCheck == '顴') {
        return true;
    }
    // No.6650
    // 説明:e942
    // 0xe942 (Windows-31J)
    // 0x9873 (UTF-16BE)
    if (argCheck == '顳') {
        return true;
    }
    // No.6651
    // 説明:e943
    // 0xe943 (Windows-31J)
    // 0x98aa (UTF-16BE)
    if (argCheck == '颪') {
        return true;
    }
    // No.6652
    // 説明:e944
    // 0xe944 (Windows-31J)
    // 0x98af (UTF-16BE)
    if (argCheck == '颯') {
        return true;
    }
    // No.6653
    // 説明:e945
    // 0xe945 (Windows-31J)
    // 0x98b1 (UTF-16BE)
    if (argCheck == '颱') {
        return true;
    }
    // No.6654
    // 説明:e946
    // 0xe946 (Windows-31J)
    // 0x98b6 (UTF-16BE)
    if (argCheck == '颶') {
        return true;
    }
    // No.6655
    // 説明:e947
    // 0xe947 (Windows-31J)
    // 0x98c4 (UTF-16BE)
    if (argCheck == '飄') {
        return true;
    }
    // No.6656
    // 説明:e948
    // 0xe948 (Windows-31J)
    // 0x98c3 (UTF-16BE)
    if (argCheck == '飃') {
        return true;
    }
    // No.6657
    // 説明:e949
    // 0xe949 (Windows-31J)
    // 0x98c6 (UTF-16BE)
    if (argCheck == '飆') {
        return true;
    }
    // No.6658
    // 説明:e94a
    // 0xe94a (Windows-31J)
    // 0x98e9 (UTF-16BE)
    if (argCheck == '飩') {
        return true;
    }
    // No.6659
    // 説明:e94b
    // 0xe94b (Windows-31J)
    // 0x98eb (UTF-16BE)
    if (argCheck == '飫') {
        return true;
    }
    // No.6660
    // 説明:e94c
    // 0xe94c (Windows-31J)
    // 0x9903 (UTF-16BE)
    if (argCheck == '餃') {
        return true;
    }
    // No.6661
    // 説明:e94d
    // 0xe94d (Windows-31J)
    // 0x9909 (UTF-16BE)
    if (argCheck == '餉') {
        return true;
    }
    // No.6662
    // 説明:e94e
    // 0xe94e (Windows-31J)
    // 0x9912 (UTF-16BE)
    if (argCheck == '餒') {
        return true;
    }
    // No.6663
    // 説明:e94f
    // 0xe94f (Windows-31J)
    // 0x9914 (UTF-16BE)
    if (argCheck == '餔') {
        return true;
    }
    // No.6664
    // 説明:e950
    // 0xe950 (Windows-31J)
    // 0x9918 (UTF-16BE)
    if (argCheck == '餘') {
        return true;
    }
    // No.6665
    // 説明:e951
    // 0xe951 (Windows-31J)
    // 0x9921 (UTF-16BE)
    if (argCheck == '餡') {
        return true;
    }
    // No.6666
    // 説明:e952
    // 0xe952 (Windows-31J)
    // 0x991d (UTF-16BE)
    if (argCheck == '餝') {
        return true;
    }
    // No.6667
    // 説明:e953
    // 0xe953 (Windows-31J)
    // 0x991e (UTF-16BE)
    if (argCheck == '餞') {
        return true;
    }
    // No.6668
    // 説明:e954
    // 0xe954 (Windows-31J)
    // 0x9924 (UTF-16BE)
    if (argCheck == '餤') {
        return true;
    }
    // No.6669
    // 説明:e955
    // 0xe955 (Windows-31J)
    // 0x9920 (UTF-16BE)
    if (argCheck == '餠') {
        return true;
    }
    // No.6670
    // 説明:e956
    // 0xe956 (Windows-31J)
    // 0x992c (UTF-16BE)
    if (argCheck == '餬') {
        return true;
    }
    // No.6671
    // 説明:e957
    // 0xe957 (Windows-31J)
    // 0x992e (UTF-16BE)
    if (argCheck == '餮') {
        return true;
    }
    // No.6672
    // 説明:e958
    // 0xe958 (Windows-31J)
    // 0x993d (UTF-16BE)
    if (argCheck == '餽') {
        return true;
    }
    // No.6673
    // 説明:e959
    // 0xe959 (Windows-31J)
    // 0x993e (UTF-16BE)
    if (argCheck == '餾') {
        return true;
    }
    // No.6674
    // 説明:e95a
    // 0xe95a (Windows-31J)
    // 0x9942 (UTF-16BE)
    if (argCheck == '饂') {
        return true;
    }
    // No.6675
    // 説明:e95b
    // 0xe95b (Windows-31J)
    // 0x9949 (UTF-16BE)
    if (argCheck == '饉') {
        return true;
    }
    // No.6676
    // 説明:e95c
    // 0xe95c (Windows-31J)
    // 0x9945 (UTF-16BE)
    if (argCheck == '饅') {
        return true;
    }
    // No.6677
    // 説明:e95d
    // 0xe95d (Windows-31J)
    // 0x9950 (UTF-16BE)
    if (argCheck == '饐') {
        return true;
    }
    // No.6678
    // 説明:e95e
    // 0xe95e (Windows-31J)
    // 0x994b (UTF-16BE)
    if (argCheck == '饋') {
        return true;
    }
    // No.6679
    // 説明:e95f
    // 0xe95f (Windows-31J)
    // 0x9951 (UTF-16BE)
    if (argCheck == '饑') {
        return true;
    }
    // No.6680
    // 説明:e960
    // 0xe960 (Windows-31J)
    // 0x9952 (UTF-16BE)
    if (argCheck == '饒') {
        return true;
    }
    // No.6681
    // 説明:e961
    // 0xe961 (Windows-31J)
    // 0x994c (UTF-16BE)
    if (argCheck == '饌') {
        return true;
    }
    // No.6682
    // 説明:e962
    // 0xe962 (Windows-31J)
    // 0x9955 (UTF-16BE)
    if (argCheck == '饕') {
        return true;
    }
    // No.6683
    // 説明:e963
    // 0xe963 (Windows-31J)
    // 0x9997 (UTF-16BE)
    if (argCheck == '馗') {
        return true;
    }
    // No.6684
    // 説明:e964
    // 0xe964 (Windows-31J)
    // 0x9998 (UTF-16BE)
    if (argCheck == '馘') {
        return true;
    }
    // No.6685
    // 説明:e965
    // 0xe965 (Windows-31J)
    // 0x99a5 (UTF-16BE)
    if (argCheck == '馥') {
        return true;
    }
    // No.6686
    // 説明:e966
    // 0xe966 (Windows-31J)
    // 0x99ad (UTF-16BE)
    if (argCheck == '馭') {
        return true;
    }
    // No.6687
    // 説明:e967
    // 0xe967 (Windows-31J)
    // 0x99ae (UTF-16BE)
    if (argCheck == '馮') {
        return true;
    }
    // No.6688
    // 説明:e968
    // 0xe968 (Windows-31J)
    // 0x99bc (UTF-16BE)
    if (argCheck == '馼') {
        return true;
    }
    // No.6689
    // 説明:e969
    // 0xe969 (Windows-31J)
    // 0x99df (UTF-16BE)
    if (argCheck == '駟') {
        return true;
    }
    // No.6690
    // 説明:e96a
    // 0xe96a (Windows-31J)
    // 0x99db (UTF-16BE)
    if (argCheck == '駛') {
        return true;
    }
    // No.6691
    // 説明:e96b
    // 0xe96b (Windows-31J)
    // 0x99dd (UTF-16BE)
    if (argCheck == '駝') {
        return true;
    }
    // No.6692
    // 説明:e96c
    // 0xe96c (Windows-31J)
    // 0x99d8 (UTF-16BE)
    if (argCheck == '駘') {
        return true;
    }
    // No.6693
    // 説明:e96d
    // 0xe96d (Windows-31J)
    // 0x99d1 (UTF-16BE)
    if (argCheck == '駑') {
        return true;
    }
    // No.6694
    // 説明:e96e
    // 0xe96e (Windows-31J)
    // 0x99ed (UTF-16BE)
    if (argCheck == '駭') {
        return true;
    }
    // No.6695
    // 説明:e96f
    // 0xe96f (Windows-31J)
    // 0x99ee (UTF-16BE)
    if (argCheck == '駮') {
        return true;
    }
    // No.6696
    // 説明:e970
    // 0xe970 (Windows-31J)
    // 0x99f1 (UTF-16BE)
    if (argCheck == '駱') {
        return true;
    }
    // No.6697
    // 説明:e971
    // 0xe971 (Windows-31J)
    // 0x99f2 (UTF-16BE)
    if (argCheck == '駲') {
        return true;
    }
    // No.6698
    // 説明:e972
    // 0xe972 (Windows-31J)
    // 0x99fb (UTF-16BE)
    if (argCheck == '駻') {
        return true;
    }
    // No.6699
    // 説明:e973
    // 0xe973 (Windows-31J)
    // 0x99f8 (UTF-16BE)
    if (argCheck == '駸') {
        return true;
    }
    // No.6700
    // 説明:e974
    // 0xe974 (Windows-31J)
    // 0x9a01 (UTF-16BE)
    if (argCheck == '騁') {
        return true;
    }
    // No.6701
    // 説明:e975
    // 0xe975 (Windows-31J)
    // 0x9a0f (UTF-16BE)
    if (argCheck == '騏') {
        return true;
    }
    // No.6702
    // 説明:e976
    // 0xe976 (Windows-31J)
    // 0x9a05 (UTF-16BE)
    if (argCheck == '騅') {
        return true;
    }
    // No.6703
    // 説明:e977
    // 0xe977 (Windows-31J)
    // 0x99e2 (UTF-16BE)
    if (argCheck == '駢') {
        return true;
    }
    // No.6704
    // 説明:e978
    // 0xe978 (Windows-31J)
    // 0x9a19 (UTF-16BE)
    if (argCheck == '騙') {
        return true;
    }
    // No.6705
    // 説明:e979
    // 0xe979 (Windows-31J)
    // 0x9a2b (UTF-16BE)
    if (argCheck == '騫') {
        return true;
    }
    // No.6706
    // 説明:e97a
    // 0xe97a (Windows-31J)
    // 0x9a37 (UTF-16BE)
    if (argCheck == '騷') {
        return true;
    }
    // No.6707
    // 説明:e97b
    // 0xe97b (Windows-31J)
    // 0x9a45 (UTF-16BE)
    if (argCheck == '驅') {
        return true;
    }
    // No.6708
    // 説明:e97c
    // 0xe97c (Windows-31J)
    // 0x9a42 (UTF-16BE)
    if (argCheck == '驂') {
        return true;
    }
    // No.6709
    // 説明:e97d
    // 0xe97d (Windows-31J)
    // 0x9a40 (UTF-16BE)
    if (argCheck == '驀') {
        return true;
    }
    // No.6710
    // 説明:e97e
    // 0xe97e (Windows-31J)
    // 0x9a43 (UTF-16BE)
    if (argCheck == '驃') {
        return true;
    }
    // No.6711
    // 説明:e980
    // 0xe980 (Windows-31J)
    // 0x9a3e (UTF-16BE)
    if (argCheck == '騾') {
        return true;
    }
    // No.6712
    // 説明:e981
    // 0xe981 (Windows-31J)
    // 0x9a55 (UTF-16BE)
    if (argCheck == '驕') {
        return true;
    }
    // No.6713
    // 説明:e982
    // 0xe982 (Windows-31J)
    // 0x9a4d (UTF-16BE)
    if (argCheck == '驍') {
        return true;
    }
    // No.6714
    // 説明:e983
    // 0xe983 (Windows-31J)
    // 0x9a5b (UTF-16BE)
    if (argCheck == '驛') {
        return true;
    }
    // No.6715
    // 説明:e984
    // 0xe984 (Windows-31J)
    // 0x9a57 (UTF-16BE)
    if (argCheck == '驗') {
        return true;
    }
    // No.6716
    // 説明:e985
    // 0xe985 (Windows-31J)
    // 0x9a5f (UTF-16BE)
    if (argCheck == '驟') {
        return true;
    }
    // No.6717
    // 説明:e986
    // 0xe986 (Windows-31J)
    // 0x9a62 (UTF-16BE)
    if (argCheck == '驢') {
        return true;
    }
    // No.6718
    // 説明:e987
    // 0xe987 (Windows-31J)
    // 0x9a65 (UTF-16BE)
    if (argCheck == '驥') {
        return true;
    }
    // No.6719
    // 説明:e988
    // 0xe988 (Windows-31J)
    // 0x9a64 (UTF-16BE)
    if (argCheck == '驤') {
        return true;
    }
    // No.6720
    // 説明:e989
    // 0xe989 (Windows-31J)
    // 0x9a69 (UTF-16BE)
    if (argCheck == '驩') {
        return true;
    }
    // No.6721
    // 説明:e98a
    // 0xe98a (Windows-31J)
    // 0x9a6b (UTF-16BE)
    if (argCheck == '驫') {
        return true;
    }
    // No.6722
    // 説明:e98b
    // 0xe98b (Windows-31J)
    // 0x9a6a (UTF-16BE)
    if (argCheck == '驪') {
        return true;
    }
    // No.6723
    // 説明:e98c
    // 0xe98c (Windows-31J)
    // 0x9aad (UTF-16BE)
    if (argCheck == '骭') {
        return true;
    }
    // No.6724
    // 説明:e98d
    // 0xe98d (Windows-31J)
    // 0x9ab0 (UTF-16BE)
    if (argCheck == '骰') {
        return true;
    }
    // No.6725
    // 説明:e98e
    // 0xe98e (Windows-31J)
    // 0x9abc (UTF-16BE)
    if (argCheck == '骼') {
        return true;
    }
    // No.6726
    // 説明:e98f
    // 0xe98f (Windows-31J)
    // 0x9ac0 (UTF-16BE)
    if (argCheck == '髀') {
        return true;
    }
    // No.6727
    // 説明:e990
    // 0xe990 (Windows-31J)
    // 0x9acf (UTF-16BE)
    if (argCheck == '髏') {
        return true;
    }
    // No.6728
    // 説明:e991
    // 0xe991 (Windows-31J)
    // 0x9ad1 (UTF-16BE)
    if (argCheck == '髑') {
        return true;
    }
    // No.6729
    // 説明:e992
    // 0xe992 (Windows-31J)
    // 0x9ad3 (UTF-16BE)
    if (argCheck == '髓') {
        return true;
    }
    // No.6730
    // 説明:e993
    // 0xe993 (Windows-31J)
    // 0x9ad4 (UTF-16BE)
    if (argCheck == '體') {
        return true;
    }
    // No.6731
    // 説明:e994
    // 0xe994 (Windows-31J)
    // 0x9ade (UTF-16BE)
    if (argCheck == '髞') {
        return true;
    }
    // No.6732
    // 説明:e995
    // 0xe995 (Windows-31J)
    // 0x9adf (UTF-16BE)
    if (argCheck == '髟') {
        return true;
    }
    // No.6733
    // 説明:e996
    // 0xe996 (Windows-31J)
    // 0x9ae2 (UTF-16BE)
    if (argCheck == '髢') {
        return true;
    }
    // No.6734
    // 説明:e997
    // 0xe997 (Windows-31J)
    // 0x9ae3 (UTF-16BE)
    if (argCheck == '髣') {
        return true;
    }
    // No.6735
    // 説明:e998
    // 0xe998 (Windows-31J)
    // 0x9ae6 (UTF-16BE)
    if (argCheck == '髦') {
        return true;
    }
    // No.6736
    // 説明:e999
    // 0xe999 (Windows-31J)
    // 0x9aef (UTF-16BE)
    if (argCheck == '髯') {
        return true;
    }
    // No.6737
    // 説明:e99a
    // 0xe99a (Windows-31J)
    // 0x9aeb (UTF-16BE)
    if (argCheck == '髫') {
        return true;
    }
    // No.6738
    // 説明:e99b
    // 0xe99b (Windows-31J)
    // 0x9aee (UTF-16BE)
    if (argCheck == '髮') {
        return true;
    }
    // No.6739
    // 説明:e99c
    // 0xe99c (Windows-31J)
    // 0x9af4 (UTF-16BE)
    if (argCheck == '髴') {
        return true;
    }
    // No.6740
    // 説明:e99d
    // 0xe99d (Windows-31J)
    // 0x9af1 (UTF-16BE)
    if (argCheck == '髱') {
        return true;
    }
    // No.6741
    // 説明:e99e
    // 0xe99e (Windows-31J)
    // 0x9af7 (UTF-16BE)
    if (argCheck == '髷') {
        return true;
    }
    // No.6742
    // 説明:e99f
    // 0xe99f (Windows-31J)
    // 0x9afb (UTF-16BE)
    if (argCheck == '髻') {
        return true;
    }
    // No.6743
    // 説明:e9a0
    // 0xe9a0 (Windows-31J)
    // 0x9b06 (UTF-16BE)
    if (argCheck == '鬆') {
        return true;
    }
    // No.6744
    // 説明:e9a1
    // 0xe9a1 (Windows-31J)
    // 0x9b18 (UTF-16BE)
    if (argCheck == '鬘') {
        return true;
    }
    // No.6745
    // 説明:e9a2
    // 0xe9a2 (Windows-31J)
    // 0x9b1a (UTF-16BE)
    if (argCheck == '鬚') {
        return true;
    }
    // No.6746
    // 説明:e9a3
    // 0xe9a3 (Windows-31J)
    // 0x9b1f (UTF-16BE)
    if (argCheck == '鬟') {
        return true;
    }
    // No.6747
    // 説明:e9a4
    // 0xe9a4 (Windows-31J)
    // 0x9b22 (UTF-16BE)
    if (argCheck == '鬢') {
        return true;
    }
    // No.6748
    // 説明:e9a5
    // 0xe9a5 (Windows-31J)
    // 0x9b23 (UTF-16BE)
    if (argCheck == '鬣') {
        return true;
    }
    // No.6749
    // 説明:e9a6
    // 0xe9a6 (Windows-31J)
    // 0x9b25 (UTF-16BE)
    if (argCheck == '鬥') {
        return true;
    }
    // No.6750
    // 説明:e9a7
    // 0xe9a7 (Windows-31J)
    // 0x9b27 (UTF-16BE)
    if (argCheck == '鬧') {
        return true;
    }
    // No.6751
    // 説明:e9a8
    // 0xe9a8 (Windows-31J)
    // 0x9b28 (UTF-16BE)
    if (argCheck == '鬨') {
        return true;
    }
    // No.6752
    // 説明:e9a9
    // 0xe9a9 (Windows-31J)
    // 0x9b29 (UTF-16BE)
    if (argCheck == '鬩') {
        return true;
    }
    // No.6753
    // 説明:e9aa
    // 0xe9aa (Windows-31J)
    // 0x9b2a (UTF-16BE)
    if (argCheck == '鬪') {
        return true;
    }
    // No.6754
    // 説明:e9ab
    // 0xe9ab (Windows-31J)
    // 0x9b2e (UTF-16BE)
    if (argCheck == '鬮') {
        return true;
    }
    // No.6755
    // 説明:e9ac
    // 0xe9ac (Windows-31J)
    // 0x9b2f (UTF-16BE)
    if (argCheck == '鬯') {
        return true;
    }
    // No.6756
    // 説明:e9ad
    // 0xe9ad (Windows-31J)
    // 0x9b32 (UTF-16BE)
    if (argCheck == '鬲') {
        return true;
    }
    // No.6757
    // 説明:e9ae
    // 0xe9ae (Windows-31J)
    // 0x9b44 (UTF-16BE)
    if (argCheck == '魄') {
        return true;
    }
    // No.6758
    // 説明:e9af
    // 0xe9af (Windows-31J)
    // 0x9b43 (UTF-16BE)
    if (argCheck == '魃') {
        return true;
    }
    // No.6759
    // 説明:e9b0
    // 0xe9b0 (Windows-31J)
    // 0x9b4f (UTF-16BE)
    if (argCheck == '魏') {
        return true;
    }
    // No.6760
    // 説明:e9b1
    // 0xe9b1 (Windows-31J)
    // 0x9b4d (UTF-16BE)
    if (argCheck == '魍') {
        return true;
    }
    // No.6761
    // 説明:e9b2
    // 0xe9b2 (Windows-31J)
    // 0x9b4e (UTF-16BE)
    if (argCheck == '魎') {
        return true;
    }
    // No.6762
    // 説明:e9b3
    // 0xe9b3 (Windows-31J)
    // 0x9b51 (UTF-16BE)
    if (argCheck == '魑') {
        return true;
    }
    // No.6763
    // 説明:e9b4
    // 0xe9b4 (Windows-31J)
    // 0x9b58 (UTF-16BE)
    if (argCheck == '魘') {
        return true;
    }
    // No.6764
    // 説明:e9b5
    // 0xe9b5 (Windows-31J)
    // 0x9b74 (UTF-16BE)
    if (argCheck == '魴') {
        return true;
    }
    // No.6765
    // 説明:e9b6
    // 0xe9b6 (Windows-31J)
    // 0x9b93 (UTF-16BE)
    if (argCheck == '鮓') {
        return true;
    }
    // No.6766
    // 説明:e9b7
    // 0xe9b7 (Windows-31J)
    // 0x9b83 (UTF-16BE)
    if (argCheck == '鮃') {
        return true;
    }
    // No.6767
    // 説明:e9b8
    // 0xe9b8 (Windows-31J)
    // 0x9b91 (UTF-16BE)
    if (argCheck == '鮑') {
        return true;
    }
    // No.6768
    // 説明:e9b9
    // 0xe9b9 (Windows-31J)
    // 0x9b96 (UTF-16BE)
    if (argCheck == '鮖') {
        return true;
    }
    // No.6769
    // 説明:e9ba
    // 0xe9ba (Windows-31J)
    // 0x9b97 (UTF-16BE)
    if (argCheck == '鮗') {
        return true;
    }
    // No.6770
    // 説明:e9bb
    // 0xe9bb (Windows-31J)
    // 0x9b9f (UTF-16BE)
    if (argCheck == '鮟') {
        return true;
    }
    // No.6771
    // 説明:e9bc
    // 0xe9bc (Windows-31J)
    // 0x9ba0 (UTF-16BE)
    if (argCheck == '鮠') {
        return true;
    }
    // No.6772
    // 説明:e9bd
    // 0xe9bd (Windows-31J)
    // 0x9ba8 (UTF-16BE)
    if (argCheck == '鮨') {
        return true;
    }
    // No.6773
    // 説明:e9be
    // 0xe9be (Windows-31J)
    // 0x9bb4 (UTF-16BE)
    if (argCheck == '鮴') {
        return true;
    }
    // No.6774
    // 説明:e9bf
    // 0xe9bf (Windows-31J)
    // 0x9bc0 (UTF-16BE)
    if (argCheck == '鯀') {
        return true;
    }
    // No.6775
    // 説明:e9c0
    // 0xe9c0 (Windows-31J)
    // 0x9bca (UTF-16BE)
    if (argCheck == '鯊') {
        return true;
    }
    // No.6776
    // 説明:e9c1
    // 0xe9c1 (Windows-31J)
    // 0x9bb9 (UTF-16BE)
    if (argCheck == '鮹') {
        return true;
    }
    // No.6777
    // 説明:e9c2
    // 0xe9c2 (Windows-31J)
    // 0x9bc6 (UTF-16BE)
    if (argCheck == '鯆') {
        return true;
    }
    // No.6778
    // 説明:e9c3
    // 0xe9c3 (Windows-31J)
    // 0x9bcf (UTF-16BE)
    if (argCheck == '鯏') {
        return true;
    }
    // No.6779
    // 説明:e9c4
    // 0xe9c4 (Windows-31J)
    // 0x9bd1 (UTF-16BE)
    if (argCheck == '鯑') {
        return true;
    }
    // No.6780
    // 説明:e9c5
    // 0xe9c5 (Windows-31J)
    // 0x9bd2 (UTF-16BE)
    if (argCheck == '鯒') {
        return true;
    }
    // No.6781
    // 説明:e9c6
    // 0xe9c6 (Windows-31J)
    // 0x9be3 (UTF-16BE)
    if (argCheck == '鯣') {
        return true;
    }
    // No.6782
    // 説明:e9c7
    // 0xe9c7 (Windows-31J)
    // 0x9be2 (UTF-16BE)
    if (argCheck == '鯢') {
        return true;
    }
    // No.6783
    // 説明:e9c8
    // 0xe9c8 (Windows-31J)
    // 0x9be4 (UTF-16BE)
    if (argCheck == '鯤') {
        return true;
    }
    // No.6784
    // 説明:e9c9
    // 0xe9c9 (Windows-31J)
    // 0x9bd4 (UTF-16BE)
    if (argCheck == '鯔') {
        return true;
    }
    // No.6785
    // 説明:e9ca
    // 0xe9ca (Windows-31J)
    // 0x9be1 (UTF-16BE)
    if (argCheck == '鯡') {
        return true;
    }
    // No.6786
    // 説明:e9cb
    // 0xe9cb (Windows-31J)
    // 0x9c3a (UTF-16BE)
    if (argCheck == '鰺') {
        return true;
    }
    // No.6787
    // 説明:e9cc
    // 0xe9cc (Windows-31J)
    // 0x9bf2 (UTF-16BE)
    if (argCheck == '鯲') {
        return true;
    }
    // No.6788
    // 説明:e9cd
    // 0xe9cd (Windows-31J)
    // 0x9bf1 (UTF-16BE)
    if (argCheck == '鯱') {
        return true;
    }
    // No.6789
    // 説明:e9ce
    // 0xe9ce (Windows-31J)
    // 0x9bf0 (UTF-16BE)
    if (argCheck == '鯰') {
        return true;
    }
    // No.6790
    // 説明:e9cf
    // 0xe9cf (Windows-31J)
    // 0x9c15 (UTF-16BE)
    if (argCheck == '鰕') {
        return true;
    }
    // No.6791
    // 説明:e9d0
    // 0xe9d0 (Windows-31J)
    // 0x9c14 (UTF-16BE)
    if (argCheck == '鰔') {
        return true;
    }
    // No.6792
    // 説明:e9d1
    // 0xe9d1 (Windows-31J)
    // 0x9c09 (UTF-16BE)
    if (argCheck == '鰉') {
        return true;
    }
    // No.6793
    // 説明:e9d2
    // 0xe9d2 (Windows-31J)
    // 0x9c13 (UTF-16BE)
    if (argCheck == '鰓') {
        return true;
    }
    // No.6794
    // 説明:e9d3
    // 0xe9d3 (Windows-31J)
    // 0x9c0c (UTF-16BE)
    if (argCheck == '鰌') {
        return true;
    }
    // No.6795
    // 説明:e9d4
    // 0xe9d4 (Windows-31J)
    // 0x9c06 (UTF-16BE)
    if (argCheck == '鰆') {
        return true;
    }
    // No.6796
    // 説明:e9d5
    // 0xe9d5 (Windows-31J)
    // 0x9c08 (UTF-16BE)
    if (argCheck == '鰈') {
        return true;
    }
    // No.6797
    // 説明:e9d6
    // 0xe9d6 (Windows-31J)
    // 0x9c12 (UTF-16BE)
    if (argCheck == '鰒') {
        return true;
    }
    // No.6798
    // 説明:e9d7
    // 0xe9d7 (Windows-31J)
    // 0x9c0a (UTF-16BE)
    if (argCheck == '鰊') {
        return true;
    }
    // No.6799
    // 説明:e9d8
    // 0xe9d8 (Windows-31J)
    // 0x9c04 (UTF-16BE)
    if (argCheck == '鰄') {
        return true;
    }
    // No.6800
    // 説明:e9d9
    // 0xe9d9 (Windows-31J)
    // 0x9c2e (UTF-16BE)
    if (argCheck == '鰮') {
        return true;
    }
    // No.6801
    // 説明:e9da
    // 0xe9da (Windows-31J)
    // 0x9c1b (UTF-16BE)
    if (argCheck == '鰛') {
        return true;
    }
    // No.6802
    // 説明:e9db
    // 0xe9db (Windows-31J)
    // 0x9c25 (UTF-16BE)
    if (argCheck == '鰥') {
        return true;
    }
    // No.6803
    // 説明:e9dc
    // 0xe9dc (Windows-31J)
    // 0x9c24 (UTF-16BE)
    if (argCheck == '鰤') {
        return true;
    }
    // No.6804
    // 説明:e9dd
    // 0xe9dd (Windows-31J)
    // 0x9c21 (UTF-16BE)
    if (argCheck == '鰡') {
        return true;
    }
    // No.6805
    // 説明:e9de
    // 0xe9de (Windows-31J)
    // 0x9c30 (UTF-16BE)
    if (argCheck == '鰰') {
        return true;
    }
    // No.6806
    // 説明:e9df
    // 0xe9df (Windows-31J)
    // 0x9c47 (UTF-16BE)
    if (argCheck == '鱇') {
        return true;
    }
    // No.6807
    // 説明:e9e0
    // 0xe9e0 (Windows-31J)
    // 0x9c32 (UTF-16BE)
    if (argCheck == '鰲') {
        return true;
    }
    // No.6808
    // 説明:e9e1
    // 0xe9e1 (Windows-31J)
    // 0x9c46 (UTF-16BE)
    if (argCheck == '鱆') {
        return true;
    }
    // No.6809
    // 説明:e9e2
    // 0xe9e2 (Windows-31J)
    // 0x9c3e (UTF-16BE)
    if (argCheck == '鰾') {
        return true;
    }
    // No.6810
    // 説明:e9e3
    // 0xe9e3 (Windows-31J)
    // 0x9c5a (UTF-16BE)
    if (argCheck == '鱚') {
        return true;
    }
    // No.6811
    // 説明:e9e4
    // 0xe9e4 (Windows-31J)
    // 0x9c60 (UTF-16BE)
    if (argCheck == '鱠') {
        return true;
    }
    // No.6812
    // 説明:e9e5
    // 0xe9e5 (Windows-31J)
    // 0x9c67 (UTF-16BE)
    if (argCheck == '鱧') {
        return true;
    }
    // No.6813
    // 説明:e9e6
    // 0xe9e6 (Windows-31J)
    // 0x9c76 (UTF-16BE)
    if (argCheck == '鱶') {
        return true;
    }
    // No.6814
    // 説明:e9e7
    // 0xe9e7 (Windows-31J)
    // 0x9c78 (UTF-16BE)
    if (argCheck == '鱸') {
        return true;
    }
    // No.6815
    // 説明:e9e8
    // 0xe9e8 (Windows-31J)
    // 0x9ce7 (UTF-16BE)
    if (argCheck == '鳧') {
        return true;
    }
    // No.6816
    // 説明:e9e9
    // 0xe9e9 (Windows-31J)
    // 0x9cec (UTF-16BE)
    if (argCheck == '鳬') {
        return true;
    }
    // No.6817
    // 説明:e9ea
    // 0xe9ea (Windows-31J)
    // 0x9cf0 (UTF-16BE)
    if (argCheck == '鳰') {
        return true;
    }
    // No.6818
    // 説明:e9eb
    // 0xe9eb (Windows-31J)
    // 0x9d09 (UTF-16BE)
    if (argCheck == '鴉') {
        return true;
    }
    // No.6819
    // 説明:e9ec
    // 0xe9ec (Windows-31J)
    // 0x9d08 (UTF-16BE)
    if (argCheck == '鴈') {
        return true;
    }
    // No.6820
    // 説明:e9ed
    // 0xe9ed (Windows-31J)
    // 0x9ceb (UTF-16BE)
    if (argCheck == '鳫') {
        return true;
    }
    // No.6821
    // 説明:e9ee
    // 0xe9ee (Windows-31J)
    // 0x9d03 (UTF-16BE)
    if (argCheck == '鴃') {
        return true;
    }
    // No.6822
    // 説明:e9ef
    // 0xe9ef (Windows-31J)
    // 0x9d06 (UTF-16BE)
    if (argCheck == '鴆') {
        return true;
    }
    // No.6823
    // 説明:e9f0
    // 0xe9f0 (Windows-31J)
    // 0x9d2a (UTF-16BE)
    if (argCheck == '鴪') {
        return true;
    }
    // No.6824
    // 説明:e9f1
    // 0xe9f1 (Windows-31J)
    // 0x9d26 (UTF-16BE)
    if (argCheck == '鴦') {
        return true;
    }
    // No.6825
    // 説明:e9f2
    // 0xe9f2 (Windows-31J)
    // 0x9daf (UTF-16BE)
    if (argCheck == '鶯') {
        return true;
    }
    // No.6826
    // 説明:e9f3
    // 0xe9f3 (Windows-31J)
    // 0x9d23 (UTF-16BE)
    if (argCheck == '鴣') {
        return true;
    }
    // No.6827
    // 説明:e9f4
    // 0xe9f4 (Windows-31J)
    // 0x9d1f (UTF-16BE)
    if (argCheck == '鴟') {
        return true;
    }
    // No.6828
    // 説明:e9f5
    // 0xe9f5 (Windows-31J)
    // 0x9d44 (UTF-16BE)
    if (argCheck == '鵄') {
        return true;
    }
    // No.6829
    // 説明:e9f6
    // 0xe9f6 (Windows-31J)
    // 0x9d15 (UTF-16BE)
    if (argCheck == '鴕') {
        return true;
    }
    // No.6830
    // 説明:e9f7
    // 0xe9f7 (Windows-31J)
    // 0x9d12 (UTF-16BE)
    if (argCheck == '鴒') {
        return true;
    }
    // No.6831
    // 説明:e9f8
    // 0xe9f8 (Windows-31J)
    // 0x9d41 (UTF-16BE)
    if (argCheck == '鵁') {
        return true;
    }
    // No.6832
    // 説明:e9f9
    // 0xe9f9 (Windows-31J)
    // 0x9d3f (UTF-16BE)
    if (argCheck == '鴿') {
        return true;
    }
    // No.6833
    // 説明:e9fa
    // 0xe9fa (Windows-31J)
    // 0x9d3e (UTF-16BE)
    if (argCheck == '鴾') {
        return true;
    }
    // No.6834
    // 説明:e9fb
    // 0xe9fb (Windows-31J)
    // 0x9d46 (UTF-16BE)
    if (argCheck == '鵆') {
        return true;
    }
    // No.6835
    // 説明:e9fc
    // 0xe9fc (Windows-31J)
    // 0x9d48 (UTF-16BE)
    if (argCheck == '鵈') {
        return true;
    }
    // No.6836
    // 説明:ea40
    // 0xea40 (Windows-31J)
    // 0x9d5d (UTF-16BE)
    if (argCheck == '鵝') {
        return true;
    }
    // No.6837
    // 説明:ea41
    // 0xea41 (Windows-31J)
    // 0x9d5e (UTF-16BE)
    if (argCheck == '鵞') {
        return true;
    }
    // No.6838
    // 説明:ea42
    // 0xea42 (Windows-31J)
    // 0x9d64 (UTF-16BE)
    if (argCheck == '鵤') {
        return true;
    }
    // No.6839
    // 説明:ea43
    // 0xea43 (Windows-31J)
    // 0x9d51 (UTF-16BE)
    if (argCheck == '鵑') {
        return true;
    }
    // No.6840
    // 説明:ea44
    // 0xea44 (Windows-31J)
    // 0x9d50 (UTF-16BE)
    if (argCheck == '鵐') {
        return true;
    }
    // No.6841
    // 説明:ea45
    // 0xea45 (Windows-31J)
    // 0x9d59 (UTF-16BE)
    if (argCheck == '鵙') {
        return true;
    }
    // No.6842
    // 説明:ea46
    // 0xea46 (Windows-31J)
    // 0x9d72 (UTF-16BE)
    if (argCheck == '鵲') {
        return true;
    }
    // No.6843
    // 説明:ea47
    // 0xea47 (Windows-31J)
    // 0x9d89 (UTF-16BE)
    if (argCheck == '鶉') {
        return true;
    }
    // No.6844
    // 説明:ea48
    // 0xea48 (Windows-31J)
    // 0x9d87 (UTF-16BE)
    if (argCheck == '鶇') {
        return true;
    }
    // No.6845
    // 説明:ea49
    // 0xea49 (Windows-31J)
    // 0x9dab (UTF-16BE)
    if (argCheck == '鶫') {
        return true;
    }
    // No.6846
    // 説明:ea4a
    // 0xea4a (Windows-31J)
    // 0x9d6f (UTF-16BE)
    if (argCheck == '鵯') {
        return true;
    }
    // No.6847
    // 説明:ea4b
    // 0xea4b (Windows-31J)
    // 0x9d7a (UTF-16BE)
    if (argCheck == '鵺') {
        return true;
    }
    // No.6848
    // 説明:ea4c
    // 0xea4c (Windows-31J)
    // 0x9d9a (UTF-16BE)
    if (argCheck == '鶚') {
        return true;
    }
    // No.6849
    // 説明:ea4d
    // 0xea4d (Windows-31J)
    // 0x9da4 (UTF-16BE)
    if (argCheck == '鶤') {
        return true;
    }
    // No.6850
    // 説明:ea4e
    // 0xea4e (Windows-31J)
    // 0x9da9 (UTF-16BE)
    if (argCheck == '鶩') {
        return true;
    }
    // No.6851
    // 説明:ea4f
    // 0xea4f (Windows-31J)
    // 0x9db2 (UTF-16BE)
    if (argCheck == '鶲') {
        return true;
    }
    // No.6852
    // 説明:ea50
    // 0xea50 (Windows-31J)
    // 0x9dc4 (UTF-16BE)
    if (argCheck == '鷄') {
        return true;
    }
    // No.6853
    // 説明:ea51
    // 0xea51 (Windows-31J)
    // 0x9dc1 (UTF-16BE)
    if (argCheck == '鷁') {
        return true;
    }
    // No.6854
    // 説明:ea52
    // 0xea52 (Windows-31J)
    // 0x9dbb (UTF-16BE)
    if (argCheck == '鶻') {
        return true;
    }
    // No.6855
    // 説明:ea53
    // 0xea53 (Windows-31J)
    // 0x9db8 (UTF-16BE)
    if (argCheck == '鶸') {
        return true;
    }
    // No.6856
    // 説明:ea54
    // 0xea54 (Windows-31J)
    // 0x9dba (UTF-16BE)
    if (argCheck == '鶺') {
        return true;
    }
    // No.6857
    // 説明:ea55
    // 0xea55 (Windows-31J)
    // 0x9dc6 (UTF-16BE)
    if (argCheck == '鷆') {
        return true;
    }
    // No.6858
    // 説明:ea56
    // 0xea56 (Windows-31J)
    // 0x9dcf (UTF-16BE)
    if (argCheck == '鷏') {
        return true;
    }
    // No.6859
    // 説明:ea57
    // 0xea57 (Windows-31J)
    // 0x9dc2 (UTF-16BE)
    if (argCheck == '鷂') {
        return true;
    }
    // No.6860
    // 説明:ea58
    // 0xea58 (Windows-31J)
    // 0x9dd9 (UTF-16BE)
    if (argCheck == '鷙') {
        return true;
    }
    // No.6861
    // 説明:ea59
    // 0xea59 (Windows-31J)
    // 0x9dd3 (UTF-16BE)
    if (argCheck == '鷓') {
        return true;
    }
    // No.6862
    // 説明:ea5a
    // 0xea5a (Windows-31J)
    // 0x9df8 (UTF-16BE)
    if (argCheck == '鷸') {
        return true;
    }
    // No.6863
    // 説明:ea5b
    // 0xea5b (Windows-31J)
    // 0x9de6 (UTF-16BE)
    if (argCheck == '鷦') {
        return true;
    }
    // No.6864
    // 説明:ea5c
    // 0xea5c (Windows-31J)
    // 0x9ded (UTF-16BE)
    if (argCheck == '鷭') {
        return true;
    }
    // No.6865
    // 説明:ea5d
    // 0xea5d (Windows-31J)
    // 0x9def (UTF-16BE)
    if (argCheck == '鷯') {
        return true;
    }
    // No.6866
    // 説明:ea5e
    // 0xea5e (Windows-31J)
    // 0x9dfd (UTF-16BE)
    if (argCheck == '鷽') {
        return true;
    }
    // No.6867
    // 説明:ea5f
    // 0xea5f (Windows-31J)
    // 0x9e1a (UTF-16BE)
    if (argCheck == '鸚') {
        return true;
    }
    // No.6868
    // 説明:ea60
    // 0xea60 (Windows-31J)
    // 0x9e1b (UTF-16BE)
    if (argCheck == '鸛') {
        return true;
    }
    // No.6869
    // 説明:ea61
    // 0xea61 (Windows-31J)
    // 0x9e1e (UTF-16BE)
    if (argCheck == '鸞') {
        return true;
    }
    // No.6870
    // 説明:ea62
    // 0xea62 (Windows-31J)
    // 0x9e75 (UTF-16BE)
    if (argCheck == '鹵') {
        return true;
    }
    // No.6871
    // 説明:ea63
    // 0xea63 (Windows-31J)
    // 0x9e79 (UTF-16BE)
    if (argCheck == '鹹') {
        return true;
    }
    // No.6872
    // 説明:ea64
    // 0xea64 (Windows-31J)
    // 0x9e7d (UTF-16BE)
    if (argCheck == '鹽') {
        return true;
    }
    // No.6873
    // 説明:ea65
    // 0xea65 (Windows-31J)
    // 0x9e81 (UTF-16BE)
    if (argCheck == '麁') {
        return true;
    }
    // No.6874
    // 説明:ea66
    // 0xea66 (Windows-31J)
    // 0x9e88 (UTF-16BE)
    if (argCheck == '麈') {
        return true;
    }
    // No.6875
    // 説明:ea67
    // 0xea67 (Windows-31J)
    // 0x9e8b (UTF-16BE)
    if (argCheck == '麋') {
        return true;
    }
    // No.6876
    // 説明:ea68
    // 0xea68 (Windows-31J)
    // 0x9e8c (UTF-16BE)
    if (argCheck == '麌') {
        return true;
    }
    // No.6877
    // 説明:ea69
    // 0xea69 (Windows-31J)
    // 0x9e92 (UTF-16BE)
    if (argCheck == '麒') {
        return true;
    }
    // No.6878
    // 説明:ea6a
    // 0xea6a (Windows-31J)
    // 0x9e95 (UTF-16BE)
    if (argCheck == '麕') {
        return true;
    }
    // No.6879
    // 説明:ea6b
    // 0xea6b (Windows-31J)
    // 0x9e91 (UTF-16BE)
    if (argCheck == '麑') {
        return true;
    }
    // No.6880
    // 説明:ea6c
    // 0xea6c (Windows-31J)
    // 0x9e9d (UTF-16BE)
    if (argCheck == '麝') {
        return true;
    }
    // No.6881
    // 説明:ea6d
    // 0xea6d (Windows-31J)
    // 0x9ea5 (UTF-16BE)
    if (argCheck == '麥') {
        return true;
    }
    // No.6882
    // 説明:ea6e
    // 0xea6e (Windows-31J)
    // 0x9ea9 (UTF-16BE)
    if (argCheck == '麩') {
        return true;
    }
    // No.6883
    // 説明:ea6f
    // 0xea6f (Windows-31J)
    // 0x9eb8 (UTF-16BE)
    if (argCheck == '麸') {
        return true;
    }
    // No.6884
    // 説明:ea70
    // 0xea70 (Windows-31J)
    // 0x9eaa (UTF-16BE)
    if (argCheck == '麪') {
        return true;
    }
    // No.6885
    // 説明:ea71
    // 0xea71 (Windows-31J)
    // 0x9ead (UTF-16BE)
    if (argCheck == '麭') {
        return true;
    }
    // No.6886
    // 説明:ea72
    // 0xea72 (Windows-31J)
    // 0x9761 (UTF-16BE)
    if (argCheck == '靡') {
        return true;
    }
    // No.6887
    // 説明:ea73
    // 0xea73 (Windows-31J)
    // 0x9ecc (UTF-16BE)
    if (argCheck == '黌') {
        return true;
    }
    // No.6888
    // 説明:ea74
    // 0xea74 (Windows-31J)
    // 0x9ece (UTF-16BE)
    if (argCheck == '黎') {
        return true;
    }
    // No.6889
    // 説明:ea75
    // 0xea75 (Windows-31J)
    // 0x9ecf (UTF-16BE)
    if (argCheck == '黏') {
        return true;
    }
    // No.6890
    // 説明:ea76
    // 0xea76 (Windows-31J)
    // 0x9ed0 (UTF-16BE)
    if (argCheck == '黐') {
        return true;
    }
    // No.6891
    // 説明:ea77
    // 0xea77 (Windows-31J)
    // 0x9ed4 (UTF-16BE)
    if (argCheck == '黔') {
        return true;
    }
    // No.6892
    // 説明:ea78
    // 0xea78 (Windows-31J)
    // 0x9edc (UTF-16BE)
    if (argCheck == '黜') {
        return true;
    }
    // No.6893
    // 説明:ea79
    // 0xea79 (Windows-31J)
    // 0x9ede (UTF-16BE)
    if (argCheck == '點') {
        return true;
    }
    // No.6894
    // 説明:ea7a
    // 0xea7a (Windows-31J)
    // 0x9edd (UTF-16BE)
    if (argCheck == '黝') {
        return true;
    }
    // No.6895
    // 説明:ea7b
    // 0xea7b (Windows-31J)
    // 0x9ee0 (UTF-16BE)
    if (argCheck == '黠') {
        return true;
    }
    // No.6896
    // 説明:ea7c
    // 0xea7c (Windows-31J)
    // 0x9ee5 (UTF-16BE)
    if (argCheck == '黥') {
        return true;
    }
    // No.6897
    // 説明:ea7d
    // 0xea7d (Windows-31J)
    // 0x9ee8 (UTF-16BE)
    if (argCheck == '黨') {
        return true;
    }
    // No.6898
    // 説明:ea7e
    // 0xea7e (Windows-31J)
    // 0x9eef (UTF-16BE)
    if (argCheck == '黯') {
        return true;
    }
    // No.6899
    // 説明:ea80
    // 0xea80 (Windows-31J)
    // 0x9ef4 (UTF-16BE)
    if (argCheck == '黴') {
        return true;
    }
    // No.6900
    // 説明:ea81
    // 0xea81 (Windows-31J)
    // 0x9ef6 (UTF-16BE)
    if (argCheck == '黶') {
        return true;
    }
    // No.6901
    // 説明:ea82
    // 0xea82 (Windows-31J)
    // 0x9ef7 (UTF-16BE)
    if (argCheck == '黷') {
        return true;
    }
    // No.6902
    // 説明:ea83
    // 0xea83 (Windows-31J)
    // 0x9ef9 (UTF-16BE)
    if (argCheck == '黹') {
        return true;
    }
    // No.6903
    // 説明:ea84
    // 0xea84 (Windows-31J)
    // 0x9efb (UTF-16BE)
    if (argCheck == '黻') {
        return true;
    }
    // No.6904
    // 説明:ea85
    // 0xea85 (Windows-31J)
    // 0x9efc (UTF-16BE)
    if (argCheck == '黼') {
        return true;
    }
    // No.6905
    // 説明:ea86
    // 0xea86 (Windows-31J)
    // 0x9efd (UTF-16BE)
    if (argCheck == '黽') {
        return true;
    }
    // No.6906
    // 説明:ea87
    // 0xea87 (Windows-31J)
    // 0x9f07 (UTF-16BE)
    if (argCheck == '鼇') {
        return true;
    }
    // No.6907
    // 説明:ea88
    // 0xea88 (Windows-31J)
    // 0x9f08 (UTF-16BE)
    if (argCheck == '鼈') {
        return true;
    }
    // No.6908
    // 説明:ea89
    // 0xea89 (Windows-31J)
    // 0x76b7 (UTF-16BE)
    if (argCheck == '皷') {
        return true;
    }
    // No.6909
    // 説明:ea8a
    // 0xea8a (Windows-31J)
    // 0x9f15 (UTF-16BE)
    if (argCheck == '鼕') {
        return true;
    }
    // No.6910
    // 説明:ea8b
    // 0xea8b (Windows-31J)
    // 0x9f21 (UTF-16BE)
    if (argCheck == '鼡') {
        return true;
    }
    // No.6911
    // 説明:ea8c
    // 0xea8c (Windows-31J)
    // 0x9f2c (UTF-16BE)
    if (argCheck == '鼬') {
        return true;
    }
    // No.6912
    // 説明:ea8d
    // 0xea8d (Windows-31J)
    // 0x9f3e (UTF-16BE)
    if (argCheck == '鼾') {
        return true;
    }
    // No.6913
    // 説明:ea8e
    // 0xea8e (Windows-31J)
    // 0x9f4a (UTF-16BE)
    if (argCheck == '齊') {
        return true;
    }
    // No.6914
    // 説明:ea8f
    // 0xea8f (Windows-31J)
    // 0x9f52 (UTF-16BE)
    if (argCheck == '齒') {
        return true;
    }
    // No.6915
    // 説明:ea90
    // 0xea90 (Windows-31J)
    // 0x9f54 (UTF-16BE)
    if (argCheck == '齔') {
        return true;
    }
    // No.6916
    // 説明:ea91
    // 0xea91 (Windows-31J)
    // 0x9f63 (UTF-16BE)
    if (argCheck == '齣') {
        return true;
    }
    // No.6917
    // 説明:ea92
    // 0xea92 (Windows-31J)
    // 0x9f5f (UTF-16BE)
    if (argCheck == '齟') {
        return true;
    }
    // No.6918
    // 説明:ea93
    // 0xea93 (Windows-31J)
    // 0x9f60 (UTF-16BE)
    if (argCheck == '齠') {
        return true;
    }
    // No.6919
    // 説明:ea94
    // 0xea94 (Windows-31J)
    // 0x9f61 (UTF-16BE)
    if (argCheck == '齡') {
        return true;
    }
    // No.6920
    // 説明:ea95
    // 0xea95 (Windows-31J)
    // 0x9f66 (UTF-16BE)
    if (argCheck == '齦') {
        return true;
    }
    // No.6921
    // 説明:ea96
    // 0xea96 (Windows-31J)
    // 0x9f67 (UTF-16BE)
    if (argCheck == '齧') {
        return true;
    }
    // No.6922
    // 説明:ea97
    // 0xea97 (Windows-31J)
    // 0x9f6c (UTF-16BE)
    if (argCheck == '齬') {
        return true;
    }
    // No.6923
    // 説明:ea98
    // 0xea98 (Windows-31J)
    // 0x9f6a (UTF-16BE)
    if (argCheck == '齪') {
        return true;
    }
    // No.6924
    // 説明:ea99
    // 0xea99 (Windows-31J)
    // 0x9f77 (UTF-16BE)
    if (argCheck == '齷') {
        return true;
    }
    // No.6925
    // 説明:ea9a
    // 0xea9a (Windows-31J)
    // 0x9f72 (UTF-16BE)
    if (argCheck == '齲') {
        return true;
    }
    // No.6926
    // 説明:ea9b
    // 0xea9b (Windows-31J)
    // 0x9f76 (UTF-16BE)
    if (argCheck == '齶') {
        return true;
    }
    // No.6927
    // 説明:ea9c
    // 0xea9c (Windows-31J)
    // 0x9f95 (UTF-16BE)
    if (argCheck == '龕') {
        return true;
    }
    // No.6928
    // 説明:ea9d
    // 0xea9d (Windows-31J)
    // 0x9f9c (UTF-16BE)
    if (argCheck == '龜') {
        return true;
    }
    // No.6929
    // 説明:ea9e
    // 0xea9e (Windows-31J)
    // 0x9fa0 (UTF-16BE)
    if (argCheck == '龠') {
        return true;
    }
    // No.6930
    // 説明:ea9f
    // 0xea9f (Windows-31J)
    // 0x582f (UTF-16BE)
    if (argCheck == '堯') {
        return true;
    }
    // No.6931
    // 説明:eaa0
    // 0xeaa0 (Windows-31J)
    // 0x69c7 (UTF-16BE)
    if (argCheck == '槇') {
        return true;
    }
    // No.6932
    // 説明:eaa1
    // 0xeaa1 (Windows-31J)
    // 0x9059 (UTF-16BE)
    if (argCheck == '遙') {
        return true;
    }
    // No.6933
    // 説明:eaa2
    // 0xeaa2 (Windows-31J)
    // 0x7464 (UTF-16BE)
    if (argCheck == '瑤') {
        return true;
    }
    // No.6934
    // 説明:eaa3
    // 0xeaa3 (Windows-31J)
    // 0x51dc (UTF-16BE)
    if (argCheck == '凜') {
        return true;
    }
    // No.6935
    // 説明:eaa4
    // 0xeaa4 (Windows-31J)
    // 0x7199 (UTF-16BE)
    if (argCheck == '熙') {
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
SampleShiftJISCharacterGroup.prototype.matchAll = function(/* string */ argCheck) {
    /* パラメータの数、型チェックを行います。 */
    if (arguments.length !== 1) {
        throw new Error("[ArgumentException]: SampleShiftJISCharacterGroup.matchAll のパラメータは[1]個である必要があります。しかし実際には[" + arguments.length +  "]個のパラメータを伴って呼び出されました。");
    }
    if (typeof(argCheck) != "string") {
        throw new Error("[ArgumentException]: SampleShiftJISCharacterGroup.matchAll の1番目のパラメータは[string]型でなくてはなりません。しかし実際には[" + typeof(argCheck) + "]型が与えられました。");
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
SampleShiftJISCharacterGroup.prototype.matchAny = function(/* string */ argCheck) {
    /* パラメータの数、型チェックを行います。 */
    if (arguments.length !== 1) {
        throw new Error("[ArgumentException]: SampleShiftJISCharacterGroup.matchAny のパラメータは[1]個である必要があります。しかし実際には[" + arguments.length +  "]個のパラメータを伴って呼び出されました。");
    }
    if (typeof(argCheck) != "string") {
        throw new Error("[ArgumentException]: SampleShiftJISCharacterGroup.matchAny の1番目のパラメータは[string]型でなくてはなりません。しかし実際には[" + typeof(argCheck) + "]型が与えられました。");
    }

    var arraySize = argCheck.length;
    for (index = 0; index < arraySize; index++) {
        if (this.match(argCheck.charAt(index))) {
            return true;
        }
    }
    return false;
};
/* クラス[SampleShiftJISCharacterGroup]宣言の終了。 */

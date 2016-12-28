' このソースコードは blanco Frameworkによって自動生成されています。
Imports System

Namespace blanco.sample.charactergroup
    ''' <summary>サンプル。IBM拡張文字 0xfa40-fc4b。115-119区。blancoCharacterGroupの実装には影響しません。</summary>
    Public Class SampleIbmKakutyouMojiCharacterGroup

        ''' <summary>文字グループに含まれる文字であるかどうかを判定します。</summary>
        ''' <param name="argCheck">チェックを行いたい文字。</param>
        ''' <returns>文字グループに含まれていればture。グループに含まれない文字であればfalse。</returns>
        Public Function Match(argCheck As Char) As Boolean
            ' No.1
            ' 説明:fa40: 数字の１。
            ' 0xfa40 (Windows-31J)
            ' 0x2170 (UTF-16BE)
            If (argCheck = "ⅰ"c) Then
                Return true
            End If
            ' No.2
            ' 0xfa41 (Windows-31J)
            ' 0x2171 (UTF-16BE)
            If (argCheck = "ⅱ"c) Then
                Return true
            End If
            ' No.3
            ' 0xfa42 (Windows-31J)
            ' 0x2172 (UTF-16BE)
            If (argCheck = "ⅲ"c) Then
                Return true
            End If
            ' No.4
            ' 0xfa43 (Windows-31J)
            ' 0x2173 (UTF-16BE)
            If (argCheck = "ⅳ"c) Then
                Return true
            End If
            ' No.5
            ' 0xfa44 (Windows-31J)
            ' 0x2174 (UTF-16BE)
            If (argCheck = "ⅴ"c) Then
                Return true
            End If
            ' No.6
            ' 0xfa45 (Windows-31J)
            ' 0x2175 (UTF-16BE)
            If (argCheck = "ⅵ"c) Then
                Return true
            End If
            ' No.7
            ' 0xfa46 (Windows-31J)
            ' 0x2176 (UTF-16BE)
            If (argCheck = "ⅶ"c) Then
                Return true
            End If
            ' No.8
            ' 0xfa47 (Windows-31J)
            ' 0x2177 (UTF-16BE)
            If (argCheck = "ⅷ"c) Then
                Return true
            End If
            ' No.9
            ' 0xfa48 (Windows-31J)
            ' 0x2178 (UTF-16BE)
            If (argCheck = "ⅸ"c) Then
                Return true
            End If
            ' No.10
            ' 説明:fa49: 数字の１０。
            ' 0xfa49 (Windows-31J)
            ' 0x2179 (UTF-16BE)
            If (argCheck = "ⅹ"c) Then
                Return true
            End If
            ' No.11
            ' 説明:fa4a→8754: ローマ数字の１。(NEC特殊文字にマップされています) (※重複符号化)
            ' 0x8754 (Windows-31J)
            ' 0x2160 (UTF-16BE)
            If (argCheck = "Ⅰ"c) Then
                Return true
            End If
            ' No.12
            ' 説明:fa4b→8755: ローマ数字の２。(NEC特殊文字にマップされています) (※重複符号化)
            ' 0x8755 (Windows-31J)
            ' 0x2161 (UTF-16BE)
            If (argCheck = "Ⅱ"c) Then
                Return true
            End If
            ' No.13
            ' 説明:fa4c→875b: ローマ数字の３。(NEC特殊文字にマップされています) (※重複符号化)
            ' 0x8756 (Windows-31J)
            ' 0x2162 (UTF-16BE)
            If (argCheck = "Ⅲ"c) Then
                Return true
            End If
            ' No.14
            ' 説明:fa4d→8757: ローマ数字の４。(NEC特殊文字にマップされています) (※重複符号化)
            ' 0x8757 (Windows-31J)
            ' 0x2163 (UTF-16BE)
            If (argCheck = "Ⅳ"c) Then
                Return true
            End If
            ' No.15
            ' 説明:fa4e→8758: ローマ数字の５。(NEC特殊文字にマップされています) (※重複符号化)
            ' 0x8758 (Windows-31J)
            ' 0x2164 (UTF-16BE)
            If (argCheck = "Ⅴ"c) Then
                Return true
            End If
            ' No.16
            ' 説明:fa4f→8759: ローマ数字の６。(NEC特殊文字にマップされています) (※重複符号化)
            ' 0x8759 (Windows-31J)
            ' 0x2165 (UTF-16BE)
            If (argCheck = "Ⅵ"c) Then
                Return true
            End If
            ' No.17
            ' 説明:fa50→875a: ローマ数字の７。(NEC特殊文字にマップされています) (※重複符号化)
            ' 0x875a (Windows-31J)
            ' 0x2166 (UTF-16BE)
            If (argCheck = "Ⅶ"c) Then
                Return true
            End If
            ' No.18
            ' 説明:fa51→875b: ローマ数字の８。(NEC特殊文字にマップされています) (※重複符号化)
            ' 0x875b (Windows-31J)
            ' 0x2167 (UTF-16BE)
            If (argCheck = "Ⅷ"c) Then
                Return true
            End If
            ' No.19
            ' 説明:fa52→875c: ローマ数字の９。(NEC特殊文字にマップされています) (※重複符号化)
            ' 0x875c (Windows-31J)
            ' 0x2168 (UTF-16BE)
            If (argCheck = "Ⅸ"c) Then
                Return true
            End If
            ' No.20
            ' 説明:fa53→875d: ローマ数字の１０。(NEC特殊文字にマップされています) (※重複符号化)
            ' 0x875d (Windows-31J)
            ' 0x2169 (UTF-16BE)
            If (argCheck = "Ⅹ"c) Then
                Return true
            End If
            ' No.21
            ' 説明:fa54→81ca: (JIS X 0208-1983にマップされています) (※重複符号化)
            ' 0x81ca (Windows-31J)
            ' 0xffe2 (UTF-16BE)
            If (argCheck = "￢"c) Then
                Return true
            End If
            ' No.22
            ' 説明:fa55: 縦棒。
            ' 0xfa55 (Windows-31J)
            ' 0xffe4 (UTF-16BE)
            If (argCheck = "￤"c) Then
                Return true
            End If
            ' No.23
            ' 0xfa56 (Windows-31J)
            ' 0xff07 (UTF-16BE)
            If (argCheck = "＇"c) Then
                Return true
            End If
            ' No.24
            ' 0xfa57 (Windows-31J)
            ' 0xff02 (UTF-16BE)
            If (argCheck = ""＂"c) Then
                Return true
            End If
            ' No.25
            ' 説明:fa58→878a: （株）。(NEC特殊文字にマップされています) (※重複符号化)
            ' 0x878a (Windows-31J)
            ' 0x3231 (UTF-16BE)
            If (argCheck = "㈱"c) Then
                Return true
            End If
            ' No.26
            ' 説明:fa59→8782: No.。(NEC特殊文字にマップされています) (※重複符号化)
            ' 0x8782 (Windows-31J)
            ' 0x2116 (UTF-16BE)
            If (argCheck = "№"c) Then
                Return true
            End If
            ' No.27
            ' 説明:fa5a→8784: TEL。(NEC特殊文字にマップされています) (※重複符号化)
            ' 0x8784 (Windows-31J)
            ' 0x2121 (UTF-16BE)
            If (argCheck = "℡"c) Then
                Return true
            End If
            ' No.28
            ' 説明:fa5b→81e6: なぜならば。(JIS X 0208-1983にマップされています) (※重複符号化)
            ' 0x81e6 (Windows-31J)
            ' 0x2235 (UTF-16BE)
            If (argCheck = "∵"c) Then
                Return true
            End If
            ' No.29
            ' 説明:fa5c:
            ' 0xfa5c (Windows-31J)
            ' 0x7e8a (UTF-16BE)
            If (argCheck = "纊"c) Then
                Return true
            End If
            ' No.30
            ' 0xfa5d (Windows-31J)
            ' 0x891c (UTF-16BE)
            If (argCheck = "褜"c) Then
                Return true
            End If
            ' No.31
            ' 0xfa5e (Windows-31J)
            ' 0x9348 (UTF-16BE)
            If (argCheck = "鍈"c) Then
                Return true
            End If
            ' No.32
            ' 0xfa5f (Windows-31J)
            ' 0x9288 (UTF-16BE)
            If (argCheck = "銈"c) Then
                Return true
            End If
            ' No.33
            ' 0xfa60 (Windows-31J)
            ' 0x84dc (UTF-16BE)
            If (argCheck = "蓜"c) Then
                Return true
            End If
            ' No.34
            ' 0xfa61 (Windows-31J)
            ' 0x4fc9 (UTF-16BE)
            If (argCheck = "俉"c) Then
                Return true
            End If
            ' No.35
            ' 0xfa62 (Windows-31J)
            ' 0x70bb (UTF-16BE)
            If (argCheck = "炻"c) Then
                Return true
            End If
            ' No.36
            ' 0xfa63 (Windows-31J)
            ' 0x6631 (UTF-16BE)
            If (argCheck = "昱"c) Then
                Return true
            End If
            ' No.37
            ' 0xfa64 (Windows-31J)
            ' 0x68c8 (UTF-16BE)
            If (argCheck = "棈"c) Then
                Return true
            End If
            ' No.38
            ' 0xfa65 (Windows-31J)
            ' 0x92f9 (UTF-16BE)
            If (argCheck = "鋹"c) Then
                Return true
            End If
            ' No.39
            ' 0xfa66 (Windows-31J)
            ' 0x66fb (UTF-16BE)
            If (argCheck = "曻"c) Then
                Return true
            End If
            ' No.40
            ' 0xfa67 (Windows-31J)
            ' 0x5f45 (UTF-16BE)
            If (argCheck = "彅"c) Then
                Return true
            End If
            ' No.41
            ' 0xfa68 (Windows-31J)
            ' 0x4e28 (UTF-16BE)
            If (argCheck = "丨"c) Then
                Return true
            End If
            ' No.42
            ' 0xfa69 (Windows-31J)
            ' 0x4ee1 (UTF-16BE)
            If (argCheck = "仡"c) Then
                Return true
            End If
            ' No.43
            ' 0xfa6a (Windows-31J)
            ' 0x4efc (UTF-16BE)
            If (argCheck = "仼"c) Then
                Return true
            End If
            ' No.44
            ' 0xfa6b (Windows-31J)
            ' 0x4f00 (UTF-16BE)
            If (argCheck = "伀"c) Then
                Return true
            End If
            ' No.45
            ' 0xfa6c (Windows-31J)
            ' 0x4f03 (UTF-16BE)
            If (argCheck = "伃"c) Then
                Return true
            End If
            ' No.46
            ' 0xfa6d (Windows-31J)
            ' 0x4f39 (UTF-16BE)
            If (argCheck = "伹"c) Then
                Return true
            End If
            ' No.47
            ' 0xfa6e (Windows-31J)
            ' 0x4f56 (UTF-16BE)
            If (argCheck = "佖"c) Then
                Return true
            End If
            ' No.48
            ' 0xfa6f (Windows-31J)
            ' 0x4f92 (UTF-16BE)
            If (argCheck = "侒"c) Then
                Return true
            End If
            ' No.49
            ' 0xfa70 (Windows-31J)
            ' 0x4f8a (UTF-16BE)
            If (argCheck = "侊"c) Then
                Return true
            End If
            ' No.50
            ' 0xfa71 (Windows-31J)
            ' 0x4f9a (UTF-16BE)
            If (argCheck = "侚"c) Then
                Return true
            End If
            ' No.51
            ' 0xfa72 (Windows-31J)
            ' 0x4f94 (UTF-16BE)
            If (argCheck = "侔"c) Then
                Return true
            End If
            ' No.52
            ' 0xfa73 (Windows-31J)
            ' 0x4fcd (UTF-16BE)
            If (argCheck = "俍"c) Then
                Return true
            End If
            ' No.53
            ' 0xfa74 (Windows-31J)
            ' 0x5040 (UTF-16BE)
            If (argCheck = "偀"c) Then
                Return true
            End If
            ' No.54
            ' 0xfa75 (Windows-31J)
            ' 0x5022 (UTF-16BE)
            If (argCheck = "倢"c) Then
                Return true
            End If
            ' No.55
            ' 0xfa76 (Windows-31J)
            ' 0x4fff (UTF-16BE)
            If (argCheck = "俿"c) Then
                Return true
            End If
            ' No.56
            ' 0xfa77 (Windows-31J)
            ' 0x501e (UTF-16BE)
            If (argCheck = "倞"c) Then
                Return true
            End If
            ' No.57
            ' 0xfa78 (Windows-31J)
            ' 0x5046 (UTF-16BE)
            If (argCheck = "偆"c) Then
                Return true
            End If
            ' No.58
            ' 0xfa79 (Windows-31J)
            ' 0x5070 (UTF-16BE)
            If (argCheck = "偰"c) Then
                Return true
            End If
            ' No.59
            ' 0xfa7a (Windows-31J)
            ' 0x5042 (UTF-16BE)
            If (argCheck = "偂"c) Then
                Return true
            End If
            ' No.60
            ' 0xfa7b (Windows-31J)
            ' 0x5094 (UTF-16BE)
            If (argCheck = "傔"c) Then
                Return true
            End If
            ' No.61
            ' 0xfa7c (Windows-31J)
            ' 0x50f4 (UTF-16BE)
            If (argCheck = "僴"c) Then
                Return true
            End If
            ' No.62
            ' 0xfa7d (Windows-31J)
            ' 0x50d8 (UTF-16BE)
            If (argCheck = "僘"c) Then
                Return true
            End If
            ' No.63
            ' 説明:fa7e:
            ' 0xfa7e (Windows-31J)
            ' 0x514a (UTF-16BE)
            If (argCheck = "兊"c) Then
                Return true
            End If
            ' No.65
            ' 説明:fa80:
            ' 0xfa80 (Windows-31J)
            ' 0x5164 (UTF-16BE)
            If (argCheck = "兤"c) Then
                Return true
            End If
            ' No.66
            ' 0xfa81 (Windows-31J)
            ' 0x519d (UTF-16BE)
            If (argCheck = "冝"c) Then
                Return true
            End If
            ' No.67
            ' 0xfa82 (Windows-31J)
            ' 0x51be (UTF-16BE)
            If (argCheck = "冾"c) Then
                Return true
            End If
            ' No.68
            ' 0xfa83 (Windows-31J)
            ' 0x51ec (UTF-16BE)
            If (argCheck = "凬"c) Then
                Return true
            End If
            ' No.69
            ' 0xfa84 (Windows-31J)
            ' 0x5215 (UTF-16BE)
            If (argCheck = "刕"c) Then
                Return true
            End If
            ' No.70
            ' 0xfa85 (Windows-31J)
            ' 0x529c (UTF-16BE)
            If (argCheck = "劜"c) Then
                Return true
            End If
            ' No.71
            ' 0xfa86 (Windows-31J)
            ' 0x52a6 (UTF-16BE)
            If (argCheck = "劦"c) Then
                Return true
            End If
            ' No.72
            ' 0xfa87 (Windows-31J)
            ' 0x52c0 (UTF-16BE)
            If (argCheck = "勀"c) Then
                Return true
            End If
            ' No.73
            ' 0xfa88 (Windows-31J)
            ' 0x52db (UTF-16BE)
            If (argCheck = "勛"c) Then
                Return true
            End If
            ' No.74
            ' 0xfa89 (Windows-31J)
            ' 0x5300 (UTF-16BE)
            If (argCheck = "匀"c) Then
                Return true
            End If
            ' No.75
            ' 0xfa8a (Windows-31J)
            ' 0x5307 (UTF-16BE)
            If (argCheck = "匇"c) Then
                Return true
            End If
            ' No.76
            ' 0xfa8b (Windows-31J)
            ' 0x5324 (UTF-16BE)
            If (argCheck = "匤"c) Then
                Return true
            End If
            ' No.77
            ' 0xfa8c (Windows-31J)
            ' 0x5372 (UTF-16BE)
            If (argCheck = "卲"c) Then
                Return true
            End If
            ' No.78
            ' 0xfa8d (Windows-31J)
            ' 0x5393 (UTF-16BE)
            If (argCheck = "厓"c) Then
                Return true
            End If
            ' No.79
            ' 0xfa8e (Windows-31J)
            ' 0x53b2 (UTF-16BE)
            If (argCheck = "厲"c) Then
                Return true
            End If
            ' No.80
            ' 0xfa8f (Windows-31J)
            ' 0x53dd (UTF-16BE)
            If (argCheck = "叝"c) Then
                Return true
            End If
            ' No.81
            ' 0xfa90 (Windows-31J)
            ' 0xfa0e (UTF-16BE)
            If (argCheck = "﨎"c) Then
                Return true
            End If
            ' No.82
            ' 0xfa91 (Windows-31J)
            ' 0x549c (UTF-16BE)
            If (argCheck = "咜"c) Then
                Return true
            End If
            ' No.83
            ' 0xfa92 (Windows-31J)
            ' 0x548a (UTF-16BE)
            If (argCheck = "咊"c) Then
                Return true
            End If
            ' No.84
            ' 0xfa93 (Windows-31J)
            ' 0x54a9 (UTF-16BE)
            If (argCheck = "咩"c) Then
                Return true
            End If
            ' No.85
            ' 0xfa94 (Windows-31J)
            ' 0x54ff (UTF-16BE)
            If (argCheck = "哿"c) Then
                Return true
            End If
            ' No.86
            ' 0xfa95 (Windows-31J)
            ' 0x5586 (UTF-16BE)
            If (argCheck = "喆"c) Then
                Return true
            End If
            ' No.87
            ' 0xfa96 (Windows-31J)
            ' 0x5759 (UTF-16BE)
            If (argCheck = "坙"c) Then
                Return true
            End If
            ' No.88
            ' 0xfa97 (Windows-31J)
            ' 0x5765 (UTF-16BE)
            If (argCheck = "坥"c) Then
                Return true
            End If
            ' No.89
            ' 0xfa98 (Windows-31J)
            ' 0x57ac (UTF-16BE)
            If (argCheck = "垬"c) Then
                Return true
            End If
            ' No.90
            ' 0xfa99 (Windows-31J)
            ' 0x57c8 (UTF-16BE)
            If (argCheck = "埈"c) Then
                Return true
            End If
            ' No.91
            ' 0xfa9a (Windows-31J)
            ' 0x57c7 (UTF-16BE)
            If (argCheck = "埇"c) Then
                Return true
            End If
            ' No.92
            ' 0xfa9b (Windows-31J)
            ' 0xfa0f (UTF-16BE)
            If (argCheck = "﨏"c) Then
                Return true
            End If
            ' No.93
            ' 0xfa9c (Windows-31J)
            ' 0xfa10 (UTF-16BE)
            If (argCheck = "塚"c) Then
                Return true
            End If
            ' No.94
            ' 0xfa9d (Windows-31J)
            ' 0x589e (UTF-16BE)
            If (argCheck = "增"c) Then
                Return true
            End If
            ' No.95
            ' 0xfa9e (Windows-31J)
            ' 0x58b2 (UTF-16BE)
            If (argCheck = "墲"c) Then
                Return true
            End If
            ' No.96
            ' 0xfa9f (Windows-31J)
            ' 0x590b (UTF-16BE)
            If (argCheck = "夋"c) Then
                Return true
            End If
            ' No.97
            ' 0xfaa0 (Windows-31J)
            ' 0x5953 (UTF-16BE)
            If (argCheck = "奓"c) Then
                Return true
            End If
            ' No.98
            ' 0xfaa1 (Windows-31J)
            ' 0x595b (UTF-16BE)
            If (argCheck = "奛"c) Then
                Return true
            End If
            ' No.99
            ' 0xfaa2 (Windows-31J)
            ' 0x595d (UTF-16BE)
            If (argCheck = "奝"c) Then
                Return true
            End If
            ' No.100
            ' 0xfaa3 (Windows-31J)
            ' 0x5963 (UTF-16BE)
            If (argCheck = "奣"c) Then
                Return true
            End If
            ' No.101
            ' 0xfaa4 (Windows-31J)
            ' 0x59a4 (UTF-16BE)
            If (argCheck = "妤"c) Then
                Return true
            End If
            ' No.102
            ' 0xfaa5 (Windows-31J)
            ' 0x59ba (UTF-16BE)
            If (argCheck = "妺"c) Then
                Return true
            End If
            ' No.103
            ' 0xfaa6 (Windows-31J)
            ' 0x5b56 (UTF-16BE)
            If (argCheck = "孖"c) Then
                Return true
            End If
            ' No.104
            ' 0xfaa7 (Windows-31J)
            ' 0x5bc0 (UTF-16BE)
            If (argCheck = "寀"c) Then
                Return true
            End If
            ' No.105
            ' 0xfaa8 (Windows-31J)
            ' 0x752f (UTF-16BE)
            If (argCheck = "甯"c) Then
                Return true
            End If
            ' No.106
            ' 0xfaa9 (Windows-31J)
            ' 0x5bd8 (UTF-16BE)
            If (argCheck = "寘"c) Then
                Return true
            End If
            ' No.107
            ' 0xfaaa (Windows-31J)
            ' 0x5bec (UTF-16BE)
            If (argCheck = "寬"c) Then
                Return true
            End If
            ' No.108
            ' 0xfaab (Windows-31J)
            ' 0x5c1e (UTF-16BE)
            If (argCheck = "尞"c) Then
                Return true
            End If
            ' No.109
            ' 0xfaac (Windows-31J)
            ' 0x5ca6 (UTF-16BE)
            If (argCheck = "岦"c) Then
                Return true
            End If
            ' No.110
            ' 0xfaad (Windows-31J)
            ' 0x5cba (UTF-16BE)
            If (argCheck = "岺"c) Then
                Return true
            End If
            ' No.111
            ' 0xfaae (Windows-31J)
            ' 0x5cf5 (UTF-16BE)
            If (argCheck = "峵"c) Then
                Return true
            End If
            ' No.112
            ' 0xfaaf (Windows-31J)
            ' 0x5d27 (UTF-16BE)
            If (argCheck = "崧"c) Then
                Return true
            End If
            ' No.113
            ' 0xfab0 (Windows-31J)
            ' 0x5d53 (UTF-16BE)
            If (argCheck = "嵓"c) Then
                Return true
            End If
            ' No.114
            ' 0xfab1 (Windows-31J)
            ' 0xfa11 (UTF-16BE)
            If (argCheck = "﨑"c) Then
                Return true
            End If
            ' No.115
            ' 0xfab2 (Windows-31J)
            ' 0x5d42 (UTF-16BE)
            If (argCheck = "嵂"c) Then
                Return true
            End If
            ' No.116
            ' 0xfab3 (Windows-31J)
            ' 0x5d6d (UTF-16BE)
            If (argCheck = "嵭"c) Then
                Return true
            End If
            ' No.117
            ' 0xfab4 (Windows-31J)
            ' 0x5db8 (UTF-16BE)
            If (argCheck = "嶸"c) Then
                Return true
            End If
            ' No.118
            ' 0xfab5 (Windows-31J)
            ' 0x5db9 (UTF-16BE)
            If (argCheck = "嶹"c) Then
                Return true
            End If
            ' No.119
            ' 0xfab6 (Windows-31J)
            ' 0x5dd0 (UTF-16BE)
            If (argCheck = "巐"c) Then
                Return true
            End If
            ' No.120
            ' 0xfab7 (Windows-31J)
            ' 0x5f21 (UTF-16BE)
            If (argCheck = "弡"c) Then
                Return true
            End If
            ' No.121
            ' 0xfab8 (Windows-31J)
            ' 0x5f34 (UTF-16BE)
            If (argCheck = "弴"c) Then
                Return true
            End If
            ' No.122
            ' 0xfab9 (Windows-31J)
            ' 0x5f67 (UTF-16BE)
            If (argCheck = "彧"c) Then
                Return true
            End If
            ' No.123
            ' 0xfaba (Windows-31J)
            ' 0x5fb7 (UTF-16BE)
            If (argCheck = "德"c) Then
                Return true
            End If
            ' No.124
            ' 0xfabb (Windows-31J)
            ' 0x5fde (UTF-16BE)
            If (argCheck = "忞"c) Then
                Return true
            End If
            ' No.125
            ' 0xfabc (Windows-31J)
            ' 0x605d (UTF-16BE)
            If (argCheck = "恝"c) Then
                Return true
            End If
            ' No.126
            ' 0xfabd (Windows-31J)
            ' 0x6085 (UTF-16BE)
            If (argCheck = "悅"c) Then
                Return true
            End If
            ' No.127
            ' 0xfabe (Windows-31J)
            ' 0x608a (UTF-16BE)
            If (argCheck = "悊"c) Then
                Return true
            End If
            ' No.128
            ' 0xfabf (Windows-31J)
            ' 0x60de (UTF-16BE)
            If (argCheck = "惞"c) Then
                Return true
            End If
            ' No.129
            ' 0xfac0 (Windows-31J)
            ' 0x60d5 (UTF-16BE)
            If (argCheck = "惕"c) Then
                Return true
            End If
            ' No.130
            ' 0xfac1 (Windows-31J)
            ' 0x6120 (UTF-16BE)
            If (argCheck = "愠"c) Then
                Return true
            End If
            ' No.131
            ' 0xfac2 (Windows-31J)
            ' 0x60f2 (UTF-16BE)
            If (argCheck = "惲"c) Then
                Return true
            End If
            ' No.132
            ' 0xfac3 (Windows-31J)
            ' 0x6111 (UTF-16BE)
            If (argCheck = "愑"c) Then
                Return true
            End If
            ' No.133
            ' 0xfac4 (Windows-31J)
            ' 0x6137 (UTF-16BE)
            If (argCheck = "愷"c) Then
                Return true
            End If
            ' No.134
            ' 0xfac5 (Windows-31J)
            ' 0x6130 (UTF-16BE)
            If (argCheck = "愰"c) Then
                Return true
            End If
            ' No.135
            ' 0xfac6 (Windows-31J)
            ' 0x6198 (UTF-16BE)
            If (argCheck = "憘"c) Then
                Return true
            End If
            ' No.136
            ' 0xfac7 (Windows-31J)
            ' 0x6213 (UTF-16BE)
            If (argCheck = "戓"c) Then
                Return true
            End If
            ' No.137
            ' 0xfac8 (Windows-31J)
            ' 0x62a6 (UTF-16BE)
            If (argCheck = "抦"c) Then
                Return true
            End If
            ' No.138
            ' 0xfac9 (Windows-31J)
            ' 0x63f5 (UTF-16BE)
            If (argCheck = "揵"c) Then
                Return true
            End If
            ' No.139
            ' 0xfaca (Windows-31J)
            ' 0x6460 (UTF-16BE)
            If (argCheck = "摠"c) Then
                Return true
            End If
            ' No.140
            ' 0xfacb (Windows-31J)
            ' 0x649d (UTF-16BE)
            If (argCheck = "撝"c) Then
                Return true
            End If
            ' No.141
            ' 0xfacc (Windows-31J)
            ' 0x64ce (UTF-16BE)
            If (argCheck = "擎"c) Then
                Return true
            End If
            ' No.142
            ' 0xfacd (Windows-31J)
            ' 0x654e (UTF-16BE)
            If (argCheck = "敎"c) Then
                Return true
            End If
            ' No.143
            ' 0xface (Windows-31J)
            ' 0x6600 (UTF-16BE)
            If (argCheck = "昀"c) Then
                Return true
            End If
            ' No.144
            ' 0xfacf (Windows-31J)
            ' 0x6615 (UTF-16BE)
            If (argCheck = "昕"c) Then
                Return true
            End If
            ' No.145
            ' 0xfad0 (Windows-31J)
            ' 0x663b (UTF-16BE)
            If (argCheck = "昻"c) Then
                Return true
            End If
            ' No.146
            ' 0xfad1 (Windows-31J)
            ' 0x6609 (UTF-16BE)
            If (argCheck = "昉"c) Then
                Return true
            End If
            ' No.147
            ' 0xfad2 (Windows-31J)
            ' 0x662e (UTF-16BE)
            If (argCheck = "昮"c) Then
                Return true
            End If
            ' No.148
            ' 0xfad3 (Windows-31J)
            ' 0x661e (UTF-16BE)
            If (argCheck = "昞"c) Then
                Return true
            End If
            ' No.149
            ' 0xfad4 (Windows-31J)
            ' 0x6624 (UTF-16BE)
            If (argCheck = "昤"c) Then
                Return true
            End If
            ' No.150
            ' 0xfad5 (Windows-31J)
            ' 0x6665 (UTF-16BE)
            If (argCheck = "晥"c) Then
                Return true
            End If
            ' No.151
            ' 0xfad6 (Windows-31J)
            ' 0x6657 (UTF-16BE)
            If (argCheck = "晗"c) Then
                Return true
            End If
            ' No.152
            ' 0xfad7 (Windows-31J)
            ' 0x6659 (UTF-16BE)
            If (argCheck = "晙"c) Then
                Return true
            End If
            ' No.153
            ' 0xfad8 (Windows-31J)
            ' 0xfa12 (UTF-16BE)
            If (argCheck = "晴"c) Then
                Return true
            End If
            ' No.154
            ' 0xfad9 (Windows-31J)
            ' 0x6673 (UTF-16BE)
            If (argCheck = "晳"c) Then
                Return true
            End If
            ' No.155
            ' 0xfada (Windows-31J)
            ' 0x6699 (UTF-16BE)
            If (argCheck = "暙"c) Then
                Return true
            End If
            ' No.156
            ' 0xfadb (Windows-31J)
            ' 0x66a0 (UTF-16BE)
            If (argCheck = "暠"c) Then
                Return true
            End If
            ' No.157
            ' 0xfadc (Windows-31J)
            ' 0x66b2 (UTF-16BE)
            If (argCheck = "暲"c) Then
                Return true
            End If
            ' No.158
            ' 0xfadd (Windows-31J)
            ' 0x66bf (UTF-16BE)
            If (argCheck = "暿"c) Then
                Return true
            End If
            ' No.159
            ' 0xfade (Windows-31J)
            ' 0x66fa (UTF-16BE)
            If (argCheck = "曺"c) Then
                Return true
            End If
            ' No.160
            ' 0xfadf (Windows-31J)
            ' 0x670e (UTF-16BE)
            If (argCheck = "朎"c) Then
                Return true
            End If
            ' No.161
            ' 0xfae0 (Windows-31J)
            ' 0xf929 (UTF-16BE)
            If (argCheck = "朗"c) Then
                Return true
            End If
            ' No.162
            ' 0xfae1 (Windows-31J)
            ' 0x6766 (UTF-16BE)
            If (argCheck = "杦"c) Then
                Return true
            End If
            ' No.163
            ' 0xfae2 (Windows-31J)
            ' 0x67bb (UTF-16BE)
            If (argCheck = "枻"c) Then
                Return true
            End If
            ' No.164
            ' 0xfae3 (Windows-31J)
            ' 0x6852 (UTF-16BE)
            If (argCheck = "桒"c) Then
                Return true
            End If
            ' No.165
            ' 0xfae4 (Windows-31J)
            ' 0x67c0 (UTF-16BE)
            If (argCheck = "柀"c) Then
                Return true
            End If
            ' No.166
            ' 0xfae5 (Windows-31J)
            ' 0x6801 (UTF-16BE)
            If (argCheck = "栁"c) Then
                Return true
            End If
            ' No.167
            ' 0xfae6 (Windows-31J)
            ' 0x6844 (UTF-16BE)
            If (argCheck = "桄"c) Then
                Return true
            End If
            ' No.168
            ' 0xfae7 (Windows-31J)
            ' 0x68cf (UTF-16BE)
            If (argCheck = "棏"c) Then
                Return true
            End If
            ' No.169
            ' 0xfae8 (Windows-31J)
            ' 0xfa13 (UTF-16BE)
            If (argCheck = "﨓"c) Then
                Return true
            End If
            ' No.170
            ' 0xfae9 (Windows-31J)
            ' 0x6968 (UTF-16BE)
            If (argCheck = "楨"c) Then
                Return true
            End If
            ' No.171
            ' 0xfaea (Windows-31J)
            ' 0xfa14 (UTF-16BE)
            If (argCheck = "﨔"c) Then
                Return true
            End If
            ' No.172
            ' 0xfaeb (Windows-31J)
            ' 0x6998 (UTF-16BE)
            If (argCheck = "榘"c) Then
                Return true
            End If
            ' No.173
            ' 0xfaec (Windows-31J)
            ' 0x69e2 (UTF-16BE)
            If (argCheck = "槢"c) Then
                Return true
            End If
            ' No.174
            ' 0xfaed (Windows-31J)
            ' 0x6a30 (UTF-16BE)
            If (argCheck = "樰"c) Then
                Return true
            End If
            ' No.175
            ' 0xfaee (Windows-31J)
            ' 0x6a6b (UTF-16BE)
            If (argCheck = "橫"c) Then
                Return true
            End If
            ' No.176
            ' 0xfaef (Windows-31J)
            ' 0x6a46 (UTF-16BE)
            If (argCheck = "橆"c) Then
                Return true
            End If
            ' No.177
            ' 0xfaf0 (Windows-31J)
            ' 0x6a73 (UTF-16BE)
            If (argCheck = "橳"c) Then
                Return true
            End If
            ' No.178
            ' 0xfaf1 (Windows-31J)
            ' 0x6a7e (UTF-16BE)
            If (argCheck = "橾"c) Then
                Return true
            End If
            ' No.179
            ' 0xfaf2 (Windows-31J)
            ' 0x6ae2 (UTF-16BE)
            If (argCheck = "櫢"c) Then
                Return true
            End If
            ' No.180
            ' 0xfaf3 (Windows-31J)
            ' 0x6ae4 (UTF-16BE)
            If (argCheck = "櫤"c) Then
                Return true
            End If
            ' No.181
            ' 0xfaf4 (Windows-31J)
            ' 0x6bd6 (UTF-16BE)
            If (argCheck = "毖"c) Then
                Return true
            End If
            ' No.182
            ' 0xfaf5 (Windows-31J)
            ' 0x6c3f (UTF-16BE)
            If (argCheck = "氿"c) Then
                Return true
            End If
            ' No.183
            ' 0xfaf6 (Windows-31J)
            ' 0x6c5c (UTF-16BE)
            If (argCheck = "汜"c) Then
                Return true
            End If
            ' No.184
            ' 0xfaf7 (Windows-31J)
            ' 0x6c86 (UTF-16BE)
            If (argCheck = "沆"c) Then
                Return true
            End If
            ' No.185
            ' 0xfaf8 (Windows-31J)
            ' 0x6c6f (UTF-16BE)
            If (argCheck = "汯"c) Then
                Return true
            End If
            ' No.186
            ' 0xfaf9 (Windows-31J)
            ' 0x6cda (UTF-16BE)
            If (argCheck = "泚"c) Then
                Return true
            End If
            ' No.187
            ' 0xfafa (Windows-31J)
            ' 0x6d04 (UTF-16BE)
            If (argCheck = "洄"c) Then
                Return true
            End If
            ' No.188
            ' 0xfafb (Windows-31J)
            ' 0x6d87 (UTF-16BE)
            If (argCheck = "涇"c) Then
                Return true
            End If
            ' No.189
            ' 説明:fafc:
            ' 0xfafc (Windows-31J)
            ' 0x6d6f (UTF-16BE)
            If (argCheck = "浯"c) Then
                Return true
            End If
            ' No.191
            ' 説明:fb40: fafdからfb3fまではスキップ。
            ' 0xfb40 (Windows-31J)
            ' 0x6d96 (UTF-16BE)
            If (argCheck = "涖"c) Then
                Return true
            End If
            ' No.192
            ' 0xfb41 (Windows-31J)
            ' 0x6dac (UTF-16BE)
            If (argCheck = "涬"c) Then
                Return true
            End If
            ' No.193
            ' 0xfb42 (Windows-31J)
            ' 0x6dcf (UTF-16BE)
            If (argCheck = "淏"c) Then
                Return true
            End If
            ' No.194
            ' 0xfb43 (Windows-31J)
            ' 0x6df8 (UTF-16BE)
            If (argCheck = "淸"c) Then
                Return true
            End If
            ' No.195
            ' 0xfb44 (Windows-31J)
            ' 0x6df2 (UTF-16BE)
            If (argCheck = "淲"c) Then
                Return true
            End If
            ' No.196
            ' 0xfb45 (Windows-31J)
            ' 0x6dfc (UTF-16BE)
            If (argCheck = "淼"c) Then
                Return true
            End If
            ' No.197
            ' 0xfb46 (Windows-31J)
            ' 0x6e39 (UTF-16BE)
            If (argCheck = "渹"c) Then
                Return true
            End If
            ' No.198
            ' 0xfb47 (Windows-31J)
            ' 0x6e5c (UTF-16BE)
            If (argCheck = "湜"c) Then
                Return true
            End If
            ' No.199
            ' 0xfb48 (Windows-31J)
            ' 0x6e27 (UTF-16BE)
            If (argCheck = "渧"c) Then
                Return true
            End If
            ' No.200
            ' 0xfb49 (Windows-31J)
            ' 0x6e3c (UTF-16BE)
            If (argCheck = "渼"c) Then
                Return true
            End If
            ' No.201
            ' 0xfb4a (Windows-31J)
            ' 0x6ebf (UTF-16BE)
            If (argCheck = "溿"c) Then
                Return true
            End If
            ' No.202
            ' 0xfb4b (Windows-31J)
            ' 0x6f88 (UTF-16BE)
            If (argCheck = "澈"c) Then
                Return true
            End If
            ' No.203
            ' 0xfb4c (Windows-31J)
            ' 0x6fb5 (UTF-16BE)
            If (argCheck = "澵"c) Then
                Return true
            End If
            ' No.204
            ' 0xfb4d (Windows-31J)
            ' 0x6ff5 (UTF-16BE)
            If (argCheck = "濵"c) Then
                Return true
            End If
            ' No.205
            ' 0xfb4e (Windows-31J)
            ' 0x7005 (UTF-16BE)
            If (argCheck = "瀅"c) Then
                Return true
            End If
            ' No.206
            ' 0xfb4f (Windows-31J)
            ' 0x7007 (UTF-16BE)
            If (argCheck = "瀇"c) Then
                Return true
            End If
            ' No.207
            ' 0xfb50 (Windows-31J)
            ' 0x7028 (UTF-16BE)
            If (argCheck = "瀨"c) Then
                Return true
            End If
            ' No.208
            ' 0xfb51 (Windows-31J)
            ' 0x7085 (UTF-16BE)
            If (argCheck = "炅"c) Then
                Return true
            End If
            ' No.209
            ' 0xfb52 (Windows-31J)
            ' 0x70ab (UTF-16BE)
            If (argCheck = "炫"c) Then
                Return true
            End If
            ' No.210
            ' 0xfb53 (Windows-31J)
            ' 0x710f (UTF-16BE)
            If (argCheck = "焏"c) Then
                Return true
            End If
            ' No.211
            ' 0xfb54 (Windows-31J)
            ' 0x7104 (UTF-16BE)
            If (argCheck = "焄"c) Then
                Return true
            End If
            ' No.212
            ' 0xfb55 (Windows-31J)
            ' 0x715c (UTF-16BE)
            If (argCheck = "煜"c) Then
                Return true
            End If
            ' No.213
            ' 0xfb56 (Windows-31J)
            ' 0x7146 (UTF-16BE)
            If (argCheck = "煆"c) Then
                Return true
            End If
            ' No.214
            ' 0xfb57 (Windows-31J)
            ' 0x7147 (UTF-16BE)
            If (argCheck = "煇"c) Then
                Return true
            End If
            ' No.215
            ' 0xfb58 (Windows-31J)
            ' 0xfa15 (UTF-16BE)
            If (argCheck = "凞"c) Then
                Return true
            End If
            ' No.216
            ' 0xfb59 (Windows-31J)
            ' 0x71c1 (UTF-16BE)
            If (argCheck = "燁"c) Then
                Return true
            End If
            ' No.217
            ' 0xfb5a (Windows-31J)
            ' 0x71fe (UTF-16BE)
            If (argCheck = "燾"c) Then
                Return true
            End If
            ' No.218
            ' 0xfb5b (Windows-31J)
            ' 0x72b1 (UTF-16BE)
            If (argCheck = "犱"c) Then
                Return true
            End If
            ' No.219
            ' 0xfb5c (Windows-31J)
            ' 0x72be (UTF-16BE)
            If (argCheck = "犾"c) Then
                Return true
            End If
            ' No.220
            ' 0xfb5d (Windows-31J)
            ' 0x7324 (UTF-16BE)
            If (argCheck = "猤"c) Then
                Return true
            End If
            ' No.221
            ' 0xfb5e (Windows-31J)
            ' 0xfa16 (UTF-16BE)
            If (argCheck = "猪"c) Then
                Return true
            End If
            ' No.222
            ' 0xfb5f (Windows-31J)
            ' 0x7377 (UTF-16BE)
            If (argCheck = "獷"c) Then
                Return true
            End If
            ' No.223
            ' 0xfb60 (Windows-31J)
            ' 0x73bd (UTF-16BE)
            If (argCheck = "玽"c) Then
                Return true
            End If
            ' No.224
            ' 0xfb61 (Windows-31J)
            ' 0x73c9 (UTF-16BE)
            If (argCheck = "珉"c) Then
                Return true
            End If
            ' No.225
            ' 0xfb62 (Windows-31J)
            ' 0x73d6 (UTF-16BE)
            If (argCheck = "珖"c) Then
                Return true
            End If
            ' No.226
            ' 0xfb63 (Windows-31J)
            ' 0x73e3 (UTF-16BE)
            If (argCheck = "珣"c) Then
                Return true
            End If
            ' No.227
            ' 0xfb64 (Windows-31J)
            ' 0x73d2 (UTF-16BE)
            If (argCheck = "珒"c) Then
                Return true
            End If
            ' No.228
            ' 0xfb65 (Windows-31J)
            ' 0x7407 (UTF-16BE)
            If (argCheck = "琇"c) Then
                Return true
            End If
            ' No.229
            ' 0xfb66 (Windows-31J)
            ' 0x73f5 (UTF-16BE)
            If (argCheck = "珵"c) Then
                Return true
            End If
            ' No.230
            ' 0xfb67 (Windows-31J)
            ' 0x7426 (UTF-16BE)
            If (argCheck = "琦"c) Then
                Return true
            End If
            ' No.231
            ' 0xfb68 (Windows-31J)
            ' 0x742a (UTF-16BE)
            If (argCheck = "琪"c) Then
                Return true
            End If
            ' No.232
            ' 0xfb69 (Windows-31J)
            ' 0x7429 (UTF-16BE)
            If (argCheck = "琩"c) Then
                Return true
            End If
            ' No.233
            ' 0xfb6a (Windows-31J)
            ' 0x742e (UTF-16BE)
            If (argCheck = "琮"c) Then
                Return true
            End If
            ' No.234
            ' 0xfb6b (Windows-31J)
            ' 0x7462 (UTF-16BE)
            If (argCheck = "瑢"c) Then
                Return true
            End If
            ' No.235
            ' 0xfb6c (Windows-31J)
            ' 0x7489 (UTF-16BE)
            If (argCheck = "璉"c) Then
                Return true
            End If
            ' No.236
            ' 0xfb6d (Windows-31J)
            ' 0x749f (UTF-16BE)
            If (argCheck = "璟"c) Then
                Return true
            End If
            ' No.237
            ' 0xfb6e (Windows-31J)
            ' 0x7501 (UTF-16BE)
            If (argCheck = "甁"c) Then
                Return true
            End If
            ' No.238
            ' 0xfb6f (Windows-31J)
            ' 0x756f (UTF-16BE)
            If (argCheck = "畯"c) Then
                Return true
            End If
            ' No.239
            ' 0xfb70 (Windows-31J)
            ' 0x7682 (UTF-16BE)
            If (argCheck = "皂"c) Then
                Return true
            End If
            ' No.240
            ' 0xfb71 (Windows-31J)
            ' 0x769c (UTF-16BE)
            If (argCheck = "皜"c) Then
                Return true
            End If
            ' No.241
            ' 0xfb72 (Windows-31J)
            ' 0x769e (UTF-16BE)
            If (argCheck = "皞"c) Then
                Return true
            End If
            ' No.242
            ' 0xfb73 (Windows-31J)
            ' 0x769b (UTF-16BE)
            If (argCheck = "皛"c) Then
                Return true
            End If
            ' No.243
            ' 0xfb74 (Windows-31J)
            ' 0x76a6 (UTF-16BE)
            If (argCheck = "皦"c) Then
                Return true
            End If
            ' No.244
            ' 0xfb75 (Windows-31J)
            ' 0xfa17 (UTF-16BE)
            If (argCheck = "益"c) Then
                Return true
            End If
            ' No.245
            ' 0xfb76 (Windows-31J)
            ' 0x7746 (UTF-16BE)
            If (argCheck = "睆"c) Then
                Return true
            End If
            ' No.246
            ' 0xfb77 (Windows-31J)
            ' 0x52af (UTF-16BE)
            If (argCheck = "劯"c) Then
                Return true
            End If
            ' No.247
            ' 0xfb78 (Windows-31J)
            ' 0x7821 (UTF-16BE)
            If (argCheck = "砡"c) Then
                Return true
            End If
            ' No.248
            ' 0xfb79 (Windows-31J)
            ' 0x784e (UTF-16BE)
            If (argCheck = "硎"c) Then
                Return true
            End If
            ' No.249
            ' 0xfb7a (Windows-31J)
            ' 0x7864 (UTF-16BE)
            If (argCheck = "硤"c) Then
                Return true
            End If
            ' No.250
            ' 0xfb7b (Windows-31J)
            ' 0x787a (UTF-16BE)
            If (argCheck = "硺"c) Then
                Return true
            End If
            ' No.251
            ' 0xfb7c (Windows-31J)
            ' 0x7930 (UTF-16BE)
            If (argCheck = "礰"c) Then
                Return true
            End If
            ' No.252
            ' 0xfb7d (Windows-31J)
            ' 0xfa18 (UTF-16BE)
            If (argCheck = "礼"c) Then
                Return true
            End If
            ' No.253
            ' 説明:fb7e:
            ' 0xfb7e (Windows-31J)
            ' 0xfa19 (UTF-16BE)
            If (argCheck = "神"c) Then
                Return true
            End If
            ' No.255
            ' 説明:fb80: fb7fはスキップ。
            ' 0xfb80 (Windows-31J)
            ' 0xfa1a (UTF-16BE)
            If (argCheck = "祥"c) Then
                Return true
            End If
            ' No.256
            ' 0xfb81 (Windows-31J)
            ' 0x7994 (UTF-16BE)
            If (argCheck = "禔"c) Then
                Return true
            End If
            ' No.257
            ' 0xfb82 (Windows-31J)
            ' 0xfa1b (UTF-16BE)
            If (argCheck = "福"c) Then
                Return true
            End If
            ' No.258
            ' 0xfb83 (Windows-31J)
            ' 0x799b (UTF-16BE)
            If (argCheck = "禛"c) Then
                Return true
            End If
            ' No.259
            ' 0xfb84 (Windows-31J)
            ' 0x7ad1 (UTF-16BE)
            If (argCheck = "竑"c) Then
                Return true
            End If
            ' No.260
            ' 0xfb85 (Windows-31J)
            ' 0x7ae7 (UTF-16BE)
            If (argCheck = "竧"c) Then
                Return true
            End If
            ' No.261
            ' 0xfb86 (Windows-31J)
            ' 0xfa1c (UTF-16BE)
            If (argCheck = "靖"c) Then
                Return true
            End If
            ' No.262
            ' 0xfb87 (Windows-31J)
            ' 0x7aeb (UTF-16BE)
            If (argCheck = "竫"c) Then
                Return true
            End If
            ' No.263
            ' 0xfb88 (Windows-31J)
            ' 0x7b9e (UTF-16BE)
            If (argCheck = "箞"c) Then
                Return true
            End If
            ' No.264
            ' 0xfb89 (Windows-31J)
            ' 0xfa1d (UTF-16BE)
            If (argCheck = "精"c) Then
                Return true
            End If
            ' No.265
            ' 0xfb8a (Windows-31J)
            ' 0x7d48 (UTF-16BE)
            If (argCheck = "絈"c) Then
                Return true
            End If
            ' No.266
            ' 0xfb8b (Windows-31J)
            ' 0x7d5c (UTF-16BE)
            If (argCheck = "絜"c) Then
                Return true
            End If
            ' No.267
            ' 0xfb8c (Windows-31J)
            ' 0x7db7 (UTF-16BE)
            If (argCheck = "綷"c) Then
                Return true
            End If
            ' No.268
            ' 0xfb8d (Windows-31J)
            ' 0x7da0 (UTF-16BE)
            If (argCheck = "綠"c) Then
                Return true
            End If
            ' No.269
            ' 0xfb8e (Windows-31J)
            ' 0x7dd6 (UTF-16BE)
            If (argCheck = "緖"c) Then
                Return true
            End If
            ' No.270
            ' 0xfb8f (Windows-31J)
            ' 0x7e52 (UTF-16BE)
            If (argCheck = "繒"c) Then
                Return true
            End If
            ' No.271
            ' 0xfb90 (Windows-31J)
            ' 0x7f47 (UTF-16BE)
            If (argCheck = "罇"c) Then
                Return true
            End If
            ' No.272
            ' 0xfb91 (Windows-31J)
            ' 0x7fa1 (UTF-16BE)
            If (argCheck = "羡"c) Then
                Return true
            End If
            ' No.273
            ' 0xfb92 (Windows-31J)
            ' 0xfa1e (UTF-16BE)
            If (argCheck = "羽"c) Then
                Return true
            End If
            ' No.274
            ' 0xfb93 (Windows-31J)
            ' 0x8301 (UTF-16BE)
            If (argCheck = "茁"c) Then
                Return true
            End If
            ' No.275
            ' 0xfb94 (Windows-31J)
            ' 0x8362 (UTF-16BE)
            If (argCheck = "荢"c) Then
                Return true
            End If
            ' No.276
            ' 0xfb95 (Windows-31J)
            ' 0x837f (UTF-16BE)
            If (argCheck = "荿"c) Then
                Return true
            End If
            ' No.277
            ' 0xfb96 (Windows-31J)
            ' 0x83c7 (UTF-16BE)
            If (argCheck = "菇"c) Then
                Return true
            End If
            ' No.278
            ' 0xfb97 (Windows-31J)
            ' 0x83f6 (UTF-16BE)
            If (argCheck = "菶"c) Then
                Return true
            End If
            ' No.279
            ' 0xfb98 (Windows-31J)
            ' 0x8448 (UTF-16BE)
            If (argCheck = "葈"c) Then
                Return true
            End If
            ' No.280
            ' 0xfb99 (Windows-31J)
            ' 0x84b4 (UTF-16BE)
            If (argCheck = "蒴"c) Then
                Return true
            End If
            ' No.281
            ' 0xfb9a (Windows-31J)
            ' 0x8553 (UTF-16BE)
            If (argCheck = "蕓"c) Then
                Return true
            End If
            ' No.282
            ' 0xfb9b (Windows-31J)
            ' 0x8559 (UTF-16BE)
            If (argCheck = "蕙"c) Then
                Return true
            End If
            ' No.283
            ' 0xfb9c (Windows-31J)
            ' 0x856b (UTF-16BE)
            If (argCheck = "蕫"c) Then
                Return true
            End If
            ' No.284
            ' 0xfb9d (Windows-31J)
            ' 0xfa1f (UTF-16BE)
            If (argCheck = "﨟"c) Then
                Return true
            End If
            ' No.285
            ' 0xfb9e (Windows-31J)
            ' 0x85b0 (UTF-16BE)
            If (argCheck = "薰"c) Then
                Return true
            End If
            ' No.286
            ' 0xfb9f (Windows-31J)
            ' 0xfa20 (UTF-16BE)
            If (argCheck = "蘒"c) Then
                Return true
            End If
            ' No.287
            ' 0xfba0 (Windows-31J)
            ' 0xfa21 (UTF-16BE)
            If (argCheck = "﨡"c) Then
                Return true
            End If
            ' No.288
            ' 0xfba1 (Windows-31J)
            ' 0x8807 (UTF-16BE)
            If (argCheck = "蠇"c) Then
                Return true
            End If
            ' No.289
            ' 0xfba2 (Windows-31J)
            ' 0x88f5 (UTF-16BE)
            If (argCheck = "裵"c) Then
                Return true
            End If
            ' No.290
            ' 0xfba3 (Windows-31J)
            ' 0x8a12 (UTF-16BE)
            If (argCheck = "訒"c) Then
                Return true
            End If
            ' No.291
            ' 0xfba4 (Windows-31J)
            ' 0x8a37 (UTF-16BE)
            If (argCheck = "訷"c) Then
                Return true
            End If
            ' No.292
            ' 0xfba5 (Windows-31J)
            ' 0x8a79 (UTF-16BE)
            If (argCheck = "詹"c) Then
                Return true
            End If
            ' No.293
            ' 0xfba6 (Windows-31J)
            ' 0x8aa7 (UTF-16BE)
            If (argCheck = "誧"c) Then
                Return true
            End If
            ' No.294
            ' 0xfba7 (Windows-31J)
            ' 0x8abe (UTF-16BE)
            If (argCheck = "誾"c) Then
                Return true
            End If
            ' No.295
            ' 0xfba8 (Windows-31J)
            ' 0x8adf (UTF-16BE)
            If (argCheck = "諟"c) Then
                Return true
            End If
            ' No.296
            ' 0xfba9 (Windows-31J)
            ' 0xfa22 (UTF-16BE)
            If (argCheck = "諸"c) Then
                Return true
            End If
            ' No.297
            ' 0xfbaa (Windows-31J)
            ' 0x8af6 (UTF-16BE)
            If (argCheck = "諶"c) Then
                Return true
            End If
            ' No.298
            ' 0xfbab (Windows-31J)
            ' 0x8b53 (UTF-16BE)
            If (argCheck = "譓"c) Then
                Return true
            End If
            ' No.299
            ' 0xfbac (Windows-31J)
            ' 0x8b7f (UTF-16BE)
            If (argCheck = "譿"c) Then
                Return true
            End If
            ' No.300
            ' 0xfbad (Windows-31J)
            ' 0x8cf0 (UTF-16BE)
            If (argCheck = "賰"c) Then
                Return true
            End If
            ' No.301
            ' 0xfbae (Windows-31J)
            ' 0x8cf4 (UTF-16BE)
            If (argCheck = "賴"c) Then
                Return true
            End If
            ' No.302
            ' 0xfbaf (Windows-31J)
            ' 0x8d12 (UTF-16BE)
            If (argCheck = "贒"c) Then
                Return true
            End If
            ' No.303
            ' 0xfbb0 (Windows-31J)
            ' 0x8d76 (UTF-16BE)
            If (argCheck = "赶"c) Then
                Return true
            End If
            ' No.304
            ' 0xfbb1 (Windows-31J)
            ' 0xfa23 (UTF-16BE)
            If (argCheck = "﨣"c) Then
                Return true
            End If
            ' No.305
            ' 0xfbb2 (Windows-31J)
            ' 0x8ecf (UTF-16BE)
            If (argCheck = "軏"c) Then
                Return true
            End If
            ' No.306
            ' 0xfbb3 (Windows-31J)
            ' 0xfa24 (UTF-16BE)
            If (argCheck = "﨤"c) Then
                Return true
            End If
            ' No.307
            ' 0xfbb4 (Windows-31J)
            ' 0xfa25 (UTF-16BE)
            If (argCheck = "逸"c) Then
                Return true
            End If
            ' No.308
            ' 0xfbb5 (Windows-31J)
            ' 0x9067 (UTF-16BE)
            If (argCheck = "遧"c) Then
                Return true
            End If
            ' No.309
            ' 0xfbb6 (Windows-31J)
            ' 0x90de (UTF-16BE)
            If (argCheck = "郞"c) Then
                Return true
            End If
            ' No.310
            ' 0xfbb7 (Windows-31J)
            ' 0xfa26 (UTF-16BE)
            If (argCheck = "都"c) Then
                Return true
            End If
            ' No.311
            ' 0xfbb8 (Windows-31J)
            ' 0x9115 (UTF-16BE)
            If (argCheck = "鄕"c) Then
                Return true
            End If
            ' No.312
            ' 0xfbb9 (Windows-31J)
            ' 0x9127 (UTF-16BE)
            If (argCheck = "鄧"c) Then
                Return true
            End If
            ' No.313
            ' 0xfbba (Windows-31J)
            ' 0x91da (UTF-16BE)
            If (argCheck = "釚"c) Then
                Return true
            End If
            ' No.314
            ' 0xfbbb (Windows-31J)
            ' 0x91d7 (UTF-16BE)
            If (argCheck = "釗"c) Then
                Return true
            End If
            ' No.315
            ' 0xfbbc (Windows-31J)
            ' 0x91de (UTF-16BE)
            If (argCheck = "釞"c) Then
                Return true
            End If
            ' No.316
            ' 0xfbbd (Windows-31J)
            ' 0x91ed (UTF-16BE)
            If (argCheck = "釭"c) Then
                Return true
            End If
            ' No.317
            ' 0xfbbe (Windows-31J)
            ' 0x91ee (UTF-16BE)
            If (argCheck = "釮"c) Then
                Return true
            End If
            ' No.318
            ' 0xfbbf (Windows-31J)
            ' 0x91e4 (UTF-16BE)
            If (argCheck = "釤"c) Then
                Return true
            End If
            ' No.319
            ' 0xfbc0 (Windows-31J)
            ' 0x91e5 (UTF-16BE)
            If (argCheck = "釥"c) Then
                Return true
            End If
            ' No.320
            ' 0xfbc1 (Windows-31J)
            ' 0x9206 (UTF-16BE)
            If (argCheck = "鈆"c) Then
                Return true
            End If
            ' No.321
            ' 0xfbc2 (Windows-31J)
            ' 0x9210 (UTF-16BE)
            If (argCheck = "鈐"c) Then
                Return true
            End If
            ' No.322
            ' 0xfbc3 (Windows-31J)
            ' 0x920a (UTF-16BE)
            If (argCheck = "鈊"c) Then
                Return true
            End If
            ' No.323
            ' 0xfbc4 (Windows-31J)
            ' 0x923a (UTF-16BE)
            If (argCheck = "鈺"c) Then
                Return true
            End If
            ' No.324
            ' 0xfbc5 (Windows-31J)
            ' 0x9240 (UTF-16BE)
            If (argCheck = "鉀"c) Then
                Return true
            End If
            ' No.325
            ' 0xfbc6 (Windows-31J)
            ' 0x923c (UTF-16BE)
            If (argCheck = "鈼"c) Then
                Return true
            End If
            ' No.326
            ' 0xfbc7 (Windows-31J)
            ' 0x924e (UTF-16BE)
            If (argCheck = "鉎"c) Then
                Return true
            End If
            ' No.327
            ' 0xfbc8 (Windows-31J)
            ' 0x9259 (UTF-16BE)
            If (argCheck = "鉙"c) Then
                Return true
            End If
            ' No.328
            ' 0xfbc9 (Windows-31J)
            ' 0x9251 (UTF-16BE)
            If (argCheck = "鉑"c) Then
                Return true
            End If
            ' No.329
            ' 0xfbca (Windows-31J)
            ' 0x9239 (UTF-16BE)
            If (argCheck = "鈹"c) Then
                Return true
            End If
            ' No.330
            ' 0xfbcb (Windows-31J)
            ' 0x9267 (UTF-16BE)
            If (argCheck = "鉧"c) Then
                Return true
            End If
            ' No.331
            ' 0xfbcc (Windows-31J)
            ' 0x92a7 (UTF-16BE)
            If (argCheck = "銧"c) Then
                Return true
            End If
            ' No.332
            ' 0xfbcd (Windows-31J)
            ' 0x9277 (UTF-16BE)
            If (argCheck = "鉷"c) Then
                Return true
            End If
            ' No.333
            ' 0xfbce (Windows-31J)
            ' 0x9278 (UTF-16BE)
            If (argCheck = "鉸"c) Then
                Return true
            End If
            ' No.334
            ' 0xfbcf (Windows-31J)
            ' 0x92e7 (UTF-16BE)
            If (argCheck = "鋧"c) Then
                Return true
            End If
            ' No.335
            ' 0xfbd0 (Windows-31J)
            ' 0x92d7 (UTF-16BE)
            If (argCheck = "鋗"c) Then
                Return true
            End If
            ' No.336
            ' 0xfbd1 (Windows-31J)
            ' 0x92d9 (UTF-16BE)
            If (argCheck = "鋙"c) Then
                Return true
            End If
            ' No.337
            ' 0xfbd2 (Windows-31J)
            ' 0x92d0 (UTF-16BE)
            If (argCheck = "鋐"c) Then
                Return true
            End If
            ' No.338
            ' 0xfbd3 (Windows-31J)
            ' 0xfa27 (UTF-16BE)
            If (argCheck = "﨧"c) Then
                Return true
            End If
            ' No.339
            ' 0xfbd4 (Windows-31J)
            ' 0x92d5 (UTF-16BE)
            If (argCheck = "鋕"c) Then
                Return true
            End If
            ' No.340
            ' 0xfbd5 (Windows-31J)
            ' 0x92e0 (UTF-16BE)
            If (argCheck = "鋠"c) Then
                Return true
            End If
            ' No.341
            ' 0xfbd6 (Windows-31J)
            ' 0x92d3 (UTF-16BE)
            If (argCheck = "鋓"c) Then
                Return true
            End If
            ' No.342
            ' 0xfbd7 (Windows-31J)
            ' 0x9325 (UTF-16BE)
            If (argCheck = "錥"c) Then
                Return true
            End If
            ' No.343
            ' 0xfbd8 (Windows-31J)
            ' 0x9321 (UTF-16BE)
            If (argCheck = "錡"c) Then
                Return true
            End If
            ' No.344
            ' 0xfbd9 (Windows-31J)
            ' 0x92fb (UTF-16BE)
            If (argCheck = "鋻"c) Then
                Return true
            End If
            ' No.345
            ' 0xfbda (Windows-31J)
            ' 0xfa28 (UTF-16BE)
            If (argCheck = "﨨"c) Then
                Return true
            End If
            ' No.346
            ' 0xfbdb (Windows-31J)
            ' 0x931e (UTF-16BE)
            If (argCheck = "錞"c) Then
                Return true
            End If
            ' No.347
            ' 0xfbdc (Windows-31J)
            ' 0x92ff (UTF-16BE)
            If (argCheck = "鋿"c) Then
                Return true
            End If
            ' No.348
            ' 0xfbdd (Windows-31J)
            ' 0x931d (UTF-16BE)
            If (argCheck = "錝"c) Then
                Return true
            End If
            ' No.349
            ' 0xfbde (Windows-31J)
            ' 0x9302 (UTF-16BE)
            If (argCheck = "錂"c) Then
                Return true
            End If
            ' No.350
            ' 0xfbdf (Windows-31J)
            ' 0x9370 (UTF-16BE)
            If (argCheck = "鍰"c) Then
                Return true
            End If
            ' No.351
            ' 0xfbe0 (Windows-31J)
            ' 0x9357 (UTF-16BE)
            If (argCheck = "鍗"c) Then
                Return true
            End If
            ' No.352
            ' 0xfbe1 (Windows-31J)
            ' 0x93a4 (UTF-16BE)
            If (argCheck = "鎤"c) Then
                Return true
            End If
            ' No.353
            ' 0xfbe2 (Windows-31J)
            ' 0x93c6 (UTF-16BE)
            If (argCheck = "鏆"c) Then
                Return true
            End If
            ' No.354
            ' 0xfbe3 (Windows-31J)
            ' 0x93de (UTF-16BE)
            If (argCheck = "鏞"c) Then
                Return true
            End If
            ' No.355
            ' 0xfbe4 (Windows-31J)
            ' 0x93f8 (UTF-16BE)
            If (argCheck = "鏸"c) Then
                Return true
            End If
            ' No.356
            ' 0xfbe5 (Windows-31J)
            ' 0x9431 (UTF-16BE)
            If (argCheck = "鐱"c) Then
                Return true
            End If
            ' No.357
            ' 0xfbe6 (Windows-31J)
            ' 0x9445 (UTF-16BE)
            If (argCheck = "鑅"c) Then
                Return true
            End If
            ' No.358
            ' 0xfbe7 (Windows-31J)
            ' 0x9448 (UTF-16BE)
            If (argCheck = "鑈"c) Then
                Return true
            End If
            ' No.359
            ' 0xfbe8 (Windows-31J)
            ' 0x9592 (UTF-16BE)
            If (argCheck = "閒"c) Then
                Return true
            End If
            ' No.360
            ' 0xfbe9 (Windows-31J)
            ' 0xf9dc (UTF-16BE)
            If (argCheck = "隆"c) Then
                Return true
            End If
            ' No.361
            ' 0xfbea (Windows-31J)
            ' 0xfa29 (UTF-16BE)
            If (argCheck = "﨩"c) Then
                Return true
            End If
            ' No.362
            ' 0xfbeb (Windows-31J)
            ' 0x969d (UTF-16BE)
            If (argCheck = "隝"c) Then
                Return true
            End If
            ' No.363
            ' 0xfbec (Windows-31J)
            ' 0x96af (UTF-16BE)
            If (argCheck = "隯"c) Then
                Return true
            End If
            ' No.364
            ' 0xfbed (Windows-31J)
            ' 0x9733 (UTF-16BE)
            If (argCheck = "霳"c) Then
                Return true
            End If
            ' No.365
            ' 0xfbee (Windows-31J)
            ' 0x973b (UTF-16BE)
            If (argCheck = "霻"c) Then
                Return true
            End If
            ' No.366
            ' 0xfbef (Windows-31J)
            ' 0x9743 (UTF-16BE)
            If (argCheck = "靃"c) Then
                Return true
            End If
            ' No.367
            ' 0xfbf0 (Windows-31J)
            ' 0x974d (UTF-16BE)
            If (argCheck = "靍"c) Then
                Return true
            End If
            ' No.368
            ' 0xfbf1 (Windows-31J)
            ' 0x974f (UTF-16BE)
            If (argCheck = "靏"c) Then
                Return true
            End If
            ' No.369
            ' 0xfbf2 (Windows-31J)
            ' 0x9751 (UTF-16BE)
            If (argCheck = "靑"c) Then
                Return true
            End If
            ' No.370
            ' 0xfbf3 (Windows-31J)
            ' 0x9755 (UTF-16BE)
            If (argCheck = "靕"c) Then
                Return true
            End If
            ' No.371
            ' 0xfbf4 (Windows-31J)
            ' 0x9857 (UTF-16BE)
            If (argCheck = "顗"c) Then
                Return true
            End If
            ' No.372
            ' 0xfbf5 (Windows-31J)
            ' 0x9865 (UTF-16BE)
            If (argCheck = "顥"c) Then
                Return true
            End If
            ' No.373
            ' 0xfbf6 (Windows-31J)
            ' 0xfa2a (UTF-16BE)
            If (argCheck = "飯"c) Then
                Return true
            End If
            ' No.374
            ' 0xfbf7 (Windows-31J)
            ' 0xfa2b (UTF-16BE)
            If (argCheck = "飼"c) Then
                Return true
            End If
            ' No.375
            ' 0xfbf8 (Windows-31J)
            ' 0x9927 (UTF-16BE)
            If (argCheck = "餧"c) Then
                Return true
            End If
            ' No.376
            ' 0xfbf9 (Windows-31J)
            ' 0xfa2c (UTF-16BE)
            If (argCheck = "館"c) Then
                Return true
            End If
            ' No.377
            ' 0xfbfa (Windows-31J)
            ' 0x999e (UTF-16BE)
            If (argCheck = "馞"c) Then
                Return true
            End If
            ' No.378
            ' 0xfbfb (Windows-31J)
            ' 0x9a4e (UTF-16BE)
            If (argCheck = "驎"c) Then
                Return true
            End If
            ' No.379
            ' 説明:fbfc: 高に似た文字。
            ' 0xfbfc (Windows-31J)
            ' 0x9ad9 (UTF-16BE)
            If (argCheck = "髙"c) Then
                Return true
            End If
            ' No.381
            ' 説明:fc40: fc3fまでスキップ。
            ' 0xfc40 (Windows-31J)
            ' 0x9adc (UTF-16BE)
            If (argCheck = "髜"c) Then
                Return true
            End If
            ' No.382
            ' 説明:fc41:
            ' 0xfc41 (Windows-31J)
            ' 0x9b75 (UTF-16BE)
            If (argCheck = "魵"c) Then
                Return true
            End If
            ' No.383
            ' 説明:fc42:
            ' 0xfc42 (Windows-31J)
            ' 0x9b72 (UTF-16BE)
            If (argCheck = "魲"c) Then
                Return true
            End If
            ' No.384
            ' 0xfc43 (Windows-31J)
            ' 0x9b8f (UTF-16BE)
            If (argCheck = "鮏"c) Then
                Return true
            End If
            ' No.385
            ' 0xfc44 (Windows-31J)
            ' 0x9bb1 (UTF-16BE)
            If (argCheck = "鮱"c) Then
                Return true
            End If
            ' No.386
            ' 0xfc45 (Windows-31J)
            ' 0x9bbb (UTF-16BE)
            If (argCheck = "鮻"c) Then
                Return true
            End If
            ' No.387
            ' 0xfc46 (Windows-31J)
            ' 0x9c00 (UTF-16BE)
            If (argCheck = "鰀"c) Then
                Return true
            End If
            ' No.388
            ' 0xfc47 (Windows-31J)
            ' 0x9d70 (UTF-16BE)
            If (argCheck = "鵰"c) Then
                Return true
            End If
            ' No.389
            ' 0xfc48 (Windows-31J)
            ' 0x9d6b (UTF-16BE)
            If (argCheck = "鵫"c) Then
                Return true
            End If
            ' No.390
            ' 0xfc49 (Windows-31J)
            ' 0xfa2d (UTF-16BE)
            If (argCheck = "鶴"c) Then
                Return true
            End If
            ' No.391
            ' 説明:fc4a:
            ' 0xfc4a (Windows-31J)
            ' 0x9e19 (UTF-16BE)
            If (argCheck = "鸙"c) Then
                Return true
            End If
            ' No.392
            ' 説明:fc4b: 黒に似た文字。
            ' 0xfc4b (Windows-31J)
            ' 0x9ed1 (UTF-16BE)
            If (argCheck = "黑"c) Then
                Return true
            End If
            Return false
        End Function

        ''' <summary>与えられた文字列が、全て文字グループに含まれる文字であるかどうかを判定します。</summary>
        ''' <param name="argCheck">チェックを行いたい文字列。</param>
        ''' <returns>全ての文字が文字グループに含まれていればture。グループに含まれない文字が含まれていればfalse。</returns>
        Public Function MatchAll(argCheck As String) As Boolean
            If (argCheck Is Nothing) Then
                Throw New ArgumentException("メソッド[MatchAll]のパラメータ[argCheck]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。")
            End If

            Dim arrayArg As Char() = argCheck.ToCharArray()
            Dim arraySize As Integer= arrayArg.Length
            For index As Integer = 0 To arraySize - 1
                If (Match(arrayArg(index)) = False) Then
                    Return false
                End If
            Next
            Return true
        End Function

        ''' <summary>与えられた文字列が、文字グループに含まれる文字をひとつでも含んでいるかどうかを判定します。</summary>
        ''' <param name="argCheck">チェックを行いたい文字列。</param>
        ''' <returns>文字グループに含まれている文字をひとつでも含んでいればture。グループに含まれる文字をひとつも含まない場合はfalse。</returns>
        Public Function MatchAny(argCheck As String) As Boolean
            If (argCheck Is Nothing) Then
                Throw New ArgumentException("メソッド[MatchAny]のパラメータ[argCheck]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。")
            End If

            Dim arrayArg As Char() = argCheck.ToCharArray()
            Dim arraySize As Integer= arrayArg.Length
            For index As Integer = 0 To arraySize - 1
                If (Match(arrayArg(index))) Then
                    Return true
                End If
            Next
            Return false
        End Function
    End Class
End Namespace

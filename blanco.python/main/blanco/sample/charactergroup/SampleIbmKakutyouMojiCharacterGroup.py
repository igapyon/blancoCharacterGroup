# -*- coding: cp932 -*-
"""このソースコードは blanco Frameworkによって自動生成されています。
"""
class SampleIbmKakutyouMojiCharacterGroup:
    """サンプル。IBM拡張文字 0xfa40-fc4b。115-119区。blancoCharacterGroupの実装には影響しません。
    """

    def __init__(self, encoding='cp932'):
        """クラス初期化メソッド

        self -- このメソッドを含むクラス自身。
        encoding='cp932' -- エンコーディング。デフォルトは'cp932'
        """
        self.encoding = encoding
    #end

    def match(self, argCheck):
        """文字グループに含まれる文字であるかどうかを判定します。

        self -- このメソッドを含むクラス自身。
        argCheck -- チェックを行いたい文字。
        return -- 文字グループに含まれていればture。グループに含まれない文字であればfalse。
        """
        argCheckUnicode = unicode(argCheck, self.encoding)
        # No.1
        # 説明:fa40: 数字の１。
        # 0xfa40 (Windows-31J)
        # 0x2170 (UTF-16BE)
        if argCheckUnicode == u'ⅰ':
            return True
        #end
        # No.2
        # 0xfa41 (Windows-31J)
        # 0x2171 (UTF-16BE)
        if argCheckUnicode == u'ⅱ':
            return True
        #end
        # No.3
        # 0xfa42 (Windows-31J)
        # 0x2172 (UTF-16BE)
        if argCheckUnicode == u'ⅲ':
            return True
        #end
        # No.4
        # 0xfa43 (Windows-31J)
        # 0x2173 (UTF-16BE)
        if argCheckUnicode == u'ⅳ':
            return True
        #end
        # No.5
        # 0xfa44 (Windows-31J)
        # 0x2174 (UTF-16BE)
        if argCheckUnicode == u'ⅴ':
            return True
        #end
        # No.6
        # 0xfa45 (Windows-31J)
        # 0x2175 (UTF-16BE)
        if argCheckUnicode == u'ⅵ':
            return True
        #end
        # No.7
        # 0xfa46 (Windows-31J)
        # 0x2176 (UTF-16BE)
        if argCheckUnicode == u'ⅶ':
            return True
        #end
        # No.8
        # 0xfa47 (Windows-31J)
        # 0x2177 (UTF-16BE)
        if argCheckUnicode == u'ⅷ':
            return True
        #end
        # No.9
        # 0xfa48 (Windows-31J)
        # 0x2178 (UTF-16BE)
        if argCheckUnicode == u'ⅸ':
            return True
        #end
        # No.10
        # 説明:fa49: 数字の１０。
        # 0xfa49 (Windows-31J)
        # 0x2179 (UTF-16BE)
        if argCheckUnicode == u'ⅹ':
            return True
        #end
        # No.11
        # 説明:fa4a→8754: ローマ数字の１。(NEC特殊文字にマップされています) (※重複符号化)
        # 0x8754 (Windows-31J)
        # 0x2160 (UTF-16BE)
        if argCheckUnicode == u'Ⅰ':
            return True
        #end
        # No.12
        # 説明:fa4b→8755: ローマ数字の２。(NEC特殊文字にマップされています) (※重複符号化)
        # 0x8755 (Windows-31J)
        # 0x2161 (UTF-16BE)
        if argCheckUnicode == u'Ⅱ':
            return True
        #end
        # No.13
        # 説明:fa4c→875b: ローマ数字の３。(NEC特殊文字にマップされています) (※重複符号化)
        # 0x8756 (Windows-31J)
        # 0x2162 (UTF-16BE)
        if argCheckUnicode == u'Ⅲ':
            return True
        #end
        # No.14
        # 説明:fa4d→8757: ローマ数字の４。(NEC特殊文字にマップされています) (※重複符号化)
        # 0x8757 (Windows-31J)
        # 0x2163 (UTF-16BE)
        if argCheckUnicode == u'Ⅳ':
            return True
        #end
        # No.15
        # 説明:fa4e→8758: ローマ数字の５。(NEC特殊文字にマップされています) (※重複符号化)
        # 0x8758 (Windows-31J)
        # 0x2164 (UTF-16BE)
        if argCheckUnicode == u'Ⅴ':
            return True
        #end
        # No.16
        # 説明:fa4f→8759: ローマ数字の６。(NEC特殊文字にマップされています) (※重複符号化)
        # 0x8759 (Windows-31J)
        # 0x2165 (UTF-16BE)
        if argCheckUnicode == u'Ⅵ':
            return True
        #end
        # No.17
        # 説明:fa50→875a: ローマ数字の７。(NEC特殊文字にマップされています) (※重複符号化)
        # 0x875a (Windows-31J)
        # 0x2166 (UTF-16BE)
        if argCheckUnicode == u'Ⅶ':
            return True
        #end
        # No.18
        # 説明:fa51→875b: ローマ数字の８。(NEC特殊文字にマップされています) (※重複符号化)
        # 0x875b (Windows-31J)
        # 0x2167 (UTF-16BE)
        if argCheckUnicode == u'Ⅷ':
            return True
        #end
        # No.19
        # 説明:fa52→875c: ローマ数字の９。(NEC特殊文字にマップされています) (※重複符号化)
        # 0x875c (Windows-31J)
        # 0x2168 (UTF-16BE)
        if argCheckUnicode == u'Ⅸ':
            return True
        #end
        # No.20
        # 説明:fa53→875d: ローマ数字の１０。(NEC特殊文字にマップされています) (※重複符号化)
        # 0x875d (Windows-31J)
        # 0x2169 (UTF-16BE)
        if argCheckUnicode == u'Ⅹ':
            return True
        #end
        # No.21
        # 説明:fa54→81ca: (JIS X 0208-1983にマップされています) (※重複符号化)
        # 0x81ca (Windows-31J)
        # 0xffe2 (UTF-16BE)
        if argCheckUnicode == u'￢':
            return True
        #end
        # No.22
        # 説明:fa55: 縦棒。
        # 0xfa55 (Windows-31J)
        # 0xffe4 (UTF-16BE)
        if argCheckUnicode == u'￤':
            return True
        #end
        # No.23
        # 0xfa56 (Windows-31J)
        # 0xff07 (UTF-16BE)
        if argCheckUnicode == u'＇':
            return True
        #end
        # No.24
        # 0xfa57 (Windows-31J)
        # 0xff02 (UTF-16BE)
        if argCheckUnicode == u'＂':
            return True
        #end
        # No.25
        # 説明:fa58→878a: （株）。(NEC特殊文字にマップされています) (※重複符号化)
        # 0x878a (Windows-31J)
        # 0x3231 (UTF-16BE)
        if argCheckUnicode == u'㈱':
            return True
        #end
        # No.26
        # 説明:fa59→8782: No.。(NEC特殊文字にマップされています) (※重複符号化)
        # 0x8782 (Windows-31J)
        # 0x2116 (UTF-16BE)
        if argCheckUnicode == u'№':
            return True
        #end
        # No.27
        # 説明:fa5a→8784: TEL。(NEC特殊文字にマップされています) (※重複符号化)
        # 0x8784 (Windows-31J)
        # 0x2121 (UTF-16BE)
        if argCheckUnicode == u'℡':
            return True
        #end
        # No.28
        # 説明:fa5b→81e6: なぜならば。(JIS X 0208-1983にマップされています) (※重複符号化)
        # 0x81e6 (Windows-31J)
        # 0x2235 (UTF-16BE)
        if argCheckUnicode == u'∵':
            return True
        #end
        # No.29
        # 説明:fa5c:
        # 0xfa5c (Windows-31J)
        # 0x7e8a (UTF-16BE)
        if argCheckUnicode == u'纊':
            return True
        #end
        # No.30
        # 0xfa5d (Windows-31J)
        # 0x891c (UTF-16BE)
        if argCheckUnicode == u'褜':
            return True
        #end
        # No.31
        # 0xfa5e (Windows-31J)
        # 0x9348 (UTF-16BE)
        if argCheckUnicode == u'鍈':
            return True
        #end
        # No.32
        # 0xfa5f (Windows-31J)
        # 0x9288 (UTF-16BE)
        if argCheckUnicode == u'銈':
            return True
        #end
        # No.33
        # 0xfa60 (Windows-31J)
        # 0x84dc (UTF-16BE)
        if argCheckUnicode == u'蓜':
            return True
        #end
        # No.34
        # 0xfa61 (Windows-31J)
        # 0x4fc9 (UTF-16BE)
        if argCheckUnicode == u'俉':
            return True
        #end
        # No.35
        # 0xfa62 (Windows-31J)
        # 0x70bb (UTF-16BE)
        if argCheckUnicode == u'炻':
            return True
        #end
        # No.36
        # 0xfa63 (Windows-31J)
        # 0x6631 (UTF-16BE)
        if argCheckUnicode == u'昱':
            return True
        #end
        # No.37
        # 0xfa64 (Windows-31J)
        # 0x68c8 (UTF-16BE)
        if argCheckUnicode == u'棈':
            return True
        #end
        # No.38
        # 0xfa65 (Windows-31J)
        # 0x92f9 (UTF-16BE)
        if argCheckUnicode == u'鋹':
            return True
        #end
        # No.39
        # 0xfa66 (Windows-31J)
        # 0x66fb (UTF-16BE)
        if argCheckUnicode == u'曻':
            return True
        #end
        # No.40
        # 0xfa67 (Windows-31J)
        # 0x5f45 (UTF-16BE)
        if argCheckUnicode == u'彅':
            return True
        #end
        # No.41
        # 0xfa68 (Windows-31J)
        # 0x4e28 (UTF-16BE)
        if argCheckUnicode == u'丨':
            return True
        #end
        # No.42
        # 0xfa69 (Windows-31J)
        # 0x4ee1 (UTF-16BE)
        if argCheckUnicode == u'仡':
            return True
        #end
        # No.43
        # 0xfa6a (Windows-31J)
        # 0x4efc (UTF-16BE)
        if argCheckUnicode == u'仼':
            return True
        #end
        # No.44
        # 0xfa6b (Windows-31J)
        # 0x4f00 (UTF-16BE)
        if argCheckUnicode == u'伀':
            return True
        #end
        # No.45
        # 0xfa6c (Windows-31J)
        # 0x4f03 (UTF-16BE)
        if argCheckUnicode == u'伃':
            return True
        #end
        # No.46
        # 0xfa6d (Windows-31J)
        # 0x4f39 (UTF-16BE)
        if argCheckUnicode == u'伹':
            return True
        #end
        # No.47
        # 0xfa6e (Windows-31J)
        # 0x4f56 (UTF-16BE)
        if argCheckUnicode == u'佖':
            return True
        #end
        # No.48
        # 0xfa6f (Windows-31J)
        # 0x4f92 (UTF-16BE)
        if argCheckUnicode == u'侒':
            return True
        #end
        # No.49
        # 0xfa70 (Windows-31J)
        # 0x4f8a (UTF-16BE)
        if argCheckUnicode == u'侊':
            return True
        #end
        # No.50
        # 0xfa71 (Windows-31J)
        # 0x4f9a (UTF-16BE)
        if argCheckUnicode == u'侚':
            return True
        #end
        # No.51
        # 0xfa72 (Windows-31J)
        # 0x4f94 (UTF-16BE)
        if argCheckUnicode == u'侔':
            return True
        #end
        # No.52
        # 0xfa73 (Windows-31J)
        # 0x4fcd (UTF-16BE)
        if argCheckUnicode == u'俍':
            return True
        #end
        # No.53
        # 0xfa74 (Windows-31J)
        # 0x5040 (UTF-16BE)
        if argCheckUnicode == u'偀':
            return True
        #end
        # No.54
        # 0xfa75 (Windows-31J)
        # 0x5022 (UTF-16BE)
        if argCheckUnicode == u'倢':
            return True
        #end
        # No.55
        # 0xfa76 (Windows-31J)
        # 0x4fff (UTF-16BE)
        if argCheckUnicode == u'俿':
            return True
        #end
        # No.56
        # 0xfa77 (Windows-31J)
        # 0x501e (UTF-16BE)
        if argCheckUnicode == u'倞':
            return True
        #end
        # No.57
        # 0xfa78 (Windows-31J)
        # 0x5046 (UTF-16BE)
        if argCheckUnicode == u'偆':
            return True
        #end
        # No.58
        # 0xfa79 (Windows-31J)
        # 0x5070 (UTF-16BE)
        if argCheckUnicode == u'偰':
            return True
        #end
        # No.59
        # 0xfa7a (Windows-31J)
        # 0x5042 (UTF-16BE)
        if argCheckUnicode == u'偂':
            return True
        #end
        # No.60
        # 0xfa7b (Windows-31J)
        # 0x5094 (UTF-16BE)
        if argCheckUnicode == u'傔':
            return True
        #end
        # No.61
        # 0xfa7c (Windows-31J)
        # 0x50f4 (UTF-16BE)
        if argCheckUnicode == u'僴':
            return True
        #end
        # No.62
        # 0xfa7d (Windows-31J)
        # 0x50d8 (UTF-16BE)
        if argCheckUnicode == u'僘':
            return True
        #end
        # No.63
        # 説明:fa7e:
        # 0xfa7e (Windows-31J)
        # 0x514a (UTF-16BE)
        if argCheckUnicode == u'兊':
            return True
        #end
        # No.65
        # 説明:fa80:
        # 0xfa80 (Windows-31J)
        # 0x5164 (UTF-16BE)
        if argCheckUnicode == u'兤':
            return True
        #end
        # No.66
        # 0xfa81 (Windows-31J)
        # 0x519d (UTF-16BE)
        if argCheckUnicode == u'冝':
            return True
        #end
        # No.67
        # 0xfa82 (Windows-31J)
        # 0x51be (UTF-16BE)
        if argCheckUnicode == u'冾':
            return True
        #end
        # No.68
        # 0xfa83 (Windows-31J)
        # 0x51ec (UTF-16BE)
        if argCheckUnicode == u'凬':
            return True
        #end
        # No.69
        # 0xfa84 (Windows-31J)
        # 0x5215 (UTF-16BE)
        if argCheckUnicode == u'刕':
            return True
        #end
        # No.70
        # 0xfa85 (Windows-31J)
        # 0x529c (UTF-16BE)
        if argCheckUnicode == u'劜':
            return True
        #end
        # No.71
        # 0xfa86 (Windows-31J)
        # 0x52a6 (UTF-16BE)
        if argCheckUnicode == u'劦':
            return True
        #end
        # No.72
        # 0xfa87 (Windows-31J)
        # 0x52c0 (UTF-16BE)
        if argCheckUnicode == u'勀':
            return True
        #end
        # No.73
        # 0xfa88 (Windows-31J)
        # 0x52db (UTF-16BE)
        if argCheckUnicode == u'勛':
            return True
        #end
        # No.74
        # 0xfa89 (Windows-31J)
        # 0x5300 (UTF-16BE)
        if argCheckUnicode == u'匀':
            return True
        #end
        # No.75
        # 0xfa8a (Windows-31J)
        # 0x5307 (UTF-16BE)
        if argCheckUnicode == u'匇':
            return True
        #end
        # No.76
        # 0xfa8b (Windows-31J)
        # 0x5324 (UTF-16BE)
        if argCheckUnicode == u'匤':
            return True
        #end
        # No.77
        # 0xfa8c (Windows-31J)
        # 0x5372 (UTF-16BE)
        if argCheckUnicode == u'卲':
            return True
        #end
        # No.78
        # 0xfa8d (Windows-31J)
        # 0x5393 (UTF-16BE)
        if argCheckUnicode == u'厓':
            return True
        #end
        # No.79
        # 0xfa8e (Windows-31J)
        # 0x53b2 (UTF-16BE)
        if argCheckUnicode == u'厲':
            return True
        #end
        # No.80
        # 0xfa8f (Windows-31J)
        # 0x53dd (UTF-16BE)
        if argCheckUnicode == u'叝':
            return True
        #end
        # No.81
        # 0xfa90 (Windows-31J)
        # 0xfa0e (UTF-16BE)
        if argCheckUnicode == u'﨎':
            return True
        #end
        # No.82
        # 0xfa91 (Windows-31J)
        # 0x549c (UTF-16BE)
        if argCheckUnicode == u'咜':
            return True
        #end
        # No.83
        # 0xfa92 (Windows-31J)
        # 0x548a (UTF-16BE)
        if argCheckUnicode == u'咊':
            return True
        #end
        # No.84
        # 0xfa93 (Windows-31J)
        # 0x54a9 (UTF-16BE)
        if argCheckUnicode == u'咩':
            return True
        #end
        # No.85
        # 0xfa94 (Windows-31J)
        # 0x54ff (UTF-16BE)
        if argCheckUnicode == u'哿':
            return True
        #end
        # No.86
        # 0xfa95 (Windows-31J)
        # 0x5586 (UTF-16BE)
        if argCheckUnicode == u'喆':
            return True
        #end
        # No.87
        # 0xfa96 (Windows-31J)
        # 0x5759 (UTF-16BE)
        if argCheckUnicode == u'坙':
            return True
        #end
        # No.88
        # 0xfa97 (Windows-31J)
        # 0x5765 (UTF-16BE)
        if argCheckUnicode == u'坥':
            return True
        #end
        # No.89
        # 0xfa98 (Windows-31J)
        # 0x57ac (UTF-16BE)
        if argCheckUnicode == u'垬':
            return True
        #end
        # No.90
        # 0xfa99 (Windows-31J)
        # 0x57c8 (UTF-16BE)
        if argCheckUnicode == u'埈':
            return True
        #end
        # No.91
        # 0xfa9a (Windows-31J)
        # 0x57c7 (UTF-16BE)
        if argCheckUnicode == u'埇':
            return True
        #end
        # No.92
        # 0xfa9b (Windows-31J)
        # 0xfa0f (UTF-16BE)
        if argCheckUnicode == u'﨏':
            return True
        #end
        # No.93
        # 0xfa9c (Windows-31J)
        # 0xfa10 (UTF-16BE)
        if argCheckUnicode == u'塚':
            return True
        #end
        # No.94
        # 0xfa9d (Windows-31J)
        # 0x589e (UTF-16BE)
        if argCheckUnicode == u'增':
            return True
        #end
        # No.95
        # 0xfa9e (Windows-31J)
        # 0x58b2 (UTF-16BE)
        if argCheckUnicode == u'墲':
            return True
        #end
        # No.96
        # 0xfa9f (Windows-31J)
        # 0x590b (UTF-16BE)
        if argCheckUnicode == u'夋':
            return True
        #end
        # No.97
        # 0xfaa0 (Windows-31J)
        # 0x5953 (UTF-16BE)
        if argCheckUnicode == u'奓':
            return True
        #end
        # No.98
        # 0xfaa1 (Windows-31J)
        # 0x595b (UTF-16BE)
        if argCheckUnicode == u'奛':
            return True
        #end
        # No.99
        # 0xfaa2 (Windows-31J)
        # 0x595d (UTF-16BE)
        if argCheckUnicode == u'奝':
            return True
        #end
        # No.100
        # 0xfaa3 (Windows-31J)
        # 0x5963 (UTF-16BE)
        if argCheckUnicode == u'奣':
            return True
        #end
        # No.101
        # 0xfaa4 (Windows-31J)
        # 0x59a4 (UTF-16BE)
        if argCheckUnicode == u'妤':
            return True
        #end
        # No.102
        # 0xfaa5 (Windows-31J)
        # 0x59ba (UTF-16BE)
        if argCheckUnicode == u'妺':
            return True
        #end
        # No.103
        # 0xfaa6 (Windows-31J)
        # 0x5b56 (UTF-16BE)
        if argCheckUnicode == u'孖':
            return True
        #end
        # No.104
        # 0xfaa7 (Windows-31J)
        # 0x5bc0 (UTF-16BE)
        if argCheckUnicode == u'寀':
            return True
        #end
        # No.105
        # 0xfaa8 (Windows-31J)
        # 0x752f (UTF-16BE)
        if argCheckUnicode == u'甯':
            return True
        #end
        # No.106
        # 0xfaa9 (Windows-31J)
        # 0x5bd8 (UTF-16BE)
        if argCheckUnicode == u'寘':
            return True
        #end
        # No.107
        # 0xfaaa (Windows-31J)
        # 0x5bec (UTF-16BE)
        if argCheckUnicode == u'寬':
            return True
        #end
        # No.108
        # 0xfaab (Windows-31J)
        # 0x5c1e (UTF-16BE)
        if argCheckUnicode == u'尞':
            return True
        #end
        # No.109
        # 0xfaac (Windows-31J)
        # 0x5ca6 (UTF-16BE)
        if argCheckUnicode == u'岦':
            return True
        #end
        # No.110
        # 0xfaad (Windows-31J)
        # 0x5cba (UTF-16BE)
        if argCheckUnicode == u'岺':
            return True
        #end
        # No.111
        # 0xfaae (Windows-31J)
        # 0x5cf5 (UTF-16BE)
        if argCheckUnicode == u'峵':
            return True
        #end
        # No.112
        # 0xfaaf (Windows-31J)
        # 0x5d27 (UTF-16BE)
        if argCheckUnicode == u'崧':
            return True
        #end
        # No.113
        # 0xfab0 (Windows-31J)
        # 0x5d53 (UTF-16BE)
        if argCheckUnicode == u'嵓':
            return True
        #end
        # No.114
        # 0xfab1 (Windows-31J)
        # 0xfa11 (UTF-16BE)
        if argCheckUnicode == u'﨑':
            return True
        #end
        # No.115
        # 0xfab2 (Windows-31J)
        # 0x5d42 (UTF-16BE)
        if argCheckUnicode == u'嵂':
            return True
        #end
        # No.116
        # 0xfab3 (Windows-31J)
        # 0x5d6d (UTF-16BE)
        if argCheckUnicode == u'嵭':
            return True
        #end
        # No.117
        # 0xfab4 (Windows-31J)
        # 0x5db8 (UTF-16BE)
        if argCheckUnicode == u'嶸':
            return True
        #end
        # No.118
        # 0xfab5 (Windows-31J)
        # 0x5db9 (UTF-16BE)
        if argCheckUnicode == u'嶹':
            return True
        #end
        # No.119
        # 0xfab6 (Windows-31J)
        # 0x5dd0 (UTF-16BE)
        if argCheckUnicode == u'巐':
            return True
        #end
        # No.120
        # 0xfab7 (Windows-31J)
        # 0x5f21 (UTF-16BE)
        if argCheckUnicode == u'弡':
            return True
        #end
        # No.121
        # 0xfab8 (Windows-31J)
        # 0x5f34 (UTF-16BE)
        if argCheckUnicode == u'弴':
            return True
        #end
        # No.122
        # 0xfab9 (Windows-31J)
        # 0x5f67 (UTF-16BE)
        if argCheckUnicode == u'彧':
            return True
        #end
        # No.123
        # 0xfaba (Windows-31J)
        # 0x5fb7 (UTF-16BE)
        if argCheckUnicode == u'德':
            return True
        #end
        # No.124
        # 0xfabb (Windows-31J)
        # 0x5fde (UTF-16BE)
        if argCheckUnicode == u'忞':
            return True
        #end
        # No.125
        # 0xfabc (Windows-31J)
        # 0x605d (UTF-16BE)
        if argCheckUnicode == u'恝':
            return True
        #end
        # No.126
        # 0xfabd (Windows-31J)
        # 0x6085 (UTF-16BE)
        if argCheckUnicode == u'悅':
            return True
        #end
        # No.127
        # 0xfabe (Windows-31J)
        # 0x608a (UTF-16BE)
        if argCheckUnicode == u'悊':
            return True
        #end
        # No.128
        # 0xfabf (Windows-31J)
        # 0x60de (UTF-16BE)
        if argCheckUnicode == u'惞':
            return True
        #end
        # No.129
        # 0xfac0 (Windows-31J)
        # 0x60d5 (UTF-16BE)
        if argCheckUnicode == u'惕':
            return True
        #end
        # No.130
        # 0xfac1 (Windows-31J)
        # 0x6120 (UTF-16BE)
        if argCheckUnicode == u'愠':
            return True
        #end
        # No.131
        # 0xfac2 (Windows-31J)
        # 0x60f2 (UTF-16BE)
        if argCheckUnicode == u'惲':
            return True
        #end
        # No.132
        # 0xfac3 (Windows-31J)
        # 0x6111 (UTF-16BE)
        if argCheckUnicode == u'愑':
            return True
        #end
        # No.133
        # 0xfac4 (Windows-31J)
        # 0x6137 (UTF-16BE)
        if argCheckUnicode == u'愷':
            return True
        #end
        # No.134
        # 0xfac5 (Windows-31J)
        # 0x6130 (UTF-16BE)
        if argCheckUnicode == u'愰':
            return True
        #end
        # No.135
        # 0xfac6 (Windows-31J)
        # 0x6198 (UTF-16BE)
        if argCheckUnicode == u'憘':
            return True
        #end
        # No.136
        # 0xfac7 (Windows-31J)
        # 0x6213 (UTF-16BE)
        if argCheckUnicode == u'戓':
            return True
        #end
        # No.137
        # 0xfac8 (Windows-31J)
        # 0x62a6 (UTF-16BE)
        if argCheckUnicode == u'抦':
            return True
        #end
        # No.138
        # 0xfac9 (Windows-31J)
        # 0x63f5 (UTF-16BE)
        if argCheckUnicode == u'揵':
            return True
        #end
        # No.139
        # 0xfaca (Windows-31J)
        # 0x6460 (UTF-16BE)
        if argCheckUnicode == u'摠':
            return True
        #end
        # No.140
        # 0xfacb (Windows-31J)
        # 0x649d (UTF-16BE)
        if argCheckUnicode == u'撝':
            return True
        #end
        # No.141
        # 0xfacc (Windows-31J)
        # 0x64ce (UTF-16BE)
        if argCheckUnicode == u'擎':
            return True
        #end
        # No.142
        # 0xfacd (Windows-31J)
        # 0x654e (UTF-16BE)
        if argCheckUnicode == u'敎':
            return True
        #end
        # No.143
        # 0xface (Windows-31J)
        # 0x6600 (UTF-16BE)
        if argCheckUnicode == u'昀':
            return True
        #end
        # No.144
        # 0xfacf (Windows-31J)
        # 0x6615 (UTF-16BE)
        if argCheckUnicode == u'昕':
            return True
        #end
        # No.145
        # 0xfad0 (Windows-31J)
        # 0x663b (UTF-16BE)
        if argCheckUnicode == u'昻':
            return True
        #end
        # No.146
        # 0xfad1 (Windows-31J)
        # 0x6609 (UTF-16BE)
        if argCheckUnicode == u'昉':
            return True
        #end
        # No.147
        # 0xfad2 (Windows-31J)
        # 0x662e (UTF-16BE)
        if argCheckUnicode == u'昮':
            return True
        #end
        # No.148
        # 0xfad3 (Windows-31J)
        # 0x661e (UTF-16BE)
        if argCheckUnicode == u'昞':
            return True
        #end
        # No.149
        # 0xfad4 (Windows-31J)
        # 0x6624 (UTF-16BE)
        if argCheckUnicode == u'昤':
            return True
        #end
        # No.150
        # 0xfad5 (Windows-31J)
        # 0x6665 (UTF-16BE)
        if argCheckUnicode == u'晥':
            return True
        #end
        # No.151
        # 0xfad6 (Windows-31J)
        # 0x6657 (UTF-16BE)
        if argCheckUnicode == u'晗':
            return True
        #end
        # No.152
        # 0xfad7 (Windows-31J)
        # 0x6659 (UTF-16BE)
        if argCheckUnicode == u'晙':
            return True
        #end
        # No.153
        # 0xfad8 (Windows-31J)
        # 0xfa12 (UTF-16BE)
        if argCheckUnicode == u'晴':
            return True
        #end
        # No.154
        # 0xfad9 (Windows-31J)
        # 0x6673 (UTF-16BE)
        if argCheckUnicode == u'晳':
            return True
        #end
        # No.155
        # 0xfada (Windows-31J)
        # 0x6699 (UTF-16BE)
        if argCheckUnicode == u'暙':
            return True
        #end
        # No.156
        # 0xfadb (Windows-31J)
        # 0x66a0 (UTF-16BE)
        if argCheckUnicode == u'暠':
            return True
        #end
        # No.157
        # 0xfadc (Windows-31J)
        # 0x66b2 (UTF-16BE)
        if argCheckUnicode == u'暲':
            return True
        #end
        # No.158
        # 0xfadd (Windows-31J)
        # 0x66bf (UTF-16BE)
        if argCheckUnicode == u'暿':
            return True
        #end
        # No.159
        # 0xfade (Windows-31J)
        # 0x66fa (UTF-16BE)
        if argCheckUnicode == u'曺':
            return True
        #end
        # No.160
        # 0xfadf (Windows-31J)
        # 0x670e (UTF-16BE)
        if argCheckUnicode == u'朎':
            return True
        #end
        # No.161
        # 0xfae0 (Windows-31J)
        # 0xf929 (UTF-16BE)
        if argCheckUnicode == u'朗':
            return True
        #end
        # No.162
        # 0xfae1 (Windows-31J)
        # 0x6766 (UTF-16BE)
        if argCheckUnicode == u'杦':
            return True
        #end
        # No.163
        # 0xfae2 (Windows-31J)
        # 0x67bb (UTF-16BE)
        if argCheckUnicode == u'枻':
            return True
        #end
        # No.164
        # 0xfae3 (Windows-31J)
        # 0x6852 (UTF-16BE)
        if argCheckUnicode == u'桒':
            return True
        #end
        # No.165
        # 0xfae4 (Windows-31J)
        # 0x67c0 (UTF-16BE)
        if argCheckUnicode == u'柀':
            return True
        #end
        # No.166
        # 0xfae5 (Windows-31J)
        # 0x6801 (UTF-16BE)
        if argCheckUnicode == u'栁':
            return True
        #end
        # No.167
        # 0xfae6 (Windows-31J)
        # 0x6844 (UTF-16BE)
        if argCheckUnicode == u'桄':
            return True
        #end
        # No.168
        # 0xfae7 (Windows-31J)
        # 0x68cf (UTF-16BE)
        if argCheckUnicode == u'棏':
            return True
        #end
        # No.169
        # 0xfae8 (Windows-31J)
        # 0xfa13 (UTF-16BE)
        if argCheckUnicode == u'﨓':
            return True
        #end
        # No.170
        # 0xfae9 (Windows-31J)
        # 0x6968 (UTF-16BE)
        if argCheckUnicode == u'楨':
            return True
        #end
        # No.171
        # 0xfaea (Windows-31J)
        # 0xfa14 (UTF-16BE)
        if argCheckUnicode == u'﨔':
            return True
        #end
        # No.172
        # 0xfaeb (Windows-31J)
        # 0x6998 (UTF-16BE)
        if argCheckUnicode == u'榘':
            return True
        #end
        # No.173
        # 0xfaec (Windows-31J)
        # 0x69e2 (UTF-16BE)
        if argCheckUnicode == u'槢':
            return True
        #end
        # No.174
        # 0xfaed (Windows-31J)
        # 0x6a30 (UTF-16BE)
        if argCheckUnicode == u'樰':
            return True
        #end
        # No.175
        # 0xfaee (Windows-31J)
        # 0x6a6b (UTF-16BE)
        if argCheckUnicode == u'橫':
            return True
        #end
        # No.176
        # 0xfaef (Windows-31J)
        # 0x6a46 (UTF-16BE)
        if argCheckUnicode == u'橆':
            return True
        #end
        # No.177
        # 0xfaf0 (Windows-31J)
        # 0x6a73 (UTF-16BE)
        if argCheckUnicode == u'橳':
            return True
        #end
        # No.178
        # 0xfaf1 (Windows-31J)
        # 0x6a7e (UTF-16BE)
        if argCheckUnicode == u'橾':
            return True
        #end
        # No.179
        # 0xfaf2 (Windows-31J)
        # 0x6ae2 (UTF-16BE)
        if argCheckUnicode == u'櫢':
            return True
        #end
        # No.180
        # 0xfaf3 (Windows-31J)
        # 0x6ae4 (UTF-16BE)
        if argCheckUnicode == u'櫤':
            return True
        #end
        # No.181
        # 0xfaf4 (Windows-31J)
        # 0x6bd6 (UTF-16BE)
        if argCheckUnicode == u'毖':
            return True
        #end
        # No.182
        # 0xfaf5 (Windows-31J)
        # 0x6c3f (UTF-16BE)
        if argCheckUnicode == u'氿':
            return True
        #end
        # No.183
        # 0xfaf6 (Windows-31J)
        # 0x6c5c (UTF-16BE)
        if argCheckUnicode == u'汜':
            return True
        #end
        # No.184
        # 0xfaf7 (Windows-31J)
        # 0x6c86 (UTF-16BE)
        if argCheckUnicode == u'沆':
            return True
        #end
        # No.185
        # 0xfaf8 (Windows-31J)
        # 0x6c6f (UTF-16BE)
        if argCheckUnicode == u'汯':
            return True
        #end
        # No.186
        # 0xfaf9 (Windows-31J)
        # 0x6cda (UTF-16BE)
        if argCheckUnicode == u'泚':
            return True
        #end
        # No.187
        # 0xfafa (Windows-31J)
        # 0x6d04 (UTF-16BE)
        if argCheckUnicode == u'洄':
            return True
        #end
        # No.188
        # 0xfafb (Windows-31J)
        # 0x6d87 (UTF-16BE)
        if argCheckUnicode == u'涇':
            return True
        #end
        # No.189
        # 説明:fafc:
        # 0xfafc (Windows-31J)
        # 0x6d6f (UTF-16BE)
        if argCheckUnicode == u'浯':
            return True
        #end
        # No.191
        # 説明:fb40: fafdからfb3fまではスキップ。
        # 0xfb40 (Windows-31J)
        # 0x6d96 (UTF-16BE)
        if argCheckUnicode == u'涖':
            return True
        #end
        # No.192
        # 0xfb41 (Windows-31J)
        # 0x6dac (UTF-16BE)
        if argCheckUnicode == u'涬':
            return True
        #end
        # No.193
        # 0xfb42 (Windows-31J)
        # 0x6dcf (UTF-16BE)
        if argCheckUnicode == u'淏':
            return True
        #end
        # No.194
        # 0xfb43 (Windows-31J)
        # 0x6df8 (UTF-16BE)
        if argCheckUnicode == u'淸':
            return True
        #end
        # No.195
        # 0xfb44 (Windows-31J)
        # 0x6df2 (UTF-16BE)
        if argCheckUnicode == u'淲':
            return True
        #end
        # No.196
        # 0xfb45 (Windows-31J)
        # 0x6dfc (UTF-16BE)
        if argCheckUnicode == u'淼':
            return True
        #end
        # No.197
        # 0xfb46 (Windows-31J)
        # 0x6e39 (UTF-16BE)
        if argCheckUnicode == u'渹':
            return True
        #end
        # No.198
        # 0xfb47 (Windows-31J)
        # 0x6e5c (UTF-16BE)
        if argCheckUnicode == u'湜':
            return True
        #end
        # No.199
        # 0xfb48 (Windows-31J)
        # 0x6e27 (UTF-16BE)
        if argCheckUnicode == u'渧':
            return True
        #end
        # No.200
        # 0xfb49 (Windows-31J)
        # 0x6e3c (UTF-16BE)
        if argCheckUnicode == u'渼':
            return True
        #end
        # No.201
        # 0xfb4a (Windows-31J)
        # 0x6ebf (UTF-16BE)
        if argCheckUnicode == u'溿':
            return True
        #end
        # No.202
        # 0xfb4b (Windows-31J)
        # 0x6f88 (UTF-16BE)
        if argCheckUnicode == u'澈':
            return True
        #end
        # No.203
        # 0xfb4c (Windows-31J)
        # 0x6fb5 (UTF-16BE)
        if argCheckUnicode == u'澵':
            return True
        #end
        # No.204
        # 0xfb4d (Windows-31J)
        # 0x6ff5 (UTF-16BE)
        if argCheckUnicode == u'濵':
            return True
        #end
        # No.205
        # 0xfb4e (Windows-31J)
        # 0x7005 (UTF-16BE)
        if argCheckUnicode == u'瀅':
            return True
        #end
        # No.206
        # 0xfb4f (Windows-31J)
        # 0x7007 (UTF-16BE)
        if argCheckUnicode == u'瀇':
            return True
        #end
        # No.207
        # 0xfb50 (Windows-31J)
        # 0x7028 (UTF-16BE)
        if argCheckUnicode == u'瀨':
            return True
        #end
        # No.208
        # 0xfb51 (Windows-31J)
        # 0x7085 (UTF-16BE)
        if argCheckUnicode == u'炅':
            return True
        #end
        # No.209
        # 0xfb52 (Windows-31J)
        # 0x70ab (UTF-16BE)
        if argCheckUnicode == u'炫':
            return True
        #end
        # No.210
        # 0xfb53 (Windows-31J)
        # 0x710f (UTF-16BE)
        if argCheckUnicode == u'焏':
            return True
        #end
        # No.211
        # 0xfb54 (Windows-31J)
        # 0x7104 (UTF-16BE)
        if argCheckUnicode == u'焄':
            return True
        #end
        # No.212
        # 0xfb55 (Windows-31J)
        # 0x715c (UTF-16BE)
        if argCheckUnicode == u'煜':
            return True
        #end
        # No.213
        # 0xfb56 (Windows-31J)
        # 0x7146 (UTF-16BE)
        if argCheckUnicode == u'煆':
            return True
        #end
        # No.214
        # 0xfb57 (Windows-31J)
        # 0x7147 (UTF-16BE)
        if argCheckUnicode == u'煇':
            return True
        #end
        # No.215
        # 0xfb58 (Windows-31J)
        # 0xfa15 (UTF-16BE)
        if argCheckUnicode == u'凞':
            return True
        #end
        # No.216
        # 0xfb59 (Windows-31J)
        # 0x71c1 (UTF-16BE)
        if argCheckUnicode == u'燁':
            return True
        #end
        # No.217
        # 0xfb5a (Windows-31J)
        # 0x71fe (UTF-16BE)
        if argCheckUnicode == u'燾':
            return True
        #end
        # No.218
        # 0xfb5b (Windows-31J)
        # 0x72b1 (UTF-16BE)
        if argCheckUnicode == u'犱':
            return True
        #end
        # No.219
        # 0xfb5c (Windows-31J)
        # 0x72be (UTF-16BE)
        if argCheckUnicode == u'犾':
            return True
        #end
        # No.220
        # 0xfb5d (Windows-31J)
        # 0x7324 (UTF-16BE)
        if argCheckUnicode == u'猤':
            return True
        #end
        # No.221
        # 0xfb5e (Windows-31J)
        # 0xfa16 (UTF-16BE)
        if argCheckUnicode == u'猪':
            return True
        #end
        # No.222
        # 0xfb5f (Windows-31J)
        # 0x7377 (UTF-16BE)
        if argCheckUnicode == u'獷':
            return True
        #end
        # No.223
        # 0xfb60 (Windows-31J)
        # 0x73bd (UTF-16BE)
        if argCheckUnicode == u'玽':
            return True
        #end
        # No.224
        # 0xfb61 (Windows-31J)
        # 0x73c9 (UTF-16BE)
        if argCheckUnicode == u'珉':
            return True
        #end
        # No.225
        # 0xfb62 (Windows-31J)
        # 0x73d6 (UTF-16BE)
        if argCheckUnicode == u'珖':
            return True
        #end
        # No.226
        # 0xfb63 (Windows-31J)
        # 0x73e3 (UTF-16BE)
        if argCheckUnicode == u'珣':
            return True
        #end
        # No.227
        # 0xfb64 (Windows-31J)
        # 0x73d2 (UTF-16BE)
        if argCheckUnicode == u'珒':
            return True
        #end
        # No.228
        # 0xfb65 (Windows-31J)
        # 0x7407 (UTF-16BE)
        if argCheckUnicode == u'琇':
            return True
        #end
        # No.229
        # 0xfb66 (Windows-31J)
        # 0x73f5 (UTF-16BE)
        if argCheckUnicode == u'珵':
            return True
        #end
        # No.230
        # 0xfb67 (Windows-31J)
        # 0x7426 (UTF-16BE)
        if argCheckUnicode == u'琦':
            return True
        #end
        # No.231
        # 0xfb68 (Windows-31J)
        # 0x742a (UTF-16BE)
        if argCheckUnicode == u'琪':
            return True
        #end
        # No.232
        # 0xfb69 (Windows-31J)
        # 0x7429 (UTF-16BE)
        if argCheckUnicode == u'琩':
            return True
        #end
        # No.233
        # 0xfb6a (Windows-31J)
        # 0x742e (UTF-16BE)
        if argCheckUnicode == u'琮':
            return True
        #end
        # No.234
        # 0xfb6b (Windows-31J)
        # 0x7462 (UTF-16BE)
        if argCheckUnicode == u'瑢':
            return True
        #end
        # No.235
        # 0xfb6c (Windows-31J)
        # 0x7489 (UTF-16BE)
        if argCheckUnicode == u'璉':
            return True
        #end
        # No.236
        # 0xfb6d (Windows-31J)
        # 0x749f (UTF-16BE)
        if argCheckUnicode == u'璟':
            return True
        #end
        # No.237
        # 0xfb6e (Windows-31J)
        # 0x7501 (UTF-16BE)
        if argCheckUnicode == u'甁':
            return True
        #end
        # No.238
        # 0xfb6f (Windows-31J)
        # 0x756f (UTF-16BE)
        if argCheckUnicode == u'畯':
            return True
        #end
        # No.239
        # 0xfb70 (Windows-31J)
        # 0x7682 (UTF-16BE)
        if argCheckUnicode == u'皂':
            return True
        #end
        # No.240
        # 0xfb71 (Windows-31J)
        # 0x769c (UTF-16BE)
        if argCheckUnicode == u'皜':
            return True
        #end
        # No.241
        # 0xfb72 (Windows-31J)
        # 0x769e (UTF-16BE)
        if argCheckUnicode == u'皞':
            return True
        #end
        # No.242
        # 0xfb73 (Windows-31J)
        # 0x769b (UTF-16BE)
        if argCheckUnicode == u'皛':
            return True
        #end
        # No.243
        # 0xfb74 (Windows-31J)
        # 0x76a6 (UTF-16BE)
        if argCheckUnicode == u'皦':
            return True
        #end
        # No.244
        # 0xfb75 (Windows-31J)
        # 0xfa17 (UTF-16BE)
        if argCheckUnicode == u'益':
            return True
        #end
        # No.245
        # 0xfb76 (Windows-31J)
        # 0x7746 (UTF-16BE)
        if argCheckUnicode == u'睆':
            return True
        #end
        # No.246
        # 0xfb77 (Windows-31J)
        # 0x52af (UTF-16BE)
        if argCheckUnicode == u'劯':
            return True
        #end
        # No.247
        # 0xfb78 (Windows-31J)
        # 0x7821 (UTF-16BE)
        if argCheckUnicode == u'砡':
            return True
        #end
        # No.248
        # 0xfb79 (Windows-31J)
        # 0x784e (UTF-16BE)
        if argCheckUnicode == u'硎':
            return True
        #end
        # No.249
        # 0xfb7a (Windows-31J)
        # 0x7864 (UTF-16BE)
        if argCheckUnicode == u'硤':
            return True
        #end
        # No.250
        # 0xfb7b (Windows-31J)
        # 0x787a (UTF-16BE)
        if argCheckUnicode == u'硺':
            return True
        #end
        # No.251
        # 0xfb7c (Windows-31J)
        # 0x7930 (UTF-16BE)
        if argCheckUnicode == u'礰':
            return True
        #end
        # No.252
        # 0xfb7d (Windows-31J)
        # 0xfa18 (UTF-16BE)
        if argCheckUnicode == u'礼':
            return True
        #end
        # No.253
        # 説明:fb7e:
        # 0xfb7e (Windows-31J)
        # 0xfa19 (UTF-16BE)
        if argCheckUnicode == u'神':
            return True
        #end
        # No.255
        # 説明:fb80: fb7fはスキップ。
        # 0xfb80 (Windows-31J)
        # 0xfa1a (UTF-16BE)
        if argCheckUnicode == u'祥':
            return True
        #end
        # No.256
        # 0xfb81 (Windows-31J)
        # 0x7994 (UTF-16BE)
        if argCheckUnicode == u'禔':
            return True
        #end
        # No.257
        # 0xfb82 (Windows-31J)
        # 0xfa1b (UTF-16BE)
        if argCheckUnicode == u'福':
            return True
        #end
        # No.258
        # 0xfb83 (Windows-31J)
        # 0x799b (UTF-16BE)
        if argCheckUnicode == u'禛':
            return True
        #end
        # No.259
        # 0xfb84 (Windows-31J)
        # 0x7ad1 (UTF-16BE)
        if argCheckUnicode == u'竑':
            return True
        #end
        # No.260
        # 0xfb85 (Windows-31J)
        # 0x7ae7 (UTF-16BE)
        if argCheckUnicode == u'竧':
            return True
        #end
        # No.261
        # 0xfb86 (Windows-31J)
        # 0xfa1c (UTF-16BE)
        if argCheckUnicode == u'靖':
            return True
        #end
        # No.262
        # 0xfb87 (Windows-31J)
        # 0x7aeb (UTF-16BE)
        if argCheckUnicode == u'竫':
            return True
        #end
        # No.263
        # 0xfb88 (Windows-31J)
        # 0x7b9e (UTF-16BE)
        if argCheckUnicode == u'箞':
            return True
        #end
        # No.264
        # 0xfb89 (Windows-31J)
        # 0xfa1d (UTF-16BE)
        if argCheckUnicode == u'精':
            return True
        #end
        # No.265
        # 0xfb8a (Windows-31J)
        # 0x7d48 (UTF-16BE)
        if argCheckUnicode == u'絈':
            return True
        #end
        # No.266
        # 0xfb8b (Windows-31J)
        # 0x7d5c (UTF-16BE)
        if argCheckUnicode == u'絜':
            return True
        #end
        # No.267
        # 0xfb8c (Windows-31J)
        # 0x7db7 (UTF-16BE)
        if argCheckUnicode == u'綷':
            return True
        #end
        # No.268
        # 0xfb8d (Windows-31J)
        # 0x7da0 (UTF-16BE)
        if argCheckUnicode == u'綠':
            return True
        #end
        # No.269
        # 0xfb8e (Windows-31J)
        # 0x7dd6 (UTF-16BE)
        if argCheckUnicode == u'緖':
            return True
        #end
        # No.270
        # 0xfb8f (Windows-31J)
        # 0x7e52 (UTF-16BE)
        if argCheckUnicode == u'繒':
            return True
        #end
        # No.271
        # 0xfb90 (Windows-31J)
        # 0x7f47 (UTF-16BE)
        if argCheckUnicode == u'罇':
            return True
        #end
        # No.272
        # 0xfb91 (Windows-31J)
        # 0x7fa1 (UTF-16BE)
        if argCheckUnicode == u'羡':
            return True
        #end
        # No.273
        # 0xfb92 (Windows-31J)
        # 0xfa1e (UTF-16BE)
        if argCheckUnicode == u'羽':
            return True
        #end
        # No.274
        # 0xfb93 (Windows-31J)
        # 0x8301 (UTF-16BE)
        if argCheckUnicode == u'茁':
            return True
        #end
        # No.275
        # 0xfb94 (Windows-31J)
        # 0x8362 (UTF-16BE)
        if argCheckUnicode == u'荢':
            return True
        #end
        # No.276
        # 0xfb95 (Windows-31J)
        # 0x837f (UTF-16BE)
        if argCheckUnicode == u'荿':
            return True
        #end
        # No.277
        # 0xfb96 (Windows-31J)
        # 0x83c7 (UTF-16BE)
        if argCheckUnicode == u'菇':
            return True
        #end
        # No.278
        # 0xfb97 (Windows-31J)
        # 0x83f6 (UTF-16BE)
        if argCheckUnicode == u'菶':
            return True
        #end
        # No.279
        # 0xfb98 (Windows-31J)
        # 0x8448 (UTF-16BE)
        if argCheckUnicode == u'葈':
            return True
        #end
        # No.280
        # 0xfb99 (Windows-31J)
        # 0x84b4 (UTF-16BE)
        if argCheckUnicode == u'蒴':
            return True
        #end
        # No.281
        # 0xfb9a (Windows-31J)
        # 0x8553 (UTF-16BE)
        if argCheckUnicode == u'蕓':
            return True
        #end
        # No.282
        # 0xfb9b (Windows-31J)
        # 0x8559 (UTF-16BE)
        if argCheckUnicode == u'蕙':
            return True
        #end
        # No.283
        # 0xfb9c (Windows-31J)
        # 0x856b (UTF-16BE)
        if argCheckUnicode == u'蕫':
            return True
        #end
        # No.284
        # 0xfb9d (Windows-31J)
        # 0xfa1f (UTF-16BE)
        if argCheckUnicode == u'﨟':
            return True
        #end
        # No.285
        # 0xfb9e (Windows-31J)
        # 0x85b0 (UTF-16BE)
        if argCheckUnicode == u'薰':
            return True
        #end
        # No.286
        # 0xfb9f (Windows-31J)
        # 0xfa20 (UTF-16BE)
        if argCheckUnicode == u'蘒':
            return True
        #end
        # No.287
        # 0xfba0 (Windows-31J)
        # 0xfa21 (UTF-16BE)
        if argCheckUnicode == u'﨡':
            return True
        #end
        # No.288
        # 0xfba1 (Windows-31J)
        # 0x8807 (UTF-16BE)
        if argCheckUnicode == u'蠇':
            return True
        #end
        # No.289
        # 0xfba2 (Windows-31J)
        # 0x88f5 (UTF-16BE)
        if argCheckUnicode == u'裵':
            return True
        #end
        # No.290
        # 0xfba3 (Windows-31J)
        # 0x8a12 (UTF-16BE)
        if argCheckUnicode == u'訒':
            return True
        #end
        # No.291
        # 0xfba4 (Windows-31J)
        # 0x8a37 (UTF-16BE)
        if argCheckUnicode == u'訷':
            return True
        #end
        # No.292
        # 0xfba5 (Windows-31J)
        # 0x8a79 (UTF-16BE)
        if argCheckUnicode == u'詹':
            return True
        #end
        # No.293
        # 0xfba6 (Windows-31J)
        # 0x8aa7 (UTF-16BE)
        if argCheckUnicode == u'誧':
            return True
        #end
        # No.294
        # 0xfba7 (Windows-31J)
        # 0x8abe (UTF-16BE)
        if argCheckUnicode == u'誾':
            return True
        #end
        # No.295
        # 0xfba8 (Windows-31J)
        # 0x8adf (UTF-16BE)
        if argCheckUnicode == u'諟':
            return True
        #end
        # No.296
        # 0xfba9 (Windows-31J)
        # 0xfa22 (UTF-16BE)
        if argCheckUnicode == u'諸':
            return True
        #end
        # No.297
        # 0xfbaa (Windows-31J)
        # 0x8af6 (UTF-16BE)
        if argCheckUnicode == u'諶':
            return True
        #end
        # No.298
        # 0xfbab (Windows-31J)
        # 0x8b53 (UTF-16BE)
        if argCheckUnicode == u'譓':
            return True
        #end
        # No.299
        # 0xfbac (Windows-31J)
        # 0x8b7f (UTF-16BE)
        if argCheckUnicode == u'譿':
            return True
        #end
        # No.300
        # 0xfbad (Windows-31J)
        # 0x8cf0 (UTF-16BE)
        if argCheckUnicode == u'賰':
            return True
        #end
        # No.301
        # 0xfbae (Windows-31J)
        # 0x8cf4 (UTF-16BE)
        if argCheckUnicode == u'賴':
            return True
        #end
        # No.302
        # 0xfbaf (Windows-31J)
        # 0x8d12 (UTF-16BE)
        if argCheckUnicode == u'贒':
            return True
        #end
        # No.303
        # 0xfbb0 (Windows-31J)
        # 0x8d76 (UTF-16BE)
        if argCheckUnicode == u'赶':
            return True
        #end
        # No.304
        # 0xfbb1 (Windows-31J)
        # 0xfa23 (UTF-16BE)
        if argCheckUnicode == u'﨣':
            return True
        #end
        # No.305
        # 0xfbb2 (Windows-31J)
        # 0x8ecf (UTF-16BE)
        if argCheckUnicode == u'軏':
            return True
        #end
        # No.306
        # 0xfbb3 (Windows-31J)
        # 0xfa24 (UTF-16BE)
        if argCheckUnicode == u'﨤':
            return True
        #end
        # No.307
        # 0xfbb4 (Windows-31J)
        # 0xfa25 (UTF-16BE)
        if argCheckUnicode == u'逸':
            return True
        #end
        # No.308
        # 0xfbb5 (Windows-31J)
        # 0x9067 (UTF-16BE)
        if argCheckUnicode == u'遧':
            return True
        #end
        # No.309
        # 0xfbb6 (Windows-31J)
        # 0x90de (UTF-16BE)
        if argCheckUnicode == u'郞':
            return True
        #end
        # No.310
        # 0xfbb7 (Windows-31J)
        # 0xfa26 (UTF-16BE)
        if argCheckUnicode == u'都':
            return True
        #end
        # No.311
        # 0xfbb8 (Windows-31J)
        # 0x9115 (UTF-16BE)
        if argCheckUnicode == u'鄕':
            return True
        #end
        # No.312
        # 0xfbb9 (Windows-31J)
        # 0x9127 (UTF-16BE)
        if argCheckUnicode == u'鄧':
            return True
        #end
        # No.313
        # 0xfbba (Windows-31J)
        # 0x91da (UTF-16BE)
        if argCheckUnicode == u'釚':
            return True
        #end
        # No.314
        # 0xfbbb (Windows-31J)
        # 0x91d7 (UTF-16BE)
        if argCheckUnicode == u'釗':
            return True
        #end
        # No.315
        # 0xfbbc (Windows-31J)
        # 0x91de (UTF-16BE)
        if argCheckUnicode == u'釞':
            return True
        #end
        # No.316
        # 0xfbbd (Windows-31J)
        # 0x91ed (UTF-16BE)
        if argCheckUnicode == u'釭':
            return True
        #end
        # No.317
        # 0xfbbe (Windows-31J)
        # 0x91ee (UTF-16BE)
        if argCheckUnicode == u'釮':
            return True
        #end
        # No.318
        # 0xfbbf (Windows-31J)
        # 0x91e4 (UTF-16BE)
        if argCheckUnicode == u'釤':
            return True
        #end
        # No.319
        # 0xfbc0 (Windows-31J)
        # 0x91e5 (UTF-16BE)
        if argCheckUnicode == u'釥':
            return True
        #end
        # No.320
        # 0xfbc1 (Windows-31J)
        # 0x9206 (UTF-16BE)
        if argCheckUnicode == u'鈆':
            return True
        #end
        # No.321
        # 0xfbc2 (Windows-31J)
        # 0x9210 (UTF-16BE)
        if argCheckUnicode == u'鈐':
            return True
        #end
        # No.322
        # 0xfbc3 (Windows-31J)
        # 0x920a (UTF-16BE)
        if argCheckUnicode == u'鈊':
            return True
        #end
        # No.323
        # 0xfbc4 (Windows-31J)
        # 0x923a (UTF-16BE)
        if argCheckUnicode == u'鈺':
            return True
        #end
        # No.324
        # 0xfbc5 (Windows-31J)
        # 0x9240 (UTF-16BE)
        if argCheckUnicode == u'鉀':
            return True
        #end
        # No.325
        # 0xfbc6 (Windows-31J)
        # 0x923c (UTF-16BE)
        if argCheckUnicode == u'鈼':
            return True
        #end
        # No.326
        # 0xfbc7 (Windows-31J)
        # 0x924e (UTF-16BE)
        if argCheckUnicode == u'鉎':
            return True
        #end
        # No.327
        # 0xfbc8 (Windows-31J)
        # 0x9259 (UTF-16BE)
        if argCheckUnicode == u'鉙':
            return True
        #end
        # No.328
        # 0xfbc9 (Windows-31J)
        # 0x9251 (UTF-16BE)
        if argCheckUnicode == u'鉑':
            return True
        #end
        # No.329
        # 0xfbca (Windows-31J)
        # 0x9239 (UTF-16BE)
        if argCheckUnicode == u'鈹':
            return True
        #end
        # No.330
        # 0xfbcb (Windows-31J)
        # 0x9267 (UTF-16BE)
        if argCheckUnicode == u'鉧':
            return True
        #end
        # No.331
        # 0xfbcc (Windows-31J)
        # 0x92a7 (UTF-16BE)
        if argCheckUnicode == u'銧':
            return True
        #end
        # No.332
        # 0xfbcd (Windows-31J)
        # 0x9277 (UTF-16BE)
        if argCheckUnicode == u'鉷':
            return True
        #end
        # No.333
        # 0xfbce (Windows-31J)
        # 0x9278 (UTF-16BE)
        if argCheckUnicode == u'鉸':
            return True
        #end
        # No.334
        # 0xfbcf (Windows-31J)
        # 0x92e7 (UTF-16BE)
        if argCheckUnicode == u'鋧':
            return True
        #end
        # No.335
        # 0xfbd0 (Windows-31J)
        # 0x92d7 (UTF-16BE)
        if argCheckUnicode == u'鋗':
            return True
        #end
        # No.336
        # 0xfbd1 (Windows-31J)
        # 0x92d9 (UTF-16BE)
        if argCheckUnicode == u'鋙':
            return True
        #end
        # No.337
        # 0xfbd2 (Windows-31J)
        # 0x92d0 (UTF-16BE)
        if argCheckUnicode == u'鋐':
            return True
        #end
        # No.338
        # 0xfbd3 (Windows-31J)
        # 0xfa27 (UTF-16BE)
        if argCheckUnicode == u'﨧':
            return True
        #end
        # No.339
        # 0xfbd4 (Windows-31J)
        # 0x92d5 (UTF-16BE)
        if argCheckUnicode == u'鋕':
            return True
        #end
        # No.340
        # 0xfbd5 (Windows-31J)
        # 0x92e0 (UTF-16BE)
        if argCheckUnicode == u'鋠':
            return True
        #end
        # No.341
        # 0xfbd6 (Windows-31J)
        # 0x92d3 (UTF-16BE)
        if argCheckUnicode == u'鋓':
            return True
        #end
        # No.342
        # 0xfbd7 (Windows-31J)
        # 0x9325 (UTF-16BE)
        if argCheckUnicode == u'錥':
            return True
        #end
        # No.343
        # 0xfbd8 (Windows-31J)
        # 0x9321 (UTF-16BE)
        if argCheckUnicode == u'錡':
            return True
        #end
        # No.344
        # 0xfbd9 (Windows-31J)
        # 0x92fb (UTF-16BE)
        if argCheckUnicode == u'鋻':
            return True
        #end
        # No.345
        # 0xfbda (Windows-31J)
        # 0xfa28 (UTF-16BE)
        if argCheckUnicode == u'﨨':
            return True
        #end
        # No.346
        # 0xfbdb (Windows-31J)
        # 0x931e (UTF-16BE)
        if argCheckUnicode == u'錞':
            return True
        #end
        # No.347
        # 0xfbdc (Windows-31J)
        # 0x92ff (UTF-16BE)
        if argCheckUnicode == u'鋿':
            return True
        #end
        # No.348
        # 0xfbdd (Windows-31J)
        # 0x931d (UTF-16BE)
        if argCheckUnicode == u'錝':
            return True
        #end
        # No.349
        # 0xfbde (Windows-31J)
        # 0x9302 (UTF-16BE)
        if argCheckUnicode == u'錂':
            return True
        #end
        # No.350
        # 0xfbdf (Windows-31J)
        # 0x9370 (UTF-16BE)
        if argCheckUnicode == u'鍰':
            return True
        #end
        # No.351
        # 0xfbe0 (Windows-31J)
        # 0x9357 (UTF-16BE)
        if argCheckUnicode == u'鍗':
            return True
        #end
        # No.352
        # 0xfbe1 (Windows-31J)
        # 0x93a4 (UTF-16BE)
        if argCheckUnicode == u'鎤':
            return True
        #end
        # No.353
        # 0xfbe2 (Windows-31J)
        # 0x93c6 (UTF-16BE)
        if argCheckUnicode == u'鏆':
            return True
        #end
        # No.354
        # 0xfbe3 (Windows-31J)
        # 0x93de (UTF-16BE)
        if argCheckUnicode == u'鏞':
            return True
        #end
        # No.355
        # 0xfbe4 (Windows-31J)
        # 0x93f8 (UTF-16BE)
        if argCheckUnicode == u'鏸':
            return True
        #end
        # No.356
        # 0xfbe5 (Windows-31J)
        # 0x9431 (UTF-16BE)
        if argCheckUnicode == u'鐱':
            return True
        #end
        # No.357
        # 0xfbe6 (Windows-31J)
        # 0x9445 (UTF-16BE)
        if argCheckUnicode == u'鑅':
            return True
        #end
        # No.358
        # 0xfbe7 (Windows-31J)
        # 0x9448 (UTF-16BE)
        if argCheckUnicode == u'鑈':
            return True
        #end
        # No.359
        # 0xfbe8 (Windows-31J)
        # 0x9592 (UTF-16BE)
        if argCheckUnicode == u'閒':
            return True
        #end
        # No.360
        # 0xfbe9 (Windows-31J)
        # 0xf9dc (UTF-16BE)
        if argCheckUnicode == u'隆':
            return True
        #end
        # No.361
        # 0xfbea (Windows-31J)
        # 0xfa29 (UTF-16BE)
        if argCheckUnicode == u'﨩':
            return True
        #end
        # No.362
        # 0xfbeb (Windows-31J)
        # 0x969d (UTF-16BE)
        if argCheckUnicode == u'隝':
            return True
        #end
        # No.363
        # 0xfbec (Windows-31J)
        # 0x96af (UTF-16BE)
        if argCheckUnicode == u'隯':
            return True
        #end
        # No.364
        # 0xfbed (Windows-31J)
        # 0x9733 (UTF-16BE)
        if argCheckUnicode == u'霳':
            return True
        #end
        # No.365
        # 0xfbee (Windows-31J)
        # 0x973b (UTF-16BE)
        if argCheckUnicode == u'霻':
            return True
        #end
        # No.366
        # 0xfbef (Windows-31J)
        # 0x9743 (UTF-16BE)
        if argCheckUnicode == u'靃':
            return True
        #end
        # No.367
        # 0xfbf0 (Windows-31J)
        # 0x974d (UTF-16BE)
        if argCheckUnicode == u'靍':
            return True
        #end
        # No.368
        # 0xfbf1 (Windows-31J)
        # 0x974f (UTF-16BE)
        if argCheckUnicode == u'靏':
            return True
        #end
        # No.369
        # 0xfbf2 (Windows-31J)
        # 0x9751 (UTF-16BE)
        if argCheckUnicode == u'靑':
            return True
        #end
        # No.370
        # 0xfbf3 (Windows-31J)
        # 0x9755 (UTF-16BE)
        if argCheckUnicode == u'靕':
            return True
        #end
        # No.371
        # 0xfbf4 (Windows-31J)
        # 0x9857 (UTF-16BE)
        if argCheckUnicode == u'顗':
            return True
        #end
        # No.372
        # 0xfbf5 (Windows-31J)
        # 0x9865 (UTF-16BE)
        if argCheckUnicode == u'顥':
            return True
        #end
        # No.373
        # 0xfbf6 (Windows-31J)
        # 0xfa2a (UTF-16BE)
        if argCheckUnicode == u'飯':
            return True
        #end
        # No.374
        # 0xfbf7 (Windows-31J)
        # 0xfa2b (UTF-16BE)
        if argCheckUnicode == u'飼':
            return True
        #end
        # No.375
        # 0xfbf8 (Windows-31J)
        # 0x9927 (UTF-16BE)
        if argCheckUnicode == u'餧':
            return True
        #end
        # No.376
        # 0xfbf9 (Windows-31J)
        # 0xfa2c (UTF-16BE)
        if argCheckUnicode == u'館':
            return True
        #end
        # No.377
        # 0xfbfa (Windows-31J)
        # 0x999e (UTF-16BE)
        if argCheckUnicode == u'馞':
            return True
        #end
        # No.378
        # 0xfbfb (Windows-31J)
        # 0x9a4e (UTF-16BE)
        if argCheckUnicode == u'驎':
            return True
        #end
        # No.379
        # 説明:fbfc: 高に似た文字。
        # 0xfbfc (Windows-31J)
        # 0x9ad9 (UTF-16BE)
        if argCheckUnicode == u'髙':
            return True
        #end
        # No.381
        # 説明:fc40: fc3fまでスキップ。
        # 0xfc40 (Windows-31J)
        # 0x9adc (UTF-16BE)
        if argCheckUnicode == u'髜':
            return True
        #end
        # No.382
        # 説明:fc41:
        # 0xfc41 (Windows-31J)
        # 0x9b75 (UTF-16BE)
        if argCheckUnicode == u'魵':
            return True
        #end
        # No.383
        # 説明:fc42:
        # 0xfc42 (Windows-31J)
        # 0x9b72 (UTF-16BE)
        if argCheckUnicode == u'魲':
            return True
        #end
        # No.384
        # 0xfc43 (Windows-31J)
        # 0x9b8f (UTF-16BE)
        if argCheckUnicode == u'鮏':
            return True
        #end
        # No.385
        # 0xfc44 (Windows-31J)
        # 0x9bb1 (UTF-16BE)
        if argCheckUnicode == u'鮱':
            return True
        #end
        # No.386
        # 0xfc45 (Windows-31J)
        # 0x9bbb (UTF-16BE)
        if argCheckUnicode == u'鮻':
            return True
        #end
        # No.387
        # 0xfc46 (Windows-31J)
        # 0x9c00 (UTF-16BE)
        if argCheckUnicode == u'鰀':
            return True
        #end
        # No.388
        # 0xfc47 (Windows-31J)
        # 0x9d70 (UTF-16BE)
        if argCheckUnicode == u'鵰':
            return True
        #end
        # No.389
        # 0xfc48 (Windows-31J)
        # 0x9d6b (UTF-16BE)
        if argCheckUnicode == u'鵫':
            return True
        #end
        # No.390
        # 0xfc49 (Windows-31J)
        # 0xfa2d (UTF-16BE)
        if argCheckUnicode == u'鶴':
            return True
        #end
        # No.391
        # 説明:fc4a:
        # 0xfc4a (Windows-31J)
        # 0x9e19 (UTF-16BE)
        if argCheckUnicode == u'鸙':
            return True
        #end
        # No.392
        # 説明:fc4b: 黒に似た文字。
        # 0xfc4b (Windows-31J)
        # 0x9ed1 (UTF-16BE)
        if argCheckUnicode == u'黑':
            return True
        #end
        return False
    #end

    def matchAll(self, argCheck):
        """与えられた文字列が、全て文字グループに含まれる文字であるかどうかを判定します。

        self -- このメソッドを含むクラス自身。
        argCheck -- チェックを行いたい文字列。
        return -- 全ての文字が文字グループに含まれていればture。グループに含まれない文字が含まれていればfalse。
        """
        if argCheck is None:
            raise ValueError, "メソッド[matchAll]のパラメータ[argCheck]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。"
        #end

        argCheckUnicode = unicode(argCheck, self.encoding)
        for arg in argCheckUnicode:
            if self.match(arg.encode(self.encoding)) == False:
                return False
            #end
        #end
        return True
    #end

    def matchAny(self, argCheck):
        """与えられた文字列が、文字グループに含まれる文字をひとつでも含んでいるかどうかを判定します。

        self -- このメソッドを含むクラス自身。
        argCheck -- チェックを行いたい文字列。
        return -- 文字グループに含まれている文字をひとつでも含んでいればture。グループに含まれる文字をひとつも含まない場合はfalse。
        """
        if argCheck is None:
            raise ValueError, "メソッド[matchAny]のパラメータ[argCheck]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。"
        #end

        argCheckUnicode = unicode(argCheck, self.encoding)
        for arg in argCheckUnicode:
            if self.match(arg.encode(self.encoding)):
                return True
            #end
        #end
        return False
    #end
#end

# -*- coding: cp932 -*-
"""このソースコードは blanco Frameworkによって自動生成されています。
"""
class SampleZenHiraganaCharacterGroup:
    """全角ひらがなのサンプル。blancoCharacterGroupの実装には影響しません。
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
        # 説明:829f: ひらがな。ぁ。
        # 0x829f (Windows-31J)
        # 0x3041 (UTF-16BE)
        if argCheckUnicode == u'ぁ':
            return True
        #end
        # No.2
        # 説明:82a0: ひらがな。あ。
        # 0x82a0 (Windows-31J)
        # 0x3042 (UTF-16BE)
        if argCheckUnicode == u'あ':
            return True
        #end
        # No.3
        # 0x82a1 (Windows-31J)
        # 0x3043 (UTF-16BE)
        if argCheckUnicode == u'ぃ':
            return True
        #end
        # No.4
        # 0x82a2 (Windows-31J)
        # 0x3044 (UTF-16BE)
        if argCheckUnicode == u'い':
            return True
        #end
        # No.5
        # 0x82a3 (Windows-31J)
        # 0x3045 (UTF-16BE)
        if argCheckUnicode == u'ぅ':
            return True
        #end
        # No.6
        # 0x82a4 (Windows-31J)
        # 0x3046 (UTF-16BE)
        if argCheckUnicode == u'う':
            return True
        #end
        # No.7
        # 0x82a5 (Windows-31J)
        # 0x3047 (UTF-16BE)
        if argCheckUnicode == u'ぇ':
            return True
        #end
        # No.8
        # 0x82a6 (Windows-31J)
        # 0x3048 (UTF-16BE)
        if argCheckUnicode == u'え':
            return True
        #end
        # No.9
        # 0x82a7 (Windows-31J)
        # 0x3049 (UTF-16BE)
        if argCheckUnicode == u'ぉ':
            return True
        #end
        # No.10
        # 0x82a8 (Windows-31J)
        # 0x304a (UTF-16BE)
        if argCheckUnicode == u'お':
            return True
        #end
        # No.11
        # 0x82a9 (Windows-31J)
        # 0x304b (UTF-16BE)
        if argCheckUnicode == u'か':
            return True
        #end
        # No.12
        # 0x82aa (Windows-31J)
        # 0x304c (UTF-16BE)
        if argCheckUnicode == u'が':
            return True
        #end
        # No.13
        # 0x82ab (Windows-31J)
        # 0x304d (UTF-16BE)
        if argCheckUnicode == u'き':
            return True
        #end
        # No.14
        # 0x82ac (Windows-31J)
        # 0x304e (UTF-16BE)
        if argCheckUnicode == u'ぎ':
            return True
        #end
        # No.15
        # 0x82ad (Windows-31J)
        # 0x304f (UTF-16BE)
        if argCheckUnicode == u'く':
            return True
        #end
        # No.16
        # 0x82ae (Windows-31J)
        # 0x3050 (UTF-16BE)
        if argCheckUnicode == u'ぐ':
            return True
        #end
        # No.17
        # 0x82af (Windows-31J)
        # 0x3051 (UTF-16BE)
        if argCheckUnicode == u'け':
            return True
        #end
        # No.18
        # 0x82b0 (Windows-31J)
        # 0x3052 (UTF-16BE)
        if argCheckUnicode == u'げ':
            return True
        #end
        # No.19
        # 0x82b1 (Windows-31J)
        # 0x3053 (UTF-16BE)
        if argCheckUnicode == u'こ':
            return True
        #end
        # No.20
        # 0x82b2 (Windows-31J)
        # 0x3054 (UTF-16BE)
        if argCheckUnicode == u'ご':
            return True
        #end
        # No.21
        # 0x82b3 (Windows-31J)
        # 0x3055 (UTF-16BE)
        if argCheckUnicode == u'さ':
            return True
        #end
        # No.22
        # 0x82b4 (Windows-31J)
        # 0x3056 (UTF-16BE)
        if argCheckUnicode == u'ざ':
            return True
        #end
        # No.23
        # 0x82b5 (Windows-31J)
        # 0x3057 (UTF-16BE)
        if argCheckUnicode == u'し':
            return True
        #end
        # No.24
        # 0x82b6 (Windows-31J)
        # 0x3058 (UTF-16BE)
        if argCheckUnicode == u'じ':
            return True
        #end
        # No.25
        # 0x82b7 (Windows-31J)
        # 0x3059 (UTF-16BE)
        if argCheckUnicode == u'す':
            return True
        #end
        # No.26
        # 0x82b8 (Windows-31J)
        # 0x305a (UTF-16BE)
        if argCheckUnicode == u'ず':
            return True
        #end
        # No.27
        # 0x82b9 (Windows-31J)
        # 0x305b (UTF-16BE)
        if argCheckUnicode == u'せ':
            return True
        #end
        # No.28
        # 0x82ba (Windows-31J)
        # 0x305c (UTF-16BE)
        if argCheckUnicode == u'ぜ':
            return True
        #end
        # No.29
        # 0x82bb (Windows-31J)
        # 0x305d (UTF-16BE)
        if argCheckUnicode == u'そ':
            return True
        #end
        # No.30
        # 0x82bc (Windows-31J)
        # 0x305e (UTF-16BE)
        if argCheckUnicode == u'ぞ':
            return True
        #end
        # No.31
        # 0x82bd (Windows-31J)
        # 0x305f (UTF-16BE)
        if argCheckUnicode == u'た':
            return True
        #end
        # No.32
        # 0x82be (Windows-31J)
        # 0x3060 (UTF-16BE)
        if argCheckUnicode == u'だ':
            return True
        #end
        # No.33
        # 0x82bf (Windows-31J)
        # 0x3061 (UTF-16BE)
        if argCheckUnicode == u'ち':
            return True
        #end
        # No.34
        # 0x82c0 (Windows-31J)
        # 0x3062 (UTF-16BE)
        if argCheckUnicode == u'ぢ':
            return True
        #end
        # No.35
        # 0x82c1 (Windows-31J)
        # 0x3063 (UTF-16BE)
        if argCheckUnicode == u'っ':
            return True
        #end
        # No.36
        # 0x82c2 (Windows-31J)
        # 0x3064 (UTF-16BE)
        if argCheckUnicode == u'つ':
            return True
        #end
        # No.37
        # 0x82c3 (Windows-31J)
        # 0x3065 (UTF-16BE)
        if argCheckUnicode == u'づ':
            return True
        #end
        # No.38
        # 0x82c4 (Windows-31J)
        # 0x3066 (UTF-16BE)
        if argCheckUnicode == u'て':
            return True
        #end
        # No.39
        # 0x82c5 (Windows-31J)
        # 0x3067 (UTF-16BE)
        if argCheckUnicode == u'で':
            return True
        #end
        # No.40
        # 0x82c6 (Windows-31J)
        # 0x3068 (UTF-16BE)
        if argCheckUnicode == u'と':
            return True
        #end
        # No.41
        # 0x82c7 (Windows-31J)
        # 0x3069 (UTF-16BE)
        if argCheckUnicode == u'ど':
            return True
        #end
        # No.42
        # 0x82c8 (Windows-31J)
        # 0x306a (UTF-16BE)
        if argCheckUnicode == u'な':
            return True
        #end
        # No.43
        # 0x82c9 (Windows-31J)
        # 0x306b (UTF-16BE)
        if argCheckUnicode == u'に':
            return True
        #end
        # No.44
        # 0x82ca (Windows-31J)
        # 0x306c (UTF-16BE)
        if argCheckUnicode == u'ぬ':
            return True
        #end
        # No.45
        # 0x82cb (Windows-31J)
        # 0x306d (UTF-16BE)
        if argCheckUnicode == u'ね':
            return True
        #end
        # No.46
        # 0x82cc (Windows-31J)
        # 0x306e (UTF-16BE)
        if argCheckUnicode == u'の':
            return True
        #end
        # No.47
        # 0x82cd (Windows-31J)
        # 0x306f (UTF-16BE)
        if argCheckUnicode == u'は':
            return True
        #end
        # No.48
        # 0x82ce (Windows-31J)
        # 0x3070 (UTF-16BE)
        if argCheckUnicode == u'ば':
            return True
        #end
        # No.49
        # 0x82cf (Windows-31J)
        # 0x3071 (UTF-16BE)
        if argCheckUnicode == u'ぱ':
            return True
        #end
        # No.50
        # 0x82d0 (Windows-31J)
        # 0x3072 (UTF-16BE)
        if argCheckUnicode == u'ひ':
            return True
        #end
        # No.51
        # 0x82d1 (Windows-31J)
        # 0x3073 (UTF-16BE)
        if argCheckUnicode == u'び':
            return True
        #end
        # No.52
        # 0x82d2 (Windows-31J)
        # 0x3074 (UTF-16BE)
        if argCheckUnicode == u'ぴ':
            return True
        #end
        # No.53
        # 0x82d3 (Windows-31J)
        # 0x3075 (UTF-16BE)
        if argCheckUnicode == u'ふ':
            return True
        #end
        # No.54
        # 0x82d4 (Windows-31J)
        # 0x3076 (UTF-16BE)
        if argCheckUnicode == u'ぶ':
            return True
        #end
        # No.55
        # 0x82d5 (Windows-31J)
        # 0x3077 (UTF-16BE)
        if argCheckUnicode == u'ぷ':
            return True
        #end
        # No.56
        # 0x82d6 (Windows-31J)
        # 0x3078 (UTF-16BE)
        if argCheckUnicode == u'へ':
            return True
        #end
        # No.57
        # 0x82d7 (Windows-31J)
        # 0x3079 (UTF-16BE)
        if argCheckUnicode == u'べ':
            return True
        #end
        # No.58
        # 0x82d8 (Windows-31J)
        # 0x307a (UTF-16BE)
        if argCheckUnicode == u'ぺ':
            return True
        #end
        # No.59
        # 0x82d9 (Windows-31J)
        # 0x307b (UTF-16BE)
        if argCheckUnicode == u'ほ':
            return True
        #end
        # No.60
        # 0x82da (Windows-31J)
        # 0x307c (UTF-16BE)
        if argCheckUnicode == u'ぼ':
            return True
        #end
        # No.61
        # 0x82db (Windows-31J)
        # 0x307d (UTF-16BE)
        if argCheckUnicode == u'ぽ':
            return True
        #end
        # No.62
        # 0x82dc (Windows-31J)
        # 0x307e (UTF-16BE)
        if argCheckUnicode == u'ま':
            return True
        #end
        # No.63
        # 0x82dd (Windows-31J)
        # 0x307f (UTF-16BE)
        if argCheckUnicode == u'み':
            return True
        #end
        # No.64
        # 0x82de (Windows-31J)
        # 0x3080 (UTF-16BE)
        if argCheckUnicode == u'む':
            return True
        #end
        # No.65
        # 0x82df (Windows-31J)
        # 0x3081 (UTF-16BE)
        if argCheckUnicode == u'め':
            return True
        #end
        # No.66
        # 0x82e0 (Windows-31J)
        # 0x3082 (UTF-16BE)
        if argCheckUnicode == u'も':
            return True
        #end
        # No.67
        # 0x82e1 (Windows-31J)
        # 0x3083 (UTF-16BE)
        if argCheckUnicode == u'ゃ':
            return True
        #end
        # No.68
        # 0x82e2 (Windows-31J)
        # 0x3084 (UTF-16BE)
        if argCheckUnicode == u'や':
            return True
        #end
        # No.69
        # 0x82e3 (Windows-31J)
        # 0x3085 (UTF-16BE)
        if argCheckUnicode == u'ゅ':
            return True
        #end
        # No.70
        # 0x82e4 (Windows-31J)
        # 0x3086 (UTF-16BE)
        if argCheckUnicode == u'ゆ':
            return True
        #end
        # No.71
        # 0x82e5 (Windows-31J)
        # 0x3087 (UTF-16BE)
        if argCheckUnicode == u'ょ':
            return True
        #end
        # No.72
        # 0x82e6 (Windows-31J)
        # 0x3088 (UTF-16BE)
        if argCheckUnicode == u'よ':
            return True
        #end
        # No.73
        # 0x82e7 (Windows-31J)
        # 0x3089 (UTF-16BE)
        if argCheckUnicode == u'ら':
            return True
        #end
        # No.74
        # 0x82e8 (Windows-31J)
        # 0x308a (UTF-16BE)
        if argCheckUnicode == u'り':
            return True
        #end
        # No.75
        # 0x82e9 (Windows-31J)
        # 0x308b (UTF-16BE)
        if argCheckUnicode == u'る':
            return True
        #end
        # No.76
        # 0x82ea (Windows-31J)
        # 0x308c (UTF-16BE)
        if argCheckUnicode == u'れ':
            return True
        #end
        # No.77
        # 0x82eb (Windows-31J)
        # 0x308d (UTF-16BE)
        if argCheckUnicode == u'ろ':
            return True
        #end
        # No.78
        # 0x82ec (Windows-31J)
        # 0x308e (UTF-16BE)
        if argCheckUnicode == u'ゎ':
            return True
        #end
        # No.79
        # 0x82ed (Windows-31J)
        # 0x308f (UTF-16BE)
        if argCheckUnicode == u'わ':
            return True
        #end
        # No.80
        # 0x82ee (Windows-31J)
        # 0x3090 (UTF-16BE)
        if argCheckUnicode == u'ゐ':
            return True
        #end
        # No.81
        # 0x82ef (Windows-31J)
        # 0x3091 (UTF-16BE)
        if argCheckUnicode == u'ゑ':
            return True
        #end
        # No.82
        # 0x82f0 (Windows-31J)
        # 0x3092 (UTF-16BE)
        if argCheckUnicode == u'を':
            return True
        #end
        # No.83
        # 説明:82f1: ひらがな。ん。
        # 0x82f1 (Windows-31J)
        # 0x3093 (UTF-16BE)
        if argCheckUnicode == u'ん':
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

# -*- coding: cp932 -*-
"""このソースコードは blanco Frameworkによって自動生成されています。
"""
class SampleHanKatakanaCharacterGroup:
    """半角カタカナのサンプル。blancoCharacterGroupの実装には影響しません。
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
        # No.2
        # 説明:a1: 句読点
        # 0xa1 (Windows-31J)
        # 0xff61 (UTF-16BE)
        if argCheckUnicode == u'｡':
            return True
        #end
        # No.3
        # 説明:a2: 半角のカギカッコ。
        # 0xa2 (Windows-31J)
        # 0xff62 (UTF-16BE)
        if argCheckUnicode == u'｢':
            return True
        #end
        # No.4
        # 説明:a3: 半角のカギカッコ。
        # 0xa3 (Windows-31J)
        # 0xff63 (UTF-16BE)
        if argCheckUnicode == u'｣':
            return True
        #end
        # No.5
        # 説明:a4: 句読点
        # 0xa4 (Windows-31J)
        # 0xff64 (UTF-16BE)
        if argCheckUnicode == u'､':
            return True
        #end
        # No.6
        # 説明:a5: 半角の中黒
        # 0xa5 (Windows-31J)
        # 0xff65 (UTF-16BE)
        if argCheckUnicode == u'･':
            return True
        #end
        # No.8
        # 説明:a7: 小さいカタカナ。ァ。
        # 0xa7 (Windows-31J)
        # 0xff67 (UTF-16BE)
        if argCheckUnicode == u'ｧ':
            return True
        #end
        # No.9
        # 説明:a8: 小さいカタカナ
        # 0xa8 (Windows-31J)
        # 0xff68 (UTF-16BE)
        if argCheckUnicode == u'ｨ':
            return True
        #end
        # No.10
        # 説明:a9: 小さいカタカナ
        # 0xa9 (Windows-31J)
        # 0xff69 (UTF-16BE)
        if argCheckUnicode == u'ｩ':
            return True
        #end
        # No.11
        # 説明:aa: 小さいカタカナ
        # 0xaa (Windows-31J)
        # 0xff6a (UTF-16BE)
        if argCheckUnicode == u'ｪ':
            return True
        #end
        # No.12
        # 説明:ab: 小さいカタカナ
        # 0xab (Windows-31J)
        # 0xff6b (UTF-16BE)
        if argCheckUnicode == u'ｫ':
            return True
        #end
        # No.13
        # 説明:ac: 小さいカタカナ
        # 0xac (Windows-31J)
        # 0xff6c (UTF-16BE)
        if argCheckUnicode == u'ｬ':
            return True
        #end
        # No.14
        # 説明:ad: 小さいカタカナ
        # 0xad (Windows-31J)
        # 0xff6d (UTF-16BE)
        if argCheckUnicode == u'ｭ':
            return True
        #end
        # No.15
        # 説明:ae: 小さいカタカナ。ョ。
        # 0xae (Windows-31J)
        # 0xff6e (UTF-16BE)
        if argCheckUnicode == u'ｮ':
            return True
        #end
        # No.16
        # 説明:af: 小さいカタカナ。ッ。ョの次に定義しています。
        # 0xaf (Windows-31J)
        # 0xff6f (UTF-16BE)
        if argCheckUnicode == u'ｯ':
            return True
        #end
        # No.17
        # 説明:b0: 半角の伸ばす。－。
        # 0xb0 (Windows-31J)
        # 0xff70 (UTF-16BE)
        if argCheckUnicode == u'ｰ':
            return True
        #end
        # No.18
        # 説明:b1: カタカナ。ア。
        # 0xb1 (Windows-31J)
        # 0xff71 (UTF-16BE)
        if argCheckUnicode == u'ｱ':
            return True
        #end
        # No.19
        # 説明:b2: カタカナ
        # 0xb2 (Windows-31J)
        # 0xff72 (UTF-16BE)
        if argCheckUnicode == u'ｲ':
            return True
        #end
        # No.20
        # 説明:b3: カタカナ
        # 0xb3 (Windows-31J)
        # 0xff73 (UTF-16BE)
        if argCheckUnicode == u'ｳ':
            return True
        #end
        # No.21
        # 説明:b4: カタカナ
        # 0xb4 (Windows-31J)
        # 0xff74 (UTF-16BE)
        if argCheckUnicode == u'ｴ':
            return True
        #end
        # No.22
        # 説明:b5: カタカナ
        # 0xb5 (Windows-31J)
        # 0xff75 (UTF-16BE)
        if argCheckUnicode == u'ｵ':
            return True
        #end
        # No.23
        # 説明:b6: カタカナ
        # 0xb6 (Windows-31J)
        # 0xff76 (UTF-16BE)
        if argCheckUnicode == u'ｶ':
            return True
        #end
        # No.24
        # 説明:b7: カタカナ
        # 0xb7 (Windows-31J)
        # 0xff77 (UTF-16BE)
        if argCheckUnicode == u'ｷ':
            return True
        #end
        # No.25
        # 説明:b8: カタカナ
        # 0xb8 (Windows-31J)
        # 0xff78 (UTF-16BE)
        if argCheckUnicode == u'ｸ':
            return True
        #end
        # No.26
        # 説明:b9: カタカナ
        # 0xb9 (Windows-31J)
        # 0xff79 (UTF-16BE)
        if argCheckUnicode == u'ｹ':
            return True
        #end
        # No.27
        # 説明:ba: カタカナ
        # 0xba (Windows-31J)
        # 0xff7a (UTF-16BE)
        if argCheckUnicode == u'ｺ':
            return True
        #end
        # No.28
        # 説明:bb: カタカナ
        # 0xbb (Windows-31J)
        # 0xff7b (UTF-16BE)
        if argCheckUnicode == u'ｻ':
            return True
        #end
        # No.29
        # 説明:bc: カタカナ
        # 0xbc (Windows-31J)
        # 0xff7c (UTF-16BE)
        if argCheckUnicode == u'ｼ':
            return True
        #end
        # No.30
        # 説明:bd: カタカナ
        # 0xbd (Windows-31J)
        # 0xff7d (UTF-16BE)
        if argCheckUnicode == u'ｽ':
            return True
        #end
        # No.31
        # 説明:be: カタカナ
        # 0xbe (Windows-31J)
        # 0xff7e (UTF-16BE)
        if argCheckUnicode == u'ｾ':
            return True
        #end
        # No.32
        # 説明:bf: カタカナ
        # 0xbf (Windows-31J)
        # 0xff7f (UTF-16BE)
        if argCheckUnicode == u'ｿ':
            return True
        #end
        # No.33
        # 説明:c0: カタカナ
        # 0xc0 (Windows-31J)
        # 0xff80 (UTF-16BE)
        if argCheckUnicode == u'ﾀ':
            return True
        #end
        # No.34
        # 説明:c1: カタカナ
        # 0xc1 (Windows-31J)
        # 0xff81 (UTF-16BE)
        if argCheckUnicode == u'ﾁ':
            return True
        #end
        # No.35
        # 説明:c2: カタカナ
        # 0xc2 (Windows-31J)
        # 0xff82 (UTF-16BE)
        if argCheckUnicode == u'ﾂ':
            return True
        #end
        # No.36
        # 説明:c3: カタカナ
        # 0xc3 (Windows-31J)
        # 0xff83 (UTF-16BE)
        if argCheckUnicode == u'ﾃ':
            return True
        #end
        # No.37
        # 説明:c4: カタカナ
        # 0xc4 (Windows-31J)
        # 0xff84 (UTF-16BE)
        if argCheckUnicode == u'ﾄ':
            return True
        #end
        # No.38
        # 説明:c5: カタカナ
        # 0xc5 (Windows-31J)
        # 0xff85 (UTF-16BE)
        if argCheckUnicode == u'ﾅ':
            return True
        #end
        # No.39
        # 説明:c6: カタカナ
        # 0xc6 (Windows-31J)
        # 0xff86 (UTF-16BE)
        if argCheckUnicode == u'ﾆ':
            return True
        #end
        # No.40
        # 説明:c7: カタカナ
        # 0xc7 (Windows-31J)
        # 0xff87 (UTF-16BE)
        if argCheckUnicode == u'ﾇ':
            return True
        #end
        # No.41
        # 説明:c8: カタカナ
        # 0xc8 (Windows-31J)
        # 0xff88 (UTF-16BE)
        if argCheckUnicode == u'ﾈ':
            return True
        #end
        # No.42
        # 説明:c9: カタカナ
        # 0xc9 (Windows-31J)
        # 0xff89 (UTF-16BE)
        if argCheckUnicode == u'ﾉ':
            return True
        #end
        # No.43
        # 説明:ca: カタカナ
        # 0xca (Windows-31J)
        # 0xff8a (UTF-16BE)
        if argCheckUnicode == u'ﾊ':
            return True
        #end
        # No.44
        # 説明:cb: カタカナ
        # 0xcb (Windows-31J)
        # 0xff8b (UTF-16BE)
        if argCheckUnicode == u'ﾋ':
            return True
        #end
        # No.45
        # 説明:cc: カタカナ
        # 0xcc (Windows-31J)
        # 0xff8c (UTF-16BE)
        if argCheckUnicode == u'ﾌ':
            return True
        #end
        # No.46
        # 説明:cd: カタカナ
        # 0xcd (Windows-31J)
        # 0xff8d (UTF-16BE)
        if argCheckUnicode == u'ﾍ':
            return True
        #end
        # No.47
        # 説明:ce: カタカナ
        # 0xce (Windows-31J)
        # 0xff8e (UTF-16BE)
        if argCheckUnicode == u'ﾎ':
            return True
        #end
        # No.48
        # 説明:cf: カタカナ
        # 0xcf (Windows-31J)
        # 0xff8f (UTF-16BE)
        if argCheckUnicode == u'ﾏ':
            return True
        #end
        # No.49
        # 説明:d0: カタカナ
        # 0xd0 (Windows-31J)
        # 0xff90 (UTF-16BE)
        if argCheckUnicode == u'ﾐ':
            return True
        #end
        # No.50
        # 説明:d1: カタカナ
        # 0xd1 (Windows-31J)
        # 0xff91 (UTF-16BE)
        if argCheckUnicode == u'ﾑ':
            return True
        #end
        # No.51
        # 説明:d2: カタカナ
        # 0xd2 (Windows-31J)
        # 0xff92 (UTF-16BE)
        if argCheckUnicode == u'ﾒ':
            return True
        #end
        # No.52
        # 説明:d3: カタカナ
        # 0xd3 (Windows-31J)
        # 0xff93 (UTF-16BE)
        if argCheckUnicode == u'ﾓ':
            return True
        #end
        # No.53
        # 説明:d4: カタカナ
        # 0xd4 (Windows-31J)
        # 0xff94 (UTF-16BE)
        if argCheckUnicode == u'ﾔ':
            return True
        #end
        # No.54
        # 説明:d5: カタカナ
        # 0xd5 (Windows-31J)
        # 0xff95 (UTF-16BE)
        if argCheckUnicode == u'ﾕ':
            return True
        #end
        # No.55
        # 説明:d6: カタカナ
        # 0xd6 (Windows-31J)
        # 0xff96 (UTF-16BE)
        if argCheckUnicode == u'ﾖ':
            return True
        #end
        # No.56
        # 説明:d7: カタカナ
        # 0xd7 (Windows-31J)
        # 0xff97 (UTF-16BE)
        if argCheckUnicode == u'ﾗ':
            return True
        #end
        # No.57
        # 説明:d8: カタカナ
        # 0xd8 (Windows-31J)
        # 0xff98 (UTF-16BE)
        if argCheckUnicode == u'ﾘ':
            return True
        #end
        # No.58
        # 説明:d9: カタカナ
        # 0xd9 (Windows-31J)
        # 0xff99 (UTF-16BE)
        if argCheckUnicode == u'ﾙ':
            return True
        #end
        # No.59
        # 説明:da: カタカナ
        # 0xda (Windows-31J)
        # 0xff9a (UTF-16BE)
        if argCheckUnicode == u'ﾚ':
            return True
        #end
        # No.60
        # 説明:db: カタカナ
        # 0xdb (Windows-31J)
        # 0xff9b (UTF-16BE)
        if argCheckUnicode == u'ﾛ':
            return True
        #end
        # No.61
        # 説明:dc: カタカナ。ワ。
        # 0xdc (Windows-31J)
        # 0xff9c (UTF-16BE)
        if argCheckUnicode == u'ﾜ':
            return True
        #end
        # No.62
        # 説明:a6: カタカナ。ヲ。MS932におけるコード順としては 小さいアより前に位置します。
        # 0xa6 (Windows-31J)
        # 0xff66 (UTF-16BE)
        if argCheckUnicode == u'ｦ':
            return True
        #end
        # No.63
        # 説明:dd: カタカナ。ン。
        # 0xdd (Windows-31J)
        # 0xff9d (UTF-16BE)
        if argCheckUnicode == u'ﾝ':
            return True
        #end
        # No.64
        # 説明:de: 濁音
        # 0xde (Windows-31J)
        # 0xff9e (UTF-16BE)
        if argCheckUnicode == u'ﾞ':
            return True
        #end
        # No.65
        # 説明:df: 濁音
        # 0xdf (Windows-31J)
        # 0xff9f (UTF-16BE)
        if argCheckUnicode == u'ﾟ':
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

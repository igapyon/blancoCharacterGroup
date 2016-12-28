# -*- coding: cp932 -*-
"""このソースコードは blanco Frameworkによって自動生成されています。
"""
class SampleZenKatakanaCharacterGroup:
    """全角カタカナのサンプル。blancoCharacterGroupの実装には影響しません。
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
        # 説明:8340: カタカナ。ァ。
        # 0x8340 (Windows-31J)
        # 0x30a1 (UTF-16BE)
        if argCheckUnicode == u'ァ':
            return True
        #end
        # No.2
        # 説明:8341: カタカナ。ア。
        # 0x8341 (Windows-31J)
        # 0x30a2 (UTF-16BE)
        if argCheckUnicode == u'ア':
            return True
        #end
        # No.3
        # 説明:8342: カタカナ。ィ。
        # 0x8342 (Windows-31J)
        # 0x30a3 (UTF-16BE)
        if argCheckUnicode == u'ィ':
            return True
        #end
        # No.4
        # 0x8343 (Windows-31J)
        # 0x30a4 (UTF-16BE)
        if argCheckUnicode == u'イ':
            return True
        #end
        # No.5
        # 0x8344 (Windows-31J)
        # 0x30a5 (UTF-16BE)
        if argCheckUnicode == u'ゥ':
            return True
        #end
        # No.6
        # 0x8345 (Windows-31J)
        # 0x30a6 (UTF-16BE)
        if argCheckUnicode == u'ウ':
            return True
        #end
        # No.7
        # 0x8346 (Windows-31J)
        # 0x30a7 (UTF-16BE)
        if argCheckUnicode == u'ェ':
            return True
        #end
        # No.8
        # 0x8347 (Windows-31J)
        # 0x30a8 (UTF-16BE)
        if argCheckUnicode == u'エ':
            return True
        #end
        # No.9
        # 説明:8348: カタカナ。ォ。
        # 0x8348 (Windows-31J)
        # 0x30a9 (UTF-16BE)
        if argCheckUnicode == u'ォ':
            return True
        #end
        # No.10
        # 説明:8349: カタカナ。オ。
        # 0x8349 (Windows-31J)
        # 0x30aa (UTF-16BE)
        if argCheckUnicode == u'オ':
            return True
        #end
        # No.11
        # 説明:834a: カタカナ。カ。
        # 0x834a (Windows-31J)
        # 0x30ab (UTF-16BE)
        if argCheckUnicode == u'カ':
            return True
        #end
        # No.12
        # 説明:834b: カタカナ。ガ。
        # 0x834b (Windows-31J)
        # 0x30ac (UTF-16BE)
        if argCheckUnicode == u'ガ':
            return True
        #end
        # No.13
        # 0x834c (Windows-31J)
        # 0x30ad (UTF-16BE)
        if argCheckUnicode == u'キ':
            return True
        #end
        # No.14
        # 説明:834d: カタカナ。ギ。
        # 0x834d (Windows-31J)
        # 0x30ae (UTF-16BE)
        if argCheckUnicode == u'ギ':
            return True
        #end
        # No.15
        # 0x834e (Windows-31J)
        # 0x30af (UTF-16BE)
        if argCheckUnicode == u'ク':
            return True
        #end
        # No.16
        # 説明:834f: カタカナ。グ。
        # 0x834f (Windows-31J)
        # 0x30b0 (UTF-16BE)
        if argCheckUnicode == u'グ':
            return True
        #end
        # No.17
        # 0x8350 (Windows-31J)
        # 0x30b1 (UTF-16BE)
        if argCheckUnicode == u'ケ':
            return True
        #end
        # No.18
        # 0x8351 (Windows-31J)
        # 0x30b2 (UTF-16BE)
        if argCheckUnicode == u'ゲ':
            return True
        #end
        # No.19
        # 0x8352 (Windows-31J)
        # 0x30b3 (UTF-16BE)
        if argCheckUnicode == u'コ':
            return True
        #end
        # No.20
        # 0x8353 (Windows-31J)
        # 0x30b4 (UTF-16BE)
        if argCheckUnicode == u'ゴ':
            return True
        #end
        # No.21
        # 0x8354 (Windows-31J)
        # 0x30b5 (UTF-16BE)
        if argCheckUnicode == u'サ':
            return True
        #end
        # No.22
        # 0x8355 (Windows-31J)
        # 0x30b6 (UTF-16BE)
        if argCheckUnicode == u'ザ':
            return True
        #end
        # No.23
        # 0x8356 (Windows-31J)
        # 0x30b7 (UTF-16BE)
        if argCheckUnicode == u'シ':
            return True
        #end
        # No.24
        # 0x8357 (Windows-31J)
        # 0x30b8 (UTF-16BE)
        if argCheckUnicode == u'ジ':
            return True
        #end
        # No.25
        # 0x8358 (Windows-31J)
        # 0x30b9 (UTF-16BE)
        if argCheckUnicode == u'ス':
            return True
        #end
        # No.26
        # 0x8359 (Windows-31J)
        # 0x30ba (UTF-16BE)
        if argCheckUnicode == u'ズ':
            return True
        #end
        # No.27
        # 0x835a (Windows-31J)
        # 0x30bb (UTF-16BE)
        if argCheckUnicode == u'セ':
            return True
        #end
        # No.28
        # 0x835b (Windows-31J)
        # 0x30bc (UTF-16BE)
        if argCheckUnicode == u'ゼ':
            return True
        #end
        # No.29
        # 0x835c (Windows-31J)
        # 0x30bd (UTF-16BE)
        if argCheckUnicode == u'ソ':
            return True
        #end
        # No.30
        # 説明:835d: カタカナ。ゾ。
        # 0x835d (Windows-31J)
        # 0x30be (UTF-16BE)
        if argCheckUnicode == u'ゾ':
            return True
        #end
        # No.31
        # 0x835e (Windows-31J)
        # 0x30bf (UTF-16BE)
        if argCheckUnicode == u'タ':
            return True
        #end
        # No.32
        # 説明:835f: カタカナ。ダ。
        # 0x835f (Windows-31J)
        # 0x30c0 (UTF-16BE)
        if argCheckUnicode == u'ダ':
            return True
        #end
        # No.33
        # 0x8360 (Windows-31J)
        # 0x30c1 (UTF-16BE)
        if argCheckUnicode == u'チ':
            return True
        #end
        # No.34
        # 0x8361 (Windows-31J)
        # 0x30c2 (UTF-16BE)
        if argCheckUnicode == u'ヂ':
            return True
        #end
        # No.35
        # 説明:8362: カタカナ。ッ。
        # 0x8362 (Windows-31J)
        # 0x30c3 (UTF-16BE)
        if argCheckUnicode == u'ッ':
            return True
        #end
        # No.36
        # 0x8363 (Windows-31J)
        # 0x30c4 (UTF-16BE)
        if argCheckUnicode == u'ツ':
            return True
        #end
        # No.37
        # 0x8364 (Windows-31J)
        # 0x30c5 (UTF-16BE)
        if argCheckUnicode == u'ヅ':
            return True
        #end
        # No.38
        # 0x8365 (Windows-31J)
        # 0x30c6 (UTF-16BE)
        if argCheckUnicode == u'テ':
            return True
        #end
        # No.39
        # 0x8366 (Windows-31J)
        # 0x30c7 (UTF-16BE)
        if argCheckUnicode == u'デ':
            return True
        #end
        # No.40
        # 0x8367 (Windows-31J)
        # 0x30c8 (UTF-16BE)
        if argCheckUnicode == u'ト':
            return True
        #end
        # No.41
        # 0x8368 (Windows-31J)
        # 0x30c9 (UTF-16BE)
        if argCheckUnicode == u'ド':
            return True
        #end
        # No.42
        # 0x8369 (Windows-31J)
        # 0x30ca (UTF-16BE)
        if argCheckUnicode == u'ナ':
            return True
        #end
        # No.43
        # 0x836a (Windows-31J)
        # 0x30cb (UTF-16BE)
        if argCheckUnicode == u'ニ':
            return True
        #end
        # No.44
        # 0x836b (Windows-31J)
        # 0x30cc (UTF-16BE)
        if argCheckUnicode == u'ヌ':
            return True
        #end
        # No.45
        # 0x836c (Windows-31J)
        # 0x30cd (UTF-16BE)
        if argCheckUnicode == u'ネ':
            return True
        #end
        # No.46
        # 0x836d (Windows-31J)
        # 0x30ce (UTF-16BE)
        if argCheckUnicode == u'ノ':
            return True
        #end
        # No.47
        # 0x836e (Windows-31J)
        # 0x30cf (UTF-16BE)
        if argCheckUnicode == u'ハ':
            return True
        #end
        # No.48
        # 説明:836f: カタカナ。バ。
        # 0x836f (Windows-31J)
        # 0x30d0 (UTF-16BE)
        if argCheckUnicode == u'バ':
            return True
        #end
        # No.49
        # 説明:8370: カタカナ。パ。
        # 0x8370 (Windows-31J)
        # 0x30d1 (UTF-16BE)
        if argCheckUnicode == u'パ':
            return True
        #end
        # No.50
        # 0x8371 (Windows-31J)
        # 0x30d2 (UTF-16BE)
        if argCheckUnicode == u'ヒ':
            return True
        #end
        # No.51
        # 0x8372 (Windows-31J)
        # 0x30d3 (UTF-16BE)
        if argCheckUnicode == u'ビ':
            return True
        #end
        # No.52
        # 0x8373 (Windows-31J)
        # 0x30d4 (UTF-16BE)
        if argCheckUnicode == u'ピ':
            return True
        #end
        # No.53
        # 0x8374 (Windows-31J)
        # 0x30d5 (UTF-16BE)
        if argCheckUnicode == u'フ':
            return True
        #end
        # No.54
        # 0x8375 (Windows-31J)
        # 0x30d6 (UTF-16BE)
        if argCheckUnicode == u'ブ':
            return True
        #end
        # No.55
        # 0x8376 (Windows-31J)
        # 0x30d7 (UTF-16BE)
        if argCheckUnicode == u'プ':
            return True
        #end
        # No.56
        # 0x8377 (Windows-31J)
        # 0x30d8 (UTF-16BE)
        if argCheckUnicode == u'ヘ':
            return True
        #end
        # No.57
        # 0x8378 (Windows-31J)
        # 0x30d9 (UTF-16BE)
        if argCheckUnicode == u'ベ':
            return True
        #end
        # No.58
        # 0x8379 (Windows-31J)
        # 0x30da (UTF-16BE)
        if argCheckUnicode == u'ペ':
            return True
        #end
        # No.59
        # 0x837a (Windows-31J)
        # 0x30db (UTF-16BE)
        if argCheckUnicode == u'ホ':
            return True
        #end
        # No.60
        # 説明:837b: カタカナ。ボ。
        # 0x837b (Windows-31J)
        # 0x30dc (UTF-16BE)
        if argCheckUnicode == u'ボ':
            return True
        #end
        # No.61
        # 説明:837c: カタカナ。ポ。
        # 0x837c (Windows-31J)
        # 0x30dd (UTF-16BE)
        if argCheckUnicode == u'ポ':
            return True
        #end
        # No.62
        # 0x837d (Windows-31J)
        # 0x30de (UTF-16BE)
        if argCheckUnicode == u'マ':
            return True
        #end
        # No.63
        # 説明:837e: カタカナ。ミ。
        # 0x837e (Windows-31J)
        # 0x30df (UTF-16BE)
        if argCheckUnicode == u'ミ':
            return True
        #end
        # No.64
        # 説明:8380: カタカナ。ム。837fはスキップされている模様。
        # 0x8380 (Windows-31J)
        # 0x30e0 (UTF-16BE)
        if argCheckUnicode == u'ム':
            return True
        #end
        # No.65
        # 0x8381 (Windows-31J)
        # 0x30e1 (UTF-16BE)
        if argCheckUnicode == u'メ':
            return True
        #end
        # No.66
        # 0x8382 (Windows-31J)
        # 0x30e2 (UTF-16BE)
        if argCheckUnicode == u'モ':
            return True
        #end
        # No.67
        # 説明:8383: カタカナ。ャ。
        # 0x8383 (Windows-31J)
        # 0x30e3 (UTF-16BE)
        if argCheckUnicode == u'ャ':
            return True
        #end
        # No.68
        # 説明:8384: カタカナ。ヤ。
        # 0x8384 (Windows-31J)
        # 0x30e4 (UTF-16BE)
        if argCheckUnicode == u'ヤ':
            return True
        #end
        # No.69
        # 0x8385 (Windows-31J)
        # 0x30e5 (UTF-16BE)
        if argCheckUnicode == u'ュ':
            return True
        #end
        # No.70
        # 0x8386 (Windows-31J)
        # 0x30e6 (UTF-16BE)
        if argCheckUnicode == u'ユ':
            return True
        #end
        # No.71
        # 説明:8387: カタカナ。ョ。
        # 0x8387 (Windows-31J)
        # 0x30e7 (UTF-16BE)
        if argCheckUnicode == u'ョ':
            return True
        #end
        # No.72
        # 0x8388 (Windows-31J)
        # 0x30e8 (UTF-16BE)
        if argCheckUnicode == u'ヨ':
            return True
        #end
        # No.73
        # 説明:8389: カタカナ。ラ。
        # 0x8389 (Windows-31J)
        # 0x30e9 (UTF-16BE)
        if argCheckUnicode == u'ラ':
            return True
        #end
        # No.74
        # 0x838a (Windows-31J)
        # 0x30ea (UTF-16BE)
        if argCheckUnicode == u'リ':
            return True
        #end
        # No.75
        # 0x838b (Windows-31J)
        # 0x30eb (UTF-16BE)
        if argCheckUnicode == u'ル':
            return True
        #end
        # No.76
        # 0x838c (Windows-31J)
        # 0x30ec (UTF-16BE)
        if argCheckUnicode == u'レ':
            return True
        #end
        # No.77
        # 0x838d (Windows-31J)
        # 0x30ed (UTF-16BE)
        if argCheckUnicode == u'ロ':
            return True
        #end
        # No.78
        # 説明:カタカナ。小さいヮ。
        # 0x838e (Windows-31J)
        # 0x30ee (UTF-16BE)
        if argCheckUnicode == u'ヮ':
            return True
        #end
        # No.79
        # 説明:838f: カタカナ。ワ。
        # 0x838f (Windows-31J)
        # 0x30ef (UTF-16BE)
        if argCheckUnicode == u'ワ':
            return True
        #end
        # No.80
        # 0x8390 (Windows-31J)
        # 0x30f0 (UTF-16BE)
        if argCheckUnicode == u'ヰ':
            return True
        #end
        # No.81
        # 0x8391 (Windows-31J)
        # 0x30f1 (UTF-16BE)
        if argCheckUnicode == u'ヱ':
            return True
        #end
        # No.82
        # 説明:8392: カタカナ。ヲ。
        # 0x8392 (Windows-31J)
        # 0x30f2 (UTF-16BE)
        if argCheckUnicode == u'ヲ':
            return True
        #end
        # No.83
        # 説明:8393: カタカナ。ン。
        # 0x8393 (Windows-31J)
        # 0x30f3 (UTF-16BE)
        if argCheckUnicode == u'ン':
            return True
        #end
        # No.84
        # 説明:8394: カタカナ。ヴ。
        # 0x8394 (Windows-31J)
        # 0x30f4 (UTF-16BE)
        if argCheckUnicode == u'ヴ':
            return True
        #end
        # No.85
        # 0x8395 (Windows-31J)
        # 0x30f5 (UTF-16BE)
        if argCheckUnicode == u'ヵ':
            return True
        #end
        # No.86
        # 説明:8396: カタカナ。ヶ。
        # 0x8396 (Windows-31J)
        # 0x30f6 (UTF-16BE)
        if argCheckUnicode == u'ヶ':
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

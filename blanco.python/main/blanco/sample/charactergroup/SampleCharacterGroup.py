# -*- coding: cp932 -*-
"""このソースコードは blanco Frameworkによって自動生成されています。
"""
class SampleCharacterGroup:
    """文字グループのサンプル。このクラスは単にサンプルです。実際の動作には利用されません。
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
        # 説明:0の文字
        # 0x30 (Windows-31J)
        # 0x0030 (UTF-16BE)
        if argCheckUnicode == u'0':
            return True
        #end
        # No.2
        # 説明:1の文字
        # 0x31 (Windows-31J)
        # 0x0031 (UTF-16BE)
        if argCheckUnicode == u'1':
            return True
        #end
        # No.3
        # 説明:2の文字
        # 0x32 (Windows-31J)
        # 0x0032 (UTF-16BE)
        if argCheckUnicode == u'2':
            return True
        #end
        # No.4
        # 説明:3の文字
        # 0x33 (Windows-31J)
        # 0x0033 (UTF-16BE)
        if argCheckUnicode == u'3':
            return True
        #end
        # No.5
        # 説明:4の文字
        # 0x34 (Windows-31J)
        # 0x0034 (UTF-16BE)
        if argCheckUnicode == u'4':
            return True
        #end
        # No.6
        # 説明:5の文字
        # 0x35 (Windows-31J)
        # 0x0035 (UTF-16BE)
        if argCheckUnicode == u'5':
            return True
        #end
        # No.7
        # 説明:6の文字
        # 0x36 (Windows-31J)
        # 0x0036 (UTF-16BE)
        if argCheckUnicode == u'6':
            return True
        #end
        # No.8
        # 説明:7の文字
        # 0x37 (Windows-31J)
        # 0x0037 (UTF-16BE)
        if argCheckUnicode == u'7':
            return True
        #end
        # No.9
        # 説明:8の文字
        # 0x38 (Windows-31J)
        # 0x0038 (UTF-16BE)
        if argCheckUnicode == u'8':
            return True
        #end
        # No.10
        # 説明:9の文字
        # 0x39 (Windows-31J)
        # 0x0039 (UTF-16BE)
        if argCheckUnicode == u'9':
            return True
        #end
        # No.11
        # 説明:シングルクオートが展開されることの確認。
        # 0x27 (Windows-31J)
        # 0x0027 (UTF-16BE)
        if argCheckUnicode == u'\'':
            return True
        #end
        # No.12
        # 説明:ダブルクオートが展開されることの確認。
        # 0x22 (Windows-31J)
        # 0x0022 (UTF-16BE)
        if argCheckUnicode == u'"':
            return True
        #end
        # No.13
        # 説明:バックスラッシュが展開されることの確認。
        # 0x5c (Windows-31J)
        # 0x005c (UTF-16BE)
        if argCheckUnicode == u'\\':
            return True
        #end
        # No.14
        # 説明:JExcelApi 2.6のオリジナル版において正常に×として展開できない文字。
        # 0x817e (Windows-31J)
        # 0x00d7 (UTF-16BE)
        if argCheckUnicode == u'×':
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

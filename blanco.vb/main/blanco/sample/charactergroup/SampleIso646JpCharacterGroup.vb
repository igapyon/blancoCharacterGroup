' このソースコードは blanco Frameworkによって自動生成されています。
Imports System

Namespace blanco.sample.charactergroup
    ''' <summary>ISO646-JP(JIS X 0201)の0x20から0x7eまでのサンプル。blancoCharacterGroupの実装には影響しません。</summary>
    Public Class SampleIso646JpCharacterGroup

        ''' <summary>文字グループに含まれる文字であるかどうかを判定します。</summary>
        ''' <param name="argCheck">チェックを行いたい文字。</param>
        ''' <returns>文字グループに含まれていればture。グループに含まれない文字であればfalse。</returns>
        Public Function Match(argCheck As Char) As Boolean
            ' No.1
            ' 説明:0x20: 半角スペース。
            ' 0x20 (Windows-31J)
            ' 0x0020 (UTF-16BE)
            If (argCheck = " "c) Then
                Return true
            End If
            ' No.2
            ' 説明:0x21
            ' 0x21 (Windows-31J)
            ' 0x0021 (UTF-16BE)
            If (argCheck = "!"c) Then
                Return true
            End If
            ' No.3
            ' 説明:0x22: ダブルクオーテーション。
            ' 0x22 (Windows-31J)
            ' 0x0022 (UTF-16BE)
            If (argCheck = """"c) Then
                Return true
            End If
            ' No.4
            ' 説明:0x23: ISO646-USでも＃。
            ' 0x23 (Windows-31J)
            ' 0x0023 (UTF-16BE)
            If (argCheck = "#"c) Then
                Return true
            End If
            ' No.5
            ' 説明:0x24: ISO646-USでも＄。
            ' 0x24 (Windows-31J)
            ' 0x0024 (UTF-16BE)
            If (argCheck = "$"c) Then
                Return true
            End If
            ' No.6
            ' 説明:0x25
            ' 0x25 (Windows-31J)
            ' 0x0025 (UTF-16BE)
            If (argCheck = "%"c) Then
                Return true
            End If
            ' No.7
            ' 説明:0x26
            ' 0x26 (Windows-31J)
            ' 0x0026 (UTF-16BE)
            If (argCheck = "&"c) Then
                Return true
            End If
            ' No.8
            ' 説明:0x27: クオーテーション。
            ' 0x27 (Windows-31J)
            ' 0x0027 (UTF-16BE)
            If (argCheck = "'"c) Then
                Return true
            End If
            ' No.9
            ' 説明:0x28
            ' 0x28 (Windows-31J)
            ' 0x0028 (UTF-16BE)
            If (argCheck = "("c) Then
                Return true
            End If
            ' No.10
            ' 説明:0x29
            ' 0x29 (Windows-31J)
            ' 0x0029 (UTF-16BE)
            If (argCheck = ")"c) Then
                Return true
            End If
            ' No.11
            ' 説明:0x2a
            ' 0x2a (Windows-31J)
            ' 0x002a (UTF-16BE)
            If (argCheck = "*"c) Then
                Return true
            End If
            ' No.12
            ' 説明:0x2b
            ' 0x2b (Windows-31J)
            ' 0x002b (UTF-16BE)
            If (argCheck = "+"c) Then
                Return true
            End If
            ' No.13
            ' 説明:0x2c
            ' 0x2c (Windows-31J)
            ' 0x002c (UTF-16BE)
            If (argCheck = ","c) Then
                Return true
            End If
            ' No.14
            ' 説明:0x2d
            ' 0x2d (Windows-31J)
            ' 0x002d (UTF-16BE)
            If (argCheck = "-"c) Then
                Return true
            End If
            ' No.15
            ' 説明:0x2e
            ' 0x2e (Windows-31J)
            ' 0x002e (UTF-16BE)
            If (argCheck = "."c) Then
                Return true
            End If
            ' No.16
            ' 説明:0x2f: スラッシュ。
            ' 0x2f (Windows-31J)
            ' 0x002f (UTF-16BE)
            If (argCheck = "/"c) Then
                Return true
            End If
            ' No.17
            ' 説明:0x30: 数字の0。
            ' 0x30 (Windows-31J)
            ' 0x0030 (UTF-16BE)
            If (argCheck = "0"c) Then
                Return true
            End If
            ' No.18
            ' 説明:0x31: 数字の1。
            ' 0x31 (Windows-31J)
            ' 0x0031 (UTF-16BE)
            If (argCheck = "1"c) Then
                Return true
            End If
            ' No.19
            ' 説明:0x32: 数字の2。
            ' 0x32 (Windows-31J)
            ' 0x0032 (UTF-16BE)
            If (argCheck = "2"c) Then
                Return true
            End If
            ' No.20
            ' 説明:0x33: 数字の3。
            ' 0x33 (Windows-31J)
            ' 0x0033 (UTF-16BE)
            If (argCheck = "3"c) Then
                Return true
            End If
            ' No.21
            ' 説明:0x34: 数字の4。
            ' 0x34 (Windows-31J)
            ' 0x0034 (UTF-16BE)
            If (argCheck = "4"c) Then
                Return true
            End If
            ' No.22
            ' 説明:0x35: 数字の5。
            ' 0x35 (Windows-31J)
            ' 0x0035 (UTF-16BE)
            If (argCheck = "5"c) Then
                Return true
            End If
            ' No.23
            ' 説明:0x36: 数字の6。
            ' 0x36 (Windows-31J)
            ' 0x0036 (UTF-16BE)
            If (argCheck = "6"c) Then
                Return true
            End If
            ' No.24
            ' 説明:0x37: 数字の7。
            ' 0x37 (Windows-31J)
            ' 0x0037 (UTF-16BE)
            If (argCheck = "7"c) Then
                Return true
            End If
            ' No.25
            ' 説明:0x38: 数字の8。
            ' 0x38 (Windows-31J)
            ' 0x0038 (UTF-16BE)
            If (argCheck = "8"c) Then
                Return true
            End If
            ' No.26
            ' 説明:0x39: 数字の9。
            ' 0x39 (Windows-31J)
            ' 0x0039 (UTF-16BE)
            If (argCheck = "9"c) Then
                Return true
            End If
            ' No.27
            ' 説明:0x3a: コロン。
            ' 0x3a (Windows-31J)
            ' 0x003a (UTF-16BE)
            If (argCheck = ":"c) Then
                Return true
            End If
            ' No.28
            ' 説明:0x3b: セミコロン。
            ' 0x3b (Windows-31J)
            ' 0x003b (UTF-16BE)
            If (argCheck = ";"c) Then
                Return true
            End If
            ' No.29
            ' 0x3c (Windows-31J)
            ' 0x003c (UTF-16BE)
            If (argCheck = "<"c) Then
                Return true
            End If
            ' No.30
            ' 0x3d (Windows-31J)
            ' 0x003d (UTF-16BE)
            If (argCheck = "="c) Then
                Return true
            End If
            ' No.31
            ' 0x3e (Windows-31J)
            ' 0x003e (UTF-16BE)
            If (argCheck = ">"c) Then
                Return true
            End If
            ' No.32
            ' 説明:0x3f
            ' 0x3f (Windows-31J)
            ' 0x003f (UTF-16BE)
            If (argCheck = "?"c) Then
                Return true
            End If
            ' No.33
            ' 説明:0x40: ISO646-USでも＠。
            ' 0x40 (Windows-31J)
            ' 0x0040 (UTF-16BE)
            If (argCheck = "@"c) Then
                Return true
            End If
            ' No.34
            ' 説明:0x41: アルファベットのA
            ' 0x41 (Windows-31J)
            ' 0x0041 (UTF-16BE)
            If (argCheck = "A"c) Then
                Return true
            End If
            ' No.35
            ' 0x42 (Windows-31J)
            ' 0x0042 (UTF-16BE)
            If (argCheck = "B"c) Then
                Return true
            End If
            ' No.36
            ' 0x43 (Windows-31J)
            ' 0x0043 (UTF-16BE)
            If (argCheck = "C"c) Then
                Return true
            End If
            ' No.37
            ' 0x44 (Windows-31J)
            ' 0x0044 (UTF-16BE)
            If (argCheck = "D"c) Then
                Return true
            End If
            ' No.38
            ' 0x45 (Windows-31J)
            ' 0x0045 (UTF-16BE)
            If (argCheck = "E"c) Then
                Return true
            End If
            ' No.39
            ' 0x46 (Windows-31J)
            ' 0x0046 (UTF-16BE)
            If (argCheck = "F"c) Then
                Return true
            End If
            ' No.40
            ' 0x47 (Windows-31J)
            ' 0x0047 (UTF-16BE)
            If (argCheck = "G"c) Then
                Return true
            End If
            ' No.41
            ' 0x48 (Windows-31J)
            ' 0x0048 (UTF-16BE)
            If (argCheck = "H"c) Then
                Return true
            End If
            ' No.42
            ' 0x49 (Windows-31J)
            ' 0x0049 (UTF-16BE)
            If (argCheck = "I"c) Then
                Return true
            End If
            ' No.43
            ' 0x4a (Windows-31J)
            ' 0x004a (UTF-16BE)
            If (argCheck = "J"c) Then
                Return true
            End If
            ' No.44
            ' 0x4b (Windows-31J)
            ' 0x004b (UTF-16BE)
            If (argCheck = "K"c) Then
                Return true
            End If
            ' No.45
            ' 0x4c (Windows-31J)
            ' 0x004c (UTF-16BE)
            If (argCheck = "L"c) Then
                Return true
            End If
            ' No.46
            ' 0x4d (Windows-31J)
            ' 0x004d (UTF-16BE)
            If (argCheck = "M"c) Then
                Return true
            End If
            ' No.47
            ' 0x4e (Windows-31J)
            ' 0x004e (UTF-16BE)
            If (argCheck = "N"c) Then
                Return true
            End If
            ' No.48
            ' 0x4f (Windows-31J)
            ' 0x004f (UTF-16BE)
            If (argCheck = "O"c) Then
                Return true
            End If
            ' No.49
            ' 0x50 (Windows-31J)
            ' 0x0050 (UTF-16BE)
            If (argCheck = "P"c) Then
                Return true
            End If
            ' No.50
            ' 0x51 (Windows-31J)
            ' 0x0051 (UTF-16BE)
            If (argCheck = "Q"c) Then
                Return true
            End If
            ' No.51
            ' 0x52 (Windows-31J)
            ' 0x0052 (UTF-16BE)
            If (argCheck = "R"c) Then
                Return true
            End If
            ' No.52
            ' 0x53 (Windows-31J)
            ' 0x0053 (UTF-16BE)
            If (argCheck = "S"c) Then
                Return true
            End If
            ' No.53
            ' 0x54 (Windows-31J)
            ' 0x0054 (UTF-16BE)
            If (argCheck = "T"c) Then
                Return true
            End If
            ' No.54
            ' 0x55 (Windows-31J)
            ' 0x0055 (UTF-16BE)
            If (argCheck = "U"c) Then
                Return true
            End If
            ' No.55
            ' 0x56 (Windows-31J)
            ' 0x0056 (UTF-16BE)
            If (argCheck = "V"c) Then
                Return true
            End If
            ' No.56
            ' 0x57 (Windows-31J)
            ' 0x0057 (UTF-16BE)
            If (argCheck = "W"c) Then
                Return true
            End If
            ' No.57
            ' 0x58 (Windows-31J)
            ' 0x0058 (UTF-16BE)
            If (argCheck = "X"c) Then
                Return true
            End If
            ' No.58
            ' 0x59 (Windows-31J)
            ' 0x0059 (UTF-16BE)
            If (argCheck = "Y"c) Then
                Return true
            End If
            ' No.59
            ' 説明:0x5a: アルファベットのZ。
            ' 0x5a (Windows-31J)
            ' 0x005a (UTF-16BE)
            If (argCheck = "Z"c) Then
                Return true
            End If
            ' No.60
            ' 説明:0x5b: ISO646-USでも[。
            ' 0x5b (Windows-31J)
            ' 0x005b (UTF-16BE)
            If (argCheck = "["c) Then
                Return true
            End If
            ' No.61
            ' 説明:0x5c: ISO646-USでは＼。ISO646-JP (JIS X 0201)では￥。
            ' 0x5c (Windows-31J)
            ' 0x005c (UTF-16BE)
            If (argCheck = "\"c) Then
                Return true
            End If
            ' No.62
            ' 説明:0x5d: ISO646-USでも]。
            ' 0x5d (Windows-31J)
            ' 0x005d (UTF-16BE)
            If (argCheck = "]"c) Then
                Return true
            End If
            ' No.63
            ' 説明:0x5e: ISO646-USでも^。
            ' 0x5e (Windows-31J)
            ' 0x005e (UTF-16BE)
            If (argCheck = "^"c) Then
                Return true
            End If
            ' No.64
            ' 説明:0x5f
            ' 0x5f (Windows-31J)
            ' 0x005f (UTF-16BE)
            If (argCheck = "_"c) Then
                Return true
            End If
            ' No.65
            ' 説明:0x60: ISO646-USでも`。
            ' 0x60 (Windows-31J)
            ' 0x0060 (UTF-16BE)
            If (argCheck = "`"c) Then
                Return true
            End If
            ' No.66
            ' 説明:0x61: アルファベットのa。
            ' 0x61 (Windows-31J)
            ' 0x0061 (UTF-16BE)
            If (argCheck = "a"c) Then
                Return true
            End If
            ' No.67
            ' 0x62 (Windows-31J)
            ' 0x0062 (UTF-16BE)
            If (argCheck = "b"c) Then
                Return true
            End If
            ' No.68
            ' 0x63 (Windows-31J)
            ' 0x0063 (UTF-16BE)
            If (argCheck = "c"c) Then
                Return true
            End If
            ' No.69
            ' 0x64 (Windows-31J)
            ' 0x0064 (UTF-16BE)
            If (argCheck = "d"c) Then
                Return true
            End If
            ' No.70
            ' 0x65 (Windows-31J)
            ' 0x0065 (UTF-16BE)
            If (argCheck = "e"c) Then
                Return true
            End If
            ' No.71
            ' 0x66 (Windows-31J)
            ' 0x0066 (UTF-16BE)
            If (argCheck = "f"c) Then
                Return true
            End If
            ' No.72
            ' 0x67 (Windows-31J)
            ' 0x0067 (UTF-16BE)
            If (argCheck = "g"c) Then
                Return true
            End If
            ' No.73
            ' 0x68 (Windows-31J)
            ' 0x0068 (UTF-16BE)
            If (argCheck = "h"c) Then
                Return true
            End If
            ' No.74
            ' 0x69 (Windows-31J)
            ' 0x0069 (UTF-16BE)
            If (argCheck = "i"c) Then
                Return true
            End If
            ' No.75
            ' 0x6a (Windows-31J)
            ' 0x006a (UTF-16BE)
            If (argCheck = "j"c) Then
                Return true
            End If
            ' No.76
            ' 0x6b (Windows-31J)
            ' 0x006b (UTF-16BE)
            If (argCheck = "k"c) Then
                Return true
            End If
            ' No.77
            ' 0x6c (Windows-31J)
            ' 0x006c (UTF-16BE)
            If (argCheck = "l"c) Then
                Return true
            End If
            ' No.78
            ' 0x6d (Windows-31J)
            ' 0x006d (UTF-16BE)
            If (argCheck = "m"c) Then
                Return true
            End If
            ' No.79
            ' 0x6e (Windows-31J)
            ' 0x006e (UTF-16BE)
            If (argCheck = "n"c) Then
                Return true
            End If
            ' No.80
            ' 0x6f (Windows-31J)
            ' 0x006f (UTF-16BE)
            If (argCheck = "o"c) Then
                Return true
            End If
            ' No.81
            ' 0x70 (Windows-31J)
            ' 0x0070 (UTF-16BE)
            If (argCheck = "p"c) Then
                Return true
            End If
            ' No.82
            ' 0x71 (Windows-31J)
            ' 0x0071 (UTF-16BE)
            If (argCheck = "q"c) Then
                Return true
            End If
            ' No.83
            ' 0x72 (Windows-31J)
            ' 0x0072 (UTF-16BE)
            If (argCheck = "r"c) Then
                Return true
            End If
            ' No.84
            ' 0x73 (Windows-31J)
            ' 0x0073 (UTF-16BE)
            If (argCheck = "s"c) Then
                Return true
            End If
            ' No.85
            ' 0x74 (Windows-31J)
            ' 0x0074 (UTF-16BE)
            If (argCheck = "t"c) Then
                Return true
            End If
            ' No.86
            ' 0x75 (Windows-31J)
            ' 0x0075 (UTF-16BE)
            If (argCheck = "u"c) Then
                Return true
            End If
            ' No.87
            ' 0x76 (Windows-31J)
            ' 0x0076 (UTF-16BE)
            If (argCheck = "v"c) Then
                Return true
            End If
            ' No.88
            ' 0x77 (Windows-31J)
            ' 0x0077 (UTF-16BE)
            If (argCheck = "w"c) Then
                Return true
            End If
            ' No.89
            ' 0x78 (Windows-31J)
            ' 0x0078 (UTF-16BE)
            If (argCheck = "x"c) Then
                Return true
            End If
            ' No.90
            ' 説明:0x79
            ' 0x79 (Windows-31J)
            ' 0x0079 (UTF-16BE)
            If (argCheck = "y"c) Then
                Return true
            End If
            ' No.91
            ' 説明:0x7a: アルファベットのz。
            ' 0x7a (Windows-31J)
            ' 0x007a (UTF-16BE)
            If (argCheck = "z"c) Then
                Return true
            End If
            ' No.92
            ' 説明:0x7b: ISO646-USでも{。
            ' 0x7b (Windows-31J)
            ' 0x007b (UTF-16BE)
            If (argCheck = "{"c) Then
                Return true
            End If
            ' No.93
            ' 説明:0x7c: ISO646-USでも|。
            ' 0x7c (Windows-31J)
            ' 0x007c (UTF-16BE)
            If (argCheck = "|"c) Then
                Return true
            End If
            ' No.94
            ' 説明:0x7d: ISO646-USでも}。
            ' 0x7d (Windows-31J)
            ' 0x007d (UTF-16BE)
            If (argCheck = "}"c) Then
                Return true
            End If
            ' No.95
            ' 説明:0x7e: ISO646-USでは〜。ISO646-JP (JIS X 0201)では￣。
            ' 0x7e (Windows-31J)
            ' 0x007e (UTF-16BE)
            If (argCheck = "~"c) Then
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

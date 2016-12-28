' このソースコードは blanco Frameworkによって自動生成されています。
Imports System

Namespace blanco.sample.charactergroup
    ''' <summary>半角カタカナのサンプル。blancoCharacterGroupの実装には影響しません。</summary>
    Public Class SampleHanKatakanaCharacterGroup

        ''' <summary>文字グループに含まれる文字であるかどうかを判定します。</summary>
        ''' <param name="argCheck">チェックを行いたい文字。</param>
        ''' <returns>文字グループに含まれていればture。グループに含まれない文字であればfalse。</returns>
        Public Function Match(argCheck As Char) As Boolean
            ' No.2
            ' 説明:a1: 句読点
            ' 0xa1 (Windows-31J)
            ' 0xff61 (UTF-16BE)
            If (argCheck = "｡"c) Then
                Return true
            End If
            ' No.3
            ' 説明:a2: 半角のカギカッコ。
            ' 0xa2 (Windows-31J)
            ' 0xff62 (UTF-16BE)
            If (argCheck = "｢"c) Then
                Return true
            End If
            ' No.4
            ' 説明:a3: 半角のカギカッコ。
            ' 0xa3 (Windows-31J)
            ' 0xff63 (UTF-16BE)
            If (argCheck = "｣"c) Then
                Return true
            End If
            ' No.5
            ' 説明:a4: 句読点
            ' 0xa4 (Windows-31J)
            ' 0xff64 (UTF-16BE)
            If (argCheck = "､"c) Then
                Return true
            End If
            ' No.6
            ' 説明:a5: 半角の中黒
            ' 0xa5 (Windows-31J)
            ' 0xff65 (UTF-16BE)
            If (argCheck = "･"c) Then
                Return true
            End If
            ' No.8
            ' 説明:a7: 小さいカタカナ。ァ。
            ' 0xa7 (Windows-31J)
            ' 0xff67 (UTF-16BE)
            If (argCheck = "ｧ"c) Then
                Return true
            End If
            ' No.9
            ' 説明:a8: 小さいカタカナ
            ' 0xa8 (Windows-31J)
            ' 0xff68 (UTF-16BE)
            If (argCheck = "ｨ"c) Then
                Return true
            End If
            ' No.10
            ' 説明:a9: 小さいカタカナ
            ' 0xa9 (Windows-31J)
            ' 0xff69 (UTF-16BE)
            If (argCheck = "ｩ"c) Then
                Return true
            End If
            ' No.11
            ' 説明:aa: 小さいカタカナ
            ' 0xaa (Windows-31J)
            ' 0xff6a (UTF-16BE)
            If (argCheck = "ｪ"c) Then
                Return true
            End If
            ' No.12
            ' 説明:ab: 小さいカタカナ
            ' 0xab (Windows-31J)
            ' 0xff6b (UTF-16BE)
            If (argCheck = "ｫ"c) Then
                Return true
            End If
            ' No.13
            ' 説明:ac: 小さいカタカナ
            ' 0xac (Windows-31J)
            ' 0xff6c (UTF-16BE)
            If (argCheck = "ｬ"c) Then
                Return true
            End If
            ' No.14
            ' 説明:ad: 小さいカタカナ
            ' 0xad (Windows-31J)
            ' 0xff6d (UTF-16BE)
            If (argCheck = "ｭ"c) Then
                Return true
            End If
            ' No.15
            ' 説明:ae: 小さいカタカナ。ョ。
            ' 0xae (Windows-31J)
            ' 0xff6e (UTF-16BE)
            If (argCheck = "ｮ"c) Then
                Return true
            End If
            ' No.16
            ' 説明:af: 小さいカタカナ。ッ。ョの次に定義しています。
            ' 0xaf (Windows-31J)
            ' 0xff6f (UTF-16BE)
            If (argCheck = "ｯ"c) Then
                Return true
            End If
            ' No.17
            ' 説明:b0: 半角の伸ばす。－。
            ' 0xb0 (Windows-31J)
            ' 0xff70 (UTF-16BE)
            If (argCheck = "ｰ"c) Then
                Return true
            End If
            ' No.18
            ' 説明:b1: カタカナ。ア。
            ' 0xb1 (Windows-31J)
            ' 0xff71 (UTF-16BE)
            If (argCheck = "ｱ"c) Then
                Return true
            End If
            ' No.19
            ' 説明:b2: カタカナ
            ' 0xb2 (Windows-31J)
            ' 0xff72 (UTF-16BE)
            If (argCheck = "ｲ"c) Then
                Return true
            End If
            ' No.20
            ' 説明:b3: カタカナ
            ' 0xb3 (Windows-31J)
            ' 0xff73 (UTF-16BE)
            If (argCheck = "ｳ"c) Then
                Return true
            End If
            ' No.21
            ' 説明:b4: カタカナ
            ' 0xb4 (Windows-31J)
            ' 0xff74 (UTF-16BE)
            If (argCheck = "ｴ"c) Then
                Return true
            End If
            ' No.22
            ' 説明:b5: カタカナ
            ' 0xb5 (Windows-31J)
            ' 0xff75 (UTF-16BE)
            If (argCheck = "ｵ"c) Then
                Return true
            End If
            ' No.23
            ' 説明:b6: カタカナ
            ' 0xb6 (Windows-31J)
            ' 0xff76 (UTF-16BE)
            If (argCheck = "ｶ"c) Then
                Return true
            End If
            ' No.24
            ' 説明:b7: カタカナ
            ' 0xb7 (Windows-31J)
            ' 0xff77 (UTF-16BE)
            If (argCheck = "ｷ"c) Then
                Return true
            End If
            ' No.25
            ' 説明:b8: カタカナ
            ' 0xb8 (Windows-31J)
            ' 0xff78 (UTF-16BE)
            If (argCheck = "ｸ"c) Then
                Return true
            End If
            ' No.26
            ' 説明:b9: カタカナ
            ' 0xb9 (Windows-31J)
            ' 0xff79 (UTF-16BE)
            If (argCheck = "ｹ"c) Then
                Return true
            End If
            ' No.27
            ' 説明:ba: カタカナ
            ' 0xba (Windows-31J)
            ' 0xff7a (UTF-16BE)
            If (argCheck = "ｺ"c) Then
                Return true
            End If
            ' No.28
            ' 説明:bb: カタカナ
            ' 0xbb (Windows-31J)
            ' 0xff7b (UTF-16BE)
            If (argCheck = "ｻ"c) Then
                Return true
            End If
            ' No.29
            ' 説明:bc: カタカナ
            ' 0xbc (Windows-31J)
            ' 0xff7c (UTF-16BE)
            If (argCheck = "ｼ"c) Then
                Return true
            End If
            ' No.30
            ' 説明:bd: カタカナ
            ' 0xbd (Windows-31J)
            ' 0xff7d (UTF-16BE)
            If (argCheck = "ｽ"c) Then
                Return true
            End If
            ' No.31
            ' 説明:be: カタカナ
            ' 0xbe (Windows-31J)
            ' 0xff7e (UTF-16BE)
            If (argCheck = "ｾ"c) Then
                Return true
            End If
            ' No.32
            ' 説明:bf: カタカナ
            ' 0xbf (Windows-31J)
            ' 0xff7f (UTF-16BE)
            If (argCheck = "ｿ"c) Then
                Return true
            End If
            ' No.33
            ' 説明:c0: カタカナ
            ' 0xc0 (Windows-31J)
            ' 0xff80 (UTF-16BE)
            If (argCheck = "ﾀ"c) Then
                Return true
            End If
            ' No.34
            ' 説明:c1: カタカナ
            ' 0xc1 (Windows-31J)
            ' 0xff81 (UTF-16BE)
            If (argCheck = "ﾁ"c) Then
                Return true
            End If
            ' No.35
            ' 説明:c2: カタカナ
            ' 0xc2 (Windows-31J)
            ' 0xff82 (UTF-16BE)
            If (argCheck = "ﾂ"c) Then
                Return true
            End If
            ' No.36
            ' 説明:c3: カタカナ
            ' 0xc3 (Windows-31J)
            ' 0xff83 (UTF-16BE)
            If (argCheck = "ﾃ"c) Then
                Return true
            End If
            ' No.37
            ' 説明:c4: カタカナ
            ' 0xc4 (Windows-31J)
            ' 0xff84 (UTF-16BE)
            If (argCheck = "ﾄ"c) Then
                Return true
            End If
            ' No.38
            ' 説明:c5: カタカナ
            ' 0xc5 (Windows-31J)
            ' 0xff85 (UTF-16BE)
            If (argCheck = "ﾅ"c) Then
                Return true
            End If
            ' No.39
            ' 説明:c6: カタカナ
            ' 0xc6 (Windows-31J)
            ' 0xff86 (UTF-16BE)
            If (argCheck = "ﾆ"c) Then
                Return true
            End If
            ' No.40
            ' 説明:c7: カタカナ
            ' 0xc7 (Windows-31J)
            ' 0xff87 (UTF-16BE)
            If (argCheck = "ﾇ"c) Then
                Return true
            End If
            ' No.41
            ' 説明:c8: カタカナ
            ' 0xc8 (Windows-31J)
            ' 0xff88 (UTF-16BE)
            If (argCheck = "ﾈ"c) Then
                Return true
            End If
            ' No.42
            ' 説明:c9: カタカナ
            ' 0xc9 (Windows-31J)
            ' 0xff89 (UTF-16BE)
            If (argCheck = "ﾉ"c) Then
                Return true
            End If
            ' No.43
            ' 説明:ca: カタカナ
            ' 0xca (Windows-31J)
            ' 0xff8a (UTF-16BE)
            If (argCheck = "ﾊ"c) Then
                Return true
            End If
            ' No.44
            ' 説明:cb: カタカナ
            ' 0xcb (Windows-31J)
            ' 0xff8b (UTF-16BE)
            If (argCheck = "ﾋ"c) Then
                Return true
            End If
            ' No.45
            ' 説明:cc: カタカナ
            ' 0xcc (Windows-31J)
            ' 0xff8c (UTF-16BE)
            If (argCheck = "ﾌ"c) Then
                Return true
            End If
            ' No.46
            ' 説明:cd: カタカナ
            ' 0xcd (Windows-31J)
            ' 0xff8d (UTF-16BE)
            If (argCheck = "ﾍ"c) Then
                Return true
            End If
            ' No.47
            ' 説明:ce: カタカナ
            ' 0xce (Windows-31J)
            ' 0xff8e (UTF-16BE)
            If (argCheck = "ﾎ"c) Then
                Return true
            End If
            ' No.48
            ' 説明:cf: カタカナ
            ' 0xcf (Windows-31J)
            ' 0xff8f (UTF-16BE)
            If (argCheck = "ﾏ"c) Then
                Return true
            End If
            ' No.49
            ' 説明:d0: カタカナ
            ' 0xd0 (Windows-31J)
            ' 0xff90 (UTF-16BE)
            If (argCheck = "ﾐ"c) Then
                Return true
            End If
            ' No.50
            ' 説明:d1: カタカナ
            ' 0xd1 (Windows-31J)
            ' 0xff91 (UTF-16BE)
            If (argCheck = "ﾑ"c) Then
                Return true
            End If
            ' No.51
            ' 説明:d2: カタカナ
            ' 0xd2 (Windows-31J)
            ' 0xff92 (UTF-16BE)
            If (argCheck = "ﾒ"c) Then
                Return true
            End If
            ' No.52
            ' 説明:d3: カタカナ
            ' 0xd3 (Windows-31J)
            ' 0xff93 (UTF-16BE)
            If (argCheck = "ﾓ"c) Then
                Return true
            End If
            ' No.53
            ' 説明:d4: カタカナ
            ' 0xd4 (Windows-31J)
            ' 0xff94 (UTF-16BE)
            If (argCheck = "ﾔ"c) Then
                Return true
            End If
            ' No.54
            ' 説明:d5: カタカナ
            ' 0xd5 (Windows-31J)
            ' 0xff95 (UTF-16BE)
            If (argCheck = "ﾕ"c) Then
                Return true
            End If
            ' No.55
            ' 説明:d6: カタカナ
            ' 0xd6 (Windows-31J)
            ' 0xff96 (UTF-16BE)
            If (argCheck = "ﾖ"c) Then
                Return true
            End If
            ' No.56
            ' 説明:d7: カタカナ
            ' 0xd7 (Windows-31J)
            ' 0xff97 (UTF-16BE)
            If (argCheck = "ﾗ"c) Then
                Return true
            End If
            ' No.57
            ' 説明:d8: カタカナ
            ' 0xd8 (Windows-31J)
            ' 0xff98 (UTF-16BE)
            If (argCheck = "ﾘ"c) Then
                Return true
            End If
            ' No.58
            ' 説明:d9: カタカナ
            ' 0xd9 (Windows-31J)
            ' 0xff99 (UTF-16BE)
            If (argCheck = "ﾙ"c) Then
                Return true
            End If
            ' No.59
            ' 説明:da: カタカナ
            ' 0xda (Windows-31J)
            ' 0xff9a (UTF-16BE)
            If (argCheck = "ﾚ"c) Then
                Return true
            End If
            ' No.60
            ' 説明:db: カタカナ
            ' 0xdb (Windows-31J)
            ' 0xff9b (UTF-16BE)
            If (argCheck = "ﾛ"c) Then
                Return true
            End If
            ' No.61
            ' 説明:dc: カタカナ。ワ。
            ' 0xdc (Windows-31J)
            ' 0xff9c (UTF-16BE)
            If (argCheck = "ﾜ"c) Then
                Return true
            End If
            ' No.62
            ' 説明:a6: カタカナ。ヲ。MS932におけるコード順としては 小さいアより前に位置します。
            ' 0xa6 (Windows-31J)
            ' 0xff66 (UTF-16BE)
            If (argCheck = "ｦ"c) Then
                Return true
            End If
            ' No.63
            ' 説明:dd: カタカナ。ン。
            ' 0xdd (Windows-31J)
            ' 0xff9d (UTF-16BE)
            If (argCheck = "ﾝ"c) Then
                Return true
            End If
            ' No.64
            ' 説明:de: 濁音
            ' 0xde (Windows-31J)
            ' 0xff9e (UTF-16BE)
            If (argCheck = "ﾞ"c) Then
                Return true
            End If
            ' No.65
            ' 説明:df: 濁音
            ' 0xdf (Windows-31J)
            ' 0xff9f (UTF-16BE)
            If (argCheck = "ﾟ"c) Then
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

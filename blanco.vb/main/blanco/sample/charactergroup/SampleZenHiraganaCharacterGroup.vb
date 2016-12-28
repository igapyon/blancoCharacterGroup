' このソースコードは blanco Frameworkによって自動生成されています。
Imports System

Namespace blanco.sample.charactergroup
    ''' <summary>全角ひらがなのサンプル。blancoCharacterGroupの実装には影響しません。</summary>
    Public Class SampleZenHiraganaCharacterGroup

        ''' <summary>文字グループに含まれる文字であるかどうかを判定します。</summary>
        ''' <param name="argCheck">チェックを行いたい文字。</param>
        ''' <returns>文字グループに含まれていればture。グループに含まれない文字であればfalse。</returns>
        Public Function Match(argCheck As Char) As Boolean
            ' No.1
            ' 説明:829f: ひらがな。ぁ。
            ' 0x829f (Windows-31J)
            ' 0x3041 (UTF-16BE)
            If (argCheck = "ぁ"c) Then
                Return true
            End If
            ' No.2
            ' 説明:82a0: ひらがな。あ。
            ' 0x82a0 (Windows-31J)
            ' 0x3042 (UTF-16BE)
            If (argCheck = "あ"c) Then
                Return true
            End If
            ' No.3
            ' 0x82a1 (Windows-31J)
            ' 0x3043 (UTF-16BE)
            If (argCheck = "ぃ"c) Then
                Return true
            End If
            ' No.4
            ' 0x82a2 (Windows-31J)
            ' 0x3044 (UTF-16BE)
            If (argCheck = "い"c) Then
                Return true
            End If
            ' No.5
            ' 0x82a3 (Windows-31J)
            ' 0x3045 (UTF-16BE)
            If (argCheck = "ぅ"c) Then
                Return true
            End If
            ' No.6
            ' 0x82a4 (Windows-31J)
            ' 0x3046 (UTF-16BE)
            If (argCheck = "う"c) Then
                Return true
            End If
            ' No.7
            ' 0x82a5 (Windows-31J)
            ' 0x3047 (UTF-16BE)
            If (argCheck = "ぇ"c) Then
                Return true
            End If
            ' No.8
            ' 0x82a6 (Windows-31J)
            ' 0x3048 (UTF-16BE)
            If (argCheck = "え"c) Then
                Return true
            End If
            ' No.9
            ' 0x82a7 (Windows-31J)
            ' 0x3049 (UTF-16BE)
            If (argCheck = "ぉ"c) Then
                Return true
            End If
            ' No.10
            ' 0x82a8 (Windows-31J)
            ' 0x304a (UTF-16BE)
            If (argCheck = "お"c) Then
                Return true
            End If
            ' No.11
            ' 0x82a9 (Windows-31J)
            ' 0x304b (UTF-16BE)
            If (argCheck = "か"c) Then
                Return true
            End If
            ' No.12
            ' 0x82aa (Windows-31J)
            ' 0x304c (UTF-16BE)
            If (argCheck = "が"c) Then
                Return true
            End If
            ' No.13
            ' 0x82ab (Windows-31J)
            ' 0x304d (UTF-16BE)
            If (argCheck = "き"c) Then
                Return true
            End If
            ' No.14
            ' 0x82ac (Windows-31J)
            ' 0x304e (UTF-16BE)
            If (argCheck = "ぎ"c) Then
                Return true
            End If
            ' No.15
            ' 0x82ad (Windows-31J)
            ' 0x304f (UTF-16BE)
            If (argCheck = "く"c) Then
                Return true
            End If
            ' No.16
            ' 0x82ae (Windows-31J)
            ' 0x3050 (UTF-16BE)
            If (argCheck = "ぐ"c) Then
                Return true
            End If
            ' No.17
            ' 0x82af (Windows-31J)
            ' 0x3051 (UTF-16BE)
            If (argCheck = "け"c) Then
                Return true
            End If
            ' No.18
            ' 0x82b0 (Windows-31J)
            ' 0x3052 (UTF-16BE)
            If (argCheck = "げ"c) Then
                Return true
            End If
            ' No.19
            ' 0x82b1 (Windows-31J)
            ' 0x3053 (UTF-16BE)
            If (argCheck = "こ"c) Then
                Return true
            End If
            ' No.20
            ' 0x82b2 (Windows-31J)
            ' 0x3054 (UTF-16BE)
            If (argCheck = "ご"c) Then
                Return true
            End If
            ' No.21
            ' 0x82b3 (Windows-31J)
            ' 0x3055 (UTF-16BE)
            If (argCheck = "さ"c) Then
                Return true
            End If
            ' No.22
            ' 0x82b4 (Windows-31J)
            ' 0x3056 (UTF-16BE)
            If (argCheck = "ざ"c) Then
                Return true
            End If
            ' No.23
            ' 0x82b5 (Windows-31J)
            ' 0x3057 (UTF-16BE)
            If (argCheck = "し"c) Then
                Return true
            End If
            ' No.24
            ' 0x82b6 (Windows-31J)
            ' 0x3058 (UTF-16BE)
            If (argCheck = "じ"c) Then
                Return true
            End If
            ' No.25
            ' 0x82b7 (Windows-31J)
            ' 0x3059 (UTF-16BE)
            If (argCheck = "す"c) Then
                Return true
            End If
            ' No.26
            ' 0x82b8 (Windows-31J)
            ' 0x305a (UTF-16BE)
            If (argCheck = "ず"c) Then
                Return true
            End If
            ' No.27
            ' 0x82b9 (Windows-31J)
            ' 0x305b (UTF-16BE)
            If (argCheck = "せ"c) Then
                Return true
            End If
            ' No.28
            ' 0x82ba (Windows-31J)
            ' 0x305c (UTF-16BE)
            If (argCheck = "ぜ"c) Then
                Return true
            End If
            ' No.29
            ' 0x82bb (Windows-31J)
            ' 0x305d (UTF-16BE)
            If (argCheck = "そ"c) Then
                Return true
            End If
            ' No.30
            ' 0x82bc (Windows-31J)
            ' 0x305e (UTF-16BE)
            If (argCheck = "ぞ"c) Then
                Return true
            End If
            ' No.31
            ' 0x82bd (Windows-31J)
            ' 0x305f (UTF-16BE)
            If (argCheck = "た"c) Then
                Return true
            End If
            ' No.32
            ' 0x82be (Windows-31J)
            ' 0x3060 (UTF-16BE)
            If (argCheck = "だ"c) Then
                Return true
            End If
            ' No.33
            ' 0x82bf (Windows-31J)
            ' 0x3061 (UTF-16BE)
            If (argCheck = "ち"c) Then
                Return true
            End If
            ' No.34
            ' 0x82c0 (Windows-31J)
            ' 0x3062 (UTF-16BE)
            If (argCheck = "ぢ"c) Then
                Return true
            End If
            ' No.35
            ' 0x82c1 (Windows-31J)
            ' 0x3063 (UTF-16BE)
            If (argCheck = "っ"c) Then
                Return true
            End If
            ' No.36
            ' 0x82c2 (Windows-31J)
            ' 0x3064 (UTF-16BE)
            If (argCheck = "つ"c) Then
                Return true
            End If
            ' No.37
            ' 0x82c3 (Windows-31J)
            ' 0x3065 (UTF-16BE)
            If (argCheck = "づ"c) Then
                Return true
            End If
            ' No.38
            ' 0x82c4 (Windows-31J)
            ' 0x3066 (UTF-16BE)
            If (argCheck = "て"c) Then
                Return true
            End If
            ' No.39
            ' 0x82c5 (Windows-31J)
            ' 0x3067 (UTF-16BE)
            If (argCheck = "で"c) Then
                Return true
            End If
            ' No.40
            ' 0x82c6 (Windows-31J)
            ' 0x3068 (UTF-16BE)
            If (argCheck = "と"c) Then
                Return true
            End If
            ' No.41
            ' 0x82c7 (Windows-31J)
            ' 0x3069 (UTF-16BE)
            If (argCheck = "ど"c) Then
                Return true
            End If
            ' No.42
            ' 0x82c8 (Windows-31J)
            ' 0x306a (UTF-16BE)
            If (argCheck = "な"c) Then
                Return true
            End If
            ' No.43
            ' 0x82c9 (Windows-31J)
            ' 0x306b (UTF-16BE)
            If (argCheck = "に"c) Then
                Return true
            End If
            ' No.44
            ' 0x82ca (Windows-31J)
            ' 0x306c (UTF-16BE)
            If (argCheck = "ぬ"c) Then
                Return true
            End If
            ' No.45
            ' 0x82cb (Windows-31J)
            ' 0x306d (UTF-16BE)
            If (argCheck = "ね"c) Then
                Return true
            End If
            ' No.46
            ' 0x82cc (Windows-31J)
            ' 0x306e (UTF-16BE)
            If (argCheck = "の"c) Then
                Return true
            End If
            ' No.47
            ' 0x82cd (Windows-31J)
            ' 0x306f (UTF-16BE)
            If (argCheck = "は"c) Then
                Return true
            End If
            ' No.48
            ' 0x82ce (Windows-31J)
            ' 0x3070 (UTF-16BE)
            If (argCheck = "ば"c) Then
                Return true
            End If
            ' No.49
            ' 0x82cf (Windows-31J)
            ' 0x3071 (UTF-16BE)
            If (argCheck = "ぱ"c) Then
                Return true
            End If
            ' No.50
            ' 0x82d0 (Windows-31J)
            ' 0x3072 (UTF-16BE)
            If (argCheck = "ひ"c) Then
                Return true
            End If
            ' No.51
            ' 0x82d1 (Windows-31J)
            ' 0x3073 (UTF-16BE)
            If (argCheck = "び"c) Then
                Return true
            End If
            ' No.52
            ' 0x82d2 (Windows-31J)
            ' 0x3074 (UTF-16BE)
            If (argCheck = "ぴ"c) Then
                Return true
            End If
            ' No.53
            ' 0x82d3 (Windows-31J)
            ' 0x3075 (UTF-16BE)
            If (argCheck = "ふ"c) Then
                Return true
            End If
            ' No.54
            ' 0x82d4 (Windows-31J)
            ' 0x3076 (UTF-16BE)
            If (argCheck = "ぶ"c) Then
                Return true
            End If
            ' No.55
            ' 0x82d5 (Windows-31J)
            ' 0x3077 (UTF-16BE)
            If (argCheck = "ぷ"c) Then
                Return true
            End If
            ' No.56
            ' 0x82d6 (Windows-31J)
            ' 0x3078 (UTF-16BE)
            If (argCheck = "へ"c) Then
                Return true
            End If
            ' No.57
            ' 0x82d7 (Windows-31J)
            ' 0x3079 (UTF-16BE)
            If (argCheck = "べ"c) Then
                Return true
            End If
            ' No.58
            ' 0x82d8 (Windows-31J)
            ' 0x307a (UTF-16BE)
            If (argCheck = "ぺ"c) Then
                Return true
            End If
            ' No.59
            ' 0x82d9 (Windows-31J)
            ' 0x307b (UTF-16BE)
            If (argCheck = "ほ"c) Then
                Return true
            End If
            ' No.60
            ' 0x82da (Windows-31J)
            ' 0x307c (UTF-16BE)
            If (argCheck = "ぼ"c) Then
                Return true
            End If
            ' No.61
            ' 0x82db (Windows-31J)
            ' 0x307d (UTF-16BE)
            If (argCheck = "ぽ"c) Then
                Return true
            End If
            ' No.62
            ' 0x82dc (Windows-31J)
            ' 0x307e (UTF-16BE)
            If (argCheck = "ま"c) Then
                Return true
            End If
            ' No.63
            ' 0x82dd (Windows-31J)
            ' 0x307f (UTF-16BE)
            If (argCheck = "み"c) Then
                Return true
            End If
            ' No.64
            ' 0x82de (Windows-31J)
            ' 0x3080 (UTF-16BE)
            If (argCheck = "む"c) Then
                Return true
            End If
            ' No.65
            ' 0x82df (Windows-31J)
            ' 0x3081 (UTF-16BE)
            If (argCheck = "め"c) Then
                Return true
            End If
            ' No.66
            ' 0x82e0 (Windows-31J)
            ' 0x3082 (UTF-16BE)
            If (argCheck = "も"c) Then
                Return true
            End If
            ' No.67
            ' 0x82e1 (Windows-31J)
            ' 0x3083 (UTF-16BE)
            If (argCheck = "ゃ"c) Then
                Return true
            End If
            ' No.68
            ' 0x82e2 (Windows-31J)
            ' 0x3084 (UTF-16BE)
            If (argCheck = "や"c) Then
                Return true
            End If
            ' No.69
            ' 0x82e3 (Windows-31J)
            ' 0x3085 (UTF-16BE)
            If (argCheck = "ゅ"c) Then
                Return true
            End If
            ' No.70
            ' 0x82e4 (Windows-31J)
            ' 0x3086 (UTF-16BE)
            If (argCheck = "ゆ"c) Then
                Return true
            End If
            ' No.71
            ' 0x82e5 (Windows-31J)
            ' 0x3087 (UTF-16BE)
            If (argCheck = "ょ"c) Then
                Return true
            End If
            ' No.72
            ' 0x82e6 (Windows-31J)
            ' 0x3088 (UTF-16BE)
            If (argCheck = "よ"c) Then
                Return true
            End If
            ' No.73
            ' 0x82e7 (Windows-31J)
            ' 0x3089 (UTF-16BE)
            If (argCheck = "ら"c) Then
                Return true
            End If
            ' No.74
            ' 0x82e8 (Windows-31J)
            ' 0x308a (UTF-16BE)
            If (argCheck = "り"c) Then
                Return true
            End If
            ' No.75
            ' 0x82e9 (Windows-31J)
            ' 0x308b (UTF-16BE)
            If (argCheck = "る"c) Then
                Return true
            End If
            ' No.76
            ' 0x82ea (Windows-31J)
            ' 0x308c (UTF-16BE)
            If (argCheck = "れ"c) Then
                Return true
            End If
            ' No.77
            ' 0x82eb (Windows-31J)
            ' 0x308d (UTF-16BE)
            If (argCheck = "ろ"c) Then
                Return true
            End If
            ' No.78
            ' 0x82ec (Windows-31J)
            ' 0x308e (UTF-16BE)
            If (argCheck = "ゎ"c) Then
                Return true
            End If
            ' No.79
            ' 0x82ed (Windows-31J)
            ' 0x308f (UTF-16BE)
            If (argCheck = "わ"c) Then
                Return true
            End If
            ' No.80
            ' 0x82ee (Windows-31J)
            ' 0x3090 (UTF-16BE)
            If (argCheck = "ゐ"c) Then
                Return true
            End If
            ' No.81
            ' 0x82ef (Windows-31J)
            ' 0x3091 (UTF-16BE)
            If (argCheck = "ゑ"c) Then
                Return true
            End If
            ' No.82
            ' 0x82f0 (Windows-31J)
            ' 0x3092 (UTF-16BE)
            If (argCheck = "を"c) Then
                Return true
            End If
            ' No.83
            ' 説明:82f1: ひらがな。ん。
            ' 0x82f1 (Windows-31J)
            ' 0x3093 (UTF-16BE)
            If (argCheck = "ん"c) Then
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

' このソースコードは blanco Frameworkによって自動生成されています。
Imports System

Namespace blanco.sample.charactergroup
    ''' <summary>サンプル。NEC特殊文字 0x8740-879C。13区。blancoCharacterGroupの実装には影響しません。</summary>
    Public Class SampleNecTokusyuMojiCharacterGroup

        ''' <summary>文字グループに含まれる文字であるかどうかを判定します。</summary>
        ''' <param name="argCheck">チェックを行いたい文字。</param>
        ''' <returns>文字グループに含まれていればture。グループに含まれない文字であればfalse。</returns>
        Public Function Match(argCheck As Char) As Boolean
            ' No.1
            ' 説明:8740: まる１。
            ' 0x8740 (Windows-31J)
            ' 0x2460 (UTF-16BE)
            If (argCheck = "�@"c) Then
                Return true
            End If
            ' No.2
            ' 0x8741 (Windows-31J)
            ' 0x2461 (UTF-16BE)
            If (argCheck = "�A"c) Then
                Return true
            End If
            ' No.3
            ' 0x8742 (Windows-31J)
            ' 0x2462 (UTF-16BE)
            If (argCheck = "�B"c) Then
                Return true
            End If
            ' No.4
            ' 0x8743 (Windows-31J)
            ' 0x2463 (UTF-16BE)
            If (argCheck = "�C"c) Then
                Return true
            End If
            ' No.5
            ' 0x8744 (Windows-31J)
            ' 0x2464 (UTF-16BE)
            If (argCheck = "�D"c) Then
                Return true
            End If
            ' No.6
            ' 0x8745 (Windows-31J)
            ' 0x2465 (UTF-16BE)
            If (argCheck = "�E"c) Then
                Return true
            End If
            ' No.7
            ' 0x8746 (Windows-31J)
            ' 0x2466 (UTF-16BE)
            If (argCheck = "�F"c) Then
                Return true
            End If
            ' No.8
            ' 0x8747 (Windows-31J)
            ' 0x2467 (UTF-16BE)
            If (argCheck = "�G"c) Then
                Return true
            End If
            ' No.9
            ' 0x8748 (Windows-31J)
            ' 0x2468 (UTF-16BE)
            If (argCheck = "�H"c) Then
                Return true
            End If
            ' No.10
            ' 0x8749 (Windows-31J)
            ' 0x2469 (UTF-16BE)
            If (argCheck = "�I"c) Then
                Return true
            End If
            ' No.11
            ' 0x874a (Windows-31J)
            ' 0x246a (UTF-16BE)
            If (argCheck = "�J"c) Then
                Return true
            End If
            ' No.12
            ' 0x874b (Windows-31J)
            ' 0x246b (UTF-16BE)
            If (argCheck = "�K"c) Then
                Return true
            End If
            ' No.13
            ' 0x874c (Windows-31J)
            ' 0x246c (UTF-16BE)
            If (argCheck = "�L"c) Then
                Return true
            End If
            ' No.14
            ' 0x874d (Windows-31J)
            ' 0x246d (UTF-16BE)
            If (argCheck = "�M"c) Then
                Return true
            End If
            ' No.15
            ' 0x874e (Windows-31J)
            ' 0x246e (UTF-16BE)
            If (argCheck = "�N"c) Then
                Return true
            End If
            ' No.16
            ' 0x874f (Windows-31J)
            ' 0x246f (UTF-16BE)
            If (argCheck = "�O"c) Then
                Return true
            End If
            ' No.17
            ' 0x8750 (Windows-31J)
            ' 0x2470 (UTF-16BE)
            If (argCheck = "�P"c) Then
                Return true
            End If
            ' No.18
            ' 0x8751 (Windows-31J)
            ' 0x2471 (UTF-16BE)
            If (argCheck = "�Q"c) Then
                Return true
            End If
            ' No.19
            ' 0x8752 (Windows-31J)
            ' 0x2472 (UTF-16BE)
            If (argCheck = "�R"c) Then
                Return true
            End If
            ' No.20
            ' 説明:8753: まる２０。
            ' 0x8753 (Windows-31J)
            ' 0x2473 (UTF-16BE)
            If (argCheck = "�S"c) Then
                Return true
            End If
            ' No.21
            ' 説明:8754: ローマ数字１。(IBM拡張文字から参照されています)  (※重複符号化)
            ' 0x8754 (Windows-31J)
            ' 0x2160 (UTF-16BE)
            If (argCheck = "�T"c) Then
                Return true
            End If
            ' No.22
            ' 説明:ローマ数字。(IBM拡張文字から参照されています)  (※重複符号化)
            ' 0x8755 (Windows-31J)
            ' 0x2161 (UTF-16BE)
            If (argCheck = "�U"c) Then
                Return true
            End If
            ' No.23
            ' 説明:ローマ数字。(IBM拡張文字から参照されています)  (※重複符号化)
            ' 0x8756 (Windows-31J)
            ' 0x2162 (UTF-16BE)
            If (argCheck = "�V"c) Then
                Return true
            End If
            ' No.24
            ' 説明:ローマ数字。(IBM拡張文字から参照されています)  (※重複符号化)
            ' 0x8757 (Windows-31J)
            ' 0x2163 (UTF-16BE)
            If (argCheck = "�W"c) Then
                Return true
            End If
            ' No.25
            ' 説明:ローマ数字。(IBM拡張文字から参照されています)  (※重複符号化)
            ' 0x8758 (Windows-31J)
            ' 0x2164 (UTF-16BE)
            If (argCheck = "�X"c) Then
                Return true
            End If
            ' No.26
            ' 説明:ローマ数字。(IBM拡張文字から参照されています)  (※重複符号化)
            ' 0x8759 (Windows-31J)
            ' 0x2165 (UTF-16BE)
            If (argCheck = "�Y"c) Then
                Return true
            End If
            ' No.27
            ' 説明:ローマ数字。(IBM拡張文字から参照されています)  (※重複符号化)
            ' 0x875a (Windows-31J)
            ' 0x2166 (UTF-16BE)
            If (argCheck = "�Z"c) Then
                Return true
            End If
            ' No.28
            ' 説明:ローマ数字。(IBM拡張文字から参照されています)  (※重複符号化)
            ' 0x875b (Windows-31J)
            ' 0x2167 (UTF-16BE)
            If (argCheck = "�["c) Then
                Return true
            End If
            ' No.29
            ' 説明:ローマ数字。(IBM拡張文字から参照されています)  (※重複符号化)
            ' 0x875c (Windows-31J)
            ' 0x2168 (UTF-16BE)
            If (argCheck = "�\"c) Then
                Return true
            End If
            ' No.30
            ' 説明:875d: ローマ数字１０。(IBM拡張文字から参照されています)  (※重複符号化)
            ' 0x875d (Windows-31J)
            ' 0x2169 (UTF-16BE)
            If (argCheck = "�]"c) Then
                Return true
            End If
            ' No.32
            ' 説明:875f: ミリ。875eはスキップ。
            ' 0x875f (Windows-31J)
            ' 0x3349 (UTF-16BE)
            If (argCheck = "�_"c) Then
                Return true
            End If
            ' No.33
            ' 0x8760 (Windows-31J)
            ' 0x3314 (UTF-16BE)
            If (argCheck = "�`"c) Then
                Return true
            End If
            ' No.34
            ' 0x8761 (Windows-31J)
            ' 0x3322 (UTF-16BE)
            If (argCheck = "�a"c) Then
                Return true
            End If
            ' No.35
            ' 0x8762 (Windows-31J)
            ' 0x334d (UTF-16BE)
            If (argCheck = "�b"c) Then
                Return true
            End If
            ' No.36
            ' 0x8763 (Windows-31J)
            ' 0x3318 (UTF-16BE)
            If (argCheck = "�c"c) Then
                Return true
            End If
            ' No.37
            ' 0x8764 (Windows-31J)
            ' 0x3327 (UTF-16BE)
            If (argCheck = "�d"c) Then
                Return true
            End If
            ' No.38
            ' 0x8765 (Windows-31J)
            ' 0x3303 (UTF-16BE)
            If (argCheck = "�e"c) Then
                Return true
            End If
            ' No.39
            ' 0x8766 (Windows-31J)
            ' 0x3336 (UTF-16BE)
            If (argCheck = "�f"c) Then
                Return true
            End If
            ' No.40
            ' 0x8767 (Windows-31J)
            ' 0x3351 (UTF-16BE)
            If (argCheck = "�g"c) Then
                Return true
            End If
            ' No.41
            ' 0x8768 (Windows-31J)
            ' 0x3357 (UTF-16BE)
            If (argCheck = "�h"c) Then
                Return true
            End If
            ' No.42
            ' 0x8769 (Windows-31J)
            ' 0x330d (UTF-16BE)
            If (argCheck = "�i"c) Then
                Return true
            End If
            ' No.43
            ' 0x876a (Windows-31J)
            ' 0x3326 (UTF-16BE)
            If (argCheck = "�j"c) Then
                Return true
            End If
            ' No.44
            ' 0x876b (Windows-31J)
            ' 0x3323 (UTF-16BE)
            If (argCheck = "�k"c) Then
                Return true
            End If
            ' No.45
            ' 0x876c (Windows-31J)
            ' 0x332b (UTF-16BE)
            If (argCheck = "�l"c) Then
                Return true
            End If
            ' No.46
            ' 0x876d (Windows-31J)
            ' 0x334a (UTF-16BE)
            If (argCheck = "�m"c) Then
                Return true
            End If
            ' No.47
            ' 0x876e (Windows-31J)
            ' 0x333b (UTF-16BE)
            If (argCheck = "�n"c) Then
                Return true
            End If
            ' No.48
            ' 0x876f (Windows-31J)
            ' 0x339c (UTF-16BE)
            If (argCheck = "�o"c) Then
                Return true
            End If
            ' No.49
            ' 0x8770 (Windows-31J)
            ' 0x339d (UTF-16BE)
            If (argCheck = "�p"c) Then
                Return true
            End If
            ' No.50
            ' 0x8771 (Windows-31J)
            ' 0x339e (UTF-16BE)
            If (argCheck = "�q"c) Then
                Return true
            End If
            ' No.51
            ' 0x8772 (Windows-31J)
            ' 0x338e (UTF-16BE)
            If (argCheck = "�r"c) Then
                Return true
            End If
            ' No.52
            ' 0x8773 (Windows-31J)
            ' 0x338f (UTF-16BE)
            If (argCheck = "�s"c) Then
                Return true
            End If
            ' No.53
            ' 0x8774 (Windows-31J)
            ' 0x33c4 (UTF-16BE)
            If (argCheck = "�t"c) Then
                Return true
            End If
            ' No.54
            ' 説明:8775: 平方メートル。
            ' 0x8775 (Windows-31J)
            ' 0x33a1 (UTF-16BE)
            If (argCheck = "�u"c) Then
                Return true
            End If
            ' No.63
            ' 説明:877e: 平成。877dまではスキップ。
            ' 0x877e (Windows-31J)
            ' 0x337b (UTF-16BE)
            If (argCheck = "�~"c) Then
                Return true
            End If
            ' No.65
            ' 説明:8780: ダブルクオーテーション。877fはスキップ。
            ' 0x8780 (Windows-31J)
            ' 0x301d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.66
            ' 0x8781 (Windows-31J)
            ' 0x301f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.67
            ' 説明:8782: No. (IBM拡張文字から参照されています) (※重複符号化)
            ' 0x8782 (Windows-31J)
            ' 0x2116 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.68
            ' 0x8783 (Windows-31J)
            ' 0x33cd (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.69
            ' 説明:(IBM拡張文字から参照されています)  (※重複符号化)
            ' 0x8784 (Windows-31J)
            ' 0x2121 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.70
            ' 0x8785 (Windows-31J)
            ' 0x32a4 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.71
            ' 0x8786 (Windows-31J)
            ' 0x32a5 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.72
            ' 0x8787 (Windows-31J)
            ' 0x32a6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.73
            ' 0x8788 (Windows-31J)
            ' 0x32a7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.74
            ' 0x8789 (Windows-31J)
            ' 0x32a8 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.75
            ' 説明:(IBM拡張文字から参照されています)  (※重複符号化)
            ' 0x878a (Windows-31J)
            ' 0x3231 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.76
            ' 0x878b (Windows-31J)
            ' 0x3232 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.77
            ' 0x878c (Windows-31J)
            ' 0x3239 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.78
            ' 0x878d (Windows-31J)
            ' 0x337e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.79
            ' 0x878e (Windows-31J)
            ' 0x337d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.80
            ' 説明:878f: 昭和。
            ' 0x878f (Windows-31J)
            ' 0x337c (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.81
            ' 説明:8790→81e0。(JIS X 0208:1997にマップされています。)  (※重複符号化)
            ' 0x81e0 (Windows-31J)
            ' 0x2252 (UTF-16BE)
            If (argCheck = "≒"c) Then
                Return true
            End If
            ' No.82
            ' 説明:8791→81df。(JIS X 0208:1997にマップされています。)  (※重複符号化)
            ' 0x81df (Windows-31J)
            ' 0x2261 (UTF-16BE)
            If (argCheck = "≡"c) Then
                Return true
            End If
            ' No.83
            ' 説明:8792→81e7。(JIS X 0208:1997にマップされています。)  (※重複符号化)
            ' 0x81e7 (Windows-31J)
            ' 0x222b (UTF-16BE)
            If (argCheck = "∫"c) Then
                Return true
            End If
            ' No.84
            ' 説明:8793: 記号。
            ' 0x8793 (Windows-31J)
            ' 0x222e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.85
            ' 説明:8794: シグマ。
            ' 0x8794 (Windows-31J)
            ' 0x2211 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.86
            ' 説明:8795→81e3。(JIS X 0208:1997にマップされています。)  (※重複符号化)
            ' 0x81e3 (Windows-31J)
            ' 0x221a (UTF-16BE)
            If (argCheck = "√"c) Then
                Return true
            End If
            ' No.87
            ' 説明:8796→81db。(JIS X 0208:1997にマップされています。)  (※重複符号化)
            ' 0x81db (Windows-31J)
            ' 0x22a5 (UTF-16BE)
            If (argCheck = "⊥"c) Then
                Return true
            End If
            ' No.88
            ' 説明:8797→81da。(JIS X 0208:1997にマップされています。)  (※重複符号化)
            ' 0x81da (Windows-31J)
            ' 0x2220 (UTF-16BE)
            If (argCheck = "∠"c) Then
                Return true
            End If
            ' No.89
            ' 説明:8798: 記号。
            ' 0x8798 (Windows-31J)
            ' 0x221f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.90
            ' 説明:8799: 三角。
            ' 0x8799 (Windows-31J)
            ' 0x22bf (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.91
            ' 説明:879a→81e6。(JIS X 0208:1997にマップされています。)  (※重複符号化)
            ' 0x81e6 (Windows-31J)
            ' 0x2235 (UTF-16BE)
            If (argCheck = "∵"c) Then
                Return true
            End If
            ' No.92
            ' 説明:879b→81bf。(JIS X 0208:1997にマップされています。)  (※重複符号化)
            ' 0x81bf (Windows-31J)
            ' 0x2229 (UTF-16BE)
            If (argCheck = "∩"c) Then
                Return true
            End If
            ' No.93
            ' 説明:879c→81be: NEC特殊文字の最後の文字。(JIS X 0208:1997にマップされています。)  (※重複符号化)
            ' 0x81be (Windows-31J)
            ' 0x222a (UTF-16BE)
            If (argCheck = "∪"c) Then
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

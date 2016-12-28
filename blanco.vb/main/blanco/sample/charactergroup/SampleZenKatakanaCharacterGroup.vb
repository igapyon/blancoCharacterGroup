' このソースコードは blanco Frameworkによって自動生成されています。
Imports System

Namespace blanco.sample.charactergroup
    ''' <summary>全角カタカナのサンプル。blancoCharacterGroupの実装には影響しません。</summary>
    Public Class SampleZenKatakanaCharacterGroup

        ''' <summary>文字グループに含まれる文字であるかどうかを判定します。</summary>
        ''' <param name="argCheck">チェックを行いたい文字。</param>
        ''' <returns>文字グループに含まれていればture。グループに含まれない文字であればfalse。</returns>
        Public Function Match(argCheck As Char) As Boolean
            ' No.1
            ' 説明:8340: カタカナ。ァ。
            ' 0x8340 (Windows-31J)
            ' 0x30a1 (UTF-16BE)
            If (argCheck = "ァ"c) Then
                Return true
            End If
            ' No.2
            ' 説明:8341: カタカナ。ア。
            ' 0x8341 (Windows-31J)
            ' 0x30a2 (UTF-16BE)
            If (argCheck = "ア"c) Then
                Return true
            End If
            ' No.3
            ' 説明:8342: カタカナ。ィ。
            ' 0x8342 (Windows-31J)
            ' 0x30a3 (UTF-16BE)
            If (argCheck = "ィ"c) Then
                Return true
            End If
            ' No.4
            ' 0x8343 (Windows-31J)
            ' 0x30a4 (UTF-16BE)
            If (argCheck = "イ"c) Then
                Return true
            End If
            ' No.5
            ' 0x8344 (Windows-31J)
            ' 0x30a5 (UTF-16BE)
            If (argCheck = "ゥ"c) Then
                Return true
            End If
            ' No.6
            ' 0x8345 (Windows-31J)
            ' 0x30a6 (UTF-16BE)
            If (argCheck = "ウ"c) Then
                Return true
            End If
            ' No.7
            ' 0x8346 (Windows-31J)
            ' 0x30a7 (UTF-16BE)
            If (argCheck = "ェ"c) Then
                Return true
            End If
            ' No.8
            ' 0x8347 (Windows-31J)
            ' 0x30a8 (UTF-16BE)
            If (argCheck = "エ"c) Then
                Return true
            End If
            ' No.9
            ' 説明:8348: カタカナ。ォ。
            ' 0x8348 (Windows-31J)
            ' 0x30a9 (UTF-16BE)
            If (argCheck = "ォ"c) Then
                Return true
            End If
            ' No.10
            ' 説明:8349: カタカナ。オ。
            ' 0x8349 (Windows-31J)
            ' 0x30aa (UTF-16BE)
            If (argCheck = "オ"c) Then
                Return true
            End If
            ' No.11
            ' 説明:834a: カタカナ。カ。
            ' 0x834a (Windows-31J)
            ' 0x30ab (UTF-16BE)
            If (argCheck = "カ"c) Then
                Return true
            End If
            ' No.12
            ' 説明:834b: カタカナ。ガ。
            ' 0x834b (Windows-31J)
            ' 0x30ac (UTF-16BE)
            If (argCheck = "ガ"c) Then
                Return true
            End If
            ' No.13
            ' 0x834c (Windows-31J)
            ' 0x30ad (UTF-16BE)
            If (argCheck = "キ"c) Then
                Return true
            End If
            ' No.14
            ' 説明:834d: カタカナ。ギ。
            ' 0x834d (Windows-31J)
            ' 0x30ae (UTF-16BE)
            If (argCheck = "ギ"c) Then
                Return true
            End If
            ' No.15
            ' 0x834e (Windows-31J)
            ' 0x30af (UTF-16BE)
            If (argCheck = "ク"c) Then
                Return true
            End If
            ' No.16
            ' 説明:834f: カタカナ。グ。
            ' 0x834f (Windows-31J)
            ' 0x30b0 (UTF-16BE)
            If (argCheck = "グ"c) Then
                Return true
            End If
            ' No.17
            ' 0x8350 (Windows-31J)
            ' 0x30b1 (UTF-16BE)
            If (argCheck = "ケ"c) Then
                Return true
            End If
            ' No.18
            ' 0x8351 (Windows-31J)
            ' 0x30b2 (UTF-16BE)
            If (argCheck = "ゲ"c) Then
                Return true
            End If
            ' No.19
            ' 0x8352 (Windows-31J)
            ' 0x30b3 (UTF-16BE)
            If (argCheck = "コ"c) Then
                Return true
            End If
            ' No.20
            ' 0x8353 (Windows-31J)
            ' 0x30b4 (UTF-16BE)
            If (argCheck = "ゴ"c) Then
                Return true
            End If
            ' No.21
            ' 0x8354 (Windows-31J)
            ' 0x30b5 (UTF-16BE)
            If (argCheck = "サ"c) Then
                Return true
            End If
            ' No.22
            ' 0x8355 (Windows-31J)
            ' 0x30b6 (UTF-16BE)
            If (argCheck = "ザ"c) Then
                Return true
            End If
            ' No.23
            ' 0x8356 (Windows-31J)
            ' 0x30b7 (UTF-16BE)
            If (argCheck = "シ"c) Then
                Return true
            End If
            ' No.24
            ' 0x8357 (Windows-31J)
            ' 0x30b8 (UTF-16BE)
            If (argCheck = "ジ"c) Then
                Return true
            End If
            ' No.25
            ' 0x8358 (Windows-31J)
            ' 0x30b9 (UTF-16BE)
            If (argCheck = "ス"c) Then
                Return true
            End If
            ' No.26
            ' 0x8359 (Windows-31J)
            ' 0x30ba (UTF-16BE)
            If (argCheck = "ズ"c) Then
                Return true
            End If
            ' No.27
            ' 0x835a (Windows-31J)
            ' 0x30bb (UTF-16BE)
            If (argCheck = "セ"c) Then
                Return true
            End If
            ' No.28
            ' 0x835b (Windows-31J)
            ' 0x30bc (UTF-16BE)
            If (argCheck = "ゼ"c) Then
                Return true
            End If
            ' No.29
            ' 0x835c (Windows-31J)
            ' 0x30bd (UTF-16BE)
            If (argCheck = "ソ"c) Then
                Return true
            End If
            ' No.30
            ' 説明:835d: カタカナ。ゾ。
            ' 0x835d (Windows-31J)
            ' 0x30be (UTF-16BE)
            If (argCheck = "ゾ"c) Then
                Return true
            End If
            ' No.31
            ' 0x835e (Windows-31J)
            ' 0x30bf (UTF-16BE)
            If (argCheck = "タ"c) Then
                Return true
            End If
            ' No.32
            ' 説明:835f: カタカナ。ダ。
            ' 0x835f (Windows-31J)
            ' 0x30c0 (UTF-16BE)
            If (argCheck = "ダ"c) Then
                Return true
            End If
            ' No.33
            ' 0x8360 (Windows-31J)
            ' 0x30c1 (UTF-16BE)
            If (argCheck = "チ"c) Then
                Return true
            End If
            ' No.34
            ' 0x8361 (Windows-31J)
            ' 0x30c2 (UTF-16BE)
            If (argCheck = "ヂ"c) Then
                Return true
            End If
            ' No.35
            ' 説明:8362: カタカナ。ッ。
            ' 0x8362 (Windows-31J)
            ' 0x30c3 (UTF-16BE)
            If (argCheck = "ッ"c) Then
                Return true
            End If
            ' No.36
            ' 0x8363 (Windows-31J)
            ' 0x30c4 (UTF-16BE)
            If (argCheck = "ツ"c) Then
                Return true
            End If
            ' No.37
            ' 0x8364 (Windows-31J)
            ' 0x30c5 (UTF-16BE)
            If (argCheck = "ヅ"c) Then
                Return true
            End If
            ' No.38
            ' 0x8365 (Windows-31J)
            ' 0x30c6 (UTF-16BE)
            If (argCheck = "テ"c) Then
                Return true
            End If
            ' No.39
            ' 0x8366 (Windows-31J)
            ' 0x30c7 (UTF-16BE)
            If (argCheck = "デ"c) Then
                Return true
            End If
            ' No.40
            ' 0x8367 (Windows-31J)
            ' 0x30c8 (UTF-16BE)
            If (argCheck = "ト"c) Then
                Return true
            End If
            ' No.41
            ' 0x8368 (Windows-31J)
            ' 0x30c9 (UTF-16BE)
            If (argCheck = "ド"c) Then
                Return true
            End If
            ' No.42
            ' 0x8369 (Windows-31J)
            ' 0x30ca (UTF-16BE)
            If (argCheck = "ナ"c) Then
                Return true
            End If
            ' No.43
            ' 0x836a (Windows-31J)
            ' 0x30cb (UTF-16BE)
            If (argCheck = "ニ"c) Then
                Return true
            End If
            ' No.44
            ' 0x836b (Windows-31J)
            ' 0x30cc (UTF-16BE)
            If (argCheck = "ヌ"c) Then
                Return true
            End If
            ' No.45
            ' 0x836c (Windows-31J)
            ' 0x30cd (UTF-16BE)
            If (argCheck = "ネ"c) Then
                Return true
            End If
            ' No.46
            ' 0x836d (Windows-31J)
            ' 0x30ce (UTF-16BE)
            If (argCheck = "ノ"c) Then
                Return true
            End If
            ' No.47
            ' 0x836e (Windows-31J)
            ' 0x30cf (UTF-16BE)
            If (argCheck = "ハ"c) Then
                Return true
            End If
            ' No.48
            ' 説明:836f: カタカナ。バ。
            ' 0x836f (Windows-31J)
            ' 0x30d0 (UTF-16BE)
            If (argCheck = "バ"c) Then
                Return true
            End If
            ' No.49
            ' 説明:8370: カタカナ。パ。
            ' 0x8370 (Windows-31J)
            ' 0x30d1 (UTF-16BE)
            If (argCheck = "パ"c) Then
                Return true
            End If
            ' No.50
            ' 0x8371 (Windows-31J)
            ' 0x30d2 (UTF-16BE)
            If (argCheck = "ヒ"c) Then
                Return true
            End If
            ' No.51
            ' 0x8372 (Windows-31J)
            ' 0x30d3 (UTF-16BE)
            If (argCheck = "ビ"c) Then
                Return true
            End If
            ' No.52
            ' 0x8373 (Windows-31J)
            ' 0x30d4 (UTF-16BE)
            If (argCheck = "ピ"c) Then
                Return true
            End If
            ' No.53
            ' 0x8374 (Windows-31J)
            ' 0x30d5 (UTF-16BE)
            If (argCheck = "フ"c) Then
                Return true
            End If
            ' No.54
            ' 0x8375 (Windows-31J)
            ' 0x30d6 (UTF-16BE)
            If (argCheck = "ブ"c) Then
                Return true
            End If
            ' No.55
            ' 0x8376 (Windows-31J)
            ' 0x30d7 (UTF-16BE)
            If (argCheck = "プ"c) Then
                Return true
            End If
            ' No.56
            ' 0x8377 (Windows-31J)
            ' 0x30d8 (UTF-16BE)
            If (argCheck = "ヘ"c) Then
                Return true
            End If
            ' No.57
            ' 0x8378 (Windows-31J)
            ' 0x30d9 (UTF-16BE)
            If (argCheck = "ベ"c) Then
                Return true
            End If
            ' No.58
            ' 0x8379 (Windows-31J)
            ' 0x30da (UTF-16BE)
            If (argCheck = "ペ"c) Then
                Return true
            End If
            ' No.59
            ' 0x837a (Windows-31J)
            ' 0x30db (UTF-16BE)
            If (argCheck = "ホ"c) Then
                Return true
            End If
            ' No.60
            ' 説明:837b: カタカナ。ボ。
            ' 0x837b (Windows-31J)
            ' 0x30dc (UTF-16BE)
            If (argCheck = "ボ"c) Then
                Return true
            End If
            ' No.61
            ' 説明:837c: カタカナ。ポ。
            ' 0x837c (Windows-31J)
            ' 0x30dd (UTF-16BE)
            If (argCheck = "ポ"c) Then
                Return true
            End If
            ' No.62
            ' 0x837d (Windows-31J)
            ' 0x30de (UTF-16BE)
            If (argCheck = "マ"c) Then
                Return true
            End If
            ' No.63
            ' 説明:837e: カタカナ。ミ。
            ' 0x837e (Windows-31J)
            ' 0x30df (UTF-16BE)
            If (argCheck = "ミ"c) Then
                Return true
            End If
            ' No.64
            ' 説明:8380: カタカナ。ム。837fはスキップされている模様。
            ' 0x8380 (Windows-31J)
            ' 0x30e0 (UTF-16BE)
            If (argCheck = "ム"c) Then
                Return true
            End If
            ' No.65
            ' 0x8381 (Windows-31J)
            ' 0x30e1 (UTF-16BE)
            If (argCheck = "メ"c) Then
                Return true
            End If
            ' No.66
            ' 0x8382 (Windows-31J)
            ' 0x30e2 (UTF-16BE)
            If (argCheck = "モ"c) Then
                Return true
            End If
            ' No.67
            ' 説明:8383: カタカナ。ャ。
            ' 0x8383 (Windows-31J)
            ' 0x30e3 (UTF-16BE)
            If (argCheck = "ャ"c) Then
                Return true
            End If
            ' No.68
            ' 説明:8384: カタカナ。ヤ。
            ' 0x8384 (Windows-31J)
            ' 0x30e4 (UTF-16BE)
            If (argCheck = "ヤ"c) Then
                Return true
            End If
            ' No.69
            ' 0x8385 (Windows-31J)
            ' 0x30e5 (UTF-16BE)
            If (argCheck = "ュ"c) Then
                Return true
            End If
            ' No.70
            ' 0x8386 (Windows-31J)
            ' 0x30e6 (UTF-16BE)
            If (argCheck = "ユ"c) Then
                Return true
            End If
            ' No.71
            ' 説明:8387: カタカナ。ョ。
            ' 0x8387 (Windows-31J)
            ' 0x30e7 (UTF-16BE)
            If (argCheck = "ョ"c) Then
                Return true
            End If
            ' No.72
            ' 0x8388 (Windows-31J)
            ' 0x30e8 (UTF-16BE)
            If (argCheck = "ヨ"c) Then
                Return true
            End If
            ' No.73
            ' 説明:8389: カタカナ。ラ。
            ' 0x8389 (Windows-31J)
            ' 0x30e9 (UTF-16BE)
            If (argCheck = "ラ"c) Then
                Return true
            End If
            ' No.74
            ' 0x838a (Windows-31J)
            ' 0x30ea (UTF-16BE)
            If (argCheck = "リ"c) Then
                Return true
            End If
            ' No.75
            ' 0x838b (Windows-31J)
            ' 0x30eb (UTF-16BE)
            If (argCheck = "ル"c) Then
                Return true
            End If
            ' No.76
            ' 0x838c (Windows-31J)
            ' 0x30ec (UTF-16BE)
            If (argCheck = "レ"c) Then
                Return true
            End If
            ' No.77
            ' 0x838d (Windows-31J)
            ' 0x30ed (UTF-16BE)
            If (argCheck = "ロ"c) Then
                Return true
            End If
            ' No.78
            ' 説明:カタカナ。小さいヮ。
            ' 0x838e (Windows-31J)
            ' 0x30ee (UTF-16BE)
            If (argCheck = "ヮ"c) Then
                Return true
            End If
            ' No.79
            ' 説明:838f: カタカナ。ワ。
            ' 0x838f (Windows-31J)
            ' 0x30ef (UTF-16BE)
            If (argCheck = "ワ"c) Then
                Return true
            End If
            ' No.80
            ' 0x8390 (Windows-31J)
            ' 0x30f0 (UTF-16BE)
            If (argCheck = "ヰ"c) Then
                Return true
            End If
            ' No.81
            ' 0x8391 (Windows-31J)
            ' 0x30f1 (UTF-16BE)
            If (argCheck = "ヱ"c) Then
                Return true
            End If
            ' No.82
            ' 説明:8392: カタカナ。ヲ。
            ' 0x8392 (Windows-31J)
            ' 0x30f2 (UTF-16BE)
            If (argCheck = "ヲ"c) Then
                Return true
            End If
            ' No.83
            ' 説明:8393: カタカナ。ン。
            ' 0x8393 (Windows-31J)
            ' 0x30f3 (UTF-16BE)
            If (argCheck = "ン"c) Then
                Return true
            End If
            ' No.84
            ' 説明:8394: カタカナ。ヴ。
            ' 0x8394 (Windows-31J)
            ' 0x30f4 (UTF-16BE)
            If (argCheck = "ヴ"c) Then
                Return true
            End If
            ' No.85
            ' 0x8395 (Windows-31J)
            ' 0x30f5 (UTF-16BE)
            If (argCheck = "ヵ"c) Then
                Return true
            End If
            ' No.86
            ' 説明:8396: カタカナ。ヶ。
            ' 0x8396 (Windows-31J)
            ' 0x30f6 (UTF-16BE)
            If (argCheck = "ヶ"c) Then
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

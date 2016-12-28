' このソースコードは blanco Frameworkによって自動生成されています。
Imports System

Namespace blanco.sample.charactergroup
    ''' <summary>文字グループのサンプル。このクラスは単にサンプルです。実際の動作には利用されません。</summary>
    Public Class SampleCharacterGroup

        ''' <summary>文字グループに含まれる文字であるかどうかを判定します。</summary>
        ''' <param name="argCheck">チェックを行いたい文字。</param>
        ''' <returns>文字グループに含まれていればture。グループに含まれない文字であればfalse。</returns>
        Public Function Match(argCheck As Char) As Boolean
            ' No.1
            ' 説明:0の文字
            ' 0x30 (Windows-31J)
            ' 0x0030 (UTF-16BE)
            If (argCheck = "0"c) Then
                Return true
            End If
            ' No.2
            ' 説明:1の文字
            ' 0x31 (Windows-31J)
            ' 0x0031 (UTF-16BE)
            If (argCheck = "1"c) Then
                Return true
            End If
            ' No.3
            ' 説明:2の文字
            ' 0x32 (Windows-31J)
            ' 0x0032 (UTF-16BE)
            If (argCheck = "2"c) Then
                Return true
            End If
            ' No.4
            ' 説明:3の文字
            ' 0x33 (Windows-31J)
            ' 0x0033 (UTF-16BE)
            If (argCheck = "3"c) Then
                Return true
            End If
            ' No.5
            ' 説明:4の文字
            ' 0x34 (Windows-31J)
            ' 0x0034 (UTF-16BE)
            If (argCheck = "4"c) Then
                Return true
            End If
            ' No.6
            ' 説明:5の文字
            ' 0x35 (Windows-31J)
            ' 0x0035 (UTF-16BE)
            If (argCheck = "5"c) Then
                Return true
            End If
            ' No.7
            ' 説明:6の文字
            ' 0x36 (Windows-31J)
            ' 0x0036 (UTF-16BE)
            If (argCheck = "6"c) Then
                Return true
            End If
            ' No.8
            ' 説明:7の文字
            ' 0x37 (Windows-31J)
            ' 0x0037 (UTF-16BE)
            If (argCheck = "7"c) Then
                Return true
            End If
            ' No.9
            ' 説明:8の文字
            ' 0x38 (Windows-31J)
            ' 0x0038 (UTF-16BE)
            If (argCheck = "8"c) Then
                Return true
            End If
            ' No.10
            ' 説明:9の文字
            ' 0x39 (Windows-31J)
            ' 0x0039 (UTF-16BE)
            If (argCheck = "9"c) Then
                Return true
            End If
            ' No.11
            ' 説明:シングルクオートが展開されることの確認。
            ' 0x27 (Windows-31J)
            ' 0x0027 (UTF-16BE)
            If (argCheck = "'"c) Then
                Return true
            End If
            ' No.12
            ' 説明:ダブルクオートが展開されることの確認。
            ' 0x22 (Windows-31J)
            ' 0x0022 (UTF-16BE)
            If (argCheck = """"c) Then
                Return true
            End If
            ' No.13
            ' 説明:バックスラッシュが展開されることの確認。
            ' 0x5c (Windows-31J)
            ' 0x005c (UTF-16BE)
            If (argCheck = "\"c) Then
                Return true
            End If
            ' No.14
            ' 説明:JExcelApi 2.6のオリジナル版において正常に×として展開できない文字。
            ' 0x817e (Windows-31J)
            ' 0x00d7 (UTF-16BE)
            If (argCheck = "×"c) Then
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

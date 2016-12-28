' ���̃\�[�X�R�[�h�� blanco Framework�ɂ���Ď�����������Ă��܂��B
Imports System

Namespace blanco.sample.charactergroup
    ''' <summary>�����O���[�v�̃T���v���B���̃N���X�͒P�ɃT���v���ł��B���ۂ̓���ɂ͗��p����܂���B</summary>
    Public Class SampleCharacterGroup

        ''' <summary>�����O���[�v�Ɋ܂܂�镶���ł��邩�ǂ����𔻒肵�܂��B</summary>
        ''' <param name="argCheck">�`�F�b�N���s�����������B</param>
        ''' <returns>�����O���[�v�Ɋ܂܂�Ă����ture�B�O���[�v�Ɋ܂܂�Ȃ������ł����false�B</returns>
        Public Function Match(argCheck As Char) As Boolean
            ' No.1
            ' ����:0�̕���
            ' 0x30 (Windows-31J)
            ' 0x0030 (UTF-16BE)
            If (argCheck = "0"c) Then
                Return true
            End If
            ' No.2
            ' ����:1�̕���
            ' 0x31 (Windows-31J)
            ' 0x0031 (UTF-16BE)
            If (argCheck = "1"c) Then
                Return true
            End If
            ' No.3
            ' ����:2�̕���
            ' 0x32 (Windows-31J)
            ' 0x0032 (UTF-16BE)
            If (argCheck = "2"c) Then
                Return true
            End If
            ' No.4
            ' ����:3�̕���
            ' 0x33 (Windows-31J)
            ' 0x0033 (UTF-16BE)
            If (argCheck = "3"c) Then
                Return true
            End If
            ' No.5
            ' ����:4�̕���
            ' 0x34 (Windows-31J)
            ' 0x0034 (UTF-16BE)
            If (argCheck = "4"c) Then
                Return true
            End If
            ' No.6
            ' ����:5�̕���
            ' 0x35 (Windows-31J)
            ' 0x0035 (UTF-16BE)
            If (argCheck = "5"c) Then
                Return true
            End If
            ' No.7
            ' ����:6�̕���
            ' 0x36 (Windows-31J)
            ' 0x0036 (UTF-16BE)
            If (argCheck = "6"c) Then
                Return true
            End If
            ' No.8
            ' ����:7�̕���
            ' 0x37 (Windows-31J)
            ' 0x0037 (UTF-16BE)
            If (argCheck = "7"c) Then
                Return true
            End If
            ' No.9
            ' ����:8�̕���
            ' 0x38 (Windows-31J)
            ' 0x0038 (UTF-16BE)
            If (argCheck = "8"c) Then
                Return true
            End If
            ' No.10
            ' ����:9�̕���
            ' 0x39 (Windows-31J)
            ' 0x0039 (UTF-16BE)
            If (argCheck = "9"c) Then
                Return true
            End If
            ' No.11
            ' ����:�V���O���N�I�[�g���W�J����邱�Ƃ̊m�F�B
            ' 0x27 (Windows-31J)
            ' 0x0027 (UTF-16BE)
            If (argCheck = "'"c) Then
                Return true
            End If
            ' No.12
            ' ����:�_�u���N�I�[�g���W�J����邱�Ƃ̊m�F�B
            ' 0x22 (Windows-31J)
            ' 0x0022 (UTF-16BE)
            If (argCheck = """"c) Then
                Return true
            End If
            ' No.13
            ' ����:�o�b�N�X���b�V�����W�J����邱�Ƃ̊m�F�B
            ' 0x5c (Windows-31J)
            ' 0x005c (UTF-16BE)
            If (argCheck = "\"c) Then
                Return true
            End If
            ' No.14
            ' ����:JExcelApi 2.6�̃I���W�i���łɂ����Đ���Ɂ~�Ƃ��ēW�J�ł��Ȃ������B
            ' 0x817e (Windows-31J)
            ' 0x00d7 (UTF-16BE)
            If (argCheck = "�~"c) Then
                Return true
            End If
            Return false
        End Function

        ''' <summary>�^����ꂽ�����񂪁A�S�ĕ����O���[�v�Ɋ܂܂�镶���ł��邩�ǂ����𔻒肵�܂��B</summary>
        ''' <param name="argCheck">�`�F�b�N���s������������B</param>
        ''' <returns>�S�Ă̕����������O���[�v�Ɋ܂܂�Ă����ture�B�O���[�v�Ɋ܂܂�Ȃ��������܂܂�Ă����false�B</returns>
        Public Function MatchAll(argCheck As String) As Boolean
            If (argCheck Is Nothing) Then
                Throw New ArgumentException("���\�b�h[MatchAll]�̃p�����[�^[argCheck]��null���^�����܂����B�������A���̃p�����[�^��null��^���邱�Ƃ͂ł��܂���B")
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

        ''' <summary>�^����ꂽ�����񂪁A�����O���[�v�Ɋ܂܂�镶�����ЂƂł��܂�ł��邩�ǂ����𔻒肵�܂��B</summary>
        ''' <param name="argCheck">�`�F�b�N���s������������B</param>
        ''' <returns>�����O���[�v�Ɋ܂܂�Ă��镶�����ЂƂł��܂�ł����ture�B�O���[�v�Ɋ܂܂�镶�����ЂƂ��܂܂Ȃ��ꍇ��false�B</returns>
        Public Function MatchAny(argCheck As String) As Boolean
            If (argCheck Is Nothing) Then
                Throw New ArgumentException("���\�b�h[MatchAny]�̃p�����[�^[argCheck]��null���^�����܂����B�������A���̃p�����[�^��null��^���邱�Ƃ͂ł��܂���B")
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

' ���̃\�[�X�R�[�h�� blanco Framework�ɂ���Ď�����������Ă��܂��B
Imports System

Namespace blanco.sample.charactergroup
    ''' <summary>���p�J�^�J�i�̃T���v���BblancoCharacterGroup�̎����ɂ͉e�����܂���B</summary>
    Public Class SampleHanKatakanaCharacterGroup

        ''' <summary>�����O���[�v�Ɋ܂܂�镶���ł��邩�ǂ����𔻒肵�܂��B</summary>
        ''' <param name="argCheck">�`�F�b�N���s�����������B</param>
        ''' <returns>�����O���[�v�Ɋ܂܂�Ă����ture�B�O���[�v�Ɋ܂܂�Ȃ������ł����false�B</returns>
        Public Function Match(argCheck As Char) As Boolean
            ' No.2
            ' ����:a1: ��Ǔ_
            ' 0xa1 (Windows-31J)
            ' 0xff61 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.3
            ' ����:a2: ���p�̃J�M�J�b�R�B
            ' 0xa2 (Windows-31J)
            ' 0xff62 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.4
            ' ����:a3: ���p�̃J�M�J�b�R�B
            ' 0xa3 (Windows-31J)
            ' 0xff63 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.5
            ' ����:a4: ��Ǔ_
            ' 0xa4 (Windows-31J)
            ' 0xff64 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.6
            ' ����:a5: ���p�̒���
            ' 0xa5 (Windows-31J)
            ' 0xff65 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.8
            ' ����:a7: �������J�^�J�i�B�@�B
            ' 0xa7 (Windows-31J)
            ' 0xff67 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.9
            ' ����:a8: �������J�^�J�i
            ' 0xa8 (Windows-31J)
            ' 0xff68 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.10
            ' ����:a9: �������J�^�J�i
            ' 0xa9 (Windows-31J)
            ' 0xff69 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.11
            ' ����:aa: �������J�^�J�i
            ' 0xaa (Windows-31J)
            ' 0xff6a (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.12
            ' ����:ab: �������J�^�J�i
            ' 0xab (Windows-31J)
            ' 0xff6b (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.13
            ' ����:ac: �������J�^�J�i
            ' 0xac (Windows-31J)
            ' 0xff6c (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.14
            ' ����:ad: �������J�^�J�i
            ' 0xad (Windows-31J)
            ' 0xff6d (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.15
            ' ����:ae: �������J�^�J�i�B���B
            ' 0xae (Windows-31J)
            ' 0xff6e (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.16
            ' ����:af: �������J�^�J�i�B�b�B���̎��ɒ�`���Ă��܂��B
            ' 0xaf (Windows-31J)
            ' 0xff6f (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.17
            ' ����:b0: ���p�̐L�΂��B�|�B
            ' 0xb0 (Windows-31J)
            ' 0xff70 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.18
            ' ����:b1: �J�^�J�i�B�A�B
            ' 0xb1 (Windows-31J)
            ' 0xff71 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.19
            ' ����:b2: �J�^�J�i
            ' 0xb2 (Windows-31J)
            ' 0xff72 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.20
            ' ����:b3: �J�^�J�i
            ' 0xb3 (Windows-31J)
            ' 0xff73 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.21
            ' ����:b4: �J�^�J�i
            ' 0xb4 (Windows-31J)
            ' 0xff74 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.22
            ' ����:b5: �J�^�J�i
            ' 0xb5 (Windows-31J)
            ' 0xff75 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.23
            ' ����:b6: �J�^�J�i
            ' 0xb6 (Windows-31J)
            ' 0xff76 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.24
            ' ����:b7: �J�^�J�i
            ' 0xb7 (Windows-31J)
            ' 0xff77 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.25
            ' ����:b8: �J�^�J�i
            ' 0xb8 (Windows-31J)
            ' 0xff78 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.26
            ' ����:b9: �J�^�J�i
            ' 0xb9 (Windows-31J)
            ' 0xff79 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.27
            ' ����:ba: �J�^�J�i
            ' 0xba (Windows-31J)
            ' 0xff7a (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.28
            ' ����:bb: �J�^�J�i
            ' 0xbb (Windows-31J)
            ' 0xff7b (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.29
            ' ����:bc: �J�^�J�i
            ' 0xbc (Windows-31J)
            ' 0xff7c (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.30
            ' ����:bd: �J�^�J�i
            ' 0xbd (Windows-31J)
            ' 0xff7d (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.31
            ' ����:be: �J�^�J�i
            ' 0xbe (Windows-31J)
            ' 0xff7e (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.32
            ' ����:bf: �J�^�J�i
            ' 0xbf (Windows-31J)
            ' 0xff7f (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.33
            ' ����:c0: �J�^�J�i
            ' 0xc0 (Windows-31J)
            ' 0xff80 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.34
            ' ����:c1: �J�^�J�i
            ' 0xc1 (Windows-31J)
            ' 0xff81 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.35
            ' ����:c2: �J�^�J�i
            ' 0xc2 (Windows-31J)
            ' 0xff82 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.36
            ' ����:c3: �J�^�J�i
            ' 0xc3 (Windows-31J)
            ' 0xff83 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.37
            ' ����:c4: �J�^�J�i
            ' 0xc4 (Windows-31J)
            ' 0xff84 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.38
            ' ����:c5: �J�^�J�i
            ' 0xc5 (Windows-31J)
            ' 0xff85 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.39
            ' ����:c6: �J�^�J�i
            ' 0xc6 (Windows-31J)
            ' 0xff86 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.40
            ' ����:c7: �J�^�J�i
            ' 0xc7 (Windows-31J)
            ' 0xff87 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.41
            ' ����:c8: �J�^�J�i
            ' 0xc8 (Windows-31J)
            ' 0xff88 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.42
            ' ����:c9: �J�^�J�i
            ' 0xc9 (Windows-31J)
            ' 0xff89 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.43
            ' ����:ca: �J�^�J�i
            ' 0xca (Windows-31J)
            ' 0xff8a (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.44
            ' ����:cb: �J�^�J�i
            ' 0xcb (Windows-31J)
            ' 0xff8b (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.45
            ' ����:cc: �J�^�J�i
            ' 0xcc (Windows-31J)
            ' 0xff8c (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.46
            ' ����:cd: �J�^�J�i
            ' 0xcd (Windows-31J)
            ' 0xff8d (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.47
            ' ����:ce: �J�^�J�i
            ' 0xce (Windows-31J)
            ' 0xff8e (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.48
            ' ����:cf: �J�^�J�i
            ' 0xcf (Windows-31J)
            ' 0xff8f (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.49
            ' ����:d0: �J�^�J�i
            ' 0xd0 (Windows-31J)
            ' 0xff90 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.50
            ' ����:d1: �J�^�J�i
            ' 0xd1 (Windows-31J)
            ' 0xff91 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.51
            ' ����:d2: �J�^�J�i
            ' 0xd2 (Windows-31J)
            ' 0xff92 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.52
            ' ����:d3: �J�^�J�i
            ' 0xd3 (Windows-31J)
            ' 0xff93 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.53
            ' ����:d4: �J�^�J�i
            ' 0xd4 (Windows-31J)
            ' 0xff94 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.54
            ' ����:d5: �J�^�J�i
            ' 0xd5 (Windows-31J)
            ' 0xff95 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.55
            ' ����:d6: �J�^�J�i
            ' 0xd6 (Windows-31J)
            ' 0xff96 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.56
            ' ����:d7: �J�^�J�i
            ' 0xd7 (Windows-31J)
            ' 0xff97 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.57
            ' ����:d8: �J�^�J�i
            ' 0xd8 (Windows-31J)
            ' 0xff98 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.58
            ' ����:d9: �J�^�J�i
            ' 0xd9 (Windows-31J)
            ' 0xff99 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.59
            ' ����:da: �J�^�J�i
            ' 0xda (Windows-31J)
            ' 0xff9a (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.60
            ' ����:db: �J�^�J�i
            ' 0xdb (Windows-31J)
            ' 0xff9b (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.61
            ' ����:dc: �J�^�J�i�B���B
            ' 0xdc (Windows-31J)
            ' 0xff9c (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.62
            ' ����:a6: �J�^�J�i�B���BMS932�ɂ�����R�[�h���Ƃ��Ă� �������A���O�Ɉʒu���܂��B
            ' 0xa6 (Windows-31J)
            ' 0xff66 (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.63
            ' ����:dd: �J�^�J�i�B���B
            ' 0xdd (Windows-31J)
            ' 0xff9d (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.64
            ' ����:de: ����
            ' 0xde (Windows-31J)
            ' 0xff9e (UTF-16BE)
            If (argCheck = "�"c) Then
                Return true
            End If
            ' No.65
            ' ����:df: ����
            ' 0xdf (Windows-31J)
            ' 0xff9f (UTF-16BE)
            If (argCheck = "�"c) Then
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

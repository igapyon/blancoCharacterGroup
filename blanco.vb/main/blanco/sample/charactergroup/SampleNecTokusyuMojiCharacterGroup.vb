' ���̃\�[�X�R�[�h�� blanco Framework�ɂ���Ď�����������Ă��܂��B
Imports System

Namespace blanco.sample.charactergroup
    ''' <summary>�T���v���BNEC���ꕶ�� 0x8740-879C�B13��BblancoCharacterGroup�̎����ɂ͉e�����܂���B</summary>
    Public Class SampleNecTokusyuMojiCharacterGroup

        ''' <summary>�����O���[�v�Ɋ܂܂�镶���ł��邩�ǂ����𔻒肵�܂��B</summary>
        ''' <param name="argCheck">�`�F�b�N���s�����������B</param>
        ''' <returns>�����O���[�v�Ɋ܂܂�Ă����ture�B�O���[�v�Ɋ܂܂�Ȃ������ł����false�B</returns>
        Public Function Match(argCheck As Char) As Boolean
            ' No.1
            ' ����:8740: �܂�P�B
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
            ' ����:8753: �܂�Q�O�B
            ' 0x8753 (Windows-31J)
            ' 0x2473 (UTF-16BE)
            If (argCheck = "�S"c) Then
                Return true
            End If
            ' No.21
            ' ����:8754: ���[�}�����P�B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
            ' 0x8754 (Windows-31J)
            ' 0x2160 (UTF-16BE)
            If (argCheck = "�T"c) Then
                Return true
            End If
            ' No.22
            ' ����:���[�}�����B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
            ' 0x8755 (Windows-31J)
            ' 0x2161 (UTF-16BE)
            If (argCheck = "�U"c) Then
                Return true
            End If
            ' No.23
            ' ����:���[�}�����B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
            ' 0x8756 (Windows-31J)
            ' 0x2162 (UTF-16BE)
            If (argCheck = "�V"c) Then
                Return true
            End If
            ' No.24
            ' ����:���[�}�����B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
            ' 0x8757 (Windows-31J)
            ' 0x2163 (UTF-16BE)
            If (argCheck = "�W"c) Then
                Return true
            End If
            ' No.25
            ' ����:���[�}�����B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
            ' 0x8758 (Windows-31J)
            ' 0x2164 (UTF-16BE)
            If (argCheck = "�X"c) Then
                Return true
            End If
            ' No.26
            ' ����:���[�}�����B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
            ' 0x8759 (Windows-31J)
            ' 0x2165 (UTF-16BE)
            If (argCheck = "�Y"c) Then
                Return true
            End If
            ' No.27
            ' ����:���[�}�����B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
            ' 0x875a (Windows-31J)
            ' 0x2166 (UTF-16BE)
            If (argCheck = "�Z"c) Then
                Return true
            End If
            ' No.28
            ' ����:���[�}�����B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
            ' 0x875b (Windows-31J)
            ' 0x2167 (UTF-16BE)
            If (argCheck = "�["c) Then
                Return true
            End If
            ' No.29
            ' ����:���[�}�����B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
            ' 0x875c (Windows-31J)
            ' 0x2168 (UTF-16BE)
            If (argCheck = "�\"c) Then
                Return true
            End If
            ' No.30
            ' ����:875d: ���[�}�����P�O�B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
            ' 0x875d (Windows-31J)
            ' 0x2169 (UTF-16BE)
            If (argCheck = "�]"c) Then
                Return true
            End If
            ' No.32
            ' ����:875f: �~���B875e�̓X�L�b�v�B
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
            ' ����:8775: �������[�g���B
            ' 0x8775 (Windows-31J)
            ' 0x33a1 (UTF-16BE)
            If (argCheck = "�u"c) Then
                Return true
            End If
            ' No.63
            ' ����:877e: �����B877d�܂ł̓X�L�b�v�B
            ' 0x877e (Windows-31J)
            ' 0x337b (UTF-16BE)
            If (argCheck = "�~"c) Then
                Return true
            End If
            ' No.65
            ' ����:8780: �_�u���N�I�[�e�[�V�����B877f�̓X�L�b�v�B
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
            ' ����:8782: No. (IBM�g����������Q�Ƃ���Ă��܂�) (���d��������)
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
            ' ����:(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
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
            ' ����:(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
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
            ' ����:878f: ���a�B
            ' 0x878f (Windows-31J)
            ' 0x337c (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.81
            ' ����:8790��81e0�B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
            ' 0x81e0 (Windows-31J)
            ' 0x2252 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.82
            ' ����:8791��81df�B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
            ' 0x81df (Windows-31J)
            ' 0x2261 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.83
            ' ����:8792��81e7�B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
            ' 0x81e7 (Windows-31J)
            ' 0x222b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.84
            ' ����:8793: �L���B
            ' 0x8793 (Windows-31J)
            ' 0x222e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.85
            ' ����:8794: �V�O�}�B
            ' 0x8794 (Windows-31J)
            ' 0x2211 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.86
            ' ����:8795��81e3�B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
            ' 0x81e3 (Windows-31J)
            ' 0x221a (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.87
            ' ����:8796��81db�B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
            ' 0x81db (Windows-31J)
            ' 0x22a5 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.88
            ' ����:8797��81da�B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
            ' 0x81da (Windows-31J)
            ' 0x2220 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.89
            ' ����:8798: �L���B
            ' 0x8798 (Windows-31J)
            ' 0x221f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.90
            ' ����:8799: �O�p�B
            ' 0x8799 (Windows-31J)
            ' 0x22bf (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.91
            ' ����:879a��81e6�B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
            ' 0x81e6 (Windows-31J)
            ' 0x2235 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.92
            ' ����:879b��81bf�B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
            ' 0x81bf (Windows-31J)
            ' 0x2229 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.93
            ' ����:879c��81be: NEC���ꕶ���̍Ō�̕����B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
            ' 0x81be (Windows-31J)
            ' 0x222a (UTF-16BE)
            If (argCheck = "��"c) Then
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

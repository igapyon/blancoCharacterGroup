' ���̃\�[�X�R�[�h�� blanco Framework�ɂ���Ď�����������Ă��܂��B
Imports System

Namespace blanco.sample.charactergroup
    ''' <summary>�T���v���BIBM�g������ 0xfa40-fc4b�B115-119��BblancoCharacterGroup�̎����ɂ͉e�����܂���B</summary>
    Public Class SampleIbmKakutyouMojiCharacterGroup

        ''' <summary>�����O���[�v�Ɋ܂܂�镶���ł��邩�ǂ����𔻒肵�܂��B</summary>
        ''' <param name="argCheck">�`�F�b�N���s�����������B</param>
        ''' <returns>�����O���[�v�Ɋ܂܂�Ă����ture�B�O���[�v�Ɋ܂܂�Ȃ������ł����false�B</returns>
        Public Function Match(argCheck As Char) As Boolean
            ' No.1
            ' ����:fa40: �����̂P�B
            ' 0xfa40 (Windows-31J)
            ' 0x2170 (UTF-16BE)
            If (argCheck = "�@"c) Then
                Return true
            End If
            ' No.2
            ' 0xfa41 (Windows-31J)
            ' 0x2171 (UTF-16BE)
            If (argCheck = "�A"c) Then
                Return true
            End If
            ' No.3
            ' 0xfa42 (Windows-31J)
            ' 0x2172 (UTF-16BE)
            If (argCheck = "�B"c) Then
                Return true
            End If
            ' No.4
            ' 0xfa43 (Windows-31J)
            ' 0x2173 (UTF-16BE)
            If (argCheck = "�C"c) Then
                Return true
            End If
            ' No.5
            ' 0xfa44 (Windows-31J)
            ' 0x2174 (UTF-16BE)
            If (argCheck = "�D"c) Then
                Return true
            End If
            ' No.6
            ' 0xfa45 (Windows-31J)
            ' 0x2175 (UTF-16BE)
            If (argCheck = "�E"c) Then
                Return true
            End If
            ' No.7
            ' 0xfa46 (Windows-31J)
            ' 0x2176 (UTF-16BE)
            If (argCheck = "�F"c) Then
                Return true
            End If
            ' No.8
            ' 0xfa47 (Windows-31J)
            ' 0x2177 (UTF-16BE)
            If (argCheck = "�G"c) Then
                Return true
            End If
            ' No.9
            ' 0xfa48 (Windows-31J)
            ' 0x2178 (UTF-16BE)
            If (argCheck = "�H"c) Then
                Return true
            End If
            ' No.10
            ' ����:fa49: �����̂P�O�B
            ' 0xfa49 (Windows-31J)
            ' 0x2179 (UTF-16BE)
            If (argCheck = "�I"c) Then
                Return true
            End If
            ' No.11
            ' ����:fa4a��8754: ���[�}�����̂P�B(NEC���ꕶ���Ƀ}�b�v����Ă��܂�) (���d��������)
            ' 0x8754 (Windows-31J)
            ' 0x2160 (UTF-16BE)
            If (argCheck = "�T"c) Then
                Return true
            End If
            ' No.12
            ' ����:fa4b��8755: ���[�}�����̂Q�B(NEC���ꕶ���Ƀ}�b�v����Ă��܂�) (���d��������)
            ' 0x8755 (Windows-31J)
            ' 0x2161 (UTF-16BE)
            If (argCheck = "�U"c) Then
                Return true
            End If
            ' No.13
            ' ����:fa4c��875b: ���[�}�����̂R�B(NEC���ꕶ���Ƀ}�b�v����Ă��܂�) (���d��������)
            ' 0x8756 (Windows-31J)
            ' 0x2162 (UTF-16BE)
            If (argCheck = "�V"c) Then
                Return true
            End If
            ' No.14
            ' ����:fa4d��8757: ���[�}�����̂S�B(NEC���ꕶ���Ƀ}�b�v����Ă��܂�) (���d��������)
            ' 0x8757 (Windows-31J)
            ' 0x2163 (UTF-16BE)
            If (argCheck = "�W"c) Then
                Return true
            End If
            ' No.15
            ' ����:fa4e��8758: ���[�}�����̂T�B(NEC���ꕶ���Ƀ}�b�v����Ă��܂�) (���d��������)
            ' 0x8758 (Windows-31J)
            ' 0x2164 (UTF-16BE)
            If (argCheck = "�X"c) Then
                Return true
            End If
            ' No.16
            ' ����:fa4f��8759: ���[�}�����̂U�B(NEC���ꕶ���Ƀ}�b�v����Ă��܂�) (���d��������)
            ' 0x8759 (Windows-31J)
            ' 0x2165 (UTF-16BE)
            If (argCheck = "�Y"c) Then
                Return true
            End If
            ' No.17
            ' ����:fa50��875a: ���[�}�����̂V�B(NEC���ꕶ���Ƀ}�b�v����Ă��܂�) (���d��������)
            ' 0x875a (Windows-31J)
            ' 0x2166 (UTF-16BE)
            If (argCheck = "�Z"c) Then
                Return true
            End If
            ' No.18
            ' ����:fa51��875b: ���[�}�����̂W�B(NEC���ꕶ���Ƀ}�b�v����Ă��܂�) (���d��������)
            ' 0x875b (Windows-31J)
            ' 0x2167 (UTF-16BE)
            If (argCheck = "�["c) Then
                Return true
            End If
            ' No.19
            ' ����:fa52��875c: ���[�}�����̂X�B(NEC���ꕶ���Ƀ}�b�v����Ă��܂�) (���d��������)
            ' 0x875c (Windows-31J)
            ' 0x2168 (UTF-16BE)
            If (argCheck = "�\"c) Then
                Return true
            End If
            ' No.20
            ' ����:fa53��875d: ���[�}�����̂P�O�B(NEC���ꕶ���Ƀ}�b�v����Ă��܂�) (���d��������)
            ' 0x875d (Windows-31J)
            ' 0x2169 (UTF-16BE)
            If (argCheck = "�]"c) Then
                Return true
            End If
            ' No.21
            ' ����:fa54��81ca: (JIS X 0208-1983�Ƀ}�b�v����Ă��܂�) (���d��������)
            ' 0x81ca (Windows-31J)
            ' 0xffe2 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.22
            ' ����:fa55: �c�_�B
            ' 0xfa55 (Windows-31J)
            ' 0xffe4 (UTF-16BE)
            If (argCheck = "�U"c) Then
                Return true
            End If
            ' No.23
            ' 0xfa56 (Windows-31J)
            ' 0xff07 (UTF-16BE)
            If (argCheck = "�V"c) Then
                Return true
            End If
            ' No.24
            ' 0xfa57 (Windows-31J)
            ' 0xff02 (UTF-16BE)
            If (argCheck = ""�W"c) Then
                Return true
            End If
            ' No.25
            ' ����:fa58��878a: �i���j�B(NEC���ꕶ���Ƀ}�b�v����Ă��܂�) (���d��������)
            ' 0x878a (Windows-31J)
            ' 0x3231 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.26
            ' ����:fa59��8782: No.�B(NEC���ꕶ���Ƀ}�b�v����Ă��܂�) (���d��������)
            ' 0x8782 (Windows-31J)
            ' 0x2116 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.27
            ' ����:fa5a��8784: TEL�B(NEC���ꕶ���Ƀ}�b�v����Ă��܂�) (���d��������)
            ' 0x8784 (Windows-31J)
            ' 0x2121 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.28
            ' ����:fa5b��81e6: �Ȃ��Ȃ�΁B(JIS X 0208-1983�Ƀ}�b�v����Ă��܂�) (���d��������)
            ' 0x81e6 (Windows-31J)
            ' 0x2235 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.29
            ' ����:fa5c:
            ' 0xfa5c (Windows-31J)
            ' 0x7e8a (UTF-16BE)
            If (argCheck = "�\"c) Then
                Return true
            End If
            ' No.30
            ' 0xfa5d (Windows-31J)
            ' 0x891c (UTF-16BE)
            If (argCheck = "�]"c) Then
                Return true
            End If
            ' No.31
            ' 0xfa5e (Windows-31J)
            ' 0x9348 (UTF-16BE)
            If (argCheck = "�^"c) Then
                Return true
            End If
            ' No.32
            ' 0xfa5f (Windows-31J)
            ' 0x9288 (UTF-16BE)
            If (argCheck = "�_"c) Then
                Return true
            End If
            ' No.33
            ' 0xfa60 (Windows-31J)
            ' 0x84dc (UTF-16BE)
            If (argCheck = "�`"c) Then
                Return true
            End If
            ' No.34
            ' 0xfa61 (Windows-31J)
            ' 0x4fc9 (UTF-16BE)
            If (argCheck = "�a"c) Then
                Return true
            End If
            ' No.35
            ' 0xfa62 (Windows-31J)
            ' 0x70bb (UTF-16BE)
            If (argCheck = "�b"c) Then
                Return true
            End If
            ' No.36
            ' 0xfa63 (Windows-31J)
            ' 0x6631 (UTF-16BE)
            If (argCheck = "�c"c) Then
                Return true
            End If
            ' No.37
            ' 0xfa64 (Windows-31J)
            ' 0x68c8 (UTF-16BE)
            If (argCheck = "�d"c) Then
                Return true
            End If
            ' No.38
            ' 0xfa65 (Windows-31J)
            ' 0x92f9 (UTF-16BE)
            If (argCheck = "�e"c) Then
                Return true
            End If
            ' No.39
            ' 0xfa66 (Windows-31J)
            ' 0x66fb (UTF-16BE)
            If (argCheck = "�f"c) Then
                Return true
            End If
            ' No.40
            ' 0xfa67 (Windows-31J)
            ' 0x5f45 (UTF-16BE)
            If (argCheck = "�g"c) Then
                Return true
            End If
            ' No.41
            ' 0xfa68 (Windows-31J)
            ' 0x4e28 (UTF-16BE)
            If (argCheck = "�h"c) Then
                Return true
            End If
            ' No.42
            ' 0xfa69 (Windows-31J)
            ' 0x4ee1 (UTF-16BE)
            If (argCheck = "�i"c) Then
                Return true
            End If
            ' No.43
            ' 0xfa6a (Windows-31J)
            ' 0x4efc (UTF-16BE)
            If (argCheck = "�j"c) Then
                Return true
            End If
            ' No.44
            ' 0xfa6b (Windows-31J)
            ' 0x4f00 (UTF-16BE)
            If (argCheck = "�k"c) Then
                Return true
            End If
            ' No.45
            ' 0xfa6c (Windows-31J)
            ' 0x4f03 (UTF-16BE)
            If (argCheck = "�l"c) Then
                Return true
            End If
            ' No.46
            ' 0xfa6d (Windows-31J)
            ' 0x4f39 (UTF-16BE)
            If (argCheck = "�m"c) Then
                Return true
            End If
            ' No.47
            ' 0xfa6e (Windows-31J)
            ' 0x4f56 (UTF-16BE)
            If (argCheck = "�n"c) Then
                Return true
            End If
            ' No.48
            ' 0xfa6f (Windows-31J)
            ' 0x4f92 (UTF-16BE)
            If (argCheck = "�o"c) Then
                Return true
            End If
            ' No.49
            ' 0xfa70 (Windows-31J)
            ' 0x4f8a (UTF-16BE)
            If (argCheck = "�p"c) Then
                Return true
            End If
            ' No.50
            ' 0xfa71 (Windows-31J)
            ' 0x4f9a (UTF-16BE)
            If (argCheck = "�q"c) Then
                Return true
            End If
            ' No.51
            ' 0xfa72 (Windows-31J)
            ' 0x4f94 (UTF-16BE)
            If (argCheck = "�r"c) Then
                Return true
            End If
            ' No.52
            ' 0xfa73 (Windows-31J)
            ' 0x4fcd (UTF-16BE)
            If (argCheck = "�s"c) Then
                Return true
            End If
            ' No.53
            ' 0xfa74 (Windows-31J)
            ' 0x5040 (UTF-16BE)
            If (argCheck = "�t"c) Then
                Return true
            End If
            ' No.54
            ' 0xfa75 (Windows-31J)
            ' 0x5022 (UTF-16BE)
            If (argCheck = "�u"c) Then
                Return true
            End If
            ' No.55
            ' 0xfa76 (Windows-31J)
            ' 0x4fff (UTF-16BE)
            If (argCheck = "�v"c) Then
                Return true
            End If
            ' No.56
            ' 0xfa77 (Windows-31J)
            ' 0x501e (UTF-16BE)
            If (argCheck = "�w"c) Then
                Return true
            End If
            ' No.57
            ' 0xfa78 (Windows-31J)
            ' 0x5046 (UTF-16BE)
            If (argCheck = "�x"c) Then
                Return true
            End If
            ' No.58
            ' 0xfa79 (Windows-31J)
            ' 0x5070 (UTF-16BE)
            If (argCheck = "�y"c) Then
                Return true
            End If
            ' No.59
            ' 0xfa7a (Windows-31J)
            ' 0x5042 (UTF-16BE)
            If (argCheck = "�z"c) Then
                Return true
            End If
            ' No.60
            ' 0xfa7b (Windows-31J)
            ' 0x5094 (UTF-16BE)
            If (argCheck = "�{"c) Then
                Return true
            End If
            ' No.61
            ' 0xfa7c (Windows-31J)
            ' 0x50f4 (UTF-16BE)
            If (argCheck = "�|"c) Then
                Return true
            End If
            ' No.62
            ' 0xfa7d (Windows-31J)
            ' 0x50d8 (UTF-16BE)
            If (argCheck = "�}"c) Then
                Return true
            End If
            ' No.63
            ' ����:fa7e:
            ' 0xfa7e (Windows-31J)
            ' 0x514a (UTF-16BE)
            If (argCheck = "�~"c) Then
                Return true
            End If
            ' No.65
            ' ����:fa80:
            ' 0xfa80 (Windows-31J)
            ' 0x5164 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.66
            ' 0xfa81 (Windows-31J)
            ' 0x519d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.67
            ' 0xfa82 (Windows-31J)
            ' 0x51be (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.68
            ' 0xfa83 (Windows-31J)
            ' 0x51ec (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.69
            ' 0xfa84 (Windows-31J)
            ' 0x5215 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.70
            ' 0xfa85 (Windows-31J)
            ' 0x529c (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.71
            ' 0xfa86 (Windows-31J)
            ' 0x52a6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.72
            ' 0xfa87 (Windows-31J)
            ' 0x52c0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.73
            ' 0xfa88 (Windows-31J)
            ' 0x52db (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.74
            ' 0xfa89 (Windows-31J)
            ' 0x5300 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.75
            ' 0xfa8a (Windows-31J)
            ' 0x5307 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.76
            ' 0xfa8b (Windows-31J)
            ' 0x5324 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.77
            ' 0xfa8c (Windows-31J)
            ' 0x5372 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.78
            ' 0xfa8d (Windows-31J)
            ' 0x5393 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.79
            ' 0xfa8e (Windows-31J)
            ' 0x53b2 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.80
            ' 0xfa8f (Windows-31J)
            ' 0x53dd (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.81
            ' 0xfa90 (Windows-31J)
            ' 0xfa0e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.82
            ' 0xfa91 (Windows-31J)
            ' 0x549c (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.83
            ' 0xfa92 (Windows-31J)
            ' 0x548a (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.84
            ' 0xfa93 (Windows-31J)
            ' 0x54a9 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.85
            ' 0xfa94 (Windows-31J)
            ' 0x54ff (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.86
            ' 0xfa95 (Windows-31J)
            ' 0x5586 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.87
            ' 0xfa96 (Windows-31J)
            ' 0x5759 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.88
            ' 0xfa97 (Windows-31J)
            ' 0x5765 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.89
            ' 0xfa98 (Windows-31J)
            ' 0x57ac (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.90
            ' 0xfa99 (Windows-31J)
            ' 0x57c8 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.91
            ' 0xfa9a (Windows-31J)
            ' 0x57c7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.92
            ' 0xfa9b (Windows-31J)
            ' 0xfa0f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.93
            ' 0xfa9c (Windows-31J)
            ' 0xfa10 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.94
            ' 0xfa9d (Windows-31J)
            ' 0x589e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.95
            ' 0xfa9e (Windows-31J)
            ' 0x58b2 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.96
            ' 0xfa9f (Windows-31J)
            ' 0x590b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.97
            ' 0xfaa0 (Windows-31J)
            ' 0x5953 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.98
            ' 0xfaa1 (Windows-31J)
            ' 0x595b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.99
            ' 0xfaa2 (Windows-31J)
            ' 0x595d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.100
            ' 0xfaa3 (Windows-31J)
            ' 0x5963 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.101
            ' 0xfaa4 (Windows-31J)
            ' 0x59a4 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.102
            ' 0xfaa5 (Windows-31J)
            ' 0x59ba (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.103
            ' 0xfaa6 (Windows-31J)
            ' 0x5b56 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.104
            ' 0xfaa7 (Windows-31J)
            ' 0x5bc0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.105
            ' 0xfaa8 (Windows-31J)
            ' 0x752f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.106
            ' 0xfaa9 (Windows-31J)
            ' 0x5bd8 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.107
            ' 0xfaaa (Windows-31J)
            ' 0x5bec (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.108
            ' 0xfaab (Windows-31J)
            ' 0x5c1e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.109
            ' 0xfaac (Windows-31J)
            ' 0x5ca6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.110
            ' 0xfaad (Windows-31J)
            ' 0x5cba (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.111
            ' 0xfaae (Windows-31J)
            ' 0x5cf5 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.112
            ' 0xfaaf (Windows-31J)
            ' 0x5d27 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.113
            ' 0xfab0 (Windows-31J)
            ' 0x5d53 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.114
            ' 0xfab1 (Windows-31J)
            ' 0xfa11 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.115
            ' 0xfab2 (Windows-31J)
            ' 0x5d42 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.116
            ' 0xfab3 (Windows-31J)
            ' 0x5d6d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.117
            ' 0xfab4 (Windows-31J)
            ' 0x5db8 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.118
            ' 0xfab5 (Windows-31J)
            ' 0x5db9 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.119
            ' 0xfab6 (Windows-31J)
            ' 0x5dd0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.120
            ' 0xfab7 (Windows-31J)
            ' 0x5f21 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.121
            ' 0xfab8 (Windows-31J)
            ' 0x5f34 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.122
            ' 0xfab9 (Windows-31J)
            ' 0x5f67 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.123
            ' 0xfaba (Windows-31J)
            ' 0x5fb7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.124
            ' 0xfabb (Windows-31J)
            ' 0x5fde (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.125
            ' 0xfabc (Windows-31J)
            ' 0x605d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.126
            ' 0xfabd (Windows-31J)
            ' 0x6085 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.127
            ' 0xfabe (Windows-31J)
            ' 0x608a (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.128
            ' 0xfabf (Windows-31J)
            ' 0x60de (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.129
            ' 0xfac0 (Windows-31J)
            ' 0x60d5 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.130
            ' 0xfac1 (Windows-31J)
            ' 0x6120 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.131
            ' 0xfac2 (Windows-31J)
            ' 0x60f2 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.132
            ' 0xfac3 (Windows-31J)
            ' 0x6111 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.133
            ' 0xfac4 (Windows-31J)
            ' 0x6137 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.134
            ' 0xfac5 (Windows-31J)
            ' 0x6130 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.135
            ' 0xfac6 (Windows-31J)
            ' 0x6198 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.136
            ' 0xfac7 (Windows-31J)
            ' 0x6213 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.137
            ' 0xfac8 (Windows-31J)
            ' 0x62a6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.138
            ' 0xfac9 (Windows-31J)
            ' 0x63f5 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.139
            ' 0xfaca (Windows-31J)
            ' 0x6460 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.140
            ' 0xfacb (Windows-31J)
            ' 0x649d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.141
            ' 0xfacc (Windows-31J)
            ' 0x64ce (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.142
            ' 0xfacd (Windows-31J)
            ' 0x654e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.143
            ' 0xface (Windows-31J)
            ' 0x6600 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.144
            ' 0xfacf (Windows-31J)
            ' 0x6615 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.145
            ' 0xfad0 (Windows-31J)
            ' 0x663b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.146
            ' 0xfad1 (Windows-31J)
            ' 0x6609 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.147
            ' 0xfad2 (Windows-31J)
            ' 0x662e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.148
            ' 0xfad3 (Windows-31J)
            ' 0x661e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.149
            ' 0xfad4 (Windows-31J)
            ' 0x6624 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.150
            ' 0xfad5 (Windows-31J)
            ' 0x6665 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.151
            ' 0xfad6 (Windows-31J)
            ' 0x6657 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.152
            ' 0xfad7 (Windows-31J)
            ' 0x6659 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.153
            ' 0xfad8 (Windows-31J)
            ' 0xfa12 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.154
            ' 0xfad9 (Windows-31J)
            ' 0x6673 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.155
            ' 0xfada (Windows-31J)
            ' 0x6699 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.156
            ' 0xfadb (Windows-31J)
            ' 0x66a0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.157
            ' 0xfadc (Windows-31J)
            ' 0x66b2 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.158
            ' 0xfadd (Windows-31J)
            ' 0x66bf (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.159
            ' 0xfade (Windows-31J)
            ' 0x66fa (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.160
            ' 0xfadf (Windows-31J)
            ' 0x670e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.161
            ' 0xfae0 (Windows-31J)
            ' 0xf929 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.162
            ' 0xfae1 (Windows-31J)
            ' 0x6766 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.163
            ' 0xfae2 (Windows-31J)
            ' 0x67bb (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.164
            ' 0xfae3 (Windows-31J)
            ' 0x6852 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.165
            ' 0xfae4 (Windows-31J)
            ' 0x67c0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.166
            ' 0xfae5 (Windows-31J)
            ' 0x6801 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.167
            ' 0xfae6 (Windows-31J)
            ' 0x6844 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.168
            ' 0xfae7 (Windows-31J)
            ' 0x68cf (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.169
            ' 0xfae8 (Windows-31J)
            ' 0xfa13 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.170
            ' 0xfae9 (Windows-31J)
            ' 0x6968 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.171
            ' 0xfaea (Windows-31J)
            ' 0xfa14 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.172
            ' 0xfaeb (Windows-31J)
            ' 0x6998 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.173
            ' 0xfaec (Windows-31J)
            ' 0x69e2 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.174
            ' 0xfaed (Windows-31J)
            ' 0x6a30 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.175
            ' 0xfaee (Windows-31J)
            ' 0x6a6b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.176
            ' 0xfaef (Windows-31J)
            ' 0x6a46 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.177
            ' 0xfaf0 (Windows-31J)
            ' 0x6a73 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.178
            ' 0xfaf1 (Windows-31J)
            ' 0x6a7e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.179
            ' 0xfaf2 (Windows-31J)
            ' 0x6ae2 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.180
            ' 0xfaf3 (Windows-31J)
            ' 0x6ae4 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.181
            ' 0xfaf4 (Windows-31J)
            ' 0x6bd6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.182
            ' 0xfaf5 (Windows-31J)
            ' 0x6c3f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.183
            ' 0xfaf6 (Windows-31J)
            ' 0x6c5c (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.184
            ' 0xfaf7 (Windows-31J)
            ' 0x6c86 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.185
            ' 0xfaf8 (Windows-31J)
            ' 0x6c6f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.186
            ' 0xfaf9 (Windows-31J)
            ' 0x6cda (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.187
            ' 0xfafa (Windows-31J)
            ' 0x6d04 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.188
            ' 0xfafb (Windows-31J)
            ' 0x6d87 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.189
            ' ����:fafc:
            ' 0xfafc (Windows-31J)
            ' 0x6d6f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.191
            ' ����:fb40: fafd����fb3f�܂ł̓X�L�b�v�B
            ' 0xfb40 (Windows-31J)
            ' 0x6d96 (UTF-16BE)
            If (argCheck = "�@"c) Then
                Return true
            End If
            ' No.192
            ' 0xfb41 (Windows-31J)
            ' 0x6dac (UTF-16BE)
            If (argCheck = "�A"c) Then
                Return true
            End If
            ' No.193
            ' 0xfb42 (Windows-31J)
            ' 0x6dcf (UTF-16BE)
            If (argCheck = "�B"c) Then
                Return true
            End If
            ' No.194
            ' 0xfb43 (Windows-31J)
            ' 0x6df8 (UTF-16BE)
            If (argCheck = "�C"c) Then
                Return true
            End If
            ' No.195
            ' 0xfb44 (Windows-31J)
            ' 0x6df2 (UTF-16BE)
            If (argCheck = "�D"c) Then
                Return true
            End If
            ' No.196
            ' 0xfb45 (Windows-31J)
            ' 0x6dfc (UTF-16BE)
            If (argCheck = "�E"c) Then
                Return true
            End If
            ' No.197
            ' 0xfb46 (Windows-31J)
            ' 0x6e39 (UTF-16BE)
            If (argCheck = "�F"c) Then
                Return true
            End If
            ' No.198
            ' 0xfb47 (Windows-31J)
            ' 0x6e5c (UTF-16BE)
            If (argCheck = "�G"c) Then
                Return true
            End If
            ' No.199
            ' 0xfb48 (Windows-31J)
            ' 0x6e27 (UTF-16BE)
            If (argCheck = "�H"c) Then
                Return true
            End If
            ' No.200
            ' 0xfb49 (Windows-31J)
            ' 0x6e3c (UTF-16BE)
            If (argCheck = "�I"c) Then
                Return true
            End If
            ' No.201
            ' 0xfb4a (Windows-31J)
            ' 0x6ebf (UTF-16BE)
            If (argCheck = "�J"c) Then
                Return true
            End If
            ' No.202
            ' 0xfb4b (Windows-31J)
            ' 0x6f88 (UTF-16BE)
            If (argCheck = "�K"c) Then
                Return true
            End If
            ' No.203
            ' 0xfb4c (Windows-31J)
            ' 0x6fb5 (UTF-16BE)
            If (argCheck = "�L"c) Then
                Return true
            End If
            ' No.204
            ' 0xfb4d (Windows-31J)
            ' 0x6ff5 (UTF-16BE)
            If (argCheck = "�M"c) Then
                Return true
            End If
            ' No.205
            ' 0xfb4e (Windows-31J)
            ' 0x7005 (UTF-16BE)
            If (argCheck = "�N"c) Then
                Return true
            End If
            ' No.206
            ' 0xfb4f (Windows-31J)
            ' 0x7007 (UTF-16BE)
            If (argCheck = "�O"c) Then
                Return true
            End If
            ' No.207
            ' 0xfb50 (Windows-31J)
            ' 0x7028 (UTF-16BE)
            If (argCheck = "�P"c) Then
                Return true
            End If
            ' No.208
            ' 0xfb51 (Windows-31J)
            ' 0x7085 (UTF-16BE)
            If (argCheck = "�Q"c) Then
                Return true
            End If
            ' No.209
            ' 0xfb52 (Windows-31J)
            ' 0x70ab (UTF-16BE)
            If (argCheck = "�R"c) Then
                Return true
            End If
            ' No.210
            ' 0xfb53 (Windows-31J)
            ' 0x710f (UTF-16BE)
            If (argCheck = "�S"c) Then
                Return true
            End If
            ' No.211
            ' 0xfb54 (Windows-31J)
            ' 0x7104 (UTF-16BE)
            If (argCheck = "�T"c) Then
                Return true
            End If
            ' No.212
            ' 0xfb55 (Windows-31J)
            ' 0x715c (UTF-16BE)
            If (argCheck = "�U"c) Then
                Return true
            End If
            ' No.213
            ' 0xfb56 (Windows-31J)
            ' 0x7146 (UTF-16BE)
            If (argCheck = "�V"c) Then
                Return true
            End If
            ' No.214
            ' 0xfb57 (Windows-31J)
            ' 0x7147 (UTF-16BE)
            If (argCheck = "�W"c) Then
                Return true
            End If
            ' No.215
            ' 0xfb58 (Windows-31J)
            ' 0xfa15 (UTF-16BE)
            If (argCheck = "�X"c) Then
                Return true
            End If
            ' No.216
            ' 0xfb59 (Windows-31J)
            ' 0x71c1 (UTF-16BE)
            If (argCheck = "�Y"c) Then
                Return true
            End If
            ' No.217
            ' 0xfb5a (Windows-31J)
            ' 0x71fe (UTF-16BE)
            If (argCheck = "�Z"c) Then
                Return true
            End If
            ' No.218
            ' 0xfb5b (Windows-31J)
            ' 0x72b1 (UTF-16BE)
            If (argCheck = "�["c) Then
                Return true
            End If
            ' No.219
            ' 0xfb5c (Windows-31J)
            ' 0x72be (UTF-16BE)
            If (argCheck = "�\"c) Then
                Return true
            End If
            ' No.220
            ' 0xfb5d (Windows-31J)
            ' 0x7324 (UTF-16BE)
            If (argCheck = "�]"c) Then
                Return true
            End If
            ' No.221
            ' 0xfb5e (Windows-31J)
            ' 0xfa16 (UTF-16BE)
            If (argCheck = "�^"c) Then
                Return true
            End If
            ' No.222
            ' 0xfb5f (Windows-31J)
            ' 0x7377 (UTF-16BE)
            If (argCheck = "�_"c) Then
                Return true
            End If
            ' No.223
            ' 0xfb60 (Windows-31J)
            ' 0x73bd (UTF-16BE)
            If (argCheck = "�`"c) Then
                Return true
            End If
            ' No.224
            ' 0xfb61 (Windows-31J)
            ' 0x73c9 (UTF-16BE)
            If (argCheck = "�a"c) Then
                Return true
            End If
            ' No.225
            ' 0xfb62 (Windows-31J)
            ' 0x73d6 (UTF-16BE)
            If (argCheck = "�b"c) Then
                Return true
            End If
            ' No.226
            ' 0xfb63 (Windows-31J)
            ' 0x73e3 (UTF-16BE)
            If (argCheck = "�c"c) Then
                Return true
            End If
            ' No.227
            ' 0xfb64 (Windows-31J)
            ' 0x73d2 (UTF-16BE)
            If (argCheck = "�d"c) Then
                Return true
            End If
            ' No.228
            ' 0xfb65 (Windows-31J)
            ' 0x7407 (UTF-16BE)
            If (argCheck = "�e"c) Then
                Return true
            End If
            ' No.229
            ' 0xfb66 (Windows-31J)
            ' 0x73f5 (UTF-16BE)
            If (argCheck = "�f"c) Then
                Return true
            End If
            ' No.230
            ' 0xfb67 (Windows-31J)
            ' 0x7426 (UTF-16BE)
            If (argCheck = "�g"c) Then
                Return true
            End If
            ' No.231
            ' 0xfb68 (Windows-31J)
            ' 0x742a (UTF-16BE)
            If (argCheck = "�h"c) Then
                Return true
            End If
            ' No.232
            ' 0xfb69 (Windows-31J)
            ' 0x7429 (UTF-16BE)
            If (argCheck = "�i"c) Then
                Return true
            End If
            ' No.233
            ' 0xfb6a (Windows-31J)
            ' 0x742e (UTF-16BE)
            If (argCheck = "�j"c) Then
                Return true
            End If
            ' No.234
            ' 0xfb6b (Windows-31J)
            ' 0x7462 (UTF-16BE)
            If (argCheck = "�k"c) Then
                Return true
            End If
            ' No.235
            ' 0xfb6c (Windows-31J)
            ' 0x7489 (UTF-16BE)
            If (argCheck = "�l"c) Then
                Return true
            End If
            ' No.236
            ' 0xfb6d (Windows-31J)
            ' 0x749f (UTF-16BE)
            If (argCheck = "�m"c) Then
                Return true
            End If
            ' No.237
            ' 0xfb6e (Windows-31J)
            ' 0x7501 (UTF-16BE)
            If (argCheck = "�n"c) Then
                Return true
            End If
            ' No.238
            ' 0xfb6f (Windows-31J)
            ' 0x756f (UTF-16BE)
            If (argCheck = "�o"c) Then
                Return true
            End If
            ' No.239
            ' 0xfb70 (Windows-31J)
            ' 0x7682 (UTF-16BE)
            If (argCheck = "�p"c) Then
                Return true
            End If
            ' No.240
            ' 0xfb71 (Windows-31J)
            ' 0x769c (UTF-16BE)
            If (argCheck = "�q"c) Then
                Return true
            End If
            ' No.241
            ' 0xfb72 (Windows-31J)
            ' 0x769e (UTF-16BE)
            If (argCheck = "�r"c) Then
                Return true
            End If
            ' No.242
            ' 0xfb73 (Windows-31J)
            ' 0x769b (UTF-16BE)
            If (argCheck = "�s"c) Then
                Return true
            End If
            ' No.243
            ' 0xfb74 (Windows-31J)
            ' 0x76a6 (UTF-16BE)
            If (argCheck = "�t"c) Then
                Return true
            End If
            ' No.244
            ' 0xfb75 (Windows-31J)
            ' 0xfa17 (UTF-16BE)
            If (argCheck = "�u"c) Then
                Return true
            End If
            ' No.245
            ' 0xfb76 (Windows-31J)
            ' 0x7746 (UTF-16BE)
            If (argCheck = "�v"c) Then
                Return true
            End If
            ' No.246
            ' 0xfb77 (Windows-31J)
            ' 0x52af (UTF-16BE)
            If (argCheck = "�w"c) Then
                Return true
            End If
            ' No.247
            ' 0xfb78 (Windows-31J)
            ' 0x7821 (UTF-16BE)
            If (argCheck = "�x"c) Then
                Return true
            End If
            ' No.248
            ' 0xfb79 (Windows-31J)
            ' 0x784e (UTF-16BE)
            If (argCheck = "�y"c) Then
                Return true
            End If
            ' No.249
            ' 0xfb7a (Windows-31J)
            ' 0x7864 (UTF-16BE)
            If (argCheck = "�z"c) Then
                Return true
            End If
            ' No.250
            ' 0xfb7b (Windows-31J)
            ' 0x787a (UTF-16BE)
            If (argCheck = "�{"c) Then
                Return true
            End If
            ' No.251
            ' 0xfb7c (Windows-31J)
            ' 0x7930 (UTF-16BE)
            If (argCheck = "�|"c) Then
                Return true
            End If
            ' No.252
            ' 0xfb7d (Windows-31J)
            ' 0xfa18 (UTF-16BE)
            If (argCheck = "�}"c) Then
                Return true
            End If
            ' No.253
            ' ����:fb7e:
            ' 0xfb7e (Windows-31J)
            ' 0xfa19 (UTF-16BE)
            If (argCheck = "�~"c) Then
                Return true
            End If
            ' No.255
            ' ����:fb80: fb7f�̓X�L�b�v�B
            ' 0xfb80 (Windows-31J)
            ' 0xfa1a (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.256
            ' 0xfb81 (Windows-31J)
            ' 0x7994 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.257
            ' 0xfb82 (Windows-31J)
            ' 0xfa1b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.258
            ' 0xfb83 (Windows-31J)
            ' 0x799b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.259
            ' 0xfb84 (Windows-31J)
            ' 0x7ad1 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.260
            ' 0xfb85 (Windows-31J)
            ' 0x7ae7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.261
            ' 0xfb86 (Windows-31J)
            ' 0xfa1c (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.262
            ' 0xfb87 (Windows-31J)
            ' 0x7aeb (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.263
            ' 0xfb88 (Windows-31J)
            ' 0x7b9e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.264
            ' 0xfb89 (Windows-31J)
            ' 0xfa1d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.265
            ' 0xfb8a (Windows-31J)
            ' 0x7d48 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.266
            ' 0xfb8b (Windows-31J)
            ' 0x7d5c (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.267
            ' 0xfb8c (Windows-31J)
            ' 0x7db7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.268
            ' 0xfb8d (Windows-31J)
            ' 0x7da0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.269
            ' 0xfb8e (Windows-31J)
            ' 0x7dd6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.270
            ' 0xfb8f (Windows-31J)
            ' 0x7e52 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.271
            ' 0xfb90 (Windows-31J)
            ' 0x7f47 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.272
            ' 0xfb91 (Windows-31J)
            ' 0x7fa1 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.273
            ' 0xfb92 (Windows-31J)
            ' 0xfa1e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.274
            ' 0xfb93 (Windows-31J)
            ' 0x8301 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.275
            ' 0xfb94 (Windows-31J)
            ' 0x8362 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.276
            ' 0xfb95 (Windows-31J)
            ' 0x837f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.277
            ' 0xfb96 (Windows-31J)
            ' 0x83c7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.278
            ' 0xfb97 (Windows-31J)
            ' 0x83f6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.279
            ' 0xfb98 (Windows-31J)
            ' 0x8448 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.280
            ' 0xfb99 (Windows-31J)
            ' 0x84b4 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.281
            ' 0xfb9a (Windows-31J)
            ' 0x8553 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.282
            ' 0xfb9b (Windows-31J)
            ' 0x8559 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.283
            ' 0xfb9c (Windows-31J)
            ' 0x856b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.284
            ' 0xfb9d (Windows-31J)
            ' 0xfa1f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.285
            ' 0xfb9e (Windows-31J)
            ' 0x85b0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.286
            ' 0xfb9f (Windows-31J)
            ' 0xfa20 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.287
            ' 0xfba0 (Windows-31J)
            ' 0xfa21 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.288
            ' 0xfba1 (Windows-31J)
            ' 0x8807 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.289
            ' 0xfba2 (Windows-31J)
            ' 0x88f5 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.290
            ' 0xfba3 (Windows-31J)
            ' 0x8a12 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.291
            ' 0xfba4 (Windows-31J)
            ' 0x8a37 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.292
            ' 0xfba5 (Windows-31J)
            ' 0x8a79 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.293
            ' 0xfba6 (Windows-31J)
            ' 0x8aa7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.294
            ' 0xfba7 (Windows-31J)
            ' 0x8abe (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.295
            ' 0xfba8 (Windows-31J)
            ' 0x8adf (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.296
            ' 0xfba9 (Windows-31J)
            ' 0xfa22 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.297
            ' 0xfbaa (Windows-31J)
            ' 0x8af6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.298
            ' 0xfbab (Windows-31J)
            ' 0x8b53 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.299
            ' 0xfbac (Windows-31J)
            ' 0x8b7f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.300
            ' 0xfbad (Windows-31J)
            ' 0x8cf0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.301
            ' 0xfbae (Windows-31J)
            ' 0x8cf4 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.302
            ' 0xfbaf (Windows-31J)
            ' 0x8d12 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.303
            ' 0xfbb0 (Windows-31J)
            ' 0x8d76 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.304
            ' 0xfbb1 (Windows-31J)
            ' 0xfa23 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.305
            ' 0xfbb2 (Windows-31J)
            ' 0x8ecf (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.306
            ' 0xfbb3 (Windows-31J)
            ' 0xfa24 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.307
            ' 0xfbb4 (Windows-31J)
            ' 0xfa25 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.308
            ' 0xfbb5 (Windows-31J)
            ' 0x9067 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.309
            ' 0xfbb6 (Windows-31J)
            ' 0x90de (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.310
            ' 0xfbb7 (Windows-31J)
            ' 0xfa26 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.311
            ' 0xfbb8 (Windows-31J)
            ' 0x9115 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.312
            ' 0xfbb9 (Windows-31J)
            ' 0x9127 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.313
            ' 0xfbba (Windows-31J)
            ' 0x91da (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.314
            ' 0xfbbb (Windows-31J)
            ' 0x91d7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.315
            ' 0xfbbc (Windows-31J)
            ' 0x91de (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.316
            ' 0xfbbd (Windows-31J)
            ' 0x91ed (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.317
            ' 0xfbbe (Windows-31J)
            ' 0x91ee (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.318
            ' 0xfbbf (Windows-31J)
            ' 0x91e4 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.319
            ' 0xfbc0 (Windows-31J)
            ' 0x91e5 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.320
            ' 0xfbc1 (Windows-31J)
            ' 0x9206 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.321
            ' 0xfbc2 (Windows-31J)
            ' 0x9210 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.322
            ' 0xfbc3 (Windows-31J)
            ' 0x920a (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.323
            ' 0xfbc4 (Windows-31J)
            ' 0x923a (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.324
            ' 0xfbc5 (Windows-31J)
            ' 0x9240 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.325
            ' 0xfbc6 (Windows-31J)
            ' 0x923c (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.326
            ' 0xfbc7 (Windows-31J)
            ' 0x924e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.327
            ' 0xfbc8 (Windows-31J)
            ' 0x9259 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.328
            ' 0xfbc9 (Windows-31J)
            ' 0x9251 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.329
            ' 0xfbca (Windows-31J)
            ' 0x9239 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.330
            ' 0xfbcb (Windows-31J)
            ' 0x9267 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.331
            ' 0xfbcc (Windows-31J)
            ' 0x92a7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.332
            ' 0xfbcd (Windows-31J)
            ' 0x9277 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.333
            ' 0xfbce (Windows-31J)
            ' 0x9278 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.334
            ' 0xfbcf (Windows-31J)
            ' 0x92e7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.335
            ' 0xfbd0 (Windows-31J)
            ' 0x92d7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.336
            ' 0xfbd1 (Windows-31J)
            ' 0x92d9 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.337
            ' 0xfbd2 (Windows-31J)
            ' 0x92d0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.338
            ' 0xfbd3 (Windows-31J)
            ' 0xfa27 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.339
            ' 0xfbd4 (Windows-31J)
            ' 0x92d5 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.340
            ' 0xfbd5 (Windows-31J)
            ' 0x92e0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.341
            ' 0xfbd6 (Windows-31J)
            ' 0x92d3 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.342
            ' 0xfbd7 (Windows-31J)
            ' 0x9325 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.343
            ' 0xfbd8 (Windows-31J)
            ' 0x9321 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.344
            ' 0xfbd9 (Windows-31J)
            ' 0x92fb (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.345
            ' 0xfbda (Windows-31J)
            ' 0xfa28 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.346
            ' 0xfbdb (Windows-31J)
            ' 0x931e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.347
            ' 0xfbdc (Windows-31J)
            ' 0x92ff (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.348
            ' 0xfbdd (Windows-31J)
            ' 0x931d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.349
            ' 0xfbde (Windows-31J)
            ' 0x9302 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.350
            ' 0xfbdf (Windows-31J)
            ' 0x9370 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.351
            ' 0xfbe0 (Windows-31J)
            ' 0x9357 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.352
            ' 0xfbe1 (Windows-31J)
            ' 0x93a4 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.353
            ' 0xfbe2 (Windows-31J)
            ' 0x93c6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.354
            ' 0xfbe3 (Windows-31J)
            ' 0x93de (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.355
            ' 0xfbe4 (Windows-31J)
            ' 0x93f8 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.356
            ' 0xfbe5 (Windows-31J)
            ' 0x9431 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.357
            ' 0xfbe6 (Windows-31J)
            ' 0x9445 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.358
            ' 0xfbe7 (Windows-31J)
            ' 0x9448 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.359
            ' 0xfbe8 (Windows-31J)
            ' 0x9592 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.360
            ' 0xfbe9 (Windows-31J)
            ' 0xf9dc (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.361
            ' 0xfbea (Windows-31J)
            ' 0xfa29 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.362
            ' 0xfbeb (Windows-31J)
            ' 0x969d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.363
            ' 0xfbec (Windows-31J)
            ' 0x96af (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.364
            ' 0xfbed (Windows-31J)
            ' 0x9733 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.365
            ' 0xfbee (Windows-31J)
            ' 0x973b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.366
            ' 0xfbef (Windows-31J)
            ' 0x9743 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.367
            ' 0xfbf0 (Windows-31J)
            ' 0x974d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.368
            ' 0xfbf1 (Windows-31J)
            ' 0x974f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.369
            ' 0xfbf2 (Windows-31J)
            ' 0x9751 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.370
            ' 0xfbf3 (Windows-31J)
            ' 0x9755 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.371
            ' 0xfbf4 (Windows-31J)
            ' 0x9857 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.372
            ' 0xfbf5 (Windows-31J)
            ' 0x9865 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.373
            ' 0xfbf6 (Windows-31J)
            ' 0xfa2a (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.374
            ' 0xfbf7 (Windows-31J)
            ' 0xfa2b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.375
            ' 0xfbf8 (Windows-31J)
            ' 0x9927 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.376
            ' 0xfbf9 (Windows-31J)
            ' 0xfa2c (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.377
            ' 0xfbfa (Windows-31J)
            ' 0x999e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.378
            ' 0xfbfb (Windows-31J)
            ' 0x9a4e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.379
            ' ����:fbfc: ���Ɏ��������B
            ' 0xfbfc (Windows-31J)
            ' 0x9ad9 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.381
            ' ����:fc40: fc3f�܂ŃX�L�b�v�B
            ' 0xfc40 (Windows-31J)
            ' 0x9adc (UTF-16BE)
            If (argCheck = "�@"c) Then
                Return true
            End If
            ' No.382
            ' ����:fc41:
            ' 0xfc41 (Windows-31J)
            ' 0x9b75 (UTF-16BE)
            If (argCheck = "�A"c) Then
                Return true
            End If
            ' No.383
            ' ����:fc42:
            ' 0xfc42 (Windows-31J)
            ' 0x9b72 (UTF-16BE)
            If (argCheck = "�B"c) Then
                Return true
            End If
            ' No.384
            ' 0xfc43 (Windows-31J)
            ' 0x9b8f (UTF-16BE)
            If (argCheck = "�C"c) Then
                Return true
            End If
            ' No.385
            ' 0xfc44 (Windows-31J)
            ' 0x9bb1 (UTF-16BE)
            If (argCheck = "�D"c) Then
                Return true
            End If
            ' No.386
            ' 0xfc45 (Windows-31J)
            ' 0x9bbb (UTF-16BE)
            If (argCheck = "�E"c) Then
                Return true
            End If
            ' No.387
            ' 0xfc46 (Windows-31J)
            ' 0x9c00 (UTF-16BE)
            If (argCheck = "�F"c) Then
                Return true
            End If
            ' No.388
            ' 0xfc47 (Windows-31J)
            ' 0x9d70 (UTF-16BE)
            If (argCheck = "�G"c) Then
                Return true
            End If
            ' No.389
            ' 0xfc48 (Windows-31J)
            ' 0x9d6b (UTF-16BE)
            If (argCheck = "�H"c) Then
                Return true
            End If
            ' No.390
            ' 0xfc49 (Windows-31J)
            ' 0xfa2d (UTF-16BE)
            If (argCheck = "�I"c) Then
                Return true
            End If
            ' No.391
            ' ����:fc4a:
            ' 0xfc4a (Windows-31J)
            ' 0x9e19 (UTF-16BE)
            If (argCheck = "�J"c) Then
                Return true
            End If
            ' No.392
            ' ����:fc4b: ���Ɏ��������B
            ' 0xfc4b (Windows-31J)
            ' 0x9ed1 (UTF-16BE)
            If (argCheck = "�K"c) Then
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

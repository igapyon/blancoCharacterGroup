' ���̃\�[�X�R�[�h�� blanco Framework�ɂ���Ď�����������Ă��܂��B
Imports System

Namespace blanco.sample.charactergroup
    ''' <summary>�T���v���BNEC�I��IBM�g������ 0xed40-eefc�B89-92��BblancoCharacterGroup�̎����ɂ͉e�����܂���B</summary>
    Public Class SampleNecSenteiIbmKakutyouMojiCharacterGroup

        ''' <summary>�����O���[�v�Ɋ܂܂�镶���ł��邩�ǂ����𔻒肵�܂��B</summary>
        ''' <param name="argCheck">�`�F�b�N���s�����������B</param>
        ''' <returns>�����O���[�v�Ɋ܂܂�Ă����ture�B�O���[�v�Ɋ܂܂�Ȃ������ł����false�B</returns>
        Public Function Match(argCheck As Char) As Boolean
            ' No.1
            ' ����:ed40��fa5c: (IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa5c (Windows-31J)
            ' 0x7e8a (UTF-16BE)
            If (argCheck = "�\"c) Then
                Return true
            End If
            ' No.2
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa5d (Windows-31J)
            ' 0x891c (UTF-16BE)
            If (argCheck = "�]"c) Then
                Return true
            End If
            ' No.3
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa5e (Windows-31J)
            ' 0x9348 (UTF-16BE)
            If (argCheck = "�^"c) Then
                Return true
            End If
            ' No.4
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa5f (Windows-31J)
            ' 0x9288 (UTF-16BE)
            If (argCheck = "�_"c) Then
                Return true
            End If
            ' No.5
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa60 (Windows-31J)
            ' 0x84dc (UTF-16BE)
            If (argCheck = "�`"c) Then
                Return true
            End If
            ' No.6
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa61 (Windows-31J)
            ' 0x4fc9 (UTF-16BE)
            If (argCheck = "�a"c) Then
                Return true
            End If
            ' No.7
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa62 (Windows-31J)
            ' 0x70bb (UTF-16BE)
            If (argCheck = "�b"c) Then
                Return true
            End If
            ' No.8
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa63 (Windows-31J)
            ' 0x6631 (UTF-16BE)
            If (argCheck = "�c"c) Then
                Return true
            End If
            ' No.9
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa64 (Windows-31J)
            ' 0x68c8 (UTF-16BE)
            If (argCheck = "�d"c) Then
                Return true
            End If
            ' No.10
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa65 (Windows-31J)
            ' 0x92f9 (UTF-16BE)
            If (argCheck = "�e"c) Then
                Return true
            End If
            ' No.11
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa66 (Windows-31J)
            ' 0x66fb (UTF-16BE)
            If (argCheck = "�f"c) Then
                Return true
            End If
            ' No.12
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa67 (Windows-31J)
            ' 0x5f45 (UTF-16BE)
            If (argCheck = "�g"c) Then
                Return true
            End If
            ' No.13
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa68 (Windows-31J)
            ' 0x4e28 (UTF-16BE)
            If (argCheck = "�h"c) Then
                Return true
            End If
            ' No.14
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa69 (Windows-31J)
            ' 0x4ee1 (UTF-16BE)
            If (argCheck = "�i"c) Then
                Return true
            End If
            ' No.15
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa6a (Windows-31J)
            ' 0x4efc (UTF-16BE)
            If (argCheck = "�j"c) Then
                Return true
            End If
            ' No.16
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa6b (Windows-31J)
            ' 0x4f00 (UTF-16BE)
            If (argCheck = "�k"c) Then
                Return true
            End If
            ' No.17
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa6c (Windows-31J)
            ' 0x4f03 (UTF-16BE)
            If (argCheck = "�l"c) Then
                Return true
            End If
            ' No.18
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa6d (Windows-31J)
            ' 0x4f39 (UTF-16BE)
            If (argCheck = "�m"c) Then
                Return true
            End If
            ' No.19
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa6e (Windows-31J)
            ' 0x4f56 (UTF-16BE)
            If (argCheck = "�n"c) Then
                Return true
            End If
            ' No.20
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa6f (Windows-31J)
            ' 0x4f92 (UTF-16BE)
            If (argCheck = "�o"c) Then
                Return true
            End If
            ' No.21
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa70 (Windows-31J)
            ' 0x4f8a (UTF-16BE)
            If (argCheck = "�p"c) Then
                Return true
            End If
            ' No.22
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa71 (Windows-31J)
            ' 0x4f9a (UTF-16BE)
            If (argCheck = "�q"c) Then
                Return true
            End If
            ' No.23
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa72 (Windows-31J)
            ' 0x4f94 (UTF-16BE)
            If (argCheck = "�r"c) Then
                Return true
            End If
            ' No.24
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa73 (Windows-31J)
            ' 0x4fcd (UTF-16BE)
            If (argCheck = "�s"c) Then
                Return true
            End If
            ' No.25
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa74 (Windows-31J)
            ' 0x5040 (UTF-16BE)
            If (argCheck = "�t"c) Then
                Return true
            End If
            ' No.26
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa75 (Windows-31J)
            ' 0x5022 (UTF-16BE)
            If (argCheck = "�u"c) Then
                Return true
            End If
            ' No.27
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa76 (Windows-31J)
            ' 0x4fff (UTF-16BE)
            If (argCheck = "�v"c) Then
                Return true
            End If
            ' No.28
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa77 (Windows-31J)
            ' 0x501e (UTF-16BE)
            If (argCheck = "�w"c) Then
                Return true
            End If
            ' No.29
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa78 (Windows-31J)
            ' 0x5046 (UTF-16BE)
            If (argCheck = "�x"c) Then
                Return true
            End If
            ' No.30
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa79 (Windows-31J)
            ' 0x5070 (UTF-16BE)
            If (argCheck = "�y"c) Then
                Return true
            End If
            ' No.31
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa7a (Windows-31J)
            ' 0x5042 (UTF-16BE)
            If (argCheck = "�z"c) Then
                Return true
            End If
            ' No.32
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa7b (Windows-31J)
            ' 0x5094 (UTF-16BE)
            If (argCheck = "�{"c) Then
                Return true
            End If
            ' No.33
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa7c (Windows-31J)
            ' 0x50f4 (UTF-16BE)
            If (argCheck = "�|"c) Then
                Return true
            End If
            ' No.34
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa7d (Windows-31J)
            ' 0x50d8 (UTF-16BE)
            If (argCheck = "�}"c) Then
                Return true
            End If
            ' No.35
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa7e (Windows-31J)
            ' 0x514a (UTF-16BE)
            If (argCheck = "�~"c) Then
                Return true
            End If
            ' No.36
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa80 (Windows-31J)
            ' 0x5164 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.37
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa81 (Windows-31J)
            ' 0x519d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.38
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa82 (Windows-31J)
            ' 0x51be (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.39
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa83 (Windows-31J)
            ' 0x51ec (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.40
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa84 (Windows-31J)
            ' 0x5215 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.41
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa85 (Windows-31J)
            ' 0x529c (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.42
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa86 (Windows-31J)
            ' 0x52a6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.43
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa87 (Windows-31J)
            ' 0x52c0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.44
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa88 (Windows-31J)
            ' 0x52db (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.45
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa89 (Windows-31J)
            ' 0x5300 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.46
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa8a (Windows-31J)
            ' 0x5307 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.47
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa8b (Windows-31J)
            ' 0x5324 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.48
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa8c (Windows-31J)
            ' 0x5372 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.49
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa8d (Windows-31J)
            ' 0x5393 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.50
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa8e (Windows-31J)
            ' 0x53b2 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.51
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa8f (Windows-31J)
            ' 0x53dd (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.52
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa90 (Windows-31J)
            ' 0xfa0e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.53
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa91 (Windows-31J)
            ' 0x549c (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.54
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa92 (Windows-31J)
            ' 0x548a (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.55
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa93 (Windows-31J)
            ' 0x54a9 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.56
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa94 (Windows-31J)
            ' 0x54ff (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.57
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa95 (Windows-31J)
            ' 0x5586 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.58
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa96 (Windows-31J)
            ' 0x5759 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.59
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa97 (Windows-31J)
            ' 0x5765 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.60
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa98 (Windows-31J)
            ' 0x57ac (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.61
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa99 (Windows-31J)
            ' 0x57c8 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.62
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa9a (Windows-31J)
            ' 0x57c7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.63
            ' ����:ed7e��fa9b : (IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa9b (Windows-31J)
            ' 0xfa0f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.65
            ' ����:ed80��fa9c : (IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa9c (Windows-31J)
            ' 0xfa10 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.66
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa9d (Windows-31J)
            ' 0x589e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.67
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa9e (Windows-31J)
            ' 0x58b2 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.68
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa9f (Windows-31J)
            ' 0x590b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.69
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaa0 (Windows-31J)
            ' 0x5953 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.70
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaa1 (Windows-31J)
            ' 0x595b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.71
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaa2 (Windows-31J)
            ' 0x595d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.72
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaa3 (Windows-31J)
            ' 0x5963 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.73
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaa4 (Windows-31J)
            ' 0x59a4 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.74
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaa5 (Windows-31J)
            ' 0x59ba (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.75
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaa6 (Windows-31J)
            ' 0x5b56 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.76
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaa7 (Windows-31J)
            ' 0x5bc0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.77
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaa8 (Windows-31J)
            ' 0x752f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.78
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaa9 (Windows-31J)
            ' 0x5bd8 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.79
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaaa (Windows-31J)
            ' 0x5bec (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.80
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaab (Windows-31J)
            ' 0x5c1e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.81
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaac (Windows-31J)
            ' 0x5ca6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.82
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaad (Windows-31J)
            ' 0x5cba (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.83
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaae (Windows-31J)
            ' 0x5cf5 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.84
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaaf (Windows-31J)
            ' 0x5d27 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.85
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfab0 (Windows-31J)
            ' 0x5d53 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.86
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfab1 (Windows-31J)
            ' 0xfa11 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.87
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfab2 (Windows-31J)
            ' 0x5d42 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.88
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfab3 (Windows-31J)
            ' 0x5d6d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.89
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfab4 (Windows-31J)
            ' 0x5db8 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.90
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfab5 (Windows-31J)
            ' 0x5db9 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.91
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfab6 (Windows-31J)
            ' 0x5dd0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.92
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfab7 (Windows-31J)
            ' 0x5f21 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.93
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfab8 (Windows-31J)
            ' 0x5f34 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.94
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfab9 (Windows-31J)
            ' 0x5f67 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.95
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaba (Windows-31J)
            ' 0x5fb7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.96
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfabb (Windows-31J)
            ' 0x5fde (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.97
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfabc (Windows-31J)
            ' 0x605d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.98
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfabd (Windows-31J)
            ' 0x6085 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.99
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfabe (Windows-31J)
            ' 0x608a (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.100
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfabf (Windows-31J)
            ' 0x60de (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.101
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfac0 (Windows-31J)
            ' 0x60d5 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.102
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfac1 (Windows-31J)
            ' 0x6120 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.103
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfac2 (Windows-31J)
            ' 0x60f2 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.104
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfac3 (Windows-31J)
            ' 0x6111 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.105
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfac4 (Windows-31J)
            ' 0x6137 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.106
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfac5 (Windows-31J)
            ' 0x6130 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.107
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfac6 (Windows-31J)
            ' 0x6198 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.108
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfac7 (Windows-31J)
            ' 0x6213 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.109
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfac8 (Windows-31J)
            ' 0x62a6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.110
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfac9 (Windows-31J)
            ' 0x63f5 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.111
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaca (Windows-31J)
            ' 0x6460 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.112
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfacb (Windows-31J)
            ' 0x649d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.113
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfacc (Windows-31J)
            ' 0x64ce (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.114
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfacd (Windows-31J)
            ' 0x654e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.115
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xface (Windows-31J)
            ' 0x6600 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.116
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfacf (Windows-31J)
            ' 0x6615 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.117
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfad0 (Windows-31J)
            ' 0x663b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.118
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfad1 (Windows-31J)
            ' 0x6609 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.119
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfad2 (Windows-31J)
            ' 0x662e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.120
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfad3 (Windows-31J)
            ' 0x661e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.121
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfad4 (Windows-31J)
            ' 0x6624 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.122
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfad5 (Windows-31J)
            ' 0x6665 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.123
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfad6 (Windows-31J)
            ' 0x6657 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.124
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfad7 (Windows-31J)
            ' 0x6659 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.125
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfad8 (Windows-31J)
            ' 0xfa12 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.126
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfad9 (Windows-31J)
            ' 0x6673 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.127
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfada (Windows-31J)
            ' 0x6699 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.128
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfadb (Windows-31J)
            ' 0x66a0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.129
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfadc (Windows-31J)
            ' 0x66b2 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.130
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfadd (Windows-31J)
            ' 0x66bf (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.131
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfade (Windows-31J)
            ' 0x66fa (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.132
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfadf (Windows-31J)
            ' 0x670e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.133
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfae0 (Windows-31J)
            ' 0xf929 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.134
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfae1 (Windows-31J)
            ' 0x6766 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.135
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfae2 (Windows-31J)
            ' 0x67bb (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.136
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfae3 (Windows-31J)
            ' 0x6852 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.137
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfae4 (Windows-31J)
            ' 0x67c0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.138
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfae5 (Windows-31J)
            ' 0x6801 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.139
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfae6 (Windows-31J)
            ' 0x6844 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.140
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfae7 (Windows-31J)
            ' 0x68cf (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.141
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfae8 (Windows-31J)
            ' 0xfa13 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.142
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfae9 (Windows-31J)
            ' 0x6968 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.143
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaea (Windows-31J)
            ' 0xfa14 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.144
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaeb (Windows-31J)
            ' 0x6998 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.145
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaec (Windows-31J)
            ' 0x69e2 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.146
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaed (Windows-31J)
            ' 0x6a30 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.147
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaee (Windows-31J)
            ' 0x6a6b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.148
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaef (Windows-31J)
            ' 0x6a46 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.149
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaf0 (Windows-31J)
            ' 0x6a73 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.150
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaf1 (Windows-31J)
            ' 0x6a7e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.151
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaf2 (Windows-31J)
            ' 0x6ae2 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.152
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaf3 (Windows-31J)
            ' 0x6ae4 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.153
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaf4 (Windows-31J)
            ' 0x6bd6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.154
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaf5 (Windows-31J)
            ' 0x6c3f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.155
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaf6 (Windows-31J)
            ' 0x6c5c (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.156
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaf7 (Windows-31J)
            ' 0x6c86 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.157
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaf8 (Windows-31J)
            ' 0x6c6f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.158
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfaf9 (Windows-31J)
            ' 0x6cda (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.159
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfafa (Windows-31J)
            ' 0x6d04 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.160
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfafb (Windows-31J)
            ' 0x6d87 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.161
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfafc (Windows-31J)
            ' 0x6d6f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.162
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb40 (Windows-31J)
            ' 0x6d96 (UTF-16BE)
            If (argCheck = "�@"c) Then
                Return true
            End If
            ' No.163
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb41 (Windows-31J)
            ' 0x6dac (UTF-16BE)
            If (argCheck = "�A"c) Then
                Return true
            End If
            ' No.164
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb42 (Windows-31J)
            ' 0x6dcf (UTF-16BE)
            If (argCheck = "�B"c) Then
                Return true
            End If
            ' No.165
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb43 (Windows-31J)
            ' 0x6df8 (UTF-16BE)
            If (argCheck = "�C"c) Then
                Return true
            End If
            ' No.166
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb44 (Windows-31J)
            ' 0x6df2 (UTF-16BE)
            If (argCheck = "�D"c) Then
                Return true
            End If
            ' No.167
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb45 (Windows-31J)
            ' 0x6dfc (UTF-16BE)
            If (argCheck = "�E"c) Then
                Return true
            End If
            ' No.168
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb46 (Windows-31J)
            ' 0x6e39 (UTF-16BE)
            If (argCheck = "�F"c) Then
                Return true
            End If
            ' No.169
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb47 (Windows-31J)
            ' 0x6e5c (UTF-16BE)
            If (argCheck = "�G"c) Then
                Return true
            End If
            ' No.170
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb48 (Windows-31J)
            ' 0x6e27 (UTF-16BE)
            If (argCheck = "�H"c) Then
                Return true
            End If
            ' No.171
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb49 (Windows-31J)
            ' 0x6e3c (UTF-16BE)
            If (argCheck = "�I"c) Then
                Return true
            End If
            ' No.172
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb4a (Windows-31J)
            ' 0x6ebf (UTF-16BE)
            If (argCheck = "�J"c) Then
                Return true
            End If
            ' No.173
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb4b (Windows-31J)
            ' 0x6f88 (UTF-16BE)
            If (argCheck = "�K"c) Then
                Return true
            End If
            ' No.174
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb4c (Windows-31J)
            ' 0x6fb5 (UTF-16BE)
            If (argCheck = "�L"c) Then
                Return true
            End If
            ' No.175
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb4d (Windows-31J)
            ' 0x6ff5 (UTF-16BE)
            If (argCheck = "�M"c) Then
                Return true
            End If
            ' No.176
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb4e (Windows-31J)
            ' 0x7005 (UTF-16BE)
            If (argCheck = "�N"c) Then
                Return true
            End If
            ' No.177
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb4f (Windows-31J)
            ' 0x7007 (UTF-16BE)
            If (argCheck = "�O"c) Then
                Return true
            End If
            ' No.178
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb50 (Windows-31J)
            ' 0x7028 (UTF-16BE)
            If (argCheck = "�P"c) Then
                Return true
            End If
            ' No.179
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb51 (Windows-31J)
            ' 0x7085 (UTF-16BE)
            If (argCheck = "�Q"c) Then
                Return true
            End If
            ' No.180
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb52 (Windows-31J)
            ' 0x70ab (UTF-16BE)
            If (argCheck = "�R"c) Then
                Return true
            End If
            ' No.181
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb53 (Windows-31J)
            ' 0x710f (UTF-16BE)
            If (argCheck = "�S"c) Then
                Return true
            End If
            ' No.182
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb54 (Windows-31J)
            ' 0x7104 (UTF-16BE)
            If (argCheck = "�T"c) Then
                Return true
            End If
            ' No.183
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb55 (Windows-31J)
            ' 0x715c (UTF-16BE)
            If (argCheck = "�U"c) Then
                Return true
            End If
            ' No.184
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb56 (Windows-31J)
            ' 0x7146 (UTF-16BE)
            If (argCheck = "�V"c) Then
                Return true
            End If
            ' No.185
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb57 (Windows-31J)
            ' 0x7147 (UTF-16BE)
            If (argCheck = "�W"c) Then
                Return true
            End If
            ' No.186
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb58 (Windows-31J)
            ' 0xfa15 (UTF-16BE)
            If (argCheck = "�X"c) Then
                Return true
            End If
            ' No.187
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb59 (Windows-31J)
            ' 0x71c1 (UTF-16BE)
            If (argCheck = "�Y"c) Then
                Return true
            End If
            ' No.188
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb5a (Windows-31J)
            ' 0x71fe (UTF-16BE)
            If (argCheck = "�Z"c) Then
                Return true
            End If
            ' No.189
            ' ����:edfc��fb5b: (IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb5b (Windows-31J)
            ' 0x72b1 (UTF-16BE)
            If (argCheck = "�["c) Then
                Return true
            End If
            ' No.191
            ' ����:ee40��fb5c : (IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb5c (Windows-31J)
            ' 0x72be (UTF-16BE)
            If (argCheck = "�\"c) Then
                Return true
            End If
            ' No.192
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb5d (Windows-31J)
            ' 0x7324 (UTF-16BE)
            If (argCheck = "�]"c) Then
                Return true
            End If
            ' No.193
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb5e (Windows-31J)
            ' 0xfa16 (UTF-16BE)
            If (argCheck = "�^"c) Then
                Return true
            End If
            ' No.194
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb5f (Windows-31J)
            ' 0x7377 (UTF-16BE)
            If (argCheck = "�_"c) Then
                Return true
            End If
            ' No.195
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb60 (Windows-31J)
            ' 0x73bd (UTF-16BE)
            If (argCheck = "�`"c) Then
                Return true
            End If
            ' No.196
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb61 (Windows-31J)
            ' 0x73c9 (UTF-16BE)
            If (argCheck = "�a"c) Then
                Return true
            End If
            ' No.197
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb62 (Windows-31J)
            ' 0x73d6 (UTF-16BE)
            If (argCheck = "�b"c) Then
                Return true
            End If
            ' No.198
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb63 (Windows-31J)
            ' 0x73e3 (UTF-16BE)
            If (argCheck = "�c"c) Then
                Return true
            End If
            ' No.199
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb64 (Windows-31J)
            ' 0x73d2 (UTF-16BE)
            If (argCheck = "�d"c) Then
                Return true
            End If
            ' No.200
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb65 (Windows-31J)
            ' 0x7407 (UTF-16BE)
            If (argCheck = "�e"c) Then
                Return true
            End If
            ' No.201
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb66 (Windows-31J)
            ' 0x73f5 (UTF-16BE)
            If (argCheck = "�f"c) Then
                Return true
            End If
            ' No.202
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb67 (Windows-31J)
            ' 0x7426 (UTF-16BE)
            If (argCheck = "�g"c) Then
                Return true
            End If
            ' No.203
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb68 (Windows-31J)
            ' 0x742a (UTF-16BE)
            If (argCheck = "�h"c) Then
                Return true
            End If
            ' No.204
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb69 (Windows-31J)
            ' 0x7429 (UTF-16BE)
            If (argCheck = "�i"c) Then
                Return true
            End If
            ' No.205
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb6a (Windows-31J)
            ' 0x742e (UTF-16BE)
            If (argCheck = "�j"c) Then
                Return true
            End If
            ' No.206
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb6b (Windows-31J)
            ' 0x7462 (UTF-16BE)
            If (argCheck = "�k"c) Then
                Return true
            End If
            ' No.207
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb6c (Windows-31J)
            ' 0x7489 (UTF-16BE)
            If (argCheck = "�l"c) Then
                Return true
            End If
            ' No.208
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb6d (Windows-31J)
            ' 0x749f (UTF-16BE)
            If (argCheck = "�m"c) Then
                Return true
            End If
            ' No.209
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb6e (Windows-31J)
            ' 0x7501 (UTF-16BE)
            If (argCheck = "�n"c) Then
                Return true
            End If
            ' No.210
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb6f (Windows-31J)
            ' 0x756f (UTF-16BE)
            If (argCheck = "�o"c) Then
                Return true
            End If
            ' No.211
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb70 (Windows-31J)
            ' 0x7682 (UTF-16BE)
            If (argCheck = "�p"c) Then
                Return true
            End If
            ' No.212
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb71 (Windows-31J)
            ' 0x769c (UTF-16BE)
            If (argCheck = "�q"c) Then
                Return true
            End If
            ' No.213
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb72 (Windows-31J)
            ' 0x769e (UTF-16BE)
            If (argCheck = "�r"c) Then
                Return true
            End If
            ' No.214
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb73 (Windows-31J)
            ' 0x769b (UTF-16BE)
            If (argCheck = "�s"c) Then
                Return true
            End If
            ' No.215
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb74 (Windows-31J)
            ' 0x76a6 (UTF-16BE)
            If (argCheck = "�t"c) Then
                Return true
            End If
            ' No.216
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb75 (Windows-31J)
            ' 0xfa17 (UTF-16BE)
            If (argCheck = "�u"c) Then
                Return true
            End If
            ' No.217
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb76 (Windows-31J)
            ' 0x7746 (UTF-16BE)
            If (argCheck = "�v"c) Then
                Return true
            End If
            ' No.218
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb77 (Windows-31J)
            ' 0x52af (UTF-16BE)
            If (argCheck = "�w"c) Then
                Return true
            End If
            ' No.219
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb78 (Windows-31J)
            ' 0x7821 (UTF-16BE)
            If (argCheck = "�x"c) Then
                Return true
            End If
            ' No.220
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb79 (Windows-31J)
            ' 0x784e (UTF-16BE)
            If (argCheck = "�y"c) Then
                Return true
            End If
            ' No.221
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb7a (Windows-31J)
            ' 0x7864 (UTF-16BE)
            If (argCheck = "�z"c) Then
                Return true
            End If
            ' No.222
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb7b (Windows-31J)
            ' 0x787a (UTF-16BE)
            If (argCheck = "�{"c) Then
                Return true
            End If
            ' No.223
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb7c (Windows-31J)
            ' 0x7930 (UTF-16BE)
            If (argCheck = "�|"c) Then
                Return true
            End If
            ' No.224
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb7d (Windows-31J)
            ' 0xfa18 (UTF-16BE)
            If (argCheck = "�}"c) Then
                Return true
            End If
            ' No.225
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb7e (Windows-31J)
            ' 0xfa19 (UTF-16BE)
            If (argCheck = "�~"c) Then
                Return true
            End If
            ' No.226
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb80 (Windows-31J)
            ' 0xfa1a (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.227
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb81 (Windows-31J)
            ' 0x7994 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.228
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb82 (Windows-31J)
            ' 0xfa1b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.229
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb83 (Windows-31J)
            ' 0x799b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.230
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb84 (Windows-31J)
            ' 0x7ad1 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.231
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb85 (Windows-31J)
            ' 0x7ae7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.232
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb86 (Windows-31J)
            ' 0xfa1c (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.233
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb87 (Windows-31J)
            ' 0x7aeb (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.234
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb88 (Windows-31J)
            ' 0x7b9e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.235
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb89 (Windows-31J)
            ' 0xfa1d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.236
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb8a (Windows-31J)
            ' 0x7d48 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.237
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb8b (Windows-31J)
            ' 0x7d5c (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.238
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb8c (Windows-31J)
            ' 0x7db7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.239
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb8d (Windows-31J)
            ' 0x7da0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.240
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb8e (Windows-31J)
            ' 0x7dd6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.241
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb8f (Windows-31J)
            ' 0x7e52 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.242
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb90 (Windows-31J)
            ' 0x7f47 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.243
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb91 (Windows-31J)
            ' 0x7fa1 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.244
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb92 (Windows-31J)
            ' 0xfa1e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.245
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb93 (Windows-31J)
            ' 0x8301 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.246
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb94 (Windows-31J)
            ' 0x8362 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.247
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb95 (Windows-31J)
            ' 0x837f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.248
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb96 (Windows-31J)
            ' 0x83c7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.249
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb97 (Windows-31J)
            ' 0x83f6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.250
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb98 (Windows-31J)
            ' 0x8448 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.251
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb99 (Windows-31J)
            ' 0x84b4 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.252
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb9a (Windows-31J)
            ' 0x8553 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.253
            ' ����:ee7e��fb9b: (IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb9b (Windows-31J)
            ' 0x8559 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.255
            ' ����:ee80��fb9c: (IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb9c (Windows-31J)
            ' 0x856b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.256
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb9d (Windows-31J)
            ' 0xfa1f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.257
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb9e (Windows-31J)
            ' 0x85b0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.258
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfb9f (Windows-31J)
            ' 0xfa20 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.259
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfba0 (Windows-31J)
            ' 0xfa21 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.260
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfba1 (Windows-31J)
            ' 0x8807 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.261
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfba2 (Windows-31J)
            ' 0x88f5 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.262
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfba3 (Windows-31J)
            ' 0x8a12 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.263
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfba4 (Windows-31J)
            ' 0x8a37 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.264
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfba5 (Windows-31J)
            ' 0x8a79 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.265
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfba6 (Windows-31J)
            ' 0x8aa7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.266
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfba7 (Windows-31J)
            ' 0x8abe (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.267
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfba8 (Windows-31J)
            ' 0x8adf (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.268
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfba9 (Windows-31J)
            ' 0xfa22 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.269
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbaa (Windows-31J)
            ' 0x8af6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.270
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbab (Windows-31J)
            ' 0x8b53 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.271
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbac (Windows-31J)
            ' 0x8b7f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.272
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbad (Windows-31J)
            ' 0x8cf0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.273
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbae (Windows-31J)
            ' 0x8cf4 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.274
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbaf (Windows-31J)
            ' 0x8d12 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.275
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbb0 (Windows-31J)
            ' 0x8d76 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.276
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbb1 (Windows-31J)
            ' 0xfa23 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.277
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbb2 (Windows-31J)
            ' 0x8ecf (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.278
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbb3 (Windows-31J)
            ' 0xfa24 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.279
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbb4 (Windows-31J)
            ' 0xfa25 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.280
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbb5 (Windows-31J)
            ' 0x9067 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.281
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbb6 (Windows-31J)
            ' 0x90de (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.282
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbb7 (Windows-31J)
            ' 0xfa26 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.283
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbb8 (Windows-31J)
            ' 0x9115 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.284
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbb9 (Windows-31J)
            ' 0x9127 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.285
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbba (Windows-31J)
            ' 0x91da (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.286
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbbb (Windows-31J)
            ' 0x91d7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.287
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbbc (Windows-31J)
            ' 0x91de (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.288
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbbd (Windows-31J)
            ' 0x91ed (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.289
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbbe (Windows-31J)
            ' 0x91ee (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.290
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbbf (Windows-31J)
            ' 0x91e4 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.291
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbc0 (Windows-31J)
            ' 0x91e5 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.292
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbc1 (Windows-31J)
            ' 0x9206 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.293
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbc2 (Windows-31J)
            ' 0x9210 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.294
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbc3 (Windows-31J)
            ' 0x920a (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.295
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbc4 (Windows-31J)
            ' 0x923a (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.296
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbc5 (Windows-31J)
            ' 0x9240 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.297
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbc6 (Windows-31J)
            ' 0x923c (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.298
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbc7 (Windows-31J)
            ' 0x924e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.299
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbc8 (Windows-31J)
            ' 0x9259 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.300
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbc9 (Windows-31J)
            ' 0x9251 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.301
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbca (Windows-31J)
            ' 0x9239 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.302
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbcb (Windows-31J)
            ' 0x9267 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.303
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbcc (Windows-31J)
            ' 0x92a7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.304
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbcd (Windows-31J)
            ' 0x9277 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.305
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbce (Windows-31J)
            ' 0x9278 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.306
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbcf (Windows-31J)
            ' 0x92e7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.307
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbd0 (Windows-31J)
            ' 0x92d7 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.308
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbd1 (Windows-31J)
            ' 0x92d9 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.309
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbd2 (Windows-31J)
            ' 0x92d0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.310
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbd3 (Windows-31J)
            ' 0xfa27 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.311
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbd4 (Windows-31J)
            ' 0x92d5 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.312
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbd5 (Windows-31J)
            ' 0x92e0 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.313
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbd6 (Windows-31J)
            ' 0x92d3 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.314
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbd7 (Windows-31J)
            ' 0x9325 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.315
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbd8 (Windows-31J)
            ' 0x9321 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.316
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbd9 (Windows-31J)
            ' 0x92fb (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.317
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbda (Windows-31J)
            ' 0xfa28 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.318
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbdb (Windows-31J)
            ' 0x931e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.319
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbdc (Windows-31J)
            ' 0x92ff (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.320
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbdd (Windows-31J)
            ' 0x931d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.321
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbde (Windows-31J)
            ' 0x9302 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.322
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbdf (Windows-31J)
            ' 0x9370 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.323
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbe0 (Windows-31J)
            ' 0x9357 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.324
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbe1 (Windows-31J)
            ' 0x93a4 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.325
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbe2 (Windows-31J)
            ' 0x93c6 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.326
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbe3 (Windows-31J)
            ' 0x93de (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.327
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbe4 (Windows-31J)
            ' 0x93f8 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.328
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbe5 (Windows-31J)
            ' 0x9431 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.329
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbe6 (Windows-31J)
            ' 0x9445 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.330
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbe7 (Windows-31J)
            ' 0x9448 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.331
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbe8 (Windows-31J)
            ' 0x9592 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.332
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbe9 (Windows-31J)
            ' 0xf9dc (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.333
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbea (Windows-31J)
            ' 0xfa29 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.334
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbeb (Windows-31J)
            ' 0x969d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.335
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbec (Windows-31J)
            ' 0x96af (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.336
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbed (Windows-31J)
            ' 0x9733 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.337
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbee (Windows-31J)
            ' 0x973b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.338
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbef (Windows-31J)
            ' 0x9743 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.339
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbf0 (Windows-31J)
            ' 0x974d (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.340
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbf1 (Windows-31J)
            ' 0x974f (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.341
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbf2 (Windows-31J)
            ' 0x9751 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.342
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbf3 (Windows-31J)
            ' 0x9755 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.343
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbf4 (Windows-31J)
            ' 0x9857 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.344
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbf5 (Windows-31J)
            ' 0x9865 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.345
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbf6 (Windows-31J)
            ' 0xfa2a (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.346
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbf7 (Windows-31J)
            ' 0xfa2b (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.347
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbf8 (Windows-31J)
            ' 0x9927 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.348
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbf9 (Windows-31J)
            ' 0xfa2c (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.349
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbfa (Windows-31J)
            ' 0x999e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.350
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbfb (Windows-31J)
            ' 0x9a4e (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.351
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfbfc (Windows-31J)
            ' 0x9ad9 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.352
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfc40 (Windows-31J)
            ' 0x9adc (UTF-16BE)
            If (argCheck = "�@"c) Then
                Return true
            End If
            ' No.353
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfc41 (Windows-31J)
            ' 0x9b75 (UTF-16BE)
            If (argCheck = "�A"c) Then
                Return true
            End If
            ' No.354
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfc42 (Windows-31J)
            ' 0x9b72 (UTF-16BE)
            If (argCheck = "�B"c) Then
                Return true
            End If
            ' No.355
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfc43 (Windows-31J)
            ' 0x9b8f (UTF-16BE)
            If (argCheck = "�C"c) Then
                Return true
            End If
            ' No.356
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfc44 (Windows-31J)
            ' 0x9bb1 (UTF-16BE)
            If (argCheck = "�D"c) Then
                Return true
            End If
            ' No.357
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfc45 (Windows-31J)
            ' 0x9bbb (UTF-16BE)
            If (argCheck = "�E"c) Then
                Return true
            End If
            ' No.358
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfc46 (Windows-31J)
            ' 0x9c00 (UTF-16BE)
            If (argCheck = "�F"c) Then
                Return true
            End If
            ' No.359
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfc47 (Windows-31J)
            ' 0x9d70 (UTF-16BE)
            If (argCheck = "�G"c) Then
                Return true
            End If
            ' No.360
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfc48 (Windows-31J)
            ' 0x9d6b (UTF-16BE)
            If (argCheck = "�H"c) Then
                Return true
            End If
            ' No.361
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfc49 (Windows-31J)
            ' 0xfa2d (UTF-16BE)
            If (argCheck = "�I"c) Then
                Return true
            End If
            ' No.362
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfc4a (Windows-31J)
            ' 0x9e19 (UTF-16BE)
            If (argCheck = "�J"c) Then
                Return true
            End If
            ' No.363
            ' ����:eeec��fc4b: (IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfc4b (Windows-31J)
            ' 0x9ed1 (UTF-16BE)
            If (argCheck = "�K"c) Then
                Return true
            End If
            ' No.365
            ' ����:eeef��fa40: (IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa40 (Windows-31J)
            ' 0x2170 (UTF-16BE)
            If (argCheck = "�@"c) Then
                Return true
            End If
            ' No.366
            ' ����:eef0��fa41: (IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa41 (Windows-31J)
            ' 0x2171 (UTF-16BE)
            If (argCheck = "�A"c) Then
                Return true
            End If
            ' No.367
            ' ����:eef1��fa42: (IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa42 (Windows-31J)
            ' 0x2172 (UTF-16BE)
            If (argCheck = "�B"c) Then
                Return true
            End If
            ' No.368
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa43 (Windows-31J)
            ' 0x2173 (UTF-16BE)
            If (argCheck = "�C"c) Then
                Return true
            End If
            ' No.369
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa44 (Windows-31J)
            ' 0x2174 (UTF-16BE)
            If (argCheck = "�D"c) Then
                Return true
            End If
            ' No.370
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa45 (Windows-31J)
            ' 0x2175 (UTF-16BE)
            If (argCheck = "�E"c) Then
                Return true
            End If
            ' No.371
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa46 (Windows-31J)
            ' 0x2176 (UTF-16BE)
            If (argCheck = "�F"c) Then
                Return true
            End If
            ' No.372
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa47 (Windows-31J)
            ' 0x2177 (UTF-16BE)
            If (argCheck = "�G"c) Then
                Return true
            End If
            ' No.373
            ' ����:(IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa48 (Windows-31J)
            ' 0x2178 (UTF-16BE)
            If (argCheck = "�H"c) Then
                Return true
            End If
            ' No.374
            ' ����:eef8��fa49: (IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa49 (Windows-31J)
            ' 0x2179 (UTF-16BE)
            If (argCheck = "�I"c) Then
                Return true
            End If
            ' No.375
            ' ����:eef9��81ca: (JIS X 0208-1983�Ƀ}�b�v����Ă��܂��B) (���d��������)
            ' 0x81ca (Windows-31J)
            ' 0xffe2 (UTF-16BE)
            If (argCheck = "��"c) Then
                Return true
            End If
            ' No.376
            ' ����:eefa��fa55: (IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa55 (Windows-31J)
            ' 0xffe4 (UTF-16BE)
            If (argCheck = "�U"c) Then
                Return true
            End If
            ' No.377
            ' ����:eefb��fa56: (IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa56 (Windows-31J)
            ' 0xff07 (UTF-16BE)
            If (argCheck = "�V"c) Then
                Return true
            End If
            ' No.378
            ' ����:eefc��fa57: (IBM�g�������Ƀ}�b�v����Ă��܂�)
            ' 0xfa57 (Windows-31J)
            ' 0xff02 (UTF-16BE)
            If (argCheck = ""�W"c) Then
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

// このソースコードは blanco Frameworkによって自動生成されています。
using System;

namespace blanco.sample.charactergroup
{
    /// <summary>サンプル。NEC選定IBM拡張文字 0xed40-eefc。89-92区。blancoCharacterGroupの実装には影響しません。</summary>
    public class SampleNecSenteiIbmKakutyouMojiCharacterGroup
    {
        /// <summary>文字グループに含まれる文字であるかどうかを判定します。</summary>
        /// <param name="argCheck">チェックを行いたい文字。</param>
        /// <returns>文字グループに含まれていればture。グループに含まれない文字であればfalse。</returns>
        public virtual bool Match(char argCheck)
        {
            // No.1
            // 説明:ed40→fa5c: (IBM拡張文字にマップされています)
            // 0xfa5c (Windows-31J)
            // 0x7e8a (UTF-16BE)
            if (argCheck == '�\') {
                return true;
            }
            // No.2
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa5d (Windows-31J)
            // 0x891c (UTF-16BE)
            if (argCheck == '�]') {
                return true;
            }
            // No.3
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa5e (Windows-31J)
            // 0x9348 (UTF-16BE)
            if (argCheck == '�^') {
                return true;
            }
            // No.4
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa5f (Windows-31J)
            // 0x9288 (UTF-16BE)
            if (argCheck == '�_') {
                return true;
            }
            // No.5
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa60 (Windows-31J)
            // 0x84dc (UTF-16BE)
            if (argCheck == '�`') {
                return true;
            }
            // No.6
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa61 (Windows-31J)
            // 0x4fc9 (UTF-16BE)
            if (argCheck == '�a') {
                return true;
            }
            // No.7
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa62 (Windows-31J)
            // 0x70bb (UTF-16BE)
            if (argCheck == '�b') {
                return true;
            }
            // No.8
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa63 (Windows-31J)
            // 0x6631 (UTF-16BE)
            if (argCheck == '�c') {
                return true;
            }
            // No.9
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa64 (Windows-31J)
            // 0x68c8 (UTF-16BE)
            if (argCheck == '�d') {
                return true;
            }
            // No.10
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa65 (Windows-31J)
            // 0x92f9 (UTF-16BE)
            if (argCheck == '�e') {
                return true;
            }
            // No.11
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa66 (Windows-31J)
            // 0x66fb (UTF-16BE)
            if (argCheck == '�f') {
                return true;
            }
            // No.12
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa67 (Windows-31J)
            // 0x5f45 (UTF-16BE)
            if (argCheck == '�g') {
                return true;
            }
            // No.13
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa68 (Windows-31J)
            // 0x4e28 (UTF-16BE)
            if (argCheck == '�h') {
                return true;
            }
            // No.14
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa69 (Windows-31J)
            // 0x4ee1 (UTF-16BE)
            if (argCheck == '�i') {
                return true;
            }
            // No.15
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa6a (Windows-31J)
            // 0x4efc (UTF-16BE)
            if (argCheck == '�j') {
                return true;
            }
            // No.16
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa6b (Windows-31J)
            // 0x4f00 (UTF-16BE)
            if (argCheck == '�k') {
                return true;
            }
            // No.17
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa6c (Windows-31J)
            // 0x4f03 (UTF-16BE)
            if (argCheck == '�l') {
                return true;
            }
            // No.18
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa6d (Windows-31J)
            // 0x4f39 (UTF-16BE)
            if (argCheck == '�m') {
                return true;
            }
            // No.19
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa6e (Windows-31J)
            // 0x4f56 (UTF-16BE)
            if (argCheck == '�n') {
                return true;
            }
            // No.20
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa6f (Windows-31J)
            // 0x4f92 (UTF-16BE)
            if (argCheck == '�o') {
                return true;
            }
            // No.21
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa70 (Windows-31J)
            // 0x4f8a (UTF-16BE)
            if (argCheck == '�p') {
                return true;
            }
            // No.22
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa71 (Windows-31J)
            // 0x4f9a (UTF-16BE)
            if (argCheck == '�q') {
                return true;
            }
            // No.23
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa72 (Windows-31J)
            // 0x4f94 (UTF-16BE)
            if (argCheck == '�r') {
                return true;
            }
            // No.24
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa73 (Windows-31J)
            // 0x4fcd (UTF-16BE)
            if (argCheck == '�s') {
                return true;
            }
            // No.25
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa74 (Windows-31J)
            // 0x5040 (UTF-16BE)
            if (argCheck == '�t') {
                return true;
            }
            // No.26
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa75 (Windows-31J)
            // 0x5022 (UTF-16BE)
            if (argCheck == '�u') {
                return true;
            }
            // No.27
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa76 (Windows-31J)
            // 0x4fff (UTF-16BE)
            if (argCheck == '�v') {
                return true;
            }
            // No.28
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa77 (Windows-31J)
            // 0x501e (UTF-16BE)
            if (argCheck == '�w') {
                return true;
            }
            // No.29
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa78 (Windows-31J)
            // 0x5046 (UTF-16BE)
            if (argCheck == '�x') {
                return true;
            }
            // No.30
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa79 (Windows-31J)
            // 0x5070 (UTF-16BE)
            if (argCheck == '�y') {
                return true;
            }
            // No.31
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa7a (Windows-31J)
            // 0x5042 (UTF-16BE)
            if (argCheck == '�z') {
                return true;
            }
            // No.32
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa7b (Windows-31J)
            // 0x5094 (UTF-16BE)
            if (argCheck == '�{') {
                return true;
            }
            // No.33
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa7c (Windows-31J)
            // 0x50f4 (UTF-16BE)
            if (argCheck == '�|') {
                return true;
            }
            // No.34
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa7d (Windows-31J)
            // 0x50d8 (UTF-16BE)
            if (argCheck == '�}') {
                return true;
            }
            // No.35
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa7e (Windows-31J)
            // 0x514a (UTF-16BE)
            if (argCheck == '�~') {
                return true;
            }
            // No.36
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa80 (Windows-31J)
            // 0x5164 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.37
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa81 (Windows-31J)
            // 0x519d (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.38
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa82 (Windows-31J)
            // 0x51be (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.39
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa83 (Windows-31J)
            // 0x51ec (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.40
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa84 (Windows-31J)
            // 0x5215 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.41
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa85 (Windows-31J)
            // 0x529c (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.42
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa86 (Windows-31J)
            // 0x52a6 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.43
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa87 (Windows-31J)
            // 0x52c0 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.44
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa88 (Windows-31J)
            // 0x52db (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.45
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa89 (Windows-31J)
            // 0x5300 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.46
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa8a (Windows-31J)
            // 0x5307 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.47
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa8b (Windows-31J)
            // 0x5324 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.48
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa8c (Windows-31J)
            // 0x5372 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.49
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa8d (Windows-31J)
            // 0x5393 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.50
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa8e (Windows-31J)
            // 0x53b2 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.51
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa8f (Windows-31J)
            // 0x53dd (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.52
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa90 (Windows-31J)
            // 0xfa0e (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.53
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa91 (Windows-31J)
            // 0x549c (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.54
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa92 (Windows-31J)
            // 0x548a (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.55
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa93 (Windows-31J)
            // 0x54a9 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.56
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa94 (Windows-31J)
            // 0x54ff (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.57
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa95 (Windows-31J)
            // 0x5586 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.58
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa96 (Windows-31J)
            // 0x5759 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.59
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa97 (Windows-31J)
            // 0x5765 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.60
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa98 (Windows-31J)
            // 0x57ac (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.61
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa99 (Windows-31J)
            // 0x57c8 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.62
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa9a (Windows-31J)
            // 0x57c7 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.63
            // 説明:ed7e→fa9b : (IBM拡張文字にマップされています)
            // 0xfa9b (Windows-31J)
            // 0xfa0f (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.65
            // 説明:ed80→fa9c : (IBM拡張文字にマップされています)
            // 0xfa9c (Windows-31J)
            // 0xfa10 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.66
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa9d (Windows-31J)
            // 0x589e (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.67
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa9e (Windows-31J)
            // 0x58b2 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.68
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa9f (Windows-31J)
            // 0x590b (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.69
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaa0 (Windows-31J)
            // 0x5953 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.70
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaa1 (Windows-31J)
            // 0x595b (UTF-16BE)
            if (argCheck == '�｡') {
                return true;
            }
            // No.71
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaa2 (Windows-31J)
            // 0x595d (UTF-16BE)
            if (argCheck == '�｢') {
                return true;
            }
            // No.72
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaa3 (Windows-31J)
            // 0x5963 (UTF-16BE)
            if (argCheck == '�｣') {
                return true;
            }
            // No.73
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaa4 (Windows-31J)
            // 0x59a4 (UTF-16BE)
            if (argCheck == '�､') {
                return true;
            }
            // No.74
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaa5 (Windows-31J)
            // 0x59ba (UTF-16BE)
            if (argCheck == '�･') {
                return true;
            }
            // No.75
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaa6 (Windows-31J)
            // 0x5b56 (UTF-16BE)
            if (argCheck == '�ｦ') {
                return true;
            }
            // No.76
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaa7 (Windows-31J)
            // 0x5bc0 (UTF-16BE)
            if (argCheck == '�ｧ') {
                return true;
            }
            // No.77
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaa8 (Windows-31J)
            // 0x752f (UTF-16BE)
            if (argCheck == '�ｨ') {
                return true;
            }
            // No.78
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaa9 (Windows-31J)
            // 0x5bd8 (UTF-16BE)
            if (argCheck == '�ｩ') {
                return true;
            }
            // No.79
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaaa (Windows-31J)
            // 0x5bec (UTF-16BE)
            if (argCheck == '�ｪ') {
                return true;
            }
            // No.80
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaab (Windows-31J)
            // 0x5c1e (UTF-16BE)
            if (argCheck == '�ｫ') {
                return true;
            }
            // No.81
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaac (Windows-31J)
            // 0x5ca6 (UTF-16BE)
            if (argCheck == '�ｬ') {
                return true;
            }
            // No.82
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaad (Windows-31J)
            // 0x5cba (UTF-16BE)
            if (argCheck == '�ｭ') {
                return true;
            }
            // No.83
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaae (Windows-31J)
            // 0x5cf5 (UTF-16BE)
            if (argCheck == '�ｮ') {
                return true;
            }
            // No.84
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaaf (Windows-31J)
            // 0x5d27 (UTF-16BE)
            if (argCheck == '�ｯ') {
                return true;
            }
            // No.85
            // 説明:(IBM拡張文字にマップされています)
            // 0xfab0 (Windows-31J)
            // 0x5d53 (UTF-16BE)
            if (argCheck == '�ｰ') {
                return true;
            }
            // No.86
            // 説明:(IBM拡張文字にマップされています)
            // 0xfab1 (Windows-31J)
            // 0xfa11 (UTF-16BE)
            if (argCheck == '�ｱ') {
                return true;
            }
            // No.87
            // 説明:(IBM拡張文字にマップされています)
            // 0xfab2 (Windows-31J)
            // 0x5d42 (UTF-16BE)
            if (argCheck == '�ｲ') {
                return true;
            }
            // No.88
            // 説明:(IBM拡張文字にマップされています)
            // 0xfab3 (Windows-31J)
            // 0x5d6d (UTF-16BE)
            if (argCheck == '�ｳ') {
                return true;
            }
            // No.89
            // 説明:(IBM拡張文字にマップされています)
            // 0xfab4 (Windows-31J)
            // 0x5db8 (UTF-16BE)
            if (argCheck == '�ｴ') {
                return true;
            }
            // No.90
            // 説明:(IBM拡張文字にマップされています)
            // 0xfab5 (Windows-31J)
            // 0x5db9 (UTF-16BE)
            if (argCheck == '�ｵ') {
                return true;
            }
            // No.91
            // 説明:(IBM拡張文字にマップされています)
            // 0xfab6 (Windows-31J)
            // 0x5dd0 (UTF-16BE)
            if (argCheck == '�ｶ') {
                return true;
            }
            // No.92
            // 説明:(IBM拡張文字にマップされています)
            // 0xfab7 (Windows-31J)
            // 0x5f21 (UTF-16BE)
            if (argCheck == '�ｷ') {
                return true;
            }
            // No.93
            // 説明:(IBM拡張文字にマップされています)
            // 0xfab8 (Windows-31J)
            // 0x5f34 (UTF-16BE)
            if (argCheck == '�ｸ') {
                return true;
            }
            // No.94
            // 説明:(IBM拡張文字にマップされています)
            // 0xfab9 (Windows-31J)
            // 0x5f67 (UTF-16BE)
            if (argCheck == '�ｹ') {
                return true;
            }
            // No.95
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaba (Windows-31J)
            // 0x5fb7 (UTF-16BE)
            if (argCheck == '�ｺ') {
                return true;
            }
            // No.96
            // 説明:(IBM拡張文字にマップされています)
            // 0xfabb (Windows-31J)
            // 0x5fde (UTF-16BE)
            if (argCheck == '�ｻ') {
                return true;
            }
            // No.97
            // 説明:(IBM拡張文字にマップされています)
            // 0xfabc (Windows-31J)
            // 0x605d (UTF-16BE)
            if (argCheck == '�ｼ') {
                return true;
            }
            // No.98
            // 説明:(IBM拡張文字にマップされています)
            // 0xfabd (Windows-31J)
            // 0x6085 (UTF-16BE)
            if (argCheck == '�ｽ') {
                return true;
            }
            // No.99
            // 説明:(IBM拡張文字にマップされています)
            // 0xfabe (Windows-31J)
            // 0x608a (UTF-16BE)
            if (argCheck == '�ｾ') {
                return true;
            }
            // No.100
            // 説明:(IBM拡張文字にマップされています)
            // 0xfabf (Windows-31J)
            // 0x60de (UTF-16BE)
            if (argCheck == '�ｿ') {
                return true;
            }
            // No.101
            // 説明:(IBM拡張文字にマップされています)
            // 0xfac0 (Windows-31J)
            // 0x60d5 (UTF-16BE)
            if (argCheck == '�ﾀ') {
                return true;
            }
            // No.102
            // 説明:(IBM拡張文字にマップされています)
            // 0xfac1 (Windows-31J)
            // 0x6120 (UTF-16BE)
            if (argCheck == '�ﾁ') {
                return true;
            }
            // No.103
            // 説明:(IBM拡張文字にマップされています)
            // 0xfac2 (Windows-31J)
            // 0x60f2 (UTF-16BE)
            if (argCheck == '�ﾂ') {
                return true;
            }
            // No.104
            // 説明:(IBM拡張文字にマップされています)
            // 0xfac3 (Windows-31J)
            // 0x6111 (UTF-16BE)
            if (argCheck == '�ﾃ') {
                return true;
            }
            // No.105
            // 説明:(IBM拡張文字にマップされています)
            // 0xfac4 (Windows-31J)
            // 0x6137 (UTF-16BE)
            if (argCheck == '�ﾄ') {
                return true;
            }
            // No.106
            // 説明:(IBM拡張文字にマップされています)
            // 0xfac5 (Windows-31J)
            // 0x6130 (UTF-16BE)
            if (argCheck == '�ﾅ') {
                return true;
            }
            // No.107
            // 説明:(IBM拡張文字にマップされています)
            // 0xfac6 (Windows-31J)
            // 0x6198 (UTF-16BE)
            if (argCheck == '�ﾆ') {
                return true;
            }
            // No.108
            // 説明:(IBM拡張文字にマップされています)
            // 0xfac7 (Windows-31J)
            // 0x6213 (UTF-16BE)
            if (argCheck == '�ﾇ') {
                return true;
            }
            // No.109
            // 説明:(IBM拡張文字にマップされています)
            // 0xfac8 (Windows-31J)
            // 0x62a6 (UTF-16BE)
            if (argCheck == '�ﾈ') {
                return true;
            }
            // No.110
            // 説明:(IBM拡張文字にマップされています)
            // 0xfac9 (Windows-31J)
            // 0x63f5 (UTF-16BE)
            if (argCheck == '�ﾉ') {
                return true;
            }
            // No.111
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaca (Windows-31J)
            // 0x6460 (UTF-16BE)
            if (argCheck == '�ﾊ') {
                return true;
            }
            // No.112
            // 説明:(IBM拡張文字にマップされています)
            // 0xfacb (Windows-31J)
            // 0x649d (UTF-16BE)
            if (argCheck == '�ﾋ') {
                return true;
            }
            // No.113
            // 説明:(IBM拡張文字にマップされています)
            // 0xfacc (Windows-31J)
            // 0x64ce (UTF-16BE)
            if (argCheck == '�ﾌ') {
                return true;
            }
            // No.114
            // 説明:(IBM拡張文字にマップされています)
            // 0xfacd (Windows-31J)
            // 0x654e (UTF-16BE)
            if (argCheck == '�ﾍ') {
                return true;
            }
            // No.115
            // 説明:(IBM拡張文字にマップされています)
            // 0xface (Windows-31J)
            // 0x6600 (UTF-16BE)
            if (argCheck == '�ﾎ') {
                return true;
            }
            // No.116
            // 説明:(IBM拡張文字にマップされています)
            // 0xfacf (Windows-31J)
            // 0x6615 (UTF-16BE)
            if (argCheck == '�ﾏ') {
                return true;
            }
            // No.117
            // 説明:(IBM拡張文字にマップされています)
            // 0xfad0 (Windows-31J)
            // 0x663b (UTF-16BE)
            if (argCheck == '�ﾐ') {
                return true;
            }
            // No.118
            // 説明:(IBM拡張文字にマップされています)
            // 0xfad1 (Windows-31J)
            // 0x6609 (UTF-16BE)
            if (argCheck == '�ﾑ') {
                return true;
            }
            // No.119
            // 説明:(IBM拡張文字にマップされています)
            // 0xfad2 (Windows-31J)
            // 0x662e (UTF-16BE)
            if (argCheck == '�ﾒ') {
                return true;
            }
            // No.120
            // 説明:(IBM拡張文字にマップされています)
            // 0xfad3 (Windows-31J)
            // 0x661e (UTF-16BE)
            if (argCheck == '�ﾓ') {
                return true;
            }
            // No.121
            // 説明:(IBM拡張文字にマップされています)
            // 0xfad4 (Windows-31J)
            // 0x6624 (UTF-16BE)
            if (argCheck == '�ﾔ') {
                return true;
            }
            // No.122
            // 説明:(IBM拡張文字にマップされています)
            // 0xfad5 (Windows-31J)
            // 0x6665 (UTF-16BE)
            if (argCheck == '�ﾕ') {
                return true;
            }
            // No.123
            // 説明:(IBM拡張文字にマップされています)
            // 0xfad6 (Windows-31J)
            // 0x6657 (UTF-16BE)
            if (argCheck == '�ﾖ') {
                return true;
            }
            // No.124
            // 説明:(IBM拡張文字にマップされています)
            // 0xfad7 (Windows-31J)
            // 0x6659 (UTF-16BE)
            if (argCheck == '�ﾗ') {
                return true;
            }
            // No.125
            // 説明:(IBM拡張文字にマップされています)
            // 0xfad8 (Windows-31J)
            // 0xfa12 (UTF-16BE)
            if (argCheck == '�ﾘ') {
                return true;
            }
            // No.126
            // 説明:(IBM拡張文字にマップされています)
            // 0xfad9 (Windows-31J)
            // 0x6673 (UTF-16BE)
            if (argCheck == '�ﾙ') {
                return true;
            }
            // No.127
            // 説明:(IBM拡張文字にマップされています)
            // 0xfada (Windows-31J)
            // 0x6699 (UTF-16BE)
            if (argCheck == '�ﾚ') {
                return true;
            }
            // No.128
            // 説明:(IBM拡張文字にマップされています)
            // 0xfadb (Windows-31J)
            // 0x66a0 (UTF-16BE)
            if (argCheck == '�ﾛ') {
                return true;
            }
            // No.129
            // 説明:(IBM拡張文字にマップされています)
            // 0xfadc (Windows-31J)
            // 0x66b2 (UTF-16BE)
            if (argCheck == '�ﾜ') {
                return true;
            }
            // No.130
            // 説明:(IBM拡張文字にマップされています)
            // 0xfadd (Windows-31J)
            // 0x66bf (UTF-16BE)
            if (argCheck == '�ﾝ') {
                return true;
            }
            // No.131
            // 説明:(IBM拡張文字にマップされています)
            // 0xfade (Windows-31J)
            // 0x66fa (UTF-16BE)
            if (argCheck == '�ﾞ') {
                return true;
            }
            // No.132
            // 説明:(IBM拡張文字にマップされています)
            // 0xfadf (Windows-31J)
            // 0x670e (UTF-16BE)
            if (argCheck == '�ﾟ') {
                return true;
            }
            // No.133
            // 説明:(IBM拡張文字にマップされています)
            // 0xfae0 (Windows-31J)
            // 0xf929 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.134
            // 説明:(IBM拡張文字にマップされています)
            // 0xfae1 (Windows-31J)
            // 0x6766 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.135
            // 説明:(IBM拡張文字にマップされています)
            // 0xfae2 (Windows-31J)
            // 0x67bb (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.136
            // 説明:(IBM拡張文字にマップされています)
            // 0xfae3 (Windows-31J)
            // 0x6852 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.137
            // 説明:(IBM拡張文字にマップされています)
            // 0xfae4 (Windows-31J)
            // 0x67c0 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.138
            // 説明:(IBM拡張文字にマップされています)
            // 0xfae5 (Windows-31J)
            // 0x6801 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.139
            // 説明:(IBM拡張文字にマップされています)
            // 0xfae6 (Windows-31J)
            // 0x6844 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.140
            // 説明:(IBM拡張文字にマップされています)
            // 0xfae7 (Windows-31J)
            // 0x68cf (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.141
            // 説明:(IBM拡張文字にマップされています)
            // 0xfae8 (Windows-31J)
            // 0xfa13 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.142
            // 説明:(IBM拡張文字にマップされています)
            // 0xfae9 (Windows-31J)
            // 0x6968 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.143
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaea (Windows-31J)
            // 0xfa14 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.144
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaeb (Windows-31J)
            // 0x6998 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.145
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaec (Windows-31J)
            // 0x69e2 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.146
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaed (Windows-31J)
            // 0x6a30 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.147
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaee (Windows-31J)
            // 0x6a6b (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.148
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaef (Windows-31J)
            // 0x6a46 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.149
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaf0 (Windows-31J)
            // 0x6a73 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.150
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaf1 (Windows-31J)
            // 0x6a7e (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.151
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaf2 (Windows-31J)
            // 0x6ae2 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.152
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaf3 (Windows-31J)
            // 0x6ae4 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.153
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaf4 (Windows-31J)
            // 0x6bd6 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.154
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaf5 (Windows-31J)
            // 0x6c3f (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.155
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaf6 (Windows-31J)
            // 0x6c5c (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.156
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaf7 (Windows-31J)
            // 0x6c86 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.157
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaf8 (Windows-31J)
            // 0x6c6f (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.158
            // 説明:(IBM拡張文字にマップされています)
            // 0xfaf9 (Windows-31J)
            // 0x6cda (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.159
            // 説明:(IBM拡張文字にマップされています)
            // 0xfafa (Windows-31J)
            // 0x6d04 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.160
            // 説明:(IBM拡張文字にマップされています)
            // 0xfafb (Windows-31J)
            // 0x6d87 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.161
            // 説明:(IBM拡張文字にマップされています)
            // 0xfafc (Windows-31J)
            // 0x6d6f (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.162
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb40 (Windows-31J)
            // 0x6d96 (UTF-16BE)
            if (argCheck == '�@') {
                return true;
            }
            // No.163
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb41 (Windows-31J)
            // 0x6dac (UTF-16BE)
            if (argCheck == '�A') {
                return true;
            }
            // No.164
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb42 (Windows-31J)
            // 0x6dcf (UTF-16BE)
            if (argCheck == '�B') {
                return true;
            }
            // No.165
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb43 (Windows-31J)
            // 0x6df8 (UTF-16BE)
            if (argCheck == '�C') {
                return true;
            }
            // No.166
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb44 (Windows-31J)
            // 0x6df2 (UTF-16BE)
            if (argCheck == '�D') {
                return true;
            }
            // No.167
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb45 (Windows-31J)
            // 0x6dfc (UTF-16BE)
            if (argCheck == '�E') {
                return true;
            }
            // No.168
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb46 (Windows-31J)
            // 0x6e39 (UTF-16BE)
            if (argCheck == '�F') {
                return true;
            }
            // No.169
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb47 (Windows-31J)
            // 0x6e5c (UTF-16BE)
            if (argCheck == '�G') {
                return true;
            }
            // No.170
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb48 (Windows-31J)
            // 0x6e27 (UTF-16BE)
            if (argCheck == '�H') {
                return true;
            }
            // No.171
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb49 (Windows-31J)
            // 0x6e3c (UTF-16BE)
            if (argCheck == '�I') {
                return true;
            }
            // No.172
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb4a (Windows-31J)
            // 0x6ebf (UTF-16BE)
            if (argCheck == '�J') {
                return true;
            }
            // No.173
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb4b (Windows-31J)
            // 0x6f88 (UTF-16BE)
            if (argCheck == '�K') {
                return true;
            }
            // No.174
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb4c (Windows-31J)
            // 0x6fb5 (UTF-16BE)
            if (argCheck == '�L') {
                return true;
            }
            // No.175
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb4d (Windows-31J)
            // 0x6ff5 (UTF-16BE)
            if (argCheck == '�M') {
                return true;
            }
            // No.176
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb4e (Windows-31J)
            // 0x7005 (UTF-16BE)
            if (argCheck == '�N') {
                return true;
            }
            // No.177
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb4f (Windows-31J)
            // 0x7007 (UTF-16BE)
            if (argCheck == '�O') {
                return true;
            }
            // No.178
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb50 (Windows-31J)
            // 0x7028 (UTF-16BE)
            if (argCheck == '�P') {
                return true;
            }
            // No.179
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb51 (Windows-31J)
            // 0x7085 (UTF-16BE)
            if (argCheck == '�Q') {
                return true;
            }
            // No.180
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb52 (Windows-31J)
            // 0x70ab (UTF-16BE)
            if (argCheck == '�R') {
                return true;
            }
            // No.181
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb53 (Windows-31J)
            // 0x710f (UTF-16BE)
            if (argCheck == '�S') {
                return true;
            }
            // No.182
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb54 (Windows-31J)
            // 0x7104 (UTF-16BE)
            if (argCheck == '�T') {
                return true;
            }
            // No.183
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb55 (Windows-31J)
            // 0x715c (UTF-16BE)
            if (argCheck == '�U') {
                return true;
            }
            // No.184
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb56 (Windows-31J)
            // 0x7146 (UTF-16BE)
            if (argCheck == '�V') {
                return true;
            }
            // No.185
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb57 (Windows-31J)
            // 0x7147 (UTF-16BE)
            if (argCheck == '�W') {
                return true;
            }
            // No.186
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb58 (Windows-31J)
            // 0xfa15 (UTF-16BE)
            if (argCheck == '�X') {
                return true;
            }
            // No.187
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb59 (Windows-31J)
            // 0x71c1 (UTF-16BE)
            if (argCheck == '�Y') {
                return true;
            }
            // No.188
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb5a (Windows-31J)
            // 0x71fe (UTF-16BE)
            if (argCheck == '�Z') {
                return true;
            }
            // No.189
            // 説明:edfc→fb5b: (IBM拡張文字にマップされています)
            // 0xfb5b (Windows-31J)
            // 0x72b1 (UTF-16BE)
            if (argCheck == '�[') {
                return true;
            }
            // No.191
            // 説明:ee40→fb5c : (IBM拡張文字にマップされています)
            // 0xfb5c (Windows-31J)
            // 0x72be (UTF-16BE)
            if (argCheck == '�\') {
                return true;
            }
            // No.192
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb5d (Windows-31J)
            // 0x7324 (UTF-16BE)
            if (argCheck == '�]') {
                return true;
            }
            // No.193
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb5e (Windows-31J)
            // 0xfa16 (UTF-16BE)
            if (argCheck == '�^') {
                return true;
            }
            // No.194
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb5f (Windows-31J)
            // 0x7377 (UTF-16BE)
            if (argCheck == '�_') {
                return true;
            }
            // No.195
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb60 (Windows-31J)
            // 0x73bd (UTF-16BE)
            if (argCheck == '�`') {
                return true;
            }
            // No.196
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb61 (Windows-31J)
            // 0x73c9 (UTF-16BE)
            if (argCheck == '�a') {
                return true;
            }
            // No.197
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb62 (Windows-31J)
            // 0x73d6 (UTF-16BE)
            if (argCheck == '�b') {
                return true;
            }
            // No.198
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb63 (Windows-31J)
            // 0x73e3 (UTF-16BE)
            if (argCheck == '�c') {
                return true;
            }
            // No.199
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb64 (Windows-31J)
            // 0x73d2 (UTF-16BE)
            if (argCheck == '�d') {
                return true;
            }
            // No.200
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb65 (Windows-31J)
            // 0x7407 (UTF-16BE)
            if (argCheck == '�e') {
                return true;
            }
            // No.201
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb66 (Windows-31J)
            // 0x73f5 (UTF-16BE)
            if (argCheck == '�f') {
                return true;
            }
            // No.202
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb67 (Windows-31J)
            // 0x7426 (UTF-16BE)
            if (argCheck == '�g') {
                return true;
            }
            // No.203
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb68 (Windows-31J)
            // 0x742a (UTF-16BE)
            if (argCheck == '�h') {
                return true;
            }
            // No.204
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb69 (Windows-31J)
            // 0x7429 (UTF-16BE)
            if (argCheck == '�i') {
                return true;
            }
            // No.205
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb6a (Windows-31J)
            // 0x742e (UTF-16BE)
            if (argCheck == '�j') {
                return true;
            }
            // No.206
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb6b (Windows-31J)
            // 0x7462 (UTF-16BE)
            if (argCheck == '�k') {
                return true;
            }
            // No.207
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb6c (Windows-31J)
            // 0x7489 (UTF-16BE)
            if (argCheck == '�l') {
                return true;
            }
            // No.208
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb6d (Windows-31J)
            // 0x749f (UTF-16BE)
            if (argCheck == '�m') {
                return true;
            }
            // No.209
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb6e (Windows-31J)
            // 0x7501 (UTF-16BE)
            if (argCheck == '�n') {
                return true;
            }
            // No.210
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb6f (Windows-31J)
            // 0x756f (UTF-16BE)
            if (argCheck == '�o') {
                return true;
            }
            // No.211
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb70 (Windows-31J)
            // 0x7682 (UTF-16BE)
            if (argCheck == '�p') {
                return true;
            }
            // No.212
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb71 (Windows-31J)
            // 0x769c (UTF-16BE)
            if (argCheck == '�q') {
                return true;
            }
            // No.213
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb72 (Windows-31J)
            // 0x769e (UTF-16BE)
            if (argCheck == '�r') {
                return true;
            }
            // No.214
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb73 (Windows-31J)
            // 0x769b (UTF-16BE)
            if (argCheck == '�s') {
                return true;
            }
            // No.215
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb74 (Windows-31J)
            // 0x76a6 (UTF-16BE)
            if (argCheck == '�t') {
                return true;
            }
            // No.216
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb75 (Windows-31J)
            // 0xfa17 (UTF-16BE)
            if (argCheck == '�u') {
                return true;
            }
            // No.217
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb76 (Windows-31J)
            // 0x7746 (UTF-16BE)
            if (argCheck == '�v') {
                return true;
            }
            // No.218
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb77 (Windows-31J)
            // 0x52af (UTF-16BE)
            if (argCheck == '�w') {
                return true;
            }
            // No.219
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb78 (Windows-31J)
            // 0x7821 (UTF-16BE)
            if (argCheck == '�x') {
                return true;
            }
            // No.220
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb79 (Windows-31J)
            // 0x784e (UTF-16BE)
            if (argCheck == '�y') {
                return true;
            }
            // No.221
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb7a (Windows-31J)
            // 0x7864 (UTF-16BE)
            if (argCheck == '�z') {
                return true;
            }
            // No.222
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb7b (Windows-31J)
            // 0x787a (UTF-16BE)
            if (argCheck == '�{') {
                return true;
            }
            // No.223
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb7c (Windows-31J)
            // 0x7930 (UTF-16BE)
            if (argCheck == '�|') {
                return true;
            }
            // No.224
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb7d (Windows-31J)
            // 0xfa18 (UTF-16BE)
            if (argCheck == '�}') {
                return true;
            }
            // No.225
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb7e (Windows-31J)
            // 0xfa19 (UTF-16BE)
            if (argCheck == '�~') {
                return true;
            }
            // No.226
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb80 (Windows-31J)
            // 0xfa1a (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.227
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb81 (Windows-31J)
            // 0x7994 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.228
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb82 (Windows-31J)
            // 0xfa1b (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.229
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb83 (Windows-31J)
            // 0x799b (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.230
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb84 (Windows-31J)
            // 0x7ad1 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.231
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb85 (Windows-31J)
            // 0x7ae7 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.232
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb86 (Windows-31J)
            // 0xfa1c (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.233
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb87 (Windows-31J)
            // 0x7aeb (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.234
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb88 (Windows-31J)
            // 0x7b9e (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.235
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb89 (Windows-31J)
            // 0xfa1d (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.236
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb8a (Windows-31J)
            // 0x7d48 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.237
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb8b (Windows-31J)
            // 0x7d5c (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.238
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb8c (Windows-31J)
            // 0x7db7 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.239
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb8d (Windows-31J)
            // 0x7da0 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.240
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb8e (Windows-31J)
            // 0x7dd6 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.241
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb8f (Windows-31J)
            // 0x7e52 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.242
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb90 (Windows-31J)
            // 0x7f47 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.243
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb91 (Windows-31J)
            // 0x7fa1 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.244
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb92 (Windows-31J)
            // 0xfa1e (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.245
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb93 (Windows-31J)
            // 0x8301 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.246
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb94 (Windows-31J)
            // 0x8362 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.247
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb95 (Windows-31J)
            // 0x837f (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.248
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb96 (Windows-31J)
            // 0x83c7 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.249
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb97 (Windows-31J)
            // 0x83f6 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.250
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb98 (Windows-31J)
            // 0x8448 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.251
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb99 (Windows-31J)
            // 0x84b4 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.252
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb9a (Windows-31J)
            // 0x8553 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.253
            // 説明:ee7e→fb9b: (IBM拡張文字にマップされています)
            // 0xfb9b (Windows-31J)
            // 0x8559 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.255
            // 説明:ee80→fb9c: (IBM拡張文字にマップされています)
            // 0xfb9c (Windows-31J)
            // 0x856b (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.256
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb9d (Windows-31J)
            // 0xfa1f (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.257
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb9e (Windows-31J)
            // 0x85b0 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.258
            // 説明:(IBM拡張文字にマップされています)
            // 0xfb9f (Windows-31J)
            // 0xfa20 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.259
            // 説明:(IBM拡張文字にマップされています)
            // 0xfba0 (Windows-31J)
            // 0xfa21 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.260
            // 説明:(IBM拡張文字にマップされています)
            // 0xfba1 (Windows-31J)
            // 0x8807 (UTF-16BE)
            if (argCheck == '�｡') {
                return true;
            }
            // No.261
            // 説明:(IBM拡張文字にマップされています)
            // 0xfba2 (Windows-31J)
            // 0x88f5 (UTF-16BE)
            if (argCheck == '�｢') {
                return true;
            }
            // No.262
            // 説明:(IBM拡張文字にマップされています)
            // 0xfba3 (Windows-31J)
            // 0x8a12 (UTF-16BE)
            if (argCheck == '�｣') {
                return true;
            }
            // No.263
            // 説明:(IBM拡張文字にマップされています)
            // 0xfba4 (Windows-31J)
            // 0x8a37 (UTF-16BE)
            if (argCheck == '�､') {
                return true;
            }
            // No.264
            // 説明:(IBM拡張文字にマップされています)
            // 0xfba5 (Windows-31J)
            // 0x8a79 (UTF-16BE)
            if (argCheck == '�･') {
                return true;
            }
            // No.265
            // 説明:(IBM拡張文字にマップされています)
            // 0xfba6 (Windows-31J)
            // 0x8aa7 (UTF-16BE)
            if (argCheck == '�ｦ') {
                return true;
            }
            // No.266
            // 説明:(IBM拡張文字にマップされています)
            // 0xfba7 (Windows-31J)
            // 0x8abe (UTF-16BE)
            if (argCheck == '�ｧ') {
                return true;
            }
            // No.267
            // 説明:(IBM拡張文字にマップされています)
            // 0xfba8 (Windows-31J)
            // 0x8adf (UTF-16BE)
            if (argCheck == '�ｨ') {
                return true;
            }
            // No.268
            // 説明:(IBM拡張文字にマップされています)
            // 0xfba9 (Windows-31J)
            // 0xfa22 (UTF-16BE)
            if (argCheck == '�ｩ') {
                return true;
            }
            // No.269
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbaa (Windows-31J)
            // 0x8af6 (UTF-16BE)
            if (argCheck == '�ｪ') {
                return true;
            }
            // No.270
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbab (Windows-31J)
            // 0x8b53 (UTF-16BE)
            if (argCheck == '�ｫ') {
                return true;
            }
            // No.271
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbac (Windows-31J)
            // 0x8b7f (UTF-16BE)
            if (argCheck == '�ｬ') {
                return true;
            }
            // No.272
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbad (Windows-31J)
            // 0x8cf0 (UTF-16BE)
            if (argCheck == '�ｭ') {
                return true;
            }
            // No.273
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbae (Windows-31J)
            // 0x8cf4 (UTF-16BE)
            if (argCheck == '�ｮ') {
                return true;
            }
            // No.274
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbaf (Windows-31J)
            // 0x8d12 (UTF-16BE)
            if (argCheck == '�ｯ') {
                return true;
            }
            // No.275
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbb0 (Windows-31J)
            // 0x8d76 (UTF-16BE)
            if (argCheck == '�ｰ') {
                return true;
            }
            // No.276
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbb1 (Windows-31J)
            // 0xfa23 (UTF-16BE)
            if (argCheck == '�ｱ') {
                return true;
            }
            // No.277
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbb2 (Windows-31J)
            // 0x8ecf (UTF-16BE)
            if (argCheck == '�ｲ') {
                return true;
            }
            // No.278
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbb3 (Windows-31J)
            // 0xfa24 (UTF-16BE)
            if (argCheck == '�ｳ') {
                return true;
            }
            // No.279
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbb4 (Windows-31J)
            // 0xfa25 (UTF-16BE)
            if (argCheck == '�ｴ') {
                return true;
            }
            // No.280
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbb5 (Windows-31J)
            // 0x9067 (UTF-16BE)
            if (argCheck == '�ｵ') {
                return true;
            }
            // No.281
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbb6 (Windows-31J)
            // 0x90de (UTF-16BE)
            if (argCheck == '�ｶ') {
                return true;
            }
            // No.282
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbb7 (Windows-31J)
            // 0xfa26 (UTF-16BE)
            if (argCheck == '�ｷ') {
                return true;
            }
            // No.283
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbb8 (Windows-31J)
            // 0x9115 (UTF-16BE)
            if (argCheck == '�ｸ') {
                return true;
            }
            // No.284
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbb9 (Windows-31J)
            // 0x9127 (UTF-16BE)
            if (argCheck == '�ｹ') {
                return true;
            }
            // No.285
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbba (Windows-31J)
            // 0x91da (UTF-16BE)
            if (argCheck == '�ｺ') {
                return true;
            }
            // No.286
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbbb (Windows-31J)
            // 0x91d7 (UTF-16BE)
            if (argCheck == '�ｻ') {
                return true;
            }
            // No.287
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbbc (Windows-31J)
            // 0x91de (UTF-16BE)
            if (argCheck == '�ｼ') {
                return true;
            }
            // No.288
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbbd (Windows-31J)
            // 0x91ed (UTF-16BE)
            if (argCheck == '�ｽ') {
                return true;
            }
            // No.289
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbbe (Windows-31J)
            // 0x91ee (UTF-16BE)
            if (argCheck == '�ｾ') {
                return true;
            }
            // No.290
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbbf (Windows-31J)
            // 0x91e4 (UTF-16BE)
            if (argCheck == '�ｿ') {
                return true;
            }
            // No.291
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbc0 (Windows-31J)
            // 0x91e5 (UTF-16BE)
            if (argCheck == '�ﾀ') {
                return true;
            }
            // No.292
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbc1 (Windows-31J)
            // 0x9206 (UTF-16BE)
            if (argCheck == '�ﾁ') {
                return true;
            }
            // No.293
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbc2 (Windows-31J)
            // 0x9210 (UTF-16BE)
            if (argCheck == '�ﾂ') {
                return true;
            }
            // No.294
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbc3 (Windows-31J)
            // 0x920a (UTF-16BE)
            if (argCheck == '�ﾃ') {
                return true;
            }
            // No.295
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbc4 (Windows-31J)
            // 0x923a (UTF-16BE)
            if (argCheck == '�ﾄ') {
                return true;
            }
            // No.296
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbc5 (Windows-31J)
            // 0x9240 (UTF-16BE)
            if (argCheck == '�ﾅ') {
                return true;
            }
            // No.297
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbc6 (Windows-31J)
            // 0x923c (UTF-16BE)
            if (argCheck == '�ﾆ') {
                return true;
            }
            // No.298
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbc7 (Windows-31J)
            // 0x924e (UTF-16BE)
            if (argCheck == '�ﾇ') {
                return true;
            }
            // No.299
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbc8 (Windows-31J)
            // 0x9259 (UTF-16BE)
            if (argCheck == '�ﾈ') {
                return true;
            }
            // No.300
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbc9 (Windows-31J)
            // 0x9251 (UTF-16BE)
            if (argCheck == '�ﾉ') {
                return true;
            }
            // No.301
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbca (Windows-31J)
            // 0x9239 (UTF-16BE)
            if (argCheck == '�ﾊ') {
                return true;
            }
            // No.302
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbcb (Windows-31J)
            // 0x9267 (UTF-16BE)
            if (argCheck == '�ﾋ') {
                return true;
            }
            // No.303
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbcc (Windows-31J)
            // 0x92a7 (UTF-16BE)
            if (argCheck == '�ﾌ') {
                return true;
            }
            // No.304
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbcd (Windows-31J)
            // 0x9277 (UTF-16BE)
            if (argCheck == '�ﾍ') {
                return true;
            }
            // No.305
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbce (Windows-31J)
            // 0x9278 (UTF-16BE)
            if (argCheck == '�ﾎ') {
                return true;
            }
            // No.306
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbcf (Windows-31J)
            // 0x92e7 (UTF-16BE)
            if (argCheck == '�ﾏ') {
                return true;
            }
            // No.307
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbd0 (Windows-31J)
            // 0x92d7 (UTF-16BE)
            if (argCheck == '�ﾐ') {
                return true;
            }
            // No.308
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbd1 (Windows-31J)
            // 0x92d9 (UTF-16BE)
            if (argCheck == '�ﾑ') {
                return true;
            }
            // No.309
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbd2 (Windows-31J)
            // 0x92d0 (UTF-16BE)
            if (argCheck == '�ﾒ') {
                return true;
            }
            // No.310
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbd3 (Windows-31J)
            // 0xfa27 (UTF-16BE)
            if (argCheck == '�ﾓ') {
                return true;
            }
            // No.311
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbd4 (Windows-31J)
            // 0x92d5 (UTF-16BE)
            if (argCheck == '�ﾔ') {
                return true;
            }
            // No.312
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbd5 (Windows-31J)
            // 0x92e0 (UTF-16BE)
            if (argCheck == '�ﾕ') {
                return true;
            }
            // No.313
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbd6 (Windows-31J)
            // 0x92d3 (UTF-16BE)
            if (argCheck == '�ﾖ') {
                return true;
            }
            // No.314
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbd7 (Windows-31J)
            // 0x9325 (UTF-16BE)
            if (argCheck == '�ﾗ') {
                return true;
            }
            // No.315
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbd8 (Windows-31J)
            // 0x9321 (UTF-16BE)
            if (argCheck == '�ﾘ') {
                return true;
            }
            // No.316
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbd9 (Windows-31J)
            // 0x92fb (UTF-16BE)
            if (argCheck == '�ﾙ') {
                return true;
            }
            // No.317
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbda (Windows-31J)
            // 0xfa28 (UTF-16BE)
            if (argCheck == '�ﾚ') {
                return true;
            }
            // No.318
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbdb (Windows-31J)
            // 0x931e (UTF-16BE)
            if (argCheck == '�ﾛ') {
                return true;
            }
            // No.319
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbdc (Windows-31J)
            // 0x92ff (UTF-16BE)
            if (argCheck == '�ﾜ') {
                return true;
            }
            // No.320
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbdd (Windows-31J)
            // 0x931d (UTF-16BE)
            if (argCheck == '�ﾝ') {
                return true;
            }
            // No.321
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbde (Windows-31J)
            // 0x9302 (UTF-16BE)
            if (argCheck == '�ﾞ') {
                return true;
            }
            // No.322
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbdf (Windows-31J)
            // 0x9370 (UTF-16BE)
            if (argCheck == '�ﾟ') {
                return true;
            }
            // No.323
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbe0 (Windows-31J)
            // 0x9357 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.324
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbe1 (Windows-31J)
            // 0x93a4 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.325
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbe2 (Windows-31J)
            // 0x93c6 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.326
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbe3 (Windows-31J)
            // 0x93de (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.327
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbe4 (Windows-31J)
            // 0x93f8 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.328
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbe5 (Windows-31J)
            // 0x9431 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.329
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbe6 (Windows-31J)
            // 0x9445 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.330
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbe7 (Windows-31J)
            // 0x9448 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.331
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbe8 (Windows-31J)
            // 0x9592 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.332
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbe9 (Windows-31J)
            // 0xf9dc (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.333
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbea (Windows-31J)
            // 0xfa29 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.334
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbeb (Windows-31J)
            // 0x969d (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.335
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbec (Windows-31J)
            // 0x96af (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.336
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbed (Windows-31J)
            // 0x9733 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.337
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbee (Windows-31J)
            // 0x973b (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.338
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbef (Windows-31J)
            // 0x9743 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.339
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbf0 (Windows-31J)
            // 0x974d (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.340
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbf1 (Windows-31J)
            // 0x974f (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.341
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbf2 (Windows-31J)
            // 0x9751 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.342
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbf3 (Windows-31J)
            // 0x9755 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.343
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbf4 (Windows-31J)
            // 0x9857 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.344
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbf5 (Windows-31J)
            // 0x9865 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.345
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbf6 (Windows-31J)
            // 0xfa2a (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.346
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbf7 (Windows-31J)
            // 0xfa2b (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.347
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbf8 (Windows-31J)
            // 0x9927 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.348
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbf9 (Windows-31J)
            // 0xfa2c (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.349
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbfa (Windows-31J)
            // 0x999e (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.350
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbfb (Windows-31J)
            // 0x9a4e (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.351
            // 説明:(IBM拡張文字にマップされています)
            // 0xfbfc (Windows-31J)
            // 0x9ad9 (UTF-16BE)
            if (argCheck == '��') {
                return true;
            }
            // No.352
            // 説明:(IBM拡張文字にマップされています)
            // 0xfc40 (Windows-31J)
            // 0x9adc (UTF-16BE)
            if (argCheck == '�@') {
                return true;
            }
            // No.353
            // 説明:(IBM拡張文字にマップされています)
            // 0xfc41 (Windows-31J)
            // 0x9b75 (UTF-16BE)
            if (argCheck == '�A') {
                return true;
            }
            // No.354
            // 説明:(IBM拡張文字にマップされています)
            // 0xfc42 (Windows-31J)
            // 0x9b72 (UTF-16BE)
            if (argCheck == '�B') {
                return true;
            }
            // No.355
            // 説明:(IBM拡張文字にマップされています)
            // 0xfc43 (Windows-31J)
            // 0x9b8f (UTF-16BE)
            if (argCheck == '�C') {
                return true;
            }
            // No.356
            // 説明:(IBM拡張文字にマップされています)
            // 0xfc44 (Windows-31J)
            // 0x9bb1 (UTF-16BE)
            if (argCheck == '�D') {
                return true;
            }
            // No.357
            // 説明:(IBM拡張文字にマップされています)
            // 0xfc45 (Windows-31J)
            // 0x9bbb (UTF-16BE)
            if (argCheck == '�E') {
                return true;
            }
            // No.358
            // 説明:(IBM拡張文字にマップされています)
            // 0xfc46 (Windows-31J)
            // 0x9c00 (UTF-16BE)
            if (argCheck == '�F') {
                return true;
            }
            // No.359
            // 説明:(IBM拡張文字にマップされています)
            // 0xfc47 (Windows-31J)
            // 0x9d70 (UTF-16BE)
            if (argCheck == '�G') {
                return true;
            }
            // No.360
            // 説明:(IBM拡張文字にマップされています)
            // 0xfc48 (Windows-31J)
            // 0x9d6b (UTF-16BE)
            if (argCheck == '�H') {
                return true;
            }
            // No.361
            // 説明:(IBM拡張文字にマップされています)
            // 0xfc49 (Windows-31J)
            // 0xfa2d (UTF-16BE)
            if (argCheck == '�I') {
                return true;
            }
            // No.362
            // 説明:(IBM拡張文字にマップされています)
            // 0xfc4a (Windows-31J)
            // 0x9e19 (UTF-16BE)
            if (argCheck == '�J') {
                return true;
            }
            // No.363
            // 説明:eeec→fc4b: (IBM拡張文字にマップされています)
            // 0xfc4b (Windows-31J)
            // 0x9ed1 (UTF-16BE)
            if (argCheck == '�K') {
                return true;
            }
            // No.365
            // 説明:eeef→fa40: (IBM拡張文字にマップされています)
            // 0xfa40 (Windows-31J)
            // 0x2170 (UTF-16BE)
            if (argCheck == '�@') {
                return true;
            }
            // No.366
            // 説明:eef0→fa41: (IBM拡張文字にマップされています)
            // 0xfa41 (Windows-31J)
            // 0x2171 (UTF-16BE)
            if (argCheck == '�A') {
                return true;
            }
            // No.367
            // 説明:eef1→fa42: (IBM拡張文字にマップされています)
            // 0xfa42 (Windows-31J)
            // 0x2172 (UTF-16BE)
            if (argCheck == '�B') {
                return true;
            }
            // No.368
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa43 (Windows-31J)
            // 0x2173 (UTF-16BE)
            if (argCheck == '�C') {
                return true;
            }
            // No.369
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa44 (Windows-31J)
            // 0x2174 (UTF-16BE)
            if (argCheck == '�D') {
                return true;
            }
            // No.370
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa45 (Windows-31J)
            // 0x2175 (UTF-16BE)
            if (argCheck == '�E') {
                return true;
            }
            // No.371
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa46 (Windows-31J)
            // 0x2176 (UTF-16BE)
            if (argCheck == '�F') {
                return true;
            }
            // No.372
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa47 (Windows-31J)
            // 0x2177 (UTF-16BE)
            if (argCheck == '�G') {
                return true;
            }
            // No.373
            // 説明:(IBM拡張文字にマップされています)
            // 0xfa48 (Windows-31J)
            // 0x2178 (UTF-16BE)
            if (argCheck == '�H') {
                return true;
            }
            // No.374
            // 説明:eef8→fa49: (IBM拡張文字にマップされています)
            // 0xfa49 (Windows-31J)
            // 0x2179 (UTF-16BE)
            if (argCheck == '�I') {
                return true;
            }
            // No.375
            // 説明:eef9→81ca: (JIS X 0208-1983にマップされています。) (※重複符号化)
            // 0x81ca (Windows-31J)
            // 0xffe2 (UTF-16BE)
            if (argCheck == '¬') {
                return true;
            }
            // No.376
            // 説明:eefa→fa55: (IBM拡張文字にマップされています)
            // 0xfa55 (Windows-31J)
            // 0xffe4 (UTF-16BE)
            if (argCheck == '�U') {
                return true;
            }
            // No.377
            // 説明:eefb→fa56: (IBM拡張文字にマップされています)
            // 0xfa56 (Windows-31J)
            // 0xff07 (UTF-16BE)
            if (argCheck == '�V') {
                return true;
            }
            // No.378
            // 説明:eefc→fa57: (IBM拡張文字にマップされています)
            // 0xfa57 (Windows-31J)
            // 0xff02 (UTF-16BE)
            if (argCheck == '�W') {
                return true;
            }
            return false;
        }

        /// <summary>与えられた文字列が、全て文字グループに含まれる文字であるかどうかを判定します。</summary>
        /// <param name="argCheck">チェックを行いたい文字列。</param>
        /// <returns>全ての文字が文字グループに含まれていればture。グループに含まれない文字が含まれていればfalse。</returns>
        public virtual bool MatchAll(string argCheck)
        {
            if (argCheck == null) {
                throw new ArgumentException("メソッド[MatchAll]のパラメータ[argCheck]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。");
            }

            char[] arrayArg = argCheck.ToCharArray();
            int arraySize = arrayArg.Length;
            for (int index = 0; index < arraySize; index++) {
                if (Match(arrayArg[index]) == false) {
                    return false;
                }
            }
            return true;
        }

        /// <summary>与えられた文字列が、文字グループに含まれる文字をひとつでも含んでいるかどうかを判定します。</summary>
        /// <param name="argCheck">チェックを行いたい文字列。</param>
        /// <returns>文字グループに含まれている文字をひとつでも含んでいればture。グループに含まれる文字をひとつも含まない場合はfalse。</returns>
        public virtual bool MatchAny(string argCheck)
        {
            if (argCheck == null) {
                throw new ArgumentException("メソッド[MatchAny]のパラメータ[argCheck]にnullが与えられました。しかし、このパラメータにnullを与えることはできません。");
            }

            char[] arrayArg = argCheck.ToCharArray();
            int arraySize = arrayArg.Length;
            for (int index = 0; index < arraySize; index++) {
                if (Match(arrayArg[index])) {
                    return true;
                }
            }
            return false;
        }
    }
}

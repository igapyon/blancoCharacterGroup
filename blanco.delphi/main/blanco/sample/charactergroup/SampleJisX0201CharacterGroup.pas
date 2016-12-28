// ���̃\�[�X�R�[�h�� blanco Framework�ɂ���Ď�����������Ă��܂��B
unit SampleJisX0201CharacterGroup;

interface
type
    // JIS X 0201 (8�r�b�g) 0x20����0x7e�܂ł� 0xa1����0xdf�̃T���v���BblancoCharacterGroup�̎����ɂ͉e�����܂���B
    TSampleJisX0201CharacterGroup = class(TObject)

        function match(argCheck: WideChar): Boolean;

        function matchAll(argCheck: String): Boolean;

        function matchAny(argCheck: String): Boolean;
    end;
implementation

    function TSampleJisX0201CharacterGroup.match(argCheck: WideChar): Boolean;
    begin
        // No.1
        // ����:0x20: ���p�X�y�[�X�B
        // 0x20 (Windows-31J)
        // 0x0020 (UTF-16BE)
        if argCheck = ' ' then begin
            result := true;
            exit;
        end;
        // No.2
        // ����:0x21
        // 0x21 (Windows-31J)
        // 0x0021 (UTF-16BE)
        if argCheck = '!' then begin
            result := true;
            exit;
        end;
        // No.3
        // ����:0x22: �_�u���N�I�[�e�[�V�����B
        // 0x22 (Windows-31J)
        // 0x0022 (UTF-16BE)
        if argCheck = '"' then begin
            result := true;
            exit;
        end;
        // No.4
        // ����:0x23: ISO646-US�ł����B
        // 0x23 (Windows-31J)
        // 0x0023 (UTF-16BE)
        if argCheck = '#' then begin
            result := true;
            exit;
        end;
        // No.5
        // ����:0x24: ISO646-US�ł����B
        // 0x24 (Windows-31J)
        // 0x0024 (UTF-16BE)
        if argCheck = '$' then begin
            result := true;
            exit;
        end;
        // No.6
        // ����:0x25
        // 0x25 (Windows-31J)
        // 0x0025 (UTF-16BE)
        if argCheck = '%' then begin
            result := true;
            exit;
        end;
        // No.7
        // ����:0x26
        // 0x26 (Windows-31J)
        // 0x0026 (UTF-16BE)
        if argCheck = '&' then begin
            result := true;
            exit;
        end;
        // No.8
        // ����:0x27: �N�I�[�e�[�V�����B
        // 0x27 (Windows-31J)
        // 0x0027 (UTF-16BE)
        if argCheck = '''' then begin
            result := true;
            exit;
        end;
        // No.9
        // ����:0x28
        // 0x28 (Windows-31J)
        // 0x0028 (UTF-16BE)
        if argCheck = '(' then begin
            result := true;
            exit;
        end;
        // No.10
        // ����:0x29
        // 0x29 (Windows-31J)
        // 0x0029 (UTF-16BE)
        if argCheck = ')' then begin
            result := true;
            exit;
        end;
        // No.11
        // ����:0x2a
        // 0x2a (Windows-31J)
        // 0x002a (UTF-16BE)
        if argCheck = '*' then begin
            result := true;
            exit;
        end;
        // No.12
        // ����:0x2b
        // 0x2b (Windows-31J)
        // 0x002b (UTF-16BE)
        if argCheck = '+' then begin
            result := true;
            exit;
        end;
        // No.13
        // ����:0x2c
        // 0x2c (Windows-31J)
        // 0x002c (UTF-16BE)
        if argCheck = ',' then begin
            result := true;
            exit;
        end;
        // No.14
        // ����:0x2d
        // 0x2d (Windows-31J)
        // 0x002d (UTF-16BE)
        if argCheck = '-' then begin
            result := true;
            exit;
        end;
        // No.15
        // ����:0x2e
        // 0x2e (Windows-31J)
        // 0x002e (UTF-16BE)
        if argCheck = '.' then begin
            result := true;
            exit;
        end;
        // No.16
        // ����:0x2f: �X���b�V���B
        // 0x2f (Windows-31J)
        // 0x002f (UTF-16BE)
        if argCheck = '/' then begin
            result := true;
            exit;
        end;
        // No.17
        // ����:0x30: ������0�B
        // 0x30 (Windows-31J)
        // 0x0030 (UTF-16BE)
        if argCheck = '0' then begin
            result := true;
            exit;
        end;
        // No.18
        // ����:0x31: ������1�B
        // 0x31 (Windows-31J)
        // 0x0031 (UTF-16BE)
        if argCheck = '1' then begin
            result := true;
            exit;
        end;
        // No.19
        // ����:0x32: ������2�B
        // 0x32 (Windows-31J)
        // 0x0032 (UTF-16BE)
        if argCheck = '2' then begin
            result := true;
            exit;
        end;
        // No.20
        // ����:0x33: ������3�B
        // 0x33 (Windows-31J)
        // 0x0033 (UTF-16BE)
        if argCheck = '3' then begin
            result := true;
            exit;
        end;
        // No.21
        // ����:0x34: ������4�B
        // 0x34 (Windows-31J)
        // 0x0034 (UTF-16BE)
        if argCheck = '4' then begin
            result := true;
            exit;
        end;
        // No.22
        // ����:0x35: ������5�B
        // 0x35 (Windows-31J)
        // 0x0035 (UTF-16BE)
        if argCheck = '5' then begin
            result := true;
            exit;
        end;
        // No.23
        // ����:0x36: ������6�B
        // 0x36 (Windows-31J)
        // 0x0036 (UTF-16BE)
        if argCheck = '6' then begin
            result := true;
            exit;
        end;
        // No.24
        // ����:0x37: ������7�B
        // 0x37 (Windows-31J)
        // 0x0037 (UTF-16BE)
        if argCheck = '7' then begin
            result := true;
            exit;
        end;
        // No.25
        // ����:0x38: ������8�B
        // 0x38 (Windows-31J)
        // 0x0038 (UTF-16BE)
        if argCheck = '8' then begin
            result := true;
            exit;
        end;
        // No.26
        // ����:0x39: ������9�B
        // 0x39 (Windows-31J)
        // 0x0039 (UTF-16BE)
        if argCheck = '9' then begin
            result := true;
            exit;
        end;
        // No.27
        // ����:0x3a: �R�����B
        // 0x3a (Windows-31J)
        // 0x003a (UTF-16BE)
        if argCheck = ':' then begin
            result := true;
            exit;
        end;
        // No.28
        // ����:0x3b: �Z�~�R�����B
        // 0x3b (Windows-31J)
        // 0x003b (UTF-16BE)
        if argCheck = ';' then begin
            result := true;
            exit;
        end;
        // No.29
        // 0x3c (Windows-31J)
        // 0x003c (UTF-16BE)
        if argCheck = '<' then begin
            result := true;
            exit;
        end;
        // No.30
        // 0x3d (Windows-31J)
        // 0x003d (UTF-16BE)
        if argCheck = '=' then begin
            result := true;
            exit;
        end;
        // No.31
        // 0x3e (Windows-31J)
        // 0x003e (UTF-16BE)
        if argCheck = '>' then begin
            result := true;
            exit;
        end;
        // No.32
        // ����:0x3f
        // 0x3f (Windows-31J)
        // 0x003f (UTF-16BE)
        if argCheck = '?' then begin
            result := true;
            exit;
        end;
        // No.33
        // ����:0x40: ISO646-US�ł����B
        // 0x40 (Windows-31J)
        // 0x0040 (UTF-16BE)
        if argCheck = '@' then begin
            result := true;
            exit;
        end;
        // No.34
        // ����:0x41: �A���t�@�x�b�g��A
        // 0x41 (Windows-31J)
        // 0x0041 (UTF-16BE)
        if argCheck = 'A' then begin
            result := true;
            exit;
        end;
        // No.35
        // 0x42 (Windows-31J)
        // 0x0042 (UTF-16BE)
        if argCheck = 'B' then begin
            result := true;
            exit;
        end;
        // No.36
        // 0x43 (Windows-31J)
        // 0x0043 (UTF-16BE)
        if argCheck = 'C' then begin
            result := true;
            exit;
        end;
        // No.37
        // 0x44 (Windows-31J)
        // 0x0044 (UTF-16BE)
        if argCheck = 'D' then begin
            result := true;
            exit;
        end;
        // No.38
        // 0x45 (Windows-31J)
        // 0x0045 (UTF-16BE)
        if argCheck = 'E' then begin
            result := true;
            exit;
        end;
        // No.39
        // 0x46 (Windows-31J)
        // 0x0046 (UTF-16BE)
        if argCheck = 'F' then begin
            result := true;
            exit;
        end;
        // No.40
        // 0x47 (Windows-31J)
        // 0x0047 (UTF-16BE)
        if argCheck = 'G' then begin
            result := true;
            exit;
        end;
        // No.41
        // 0x48 (Windows-31J)
        // 0x0048 (UTF-16BE)
        if argCheck = 'H' then begin
            result := true;
            exit;
        end;
        // No.42
        // 0x49 (Windows-31J)
        // 0x0049 (UTF-16BE)
        if argCheck = 'I' then begin
            result := true;
            exit;
        end;
        // No.43
        // 0x4a (Windows-31J)
        // 0x004a (UTF-16BE)
        if argCheck = 'J' then begin
            result := true;
            exit;
        end;
        // No.44
        // 0x4b (Windows-31J)
        // 0x004b (UTF-16BE)
        if argCheck = 'K' then begin
            result := true;
            exit;
        end;
        // No.45
        // 0x4c (Windows-31J)
        // 0x004c (UTF-16BE)
        if argCheck = 'L' then begin
            result := true;
            exit;
        end;
        // No.46
        // 0x4d (Windows-31J)
        // 0x004d (UTF-16BE)
        if argCheck = 'M' then begin
            result := true;
            exit;
        end;
        // No.47
        // 0x4e (Windows-31J)
        // 0x004e (UTF-16BE)
        if argCheck = 'N' then begin
            result := true;
            exit;
        end;
        // No.48
        // 0x4f (Windows-31J)
        // 0x004f (UTF-16BE)
        if argCheck = 'O' then begin
            result := true;
            exit;
        end;
        // No.49
        // 0x50 (Windows-31J)
        // 0x0050 (UTF-16BE)
        if argCheck = 'P' then begin
            result := true;
            exit;
        end;
        // No.50
        // 0x51 (Windows-31J)
        // 0x0051 (UTF-16BE)
        if argCheck = 'Q' then begin
            result := true;
            exit;
        end;
        // No.51
        // 0x52 (Windows-31J)
        // 0x0052 (UTF-16BE)
        if argCheck = 'R' then begin
            result := true;
            exit;
        end;
        // No.52
        // 0x53 (Windows-31J)
        // 0x0053 (UTF-16BE)
        if argCheck = 'S' then begin
            result := true;
            exit;
        end;
        // No.53
        // 0x54 (Windows-31J)
        // 0x0054 (UTF-16BE)
        if argCheck = 'T' then begin
            result := true;
            exit;
        end;
        // No.54
        // 0x55 (Windows-31J)
        // 0x0055 (UTF-16BE)
        if argCheck = 'U' then begin
            result := true;
            exit;
        end;
        // No.55
        // 0x56 (Windows-31J)
        // 0x0056 (UTF-16BE)
        if argCheck = 'V' then begin
            result := true;
            exit;
        end;
        // No.56
        // 0x57 (Windows-31J)
        // 0x0057 (UTF-16BE)
        if argCheck = 'W' then begin
            result := true;
            exit;
        end;
        // No.57
        // 0x58 (Windows-31J)
        // 0x0058 (UTF-16BE)
        if argCheck = 'X' then begin
            result := true;
            exit;
        end;
        // No.58
        // 0x59 (Windows-31J)
        // 0x0059 (UTF-16BE)
        if argCheck = 'Y' then begin
            result := true;
            exit;
        end;
        // No.59
        // ����:0x5a: �A���t�@�x�b�g��Z�B
        // 0x5a (Windows-31J)
        // 0x005a (UTF-16BE)
        if argCheck = 'Z' then begin
            result := true;
            exit;
        end;
        // No.60
        // ����:0x5b: ISO646-US�ł�[�B
        // 0x5b (Windows-31J)
        // 0x005b (UTF-16BE)
        if argCheck = '[' then begin
            result := true;
            exit;
        end;
        // No.61
        // ����:0x5c: ISO646-US�ł́_�BISO646-JP (JIS X 0201)�ł́��B
        // 0x5c (Windows-31J)
        // 0x005c (UTF-16BE)
        if argCheck = '\' then begin
            result := true;
            exit;
        end;
        // No.62
        // ����:0x5d: ISO646-US�ł�]�B
        // 0x5d (Windows-31J)
        // 0x005d (UTF-16BE)
        if argCheck = ']' then begin
            result := true;
            exit;
        end;
        // No.63
        // ����:0x5e: ISO646-US�ł�^�B
        // 0x5e (Windows-31J)
        // 0x005e (UTF-16BE)
        if argCheck = '^' then begin
            result := true;
            exit;
        end;
        // No.64
        // ����:0x5f
        // 0x5f (Windows-31J)
        // 0x005f (UTF-16BE)
        if argCheck = '_' then begin
            result := true;
            exit;
        end;
        // No.65
        // ����:0x60: ISO646-US�ł�`�B
        // 0x60 (Windows-31J)
        // 0x0060 (UTF-16BE)
        if argCheck = '`' then begin
            result := true;
            exit;
        end;
        // No.66
        // ����:0x61: �A���t�@�x�b�g��a�B
        // 0x61 (Windows-31J)
        // 0x0061 (UTF-16BE)
        if argCheck = 'a' then begin
            result := true;
            exit;
        end;
        // No.67
        // 0x62 (Windows-31J)
        // 0x0062 (UTF-16BE)
        if argCheck = 'b' then begin
            result := true;
            exit;
        end;
        // No.68
        // 0x63 (Windows-31J)
        // 0x0063 (UTF-16BE)
        if argCheck = 'c' then begin
            result := true;
            exit;
        end;
        // No.69
        // 0x64 (Windows-31J)
        // 0x0064 (UTF-16BE)
        if argCheck = 'd' then begin
            result := true;
            exit;
        end;
        // No.70
        // 0x65 (Windows-31J)
        // 0x0065 (UTF-16BE)
        if argCheck = 'e' then begin
            result := true;
            exit;
        end;
        // No.71
        // 0x66 (Windows-31J)
        // 0x0066 (UTF-16BE)
        if argCheck = 'f' then begin
            result := true;
            exit;
        end;
        // No.72
        // 0x67 (Windows-31J)
        // 0x0067 (UTF-16BE)
        if argCheck = 'g' then begin
            result := true;
            exit;
        end;
        // No.73
        // 0x68 (Windows-31J)
        // 0x0068 (UTF-16BE)
        if argCheck = 'h' then begin
            result := true;
            exit;
        end;
        // No.74
        // 0x69 (Windows-31J)
        // 0x0069 (UTF-16BE)
        if argCheck = 'i' then begin
            result := true;
            exit;
        end;
        // No.75
        // 0x6a (Windows-31J)
        // 0x006a (UTF-16BE)
        if argCheck = 'j' then begin
            result := true;
            exit;
        end;
        // No.76
        // 0x6b (Windows-31J)
        // 0x006b (UTF-16BE)
        if argCheck = 'k' then begin
            result := true;
            exit;
        end;
        // No.77
        // 0x6c (Windows-31J)
        // 0x006c (UTF-16BE)
        if argCheck = 'l' then begin
            result := true;
            exit;
        end;
        // No.78
        // 0x6d (Windows-31J)
        // 0x006d (UTF-16BE)
        if argCheck = 'm' then begin
            result := true;
            exit;
        end;
        // No.79
        // 0x6e (Windows-31J)
        // 0x006e (UTF-16BE)
        if argCheck = 'n' then begin
            result := true;
            exit;
        end;
        // No.80
        // 0x6f (Windows-31J)
        // 0x006f (UTF-16BE)
        if argCheck = 'o' then begin
            result := true;
            exit;
        end;
        // No.81
        // 0x70 (Windows-31J)
        // 0x0070 (UTF-16BE)
        if argCheck = 'p' then begin
            result := true;
            exit;
        end;
        // No.82
        // 0x71 (Windows-31J)
        // 0x0071 (UTF-16BE)
        if argCheck = 'q' then begin
            result := true;
            exit;
        end;
        // No.83
        // 0x72 (Windows-31J)
        // 0x0072 (UTF-16BE)
        if argCheck = 'r' then begin
            result := true;
            exit;
        end;
        // No.84
        // 0x73 (Windows-31J)
        // 0x0073 (UTF-16BE)
        if argCheck = 's' then begin
            result := true;
            exit;
        end;
        // No.85
        // 0x74 (Windows-31J)
        // 0x0074 (UTF-16BE)
        if argCheck = 't' then begin
            result := true;
            exit;
        end;
        // No.86
        // 0x75 (Windows-31J)
        // 0x0075 (UTF-16BE)
        if argCheck = 'u' then begin
            result := true;
            exit;
        end;
        // No.87
        // 0x76 (Windows-31J)
        // 0x0076 (UTF-16BE)
        if argCheck = 'v' then begin
            result := true;
            exit;
        end;
        // No.88
        // 0x77 (Windows-31J)
        // 0x0077 (UTF-16BE)
        if argCheck = 'w' then begin
            result := true;
            exit;
        end;
        // No.89
        // 0x78 (Windows-31J)
        // 0x0078 (UTF-16BE)
        if argCheck = 'x' then begin
            result := true;
            exit;
        end;
        // No.90
        // ����:0x79
        // 0x79 (Windows-31J)
        // 0x0079 (UTF-16BE)
        if argCheck = 'y' then begin
            result := true;
            exit;
        end;
        // No.91
        // ����:0x7a: �A���t�@�x�b�g��z�B
        // 0x7a (Windows-31J)
        // 0x007a (UTF-16BE)
        if argCheck = 'z' then begin
            result := true;
            exit;
        end;
        // No.92
        // ����:0x7b: ISO646-US�ł�{�B
        // 0x7b (Windows-31J)
        // 0x007b (UTF-16BE)
        if argCheck = '{' then begin
            result := true;
            exit;
        end;
        // No.93
        // ����:0x7c: ISO646-US�ł�|�B
        // 0x7c (Windows-31J)
        // 0x007c (UTF-16BE)
        if argCheck = '|' then begin
            result := true;
            exit;
        end;
        // No.94
        // ����:0x7d: ISO646-US�ł�}�B
        // 0x7d (Windows-31J)
        // 0x007d (UTF-16BE)
        if argCheck = '}' then begin
            result := true;
            exit;
        end;
        // No.95
        // ����:0x7e: ISO646-US�ł́`�BISO646-JP (JIS X 0201)�ł́P�B
        // 0x7e (Windows-31J)
        // 0x007e (UTF-16BE)
        if argCheck = '~' then begin
            result := true;
            exit;
        end;
        // No.97
        // ����:0xa1: ���p�J�^�J�i�J�n�B
        // 0xa1 (Windows-31J)
        // 0xff61 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.98
        // ����:0xa2:
        // 0xa2 (Windows-31J)
        // 0xff62 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.99
        // ����:0xa3:
        // 0xa3 (Windows-31J)
        // 0xff63 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.100
        // ����:0xa4:
        // 0xa4 (Windows-31J)
        // 0xff64 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.101
        // ����:0xa5: ����(�Ȃ�����)
        // 0xa5 (Windows-31J)
        // 0xff65 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.102
        // ����:0xa6: �J�^�J�i�̃�
        // 0xa6 (Windows-31J)
        // 0xff66 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.103
        // ����:0xa7:
        // 0xa7 (Windows-31J)
        // 0xff67 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.104
        // 0xa8 (Windows-31J)
        // 0xff68 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.105
        // 0xa9 (Windows-31J)
        // 0xff69 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.106
        // 0xaa (Windows-31J)
        // 0xff6a (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.107
        // 0xab (Windows-31J)
        // 0xff6b (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.108
        // 0xac (Windows-31J)
        // 0xff6c (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.109
        // 0xad (Windows-31J)
        // 0xff6d (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.110
        // 0xae (Windows-31J)
        // 0xff6e (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.111
        // 0xaf (Windows-31J)
        // 0xff6f (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.112
        // 0xb0 (Windows-31J)
        // 0xff70 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.113
        // 0xb1 (Windows-31J)
        // 0xff71 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.114
        // 0xb2 (Windows-31J)
        // 0xff72 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.115
        // 0xb3 (Windows-31J)
        // 0xff73 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.116
        // 0xb4 (Windows-31J)
        // 0xff74 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.117
        // 0xb5 (Windows-31J)
        // 0xff75 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.118
        // 0xb6 (Windows-31J)
        // 0xff76 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.119
        // 0xb7 (Windows-31J)
        // 0xff77 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.120
        // 0xb8 (Windows-31J)
        // 0xff78 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.121
        // 0xb9 (Windows-31J)
        // 0xff79 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.122
        // 0xba (Windows-31J)
        // 0xff7a (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.123
        // 0xbb (Windows-31J)
        // 0xff7b (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.124
        // 0xbc (Windows-31J)
        // 0xff7c (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.125
        // 0xbd (Windows-31J)
        // 0xff7d (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.126
        // 0xbe (Windows-31J)
        // 0xff7e (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.127
        // 0xbf (Windows-31J)
        // 0xff7f (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.128
        // 0xc0 (Windows-31J)
        // 0xff80 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.129
        // 0xc1 (Windows-31J)
        // 0xff81 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.130
        // 0xc2 (Windows-31J)
        // 0xff82 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.131
        // 0xc3 (Windows-31J)
        // 0xff83 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.132
        // 0xc4 (Windows-31J)
        // 0xff84 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.133
        // 0xc5 (Windows-31J)
        // 0xff85 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.134
        // 0xc6 (Windows-31J)
        // 0xff86 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.135
        // 0xc7 (Windows-31J)
        // 0xff87 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.136
        // 0xc8 (Windows-31J)
        // 0xff88 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.137
        // 0xc9 (Windows-31J)
        // 0xff89 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.138
        // 0xca (Windows-31J)
        // 0xff8a (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.139
        // 0xcb (Windows-31J)
        // 0xff8b (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.140
        // 0xcc (Windows-31J)
        // 0xff8c (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.141
        // 0xcd (Windows-31J)
        // 0xff8d (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.142
        // 0xce (Windows-31J)
        // 0xff8e (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.143
        // 0xcf (Windows-31J)
        // 0xff8f (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.144
        // 0xd0 (Windows-31J)
        // 0xff90 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.145
        // 0xd1 (Windows-31J)
        // 0xff91 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.146
        // 0xd2 (Windows-31J)
        // 0xff92 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.147
        // 0xd3 (Windows-31J)
        // 0xff93 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.148
        // 0xd4 (Windows-31J)
        // 0xff94 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.149
        // 0xd5 (Windows-31J)
        // 0xff95 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.150
        // 0xd6 (Windows-31J)
        // 0xff96 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.151
        // 0xd7 (Windows-31J)
        // 0xff97 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.152
        // 0xd8 (Windows-31J)
        // 0xff98 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.153
        // 0xd9 (Windows-31J)
        // 0xff99 (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.154
        // 0xda (Windows-31J)
        // 0xff9a (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.155
        // 0xdb (Windows-31J)
        // 0xff9b (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.156
        // 0xdc (Windows-31J)
        // 0xff9c (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.157
        // 0xdd (Windows-31J)
        // 0xff9d (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.158
        // 0xde (Windows-31J)
        // 0xff9e (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        // No.159
        // ����:0xdf: ���p�J�^�J�i�́��B�I���B
        // 0xdf (Windows-31J)
        // 0xff9f (UTF-16BE)
        if argCheck = '�' then begin
            result := true;
            exit;
        end;
        result := false;
        exit;
    end;

    function TSampleJisX0201CharacterGroup.matchAll(argCheck: String): Boolean;
    var
    argCheckWide: WideString;
    index: integer;
    begin
        argCheckWide := WideString(argCheck);
        index := 1;
        while index <= length(argCheckWide) do begin
            if match(argCheckWide[index]) = false then begin
                result := false;
                exit;
            end;
            index := index + 1;
        end;
        result := true;
        exit;
    end;

    function TSampleJisX0201CharacterGroup.matchAny(argCheck: String): Boolean;
    var
    argCheckWide: WideString;
    index: integer;
    begin
        argCheckWide := WideString(argCheck);
        index := 1;
        while index <= length(argCheckWide) do begin
            if match(argCheckWide[index]) then begin
                result := true;
                exit;
            end;
            index := index + 1;
        end;
        result := false;
        exit;
    end;
end.

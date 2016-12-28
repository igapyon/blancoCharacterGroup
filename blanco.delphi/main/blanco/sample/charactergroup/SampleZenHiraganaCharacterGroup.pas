// ���̃\�[�X�R�[�h�� blanco Framework�ɂ���Ď�����������Ă��܂��B
unit SampleZenHiraganaCharacterGroup;

interface
type
    // �S�p�Ђ炪�Ȃ̃T���v���BblancoCharacterGroup�̎����ɂ͉e�����܂���B
    TSampleZenHiraganaCharacterGroup = class(TObject)

        function match(argCheck: WideChar): Boolean;

        function matchAll(argCheck: String): Boolean;

        function matchAny(argCheck: String): Boolean;
    end;
implementation

    function TSampleZenHiraganaCharacterGroup.match(argCheck: WideChar): Boolean;
    begin
        // No.1
        // ����:829f: �Ђ炪�ȁB���B
        // 0x829f (Windows-31J)
        // 0x3041 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.2
        // ����:82a0: �Ђ炪�ȁB���B
        // 0x82a0 (Windows-31J)
        // 0x3042 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.3
        // 0x82a1 (Windows-31J)
        // 0x3043 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.4
        // 0x82a2 (Windows-31J)
        // 0x3044 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.5
        // 0x82a3 (Windows-31J)
        // 0x3045 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.6
        // 0x82a4 (Windows-31J)
        // 0x3046 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.7
        // 0x82a5 (Windows-31J)
        // 0x3047 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.8
        // 0x82a6 (Windows-31J)
        // 0x3048 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.9
        // 0x82a7 (Windows-31J)
        // 0x3049 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.10
        // 0x82a8 (Windows-31J)
        // 0x304a (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.11
        // 0x82a9 (Windows-31J)
        // 0x304b (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.12
        // 0x82aa (Windows-31J)
        // 0x304c (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.13
        // 0x82ab (Windows-31J)
        // 0x304d (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.14
        // 0x82ac (Windows-31J)
        // 0x304e (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.15
        // 0x82ad (Windows-31J)
        // 0x304f (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.16
        // 0x82ae (Windows-31J)
        // 0x3050 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.17
        // 0x82af (Windows-31J)
        // 0x3051 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.18
        // 0x82b0 (Windows-31J)
        // 0x3052 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.19
        // 0x82b1 (Windows-31J)
        // 0x3053 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.20
        // 0x82b2 (Windows-31J)
        // 0x3054 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.21
        // 0x82b3 (Windows-31J)
        // 0x3055 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.22
        // 0x82b4 (Windows-31J)
        // 0x3056 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.23
        // 0x82b5 (Windows-31J)
        // 0x3057 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.24
        // 0x82b6 (Windows-31J)
        // 0x3058 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.25
        // 0x82b7 (Windows-31J)
        // 0x3059 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.26
        // 0x82b8 (Windows-31J)
        // 0x305a (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.27
        // 0x82b9 (Windows-31J)
        // 0x305b (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.28
        // 0x82ba (Windows-31J)
        // 0x305c (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.29
        // 0x82bb (Windows-31J)
        // 0x305d (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.30
        // 0x82bc (Windows-31J)
        // 0x305e (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.31
        // 0x82bd (Windows-31J)
        // 0x305f (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.32
        // 0x82be (Windows-31J)
        // 0x3060 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.33
        // 0x82bf (Windows-31J)
        // 0x3061 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.34
        // 0x82c0 (Windows-31J)
        // 0x3062 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.35
        // 0x82c1 (Windows-31J)
        // 0x3063 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.36
        // 0x82c2 (Windows-31J)
        // 0x3064 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.37
        // 0x82c3 (Windows-31J)
        // 0x3065 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.38
        // 0x82c4 (Windows-31J)
        // 0x3066 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.39
        // 0x82c5 (Windows-31J)
        // 0x3067 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.40
        // 0x82c6 (Windows-31J)
        // 0x3068 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.41
        // 0x82c7 (Windows-31J)
        // 0x3069 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.42
        // 0x82c8 (Windows-31J)
        // 0x306a (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.43
        // 0x82c9 (Windows-31J)
        // 0x306b (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.44
        // 0x82ca (Windows-31J)
        // 0x306c (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.45
        // 0x82cb (Windows-31J)
        // 0x306d (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.46
        // 0x82cc (Windows-31J)
        // 0x306e (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.47
        // 0x82cd (Windows-31J)
        // 0x306f (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.48
        // 0x82ce (Windows-31J)
        // 0x3070 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.49
        // 0x82cf (Windows-31J)
        // 0x3071 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.50
        // 0x82d0 (Windows-31J)
        // 0x3072 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.51
        // 0x82d1 (Windows-31J)
        // 0x3073 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.52
        // 0x82d2 (Windows-31J)
        // 0x3074 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.53
        // 0x82d3 (Windows-31J)
        // 0x3075 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.54
        // 0x82d4 (Windows-31J)
        // 0x3076 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.55
        // 0x82d5 (Windows-31J)
        // 0x3077 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.56
        // 0x82d6 (Windows-31J)
        // 0x3078 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.57
        // 0x82d7 (Windows-31J)
        // 0x3079 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.58
        // 0x82d8 (Windows-31J)
        // 0x307a (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.59
        // 0x82d9 (Windows-31J)
        // 0x307b (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.60
        // 0x82da (Windows-31J)
        // 0x307c (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.61
        // 0x82db (Windows-31J)
        // 0x307d (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.62
        // 0x82dc (Windows-31J)
        // 0x307e (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.63
        // 0x82dd (Windows-31J)
        // 0x307f (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.64
        // 0x82de (Windows-31J)
        // 0x3080 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.65
        // 0x82df (Windows-31J)
        // 0x3081 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.66
        // 0x82e0 (Windows-31J)
        // 0x3082 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.67
        // 0x82e1 (Windows-31J)
        // 0x3083 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.68
        // 0x82e2 (Windows-31J)
        // 0x3084 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.69
        // 0x82e3 (Windows-31J)
        // 0x3085 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.70
        // 0x82e4 (Windows-31J)
        // 0x3086 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.71
        // 0x82e5 (Windows-31J)
        // 0x3087 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.72
        // 0x82e6 (Windows-31J)
        // 0x3088 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.73
        // 0x82e7 (Windows-31J)
        // 0x3089 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.74
        // 0x82e8 (Windows-31J)
        // 0x308a (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.75
        // 0x82e9 (Windows-31J)
        // 0x308b (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.76
        // 0x82ea (Windows-31J)
        // 0x308c (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.77
        // 0x82eb (Windows-31J)
        // 0x308d (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.78
        // 0x82ec (Windows-31J)
        // 0x308e (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.79
        // 0x82ed (Windows-31J)
        // 0x308f (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.80
        // 0x82ee (Windows-31J)
        // 0x3090 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.81
        // 0x82ef (Windows-31J)
        // 0x3091 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.82
        // 0x82f0 (Windows-31J)
        // 0x3092 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.83
        // ����:82f1: �Ђ炪�ȁB��B
        // 0x82f1 (Windows-31J)
        // 0x3093 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        result := false;
        exit;
    end;

    function TSampleZenHiraganaCharacterGroup.matchAll(argCheck: String): Boolean;
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

    function TSampleZenHiraganaCharacterGroup.matchAny(argCheck: String): Boolean;
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


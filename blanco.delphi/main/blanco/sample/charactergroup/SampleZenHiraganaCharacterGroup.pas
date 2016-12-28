// このソースコードは blanco Frameworkによって自動生成されています。
unit SampleZenHiraganaCharacterGroup;

interface
type
    // 全角ひらがなのサンプル。blancoCharacterGroupの実装には影響しません。
    TSampleZenHiraganaCharacterGroup = class(TObject)

        function match(argCheck: WideChar): Boolean;

        function matchAll(argCheck: String): Boolean;

        function matchAny(argCheck: String): Boolean;
    end;
implementation

    function TSampleZenHiraganaCharacterGroup.match(argCheck: WideChar): Boolean;
    begin
        // No.1
        // 説明:829f: ひらがな。ぁ。
        // 0x829f (Windows-31J)
        // 0x3041 (UTF-16BE)
        if argCheck = 'ぁ' then begin
            result := true;
            exit;
        end;
        // No.2
        // 説明:82a0: ひらがな。あ。
        // 0x82a0 (Windows-31J)
        // 0x3042 (UTF-16BE)
        if argCheck = 'あ' then begin
            result := true;
            exit;
        end;
        // No.3
        // 0x82a1 (Windows-31J)
        // 0x3043 (UTF-16BE)
        if argCheck = 'ぃ' then begin
            result := true;
            exit;
        end;
        // No.4
        // 0x82a2 (Windows-31J)
        // 0x3044 (UTF-16BE)
        if argCheck = 'い' then begin
            result := true;
            exit;
        end;
        // No.5
        // 0x82a3 (Windows-31J)
        // 0x3045 (UTF-16BE)
        if argCheck = 'ぅ' then begin
            result := true;
            exit;
        end;
        // No.6
        // 0x82a4 (Windows-31J)
        // 0x3046 (UTF-16BE)
        if argCheck = 'う' then begin
            result := true;
            exit;
        end;
        // No.7
        // 0x82a5 (Windows-31J)
        // 0x3047 (UTF-16BE)
        if argCheck = 'ぇ' then begin
            result := true;
            exit;
        end;
        // No.8
        // 0x82a6 (Windows-31J)
        // 0x3048 (UTF-16BE)
        if argCheck = 'え' then begin
            result := true;
            exit;
        end;
        // No.9
        // 0x82a7 (Windows-31J)
        // 0x3049 (UTF-16BE)
        if argCheck = 'ぉ' then begin
            result := true;
            exit;
        end;
        // No.10
        // 0x82a8 (Windows-31J)
        // 0x304a (UTF-16BE)
        if argCheck = 'お' then begin
            result := true;
            exit;
        end;
        // No.11
        // 0x82a9 (Windows-31J)
        // 0x304b (UTF-16BE)
        if argCheck = 'か' then begin
            result := true;
            exit;
        end;
        // No.12
        // 0x82aa (Windows-31J)
        // 0x304c (UTF-16BE)
        if argCheck = 'が' then begin
            result := true;
            exit;
        end;
        // No.13
        // 0x82ab (Windows-31J)
        // 0x304d (UTF-16BE)
        if argCheck = 'き' then begin
            result := true;
            exit;
        end;
        // No.14
        // 0x82ac (Windows-31J)
        // 0x304e (UTF-16BE)
        if argCheck = 'ぎ' then begin
            result := true;
            exit;
        end;
        // No.15
        // 0x82ad (Windows-31J)
        // 0x304f (UTF-16BE)
        if argCheck = 'く' then begin
            result := true;
            exit;
        end;
        // No.16
        // 0x82ae (Windows-31J)
        // 0x3050 (UTF-16BE)
        if argCheck = 'ぐ' then begin
            result := true;
            exit;
        end;
        // No.17
        // 0x82af (Windows-31J)
        // 0x3051 (UTF-16BE)
        if argCheck = 'け' then begin
            result := true;
            exit;
        end;
        // No.18
        // 0x82b0 (Windows-31J)
        // 0x3052 (UTF-16BE)
        if argCheck = 'げ' then begin
            result := true;
            exit;
        end;
        // No.19
        // 0x82b1 (Windows-31J)
        // 0x3053 (UTF-16BE)
        if argCheck = 'こ' then begin
            result := true;
            exit;
        end;
        // No.20
        // 0x82b2 (Windows-31J)
        // 0x3054 (UTF-16BE)
        if argCheck = 'ご' then begin
            result := true;
            exit;
        end;
        // No.21
        // 0x82b3 (Windows-31J)
        // 0x3055 (UTF-16BE)
        if argCheck = 'さ' then begin
            result := true;
            exit;
        end;
        // No.22
        // 0x82b4 (Windows-31J)
        // 0x3056 (UTF-16BE)
        if argCheck = 'ざ' then begin
            result := true;
            exit;
        end;
        // No.23
        // 0x82b5 (Windows-31J)
        // 0x3057 (UTF-16BE)
        if argCheck = 'し' then begin
            result := true;
            exit;
        end;
        // No.24
        // 0x82b6 (Windows-31J)
        // 0x3058 (UTF-16BE)
        if argCheck = 'じ' then begin
            result := true;
            exit;
        end;
        // No.25
        // 0x82b7 (Windows-31J)
        // 0x3059 (UTF-16BE)
        if argCheck = 'す' then begin
            result := true;
            exit;
        end;
        // No.26
        // 0x82b8 (Windows-31J)
        // 0x305a (UTF-16BE)
        if argCheck = 'ず' then begin
            result := true;
            exit;
        end;
        // No.27
        // 0x82b9 (Windows-31J)
        // 0x305b (UTF-16BE)
        if argCheck = 'せ' then begin
            result := true;
            exit;
        end;
        // No.28
        // 0x82ba (Windows-31J)
        // 0x305c (UTF-16BE)
        if argCheck = 'ぜ' then begin
            result := true;
            exit;
        end;
        // No.29
        // 0x82bb (Windows-31J)
        // 0x305d (UTF-16BE)
        if argCheck = 'そ' then begin
            result := true;
            exit;
        end;
        // No.30
        // 0x82bc (Windows-31J)
        // 0x305e (UTF-16BE)
        if argCheck = 'ぞ' then begin
            result := true;
            exit;
        end;
        // No.31
        // 0x82bd (Windows-31J)
        // 0x305f (UTF-16BE)
        if argCheck = 'た' then begin
            result := true;
            exit;
        end;
        // No.32
        // 0x82be (Windows-31J)
        // 0x3060 (UTF-16BE)
        if argCheck = 'だ' then begin
            result := true;
            exit;
        end;
        // No.33
        // 0x82bf (Windows-31J)
        // 0x3061 (UTF-16BE)
        if argCheck = 'ち' then begin
            result := true;
            exit;
        end;
        // No.34
        // 0x82c0 (Windows-31J)
        // 0x3062 (UTF-16BE)
        if argCheck = 'ぢ' then begin
            result := true;
            exit;
        end;
        // No.35
        // 0x82c1 (Windows-31J)
        // 0x3063 (UTF-16BE)
        if argCheck = 'っ' then begin
            result := true;
            exit;
        end;
        // No.36
        // 0x82c2 (Windows-31J)
        // 0x3064 (UTF-16BE)
        if argCheck = 'つ' then begin
            result := true;
            exit;
        end;
        // No.37
        // 0x82c3 (Windows-31J)
        // 0x3065 (UTF-16BE)
        if argCheck = 'づ' then begin
            result := true;
            exit;
        end;
        // No.38
        // 0x82c4 (Windows-31J)
        // 0x3066 (UTF-16BE)
        if argCheck = 'て' then begin
            result := true;
            exit;
        end;
        // No.39
        // 0x82c5 (Windows-31J)
        // 0x3067 (UTF-16BE)
        if argCheck = 'で' then begin
            result := true;
            exit;
        end;
        // No.40
        // 0x82c6 (Windows-31J)
        // 0x3068 (UTF-16BE)
        if argCheck = 'と' then begin
            result := true;
            exit;
        end;
        // No.41
        // 0x82c7 (Windows-31J)
        // 0x3069 (UTF-16BE)
        if argCheck = 'ど' then begin
            result := true;
            exit;
        end;
        // No.42
        // 0x82c8 (Windows-31J)
        // 0x306a (UTF-16BE)
        if argCheck = 'な' then begin
            result := true;
            exit;
        end;
        // No.43
        // 0x82c9 (Windows-31J)
        // 0x306b (UTF-16BE)
        if argCheck = 'に' then begin
            result := true;
            exit;
        end;
        // No.44
        // 0x82ca (Windows-31J)
        // 0x306c (UTF-16BE)
        if argCheck = 'ぬ' then begin
            result := true;
            exit;
        end;
        // No.45
        // 0x82cb (Windows-31J)
        // 0x306d (UTF-16BE)
        if argCheck = 'ね' then begin
            result := true;
            exit;
        end;
        // No.46
        // 0x82cc (Windows-31J)
        // 0x306e (UTF-16BE)
        if argCheck = 'の' then begin
            result := true;
            exit;
        end;
        // No.47
        // 0x82cd (Windows-31J)
        // 0x306f (UTF-16BE)
        if argCheck = 'は' then begin
            result := true;
            exit;
        end;
        // No.48
        // 0x82ce (Windows-31J)
        // 0x3070 (UTF-16BE)
        if argCheck = 'ば' then begin
            result := true;
            exit;
        end;
        // No.49
        // 0x82cf (Windows-31J)
        // 0x3071 (UTF-16BE)
        if argCheck = 'ぱ' then begin
            result := true;
            exit;
        end;
        // No.50
        // 0x82d0 (Windows-31J)
        // 0x3072 (UTF-16BE)
        if argCheck = 'ひ' then begin
            result := true;
            exit;
        end;
        // No.51
        // 0x82d1 (Windows-31J)
        // 0x3073 (UTF-16BE)
        if argCheck = 'び' then begin
            result := true;
            exit;
        end;
        // No.52
        // 0x82d2 (Windows-31J)
        // 0x3074 (UTF-16BE)
        if argCheck = 'ぴ' then begin
            result := true;
            exit;
        end;
        // No.53
        // 0x82d3 (Windows-31J)
        // 0x3075 (UTF-16BE)
        if argCheck = 'ふ' then begin
            result := true;
            exit;
        end;
        // No.54
        // 0x82d4 (Windows-31J)
        // 0x3076 (UTF-16BE)
        if argCheck = 'ぶ' then begin
            result := true;
            exit;
        end;
        // No.55
        // 0x82d5 (Windows-31J)
        // 0x3077 (UTF-16BE)
        if argCheck = 'ぷ' then begin
            result := true;
            exit;
        end;
        // No.56
        // 0x82d6 (Windows-31J)
        // 0x3078 (UTF-16BE)
        if argCheck = 'へ' then begin
            result := true;
            exit;
        end;
        // No.57
        // 0x82d7 (Windows-31J)
        // 0x3079 (UTF-16BE)
        if argCheck = 'べ' then begin
            result := true;
            exit;
        end;
        // No.58
        // 0x82d8 (Windows-31J)
        // 0x307a (UTF-16BE)
        if argCheck = 'ぺ' then begin
            result := true;
            exit;
        end;
        // No.59
        // 0x82d9 (Windows-31J)
        // 0x307b (UTF-16BE)
        if argCheck = 'ほ' then begin
            result := true;
            exit;
        end;
        // No.60
        // 0x82da (Windows-31J)
        // 0x307c (UTF-16BE)
        if argCheck = 'ぼ' then begin
            result := true;
            exit;
        end;
        // No.61
        // 0x82db (Windows-31J)
        // 0x307d (UTF-16BE)
        if argCheck = 'ぽ' then begin
            result := true;
            exit;
        end;
        // No.62
        // 0x82dc (Windows-31J)
        // 0x307e (UTF-16BE)
        if argCheck = 'ま' then begin
            result := true;
            exit;
        end;
        // No.63
        // 0x82dd (Windows-31J)
        // 0x307f (UTF-16BE)
        if argCheck = 'み' then begin
            result := true;
            exit;
        end;
        // No.64
        // 0x82de (Windows-31J)
        // 0x3080 (UTF-16BE)
        if argCheck = 'む' then begin
            result := true;
            exit;
        end;
        // No.65
        // 0x82df (Windows-31J)
        // 0x3081 (UTF-16BE)
        if argCheck = 'め' then begin
            result := true;
            exit;
        end;
        // No.66
        // 0x82e0 (Windows-31J)
        // 0x3082 (UTF-16BE)
        if argCheck = 'も' then begin
            result := true;
            exit;
        end;
        // No.67
        // 0x82e1 (Windows-31J)
        // 0x3083 (UTF-16BE)
        if argCheck = 'ゃ' then begin
            result := true;
            exit;
        end;
        // No.68
        // 0x82e2 (Windows-31J)
        // 0x3084 (UTF-16BE)
        if argCheck = 'や' then begin
            result := true;
            exit;
        end;
        // No.69
        // 0x82e3 (Windows-31J)
        // 0x3085 (UTF-16BE)
        if argCheck = 'ゅ' then begin
            result := true;
            exit;
        end;
        // No.70
        // 0x82e4 (Windows-31J)
        // 0x3086 (UTF-16BE)
        if argCheck = 'ゆ' then begin
            result := true;
            exit;
        end;
        // No.71
        // 0x82e5 (Windows-31J)
        // 0x3087 (UTF-16BE)
        if argCheck = 'ょ' then begin
            result := true;
            exit;
        end;
        // No.72
        // 0x82e6 (Windows-31J)
        // 0x3088 (UTF-16BE)
        if argCheck = 'よ' then begin
            result := true;
            exit;
        end;
        // No.73
        // 0x82e7 (Windows-31J)
        // 0x3089 (UTF-16BE)
        if argCheck = 'ら' then begin
            result := true;
            exit;
        end;
        // No.74
        // 0x82e8 (Windows-31J)
        // 0x308a (UTF-16BE)
        if argCheck = 'り' then begin
            result := true;
            exit;
        end;
        // No.75
        // 0x82e9 (Windows-31J)
        // 0x308b (UTF-16BE)
        if argCheck = 'る' then begin
            result := true;
            exit;
        end;
        // No.76
        // 0x82ea (Windows-31J)
        // 0x308c (UTF-16BE)
        if argCheck = 'れ' then begin
            result := true;
            exit;
        end;
        // No.77
        // 0x82eb (Windows-31J)
        // 0x308d (UTF-16BE)
        if argCheck = 'ろ' then begin
            result := true;
            exit;
        end;
        // No.78
        // 0x82ec (Windows-31J)
        // 0x308e (UTF-16BE)
        if argCheck = 'ゎ' then begin
            result := true;
            exit;
        end;
        // No.79
        // 0x82ed (Windows-31J)
        // 0x308f (UTF-16BE)
        if argCheck = 'わ' then begin
            result := true;
            exit;
        end;
        // No.80
        // 0x82ee (Windows-31J)
        // 0x3090 (UTF-16BE)
        if argCheck = 'ゐ' then begin
            result := true;
            exit;
        end;
        // No.81
        // 0x82ef (Windows-31J)
        // 0x3091 (UTF-16BE)
        if argCheck = 'ゑ' then begin
            result := true;
            exit;
        end;
        // No.82
        // 0x82f0 (Windows-31J)
        // 0x3092 (UTF-16BE)
        if argCheck = 'を' then begin
            result := true;
            exit;
        end;
        // No.83
        // 説明:82f1: ひらがな。ん。
        // 0x82f1 (Windows-31J)
        // 0x3093 (UTF-16BE)
        if argCheck = 'ん' then begin
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


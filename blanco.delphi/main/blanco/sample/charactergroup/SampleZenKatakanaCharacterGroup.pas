// このソースコードは blanco Frameworkによって自動生成されています。
unit SampleZenKatakanaCharacterGroup;

interface
type
    // 全角カタカナのサンプル。blancoCharacterGroupの実装には影響しません。
    TSampleZenKatakanaCharacterGroup = class(TObject)

        function match(argCheck: WideChar): Boolean;

        function matchAll(argCheck: String): Boolean;

        function matchAny(argCheck: String): Boolean;
    end;
implementation

    function TSampleZenKatakanaCharacterGroup.match(argCheck: WideChar): Boolean;
    begin
        // No.1
        // 説明:8340: カタカナ。ァ。
        // 0x8340 (Windows-31J)
        // 0x30a1 (UTF-16BE)
        if argCheck = 'ァ' then begin
            result := true;
            exit;
        end;
        // No.2
        // 説明:8341: カタカナ。ア。
        // 0x8341 (Windows-31J)
        // 0x30a2 (UTF-16BE)
        if argCheck = 'ア' then begin
            result := true;
            exit;
        end;
        // No.3
        // 説明:8342: カタカナ。ィ。
        // 0x8342 (Windows-31J)
        // 0x30a3 (UTF-16BE)
        if argCheck = 'ィ' then begin
            result := true;
            exit;
        end;
        // No.4
        // 0x8343 (Windows-31J)
        // 0x30a4 (UTF-16BE)
        if argCheck = 'イ' then begin
            result := true;
            exit;
        end;
        // No.5
        // 0x8344 (Windows-31J)
        // 0x30a5 (UTF-16BE)
        if argCheck = 'ゥ' then begin
            result := true;
            exit;
        end;
        // No.6
        // 0x8345 (Windows-31J)
        // 0x30a6 (UTF-16BE)
        if argCheck = 'ウ' then begin
            result := true;
            exit;
        end;
        // No.7
        // 0x8346 (Windows-31J)
        // 0x30a7 (UTF-16BE)
        if argCheck = 'ェ' then begin
            result := true;
            exit;
        end;
        // No.8
        // 0x8347 (Windows-31J)
        // 0x30a8 (UTF-16BE)
        if argCheck = 'エ' then begin
            result := true;
            exit;
        end;
        // No.9
        // 説明:8348: カタカナ。ォ。
        // 0x8348 (Windows-31J)
        // 0x30a9 (UTF-16BE)
        if argCheck = 'ォ' then begin
            result := true;
            exit;
        end;
        // No.10
        // 説明:8349: カタカナ。オ。
        // 0x8349 (Windows-31J)
        // 0x30aa (UTF-16BE)
        if argCheck = 'オ' then begin
            result := true;
            exit;
        end;
        // No.11
        // 説明:834a: カタカナ。カ。
        // 0x834a (Windows-31J)
        // 0x30ab (UTF-16BE)
        if argCheck = 'カ' then begin
            result := true;
            exit;
        end;
        // No.12
        // 説明:834b: カタカナ。ガ。
        // 0x834b (Windows-31J)
        // 0x30ac (UTF-16BE)
        if argCheck = 'ガ' then begin
            result := true;
            exit;
        end;
        // No.13
        // 0x834c (Windows-31J)
        // 0x30ad (UTF-16BE)
        if argCheck = 'キ' then begin
            result := true;
            exit;
        end;
        // No.14
        // 説明:834d: カタカナ。ギ。
        // 0x834d (Windows-31J)
        // 0x30ae (UTF-16BE)
        if argCheck = 'ギ' then begin
            result := true;
            exit;
        end;
        // No.15
        // 0x834e (Windows-31J)
        // 0x30af (UTF-16BE)
        if argCheck = 'ク' then begin
            result := true;
            exit;
        end;
        // No.16
        // 説明:834f: カタカナ。グ。
        // 0x834f (Windows-31J)
        // 0x30b0 (UTF-16BE)
        if argCheck = 'グ' then begin
            result := true;
            exit;
        end;
        // No.17
        // 0x8350 (Windows-31J)
        // 0x30b1 (UTF-16BE)
        if argCheck = 'ケ' then begin
            result := true;
            exit;
        end;
        // No.18
        // 0x8351 (Windows-31J)
        // 0x30b2 (UTF-16BE)
        if argCheck = 'ゲ' then begin
            result := true;
            exit;
        end;
        // No.19
        // 0x8352 (Windows-31J)
        // 0x30b3 (UTF-16BE)
        if argCheck = 'コ' then begin
            result := true;
            exit;
        end;
        // No.20
        // 0x8353 (Windows-31J)
        // 0x30b4 (UTF-16BE)
        if argCheck = 'ゴ' then begin
            result := true;
            exit;
        end;
        // No.21
        // 0x8354 (Windows-31J)
        // 0x30b5 (UTF-16BE)
        if argCheck = 'サ' then begin
            result := true;
            exit;
        end;
        // No.22
        // 0x8355 (Windows-31J)
        // 0x30b6 (UTF-16BE)
        if argCheck = 'ザ' then begin
            result := true;
            exit;
        end;
        // No.23
        // 0x8356 (Windows-31J)
        // 0x30b7 (UTF-16BE)
        if argCheck = 'シ' then begin
            result := true;
            exit;
        end;
        // No.24
        // 0x8357 (Windows-31J)
        // 0x30b8 (UTF-16BE)
        if argCheck = 'ジ' then begin
            result := true;
            exit;
        end;
        // No.25
        // 0x8358 (Windows-31J)
        // 0x30b9 (UTF-16BE)
        if argCheck = 'ス' then begin
            result := true;
            exit;
        end;
        // No.26
        // 0x8359 (Windows-31J)
        // 0x30ba (UTF-16BE)
        if argCheck = 'ズ' then begin
            result := true;
            exit;
        end;
        // No.27
        // 0x835a (Windows-31J)
        // 0x30bb (UTF-16BE)
        if argCheck = 'セ' then begin
            result := true;
            exit;
        end;
        // No.28
        // 0x835b (Windows-31J)
        // 0x30bc (UTF-16BE)
        if argCheck = 'ゼ' then begin
            result := true;
            exit;
        end;
        // No.29
        // 0x835c (Windows-31J)
        // 0x30bd (UTF-16BE)
        if argCheck = 'ソ' then begin
            result := true;
            exit;
        end;
        // No.30
        // 説明:835d: カタカナ。ゾ。
        // 0x835d (Windows-31J)
        // 0x30be (UTF-16BE)
        if argCheck = 'ゾ' then begin
            result := true;
            exit;
        end;
        // No.31
        // 0x835e (Windows-31J)
        // 0x30bf (UTF-16BE)
        if argCheck = 'タ' then begin
            result := true;
            exit;
        end;
        // No.32
        // 説明:835f: カタカナ。ダ。
        // 0x835f (Windows-31J)
        // 0x30c0 (UTF-16BE)
        if argCheck = 'ダ' then begin
            result := true;
            exit;
        end;
        // No.33
        // 0x8360 (Windows-31J)
        // 0x30c1 (UTF-16BE)
        if argCheck = 'チ' then begin
            result := true;
            exit;
        end;
        // No.34
        // 0x8361 (Windows-31J)
        // 0x30c2 (UTF-16BE)
        if argCheck = 'ヂ' then begin
            result := true;
            exit;
        end;
        // No.35
        // 説明:8362: カタカナ。ッ。
        // 0x8362 (Windows-31J)
        // 0x30c3 (UTF-16BE)
        if argCheck = 'ッ' then begin
            result := true;
            exit;
        end;
        // No.36
        // 0x8363 (Windows-31J)
        // 0x30c4 (UTF-16BE)
        if argCheck = 'ツ' then begin
            result := true;
            exit;
        end;
        // No.37
        // 0x8364 (Windows-31J)
        // 0x30c5 (UTF-16BE)
        if argCheck = 'ヅ' then begin
            result := true;
            exit;
        end;
        // No.38
        // 0x8365 (Windows-31J)
        // 0x30c6 (UTF-16BE)
        if argCheck = 'テ' then begin
            result := true;
            exit;
        end;
        // No.39
        // 0x8366 (Windows-31J)
        // 0x30c7 (UTF-16BE)
        if argCheck = 'デ' then begin
            result := true;
            exit;
        end;
        // No.40
        // 0x8367 (Windows-31J)
        // 0x30c8 (UTF-16BE)
        if argCheck = 'ト' then begin
            result := true;
            exit;
        end;
        // No.41
        // 0x8368 (Windows-31J)
        // 0x30c9 (UTF-16BE)
        if argCheck = 'ド' then begin
            result := true;
            exit;
        end;
        // No.42
        // 0x8369 (Windows-31J)
        // 0x30ca (UTF-16BE)
        if argCheck = 'ナ' then begin
            result := true;
            exit;
        end;
        // No.43
        // 0x836a (Windows-31J)
        // 0x30cb (UTF-16BE)
        if argCheck = 'ニ' then begin
            result := true;
            exit;
        end;
        // No.44
        // 0x836b (Windows-31J)
        // 0x30cc (UTF-16BE)
        if argCheck = 'ヌ' then begin
            result := true;
            exit;
        end;
        // No.45
        // 0x836c (Windows-31J)
        // 0x30cd (UTF-16BE)
        if argCheck = 'ネ' then begin
            result := true;
            exit;
        end;
        // No.46
        // 0x836d (Windows-31J)
        // 0x30ce (UTF-16BE)
        if argCheck = 'ノ' then begin
            result := true;
            exit;
        end;
        // No.47
        // 0x836e (Windows-31J)
        // 0x30cf (UTF-16BE)
        if argCheck = 'ハ' then begin
            result := true;
            exit;
        end;
        // No.48
        // 説明:836f: カタカナ。バ。
        // 0x836f (Windows-31J)
        // 0x30d0 (UTF-16BE)
        if argCheck = 'バ' then begin
            result := true;
            exit;
        end;
        // No.49
        // 説明:8370: カタカナ。パ。
        // 0x8370 (Windows-31J)
        // 0x30d1 (UTF-16BE)
        if argCheck = 'パ' then begin
            result := true;
            exit;
        end;
        // No.50
        // 0x8371 (Windows-31J)
        // 0x30d2 (UTF-16BE)
        if argCheck = 'ヒ' then begin
            result := true;
            exit;
        end;
        // No.51
        // 0x8372 (Windows-31J)
        // 0x30d3 (UTF-16BE)
        if argCheck = 'ビ' then begin
            result := true;
            exit;
        end;
        // No.52
        // 0x8373 (Windows-31J)
        // 0x30d4 (UTF-16BE)
        if argCheck = 'ピ' then begin
            result := true;
            exit;
        end;
        // No.53
        // 0x8374 (Windows-31J)
        // 0x30d5 (UTF-16BE)
        if argCheck = 'フ' then begin
            result := true;
            exit;
        end;
        // No.54
        // 0x8375 (Windows-31J)
        // 0x30d6 (UTF-16BE)
        if argCheck = 'ブ' then begin
            result := true;
            exit;
        end;
        // No.55
        // 0x8376 (Windows-31J)
        // 0x30d7 (UTF-16BE)
        if argCheck = 'プ' then begin
            result := true;
            exit;
        end;
        // No.56
        // 0x8377 (Windows-31J)
        // 0x30d8 (UTF-16BE)
        if argCheck = 'ヘ' then begin
            result := true;
            exit;
        end;
        // No.57
        // 0x8378 (Windows-31J)
        // 0x30d9 (UTF-16BE)
        if argCheck = 'ベ' then begin
            result := true;
            exit;
        end;
        // No.58
        // 0x8379 (Windows-31J)
        // 0x30da (UTF-16BE)
        if argCheck = 'ペ' then begin
            result := true;
            exit;
        end;
        // No.59
        // 0x837a (Windows-31J)
        // 0x30db (UTF-16BE)
        if argCheck = 'ホ' then begin
            result := true;
            exit;
        end;
        // No.60
        // 説明:837b: カタカナ。ボ。
        // 0x837b (Windows-31J)
        // 0x30dc (UTF-16BE)
        if argCheck = 'ボ' then begin
            result := true;
            exit;
        end;
        // No.61
        // 説明:837c: カタカナ。ポ。
        // 0x837c (Windows-31J)
        // 0x30dd (UTF-16BE)
        if argCheck = 'ポ' then begin
            result := true;
            exit;
        end;
        // No.62
        // 0x837d (Windows-31J)
        // 0x30de (UTF-16BE)
        if argCheck = 'マ' then begin
            result := true;
            exit;
        end;
        // No.63
        // 説明:837e: カタカナ。ミ。
        // 0x837e (Windows-31J)
        // 0x30df (UTF-16BE)
        if argCheck = 'ミ' then begin
            result := true;
            exit;
        end;
        // No.64
        // 説明:8380: カタカナ。ム。837fはスキップされている模様。
        // 0x8380 (Windows-31J)
        // 0x30e0 (UTF-16BE)
        if argCheck = 'ム' then begin
            result := true;
            exit;
        end;
        // No.65
        // 0x8381 (Windows-31J)
        // 0x30e1 (UTF-16BE)
        if argCheck = 'メ' then begin
            result := true;
            exit;
        end;
        // No.66
        // 0x8382 (Windows-31J)
        // 0x30e2 (UTF-16BE)
        if argCheck = 'モ' then begin
            result := true;
            exit;
        end;
        // No.67
        // 説明:8383: カタカナ。ャ。
        // 0x8383 (Windows-31J)
        // 0x30e3 (UTF-16BE)
        if argCheck = 'ャ' then begin
            result := true;
            exit;
        end;
        // No.68
        // 説明:8384: カタカナ。ヤ。
        // 0x8384 (Windows-31J)
        // 0x30e4 (UTF-16BE)
        if argCheck = 'ヤ' then begin
            result := true;
            exit;
        end;
        // No.69
        // 0x8385 (Windows-31J)
        // 0x30e5 (UTF-16BE)
        if argCheck = 'ュ' then begin
            result := true;
            exit;
        end;
        // No.70
        // 0x8386 (Windows-31J)
        // 0x30e6 (UTF-16BE)
        if argCheck = 'ユ' then begin
            result := true;
            exit;
        end;
        // No.71
        // 説明:8387: カタカナ。ョ。
        // 0x8387 (Windows-31J)
        // 0x30e7 (UTF-16BE)
        if argCheck = 'ョ' then begin
            result := true;
            exit;
        end;
        // No.72
        // 0x8388 (Windows-31J)
        // 0x30e8 (UTF-16BE)
        if argCheck = 'ヨ' then begin
            result := true;
            exit;
        end;
        // No.73
        // 説明:8389: カタカナ。ラ。
        // 0x8389 (Windows-31J)
        // 0x30e9 (UTF-16BE)
        if argCheck = 'ラ' then begin
            result := true;
            exit;
        end;
        // No.74
        // 0x838a (Windows-31J)
        // 0x30ea (UTF-16BE)
        if argCheck = 'リ' then begin
            result := true;
            exit;
        end;
        // No.75
        // 0x838b (Windows-31J)
        // 0x30eb (UTF-16BE)
        if argCheck = 'ル' then begin
            result := true;
            exit;
        end;
        // No.76
        // 0x838c (Windows-31J)
        // 0x30ec (UTF-16BE)
        if argCheck = 'レ' then begin
            result := true;
            exit;
        end;
        // No.77
        // 0x838d (Windows-31J)
        // 0x30ed (UTF-16BE)
        if argCheck = 'ロ' then begin
            result := true;
            exit;
        end;
        // No.78
        // 説明:カタカナ。小さいヮ。
        // 0x838e (Windows-31J)
        // 0x30ee (UTF-16BE)
        if argCheck = 'ヮ' then begin
            result := true;
            exit;
        end;
        // No.79
        // 説明:838f: カタカナ。ワ。
        // 0x838f (Windows-31J)
        // 0x30ef (UTF-16BE)
        if argCheck = 'ワ' then begin
            result := true;
            exit;
        end;
        // No.80
        // 0x8390 (Windows-31J)
        // 0x30f0 (UTF-16BE)
        if argCheck = 'ヰ' then begin
            result := true;
            exit;
        end;
        // No.81
        // 0x8391 (Windows-31J)
        // 0x30f1 (UTF-16BE)
        if argCheck = 'ヱ' then begin
            result := true;
            exit;
        end;
        // No.82
        // 説明:8392: カタカナ。ヲ。
        // 0x8392 (Windows-31J)
        // 0x30f2 (UTF-16BE)
        if argCheck = 'ヲ' then begin
            result := true;
            exit;
        end;
        // No.83
        // 説明:8393: カタカナ。ン。
        // 0x8393 (Windows-31J)
        // 0x30f3 (UTF-16BE)
        if argCheck = 'ン' then begin
            result := true;
            exit;
        end;
        // No.84
        // 説明:8394: カタカナ。ヴ。
        // 0x8394 (Windows-31J)
        // 0x30f4 (UTF-16BE)
        if argCheck = 'ヴ' then begin
            result := true;
            exit;
        end;
        // No.85
        // 0x8395 (Windows-31J)
        // 0x30f5 (UTF-16BE)
        if argCheck = 'ヵ' then begin
            result := true;
            exit;
        end;
        // No.86
        // 説明:8396: カタカナ。ヶ。
        // 0x8396 (Windows-31J)
        // 0x30f6 (UTF-16BE)
        if argCheck = 'ヶ' then begin
            result := true;
            exit;
        end;
        result := false;
        exit;
    end;

    function TSampleZenKatakanaCharacterGroup.matchAll(argCheck: String): Boolean;
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

    function TSampleZenKatakanaCharacterGroup.matchAny(argCheck: String): Boolean;
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


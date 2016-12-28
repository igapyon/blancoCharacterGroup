// ���̃\�[�X�R�[�h�� blanco Framework�ɂ���Ď�����������Ă��܂��B
unit SampleZenKatakanaCharacterGroup;

interface
type
    // �S�p�J�^�J�i�̃T���v���BblancoCharacterGroup�̎����ɂ͉e�����܂���B
    TSampleZenKatakanaCharacterGroup = class(TObject)

        function match(argCheck: WideChar): Boolean;

        function matchAll(argCheck: String): Boolean;

        function matchAny(argCheck: String): Boolean;
    end;
implementation

    function TSampleZenKatakanaCharacterGroup.match(argCheck: WideChar): Boolean;
    begin
        // No.1
        // ����:8340: �J�^�J�i�B�@�B
        // 0x8340 (Windows-31J)
        // 0x30a1 (UTF-16BE)
        if argCheck = '�@' then begin
            result := true;
            exit;
        end;
        // No.2
        // ����:8341: �J�^�J�i�B�A�B
        // 0x8341 (Windows-31J)
        // 0x30a2 (UTF-16BE)
        if argCheck = '�A' then begin
            result := true;
            exit;
        end;
        // No.3
        // ����:8342: �J�^�J�i�B�B�B
        // 0x8342 (Windows-31J)
        // 0x30a3 (UTF-16BE)
        if argCheck = '�B' then begin
            result := true;
            exit;
        end;
        // No.4
        // 0x8343 (Windows-31J)
        // 0x30a4 (UTF-16BE)
        if argCheck = '�C' then begin
            result := true;
            exit;
        end;
        // No.5
        // 0x8344 (Windows-31J)
        // 0x30a5 (UTF-16BE)
        if argCheck = '�D' then begin
            result := true;
            exit;
        end;
        // No.6
        // 0x8345 (Windows-31J)
        // 0x30a6 (UTF-16BE)
        if argCheck = '�E' then begin
            result := true;
            exit;
        end;
        // No.7
        // 0x8346 (Windows-31J)
        // 0x30a7 (UTF-16BE)
        if argCheck = '�F' then begin
            result := true;
            exit;
        end;
        // No.8
        // 0x8347 (Windows-31J)
        // 0x30a8 (UTF-16BE)
        if argCheck = '�G' then begin
            result := true;
            exit;
        end;
        // No.9
        // ����:8348: �J�^�J�i�B�H�B
        // 0x8348 (Windows-31J)
        // 0x30a9 (UTF-16BE)
        if argCheck = '�H' then begin
            result := true;
            exit;
        end;
        // No.10
        // ����:8349: �J�^�J�i�B�I�B
        // 0x8349 (Windows-31J)
        // 0x30aa (UTF-16BE)
        if argCheck = '�I' then begin
            result := true;
            exit;
        end;
        // No.11
        // ����:834a: �J�^�J�i�B�J�B
        // 0x834a (Windows-31J)
        // 0x30ab (UTF-16BE)
        if argCheck = '�J' then begin
            result := true;
            exit;
        end;
        // No.12
        // ����:834b: �J�^�J�i�B�K�B
        // 0x834b (Windows-31J)
        // 0x30ac (UTF-16BE)
        if argCheck = '�K' then begin
            result := true;
            exit;
        end;
        // No.13
        // 0x834c (Windows-31J)
        // 0x30ad (UTF-16BE)
        if argCheck = '�L' then begin
            result := true;
            exit;
        end;
        // No.14
        // ����:834d: �J�^�J�i�B�M�B
        // 0x834d (Windows-31J)
        // 0x30ae (UTF-16BE)
        if argCheck = '�M' then begin
            result := true;
            exit;
        end;
        // No.15
        // 0x834e (Windows-31J)
        // 0x30af (UTF-16BE)
        if argCheck = '�N' then begin
            result := true;
            exit;
        end;
        // No.16
        // ����:834f: �J�^�J�i�B�O�B
        // 0x834f (Windows-31J)
        // 0x30b0 (UTF-16BE)
        if argCheck = '�O' then begin
            result := true;
            exit;
        end;
        // No.17
        // 0x8350 (Windows-31J)
        // 0x30b1 (UTF-16BE)
        if argCheck = '�P' then begin
            result := true;
            exit;
        end;
        // No.18
        // 0x8351 (Windows-31J)
        // 0x30b2 (UTF-16BE)
        if argCheck = '�Q' then begin
            result := true;
            exit;
        end;
        // No.19
        // 0x8352 (Windows-31J)
        // 0x30b3 (UTF-16BE)
        if argCheck = '�R' then begin
            result := true;
            exit;
        end;
        // No.20
        // 0x8353 (Windows-31J)
        // 0x30b4 (UTF-16BE)
        if argCheck = '�S' then begin
            result := true;
            exit;
        end;
        // No.21
        // 0x8354 (Windows-31J)
        // 0x30b5 (UTF-16BE)
        if argCheck = '�T' then begin
            result := true;
            exit;
        end;
        // No.22
        // 0x8355 (Windows-31J)
        // 0x30b6 (UTF-16BE)
        if argCheck = '�U' then begin
            result := true;
            exit;
        end;
        // No.23
        // 0x8356 (Windows-31J)
        // 0x30b7 (UTF-16BE)
        if argCheck = '�V' then begin
            result := true;
            exit;
        end;
        // No.24
        // 0x8357 (Windows-31J)
        // 0x30b8 (UTF-16BE)
        if argCheck = '�W' then begin
            result := true;
            exit;
        end;
        // No.25
        // 0x8358 (Windows-31J)
        // 0x30b9 (UTF-16BE)
        if argCheck = '�X' then begin
            result := true;
            exit;
        end;
        // No.26
        // 0x8359 (Windows-31J)
        // 0x30ba (UTF-16BE)
        if argCheck = '�Y' then begin
            result := true;
            exit;
        end;
        // No.27
        // 0x835a (Windows-31J)
        // 0x30bb (UTF-16BE)
        if argCheck = '�Z' then begin
            result := true;
            exit;
        end;
        // No.28
        // 0x835b (Windows-31J)
        // 0x30bc (UTF-16BE)
        if argCheck = '�[' then begin
            result := true;
            exit;
        end;
        // No.29
        // 0x835c (Windows-31J)
        // 0x30bd (UTF-16BE)
        if argCheck = '�\' then begin
            result := true;
            exit;
        end;
        // No.30
        // ����:835d: �J�^�J�i�B�]�B
        // 0x835d (Windows-31J)
        // 0x30be (UTF-16BE)
        if argCheck = '�]' then begin
            result := true;
            exit;
        end;
        // No.31
        // 0x835e (Windows-31J)
        // 0x30bf (UTF-16BE)
        if argCheck = '�^' then begin
            result := true;
            exit;
        end;
        // No.32
        // ����:835f: �J�^�J�i�B�_�B
        // 0x835f (Windows-31J)
        // 0x30c0 (UTF-16BE)
        if argCheck = '�_' then begin
            result := true;
            exit;
        end;
        // No.33
        // 0x8360 (Windows-31J)
        // 0x30c1 (UTF-16BE)
        if argCheck = '�`' then begin
            result := true;
            exit;
        end;
        // No.34
        // 0x8361 (Windows-31J)
        // 0x30c2 (UTF-16BE)
        if argCheck = '�a' then begin
            result := true;
            exit;
        end;
        // No.35
        // ����:8362: �J�^�J�i�B�b�B
        // 0x8362 (Windows-31J)
        // 0x30c3 (UTF-16BE)
        if argCheck = '�b' then begin
            result := true;
            exit;
        end;
        // No.36
        // 0x8363 (Windows-31J)
        // 0x30c4 (UTF-16BE)
        if argCheck = '�c' then begin
            result := true;
            exit;
        end;
        // No.37
        // 0x8364 (Windows-31J)
        // 0x30c5 (UTF-16BE)
        if argCheck = '�d' then begin
            result := true;
            exit;
        end;
        // No.38
        // 0x8365 (Windows-31J)
        // 0x30c6 (UTF-16BE)
        if argCheck = '�e' then begin
            result := true;
            exit;
        end;
        // No.39
        // 0x8366 (Windows-31J)
        // 0x30c7 (UTF-16BE)
        if argCheck = '�f' then begin
            result := true;
            exit;
        end;
        // No.40
        // 0x8367 (Windows-31J)
        // 0x30c8 (UTF-16BE)
        if argCheck = '�g' then begin
            result := true;
            exit;
        end;
        // No.41
        // 0x8368 (Windows-31J)
        // 0x30c9 (UTF-16BE)
        if argCheck = '�h' then begin
            result := true;
            exit;
        end;
        // No.42
        // 0x8369 (Windows-31J)
        // 0x30ca (UTF-16BE)
        if argCheck = '�i' then begin
            result := true;
            exit;
        end;
        // No.43
        // 0x836a (Windows-31J)
        // 0x30cb (UTF-16BE)
        if argCheck = '�j' then begin
            result := true;
            exit;
        end;
        // No.44
        // 0x836b (Windows-31J)
        // 0x30cc (UTF-16BE)
        if argCheck = '�k' then begin
            result := true;
            exit;
        end;
        // No.45
        // 0x836c (Windows-31J)
        // 0x30cd (UTF-16BE)
        if argCheck = '�l' then begin
            result := true;
            exit;
        end;
        // No.46
        // 0x836d (Windows-31J)
        // 0x30ce (UTF-16BE)
        if argCheck = '�m' then begin
            result := true;
            exit;
        end;
        // No.47
        // 0x836e (Windows-31J)
        // 0x30cf (UTF-16BE)
        if argCheck = '�n' then begin
            result := true;
            exit;
        end;
        // No.48
        // ����:836f: �J�^�J�i�B�o�B
        // 0x836f (Windows-31J)
        // 0x30d0 (UTF-16BE)
        if argCheck = '�o' then begin
            result := true;
            exit;
        end;
        // No.49
        // ����:8370: �J�^�J�i�B�p�B
        // 0x8370 (Windows-31J)
        // 0x30d1 (UTF-16BE)
        if argCheck = '�p' then begin
            result := true;
            exit;
        end;
        // No.50
        // 0x8371 (Windows-31J)
        // 0x30d2 (UTF-16BE)
        if argCheck = '�q' then begin
            result := true;
            exit;
        end;
        // No.51
        // 0x8372 (Windows-31J)
        // 0x30d3 (UTF-16BE)
        if argCheck = '�r' then begin
            result := true;
            exit;
        end;
        // No.52
        // 0x8373 (Windows-31J)
        // 0x30d4 (UTF-16BE)
        if argCheck = '�s' then begin
            result := true;
            exit;
        end;
        // No.53
        // 0x8374 (Windows-31J)
        // 0x30d5 (UTF-16BE)
        if argCheck = '�t' then begin
            result := true;
            exit;
        end;
        // No.54
        // 0x8375 (Windows-31J)
        // 0x30d6 (UTF-16BE)
        if argCheck = '�u' then begin
            result := true;
            exit;
        end;
        // No.55
        // 0x8376 (Windows-31J)
        // 0x30d7 (UTF-16BE)
        if argCheck = '�v' then begin
            result := true;
            exit;
        end;
        // No.56
        // 0x8377 (Windows-31J)
        // 0x30d8 (UTF-16BE)
        if argCheck = '�w' then begin
            result := true;
            exit;
        end;
        // No.57
        // 0x8378 (Windows-31J)
        // 0x30d9 (UTF-16BE)
        if argCheck = '�x' then begin
            result := true;
            exit;
        end;
        // No.58
        // 0x8379 (Windows-31J)
        // 0x30da (UTF-16BE)
        if argCheck = '�y' then begin
            result := true;
            exit;
        end;
        // No.59
        // 0x837a (Windows-31J)
        // 0x30db (UTF-16BE)
        if argCheck = '�z' then begin
            result := true;
            exit;
        end;
        // No.60
        // ����:837b: �J�^�J�i�B�{�B
        // 0x837b (Windows-31J)
        // 0x30dc (UTF-16BE)
        if argCheck = '�{' then begin
            result := true;
            exit;
        end;
        // No.61
        // ����:837c: �J�^�J�i�B�|�B
        // 0x837c (Windows-31J)
        // 0x30dd (UTF-16BE)
        if argCheck = '�|' then begin
            result := true;
            exit;
        end;
        // No.62
        // 0x837d (Windows-31J)
        // 0x30de (UTF-16BE)
        if argCheck = '�}' then begin
            result := true;
            exit;
        end;
        // No.63
        // ����:837e: �J�^�J�i�B�~�B
        // 0x837e (Windows-31J)
        // 0x30df (UTF-16BE)
        if argCheck = '�~' then begin
            result := true;
            exit;
        end;
        // No.64
        // ����:8380: �J�^�J�i�B���B837f�̓X�L�b�v����Ă���͗l�B
        // 0x8380 (Windows-31J)
        // 0x30e0 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.65
        // 0x8381 (Windows-31J)
        // 0x30e1 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.66
        // 0x8382 (Windows-31J)
        // 0x30e2 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.67
        // ����:8383: �J�^�J�i�B���B
        // 0x8383 (Windows-31J)
        // 0x30e3 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.68
        // ����:8384: �J�^�J�i�B���B
        // 0x8384 (Windows-31J)
        // 0x30e4 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.69
        // 0x8385 (Windows-31J)
        // 0x30e5 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.70
        // 0x8386 (Windows-31J)
        // 0x30e6 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.71
        // ����:8387: �J�^�J�i�B���B
        // 0x8387 (Windows-31J)
        // 0x30e7 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.72
        // 0x8388 (Windows-31J)
        // 0x30e8 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.73
        // ����:8389: �J�^�J�i�B���B
        // 0x8389 (Windows-31J)
        // 0x30e9 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.74
        // 0x838a (Windows-31J)
        // 0x30ea (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.75
        // 0x838b (Windows-31J)
        // 0x30eb (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.76
        // 0x838c (Windows-31J)
        // 0x30ec (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.77
        // 0x838d (Windows-31J)
        // 0x30ed (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.78
        // ����:�J�^�J�i�B���������B
        // 0x838e (Windows-31J)
        // 0x30ee (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.79
        // ����:838f: �J�^�J�i�B���B
        // 0x838f (Windows-31J)
        // 0x30ef (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.80
        // 0x8390 (Windows-31J)
        // 0x30f0 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.81
        // 0x8391 (Windows-31J)
        // 0x30f1 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.82
        // ����:8392: �J�^�J�i�B���B
        // 0x8392 (Windows-31J)
        // 0x30f2 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.83
        // ����:8393: �J�^�J�i�B���B
        // 0x8393 (Windows-31J)
        // 0x30f3 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.84
        // ����:8394: �J�^�J�i�B���B
        // 0x8394 (Windows-31J)
        // 0x30f4 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.85
        // 0x8395 (Windows-31J)
        // 0x30f5 (UTF-16BE)
        if argCheck = '��' then begin
            result := true;
            exit;
        end;
        // No.86
        // ����:8396: �J�^�J�i�B���B
        // 0x8396 (Windows-31J)
        // 0x30f6 (UTF-16BE)
        if argCheck = '��' then begin
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


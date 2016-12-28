// ���̃\�[�X�R�[�h�� blanco Framework�ɂ���Ď�����������Ă��܂��B
unit SampleCharacterGroup;

interface
type
    // �����O���[�v�̃T���v���B���̃N���X�͒P�ɃT���v���ł��B���ۂ̓���ɂ͗��p����܂���B
    TSampleCharacterGroup = class(TObject)

        function match(argCheck: WideChar): Boolean;

        function matchAll(argCheck: String): Boolean;

        function matchAny(argCheck: String): Boolean;
    end;
implementation

    function TSampleCharacterGroup.match(argCheck: WideChar): Boolean;
    begin
        // No.1
        // ����:0�̕���
        // 0x30 (Windows-31J)
        // 0x0030 (UTF-16BE)
        if argCheck = '0' then begin
            result := true;
            exit;
        end;
        // No.2
        // ����:1�̕���
        // 0x31 (Windows-31J)
        // 0x0031 (UTF-16BE)
        if argCheck = '1' then begin
            result := true;
            exit;
        end;
        // No.3
        // ����:2�̕���
        // 0x32 (Windows-31J)
        // 0x0032 (UTF-16BE)
        if argCheck = '2' then begin
            result := true;
            exit;
        end;
        // No.4
        // ����:3�̕���
        // 0x33 (Windows-31J)
        // 0x0033 (UTF-16BE)
        if argCheck = '3' then begin
            result := true;
            exit;
        end;
        // No.5
        // ����:4�̕���
        // 0x34 (Windows-31J)
        // 0x0034 (UTF-16BE)
        if argCheck = '4' then begin
            result := true;
            exit;
        end;
        // No.6
        // ����:5�̕���
        // 0x35 (Windows-31J)
        // 0x0035 (UTF-16BE)
        if argCheck = '5' then begin
            result := true;
            exit;
        end;
        // No.7
        // ����:6�̕���
        // 0x36 (Windows-31J)
        // 0x0036 (UTF-16BE)
        if argCheck = '6' then begin
            result := true;
            exit;
        end;
        // No.8
        // ����:7�̕���
        // 0x37 (Windows-31J)
        // 0x0037 (UTF-16BE)
        if argCheck = '7' then begin
            result := true;
            exit;
        end;
        // No.9
        // ����:8�̕���
        // 0x38 (Windows-31J)
        // 0x0038 (UTF-16BE)
        if argCheck = '8' then begin
            result := true;
            exit;
        end;
        // No.10
        // ����:9�̕���
        // 0x39 (Windows-31J)
        // 0x0039 (UTF-16BE)
        if argCheck = '9' then begin
            result := true;
            exit;
        end;
        // No.11
        // ����:�V���O���N�I�[�g���W�J����邱�Ƃ̊m�F�B
        // 0x27 (Windows-31J)
        // 0x0027 (UTF-16BE)
        if argCheck = '''' then begin
            result := true;
            exit;
        end;
        // No.12
        // ����:�_�u���N�I�[�g���W�J����邱�Ƃ̊m�F�B
        // 0x22 (Windows-31J)
        // 0x0022 (UTF-16BE)
        if argCheck = '"' then begin
            result := true;
            exit;
        end;
        // No.13
        // ����:�o�b�N�X���b�V�����W�J����邱�Ƃ̊m�F�B
        // 0x5c (Windows-31J)
        // 0x005c (UTF-16BE)
        if argCheck = '\' then begin
            result := true;
            exit;
        end;
        // No.14
        // ����:JExcelApi 2.6�̃I���W�i���łɂ����Đ���Ɂ~�Ƃ��ēW�J�ł��Ȃ������B
        // 0x817e (Windows-31J)
        // 0x00d7 (UTF-16BE)
        if argCheck = '�~' then begin
            result := true;
            exit;
        end;
        result := false;
        exit;
    end;

    function TSampleCharacterGroup.matchAll(argCheck: String): Boolean;
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

    function TSampleCharacterGroup.matchAny(argCheck: String): Boolean;
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


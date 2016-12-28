#
# ���̃\�[�X�R�[�h�� blanco Framework�ɂ���Ď�����������Ă��܂��B
#

#
# �����O���[�v�̃T���v���B���̃N���X�͒P�ɃT���v���ł��B���ۂ̓���ɂ͗��p����܂���B
#
class SampleCharacterGroup

    #
    # �����O���[�v�Ɋ܂܂�镶���ł��邩�ǂ����𔻒肵�܂��B
    #
    # param argCheck �`�F�b�N���s�����������B
    # return �����O���[�v�Ɋ܂܂�Ă����ture�B�O���[�v�Ɋ܂܂�Ȃ������ł����false�B
    #
    def match(argCheck)
        # No.1
        # ����:0�̕���
        # 0x30 (Windows-31J)
        # 0x0030 (UTF-16BE)
        if argCheck == '0'
            return true
        end
        # No.2
        # ����:1�̕���
        # 0x31 (Windows-31J)
        # 0x0031 (UTF-16BE)
        if argCheck == '1'
            return true
        end
        # No.3
        # ����:2�̕���
        # 0x32 (Windows-31J)
        # 0x0032 (UTF-16BE)
        if argCheck == '2'
            return true
        end
        # No.4
        # ����:3�̕���
        # 0x33 (Windows-31J)
        # 0x0033 (UTF-16BE)
        if argCheck == '3'
            return true
        end
        # No.5
        # ����:4�̕���
        # 0x34 (Windows-31J)
        # 0x0034 (UTF-16BE)
        if argCheck == '4'
            return true
        end
        # No.6
        # ����:5�̕���
        # 0x35 (Windows-31J)
        # 0x0035 (UTF-16BE)
        if argCheck == '5'
            return true
        end
        # No.7
        # ����:6�̕���
        # 0x36 (Windows-31J)
        # 0x0036 (UTF-16BE)
        if argCheck == '6'
            return true
        end
        # No.8
        # ����:7�̕���
        # 0x37 (Windows-31J)
        # 0x0037 (UTF-16BE)
        if argCheck == '7'
            return true
        end
        # No.9
        # ����:8�̕���
        # 0x38 (Windows-31J)
        # 0x0038 (UTF-16BE)
        if argCheck == '8'
            return true
        end
        # No.10
        # ����:9�̕���
        # 0x39 (Windows-31J)
        # 0x0039 (UTF-16BE)
        if argCheck == '9'
            return true
        end
        # No.11
        # ����:�V���O���N�I�[�g���W�J����邱�Ƃ̊m�F�B
        # 0x27 (Windows-31J)
        # 0x0027 (UTF-16BE)
        if argCheck == '\''
            return true
        end
        # No.12
        # ����:�_�u���N�I�[�g���W�J����邱�Ƃ̊m�F�B
        # 0x22 (Windows-31J)
        # 0x0022 (UTF-16BE)
        if argCheck == '"'
            return true
        end
        # No.13
        # ����:�o�b�N�X���b�V�����W�J����邱�Ƃ̊m�F�B
        # 0x5c (Windows-31J)
        # 0x005c (UTF-16BE)
        if argCheck == '\\'
            return true
        end
        # No.14
        # ����:JExcelApi 2.6�̃I���W�i���łɂ����Đ���Ɂ~�Ƃ��ēW�J�ł��Ȃ������B
        # 0x817e (Windows-31J)
        # 0x00d7 (UTF-16BE)
        if argCheck == '�~'
            return true
        end
        return false
    end

    #
    # �^����ꂽ�����񂪁A�S�ĕ����O���[�v�Ɋ܂܂�镶���ł��邩�ǂ����𔻒肵�܂��B
    #
    # param argCheck �`�F�b�N���s������������B
    # return �S�Ă̕����������O���[�v�Ɋ܂܂�Ă����ture�B�O���[�v�Ɋ܂܂�Ȃ��������܂܂�Ă����false�B
    #
    def matchAll(argCheck)
        if argCheck.nil?
            raise ArgumentError, "���\�b�h[matchAll]�̃p�����[�^[argCheck]��nil���^�����܂����B�������A���̃p�����[�^��nil��^���邱�Ƃ͂ł��܂���"
        end

        argArray = argCheck.scan(/./)
        argArray.each do |arg|
            if match(arg) == false
                return false
            end
        end
        return true
    end

    #
    # �^����ꂽ�����񂪁A�����O���[�v�Ɋ܂܂�镶�����ЂƂł��܂�ł��邩�ǂ����𔻒肵�܂��B
    #
    # param argCheck �`�F�b�N���s������������B
    # return �����O���[�v�Ɋ܂܂�Ă��镶�����ЂƂł��܂�ł����ture�B�O���[�v�Ɋ܂܂�镶�����ЂƂ��܂܂Ȃ��ꍇ��false�B
    #
    def matchAny(argCheck)
        if argCheck.nil?
            raise ArgumentError, "���\�b�h[matchAny]�̃p�����[�^[argCheck]��nil���^�����܂����B�������A���̃p�����[�^��nil��^���邱�Ƃ͂ł��܂���"
        end

        argArray = argCheck.scan(/./)
        argArray.each do |arg|
            if match(arg)
                return true
            end
        end
        return false
    end
end

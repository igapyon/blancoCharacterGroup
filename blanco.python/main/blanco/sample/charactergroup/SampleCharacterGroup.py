# -*- coding: cp932 -*-
"""���̃\�[�X�R�[�h�� blanco Framework�ɂ���Ď�����������Ă��܂��B
"""
class SampleCharacterGroup:
    """�����O���[�v�̃T���v���B���̃N���X�͒P�ɃT���v���ł��B���ۂ̓���ɂ͗��p����܂���B
    """

    def __init__(self, encoding='cp932'):
        """�N���X���������\�b�h

        self -- ���̃��\�b�h���܂ރN���X���g�B
        encoding='cp932' -- �G���R�[�f�B���O�B�f�t�H���g��'cp932'
        """
        self.encoding = encoding
    #end

    def match(self, argCheck):
        """�����O���[�v�Ɋ܂܂�镶���ł��邩�ǂ����𔻒肵�܂��B

        self -- ���̃��\�b�h���܂ރN���X���g�B
        argCheck -- �`�F�b�N���s�����������B
        return -- �����O���[�v�Ɋ܂܂�Ă����ture�B�O���[�v�Ɋ܂܂�Ȃ������ł����false�B
        """
        argCheckUnicode = unicode(argCheck, self.encoding)
        # No.1
        # ����:0�̕���
        # 0x30 (Windows-31J)
        # 0x0030 (UTF-16BE)
        if argCheckUnicode == u'0':
            return True
        #end
        # No.2
        # ����:1�̕���
        # 0x31 (Windows-31J)
        # 0x0031 (UTF-16BE)
        if argCheckUnicode == u'1':
            return True
        #end
        # No.3
        # ����:2�̕���
        # 0x32 (Windows-31J)
        # 0x0032 (UTF-16BE)
        if argCheckUnicode == u'2':
            return True
        #end
        # No.4
        # ����:3�̕���
        # 0x33 (Windows-31J)
        # 0x0033 (UTF-16BE)
        if argCheckUnicode == u'3':
            return True
        #end
        # No.5
        # ����:4�̕���
        # 0x34 (Windows-31J)
        # 0x0034 (UTF-16BE)
        if argCheckUnicode == u'4':
            return True
        #end
        # No.6
        # ����:5�̕���
        # 0x35 (Windows-31J)
        # 0x0035 (UTF-16BE)
        if argCheckUnicode == u'5':
            return True
        #end
        # No.7
        # ����:6�̕���
        # 0x36 (Windows-31J)
        # 0x0036 (UTF-16BE)
        if argCheckUnicode == u'6':
            return True
        #end
        # No.8
        # ����:7�̕���
        # 0x37 (Windows-31J)
        # 0x0037 (UTF-16BE)
        if argCheckUnicode == u'7':
            return True
        #end
        # No.9
        # ����:8�̕���
        # 0x38 (Windows-31J)
        # 0x0038 (UTF-16BE)
        if argCheckUnicode == u'8':
            return True
        #end
        # No.10
        # ����:9�̕���
        # 0x39 (Windows-31J)
        # 0x0039 (UTF-16BE)
        if argCheckUnicode == u'9':
            return True
        #end
        # No.11
        # ����:�V���O���N�I�[�g���W�J����邱�Ƃ̊m�F�B
        # 0x27 (Windows-31J)
        # 0x0027 (UTF-16BE)
        if argCheckUnicode == u'\'':
            return True
        #end
        # No.12
        # ����:�_�u���N�I�[�g���W�J����邱�Ƃ̊m�F�B
        # 0x22 (Windows-31J)
        # 0x0022 (UTF-16BE)
        if argCheckUnicode == u'"':
            return True
        #end
        # No.13
        # ����:�o�b�N�X���b�V�����W�J����邱�Ƃ̊m�F�B
        # 0x5c (Windows-31J)
        # 0x005c (UTF-16BE)
        if argCheckUnicode == u'\\':
            return True
        #end
        # No.14
        # ����:JExcelApi 2.6�̃I���W�i���łɂ����Đ���Ɂ~�Ƃ��ēW�J�ł��Ȃ������B
        # 0x817e (Windows-31J)
        # 0x00d7 (UTF-16BE)
        if argCheckUnicode == u'�~':
            return True
        #end
        return False
    #end

    def matchAll(self, argCheck):
        """�^����ꂽ�����񂪁A�S�ĕ����O���[�v�Ɋ܂܂�镶���ł��邩�ǂ����𔻒肵�܂��B

        self -- ���̃��\�b�h���܂ރN���X���g�B
        argCheck -- �`�F�b�N���s������������B
        return -- �S�Ă̕����������O���[�v�Ɋ܂܂�Ă����ture�B�O���[�v�Ɋ܂܂�Ȃ��������܂܂�Ă����false�B
        """
        if argCheck is None:
            raise ValueError, "���\�b�h[matchAll]�̃p�����[�^[argCheck]��null���^�����܂����B�������A���̃p�����[�^��null��^���邱�Ƃ͂ł��܂���B"
        #end

        argCheckUnicode = unicode(argCheck, self.encoding)
        for arg in argCheckUnicode:
            if self.match(arg.encode(self.encoding)) == False:
                return False
            #end
        #end
        return True
    #end

    def matchAny(self, argCheck):
        """�^����ꂽ�����񂪁A�����O���[�v�Ɋ܂܂�镶�����ЂƂł��܂�ł��邩�ǂ����𔻒肵�܂��B

        self -- ���̃��\�b�h���܂ރN���X���g�B
        argCheck -- �`�F�b�N���s������������B
        return -- �����O���[�v�Ɋ܂܂�Ă��镶�����ЂƂł��܂�ł����ture�B�O���[�v�Ɋ܂܂�镶�����ЂƂ��܂܂Ȃ��ꍇ��false�B
        """
        if argCheck is None:
            raise ValueError, "���\�b�h[matchAny]�̃p�����[�^[argCheck]��null���^�����܂����B�������A���̃p�����[�^��null��^���邱�Ƃ͂ł��܂���B"
        #end

        argCheckUnicode = unicode(argCheck, self.encoding)
        for arg in argCheckUnicode:
            if self.match(arg.encode(self.encoding)):
                return True
            #end
        #end
        return False
    #end
#end

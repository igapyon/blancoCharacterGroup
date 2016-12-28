# -*- coding: cp932 -*-
"""���̃\�[�X�R�[�h�� blanco Framework�ɂ���Ď�����������Ă��܂��B
"""
class SampleNecTokusyuMojiCharacterGroup:
    """�T���v���BNEC���ꕶ�� 0x8740-879C�B13��BblancoCharacterGroup�̎����ɂ͉e�����܂���B
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
        # ����:8740: �܂�P�B
        # 0x8740 (Windows-31J)
        # 0x2460 (UTF-16BE)
        if argCheckUnicode == u'�@':
            return True
        #end
        # No.2
        # 0x8741 (Windows-31J)
        # 0x2461 (UTF-16BE)
        if argCheckUnicode == u'�A':
            return True
        #end
        # No.3
        # 0x8742 (Windows-31J)
        # 0x2462 (UTF-16BE)
        if argCheckUnicode == u'�B':
            return True
        #end
        # No.4
        # 0x8743 (Windows-31J)
        # 0x2463 (UTF-16BE)
        if argCheckUnicode == u'�C':
            return True
        #end
        # No.5
        # 0x8744 (Windows-31J)
        # 0x2464 (UTF-16BE)
        if argCheckUnicode == u'�D':
            return True
        #end
        # No.6
        # 0x8745 (Windows-31J)
        # 0x2465 (UTF-16BE)
        if argCheckUnicode == u'�E':
            return True
        #end
        # No.7
        # 0x8746 (Windows-31J)
        # 0x2466 (UTF-16BE)
        if argCheckUnicode == u'�F':
            return True
        #end
        # No.8
        # 0x8747 (Windows-31J)
        # 0x2467 (UTF-16BE)
        if argCheckUnicode == u'�G':
            return True
        #end
        # No.9
        # 0x8748 (Windows-31J)
        # 0x2468 (UTF-16BE)
        if argCheckUnicode == u'�H':
            return True
        #end
        # No.10
        # 0x8749 (Windows-31J)
        # 0x2469 (UTF-16BE)
        if argCheckUnicode == u'�I':
            return True
        #end
        # No.11
        # 0x874a (Windows-31J)
        # 0x246a (UTF-16BE)
        if argCheckUnicode == u'�J':
            return True
        #end
        # No.12
        # 0x874b (Windows-31J)
        # 0x246b (UTF-16BE)
        if argCheckUnicode == u'�K':
            return True
        #end
        # No.13
        # 0x874c (Windows-31J)
        # 0x246c (UTF-16BE)
        if argCheckUnicode == u'�L':
            return True
        #end
        # No.14
        # 0x874d (Windows-31J)
        # 0x246d (UTF-16BE)
        if argCheckUnicode == u'�M':
            return True
        #end
        # No.15
        # 0x874e (Windows-31J)
        # 0x246e (UTF-16BE)
        if argCheckUnicode == u'�N':
            return True
        #end
        # No.16
        # 0x874f (Windows-31J)
        # 0x246f (UTF-16BE)
        if argCheckUnicode == u'�O':
            return True
        #end
        # No.17
        # 0x8750 (Windows-31J)
        # 0x2470 (UTF-16BE)
        if argCheckUnicode == u'�P':
            return True
        #end
        # No.18
        # 0x8751 (Windows-31J)
        # 0x2471 (UTF-16BE)
        if argCheckUnicode == u'�Q':
            return True
        #end
        # No.19
        # 0x8752 (Windows-31J)
        # 0x2472 (UTF-16BE)
        if argCheckUnicode == u'�R':
            return True
        #end
        # No.20
        # ����:8753: �܂�Q�O�B
        # 0x8753 (Windows-31J)
        # 0x2473 (UTF-16BE)
        if argCheckUnicode == u'�S':
            return True
        #end
        # No.21
        # ����:8754: ���[�}�����P�B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
        # 0x8754 (Windows-31J)
        # 0x2160 (UTF-16BE)
        if argCheckUnicode == u'�T':
            return True
        #end
        # No.22
        # ����:���[�}�����B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
        # 0x8755 (Windows-31J)
        # 0x2161 (UTF-16BE)
        if argCheckUnicode == u'�U':
            return True
        #end
        # No.23
        # ����:���[�}�����B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
        # 0x8756 (Windows-31J)
        # 0x2162 (UTF-16BE)
        if argCheckUnicode == u'�V':
            return True
        #end
        # No.24
        # ����:���[�}�����B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
        # 0x8757 (Windows-31J)
        # 0x2163 (UTF-16BE)
        if argCheckUnicode == u'�W':
            return True
        #end
        # No.25
        # ����:���[�}�����B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
        # 0x8758 (Windows-31J)
        # 0x2164 (UTF-16BE)
        if argCheckUnicode == u'�X':
            return True
        #end
        # No.26
        # ����:���[�}�����B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
        # 0x8759 (Windows-31J)
        # 0x2165 (UTF-16BE)
        if argCheckUnicode == u'�Y':
            return True
        #end
        # No.27
        # ����:���[�}�����B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
        # 0x875a (Windows-31J)
        # 0x2166 (UTF-16BE)
        if argCheckUnicode == u'�Z':
            return True
        #end
        # No.28
        # ����:���[�}�����B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
        # 0x875b (Windows-31J)
        # 0x2167 (UTF-16BE)
        if argCheckUnicode == u'�[':
            return True
        #end
        # No.29
        # ����:���[�}�����B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
        # 0x875c (Windows-31J)
        # 0x2168 (UTF-16BE)
        if argCheckUnicode == u'�\':
            return True
        #end
        # No.30
        # ����:875d: ���[�}�����P�O�B(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
        # 0x875d (Windows-31J)
        # 0x2169 (UTF-16BE)
        if argCheckUnicode == u'�]':
            return True
        #end
        # No.32
        # ����:875f: �~���B875e�̓X�L�b�v�B
        # 0x875f (Windows-31J)
        # 0x3349 (UTF-16BE)
        if argCheckUnicode == u'�_':
            return True
        #end
        # No.33
        # 0x8760 (Windows-31J)
        # 0x3314 (UTF-16BE)
        if argCheckUnicode == u'�`':
            return True
        #end
        # No.34
        # 0x8761 (Windows-31J)
        # 0x3322 (UTF-16BE)
        if argCheckUnicode == u'�a':
            return True
        #end
        # No.35
        # 0x8762 (Windows-31J)
        # 0x334d (UTF-16BE)
        if argCheckUnicode == u'�b':
            return True
        #end
        # No.36
        # 0x8763 (Windows-31J)
        # 0x3318 (UTF-16BE)
        if argCheckUnicode == u'�c':
            return True
        #end
        # No.37
        # 0x8764 (Windows-31J)
        # 0x3327 (UTF-16BE)
        if argCheckUnicode == u'�d':
            return True
        #end
        # No.38
        # 0x8765 (Windows-31J)
        # 0x3303 (UTF-16BE)
        if argCheckUnicode == u'�e':
            return True
        #end
        # No.39
        # 0x8766 (Windows-31J)
        # 0x3336 (UTF-16BE)
        if argCheckUnicode == u'�f':
            return True
        #end
        # No.40
        # 0x8767 (Windows-31J)
        # 0x3351 (UTF-16BE)
        if argCheckUnicode == u'�g':
            return True
        #end
        # No.41
        # 0x8768 (Windows-31J)
        # 0x3357 (UTF-16BE)
        if argCheckUnicode == u'�h':
            return True
        #end
        # No.42
        # 0x8769 (Windows-31J)
        # 0x330d (UTF-16BE)
        if argCheckUnicode == u'�i':
            return True
        #end
        # No.43
        # 0x876a (Windows-31J)
        # 0x3326 (UTF-16BE)
        if argCheckUnicode == u'�j':
            return True
        #end
        # No.44
        # 0x876b (Windows-31J)
        # 0x3323 (UTF-16BE)
        if argCheckUnicode == u'�k':
            return True
        #end
        # No.45
        # 0x876c (Windows-31J)
        # 0x332b (UTF-16BE)
        if argCheckUnicode == u'�l':
            return True
        #end
        # No.46
        # 0x876d (Windows-31J)
        # 0x334a (UTF-16BE)
        if argCheckUnicode == u'�m':
            return True
        #end
        # No.47
        # 0x876e (Windows-31J)
        # 0x333b (UTF-16BE)
        if argCheckUnicode == u'�n':
            return True
        #end
        # No.48
        # 0x876f (Windows-31J)
        # 0x339c (UTF-16BE)
        if argCheckUnicode == u'�o':
            return True
        #end
        # No.49
        # 0x8770 (Windows-31J)
        # 0x339d (UTF-16BE)
        if argCheckUnicode == u'�p':
            return True
        #end
        # No.50
        # 0x8771 (Windows-31J)
        # 0x339e (UTF-16BE)
        if argCheckUnicode == u'�q':
            return True
        #end
        # No.51
        # 0x8772 (Windows-31J)
        # 0x338e (UTF-16BE)
        if argCheckUnicode == u'�r':
            return True
        #end
        # No.52
        # 0x8773 (Windows-31J)
        # 0x338f (UTF-16BE)
        if argCheckUnicode == u'�s':
            return True
        #end
        # No.53
        # 0x8774 (Windows-31J)
        # 0x33c4 (UTF-16BE)
        if argCheckUnicode == u'�t':
            return True
        #end
        # No.54
        # ����:8775: �������[�g���B
        # 0x8775 (Windows-31J)
        # 0x33a1 (UTF-16BE)
        if argCheckUnicode == u'�u':
            return True
        #end
        # No.63
        # ����:877e: �����B877d�܂ł̓X�L�b�v�B
        # 0x877e (Windows-31J)
        # 0x337b (UTF-16BE)
        if argCheckUnicode == u'�~':
            return True
        #end
        # No.65
        # ����:8780: �_�u���N�I�[�e�[�V�����B877f�̓X�L�b�v�B
        # 0x8780 (Windows-31J)
        # 0x301d (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.66
        # 0x8781 (Windows-31J)
        # 0x301f (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.67
        # ����:8782: No. (IBM�g����������Q�Ƃ���Ă��܂�) (���d��������)
        # 0x8782 (Windows-31J)
        # 0x2116 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.68
        # 0x8783 (Windows-31J)
        # 0x33cd (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.69
        # ����:(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
        # 0x8784 (Windows-31J)
        # 0x2121 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.70
        # 0x8785 (Windows-31J)
        # 0x32a4 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.71
        # 0x8786 (Windows-31J)
        # 0x32a5 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.72
        # 0x8787 (Windows-31J)
        # 0x32a6 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.73
        # 0x8788 (Windows-31J)
        # 0x32a7 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.74
        # 0x8789 (Windows-31J)
        # 0x32a8 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.75
        # ����:(IBM�g����������Q�Ƃ���Ă��܂�)  (���d��������)
        # 0x878a (Windows-31J)
        # 0x3231 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.76
        # 0x878b (Windows-31J)
        # 0x3232 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.77
        # 0x878c (Windows-31J)
        # 0x3239 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.78
        # 0x878d (Windows-31J)
        # 0x337e (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.79
        # 0x878e (Windows-31J)
        # 0x337d (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.80
        # ����:878f: ���a�B
        # 0x878f (Windows-31J)
        # 0x337c (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.81
        # ����:8790��81e0�B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
        # 0x81e0 (Windows-31J)
        # 0x2252 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.82
        # ����:8791��81df�B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
        # 0x81df (Windows-31J)
        # 0x2261 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.83
        # ����:8792��81e7�B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
        # 0x81e7 (Windows-31J)
        # 0x222b (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.84
        # ����:8793: �L���B
        # 0x8793 (Windows-31J)
        # 0x222e (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.85
        # ����:8794: �V�O�}�B
        # 0x8794 (Windows-31J)
        # 0x2211 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.86
        # ����:8795��81e3�B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
        # 0x81e3 (Windows-31J)
        # 0x221a (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.87
        # ����:8796��81db�B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
        # 0x81db (Windows-31J)
        # 0x22a5 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.88
        # ����:8797��81da�B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
        # 0x81da (Windows-31J)
        # 0x2220 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.89
        # ����:8798: �L���B
        # 0x8798 (Windows-31J)
        # 0x221f (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.90
        # ����:8799: �O�p�B
        # 0x8799 (Windows-31J)
        # 0x22bf (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.91
        # ����:879a��81e6�B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
        # 0x81e6 (Windows-31J)
        # 0x2235 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.92
        # ����:879b��81bf�B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
        # 0x81bf (Windows-31J)
        # 0x2229 (UTF-16BE)
        if argCheckUnicode == u'��':
            return True
        #end
        # No.93
        # ����:879c��81be: NEC���ꕶ���̍Ō�̕����B(JIS X 0208:1997�Ƀ}�b�v����Ă��܂��B)  (���d��������)
        # 0x81be (Windows-31J)
        # 0x222a (UTF-16BE)
        if argCheckUnicode == u'��':
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

/*
 * ���̃\�[�X�R�[�h�� blanco Framework�ɂ���Ď�����������Ă��܂��B
 */
package blanco.sample.charactergroup;

/**
 * �����O���[�v�̃T���v���B���̃N���X�͒P�ɃT���v���ł��B���ۂ̓���ɂ͗��p����܂���B
 */
public class SampleCharacterGroup {
    /**
     * �����O���[�v�Ɋ܂܂�镶���ł��邩�ǂ����𔻒肵�܂��B
     *
     * @param argCheck �`�F�b�N���s�����������B
     * @return �����O���[�v�Ɋ܂܂�Ă����ture�B�O���[�v�Ɋ܂܂�Ȃ������ł����false�B
     */
    public boolean match(final char argCheck) {
        // No.1
        // ����:0�̕���
        // 0x30 (Windows-31J)
        // 0x0030 (UTF-16BE)
        if (argCheck == '0') {
            return true;
        }
        // No.2
        // ����:1�̕���
        // 0x31 (Windows-31J)
        // 0x0031 (UTF-16BE)
        if (argCheck == '1') {
            return true;
        }
        // No.3
        // ����:2�̕���
        // 0x32 (Windows-31J)
        // 0x0032 (UTF-16BE)
        if (argCheck == '2') {
            return true;
        }
        // No.4
        // ����:3�̕���
        // 0x33 (Windows-31J)
        // 0x0033 (UTF-16BE)
        if (argCheck == '3') {
            return true;
        }
        // No.5
        // ����:4�̕���
        // 0x34 (Windows-31J)
        // 0x0034 (UTF-16BE)
        if (argCheck == '4') {
            return true;
        }
        // No.6
        // ����:5�̕���
        // 0x35 (Windows-31J)
        // 0x0035 (UTF-16BE)
        if (argCheck == '5') {
            return true;
        }
        // No.7
        // ����:6�̕���
        // 0x36 (Windows-31J)
        // 0x0036 (UTF-16BE)
        if (argCheck == '6') {
            return true;
        }
        // No.8
        // ����:7�̕���
        // 0x37 (Windows-31J)
        // 0x0037 (UTF-16BE)
        if (argCheck == '7') {
            return true;
        }
        // No.9
        // ����:8�̕���
        // 0x38 (Windows-31J)
        // 0x0038 (UTF-16BE)
        if (argCheck == '8') {
            return true;
        }
        // No.10
        // ����:9�̕���
        // 0x39 (Windows-31J)
        // 0x0039 (UTF-16BE)
        if (argCheck == '9') {
            return true;
        }
        // No.11
        // ����:�V���O���N�I�[�g���W�J����邱�Ƃ̊m�F�B
        // 0x27 (Windows-31J)
        // 0x0027 (UTF-16BE)
        if (argCheck == '\'') {
            return true;
        }
        // No.12
        // ����:�_�u���N�I�[�g���W�J����邱�Ƃ̊m�F�B
        // 0x22 (Windows-31J)
        // 0x0022 (UTF-16BE)
        if (argCheck == '\"') {
            return true;
        }
        // No.13
        // ����:�o�b�N�X���b�V�����W�J����邱�Ƃ̊m�F�B
        // 0x5c (Windows-31J)
        // 0x005c (UTF-16BE)
        if (argCheck == '\\') {
            return true;
        }
        // No.14
        // ����:JExcelApi 2.6�̃I���W�i���łɂ����Đ���Ɂ~�Ƃ��ēW�J�ł��Ȃ������B
        // 0x817e (Windows-31J)
        // 0x00d7 (UTF-16BE)
        if (argCheck == '�~') {
            return true;
        }
        return false;
    }

    /**
     * �^����ꂽ�����񂪁A�S�ĕ����O���[�v�Ɋ܂܂�镶���ł��邩�ǂ����𔻒肵�܂��B
     *
     * @param argCheck �`�F�b�N���s������������B
     * @return �S�Ă̕����������O���[�v�Ɋ܂܂�Ă����ture�B�O���[�v�Ɋ܂܂�Ȃ��������܂܂�Ă����false�B
     */
    public boolean matchAll(final String argCheck) {
        if (argCheck == null) {
            throw new IllegalArgumentException("���\�b�h[matchAll]�̃p�����[�^[argCheck]��null���^�����܂����B�������A���̃p�����[�^��null��^���邱�Ƃ͂ł��܂���B");
        }

        char[] arrayArg = argCheck.toCharArray();
        int arraySize = arrayArg.length;
        for (int index = 0; index < arraySize; index++) {
            if (match(arrayArg[index]) == false) {
                return false;
            }
        }
        return true;
    }

    /**
     * �^����ꂽ�����񂪁A�����O���[�v�Ɋ܂܂�镶�����ЂƂł��܂�ł��邩�ǂ����𔻒肵�܂��B
     *
     * @param argCheck �`�F�b�N���s������������B
     * @return �����O���[�v�Ɋ܂܂�Ă��镶�����ЂƂł��܂�ł����ture�B�O���[�v�Ɋ܂܂�镶�����ЂƂ��܂܂Ȃ��ꍇ��false�B
     */
    public boolean matchAny(final String argCheck) {
        if (argCheck == null) {
            throw new IllegalArgumentException("���\�b�h[matchAny]�̃p�����[�^[argCheck]��null���^�����܂����B�������A���̃p�����[�^��null��^���邱�Ƃ͂ł��܂���B");
        }

        char[] arrayArg = argCheck.toCharArray();
        int arraySize = arrayArg.length;
        for (int index = 0; index < arraySize; index++) {
            if (match(arrayArg[index])) {
                return true;
            }
        }
        return false;
    }
}

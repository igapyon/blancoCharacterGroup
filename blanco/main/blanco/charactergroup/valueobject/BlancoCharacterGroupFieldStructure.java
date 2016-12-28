/*
 * ���̃\�[�X�R�[�h�� blanco Framework�ɂ�莩����������܂����B
 */
package blanco.charactergroup.valueobject;

/**
 * BlancoCharacterGroup�̂Ȃ��ŗ��p�����ValueObject�ł��B
 */
public class BlancoCharacterGroupFieldStructure {
    /**
     * �t�B�[���h [no]
     *
     * ���ڂ̌^ [java.lang.String]<br>
     * ���ڔԍ�
     */
    private String fNo;

    /**
     * �t�B�[���h [value]
     *
     * ���ڂ̌^ [java.lang.String]<br>
     * �������w�肵�܂��B�K�{���ڂł��B
     */
    private String fValue;

    /**
     * �t�B�[���h [description]
     *
     * ���ڂ̌^ [java.lang.String]<br>
     * �����ɑ΂���������w�肵�܂��B
     */
    private String fDescription;

    /**
     * �t�B�[���h [no]�̃Z�b�^�[���\�b�h
     *
     * ���ڂ̌^ [java.lang.String]<br>
     * ���ڔԍ�
     *
     * @param argNo �t�B�[���h[no]�Ɋi�[�������l
     */
    public void setNo(final String argNo) {
        fNo = argNo;
    }

    /**
     * �t�B�[���h[no]�̃Q�b�^�[���\�b�h
     *
     * ���ڂ̌^ [java.lang.String]<br>
     * ���ڔԍ�
     *
     * @return �t�B�[���h[no]�Ɋi�[����Ă���l
     */
    public String getNo() {
        return fNo;
    }

    /**
     * �t�B�[���h [value]�̃Z�b�^�[���\�b�h
     *
     * ���ڂ̌^ [java.lang.String]<br>
     * �������w�肵�܂��B�K�{���ڂł��B
     *
     * @param argValue �t�B�[���h[value]�Ɋi�[�������l
     */
    public void setValue(final String argValue) {
        fValue = argValue;
    }

    /**
     * �t�B�[���h[value]�̃Q�b�^�[���\�b�h
     *
     * ���ڂ̌^ [java.lang.String]<br>
     * �������w�肵�܂��B�K�{���ڂł��B
     *
     * @return �t�B�[���h[value]�Ɋi�[����Ă���l
     */
    public String getValue() {
        return fValue;
    }

    /**
     * �t�B�[���h [description]�̃Z�b�^�[���\�b�h
     *
     * ���ڂ̌^ [java.lang.String]<br>
     * �����ɑ΂���������w�肵�܂��B
     *
     * @param argDescription �t�B�[���h[description]�Ɋi�[�������l
     */
    public void setDescription(final String argDescription) {
        fDescription = argDescription;
    }

    /**
     * �t�B�[���h[description]�̃Q�b�^�[���\�b�h
     *
     * ���ڂ̌^ [java.lang.String]<br>
     * �����ɑ΂���������w�肵�܂��B
     *
     * @return �t�B�[���h[description]�Ɋi�[����Ă���l
     */
    public String getDescription() {
        return fDescription;
    }

    /**
     * ���̃o�����[�I�u�W�F�N�g�̕�����\�����擾���܂��B
     *
     * �I�u�W�F�N�g�̃V�����[�͈͂ł���toString����Ȃ��_�ɒ��ӂ��ė��p���Ă��������B
     *
     * @return �o�����[�I�u�W�F�N�g�̕�����\���B
     */
    public String toString() {
        final StringBuffer buf = new StringBuffer();
        buf.append("blanco.charactergroup.valueobject.BlancoCharacterGroupFieldStructure[");
        buf.append("no=" + fNo);
        buf.append(",value=" + fValue);
        buf.append(",description=" + fDescription);
        buf.append("]");
        return buf.toString();
    }
}

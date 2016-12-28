/*
 * Ç±ÇÃÉ\Å[ÉXÉRÅ[ÉhÇÕ blanco FrameworkÇ…ÇÊÇ¡Çƒé©ìÆê∂ê¨Ç≥ÇÍÇƒÇ¢Ç‹Ç∑ÅB
 */

/**
 * ÉfÉtÉHÉãÉgÉRÉìÉXÉgÉâÉNÉ^
 * @fileoverview Ç±ÇÃÉ\Å[ÉXÉRÅ[ÉhÇÕ blanco FrameworkÇ…ÇÊÇ¡Çƒé©ìÆê∂ê¨Ç≥ÇÍÇƒÇ¢Ç‹Ç∑ÅB
 * @class Shift_JISÇÃÇ§ÇøÇQÉoÉCÉgï∂éöàÍóóÇÃÉTÉìÉvÉãÅBã@éÌàÀë∂ï∂éöÇ»Ç«ÇÕä‹Ç›Ç‹ÇπÇÒÅBblancoCharacterGroupÇÃé¿ëïÇ…ÇÕâeãøÇµÇ‹ÇπÇÒÅB
 * @constructor
 */
function SampleShiftJISCharacterGroup() {
    /* ÉpÉâÉÅÅ[É^ÇÃêîÅAå^É`ÉFÉbÉNÇçsÇ¢Ç‹Ç∑ÅB */
    if (arguments.length !== 0) {
        throw new Error("[ArgumentException]: SampleShiftJISCharacterGroup.SampleShiftJISCharacterGroup ÇÃÉpÉâÉÅÅ[É^ÇÕ[0]å¬Ç≈Ç†ÇÈïKóvÇ™Ç†ÇËÇ‹Ç∑ÅBÇµÇ©Çµé¿ç€Ç…ÇÕ[" + arguments.length +  "]å¬ÇÃÉpÉâÉÅÅ[É^Çî∫Ç¡ÇƒåƒÇ—èoÇ≥ÇÍÇ‹ÇµÇΩÅB");
    }

}

/**
 * ï∂éöÉOÉãÅ[ÉvÇ…ä‹Ç‹ÇÍÇÈï∂éöÇ≈Ç†ÇÈÇ©Ç«Ç§Ç©ÇîªíËÇµÇ‹Ç∑ÅB
 * @addon
 * @param {string} argCheck É`ÉFÉbÉNÇçsÇ¢ÇΩÇ¢ï∂éöÅB
 * @return ï∂éöÉOÉãÅ[ÉvÇ…ä‹Ç‹ÇÍÇƒÇ¢ÇÍÇŒtureÅBÉOÉãÅ[ÉvÇ…ä‹Ç‹ÇÍÇ»Ç¢ï∂éöÇ≈Ç†ÇÍÇŒfalseÅB
 * @type boolean
 */
SampleShiftJISCharacterGroup.prototype.match = function(/* string */ argCheck) {
    /* ÉpÉâÉÅÅ[É^ÇÃêîÅAå^É`ÉFÉbÉNÇçsÇ¢Ç‹Ç∑ÅB */
    if (arguments.length !== 1) {
        throw new Error("[ArgumentException]: SampleShiftJISCharacterGroup.match ÇÃÉpÉâÉÅÅ[É^ÇÕ[1]å¬Ç≈Ç†ÇÈïKóvÇ™Ç†ÇËÇ‹Ç∑ÅBÇµÇ©Çµé¿ç€Ç…ÇÕ[" + arguments.length +  "]å¬ÇÃÉpÉâÉÅÅ[É^Çî∫Ç¡ÇƒåƒÇ—èoÇ≥ÇÍÇ‹ÇµÇΩÅB");
    }
    if (typeof(argCheck) != "string") {
        throw new Error("[ArgumentException]: SampleShiftJISCharacterGroup.match ÇÃ1î‘ñ⁄ÇÃÉpÉâÉÅÅ[É^ÇÕ[string]å^Ç≈Ç»Ç≠ÇƒÇÕÇ»ÇËÇ‹ÇπÇÒÅBÇµÇ©Çµé¿ç€Ç…ÇÕ[" + typeof(argCheck) + "]å^Ç™ó^Ç¶ÇÁÇÍÇ‹ÇµÇΩÅB");
    }

    // No.2
    // ê‡ñæ:8140
    // 0x8140 (Windows-31J)
    // 0x3000 (UTF-16BE)
    if (argCheck == 'Å@') {
        return true;
    }
    // No.3
    // ê‡ñæ:8141
    // 0x8141 (Windows-31J)
    // 0x3001 (UTF-16BE)
    if (argCheck == 'ÅA') {
        return true;
    }
    // No.4
    // ê‡ñæ:8142
    // 0x8142 (Windows-31J)
    // 0x3002 (UTF-16BE)
    if (argCheck == 'ÅB') {
        return true;
    }
    // No.5
    // ê‡ñæ:8143
    // 0x8143 (Windows-31J)
    // 0xff0c (UTF-16BE)
    if (argCheck == 'ÅC') {
        return true;
    }
    // No.6
    // ê‡ñæ:8144
    // 0x8144 (Windows-31J)
    // 0xff0e (UTF-16BE)
    if (argCheck == 'ÅD') {
        return true;
    }
    // No.7
    // ê‡ñæ:8145
    // 0x8145 (Windows-31J)
    // 0x30fb (UTF-16BE)
    if (argCheck == 'ÅE') {
        return true;
    }
    // No.8
    // ê‡ñæ:8146
    // 0x8146 (Windows-31J)
    // 0xff1a (UTF-16BE)
    if (argCheck == 'ÅF') {
        return true;
    }
    // No.9
    // ê‡ñæ:8147
    // 0x8147 (Windows-31J)
    // 0xff1b (UTF-16BE)
    if (argCheck == 'ÅG') {
        return true;
    }
    // No.10
    // ê‡ñæ:8148
    // 0x8148 (Windows-31J)
    // 0xff1f (UTF-16BE)
    if (argCheck == 'ÅH') {
        return true;
    }
    // No.11
    // ê‡ñæ:8149
    // 0x8149 (Windows-31J)
    // 0xff01 (UTF-16BE)
    if (argCheck == 'ÅI') {
        return true;
    }
    // No.12
    // ê‡ñæ:814a
    // 0x814a (Windows-31J)
    // 0x309b (UTF-16BE)
    if (argCheck == 'ÅJ') {
        return true;
    }
    // No.13
    // ê‡ñæ:814b
    // 0x814b (Windows-31J)
    // 0x309c (UTF-16BE)
    if (argCheck == 'ÅK') {
        return true;
    }
    // No.14
    // ê‡ñæ:814c
    // 0x814c (Windows-31J)
    // 0x00b4 (UTF-16BE)
    if (argCheck == 'ÅL') {
        return true;
    }
    // No.15
    // ê‡ñæ:814d
    // 0x814d (Windows-31J)
    // 0xff40 (UTF-16BE)
    if (argCheck == 'ÅM') {
        return true;
    }
    // No.16
    // ê‡ñæ:814e
    // 0x814e (Windows-31J)
    // 0x00a8 (UTF-16BE)
    if (argCheck == 'ÅN') {
        return true;
    }
    // No.17
    // ê‡ñæ:814f
    // 0x814f (Windows-31J)
    // 0xff3e (UTF-16BE)
    if (argCheck == 'ÅO') {
        return true;
    }
    // No.18
    // ê‡ñæ:8150
    // 0x8150 (Windows-31J)
    // 0xffe3 (UTF-16BE)
    if (argCheck == 'ÅP') {
        return true;
    }
    // No.19
    // ê‡ñæ:8151
    // 0x8151 (Windows-31J)
    // 0xff3f (UTF-16BE)
    if (argCheck == 'ÅQ') {
        return true;
    }
    // No.20
    // ê‡ñæ:8152
    // 0x8152 (Windows-31J)
    // 0x30fd (UTF-16BE)
    if (argCheck == 'ÅR') {
        return true;
    }
    // No.21
    // ê‡ñæ:8153
    // 0x8153 (Windows-31J)
    // 0x30fe (UTF-16BE)
    if (argCheck == 'ÅS') {
        return true;
    }
    // No.22
    // ê‡ñæ:8154
    // 0x8154 (Windows-31J)
    // 0x309d (UTF-16BE)
    if (argCheck == 'ÅT') {
        return true;
    }
    // No.23
    // ê‡ñæ:8155
    // 0x8155 (Windows-31J)
    // 0x309e (UTF-16BE)
    if (argCheck == 'ÅU') {
        return true;
    }
    // No.24
    // ê‡ñæ:8156
    // 0x8156 (Windows-31J)
    // 0x3003 (UTF-16BE)
    if (argCheck == 'ÅV') {
        return true;
    }
    // No.25
    // ê‡ñæ:8157
    // 0x8157 (Windows-31J)
    // 0x4edd (UTF-16BE)
    if (argCheck == 'ÅW') {
        return true;
    }
    // No.26
    // ê‡ñæ:8158
    // 0x8158 (Windows-31J)
    // 0x3005 (UTF-16BE)
    if (argCheck == 'ÅX') {
        return true;
    }
    // No.27
    // ê‡ñæ:8159
    // 0x8159 (Windows-31J)
    // 0x3006 (UTF-16BE)
    if (argCheck == 'ÅY') {
        return true;
    }
    // No.28
    // ê‡ñæ:815a
    // 0x815a (Windows-31J)
    // 0x3007 (UTF-16BE)
    if (argCheck == 'ÅZ') {
        return true;
    }
    // No.29
    // ê‡ñæ:815b
    // 0x815b (Windows-31J)
    // 0x30fc (UTF-16BE)
    if (argCheck == 'Å[') {
        return true;
    }
    // No.30
    // ê‡ñæ:815c Åyèdï°ïÑçÜâªÅz(EM DASH) ÇÕÅAU+2014(EM DASH) Ç∆ U+2015(HORIZONTAL BAR)Å©(Windows-31J) ÇÃÇQâ”èäÇ©ÇÁÉ}ÉbÉsÉìÉOÇ≥ÇÍÇÈÅB
    // 0x815c (Windows-31J)
    // 0x2015 (UTF-16BE)
    if (argCheck == 'Å\') {
        return true;
    }
    // No.31
    // ê‡ñæ:815d
    // 0x815d (Windows-31J)
    // 0x2010 (UTF-16BE)
    if (argCheck == 'Å]') {
        return true;
    }
    // No.32
    // ê‡ñæ:815e
    // 0x815e (Windows-31J)
    // 0xff0f (UTF-16BE)
    if (argCheck == 'Å^') {
        return true;
    }
    // No.33
    // ê‡ñæ:815f Åyèdï°ïÑçÜâªÅzèÉêàÇ» Unicode Ç≈ÇÕ U+005c(REVERSE SOLIDUS) Ç≈Ç†ÇÈÇ™ÅAU+ff3c(FULLWIDTH REVERSE SOLIDUS)Å©(Windows-31J)Ç…É}ÉbÉsÉìÉOÇ≥ÇÍÇƒÇ¢ÇÈÅBì˙ñ{åÍï∂éöÉRÅ[ÉhéñèÓìIÇ… 005cÇ…É}ÉbÉsÉìÉOÇ∑ÇÈÇÃÇÕ åªé¿ìIÇ…ÇÕ ÇŸÇ⁄ïsâ¬î\ÅB
    // 0x815f (Windows-31J)
    // 0xff3c (UTF-16BE)
    if (argCheck == 'Å_') {
        return true;
    }
    // No.34
    // ê‡ñæ:8160 Åyèdï°ïÑçÜâªÅz(WAVE DASH) ÇÕ U+301c(WAVE DASH) Ç∆ U+ff5e(FULLWIDTH TILDE)Å©(Windows-31J) ÇÃÇQâ”èäÇ…É}ÉbÉsÉìÉOÇ≥ÇÍÇÈÅB
    // 0x8160 (Windows-31J)
    // 0xff5e (UTF-16BE)
    if (argCheck == 'Å`') {
        return true;
    }
    // No.35
    // ê‡ñæ:8161 Åyèdï°ïÑçÜâªÅz(DOUBLEVERTICAL LINE) ÇÕÅAU+2016(DOUBLEVERTICAL LINE) Ç∆ U+2225(PARALLEL TO)Å©(Windows-31J)ÇÃÇQâ”èäÇ…É}ÉbÉsÉìÉOÇ≥ÇÍÇÈÅB
    // 0x8161 (Windows-31J)
    // 0x2225 (UTF-16BE)
    if (argCheck == 'Åa') {
        return true;
    }
    // No.36
    // ê‡ñæ:8162
    // 0x8162 (Windows-31J)
    // 0xff5c (UTF-16BE)
    if (argCheck == 'Åb') {
        return true;
    }
    // No.37
    // ê‡ñæ:8163
    // 0x8163 (Windows-31J)
    // 0x2026 (UTF-16BE)
    if (argCheck == 'Åc') {
        return true;
    }
    // No.38
    // ê‡ñæ:8164
    // 0x8164 (Windows-31J)
    // 0x2025 (UTF-16BE)
    if (argCheck == 'Åd') {
        return true;
    }
    // No.39
    // ê‡ñæ:8165
    // 0x8165 (Windows-31J)
    // 0x2018 (UTF-16BE)
    if (argCheck == 'Åe') {
        return true;
    }
    // No.40
    // ê‡ñæ:8166
    // 0x8166 (Windows-31J)
    // 0x2019 (UTF-16BE)
    if (argCheck == 'Åf') {
        return true;
    }
    // No.41
    // ê‡ñæ:8167
    // 0x8167 (Windows-31J)
    // 0x201c (UTF-16BE)
    if (argCheck == 'Åg') {
        return true;
    }
    // No.42
    // ê‡ñæ:8168
    // 0x8168 (Windows-31J)
    // 0x201d (UTF-16BE)
    if (argCheck == 'Åh') {
        return true;
    }
    // No.43
    // ê‡ñæ:8169
    // 0x8169 (Windows-31J)
    // 0xff08 (UTF-16BE)
    if (argCheck == 'Åi') {
        return true;
    }
    // No.44
    // ê‡ñæ:816a
    // 0x816a (Windows-31J)
    // 0xff09 (UTF-16BE)
    if (argCheck == 'Åj') {
        return true;
    }
    // No.45
    // ê‡ñæ:816b
    // 0x816b (Windows-31J)
    // 0x3014 (UTF-16BE)
    if (argCheck == 'Åk') {
        return true;
    }
    // No.46
    // ê‡ñæ:816c
    // 0x816c (Windows-31J)
    // 0x3015 (UTF-16BE)
    if (argCheck == 'Ål') {
        return true;
    }
    // No.47
    // ê‡ñæ:816d
    // 0x816d (Windows-31J)
    // 0xff3b (UTF-16BE)
    if (argCheck == 'Åm') {
        return true;
    }
    // No.48
    // ê‡ñæ:816e
    // 0x816e (Windows-31J)
    // 0xff3d (UTF-16BE)
    if (argCheck == 'Ån') {
        return true;
    }
    // No.49
    // ê‡ñæ:816f
    // 0x816f (Windows-31J)
    // 0xff5b (UTF-16BE)
    if (argCheck == 'Åo') {
        return true;
    }
    // No.50
    // ê‡ñæ:8170
    // 0x8170 (Windows-31J)
    // 0xff5d (UTF-16BE)
    if (argCheck == 'Åp') {
        return true;
    }
    // No.51
    // ê‡ñæ:8171
    // 0x8171 (Windows-31J)
    // 0x3008 (UTF-16BE)
    if (argCheck == 'Åq') {
        return true;
    }
    // No.52
    // ê‡ñæ:8172
    // 0x8172 (Windows-31J)
    // 0x3009 (UTF-16BE)
    if (argCheck == 'År') {
        return true;
    }
    // No.53
    // ê‡ñæ:8173
    // 0x8173 (Windows-31J)
    // 0x300a (UTF-16BE)
    if (argCheck == 'Ås') {
        return true;
    }
    // No.54
    // ê‡ñæ:8174
    // 0x8174 (Windows-31J)
    // 0x300b (UTF-16BE)
    if (argCheck == 'Åt') {
        return true;
    }
    // No.55
    // ê‡ñæ:8175
    // 0x8175 (Windows-31J)
    // 0x300c (UTF-16BE)
    if (argCheck == 'Åu') {
        return true;
    }
    // No.56
    // ê‡ñæ:8176
    // 0x8176 (Windows-31J)
    // 0x300d (UTF-16BE)
    if (argCheck == 'Åv') {
        return true;
    }
    // No.57
    // ê‡ñæ:8177
    // 0x8177 (Windows-31J)
    // 0x300e (UTF-16BE)
    if (argCheck == 'Åw') {
        return true;
    }
    // No.58
    // ê‡ñæ:8178
    // 0x8178 (Windows-31J)
    // 0x300f (UTF-16BE)
    if (argCheck == 'Åx') {
        return true;
    }
    // No.59
    // ê‡ñæ:8179
    // 0x8179 (Windows-31J)
    // 0x3010 (UTF-16BE)
    if (argCheck == 'Åy') {
        return true;
    }
    // No.60
    // ê‡ñæ:817a
    // 0x817a (Windows-31J)
    // 0x3011 (UTF-16BE)
    if (argCheck == 'Åz') {
        return true;
    }
    // No.61
    // ê‡ñæ:817b
    // 0x817b (Windows-31J)
    // 0xff0b (UTF-16BE)
    if (argCheck == 'Å{') {
        return true;
    }
    // No.62
    // ê‡ñæ:817c Åyèdï°ïÑçÜâªÅz(MINUS SIGN)ÇÕ U+2212(MINUS SIGN)  U+ff0d(FULLWIDTH HYPHEN-MINUS)Å©(Windows-31J)ÇÃÇQâ”èäÇ…É}ÉbÉsÉìÉOÇ≥ÇÍÇÈÅB
    // 0x817c (Windows-31J)
    // 0xff0d (UTF-16BE)
    if (argCheck == 'Å|') {
        return true;
    }
    // No.63
    // ê‡ñæ:817d
    // 0x817d (Windows-31J)
    // 0x00b1 (UTF-16BE)
    if (argCheck == 'Å}') {
        return true;
    }
    // No.64
    // ê‡ñæ:817e
    // 0x817e (Windows-31J)
    // 0x00d7 (UTF-16BE)
    if (argCheck == 'Å~') {
        return true;
    }
    // No.65
    // ê‡ñæ:8180
    // 0x8180 (Windows-31J)
    // 0x00f7 (UTF-16BE)
    if (argCheck == 'ÅÄ') {
        return true;
    }
    // No.66
    // ê‡ñæ:8181
    // 0x8181 (Windows-31J)
    // 0xff1d (UTF-16BE)
    if (argCheck == 'ÅÅ') {
        return true;
    }
    // No.67
    // ê‡ñæ:8182
    // 0x8182 (Windows-31J)
    // 0x2260 (UTF-16BE)
    if (argCheck == 'ÅÇ') {
        return true;
    }
    // No.68
    // ê‡ñæ:8183
    // 0x8183 (Windows-31J)
    // 0xff1c (UTF-16BE)
    if (argCheck == 'ÅÉ') {
        return true;
    }
    // No.69
    // ê‡ñæ:8184
    // 0x8184 (Windows-31J)
    // 0xff1e (UTF-16BE)
    if (argCheck == 'ÅÑ') {
        return true;
    }
    // No.70
    // ê‡ñæ:8185
    // 0x8185 (Windows-31J)
    // 0x2266 (UTF-16BE)
    if (argCheck == 'ÅÖ') {
        return true;
    }
    // No.71
    // ê‡ñæ:8186
    // 0x8186 (Windows-31J)
    // 0x2267 (UTF-16BE)
    if (argCheck == 'ÅÜ') {
        return true;
    }
    // No.72
    // ê‡ñæ:8187
    // 0x8187 (Windows-31J)
    // 0x221e (UTF-16BE)
    if (argCheck == 'Åá') {
        return true;
    }
    // No.73
    // ê‡ñæ:8188
    // 0x8188 (Windows-31J)
    // 0x2234 (UTF-16BE)
    if (argCheck == 'Åà') {
        return true;
    }
    // No.74
    // ê‡ñæ:8189
    // 0x8189 (Windows-31J)
    // 0x2642 (UTF-16BE)
    if (argCheck == 'Åâ') {
        return true;
    }
    // No.75
    // ê‡ñæ:818a
    // 0x818a (Windows-31J)
    // 0x2640 (UTF-16BE)
    if (argCheck == 'Åä') {
        return true;
    }
    // No.76
    // ê‡ñæ:818b
    // 0x818b (Windows-31J)
    // 0x00b0 (UTF-16BE)
    if (argCheck == 'Åã') {
        return true;
    }
    // No.77
    // ê‡ñæ:818c
    // 0x818c (Windows-31J)
    // 0x2032 (UTF-16BE)
    if (argCheck == 'Åå') {
        return true;
    }
    // No.78
    // ê‡ñæ:818d
    // 0x818d (Windows-31J)
    // 0x2033 (UTF-16BE)
    if (argCheck == 'Åç') {
        return true;
    }
    // No.79
    // ê‡ñæ:818e
    // 0x818e (Windows-31J)
    // 0x2103 (UTF-16BE)
    if (argCheck == 'Åé') {
        return true;
    }
    // No.80
    // ê‡ñæ:818f
    // 0x818f (Windows-31J)
    // 0xffe5 (UTF-16BE)
    if (argCheck == 'Åè') {
        return true;
    }
    // No.81
    // ê‡ñæ:8190
    // 0x8190 (Windows-31J)
    // 0xff04 (UTF-16BE)
    if (argCheck == 'Åê') {
        return true;
    }
    // No.82
    // ê‡ñæ:8191 Åyèdï°ïÑçÜâªÅz(CENT SIGN) ÇÕ U+00a2(CENT SIGN) Ç∆ U+ffe0(FULLWIDTH CENT SIGN)Å©(Windows-31J)Ç∆Ç…É}ÉbÉsÉìÉOÇ≥ÇÍÇÈÅB
    // 0x8191 (Windows-31J)
    // 0xffe0 (UTF-16BE)
    if (argCheck == 'Åë') {
        return true;
    }
    // No.83
    // ê‡ñæ:8192 Åyèdï°ïÑçÜâªÅz(POUND SIGN) ÇÕ   U+00a3(POUND SIGN) Ç∆ U+ffe1(FULLWIDTH POUND SIGN)Å©(Windows-31J)Ç∆Ç…É}ÉbÉsÉìÉOÇ≥ÇÍÇÈÅB
    // 0x8192 (Windows-31J)
    // 0xffe1 (UTF-16BE)
    if (argCheck == 'Åí') {
        return true;
    }
    // No.84
    // ê‡ñæ:8193
    // 0x8193 (Windows-31J)
    // 0xff05 (UTF-16BE)
    if (argCheck == 'Åì') {
        return true;
    }
    // No.85
    // ê‡ñæ:8194
    // 0x8194 (Windows-31J)
    // 0xff03 (UTF-16BE)
    if (argCheck == 'Åî') {
        return true;
    }
    // No.86
    // ê‡ñæ:8195
    // 0x8195 (Windows-31J)
    // 0xff06 (UTF-16BE)
    if (argCheck == 'Åï') {
        return true;
    }
    // No.87
    // ê‡ñæ:8196
    // 0x8196 (Windows-31J)
    // 0xff0a (UTF-16BE)
    if (argCheck == 'Åñ') {
        return true;
    }
    // No.88
    // ê‡ñæ:8197
    // 0x8197 (Windows-31J)
    // 0xff20 (UTF-16BE)
    if (argCheck == 'Åó') {
        return true;
    }
    // No.89
    // ê‡ñæ:8198
    // 0x8198 (Windows-31J)
    // 0x00a7 (UTF-16BE)
    if (argCheck == 'Åò') {
        return true;
    }
    // No.90
    // ê‡ñæ:8199
    // 0x8199 (Windows-31J)
    // 0x2606 (UTF-16BE)
    if (argCheck == 'Åô') {
        return true;
    }
    // No.91
    // ê‡ñæ:819a
    // 0x819a (Windows-31J)
    // 0x2605 (UTF-16BE)
    if (argCheck == 'Åö') {
        return true;
    }
    // No.92
    // ê‡ñæ:819b
    // 0x819b (Windows-31J)
    // 0x25cb (UTF-16BE)
    if (argCheck == 'Åõ') {
        return true;
    }
    // No.93
    // ê‡ñæ:819c
    // 0x819c (Windows-31J)
    // 0x25cf (UTF-16BE)
    if (argCheck == 'Åú') {
        return true;
    }
    // No.94
    // ê‡ñæ:819d
    // 0x819d (Windows-31J)
    // 0x25ce (UTF-16BE)
    if (argCheck == 'Åù') {
        return true;
    }
    // No.95
    // ê‡ñæ:819e
    // 0x819e (Windows-31J)
    // 0x25c7 (UTF-16BE)
    if (argCheck == 'Åû') {
        return true;
    }
    // No.96
    // ê‡ñæ:819f
    // 0x819f (Windows-31J)
    // 0x25c6 (UTF-16BE)
    if (argCheck == 'Åü') {
        return true;
    }
    // No.97
    // ê‡ñæ:81a0
    // 0x81a0 (Windows-31J)
    // 0x25a1 (UTF-16BE)
    if (argCheck == 'Å†') {
        return true;
    }
    // No.98
    // ê‡ñæ:81a1
    // 0x81a1 (Windows-31J)
    // 0x25a0 (UTF-16BE)
    if (argCheck == 'Å°') {
        return true;
    }
    // No.99
    // ê‡ñæ:81a2
    // 0x81a2 (Windows-31J)
    // 0x25b3 (UTF-16BE)
    if (argCheck == 'Å¢') {
        return true;
    }
    // No.100
    // ê‡ñæ:81a3
    // 0x81a3 (Windows-31J)
    // 0x25b2 (UTF-16BE)
    if (argCheck == 'Å£') {
        return true;
    }
    // No.101
    // ê‡ñæ:81a4
    // 0x81a4 (Windows-31J)
    // 0x25bd (UTF-16BE)
    if (argCheck == 'Å§') {
        return true;
    }
    // No.102
    // ê‡ñæ:81a5
    // 0x81a5 (Windows-31J)
    // 0x25bc (UTF-16BE)
    if (argCheck == 'Å•') {
        return true;
    }
    // No.103
    // ê‡ñæ:81a6
    // 0x81a6 (Windows-31J)
    // 0x203b (UTF-16BE)
    if (argCheck == 'Å¶') {
        return true;
    }
    // No.104
    // ê‡ñæ:81a7
    // 0x81a7 (Windows-31J)
    // 0x3012 (UTF-16BE)
    if (argCheck == 'Åß') {
        return true;
    }
    // No.105
    // ê‡ñæ:81a8
    // 0x81a8 (Windows-31J)
    // 0x2192 (UTF-16BE)
    if (argCheck == 'Å®') {
        return true;
    }
    // No.106
    // ê‡ñæ:81a9
    // 0x81a9 (Windows-31J)
    // 0x2190 (UTF-16BE)
    if (argCheck == 'Å©') {
        return true;
    }
    // No.107
    // ê‡ñæ:81aa
    // 0x81aa (Windows-31J)
    // 0x2191 (UTF-16BE)
    if (argCheck == 'Å™') {
        return true;
    }
    // No.108
    // ê‡ñæ:81ab
    // 0x81ab (Windows-31J)
    // 0x2193 (UTF-16BE)
    if (argCheck == 'Å´') {
        return true;
    }
    // No.109
    // ê‡ñæ:81ac
    // 0x81ac (Windows-31J)
    // 0x3013 (UTF-16BE)
    if (argCheck == 'Å¨') {
        return true;
    }
    // No.113
    // ê‡ñæ:81b8
    // 0x81b8 (Windows-31J)
    // 0x2208 (UTF-16BE)
    if (argCheck == 'Å∏') {
        return true;
    }
    // No.114
    // ê‡ñæ:81b9
    // 0x81b9 (Windows-31J)
    // 0x220b (UTF-16BE)
    if (argCheck == 'Åπ') {
        return true;
    }
    // No.115
    // ê‡ñæ:81ba
    // 0x81ba (Windows-31J)
    // 0x2286 (UTF-16BE)
    if (argCheck == 'Å∫') {
        return true;
    }
    // No.116
    // ê‡ñæ:81bb
    // 0x81bb (Windows-31J)
    // 0x2287 (UTF-16BE)
    if (argCheck == 'Åª') {
        return true;
    }
    // No.117
    // ê‡ñæ:81bc
    // 0x81bc (Windows-31J)
    // 0x2282 (UTF-16BE)
    if (argCheck == 'Åº') {
        return true;
    }
    // No.118
    // ê‡ñæ:81bd
    // 0x81bd (Windows-31J)
    // 0x2283 (UTF-16BE)
    if (argCheck == 'ÅΩ') {
        return true;
    }
    // No.119
    // ê‡ñæ:81be
    // 0x81be (Windows-31J)
    // 0x222a (UTF-16BE)
    if (argCheck == 'Åæ') {
        return true;
    }
    // No.120
    // ê‡ñæ:81bf
    // 0x81bf (Windows-31J)
    // 0x2229 (UTF-16BE)
    if (argCheck == 'Åø') {
        return true;
    }
    // No.124
    // ê‡ñæ:81c8
    // 0x81c8 (Windows-31J)
    // 0x2227 (UTF-16BE)
    if (argCheck == 'Å»') {
        return true;
    }
    // No.125
    // ê‡ñæ:81c9
    // 0x81c9 (Windows-31J)
    // 0x2228 (UTF-16BE)
    if (argCheck == 'Å…') {
        return true;
    }
    // No.126
    // ê‡ñæ:81ca Åyèdï°ïÑçÜâªÅz(NOT SIGN) ÇÕ U+00ac(NOT SIGN) Ç∆   U+ffe2(FULLWIDTH NOT SIGN)Å©(Windows-31J)Ç∆Ç…É}ÉbÉsÉìÉOÇ≥ÇÍÇÈÅBì˙ñ{åÍï∂éöÉRÅ[ÉhéñèÓìIÇ… 00acÇ…É}ÉbÉsÉìÉOÇ∑ÇÈÇÃÇÕ åªé¿ìIÇ…ÇÕ ÇŸÇ⁄ïsâ¬î\ÅB
    // 0x81ca (Windows-31J)
    // 0xffe2 (UTF-16BE)
    if (argCheck == 'Å ') {
        return true;
    }
    // No.127
    // ê‡ñæ:81cb
    // 0x81cb (Windows-31J)
    // 0x21d2 (UTF-16BE)
    if (argCheck == 'ÅÀ') {
        return true;
    }
    // No.128
    // ê‡ñæ:81cc
    // 0x81cc (Windows-31J)
    // 0x21d4 (UTF-16BE)
    if (argCheck == 'ÅÃ') {
        return true;
    }
    // No.129
    // ê‡ñæ:81cd
    // 0x81cd (Windows-31J)
    // 0x2200 (UTF-16BE)
    if (argCheck == 'ÅÕ') {
        return true;
    }
    // No.130
    // ê‡ñæ:81ce
    // 0x81ce (Windows-31J)
    // 0x2203 (UTF-16BE)
    if (argCheck == 'ÅŒ') {
        return true;
    }
    // No.134
    // ê‡ñæ:81da
    // 0x81da (Windows-31J)
    // 0x2220 (UTF-16BE)
    if (argCheck == 'Å⁄') {
        return true;
    }
    // No.135
    // ê‡ñæ:81db
    // 0x81db (Windows-31J)
    // 0x22a5 (UTF-16BE)
    if (argCheck == 'Å€') {
        return true;
    }
    // No.136
    // ê‡ñæ:81dc
    // 0x81dc (Windows-31J)
    // 0x2312 (UTF-16BE)
    if (argCheck == 'Å‹') {
        return true;
    }
    // No.137
    // ê‡ñæ:81dd
    // 0x81dd (Windows-31J)
    // 0x2202 (UTF-16BE)
    if (argCheck == 'Å›') {
        return true;
    }
    // No.138
    // ê‡ñæ:81de
    // 0x81de (Windows-31J)
    // 0x2207 (UTF-16BE)
    if (argCheck == 'Åﬁ') {
        return true;
    }
    // No.139
    // ê‡ñæ:81df
    // 0x81df (Windows-31J)
    // 0x2261 (UTF-16BE)
    if (argCheck == 'Åﬂ') {
        return true;
    }
    // No.140
    // ê‡ñæ:81e0
    // 0x81e0 (Windows-31J)
    // 0x2252 (UTF-16BE)
    if (argCheck == 'Å‡') {
        return true;
    }
    // No.141
    // ê‡ñæ:81e1
    // 0x81e1 (Windows-31J)
    // 0x226a (UTF-16BE)
    if (argCheck == 'Å·') {
        return true;
    }
    // No.142
    // ê‡ñæ:81e2
    // 0x81e2 (Windows-31J)
    // 0x226b (UTF-16BE)
    if (argCheck == 'Å‚') {
        return true;
    }
    // No.143
    // ê‡ñæ:81e3
    // 0x81e3 (Windows-31J)
    // 0x221a (UTF-16BE)
    if (argCheck == 'Å„') {
        return true;
    }
    // No.144
    // ê‡ñæ:81e4
    // 0x81e4 (Windows-31J)
    // 0x223d (UTF-16BE)
    if (argCheck == 'Å‰') {
        return true;
    }
    // No.145
    // ê‡ñæ:81e5
    // 0x81e5 (Windows-31J)
    // 0x221d (UTF-16BE)
    if (argCheck == 'ÅÂ') {
        return true;
    }
    // No.146
    // ê‡ñæ:81e6
    // 0x81e6 (Windows-31J)
    // 0x2235 (UTF-16BE)
    if (argCheck == 'ÅÊ') {
        return true;
    }
    // No.147
    // ê‡ñæ:81e7
    // 0x81e7 (Windows-31J)
    // 0x222b (UTF-16BE)
    if (argCheck == 'ÅÁ') {
        return true;
    }
    // No.148
    // ê‡ñæ:81e8
    // 0x81e8 (Windows-31J)
    // 0x222c (UTF-16BE)
    if (argCheck == 'ÅË') {
        return true;
    }
    // No.152
    // ê‡ñæ:81f0
    // 0x81f0 (Windows-31J)
    // 0x212b (UTF-16BE)
    if (argCheck == 'Å') {
        return true;
    }
    // No.153
    // ê‡ñæ:81f1
    // 0x81f1 (Windows-31J)
    // 0x2030 (UTF-16BE)
    if (argCheck == 'ÅÒ') {
        return true;
    }
    // No.154
    // ê‡ñæ:81f2
    // 0x81f2 (Windows-31J)
    // 0x266f (UTF-16BE)
    if (argCheck == 'ÅÚ') {
        return true;
    }
    // No.155
    // ê‡ñæ:81f3
    // 0x81f3 (Windows-31J)
    // 0x266d (UTF-16BE)
    if (argCheck == 'ÅÛ') {
        return true;
    }
    // No.156
    // ê‡ñæ:81f4
    // 0x81f4 (Windows-31J)
    // 0x266a (UTF-16BE)
    if (argCheck == 'ÅÙ') {
        return true;
    }
    // No.157
    // ê‡ñæ:81f5
    // 0x81f5 (Windows-31J)
    // 0x2020 (UTF-16BE)
    if (argCheck == 'Åı') {
        return true;
    }
    // No.158
    // ê‡ñæ:81f6
    // 0x81f6 (Windows-31J)
    // 0x2021 (UTF-16BE)
    if (argCheck == 'Åˆ') {
        return true;
    }
    // No.159
    // ê‡ñæ:81f7
    // 0x81f7 (Windows-31J)
    // 0x00b6 (UTF-16BE)
    if (argCheck == 'Å˜') {
        return true;
    }
    // No.163
    // ê‡ñæ:81fc
    // 0x81fc (Windows-31J)
    // 0x25ef (UTF-16BE)
    if (argCheck == 'Å¸') {
        return true;
    }
    // No.167
    // ê‡ñæ:824f
    // 0x824f (Windows-31J)
    // 0xff10 (UTF-16BE)
    if (argCheck == 'ÇO') {
        return true;
    }
    // No.168
    // ê‡ñæ:8250
    // 0x8250 (Windows-31J)
    // 0xff11 (UTF-16BE)
    if (argCheck == 'ÇP') {
        return true;
    }
    // No.169
    // ê‡ñæ:8251
    // 0x8251 (Windows-31J)
    // 0xff12 (UTF-16BE)
    if (argCheck == 'ÇQ') {
        return true;
    }
    // No.170
    // ê‡ñæ:8252
    // 0x8252 (Windows-31J)
    // 0xff13 (UTF-16BE)
    if (argCheck == 'ÇR') {
        return true;
    }
    // No.171
    // ê‡ñæ:8253
    // 0x8253 (Windows-31J)
    // 0xff14 (UTF-16BE)
    if (argCheck == 'ÇS') {
        return true;
    }
    // No.172
    // ê‡ñæ:8254
    // 0x8254 (Windows-31J)
    // 0xff15 (UTF-16BE)
    if (argCheck == 'ÇT') {
        return true;
    }
    // No.173
    // ê‡ñæ:8255
    // 0x8255 (Windows-31J)
    // 0xff16 (UTF-16BE)
    if (argCheck == 'ÇU') {
        return true;
    }
    // No.174
    // ê‡ñæ:8256
    // 0x8256 (Windows-31J)
    // 0xff17 (UTF-16BE)
    if (argCheck == 'ÇV') {
        return true;
    }
    // No.175
    // ê‡ñæ:8257
    // 0x8257 (Windows-31J)
    // 0xff18 (UTF-16BE)
    if (argCheck == 'ÇW') {
        return true;
    }
    // No.176
    // ê‡ñæ:8258
    // 0x8258 (Windows-31J)
    // 0xff19 (UTF-16BE)
    if (argCheck == 'ÇX') {
        return true;
    }
    // No.180
    // ê‡ñæ:8260
    // 0x8260 (Windows-31J)
    // 0xff21 (UTF-16BE)
    if (argCheck == 'Ç`') {
        return true;
    }
    // No.181
    // ê‡ñæ:8261
    // 0x8261 (Windows-31J)
    // 0xff22 (UTF-16BE)
    if (argCheck == 'Ça') {
        return true;
    }
    // No.182
    // ê‡ñæ:8262
    // 0x8262 (Windows-31J)
    // 0xff23 (UTF-16BE)
    if (argCheck == 'Çb') {
        return true;
    }
    // No.183
    // ê‡ñæ:8263
    // 0x8263 (Windows-31J)
    // 0xff24 (UTF-16BE)
    if (argCheck == 'Çc') {
        return true;
    }
    // No.184
    // ê‡ñæ:8264
    // 0x8264 (Windows-31J)
    // 0xff25 (UTF-16BE)
    if (argCheck == 'Çd') {
        return true;
    }
    // No.185
    // ê‡ñæ:8265
    // 0x8265 (Windows-31J)
    // 0xff26 (UTF-16BE)
    if (argCheck == 'Çe') {
        return true;
    }
    // No.186
    // ê‡ñæ:8266
    // 0x8266 (Windows-31J)
    // 0xff27 (UTF-16BE)
    if (argCheck == 'Çf') {
        return true;
    }
    // No.187
    // ê‡ñæ:8267
    // 0x8267 (Windows-31J)
    // 0xff28 (UTF-16BE)
    if (argCheck == 'Çg') {
        return true;
    }
    // No.188
    // ê‡ñæ:8268
    // 0x8268 (Windows-31J)
    // 0xff29 (UTF-16BE)
    if (argCheck == 'Çh') {
        return true;
    }
    // No.189
    // ê‡ñæ:8269
    // 0x8269 (Windows-31J)
    // 0xff2a (UTF-16BE)
    if (argCheck == 'Çi') {
        return true;
    }
    // No.190
    // ê‡ñæ:826a
    // 0x826a (Windows-31J)
    // 0xff2b (UTF-16BE)
    if (argCheck == 'Çj') {
        return true;
    }
    // No.191
    // ê‡ñæ:826b
    // 0x826b (Windows-31J)
    // 0xff2c (UTF-16BE)
    if (argCheck == 'Çk') {
        return true;
    }
    // No.192
    // ê‡ñæ:826c
    // 0x826c (Windows-31J)
    // 0xff2d (UTF-16BE)
    if (argCheck == 'Çl') {
        return true;
    }
    // No.193
    // ê‡ñæ:826d
    // 0x826d (Windows-31J)
    // 0xff2e (UTF-16BE)
    if (argCheck == 'Çm') {
        return true;
    }
    // No.194
    // ê‡ñæ:826e
    // 0x826e (Windows-31J)
    // 0xff2f (UTF-16BE)
    if (argCheck == 'Çn') {
        return true;
    }
    // No.195
    // ê‡ñæ:826f
    // 0x826f (Windows-31J)
    // 0xff30 (UTF-16BE)
    if (argCheck == 'Ço') {
        return true;
    }
    // No.196
    // ê‡ñæ:8270
    // 0x8270 (Windows-31J)
    // 0xff31 (UTF-16BE)
    if (argCheck == 'Çp') {
        return true;
    }
    // No.197
    // ê‡ñæ:8271
    // 0x8271 (Windows-31J)
    // 0xff32 (UTF-16BE)
    if (argCheck == 'Çq') {
        return true;
    }
    // No.198
    // ê‡ñæ:8272
    // 0x8272 (Windows-31J)
    // 0xff33 (UTF-16BE)
    if (argCheck == 'Çr') {
        return true;
    }
    // No.199
    // ê‡ñæ:8273
    // 0x8273 (Windows-31J)
    // 0xff34 (UTF-16BE)
    if (argCheck == 'Çs') {
        return true;
    }
    // No.200
    // ê‡ñæ:8274
    // 0x8274 (Windows-31J)
    // 0xff35 (UTF-16BE)
    if (argCheck == 'Çt') {
        return true;
    }
    // No.201
    // ê‡ñæ:8275
    // 0x8275 (Windows-31J)
    // 0xff36 (UTF-16BE)
    if (argCheck == 'Çu') {
        return true;
    }
    // No.202
    // ê‡ñæ:8276
    // 0x8276 (Windows-31J)
    // 0xff37 (UTF-16BE)
    if (argCheck == 'Çv') {
        return true;
    }
    // No.203
    // ê‡ñæ:8277
    // 0x8277 (Windows-31J)
    // 0xff38 (UTF-16BE)
    if (argCheck == 'Çw') {
        return true;
    }
    // No.204
    // ê‡ñæ:8278
    // 0x8278 (Windows-31J)
    // 0xff39 (UTF-16BE)
    if (argCheck == 'Çx') {
        return true;
    }
    // No.205
    // ê‡ñæ:8279
    // 0x8279 (Windows-31J)
    // 0xff3a (UTF-16BE)
    if (argCheck == 'Çy') {
        return true;
    }
    // No.209
    // ê‡ñæ:8281
    // 0x8281 (Windows-31J)
    // 0xff41 (UTF-16BE)
    if (argCheck == 'ÇÅ') {
        return true;
    }
    // No.210
    // ê‡ñæ:8282
    // 0x8282 (Windows-31J)
    // 0xff42 (UTF-16BE)
    if (argCheck == 'ÇÇ') {
        return true;
    }
    // No.211
    // ê‡ñæ:8283
    // 0x8283 (Windows-31J)
    // 0xff43 (UTF-16BE)
    if (argCheck == 'ÇÉ') {
        return true;
    }
    // No.212
    // ê‡ñæ:8284
    // 0x8284 (Windows-31J)
    // 0xff44 (UTF-16BE)
    if (argCheck == 'ÇÑ') {
        return true;
    }
    // No.213
    // ê‡ñæ:8285
    // 0x8285 (Windows-31J)
    // 0xff45 (UTF-16BE)
    if (argCheck == 'ÇÖ') {
        return true;
    }
    // No.214
    // ê‡ñæ:8286
    // 0x8286 (Windows-31J)
    // 0xff46 (UTF-16BE)
    if (argCheck == 'ÇÜ') {
        return true;
    }
    // No.215
    // ê‡ñæ:8287
    // 0x8287 (Windows-31J)
    // 0xff47 (UTF-16BE)
    if (argCheck == 'Çá') {
        return true;
    }
    // No.216
    // ê‡ñæ:8288
    // 0x8288 (Windows-31J)
    // 0xff48 (UTF-16BE)
    if (argCheck == 'Çà') {
        return true;
    }
    // No.217
    // ê‡ñæ:8289
    // 0x8289 (Windows-31J)
    // 0xff49 (UTF-16BE)
    if (argCheck == 'Çâ') {
        return true;
    }
    // No.218
    // ê‡ñæ:828a
    // 0x828a (Windows-31J)
    // 0xff4a (UTF-16BE)
    if (argCheck == 'Çä') {
        return true;
    }
    // No.219
    // ê‡ñæ:828b
    // 0x828b (Windows-31J)
    // 0xff4b (UTF-16BE)
    if (argCheck == 'Çã') {
        return true;
    }
    // No.220
    // ê‡ñæ:828c
    // 0x828c (Windows-31J)
    // 0xff4c (UTF-16BE)
    if (argCheck == 'Çå') {
        return true;
    }
    // No.221
    // ê‡ñæ:828d
    // 0x828d (Windows-31J)
    // 0xff4d (UTF-16BE)
    if (argCheck == 'Çç') {
        return true;
    }
    // No.222
    // ê‡ñæ:828e
    // 0x828e (Windows-31J)
    // 0xff4e (UTF-16BE)
    if (argCheck == 'Çé') {
        return true;
    }
    // No.223
    // ê‡ñæ:828f
    // 0x828f (Windows-31J)
    // 0xff4f (UTF-16BE)
    if (argCheck == 'Çè') {
        return true;
    }
    // No.224
    // ê‡ñæ:8290
    // 0x8290 (Windows-31J)
    // 0xff50 (UTF-16BE)
    if (argCheck == 'Çê') {
        return true;
    }
    // No.225
    // ê‡ñæ:8291
    // 0x8291 (Windows-31J)
    // 0xff51 (UTF-16BE)
    if (argCheck == 'Çë') {
        return true;
    }
    // No.226
    // ê‡ñæ:8292
    // 0x8292 (Windows-31J)
    // 0xff52 (UTF-16BE)
    if (argCheck == 'Çí') {
        return true;
    }
    // No.227
    // ê‡ñæ:8293
    // 0x8293 (Windows-31J)
    // 0xff53 (UTF-16BE)
    if (argCheck == 'Çì') {
        return true;
    }
    // No.228
    // ê‡ñæ:8294
    // 0x8294 (Windows-31J)
    // 0xff54 (UTF-16BE)
    if (argCheck == 'Çî') {
        return true;
    }
    // No.229
    // ê‡ñæ:8295
    // 0x8295 (Windows-31J)
    // 0xff55 (UTF-16BE)
    if (argCheck == 'Çï') {
        return true;
    }
    // No.230
    // ê‡ñæ:8296
    // 0x8296 (Windows-31J)
    // 0xff56 (UTF-16BE)
    if (argCheck == 'Çñ') {
        return true;
    }
    // No.231
    // ê‡ñæ:8297
    // 0x8297 (Windows-31J)
    // 0xff57 (UTF-16BE)
    if (argCheck == 'Çó') {
        return true;
    }
    // No.232
    // ê‡ñæ:8298
    // 0x8298 (Windows-31J)
    // 0xff58 (UTF-16BE)
    if (argCheck == 'Çò') {
        return true;
    }
    // No.233
    // ê‡ñæ:8299
    // 0x8299 (Windows-31J)
    // 0xff59 (UTF-16BE)
    if (argCheck == 'Çô') {
        return true;
    }
    // No.234
    // ê‡ñæ:829a
    // 0x829a (Windows-31J)
    // 0xff5a (UTF-16BE)
    if (argCheck == 'Çö') {
        return true;
    }
    // No.238
    // ê‡ñæ:829f
    // 0x829f (Windows-31J)
    // 0x3041 (UTF-16BE)
    if (argCheck == 'Çü') {
        return true;
    }
    // No.239
    // ê‡ñæ:82a0
    // 0x82a0 (Windows-31J)
    // 0x3042 (UTF-16BE)
    if (argCheck == 'Ç†') {
        return true;
    }
    // No.240
    // ê‡ñæ:82a1
    // 0x82a1 (Windows-31J)
    // 0x3043 (UTF-16BE)
    if (argCheck == 'Ç°') {
        return true;
    }
    // No.241
    // ê‡ñæ:82a2
    // 0x82a2 (Windows-31J)
    // 0x3044 (UTF-16BE)
    if (argCheck == 'Ç¢') {
        return true;
    }
    // No.242
    // ê‡ñæ:82a3
    // 0x82a3 (Windows-31J)
    // 0x3045 (UTF-16BE)
    if (argCheck == 'Ç£') {
        return true;
    }
    // No.243
    // ê‡ñæ:82a4
    // 0x82a4 (Windows-31J)
    // 0x3046 (UTF-16BE)
    if (argCheck == 'Ç§') {
        return true;
    }
    // No.244
    // ê‡ñæ:82a5
    // 0x82a5 (Windows-31J)
    // 0x3047 (UTF-16BE)
    if (argCheck == 'Ç•') {
        return true;
    }
    // No.245
    // ê‡ñæ:82a6
    // 0x82a6 (Windows-31J)
    // 0x3048 (UTF-16BE)
    if (argCheck == 'Ç¶') {
        return true;
    }
    // No.246
    // ê‡ñæ:82a7
    // 0x82a7 (Windows-31J)
    // 0x3049 (UTF-16BE)
    if (argCheck == 'Çß') {
        return true;
    }
    // No.247
    // ê‡ñæ:82a8
    // 0x82a8 (Windows-31J)
    // 0x304a (UTF-16BE)
    if (argCheck == 'Ç®') {
        return true;
    }
    // No.248
    // ê‡ñæ:82a9
    // 0x82a9 (Windows-31J)
    // 0x304b (UTF-16BE)
    if (argCheck == 'Ç©') {
        return true;
    }
    // No.249
    // ê‡ñæ:82aa
    // 0x82aa (Windows-31J)
    // 0x304c (UTF-16BE)
    if (argCheck == 'Ç™') {
        return true;
    }
    // No.250
    // ê‡ñæ:82ab
    // 0x82ab (Windows-31J)
    // 0x304d (UTF-16BE)
    if (argCheck == 'Ç´') {
        return true;
    }
    // No.251
    // ê‡ñæ:82ac
    // 0x82ac (Windows-31J)
    // 0x304e (UTF-16BE)
    if (argCheck == 'Ç¨') {
        return true;
    }
    // No.252
    // ê‡ñæ:82ad
    // 0x82ad (Windows-31J)
    // 0x304f (UTF-16BE)
    if (argCheck == 'Ç≠') {
        return true;
    }
    // No.253
    // ê‡ñæ:82ae
    // 0x82ae (Windows-31J)
    // 0x3050 (UTF-16BE)
    if (argCheck == 'ÇÆ') {
        return true;
    }
    // No.254
    // ê‡ñæ:82af
    // 0x82af (Windows-31J)
    // 0x3051 (UTF-16BE)
    if (argCheck == 'ÇØ') {
        return true;
    }
    // No.255
    // ê‡ñæ:82b0
    // 0x82b0 (Windows-31J)
    // 0x3052 (UTF-16BE)
    if (argCheck == 'Ç∞') {
        return true;
    }
    // No.256
    // ê‡ñæ:82b1
    // 0x82b1 (Windows-31J)
    // 0x3053 (UTF-16BE)
    if (argCheck == 'Ç±') {
        return true;
    }
    // No.257
    // ê‡ñæ:82b2
    // 0x82b2 (Windows-31J)
    // 0x3054 (UTF-16BE)
    if (argCheck == 'Ç≤') {
        return true;
    }
    // No.258
    // ê‡ñæ:82b3
    // 0x82b3 (Windows-31J)
    // 0x3055 (UTF-16BE)
    if (argCheck == 'Ç≥') {
        return true;
    }
    // No.259
    // ê‡ñæ:82b4
    // 0x82b4 (Windows-31J)
    // 0x3056 (UTF-16BE)
    if (argCheck == 'Ç¥') {
        return true;
    }
    // No.260
    // ê‡ñæ:82b5
    // 0x82b5 (Windows-31J)
    // 0x3057 (UTF-16BE)
    if (argCheck == 'Çµ') {
        return true;
    }
    // No.261
    // ê‡ñæ:82b6
    // 0x82b6 (Windows-31J)
    // 0x3058 (UTF-16BE)
    if (argCheck == 'Ç∂') {
        return true;
    }
    // No.262
    // ê‡ñæ:82b7
    // 0x82b7 (Windows-31J)
    // 0x3059 (UTF-16BE)
    if (argCheck == 'Ç∑') {
        return true;
    }
    // No.263
    // ê‡ñæ:82b8
    // 0x82b8 (Windows-31J)
    // 0x305a (UTF-16BE)
    if (argCheck == 'Ç∏') {
        return true;
    }
    // No.264
    // ê‡ñæ:82b9
    // 0x82b9 (Windows-31J)
    // 0x305b (UTF-16BE)
    if (argCheck == 'Çπ') {
        return true;
    }
    // No.265
    // ê‡ñæ:82ba
    // 0x82ba (Windows-31J)
    // 0x305c (UTF-16BE)
    if (argCheck == 'Ç∫') {
        return true;
    }
    // No.266
    // ê‡ñæ:82bb
    // 0x82bb (Windows-31J)
    // 0x305d (UTF-16BE)
    if (argCheck == 'Çª') {
        return true;
    }
    // No.267
    // ê‡ñæ:82bc
    // 0x82bc (Windows-31J)
    // 0x305e (UTF-16BE)
    if (argCheck == 'Çº') {
        return true;
    }
    // No.268
    // ê‡ñæ:82bd
    // 0x82bd (Windows-31J)
    // 0x305f (UTF-16BE)
    if (argCheck == 'ÇΩ') {
        return true;
    }
    // No.269
    // ê‡ñæ:82be
    // 0x82be (Windows-31J)
    // 0x3060 (UTF-16BE)
    if (argCheck == 'Çæ') {
        return true;
    }
    // No.270
    // ê‡ñæ:82bf
    // 0x82bf (Windows-31J)
    // 0x3061 (UTF-16BE)
    if (argCheck == 'Çø') {
        return true;
    }
    // No.271
    // ê‡ñæ:82c0
    // 0x82c0 (Windows-31J)
    // 0x3062 (UTF-16BE)
    if (argCheck == 'Ç¿') {
        return true;
    }
    // No.272
    // ê‡ñæ:82c1
    // 0x82c1 (Windows-31J)
    // 0x3063 (UTF-16BE)
    if (argCheck == 'Ç¡') {
        return true;
    }
    // No.273
    // ê‡ñæ:82c2
    // 0x82c2 (Windows-31J)
    // 0x3064 (UTF-16BE)
    if (argCheck == 'Ç¬') {
        return true;
    }
    // No.274
    // ê‡ñæ:82c3
    // 0x82c3 (Windows-31J)
    // 0x3065 (UTF-16BE)
    if (argCheck == 'Ç√') {
        return true;
    }
    // No.275
    // ê‡ñæ:82c4
    // 0x82c4 (Windows-31J)
    // 0x3066 (UTF-16BE)
    if (argCheck == 'Çƒ') {
        return true;
    }
    // No.276
    // ê‡ñæ:82c5
    // 0x82c5 (Windows-31J)
    // 0x3067 (UTF-16BE)
    if (argCheck == 'Ç≈') {
        return true;
    }
    // No.277
    // ê‡ñæ:82c6
    // 0x82c6 (Windows-31J)
    // 0x3068 (UTF-16BE)
    if (argCheck == 'Ç∆') {
        return true;
    }
    // No.278
    // ê‡ñæ:82c7
    // 0x82c7 (Windows-31J)
    // 0x3069 (UTF-16BE)
    if (argCheck == 'Ç«') {
        return true;
    }
    // No.279
    // ê‡ñæ:82c8
    // 0x82c8 (Windows-31J)
    // 0x306a (UTF-16BE)
    if (argCheck == 'Ç»') {
        return true;
    }
    // No.280
    // ê‡ñæ:82c9
    // 0x82c9 (Windows-31J)
    // 0x306b (UTF-16BE)
    if (argCheck == 'Ç…') {
        return true;
    }
    // No.281
    // ê‡ñæ:82ca
    // 0x82ca (Windows-31J)
    // 0x306c (UTF-16BE)
    if (argCheck == 'Ç ') {
        return true;
    }
    // No.282
    // ê‡ñæ:82cb
    // 0x82cb (Windows-31J)
    // 0x306d (UTF-16BE)
    if (argCheck == 'ÇÀ') {
        return true;
    }
    // No.283
    // ê‡ñæ:82cc
    // 0x82cc (Windows-31J)
    // 0x306e (UTF-16BE)
    if (argCheck == 'ÇÃ') {
        return true;
    }
    // No.284
    // ê‡ñæ:82cd
    // 0x82cd (Windows-31J)
    // 0x306f (UTF-16BE)
    if (argCheck == 'ÇÕ') {
        return true;
    }
    // No.285
    // ê‡ñæ:82ce
    // 0x82ce (Windows-31J)
    // 0x3070 (UTF-16BE)
    if (argCheck == 'ÇŒ') {
        return true;
    }
    // No.286
    // ê‡ñæ:82cf
    // 0x82cf (Windows-31J)
    // 0x3071 (UTF-16BE)
    if (argCheck == 'Çœ') {
        return true;
    }
    // No.287
    // ê‡ñæ:82d0
    // 0x82d0 (Windows-31J)
    // 0x3072 (UTF-16BE)
    if (argCheck == 'Ç–') {
        return true;
    }
    // No.288
    // ê‡ñæ:82d1
    // 0x82d1 (Windows-31J)
    // 0x3073 (UTF-16BE)
    if (argCheck == 'Ç—') {
        return true;
    }
    // No.289
    // ê‡ñæ:82d2
    // 0x82d2 (Windows-31J)
    // 0x3074 (UTF-16BE)
    if (argCheck == 'Ç“') {
        return true;
    }
    // No.290
    // ê‡ñæ:82d3
    // 0x82d3 (Windows-31J)
    // 0x3075 (UTF-16BE)
    if (argCheck == 'Ç”') {
        return true;
    }
    // No.291
    // ê‡ñæ:82d4
    // 0x82d4 (Windows-31J)
    // 0x3076 (UTF-16BE)
    if (argCheck == 'Ç‘') {
        return true;
    }
    // No.292
    // ê‡ñæ:82d5
    // 0x82d5 (Windows-31J)
    // 0x3077 (UTF-16BE)
    if (argCheck == 'Ç’') {
        return true;
    }
    // No.293
    // ê‡ñæ:82d6
    // 0x82d6 (Windows-31J)
    // 0x3078 (UTF-16BE)
    if (argCheck == 'Ç÷') {
        return true;
    }
    // No.294
    // ê‡ñæ:82d7
    // 0x82d7 (Windows-31J)
    // 0x3079 (UTF-16BE)
    if (argCheck == 'Ç◊') {
        return true;
    }
    // No.295
    // ê‡ñæ:82d8
    // 0x82d8 (Windows-31J)
    // 0x307a (UTF-16BE)
    if (argCheck == 'Çÿ') {
        return true;
    }
    // No.296
    // ê‡ñæ:82d9
    // 0x82d9 (Windows-31J)
    // 0x307b (UTF-16BE)
    if (argCheck == 'ÇŸ') {
        return true;
    }
    // No.297
    // ê‡ñæ:82da
    // 0x82da (Windows-31J)
    // 0x307c (UTF-16BE)
    if (argCheck == 'Ç⁄') {
        return true;
    }
    // No.298
    // ê‡ñæ:82db
    // 0x82db (Windows-31J)
    // 0x307d (UTF-16BE)
    if (argCheck == 'Ç€') {
        return true;
    }
    // No.299
    // ê‡ñæ:82dc
    // 0x82dc (Windows-31J)
    // 0x307e (UTF-16BE)
    if (argCheck == 'Ç‹') {
        return true;
    }
    // No.300
    // ê‡ñæ:82dd
    // 0x82dd (Windows-31J)
    // 0x307f (UTF-16BE)
    if (argCheck == 'Ç›') {
        return true;
    }
    // No.301
    // ê‡ñæ:82de
    // 0x82de (Windows-31J)
    // 0x3080 (UTF-16BE)
    if (argCheck == 'Çﬁ') {
        return true;
    }
    // No.302
    // ê‡ñæ:82df
    // 0x82df (Windows-31J)
    // 0x3081 (UTF-16BE)
    if (argCheck == 'Çﬂ') {
        return true;
    }
    // No.303
    // ê‡ñæ:82e0
    // 0x82e0 (Windows-31J)
    // 0x3082 (UTF-16BE)
    if (argCheck == 'Ç‡') {
        return true;
    }
    // No.304
    // ê‡ñæ:82e1
    // 0x82e1 (Windows-31J)
    // 0x3083 (UTF-16BE)
    if (argCheck == 'Ç·') {
        return true;
    }
    // No.305
    // ê‡ñæ:82e2
    // 0x82e2 (Windows-31J)
    // 0x3084 (UTF-16BE)
    if (argCheck == 'Ç‚') {
        return true;
    }
    // No.306
    // ê‡ñæ:82e3
    // 0x82e3 (Windows-31J)
    // 0x3085 (UTF-16BE)
    if (argCheck == 'Ç„') {
        return true;
    }
    // No.307
    // ê‡ñæ:82e4
    // 0x82e4 (Windows-31J)
    // 0x3086 (UTF-16BE)
    if (argCheck == 'Ç‰') {
        return true;
    }
    // No.308
    // ê‡ñæ:82e5
    // 0x82e5 (Windows-31J)
    // 0x3087 (UTF-16BE)
    if (argCheck == 'ÇÂ') {
        return true;
    }
    // No.309
    // ê‡ñæ:82e6
    // 0x82e6 (Windows-31J)
    // 0x3088 (UTF-16BE)
    if (argCheck == 'ÇÊ') {
        return true;
    }
    // No.310
    // ê‡ñæ:82e7
    // 0x82e7 (Windows-31J)
    // 0x3089 (UTF-16BE)
    if (argCheck == 'ÇÁ') {
        return true;
    }
    // No.311
    // ê‡ñæ:82e8
    // 0x82e8 (Windows-31J)
    // 0x308a (UTF-16BE)
    if (argCheck == 'ÇË') {
        return true;
    }
    // No.312
    // ê‡ñæ:82e9
    // 0x82e9 (Windows-31J)
    // 0x308b (UTF-16BE)
    if (argCheck == 'ÇÈ') {
        return true;
    }
    // No.313
    // ê‡ñæ:82ea
    // 0x82ea (Windows-31J)
    // 0x308c (UTF-16BE)
    if (argCheck == 'ÇÍ') {
        return true;
    }
    // No.314
    // ê‡ñæ:82eb
    // 0x82eb (Windows-31J)
    // 0x308d (UTF-16BE)
    if (argCheck == 'ÇÎ') {
        return true;
    }
    // No.315
    // ê‡ñæ:82ec
    // 0x82ec (Windows-31J)
    // 0x308e (UTF-16BE)
    if (argCheck == 'ÇÏ') {
        return true;
    }
    // No.316
    // ê‡ñæ:82ed
    // 0x82ed (Windows-31J)
    // 0x308f (UTF-16BE)
    if (argCheck == 'ÇÌ') {
        return true;
    }
    // No.317
    // ê‡ñæ:82ee
    // 0x82ee (Windows-31J)
    // 0x3090 (UTF-16BE)
    if (argCheck == 'ÇÓ') {
        return true;
    }
    // No.318
    // ê‡ñæ:82ef
    // 0x82ef (Windows-31J)
    // 0x3091 (UTF-16BE)
    if (argCheck == 'ÇÔ') {
        return true;
    }
    // No.319
    // ê‡ñæ:82f0
    // 0x82f0 (Windows-31J)
    // 0x3092 (UTF-16BE)
    if (argCheck == 'Ç') {
        return true;
    }
    // No.320
    // ê‡ñæ:82f1
    // 0x82f1 (Windows-31J)
    // 0x3093 (UTF-16BE)
    if (argCheck == 'ÇÒ') {
        return true;
    }
    // No.324
    // ê‡ñæ:8340
    // 0x8340 (Windows-31J)
    // 0x30a1 (UTF-16BE)
    if (argCheck == 'É@') {
        return true;
    }
    // No.325
    // ê‡ñæ:8341
    // 0x8341 (Windows-31J)
    // 0x30a2 (UTF-16BE)
    if (argCheck == 'ÉA') {
        return true;
    }
    // No.326
    // ê‡ñæ:8342
    // 0x8342 (Windows-31J)
    // 0x30a3 (UTF-16BE)
    if (argCheck == 'ÉB') {
        return true;
    }
    // No.327
    // ê‡ñæ:8343
    // 0x8343 (Windows-31J)
    // 0x30a4 (UTF-16BE)
    if (argCheck == 'ÉC') {
        return true;
    }
    // No.328
    // ê‡ñæ:8344
    // 0x8344 (Windows-31J)
    // 0x30a5 (UTF-16BE)
    if (argCheck == 'ÉD') {
        return true;
    }
    // No.329
    // ê‡ñæ:8345
    // 0x8345 (Windows-31J)
    // 0x30a6 (UTF-16BE)
    if (argCheck == 'ÉE') {
        return true;
    }
    // No.330
    // ê‡ñæ:8346
    // 0x8346 (Windows-31J)
    // 0x30a7 (UTF-16BE)
    if (argCheck == 'ÉF') {
        return true;
    }
    // No.331
    // ê‡ñæ:8347
    // 0x8347 (Windows-31J)
    // 0x30a8 (UTF-16BE)
    if (argCheck == 'ÉG') {
        return true;
    }
    // No.332
    // ê‡ñæ:8348
    // 0x8348 (Windows-31J)
    // 0x30a9 (UTF-16BE)
    if (argCheck == 'ÉH') {
        return true;
    }
    // No.333
    // ê‡ñæ:8349
    // 0x8349 (Windows-31J)
    // 0x30aa (UTF-16BE)
    if (argCheck == 'ÉI') {
        return true;
    }
    // No.334
    // ê‡ñæ:834a
    // 0x834a (Windows-31J)
    // 0x30ab (UTF-16BE)
    if (argCheck == 'ÉJ') {
        return true;
    }
    // No.335
    // ê‡ñæ:834b
    // 0x834b (Windows-31J)
    // 0x30ac (UTF-16BE)
    if (argCheck == 'ÉK') {
        return true;
    }
    // No.336
    // ê‡ñæ:834c
    // 0x834c (Windows-31J)
    // 0x30ad (UTF-16BE)
    if (argCheck == 'ÉL') {
        return true;
    }
    // No.337
    // ê‡ñæ:834d
    // 0x834d (Windows-31J)
    // 0x30ae (UTF-16BE)
    if (argCheck == 'ÉM') {
        return true;
    }
    // No.338
    // ê‡ñæ:834e
    // 0x834e (Windows-31J)
    // 0x30af (UTF-16BE)
    if (argCheck == 'ÉN') {
        return true;
    }
    // No.339
    // ê‡ñæ:834f
    // 0x834f (Windows-31J)
    // 0x30b0 (UTF-16BE)
    if (argCheck == 'ÉO') {
        return true;
    }
    // No.340
    // ê‡ñæ:8350
    // 0x8350 (Windows-31J)
    // 0x30b1 (UTF-16BE)
    if (argCheck == 'ÉP') {
        return true;
    }
    // No.341
    // ê‡ñæ:8351
    // 0x8351 (Windows-31J)
    // 0x30b2 (UTF-16BE)
    if (argCheck == 'ÉQ') {
        return true;
    }
    // No.342
    // ê‡ñæ:8352
    // 0x8352 (Windows-31J)
    // 0x30b3 (UTF-16BE)
    if (argCheck == 'ÉR') {
        return true;
    }
    // No.343
    // ê‡ñæ:8353
    // 0x8353 (Windows-31J)
    // 0x30b4 (UTF-16BE)
    if (argCheck == 'ÉS') {
        return true;
    }
    // No.344
    // ê‡ñæ:8354
    // 0x8354 (Windows-31J)
    // 0x30b5 (UTF-16BE)
    if (argCheck == 'ÉT') {
        return true;
    }
    // No.345
    // ê‡ñæ:8355
    // 0x8355 (Windows-31J)
    // 0x30b6 (UTF-16BE)
    if (argCheck == 'ÉU') {
        return true;
    }
    // No.346
    // ê‡ñæ:8356
    // 0x8356 (Windows-31J)
    // 0x30b7 (UTF-16BE)
    if (argCheck == 'ÉV') {
        return true;
    }
    // No.347
    // ê‡ñæ:8357
    // 0x8357 (Windows-31J)
    // 0x30b8 (UTF-16BE)
    if (argCheck == 'ÉW') {
        return true;
    }
    // No.348
    // ê‡ñæ:8358
    // 0x8358 (Windows-31J)
    // 0x30b9 (UTF-16BE)
    if (argCheck == 'ÉX') {
        return true;
    }
    // No.349
    // ê‡ñæ:8359
    // 0x8359 (Windows-31J)
    // 0x30ba (UTF-16BE)
    if (argCheck == 'ÉY') {
        return true;
    }
    // No.350
    // ê‡ñæ:835a
    // 0x835a (Windows-31J)
    // 0x30bb (UTF-16BE)
    if (argCheck == 'ÉZ') {
        return true;
    }
    // No.351
    // ê‡ñæ:835b
    // 0x835b (Windows-31J)
    // 0x30bc (UTF-16BE)
    if (argCheck == 'É[') {
        return true;
    }
    // No.352
    // ê‡ñæ:835c
    // 0x835c (Windows-31J)
    // 0x30bd (UTF-16BE)
    if (argCheck == 'É\') {
        return true;
    }
    // No.353
    // ê‡ñæ:835d
    // 0x835d (Windows-31J)
    // 0x30be (UTF-16BE)
    if (argCheck == 'É]') {
        return true;
    }
    // No.354
    // ê‡ñæ:835e
    // 0x835e (Windows-31J)
    // 0x30bf (UTF-16BE)
    if (argCheck == 'É^') {
        return true;
    }
    // No.355
    // ê‡ñæ:835f
    // 0x835f (Windows-31J)
    // 0x30c0 (UTF-16BE)
    if (argCheck == 'É_') {
        return true;
    }
    // No.356
    // ê‡ñæ:8360
    // 0x8360 (Windows-31J)
    // 0x30c1 (UTF-16BE)
    if (argCheck == 'É`') {
        return true;
    }
    // No.357
    // ê‡ñæ:8361
    // 0x8361 (Windows-31J)
    // 0x30c2 (UTF-16BE)
    if (argCheck == 'Éa') {
        return true;
    }
    // No.358
    // ê‡ñæ:8362
    // 0x8362 (Windows-31J)
    // 0x30c3 (UTF-16BE)
    if (argCheck == 'Éb') {
        return true;
    }
    // No.359
    // ê‡ñæ:8363
    // 0x8363 (Windows-31J)
    // 0x30c4 (UTF-16BE)
    if (argCheck == 'Éc') {
        return true;
    }
    // No.360
    // ê‡ñæ:8364
    // 0x8364 (Windows-31J)
    // 0x30c5 (UTF-16BE)
    if (argCheck == 'Éd') {
        return true;
    }
    // No.361
    // ê‡ñæ:8365
    // 0x8365 (Windows-31J)
    // 0x30c6 (UTF-16BE)
    if (argCheck == 'Ée') {
        return true;
    }
    // No.362
    // ê‡ñæ:8366
    // 0x8366 (Windows-31J)
    // 0x30c7 (UTF-16BE)
    if (argCheck == 'Éf') {
        return true;
    }
    // No.363
    // ê‡ñæ:8367
    // 0x8367 (Windows-31J)
    // 0x30c8 (UTF-16BE)
    if (argCheck == 'Ég') {
        return true;
    }
    // No.364
    // ê‡ñæ:8368
    // 0x8368 (Windows-31J)
    // 0x30c9 (UTF-16BE)
    if (argCheck == 'Éh') {
        return true;
    }
    // No.365
    // ê‡ñæ:8369
    // 0x8369 (Windows-31J)
    // 0x30ca (UTF-16BE)
    if (argCheck == 'Éi') {
        return true;
    }
    // No.366
    // ê‡ñæ:836a
    // 0x836a (Windows-31J)
    // 0x30cb (UTF-16BE)
    if (argCheck == 'Éj') {
        return true;
    }
    // No.367
    // ê‡ñæ:836b
    // 0x836b (Windows-31J)
    // 0x30cc (UTF-16BE)
    if (argCheck == 'Ék') {
        return true;
    }
    // No.368
    // ê‡ñæ:836c
    // 0x836c (Windows-31J)
    // 0x30cd (UTF-16BE)
    if (argCheck == 'Él') {
        return true;
    }
    // No.369
    // ê‡ñæ:836d
    // 0x836d (Windows-31J)
    // 0x30ce (UTF-16BE)
    if (argCheck == 'Ém') {
        return true;
    }
    // No.370
    // ê‡ñæ:836e
    // 0x836e (Windows-31J)
    // 0x30cf (UTF-16BE)
    if (argCheck == 'Én') {
        return true;
    }
    // No.371
    // ê‡ñæ:836f
    // 0x836f (Windows-31J)
    // 0x30d0 (UTF-16BE)
    if (argCheck == 'Éo') {
        return true;
    }
    // No.372
    // ê‡ñæ:8370
    // 0x8370 (Windows-31J)
    // 0x30d1 (UTF-16BE)
    if (argCheck == 'Ép') {
        return true;
    }
    // No.373
    // ê‡ñæ:8371
    // 0x8371 (Windows-31J)
    // 0x30d2 (UTF-16BE)
    if (argCheck == 'Éq') {
        return true;
    }
    // No.374
    // ê‡ñæ:8372
    // 0x8372 (Windows-31J)
    // 0x30d3 (UTF-16BE)
    if (argCheck == 'Ér') {
        return true;
    }
    // No.375
    // ê‡ñæ:8373
    // 0x8373 (Windows-31J)
    // 0x30d4 (UTF-16BE)
    if (argCheck == 'És') {
        return true;
    }
    // No.376
    // ê‡ñæ:8374
    // 0x8374 (Windows-31J)
    // 0x30d5 (UTF-16BE)
    if (argCheck == 'Ét') {
        return true;
    }
    // No.377
    // ê‡ñæ:8375
    // 0x8375 (Windows-31J)
    // 0x30d6 (UTF-16BE)
    if (argCheck == 'Éu') {
        return true;
    }
    // No.378
    // ê‡ñæ:8376
    // 0x8376 (Windows-31J)
    // 0x30d7 (UTF-16BE)
    if (argCheck == 'Év') {
        return true;
    }
    // No.379
    // ê‡ñæ:8377
    // 0x8377 (Windows-31J)
    // 0x30d8 (UTF-16BE)
    if (argCheck == 'Éw') {
        return true;
    }
    // No.380
    // ê‡ñæ:8378
    // 0x8378 (Windows-31J)
    // 0x30d9 (UTF-16BE)
    if (argCheck == 'Éx') {
        return true;
    }
    // No.381
    // ê‡ñæ:8379
    // 0x8379 (Windows-31J)
    // 0x30da (UTF-16BE)
    if (argCheck == 'Éy') {
        return true;
    }
    // No.382
    // ê‡ñæ:837a
    // 0x837a (Windows-31J)
    // 0x30db (UTF-16BE)
    if (argCheck == 'Éz') {
        return true;
    }
    // No.383
    // ê‡ñæ:837b
    // 0x837b (Windows-31J)
    // 0x30dc (UTF-16BE)
    if (argCheck == 'É{') {
        return true;
    }
    // No.384
    // ê‡ñæ:837c
    // 0x837c (Windows-31J)
    // 0x30dd (UTF-16BE)
    if (argCheck == 'É|') {
        return true;
    }
    // No.385
    // ê‡ñæ:837d
    // 0x837d (Windows-31J)
    // 0x30de (UTF-16BE)
    if (argCheck == 'É}') {
        return true;
    }
    // No.386
    // ê‡ñæ:837e
    // 0x837e (Windows-31J)
    // 0x30df (UTF-16BE)
    if (argCheck == 'É~') {
        return true;
    }
    // No.387
    // ê‡ñæ:8380
    // 0x8380 (Windows-31J)
    // 0x30e0 (UTF-16BE)
    if (argCheck == 'ÉÄ') {
        return true;
    }
    // No.388
    // ê‡ñæ:8381
    // 0x8381 (Windows-31J)
    // 0x30e1 (UTF-16BE)
    if (argCheck == 'ÉÅ') {
        return true;
    }
    // No.389
    // ê‡ñæ:8382
    // 0x8382 (Windows-31J)
    // 0x30e2 (UTF-16BE)
    if (argCheck == 'ÉÇ') {
        return true;
    }
    // No.390
    // ê‡ñæ:8383
    // 0x8383 (Windows-31J)
    // 0x30e3 (UTF-16BE)
    if (argCheck == 'ÉÉ') {
        return true;
    }
    // No.391
    // ê‡ñæ:8384
    // 0x8384 (Windows-31J)
    // 0x30e4 (UTF-16BE)
    if (argCheck == 'ÉÑ') {
        return true;
    }
    // No.392
    // ê‡ñæ:8385
    // 0x8385 (Windows-31J)
    // 0x30e5 (UTF-16BE)
    if (argCheck == 'ÉÖ') {
        return true;
    }
    // No.393
    // ê‡ñæ:8386
    // 0x8386 (Windows-31J)
    // 0x30e6 (UTF-16BE)
    if (argCheck == 'ÉÜ') {
        return true;
    }
    // No.394
    // ê‡ñæ:8387
    // 0x8387 (Windows-31J)
    // 0x30e7 (UTF-16BE)
    if (argCheck == 'Éá') {
        return true;
    }
    // No.395
    // ê‡ñæ:8388
    // 0x8388 (Windows-31J)
    // 0x30e8 (UTF-16BE)
    if (argCheck == 'Éà') {
        return true;
    }
    // No.396
    // ê‡ñæ:8389
    // 0x8389 (Windows-31J)
    // 0x30e9 (UTF-16BE)
    if (argCheck == 'Éâ') {
        return true;
    }
    // No.397
    // ê‡ñæ:838a
    // 0x838a (Windows-31J)
    // 0x30ea (UTF-16BE)
    if (argCheck == 'Éä') {
        return true;
    }
    // No.398
    // ê‡ñæ:838b
    // 0x838b (Windows-31J)
    // 0x30eb (UTF-16BE)
    if (argCheck == 'Éã') {
        return true;
    }
    // No.399
    // ê‡ñæ:838c
    // 0x838c (Windows-31J)
    // 0x30ec (UTF-16BE)
    if (argCheck == 'Éå') {
        return true;
    }
    // No.400
    // ê‡ñæ:838d
    // 0x838d (Windows-31J)
    // 0x30ed (UTF-16BE)
    if (argCheck == 'Éç') {
        return true;
    }
    // No.401
    // ê‡ñæ:838e
    // 0x838e (Windows-31J)
    // 0x30ee (UTF-16BE)
    if (argCheck == 'Éé') {
        return true;
    }
    // No.402
    // ê‡ñæ:838f
    // 0x838f (Windows-31J)
    // 0x30ef (UTF-16BE)
    if (argCheck == 'Éè') {
        return true;
    }
    // No.403
    // ê‡ñæ:8390
    // 0x8390 (Windows-31J)
    // 0x30f0 (UTF-16BE)
    if (argCheck == 'Éê') {
        return true;
    }
    // No.404
    // ê‡ñæ:8391
    // 0x8391 (Windows-31J)
    // 0x30f1 (UTF-16BE)
    if (argCheck == 'Éë') {
        return true;
    }
    // No.405
    // ê‡ñæ:8392
    // 0x8392 (Windows-31J)
    // 0x30f2 (UTF-16BE)
    if (argCheck == 'Éí') {
        return true;
    }
    // No.406
    // ê‡ñæ:8393
    // 0x8393 (Windows-31J)
    // 0x30f3 (UTF-16BE)
    if (argCheck == 'Éì') {
        return true;
    }
    // No.407
    // ê‡ñæ:8394
    // 0x8394 (Windows-31J)
    // 0x30f4 (UTF-16BE)
    if (argCheck == 'Éî') {
        return true;
    }
    // No.408
    // ê‡ñæ:8395
    // 0x8395 (Windows-31J)
    // 0x30f5 (UTF-16BE)
    if (argCheck == 'Éï') {
        return true;
    }
    // No.409
    // ê‡ñæ:8396
    // 0x8396 (Windows-31J)
    // 0x30f6 (UTF-16BE)
    if (argCheck == 'Éñ') {
        return true;
    }
    // No.413
    // ê‡ñæ:839f
    // 0x839f (Windows-31J)
    // 0x0391 (UTF-16BE)
    if (argCheck == 'Éü') {
        return true;
    }
    // No.414
    // ê‡ñæ:83a0
    // 0x83a0 (Windows-31J)
    // 0x0392 (UTF-16BE)
    if (argCheck == 'É†') {
        return true;
    }
    // No.415
    // ê‡ñæ:83a1
    // 0x83a1 (Windows-31J)
    // 0x0393 (UTF-16BE)
    if (argCheck == 'É°') {
        return true;
    }
    // No.416
    // ê‡ñæ:83a2
    // 0x83a2 (Windows-31J)
    // 0x0394 (UTF-16BE)
    if (argCheck == 'É¢') {
        return true;
    }
    // No.417
    // ê‡ñæ:83a3
    // 0x83a3 (Windows-31J)
    // 0x0395 (UTF-16BE)
    if (argCheck == 'É£') {
        return true;
    }
    // No.418
    // ê‡ñæ:83a4
    // 0x83a4 (Windows-31J)
    // 0x0396 (UTF-16BE)
    if (argCheck == 'É§') {
        return true;
    }
    // No.419
    // ê‡ñæ:83a5
    // 0x83a5 (Windows-31J)
    // 0x0397 (UTF-16BE)
    if (argCheck == 'É•') {
        return true;
    }
    // No.420
    // ê‡ñæ:83a6
    // 0x83a6 (Windows-31J)
    // 0x0398 (UTF-16BE)
    if (argCheck == 'É¶') {
        return true;
    }
    // No.421
    // ê‡ñæ:83a7
    // 0x83a7 (Windows-31J)
    // 0x0399 (UTF-16BE)
    if (argCheck == 'Éß') {
        return true;
    }
    // No.422
    // ê‡ñæ:83a8
    // 0x83a8 (Windows-31J)
    // 0x039a (UTF-16BE)
    if (argCheck == 'É®') {
        return true;
    }
    // No.423
    // ê‡ñæ:83a9
    // 0x83a9 (Windows-31J)
    // 0x039b (UTF-16BE)
    if (argCheck == 'É©') {
        return true;
    }
    // No.424
    // ê‡ñæ:83aa
    // 0x83aa (Windows-31J)
    // 0x039c (UTF-16BE)
    if (argCheck == 'É™') {
        return true;
    }
    // No.425
    // ê‡ñæ:83ab
    // 0x83ab (Windows-31J)
    // 0x039d (UTF-16BE)
    if (argCheck == 'É´') {
        return true;
    }
    // No.426
    // ê‡ñæ:83ac
    // 0x83ac (Windows-31J)
    // 0x039e (UTF-16BE)
    if (argCheck == 'É¨') {
        return true;
    }
    // No.427
    // ê‡ñæ:83ad
    // 0x83ad (Windows-31J)
    // 0x039f (UTF-16BE)
    if (argCheck == 'É≠') {
        return true;
    }
    // No.428
    // ê‡ñæ:83ae
    // 0x83ae (Windows-31J)
    // 0x03a0 (UTF-16BE)
    if (argCheck == 'ÉÆ') {
        return true;
    }
    // No.429
    // ê‡ñæ:83af
    // 0x83af (Windows-31J)
    // 0x03a1 (UTF-16BE)
    if (argCheck == 'ÉØ') {
        return true;
    }
    // No.430
    // ê‡ñæ:83b0
    // 0x83b0 (Windows-31J)
    // 0x03a3 (UTF-16BE)
    if (argCheck == 'É∞') {
        return true;
    }
    // No.431
    // ê‡ñæ:83b1
    // 0x83b1 (Windows-31J)
    // 0x03a4 (UTF-16BE)
    if (argCheck == 'É±') {
        return true;
    }
    // No.432
    // ê‡ñæ:83b2
    // 0x83b2 (Windows-31J)
    // 0x03a5 (UTF-16BE)
    if (argCheck == 'É≤') {
        return true;
    }
    // No.433
    // ê‡ñæ:83b3
    // 0x83b3 (Windows-31J)
    // 0x03a6 (UTF-16BE)
    if (argCheck == 'É≥') {
        return true;
    }
    // No.434
    // ê‡ñæ:83b4
    // 0x83b4 (Windows-31J)
    // 0x03a7 (UTF-16BE)
    if (argCheck == 'É¥') {
        return true;
    }
    // No.435
    // ê‡ñæ:83b5
    // 0x83b5 (Windows-31J)
    // 0x03a8 (UTF-16BE)
    if (argCheck == 'Éµ') {
        return true;
    }
    // No.436
    // ê‡ñæ:83b6
    // 0x83b6 (Windows-31J)
    // 0x03a9 (UTF-16BE)
    if (argCheck == 'É∂') {
        return true;
    }
    // No.440
    // ê‡ñæ:83bf
    // 0x83bf (Windows-31J)
    // 0x03b1 (UTF-16BE)
    if (argCheck == 'Éø') {
        return true;
    }
    // No.441
    // ê‡ñæ:83c0
    // 0x83c0 (Windows-31J)
    // 0x03b2 (UTF-16BE)
    if (argCheck == 'É¿') {
        return true;
    }
    // No.442
    // ê‡ñæ:83c1
    // 0x83c1 (Windows-31J)
    // 0x03b3 (UTF-16BE)
    if (argCheck == 'É¡') {
        return true;
    }
    // No.443
    // ê‡ñæ:83c2
    // 0x83c2 (Windows-31J)
    // 0x03b4 (UTF-16BE)
    if (argCheck == 'É¬') {
        return true;
    }
    // No.444
    // ê‡ñæ:83c3
    // 0x83c3 (Windows-31J)
    // 0x03b5 (UTF-16BE)
    if (argCheck == 'É√') {
        return true;
    }
    // No.445
    // ê‡ñæ:83c4
    // 0x83c4 (Windows-31J)
    // 0x03b6 (UTF-16BE)
    if (argCheck == 'Éƒ') {
        return true;
    }
    // No.446
    // ê‡ñæ:83c5
    // 0x83c5 (Windows-31J)
    // 0x03b7 (UTF-16BE)
    if (argCheck == 'É≈') {
        return true;
    }
    // No.447
    // ê‡ñæ:83c6
    // 0x83c6 (Windows-31J)
    // 0x03b8 (UTF-16BE)
    if (argCheck == 'É∆') {
        return true;
    }
    // No.448
    // ê‡ñæ:83c7
    // 0x83c7 (Windows-31J)
    // 0x03b9 (UTF-16BE)
    if (argCheck == 'É«') {
        return true;
    }
    // No.449
    // ê‡ñæ:83c8
    // 0x83c8 (Windows-31J)
    // 0x03ba (UTF-16BE)
    if (argCheck == 'É»') {
        return true;
    }
    // No.450
    // ê‡ñæ:83c9
    // 0x83c9 (Windows-31J)
    // 0x03bb (UTF-16BE)
    if (argCheck == 'É…') {
        return true;
    }
    // No.451
    // ê‡ñæ:83ca
    // 0x83ca (Windows-31J)
    // 0x03bc (UTF-16BE)
    if (argCheck == 'É ') {
        return true;
    }
    // No.452
    // ê‡ñæ:83cb
    // 0x83cb (Windows-31J)
    // 0x03bd (UTF-16BE)
    if (argCheck == 'ÉÀ') {
        return true;
    }
    // No.453
    // ê‡ñæ:83cc
    // 0x83cc (Windows-31J)
    // 0x03be (UTF-16BE)
    if (argCheck == 'ÉÃ') {
        return true;
    }
    // No.454
    // ê‡ñæ:83cd
    // 0x83cd (Windows-31J)
    // 0x03bf (UTF-16BE)
    if (argCheck == 'ÉÕ') {
        return true;
    }
    // No.455
    // ê‡ñæ:83ce
    // 0x83ce (Windows-31J)
    // 0x03c0 (UTF-16BE)
    if (argCheck == 'ÉŒ') {
        return true;
    }
    // No.456
    // ê‡ñæ:83cf
    // 0x83cf (Windows-31J)
    // 0x03c1 (UTF-16BE)
    if (argCheck == 'Éœ') {
        return true;
    }
    // No.457
    // ê‡ñæ:83d0
    // 0x83d0 (Windows-31J)
    // 0x03c3 (UTF-16BE)
    if (argCheck == 'É–') {
        return true;
    }
    // No.458
    // ê‡ñæ:83d1
    // 0x83d1 (Windows-31J)
    // 0x03c4 (UTF-16BE)
    if (argCheck == 'É—') {
        return true;
    }
    // No.459
    // ê‡ñæ:83d2
    // 0x83d2 (Windows-31J)
    // 0x03c5 (UTF-16BE)
    if (argCheck == 'É“') {
        return true;
    }
    // No.460
    // ê‡ñæ:83d3
    // 0x83d3 (Windows-31J)
    // 0x03c6 (UTF-16BE)
    if (argCheck == 'É”') {
        return true;
    }
    // No.461
    // ê‡ñæ:83d4
    // 0x83d4 (Windows-31J)
    // 0x03c7 (UTF-16BE)
    if (argCheck == 'É‘') {
        return true;
    }
    // No.462
    // ê‡ñæ:83d5
    // 0x83d5 (Windows-31J)
    // 0x03c8 (UTF-16BE)
    if (argCheck == 'É’') {
        return true;
    }
    // No.463
    // ê‡ñæ:83d6
    // 0x83d6 (Windows-31J)
    // 0x03c9 (UTF-16BE)
    if (argCheck == 'É÷') {
        return true;
    }
    // No.467
    // ê‡ñæ:8440
    // 0x8440 (Windows-31J)
    // 0x0410 (UTF-16BE)
    if (argCheck == 'Ñ@') {
        return true;
    }
    // No.468
    // ê‡ñæ:8441
    // 0x8441 (Windows-31J)
    // 0x0411 (UTF-16BE)
    if (argCheck == 'ÑA') {
        return true;
    }
    // No.469
    // ê‡ñæ:8442
    // 0x8442 (Windows-31J)
    // 0x0412 (UTF-16BE)
    if (argCheck == 'ÑB') {
        return true;
    }
    // No.470
    // ê‡ñæ:8443
    // 0x8443 (Windows-31J)
    // 0x0413 (UTF-16BE)
    if (argCheck == 'ÑC') {
        return true;
    }
    // No.471
    // ê‡ñæ:8444
    // 0x8444 (Windows-31J)
    // 0x0414 (UTF-16BE)
    if (argCheck == 'ÑD') {
        return true;
    }
    // No.472
    // ê‡ñæ:8445
    // 0x8445 (Windows-31J)
    // 0x0415 (UTF-16BE)
    if (argCheck == 'ÑE') {
        return true;
    }
    // No.473
    // ê‡ñæ:8446
    // 0x8446 (Windows-31J)
    // 0x0401 (UTF-16BE)
    if (argCheck == 'ÑF') {
        return true;
    }
    // No.474
    // ê‡ñæ:8447
    // 0x8447 (Windows-31J)
    // 0x0416 (UTF-16BE)
    if (argCheck == 'ÑG') {
        return true;
    }
    // No.475
    // ê‡ñæ:8448
    // 0x8448 (Windows-31J)
    // 0x0417 (UTF-16BE)
    if (argCheck == 'ÑH') {
        return true;
    }
    // No.476
    // ê‡ñæ:8449
    // 0x8449 (Windows-31J)
    // 0x0418 (UTF-16BE)
    if (argCheck == 'ÑI') {
        return true;
    }
    // No.477
    // ê‡ñæ:844a
    // 0x844a (Windows-31J)
    // 0x0419 (UTF-16BE)
    if (argCheck == 'ÑJ') {
        return true;
    }
    // No.478
    // ê‡ñæ:844b
    // 0x844b (Windows-31J)
    // 0x041a (UTF-16BE)
    if (argCheck == 'ÑK') {
        return true;
    }
    // No.479
    // ê‡ñæ:844c
    // 0x844c (Windows-31J)
    // 0x041b (UTF-16BE)
    if (argCheck == 'ÑL') {
        return true;
    }
    // No.480
    // ê‡ñæ:844d
    // 0x844d (Windows-31J)
    // 0x041c (UTF-16BE)
    if (argCheck == 'ÑM') {
        return true;
    }
    // No.481
    // ê‡ñæ:844e
    // 0x844e (Windows-31J)
    // 0x041d (UTF-16BE)
    if (argCheck == 'ÑN') {
        return true;
    }
    // No.482
    // ê‡ñæ:844f
    // 0x844f (Windows-31J)
    // 0x041e (UTF-16BE)
    if (argCheck == 'ÑO') {
        return true;
    }
    // No.483
    // ê‡ñæ:8450
    // 0x8450 (Windows-31J)
    // 0x041f (UTF-16BE)
    if (argCheck == 'ÑP') {
        return true;
    }
    // No.484
    // ê‡ñæ:8451
    // 0x8451 (Windows-31J)
    // 0x0420 (UTF-16BE)
    if (argCheck == 'ÑQ') {
        return true;
    }
    // No.485
    // ê‡ñæ:8452
    // 0x8452 (Windows-31J)
    // 0x0421 (UTF-16BE)
    if (argCheck == 'ÑR') {
        return true;
    }
    // No.486
    // ê‡ñæ:8453
    // 0x8453 (Windows-31J)
    // 0x0422 (UTF-16BE)
    if (argCheck == 'ÑS') {
        return true;
    }
    // No.487
    // ê‡ñæ:8454
    // 0x8454 (Windows-31J)
    // 0x0423 (UTF-16BE)
    if (argCheck == 'ÑT') {
        return true;
    }
    // No.488
    // ê‡ñæ:8455
    // 0x8455 (Windows-31J)
    // 0x0424 (UTF-16BE)
    if (argCheck == 'ÑU') {
        return true;
    }
    // No.489
    // ê‡ñæ:8456
    // 0x8456 (Windows-31J)
    // 0x0425 (UTF-16BE)
    if (argCheck == 'ÑV') {
        return true;
    }
    // No.490
    // ê‡ñæ:8457
    // 0x8457 (Windows-31J)
    // 0x0426 (UTF-16BE)
    if (argCheck == 'ÑW') {
        return true;
    }
    // No.491
    // ê‡ñæ:8458
    // 0x8458 (Windows-31J)
    // 0x0427 (UTF-16BE)
    if (argCheck == 'ÑX') {
        return true;
    }
    // No.492
    // ê‡ñæ:8459
    // 0x8459 (Windows-31J)
    // 0x0428 (UTF-16BE)
    if (argCheck == 'ÑY') {
        return true;
    }
    // No.493
    // ê‡ñæ:845a
    // 0x845a (Windows-31J)
    // 0x0429 (UTF-16BE)
    if (argCheck == 'ÑZ') {
        return true;
    }
    // No.494
    // ê‡ñæ:845b
    // 0x845b (Windows-31J)
    // 0x042a (UTF-16BE)
    if (argCheck == 'Ñ[') {
        return true;
    }
    // No.495
    // ê‡ñæ:845c
    // 0x845c (Windows-31J)
    // 0x042b (UTF-16BE)
    if (argCheck == 'Ñ\') {
        return true;
    }
    // No.496
    // ê‡ñæ:845d
    // 0x845d (Windows-31J)
    // 0x042c (UTF-16BE)
    if (argCheck == 'Ñ]') {
        return true;
    }
    // No.497
    // ê‡ñæ:845e
    // 0x845e (Windows-31J)
    // 0x042d (UTF-16BE)
    if (argCheck == 'Ñ^') {
        return true;
    }
    // No.498
    // ê‡ñæ:845f
    // 0x845f (Windows-31J)
    // 0x042e (UTF-16BE)
    if (argCheck == 'Ñ_') {
        return true;
    }
    // No.499
    // ê‡ñæ:8460
    // 0x8460 (Windows-31J)
    // 0x042f (UTF-16BE)
    if (argCheck == 'Ñ`') {
        return true;
    }
    // No.503
    // ê‡ñæ:8470
    // 0x8470 (Windows-31J)
    // 0x0430 (UTF-16BE)
    if (argCheck == 'Ñp') {
        return true;
    }
    // No.504
    // ê‡ñæ:8471
    // 0x8471 (Windows-31J)
    // 0x0431 (UTF-16BE)
    if (argCheck == 'Ñq') {
        return true;
    }
    // No.505
    // ê‡ñæ:8472
    // 0x8472 (Windows-31J)
    // 0x0432 (UTF-16BE)
    if (argCheck == 'Ñr') {
        return true;
    }
    // No.506
    // ê‡ñæ:8473
    // 0x8473 (Windows-31J)
    // 0x0433 (UTF-16BE)
    if (argCheck == 'Ñs') {
        return true;
    }
    // No.507
    // ê‡ñæ:8474
    // 0x8474 (Windows-31J)
    // 0x0434 (UTF-16BE)
    if (argCheck == 'Ñt') {
        return true;
    }
    // No.508
    // ê‡ñæ:8475
    // 0x8475 (Windows-31J)
    // 0x0435 (UTF-16BE)
    if (argCheck == 'Ñu') {
        return true;
    }
    // No.509
    // ê‡ñæ:8476
    // 0x8476 (Windows-31J)
    // 0x0451 (UTF-16BE)
    if (argCheck == 'Ñv') {
        return true;
    }
    // No.510
    // ê‡ñæ:8477
    // 0x8477 (Windows-31J)
    // 0x0436 (UTF-16BE)
    if (argCheck == 'Ñw') {
        return true;
    }
    // No.511
    // ê‡ñæ:8478
    // 0x8478 (Windows-31J)
    // 0x0437 (UTF-16BE)
    if (argCheck == 'Ñx') {
        return true;
    }
    // No.512
    // ê‡ñæ:8479
    // 0x8479 (Windows-31J)
    // 0x0438 (UTF-16BE)
    if (argCheck == 'Ñy') {
        return true;
    }
    // No.513
    // ê‡ñæ:847a
    // 0x847a (Windows-31J)
    // 0x0439 (UTF-16BE)
    if (argCheck == 'Ñz') {
        return true;
    }
    // No.514
    // ê‡ñæ:847b
    // 0x847b (Windows-31J)
    // 0x043a (UTF-16BE)
    if (argCheck == 'Ñ{') {
        return true;
    }
    // No.515
    // ê‡ñæ:847c
    // 0x847c (Windows-31J)
    // 0x043b (UTF-16BE)
    if (argCheck == 'Ñ|') {
        return true;
    }
    // No.516
    // ê‡ñæ:847d
    // 0x847d (Windows-31J)
    // 0x043c (UTF-16BE)
    if (argCheck == 'Ñ}') {
        return true;
    }
    // No.517
    // ê‡ñæ:847e
    // 0x847e (Windows-31J)
    // 0x043d (UTF-16BE)
    if (argCheck == 'Ñ~') {
        return true;
    }
    // No.518
    // ê‡ñæ:8480
    // 0x8480 (Windows-31J)
    // 0x043e (UTF-16BE)
    if (argCheck == 'ÑÄ') {
        return true;
    }
    // No.519
    // ê‡ñæ:8481
    // 0x8481 (Windows-31J)
    // 0x043f (UTF-16BE)
    if (argCheck == 'ÑÅ') {
        return true;
    }
    // No.520
    // ê‡ñæ:8482
    // 0x8482 (Windows-31J)
    // 0x0440 (UTF-16BE)
    if (argCheck == 'ÑÇ') {
        return true;
    }
    // No.521
    // ê‡ñæ:8483
    // 0x8483 (Windows-31J)
    // 0x0441 (UTF-16BE)
    if (argCheck == 'ÑÉ') {
        return true;
    }
    // No.522
    // ê‡ñæ:8484
    // 0x8484 (Windows-31J)
    // 0x0442 (UTF-16BE)
    if (argCheck == 'ÑÑ') {
        return true;
    }
    // No.523
    // ê‡ñæ:8485
    // 0x8485 (Windows-31J)
    // 0x0443 (UTF-16BE)
    if (argCheck == 'ÑÖ') {
        return true;
    }
    // No.524
    // ê‡ñæ:8486
    // 0x8486 (Windows-31J)
    // 0x0444 (UTF-16BE)
    if (argCheck == 'ÑÜ') {
        return true;
    }
    // No.525
    // ê‡ñæ:8487
    // 0x8487 (Windows-31J)
    // 0x0445 (UTF-16BE)
    if (argCheck == 'Ñá') {
        return true;
    }
    // No.526
    // ê‡ñæ:8488
    // 0x8488 (Windows-31J)
    // 0x0446 (UTF-16BE)
    if (argCheck == 'Ñà') {
        return true;
    }
    // No.527
    // ê‡ñæ:8489
    // 0x8489 (Windows-31J)
    // 0x0447 (UTF-16BE)
    if (argCheck == 'Ñâ') {
        return true;
    }
    // No.528
    // ê‡ñæ:848a
    // 0x848a (Windows-31J)
    // 0x0448 (UTF-16BE)
    if (argCheck == 'Ñä') {
        return true;
    }
    // No.529
    // ê‡ñæ:848b
    // 0x848b (Windows-31J)
    // 0x0449 (UTF-16BE)
    if (argCheck == 'Ñã') {
        return true;
    }
    // No.530
    // ê‡ñæ:848c
    // 0x848c (Windows-31J)
    // 0x044a (UTF-16BE)
    if (argCheck == 'Ñå') {
        return true;
    }
    // No.531
    // ê‡ñæ:848d
    // 0x848d (Windows-31J)
    // 0x044b (UTF-16BE)
    if (argCheck == 'Ñç') {
        return true;
    }
    // No.532
    // ê‡ñæ:848e
    // 0x848e (Windows-31J)
    // 0x044c (UTF-16BE)
    if (argCheck == 'Ñé') {
        return true;
    }
    // No.533
    // ê‡ñæ:848f
    // 0x848f (Windows-31J)
    // 0x044d (UTF-16BE)
    if (argCheck == 'Ñè') {
        return true;
    }
    // No.534
    // ê‡ñæ:8490
    // 0x8490 (Windows-31J)
    // 0x044e (UTF-16BE)
    if (argCheck == 'Ñê') {
        return true;
    }
    // No.535
    // ê‡ñæ:8491
    // 0x8491 (Windows-31J)
    // 0x044f (UTF-16BE)
    if (argCheck == 'Ñë') {
        return true;
    }
    // No.539
    // ê‡ñæ:849f
    // 0x849f (Windows-31J)
    // 0x2500 (UTF-16BE)
    if (argCheck == 'Ñü') {
        return true;
    }
    // No.540
    // ê‡ñæ:84a0
    // 0x84a0 (Windows-31J)
    // 0x2502 (UTF-16BE)
    if (argCheck == 'Ñ†') {
        return true;
    }
    // No.541
    // ê‡ñæ:84a1
    // 0x84a1 (Windows-31J)
    // 0x250c (UTF-16BE)
    if (argCheck == 'Ñ°') {
        return true;
    }
    // No.542
    // ê‡ñæ:84a2
    // 0x84a2 (Windows-31J)
    // 0x2510 (UTF-16BE)
    if (argCheck == 'Ñ¢') {
        return true;
    }
    // No.543
    // ê‡ñæ:84a3
    // 0x84a3 (Windows-31J)
    // 0x2518 (UTF-16BE)
    if (argCheck == 'Ñ£') {
        return true;
    }
    // No.544
    // ê‡ñæ:84a4
    // 0x84a4 (Windows-31J)
    // 0x2514 (UTF-16BE)
    if (argCheck == 'Ñ§') {
        return true;
    }
    // No.545
    // ê‡ñæ:84a5
    // 0x84a5 (Windows-31J)
    // 0x251c (UTF-16BE)
    if (argCheck == 'Ñ•') {
        return true;
    }
    // No.546
    // ê‡ñæ:84a6
    // 0x84a6 (Windows-31J)
    // 0x252c (UTF-16BE)
    if (argCheck == 'Ñ¶') {
        return true;
    }
    // No.547
    // ê‡ñæ:84a7
    // 0x84a7 (Windows-31J)
    // 0x2524 (UTF-16BE)
    if (argCheck == 'Ñß') {
        return true;
    }
    // No.548
    // ê‡ñæ:84a8
    // 0x84a8 (Windows-31J)
    // 0x2534 (UTF-16BE)
    if (argCheck == 'Ñ®') {
        return true;
    }
    // No.549
    // ê‡ñæ:84a9
    // 0x84a9 (Windows-31J)
    // 0x253c (UTF-16BE)
    if (argCheck == 'Ñ©') {
        return true;
    }
    // No.550
    // ê‡ñæ:84aa
    // 0x84aa (Windows-31J)
    // 0x2501 (UTF-16BE)
    if (argCheck == 'Ñ™') {
        return true;
    }
    // No.551
    // ê‡ñæ:84ab
    // 0x84ab (Windows-31J)
    // 0x2503 (UTF-16BE)
    if (argCheck == 'Ñ´') {
        return true;
    }
    // No.552
    // ê‡ñæ:84ac
    // 0x84ac (Windows-31J)
    // 0x250f (UTF-16BE)
    if (argCheck == 'Ñ¨') {
        return true;
    }
    // No.553
    // ê‡ñæ:84ad
    // 0x84ad (Windows-31J)
    // 0x2513 (UTF-16BE)
    if (argCheck == 'Ñ≠') {
        return true;
    }
    // No.554
    // ê‡ñæ:84ae
    // 0x84ae (Windows-31J)
    // 0x251b (UTF-16BE)
    if (argCheck == 'ÑÆ') {
        return true;
    }
    // No.555
    // ê‡ñæ:84af
    // 0x84af (Windows-31J)
    // 0x2517 (UTF-16BE)
    if (argCheck == 'ÑØ') {
        return true;
    }
    // No.556
    // ê‡ñæ:84b0
    // 0x84b0 (Windows-31J)
    // 0x2523 (UTF-16BE)
    if (argCheck == 'Ñ∞') {
        return true;
    }
    // No.557
    // ê‡ñæ:84b1
    // 0x84b1 (Windows-31J)
    // 0x2533 (UTF-16BE)
    if (argCheck == 'Ñ±') {
        return true;
    }
    // No.558
    // ê‡ñæ:84b2
    // 0x84b2 (Windows-31J)
    // 0x252b (UTF-16BE)
    if (argCheck == 'Ñ≤') {
        return true;
    }
    // No.559
    // ê‡ñæ:84b3
    // 0x84b3 (Windows-31J)
    // 0x253b (UTF-16BE)
    if (argCheck == 'Ñ≥') {
        return true;
    }
    // No.560
    // ê‡ñæ:84b4
    // 0x84b4 (Windows-31J)
    // 0x254b (UTF-16BE)
    if (argCheck == 'Ñ¥') {
        return true;
    }
    // No.561
    // ê‡ñæ:84b5
    // 0x84b5 (Windows-31J)
    // 0x2520 (UTF-16BE)
    if (argCheck == 'Ñµ') {
        return true;
    }
    // No.562
    // ê‡ñæ:84b6
    // 0x84b6 (Windows-31J)
    // 0x252f (UTF-16BE)
    if (argCheck == 'Ñ∂') {
        return true;
    }
    // No.563
    // ê‡ñæ:84b7
    // 0x84b7 (Windows-31J)
    // 0x2528 (UTF-16BE)
    if (argCheck == 'Ñ∑') {
        return true;
    }
    // No.564
    // ê‡ñæ:84b8
    // 0x84b8 (Windows-31J)
    // 0x2537 (UTF-16BE)
    if (argCheck == 'Ñ∏') {
        return true;
    }
    // No.565
    // ê‡ñæ:84b9
    // 0x84b9 (Windows-31J)
    // 0x253f (UTF-16BE)
    if (argCheck == 'Ñπ') {
        return true;
    }
    // No.566
    // ê‡ñæ:84ba
    // 0x84ba (Windows-31J)
    // 0x251d (UTF-16BE)
    if (argCheck == 'Ñ∫') {
        return true;
    }
    // No.567
    // ê‡ñæ:84bb
    // 0x84bb (Windows-31J)
    // 0x2530 (UTF-16BE)
    if (argCheck == 'Ñª') {
        return true;
    }
    // No.568
    // ê‡ñæ:84bc
    // 0x84bc (Windows-31J)
    // 0x2525 (UTF-16BE)
    if (argCheck == 'Ñº') {
        return true;
    }
    // No.569
    // ê‡ñæ:84bd
    // 0x84bd (Windows-31J)
    // 0x2538 (UTF-16BE)
    if (argCheck == 'ÑΩ') {
        return true;
    }
    // No.570
    // ê‡ñæ:84be
    // 0x84be (Windows-31J)
    // 0x2542 (UTF-16BE)
    if (argCheck == 'Ñæ') {
        return true;
    }
    // No.575
    // ê‡ñæ:889f
    // 0x889f (Windows-31J)
    // 0x4e9c (UTF-16BE)
    if (argCheck == 'àü') {
        return true;
    }
    // No.576
    // ê‡ñæ:88a0
    // 0x88a0 (Windows-31J)
    // 0x5516 (UTF-16BE)
    if (argCheck == 'à†') {
        return true;
    }
    // No.577
    // ê‡ñæ:88a1
    // 0x88a1 (Windows-31J)
    // 0x5a03 (UTF-16BE)
    if (argCheck == 'à°') {
        return true;
    }
    // No.578
    // ê‡ñæ:88a2
    // 0x88a2 (Windows-31J)
    // 0x963f (UTF-16BE)
    if (argCheck == 'à¢') {
        return true;
    }
    // No.579
    // ê‡ñæ:88a3
    // 0x88a3 (Windows-31J)
    // 0x54c0 (UTF-16BE)
    if (argCheck == 'à£') {
        return true;
    }
    // No.580
    // ê‡ñæ:88a4
    // 0x88a4 (Windows-31J)
    // 0x611b (UTF-16BE)
    if (argCheck == 'à§') {
        return true;
    }
    // No.581
    // ê‡ñæ:88a5
    // 0x88a5 (Windows-31J)
    // 0x6328 (UTF-16BE)
    if (argCheck == 'à•') {
        return true;
    }
    // No.582
    // ê‡ñæ:88a6
    // 0x88a6 (Windows-31J)
    // 0x59f6 (UTF-16BE)
    if (argCheck == 'à¶') {
        return true;
    }
    // No.583
    // ê‡ñæ:88a7
    // 0x88a7 (Windows-31J)
    // 0x9022 (UTF-16BE)
    if (argCheck == 'àß') {
        return true;
    }
    // No.584
    // ê‡ñæ:88a8
    // 0x88a8 (Windows-31J)
    // 0x8475 (UTF-16BE)
    if (argCheck == 'à®') {
        return true;
    }
    // No.585
    // ê‡ñæ:88a9
    // 0x88a9 (Windows-31J)
    // 0x831c (UTF-16BE)
    if (argCheck == 'à©') {
        return true;
    }
    // No.586
    // ê‡ñæ:88aa
    // 0x88aa (Windows-31J)
    // 0x7a50 (UTF-16BE)
    if (argCheck == 'à™') {
        return true;
    }
    // No.587
    // ê‡ñæ:88ab
    // 0x88ab (Windows-31J)
    // 0x60aa (UTF-16BE)
    if (argCheck == 'à´') {
        return true;
    }
    // No.588
    // ê‡ñæ:88ac
    // 0x88ac (Windows-31J)
    // 0x63e1 (UTF-16BE)
    if (argCheck == 'à¨') {
        return true;
    }
    // No.589
    // ê‡ñæ:88ad
    // 0x88ad (Windows-31J)
    // 0x6e25 (UTF-16BE)
    if (argCheck == 'à≠') {
        return true;
    }
    // No.590
    // ê‡ñæ:88ae
    // 0x88ae (Windows-31J)
    // 0x65ed (UTF-16BE)
    if (argCheck == 'àÆ') {
        return true;
    }
    // No.591
    // ê‡ñæ:88af
    // 0x88af (Windows-31J)
    // 0x8466 (UTF-16BE)
    if (argCheck == 'àØ') {
        return true;
    }
    // No.592
    // ê‡ñæ:88b0
    // 0x88b0 (Windows-31J)
    // 0x82a6 (UTF-16BE)
    if (argCheck == 'à∞') {
        return true;
    }
    // No.593
    // ê‡ñæ:88b1
    // 0x88b1 (Windows-31J)
    // 0x9bf5 (UTF-16BE)
    if (argCheck == 'à±') {
        return true;
    }
    // No.594
    // ê‡ñæ:88b2
    // 0x88b2 (Windows-31J)
    // 0x6893 (UTF-16BE)
    if (argCheck == 'à≤') {
        return true;
    }
    // No.595
    // ê‡ñæ:88b3
    // 0x88b3 (Windows-31J)
    // 0x5727 (UTF-16BE)
    if (argCheck == 'à≥') {
        return true;
    }
    // No.596
    // ê‡ñæ:88b4
    // 0x88b4 (Windows-31J)
    // 0x65a1 (UTF-16BE)
    if (argCheck == 'à¥') {
        return true;
    }
    // No.597
    // ê‡ñæ:88b5
    // 0x88b5 (Windows-31J)
    // 0x6271 (UTF-16BE)
    if (argCheck == 'àµ') {
        return true;
    }
    // No.598
    // ê‡ñæ:88b6
    // 0x88b6 (Windows-31J)
    // 0x5b9b (UTF-16BE)
    if (argCheck == 'à∂') {
        return true;
    }
    // No.599
    // ê‡ñæ:88b7
    // 0x88b7 (Windows-31J)
    // 0x59d0 (UTF-16BE)
    if (argCheck == 'à∑') {
        return true;
    }
    // No.600
    // ê‡ñæ:88b8
    // 0x88b8 (Windows-31J)
    // 0x867b (UTF-16BE)
    if (argCheck == 'à∏') {
        return true;
    }
    // No.601
    // ê‡ñæ:88b9
    // 0x88b9 (Windows-31J)
    // 0x98f4 (UTF-16BE)
    if (argCheck == 'àπ') {
        return true;
    }
    // No.602
    // ê‡ñæ:88ba
    // 0x88ba (Windows-31J)
    // 0x7d62 (UTF-16BE)
    if (argCheck == 'à∫') {
        return true;
    }
    // No.603
    // ê‡ñæ:88bb
    // 0x88bb (Windows-31J)
    // 0x7dbe (UTF-16BE)
    if (argCheck == 'àª') {
        return true;
    }
    // No.604
    // ê‡ñæ:88bc
    // 0x88bc (Windows-31J)
    // 0x9b8e (UTF-16BE)
    if (argCheck == 'àº') {
        return true;
    }
    // No.605
    // ê‡ñæ:88bd
    // 0x88bd (Windows-31J)
    // 0x6216 (UTF-16BE)
    if (argCheck == 'àΩ') {
        return true;
    }
    // No.606
    // ê‡ñæ:88be
    // 0x88be (Windows-31J)
    // 0x7c9f (UTF-16BE)
    if (argCheck == 'àæ') {
        return true;
    }
    // No.607
    // ê‡ñæ:88bf
    // 0x88bf (Windows-31J)
    // 0x88b7 (UTF-16BE)
    if (argCheck == 'àø') {
        return true;
    }
    // No.608
    // ê‡ñæ:88c0
    // 0x88c0 (Windows-31J)
    // 0x5b89 (UTF-16BE)
    if (argCheck == 'à¿') {
        return true;
    }
    // No.609
    // ê‡ñæ:88c1
    // 0x88c1 (Windows-31J)
    // 0x5eb5 (UTF-16BE)
    if (argCheck == 'à¡') {
        return true;
    }
    // No.610
    // ê‡ñæ:88c2
    // 0x88c2 (Windows-31J)
    // 0x6309 (UTF-16BE)
    if (argCheck == 'à¬') {
        return true;
    }
    // No.611
    // ê‡ñæ:88c3
    // 0x88c3 (Windows-31J)
    // 0x6697 (UTF-16BE)
    if (argCheck == 'à√') {
        return true;
    }
    // No.612
    // ê‡ñæ:88c4
    // 0x88c4 (Windows-31J)
    // 0x6848 (UTF-16BE)
    if (argCheck == 'àƒ') {
        return true;
    }
    // No.613
    // ê‡ñæ:88c5
    // 0x88c5 (Windows-31J)
    // 0x95c7 (UTF-16BE)
    if (argCheck == 'à≈') {
        return true;
    }
    // No.614
    // ê‡ñæ:88c6
    // 0x88c6 (Windows-31J)
    // 0x978d (UTF-16BE)
    if (argCheck == 'à∆') {
        return true;
    }
    // No.615
    // ê‡ñæ:88c7
    // 0x88c7 (Windows-31J)
    // 0x674f (UTF-16BE)
    if (argCheck == 'à«') {
        return true;
    }
    // No.616
    // ê‡ñæ:88c8
    // 0x88c8 (Windows-31J)
    // 0x4ee5 (UTF-16BE)
    if (argCheck == 'à»') {
        return true;
    }
    // No.617
    // ê‡ñæ:88c9
    // 0x88c9 (Windows-31J)
    // 0x4f0a (UTF-16BE)
    if (argCheck == 'à…') {
        return true;
    }
    // No.618
    // ê‡ñæ:88ca
    // 0x88ca (Windows-31J)
    // 0x4f4d (UTF-16BE)
    if (argCheck == 'à ') {
        return true;
    }
    // No.619
    // ê‡ñæ:88cb
    // 0x88cb (Windows-31J)
    // 0x4f9d (UTF-16BE)
    if (argCheck == 'àÀ') {
        return true;
    }
    // No.620
    // ê‡ñæ:88cc
    // 0x88cc (Windows-31J)
    // 0x5049 (UTF-16BE)
    if (argCheck == 'àÃ') {
        return true;
    }
    // No.621
    // ê‡ñæ:88cd
    // 0x88cd (Windows-31J)
    // 0x56f2 (UTF-16BE)
    if (argCheck == 'àÕ') {
        return true;
    }
    // No.622
    // ê‡ñæ:88ce
    // 0x88ce (Windows-31J)
    // 0x5937 (UTF-16BE)
    if (argCheck == 'àŒ') {
        return true;
    }
    // No.623
    // ê‡ñæ:88cf
    // 0x88cf (Windows-31J)
    // 0x59d4 (UTF-16BE)
    if (argCheck == 'àœ') {
        return true;
    }
    // No.624
    // ê‡ñæ:88d0
    // 0x88d0 (Windows-31J)
    // 0x5a01 (UTF-16BE)
    if (argCheck == 'à–') {
        return true;
    }
    // No.625
    // ê‡ñæ:88d1
    // 0x88d1 (Windows-31J)
    // 0x5c09 (UTF-16BE)
    if (argCheck == 'à—') {
        return true;
    }
    // No.626
    // ê‡ñæ:88d2
    // 0x88d2 (Windows-31J)
    // 0x60df (UTF-16BE)
    if (argCheck == 'à“') {
        return true;
    }
    // No.627
    // ê‡ñæ:88d3
    // 0x88d3 (Windows-31J)
    // 0x610f (UTF-16BE)
    if (argCheck == 'à”') {
        return true;
    }
    // No.628
    // ê‡ñæ:88d4
    // 0x88d4 (Windows-31J)
    // 0x6170 (UTF-16BE)
    if (argCheck == 'à‘') {
        return true;
    }
    // No.629
    // ê‡ñæ:88d5
    // 0x88d5 (Windows-31J)
    // 0x6613 (UTF-16BE)
    if (argCheck == 'à’') {
        return true;
    }
    // No.630
    // ê‡ñæ:88d6
    // 0x88d6 (Windows-31J)
    // 0x6905 (UTF-16BE)
    if (argCheck == 'à÷') {
        return true;
    }
    // No.631
    // ê‡ñæ:88d7
    // 0x88d7 (Windows-31J)
    // 0x70ba (UTF-16BE)
    if (argCheck == 'à◊') {
        return true;
    }
    // No.632
    // ê‡ñæ:88d8
    // 0x88d8 (Windows-31J)
    // 0x754f (UTF-16BE)
    if (argCheck == 'àÿ') {
        return true;
    }
    // No.633
    // ê‡ñæ:88d9
    // 0x88d9 (Windows-31J)
    // 0x7570 (UTF-16BE)
    if (argCheck == 'àŸ') {
        return true;
    }
    // No.634
    // ê‡ñæ:88da
    // 0x88da (Windows-31J)
    // 0x79fb (UTF-16BE)
    if (argCheck == 'à⁄') {
        return true;
    }
    // No.635
    // ê‡ñæ:88db
    // 0x88db (Windows-31J)
    // 0x7dad (UTF-16BE)
    if (argCheck == 'à€') {
        return true;
    }
    // No.636
    // ê‡ñæ:88dc
    // 0x88dc (Windows-31J)
    // 0x7def (UTF-16BE)
    if (argCheck == 'à‹') {
        return true;
    }
    // No.637
    // ê‡ñæ:88dd
    // 0x88dd (Windows-31J)
    // 0x80c3 (UTF-16BE)
    if (argCheck == 'à›') {
        return true;
    }
    // No.638
    // ê‡ñæ:88de
    // 0x88de (Windows-31J)
    // 0x840e (UTF-16BE)
    if (argCheck == 'àﬁ') {
        return true;
    }
    // No.639
    // ê‡ñæ:88df
    // 0x88df (Windows-31J)
    // 0x8863 (UTF-16BE)
    if (argCheck == 'àﬂ') {
        return true;
    }
    // No.640
    // ê‡ñæ:88e0
    // 0x88e0 (Windows-31J)
    // 0x8b02 (UTF-16BE)
    if (argCheck == 'à‡') {
        return true;
    }
    // No.641
    // ê‡ñæ:88e1
    // 0x88e1 (Windows-31J)
    // 0x9055 (UTF-16BE)
    if (argCheck == 'à·') {
        return true;
    }
    // No.642
    // ê‡ñæ:88e2
    // 0x88e2 (Windows-31J)
    // 0x907a (UTF-16BE)
    if (argCheck == 'à‚') {
        return true;
    }
    // No.643
    // ê‡ñæ:88e3
    // 0x88e3 (Windows-31J)
    // 0x533b (UTF-16BE)
    if (argCheck == 'à„') {
        return true;
    }
    // No.644
    // ê‡ñæ:88e4
    // 0x88e4 (Windows-31J)
    // 0x4e95 (UTF-16BE)
    if (argCheck == 'à‰') {
        return true;
    }
    // No.645
    // ê‡ñæ:88e5
    // 0x88e5 (Windows-31J)
    // 0x4ea5 (UTF-16BE)
    if (argCheck == 'àÂ') {
        return true;
    }
    // No.646
    // ê‡ñæ:88e6
    // 0x88e6 (Windows-31J)
    // 0x57df (UTF-16BE)
    if (argCheck == 'àÊ') {
        return true;
    }
    // No.647
    // ê‡ñæ:88e7
    // 0x88e7 (Windows-31J)
    // 0x80b2 (UTF-16BE)
    if (argCheck == 'àÁ') {
        return true;
    }
    // No.648
    // ê‡ñæ:88e8
    // 0x88e8 (Windows-31J)
    // 0x90c1 (UTF-16BE)
    if (argCheck == 'àË') {
        return true;
    }
    // No.649
    // ê‡ñæ:88e9
    // 0x88e9 (Windows-31J)
    // 0x78ef (UTF-16BE)
    if (argCheck == 'àÈ') {
        return true;
    }
    // No.650
    // ê‡ñæ:88ea
    // 0x88ea (Windows-31J)
    // 0x4e00 (UTF-16BE)
    if (argCheck == 'àÍ') {
        return true;
    }
    // No.651
    // ê‡ñæ:88eb
    // 0x88eb (Windows-31J)
    // 0x58f1 (UTF-16BE)
    if (argCheck == 'àÎ') {
        return true;
    }
    // No.652
    // ê‡ñæ:88ec
    // 0x88ec (Windows-31J)
    // 0x6ea2 (UTF-16BE)
    if (argCheck == 'àÏ') {
        return true;
    }
    // No.653
    // ê‡ñæ:88ed
    // 0x88ed (Windows-31J)
    // 0x9038 (UTF-16BE)
    if (argCheck == 'àÌ') {
        return true;
    }
    // No.654
    // ê‡ñæ:88ee
    // 0x88ee (Windows-31J)
    // 0x7a32 (UTF-16BE)
    if (argCheck == 'àÓ') {
        return true;
    }
    // No.655
    // ê‡ñæ:88ef
    // 0x88ef (Windows-31J)
    // 0x8328 (UTF-16BE)
    if (argCheck == 'àÔ') {
        return true;
    }
    // No.656
    // ê‡ñæ:88f0
    // 0x88f0 (Windows-31J)
    // 0x828b (UTF-16BE)
    if (argCheck == 'à') {
        return true;
    }
    // No.657
    // ê‡ñæ:88f1
    // 0x88f1 (Windows-31J)
    // 0x9c2f (UTF-16BE)
    if (argCheck == 'àÒ') {
        return true;
    }
    // No.658
    // ê‡ñæ:88f2
    // 0x88f2 (Windows-31J)
    // 0x5141 (UTF-16BE)
    if (argCheck == 'àÚ') {
        return true;
    }
    // No.659
    // ê‡ñæ:88f3
    // 0x88f3 (Windows-31J)
    // 0x5370 (UTF-16BE)
    if (argCheck == 'àÛ') {
        return true;
    }
    // No.660
    // ê‡ñæ:88f4
    // 0x88f4 (Windows-31J)
    // 0x54bd (UTF-16BE)
    if (argCheck == 'àÙ') {
        return true;
    }
    // No.661
    // ê‡ñæ:88f5
    // 0x88f5 (Windows-31J)
    // 0x54e1 (UTF-16BE)
    if (argCheck == 'àı') {
        return true;
    }
    // No.662
    // ê‡ñæ:88f6
    // 0x88f6 (Windows-31J)
    // 0x56e0 (UTF-16BE)
    if (argCheck == 'àˆ') {
        return true;
    }
    // No.663
    // ê‡ñæ:88f7
    // 0x88f7 (Windows-31J)
    // 0x59fb (UTF-16BE)
    if (argCheck == 'à˜') {
        return true;
    }
    // No.664
    // ê‡ñæ:88f8
    // 0x88f8 (Windows-31J)
    // 0x5f15 (UTF-16BE)
    if (argCheck == 'à¯') {
        return true;
    }
    // No.665
    // ê‡ñæ:88f9
    // 0x88f9 (Windows-31J)
    // 0x98f2 (UTF-16BE)
    if (argCheck == 'à˘') {
        return true;
    }
    // No.666
    // ê‡ñæ:88fa
    // 0x88fa (Windows-31J)
    // 0x6deb (UTF-16BE)
    if (argCheck == 'à˙') {
        return true;
    }
    // No.667
    // ê‡ñæ:88fb
    // 0x88fb (Windows-31J)
    // 0x80e4 (UTF-16BE)
    if (argCheck == 'à˚') {
        return true;
    }
    // No.668
    // ê‡ñæ:88fc
    // 0x88fc (Windows-31J)
    // 0x852d (UTF-16BE)
    if (argCheck == 'à¸') {
        return true;
    }
    // No.669
    // ê‡ñæ:8940
    // 0x8940 (Windows-31J)
    // 0x9662 (UTF-16BE)
    if (argCheck == 'â@') {
        return true;
    }
    // No.670
    // ê‡ñæ:8941
    // 0x8941 (Windows-31J)
    // 0x9670 (UTF-16BE)
    if (argCheck == 'âA') {
        return true;
    }
    // No.671
    // ê‡ñæ:8942
    // 0x8942 (Windows-31J)
    // 0x96a0 (UTF-16BE)
    if (argCheck == 'âB') {
        return true;
    }
    // No.672
    // ê‡ñæ:8943
    // 0x8943 (Windows-31J)
    // 0x97fb (UTF-16BE)
    if (argCheck == 'âC') {
        return true;
    }
    // No.673
    // ê‡ñæ:8944
    // 0x8944 (Windows-31J)
    // 0x540b (UTF-16BE)
    if (argCheck == 'âD') {
        return true;
    }
    // No.674
    // ê‡ñæ:8945
    // 0x8945 (Windows-31J)
    // 0x53f3 (UTF-16BE)
    if (argCheck == 'âE') {
        return true;
    }
    // No.675
    // ê‡ñæ:8946
    // 0x8946 (Windows-31J)
    // 0x5b87 (UTF-16BE)
    if (argCheck == 'âF') {
        return true;
    }
    // No.676
    // ê‡ñæ:8947
    // 0x8947 (Windows-31J)
    // 0x70cf (UTF-16BE)
    if (argCheck == 'âG') {
        return true;
    }
    // No.677
    // ê‡ñæ:8948
    // 0x8948 (Windows-31J)
    // 0x7fbd (UTF-16BE)
    if (argCheck == 'âH') {
        return true;
    }
    // No.678
    // ê‡ñæ:8949
    // 0x8949 (Windows-31J)
    // 0x8fc2 (UTF-16BE)
    if (argCheck == 'âI') {
        return true;
    }
    // No.679
    // ê‡ñæ:894a
    // 0x894a (Windows-31J)
    // 0x96e8 (UTF-16BE)
    if (argCheck == 'âJ') {
        return true;
    }
    // No.680
    // ê‡ñæ:894b
    // 0x894b (Windows-31J)
    // 0x536f (UTF-16BE)
    if (argCheck == 'âK') {
        return true;
    }
    // No.681
    // ê‡ñæ:894c
    // 0x894c (Windows-31J)
    // 0x9d5c (UTF-16BE)
    if (argCheck == 'âL') {
        return true;
    }
    // No.682
    // ê‡ñæ:894d
    // 0x894d (Windows-31J)
    // 0x7aba (UTF-16BE)
    if (argCheck == 'âM') {
        return true;
    }
    // No.683
    // ê‡ñæ:894e
    // 0x894e (Windows-31J)
    // 0x4e11 (UTF-16BE)
    if (argCheck == 'âN') {
        return true;
    }
    // No.684
    // ê‡ñæ:894f
    // 0x894f (Windows-31J)
    // 0x7893 (UTF-16BE)
    if (argCheck == 'âO') {
        return true;
    }
    // No.685
    // ê‡ñæ:8950
    // 0x8950 (Windows-31J)
    // 0x81fc (UTF-16BE)
    if (argCheck == 'âP') {
        return true;
    }
    // No.686
    // ê‡ñæ:8951
    // 0x8951 (Windows-31J)
    // 0x6e26 (UTF-16BE)
    if (argCheck == 'âQ') {
        return true;
    }
    // No.687
    // ê‡ñæ:8952
    // 0x8952 (Windows-31J)
    // 0x5618 (UTF-16BE)
    if (argCheck == 'âR') {
        return true;
    }
    // No.688
    // ê‡ñæ:8953
    // 0x8953 (Windows-31J)
    // 0x5504 (UTF-16BE)
    if (argCheck == 'âS') {
        return true;
    }
    // No.689
    // ê‡ñæ:8954
    // 0x8954 (Windows-31J)
    // 0x6b1d (UTF-16BE)
    if (argCheck == 'âT') {
        return true;
    }
    // No.690
    // ê‡ñæ:8955
    // 0x8955 (Windows-31J)
    // 0x851a (UTF-16BE)
    if (argCheck == 'âU') {
        return true;
    }
    // No.691
    // ê‡ñæ:8956
    // 0x8956 (Windows-31J)
    // 0x9c3b (UTF-16BE)
    if (argCheck == 'âV') {
        return true;
    }
    // No.692
    // ê‡ñæ:8957
    // 0x8957 (Windows-31J)
    // 0x59e5 (UTF-16BE)
    if (argCheck == 'âW') {
        return true;
    }
    // No.693
    // ê‡ñæ:8958
    // 0x8958 (Windows-31J)
    // 0x53a9 (UTF-16BE)
    if (argCheck == 'âX') {
        return true;
    }
    // No.694
    // ê‡ñæ:8959
    // 0x8959 (Windows-31J)
    // 0x6d66 (UTF-16BE)
    if (argCheck == 'âY') {
        return true;
    }
    // No.695
    // ê‡ñæ:895a
    // 0x895a (Windows-31J)
    // 0x74dc (UTF-16BE)
    if (argCheck == 'âZ') {
        return true;
    }
    // No.696
    // ê‡ñæ:895b
    // 0x895b (Windows-31J)
    // 0x958f (UTF-16BE)
    if (argCheck == 'â[') {
        return true;
    }
    // No.697
    // ê‡ñæ:895c
    // 0x895c (Windows-31J)
    // 0x5642 (UTF-16BE)
    if (argCheck == 'â\') {
        return true;
    }
    // No.698
    // ê‡ñæ:895d
    // 0x895d (Windows-31J)
    // 0x4e91 (UTF-16BE)
    if (argCheck == 'â]') {
        return true;
    }
    // No.699
    // ê‡ñæ:895e
    // 0x895e (Windows-31J)
    // 0x904b (UTF-16BE)
    if (argCheck == 'â^') {
        return true;
    }
    // No.700
    // ê‡ñæ:895f
    // 0x895f (Windows-31J)
    // 0x96f2 (UTF-16BE)
    if (argCheck == 'â_') {
        return true;
    }
    // No.701
    // ê‡ñæ:8960
    // 0x8960 (Windows-31J)
    // 0x834f (UTF-16BE)
    if (argCheck == 'â`') {
        return true;
    }
    // No.702
    // ê‡ñæ:8961
    // 0x8961 (Windows-31J)
    // 0x990c (UTF-16BE)
    if (argCheck == 'âa') {
        return true;
    }
    // No.703
    // ê‡ñæ:8962
    // 0x8962 (Windows-31J)
    // 0x53e1 (UTF-16BE)
    if (argCheck == 'âb') {
        return true;
    }
    // No.704
    // ê‡ñæ:8963
    // 0x8963 (Windows-31J)
    // 0x55b6 (UTF-16BE)
    if (argCheck == 'âc') {
        return true;
    }
    // No.705
    // ê‡ñæ:8964
    // 0x8964 (Windows-31J)
    // 0x5b30 (UTF-16BE)
    if (argCheck == 'âd') {
        return true;
    }
    // No.706
    // ê‡ñæ:8965
    // 0x8965 (Windows-31J)
    // 0x5f71 (UTF-16BE)
    if (argCheck == 'âe') {
        return true;
    }
    // No.707
    // ê‡ñæ:8966
    // 0x8966 (Windows-31J)
    // 0x6620 (UTF-16BE)
    if (argCheck == 'âf') {
        return true;
    }
    // No.708
    // ê‡ñæ:8967
    // 0x8967 (Windows-31J)
    // 0x66f3 (UTF-16BE)
    if (argCheck == 'âg') {
        return true;
    }
    // No.709
    // ê‡ñæ:8968
    // 0x8968 (Windows-31J)
    // 0x6804 (UTF-16BE)
    if (argCheck == 'âh') {
        return true;
    }
    // No.710
    // ê‡ñæ:8969
    // 0x8969 (Windows-31J)
    // 0x6c38 (UTF-16BE)
    if (argCheck == 'âi') {
        return true;
    }
    // No.711
    // ê‡ñæ:896a
    // 0x896a (Windows-31J)
    // 0x6cf3 (UTF-16BE)
    if (argCheck == 'âj') {
        return true;
    }
    // No.712
    // ê‡ñæ:896b
    // 0x896b (Windows-31J)
    // 0x6d29 (UTF-16BE)
    if (argCheck == 'âk') {
        return true;
    }
    // No.713
    // ê‡ñæ:896c
    // 0x896c (Windows-31J)
    // 0x745b (UTF-16BE)
    if (argCheck == 'âl') {
        return true;
    }
    // No.714
    // ê‡ñæ:896d
    // 0x896d (Windows-31J)
    // 0x76c8 (UTF-16BE)
    if (argCheck == 'âm') {
        return true;
    }
    // No.715
    // ê‡ñæ:896e
    // 0x896e (Windows-31J)
    // 0x7a4e (UTF-16BE)
    if (argCheck == 'ân') {
        return true;
    }
    // No.716
    // ê‡ñæ:896f
    // 0x896f (Windows-31J)
    // 0x9834 (UTF-16BE)
    if (argCheck == 'âo') {
        return true;
    }
    // No.717
    // ê‡ñæ:8970
    // 0x8970 (Windows-31J)
    // 0x82f1 (UTF-16BE)
    if (argCheck == 'âp') {
        return true;
    }
    // No.718
    // ê‡ñæ:8971
    // 0x8971 (Windows-31J)
    // 0x885b (UTF-16BE)
    if (argCheck == 'âq') {
        return true;
    }
    // No.719
    // ê‡ñæ:8972
    // 0x8972 (Windows-31J)
    // 0x8a60 (UTF-16BE)
    if (argCheck == 'âr') {
        return true;
    }
    // No.720
    // ê‡ñæ:8973
    // 0x8973 (Windows-31J)
    // 0x92ed (UTF-16BE)
    if (argCheck == 'âs') {
        return true;
    }
    // No.721
    // ê‡ñæ:8974
    // 0x8974 (Windows-31J)
    // 0x6db2 (UTF-16BE)
    if (argCheck == 'ât') {
        return true;
    }
    // No.722
    // ê‡ñæ:8975
    // 0x8975 (Windows-31J)
    // 0x75ab (UTF-16BE)
    if (argCheck == 'âu') {
        return true;
    }
    // No.723
    // ê‡ñæ:8976
    // 0x8976 (Windows-31J)
    // 0x76ca (UTF-16BE)
    if (argCheck == 'âv') {
        return true;
    }
    // No.724
    // ê‡ñæ:8977
    // 0x8977 (Windows-31J)
    // 0x99c5 (UTF-16BE)
    if (argCheck == 'âw') {
        return true;
    }
    // No.725
    // ê‡ñæ:8978
    // 0x8978 (Windows-31J)
    // 0x60a6 (UTF-16BE)
    if (argCheck == 'âx') {
        return true;
    }
    // No.726
    // ê‡ñæ:8979
    // 0x8979 (Windows-31J)
    // 0x8b01 (UTF-16BE)
    if (argCheck == 'ây') {
        return true;
    }
    // No.727
    // ê‡ñæ:897a
    // 0x897a (Windows-31J)
    // 0x8d8a (UTF-16BE)
    if (argCheck == 'âz') {
        return true;
    }
    // No.728
    // ê‡ñæ:897b
    // 0x897b (Windows-31J)
    // 0x95b2 (UTF-16BE)
    if (argCheck == 'â{') {
        return true;
    }
    // No.729
    // ê‡ñæ:897c
    // 0x897c (Windows-31J)
    // 0x698e (UTF-16BE)
    if (argCheck == 'â|') {
        return true;
    }
    // No.730
    // ê‡ñæ:897d
    // 0x897d (Windows-31J)
    // 0x53ad (UTF-16BE)
    if (argCheck == 'â}') {
        return true;
    }
    // No.731
    // ê‡ñæ:897e
    // 0x897e (Windows-31J)
    // 0x5186 (UTF-16BE)
    if (argCheck == 'â~') {
        return true;
    }
    // No.732
    // ê‡ñæ:8980
    // 0x8980 (Windows-31J)
    // 0x5712 (UTF-16BE)
    if (argCheck == 'âÄ') {
        return true;
    }
    // No.733
    // ê‡ñæ:8981
    // 0x8981 (Windows-31J)
    // 0x5830 (UTF-16BE)
    if (argCheck == 'âÅ') {
        return true;
    }
    // No.734
    // ê‡ñæ:8982
    // 0x8982 (Windows-31J)
    // 0x5944 (UTF-16BE)
    if (argCheck == 'âÇ') {
        return true;
    }
    // No.735
    // ê‡ñæ:8983
    // 0x8983 (Windows-31J)
    // 0x5bb4 (UTF-16BE)
    if (argCheck == 'âÉ') {
        return true;
    }
    // No.736
    // ê‡ñæ:8984
    // 0x8984 (Windows-31J)
    // 0x5ef6 (UTF-16BE)
    if (argCheck == 'âÑ') {
        return true;
    }
    // No.737
    // ê‡ñæ:8985
    // 0x8985 (Windows-31J)
    // 0x6028 (UTF-16BE)
    if (argCheck == 'âÖ') {
        return true;
    }
    // No.738
    // ê‡ñæ:8986
    // 0x8986 (Windows-31J)
    // 0x63a9 (UTF-16BE)
    if (argCheck == 'âÜ') {
        return true;
    }
    // No.739
    // ê‡ñæ:8987
    // 0x8987 (Windows-31J)
    // 0x63f4 (UTF-16BE)
    if (argCheck == 'âá') {
        return true;
    }
    // No.740
    // ê‡ñæ:8988
    // 0x8988 (Windows-31J)
    // 0x6cbf (UTF-16BE)
    if (argCheck == 'âà') {
        return true;
    }
    // No.741
    // ê‡ñæ:8989
    // 0x8989 (Windows-31J)
    // 0x6f14 (UTF-16BE)
    if (argCheck == 'ââ') {
        return true;
    }
    // No.742
    // ê‡ñæ:898a
    // 0x898a (Windows-31J)
    // 0x708e (UTF-16BE)
    if (argCheck == 'âä') {
        return true;
    }
    // No.743
    // ê‡ñæ:898b
    // 0x898b (Windows-31J)
    // 0x7114 (UTF-16BE)
    if (argCheck == 'âã') {
        return true;
    }
    // No.744
    // ê‡ñæ:898c
    // 0x898c (Windows-31J)
    // 0x7159 (UTF-16BE)
    if (argCheck == 'âå') {
        return true;
    }
    // No.745
    // ê‡ñæ:898d
    // 0x898d (Windows-31J)
    // 0x71d5 (UTF-16BE)
    if (argCheck == 'âç') {
        return true;
    }
    // No.746
    // ê‡ñæ:898e
    // 0x898e (Windows-31J)
    // 0x733f (UTF-16BE)
    if (argCheck == 'âé') {
        return true;
    }
    // No.747
    // ê‡ñæ:898f
    // 0x898f (Windows-31J)
    // 0x7e01 (UTF-16BE)
    if (argCheck == 'âè') {
        return true;
    }
    // No.748
    // ê‡ñæ:8990
    // 0x8990 (Windows-31J)
    // 0x8276 (UTF-16BE)
    if (argCheck == 'âê') {
        return true;
    }
    // No.749
    // ê‡ñæ:8991
    // 0x8991 (Windows-31J)
    // 0x82d1 (UTF-16BE)
    if (argCheck == 'âë') {
        return true;
    }
    // No.750
    // ê‡ñæ:8992
    // 0x8992 (Windows-31J)
    // 0x8597 (UTF-16BE)
    if (argCheck == 'âí') {
        return true;
    }
    // No.751
    // ê‡ñæ:8993
    // 0x8993 (Windows-31J)
    // 0x9060 (UTF-16BE)
    if (argCheck == 'âì') {
        return true;
    }
    // No.752
    // ê‡ñæ:8994
    // 0x8994 (Windows-31J)
    // 0x925b (UTF-16BE)
    if (argCheck == 'âî') {
        return true;
    }
    // No.753
    // ê‡ñæ:8995
    // 0x8995 (Windows-31J)
    // 0x9d1b (UTF-16BE)
    if (argCheck == 'âï') {
        return true;
    }
    // No.754
    // ê‡ñæ:8996
    // 0x8996 (Windows-31J)
    // 0x5869 (UTF-16BE)
    if (argCheck == 'âñ') {
        return true;
    }
    // No.755
    // ê‡ñæ:8997
    // 0x8997 (Windows-31J)
    // 0x65bc (UTF-16BE)
    if (argCheck == 'âó') {
        return true;
    }
    // No.756
    // ê‡ñæ:8998
    // 0x8998 (Windows-31J)
    // 0x6c5a (UTF-16BE)
    if (argCheck == 'âò') {
        return true;
    }
    // No.757
    // ê‡ñæ:8999
    // 0x8999 (Windows-31J)
    // 0x7525 (UTF-16BE)
    if (argCheck == 'âô') {
        return true;
    }
    // No.758
    // ê‡ñæ:899a
    // 0x899a (Windows-31J)
    // 0x51f9 (UTF-16BE)
    if (argCheck == 'âö') {
        return true;
    }
    // No.759
    // ê‡ñæ:899b
    // 0x899b (Windows-31J)
    // 0x592e (UTF-16BE)
    if (argCheck == 'âõ') {
        return true;
    }
    // No.760
    // ê‡ñæ:899c
    // 0x899c (Windows-31J)
    // 0x5965 (UTF-16BE)
    if (argCheck == 'âú') {
        return true;
    }
    // No.761
    // ê‡ñæ:899d
    // 0x899d (Windows-31J)
    // 0x5f80 (UTF-16BE)
    if (argCheck == 'âù') {
        return true;
    }
    // No.762
    // ê‡ñæ:899e
    // 0x899e (Windows-31J)
    // 0x5fdc (UTF-16BE)
    if (argCheck == 'âû') {
        return true;
    }
    // No.763
    // ê‡ñæ:899f
    // 0x899f (Windows-31J)
    // 0x62bc (UTF-16BE)
    if (argCheck == 'âü') {
        return true;
    }
    // No.764
    // ê‡ñæ:89a0
    // 0x89a0 (Windows-31J)
    // 0x65fa (UTF-16BE)
    if (argCheck == 'â†') {
        return true;
    }
    // No.765
    // ê‡ñæ:89a1
    // 0x89a1 (Windows-31J)
    // 0x6a2a (UTF-16BE)
    if (argCheck == 'â°') {
        return true;
    }
    // No.766
    // ê‡ñæ:89a2
    // 0x89a2 (Windows-31J)
    // 0x6b27 (UTF-16BE)
    if (argCheck == 'â¢') {
        return true;
    }
    // No.767
    // ê‡ñæ:89a3
    // 0x89a3 (Windows-31J)
    // 0x6bb4 (UTF-16BE)
    if (argCheck == 'â£') {
        return true;
    }
    // No.768
    // ê‡ñæ:89a4
    // 0x89a4 (Windows-31J)
    // 0x738b (UTF-16BE)
    if (argCheck == 'â§') {
        return true;
    }
    // No.769
    // ê‡ñæ:89a5
    // 0x89a5 (Windows-31J)
    // 0x7fc1 (UTF-16BE)
    if (argCheck == 'â•') {
        return true;
    }
    // No.770
    // ê‡ñæ:89a6
    // 0x89a6 (Windows-31J)
    // 0x8956 (UTF-16BE)
    if (argCheck == 'â¶') {
        return true;
    }
    // No.771
    // ê‡ñæ:89a7
    // 0x89a7 (Windows-31J)
    // 0x9d2c (UTF-16BE)
    if (argCheck == 'âß') {
        return true;
    }
    // No.772
    // ê‡ñæ:89a8
    // 0x89a8 (Windows-31J)
    // 0x9d0e (UTF-16BE)
    if (argCheck == 'â®') {
        return true;
    }
    // No.773
    // ê‡ñæ:89a9
    // 0x89a9 (Windows-31J)
    // 0x9ec4 (UTF-16BE)
    if (argCheck == 'â©') {
        return true;
    }
    // No.774
    // ê‡ñæ:89aa
    // 0x89aa (Windows-31J)
    // 0x5ca1 (UTF-16BE)
    if (argCheck == 'â™') {
        return true;
    }
    // No.775
    // ê‡ñæ:89ab
    // 0x89ab (Windows-31J)
    // 0x6c96 (UTF-16BE)
    if (argCheck == 'â´') {
        return true;
    }
    // No.776
    // ê‡ñæ:89ac
    // 0x89ac (Windows-31J)
    // 0x837b (UTF-16BE)
    if (argCheck == 'â¨') {
        return true;
    }
    // No.777
    // ê‡ñæ:89ad
    // 0x89ad (Windows-31J)
    // 0x5104 (UTF-16BE)
    if (argCheck == 'â≠') {
        return true;
    }
    // No.778
    // ê‡ñæ:89ae
    // 0x89ae (Windows-31J)
    // 0x5c4b (UTF-16BE)
    if (argCheck == 'âÆ') {
        return true;
    }
    // No.779
    // ê‡ñæ:89af
    // 0x89af (Windows-31J)
    // 0x61b6 (UTF-16BE)
    if (argCheck == 'âØ') {
        return true;
    }
    // No.780
    // ê‡ñæ:89b0
    // 0x89b0 (Windows-31J)
    // 0x81c6 (UTF-16BE)
    if (argCheck == 'â∞') {
        return true;
    }
    // No.781
    // ê‡ñæ:89b1
    // 0x89b1 (Windows-31J)
    // 0x6876 (UTF-16BE)
    if (argCheck == 'â±') {
        return true;
    }
    // No.782
    // ê‡ñæ:89b2
    // 0x89b2 (Windows-31J)
    // 0x7261 (UTF-16BE)
    if (argCheck == 'â≤') {
        return true;
    }
    // No.783
    // ê‡ñæ:89b3
    // 0x89b3 (Windows-31J)
    // 0x4e59 (UTF-16BE)
    if (argCheck == 'â≥') {
        return true;
    }
    // No.784
    // ê‡ñæ:89b4
    // 0x89b4 (Windows-31J)
    // 0x4ffa (UTF-16BE)
    if (argCheck == 'â¥') {
        return true;
    }
    // No.785
    // ê‡ñæ:89b5
    // 0x89b5 (Windows-31J)
    // 0x5378 (UTF-16BE)
    if (argCheck == 'âµ') {
        return true;
    }
    // No.786
    // ê‡ñæ:89b6
    // 0x89b6 (Windows-31J)
    // 0x6069 (UTF-16BE)
    if (argCheck == 'â∂') {
        return true;
    }
    // No.787
    // ê‡ñæ:89b7
    // 0x89b7 (Windows-31J)
    // 0x6e29 (UTF-16BE)
    if (argCheck == 'â∑') {
        return true;
    }
    // No.788
    // ê‡ñæ:89b8
    // 0x89b8 (Windows-31J)
    // 0x7a4f (UTF-16BE)
    if (argCheck == 'â∏') {
        return true;
    }
    // No.789
    // ê‡ñæ:89b9
    // 0x89b9 (Windows-31J)
    // 0x97f3 (UTF-16BE)
    if (argCheck == 'âπ') {
        return true;
    }
    // No.790
    // ê‡ñæ:89ba
    // 0x89ba (Windows-31J)
    // 0x4e0b (UTF-16BE)
    if (argCheck == 'â∫') {
        return true;
    }
    // No.791
    // ê‡ñæ:89bb
    // 0x89bb (Windows-31J)
    // 0x5316 (UTF-16BE)
    if (argCheck == 'âª') {
        return true;
    }
    // No.792
    // ê‡ñæ:89bc
    // 0x89bc (Windows-31J)
    // 0x4eee (UTF-16BE)
    if (argCheck == 'âº') {
        return true;
    }
    // No.793
    // ê‡ñæ:89bd
    // 0x89bd (Windows-31J)
    // 0x4f55 (UTF-16BE)
    if (argCheck == 'âΩ') {
        return true;
    }
    // No.794
    // ê‡ñæ:89be
    // 0x89be (Windows-31J)
    // 0x4f3d (UTF-16BE)
    if (argCheck == 'âæ') {
        return true;
    }
    // No.795
    // ê‡ñæ:89bf
    // 0x89bf (Windows-31J)
    // 0x4fa1 (UTF-16BE)
    if (argCheck == 'âø') {
        return true;
    }
    // No.796
    // ê‡ñæ:89c0
    // 0x89c0 (Windows-31J)
    // 0x4f73 (UTF-16BE)
    if (argCheck == 'â¿') {
        return true;
    }
    // No.797
    // ê‡ñæ:89c1
    // 0x89c1 (Windows-31J)
    // 0x52a0 (UTF-16BE)
    if (argCheck == 'â¡') {
        return true;
    }
    // No.798
    // ê‡ñæ:89c2
    // 0x89c2 (Windows-31J)
    // 0x53ef (UTF-16BE)
    if (argCheck == 'â¬') {
        return true;
    }
    // No.799
    // ê‡ñæ:89c3
    // 0x89c3 (Windows-31J)
    // 0x5609 (UTF-16BE)
    if (argCheck == 'â√') {
        return true;
    }
    // No.800
    // ê‡ñæ:89c4
    // 0x89c4 (Windows-31J)
    // 0x590f (UTF-16BE)
    if (argCheck == 'âƒ') {
        return true;
    }
    // No.801
    // ê‡ñæ:89c5
    // 0x89c5 (Windows-31J)
    // 0x5ac1 (UTF-16BE)
    if (argCheck == 'â≈') {
        return true;
    }
    // No.802
    // ê‡ñæ:89c6
    // 0x89c6 (Windows-31J)
    // 0x5bb6 (UTF-16BE)
    if (argCheck == 'â∆') {
        return true;
    }
    // No.803
    // ê‡ñæ:89c7
    // 0x89c7 (Windows-31J)
    // 0x5be1 (UTF-16BE)
    if (argCheck == 'â«') {
        return true;
    }
    // No.804
    // ê‡ñæ:89c8
    // 0x89c8 (Windows-31J)
    // 0x79d1 (UTF-16BE)
    if (argCheck == 'â»') {
        return true;
    }
    // No.805
    // ê‡ñæ:89c9
    // 0x89c9 (Windows-31J)
    // 0x6687 (UTF-16BE)
    if (argCheck == 'â…') {
        return true;
    }
    // No.806
    // ê‡ñæ:89ca
    // 0x89ca (Windows-31J)
    // 0x679c (UTF-16BE)
    if (argCheck == 'â ') {
        return true;
    }
    // No.807
    // ê‡ñæ:89cb
    // 0x89cb (Windows-31J)
    // 0x67b6 (UTF-16BE)
    if (argCheck == 'âÀ') {
        return true;
    }
    // No.808
    // ê‡ñæ:89cc
    // 0x89cc (Windows-31J)
    // 0x6b4c (UTF-16BE)
    if (argCheck == 'âÃ') {
        return true;
    }
    // No.809
    // ê‡ñæ:89cd
    // 0x89cd (Windows-31J)
    // 0x6cb3 (UTF-16BE)
    if (argCheck == 'âÕ') {
        return true;
    }
    // No.810
    // ê‡ñæ:89ce
    // 0x89ce (Windows-31J)
    // 0x706b (UTF-16BE)
    if (argCheck == 'âŒ') {
        return true;
    }
    // No.811
    // ê‡ñæ:89cf
    // 0x89cf (Windows-31J)
    // 0x73c2 (UTF-16BE)
    if (argCheck == 'âœ') {
        return true;
    }
    // No.812
    // ê‡ñæ:89d0
    // 0x89d0 (Windows-31J)
    // 0x798d (UTF-16BE)
    if (argCheck == 'â–') {
        return true;
    }
    // No.813
    // ê‡ñæ:89d1
    // 0x89d1 (Windows-31J)
    // 0x79be (UTF-16BE)
    if (argCheck == 'â—') {
        return true;
    }
    // No.814
    // ê‡ñæ:89d2
    // 0x89d2 (Windows-31J)
    // 0x7a3c (UTF-16BE)
    if (argCheck == 'â“') {
        return true;
    }
    // No.815
    // ê‡ñæ:89d3
    // 0x89d3 (Windows-31J)
    // 0x7b87 (UTF-16BE)
    if (argCheck == 'â”') {
        return true;
    }
    // No.816
    // ê‡ñæ:89d4
    // 0x89d4 (Windows-31J)
    // 0x82b1 (UTF-16BE)
    if (argCheck == 'â‘') {
        return true;
    }
    // No.817
    // ê‡ñæ:89d5
    // 0x89d5 (Windows-31J)
    // 0x82db (UTF-16BE)
    if (argCheck == 'â’') {
        return true;
    }
    // No.818
    // ê‡ñæ:89d6
    // 0x89d6 (Windows-31J)
    // 0x8304 (UTF-16BE)
    if (argCheck == 'â÷') {
        return true;
    }
    // No.819
    // ê‡ñæ:89d7
    // 0x89d7 (Windows-31J)
    // 0x8377 (UTF-16BE)
    if (argCheck == 'â◊') {
        return true;
    }
    // No.820
    // ê‡ñæ:89d8
    // 0x89d8 (Windows-31J)
    // 0x83ef (UTF-16BE)
    if (argCheck == 'âÿ') {
        return true;
    }
    // No.821
    // ê‡ñæ:89d9
    // 0x89d9 (Windows-31J)
    // 0x83d3 (UTF-16BE)
    if (argCheck == 'âŸ') {
        return true;
    }
    // No.822
    // ê‡ñæ:89da
    // 0x89da (Windows-31J)
    // 0x8766 (UTF-16BE)
    if (argCheck == 'â⁄') {
        return true;
    }
    // No.823
    // ê‡ñæ:89db
    // 0x89db (Windows-31J)
    // 0x8ab2 (UTF-16BE)
    if (argCheck == 'â€') {
        return true;
    }
    // No.824
    // ê‡ñæ:89dc
    // 0x89dc (Windows-31J)
    // 0x5629 (UTF-16BE)
    if (argCheck == 'â‹') {
        return true;
    }
    // No.825
    // ê‡ñæ:89dd
    // 0x89dd (Windows-31J)
    // 0x8ca8 (UTF-16BE)
    if (argCheck == 'â›') {
        return true;
    }
    // No.826
    // ê‡ñæ:89de
    // 0x89de (Windows-31J)
    // 0x8fe6 (UTF-16BE)
    if (argCheck == 'âﬁ') {
        return true;
    }
    // No.827
    // ê‡ñæ:89df
    // 0x89df (Windows-31J)
    // 0x904e (UTF-16BE)
    if (argCheck == 'âﬂ') {
        return true;
    }
    // No.828
    // ê‡ñæ:89e0
    // 0x89e0 (Windows-31J)
    // 0x971e (UTF-16BE)
    if (argCheck == 'â‡') {
        return true;
    }
    // No.829
    // ê‡ñæ:89e1
    // 0x89e1 (Windows-31J)
    // 0x868a (UTF-16BE)
    if (argCheck == 'â·') {
        return true;
    }
    // No.830
    // ê‡ñæ:89e2
    // 0x89e2 (Windows-31J)
    // 0x4fc4 (UTF-16BE)
    if (argCheck == 'â‚') {
        return true;
    }
    // No.831
    // ê‡ñæ:89e3
    // 0x89e3 (Windows-31J)
    // 0x5ce8 (UTF-16BE)
    if (argCheck == 'â„') {
        return true;
    }
    // No.832
    // ê‡ñæ:89e4
    // 0x89e4 (Windows-31J)
    // 0x6211 (UTF-16BE)
    if (argCheck == 'â‰') {
        return true;
    }
    // No.833
    // ê‡ñæ:89e5
    // 0x89e5 (Windows-31J)
    // 0x7259 (UTF-16BE)
    if (argCheck == 'âÂ') {
        return true;
    }
    // No.834
    // ê‡ñæ:89e6
    // 0x89e6 (Windows-31J)
    // 0x753b (UTF-16BE)
    if (argCheck == 'âÊ') {
        return true;
    }
    // No.835
    // ê‡ñæ:89e7
    // 0x89e7 (Windows-31J)
    // 0x81e5 (UTF-16BE)
    if (argCheck == 'âÁ') {
        return true;
    }
    // No.836
    // ê‡ñæ:89e8
    // 0x89e8 (Windows-31J)
    // 0x82bd (UTF-16BE)
    if (argCheck == 'âË') {
        return true;
    }
    // No.837
    // ê‡ñæ:89e9
    // 0x89e9 (Windows-31J)
    // 0x86fe (UTF-16BE)
    if (argCheck == 'âÈ') {
        return true;
    }
    // No.838
    // ê‡ñæ:89ea
    // 0x89ea (Windows-31J)
    // 0x8cc0 (UTF-16BE)
    if (argCheck == 'âÍ') {
        return true;
    }
    // No.839
    // ê‡ñæ:89eb
    // 0x89eb (Windows-31J)
    // 0x96c5 (UTF-16BE)
    if (argCheck == 'âÎ') {
        return true;
    }
    // No.840
    // ê‡ñæ:89ec
    // 0x89ec (Windows-31J)
    // 0x9913 (UTF-16BE)
    if (argCheck == 'âÏ') {
        return true;
    }
    // No.841
    // ê‡ñæ:89ed
    // 0x89ed (Windows-31J)
    // 0x99d5 (UTF-16BE)
    if (argCheck == 'âÌ') {
        return true;
    }
    // No.842
    // ê‡ñæ:89ee
    // 0x89ee (Windows-31J)
    // 0x4ecb (UTF-16BE)
    if (argCheck == 'âÓ') {
        return true;
    }
    // No.843
    // ê‡ñæ:89ef
    // 0x89ef (Windows-31J)
    // 0x4f1a (UTF-16BE)
    if (argCheck == 'âÔ') {
        return true;
    }
    // No.844
    // ê‡ñæ:89f0
    // 0x89f0 (Windows-31J)
    // 0x89e3 (UTF-16BE)
    if (argCheck == 'â') {
        return true;
    }
    // No.845
    // ê‡ñæ:89f1
    // 0x89f1 (Windows-31J)
    // 0x56de (UTF-16BE)
    if (argCheck == 'âÒ') {
        return true;
    }
    // No.846
    // ê‡ñæ:89f2
    // 0x89f2 (Windows-31J)
    // 0x584a (UTF-16BE)
    if (argCheck == 'âÚ') {
        return true;
    }
    // No.847
    // ê‡ñæ:89f3
    // 0x89f3 (Windows-31J)
    // 0x58ca (UTF-16BE)
    if (argCheck == 'âÛ') {
        return true;
    }
    // No.848
    // ê‡ñæ:89f4
    // 0x89f4 (Windows-31J)
    // 0x5efb (UTF-16BE)
    if (argCheck == 'âÙ') {
        return true;
    }
    // No.849
    // ê‡ñæ:89f5
    // 0x89f5 (Windows-31J)
    // 0x5feb (UTF-16BE)
    if (argCheck == 'âı') {
        return true;
    }
    // No.850
    // ê‡ñæ:89f6
    // 0x89f6 (Windows-31J)
    // 0x602a (UTF-16BE)
    if (argCheck == 'âˆ') {
        return true;
    }
    // No.851
    // ê‡ñæ:89f7
    // 0x89f7 (Windows-31J)
    // 0x6094 (UTF-16BE)
    if (argCheck == 'â˜') {
        return true;
    }
    // No.852
    // ê‡ñæ:89f8
    // 0x89f8 (Windows-31J)
    // 0x6062 (UTF-16BE)
    if (argCheck == 'â¯') {
        return true;
    }
    // No.853
    // ê‡ñæ:89f9
    // 0x89f9 (Windows-31J)
    // 0x61d0 (UTF-16BE)
    if (argCheck == 'â˘') {
        return true;
    }
    // No.854
    // ê‡ñæ:89fa
    // 0x89fa (Windows-31J)
    // 0x6212 (UTF-16BE)
    if (argCheck == 'â˙') {
        return true;
    }
    // No.855
    // ê‡ñæ:89fb
    // 0x89fb (Windows-31J)
    // 0x62d0 (UTF-16BE)
    if (argCheck == 'â˚') {
        return true;
    }
    // No.856
    // ê‡ñæ:89fc
    // 0x89fc (Windows-31J)
    // 0x6539 (UTF-16BE)
    if (argCheck == 'â¸') {
        return true;
    }
    // No.857
    // ê‡ñæ:8a40
    // 0x8a40 (Windows-31J)
    // 0x9b41 (UTF-16BE)
    if (argCheck == 'ä@') {
        return true;
    }
    // No.858
    // ê‡ñæ:8a41
    // 0x8a41 (Windows-31J)
    // 0x6666 (UTF-16BE)
    if (argCheck == 'äA') {
        return true;
    }
    // No.859
    // ê‡ñæ:8a42
    // 0x8a42 (Windows-31J)
    // 0x68b0 (UTF-16BE)
    if (argCheck == 'äB') {
        return true;
    }
    // No.860
    // ê‡ñæ:8a43
    // 0x8a43 (Windows-31J)
    // 0x6d77 (UTF-16BE)
    if (argCheck == 'äC') {
        return true;
    }
    // No.861
    // ê‡ñæ:8a44
    // 0x8a44 (Windows-31J)
    // 0x7070 (UTF-16BE)
    if (argCheck == 'äD') {
        return true;
    }
    // No.862
    // ê‡ñæ:8a45
    // 0x8a45 (Windows-31J)
    // 0x754c (UTF-16BE)
    if (argCheck == 'äE') {
        return true;
    }
    // No.863
    // ê‡ñæ:8a46
    // 0x8a46 (Windows-31J)
    // 0x7686 (UTF-16BE)
    if (argCheck == 'äF') {
        return true;
    }
    // No.864
    // ê‡ñæ:8a47
    // 0x8a47 (Windows-31J)
    // 0x7d75 (UTF-16BE)
    if (argCheck == 'äG') {
        return true;
    }
    // No.865
    // ê‡ñæ:8a48
    // 0x8a48 (Windows-31J)
    // 0x82a5 (UTF-16BE)
    if (argCheck == 'äH') {
        return true;
    }
    // No.866
    // ê‡ñæ:8a49
    // 0x8a49 (Windows-31J)
    // 0x87f9 (UTF-16BE)
    if (argCheck == 'äI') {
        return true;
    }
    // No.867
    // ê‡ñæ:8a4a
    // 0x8a4a (Windows-31J)
    // 0x958b (UTF-16BE)
    if (argCheck == 'äJ') {
        return true;
    }
    // No.868
    // ê‡ñæ:8a4b
    // 0x8a4b (Windows-31J)
    // 0x968e (UTF-16BE)
    if (argCheck == 'äK') {
        return true;
    }
    // No.869
    // ê‡ñæ:8a4c
    // 0x8a4c (Windows-31J)
    // 0x8c9d (UTF-16BE)
    if (argCheck == 'äL') {
        return true;
    }
    // No.870
    // ê‡ñæ:8a4d
    // 0x8a4d (Windows-31J)
    // 0x51f1 (UTF-16BE)
    if (argCheck == 'äM') {
        return true;
    }
    // No.871
    // ê‡ñæ:8a4e
    // 0x8a4e (Windows-31J)
    // 0x52be (UTF-16BE)
    if (argCheck == 'äN') {
        return true;
    }
    // No.872
    // ê‡ñæ:8a4f
    // 0x8a4f (Windows-31J)
    // 0x5916 (UTF-16BE)
    if (argCheck == 'äO') {
        return true;
    }
    // No.873
    // ê‡ñæ:8a50
    // 0x8a50 (Windows-31J)
    // 0x54b3 (UTF-16BE)
    if (argCheck == 'äP') {
        return true;
    }
    // No.874
    // ê‡ñæ:8a51
    // 0x8a51 (Windows-31J)
    // 0x5bb3 (UTF-16BE)
    if (argCheck == 'äQ') {
        return true;
    }
    // No.875
    // ê‡ñæ:8a52
    // 0x8a52 (Windows-31J)
    // 0x5d16 (UTF-16BE)
    if (argCheck == 'äR') {
        return true;
    }
    // No.876
    // ê‡ñæ:8a53
    // 0x8a53 (Windows-31J)
    // 0x6168 (UTF-16BE)
    if (argCheck == 'äS') {
        return true;
    }
    // No.877
    // ê‡ñæ:8a54
    // 0x8a54 (Windows-31J)
    // 0x6982 (UTF-16BE)
    if (argCheck == 'äT') {
        return true;
    }
    // No.878
    // ê‡ñæ:8a55
    // 0x8a55 (Windows-31J)
    // 0x6daf (UTF-16BE)
    if (argCheck == 'äU') {
        return true;
    }
    // No.879
    // ê‡ñæ:8a56
    // 0x8a56 (Windows-31J)
    // 0x788d (UTF-16BE)
    if (argCheck == 'äV') {
        return true;
    }
    // No.880
    // ê‡ñæ:8a57
    // 0x8a57 (Windows-31J)
    // 0x84cb (UTF-16BE)
    if (argCheck == 'äW') {
        return true;
    }
    // No.881
    // ê‡ñæ:8a58
    // 0x8a58 (Windows-31J)
    // 0x8857 (UTF-16BE)
    if (argCheck == 'äX') {
        return true;
    }
    // No.882
    // ê‡ñæ:8a59
    // 0x8a59 (Windows-31J)
    // 0x8a72 (UTF-16BE)
    if (argCheck == 'äY') {
        return true;
    }
    // No.883
    // ê‡ñæ:8a5a
    // 0x8a5a (Windows-31J)
    // 0x93a7 (UTF-16BE)
    if (argCheck == 'äZ') {
        return true;
    }
    // No.884
    // ê‡ñæ:8a5b
    // 0x8a5b (Windows-31J)
    // 0x9ab8 (UTF-16BE)
    if (argCheck == 'ä[') {
        return true;
    }
    // No.885
    // ê‡ñæ:8a5c
    // 0x8a5c (Windows-31J)
    // 0x6d6c (UTF-16BE)
    if (argCheck == 'ä\') {
        return true;
    }
    // No.886
    // ê‡ñæ:8a5d
    // 0x8a5d (Windows-31J)
    // 0x99a8 (UTF-16BE)
    if (argCheck == 'ä]') {
        return true;
    }
    // No.887
    // ê‡ñæ:8a5e
    // 0x8a5e (Windows-31J)
    // 0x86d9 (UTF-16BE)
    if (argCheck == 'ä^') {
        return true;
    }
    // No.888
    // ê‡ñæ:8a5f
    // 0x8a5f (Windows-31J)
    // 0x57a3 (UTF-16BE)
    if (argCheck == 'ä_') {
        return true;
    }
    // No.889
    // ê‡ñæ:8a60
    // 0x8a60 (Windows-31J)
    // 0x67ff (UTF-16BE)
    if (argCheck == 'ä`') {
        return true;
    }
    // No.890
    // ê‡ñæ:8a61
    // 0x8a61 (Windows-31J)
    // 0x86ce (UTF-16BE)
    if (argCheck == 'äa') {
        return true;
    }
    // No.891
    // ê‡ñæ:8a62
    // 0x8a62 (Windows-31J)
    // 0x920e (UTF-16BE)
    if (argCheck == 'äb') {
        return true;
    }
    // No.892
    // ê‡ñæ:8a63
    // 0x8a63 (Windows-31J)
    // 0x5283 (UTF-16BE)
    if (argCheck == 'äc') {
        return true;
    }
    // No.893
    // ê‡ñæ:8a64
    // 0x8a64 (Windows-31J)
    // 0x5687 (UTF-16BE)
    if (argCheck == 'äd') {
        return true;
    }
    // No.894
    // ê‡ñæ:8a65
    // 0x8a65 (Windows-31J)
    // 0x5404 (UTF-16BE)
    if (argCheck == 'äe') {
        return true;
    }
    // No.895
    // ê‡ñæ:8a66
    // 0x8a66 (Windows-31J)
    // 0x5ed3 (UTF-16BE)
    if (argCheck == 'äf') {
        return true;
    }
    // No.896
    // ê‡ñæ:8a67
    // 0x8a67 (Windows-31J)
    // 0x62e1 (UTF-16BE)
    if (argCheck == 'äg') {
        return true;
    }
    // No.897
    // ê‡ñæ:8a68
    // 0x8a68 (Windows-31J)
    // 0x64b9 (UTF-16BE)
    if (argCheck == 'äh') {
        return true;
    }
    // No.898
    // ê‡ñæ:8a69
    // 0x8a69 (Windows-31J)
    // 0x683c (UTF-16BE)
    if (argCheck == 'äi') {
        return true;
    }
    // No.899
    // ê‡ñæ:8a6a
    // 0x8a6a (Windows-31J)
    // 0x6838 (UTF-16BE)
    if (argCheck == 'äj') {
        return true;
    }
    // No.900
    // ê‡ñæ:8a6b
    // 0x8a6b (Windows-31J)
    // 0x6bbb (UTF-16BE)
    if (argCheck == 'äk') {
        return true;
    }
    // No.901
    // ê‡ñæ:8a6c
    // 0x8a6c (Windows-31J)
    // 0x7372 (UTF-16BE)
    if (argCheck == 'äl') {
        return true;
    }
    // No.902
    // ê‡ñæ:8a6d
    // 0x8a6d (Windows-31J)
    // 0x78ba (UTF-16BE)
    if (argCheck == 'äm') {
        return true;
    }
    // No.903
    // ê‡ñæ:8a6e
    // 0x8a6e (Windows-31J)
    // 0x7a6b (UTF-16BE)
    if (argCheck == 'än') {
        return true;
    }
    // No.904
    // ê‡ñæ:8a6f
    // 0x8a6f (Windows-31J)
    // 0x899a (UTF-16BE)
    if (argCheck == 'äo') {
        return true;
    }
    // No.905
    // ê‡ñæ:8a70
    // 0x8a70 (Windows-31J)
    // 0x89d2 (UTF-16BE)
    if (argCheck == 'äp') {
        return true;
    }
    // No.906
    // ê‡ñæ:8a71
    // 0x8a71 (Windows-31J)
    // 0x8d6b (UTF-16BE)
    if (argCheck == 'äq') {
        return true;
    }
    // No.907
    // ê‡ñæ:8a72
    // 0x8a72 (Windows-31J)
    // 0x8f03 (UTF-16BE)
    if (argCheck == 'är') {
        return true;
    }
    // No.908
    // ê‡ñæ:8a73
    // 0x8a73 (Windows-31J)
    // 0x90ed (UTF-16BE)
    if (argCheck == 'äs') {
        return true;
    }
    // No.909
    // ê‡ñæ:8a74
    // 0x8a74 (Windows-31J)
    // 0x95a3 (UTF-16BE)
    if (argCheck == 'ät') {
        return true;
    }
    // No.910
    // ê‡ñæ:8a75
    // 0x8a75 (Windows-31J)
    // 0x9694 (UTF-16BE)
    if (argCheck == 'äu') {
        return true;
    }
    // No.911
    // ê‡ñæ:8a76
    // 0x8a76 (Windows-31J)
    // 0x9769 (UTF-16BE)
    if (argCheck == 'äv') {
        return true;
    }
    // No.912
    // ê‡ñæ:8a77
    // 0x8a77 (Windows-31J)
    // 0x5b66 (UTF-16BE)
    if (argCheck == 'äw') {
        return true;
    }
    // No.913
    // ê‡ñæ:8a78
    // 0x8a78 (Windows-31J)
    // 0x5cb3 (UTF-16BE)
    if (argCheck == 'äx') {
        return true;
    }
    // No.914
    // ê‡ñæ:8a79
    // 0x8a79 (Windows-31J)
    // 0x697d (UTF-16BE)
    if (argCheck == 'äy') {
        return true;
    }
    // No.915
    // ê‡ñæ:8a7a
    // 0x8a7a (Windows-31J)
    // 0x984d (UTF-16BE)
    if (argCheck == 'äz') {
        return true;
    }
    // No.916
    // ê‡ñæ:8a7b
    // 0x8a7b (Windows-31J)
    // 0x984e (UTF-16BE)
    if (argCheck == 'ä{') {
        return true;
    }
    // No.917
    // ê‡ñæ:8a7c
    // 0x8a7c (Windows-31J)
    // 0x639b (UTF-16BE)
    if (argCheck == 'ä|') {
        return true;
    }
    // No.918
    // ê‡ñæ:8a7d
    // 0x8a7d (Windows-31J)
    // 0x7b20 (UTF-16BE)
    if (argCheck == 'ä}') {
        return true;
    }
    // No.919
    // ê‡ñæ:8a7e
    // 0x8a7e (Windows-31J)
    // 0x6a2b (UTF-16BE)
    if (argCheck == 'ä~') {
        return true;
    }
    // No.920
    // ê‡ñæ:8a80
    // 0x8a80 (Windows-31J)
    // 0x6a7f (UTF-16BE)
    if (argCheck == 'äÄ') {
        return true;
    }
    // No.921
    // ê‡ñæ:8a81
    // 0x8a81 (Windows-31J)
    // 0x68b6 (UTF-16BE)
    if (argCheck == 'äÅ') {
        return true;
    }
    // No.922
    // ê‡ñæ:8a82
    // 0x8a82 (Windows-31J)
    // 0x9c0d (UTF-16BE)
    if (argCheck == 'äÇ') {
        return true;
    }
    // No.923
    // ê‡ñæ:8a83
    // 0x8a83 (Windows-31J)
    // 0x6f5f (UTF-16BE)
    if (argCheck == 'äÉ') {
        return true;
    }
    // No.924
    // ê‡ñæ:8a84
    // 0x8a84 (Windows-31J)
    // 0x5272 (UTF-16BE)
    if (argCheck == 'äÑ') {
        return true;
    }
    // No.925
    // ê‡ñæ:8a85
    // 0x8a85 (Windows-31J)
    // 0x559d (UTF-16BE)
    if (argCheck == 'äÖ') {
        return true;
    }
    // No.926
    // ê‡ñæ:8a86
    // 0x8a86 (Windows-31J)
    // 0x6070 (UTF-16BE)
    if (argCheck == 'äÜ') {
        return true;
    }
    // No.927
    // ê‡ñæ:8a87
    // 0x8a87 (Windows-31J)
    // 0x62ec (UTF-16BE)
    if (argCheck == 'äá') {
        return true;
    }
    // No.928
    // ê‡ñæ:8a88
    // 0x8a88 (Windows-31J)
    // 0x6d3b (UTF-16BE)
    if (argCheck == 'äà') {
        return true;
    }
    // No.929
    // ê‡ñæ:8a89
    // 0x8a89 (Windows-31J)
    // 0x6e07 (UTF-16BE)
    if (argCheck == 'äâ') {
        return true;
    }
    // No.930
    // ê‡ñæ:8a8a
    // 0x8a8a (Windows-31J)
    // 0x6ed1 (UTF-16BE)
    if (argCheck == 'ää') {
        return true;
    }
    // No.931
    // ê‡ñæ:8a8b
    // 0x8a8b (Windows-31J)
    // 0x845b (UTF-16BE)
    if (argCheck == 'äã') {
        return true;
    }
    // No.932
    // ê‡ñæ:8a8c
    // 0x8a8c (Windows-31J)
    // 0x8910 (UTF-16BE)
    if (argCheck == 'äå') {
        return true;
    }
    // No.933
    // ê‡ñæ:8a8d
    // 0x8a8d (Windows-31J)
    // 0x8f44 (UTF-16BE)
    if (argCheck == 'äç') {
        return true;
    }
    // No.934
    // ê‡ñæ:8a8e
    // 0x8a8e (Windows-31J)
    // 0x4e14 (UTF-16BE)
    if (argCheck == 'äé') {
        return true;
    }
    // No.935
    // ê‡ñæ:8a8f
    // 0x8a8f (Windows-31J)
    // 0x9c39 (UTF-16BE)
    if (argCheck == 'äè') {
        return true;
    }
    // No.936
    // ê‡ñæ:8a90
    // 0x8a90 (Windows-31J)
    // 0x53f6 (UTF-16BE)
    if (argCheck == 'äê') {
        return true;
    }
    // No.937
    // ê‡ñæ:8a91
    // 0x8a91 (Windows-31J)
    // 0x691b (UTF-16BE)
    if (argCheck == 'äë') {
        return true;
    }
    // No.938
    // ê‡ñæ:8a92
    // 0x8a92 (Windows-31J)
    // 0x6a3a (UTF-16BE)
    if (argCheck == 'äí') {
        return true;
    }
    // No.939
    // ê‡ñæ:8a93
    // 0x8a93 (Windows-31J)
    // 0x9784 (UTF-16BE)
    if (argCheck == 'äì') {
        return true;
    }
    // No.940
    // ê‡ñæ:8a94
    // 0x8a94 (Windows-31J)
    // 0x682a (UTF-16BE)
    if (argCheck == 'äî') {
        return true;
    }
    // No.941
    // ê‡ñæ:8a95
    // 0x8a95 (Windows-31J)
    // 0x515c (UTF-16BE)
    if (argCheck == 'äï') {
        return true;
    }
    // No.942
    // ê‡ñæ:8a96
    // 0x8a96 (Windows-31J)
    // 0x7ac3 (UTF-16BE)
    if (argCheck == 'äñ') {
        return true;
    }
    // No.943
    // ê‡ñæ:8a97
    // 0x8a97 (Windows-31J)
    // 0x84b2 (UTF-16BE)
    if (argCheck == 'äó') {
        return true;
    }
    // No.944
    // ê‡ñæ:8a98
    // 0x8a98 (Windows-31J)
    // 0x91dc (UTF-16BE)
    if (argCheck == 'äò') {
        return true;
    }
    // No.945
    // ê‡ñæ:8a99
    // 0x8a99 (Windows-31J)
    // 0x938c (UTF-16BE)
    if (argCheck == 'äô') {
        return true;
    }
    // No.946
    // ê‡ñæ:8a9a
    // 0x8a9a (Windows-31J)
    // 0x565b (UTF-16BE)
    if (argCheck == 'äö') {
        return true;
    }
    // No.947
    // ê‡ñæ:8a9b
    // 0x8a9b (Windows-31J)
    // 0x9d28 (UTF-16BE)
    if (argCheck == 'äõ') {
        return true;
    }
    // No.948
    // ê‡ñæ:8a9c
    // 0x8a9c (Windows-31J)
    // 0x6822 (UTF-16BE)
    if (argCheck == 'äú') {
        return true;
    }
    // No.949
    // ê‡ñæ:8a9d
    // 0x8a9d (Windows-31J)
    // 0x8305 (UTF-16BE)
    if (argCheck == 'äù') {
        return true;
    }
    // No.950
    // ê‡ñæ:8a9e
    // 0x8a9e (Windows-31J)
    // 0x8431 (UTF-16BE)
    if (argCheck == 'äû') {
        return true;
    }
    // No.951
    // ê‡ñæ:8a9f
    // 0x8a9f (Windows-31J)
    // 0x7ca5 (UTF-16BE)
    if (argCheck == 'äü') {
        return true;
    }
    // No.952
    // ê‡ñæ:8aa0
    // 0x8aa0 (Windows-31J)
    // 0x5208 (UTF-16BE)
    if (argCheck == 'ä†') {
        return true;
    }
    // No.953
    // ê‡ñæ:8aa1
    // 0x8aa1 (Windows-31J)
    // 0x82c5 (UTF-16BE)
    if (argCheck == 'ä°') {
        return true;
    }
    // No.954
    // ê‡ñæ:8aa2
    // 0x8aa2 (Windows-31J)
    // 0x74e6 (UTF-16BE)
    if (argCheck == 'ä¢') {
        return true;
    }
    // No.955
    // ê‡ñæ:8aa3
    // 0x8aa3 (Windows-31J)
    // 0x4e7e (UTF-16BE)
    if (argCheck == 'ä£') {
        return true;
    }
    // No.956
    // ê‡ñæ:8aa4
    // 0x8aa4 (Windows-31J)
    // 0x4f83 (UTF-16BE)
    if (argCheck == 'ä§') {
        return true;
    }
    // No.957
    // ê‡ñæ:8aa5
    // 0x8aa5 (Windows-31J)
    // 0x51a0 (UTF-16BE)
    if (argCheck == 'ä•') {
        return true;
    }
    // No.958
    // ê‡ñæ:8aa6
    // 0x8aa6 (Windows-31J)
    // 0x5bd2 (UTF-16BE)
    if (argCheck == 'ä¶') {
        return true;
    }
    // No.959
    // ê‡ñæ:8aa7
    // 0x8aa7 (Windows-31J)
    // 0x520a (UTF-16BE)
    if (argCheck == 'äß') {
        return true;
    }
    // No.960
    // ê‡ñæ:8aa8
    // 0x8aa8 (Windows-31J)
    // 0x52d8 (UTF-16BE)
    if (argCheck == 'ä®') {
        return true;
    }
    // No.961
    // ê‡ñæ:8aa9
    // 0x8aa9 (Windows-31J)
    // 0x52e7 (UTF-16BE)
    if (argCheck == 'ä©') {
        return true;
    }
    // No.962
    // ê‡ñæ:8aaa
    // 0x8aaa (Windows-31J)
    // 0x5dfb (UTF-16BE)
    if (argCheck == 'ä™') {
        return true;
    }
    // No.963
    // ê‡ñæ:8aab
    // 0x8aab (Windows-31J)
    // 0x559a (UTF-16BE)
    if (argCheck == 'ä´') {
        return true;
    }
    // No.964
    // ê‡ñæ:8aac
    // 0x8aac (Windows-31J)
    // 0x582a (UTF-16BE)
    if (argCheck == 'ä¨') {
        return true;
    }
    // No.965
    // ê‡ñæ:8aad
    // 0x8aad (Windows-31J)
    // 0x59e6 (UTF-16BE)
    if (argCheck == 'ä≠') {
        return true;
    }
    // No.966
    // ê‡ñæ:8aae
    // 0x8aae (Windows-31J)
    // 0x5b8c (UTF-16BE)
    if (argCheck == 'äÆ') {
        return true;
    }
    // No.967
    // ê‡ñæ:8aaf
    // 0x8aaf (Windows-31J)
    // 0x5b98 (UTF-16BE)
    if (argCheck == 'äØ') {
        return true;
    }
    // No.968
    // ê‡ñæ:8ab0
    // 0x8ab0 (Windows-31J)
    // 0x5bdb (UTF-16BE)
    if (argCheck == 'ä∞') {
        return true;
    }
    // No.969
    // ê‡ñæ:8ab1
    // 0x8ab1 (Windows-31J)
    // 0x5e72 (UTF-16BE)
    if (argCheck == 'ä±') {
        return true;
    }
    // No.970
    // ê‡ñæ:8ab2
    // 0x8ab2 (Windows-31J)
    // 0x5e79 (UTF-16BE)
    if (argCheck == 'ä≤') {
        return true;
    }
    // No.971
    // ê‡ñæ:8ab3
    // 0x8ab3 (Windows-31J)
    // 0x60a3 (UTF-16BE)
    if (argCheck == 'ä≥') {
        return true;
    }
    // No.972
    // ê‡ñæ:8ab4
    // 0x8ab4 (Windows-31J)
    // 0x611f (UTF-16BE)
    if (argCheck == 'ä¥') {
        return true;
    }
    // No.973
    // ê‡ñæ:8ab5
    // 0x8ab5 (Windows-31J)
    // 0x6163 (UTF-16BE)
    if (argCheck == 'äµ') {
        return true;
    }
    // No.974
    // ê‡ñæ:8ab6
    // 0x8ab6 (Windows-31J)
    // 0x61be (UTF-16BE)
    if (argCheck == 'ä∂') {
        return true;
    }
    // No.975
    // ê‡ñæ:8ab7
    // 0x8ab7 (Windows-31J)
    // 0x63db (UTF-16BE)
    if (argCheck == 'ä∑') {
        return true;
    }
    // No.976
    // ê‡ñæ:8ab8
    // 0x8ab8 (Windows-31J)
    // 0x6562 (UTF-16BE)
    if (argCheck == 'ä∏') {
        return true;
    }
    // No.977
    // ê‡ñæ:8ab9
    // 0x8ab9 (Windows-31J)
    // 0x67d1 (UTF-16BE)
    if (argCheck == 'äπ') {
        return true;
    }
    // No.978
    // ê‡ñæ:8aba
    // 0x8aba (Windows-31J)
    // 0x6853 (UTF-16BE)
    if (argCheck == 'ä∫') {
        return true;
    }
    // No.979
    // ê‡ñæ:8abb
    // 0x8abb (Windows-31J)
    // 0x68fa (UTF-16BE)
    if (argCheck == 'äª') {
        return true;
    }
    // No.980
    // ê‡ñæ:8abc
    // 0x8abc (Windows-31J)
    // 0x6b3e (UTF-16BE)
    if (argCheck == 'äº') {
        return true;
    }
    // No.981
    // ê‡ñæ:8abd
    // 0x8abd (Windows-31J)
    // 0x6b53 (UTF-16BE)
    if (argCheck == 'äΩ') {
        return true;
    }
    // No.982
    // ê‡ñæ:8abe
    // 0x8abe (Windows-31J)
    // 0x6c57 (UTF-16BE)
    if (argCheck == 'äæ') {
        return true;
    }
    // No.983
    // ê‡ñæ:8abf
    // 0x8abf (Windows-31J)
    // 0x6f22 (UTF-16BE)
    if (argCheck == 'äø') {
        return true;
    }
    // No.984
    // ê‡ñæ:8ac0
    // 0x8ac0 (Windows-31J)
    // 0x6f97 (UTF-16BE)
    if (argCheck == 'ä¿') {
        return true;
    }
    // No.985
    // ê‡ñæ:8ac1
    // 0x8ac1 (Windows-31J)
    // 0x6f45 (UTF-16BE)
    if (argCheck == 'ä¡') {
        return true;
    }
    // No.986
    // ê‡ñæ:8ac2
    // 0x8ac2 (Windows-31J)
    // 0x74b0 (UTF-16BE)
    if (argCheck == 'ä¬') {
        return true;
    }
    // No.987
    // ê‡ñæ:8ac3
    // 0x8ac3 (Windows-31J)
    // 0x7518 (UTF-16BE)
    if (argCheck == 'ä√') {
        return true;
    }
    // No.988
    // ê‡ñæ:8ac4
    // 0x8ac4 (Windows-31J)
    // 0x76e3 (UTF-16BE)
    if (argCheck == 'äƒ') {
        return true;
    }
    // No.989
    // ê‡ñæ:8ac5
    // 0x8ac5 (Windows-31J)
    // 0x770b (UTF-16BE)
    if (argCheck == 'ä≈') {
        return true;
    }
    // No.990
    // ê‡ñæ:8ac6
    // 0x8ac6 (Windows-31J)
    // 0x7aff (UTF-16BE)
    if (argCheck == 'ä∆') {
        return true;
    }
    // No.991
    // ê‡ñæ:8ac7
    // 0x8ac7 (Windows-31J)
    // 0x7ba1 (UTF-16BE)
    if (argCheck == 'ä«') {
        return true;
    }
    // No.992
    // ê‡ñæ:8ac8
    // 0x8ac8 (Windows-31J)
    // 0x7c21 (UTF-16BE)
    if (argCheck == 'ä»') {
        return true;
    }
    // No.993
    // ê‡ñæ:8ac9
    // 0x8ac9 (Windows-31J)
    // 0x7de9 (UTF-16BE)
    if (argCheck == 'ä…') {
        return true;
    }
    // No.994
    // ê‡ñæ:8aca
    // 0x8aca (Windows-31J)
    // 0x7f36 (UTF-16BE)
    if (argCheck == 'ä ') {
        return true;
    }
    // No.995
    // ê‡ñæ:8acb
    // 0x8acb (Windows-31J)
    // 0x7ff0 (UTF-16BE)
    if (argCheck == 'äÀ') {
        return true;
    }
    // No.996
    // ê‡ñæ:8acc
    // 0x8acc (Windows-31J)
    // 0x809d (UTF-16BE)
    if (argCheck == 'äÃ') {
        return true;
    }
    // No.997
    // ê‡ñæ:8acd
    // 0x8acd (Windows-31J)
    // 0x8266 (UTF-16BE)
    if (argCheck == 'äÕ') {
        return true;
    }
    // No.998
    // ê‡ñæ:8ace
    // 0x8ace (Windows-31J)
    // 0x839e (UTF-16BE)
    if (argCheck == 'äŒ') {
        return true;
    }
    // No.999
    // ê‡ñæ:8acf
    // 0x8acf (Windows-31J)
    // 0x89b3 (UTF-16BE)
    if (argCheck == 'äœ') {
        return true;
    }
    // No.1000
    // ê‡ñæ:8ad0
    // 0x8ad0 (Windows-31J)
    // 0x8acc (UTF-16BE)
    if (argCheck == 'ä–') {
        return true;
    }
    // No.1001
    // ê‡ñæ:8ad1
    // 0x8ad1 (Windows-31J)
    // 0x8cab (UTF-16BE)
    if (argCheck == 'ä—') {
        return true;
    }
    // No.1002
    // ê‡ñæ:8ad2
    // 0x8ad2 (Windows-31J)
    // 0x9084 (UTF-16BE)
    if (argCheck == 'ä“') {
        return true;
    }
    // No.1003
    // ê‡ñæ:8ad3
    // 0x8ad3 (Windows-31J)
    // 0x9451 (UTF-16BE)
    if (argCheck == 'ä”') {
        return true;
    }
    // No.1004
    // ê‡ñæ:8ad4
    // 0x8ad4 (Windows-31J)
    // 0x9593 (UTF-16BE)
    if (argCheck == 'ä‘') {
        return true;
    }
    // No.1005
    // ê‡ñæ:8ad5
    // 0x8ad5 (Windows-31J)
    // 0x9591 (UTF-16BE)
    if (argCheck == 'ä’') {
        return true;
    }
    // No.1006
    // ê‡ñæ:8ad6
    // 0x8ad6 (Windows-31J)
    // 0x95a2 (UTF-16BE)
    if (argCheck == 'ä÷') {
        return true;
    }
    // No.1007
    // ê‡ñæ:8ad7
    // 0x8ad7 (Windows-31J)
    // 0x9665 (UTF-16BE)
    if (argCheck == 'ä◊') {
        return true;
    }
    // No.1008
    // ê‡ñæ:8ad8
    // 0x8ad8 (Windows-31J)
    // 0x97d3 (UTF-16BE)
    if (argCheck == 'äÿ') {
        return true;
    }
    // No.1009
    // ê‡ñæ:8ad9
    // 0x8ad9 (Windows-31J)
    // 0x9928 (UTF-16BE)
    if (argCheck == 'äŸ') {
        return true;
    }
    // No.1010
    // ê‡ñæ:8ada
    // 0x8ada (Windows-31J)
    // 0x8218 (UTF-16BE)
    if (argCheck == 'ä⁄') {
        return true;
    }
    // No.1011
    // ê‡ñæ:8adb
    // 0x8adb (Windows-31J)
    // 0x4e38 (UTF-16BE)
    if (argCheck == 'ä€') {
        return true;
    }
    // No.1012
    // ê‡ñæ:8adc
    // 0x8adc (Windows-31J)
    // 0x542b (UTF-16BE)
    if (argCheck == 'ä‹') {
        return true;
    }
    // No.1013
    // ê‡ñæ:8add
    // 0x8add (Windows-31J)
    // 0x5cb8 (UTF-16BE)
    if (argCheck == 'ä›') {
        return true;
    }
    // No.1014
    // ê‡ñæ:8ade
    // 0x8ade (Windows-31J)
    // 0x5dcc (UTF-16BE)
    if (argCheck == 'äﬁ') {
        return true;
    }
    // No.1015
    // ê‡ñæ:8adf
    // 0x8adf (Windows-31J)
    // 0x73a9 (UTF-16BE)
    if (argCheck == 'äﬂ') {
        return true;
    }
    // No.1016
    // ê‡ñæ:8ae0
    // 0x8ae0 (Windows-31J)
    // 0x764c (UTF-16BE)
    if (argCheck == 'ä‡') {
        return true;
    }
    // No.1017
    // ê‡ñæ:8ae1
    // 0x8ae1 (Windows-31J)
    // 0x773c (UTF-16BE)
    if (argCheck == 'ä·') {
        return true;
    }
    // No.1018
    // ê‡ñæ:8ae2
    // 0x8ae2 (Windows-31J)
    // 0x5ca9 (UTF-16BE)
    if (argCheck == 'ä‚') {
        return true;
    }
    // No.1019
    // ê‡ñæ:8ae3
    // 0x8ae3 (Windows-31J)
    // 0x7feb (UTF-16BE)
    if (argCheck == 'ä„') {
        return true;
    }
    // No.1020
    // ê‡ñæ:8ae4
    // 0x8ae4 (Windows-31J)
    // 0x8d0b (UTF-16BE)
    if (argCheck == 'ä‰') {
        return true;
    }
    // No.1021
    // ê‡ñæ:8ae5
    // 0x8ae5 (Windows-31J)
    // 0x96c1 (UTF-16BE)
    if (argCheck == 'äÂ') {
        return true;
    }
    // No.1022
    // ê‡ñæ:8ae6
    // 0x8ae6 (Windows-31J)
    // 0x9811 (UTF-16BE)
    if (argCheck == 'äÊ') {
        return true;
    }
    // No.1023
    // ê‡ñæ:8ae7
    // 0x8ae7 (Windows-31J)
    // 0x9854 (UTF-16BE)
    if (argCheck == 'äÁ') {
        return true;
    }
    // No.1024
    // ê‡ñæ:8ae8
    // 0x8ae8 (Windows-31J)
    // 0x9858 (UTF-16BE)
    if (argCheck == 'äË') {
        return true;
    }
    // No.1025
    // ê‡ñæ:8ae9
    // 0x8ae9 (Windows-31J)
    // 0x4f01 (UTF-16BE)
    if (argCheck == 'äÈ') {
        return true;
    }
    // No.1026
    // ê‡ñæ:8aea
    // 0x8aea (Windows-31J)
    // 0x4f0e (UTF-16BE)
    if (argCheck == 'äÍ') {
        return true;
    }
    // No.1027
    // ê‡ñæ:8aeb
    // 0x8aeb (Windows-31J)
    // 0x5371 (UTF-16BE)
    if (argCheck == 'äÎ') {
        return true;
    }
    // No.1028
    // ê‡ñæ:8aec
    // 0x8aec (Windows-31J)
    // 0x559c (UTF-16BE)
    if (argCheck == 'äÏ') {
        return true;
    }
    // No.1029
    // ê‡ñæ:8aed
    // 0x8aed (Windows-31J)
    // 0x5668 (UTF-16BE)
    if (argCheck == 'äÌ') {
        return true;
    }
    // No.1030
    // ê‡ñæ:8aee
    // 0x8aee (Windows-31J)
    // 0x57fa (UTF-16BE)
    if (argCheck == 'äÓ') {
        return true;
    }
    // No.1031
    // ê‡ñæ:8aef
    // 0x8aef (Windows-31J)
    // 0x5947 (UTF-16BE)
    if (argCheck == 'äÔ') {
        return true;
    }
    // No.1032
    // ê‡ñæ:8af0
    // 0x8af0 (Windows-31J)
    // 0x5b09 (UTF-16BE)
    if (argCheck == 'ä') {
        return true;
    }
    // No.1033
    // ê‡ñæ:8af1
    // 0x8af1 (Windows-31J)
    // 0x5bc4 (UTF-16BE)
    if (argCheck == 'äÒ') {
        return true;
    }
    // No.1034
    // ê‡ñæ:8af2
    // 0x8af2 (Windows-31J)
    // 0x5c90 (UTF-16BE)
    if (argCheck == 'äÚ') {
        return true;
    }
    // No.1035
    // ê‡ñæ:8af3
    // 0x8af3 (Windows-31J)
    // 0x5e0c (UTF-16BE)
    if (argCheck == 'äÛ') {
        return true;
    }
    // No.1036
    // ê‡ñæ:8af4
    // 0x8af4 (Windows-31J)
    // 0x5e7e (UTF-16BE)
    if (argCheck == 'äÙ') {
        return true;
    }
    // No.1037
    // ê‡ñæ:8af5
    // 0x8af5 (Windows-31J)
    // 0x5fcc (UTF-16BE)
    if (argCheck == 'äı') {
        return true;
    }
    // No.1038
    // ê‡ñæ:8af6
    // 0x8af6 (Windows-31J)
    // 0x63ee (UTF-16BE)
    if (argCheck == 'äˆ') {
        return true;
    }
    // No.1039
    // ê‡ñæ:8af7
    // 0x8af7 (Windows-31J)
    // 0x673a (UTF-16BE)
    if (argCheck == 'ä˜') {
        return true;
    }
    // No.1040
    // ê‡ñæ:8af8
    // 0x8af8 (Windows-31J)
    // 0x65d7 (UTF-16BE)
    if (argCheck == 'ä¯') {
        return true;
    }
    // No.1041
    // ê‡ñæ:8af9
    // 0x8af9 (Windows-31J)
    // 0x65e2 (UTF-16BE)
    if (argCheck == 'ä˘') {
        return true;
    }
    // No.1042
    // ê‡ñæ:8afa
    // 0x8afa (Windows-31J)
    // 0x671f (UTF-16BE)
    if (argCheck == 'ä˙') {
        return true;
    }
    // No.1043
    // ê‡ñæ:8afb
    // 0x8afb (Windows-31J)
    // 0x68cb (UTF-16BE)
    if (argCheck == 'ä˚') {
        return true;
    }
    // No.1044
    // ê‡ñæ:8afc
    // 0x8afc (Windows-31J)
    // 0x68c4 (UTF-16BE)
    if (argCheck == 'ä¸') {
        return true;
    }
    // No.1045
    // ê‡ñæ:8b40
    // 0x8b40 (Windows-31J)
    // 0x6a5f (UTF-16BE)
    if (argCheck == 'ã@') {
        return true;
    }
    // No.1046
    // ê‡ñæ:8b41
    // 0x8b41 (Windows-31J)
    // 0x5e30 (UTF-16BE)
    if (argCheck == 'ãA') {
        return true;
    }
    // No.1047
    // ê‡ñæ:8b42
    // 0x8b42 (Windows-31J)
    // 0x6bc5 (UTF-16BE)
    if (argCheck == 'ãB') {
        return true;
    }
    // No.1048
    // ê‡ñæ:8b43
    // 0x8b43 (Windows-31J)
    // 0x6c17 (UTF-16BE)
    if (argCheck == 'ãC') {
        return true;
    }
    // No.1049
    // ê‡ñæ:8b44
    // 0x8b44 (Windows-31J)
    // 0x6c7d (UTF-16BE)
    if (argCheck == 'ãD') {
        return true;
    }
    // No.1050
    // ê‡ñæ:8b45
    // 0x8b45 (Windows-31J)
    // 0x757f (UTF-16BE)
    if (argCheck == 'ãE') {
        return true;
    }
    // No.1051
    // ê‡ñæ:8b46
    // 0x8b46 (Windows-31J)
    // 0x7948 (UTF-16BE)
    if (argCheck == 'ãF') {
        return true;
    }
    // No.1052
    // ê‡ñæ:8b47
    // 0x8b47 (Windows-31J)
    // 0x5b63 (UTF-16BE)
    if (argCheck == 'ãG') {
        return true;
    }
    // No.1053
    // ê‡ñæ:8b48
    // 0x8b48 (Windows-31J)
    // 0x7a00 (UTF-16BE)
    if (argCheck == 'ãH') {
        return true;
    }
    // No.1054
    // ê‡ñæ:8b49
    // 0x8b49 (Windows-31J)
    // 0x7d00 (UTF-16BE)
    if (argCheck == 'ãI') {
        return true;
    }
    // No.1055
    // ê‡ñæ:8b4a
    // 0x8b4a (Windows-31J)
    // 0x5fbd (UTF-16BE)
    if (argCheck == 'ãJ') {
        return true;
    }
    // No.1056
    // ê‡ñæ:8b4b
    // 0x8b4b (Windows-31J)
    // 0x898f (UTF-16BE)
    if (argCheck == 'ãK') {
        return true;
    }
    // No.1057
    // ê‡ñæ:8b4c
    // 0x8b4c (Windows-31J)
    // 0x8a18 (UTF-16BE)
    if (argCheck == 'ãL') {
        return true;
    }
    // No.1058
    // ê‡ñæ:8b4d
    // 0x8b4d (Windows-31J)
    // 0x8cb4 (UTF-16BE)
    if (argCheck == 'ãM') {
        return true;
    }
    // No.1059
    // ê‡ñæ:8b4e
    // 0x8b4e (Windows-31J)
    // 0x8d77 (UTF-16BE)
    if (argCheck == 'ãN') {
        return true;
    }
    // No.1060
    // ê‡ñæ:8b4f
    // 0x8b4f (Windows-31J)
    // 0x8ecc (UTF-16BE)
    if (argCheck == 'ãO') {
        return true;
    }
    // No.1061
    // ê‡ñæ:8b50
    // 0x8b50 (Windows-31J)
    // 0x8f1d (UTF-16BE)
    if (argCheck == 'ãP') {
        return true;
    }
    // No.1062
    // ê‡ñæ:8b51
    // 0x8b51 (Windows-31J)
    // 0x98e2 (UTF-16BE)
    if (argCheck == 'ãQ') {
        return true;
    }
    // No.1063
    // ê‡ñæ:8b52
    // 0x8b52 (Windows-31J)
    // 0x9a0e (UTF-16BE)
    if (argCheck == 'ãR') {
        return true;
    }
    // No.1064
    // ê‡ñæ:8b53
    // 0x8b53 (Windows-31J)
    // 0x9b3c (UTF-16BE)
    if (argCheck == 'ãS') {
        return true;
    }
    // No.1065
    // ê‡ñæ:8b54
    // 0x8b54 (Windows-31J)
    // 0x4e80 (UTF-16BE)
    if (argCheck == 'ãT') {
        return true;
    }
    // No.1066
    // ê‡ñæ:8b55
    // 0x8b55 (Windows-31J)
    // 0x507d (UTF-16BE)
    if (argCheck == 'ãU') {
        return true;
    }
    // No.1067
    // ê‡ñæ:8b56
    // 0x8b56 (Windows-31J)
    // 0x5100 (UTF-16BE)
    if (argCheck == 'ãV') {
        return true;
    }
    // No.1068
    // ê‡ñæ:8b57
    // 0x8b57 (Windows-31J)
    // 0x5993 (UTF-16BE)
    if (argCheck == 'ãW') {
        return true;
    }
    // No.1069
    // ê‡ñæ:8b58
    // 0x8b58 (Windows-31J)
    // 0x5b9c (UTF-16BE)
    if (argCheck == 'ãX') {
        return true;
    }
    // No.1070
    // ê‡ñæ:8b59
    // 0x8b59 (Windows-31J)
    // 0x622f (UTF-16BE)
    if (argCheck == 'ãY') {
        return true;
    }
    // No.1071
    // ê‡ñæ:8b5a
    // 0x8b5a (Windows-31J)
    // 0x6280 (UTF-16BE)
    if (argCheck == 'ãZ') {
        return true;
    }
    // No.1072
    // ê‡ñæ:8b5b
    // 0x8b5b (Windows-31J)
    // 0x64ec (UTF-16BE)
    if (argCheck == 'ã[') {
        return true;
    }
    // No.1073
    // ê‡ñæ:8b5c
    // 0x8b5c (Windows-31J)
    // 0x6b3a (UTF-16BE)
    if (argCheck == 'ã\') {
        return true;
    }
    // No.1074
    // ê‡ñæ:8b5d
    // 0x8b5d (Windows-31J)
    // 0x72a0 (UTF-16BE)
    if (argCheck == 'ã]') {
        return true;
    }
    // No.1075
    // ê‡ñæ:8b5e
    // 0x8b5e (Windows-31J)
    // 0x7591 (UTF-16BE)
    if (argCheck == 'ã^') {
        return true;
    }
    // No.1076
    // ê‡ñæ:8b5f
    // 0x8b5f (Windows-31J)
    // 0x7947 (UTF-16BE)
    if (argCheck == 'ã_') {
        return true;
    }
    // No.1077
    // ê‡ñæ:8b60
    // 0x8b60 (Windows-31J)
    // 0x7fa9 (UTF-16BE)
    if (argCheck == 'ã`') {
        return true;
    }
    // No.1078
    // ê‡ñæ:8b61
    // 0x8b61 (Windows-31J)
    // 0x87fb (UTF-16BE)
    if (argCheck == 'ãa') {
        return true;
    }
    // No.1079
    // ê‡ñæ:8b62
    // 0x8b62 (Windows-31J)
    // 0x8abc (UTF-16BE)
    if (argCheck == 'ãb') {
        return true;
    }
    // No.1080
    // ê‡ñæ:8b63
    // 0x8b63 (Windows-31J)
    // 0x8b70 (UTF-16BE)
    if (argCheck == 'ãc') {
        return true;
    }
    // No.1081
    // ê‡ñæ:8b64
    // 0x8b64 (Windows-31J)
    // 0x63ac (UTF-16BE)
    if (argCheck == 'ãd') {
        return true;
    }
    // No.1082
    // ê‡ñæ:8b65
    // 0x8b65 (Windows-31J)
    // 0x83ca (UTF-16BE)
    if (argCheck == 'ãe') {
        return true;
    }
    // No.1083
    // ê‡ñæ:8b66
    // 0x8b66 (Windows-31J)
    // 0x97a0 (UTF-16BE)
    if (argCheck == 'ãf') {
        return true;
    }
    // No.1084
    // ê‡ñæ:8b67
    // 0x8b67 (Windows-31J)
    // 0x5409 (UTF-16BE)
    if (argCheck == 'ãg') {
        return true;
    }
    // No.1085
    // ê‡ñæ:8b68
    // 0x8b68 (Windows-31J)
    // 0x5403 (UTF-16BE)
    if (argCheck == 'ãh') {
        return true;
    }
    // No.1086
    // ê‡ñæ:8b69
    // 0x8b69 (Windows-31J)
    // 0x55ab (UTF-16BE)
    if (argCheck == 'ãi') {
        return true;
    }
    // No.1087
    // ê‡ñæ:8b6a
    // 0x8b6a (Windows-31J)
    // 0x6854 (UTF-16BE)
    if (argCheck == 'ãj') {
        return true;
    }
    // No.1088
    // ê‡ñæ:8b6b
    // 0x8b6b (Windows-31J)
    // 0x6a58 (UTF-16BE)
    if (argCheck == 'ãk') {
        return true;
    }
    // No.1089
    // ê‡ñæ:8b6c
    // 0x8b6c (Windows-31J)
    // 0x8a70 (UTF-16BE)
    if (argCheck == 'ãl') {
        return true;
    }
    // No.1090
    // ê‡ñæ:8b6d
    // 0x8b6d (Windows-31J)
    // 0x7827 (UTF-16BE)
    if (argCheck == 'ãm') {
        return true;
    }
    // No.1091
    // ê‡ñæ:8b6e
    // 0x8b6e (Windows-31J)
    // 0x6775 (UTF-16BE)
    if (argCheck == 'ãn') {
        return true;
    }
    // No.1092
    // ê‡ñæ:8b6f
    // 0x8b6f (Windows-31J)
    // 0x9ecd (UTF-16BE)
    if (argCheck == 'ão') {
        return true;
    }
    // No.1093
    // ê‡ñæ:8b70
    // 0x8b70 (Windows-31J)
    // 0x5374 (UTF-16BE)
    if (argCheck == 'ãp') {
        return true;
    }
    // No.1094
    // ê‡ñæ:8b71
    // 0x8b71 (Windows-31J)
    // 0x5ba2 (UTF-16BE)
    if (argCheck == 'ãq') {
        return true;
    }
    // No.1095
    // ê‡ñæ:8b72
    // 0x8b72 (Windows-31J)
    // 0x811a (UTF-16BE)
    if (argCheck == 'ãr') {
        return true;
    }
    // No.1096
    // ê‡ñæ:8b73
    // 0x8b73 (Windows-31J)
    // 0x8650 (UTF-16BE)
    if (argCheck == 'ãs') {
        return true;
    }
    // No.1097
    // ê‡ñæ:8b74
    // 0x8b74 (Windows-31J)
    // 0x9006 (UTF-16BE)
    if (argCheck == 'ãt') {
        return true;
    }
    // No.1098
    // ê‡ñæ:8b75
    // 0x8b75 (Windows-31J)
    // 0x4e18 (UTF-16BE)
    if (argCheck == 'ãu') {
        return true;
    }
    // No.1099
    // ê‡ñæ:8b76
    // 0x8b76 (Windows-31J)
    // 0x4e45 (UTF-16BE)
    if (argCheck == 'ãv') {
        return true;
    }
    // No.1100
    // ê‡ñæ:8b77
    // 0x8b77 (Windows-31J)
    // 0x4ec7 (UTF-16BE)
    if (argCheck == 'ãw') {
        return true;
    }
    // No.1101
    // ê‡ñæ:8b78
    // 0x8b78 (Windows-31J)
    // 0x4f11 (UTF-16BE)
    if (argCheck == 'ãx') {
        return true;
    }
    // No.1102
    // ê‡ñæ:8b79
    // 0x8b79 (Windows-31J)
    // 0x53ca (UTF-16BE)
    if (argCheck == 'ãy') {
        return true;
    }
    // No.1103
    // ê‡ñæ:8b7a
    // 0x8b7a (Windows-31J)
    // 0x5438 (UTF-16BE)
    if (argCheck == 'ãz') {
        return true;
    }
    // No.1104
    // ê‡ñæ:8b7b
    // 0x8b7b (Windows-31J)
    // 0x5bae (UTF-16BE)
    if (argCheck == 'ã{') {
        return true;
    }
    // No.1105
    // ê‡ñæ:8b7c
    // 0x8b7c (Windows-31J)
    // 0x5f13 (UTF-16BE)
    if (argCheck == 'ã|') {
        return true;
    }
    // No.1106
    // ê‡ñæ:8b7d
    // 0x8b7d (Windows-31J)
    // 0x6025 (UTF-16BE)
    if (argCheck == 'ã}') {
        return true;
    }
    // No.1107
    // ê‡ñæ:8b7e
    // 0x8b7e (Windows-31J)
    // 0x6551 (UTF-16BE)
    if (argCheck == 'ã~') {
        return true;
    }
    // No.1108
    // ê‡ñæ:8b80
    // 0x8b80 (Windows-31J)
    // 0x673d (UTF-16BE)
    if (argCheck == 'ãÄ') {
        return true;
    }
    // No.1109
    // ê‡ñæ:8b81
    // 0x8b81 (Windows-31J)
    // 0x6c42 (UTF-16BE)
    if (argCheck == 'ãÅ') {
        return true;
    }
    // No.1110
    // ê‡ñæ:8b82
    // 0x8b82 (Windows-31J)
    // 0x6c72 (UTF-16BE)
    if (argCheck == 'ãÇ') {
        return true;
    }
    // No.1111
    // ê‡ñæ:8b83
    // 0x8b83 (Windows-31J)
    // 0x6ce3 (UTF-16BE)
    if (argCheck == 'ãÉ') {
        return true;
    }
    // No.1112
    // ê‡ñæ:8b84
    // 0x8b84 (Windows-31J)
    // 0x7078 (UTF-16BE)
    if (argCheck == 'ãÑ') {
        return true;
    }
    // No.1113
    // ê‡ñæ:8b85
    // 0x8b85 (Windows-31J)
    // 0x7403 (UTF-16BE)
    if (argCheck == 'ãÖ') {
        return true;
    }
    // No.1114
    // ê‡ñæ:8b86
    // 0x8b86 (Windows-31J)
    // 0x7a76 (UTF-16BE)
    if (argCheck == 'ãÜ') {
        return true;
    }
    // No.1115
    // ê‡ñæ:8b87
    // 0x8b87 (Windows-31J)
    // 0x7aae (UTF-16BE)
    if (argCheck == 'ãá') {
        return true;
    }
    // No.1116
    // ê‡ñæ:8b88
    // 0x8b88 (Windows-31J)
    // 0x7b08 (UTF-16BE)
    if (argCheck == 'ãà') {
        return true;
    }
    // No.1117
    // ê‡ñæ:8b89
    // 0x8b89 (Windows-31J)
    // 0x7d1a (UTF-16BE)
    if (argCheck == 'ãâ') {
        return true;
    }
    // No.1118
    // ê‡ñæ:8b8a
    // 0x8b8a (Windows-31J)
    // 0x7cfe (UTF-16BE)
    if (argCheck == 'ãä') {
        return true;
    }
    // No.1119
    // ê‡ñæ:8b8b
    // 0x8b8b (Windows-31J)
    // 0x7d66 (UTF-16BE)
    if (argCheck == 'ãã') {
        return true;
    }
    // No.1120
    // ê‡ñæ:8b8c
    // 0x8b8c (Windows-31J)
    // 0x65e7 (UTF-16BE)
    if (argCheck == 'ãå') {
        return true;
    }
    // No.1121
    // ê‡ñæ:8b8d
    // 0x8b8d (Windows-31J)
    // 0x725b (UTF-16BE)
    if (argCheck == 'ãç') {
        return true;
    }
    // No.1122
    // ê‡ñæ:8b8e
    // 0x8b8e (Windows-31J)
    // 0x53bb (UTF-16BE)
    if (argCheck == 'ãé') {
        return true;
    }
    // No.1123
    // ê‡ñæ:8b8f
    // 0x8b8f (Windows-31J)
    // 0x5c45 (UTF-16BE)
    if (argCheck == 'ãè') {
        return true;
    }
    // No.1124
    // ê‡ñæ:8b90
    // 0x8b90 (Windows-31J)
    // 0x5de8 (UTF-16BE)
    if (argCheck == 'ãê') {
        return true;
    }
    // No.1125
    // ê‡ñæ:8b91
    // 0x8b91 (Windows-31J)
    // 0x62d2 (UTF-16BE)
    if (argCheck == 'ãë') {
        return true;
    }
    // No.1126
    // ê‡ñæ:8b92
    // 0x8b92 (Windows-31J)
    // 0x62e0 (UTF-16BE)
    if (argCheck == 'ãí') {
        return true;
    }
    // No.1127
    // ê‡ñæ:8b93
    // 0x8b93 (Windows-31J)
    // 0x6319 (UTF-16BE)
    if (argCheck == 'ãì') {
        return true;
    }
    // No.1128
    // ê‡ñæ:8b94
    // 0x8b94 (Windows-31J)
    // 0x6e20 (UTF-16BE)
    if (argCheck == 'ãî') {
        return true;
    }
    // No.1129
    // ê‡ñæ:8b95
    // 0x8b95 (Windows-31J)
    // 0x865a (UTF-16BE)
    if (argCheck == 'ãï') {
        return true;
    }
    // No.1130
    // ê‡ñæ:8b96
    // 0x8b96 (Windows-31J)
    // 0x8a31 (UTF-16BE)
    if (argCheck == 'ãñ') {
        return true;
    }
    // No.1131
    // ê‡ñæ:8b97
    // 0x8b97 (Windows-31J)
    // 0x8ddd (UTF-16BE)
    if (argCheck == 'ãó') {
        return true;
    }
    // No.1132
    // ê‡ñæ:8b98
    // 0x8b98 (Windows-31J)
    // 0x92f8 (UTF-16BE)
    if (argCheck == 'ãò') {
        return true;
    }
    // No.1133
    // ê‡ñæ:8b99
    // 0x8b99 (Windows-31J)
    // 0x6f01 (UTF-16BE)
    if (argCheck == 'ãô') {
        return true;
    }
    // No.1134
    // ê‡ñæ:8b9a
    // 0x8b9a (Windows-31J)
    // 0x79a6 (UTF-16BE)
    if (argCheck == 'ãö') {
        return true;
    }
    // No.1135
    // ê‡ñæ:8b9b
    // 0x8b9b (Windows-31J)
    // 0x9b5a (UTF-16BE)
    if (argCheck == 'ãõ') {
        return true;
    }
    // No.1136
    // ê‡ñæ:8b9c
    // 0x8b9c (Windows-31J)
    // 0x4ea8 (UTF-16BE)
    if (argCheck == 'ãú') {
        return true;
    }
    // No.1137
    // ê‡ñæ:8b9d
    // 0x8b9d (Windows-31J)
    // 0x4eab (UTF-16BE)
    if (argCheck == 'ãù') {
        return true;
    }
    // No.1138
    // ê‡ñæ:8b9e
    // 0x8b9e (Windows-31J)
    // 0x4eac (UTF-16BE)
    if (argCheck == 'ãû') {
        return true;
    }
    // No.1139
    // ê‡ñæ:8b9f
    // 0x8b9f (Windows-31J)
    // 0x4f9b (UTF-16BE)
    if (argCheck == 'ãü') {
        return true;
    }
    // No.1140
    // ê‡ñæ:8ba0
    // 0x8ba0 (Windows-31J)
    // 0x4fa0 (UTF-16BE)
    if (argCheck == 'ã†') {
        return true;
    }
    // No.1141
    // ê‡ñæ:8ba1
    // 0x8ba1 (Windows-31J)
    // 0x50d1 (UTF-16BE)
    if (argCheck == 'ã°') {
        return true;
    }
    // No.1142
    // ê‡ñæ:8ba2
    // 0x8ba2 (Windows-31J)
    // 0x5147 (UTF-16BE)
    if (argCheck == 'ã¢') {
        return true;
    }
    // No.1143
    // ê‡ñæ:8ba3
    // 0x8ba3 (Windows-31J)
    // 0x7af6 (UTF-16BE)
    if (argCheck == 'ã£') {
        return true;
    }
    // No.1144
    // ê‡ñæ:8ba4
    // 0x8ba4 (Windows-31J)
    // 0x5171 (UTF-16BE)
    if (argCheck == 'ã§') {
        return true;
    }
    // No.1145
    // ê‡ñæ:8ba5
    // 0x8ba5 (Windows-31J)
    // 0x51f6 (UTF-16BE)
    if (argCheck == 'ã•') {
        return true;
    }
    // No.1146
    // ê‡ñæ:8ba6
    // 0x8ba6 (Windows-31J)
    // 0x5354 (UTF-16BE)
    if (argCheck == 'ã¶') {
        return true;
    }
    // No.1147
    // ê‡ñæ:8ba7
    // 0x8ba7 (Windows-31J)
    // 0x5321 (UTF-16BE)
    if (argCheck == 'ãß') {
        return true;
    }
    // No.1148
    // ê‡ñæ:8ba8
    // 0x8ba8 (Windows-31J)
    // 0x537f (UTF-16BE)
    if (argCheck == 'ã®') {
        return true;
    }
    // No.1149
    // ê‡ñæ:8ba9
    // 0x8ba9 (Windows-31J)
    // 0x53eb (UTF-16BE)
    if (argCheck == 'ã©') {
        return true;
    }
    // No.1150
    // ê‡ñæ:8baa
    // 0x8baa (Windows-31J)
    // 0x55ac (UTF-16BE)
    if (argCheck == 'ã™') {
        return true;
    }
    // No.1151
    // ê‡ñæ:8bab
    // 0x8bab (Windows-31J)
    // 0x5883 (UTF-16BE)
    if (argCheck == 'ã´') {
        return true;
    }
    // No.1152
    // ê‡ñæ:8bac
    // 0x8bac (Windows-31J)
    // 0x5ce1 (UTF-16BE)
    if (argCheck == 'ã¨') {
        return true;
    }
    // No.1153
    // ê‡ñæ:8bad
    // 0x8bad (Windows-31J)
    // 0x5f37 (UTF-16BE)
    if (argCheck == 'ã≠') {
        return true;
    }
    // No.1154
    // ê‡ñæ:8bae
    // 0x8bae (Windows-31J)
    // 0x5f4a (UTF-16BE)
    if (argCheck == 'ãÆ') {
        return true;
    }
    // No.1155
    // ê‡ñæ:8baf
    // 0x8baf (Windows-31J)
    // 0x602f (UTF-16BE)
    if (argCheck == 'ãØ') {
        return true;
    }
    // No.1156
    // ê‡ñæ:8bb0
    // 0x8bb0 (Windows-31J)
    // 0x6050 (UTF-16BE)
    if (argCheck == 'ã∞') {
        return true;
    }
    // No.1157
    // ê‡ñæ:8bb1
    // 0x8bb1 (Windows-31J)
    // 0x606d (UTF-16BE)
    if (argCheck == 'ã±') {
        return true;
    }
    // No.1158
    // ê‡ñæ:8bb2
    // 0x8bb2 (Windows-31J)
    // 0x631f (UTF-16BE)
    if (argCheck == 'ã≤') {
        return true;
    }
    // No.1159
    // ê‡ñæ:8bb3
    // 0x8bb3 (Windows-31J)
    // 0x6559 (UTF-16BE)
    if (argCheck == 'ã≥') {
        return true;
    }
    // No.1160
    // ê‡ñæ:8bb4
    // 0x8bb4 (Windows-31J)
    // 0x6a4b (UTF-16BE)
    if (argCheck == 'ã¥') {
        return true;
    }
    // No.1161
    // ê‡ñæ:8bb5
    // 0x8bb5 (Windows-31J)
    // 0x6cc1 (UTF-16BE)
    if (argCheck == 'ãµ') {
        return true;
    }
    // No.1162
    // ê‡ñæ:8bb6
    // 0x8bb6 (Windows-31J)
    // 0x72c2 (UTF-16BE)
    if (argCheck == 'ã∂') {
        return true;
    }
    // No.1163
    // ê‡ñæ:8bb7
    // 0x8bb7 (Windows-31J)
    // 0x72ed (UTF-16BE)
    if (argCheck == 'ã∑') {
        return true;
    }
    // No.1164
    // ê‡ñæ:8bb8
    // 0x8bb8 (Windows-31J)
    // 0x77ef (UTF-16BE)
    if (argCheck == 'ã∏') {
        return true;
    }
    // No.1165
    // ê‡ñæ:8bb9
    // 0x8bb9 (Windows-31J)
    // 0x80f8 (UTF-16BE)
    if (argCheck == 'ãπ') {
        return true;
    }
    // No.1166
    // ê‡ñæ:8bba
    // 0x8bba (Windows-31J)
    // 0x8105 (UTF-16BE)
    if (argCheck == 'ã∫') {
        return true;
    }
    // No.1167
    // ê‡ñæ:8bbb
    // 0x8bbb (Windows-31J)
    // 0x8208 (UTF-16BE)
    if (argCheck == 'ãª') {
        return true;
    }
    // No.1168
    // ê‡ñæ:8bbc
    // 0x8bbc (Windows-31J)
    // 0x854e (UTF-16BE)
    if (argCheck == 'ãº') {
        return true;
    }
    // No.1169
    // ê‡ñæ:8bbd
    // 0x8bbd (Windows-31J)
    // 0x90f7 (UTF-16BE)
    if (argCheck == 'ãΩ') {
        return true;
    }
    // No.1170
    // ê‡ñæ:8bbe
    // 0x8bbe (Windows-31J)
    // 0x93e1 (UTF-16BE)
    if (argCheck == 'ãæ') {
        return true;
    }
    // No.1171
    // ê‡ñæ:8bbf
    // 0x8bbf (Windows-31J)
    // 0x97ff (UTF-16BE)
    if (argCheck == 'ãø') {
        return true;
    }
    // No.1172
    // ê‡ñæ:8bc0
    // 0x8bc0 (Windows-31J)
    // 0x9957 (UTF-16BE)
    if (argCheck == 'ã¿') {
        return true;
    }
    // No.1173
    // ê‡ñæ:8bc1
    // 0x8bc1 (Windows-31J)
    // 0x9a5a (UTF-16BE)
    if (argCheck == 'ã¡') {
        return true;
    }
    // No.1174
    // ê‡ñæ:8bc2
    // 0x8bc2 (Windows-31J)
    // 0x4ef0 (UTF-16BE)
    if (argCheck == 'ã¬') {
        return true;
    }
    // No.1175
    // ê‡ñæ:8bc3
    // 0x8bc3 (Windows-31J)
    // 0x51dd (UTF-16BE)
    if (argCheck == 'ã√') {
        return true;
    }
    // No.1176
    // ê‡ñæ:8bc4
    // 0x8bc4 (Windows-31J)
    // 0x5c2d (UTF-16BE)
    if (argCheck == 'ãƒ') {
        return true;
    }
    // No.1177
    // ê‡ñæ:8bc5
    // 0x8bc5 (Windows-31J)
    // 0x6681 (UTF-16BE)
    if (argCheck == 'ã≈') {
        return true;
    }
    // No.1178
    // ê‡ñæ:8bc6
    // 0x8bc6 (Windows-31J)
    // 0x696d (UTF-16BE)
    if (argCheck == 'ã∆') {
        return true;
    }
    // No.1179
    // ê‡ñæ:8bc7
    // 0x8bc7 (Windows-31J)
    // 0x5c40 (UTF-16BE)
    if (argCheck == 'ã«') {
        return true;
    }
    // No.1180
    // ê‡ñæ:8bc8
    // 0x8bc8 (Windows-31J)
    // 0x66f2 (UTF-16BE)
    if (argCheck == 'ã»') {
        return true;
    }
    // No.1181
    // ê‡ñæ:8bc9
    // 0x8bc9 (Windows-31J)
    // 0x6975 (UTF-16BE)
    if (argCheck == 'ã…') {
        return true;
    }
    // No.1182
    // ê‡ñæ:8bca
    // 0x8bca (Windows-31J)
    // 0x7389 (UTF-16BE)
    if (argCheck == 'ã ') {
        return true;
    }
    // No.1183
    // ê‡ñæ:8bcb
    // 0x8bcb (Windows-31J)
    // 0x6850 (UTF-16BE)
    if (argCheck == 'ãÀ') {
        return true;
    }
    // No.1184
    // ê‡ñæ:8bcc
    // 0x8bcc (Windows-31J)
    // 0x7c81 (UTF-16BE)
    if (argCheck == 'ãÃ') {
        return true;
    }
    // No.1185
    // ê‡ñæ:8bcd
    // 0x8bcd (Windows-31J)
    // 0x50c5 (UTF-16BE)
    if (argCheck == 'ãÕ') {
        return true;
    }
    // No.1186
    // ê‡ñæ:8bce
    // 0x8bce (Windows-31J)
    // 0x52e4 (UTF-16BE)
    if (argCheck == 'ãŒ') {
        return true;
    }
    // No.1187
    // ê‡ñæ:8bcf
    // 0x8bcf (Windows-31J)
    // 0x5747 (UTF-16BE)
    if (argCheck == 'ãœ') {
        return true;
    }
    // No.1188
    // ê‡ñæ:8bd0
    // 0x8bd0 (Windows-31J)
    // 0x5dfe (UTF-16BE)
    if (argCheck == 'ã–') {
        return true;
    }
    // No.1189
    // ê‡ñæ:8bd1
    // 0x8bd1 (Windows-31J)
    // 0x9326 (UTF-16BE)
    if (argCheck == 'ã—') {
        return true;
    }
    // No.1190
    // ê‡ñæ:8bd2
    // 0x8bd2 (Windows-31J)
    // 0x65a4 (UTF-16BE)
    if (argCheck == 'ã“') {
        return true;
    }
    // No.1191
    // ê‡ñæ:8bd3
    // 0x8bd3 (Windows-31J)
    // 0x6b23 (UTF-16BE)
    if (argCheck == 'ã”') {
        return true;
    }
    // No.1192
    // ê‡ñæ:8bd4
    // 0x8bd4 (Windows-31J)
    // 0x6b3d (UTF-16BE)
    if (argCheck == 'ã‘') {
        return true;
    }
    // No.1193
    // ê‡ñæ:8bd5
    // 0x8bd5 (Windows-31J)
    // 0x7434 (UTF-16BE)
    if (argCheck == 'ã’') {
        return true;
    }
    // No.1194
    // ê‡ñæ:8bd6
    // 0x8bd6 (Windows-31J)
    // 0x7981 (UTF-16BE)
    if (argCheck == 'ã÷') {
        return true;
    }
    // No.1195
    // ê‡ñæ:8bd7
    // 0x8bd7 (Windows-31J)
    // 0x79bd (UTF-16BE)
    if (argCheck == 'ã◊') {
        return true;
    }
    // No.1196
    // ê‡ñæ:8bd8
    // 0x8bd8 (Windows-31J)
    // 0x7b4b (UTF-16BE)
    if (argCheck == 'ãÿ') {
        return true;
    }
    // No.1197
    // ê‡ñæ:8bd9
    // 0x8bd9 (Windows-31J)
    // 0x7dca (UTF-16BE)
    if (argCheck == 'ãŸ') {
        return true;
    }
    // No.1198
    // ê‡ñæ:8bda
    // 0x8bda (Windows-31J)
    // 0x82b9 (UTF-16BE)
    if (argCheck == 'ã⁄') {
        return true;
    }
    // No.1199
    // ê‡ñæ:8bdb
    // 0x8bdb (Windows-31J)
    // 0x83cc (UTF-16BE)
    if (argCheck == 'ã€') {
        return true;
    }
    // No.1200
    // ê‡ñæ:8bdc
    // 0x8bdc (Windows-31J)
    // 0x887f (UTF-16BE)
    if (argCheck == 'ã‹') {
        return true;
    }
    // No.1201
    // ê‡ñæ:8bdd
    // 0x8bdd (Windows-31J)
    // 0x895f (UTF-16BE)
    if (argCheck == 'ã›') {
        return true;
    }
    // No.1202
    // ê‡ñæ:8bde
    // 0x8bde (Windows-31J)
    // 0x8b39 (UTF-16BE)
    if (argCheck == 'ãﬁ') {
        return true;
    }
    // No.1203
    // ê‡ñæ:8bdf
    // 0x8bdf (Windows-31J)
    // 0x8fd1 (UTF-16BE)
    if (argCheck == 'ãﬂ') {
        return true;
    }
    // No.1204
    // ê‡ñæ:8be0
    // 0x8be0 (Windows-31J)
    // 0x91d1 (UTF-16BE)
    if (argCheck == 'ã‡') {
        return true;
    }
    // No.1205
    // ê‡ñæ:8be1
    // 0x8be1 (Windows-31J)
    // 0x541f (UTF-16BE)
    if (argCheck == 'ã·') {
        return true;
    }
    // No.1206
    // ê‡ñæ:8be2
    // 0x8be2 (Windows-31J)
    // 0x9280 (UTF-16BE)
    if (argCheck == 'ã‚') {
        return true;
    }
    // No.1207
    // ê‡ñæ:8be3
    // 0x8be3 (Windows-31J)
    // 0x4e5d (UTF-16BE)
    if (argCheck == 'ã„') {
        return true;
    }
    // No.1208
    // ê‡ñæ:8be4
    // 0x8be4 (Windows-31J)
    // 0x5036 (UTF-16BE)
    if (argCheck == 'ã‰') {
        return true;
    }
    // No.1209
    // ê‡ñæ:8be5
    // 0x8be5 (Windows-31J)
    // 0x53e5 (UTF-16BE)
    if (argCheck == 'ãÂ') {
        return true;
    }
    // No.1210
    // ê‡ñæ:8be6
    // 0x8be6 (Windows-31J)
    // 0x533a (UTF-16BE)
    if (argCheck == 'ãÊ') {
        return true;
    }
    // No.1211
    // ê‡ñæ:8be7
    // 0x8be7 (Windows-31J)
    // 0x72d7 (UTF-16BE)
    if (argCheck == 'ãÁ') {
        return true;
    }
    // No.1212
    // ê‡ñæ:8be8
    // 0x8be8 (Windows-31J)
    // 0x7396 (UTF-16BE)
    if (argCheck == 'ãË') {
        return true;
    }
    // No.1213
    // ê‡ñæ:8be9
    // 0x8be9 (Windows-31J)
    // 0x77e9 (UTF-16BE)
    if (argCheck == 'ãÈ') {
        return true;
    }
    // No.1214
    // ê‡ñæ:8bea
    // 0x8bea (Windows-31J)
    // 0x82e6 (UTF-16BE)
    if (argCheck == 'ãÍ') {
        return true;
    }
    // No.1215
    // ê‡ñæ:8beb
    // 0x8beb (Windows-31J)
    // 0x8eaf (UTF-16BE)
    if (argCheck == 'ãÎ') {
        return true;
    }
    // No.1216
    // ê‡ñæ:8bec
    // 0x8bec (Windows-31J)
    // 0x99c6 (UTF-16BE)
    if (argCheck == 'ãÏ') {
        return true;
    }
    // No.1217
    // ê‡ñæ:8bed
    // 0x8bed (Windows-31J)
    // 0x99c8 (UTF-16BE)
    if (argCheck == 'ãÌ') {
        return true;
    }
    // No.1218
    // ê‡ñæ:8bee
    // 0x8bee (Windows-31J)
    // 0x99d2 (UTF-16BE)
    if (argCheck == 'ãÓ') {
        return true;
    }
    // No.1219
    // ê‡ñæ:8bef
    // 0x8bef (Windows-31J)
    // 0x5177 (UTF-16BE)
    if (argCheck == 'ãÔ') {
        return true;
    }
    // No.1220
    // ê‡ñæ:8bf0
    // 0x8bf0 (Windows-31J)
    // 0x611a (UTF-16BE)
    if (argCheck == 'ã') {
        return true;
    }
    // No.1221
    // ê‡ñæ:8bf1
    // 0x8bf1 (Windows-31J)
    // 0x865e (UTF-16BE)
    if (argCheck == 'ãÒ') {
        return true;
    }
    // No.1222
    // ê‡ñæ:8bf2
    // 0x8bf2 (Windows-31J)
    // 0x55b0 (UTF-16BE)
    if (argCheck == 'ãÚ') {
        return true;
    }
    // No.1223
    // ê‡ñæ:8bf3
    // 0x8bf3 (Windows-31J)
    // 0x7a7a (UTF-16BE)
    if (argCheck == 'ãÛ') {
        return true;
    }
    // No.1224
    // ê‡ñæ:8bf4
    // 0x8bf4 (Windows-31J)
    // 0x5076 (UTF-16BE)
    if (argCheck == 'ãÙ') {
        return true;
    }
    // No.1225
    // ê‡ñæ:8bf5
    // 0x8bf5 (Windows-31J)
    // 0x5bd3 (UTF-16BE)
    if (argCheck == 'ãı') {
        return true;
    }
    // No.1226
    // ê‡ñæ:8bf6
    // 0x8bf6 (Windows-31J)
    // 0x9047 (UTF-16BE)
    if (argCheck == 'ãˆ') {
        return true;
    }
    // No.1227
    // ê‡ñæ:8bf7
    // 0x8bf7 (Windows-31J)
    // 0x9685 (UTF-16BE)
    if (argCheck == 'ã˜') {
        return true;
    }
    // No.1228
    // ê‡ñæ:8bf8
    // 0x8bf8 (Windows-31J)
    // 0x4e32 (UTF-16BE)
    if (argCheck == 'ã¯') {
        return true;
    }
    // No.1229
    // ê‡ñæ:8bf9
    // 0x8bf9 (Windows-31J)
    // 0x6adb (UTF-16BE)
    if (argCheck == 'ã˘') {
        return true;
    }
    // No.1230
    // ê‡ñæ:8bfa
    // 0x8bfa (Windows-31J)
    // 0x91e7 (UTF-16BE)
    if (argCheck == 'ã˙') {
        return true;
    }
    // No.1231
    // ê‡ñæ:8bfb
    // 0x8bfb (Windows-31J)
    // 0x5c51 (UTF-16BE)
    if (argCheck == 'ã˚') {
        return true;
    }
    // No.1232
    // ê‡ñæ:8bfc
    // 0x8bfc (Windows-31J)
    // 0x5c48 (UTF-16BE)
    if (argCheck == 'ã¸') {
        return true;
    }
    // No.1233
    // ê‡ñæ:8c40
    // 0x8c40 (Windows-31J)
    // 0x6398 (UTF-16BE)
    if (argCheck == 'å@') {
        return true;
    }
    // No.1234
    // ê‡ñæ:8c41
    // 0x8c41 (Windows-31J)
    // 0x7a9f (UTF-16BE)
    if (argCheck == 'åA') {
        return true;
    }
    // No.1235
    // ê‡ñæ:8c42
    // 0x8c42 (Windows-31J)
    // 0x6c93 (UTF-16BE)
    if (argCheck == 'åB') {
        return true;
    }
    // No.1236
    // ê‡ñæ:8c43
    // 0x8c43 (Windows-31J)
    // 0x9774 (UTF-16BE)
    if (argCheck == 'åC') {
        return true;
    }
    // No.1237
    // ê‡ñæ:8c44
    // 0x8c44 (Windows-31J)
    // 0x8f61 (UTF-16BE)
    if (argCheck == 'åD') {
        return true;
    }
    // No.1238
    // ê‡ñæ:8c45
    // 0x8c45 (Windows-31J)
    // 0x7aaa (UTF-16BE)
    if (argCheck == 'åE') {
        return true;
    }
    // No.1239
    // ê‡ñæ:8c46
    // 0x8c46 (Windows-31J)
    // 0x718a (UTF-16BE)
    if (argCheck == 'åF') {
        return true;
    }
    // No.1240
    // ê‡ñæ:8c47
    // 0x8c47 (Windows-31J)
    // 0x9688 (UTF-16BE)
    if (argCheck == 'åG') {
        return true;
    }
    // No.1241
    // ê‡ñæ:8c48
    // 0x8c48 (Windows-31J)
    // 0x7c82 (UTF-16BE)
    if (argCheck == 'åH') {
        return true;
    }
    // No.1242
    // ê‡ñæ:8c49
    // 0x8c49 (Windows-31J)
    // 0x6817 (UTF-16BE)
    if (argCheck == 'åI') {
        return true;
    }
    // No.1243
    // ê‡ñæ:8c4a
    // 0x8c4a (Windows-31J)
    // 0x7e70 (UTF-16BE)
    if (argCheck == 'åJ') {
        return true;
    }
    // No.1244
    // ê‡ñæ:8c4b
    // 0x8c4b (Windows-31J)
    // 0x6851 (UTF-16BE)
    if (argCheck == 'åK') {
        return true;
    }
    // No.1245
    // ê‡ñæ:8c4c
    // 0x8c4c (Windows-31J)
    // 0x936c (UTF-16BE)
    if (argCheck == 'åL') {
        return true;
    }
    // No.1246
    // ê‡ñæ:8c4d
    // 0x8c4d (Windows-31J)
    // 0x52f2 (UTF-16BE)
    if (argCheck == 'åM') {
        return true;
    }
    // No.1247
    // ê‡ñæ:8c4e
    // 0x8c4e (Windows-31J)
    // 0x541b (UTF-16BE)
    if (argCheck == 'åN') {
        return true;
    }
    // No.1248
    // ê‡ñæ:8c4f
    // 0x8c4f (Windows-31J)
    // 0x85ab (UTF-16BE)
    if (argCheck == 'åO') {
        return true;
    }
    // No.1249
    // ê‡ñæ:8c50
    // 0x8c50 (Windows-31J)
    // 0x8a13 (UTF-16BE)
    if (argCheck == 'åP') {
        return true;
    }
    // No.1250
    // ê‡ñæ:8c51
    // 0x8c51 (Windows-31J)
    // 0x7fa4 (UTF-16BE)
    if (argCheck == 'åQ') {
        return true;
    }
    // No.1251
    // ê‡ñæ:8c52
    // 0x8c52 (Windows-31J)
    // 0x8ecd (UTF-16BE)
    if (argCheck == 'åR') {
        return true;
    }
    // No.1252
    // ê‡ñæ:8c53
    // 0x8c53 (Windows-31J)
    // 0x90e1 (UTF-16BE)
    if (argCheck == 'åS') {
        return true;
    }
    // No.1253
    // ê‡ñæ:8c54
    // 0x8c54 (Windows-31J)
    // 0x5366 (UTF-16BE)
    if (argCheck == 'åT') {
        return true;
    }
    // No.1254
    // ê‡ñæ:8c55
    // 0x8c55 (Windows-31J)
    // 0x8888 (UTF-16BE)
    if (argCheck == 'åU') {
        return true;
    }
    // No.1255
    // ê‡ñæ:8c56
    // 0x8c56 (Windows-31J)
    // 0x7941 (UTF-16BE)
    if (argCheck == 'åV') {
        return true;
    }
    // No.1256
    // ê‡ñæ:8c57
    // 0x8c57 (Windows-31J)
    // 0x4fc2 (UTF-16BE)
    if (argCheck == 'åW') {
        return true;
    }
    // No.1257
    // ê‡ñæ:8c58
    // 0x8c58 (Windows-31J)
    // 0x50be (UTF-16BE)
    if (argCheck == 'åX') {
        return true;
    }
    // No.1258
    // ê‡ñæ:8c59
    // 0x8c59 (Windows-31J)
    // 0x5211 (UTF-16BE)
    if (argCheck == 'åY') {
        return true;
    }
    // No.1259
    // ê‡ñæ:8c5a
    // 0x8c5a (Windows-31J)
    // 0x5144 (UTF-16BE)
    if (argCheck == 'åZ') {
        return true;
    }
    // No.1260
    // ê‡ñæ:8c5b
    // 0x8c5b (Windows-31J)
    // 0x5553 (UTF-16BE)
    if (argCheck == 'å[') {
        return true;
    }
    // No.1261
    // ê‡ñæ:8c5c
    // 0x8c5c (Windows-31J)
    // 0x572d (UTF-16BE)
    if (argCheck == 'å\') {
        return true;
    }
    // No.1262
    // ê‡ñæ:8c5d
    // 0x8c5d (Windows-31J)
    // 0x73ea (UTF-16BE)
    if (argCheck == 'å]') {
        return true;
    }
    // No.1263
    // ê‡ñæ:8c5e
    // 0x8c5e (Windows-31J)
    // 0x578b (UTF-16BE)
    if (argCheck == 'å^') {
        return true;
    }
    // No.1264
    // ê‡ñæ:8c5f
    // 0x8c5f (Windows-31J)
    // 0x5951 (UTF-16BE)
    if (argCheck == 'å_') {
        return true;
    }
    // No.1265
    // ê‡ñæ:8c60
    // 0x8c60 (Windows-31J)
    // 0x5f62 (UTF-16BE)
    if (argCheck == 'å`') {
        return true;
    }
    // No.1266
    // ê‡ñæ:8c61
    // 0x8c61 (Windows-31J)
    // 0x5f84 (UTF-16BE)
    if (argCheck == 'åa') {
        return true;
    }
    // No.1267
    // ê‡ñæ:8c62
    // 0x8c62 (Windows-31J)
    // 0x6075 (UTF-16BE)
    if (argCheck == 'åb') {
        return true;
    }
    // No.1268
    // ê‡ñæ:8c63
    // 0x8c63 (Windows-31J)
    // 0x6176 (UTF-16BE)
    if (argCheck == 'åc') {
        return true;
    }
    // No.1269
    // ê‡ñæ:8c64
    // 0x8c64 (Windows-31J)
    // 0x6167 (UTF-16BE)
    if (argCheck == 'åd') {
        return true;
    }
    // No.1270
    // ê‡ñæ:8c65
    // 0x8c65 (Windows-31J)
    // 0x61a9 (UTF-16BE)
    if (argCheck == 'åe') {
        return true;
    }
    // No.1271
    // ê‡ñæ:8c66
    // 0x8c66 (Windows-31J)
    // 0x63b2 (UTF-16BE)
    if (argCheck == 'åf') {
        return true;
    }
    // No.1272
    // ê‡ñæ:8c67
    // 0x8c67 (Windows-31J)
    // 0x643a (UTF-16BE)
    if (argCheck == 'åg') {
        return true;
    }
    // No.1273
    // ê‡ñæ:8c68
    // 0x8c68 (Windows-31J)
    // 0x656c (UTF-16BE)
    if (argCheck == 'åh') {
        return true;
    }
    // No.1274
    // ê‡ñæ:8c69
    // 0x8c69 (Windows-31J)
    // 0x666f (UTF-16BE)
    if (argCheck == 'åi') {
        return true;
    }
    // No.1275
    // ê‡ñæ:8c6a
    // 0x8c6a (Windows-31J)
    // 0x6842 (UTF-16BE)
    if (argCheck == 'åj') {
        return true;
    }
    // No.1276
    // ê‡ñæ:8c6b
    // 0x8c6b (Windows-31J)
    // 0x6e13 (UTF-16BE)
    if (argCheck == 'åk') {
        return true;
    }
    // No.1277
    // ê‡ñæ:8c6c
    // 0x8c6c (Windows-31J)
    // 0x7566 (UTF-16BE)
    if (argCheck == 'ål') {
        return true;
    }
    // No.1278
    // ê‡ñæ:8c6d
    // 0x8c6d (Windows-31J)
    // 0x7a3d (UTF-16BE)
    if (argCheck == 'åm') {
        return true;
    }
    // No.1279
    // ê‡ñæ:8c6e
    // 0x8c6e (Windows-31J)
    // 0x7cfb (UTF-16BE)
    if (argCheck == 'ån') {
        return true;
    }
    // No.1280
    // ê‡ñæ:8c6f
    // 0x8c6f (Windows-31J)
    // 0x7d4c (UTF-16BE)
    if (argCheck == 'åo') {
        return true;
    }
    // No.1281
    // ê‡ñæ:8c70
    // 0x8c70 (Windows-31J)
    // 0x7d99 (UTF-16BE)
    if (argCheck == 'åp') {
        return true;
    }
    // No.1282
    // ê‡ñæ:8c71
    // 0x8c71 (Windows-31J)
    // 0x7e4b (UTF-16BE)
    if (argCheck == 'åq') {
        return true;
    }
    // No.1283
    // ê‡ñæ:8c72
    // 0x8c72 (Windows-31J)
    // 0x7f6b (UTF-16BE)
    if (argCheck == 'år') {
        return true;
    }
    // No.1284
    // ê‡ñæ:8c73
    // 0x8c73 (Windows-31J)
    // 0x830e (UTF-16BE)
    if (argCheck == 'ås') {
        return true;
    }
    // No.1285
    // ê‡ñæ:8c74
    // 0x8c74 (Windows-31J)
    // 0x834a (UTF-16BE)
    if (argCheck == 'åt') {
        return true;
    }
    // No.1286
    // ê‡ñæ:8c75
    // 0x8c75 (Windows-31J)
    // 0x86cd (UTF-16BE)
    if (argCheck == 'åu') {
        return true;
    }
    // No.1287
    // ê‡ñæ:8c76
    // 0x8c76 (Windows-31J)
    // 0x8a08 (UTF-16BE)
    if (argCheck == 'åv') {
        return true;
    }
    // No.1288
    // ê‡ñæ:8c77
    // 0x8c77 (Windows-31J)
    // 0x8a63 (UTF-16BE)
    if (argCheck == 'åw') {
        return true;
    }
    // No.1289
    // ê‡ñæ:8c78
    // 0x8c78 (Windows-31J)
    // 0x8b66 (UTF-16BE)
    if (argCheck == 'åx') {
        return true;
    }
    // No.1290
    // ê‡ñæ:8c79
    // 0x8c79 (Windows-31J)
    // 0x8efd (UTF-16BE)
    if (argCheck == 'åy') {
        return true;
    }
    // No.1291
    // ê‡ñæ:8c7a
    // 0x8c7a (Windows-31J)
    // 0x981a (UTF-16BE)
    if (argCheck == 'åz') {
        return true;
    }
    // No.1292
    // ê‡ñæ:8c7b
    // 0x8c7b (Windows-31J)
    // 0x9d8f (UTF-16BE)
    if (argCheck == 'å{') {
        return true;
    }
    // No.1293
    // ê‡ñæ:8c7c
    // 0x8c7c (Windows-31J)
    // 0x82b8 (UTF-16BE)
    if (argCheck == 'å|') {
        return true;
    }
    // No.1294
    // ê‡ñæ:8c7d
    // 0x8c7d (Windows-31J)
    // 0x8fce (UTF-16BE)
    if (argCheck == 'å}') {
        return true;
    }
    // No.1295
    // ê‡ñæ:8c7e
    // 0x8c7e (Windows-31J)
    // 0x9be8 (UTF-16BE)
    if (argCheck == 'å~') {
        return true;
    }
    // No.1296
    // ê‡ñæ:8c80
    // 0x8c80 (Windows-31J)
    // 0x5287 (UTF-16BE)
    if (argCheck == 'åÄ') {
        return true;
    }
    // No.1297
    // ê‡ñæ:8c81
    // 0x8c81 (Windows-31J)
    // 0x621f (UTF-16BE)
    if (argCheck == 'åÅ') {
        return true;
    }
    // No.1298
    // ê‡ñæ:8c82
    // 0x8c82 (Windows-31J)
    // 0x6483 (UTF-16BE)
    if (argCheck == 'åÇ') {
        return true;
    }
    // No.1299
    // ê‡ñæ:8c83
    // 0x8c83 (Windows-31J)
    // 0x6fc0 (UTF-16BE)
    if (argCheck == 'åÉ') {
        return true;
    }
    // No.1300
    // ê‡ñæ:8c84
    // 0x8c84 (Windows-31J)
    // 0x9699 (UTF-16BE)
    if (argCheck == 'åÑ') {
        return true;
    }
    // No.1301
    // ê‡ñæ:8c85
    // 0x8c85 (Windows-31J)
    // 0x6841 (UTF-16BE)
    if (argCheck == 'åÖ') {
        return true;
    }
    // No.1302
    // ê‡ñæ:8c86
    // 0x8c86 (Windows-31J)
    // 0x5091 (UTF-16BE)
    if (argCheck == 'åÜ') {
        return true;
    }
    // No.1303
    // ê‡ñæ:8c87
    // 0x8c87 (Windows-31J)
    // 0x6b20 (UTF-16BE)
    if (argCheck == 'åá') {
        return true;
    }
    // No.1304
    // ê‡ñæ:8c88
    // 0x8c88 (Windows-31J)
    // 0x6c7a (UTF-16BE)
    if (argCheck == 'åà') {
        return true;
    }
    // No.1305
    // ê‡ñæ:8c89
    // 0x8c89 (Windows-31J)
    // 0x6f54 (UTF-16BE)
    if (argCheck == 'åâ') {
        return true;
    }
    // No.1306
    // ê‡ñæ:8c8a
    // 0x8c8a (Windows-31J)
    // 0x7a74 (UTF-16BE)
    if (argCheck == 'åä') {
        return true;
    }
    // No.1307
    // ê‡ñæ:8c8b
    // 0x8c8b (Windows-31J)
    // 0x7d50 (UTF-16BE)
    if (argCheck == 'åã') {
        return true;
    }
    // No.1308
    // ê‡ñæ:8c8c
    // 0x8c8c (Windows-31J)
    // 0x8840 (UTF-16BE)
    if (argCheck == 'åå') {
        return true;
    }
    // No.1309
    // ê‡ñæ:8c8d
    // 0x8c8d (Windows-31J)
    // 0x8a23 (UTF-16BE)
    if (argCheck == 'åç') {
        return true;
    }
    // No.1310
    // ê‡ñæ:8c8e
    // 0x8c8e (Windows-31J)
    // 0x6708 (UTF-16BE)
    if (argCheck == 'åé') {
        return true;
    }
    // No.1311
    // ê‡ñæ:8c8f
    // 0x8c8f (Windows-31J)
    // 0x4ef6 (UTF-16BE)
    if (argCheck == 'åè') {
        return true;
    }
    // No.1312
    // ê‡ñæ:8c90
    // 0x8c90 (Windows-31J)
    // 0x5039 (UTF-16BE)
    if (argCheck == 'åê') {
        return true;
    }
    // No.1313
    // ê‡ñæ:8c91
    // 0x8c91 (Windows-31J)
    // 0x5026 (UTF-16BE)
    if (argCheck == 'åë') {
        return true;
    }
    // No.1314
    // ê‡ñæ:8c92
    // 0x8c92 (Windows-31J)
    // 0x5065 (UTF-16BE)
    if (argCheck == 'åí') {
        return true;
    }
    // No.1315
    // ê‡ñæ:8c93
    // 0x8c93 (Windows-31J)
    // 0x517c (UTF-16BE)
    if (argCheck == 'åì') {
        return true;
    }
    // No.1316
    // ê‡ñæ:8c94
    // 0x8c94 (Windows-31J)
    // 0x5238 (UTF-16BE)
    if (argCheck == 'åî') {
        return true;
    }
    // No.1317
    // ê‡ñæ:8c95
    // 0x8c95 (Windows-31J)
    // 0x5263 (UTF-16BE)
    if (argCheck == 'åï') {
        return true;
    }
    // No.1318
    // ê‡ñæ:8c96
    // 0x8c96 (Windows-31J)
    // 0x55a7 (UTF-16BE)
    if (argCheck == 'åñ') {
        return true;
    }
    // No.1319
    // ê‡ñæ:8c97
    // 0x8c97 (Windows-31J)
    // 0x570f (UTF-16BE)
    if (argCheck == 'åó') {
        return true;
    }
    // No.1320
    // ê‡ñæ:8c98
    // 0x8c98 (Windows-31J)
    // 0x5805 (UTF-16BE)
    if (argCheck == 'åò') {
        return true;
    }
    // No.1321
    // ê‡ñæ:8c99
    // 0x8c99 (Windows-31J)
    // 0x5acc (UTF-16BE)
    if (argCheck == 'åô') {
        return true;
    }
    // No.1322
    // ê‡ñæ:8c9a
    // 0x8c9a (Windows-31J)
    // 0x5efa (UTF-16BE)
    if (argCheck == 'åö') {
        return true;
    }
    // No.1323
    // ê‡ñæ:8c9b
    // 0x8c9b (Windows-31J)
    // 0x61b2 (UTF-16BE)
    if (argCheck == 'åõ') {
        return true;
    }
    // No.1324
    // ê‡ñæ:8c9c
    // 0x8c9c (Windows-31J)
    // 0x61f8 (UTF-16BE)
    if (argCheck == 'åú') {
        return true;
    }
    // No.1325
    // ê‡ñæ:8c9d
    // 0x8c9d (Windows-31J)
    // 0x62f3 (UTF-16BE)
    if (argCheck == 'åù') {
        return true;
    }
    // No.1326
    // ê‡ñæ:8c9e
    // 0x8c9e (Windows-31J)
    // 0x6372 (UTF-16BE)
    if (argCheck == 'åû') {
        return true;
    }
    // No.1327
    // ê‡ñæ:8c9f
    // 0x8c9f (Windows-31J)
    // 0x691c (UTF-16BE)
    if (argCheck == 'åü') {
        return true;
    }
    // No.1328
    // ê‡ñæ:8ca0
    // 0x8ca0 (Windows-31J)
    // 0x6a29 (UTF-16BE)
    if (argCheck == 'å†') {
        return true;
    }
    // No.1329
    // ê‡ñæ:8ca1
    // 0x8ca1 (Windows-31J)
    // 0x727d (UTF-16BE)
    if (argCheck == 'å°') {
        return true;
    }
    // No.1330
    // ê‡ñæ:8ca2
    // 0x8ca2 (Windows-31J)
    // 0x72ac (UTF-16BE)
    if (argCheck == 'å¢') {
        return true;
    }
    // No.1331
    // ê‡ñæ:8ca3
    // 0x8ca3 (Windows-31J)
    // 0x732e (UTF-16BE)
    if (argCheck == 'å£') {
        return true;
    }
    // No.1332
    // ê‡ñæ:8ca4
    // 0x8ca4 (Windows-31J)
    // 0x7814 (UTF-16BE)
    if (argCheck == 'å§') {
        return true;
    }
    // No.1333
    // ê‡ñæ:8ca5
    // 0x8ca5 (Windows-31J)
    // 0x786f (UTF-16BE)
    if (argCheck == 'å•') {
        return true;
    }
    // No.1334
    // ê‡ñæ:8ca6
    // 0x8ca6 (Windows-31J)
    // 0x7d79 (UTF-16BE)
    if (argCheck == 'å¶') {
        return true;
    }
    // No.1335
    // ê‡ñæ:8ca7
    // 0x8ca7 (Windows-31J)
    // 0x770c (UTF-16BE)
    if (argCheck == 'åß') {
        return true;
    }
    // No.1336
    // ê‡ñæ:8ca8
    // 0x8ca8 (Windows-31J)
    // 0x80a9 (UTF-16BE)
    if (argCheck == 'å®') {
        return true;
    }
    // No.1337
    // ê‡ñæ:8ca9
    // 0x8ca9 (Windows-31J)
    // 0x898b (UTF-16BE)
    if (argCheck == 'å©') {
        return true;
    }
    // No.1338
    // ê‡ñæ:8caa
    // 0x8caa (Windows-31J)
    // 0x8b19 (UTF-16BE)
    if (argCheck == 'å™') {
        return true;
    }
    // No.1339
    // ê‡ñæ:8cab
    // 0x8cab (Windows-31J)
    // 0x8ce2 (UTF-16BE)
    if (argCheck == 'å´') {
        return true;
    }
    // No.1340
    // ê‡ñæ:8cac
    // 0x8cac (Windows-31J)
    // 0x8ed2 (UTF-16BE)
    if (argCheck == 'å¨') {
        return true;
    }
    // No.1341
    // ê‡ñæ:8cad
    // 0x8cad (Windows-31J)
    // 0x9063 (UTF-16BE)
    if (argCheck == 'å≠') {
        return true;
    }
    // No.1342
    // ê‡ñæ:8cae
    // 0x8cae (Windows-31J)
    // 0x9375 (UTF-16BE)
    if (argCheck == 'åÆ') {
        return true;
    }
    // No.1343
    // ê‡ñæ:8caf
    // 0x8caf (Windows-31J)
    // 0x967a (UTF-16BE)
    if (argCheck == 'åØ') {
        return true;
    }
    // No.1344
    // ê‡ñæ:8cb0
    // 0x8cb0 (Windows-31J)
    // 0x9855 (UTF-16BE)
    if (argCheck == 'å∞') {
        return true;
    }
    // No.1345
    // ê‡ñæ:8cb1
    // 0x8cb1 (Windows-31J)
    // 0x9a13 (UTF-16BE)
    if (argCheck == 'å±') {
        return true;
    }
    // No.1346
    // ê‡ñæ:8cb2
    // 0x8cb2 (Windows-31J)
    // 0x9e78 (UTF-16BE)
    if (argCheck == 'å≤') {
        return true;
    }
    // No.1347
    // ê‡ñæ:8cb3
    // 0x8cb3 (Windows-31J)
    // 0x5143 (UTF-16BE)
    if (argCheck == 'å≥') {
        return true;
    }
    // No.1348
    // ê‡ñæ:8cb4
    // 0x8cb4 (Windows-31J)
    // 0x539f (UTF-16BE)
    if (argCheck == 'å¥') {
        return true;
    }
    // No.1349
    // ê‡ñæ:8cb5
    // 0x8cb5 (Windows-31J)
    // 0x53b3 (UTF-16BE)
    if (argCheck == 'åµ') {
        return true;
    }
    // No.1350
    // ê‡ñæ:8cb6
    // 0x8cb6 (Windows-31J)
    // 0x5e7b (UTF-16BE)
    if (argCheck == 'å∂') {
        return true;
    }
    // No.1351
    // ê‡ñæ:8cb7
    // 0x8cb7 (Windows-31J)
    // 0x5f26 (UTF-16BE)
    if (argCheck == 'å∑') {
        return true;
    }
    // No.1352
    // ê‡ñæ:8cb8
    // 0x8cb8 (Windows-31J)
    // 0x6e1b (UTF-16BE)
    if (argCheck == 'å∏') {
        return true;
    }
    // No.1353
    // ê‡ñæ:8cb9
    // 0x8cb9 (Windows-31J)
    // 0x6e90 (UTF-16BE)
    if (argCheck == 'åπ') {
        return true;
    }
    // No.1354
    // ê‡ñæ:8cba
    // 0x8cba (Windows-31J)
    // 0x7384 (UTF-16BE)
    if (argCheck == 'å∫') {
        return true;
    }
    // No.1355
    // ê‡ñæ:8cbb
    // 0x8cbb (Windows-31J)
    // 0x73fe (UTF-16BE)
    if (argCheck == 'åª') {
        return true;
    }
    // No.1356
    // ê‡ñæ:8cbc
    // 0x8cbc (Windows-31J)
    // 0x7d43 (UTF-16BE)
    if (argCheck == 'åº') {
        return true;
    }
    // No.1357
    // ê‡ñæ:8cbd
    // 0x8cbd (Windows-31J)
    // 0x8237 (UTF-16BE)
    if (argCheck == 'åΩ') {
        return true;
    }
    // No.1358
    // ê‡ñæ:8cbe
    // 0x8cbe (Windows-31J)
    // 0x8a00 (UTF-16BE)
    if (argCheck == 'åæ') {
        return true;
    }
    // No.1359
    // ê‡ñæ:8cbf
    // 0x8cbf (Windows-31J)
    // 0x8afa (UTF-16BE)
    if (argCheck == 'åø') {
        return true;
    }
    // No.1360
    // ê‡ñæ:8cc0
    // 0x8cc0 (Windows-31J)
    // 0x9650 (UTF-16BE)
    if (argCheck == 'å¿') {
        return true;
    }
    // No.1361
    // ê‡ñæ:8cc1
    // 0x8cc1 (Windows-31J)
    // 0x4e4e (UTF-16BE)
    if (argCheck == 'å¡') {
        return true;
    }
    // No.1362
    // ê‡ñæ:8cc2
    // 0x8cc2 (Windows-31J)
    // 0x500b (UTF-16BE)
    if (argCheck == 'å¬') {
        return true;
    }
    // No.1363
    // ê‡ñæ:8cc3
    // 0x8cc3 (Windows-31J)
    // 0x53e4 (UTF-16BE)
    if (argCheck == 'å√') {
        return true;
    }
    // No.1364
    // ê‡ñæ:8cc4
    // 0x8cc4 (Windows-31J)
    // 0x547c (UTF-16BE)
    if (argCheck == 'åƒ') {
        return true;
    }
    // No.1365
    // ê‡ñæ:8cc5
    // 0x8cc5 (Windows-31J)
    // 0x56fa (UTF-16BE)
    if (argCheck == 'å≈') {
        return true;
    }
    // No.1366
    // ê‡ñæ:8cc6
    // 0x8cc6 (Windows-31J)
    // 0x59d1 (UTF-16BE)
    if (argCheck == 'å∆') {
        return true;
    }
    // No.1367
    // ê‡ñæ:8cc7
    // 0x8cc7 (Windows-31J)
    // 0x5b64 (UTF-16BE)
    if (argCheck == 'å«') {
        return true;
    }
    // No.1368
    // ê‡ñæ:8cc8
    // 0x8cc8 (Windows-31J)
    // 0x5df1 (UTF-16BE)
    if (argCheck == 'å»') {
        return true;
    }
    // No.1369
    // ê‡ñæ:8cc9
    // 0x8cc9 (Windows-31J)
    // 0x5eab (UTF-16BE)
    if (argCheck == 'å…') {
        return true;
    }
    // No.1370
    // ê‡ñæ:8cca
    // 0x8cca (Windows-31J)
    // 0x5f27 (UTF-16BE)
    if (argCheck == 'å ') {
        return true;
    }
    // No.1371
    // ê‡ñæ:8ccb
    // 0x8ccb (Windows-31J)
    // 0x6238 (UTF-16BE)
    if (argCheck == 'åÀ') {
        return true;
    }
    // No.1372
    // ê‡ñæ:8ccc
    // 0x8ccc (Windows-31J)
    // 0x6545 (UTF-16BE)
    if (argCheck == 'åÃ') {
        return true;
    }
    // No.1373
    // ê‡ñæ:8ccd
    // 0x8ccd (Windows-31J)
    // 0x67af (UTF-16BE)
    if (argCheck == 'åÕ') {
        return true;
    }
    // No.1374
    // ê‡ñæ:8cce
    // 0x8cce (Windows-31J)
    // 0x6e56 (UTF-16BE)
    if (argCheck == 'åŒ') {
        return true;
    }
    // No.1375
    // ê‡ñæ:8ccf
    // 0x8ccf (Windows-31J)
    // 0x72d0 (UTF-16BE)
    if (argCheck == 'åœ') {
        return true;
    }
    // No.1376
    // ê‡ñæ:8cd0
    // 0x8cd0 (Windows-31J)
    // 0x7cca (UTF-16BE)
    if (argCheck == 'å–') {
        return true;
    }
    // No.1377
    // ê‡ñæ:8cd1
    // 0x8cd1 (Windows-31J)
    // 0x88b4 (UTF-16BE)
    if (argCheck == 'å—') {
        return true;
    }
    // No.1378
    // ê‡ñæ:8cd2
    // 0x8cd2 (Windows-31J)
    // 0x80a1 (UTF-16BE)
    if (argCheck == 'å“') {
        return true;
    }
    // No.1379
    // ê‡ñæ:8cd3
    // 0x8cd3 (Windows-31J)
    // 0x80e1 (UTF-16BE)
    if (argCheck == 'å”') {
        return true;
    }
    // No.1380
    // ê‡ñæ:8cd4
    // 0x8cd4 (Windows-31J)
    // 0x83f0 (UTF-16BE)
    if (argCheck == 'å‘') {
        return true;
    }
    // No.1381
    // ê‡ñæ:8cd5
    // 0x8cd5 (Windows-31J)
    // 0x864e (UTF-16BE)
    if (argCheck == 'å’') {
        return true;
    }
    // No.1382
    // ê‡ñæ:8cd6
    // 0x8cd6 (Windows-31J)
    // 0x8a87 (UTF-16BE)
    if (argCheck == 'å÷') {
        return true;
    }
    // No.1383
    // ê‡ñæ:8cd7
    // 0x8cd7 (Windows-31J)
    // 0x8de8 (UTF-16BE)
    if (argCheck == 'å◊') {
        return true;
    }
    // No.1384
    // ê‡ñæ:8cd8
    // 0x8cd8 (Windows-31J)
    // 0x9237 (UTF-16BE)
    if (argCheck == 'åÿ') {
        return true;
    }
    // No.1385
    // ê‡ñæ:8cd9
    // 0x8cd9 (Windows-31J)
    // 0x96c7 (UTF-16BE)
    if (argCheck == 'åŸ') {
        return true;
    }
    // No.1386
    // ê‡ñæ:8cda
    // 0x8cda (Windows-31J)
    // 0x9867 (UTF-16BE)
    if (argCheck == 'å⁄') {
        return true;
    }
    // No.1387
    // ê‡ñæ:8cdb
    // 0x8cdb (Windows-31J)
    // 0x9f13 (UTF-16BE)
    if (argCheck == 'å€') {
        return true;
    }
    // No.1388
    // ê‡ñæ:8cdc
    // 0x8cdc (Windows-31J)
    // 0x4e94 (UTF-16BE)
    if (argCheck == 'å‹') {
        return true;
    }
    // No.1389
    // ê‡ñæ:8cdd
    // 0x8cdd (Windows-31J)
    // 0x4e92 (UTF-16BE)
    if (argCheck == 'å›') {
        return true;
    }
    // No.1390
    // ê‡ñæ:8cde
    // 0x8cde (Windows-31J)
    // 0x4f0d (UTF-16BE)
    if (argCheck == 'åﬁ') {
        return true;
    }
    // No.1391
    // ê‡ñæ:8cdf
    // 0x8cdf (Windows-31J)
    // 0x5348 (UTF-16BE)
    if (argCheck == 'åﬂ') {
        return true;
    }
    // No.1392
    // ê‡ñæ:8ce0
    // 0x8ce0 (Windows-31J)
    // 0x5449 (UTF-16BE)
    if (argCheck == 'å‡') {
        return true;
    }
    // No.1393
    // ê‡ñæ:8ce1
    // 0x8ce1 (Windows-31J)
    // 0x543e (UTF-16BE)
    if (argCheck == 'å·') {
        return true;
    }
    // No.1394
    // ê‡ñæ:8ce2
    // 0x8ce2 (Windows-31J)
    // 0x5a2f (UTF-16BE)
    if (argCheck == 'å‚') {
        return true;
    }
    // No.1395
    // ê‡ñæ:8ce3
    // 0x8ce3 (Windows-31J)
    // 0x5f8c (UTF-16BE)
    if (argCheck == 'å„') {
        return true;
    }
    // No.1396
    // ê‡ñæ:8ce4
    // 0x8ce4 (Windows-31J)
    // 0x5fa1 (UTF-16BE)
    if (argCheck == 'å‰') {
        return true;
    }
    // No.1397
    // ê‡ñæ:8ce5
    // 0x8ce5 (Windows-31J)
    // 0x609f (UTF-16BE)
    if (argCheck == 'åÂ') {
        return true;
    }
    // No.1398
    // ê‡ñæ:8ce6
    // 0x8ce6 (Windows-31J)
    // 0x68a7 (UTF-16BE)
    if (argCheck == 'åÊ') {
        return true;
    }
    // No.1399
    // ê‡ñæ:8ce7
    // 0x8ce7 (Windows-31J)
    // 0x6a8e (UTF-16BE)
    if (argCheck == 'åÁ') {
        return true;
    }
    // No.1400
    // ê‡ñæ:8ce8
    // 0x8ce8 (Windows-31J)
    // 0x745a (UTF-16BE)
    if (argCheck == 'åË') {
        return true;
    }
    // No.1401
    // ê‡ñæ:8ce9
    // 0x8ce9 (Windows-31J)
    // 0x7881 (UTF-16BE)
    if (argCheck == 'åÈ') {
        return true;
    }
    // No.1402
    // ê‡ñæ:8cea
    // 0x8cea (Windows-31J)
    // 0x8a9e (UTF-16BE)
    if (argCheck == 'åÍ') {
        return true;
    }
    // No.1403
    // ê‡ñæ:8ceb
    // 0x8ceb (Windows-31J)
    // 0x8aa4 (UTF-16BE)
    if (argCheck == 'åÎ') {
        return true;
    }
    // No.1404
    // ê‡ñæ:8cec
    // 0x8cec (Windows-31J)
    // 0x8b77 (UTF-16BE)
    if (argCheck == 'åÏ') {
        return true;
    }
    // No.1405
    // ê‡ñæ:8ced
    // 0x8ced (Windows-31J)
    // 0x9190 (UTF-16BE)
    if (argCheck == 'åÌ') {
        return true;
    }
    // No.1406
    // ê‡ñæ:8cee
    // 0x8cee (Windows-31J)
    // 0x4e5e (UTF-16BE)
    if (argCheck == 'åÓ') {
        return true;
    }
    // No.1407
    // ê‡ñæ:8cef
    // 0x8cef (Windows-31J)
    // 0x9bc9 (UTF-16BE)
    if (argCheck == 'åÔ') {
        return true;
    }
    // No.1408
    // ê‡ñæ:8cf0
    // 0x8cf0 (Windows-31J)
    // 0x4ea4 (UTF-16BE)
    if (argCheck == 'å') {
        return true;
    }
    // No.1409
    // ê‡ñæ:8cf1
    // 0x8cf1 (Windows-31J)
    // 0x4f7c (UTF-16BE)
    if (argCheck == 'åÒ') {
        return true;
    }
    // No.1410
    // ê‡ñæ:8cf2
    // 0x8cf2 (Windows-31J)
    // 0x4faf (UTF-16BE)
    if (argCheck == 'åÚ') {
        return true;
    }
    // No.1411
    // ê‡ñæ:8cf3
    // 0x8cf3 (Windows-31J)
    // 0x5019 (UTF-16BE)
    if (argCheck == 'åÛ') {
        return true;
    }
    // No.1412
    // ê‡ñæ:8cf4
    // 0x8cf4 (Windows-31J)
    // 0x5016 (UTF-16BE)
    if (argCheck == 'åÙ') {
        return true;
    }
    // No.1413
    // ê‡ñæ:8cf5
    // 0x8cf5 (Windows-31J)
    // 0x5149 (UTF-16BE)
    if (argCheck == 'åı') {
        return true;
    }
    // No.1414
    // ê‡ñæ:8cf6
    // 0x8cf6 (Windows-31J)
    // 0x516c (UTF-16BE)
    if (argCheck == 'åˆ') {
        return true;
    }
    // No.1415
    // ê‡ñæ:8cf7
    // 0x8cf7 (Windows-31J)
    // 0x529f (UTF-16BE)
    if (argCheck == 'å˜') {
        return true;
    }
    // No.1416
    // ê‡ñæ:8cf8
    // 0x8cf8 (Windows-31J)
    // 0x52b9 (UTF-16BE)
    if (argCheck == 'å¯') {
        return true;
    }
    // No.1417
    // ê‡ñæ:8cf9
    // 0x8cf9 (Windows-31J)
    // 0x52fe (UTF-16BE)
    if (argCheck == 'å˘') {
        return true;
    }
    // No.1418
    // ê‡ñæ:8cfa
    // 0x8cfa (Windows-31J)
    // 0x539a (UTF-16BE)
    if (argCheck == 'å˙') {
        return true;
    }
    // No.1419
    // ê‡ñæ:8cfb
    // 0x8cfb (Windows-31J)
    // 0x53e3 (UTF-16BE)
    if (argCheck == 'å˚') {
        return true;
    }
    // No.1420
    // ê‡ñæ:8cfc
    // 0x8cfc (Windows-31J)
    // 0x5411 (UTF-16BE)
    if (argCheck == 'å¸') {
        return true;
    }
    // No.1421
    // ê‡ñæ:8d40
    // 0x8d40 (Windows-31J)
    // 0x540e (UTF-16BE)
    if (argCheck == 'ç@') {
        return true;
    }
    // No.1422
    // ê‡ñæ:8d41
    // 0x8d41 (Windows-31J)
    // 0x5589 (UTF-16BE)
    if (argCheck == 'çA') {
        return true;
    }
    // No.1423
    // ê‡ñæ:8d42
    // 0x8d42 (Windows-31J)
    // 0x5751 (UTF-16BE)
    if (argCheck == 'çB') {
        return true;
    }
    // No.1424
    // ê‡ñæ:8d43
    // 0x8d43 (Windows-31J)
    // 0x57a2 (UTF-16BE)
    if (argCheck == 'çC') {
        return true;
    }
    // No.1425
    // ê‡ñæ:8d44
    // 0x8d44 (Windows-31J)
    // 0x597d (UTF-16BE)
    if (argCheck == 'çD') {
        return true;
    }
    // No.1426
    // ê‡ñæ:8d45
    // 0x8d45 (Windows-31J)
    // 0x5b54 (UTF-16BE)
    if (argCheck == 'çE') {
        return true;
    }
    // No.1427
    // ê‡ñæ:8d46
    // 0x8d46 (Windows-31J)
    // 0x5b5d (UTF-16BE)
    if (argCheck == 'çF') {
        return true;
    }
    // No.1428
    // ê‡ñæ:8d47
    // 0x8d47 (Windows-31J)
    // 0x5b8f (UTF-16BE)
    if (argCheck == 'çG') {
        return true;
    }
    // No.1429
    // ê‡ñæ:8d48
    // 0x8d48 (Windows-31J)
    // 0x5de5 (UTF-16BE)
    if (argCheck == 'çH') {
        return true;
    }
    // No.1430
    // ê‡ñæ:8d49
    // 0x8d49 (Windows-31J)
    // 0x5de7 (UTF-16BE)
    if (argCheck == 'çI') {
        return true;
    }
    // No.1431
    // ê‡ñæ:8d4a
    // 0x8d4a (Windows-31J)
    // 0x5df7 (UTF-16BE)
    if (argCheck == 'çJ') {
        return true;
    }
    // No.1432
    // ê‡ñæ:8d4b
    // 0x8d4b (Windows-31J)
    // 0x5e78 (UTF-16BE)
    if (argCheck == 'çK') {
        return true;
    }
    // No.1433
    // ê‡ñæ:8d4c
    // 0x8d4c (Windows-31J)
    // 0x5e83 (UTF-16BE)
    if (argCheck == 'çL') {
        return true;
    }
    // No.1434
    // ê‡ñæ:8d4d
    // 0x8d4d (Windows-31J)
    // 0x5e9a (UTF-16BE)
    if (argCheck == 'çM') {
        return true;
    }
    // No.1435
    // ê‡ñæ:8d4e
    // 0x8d4e (Windows-31J)
    // 0x5eb7 (UTF-16BE)
    if (argCheck == 'çN') {
        return true;
    }
    // No.1436
    // ê‡ñæ:8d4f
    // 0x8d4f (Windows-31J)
    // 0x5f18 (UTF-16BE)
    if (argCheck == 'çO') {
        return true;
    }
    // No.1437
    // ê‡ñæ:8d50
    // 0x8d50 (Windows-31J)
    // 0x6052 (UTF-16BE)
    if (argCheck == 'çP') {
        return true;
    }
    // No.1438
    // ê‡ñæ:8d51
    // 0x8d51 (Windows-31J)
    // 0x614c (UTF-16BE)
    if (argCheck == 'çQ') {
        return true;
    }
    // No.1439
    // ê‡ñæ:8d52
    // 0x8d52 (Windows-31J)
    // 0x6297 (UTF-16BE)
    if (argCheck == 'çR') {
        return true;
    }
    // No.1440
    // ê‡ñæ:8d53
    // 0x8d53 (Windows-31J)
    // 0x62d8 (UTF-16BE)
    if (argCheck == 'çS') {
        return true;
    }
    // No.1441
    // ê‡ñæ:8d54
    // 0x8d54 (Windows-31J)
    // 0x63a7 (UTF-16BE)
    if (argCheck == 'çT') {
        return true;
    }
    // No.1442
    // ê‡ñæ:8d55
    // 0x8d55 (Windows-31J)
    // 0x653b (UTF-16BE)
    if (argCheck == 'çU') {
        return true;
    }
    // No.1443
    // ê‡ñæ:8d56
    // 0x8d56 (Windows-31J)
    // 0x6602 (UTF-16BE)
    if (argCheck == 'çV') {
        return true;
    }
    // No.1444
    // ê‡ñæ:8d57
    // 0x8d57 (Windows-31J)
    // 0x6643 (UTF-16BE)
    if (argCheck == 'çW') {
        return true;
    }
    // No.1445
    // ê‡ñæ:8d58
    // 0x8d58 (Windows-31J)
    // 0x66f4 (UTF-16BE)
    if (argCheck == 'çX') {
        return true;
    }
    // No.1446
    // ê‡ñæ:8d59
    // 0x8d59 (Windows-31J)
    // 0x676d (UTF-16BE)
    if (argCheck == 'çY') {
        return true;
    }
    // No.1447
    // ê‡ñæ:8d5a
    // 0x8d5a (Windows-31J)
    // 0x6821 (UTF-16BE)
    if (argCheck == 'çZ') {
        return true;
    }
    // No.1448
    // ê‡ñæ:8d5b
    // 0x8d5b (Windows-31J)
    // 0x6897 (UTF-16BE)
    if (argCheck == 'ç[') {
        return true;
    }
    // No.1449
    // ê‡ñæ:8d5c
    // 0x8d5c (Windows-31J)
    // 0x69cb (UTF-16BE)
    if (argCheck == 'ç\') {
        return true;
    }
    // No.1450
    // ê‡ñæ:8d5d
    // 0x8d5d (Windows-31J)
    // 0x6c5f (UTF-16BE)
    if (argCheck == 'ç]') {
        return true;
    }
    // No.1451
    // ê‡ñæ:8d5e
    // 0x8d5e (Windows-31J)
    // 0x6d2a (UTF-16BE)
    if (argCheck == 'ç^') {
        return true;
    }
    // No.1452
    // ê‡ñæ:8d5f
    // 0x8d5f (Windows-31J)
    // 0x6d69 (UTF-16BE)
    if (argCheck == 'ç_') {
        return true;
    }
    // No.1453
    // ê‡ñæ:8d60
    // 0x8d60 (Windows-31J)
    // 0x6e2f (UTF-16BE)
    if (argCheck == 'ç`') {
        return true;
    }
    // No.1454
    // ê‡ñæ:8d61
    // 0x8d61 (Windows-31J)
    // 0x6e9d (UTF-16BE)
    if (argCheck == 'ça') {
        return true;
    }
    // No.1455
    // ê‡ñæ:8d62
    // 0x8d62 (Windows-31J)
    // 0x7532 (UTF-16BE)
    if (argCheck == 'çb') {
        return true;
    }
    // No.1456
    // ê‡ñæ:8d63
    // 0x8d63 (Windows-31J)
    // 0x7687 (UTF-16BE)
    if (argCheck == 'çc') {
        return true;
    }
    // No.1457
    // ê‡ñæ:8d64
    // 0x8d64 (Windows-31J)
    // 0x786c (UTF-16BE)
    if (argCheck == 'çd') {
        return true;
    }
    // No.1458
    // ê‡ñæ:8d65
    // 0x8d65 (Windows-31J)
    // 0x7a3f (UTF-16BE)
    if (argCheck == 'çe') {
        return true;
    }
    // No.1459
    // ê‡ñæ:8d66
    // 0x8d66 (Windows-31J)
    // 0x7ce0 (UTF-16BE)
    if (argCheck == 'çf') {
        return true;
    }
    // No.1460
    // ê‡ñæ:8d67
    // 0x8d67 (Windows-31J)
    // 0x7d05 (UTF-16BE)
    if (argCheck == 'çg') {
        return true;
    }
    // No.1461
    // ê‡ñæ:8d68
    // 0x8d68 (Windows-31J)
    // 0x7d18 (UTF-16BE)
    if (argCheck == 'çh') {
        return true;
    }
    // No.1462
    // ê‡ñæ:8d69
    // 0x8d69 (Windows-31J)
    // 0x7d5e (UTF-16BE)
    if (argCheck == 'çi') {
        return true;
    }
    // No.1463
    // ê‡ñæ:8d6a
    // 0x8d6a (Windows-31J)
    // 0x7db1 (UTF-16BE)
    if (argCheck == 'çj') {
        return true;
    }
    // No.1464
    // ê‡ñæ:8d6b
    // 0x8d6b (Windows-31J)
    // 0x8015 (UTF-16BE)
    if (argCheck == 'çk') {
        return true;
    }
    // No.1465
    // ê‡ñæ:8d6c
    // 0x8d6c (Windows-31J)
    // 0x8003 (UTF-16BE)
    if (argCheck == 'çl') {
        return true;
    }
    // No.1466
    // ê‡ñæ:8d6d
    // 0x8d6d (Windows-31J)
    // 0x80af (UTF-16BE)
    if (argCheck == 'çm') {
        return true;
    }
    // No.1467
    // ê‡ñæ:8d6e
    // 0x8d6e (Windows-31J)
    // 0x80b1 (UTF-16BE)
    if (argCheck == 'çn') {
        return true;
    }
    // No.1468
    // ê‡ñæ:8d6f
    // 0x8d6f (Windows-31J)
    // 0x8154 (UTF-16BE)
    if (argCheck == 'ço') {
        return true;
    }
    // No.1469
    // ê‡ñæ:8d70
    // 0x8d70 (Windows-31J)
    // 0x818f (UTF-16BE)
    if (argCheck == 'çp') {
        return true;
    }
    // No.1470
    // ê‡ñæ:8d71
    // 0x8d71 (Windows-31J)
    // 0x822a (UTF-16BE)
    if (argCheck == 'çq') {
        return true;
    }
    // No.1471
    // ê‡ñæ:8d72
    // 0x8d72 (Windows-31J)
    // 0x8352 (UTF-16BE)
    if (argCheck == 'çr') {
        return true;
    }
    // No.1472
    // ê‡ñæ:8d73
    // 0x8d73 (Windows-31J)
    // 0x884c (UTF-16BE)
    if (argCheck == 'çs') {
        return true;
    }
    // No.1473
    // ê‡ñæ:8d74
    // 0x8d74 (Windows-31J)
    // 0x8861 (UTF-16BE)
    if (argCheck == 'çt') {
        return true;
    }
    // No.1474
    // ê‡ñæ:8d75
    // 0x8d75 (Windows-31J)
    // 0x8b1b (UTF-16BE)
    if (argCheck == 'çu') {
        return true;
    }
    // No.1475
    // ê‡ñæ:8d76
    // 0x8d76 (Windows-31J)
    // 0x8ca2 (UTF-16BE)
    if (argCheck == 'çv') {
        return true;
    }
    // No.1476
    // ê‡ñæ:8d77
    // 0x8d77 (Windows-31J)
    // 0x8cfc (UTF-16BE)
    if (argCheck == 'çw') {
        return true;
    }
    // No.1477
    // ê‡ñæ:8d78
    // 0x8d78 (Windows-31J)
    // 0x90ca (UTF-16BE)
    if (argCheck == 'çx') {
        return true;
    }
    // No.1478
    // ê‡ñæ:8d79
    // 0x8d79 (Windows-31J)
    // 0x9175 (UTF-16BE)
    if (argCheck == 'çy') {
        return true;
    }
    // No.1479
    // ê‡ñæ:8d7a
    // 0x8d7a (Windows-31J)
    // 0x9271 (UTF-16BE)
    if (argCheck == 'çz') {
        return true;
    }
    // No.1480
    // ê‡ñæ:8d7b
    // 0x8d7b (Windows-31J)
    // 0x783f (UTF-16BE)
    if (argCheck == 'ç{') {
        return true;
    }
    // No.1481
    // ê‡ñæ:8d7c
    // 0x8d7c (Windows-31J)
    // 0x92fc (UTF-16BE)
    if (argCheck == 'ç|') {
        return true;
    }
    // No.1482
    // ê‡ñæ:8d7d
    // 0x8d7d (Windows-31J)
    // 0x95a4 (UTF-16BE)
    if (argCheck == 'ç}') {
        return true;
    }
    // No.1483
    // ê‡ñæ:8d7e
    // 0x8d7e (Windows-31J)
    // 0x964d (UTF-16BE)
    if (argCheck == 'ç~') {
        return true;
    }
    // No.1484
    // ê‡ñæ:8d80
    // 0x8d80 (Windows-31J)
    // 0x9805 (UTF-16BE)
    if (argCheck == 'çÄ') {
        return true;
    }
    // No.1485
    // ê‡ñæ:8d81
    // 0x8d81 (Windows-31J)
    // 0x9999 (UTF-16BE)
    if (argCheck == 'çÅ') {
        return true;
    }
    // No.1486
    // ê‡ñæ:8d82
    // 0x8d82 (Windows-31J)
    // 0x9ad8 (UTF-16BE)
    if (argCheck == 'çÇ') {
        return true;
    }
    // No.1487
    // ê‡ñæ:8d83
    // 0x8d83 (Windows-31J)
    // 0x9d3b (UTF-16BE)
    if (argCheck == 'çÉ') {
        return true;
    }
    // No.1488
    // ê‡ñæ:8d84
    // 0x8d84 (Windows-31J)
    // 0x525b (UTF-16BE)
    if (argCheck == 'çÑ') {
        return true;
    }
    // No.1489
    // ê‡ñæ:8d85
    // 0x8d85 (Windows-31J)
    // 0x52ab (UTF-16BE)
    if (argCheck == 'çÖ') {
        return true;
    }
    // No.1490
    // ê‡ñæ:8d86
    // 0x8d86 (Windows-31J)
    // 0x53f7 (UTF-16BE)
    if (argCheck == 'çÜ') {
        return true;
    }
    // No.1491
    // ê‡ñæ:8d87
    // 0x8d87 (Windows-31J)
    // 0x5408 (UTF-16BE)
    if (argCheck == 'çá') {
        return true;
    }
    // No.1492
    // ê‡ñæ:8d88
    // 0x8d88 (Windows-31J)
    // 0x58d5 (UTF-16BE)
    if (argCheck == 'çà') {
        return true;
    }
    // No.1493
    // ê‡ñæ:8d89
    // 0x8d89 (Windows-31J)
    // 0x62f7 (UTF-16BE)
    if (argCheck == 'çâ') {
        return true;
    }
    // No.1494
    // ê‡ñæ:8d8a
    // 0x8d8a (Windows-31J)
    // 0x6fe0 (UTF-16BE)
    if (argCheck == 'çä') {
        return true;
    }
    // No.1495
    // ê‡ñæ:8d8b
    // 0x8d8b (Windows-31J)
    // 0x8c6a (UTF-16BE)
    if (argCheck == 'çã') {
        return true;
    }
    // No.1496
    // ê‡ñæ:8d8c
    // 0x8d8c (Windows-31J)
    // 0x8f5f (UTF-16BE)
    if (argCheck == 'çå') {
        return true;
    }
    // No.1497
    // ê‡ñæ:8d8d
    // 0x8d8d (Windows-31J)
    // 0x9eb9 (UTF-16BE)
    if (argCheck == 'çç') {
        return true;
    }
    // No.1498
    // ê‡ñæ:8d8e
    // 0x8d8e (Windows-31J)
    // 0x514b (UTF-16BE)
    if (argCheck == 'çé') {
        return true;
    }
    // No.1499
    // ê‡ñæ:8d8f
    // 0x8d8f (Windows-31J)
    // 0x523b (UTF-16BE)
    if (argCheck == 'çè') {
        return true;
    }
    // No.1500
    // ê‡ñæ:8d90
    // 0x8d90 (Windows-31J)
    // 0x544a (UTF-16BE)
    if (argCheck == 'çê') {
        return true;
    }
    // No.1501
    // ê‡ñæ:8d91
    // 0x8d91 (Windows-31J)
    // 0x56fd (UTF-16BE)
    if (argCheck == 'çë') {
        return true;
    }
    // No.1502
    // ê‡ñæ:8d92
    // 0x8d92 (Windows-31J)
    // 0x7a40 (UTF-16BE)
    if (argCheck == 'çí') {
        return true;
    }
    // No.1503
    // ê‡ñæ:8d93
    // 0x8d93 (Windows-31J)
    // 0x9177 (UTF-16BE)
    if (argCheck == 'çì') {
        return true;
    }
    // No.1504
    // ê‡ñæ:8d94
    // 0x8d94 (Windows-31J)
    // 0x9d60 (UTF-16BE)
    if (argCheck == 'çî') {
        return true;
    }
    // No.1505
    // ê‡ñæ:8d95
    // 0x8d95 (Windows-31J)
    // 0x9ed2 (UTF-16BE)
    if (argCheck == 'çï') {
        return true;
    }
    // No.1506
    // ê‡ñæ:8d96
    // 0x8d96 (Windows-31J)
    // 0x7344 (UTF-16BE)
    if (argCheck == 'çñ') {
        return true;
    }
    // No.1507
    // ê‡ñæ:8d97
    // 0x8d97 (Windows-31J)
    // 0x6f09 (UTF-16BE)
    if (argCheck == 'çó') {
        return true;
    }
    // No.1508
    // ê‡ñæ:8d98
    // 0x8d98 (Windows-31J)
    // 0x8170 (UTF-16BE)
    if (argCheck == 'çò') {
        return true;
    }
    // No.1509
    // ê‡ñæ:8d99
    // 0x8d99 (Windows-31J)
    // 0x7511 (UTF-16BE)
    if (argCheck == 'çô') {
        return true;
    }
    // No.1510
    // ê‡ñæ:8d9a
    // 0x8d9a (Windows-31J)
    // 0x5ffd (UTF-16BE)
    if (argCheck == 'çö') {
        return true;
    }
    // No.1511
    // ê‡ñæ:8d9b
    // 0x8d9b (Windows-31J)
    // 0x60da (UTF-16BE)
    if (argCheck == 'çõ') {
        return true;
    }
    // No.1512
    // ê‡ñæ:8d9c
    // 0x8d9c (Windows-31J)
    // 0x9aa8 (UTF-16BE)
    if (argCheck == 'çú') {
        return true;
    }
    // No.1513
    // ê‡ñæ:8d9d
    // 0x8d9d (Windows-31J)
    // 0x72db (UTF-16BE)
    if (argCheck == 'çù') {
        return true;
    }
    // No.1514
    // ê‡ñæ:8d9e
    // 0x8d9e (Windows-31J)
    // 0x8fbc (UTF-16BE)
    if (argCheck == 'çû') {
        return true;
    }
    // No.1515
    // ê‡ñæ:8d9f
    // 0x8d9f (Windows-31J)
    // 0x6b64 (UTF-16BE)
    if (argCheck == 'çü') {
        return true;
    }
    // No.1516
    // ê‡ñæ:8da0
    // 0x8da0 (Windows-31J)
    // 0x9803 (UTF-16BE)
    if (argCheck == 'ç†') {
        return true;
    }
    // No.1517
    // ê‡ñæ:8da1
    // 0x8da1 (Windows-31J)
    // 0x4eca (UTF-16BE)
    if (argCheck == 'ç°') {
        return true;
    }
    // No.1518
    // ê‡ñæ:8da2
    // 0x8da2 (Windows-31J)
    // 0x56f0 (UTF-16BE)
    if (argCheck == 'ç¢') {
        return true;
    }
    // No.1519
    // ê‡ñæ:8da3
    // 0x8da3 (Windows-31J)
    // 0x5764 (UTF-16BE)
    if (argCheck == 'ç£') {
        return true;
    }
    // No.1520
    // ê‡ñæ:8da4
    // 0x8da4 (Windows-31J)
    // 0x58be (UTF-16BE)
    if (argCheck == 'ç§') {
        return true;
    }
    // No.1521
    // ê‡ñæ:8da5
    // 0x8da5 (Windows-31J)
    // 0x5a5a (UTF-16BE)
    if (argCheck == 'ç•') {
        return true;
    }
    // No.1522
    // ê‡ñæ:8da6
    // 0x8da6 (Windows-31J)
    // 0x6068 (UTF-16BE)
    if (argCheck == 'ç¶') {
        return true;
    }
    // No.1523
    // ê‡ñæ:8da7
    // 0x8da7 (Windows-31J)
    // 0x61c7 (UTF-16BE)
    if (argCheck == 'çß') {
        return true;
    }
    // No.1524
    // ê‡ñæ:8da8
    // 0x8da8 (Windows-31J)
    // 0x660f (UTF-16BE)
    if (argCheck == 'ç®') {
        return true;
    }
    // No.1525
    // ê‡ñæ:8da9
    // 0x8da9 (Windows-31J)
    // 0x6606 (UTF-16BE)
    if (argCheck == 'ç©') {
        return true;
    }
    // No.1526
    // ê‡ñæ:8daa
    // 0x8daa (Windows-31J)
    // 0x6839 (UTF-16BE)
    if (argCheck == 'ç™') {
        return true;
    }
    // No.1527
    // ê‡ñæ:8dab
    // 0x8dab (Windows-31J)
    // 0x68b1 (UTF-16BE)
    if (argCheck == 'ç´') {
        return true;
    }
    // No.1528
    // ê‡ñæ:8dac
    // 0x8dac (Windows-31J)
    // 0x6df7 (UTF-16BE)
    if (argCheck == 'ç¨') {
        return true;
    }
    // No.1529
    // ê‡ñæ:8dad
    // 0x8dad (Windows-31J)
    // 0x75d5 (UTF-16BE)
    if (argCheck == 'ç≠') {
        return true;
    }
    // No.1530
    // ê‡ñæ:8dae
    // 0x8dae (Windows-31J)
    // 0x7d3a (UTF-16BE)
    if (argCheck == 'çÆ') {
        return true;
    }
    // No.1531
    // ê‡ñæ:8daf
    // 0x8daf (Windows-31J)
    // 0x826e (UTF-16BE)
    if (argCheck == 'çØ') {
        return true;
    }
    // No.1532
    // ê‡ñæ:8db0
    // 0x8db0 (Windows-31J)
    // 0x9b42 (UTF-16BE)
    if (argCheck == 'ç∞') {
        return true;
    }
    // No.1533
    // ê‡ñæ:8db1
    // 0x8db1 (Windows-31J)
    // 0x4e9b (UTF-16BE)
    if (argCheck == 'ç±') {
        return true;
    }
    // No.1534
    // ê‡ñæ:8db2
    // 0x8db2 (Windows-31J)
    // 0x4f50 (UTF-16BE)
    if (argCheck == 'ç≤') {
        return true;
    }
    // No.1535
    // ê‡ñæ:8db3
    // 0x8db3 (Windows-31J)
    // 0x53c9 (UTF-16BE)
    if (argCheck == 'ç≥') {
        return true;
    }
    // No.1536
    // ê‡ñæ:8db4
    // 0x8db4 (Windows-31J)
    // 0x5506 (UTF-16BE)
    if (argCheck == 'ç¥') {
        return true;
    }
    // No.1537
    // ê‡ñæ:8db5
    // 0x8db5 (Windows-31J)
    // 0x5d6f (UTF-16BE)
    if (argCheck == 'çµ') {
        return true;
    }
    // No.1538
    // ê‡ñæ:8db6
    // 0x8db6 (Windows-31J)
    // 0x5de6 (UTF-16BE)
    if (argCheck == 'ç∂') {
        return true;
    }
    // No.1539
    // ê‡ñæ:8db7
    // 0x8db7 (Windows-31J)
    // 0x5dee (UTF-16BE)
    if (argCheck == 'ç∑') {
        return true;
    }
    // No.1540
    // ê‡ñæ:8db8
    // 0x8db8 (Windows-31J)
    // 0x67fb (UTF-16BE)
    if (argCheck == 'ç∏') {
        return true;
    }
    // No.1541
    // ê‡ñæ:8db9
    // 0x8db9 (Windows-31J)
    // 0x6c99 (UTF-16BE)
    if (argCheck == 'çπ') {
        return true;
    }
    // No.1542
    // ê‡ñæ:8dba
    // 0x8dba (Windows-31J)
    // 0x7473 (UTF-16BE)
    if (argCheck == 'ç∫') {
        return true;
    }
    // No.1543
    // ê‡ñæ:8dbb
    // 0x8dbb (Windows-31J)
    // 0x7802 (UTF-16BE)
    if (argCheck == 'çª') {
        return true;
    }
    // No.1544
    // ê‡ñæ:8dbc
    // 0x8dbc (Windows-31J)
    // 0x8a50 (UTF-16BE)
    if (argCheck == 'çº') {
        return true;
    }
    // No.1545
    // ê‡ñæ:8dbd
    // 0x8dbd (Windows-31J)
    // 0x9396 (UTF-16BE)
    if (argCheck == 'çΩ') {
        return true;
    }
    // No.1546
    // ê‡ñæ:8dbe
    // 0x8dbe (Windows-31J)
    // 0x88df (UTF-16BE)
    if (argCheck == 'çæ') {
        return true;
    }
    // No.1547
    // ê‡ñæ:8dbf
    // 0x8dbf (Windows-31J)
    // 0x5750 (UTF-16BE)
    if (argCheck == 'çø') {
        return true;
    }
    // No.1548
    // ê‡ñæ:8dc0
    // 0x8dc0 (Windows-31J)
    // 0x5ea7 (UTF-16BE)
    if (argCheck == 'ç¿') {
        return true;
    }
    // No.1549
    // ê‡ñæ:8dc1
    // 0x8dc1 (Windows-31J)
    // 0x632b (UTF-16BE)
    if (argCheck == 'ç¡') {
        return true;
    }
    // No.1550
    // ê‡ñæ:8dc2
    // 0x8dc2 (Windows-31J)
    // 0x50b5 (UTF-16BE)
    if (argCheck == 'ç¬') {
        return true;
    }
    // No.1551
    // ê‡ñæ:8dc3
    // 0x8dc3 (Windows-31J)
    // 0x50ac (UTF-16BE)
    if (argCheck == 'ç√') {
        return true;
    }
    // No.1552
    // ê‡ñæ:8dc4
    // 0x8dc4 (Windows-31J)
    // 0x518d (UTF-16BE)
    if (argCheck == 'çƒ') {
        return true;
    }
    // No.1553
    // ê‡ñæ:8dc5
    // 0x8dc5 (Windows-31J)
    // 0x6700 (UTF-16BE)
    if (argCheck == 'ç≈') {
        return true;
    }
    // No.1554
    // ê‡ñæ:8dc6
    // 0x8dc6 (Windows-31J)
    // 0x54c9 (UTF-16BE)
    if (argCheck == 'ç∆') {
        return true;
    }
    // No.1555
    // ê‡ñæ:8dc7
    // 0x8dc7 (Windows-31J)
    // 0x585e (UTF-16BE)
    if (argCheck == 'ç«') {
        return true;
    }
    // No.1556
    // ê‡ñæ:8dc8
    // 0x8dc8 (Windows-31J)
    // 0x59bb (UTF-16BE)
    if (argCheck == 'ç»') {
        return true;
    }
    // No.1557
    // ê‡ñæ:8dc9
    // 0x8dc9 (Windows-31J)
    // 0x5bb0 (UTF-16BE)
    if (argCheck == 'ç…') {
        return true;
    }
    // No.1558
    // ê‡ñæ:8dca
    // 0x8dca (Windows-31J)
    // 0x5f69 (UTF-16BE)
    if (argCheck == 'ç ') {
        return true;
    }
    // No.1559
    // ê‡ñæ:8dcb
    // 0x8dcb (Windows-31J)
    // 0x624d (UTF-16BE)
    if (argCheck == 'çÀ') {
        return true;
    }
    // No.1560
    // ê‡ñæ:8dcc
    // 0x8dcc (Windows-31J)
    // 0x63a1 (UTF-16BE)
    if (argCheck == 'çÃ') {
        return true;
    }
    // No.1561
    // ê‡ñæ:8dcd
    // 0x8dcd (Windows-31J)
    // 0x683d (UTF-16BE)
    if (argCheck == 'çÕ') {
        return true;
    }
    // No.1562
    // ê‡ñæ:8dce
    // 0x8dce (Windows-31J)
    // 0x6b73 (UTF-16BE)
    if (argCheck == 'çŒ') {
        return true;
    }
    // No.1563
    // ê‡ñæ:8dcf
    // 0x8dcf (Windows-31J)
    // 0x6e08 (UTF-16BE)
    if (argCheck == 'çœ') {
        return true;
    }
    // No.1564
    // ê‡ñæ:8dd0
    // 0x8dd0 (Windows-31J)
    // 0x707d (UTF-16BE)
    if (argCheck == 'ç–') {
        return true;
    }
    // No.1565
    // ê‡ñæ:8dd1
    // 0x8dd1 (Windows-31J)
    // 0x91c7 (UTF-16BE)
    if (argCheck == 'ç—') {
        return true;
    }
    // No.1566
    // ê‡ñæ:8dd2
    // 0x8dd2 (Windows-31J)
    // 0x7280 (UTF-16BE)
    if (argCheck == 'ç“') {
        return true;
    }
    // No.1567
    // ê‡ñæ:8dd3
    // 0x8dd3 (Windows-31J)
    // 0x7815 (UTF-16BE)
    if (argCheck == 'ç”') {
        return true;
    }
    // No.1568
    // ê‡ñæ:8dd4
    // 0x8dd4 (Windows-31J)
    // 0x7826 (UTF-16BE)
    if (argCheck == 'ç‘') {
        return true;
    }
    // No.1569
    // ê‡ñæ:8dd5
    // 0x8dd5 (Windows-31J)
    // 0x796d (UTF-16BE)
    if (argCheck == 'ç’') {
        return true;
    }
    // No.1570
    // ê‡ñæ:8dd6
    // 0x8dd6 (Windows-31J)
    // 0x658e (UTF-16BE)
    if (argCheck == 'ç÷') {
        return true;
    }
    // No.1571
    // ê‡ñæ:8dd7
    // 0x8dd7 (Windows-31J)
    // 0x7d30 (UTF-16BE)
    if (argCheck == 'ç◊') {
        return true;
    }
    // No.1572
    // ê‡ñæ:8dd8
    // 0x8dd8 (Windows-31J)
    // 0x83dc (UTF-16BE)
    if (argCheck == 'çÿ') {
        return true;
    }
    // No.1573
    // ê‡ñæ:8dd9
    // 0x8dd9 (Windows-31J)
    // 0x88c1 (UTF-16BE)
    if (argCheck == 'çŸ') {
        return true;
    }
    // No.1574
    // ê‡ñæ:8dda
    // 0x8dda (Windows-31J)
    // 0x8f09 (UTF-16BE)
    if (argCheck == 'ç⁄') {
        return true;
    }
    // No.1575
    // ê‡ñæ:8ddb
    // 0x8ddb (Windows-31J)
    // 0x969b (UTF-16BE)
    if (argCheck == 'ç€') {
        return true;
    }
    // No.1576
    // ê‡ñæ:8ddc
    // 0x8ddc (Windows-31J)
    // 0x5264 (UTF-16BE)
    if (argCheck == 'ç‹') {
        return true;
    }
    // No.1577
    // ê‡ñæ:8ddd
    // 0x8ddd (Windows-31J)
    // 0x5728 (UTF-16BE)
    if (argCheck == 'ç›') {
        return true;
    }
    // No.1578
    // ê‡ñæ:8dde
    // 0x8dde (Windows-31J)
    // 0x6750 (UTF-16BE)
    if (argCheck == 'çﬁ') {
        return true;
    }
    // No.1579
    // ê‡ñæ:8ddf
    // 0x8ddf (Windows-31J)
    // 0x7f6a (UTF-16BE)
    if (argCheck == 'çﬂ') {
        return true;
    }
    // No.1580
    // ê‡ñæ:8de0
    // 0x8de0 (Windows-31J)
    // 0x8ca1 (UTF-16BE)
    if (argCheck == 'ç‡') {
        return true;
    }
    // No.1581
    // ê‡ñæ:8de1
    // 0x8de1 (Windows-31J)
    // 0x51b4 (UTF-16BE)
    if (argCheck == 'ç·') {
        return true;
    }
    // No.1582
    // ê‡ñæ:8de2
    // 0x8de2 (Windows-31J)
    // 0x5742 (UTF-16BE)
    if (argCheck == 'ç‚') {
        return true;
    }
    // No.1583
    // ê‡ñæ:8de3
    // 0x8de3 (Windows-31J)
    // 0x962a (UTF-16BE)
    if (argCheck == 'ç„') {
        return true;
    }
    // No.1584
    // ê‡ñæ:8de4
    // 0x8de4 (Windows-31J)
    // 0x583a (UTF-16BE)
    if (argCheck == 'ç‰') {
        return true;
    }
    // No.1585
    // ê‡ñæ:8de5
    // 0x8de5 (Windows-31J)
    // 0x698a (UTF-16BE)
    if (argCheck == 'çÂ') {
        return true;
    }
    // No.1586
    // ê‡ñæ:8de6
    // 0x8de6 (Windows-31J)
    // 0x80b4 (UTF-16BE)
    if (argCheck == 'çÊ') {
        return true;
    }
    // No.1587
    // ê‡ñæ:8de7
    // 0x8de7 (Windows-31J)
    // 0x54b2 (UTF-16BE)
    if (argCheck == 'çÁ') {
        return true;
    }
    // No.1588
    // ê‡ñæ:8de8
    // 0x8de8 (Windows-31J)
    // 0x5d0e (UTF-16BE)
    if (argCheck == 'çË') {
        return true;
    }
    // No.1589
    // ê‡ñæ:8de9
    // 0x8de9 (Windows-31J)
    // 0x57fc (UTF-16BE)
    if (argCheck == 'çÈ') {
        return true;
    }
    // No.1590
    // ê‡ñæ:8dea
    // 0x8dea (Windows-31J)
    // 0x7895 (UTF-16BE)
    if (argCheck == 'çÍ') {
        return true;
    }
    // No.1591
    // ê‡ñæ:8deb
    // 0x8deb (Windows-31J)
    // 0x9dfa (UTF-16BE)
    if (argCheck == 'çÎ') {
        return true;
    }
    // No.1592
    // ê‡ñæ:8dec
    // 0x8dec (Windows-31J)
    // 0x4f5c (UTF-16BE)
    if (argCheck == 'çÏ') {
        return true;
    }
    // No.1593
    // ê‡ñæ:8ded
    // 0x8ded (Windows-31J)
    // 0x524a (UTF-16BE)
    if (argCheck == 'çÌ') {
        return true;
    }
    // No.1594
    // ê‡ñæ:8dee
    // 0x8dee (Windows-31J)
    // 0x548b (UTF-16BE)
    if (argCheck == 'çÓ') {
        return true;
    }
    // No.1595
    // ê‡ñæ:8def
    // 0x8def (Windows-31J)
    // 0x643e (UTF-16BE)
    if (argCheck == 'çÔ') {
        return true;
    }
    // No.1596
    // ê‡ñæ:8df0
    // 0x8df0 (Windows-31J)
    // 0x6628 (UTF-16BE)
    if (argCheck == 'ç') {
        return true;
    }
    // No.1597
    // ê‡ñæ:8df1
    // 0x8df1 (Windows-31J)
    // 0x6714 (UTF-16BE)
    if (argCheck == 'çÒ') {
        return true;
    }
    // No.1598
    // ê‡ñæ:8df2
    // 0x8df2 (Windows-31J)
    // 0x67f5 (UTF-16BE)
    if (argCheck == 'çÚ') {
        return true;
    }
    // No.1599
    // ê‡ñæ:8df3
    // 0x8df3 (Windows-31J)
    // 0x7a84 (UTF-16BE)
    if (argCheck == 'çÛ') {
        return true;
    }
    // No.1600
    // ê‡ñæ:8df4
    // 0x8df4 (Windows-31J)
    // 0x7b56 (UTF-16BE)
    if (argCheck == 'çÙ') {
        return true;
    }
    // No.1601
    // ê‡ñæ:8df5
    // 0x8df5 (Windows-31J)
    // 0x7d22 (UTF-16BE)
    if (argCheck == 'çı') {
        return true;
    }
    // No.1602
    // ê‡ñæ:8df6
    // 0x8df6 (Windows-31J)
    // 0x932f (UTF-16BE)
    if (argCheck == 'çˆ') {
        return true;
    }
    // No.1603
    // ê‡ñæ:8df7
    // 0x8df7 (Windows-31J)
    // 0x685c (UTF-16BE)
    if (argCheck == 'ç˜') {
        return true;
    }
    // No.1604
    // ê‡ñæ:8df8
    // 0x8df8 (Windows-31J)
    // 0x9bad (UTF-16BE)
    if (argCheck == 'ç¯') {
        return true;
    }
    // No.1605
    // ê‡ñæ:8df9
    // 0x8df9 (Windows-31J)
    // 0x7b39 (UTF-16BE)
    if (argCheck == 'ç˘') {
        return true;
    }
    // No.1606
    // ê‡ñæ:8dfa
    // 0x8dfa (Windows-31J)
    // 0x5319 (UTF-16BE)
    if (argCheck == 'ç˙') {
        return true;
    }
    // No.1607
    // ê‡ñæ:8dfb
    // 0x8dfb (Windows-31J)
    // 0x518a (UTF-16BE)
    if (argCheck == 'ç˚') {
        return true;
    }
    // No.1608
    // ê‡ñæ:8dfc
    // 0x8dfc (Windows-31J)
    // 0x5237 (UTF-16BE)
    if (argCheck == 'ç¸') {
        return true;
    }
    // No.1609
    // ê‡ñæ:8e40
    // 0x8e40 (Windows-31J)
    // 0x5bdf (UTF-16BE)
    if (argCheck == 'é@') {
        return true;
    }
    // No.1610
    // ê‡ñæ:8e41
    // 0x8e41 (Windows-31J)
    // 0x62f6 (UTF-16BE)
    if (argCheck == 'éA') {
        return true;
    }
    // No.1611
    // ê‡ñæ:8e42
    // 0x8e42 (Windows-31J)
    // 0x64ae (UTF-16BE)
    if (argCheck == 'éB') {
        return true;
    }
    // No.1612
    // ê‡ñæ:8e43
    // 0x8e43 (Windows-31J)
    // 0x64e6 (UTF-16BE)
    if (argCheck == 'éC') {
        return true;
    }
    // No.1613
    // ê‡ñæ:8e44
    // 0x8e44 (Windows-31J)
    // 0x672d (UTF-16BE)
    if (argCheck == 'éD') {
        return true;
    }
    // No.1614
    // ê‡ñæ:8e45
    // 0x8e45 (Windows-31J)
    // 0x6bba (UTF-16BE)
    if (argCheck == 'éE') {
        return true;
    }
    // No.1615
    // ê‡ñæ:8e46
    // 0x8e46 (Windows-31J)
    // 0x85a9 (UTF-16BE)
    if (argCheck == 'éF') {
        return true;
    }
    // No.1616
    // ê‡ñæ:8e47
    // 0x8e47 (Windows-31J)
    // 0x96d1 (UTF-16BE)
    if (argCheck == 'éG') {
        return true;
    }
    // No.1617
    // ê‡ñæ:8e48
    // 0x8e48 (Windows-31J)
    // 0x7690 (UTF-16BE)
    if (argCheck == 'éH') {
        return true;
    }
    // No.1618
    // ê‡ñæ:8e49
    // 0x8e49 (Windows-31J)
    // 0x9bd6 (UTF-16BE)
    if (argCheck == 'éI') {
        return true;
    }
    // No.1619
    // ê‡ñæ:8e4a
    // 0x8e4a (Windows-31J)
    // 0x634c (UTF-16BE)
    if (argCheck == 'éJ') {
        return true;
    }
    // No.1620
    // ê‡ñæ:8e4b
    // 0x8e4b (Windows-31J)
    // 0x9306 (UTF-16BE)
    if (argCheck == 'éK') {
        return true;
    }
    // No.1621
    // ê‡ñæ:8e4c
    // 0x8e4c (Windows-31J)
    // 0x9bab (UTF-16BE)
    if (argCheck == 'éL') {
        return true;
    }
    // No.1622
    // ê‡ñæ:8e4d
    // 0x8e4d (Windows-31J)
    // 0x76bf (UTF-16BE)
    if (argCheck == 'éM') {
        return true;
    }
    // No.1623
    // ê‡ñæ:8e4e
    // 0x8e4e (Windows-31J)
    // 0x6652 (UTF-16BE)
    if (argCheck == 'éN') {
        return true;
    }
    // No.1624
    // ê‡ñæ:8e4f
    // 0x8e4f (Windows-31J)
    // 0x4e09 (UTF-16BE)
    if (argCheck == 'éO') {
        return true;
    }
    // No.1625
    // ê‡ñæ:8e50
    // 0x8e50 (Windows-31J)
    // 0x5098 (UTF-16BE)
    if (argCheck == 'éP') {
        return true;
    }
    // No.1626
    // ê‡ñæ:8e51
    // 0x8e51 (Windows-31J)
    // 0x53c2 (UTF-16BE)
    if (argCheck == 'éQ') {
        return true;
    }
    // No.1627
    // ê‡ñæ:8e52
    // 0x8e52 (Windows-31J)
    // 0x5c71 (UTF-16BE)
    if (argCheck == 'éR') {
        return true;
    }
    // No.1628
    // ê‡ñæ:8e53
    // 0x8e53 (Windows-31J)
    // 0x60e8 (UTF-16BE)
    if (argCheck == 'éS') {
        return true;
    }
    // No.1629
    // ê‡ñæ:8e54
    // 0x8e54 (Windows-31J)
    // 0x6492 (UTF-16BE)
    if (argCheck == 'éT') {
        return true;
    }
    // No.1630
    // ê‡ñæ:8e55
    // 0x8e55 (Windows-31J)
    // 0x6563 (UTF-16BE)
    if (argCheck == 'éU') {
        return true;
    }
    // No.1631
    // ê‡ñæ:8e56
    // 0x8e56 (Windows-31J)
    // 0x685f (UTF-16BE)
    if (argCheck == 'éV') {
        return true;
    }
    // No.1632
    // ê‡ñæ:8e57
    // 0x8e57 (Windows-31J)
    // 0x71e6 (UTF-16BE)
    if (argCheck == 'éW') {
        return true;
    }
    // No.1633
    // ê‡ñæ:8e58
    // 0x8e58 (Windows-31J)
    // 0x73ca (UTF-16BE)
    if (argCheck == 'éX') {
        return true;
    }
    // No.1634
    // ê‡ñæ:8e59
    // 0x8e59 (Windows-31J)
    // 0x7523 (UTF-16BE)
    if (argCheck == 'éY') {
        return true;
    }
    // No.1635
    // ê‡ñæ:8e5a
    // 0x8e5a (Windows-31J)
    // 0x7b97 (UTF-16BE)
    if (argCheck == 'éZ') {
        return true;
    }
    // No.1636
    // ê‡ñæ:8e5b
    // 0x8e5b (Windows-31J)
    // 0x7e82 (UTF-16BE)
    if (argCheck == 'é[') {
        return true;
    }
    // No.1637
    // ê‡ñæ:8e5c
    // 0x8e5c (Windows-31J)
    // 0x8695 (UTF-16BE)
    if (argCheck == 'é\') {
        return true;
    }
    // No.1638
    // ê‡ñæ:8e5d
    // 0x8e5d (Windows-31J)
    // 0x8b83 (UTF-16BE)
    if (argCheck == 'é]') {
        return true;
    }
    // No.1639
    // ê‡ñæ:8e5e
    // 0x8e5e (Windows-31J)
    // 0x8cdb (UTF-16BE)
    if (argCheck == 'é^') {
        return true;
    }
    // No.1640
    // ê‡ñæ:8e5f
    // 0x8e5f (Windows-31J)
    // 0x9178 (UTF-16BE)
    if (argCheck == 'é_') {
        return true;
    }
    // No.1641
    // ê‡ñæ:8e60
    // 0x8e60 (Windows-31J)
    // 0x9910 (UTF-16BE)
    if (argCheck == 'é`') {
        return true;
    }
    // No.1642
    // ê‡ñæ:8e61
    // 0x8e61 (Windows-31J)
    // 0x65ac (UTF-16BE)
    if (argCheck == 'éa') {
        return true;
    }
    // No.1643
    // ê‡ñæ:8e62
    // 0x8e62 (Windows-31J)
    // 0x66ab (UTF-16BE)
    if (argCheck == 'éb') {
        return true;
    }
    // No.1644
    // ê‡ñæ:8e63
    // 0x8e63 (Windows-31J)
    // 0x6b8b (UTF-16BE)
    if (argCheck == 'éc') {
        return true;
    }
    // No.1645
    // ê‡ñæ:8e64
    // 0x8e64 (Windows-31J)
    // 0x4ed5 (UTF-16BE)
    if (argCheck == 'éd') {
        return true;
    }
    // No.1646
    // ê‡ñæ:8e65
    // 0x8e65 (Windows-31J)
    // 0x4ed4 (UTF-16BE)
    if (argCheck == 'ée') {
        return true;
    }
    // No.1647
    // ê‡ñæ:8e66
    // 0x8e66 (Windows-31J)
    // 0x4f3a (UTF-16BE)
    if (argCheck == 'éf') {
        return true;
    }
    // No.1648
    // ê‡ñæ:8e67
    // 0x8e67 (Windows-31J)
    // 0x4f7f (UTF-16BE)
    if (argCheck == 'ég') {
        return true;
    }
    // No.1649
    // ê‡ñæ:8e68
    // 0x8e68 (Windows-31J)
    // 0x523a (UTF-16BE)
    if (argCheck == 'éh') {
        return true;
    }
    // No.1650
    // ê‡ñæ:8e69
    // 0x8e69 (Windows-31J)
    // 0x53f8 (UTF-16BE)
    if (argCheck == 'éi') {
        return true;
    }
    // No.1651
    // ê‡ñæ:8e6a
    // 0x8e6a (Windows-31J)
    // 0x53f2 (UTF-16BE)
    if (argCheck == 'éj') {
        return true;
    }
    // No.1652
    // ê‡ñæ:8e6b
    // 0x8e6b (Windows-31J)
    // 0x55e3 (UTF-16BE)
    if (argCheck == 'ék') {
        return true;
    }
    // No.1653
    // ê‡ñæ:8e6c
    // 0x8e6c (Windows-31J)
    // 0x56db (UTF-16BE)
    if (argCheck == 'él') {
        return true;
    }
    // No.1654
    // ê‡ñæ:8e6d
    // 0x8e6d (Windows-31J)
    // 0x58eb (UTF-16BE)
    if (argCheck == 'ém') {
        return true;
    }
    // No.1655
    // ê‡ñæ:8e6e
    // 0x8e6e (Windows-31J)
    // 0x59cb (UTF-16BE)
    if (argCheck == 'én') {
        return true;
    }
    // No.1656
    // ê‡ñæ:8e6f
    // 0x8e6f (Windows-31J)
    // 0x59c9 (UTF-16BE)
    if (argCheck == 'éo') {
        return true;
    }
    // No.1657
    // ê‡ñæ:8e70
    // 0x8e70 (Windows-31J)
    // 0x59ff (UTF-16BE)
    if (argCheck == 'ép') {
        return true;
    }
    // No.1658
    // ê‡ñæ:8e71
    // 0x8e71 (Windows-31J)
    // 0x5b50 (UTF-16BE)
    if (argCheck == 'éq') {
        return true;
    }
    // No.1659
    // ê‡ñæ:8e72
    // 0x8e72 (Windows-31J)
    // 0x5c4d (UTF-16BE)
    if (argCheck == 'ér') {
        return true;
    }
    // No.1660
    // ê‡ñæ:8e73
    // 0x8e73 (Windows-31J)
    // 0x5e02 (UTF-16BE)
    if (argCheck == 'és') {
        return true;
    }
    // No.1661
    // ê‡ñæ:8e74
    // 0x8e74 (Windows-31J)
    // 0x5e2b (UTF-16BE)
    if (argCheck == 'ét') {
        return true;
    }
    // No.1662
    // ê‡ñæ:8e75
    // 0x8e75 (Windows-31J)
    // 0x5fd7 (UTF-16BE)
    if (argCheck == 'éu') {
        return true;
    }
    // No.1663
    // ê‡ñæ:8e76
    // 0x8e76 (Windows-31J)
    // 0x601d (UTF-16BE)
    if (argCheck == 'év') {
        return true;
    }
    // No.1664
    // ê‡ñæ:8e77
    // 0x8e77 (Windows-31J)
    // 0x6307 (UTF-16BE)
    if (argCheck == 'éw') {
        return true;
    }
    // No.1665
    // ê‡ñæ:8e78
    // 0x8e78 (Windows-31J)
    // 0x652f (UTF-16BE)
    if (argCheck == 'éx') {
        return true;
    }
    // No.1666
    // ê‡ñæ:8e79
    // 0x8e79 (Windows-31J)
    // 0x5b5c (UTF-16BE)
    if (argCheck == 'éy') {
        return true;
    }
    // No.1667
    // ê‡ñæ:8e7a
    // 0x8e7a (Windows-31J)
    // 0x65af (UTF-16BE)
    if (argCheck == 'éz') {
        return true;
    }
    // No.1668
    // ê‡ñæ:8e7b
    // 0x8e7b (Windows-31J)
    // 0x65bd (UTF-16BE)
    if (argCheck == 'é{') {
        return true;
    }
    // No.1669
    // ê‡ñæ:8e7c
    // 0x8e7c (Windows-31J)
    // 0x65e8 (UTF-16BE)
    if (argCheck == 'é|') {
        return true;
    }
    // No.1670
    // ê‡ñæ:8e7d
    // 0x8e7d (Windows-31J)
    // 0x679d (UTF-16BE)
    if (argCheck == 'é}') {
        return true;
    }
    // No.1671
    // ê‡ñæ:8e7e
    // 0x8e7e (Windows-31J)
    // 0x6b62 (UTF-16BE)
    if (argCheck == 'é~') {
        return true;
    }
    // No.1672
    // ê‡ñæ:8e80
    // 0x8e80 (Windows-31J)
    // 0x6b7b (UTF-16BE)
    if (argCheck == 'éÄ') {
        return true;
    }
    // No.1673
    // ê‡ñæ:8e81
    // 0x8e81 (Windows-31J)
    // 0x6c0f (UTF-16BE)
    if (argCheck == 'éÅ') {
        return true;
    }
    // No.1674
    // ê‡ñæ:8e82
    // 0x8e82 (Windows-31J)
    // 0x7345 (UTF-16BE)
    if (argCheck == 'éÇ') {
        return true;
    }
    // No.1675
    // ê‡ñæ:8e83
    // 0x8e83 (Windows-31J)
    // 0x7949 (UTF-16BE)
    if (argCheck == 'éÉ') {
        return true;
    }
    // No.1676
    // ê‡ñæ:8e84
    // 0x8e84 (Windows-31J)
    // 0x79c1 (UTF-16BE)
    if (argCheck == 'éÑ') {
        return true;
    }
    // No.1677
    // ê‡ñæ:8e85
    // 0x8e85 (Windows-31J)
    // 0x7cf8 (UTF-16BE)
    if (argCheck == 'éÖ') {
        return true;
    }
    // No.1678
    // ê‡ñæ:8e86
    // 0x8e86 (Windows-31J)
    // 0x7d19 (UTF-16BE)
    if (argCheck == 'éÜ') {
        return true;
    }
    // No.1679
    // ê‡ñæ:8e87
    // 0x8e87 (Windows-31J)
    // 0x7d2b (UTF-16BE)
    if (argCheck == 'éá') {
        return true;
    }
    // No.1680
    // ê‡ñæ:8e88
    // 0x8e88 (Windows-31J)
    // 0x80a2 (UTF-16BE)
    if (argCheck == 'éà') {
        return true;
    }
    // No.1681
    // ê‡ñæ:8e89
    // 0x8e89 (Windows-31J)
    // 0x8102 (UTF-16BE)
    if (argCheck == 'éâ') {
        return true;
    }
    // No.1682
    // ê‡ñæ:8e8a
    // 0x8e8a (Windows-31J)
    // 0x81f3 (UTF-16BE)
    if (argCheck == 'éä') {
        return true;
    }
    // No.1683
    // ê‡ñæ:8e8b
    // 0x8e8b (Windows-31J)
    // 0x8996 (UTF-16BE)
    if (argCheck == 'éã') {
        return true;
    }
    // No.1684
    // ê‡ñæ:8e8c
    // 0x8e8c (Windows-31J)
    // 0x8a5e (UTF-16BE)
    if (argCheck == 'éå') {
        return true;
    }
    // No.1685
    // ê‡ñæ:8e8d
    // 0x8e8d (Windows-31J)
    // 0x8a69 (UTF-16BE)
    if (argCheck == 'éç') {
        return true;
    }
    // No.1686
    // ê‡ñæ:8e8e
    // 0x8e8e (Windows-31J)
    // 0x8a66 (UTF-16BE)
    if (argCheck == 'éé') {
        return true;
    }
    // No.1687
    // ê‡ñæ:8e8f
    // 0x8e8f (Windows-31J)
    // 0x8a8c (UTF-16BE)
    if (argCheck == 'éè') {
        return true;
    }
    // No.1688
    // ê‡ñæ:8e90
    // 0x8e90 (Windows-31J)
    // 0x8aee (UTF-16BE)
    if (argCheck == 'éê') {
        return true;
    }
    // No.1689
    // ê‡ñæ:8e91
    // 0x8e91 (Windows-31J)
    // 0x8cc7 (UTF-16BE)
    if (argCheck == 'éë') {
        return true;
    }
    // No.1690
    // ê‡ñæ:8e92
    // 0x8e92 (Windows-31J)
    // 0x8cdc (UTF-16BE)
    if (argCheck == 'éí') {
        return true;
    }
    // No.1691
    // ê‡ñæ:8e93
    // 0x8e93 (Windows-31J)
    // 0x96cc (UTF-16BE)
    if (argCheck == 'éì') {
        return true;
    }
    // No.1692
    // ê‡ñæ:8e94
    // 0x8e94 (Windows-31J)
    // 0x98fc (UTF-16BE)
    if (argCheck == 'éî') {
        return true;
    }
    // No.1693
    // ê‡ñæ:8e95
    // 0x8e95 (Windows-31J)
    // 0x6b6f (UTF-16BE)
    if (argCheck == 'éï') {
        return true;
    }
    // No.1694
    // ê‡ñæ:8e96
    // 0x8e96 (Windows-31J)
    // 0x4e8b (UTF-16BE)
    if (argCheck == 'éñ') {
        return true;
    }
    // No.1695
    // ê‡ñæ:8e97
    // 0x8e97 (Windows-31J)
    // 0x4f3c (UTF-16BE)
    if (argCheck == 'éó') {
        return true;
    }
    // No.1696
    // ê‡ñæ:8e98
    // 0x8e98 (Windows-31J)
    // 0x4f8d (UTF-16BE)
    if (argCheck == 'éò') {
        return true;
    }
    // No.1697
    // ê‡ñæ:8e99
    // 0x8e99 (Windows-31J)
    // 0x5150 (UTF-16BE)
    if (argCheck == 'éô') {
        return true;
    }
    // No.1698
    // ê‡ñæ:8e9a
    // 0x8e9a (Windows-31J)
    // 0x5b57 (UTF-16BE)
    if (argCheck == 'éö') {
        return true;
    }
    // No.1699
    // ê‡ñæ:8e9b
    // 0x8e9b (Windows-31J)
    // 0x5bfa (UTF-16BE)
    if (argCheck == 'éõ') {
        return true;
    }
    // No.1700
    // ê‡ñæ:8e9c
    // 0x8e9c (Windows-31J)
    // 0x6148 (UTF-16BE)
    if (argCheck == 'éú') {
        return true;
    }
    // No.1701
    // ê‡ñæ:8e9d
    // 0x8e9d (Windows-31J)
    // 0x6301 (UTF-16BE)
    if (argCheck == 'éù') {
        return true;
    }
    // No.1702
    // ê‡ñæ:8e9e
    // 0x8e9e (Windows-31J)
    // 0x6642 (UTF-16BE)
    if (argCheck == 'éû') {
        return true;
    }
    // No.1703
    // ê‡ñæ:8e9f
    // 0x8e9f (Windows-31J)
    // 0x6b21 (UTF-16BE)
    if (argCheck == 'éü') {
        return true;
    }
    // No.1704
    // ê‡ñæ:8ea0
    // 0x8ea0 (Windows-31J)
    // 0x6ecb (UTF-16BE)
    if (argCheck == 'é†') {
        return true;
    }
    // No.1705
    // ê‡ñæ:8ea1
    // 0x8ea1 (Windows-31J)
    // 0x6cbb (UTF-16BE)
    if (argCheck == 'é°') {
        return true;
    }
    // No.1706
    // ê‡ñæ:8ea2
    // 0x8ea2 (Windows-31J)
    // 0x723e (UTF-16BE)
    if (argCheck == 'é¢') {
        return true;
    }
    // No.1707
    // ê‡ñæ:8ea3
    // 0x8ea3 (Windows-31J)
    // 0x74bd (UTF-16BE)
    if (argCheck == 'é£') {
        return true;
    }
    // No.1708
    // ê‡ñæ:8ea4
    // 0x8ea4 (Windows-31J)
    // 0x75d4 (UTF-16BE)
    if (argCheck == 'é§') {
        return true;
    }
    // No.1709
    // ê‡ñæ:8ea5
    // 0x8ea5 (Windows-31J)
    // 0x78c1 (UTF-16BE)
    if (argCheck == 'é•') {
        return true;
    }
    // No.1710
    // ê‡ñæ:8ea6
    // 0x8ea6 (Windows-31J)
    // 0x793a (UTF-16BE)
    if (argCheck == 'é¶') {
        return true;
    }
    // No.1711
    // ê‡ñæ:8ea7
    // 0x8ea7 (Windows-31J)
    // 0x800c (UTF-16BE)
    if (argCheck == 'éß') {
        return true;
    }
    // No.1712
    // ê‡ñæ:8ea8
    // 0x8ea8 (Windows-31J)
    // 0x8033 (UTF-16BE)
    if (argCheck == 'é®') {
        return true;
    }
    // No.1713
    // ê‡ñæ:8ea9
    // 0x8ea9 (Windows-31J)
    // 0x81ea (UTF-16BE)
    if (argCheck == 'é©') {
        return true;
    }
    // No.1714
    // ê‡ñæ:8eaa
    // 0x8eaa (Windows-31J)
    // 0x8494 (UTF-16BE)
    if (argCheck == 'é™') {
        return true;
    }
    // No.1715
    // ê‡ñæ:8eab
    // 0x8eab (Windows-31J)
    // 0x8f9e (UTF-16BE)
    if (argCheck == 'é´') {
        return true;
    }
    // No.1716
    // ê‡ñæ:8eac
    // 0x8eac (Windows-31J)
    // 0x6c50 (UTF-16BE)
    if (argCheck == 'é¨') {
        return true;
    }
    // No.1717
    // ê‡ñæ:8ead
    // 0x8ead (Windows-31J)
    // 0x9e7f (UTF-16BE)
    if (argCheck == 'é≠') {
        return true;
    }
    // No.1718
    // ê‡ñæ:8eae
    // 0x8eae (Windows-31J)
    // 0x5f0f (UTF-16BE)
    if (argCheck == 'éÆ') {
        return true;
    }
    // No.1719
    // ê‡ñæ:8eaf
    // 0x8eaf (Windows-31J)
    // 0x8b58 (UTF-16BE)
    if (argCheck == 'éØ') {
        return true;
    }
    // No.1720
    // ê‡ñæ:8eb0
    // 0x8eb0 (Windows-31J)
    // 0x9d2b (UTF-16BE)
    if (argCheck == 'é∞') {
        return true;
    }
    // No.1721
    // ê‡ñæ:8eb1
    // 0x8eb1 (Windows-31J)
    // 0x7afa (UTF-16BE)
    if (argCheck == 'é±') {
        return true;
    }
    // No.1722
    // ê‡ñæ:8eb2
    // 0x8eb2 (Windows-31J)
    // 0x8ef8 (UTF-16BE)
    if (argCheck == 'é≤') {
        return true;
    }
    // No.1723
    // ê‡ñæ:8eb3
    // 0x8eb3 (Windows-31J)
    // 0x5b8d (UTF-16BE)
    if (argCheck == 'é≥') {
        return true;
    }
    // No.1724
    // ê‡ñæ:8eb4
    // 0x8eb4 (Windows-31J)
    // 0x96eb (UTF-16BE)
    if (argCheck == 'é¥') {
        return true;
    }
    // No.1725
    // ê‡ñæ:8eb5
    // 0x8eb5 (Windows-31J)
    // 0x4e03 (UTF-16BE)
    if (argCheck == 'éµ') {
        return true;
    }
    // No.1726
    // ê‡ñæ:8eb6
    // 0x8eb6 (Windows-31J)
    // 0x53f1 (UTF-16BE)
    if (argCheck == 'é∂') {
        return true;
    }
    // No.1727
    // ê‡ñæ:8eb7
    // 0x8eb7 (Windows-31J)
    // 0x57f7 (UTF-16BE)
    if (argCheck == 'é∑') {
        return true;
    }
    // No.1728
    // ê‡ñæ:8eb8
    // 0x8eb8 (Windows-31J)
    // 0x5931 (UTF-16BE)
    if (argCheck == 'é∏') {
        return true;
    }
    // No.1729
    // ê‡ñæ:8eb9
    // 0x8eb9 (Windows-31J)
    // 0x5ac9 (UTF-16BE)
    if (argCheck == 'éπ') {
        return true;
    }
    // No.1730
    // ê‡ñæ:8eba
    // 0x8eba (Windows-31J)
    // 0x5ba4 (UTF-16BE)
    if (argCheck == 'é∫') {
        return true;
    }
    // No.1731
    // ê‡ñæ:8ebb
    // 0x8ebb (Windows-31J)
    // 0x6089 (UTF-16BE)
    if (argCheck == 'éª') {
        return true;
    }
    // No.1732
    // ê‡ñæ:8ebc
    // 0x8ebc (Windows-31J)
    // 0x6e7f (UTF-16BE)
    if (argCheck == 'éº') {
        return true;
    }
    // No.1733
    // ê‡ñæ:8ebd
    // 0x8ebd (Windows-31J)
    // 0x6f06 (UTF-16BE)
    if (argCheck == 'éΩ') {
        return true;
    }
    // No.1734
    // ê‡ñæ:8ebe
    // 0x8ebe (Windows-31J)
    // 0x75be (UTF-16BE)
    if (argCheck == 'éæ') {
        return true;
    }
    // No.1735
    // ê‡ñæ:8ebf
    // 0x8ebf (Windows-31J)
    // 0x8cea (UTF-16BE)
    if (argCheck == 'éø') {
        return true;
    }
    // No.1736
    // ê‡ñæ:8ec0
    // 0x8ec0 (Windows-31J)
    // 0x5b9f (UTF-16BE)
    if (argCheck == 'é¿') {
        return true;
    }
    // No.1737
    // ê‡ñæ:8ec1
    // 0x8ec1 (Windows-31J)
    // 0x8500 (UTF-16BE)
    if (argCheck == 'é¡') {
        return true;
    }
    // No.1738
    // ê‡ñæ:8ec2
    // 0x8ec2 (Windows-31J)
    // 0x7be0 (UTF-16BE)
    if (argCheck == 'é¬') {
        return true;
    }
    // No.1739
    // ê‡ñæ:8ec3
    // 0x8ec3 (Windows-31J)
    // 0x5072 (UTF-16BE)
    if (argCheck == 'é√') {
        return true;
    }
    // No.1740
    // ê‡ñæ:8ec4
    // 0x8ec4 (Windows-31J)
    // 0x67f4 (UTF-16BE)
    if (argCheck == 'éƒ') {
        return true;
    }
    // No.1741
    // ê‡ñæ:8ec5
    // 0x8ec5 (Windows-31J)
    // 0x829d (UTF-16BE)
    if (argCheck == 'é≈') {
        return true;
    }
    // No.1742
    // ê‡ñæ:8ec6
    // 0x8ec6 (Windows-31J)
    // 0x5c61 (UTF-16BE)
    if (argCheck == 'é∆') {
        return true;
    }
    // No.1743
    // ê‡ñæ:8ec7
    // 0x8ec7 (Windows-31J)
    // 0x854a (UTF-16BE)
    if (argCheck == 'é«') {
        return true;
    }
    // No.1744
    // ê‡ñæ:8ec8
    // 0x8ec8 (Windows-31J)
    // 0x7e1e (UTF-16BE)
    if (argCheck == 'é»') {
        return true;
    }
    // No.1745
    // ê‡ñæ:8ec9
    // 0x8ec9 (Windows-31J)
    // 0x820e (UTF-16BE)
    if (argCheck == 'é…') {
        return true;
    }
    // No.1746
    // ê‡ñæ:8eca
    // 0x8eca (Windows-31J)
    // 0x5199 (UTF-16BE)
    if (argCheck == 'é ') {
        return true;
    }
    // No.1747
    // ê‡ñæ:8ecb
    // 0x8ecb (Windows-31J)
    // 0x5c04 (UTF-16BE)
    if (argCheck == 'éÀ') {
        return true;
    }
    // No.1748
    // ê‡ñæ:8ecc
    // 0x8ecc (Windows-31J)
    // 0x6368 (UTF-16BE)
    if (argCheck == 'éÃ') {
        return true;
    }
    // No.1749
    // ê‡ñæ:8ecd
    // 0x8ecd (Windows-31J)
    // 0x8d66 (UTF-16BE)
    if (argCheck == 'éÕ') {
        return true;
    }
    // No.1750
    // ê‡ñæ:8ece
    // 0x8ece (Windows-31J)
    // 0x659c (UTF-16BE)
    if (argCheck == 'éŒ') {
        return true;
    }
    // No.1751
    // ê‡ñæ:8ecf
    // 0x8ecf (Windows-31J)
    // 0x716e (UTF-16BE)
    if (argCheck == 'éœ') {
        return true;
    }
    // No.1752
    // ê‡ñæ:8ed0
    // 0x8ed0 (Windows-31J)
    // 0x793e (UTF-16BE)
    if (argCheck == 'é–') {
        return true;
    }
    // No.1753
    // ê‡ñæ:8ed1
    // 0x8ed1 (Windows-31J)
    // 0x7d17 (UTF-16BE)
    if (argCheck == 'é—') {
        return true;
    }
    // No.1754
    // ê‡ñæ:8ed2
    // 0x8ed2 (Windows-31J)
    // 0x8005 (UTF-16BE)
    if (argCheck == 'é“') {
        return true;
    }
    // No.1755
    // ê‡ñæ:8ed3
    // 0x8ed3 (Windows-31J)
    // 0x8b1d (UTF-16BE)
    if (argCheck == 'é”') {
        return true;
    }
    // No.1756
    // ê‡ñæ:8ed4
    // 0x8ed4 (Windows-31J)
    // 0x8eca (UTF-16BE)
    if (argCheck == 'é‘') {
        return true;
    }
    // No.1757
    // ê‡ñæ:8ed5
    // 0x8ed5 (Windows-31J)
    // 0x906e (UTF-16BE)
    if (argCheck == 'é’') {
        return true;
    }
    // No.1758
    // ê‡ñæ:8ed6
    // 0x8ed6 (Windows-31J)
    // 0x86c7 (UTF-16BE)
    if (argCheck == 'é÷') {
        return true;
    }
    // No.1759
    // ê‡ñæ:8ed7
    // 0x8ed7 (Windows-31J)
    // 0x90aa (UTF-16BE)
    if (argCheck == 'é◊') {
        return true;
    }
    // No.1760
    // ê‡ñæ:8ed8
    // 0x8ed8 (Windows-31J)
    // 0x501f (UTF-16BE)
    if (argCheck == 'éÿ') {
        return true;
    }
    // No.1761
    // ê‡ñæ:8ed9
    // 0x8ed9 (Windows-31J)
    // 0x52fa (UTF-16BE)
    if (argCheck == 'éŸ') {
        return true;
    }
    // No.1762
    // ê‡ñæ:8eda
    // 0x8eda (Windows-31J)
    // 0x5c3a (UTF-16BE)
    if (argCheck == 'é⁄') {
        return true;
    }
    // No.1763
    // ê‡ñæ:8edb
    // 0x8edb (Windows-31J)
    // 0x6753 (UTF-16BE)
    if (argCheck == 'é€') {
        return true;
    }
    // No.1764
    // ê‡ñæ:8edc
    // 0x8edc (Windows-31J)
    // 0x707c (UTF-16BE)
    if (argCheck == 'é‹') {
        return true;
    }
    // No.1765
    // ê‡ñæ:8edd
    // 0x8edd (Windows-31J)
    // 0x7235 (UTF-16BE)
    if (argCheck == 'é›') {
        return true;
    }
    // No.1766
    // ê‡ñæ:8ede
    // 0x8ede (Windows-31J)
    // 0x914c (UTF-16BE)
    if (argCheck == 'éﬁ') {
        return true;
    }
    // No.1767
    // ê‡ñæ:8edf
    // 0x8edf (Windows-31J)
    // 0x91c8 (UTF-16BE)
    if (argCheck == 'éﬂ') {
        return true;
    }
    // No.1768
    // ê‡ñæ:8ee0
    // 0x8ee0 (Windows-31J)
    // 0x932b (UTF-16BE)
    if (argCheck == 'é‡') {
        return true;
    }
    // No.1769
    // ê‡ñæ:8ee1
    // 0x8ee1 (Windows-31J)
    // 0x82e5 (UTF-16BE)
    if (argCheck == 'é·') {
        return true;
    }
    // No.1770
    // ê‡ñæ:8ee2
    // 0x8ee2 (Windows-31J)
    // 0x5bc2 (UTF-16BE)
    if (argCheck == 'é‚') {
        return true;
    }
    // No.1771
    // ê‡ñæ:8ee3
    // 0x8ee3 (Windows-31J)
    // 0x5f31 (UTF-16BE)
    if (argCheck == 'é„') {
        return true;
    }
    // No.1772
    // ê‡ñæ:8ee4
    // 0x8ee4 (Windows-31J)
    // 0x60f9 (UTF-16BE)
    if (argCheck == 'é‰') {
        return true;
    }
    // No.1773
    // ê‡ñæ:8ee5
    // 0x8ee5 (Windows-31J)
    // 0x4e3b (UTF-16BE)
    if (argCheck == 'éÂ') {
        return true;
    }
    // No.1774
    // ê‡ñæ:8ee6
    // 0x8ee6 (Windows-31J)
    // 0x53d6 (UTF-16BE)
    if (argCheck == 'éÊ') {
        return true;
    }
    // No.1775
    // ê‡ñæ:8ee7
    // 0x8ee7 (Windows-31J)
    // 0x5b88 (UTF-16BE)
    if (argCheck == 'éÁ') {
        return true;
    }
    // No.1776
    // ê‡ñæ:8ee8
    // 0x8ee8 (Windows-31J)
    // 0x624b (UTF-16BE)
    if (argCheck == 'éË') {
        return true;
    }
    // No.1777
    // ê‡ñæ:8ee9
    // 0x8ee9 (Windows-31J)
    // 0x6731 (UTF-16BE)
    if (argCheck == 'éÈ') {
        return true;
    }
    // No.1778
    // ê‡ñæ:8eea
    // 0x8eea (Windows-31J)
    // 0x6b8a (UTF-16BE)
    if (argCheck == 'éÍ') {
        return true;
    }
    // No.1779
    // ê‡ñæ:8eeb
    // 0x8eeb (Windows-31J)
    // 0x72e9 (UTF-16BE)
    if (argCheck == 'éÎ') {
        return true;
    }
    // No.1780
    // ê‡ñæ:8eec
    // 0x8eec (Windows-31J)
    // 0x73e0 (UTF-16BE)
    if (argCheck == 'éÏ') {
        return true;
    }
    // No.1781
    // ê‡ñæ:8eed
    // 0x8eed (Windows-31J)
    // 0x7a2e (UTF-16BE)
    if (argCheck == 'éÌ') {
        return true;
    }
    // No.1782
    // ê‡ñæ:8eee
    // 0x8eee (Windows-31J)
    // 0x816b (UTF-16BE)
    if (argCheck == 'éÓ') {
        return true;
    }
    // No.1783
    // ê‡ñæ:8eef
    // 0x8eef (Windows-31J)
    // 0x8da3 (UTF-16BE)
    if (argCheck == 'éÔ') {
        return true;
    }
    // No.1784
    // ê‡ñæ:8ef0
    // 0x8ef0 (Windows-31J)
    // 0x9152 (UTF-16BE)
    if (argCheck == 'é') {
        return true;
    }
    // No.1785
    // ê‡ñæ:8ef1
    // 0x8ef1 (Windows-31J)
    // 0x9996 (UTF-16BE)
    if (argCheck == 'éÒ') {
        return true;
    }
    // No.1786
    // ê‡ñæ:8ef2
    // 0x8ef2 (Windows-31J)
    // 0x5112 (UTF-16BE)
    if (argCheck == 'éÚ') {
        return true;
    }
    // No.1787
    // ê‡ñæ:8ef3
    // 0x8ef3 (Windows-31J)
    // 0x53d7 (UTF-16BE)
    if (argCheck == 'éÛ') {
        return true;
    }
    // No.1788
    // ê‡ñæ:8ef4
    // 0x8ef4 (Windows-31J)
    // 0x546a (UTF-16BE)
    if (argCheck == 'éÙ') {
        return true;
    }
    // No.1789
    // ê‡ñæ:8ef5
    // 0x8ef5 (Windows-31J)
    // 0x5bff (UTF-16BE)
    if (argCheck == 'éı') {
        return true;
    }
    // No.1790
    // ê‡ñæ:8ef6
    // 0x8ef6 (Windows-31J)
    // 0x6388 (UTF-16BE)
    if (argCheck == 'éˆ') {
        return true;
    }
    // No.1791
    // ê‡ñæ:8ef7
    // 0x8ef7 (Windows-31J)
    // 0x6a39 (UTF-16BE)
    if (argCheck == 'é˜') {
        return true;
    }
    // No.1792
    // ê‡ñæ:8ef8
    // 0x8ef8 (Windows-31J)
    // 0x7dac (UTF-16BE)
    if (argCheck == 'é¯') {
        return true;
    }
    // No.1793
    // ê‡ñæ:8ef9
    // 0x8ef9 (Windows-31J)
    // 0x9700 (UTF-16BE)
    if (argCheck == 'é˘') {
        return true;
    }
    // No.1794
    // ê‡ñæ:8efa
    // 0x8efa (Windows-31J)
    // 0x56da (UTF-16BE)
    if (argCheck == 'é˙') {
        return true;
    }
    // No.1795
    // ê‡ñæ:8efb
    // 0x8efb (Windows-31J)
    // 0x53ce (UTF-16BE)
    if (argCheck == 'é˚') {
        return true;
    }
    // No.1796
    // ê‡ñæ:8efc
    // 0x8efc (Windows-31J)
    // 0x5468 (UTF-16BE)
    if (argCheck == 'é¸') {
        return true;
    }
    // No.1797
    // ê‡ñæ:8f40
    // 0x8f40 (Windows-31J)
    // 0x5b97 (UTF-16BE)
    if (argCheck == 'è@') {
        return true;
    }
    // No.1798
    // ê‡ñæ:8f41
    // 0x8f41 (Windows-31J)
    // 0x5c31 (UTF-16BE)
    if (argCheck == 'èA') {
        return true;
    }
    // No.1799
    // ê‡ñæ:8f42
    // 0x8f42 (Windows-31J)
    // 0x5dde (UTF-16BE)
    if (argCheck == 'èB') {
        return true;
    }
    // No.1800
    // ê‡ñæ:8f43
    // 0x8f43 (Windows-31J)
    // 0x4fee (UTF-16BE)
    if (argCheck == 'èC') {
        return true;
    }
    // No.1801
    // ê‡ñæ:8f44
    // 0x8f44 (Windows-31J)
    // 0x6101 (UTF-16BE)
    if (argCheck == 'èD') {
        return true;
    }
    // No.1802
    // ê‡ñæ:8f45
    // 0x8f45 (Windows-31J)
    // 0x62fe (UTF-16BE)
    if (argCheck == 'èE') {
        return true;
    }
    // No.1803
    // ê‡ñæ:8f46
    // 0x8f46 (Windows-31J)
    // 0x6d32 (UTF-16BE)
    if (argCheck == 'èF') {
        return true;
    }
    // No.1804
    // ê‡ñæ:8f47
    // 0x8f47 (Windows-31J)
    // 0x79c0 (UTF-16BE)
    if (argCheck == 'èG') {
        return true;
    }
    // No.1805
    // ê‡ñæ:8f48
    // 0x8f48 (Windows-31J)
    // 0x79cb (UTF-16BE)
    if (argCheck == 'èH') {
        return true;
    }
    // No.1806
    // ê‡ñæ:8f49
    // 0x8f49 (Windows-31J)
    // 0x7d42 (UTF-16BE)
    if (argCheck == 'èI') {
        return true;
    }
    // No.1807
    // ê‡ñæ:8f4a
    // 0x8f4a (Windows-31J)
    // 0x7e4d (UTF-16BE)
    if (argCheck == 'èJ') {
        return true;
    }
    // No.1808
    // ê‡ñæ:8f4b
    // 0x8f4b (Windows-31J)
    // 0x7fd2 (UTF-16BE)
    if (argCheck == 'èK') {
        return true;
    }
    // No.1809
    // ê‡ñæ:8f4c
    // 0x8f4c (Windows-31J)
    // 0x81ed (UTF-16BE)
    if (argCheck == 'èL') {
        return true;
    }
    // No.1810
    // ê‡ñæ:8f4d
    // 0x8f4d (Windows-31J)
    // 0x821f (UTF-16BE)
    if (argCheck == 'èM') {
        return true;
    }
    // No.1811
    // ê‡ñæ:8f4e
    // 0x8f4e (Windows-31J)
    // 0x8490 (UTF-16BE)
    if (argCheck == 'èN') {
        return true;
    }
    // No.1812
    // ê‡ñæ:8f4f
    // 0x8f4f (Windows-31J)
    // 0x8846 (UTF-16BE)
    if (argCheck == 'èO') {
        return true;
    }
    // No.1813
    // ê‡ñæ:8f50
    // 0x8f50 (Windows-31J)
    // 0x8972 (UTF-16BE)
    if (argCheck == 'èP') {
        return true;
    }
    // No.1814
    // ê‡ñæ:8f51
    // 0x8f51 (Windows-31J)
    // 0x8b90 (UTF-16BE)
    if (argCheck == 'èQ') {
        return true;
    }
    // No.1815
    // ê‡ñæ:8f52
    // 0x8f52 (Windows-31J)
    // 0x8e74 (UTF-16BE)
    if (argCheck == 'èR') {
        return true;
    }
    // No.1816
    // ê‡ñæ:8f53
    // 0x8f53 (Windows-31J)
    // 0x8f2f (UTF-16BE)
    if (argCheck == 'èS') {
        return true;
    }
    // No.1817
    // ê‡ñæ:8f54
    // 0x8f54 (Windows-31J)
    // 0x9031 (UTF-16BE)
    if (argCheck == 'èT') {
        return true;
    }
    // No.1818
    // ê‡ñæ:8f55
    // 0x8f55 (Windows-31J)
    // 0x914b (UTF-16BE)
    if (argCheck == 'èU') {
        return true;
    }
    // No.1819
    // ê‡ñæ:8f56
    // 0x8f56 (Windows-31J)
    // 0x916c (UTF-16BE)
    if (argCheck == 'èV') {
        return true;
    }
    // No.1820
    // ê‡ñæ:8f57
    // 0x8f57 (Windows-31J)
    // 0x96c6 (UTF-16BE)
    if (argCheck == 'èW') {
        return true;
    }
    // No.1821
    // ê‡ñæ:8f58
    // 0x8f58 (Windows-31J)
    // 0x919c (UTF-16BE)
    if (argCheck == 'èX') {
        return true;
    }
    // No.1822
    // ê‡ñæ:8f59
    // 0x8f59 (Windows-31J)
    // 0x4ec0 (UTF-16BE)
    if (argCheck == 'èY') {
        return true;
    }
    // No.1823
    // ê‡ñæ:8f5a
    // 0x8f5a (Windows-31J)
    // 0x4f4f (UTF-16BE)
    if (argCheck == 'èZ') {
        return true;
    }
    // No.1824
    // ê‡ñæ:8f5b
    // 0x8f5b (Windows-31J)
    // 0x5145 (UTF-16BE)
    if (argCheck == 'è[') {
        return true;
    }
    // No.1825
    // ê‡ñæ:8f5c
    // 0x8f5c (Windows-31J)
    // 0x5341 (UTF-16BE)
    if (argCheck == 'è\') {
        return true;
    }
    // No.1826
    // ê‡ñæ:8f5d
    // 0x8f5d (Windows-31J)
    // 0x5f93 (UTF-16BE)
    if (argCheck == 'è]') {
        return true;
    }
    // No.1827
    // ê‡ñæ:8f5e
    // 0x8f5e (Windows-31J)
    // 0x620e (UTF-16BE)
    if (argCheck == 'è^') {
        return true;
    }
    // No.1828
    // ê‡ñæ:8f5f
    // 0x8f5f (Windows-31J)
    // 0x67d4 (UTF-16BE)
    if (argCheck == 'è_') {
        return true;
    }
    // No.1829
    // ê‡ñæ:8f60
    // 0x8f60 (Windows-31J)
    // 0x6c41 (UTF-16BE)
    if (argCheck == 'è`') {
        return true;
    }
    // No.1830
    // ê‡ñæ:8f61
    // 0x8f61 (Windows-31J)
    // 0x6e0b (UTF-16BE)
    if (argCheck == 'èa') {
        return true;
    }
    // No.1831
    // ê‡ñæ:8f62
    // 0x8f62 (Windows-31J)
    // 0x7363 (UTF-16BE)
    if (argCheck == 'èb') {
        return true;
    }
    // No.1832
    // ê‡ñæ:8f63
    // 0x8f63 (Windows-31J)
    // 0x7e26 (UTF-16BE)
    if (argCheck == 'èc') {
        return true;
    }
    // No.1833
    // ê‡ñæ:8f64
    // 0x8f64 (Windows-31J)
    // 0x91cd (UTF-16BE)
    if (argCheck == 'èd') {
        return true;
    }
    // No.1834
    // ê‡ñæ:8f65
    // 0x8f65 (Windows-31J)
    // 0x9283 (UTF-16BE)
    if (argCheck == 'èe') {
        return true;
    }
    // No.1835
    // ê‡ñæ:8f66
    // 0x8f66 (Windows-31J)
    // 0x53d4 (UTF-16BE)
    if (argCheck == 'èf') {
        return true;
    }
    // No.1836
    // ê‡ñæ:8f67
    // 0x8f67 (Windows-31J)
    // 0x5919 (UTF-16BE)
    if (argCheck == 'èg') {
        return true;
    }
    // No.1837
    // ê‡ñæ:8f68
    // 0x8f68 (Windows-31J)
    // 0x5bbf (UTF-16BE)
    if (argCheck == 'èh') {
        return true;
    }
    // No.1838
    // ê‡ñæ:8f69
    // 0x8f69 (Windows-31J)
    // 0x6dd1 (UTF-16BE)
    if (argCheck == 'èi') {
        return true;
    }
    // No.1839
    // ê‡ñæ:8f6a
    // 0x8f6a (Windows-31J)
    // 0x795d (UTF-16BE)
    if (argCheck == 'èj') {
        return true;
    }
    // No.1840
    // ê‡ñæ:8f6b
    // 0x8f6b (Windows-31J)
    // 0x7e2e (UTF-16BE)
    if (argCheck == 'èk') {
        return true;
    }
    // No.1841
    // ê‡ñæ:8f6c
    // 0x8f6c (Windows-31J)
    // 0x7c9b (UTF-16BE)
    if (argCheck == 'èl') {
        return true;
    }
    // No.1842
    // ê‡ñæ:8f6d
    // 0x8f6d (Windows-31J)
    // 0x587e (UTF-16BE)
    if (argCheck == 'èm') {
        return true;
    }
    // No.1843
    // ê‡ñæ:8f6e
    // 0x8f6e (Windows-31J)
    // 0x719f (UTF-16BE)
    if (argCheck == 'èn') {
        return true;
    }
    // No.1844
    // ê‡ñæ:8f6f
    // 0x8f6f (Windows-31J)
    // 0x51fa (UTF-16BE)
    if (argCheck == 'èo') {
        return true;
    }
    // No.1845
    // ê‡ñæ:8f70
    // 0x8f70 (Windows-31J)
    // 0x8853 (UTF-16BE)
    if (argCheck == 'èp') {
        return true;
    }
    // No.1846
    // ê‡ñæ:8f71
    // 0x8f71 (Windows-31J)
    // 0x8ff0 (UTF-16BE)
    if (argCheck == 'èq') {
        return true;
    }
    // No.1847
    // ê‡ñæ:8f72
    // 0x8f72 (Windows-31J)
    // 0x4fca (UTF-16BE)
    if (argCheck == 'èr') {
        return true;
    }
    // No.1848
    // ê‡ñæ:8f73
    // 0x8f73 (Windows-31J)
    // 0x5cfb (UTF-16BE)
    if (argCheck == 'ès') {
        return true;
    }
    // No.1849
    // ê‡ñæ:8f74
    // 0x8f74 (Windows-31J)
    // 0x6625 (UTF-16BE)
    if (argCheck == 'èt') {
        return true;
    }
    // No.1850
    // ê‡ñæ:8f75
    // 0x8f75 (Windows-31J)
    // 0x77ac (UTF-16BE)
    if (argCheck == 'èu') {
        return true;
    }
    // No.1851
    // ê‡ñæ:8f76
    // 0x8f76 (Windows-31J)
    // 0x7ae3 (UTF-16BE)
    if (argCheck == 'èv') {
        return true;
    }
    // No.1852
    // ê‡ñæ:8f77
    // 0x8f77 (Windows-31J)
    // 0x821c (UTF-16BE)
    if (argCheck == 'èw') {
        return true;
    }
    // No.1853
    // ê‡ñæ:8f78
    // 0x8f78 (Windows-31J)
    // 0x99ff (UTF-16BE)
    if (argCheck == 'èx') {
        return true;
    }
    // No.1854
    // ê‡ñæ:8f79
    // 0x8f79 (Windows-31J)
    // 0x51c6 (UTF-16BE)
    if (argCheck == 'èy') {
        return true;
    }
    // No.1855
    // ê‡ñæ:8f7a
    // 0x8f7a (Windows-31J)
    // 0x5faa (UTF-16BE)
    if (argCheck == 'èz') {
        return true;
    }
    // No.1856
    // ê‡ñæ:8f7b
    // 0x8f7b (Windows-31J)
    // 0x65ec (UTF-16BE)
    if (argCheck == 'è{') {
        return true;
    }
    // No.1857
    // ê‡ñæ:8f7c
    // 0x8f7c (Windows-31J)
    // 0x696f (UTF-16BE)
    if (argCheck == 'è|') {
        return true;
    }
    // No.1858
    // ê‡ñæ:8f7d
    // 0x8f7d (Windows-31J)
    // 0x6b89 (UTF-16BE)
    if (argCheck == 'è}') {
        return true;
    }
    // No.1859
    // ê‡ñæ:8f7e
    // 0x8f7e (Windows-31J)
    // 0x6df3 (UTF-16BE)
    if (argCheck == 'è~') {
        return true;
    }
    // No.1860
    // ê‡ñæ:8f80
    // 0x8f80 (Windows-31J)
    // 0x6e96 (UTF-16BE)
    if (argCheck == 'èÄ') {
        return true;
    }
    // No.1861
    // ê‡ñæ:8f81
    // 0x8f81 (Windows-31J)
    // 0x6f64 (UTF-16BE)
    if (argCheck == 'èÅ') {
        return true;
    }
    // No.1862
    // ê‡ñæ:8f82
    // 0x8f82 (Windows-31J)
    // 0x76fe (UTF-16BE)
    if (argCheck == 'èÇ') {
        return true;
    }
    // No.1863
    // ê‡ñæ:8f83
    // 0x8f83 (Windows-31J)
    // 0x7d14 (UTF-16BE)
    if (argCheck == 'èÉ') {
        return true;
    }
    // No.1864
    // ê‡ñæ:8f84
    // 0x8f84 (Windows-31J)
    // 0x5de1 (UTF-16BE)
    if (argCheck == 'èÑ') {
        return true;
    }
    // No.1865
    // ê‡ñæ:8f85
    // 0x8f85 (Windows-31J)
    // 0x9075 (UTF-16BE)
    if (argCheck == 'èÖ') {
        return true;
    }
    // No.1866
    // ê‡ñæ:8f86
    // 0x8f86 (Windows-31J)
    // 0x9187 (UTF-16BE)
    if (argCheck == 'èÜ') {
        return true;
    }
    // No.1867
    // ê‡ñæ:8f87
    // 0x8f87 (Windows-31J)
    // 0x9806 (UTF-16BE)
    if (argCheck == 'èá') {
        return true;
    }
    // No.1868
    // ê‡ñæ:8f88
    // 0x8f88 (Windows-31J)
    // 0x51e6 (UTF-16BE)
    if (argCheck == 'èà') {
        return true;
    }
    // No.1869
    // ê‡ñæ:8f89
    // 0x8f89 (Windows-31J)
    // 0x521d (UTF-16BE)
    if (argCheck == 'èâ') {
        return true;
    }
    // No.1870
    // ê‡ñæ:8f8a
    // 0x8f8a (Windows-31J)
    // 0x6240 (UTF-16BE)
    if (argCheck == 'èä') {
        return true;
    }
    // No.1871
    // ê‡ñæ:8f8b
    // 0x8f8b (Windows-31J)
    // 0x6691 (UTF-16BE)
    if (argCheck == 'èã') {
        return true;
    }
    // No.1872
    // ê‡ñæ:8f8c
    // 0x8f8c (Windows-31J)
    // 0x66d9 (UTF-16BE)
    if (argCheck == 'èå') {
        return true;
    }
    // No.1873
    // ê‡ñæ:8f8d
    // 0x8f8d (Windows-31J)
    // 0x6e1a (UTF-16BE)
    if (argCheck == 'èç') {
        return true;
    }
    // No.1874
    // ê‡ñæ:8f8e
    // 0x8f8e (Windows-31J)
    // 0x5eb6 (UTF-16BE)
    if (argCheck == 'èé') {
        return true;
    }
    // No.1875
    // ê‡ñæ:8f8f
    // 0x8f8f (Windows-31J)
    // 0x7dd2 (UTF-16BE)
    if (argCheck == 'èè') {
        return true;
    }
    // No.1876
    // ê‡ñæ:8f90
    // 0x8f90 (Windows-31J)
    // 0x7f72 (UTF-16BE)
    if (argCheck == 'èê') {
        return true;
    }
    // No.1877
    // ê‡ñæ:8f91
    // 0x8f91 (Windows-31J)
    // 0x66f8 (UTF-16BE)
    if (argCheck == 'èë') {
        return true;
    }
    // No.1878
    // ê‡ñæ:8f92
    // 0x8f92 (Windows-31J)
    // 0x85af (UTF-16BE)
    if (argCheck == 'èí') {
        return true;
    }
    // No.1879
    // ê‡ñæ:8f93
    // 0x8f93 (Windows-31J)
    // 0x85f7 (UTF-16BE)
    if (argCheck == 'èì') {
        return true;
    }
    // No.1880
    // ê‡ñæ:8f94
    // 0x8f94 (Windows-31J)
    // 0x8af8 (UTF-16BE)
    if (argCheck == 'èî') {
        return true;
    }
    // No.1881
    // ê‡ñæ:8f95
    // 0x8f95 (Windows-31J)
    // 0x52a9 (UTF-16BE)
    if (argCheck == 'èï') {
        return true;
    }
    // No.1882
    // ê‡ñæ:8f96
    // 0x8f96 (Windows-31J)
    // 0x53d9 (UTF-16BE)
    if (argCheck == 'èñ') {
        return true;
    }
    // No.1883
    // ê‡ñæ:8f97
    // 0x8f97 (Windows-31J)
    // 0x5973 (UTF-16BE)
    if (argCheck == 'èó') {
        return true;
    }
    // No.1884
    // ê‡ñæ:8f98
    // 0x8f98 (Windows-31J)
    // 0x5e8f (UTF-16BE)
    if (argCheck == 'èò') {
        return true;
    }
    // No.1885
    // ê‡ñæ:8f99
    // 0x8f99 (Windows-31J)
    // 0x5f90 (UTF-16BE)
    if (argCheck == 'èô') {
        return true;
    }
    // No.1886
    // ê‡ñæ:8f9a
    // 0x8f9a (Windows-31J)
    // 0x6055 (UTF-16BE)
    if (argCheck == 'èö') {
        return true;
    }
    // No.1887
    // ê‡ñæ:8f9b
    // 0x8f9b (Windows-31J)
    // 0x92e4 (UTF-16BE)
    if (argCheck == 'èõ') {
        return true;
    }
    // No.1888
    // ê‡ñæ:8f9c
    // 0x8f9c (Windows-31J)
    // 0x9664 (UTF-16BE)
    if (argCheck == 'èú') {
        return true;
    }
    // No.1889
    // ê‡ñæ:8f9d
    // 0x8f9d (Windows-31J)
    // 0x50b7 (UTF-16BE)
    if (argCheck == 'èù') {
        return true;
    }
    // No.1890
    // ê‡ñæ:8f9e
    // 0x8f9e (Windows-31J)
    // 0x511f (UTF-16BE)
    if (argCheck == 'èû') {
        return true;
    }
    // No.1891
    // ê‡ñæ:8f9f
    // 0x8f9f (Windows-31J)
    // 0x52dd (UTF-16BE)
    if (argCheck == 'èü') {
        return true;
    }
    // No.1892
    // ê‡ñæ:8fa0
    // 0x8fa0 (Windows-31J)
    // 0x5320 (UTF-16BE)
    if (argCheck == 'è†') {
        return true;
    }
    // No.1893
    // ê‡ñæ:8fa1
    // 0x8fa1 (Windows-31J)
    // 0x5347 (UTF-16BE)
    if (argCheck == 'è°') {
        return true;
    }
    // No.1894
    // ê‡ñæ:8fa2
    // 0x8fa2 (Windows-31J)
    // 0x53ec (UTF-16BE)
    if (argCheck == 'è¢') {
        return true;
    }
    // No.1895
    // ê‡ñæ:8fa3
    // 0x8fa3 (Windows-31J)
    // 0x54e8 (UTF-16BE)
    if (argCheck == 'è£') {
        return true;
    }
    // No.1896
    // ê‡ñæ:8fa4
    // 0x8fa4 (Windows-31J)
    // 0x5546 (UTF-16BE)
    if (argCheck == 'è§') {
        return true;
    }
    // No.1897
    // ê‡ñæ:8fa5
    // 0x8fa5 (Windows-31J)
    // 0x5531 (UTF-16BE)
    if (argCheck == 'è•') {
        return true;
    }
    // No.1898
    // ê‡ñæ:8fa6
    // 0x8fa6 (Windows-31J)
    // 0x5617 (UTF-16BE)
    if (argCheck == 'è¶') {
        return true;
    }
    // No.1899
    // ê‡ñæ:8fa7
    // 0x8fa7 (Windows-31J)
    // 0x5968 (UTF-16BE)
    if (argCheck == 'èß') {
        return true;
    }
    // No.1900
    // ê‡ñæ:8fa8
    // 0x8fa8 (Windows-31J)
    // 0x59be (UTF-16BE)
    if (argCheck == 'è®') {
        return true;
    }
    // No.1901
    // ê‡ñæ:8fa9
    // 0x8fa9 (Windows-31J)
    // 0x5a3c (UTF-16BE)
    if (argCheck == 'è©') {
        return true;
    }
    // No.1902
    // ê‡ñæ:8faa
    // 0x8faa (Windows-31J)
    // 0x5bb5 (UTF-16BE)
    if (argCheck == 'è™') {
        return true;
    }
    // No.1903
    // ê‡ñæ:8fab
    // 0x8fab (Windows-31J)
    // 0x5c06 (UTF-16BE)
    if (argCheck == 'è´') {
        return true;
    }
    // No.1904
    // ê‡ñæ:8fac
    // 0x8fac (Windows-31J)
    // 0x5c0f (UTF-16BE)
    if (argCheck == 'è¨') {
        return true;
    }
    // No.1905
    // ê‡ñæ:8fad
    // 0x8fad (Windows-31J)
    // 0x5c11 (UTF-16BE)
    if (argCheck == 'è≠') {
        return true;
    }
    // No.1906
    // ê‡ñæ:8fae
    // 0x8fae (Windows-31J)
    // 0x5c1a (UTF-16BE)
    if (argCheck == 'èÆ') {
        return true;
    }
    // No.1907
    // ê‡ñæ:8faf
    // 0x8faf (Windows-31J)
    // 0x5e84 (UTF-16BE)
    if (argCheck == 'èØ') {
        return true;
    }
    // No.1908
    // ê‡ñæ:8fb0
    // 0x8fb0 (Windows-31J)
    // 0x5e8a (UTF-16BE)
    if (argCheck == 'è∞') {
        return true;
    }
    // No.1909
    // ê‡ñæ:8fb1
    // 0x8fb1 (Windows-31J)
    // 0x5ee0 (UTF-16BE)
    if (argCheck == 'è±') {
        return true;
    }
    // No.1910
    // ê‡ñæ:8fb2
    // 0x8fb2 (Windows-31J)
    // 0x5f70 (UTF-16BE)
    if (argCheck == 'è≤') {
        return true;
    }
    // No.1911
    // ê‡ñæ:8fb3
    // 0x8fb3 (Windows-31J)
    // 0x627f (UTF-16BE)
    if (argCheck == 'è≥') {
        return true;
    }
    // No.1912
    // ê‡ñæ:8fb4
    // 0x8fb4 (Windows-31J)
    // 0x6284 (UTF-16BE)
    if (argCheck == 'è¥') {
        return true;
    }
    // No.1913
    // ê‡ñæ:8fb5
    // 0x8fb5 (Windows-31J)
    // 0x62db (UTF-16BE)
    if (argCheck == 'èµ') {
        return true;
    }
    // No.1914
    // ê‡ñæ:8fb6
    // 0x8fb6 (Windows-31J)
    // 0x638c (UTF-16BE)
    if (argCheck == 'è∂') {
        return true;
    }
    // No.1915
    // ê‡ñæ:8fb7
    // 0x8fb7 (Windows-31J)
    // 0x6377 (UTF-16BE)
    if (argCheck == 'è∑') {
        return true;
    }
    // No.1916
    // ê‡ñæ:8fb8
    // 0x8fb8 (Windows-31J)
    // 0x6607 (UTF-16BE)
    if (argCheck == 'è∏') {
        return true;
    }
    // No.1917
    // ê‡ñæ:8fb9
    // 0x8fb9 (Windows-31J)
    // 0x660c (UTF-16BE)
    if (argCheck == 'èπ') {
        return true;
    }
    // No.1918
    // ê‡ñæ:8fba
    // 0x8fba (Windows-31J)
    // 0x662d (UTF-16BE)
    if (argCheck == 'è∫') {
        return true;
    }
    // No.1919
    // ê‡ñæ:8fbb
    // 0x8fbb (Windows-31J)
    // 0x6676 (UTF-16BE)
    if (argCheck == 'èª') {
        return true;
    }
    // No.1920
    // ê‡ñæ:8fbc
    // 0x8fbc (Windows-31J)
    // 0x677e (UTF-16BE)
    if (argCheck == 'èº') {
        return true;
    }
    // No.1921
    // ê‡ñæ:8fbd
    // 0x8fbd (Windows-31J)
    // 0x68a2 (UTF-16BE)
    if (argCheck == 'èΩ') {
        return true;
    }
    // No.1922
    // ê‡ñæ:8fbe
    // 0x8fbe (Windows-31J)
    // 0x6a1f (UTF-16BE)
    if (argCheck == 'èæ') {
        return true;
    }
    // No.1923
    // ê‡ñæ:8fbf
    // 0x8fbf (Windows-31J)
    // 0x6a35 (UTF-16BE)
    if (argCheck == 'èø') {
        return true;
    }
    // No.1924
    // ê‡ñæ:8fc0
    // 0x8fc0 (Windows-31J)
    // 0x6cbc (UTF-16BE)
    if (argCheck == 'è¿') {
        return true;
    }
    // No.1925
    // ê‡ñæ:8fc1
    // 0x8fc1 (Windows-31J)
    // 0x6d88 (UTF-16BE)
    if (argCheck == 'è¡') {
        return true;
    }
    // No.1926
    // ê‡ñæ:8fc2
    // 0x8fc2 (Windows-31J)
    // 0x6e09 (UTF-16BE)
    if (argCheck == 'è¬') {
        return true;
    }
    // No.1927
    // ê‡ñæ:8fc3
    // 0x8fc3 (Windows-31J)
    // 0x6e58 (UTF-16BE)
    if (argCheck == 'è√') {
        return true;
    }
    // No.1928
    // ê‡ñæ:8fc4
    // 0x8fc4 (Windows-31J)
    // 0x713c (UTF-16BE)
    if (argCheck == 'èƒ') {
        return true;
    }
    // No.1929
    // ê‡ñæ:8fc5
    // 0x8fc5 (Windows-31J)
    // 0x7126 (UTF-16BE)
    if (argCheck == 'è≈') {
        return true;
    }
    // No.1930
    // ê‡ñæ:8fc6
    // 0x8fc6 (Windows-31J)
    // 0x7167 (UTF-16BE)
    if (argCheck == 'è∆') {
        return true;
    }
    // No.1931
    // ê‡ñæ:8fc7
    // 0x8fc7 (Windows-31J)
    // 0x75c7 (UTF-16BE)
    if (argCheck == 'è«') {
        return true;
    }
    // No.1932
    // ê‡ñæ:8fc8
    // 0x8fc8 (Windows-31J)
    // 0x7701 (UTF-16BE)
    if (argCheck == 'è»') {
        return true;
    }
    // No.1933
    // ê‡ñæ:8fc9
    // 0x8fc9 (Windows-31J)
    // 0x785d (UTF-16BE)
    if (argCheck == 'è…') {
        return true;
    }
    // No.1934
    // ê‡ñæ:8fca
    // 0x8fca (Windows-31J)
    // 0x7901 (UTF-16BE)
    if (argCheck == 'è ') {
        return true;
    }
    // No.1935
    // ê‡ñæ:8fcb
    // 0x8fcb (Windows-31J)
    // 0x7965 (UTF-16BE)
    if (argCheck == 'èÀ') {
        return true;
    }
    // No.1936
    // ê‡ñæ:8fcc
    // 0x8fcc (Windows-31J)
    // 0x79f0 (UTF-16BE)
    if (argCheck == 'èÃ') {
        return true;
    }
    // No.1937
    // ê‡ñæ:8fcd
    // 0x8fcd (Windows-31J)
    // 0x7ae0 (UTF-16BE)
    if (argCheck == 'èÕ') {
        return true;
    }
    // No.1938
    // ê‡ñæ:8fce
    // 0x8fce (Windows-31J)
    // 0x7b11 (UTF-16BE)
    if (argCheck == 'èŒ') {
        return true;
    }
    // No.1939
    // ê‡ñæ:8fcf
    // 0x8fcf (Windows-31J)
    // 0x7ca7 (UTF-16BE)
    if (argCheck == 'èœ') {
        return true;
    }
    // No.1940
    // ê‡ñæ:8fd0
    // 0x8fd0 (Windows-31J)
    // 0x7d39 (UTF-16BE)
    if (argCheck == 'è–') {
        return true;
    }
    // No.1941
    // ê‡ñæ:8fd1
    // 0x8fd1 (Windows-31J)
    // 0x8096 (UTF-16BE)
    if (argCheck == 'è—') {
        return true;
    }
    // No.1942
    // ê‡ñæ:8fd2
    // 0x8fd2 (Windows-31J)
    // 0x83d6 (UTF-16BE)
    if (argCheck == 'è“') {
        return true;
    }
    // No.1943
    // ê‡ñæ:8fd3
    // 0x8fd3 (Windows-31J)
    // 0x848b (UTF-16BE)
    if (argCheck == 'è”') {
        return true;
    }
    // No.1944
    // ê‡ñæ:8fd4
    // 0x8fd4 (Windows-31J)
    // 0x8549 (UTF-16BE)
    if (argCheck == 'è‘') {
        return true;
    }
    // No.1945
    // ê‡ñæ:8fd5
    // 0x8fd5 (Windows-31J)
    // 0x885d (UTF-16BE)
    if (argCheck == 'è’') {
        return true;
    }
    // No.1946
    // ê‡ñæ:8fd6
    // 0x8fd6 (Windows-31J)
    // 0x88f3 (UTF-16BE)
    if (argCheck == 'è÷') {
        return true;
    }
    // No.1947
    // ê‡ñæ:8fd7
    // 0x8fd7 (Windows-31J)
    // 0x8a1f (UTF-16BE)
    if (argCheck == 'è◊') {
        return true;
    }
    // No.1948
    // ê‡ñæ:8fd8
    // 0x8fd8 (Windows-31J)
    // 0x8a3c (UTF-16BE)
    if (argCheck == 'èÿ') {
        return true;
    }
    // No.1949
    // ê‡ñæ:8fd9
    // 0x8fd9 (Windows-31J)
    // 0x8a54 (UTF-16BE)
    if (argCheck == 'èŸ') {
        return true;
    }
    // No.1950
    // ê‡ñæ:8fda
    // 0x8fda (Windows-31J)
    // 0x8a73 (UTF-16BE)
    if (argCheck == 'è⁄') {
        return true;
    }
    // No.1951
    // ê‡ñæ:8fdb
    // 0x8fdb (Windows-31J)
    // 0x8c61 (UTF-16BE)
    if (argCheck == 'è€') {
        return true;
    }
    // No.1952
    // ê‡ñæ:8fdc
    // 0x8fdc (Windows-31J)
    // 0x8cde (UTF-16BE)
    if (argCheck == 'è‹') {
        return true;
    }
    // No.1953
    // ê‡ñæ:8fdd
    // 0x8fdd (Windows-31J)
    // 0x91a4 (UTF-16BE)
    if (argCheck == 'è›') {
        return true;
    }
    // No.1954
    // ê‡ñæ:8fde
    // 0x8fde (Windows-31J)
    // 0x9266 (UTF-16BE)
    if (argCheck == 'èﬁ') {
        return true;
    }
    // No.1955
    // ê‡ñæ:8fdf
    // 0x8fdf (Windows-31J)
    // 0x937e (UTF-16BE)
    if (argCheck == 'èﬂ') {
        return true;
    }
    // No.1956
    // ê‡ñæ:8fe0
    // 0x8fe0 (Windows-31J)
    // 0x9418 (UTF-16BE)
    if (argCheck == 'è‡') {
        return true;
    }
    // No.1957
    // ê‡ñæ:8fe1
    // 0x8fe1 (Windows-31J)
    // 0x969c (UTF-16BE)
    if (argCheck == 'è·') {
        return true;
    }
    // No.1958
    // ê‡ñæ:8fe2
    // 0x8fe2 (Windows-31J)
    // 0x9798 (UTF-16BE)
    if (argCheck == 'è‚') {
        return true;
    }
    // No.1959
    // ê‡ñæ:8fe3
    // 0x8fe3 (Windows-31J)
    // 0x4e0a (UTF-16BE)
    if (argCheck == 'è„') {
        return true;
    }
    // No.1960
    // ê‡ñæ:8fe4
    // 0x8fe4 (Windows-31J)
    // 0x4e08 (UTF-16BE)
    if (argCheck == 'è‰') {
        return true;
    }
    // No.1961
    // ê‡ñæ:8fe5
    // 0x8fe5 (Windows-31J)
    // 0x4e1e (UTF-16BE)
    if (argCheck == 'èÂ') {
        return true;
    }
    // No.1962
    // ê‡ñæ:8fe6
    // 0x8fe6 (Windows-31J)
    // 0x4e57 (UTF-16BE)
    if (argCheck == 'èÊ') {
        return true;
    }
    // No.1963
    // ê‡ñæ:8fe7
    // 0x8fe7 (Windows-31J)
    // 0x5197 (UTF-16BE)
    if (argCheck == 'èÁ') {
        return true;
    }
    // No.1964
    // ê‡ñæ:8fe8
    // 0x8fe8 (Windows-31J)
    // 0x5270 (UTF-16BE)
    if (argCheck == 'èË') {
        return true;
    }
    // No.1965
    // ê‡ñæ:8fe9
    // 0x8fe9 (Windows-31J)
    // 0x57ce (UTF-16BE)
    if (argCheck == 'èÈ') {
        return true;
    }
    // No.1966
    // ê‡ñæ:8fea
    // 0x8fea (Windows-31J)
    // 0x5834 (UTF-16BE)
    if (argCheck == 'èÍ') {
        return true;
    }
    // No.1967
    // ê‡ñæ:8feb
    // 0x8feb (Windows-31J)
    // 0x58cc (UTF-16BE)
    if (argCheck == 'èÎ') {
        return true;
    }
    // No.1968
    // ê‡ñæ:8fec
    // 0x8fec (Windows-31J)
    // 0x5b22 (UTF-16BE)
    if (argCheck == 'èÏ') {
        return true;
    }
    // No.1969
    // ê‡ñæ:8fed
    // 0x8fed (Windows-31J)
    // 0x5e38 (UTF-16BE)
    if (argCheck == 'èÌ') {
        return true;
    }
    // No.1970
    // ê‡ñæ:8fee
    // 0x8fee (Windows-31J)
    // 0x60c5 (UTF-16BE)
    if (argCheck == 'èÓ') {
        return true;
    }
    // No.1971
    // ê‡ñæ:8fef
    // 0x8fef (Windows-31J)
    // 0x64fe (UTF-16BE)
    if (argCheck == 'èÔ') {
        return true;
    }
    // No.1972
    // ê‡ñæ:8ff0
    // 0x8ff0 (Windows-31J)
    // 0x6761 (UTF-16BE)
    if (argCheck == 'è') {
        return true;
    }
    // No.1973
    // ê‡ñæ:8ff1
    // 0x8ff1 (Windows-31J)
    // 0x6756 (UTF-16BE)
    if (argCheck == 'èÒ') {
        return true;
    }
    // No.1974
    // ê‡ñæ:8ff2
    // 0x8ff2 (Windows-31J)
    // 0x6d44 (UTF-16BE)
    if (argCheck == 'èÚ') {
        return true;
    }
    // No.1975
    // ê‡ñæ:8ff3
    // 0x8ff3 (Windows-31J)
    // 0x72b6 (UTF-16BE)
    if (argCheck == 'èÛ') {
        return true;
    }
    // No.1976
    // ê‡ñæ:8ff4
    // 0x8ff4 (Windows-31J)
    // 0x7573 (UTF-16BE)
    if (argCheck == 'èÙ') {
        return true;
    }
    // No.1977
    // ê‡ñæ:8ff5
    // 0x8ff5 (Windows-31J)
    // 0x7a63 (UTF-16BE)
    if (argCheck == 'èı') {
        return true;
    }
    // No.1978
    // ê‡ñæ:8ff6
    // 0x8ff6 (Windows-31J)
    // 0x84b8 (UTF-16BE)
    if (argCheck == 'èˆ') {
        return true;
    }
    // No.1979
    // ê‡ñæ:8ff7
    // 0x8ff7 (Windows-31J)
    // 0x8b72 (UTF-16BE)
    if (argCheck == 'è˜') {
        return true;
    }
    // No.1980
    // ê‡ñæ:8ff8
    // 0x8ff8 (Windows-31J)
    // 0x91b8 (UTF-16BE)
    if (argCheck == 'è¯') {
        return true;
    }
    // No.1981
    // ê‡ñæ:8ff9
    // 0x8ff9 (Windows-31J)
    // 0x9320 (UTF-16BE)
    if (argCheck == 'è˘') {
        return true;
    }
    // No.1982
    // ê‡ñæ:8ffa
    // 0x8ffa (Windows-31J)
    // 0x5631 (UTF-16BE)
    if (argCheck == 'è˙') {
        return true;
    }
    // No.1983
    // ê‡ñæ:8ffb
    // 0x8ffb (Windows-31J)
    // 0x57f4 (UTF-16BE)
    if (argCheck == 'è˚') {
        return true;
    }
    // No.1984
    // ê‡ñæ:8ffc
    // 0x8ffc (Windows-31J)
    // 0x98fe (UTF-16BE)
    if (argCheck == 'è¸') {
        return true;
    }
    // No.1985
    // ê‡ñæ:9040
    // 0x9040 (Windows-31J)
    // 0x62ed (UTF-16BE)
    if (argCheck == 'ê@') {
        return true;
    }
    // No.1986
    // ê‡ñæ:9041
    // 0x9041 (Windows-31J)
    // 0x690d (UTF-16BE)
    if (argCheck == 'êA') {
        return true;
    }
    // No.1987
    // ê‡ñæ:9042
    // 0x9042 (Windows-31J)
    // 0x6b96 (UTF-16BE)
    if (argCheck == 'êB') {
        return true;
    }
    // No.1988
    // ê‡ñæ:9043
    // 0x9043 (Windows-31J)
    // 0x71ed (UTF-16BE)
    if (argCheck == 'êC') {
        return true;
    }
    // No.1989
    // ê‡ñæ:9044
    // 0x9044 (Windows-31J)
    // 0x7e54 (UTF-16BE)
    if (argCheck == 'êD') {
        return true;
    }
    // No.1990
    // ê‡ñæ:9045
    // 0x9045 (Windows-31J)
    // 0x8077 (UTF-16BE)
    if (argCheck == 'êE') {
        return true;
    }
    // No.1991
    // ê‡ñæ:9046
    // 0x9046 (Windows-31J)
    // 0x8272 (UTF-16BE)
    if (argCheck == 'êF') {
        return true;
    }
    // No.1992
    // ê‡ñæ:9047
    // 0x9047 (Windows-31J)
    // 0x89e6 (UTF-16BE)
    if (argCheck == 'êG') {
        return true;
    }
    // No.1993
    // ê‡ñæ:9048
    // 0x9048 (Windows-31J)
    // 0x98df (UTF-16BE)
    if (argCheck == 'êH') {
        return true;
    }
    // No.1994
    // ê‡ñæ:9049
    // 0x9049 (Windows-31J)
    // 0x8755 (UTF-16BE)
    if (argCheck == 'êI') {
        return true;
    }
    // No.1995
    // ê‡ñæ:904a
    // 0x904a (Windows-31J)
    // 0x8fb1 (UTF-16BE)
    if (argCheck == 'êJ') {
        return true;
    }
    // No.1996
    // ê‡ñæ:904b
    // 0x904b (Windows-31J)
    // 0x5c3b (UTF-16BE)
    if (argCheck == 'êK') {
        return true;
    }
    // No.1997
    // ê‡ñæ:904c
    // 0x904c (Windows-31J)
    // 0x4f38 (UTF-16BE)
    if (argCheck == 'êL') {
        return true;
    }
    // No.1998
    // ê‡ñæ:904d
    // 0x904d (Windows-31J)
    // 0x4fe1 (UTF-16BE)
    if (argCheck == 'êM') {
        return true;
    }
    // No.1999
    // ê‡ñæ:904e
    // 0x904e (Windows-31J)
    // 0x4fb5 (UTF-16BE)
    if (argCheck == 'êN') {
        return true;
    }
    // No.2000
    // ê‡ñæ:904f
    // 0x904f (Windows-31J)
    // 0x5507 (UTF-16BE)
    if (argCheck == 'êO') {
        return true;
    }
    // No.2001
    // ê‡ñæ:9050
    // 0x9050 (Windows-31J)
    // 0x5a20 (UTF-16BE)
    if (argCheck == 'êP') {
        return true;
    }
    // No.2002
    // ê‡ñæ:9051
    // 0x9051 (Windows-31J)
    // 0x5bdd (UTF-16BE)
    if (argCheck == 'êQ') {
        return true;
    }
    // No.2003
    // ê‡ñæ:9052
    // 0x9052 (Windows-31J)
    // 0x5be9 (UTF-16BE)
    if (argCheck == 'êR') {
        return true;
    }
    // No.2004
    // ê‡ñæ:9053
    // 0x9053 (Windows-31J)
    // 0x5fc3 (UTF-16BE)
    if (argCheck == 'êS') {
        return true;
    }
    // No.2005
    // ê‡ñæ:9054
    // 0x9054 (Windows-31J)
    // 0x614e (UTF-16BE)
    if (argCheck == 'êT') {
        return true;
    }
    // No.2006
    // ê‡ñæ:9055
    // 0x9055 (Windows-31J)
    // 0x632f (UTF-16BE)
    if (argCheck == 'êU') {
        return true;
    }
    // No.2007
    // ê‡ñæ:9056
    // 0x9056 (Windows-31J)
    // 0x65b0 (UTF-16BE)
    if (argCheck == 'êV') {
        return true;
    }
    // No.2008
    // ê‡ñæ:9057
    // 0x9057 (Windows-31J)
    // 0x664b (UTF-16BE)
    if (argCheck == 'êW') {
        return true;
    }
    // No.2009
    // ê‡ñæ:9058
    // 0x9058 (Windows-31J)
    // 0x68ee (UTF-16BE)
    if (argCheck == 'êX') {
        return true;
    }
    // No.2010
    // ê‡ñæ:9059
    // 0x9059 (Windows-31J)
    // 0x699b (UTF-16BE)
    if (argCheck == 'êY') {
        return true;
    }
    // No.2011
    // ê‡ñæ:905a
    // 0x905a (Windows-31J)
    // 0x6d78 (UTF-16BE)
    if (argCheck == 'êZ') {
        return true;
    }
    // No.2012
    // ê‡ñæ:905b
    // 0x905b (Windows-31J)
    // 0x6df1 (UTF-16BE)
    if (argCheck == 'ê[') {
        return true;
    }
    // No.2013
    // ê‡ñæ:905c
    // 0x905c (Windows-31J)
    // 0x7533 (UTF-16BE)
    if (argCheck == 'ê\') {
        return true;
    }
    // No.2014
    // ê‡ñæ:905d
    // 0x905d (Windows-31J)
    // 0x75b9 (UTF-16BE)
    if (argCheck == 'ê]') {
        return true;
    }
    // No.2015
    // ê‡ñæ:905e
    // 0x905e (Windows-31J)
    // 0x771f (UTF-16BE)
    if (argCheck == 'ê^') {
        return true;
    }
    // No.2016
    // ê‡ñæ:905f
    // 0x905f (Windows-31J)
    // 0x795e (UTF-16BE)
    if (argCheck == 'ê_') {
        return true;
    }
    // No.2017
    // ê‡ñæ:9060
    // 0x9060 (Windows-31J)
    // 0x79e6 (UTF-16BE)
    if (argCheck == 'ê`') {
        return true;
    }
    // No.2018
    // ê‡ñæ:9061
    // 0x9061 (Windows-31J)
    // 0x7d33 (UTF-16BE)
    if (argCheck == 'êa') {
        return true;
    }
    // No.2019
    // ê‡ñæ:9062
    // 0x9062 (Windows-31J)
    // 0x81e3 (UTF-16BE)
    if (argCheck == 'êb') {
        return true;
    }
    // No.2020
    // ê‡ñæ:9063
    // 0x9063 (Windows-31J)
    // 0x82af (UTF-16BE)
    if (argCheck == 'êc') {
        return true;
    }
    // No.2021
    // ê‡ñæ:9064
    // 0x9064 (Windows-31J)
    // 0x85aa (UTF-16BE)
    if (argCheck == 'êd') {
        return true;
    }
    // No.2022
    // ê‡ñæ:9065
    // 0x9065 (Windows-31J)
    // 0x89aa (UTF-16BE)
    if (argCheck == 'êe') {
        return true;
    }
    // No.2023
    // ê‡ñæ:9066
    // 0x9066 (Windows-31J)
    // 0x8a3a (UTF-16BE)
    if (argCheck == 'êf') {
        return true;
    }
    // No.2024
    // ê‡ñæ:9067
    // 0x9067 (Windows-31J)
    // 0x8eab (UTF-16BE)
    if (argCheck == 'êg') {
        return true;
    }
    // No.2025
    // ê‡ñæ:9068
    // 0x9068 (Windows-31J)
    // 0x8f9b (UTF-16BE)
    if (argCheck == 'êh') {
        return true;
    }
    // No.2026
    // ê‡ñæ:9069
    // 0x9069 (Windows-31J)
    // 0x9032 (UTF-16BE)
    if (argCheck == 'êi') {
        return true;
    }
    // No.2027
    // ê‡ñæ:906a
    // 0x906a (Windows-31J)
    // 0x91dd (UTF-16BE)
    if (argCheck == 'êj') {
        return true;
    }
    // No.2028
    // ê‡ñæ:906b
    // 0x906b (Windows-31J)
    // 0x9707 (UTF-16BE)
    if (argCheck == 'êk') {
        return true;
    }
    // No.2029
    // ê‡ñæ:906c
    // 0x906c (Windows-31J)
    // 0x4eba (UTF-16BE)
    if (argCheck == 'êl') {
        return true;
    }
    // No.2030
    // ê‡ñæ:906d
    // 0x906d (Windows-31J)
    // 0x4ec1 (UTF-16BE)
    if (argCheck == 'êm') {
        return true;
    }
    // No.2031
    // ê‡ñæ:906e
    // 0x906e (Windows-31J)
    // 0x5203 (UTF-16BE)
    if (argCheck == 'ên') {
        return true;
    }
    // No.2032
    // ê‡ñæ:906f
    // 0x906f (Windows-31J)
    // 0x5875 (UTF-16BE)
    if (argCheck == 'êo') {
        return true;
    }
    // No.2033
    // ê‡ñæ:9070
    // 0x9070 (Windows-31J)
    // 0x58ec (UTF-16BE)
    if (argCheck == 'êp') {
        return true;
    }
    // No.2034
    // ê‡ñæ:9071
    // 0x9071 (Windows-31J)
    // 0x5c0b (UTF-16BE)
    if (argCheck == 'êq') {
        return true;
    }
    // No.2035
    // ê‡ñæ:9072
    // 0x9072 (Windows-31J)
    // 0x751a (UTF-16BE)
    if (argCheck == 'êr') {
        return true;
    }
    // No.2036
    // ê‡ñæ:9073
    // 0x9073 (Windows-31J)
    // 0x5c3d (UTF-16BE)
    if (argCheck == 'ês') {
        return true;
    }
    // No.2037
    // ê‡ñæ:9074
    // 0x9074 (Windows-31J)
    // 0x814e (UTF-16BE)
    if (argCheck == 'êt') {
        return true;
    }
    // No.2038
    // ê‡ñæ:9075
    // 0x9075 (Windows-31J)
    // 0x8a0a (UTF-16BE)
    if (argCheck == 'êu') {
        return true;
    }
    // No.2039
    // ê‡ñæ:9076
    // 0x9076 (Windows-31J)
    // 0x8fc5 (UTF-16BE)
    if (argCheck == 'êv') {
        return true;
    }
    // No.2040
    // ê‡ñæ:9077
    // 0x9077 (Windows-31J)
    // 0x9663 (UTF-16BE)
    if (argCheck == 'êw') {
        return true;
    }
    // No.2041
    // ê‡ñæ:9078
    // 0x9078 (Windows-31J)
    // 0x976d (UTF-16BE)
    if (argCheck == 'êx') {
        return true;
    }
    // No.2042
    // ê‡ñæ:9079
    // 0x9079 (Windows-31J)
    // 0x7b25 (UTF-16BE)
    if (argCheck == 'êy') {
        return true;
    }
    // No.2043
    // ê‡ñæ:907a
    // 0x907a (Windows-31J)
    // 0x8acf (UTF-16BE)
    if (argCheck == 'êz') {
        return true;
    }
    // No.2044
    // ê‡ñæ:907b
    // 0x907b (Windows-31J)
    // 0x9808 (UTF-16BE)
    if (argCheck == 'ê{') {
        return true;
    }
    // No.2045
    // ê‡ñæ:907c
    // 0x907c (Windows-31J)
    // 0x9162 (UTF-16BE)
    if (argCheck == 'ê|') {
        return true;
    }
    // No.2046
    // ê‡ñæ:907d
    // 0x907d (Windows-31J)
    // 0x56f3 (UTF-16BE)
    if (argCheck == 'ê}') {
        return true;
    }
    // No.2047
    // ê‡ñæ:907e
    // 0x907e (Windows-31J)
    // 0x53a8 (UTF-16BE)
    if (argCheck == 'ê~') {
        return true;
    }
    // No.2048
    // ê‡ñæ:9080
    // 0x9080 (Windows-31J)
    // 0x9017 (UTF-16BE)
    if (argCheck == 'êÄ') {
        return true;
    }
    // No.2049
    // ê‡ñæ:9081
    // 0x9081 (Windows-31J)
    // 0x5439 (UTF-16BE)
    if (argCheck == 'êÅ') {
        return true;
    }
    // No.2050
    // ê‡ñæ:9082
    // 0x9082 (Windows-31J)
    // 0x5782 (UTF-16BE)
    if (argCheck == 'êÇ') {
        return true;
    }
    // No.2051
    // ê‡ñæ:9083
    // 0x9083 (Windows-31J)
    // 0x5e25 (UTF-16BE)
    if (argCheck == 'êÉ') {
        return true;
    }
    // No.2052
    // ê‡ñæ:9084
    // 0x9084 (Windows-31J)
    // 0x63a8 (UTF-16BE)
    if (argCheck == 'êÑ') {
        return true;
    }
    // No.2053
    // ê‡ñæ:9085
    // 0x9085 (Windows-31J)
    // 0x6c34 (UTF-16BE)
    if (argCheck == 'êÖ') {
        return true;
    }
    // No.2054
    // ê‡ñæ:9086
    // 0x9086 (Windows-31J)
    // 0x708a (UTF-16BE)
    if (argCheck == 'êÜ') {
        return true;
    }
    // No.2055
    // ê‡ñæ:9087
    // 0x9087 (Windows-31J)
    // 0x7761 (UTF-16BE)
    if (argCheck == 'êá') {
        return true;
    }
    // No.2056
    // ê‡ñæ:9088
    // 0x9088 (Windows-31J)
    // 0x7c8b (UTF-16BE)
    if (argCheck == 'êà') {
        return true;
    }
    // No.2057
    // ê‡ñæ:9089
    // 0x9089 (Windows-31J)
    // 0x7fe0 (UTF-16BE)
    if (argCheck == 'êâ') {
        return true;
    }
    // No.2058
    // ê‡ñæ:908a
    // 0x908a (Windows-31J)
    // 0x8870 (UTF-16BE)
    if (argCheck == 'êä') {
        return true;
    }
    // No.2059
    // ê‡ñæ:908b
    // 0x908b (Windows-31J)
    // 0x9042 (UTF-16BE)
    if (argCheck == 'êã') {
        return true;
    }
    // No.2060
    // ê‡ñæ:908c
    // 0x908c (Windows-31J)
    // 0x9154 (UTF-16BE)
    if (argCheck == 'êå') {
        return true;
    }
    // No.2061
    // ê‡ñæ:908d
    // 0x908d (Windows-31J)
    // 0x9310 (UTF-16BE)
    if (argCheck == 'êç') {
        return true;
    }
    // No.2062
    // ê‡ñæ:908e
    // 0x908e (Windows-31J)
    // 0x9318 (UTF-16BE)
    if (argCheck == 'êé') {
        return true;
    }
    // No.2063
    // ê‡ñæ:908f
    // 0x908f (Windows-31J)
    // 0x968f (UTF-16BE)
    if (argCheck == 'êè') {
        return true;
    }
    // No.2064
    // ê‡ñæ:9090
    // 0x9090 (Windows-31J)
    // 0x745e (UTF-16BE)
    if (argCheck == 'êê') {
        return true;
    }
    // No.2065
    // ê‡ñæ:9091
    // 0x9091 (Windows-31J)
    // 0x9ac4 (UTF-16BE)
    if (argCheck == 'êë') {
        return true;
    }
    // No.2066
    // ê‡ñæ:9092
    // 0x9092 (Windows-31J)
    // 0x5d07 (UTF-16BE)
    if (argCheck == 'êí') {
        return true;
    }
    // No.2067
    // ê‡ñæ:9093
    // 0x9093 (Windows-31J)
    // 0x5d69 (UTF-16BE)
    if (argCheck == 'êì') {
        return true;
    }
    // No.2068
    // ê‡ñæ:9094
    // 0x9094 (Windows-31J)
    // 0x6570 (UTF-16BE)
    if (argCheck == 'êî') {
        return true;
    }
    // No.2069
    // ê‡ñæ:9095
    // 0x9095 (Windows-31J)
    // 0x67a2 (UTF-16BE)
    if (argCheck == 'êï') {
        return true;
    }
    // No.2070
    // ê‡ñæ:9096
    // 0x9096 (Windows-31J)
    // 0x8da8 (UTF-16BE)
    if (argCheck == 'êñ') {
        return true;
    }
    // No.2071
    // ê‡ñæ:9097
    // 0x9097 (Windows-31J)
    // 0x96db (UTF-16BE)
    if (argCheck == 'êó') {
        return true;
    }
    // No.2072
    // ê‡ñæ:9098
    // 0x9098 (Windows-31J)
    // 0x636e (UTF-16BE)
    if (argCheck == 'êò') {
        return true;
    }
    // No.2073
    // ê‡ñæ:9099
    // 0x9099 (Windows-31J)
    // 0x6749 (UTF-16BE)
    if (argCheck == 'êô') {
        return true;
    }
    // No.2074
    // ê‡ñæ:909a
    // 0x909a (Windows-31J)
    // 0x6919 (UTF-16BE)
    if (argCheck == 'êö') {
        return true;
    }
    // No.2075
    // ê‡ñæ:909b
    // 0x909b (Windows-31J)
    // 0x83c5 (UTF-16BE)
    if (argCheck == 'êõ') {
        return true;
    }
    // No.2076
    // ê‡ñæ:909c
    // 0x909c (Windows-31J)
    // 0x9817 (UTF-16BE)
    if (argCheck == 'êú') {
        return true;
    }
    // No.2077
    // ê‡ñæ:909d
    // 0x909d (Windows-31J)
    // 0x96c0 (UTF-16BE)
    if (argCheck == 'êù') {
        return true;
    }
    // No.2078
    // ê‡ñæ:909e
    // 0x909e (Windows-31J)
    // 0x88fe (UTF-16BE)
    if (argCheck == 'êû') {
        return true;
    }
    // No.2079
    // ê‡ñæ:909f
    // 0x909f (Windows-31J)
    // 0x6f84 (UTF-16BE)
    if (argCheck == 'êü') {
        return true;
    }
    // No.2080
    // ê‡ñæ:90a0
    // 0x90a0 (Windows-31J)
    // 0x647a (UTF-16BE)
    if (argCheck == 'ê†') {
        return true;
    }
    // No.2081
    // ê‡ñæ:90a1
    // 0x90a1 (Windows-31J)
    // 0x5bf8 (UTF-16BE)
    if (argCheck == 'ê°') {
        return true;
    }
    // No.2082
    // ê‡ñæ:90a2
    // 0x90a2 (Windows-31J)
    // 0x4e16 (UTF-16BE)
    if (argCheck == 'ê¢') {
        return true;
    }
    // No.2083
    // ê‡ñæ:90a3
    // 0x90a3 (Windows-31J)
    // 0x702c (UTF-16BE)
    if (argCheck == 'ê£') {
        return true;
    }
    // No.2084
    // ê‡ñæ:90a4
    // 0x90a4 (Windows-31J)
    // 0x755d (UTF-16BE)
    if (argCheck == 'ê§') {
        return true;
    }
    // No.2085
    // ê‡ñæ:90a5
    // 0x90a5 (Windows-31J)
    // 0x662f (UTF-16BE)
    if (argCheck == 'ê•') {
        return true;
    }
    // No.2086
    // ê‡ñæ:90a6
    // 0x90a6 (Windows-31J)
    // 0x51c4 (UTF-16BE)
    if (argCheck == 'ê¶') {
        return true;
    }
    // No.2087
    // ê‡ñæ:90a7
    // 0x90a7 (Windows-31J)
    // 0x5236 (UTF-16BE)
    if (argCheck == 'êß') {
        return true;
    }
    // No.2088
    // ê‡ñæ:90a8
    // 0x90a8 (Windows-31J)
    // 0x52e2 (UTF-16BE)
    if (argCheck == 'ê®') {
        return true;
    }
    // No.2089
    // ê‡ñæ:90a9
    // 0x90a9 (Windows-31J)
    // 0x59d3 (UTF-16BE)
    if (argCheck == 'ê©') {
        return true;
    }
    // No.2090
    // ê‡ñæ:90aa
    // 0x90aa (Windows-31J)
    // 0x5f81 (UTF-16BE)
    if (argCheck == 'ê™') {
        return true;
    }
    // No.2091
    // ê‡ñæ:90ab
    // 0x90ab (Windows-31J)
    // 0x6027 (UTF-16BE)
    if (argCheck == 'ê´') {
        return true;
    }
    // No.2092
    // ê‡ñæ:90ac
    // 0x90ac (Windows-31J)
    // 0x6210 (UTF-16BE)
    if (argCheck == 'ê¨') {
        return true;
    }
    // No.2093
    // ê‡ñæ:90ad
    // 0x90ad (Windows-31J)
    // 0x653f (UTF-16BE)
    if (argCheck == 'ê≠') {
        return true;
    }
    // No.2094
    // ê‡ñæ:90ae
    // 0x90ae (Windows-31J)
    // 0x6574 (UTF-16BE)
    if (argCheck == 'êÆ') {
        return true;
    }
    // No.2095
    // ê‡ñæ:90af
    // 0x90af (Windows-31J)
    // 0x661f (UTF-16BE)
    if (argCheck == 'êØ') {
        return true;
    }
    // No.2096
    // ê‡ñæ:90b0
    // 0x90b0 (Windows-31J)
    // 0x6674 (UTF-16BE)
    if (argCheck == 'ê∞') {
        return true;
    }
    // No.2097
    // ê‡ñæ:90b1
    // 0x90b1 (Windows-31J)
    // 0x68f2 (UTF-16BE)
    if (argCheck == 'ê±') {
        return true;
    }
    // No.2098
    // ê‡ñæ:90b2
    // 0x90b2 (Windows-31J)
    // 0x6816 (UTF-16BE)
    if (argCheck == 'ê≤') {
        return true;
    }
    // No.2099
    // ê‡ñæ:90b3
    // 0x90b3 (Windows-31J)
    // 0x6b63 (UTF-16BE)
    if (argCheck == 'ê≥') {
        return true;
    }
    // No.2100
    // ê‡ñæ:90b4
    // 0x90b4 (Windows-31J)
    // 0x6e05 (UTF-16BE)
    if (argCheck == 'ê¥') {
        return true;
    }
    // No.2101
    // ê‡ñæ:90b5
    // 0x90b5 (Windows-31J)
    // 0x7272 (UTF-16BE)
    if (argCheck == 'êµ') {
        return true;
    }
    // No.2102
    // ê‡ñæ:90b6
    // 0x90b6 (Windows-31J)
    // 0x751f (UTF-16BE)
    if (argCheck == 'ê∂') {
        return true;
    }
    // No.2103
    // ê‡ñæ:90b7
    // 0x90b7 (Windows-31J)
    // 0x76db (UTF-16BE)
    if (argCheck == 'ê∑') {
        return true;
    }
    // No.2104
    // ê‡ñæ:90b8
    // 0x90b8 (Windows-31J)
    // 0x7cbe (UTF-16BE)
    if (argCheck == 'ê∏') {
        return true;
    }
    // No.2105
    // ê‡ñæ:90b9
    // 0x90b9 (Windows-31J)
    // 0x8056 (UTF-16BE)
    if (argCheck == 'êπ') {
        return true;
    }
    // No.2106
    // ê‡ñæ:90ba
    // 0x90ba (Windows-31J)
    // 0x58f0 (UTF-16BE)
    if (argCheck == 'ê∫') {
        return true;
    }
    // No.2107
    // ê‡ñæ:90bb
    // 0x90bb (Windows-31J)
    // 0x88fd (UTF-16BE)
    if (argCheck == 'êª') {
        return true;
    }
    // No.2108
    // ê‡ñæ:90bc
    // 0x90bc (Windows-31J)
    // 0x897f (UTF-16BE)
    if (argCheck == 'êº') {
        return true;
    }
    // No.2109
    // ê‡ñæ:90bd
    // 0x90bd (Windows-31J)
    // 0x8aa0 (UTF-16BE)
    if (argCheck == 'êΩ') {
        return true;
    }
    // No.2110
    // ê‡ñæ:90be
    // 0x90be (Windows-31J)
    // 0x8a93 (UTF-16BE)
    if (argCheck == 'êæ') {
        return true;
    }
    // No.2111
    // ê‡ñæ:90bf
    // 0x90bf (Windows-31J)
    // 0x8acb (UTF-16BE)
    if (argCheck == 'êø') {
        return true;
    }
    // No.2112
    // ê‡ñæ:90c0
    // 0x90c0 (Windows-31J)
    // 0x901d (UTF-16BE)
    if (argCheck == 'ê¿') {
        return true;
    }
    // No.2113
    // ê‡ñæ:90c1
    // 0x90c1 (Windows-31J)
    // 0x9192 (UTF-16BE)
    if (argCheck == 'ê¡') {
        return true;
    }
    // No.2114
    // ê‡ñæ:90c2
    // 0x90c2 (Windows-31J)
    // 0x9752 (UTF-16BE)
    if (argCheck == 'ê¬') {
        return true;
    }
    // No.2115
    // ê‡ñæ:90c3
    // 0x90c3 (Windows-31J)
    // 0x9759 (UTF-16BE)
    if (argCheck == 'ê√') {
        return true;
    }
    // No.2116
    // ê‡ñæ:90c4
    // 0x90c4 (Windows-31J)
    // 0x6589 (UTF-16BE)
    if (argCheck == 'êƒ') {
        return true;
    }
    // No.2117
    // ê‡ñæ:90c5
    // 0x90c5 (Windows-31J)
    // 0x7a0e (UTF-16BE)
    if (argCheck == 'ê≈') {
        return true;
    }
    // No.2118
    // ê‡ñæ:90c6
    // 0x90c6 (Windows-31J)
    // 0x8106 (UTF-16BE)
    if (argCheck == 'ê∆') {
        return true;
    }
    // No.2119
    // ê‡ñæ:90c7
    // 0x90c7 (Windows-31J)
    // 0x96bb (UTF-16BE)
    if (argCheck == 'ê«') {
        return true;
    }
    // No.2120
    // ê‡ñæ:90c8
    // 0x90c8 (Windows-31J)
    // 0x5e2d (UTF-16BE)
    if (argCheck == 'ê»') {
        return true;
    }
    // No.2121
    // ê‡ñæ:90c9
    // 0x90c9 (Windows-31J)
    // 0x60dc (UTF-16BE)
    if (argCheck == 'ê…') {
        return true;
    }
    // No.2122
    // ê‡ñæ:90ca
    // 0x90ca (Windows-31J)
    // 0x621a (UTF-16BE)
    if (argCheck == 'ê ') {
        return true;
    }
    // No.2123
    // ê‡ñæ:90cb
    // 0x90cb (Windows-31J)
    // 0x65a5 (UTF-16BE)
    if (argCheck == 'êÀ') {
        return true;
    }
    // No.2124
    // ê‡ñæ:90cc
    // 0x90cc (Windows-31J)
    // 0x6614 (UTF-16BE)
    if (argCheck == 'êÃ') {
        return true;
    }
    // No.2125
    // ê‡ñæ:90cd
    // 0x90cd (Windows-31J)
    // 0x6790 (UTF-16BE)
    if (argCheck == 'êÕ') {
        return true;
    }
    // No.2126
    // ê‡ñæ:90ce
    // 0x90ce (Windows-31J)
    // 0x77f3 (UTF-16BE)
    if (argCheck == 'êŒ') {
        return true;
    }
    // No.2127
    // ê‡ñæ:90cf
    // 0x90cf (Windows-31J)
    // 0x7a4d (UTF-16BE)
    if (argCheck == 'êœ') {
        return true;
    }
    // No.2128
    // ê‡ñæ:90d0
    // 0x90d0 (Windows-31J)
    // 0x7c4d (UTF-16BE)
    if (argCheck == 'ê–') {
        return true;
    }
    // No.2129
    // ê‡ñæ:90d1
    // 0x90d1 (Windows-31J)
    // 0x7e3e (UTF-16BE)
    if (argCheck == 'ê—') {
        return true;
    }
    // No.2130
    // ê‡ñæ:90d2
    // 0x90d2 (Windows-31J)
    // 0x810a (UTF-16BE)
    if (argCheck == 'ê“') {
        return true;
    }
    // No.2131
    // ê‡ñæ:90d3
    // 0x90d3 (Windows-31J)
    // 0x8cac (UTF-16BE)
    if (argCheck == 'ê”') {
        return true;
    }
    // No.2132
    // ê‡ñæ:90d4
    // 0x90d4 (Windows-31J)
    // 0x8d64 (UTF-16BE)
    if (argCheck == 'ê‘') {
        return true;
    }
    // No.2133
    // ê‡ñæ:90d5
    // 0x90d5 (Windows-31J)
    // 0x8de1 (UTF-16BE)
    if (argCheck == 'ê’') {
        return true;
    }
    // No.2134
    // ê‡ñæ:90d6
    // 0x90d6 (Windows-31J)
    // 0x8e5f (UTF-16BE)
    if (argCheck == 'ê÷') {
        return true;
    }
    // No.2135
    // ê‡ñæ:90d7
    // 0x90d7 (Windows-31J)
    // 0x78a9 (UTF-16BE)
    if (argCheck == 'ê◊') {
        return true;
    }
    // No.2136
    // ê‡ñæ:90d8
    // 0x90d8 (Windows-31J)
    // 0x5207 (UTF-16BE)
    if (argCheck == 'êÿ') {
        return true;
    }
    // No.2137
    // ê‡ñæ:90d9
    // 0x90d9 (Windows-31J)
    // 0x62d9 (UTF-16BE)
    if (argCheck == 'êŸ') {
        return true;
    }
    // No.2138
    // ê‡ñæ:90da
    // 0x90da (Windows-31J)
    // 0x63a5 (UTF-16BE)
    if (argCheck == 'ê⁄') {
        return true;
    }
    // No.2139
    // ê‡ñæ:90db
    // 0x90db (Windows-31J)
    // 0x6442 (UTF-16BE)
    if (argCheck == 'ê€') {
        return true;
    }
    // No.2140
    // ê‡ñæ:90dc
    // 0x90dc (Windows-31J)
    // 0x6298 (UTF-16BE)
    if (argCheck == 'ê‹') {
        return true;
    }
    // No.2141
    // ê‡ñæ:90dd
    // 0x90dd (Windows-31J)
    // 0x8a2d (UTF-16BE)
    if (argCheck == 'ê›') {
        return true;
    }
    // No.2142
    // ê‡ñæ:90de
    // 0x90de (Windows-31J)
    // 0x7a83 (UTF-16BE)
    if (argCheck == 'êﬁ') {
        return true;
    }
    // No.2143
    // ê‡ñæ:90df
    // 0x90df (Windows-31J)
    // 0x7bc0 (UTF-16BE)
    if (argCheck == 'êﬂ') {
        return true;
    }
    // No.2144
    // ê‡ñæ:90e0
    // 0x90e0 (Windows-31J)
    // 0x8aac (UTF-16BE)
    if (argCheck == 'ê‡') {
        return true;
    }
    // No.2145
    // ê‡ñæ:90e1
    // 0x90e1 (Windows-31J)
    // 0x96ea (UTF-16BE)
    if (argCheck == 'ê·') {
        return true;
    }
    // No.2146
    // ê‡ñæ:90e2
    // 0x90e2 (Windows-31J)
    // 0x7d76 (UTF-16BE)
    if (argCheck == 'ê‚') {
        return true;
    }
    // No.2147
    // ê‡ñæ:90e3
    // 0x90e3 (Windows-31J)
    // 0x820c (UTF-16BE)
    if (argCheck == 'ê„') {
        return true;
    }
    // No.2148
    // ê‡ñæ:90e4
    // 0x90e4 (Windows-31J)
    // 0x8749 (UTF-16BE)
    if (argCheck == 'ê‰') {
        return true;
    }
    // No.2149
    // ê‡ñæ:90e5
    // 0x90e5 (Windows-31J)
    // 0x4ed9 (UTF-16BE)
    if (argCheck == 'êÂ') {
        return true;
    }
    // No.2150
    // ê‡ñæ:90e6
    // 0x90e6 (Windows-31J)
    // 0x5148 (UTF-16BE)
    if (argCheck == 'êÊ') {
        return true;
    }
    // No.2151
    // ê‡ñæ:90e7
    // 0x90e7 (Windows-31J)
    // 0x5343 (UTF-16BE)
    if (argCheck == 'êÁ') {
        return true;
    }
    // No.2152
    // ê‡ñæ:90e8
    // 0x90e8 (Windows-31J)
    // 0x5360 (UTF-16BE)
    if (argCheck == 'êË') {
        return true;
    }
    // No.2153
    // ê‡ñæ:90e9
    // 0x90e9 (Windows-31J)
    // 0x5ba3 (UTF-16BE)
    if (argCheck == 'êÈ') {
        return true;
    }
    // No.2154
    // ê‡ñæ:90ea
    // 0x90ea (Windows-31J)
    // 0x5c02 (UTF-16BE)
    if (argCheck == 'êÍ') {
        return true;
    }
    // No.2155
    // ê‡ñæ:90eb
    // 0x90eb (Windows-31J)
    // 0x5c16 (UTF-16BE)
    if (argCheck == 'êÎ') {
        return true;
    }
    // No.2156
    // ê‡ñæ:90ec
    // 0x90ec (Windows-31J)
    // 0x5ddd (UTF-16BE)
    if (argCheck == 'êÏ') {
        return true;
    }
    // No.2157
    // ê‡ñæ:90ed
    // 0x90ed (Windows-31J)
    // 0x6226 (UTF-16BE)
    if (argCheck == 'êÌ') {
        return true;
    }
    // No.2158
    // ê‡ñæ:90ee
    // 0x90ee (Windows-31J)
    // 0x6247 (UTF-16BE)
    if (argCheck == 'êÓ') {
        return true;
    }
    // No.2159
    // ê‡ñæ:90ef
    // 0x90ef (Windows-31J)
    // 0x64b0 (UTF-16BE)
    if (argCheck == 'êÔ') {
        return true;
    }
    // No.2160
    // ê‡ñæ:90f0
    // 0x90f0 (Windows-31J)
    // 0x6813 (UTF-16BE)
    if (argCheck == 'ê') {
        return true;
    }
    // No.2161
    // ê‡ñæ:90f1
    // 0x90f1 (Windows-31J)
    // 0x6834 (UTF-16BE)
    if (argCheck == 'êÒ') {
        return true;
    }
    // No.2162
    // ê‡ñæ:90f2
    // 0x90f2 (Windows-31J)
    // 0x6cc9 (UTF-16BE)
    if (argCheck == 'êÚ') {
        return true;
    }
    // No.2163
    // ê‡ñæ:90f3
    // 0x90f3 (Windows-31J)
    // 0x6d45 (UTF-16BE)
    if (argCheck == 'êÛ') {
        return true;
    }
    // No.2164
    // ê‡ñæ:90f4
    // 0x90f4 (Windows-31J)
    // 0x6d17 (UTF-16BE)
    if (argCheck == 'êÙ') {
        return true;
    }
    // No.2165
    // ê‡ñæ:90f5
    // 0x90f5 (Windows-31J)
    // 0x67d3 (UTF-16BE)
    if (argCheck == 'êı') {
        return true;
    }
    // No.2166
    // ê‡ñæ:90f6
    // 0x90f6 (Windows-31J)
    // 0x6f5c (UTF-16BE)
    if (argCheck == 'êˆ') {
        return true;
    }
    // No.2167
    // ê‡ñæ:90f7
    // 0x90f7 (Windows-31J)
    // 0x714e (UTF-16BE)
    if (argCheck == 'ê˜') {
        return true;
    }
    // No.2168
    // ê‡ñæ:90f8
    // 0x90f8 (Windows-31J)
    // 0x717d (UTF-16BE)
    if (argCheck == 'ê¯') {
        return true;
    }
    // No.2169
    // ê‡ñæ:90f9
    // 0x90f9 (Windows-31J)
    // 0x65cb (UTF-16BE)
    if (argCheck == 'ê˘') {
        return true;
    }
    // No.2170
    // ê‡ñæ:90fa
    // 0x90fa (Windows-31J)
    // 0x7a7f (UTF-16BE)
    if (argCheck == 'ê˙') {
        return true;
    }
    // No.2171
    // ê‡ñæ:90fb
    // 0x90fb (Windows-31J)
    // 0x7bad (UTF-16BE)
    if (argCheck == 'ê˚') {
        return true;
    }
    // No.2172
    // ê‡ñæ:90fc
    // 0x90fc (Windows-31J)
    // 0x7dda (UTF-16BE)
    if (argCheck == 'ê¸') {
        return true;
    }
    // No.2173
    // ê‡ñæ:9140
    // 0x9140 (Windows-31J)
    // 0x7e4a (UTF-16BE)
    if (argCheck == 'ë@') {
        return true;
    }
    // No.2174
    // ê‡ñæ:9141
    // 0x9141 (Windows-31J)
    // 0x7fa8 (UTF-16BE)
    if (argCheck == 'ëA') {
        return true;
    }
    // No.2175
    // ê‡ñæ:9142
    // 0x9142 (Windows-31J)
    // 0x817a (UTF-16BE)
    if (argCheck == 'ëB') {
        return true;
    }
    // No.2176
    // ê‡ñæ:9143
    // 0x9143 (Windows-31J)
    // 0x821b (UTF-16BE)
    if (argCheck == 'ëC') {
        return true;
    }
    // No.2177
    // ê‡ñæ:9144
    // 0x9144 (Windows-31J)
    // 0x8239 (UTF-16BE)
    if (argCheck == 'ëD') {
        return true;
    }
    // No.2178
    // ê‡ñæ:9145
    // 0x9145 (Windows-31J)
    // 0x85a6 (UTF-16BE)
    if (argCheck == 'ëE') {
        return true;
    }
    // No.2179
    // ê‡ñæ:9146
    // 0x9146 (Windows-31J)
    // 0x8a6e (UTF-16BE)
    if (argCheck == 'ëF') {
        return true;
    }
    // No.2180
    // ê‡ñæ:9147
    // 0x9147 (Windows-31J)
    // 0x8cce (UTF-16BE)
    if (argCheck == 'ëG') {
        return true;
    }
    // No.2181
    // ê‡ñæ:9148
    // 0x9148 (Windows-31J)
    // 0x8df5 (UTF-16BE)
    if (argCheck == 'ëH') {
        return true;
    }
    // No.2182
    // ê‡ñæ:9149
    // 0x9149 (Windows-31J)
    // 0x9078 (UTF-16BE)
    if (argCheck == 'ëI') {
        return true;
    }
    // No.2183
    // ê‡ñæ:914a
    // 0x914a (Windows-31J)
    // 0x9077 (UTF-16BE)
    if (argCheck == 'ëJ') {
        return true;
    }
    // No.2184
    // ê‡ñæ:914b
    // 0x914b (Windows-31J)
    // 0x92ad (UTF-16BE)
    if (argCheck == 'ëK') {
        return true;
    }
    // No.2185
    // ê‡ñæ:914c
    // 0x914c (Windows-31J)
    // 0x9291 (UTF-16BE)
    if (argCheck == 'ëL') {
        return true;
    }
    // No.2186
    // ê‡ñæ:914d
    // 0x914d (Windows-31J)
    // 0x9583 (UTF-16BE)
    if (argCheck == 'ëM') {
        return true;
    }
    // No.2187
    // ê‡ñæ:914e
    // 0x914e (Windows-31J)
    // 0x9bae (UTF-16BE)
    if (argCheck == 'ëN') {
        return true;
    }
    // No.2188
    // ê‡ñæ:914f
    // 0x914f (Windows-31J)
    // 0x524d (UTF-16BE)
    if (argCheck == 'ëO') {
        return true;
    }
    // No.2189
    // ê‡ñæ:9150
    // 0x9150 (Windows-31J)
    // 0x5584 (UTF-16BE)
    if (argCheck == 'ëP') {
        return true;
    }
    // No.2190
    // ê‡ñæ:9151
    // 0x9151 (Windows-31J)
    // 0x6f38 (UTF-16BE)
    if (argCheck == 'ëQ') {
        return true;
    }
    // No.2191
    // ê‡ñæ:9152
    // 0x9152 (Windows-31J)
    // 0x7136 (UTF-16BE)
    if (argCheck == 'ëR') {
        return true;
    }
    // No.2192
    // ê‡ñæ:9153
    // 0x9153 (Windows-31J)
    // 0x5168 (UTF-16BE)
    if (argCheck == 'ëS') {
        return true;
    }
    // No.2193
    // ê‡ñæ:9154
    // 0x9154 (Windows-31J)
    // 0x7985 (UTF-16BE)
    if (argCheck == 'ëT') {
        return true;
    }
    // No.2194
    // ê‡ñæ:9155
    // 0x9155 (Windows-31J)
    // 0x7e55 (UTF-16BE)
    if (argCheck == 'ëU') {
        return true;
    }
    // No.2195
    // ê‡ñæ:9156
    // 0x9156 (Windows-31J)
    // 0x81b3 (UTF-16BE)
    if (argCheck == 'ëV') {
        return true;
    }
    // No.2196
    // ê‡ñæ:9157
    // 0x9157 (Windows-31J)
    // 0x7cce (UTF-16BE)
    if (argCheck == 'ëW') {
        return true;
    }
    // No.2197
    // ê‡ñæ:9158
    // 0x9158 (Windows-31J)
    // 0x564c (UTF-16BE)
    if (argCheck == 'ëX') {
        return true;
    }
    // No.2198
    // ê‡ñæ:9159
    // 0x9159 (Windows-31J)
    // 0x5851 (UTF-16BE)
    if (argCheck == 'ëY') {
        return true;
    }
    // No.2199
    // ê‡ñæ:915a
    // 0x915a (Windows-31J)
    // 0x5ca8 (UTF-16BE)
    if (argCheck == 'ëZ') {
        return true;
    }
    // No.2200
    // ê‡ñæ:915b
    // 0x915b (Windows-31J)
    // 0x63aa (UTF-16BE)
    if (argCheck == 'ë[') {
        return true;
    }
    // No.2201
    // ê‡ñæ:915c
    // 0x915c (Windows-31J)
    // 0x66fe (UTF-16BE)
    if (argCheck == 'ë\') {
        return true;
    }
    // No.2202
    // ê‡ñæ:915d
    // 0x915d (Windows-31J)
    // 0x66fd (UTF-16BE)
    if (argCheck == 'ë]') {
        return true;
    }
    // No.2203
    // ê‡ñæ:915e
    // 0x915e (Windows-31J)
    // 0x695a (UTF-16BE)
    if (argCheck == 'ë^') {
        return true;
    }
    // No.2204
    // ê‡ñæ:915f
    // 0x915f (Windows-31J)
    // 0x72d9 (UTF-16BE)
    if (argCheck == 'ë_') {
        return true;
    }
    // No.2205
    // ê‡ñæ:9160
    // 0x9160 (Windows-31J)
    // 0x758f (UTF-16BE)
    if (argCheck == 'ë`') {
        return true;
    }
    // No.2206
    // ê‡ñæ:9161
    // 0x9161 (Windows-31J)
    // 0x758e (UTF-16BE)
    if (argCheck == 'ëa') {
        return true;
    }
    // No.2207
    // ê‡ñæ:9162
    // 0x9162 (Windows-31J)
    // 0x790e (UTF-16BE)
    if (argCheck == 'ëb') {
        return true;
    }
    // No.2208
    // ê‡ñæ:9163
    // 0x9163 (Windows-31J)
    // 0x7956 (UTF-16BE)
    if (argCheck == 'ëc') {
        return true;
    }
    // No.2209
    // ê‡ñæ:9164
    // 0x9164 (Windows-31J)
    // 0x79df (UTF-16BE)
    if (argCheck == 'ëd') {
        return true;
    }
    // No.2210
    // ê‡ñæ:9165
    // 0x9165 (Windows-31J)
    // 0x7c97 (UTF-16BE)
    if (argCheck == 'ëe') {
        return true;
    }
    // No.2211
    // ê‡ñæ:9166
    // 0x9166 (Windows-31J)
    // 0x7d20 (UTF-16BE)
    if (argCheck == 'ëf') {
        return true;
    }
    // No.2212
    // ê‡ñæ:9167
    // 0x9167 (Windows-31J)
    // 0x7d44 (UTF-16BE)
    if (argCheck == 'ëg') {
        return true;
    }
    // No.2213
    // ê‡ñæ:9168
    // 0x9168 (Windows-31J)
    // 0x8607 (UTF-16BE)
    if (argCheck == 'ëh') {
        return true;
    }
    // No.2214
    // ê‡ñæ:9169
    // 0x9169 (Windows-31J)
    // 0x8a34 (UTF-16BE)
    if (argCheck == 'ëi') {
        return true;
    }
    // No.2215
    // ê‡ñæ:916a
    // 0x916a (Windows-31J)
    // 0x963b (UTF-16BE)
    if (argCheck == 'ëj') {
        return true;
    }
    // No.2216
    // ê‡ñæ:916b
    // 0x916b (Windows-31J)
    // 0x9061 (UTF-16BE)
    if (argCheck == 'ëk') {
        return true;
    }
    // No.2217
    // ê‡ñæ:916c
    // 0x916c (Windows-31J)
    // 0x9f20 (UTF-16BE)
    if (argCheck == 'ël') {
        return true;
    }
    // No.2218
    // ê‡ñæ:916d
    // 0x916d (Windows-31J)
    // 0x50e7 (UTF-16BE)
    if (argCheck == 'ëm') {
        return true;
    }
    // No.2219
    // ê‡ñæ:916e
    // 0x916e (Windows-31J)
    // 0x5275 (UTF-16BE)
    if (argCheck == 'ën') {
        return true;
    }
    // No.2220
    // ê‡ñæ:916f
    // 0x916f (Windows-31J)
    // 0x53cc (UTF-16BE)
    if (argCheck == 'ëo') {
        return true;
    }
    // No.2221
    // ê‡ñæ:9170
    // 0x9170 (Windows-31J)
    // 0x53e2 (UTF-16BE)
    if (argCheck == 'ëp') {
        return true;
    }
    // No.2222
    // ê‡ñæ:9171
    // 0x9171 (Windows-31J)
    // 0x5009 (UTF-16BE)
    if (argCheck == 'ëq') {
        return true;
    }
    // No.2223
    // ê‡ñæ:9172
    // 0x9172 (Windows-31J)
    // 0x55aa (UTF-16BE)
    if (argCheck == 'ër') {
        return true;
    }
    // No.2224
    // ê‡ñæ:9173
    // 0x9173 (Windows-31J)
    // 0x58ee (UTF-16BE)
    if (argCheck == 'ës') {
        return true;
    }
    // No.2225
    // ê‡ñæ:9174
    // 0x9174 (Windows-31J)
    // 0x594f (UTF-16BE)
    if (argCheck == 'ët') {
        return true;
    }
    // No.2226
    // ê‡ñæ:9175
    // 0x9175 (Windows-31J)
    // 0x723d (UTF-16BE)
    if (argCheck == 'ëu') {
        return true;
    }
    // No.2227
    // ê‡ñæ:9176
    // 0x9176 (Windows-31J)
    // 0x5b8b (UTF-16BE)
    if (argCheck == 'ëv') {
        return true;
    }
    // No.2228
    // ê‡ñæ:9177
    // 0x9177 (Windows-31J)
    // 0x5c64 (UTF-16BE)
    if (argCheck == 'ëw') {
        return true;
    }
    // No.2229
    // ê‡ñæ:9178
    // 0x9178 (Windows-31J)
    // 0x531d (UTF-16BE)
    if (argCheck == 'ëx') {
        return true;
    }
    // No.2230
    // ê‡ñæ:9179
    // 0x9179 (Windows-31J)
    // 0x60e3 (UTF-16BE)
    if (argCheck == 'ëy') {
        return true;
    }
    // No.2231
    // ê‡ñæ:917a
    // 0x917a (Windows-31J)
    // 0x60f3 (UTF-16BE)
    if (argCheck == 'ëz') {
        return true;
    }
    // No.2232
    // ê‡ñæ:917b
    // 0x917b (Windows-31J)
    // 0x635c (UTF-16BE)
    if (argCheck == 'ë{') {
        return true;
    }
    // No.2233
    // ê‡ñæ:917c
    // 0x917c (Windows-31J)
    // 0x6383 (UTF-16BE)
    if (argCheck == 'ë|') {
        return true;
    }
    // No.2234
    // ê‡ñæ:917d
    // 0x917d (Windows-31J)
    // 0x633f (UTF-16BE)
    if (argCheck == 'ë}') {
        return true;
    }
    // No.2235
    // ê‡ñæ:917e
    // 0x917e (Windows-31J)
    // 0x63bb (UTF-16BE)
    if (argCheck == 'ë~') {
        return true;
    }
    // No.2236
    // ê‡ñæ:9180
    // 0x9180 (Windows-31J)
    // 0x64cd (UTF-16BE)
    if (argCheck == 'ëÄ') {
        return true;
    }
    // No.2237
    // ê‡ñæ:9181
    // 0x9181 (Windows-31J)
    // 0x65e9 (UTF-16BE)
    if (argCheck == 'ëÅ') {
        return true;
    }
    // No.2238
    // ê‡ñæ:9182
    // 0x9182 (Windows-31J)
    // 0x66f9 (UTF-16BE)
    if (argCheck == 'ëÇ') {
        return true;
    }
    // No.2239
    // ê‡ñæ:9183
    // 0x9183 (Windows-31J)
    // 0x5de3 (UTF-16BE)
    if (argCheck == 'ëÉ') {
        return true;
    }
    // No.2240
    // ê‡ñæ:9184
    // 0x9184 (Windows-31J)
    // 0x69cd (UTF-16BE)
    if (argCheck == 'ëÑ') {
        return true;
    }
    // No.2241
    // ê‡ñæ:9185
    // 0x9185 (Windows-31J)
    // 0x69fd (UTF-16BE)
    if (argCheck == 'ëÖ') {
        return true;
    }
    // No.2242
    // ê‡ñæ:9186
    // 0x9186 (Windows-31J)
    // 0x6f15 (UTF-16BE)
    if (argCheck == 'ëÜ') {
        return true;
    }
    // No.2243
    // ê‡ñæ:9187
    // 0x9187 (Windows-31J)
    // 0x71e5 (UTF-16BE)
    if (argCheck == 'ëá') {
        return true;
    }
    // No.2244
    // ê‡ñæ:9188
    // 0x9188 (Windows-31J)
    // 0x4e89 (UTF-16BE)
    if (argCheck == 'ëà') {
        return true;
    }
    // No.2245
    // ê‡ñæ:9189
    // 0x9189 (Windows-31J)
    // 0x75e9 (UTF-16BE)
    if (argCheck == 'ëâ') {
        return true;
    }
    // No.2246
    // ê‡ñæ:918a
    // 0x918a (Windows-31J)
    // 0x76f8 (UTF-16BE)
    if (argCheck == 'ëä') {
        return true;
    }
    // No.2247
    // ê‡ñæ:918b
    // 0x918b (Windows-31J)
    // 0x7a93 (UTF-16BE)
    if (argCheck == 'ëã') {
        return true;
    }
    // No.2248
    // ê‡ñæ:918c
    // 0x918c (Windows-31J)
    // 0x7cdf (UTF-16BE)
    if (argCheck == 'ëå') {
        return true;
    }
    // No.2249
    // ê‡ñæ:918d
    // 0x918d (Windows-31J)
    // 0x7dcf (UTF-16BE)
    if (argCheck == 'ëç') {
        return true;
    }
    // No.2250
    // ê‡ñæ:918e
    // 0x918e (Windows-31J)
    // 0x7d9c (UTF-16BE)
    if (argCheck == 'ëé') {
        return true;
    }
    // No.2251
    // ê‡ñæ:918f
    // 0x918f (Windows-31J)
    // 0x8061 (UTF-16BE)
    if (argCheck == 'ëè') {
        return true;
    }
    // No.2252
    // ê‡ñæ:9190
    // 0x9190 (Windows-31J)
    // 0x8349 (UTF-16BE)
    if (argCheck == 'ëê') {
        return true;
    }
    // No.2253
    // ê‡ñæ:9191
    // 0x9191 (Windows-31J)
    // 0x8358 (UTF-16BE)
    if (argCheck == 'ëë') {
        return true;
    }
    // No.2254
    // ê‡ñæ:9192
    // 0x9192 (Windows-31J)
    // 0x846c (UTF-16BE)
    if (argCheck == 'ëí') {
        return true;
    }
    // No.2255
    // ê‡ñæ:9193
    // 0x9193 (Windows-31J)
    // 0x84bc (UTF-16BE)
    if (argCheck == 'ëì') {
        return true;
    }
    // No.2256
    // ê‡ñæ:9194
    // 0x9194 (Windows-31J)
    // 0x85fb (UTF-16BE)
    if (argCheck == 'ëî') {
        return true;
    }
    // No.2257
    // ê‡ñæ:9195
    // 0x9195 (Windows-31J)
    // 0x88c5 (UTF-16BE)
    if (argCheck == 'ëï') {
        return true;
    }
    // No.2258
    // ê‡ñæ:9196
    // 0x9196 (Windows-31J)
    // 0x8d70 (UTF-16BE)
    if (argCheck == 'ëñ') {
        return true;
    }
    // No.2259
    // ê‡ñæ:9197
    // 0x9197 (Windows-31J)
    // 0x9001 (UTF-16BE)
    if (argCheck == 'ëó') {
        return true;
    }
    // No.2260
    // ê‡ñæ:9198
    // 0x9198 (Windows-31J)
    // 0x906d (UTF-16BE)
    if (argCheck == 'ëò') {
        return true;
    }
    // No.2261
    // ê‡ñæ:9199
    // 0x9199 (Windows-31J)
    // 0x9397 (UTF-16BE)
    if (argCheck == 'ëô') {
        return true;
    }
    // No.2262
    // ê‡ñæ:919a
    // 0x919a (Windows-31J)
    // 0x971c (UTF-16BE)
    if (argCheck == 'ëö') {
        return true;
    }
    // No.2263
    // ê‡ñæ:919b
    // 0x919b (Windows-31J)
    // 0x9a12 (UTF-16BE)
    if (argCheck == 'ëõ') {
        return true;
    }
    // No.2264
    // ê‡ñæ:919c
    // 0x919c (Windows-31J)
    // 0x50cf (UTF-16BE)
    if (argCheck == 'ëú') {
        return true;
    }
    // No.2265
    // ê‡ñæ:919d
    // 0x919d (Windows-31J)
    // 0x5897 (UTF-16BE)
    if (argCheck == 'ëù') {
        return true;
    }
    // No.2266
    // ê‡ñæ:919e
    // 0x919e (Windows-31J)
    // 0x618e (UTF-16BE)
    if (argCheck == 'ëû') {
        return true;
    }
    // No.2267
    // ê‡ñæ:919f
    // 0x919f (Windows-31J)
    // 0x81d3 (UTF-16BE)
    if (argCheck == 'ëü') {
        return true;
    }
    // No.2268
    // ê‡ñæ:91a0
    // 0x91a0 (Windows-31J)
    // 0x8535 (UTF-16BE)
    if (argCheck == 'ë†') {
        return true;
    }
    // No.2269
    // ê‡ñæ:91a1
    // 0x91a1 (Windows-31J)
    // 0x8d08 (UTF-16BE)
    if (argCheck == 'ë°') {
        return true;
    }
    // No.2270
    // ê‡ñæ:91a2
    // 0x91a2 (Windows-31J)
    // 0x9020 (UTF-16BE)
    if (argCheck == 'ë¢') {
        return true;
    }
    // No.2271
    // ê‡ñæ:91a3
    // 0x91a3 (Windows-31J)
    // 0x4fc3 (UTF-16BE)
    if (argCheck == 'ë£') {
        return true;
    }
    // No.2272
    // ê‡ñæ:91a4
    // 0x91a4 (Windows-31J)
    // 0x5074 (UTF-16BE)
    if (argCheck == 'ë§') {
        return true;
    }
    // No.2273
    // ê‡ñæ:91a5
    // 0x91a5 (Windows-31J)
    // 0x5247 (UTF-16BE)
    if (argCheck == 'ë•') {
        return true;
    }
    // No.2274
    // ê‡ñæ:91a6
    // 0x91a6 (Windows-31J)
    // 0x5373 (UTF-16BE)
    if (argCheck == 'ë¶') {
        return true;
    }
    // No.2275
    // ê‡ñæ:91a7
    // 0x91a7 (Windows-31J)
    // 0x606f (UTF-16BE)
    if (argCheck == 'ëß') {
        return true;
    }
    // No.2276
    // ê‡ñæ:91a8
    // 0x91a8 (Windows-31J)
    // 0x6349 (UTF-16BE)
    if (argCheck == 'ë®') {
        return true;
    }
    // No.2277
    // ê‡ñæ:91a9
    // 0x91a9 (Windows-31J)
    // 0x675f (UTF-16BE)
    if (argCheck == 'ë©') {
        return true;
    }
    // No.2278
    // ê‡ñæ:91aa
    // 0x91aa (Windows-31J)
    // 0x6e2c (UTF-16BE)
    if (argCheck == 'ë™') {
        return true;
    }
    // No.2279
    // ê‡ñæ:91ab
    // 0x91ab (Windows-31J)
    // 0x8db3 (UTF-16BE)
    if (argCheck == 'ë´') {
        return true;
    }
    // No.2280
    // ê‡ñæ:91ac
    // 0x91ac (Windows-31J)
    // 0x901f (UTF-16BE)
    if (argCheck == 'ë¨') {
        return true;
    }
    // No.2281
    // ê‡ñæ:91ad
    // 0x91ad (Windows-31J)
    // 0x4fd7 (UTF-16BE)
    if (argCheck == 'ë≠') {
        return true;
    }
    // No.2282
    // ê‡ñæ:91ae
    // 0x91ae (Windows-31J)
    // 0x5c5e (UTF-16BE)
    if (argCheck == 'ëÆ') {
        return true;
    }
    // No.2283
    // ê‡ñæ:91af
    // 0x91af (Windows-31J)
    // 0x8cca (UTF-16BE)
    if (argCheck == 'ëØ') {
        return true;
    }
    // No.2284
    // ê‡ñæ:91b0
    // 0x91b0 (Windows-31J)
    // 0x65cf (UTF-16BE)
    if (argCheck == 'ë∞') {
        return true;
    }
    // No.2285
    // ê‡ñæ:91b1
    // 0x91b1 (Windows-31J)
    // 0x7d9a (UTF-16BE)
    if (argCheck == 'ë±') {
        return true;
    }
    // No.2286
    // ê‡ñæ:91b2
    // 0x91b2 (Windows-31J)
    // 0x5352 (UTF-16BE)
    if (argCheck == 'ë≤') {
        return true;
    }
    // No.2287
    // ê‡ñæ:91b3
    // 0x91b3 (Windows-31J)
    // 0x8896 (UTF-16BE)
    if (argCheck == 'ë≥') {
        return true;
    }
    // No.2288
    // ê‡ñæ:91b4
    // 0x91b4 (Windows-31J)
    // 0x5176 (UTF-16BE)
    if (argCheck == 'ë¥') {
        return true;
    }
    // No.2289
    // ê‡ñæ:91b5
    // 0x91b5 (Windows-31J)
    // 0x63c3 (UTF-16BE)
    if (argCheck == 'ëµ') {
        return true;
    }
    // No.2290
    // ê‡ñæ:91b6
    // 0x91b6 (Windows-31J)
    // 0x5b58 (UTF-16BE)
    if (argCheck == 'ë∂') {
        return true;
    }
    // No.2291
    // ê‡ñæ:91b7
    // 0x91b7 (Windows-31J)
    // 0x5b6b (UTF-16BE)
    if (argCheck == 'ë∑') {
        return true;
    }
    // No.2292
    // ê‡ñæ:91b8
    // 0x91b8 (Windows-31J)
    // 0x5c0a (UTF-16BE)
    if (argCheck == 'ë∏') {
        return true;
    }
    // No.2293
    // ê‡ñæ:91b9
    // 0x91b9 (Windows-31J)
    // 0x640d (UTF-16BE)
    if (argCheck == 'ëπ') {
        return true;
    }
    // No.2294
    // ê‡ñæ:91ba
    // 0x91ba (Windows-31J)
    // 0x6751 (UTF-16BE)
    if (argCheck == 'ë∫') {
        return true;
    }
    // No.2295
    // ê‡ñæ:91bb
    // 0x91bb (Windows-31J)
    // 0x905c (UTF-16BE)
    if (argCheck == 'ëª') {
        return true;
    }
    // No.2296
    // ê‡ñæ:91bc
    // 0x91bc (Windows-31J)
    // 0x4ed6 (UTF-16BE)
    if (argCheck == 'ëº') {
        return true;
    }
    // No.2297
    // ê‡ñæ:91bd
    // 0x91bd (Windows-31J)
    // 0x591a (UTF-16BE)
    if (argCheck == 'ëΩ') {
        return true;
    }
    // No.2298
    // ê‡ñæ:91be
    // 0x91be (Windows-31J)
    // 0x592a (UTF-16BE)
    if (argCheck == 'ëæ') {
        return true;
    }
    // No.2299
    // ê‡ñæ:91bf
    // 0x91bf (Windows-31J)
    // 0x6c70 (UTF-16BE)
    if (argCheck == 'ëø') {
        return true;
    }
    // No.2300
    // ê‡ñæ:91c0
    // 0x91c0 (Windows-31J)
    // 0x8a51 (UTF-16BE)
    if (argCheck == 'ë¿') {
        return true;
    }
    // No.2301
    // ê‡ñæ:91c1
    // 0x91c1 (Windows-31J)
    // 0x553e (UTF-16BE)
    if (argCheck == 'ë¡') {
        return true;
    }
    // No.2302
    // ê‡ñæ:91c2
    // 0x91c2 (Windows-31J)
    // 0x5815 (UTF-16BE)
    if (argCheck == 'ë¬') {
        return true;
    }
    // No.2303
    // ê‡ñæ:91c3
    // 0x91c3 (Windows-31J)
    // 0x59a5 (UTF-16BE)
    if (argCheck == 'ë√') {
        return true;
    }
    // No.2304
    // ê‡ñæ:91c4
    // 0x91c4 (Windows-31J)
    // 0x60f0 (UTF-16BE)
    if (argCheck == 'ëƒ') {
        return true;
    }
    // No.2305
    // ê‡ñæ:91c5
    // 0x91c5 (Windows-31J)
    // 0x6253 (UTF-16BE)
    if (argCheck == 'ë≈') {
        return true;
    }
    // No.2306
    // ê‡ñæ:91c6
    // 0x91c6 (Windows-31J)
    // 0x67c1 (UTF-16BE)
    if (argCheck == 'ë∆') {
        return true;
    }
    // No.2307
    // ê‡ñæ:91c7
    // 0x91c7 (Windows-31J)
    // 0x8235 (UTF-16BE)
    if (argCheck == 'ë«') {
        return true;
    }
    // No.2308
    // ê‡ñæ:91c8
    // 0x91c8 (Windows-31J)
    // 0x6955 (UTF-16BE)
    if (argCheck == 'ë»') {
        return true;
    }
    // No.2309
    // ê‡ñæ:91c9
    // 0x91c9 (Windows-31J)
    // 0x9640 (UTF-16BE)
    if (argCheck == 'ë…') {
        return true;
    }
    // No.2310
    // ê‡ñæ:91ca
    // 0x91ca (Windows-31J)
    // 0x99c4 (UTF-16BE)
    if (argCheck == 'ë ') {
        return true;
    }
    // No.2311
    // ê‡ñæ:91cb
    // 0x91cb (Windows-31J)
    // 0x9a28 (UTF-16BE)
    if (argCheck == 'ëÀ') {
        return true;
    }
    // No.2312
    // ê‡ñæ:91cc
    // 0x91cc (Windows-31J)
    // 0x4f53 (UTF-16BE)
    if (argCheck == 'ëÃ') {
        return true;
    }
    // No.2313
    // ê‡ñæ:91cd
    // 0x91cd (Windows-31J)
    // 0x5806 (UTF-16BE)
    if (argCheck == 'ëÕ') {
        return true;
    }
    // No.2314
    // ê‡ñæ:91ce
    // 0x91ce (Windows-31J)
    // 0x5bfe (UTF-16BE)
    if (argCheck == 'ëŒ') {
        return true;
    }
    // No.2315
    // ê‡ñæ:91cf
    // 0x91cf (Windows-31J)
    // 0x8010 (UTF-16BE)
    if (argCheck == 'ëœ') {
        return true;
    }
    // No.2316
    // ê‡ñæ:91d0
    // 0x91d0 (Windows-31J)
    // 0x5cb1 (UTF-16BE)
    if (argCheck == 'ë–') {
        return true;
    }
    // No.2317
    // ê‡ñæ:91d1
    // 0x91d1 (Windows-31J)
    // 0x5e2f (UTF-16BE)
    if (argCheck == 'ë—') {
        return true;
    }
    // No.2318
    // ê‡ñæ:91d2
    // 0x91d2 (Windows-31J)
    // 0x5f85 (UTF-16BE)
    if (argCheck == 'ë“') {
        return true;
    }
    // No.2319
    // ê‡ñæ:91d3
    // 0x91d3 (Windows-31J)
    // 0x6020 (UTF-16BE)
    if (argCheck == 'ë”') {
        return true;
    }
    // No.2320
    // ê‡ñæ:91d4
    // 0x91d4 (Windows-31J)
    // 0x614b (UTF-16BE)
    if (argCheck == 'ë‘') {
        return true;
    }
    // No.2321
    // ê‡ñæ:91d5
    // 0x91d5 (Windows-31J)
    // 0x6234 (UTF-16BE)
    if (argCheck == 'ë’') {
        return true;
    }
    // No.2322
    // ê‡ñæ:91d6
    // 0x91d6 (Windows-31J)
    // 0x66ff (UTF-16BE)
    if (argCheck == 'ë÷') {
        return true;
    }
    // No.2323
    // ê‡ñæ:91d7
    // 0x91d7 (Windows-31J)
    // 0x6cf0 (UTF-16BE)
    if (argCheck == 'ë◊') {
        return true;
    }
    // No.2324
    // ê‡ñæ:91d8
    // 0x91d8 (Windows-31J)
    // 0x6ede (UTF-16BE)
    if (argCheck == 'ëÿ') {
        return true;
    }
    // No.2325
    // ê‡ñæ:91d9
    // 0x91d9 (Windows-31J)
    // 0x80ce (UTF-16BE)
    if (argCheck == 'ëŸ') {
        return true;
    }
    // No.2326
    // ê‡ñæ:91da
    // 0x91da (Windows-31J)
    // 0x817f (UTF-16BE)
    if (argCheck == 'ë⁄') {
        return true;
    }
    // No.2327
    // ê‡ñæ:91db
    // 0x91db (Windows-31J)
    // 0x82d4 (UTF-16BE)
    if (argCheck == 'ë€') {
        return true;
    }
    // No.2328
    // ê‡ñæ:91dc
    // 0x91dc (Windows-31J)
    // 0x888b (UTF-16BE)
    if (argCheck == 'ë‹') {
        return true;
    }
    // No.2329
    // ê‡ñæ:91dd
    // 0x91dd (Windows-31J)
    // 0x8cb8 (UTF-16BE)
    if (argCheck == 'ë›') {
        return true;
    }
    // No.2330
    // ê‡ñæ:91de
    // 0x91de (Windows-31J)
    // 0x9000 (UTF-16BE)
    if (argCheck == 'ëﬁ') {
        return true;
    }
    // No.2331
    // ê‡ñæ:91df
    // 0x91df (Windows-31J)
    // 0x902e (UTF-16BE)
    if (argCheck == 'ëﬂ') {
        return true;
    }
    // No.2332
    // ê‡ñæ:91e0
    // 0x91e0 (Windows-31J)
    // 0x968a (UTF-16BE)
    if (argCheck == 'ë‡') {
        return true;
    }
    // No.2333
    // ê‡ñæ:91e1
    // 0x91e1 (Windows-31J)
    // 0x9edb (UTF-16BE)
    if (argCheck == 'ë·') {
        return true;
    }
    // No.2334
    // ê‡ñæ:91e2
    // 0x91e2 (Windows-31J)
    // 0x9bdb (UTF-16BE)
    if (argCheck == 'ë‚') {
        return true;
    }
    // No.2335
    // ê‡ñæ:91e3
    // 0x91e3 (Windows-31J)
    // 0x4ee3 (UTF-16BE)
    if (argCheck == 'ë„') {
        return true;
    }
    // No.2336
    // ê‡ñæ:91e4
    // 0x91e4 (Windows-31J)
    // 0x53f0 (UTF-16BE)
    if (argCheck == 'ë‰') {
        return true;
    }
    // No.2337
    // ê‡ñæ:91e5
    // 0x91e5 (Windows-31J)
    // 0x5927 (UTF-16BE)
    if (argCheck == 'ëÂ') {
        return true;
    }
    // No.2338
    // ê‡ñæ:91e6
    // 0x91e6 (Windows-31J)
    // 0x7b2c (UTF-16BE)
    if (argCheck == 'ëÊ') {
        return true;
    }
    // No.2339
    // ê‡ñæ:91e7
    // 0x91e7 (Windows-31J)
    // 0x918d (UTF-16BE)
    if (argCheck == 'ëÁ') {
        return true;
    }
    // No.2340
    // ê‡ñæ:91e8
    // 0x91e8 (Windows-31J)
    // 0x984c (UTF-16BE)
    if (argCheck == 'ëË') {
        return true;
    }
    // No.2341
    // ê‡ñæ:91e9
    // 0x91e9 (Windows-31J)
    // 0x9df9 (UTF-16BE)
    if (argCheck == 'ëÈ') {
        return true;
    }
    // No.2342
    // ê‡ñæ:91ea
    // 0x91ea (Windows-31J)
    // 0x6edd (UTF-16BE)
    if (argCheck == 'ëÍ') {
        return true;
    }
    // No.2343
    // ê‡ñæ:91eb
    // 0x91eb (Windows-31J)
    // 0x7027 (UTF-16BE)
    if (argCheck == 'ëÎ') {
        return true;
    }
    // No.2344
    // ê‡ñæ:91ec
    // 0x91ec (Windows-31J)
    // 0x5353 (UTF-16BE)
    if (argCheck == 'ëÏ') {
        return true;
    }
    // No.2345
    // ê‡ñæ:91ed
    // 0x91ed (Windows-31J)
    // 0x5544 (UTF-16BE)
    if (argCheck == 'ëÌ') {
        return true;
    }
    // No.2346
    // ê‡ñæ:91ee
    // 0x91ee (Windows-31J)
    // 0x5b85 (UTF-16BE)
    if (argCheck == 'ëÓ') {
        return true;
    }
    // No.2347
    // ê‡ñæ:91ef
    // 0x91ef (Windows-31J)
    // 0x6258 (UTF-16BE)
    if (argCheck == 'ëÔ') {
        return true;
    }
    // No.2348
    // ê‡ñæ:91f0
    // 0x91f0 (Windows-31J)
    // 0x629e (UTF-16BE)
    if (argCheck == 'ë') {
        return true;
    }
    // No.2349
    // ê‡ñæ:91f1
    // 0x91f1 (Windows-31J)
    // 0x62d3 (UTF-16BE)
    if (argCheck == 'ëÒ') {
        return true;
    }
    // No.2350
    // ê‡ñæ:91f2
    // 0x91f2 (Windows-31J)
    // 0x6ca2 (UTF-16BE)
    if (argCheck == 'ëÚ') {
        return true;
    }
    // No.2351
    // ê‡ñæ:91f3
    // 0x91f3 (Windows-31J)
    // 0x6fef (UTF-16BE)
    if (argCheck == 'ëÛ') {
        return true;
    }
    // No.2352
    // ê‡ñæ:91f4
    // 0x91f4 (Windows-31J)
    // 0x7422 (UTF-16BE)
    if (argCheck == 'ëÙ') {
        return true;
    }
    // No.2353
    // ê‡ñæ:91f5
    // 0x91f5 (Windows-31J)
    // 0x8a17 (UTF-16BE)
    if (argCheck == 'ëı') {
        return true;
    }
    // No.2354
    // ê‡ñæ:91f6
    // 0x91f6 (Windows-31J)
    // 0x9438 (UTF-16BE)
    if (argCheck == 'ëˆ') {
        return true;
    }
    // No.2355
    // ê‡ñæ:91f7
    // 0x91f7 (Windows-31J)
    // 0x6fc1 (UTF-16BE)
    if (argCheck == 'ë˜') {
        return true;
    }
    // No.2356
    // ê‡ñæ:91f8
    // 0x91f8 (Windows-31J)
    // 0x8afe (UTF-16BE)
    if (argCheck == 'ë¯') {
        return true;
    }
    // No.2357
    // ê‡ñæ:91f9
    // 0x91f9 (Windows-31J)
    // 0x8338 (UTF-16BE)
    if (argCheck == 'ë˘') {
        return true;
    }
    // No.2358
    // ê‡ñæ:91fa
    // 0x91fa (Windows-31J)
    // 0x51e7 (UTF-16BE)
    if (argCheck == 'ë˙') {
        return true;
    }
    // No.2359
    // ê‡ñæ:91fb
    // 0x91fb (Windows-31J)
    // 0x86f8 (UTF-16BE)
    if (argCheck == 'ë˚') {
        return true;
    }
    // No.2360
    // ê‡ñæ:91fc
    // 0x91fc (Windows-31J)
    // 0x53ea (UTF-16BE)
    if (argCheck == 'ë¸') {
        return true;
    }
    // No.2361
    // ê‡ñæ:9240
    // 0x9240 (Windows-31J)
    // 0x53e9 (UTF-16BE)
    if (argCheck == 'í@') {
        return true;
    }
    // No.2362
    // ê‡ñæ:9241
    // 0x9241 (Windows-31J)
    // 0x4f46 (UTF-16BE)
    if (argCheck == 'íA') {
        return true;
    }
    // No.2363
    // ê‡ñæ:9242
    // 0x9242 (Windows-31J)
    // 0x9054 (UTF-16BE)
    if (argCheck == 'íB') {
        return true;
    }
    // No.2364
    // ê‡ñæ:9243
    // 0x9243 (Windows-31J)
    // 0x8fb0 (UTF-16BE)
    if (argCheck == 'íC') {
        return true;
    }
    // No.2365
    // ê‡ñæ:9244
    // 0x9244 (Windows-31J)
    // 0x596a (UTF-16BE)
    if (argCheck == 'íD') {
        return true;
    }
    // No.2366
    // ê‡ñæ:9245
    // 0x9245 (Windows-31J)
    // 0x8131 (UTF-16BE)
    if (argCheck == 'íE') {
        return true;
    }
    // No.2367
    // ê‡ñæ:9246
    // 0x9246 (Windows-31J)
    // 0x5dfd (UTF-16BE)
    if (argCheck == 'íF') {
        return true;
    }
    // No.2368
    // ê‡ñæ:9247
    // 0x9247 (Windows-31J)
    // 0x7aea (UTF-16BE)
    if (argCheck == 'íG') {
        return true;
    }
    // No.2369
    // ê‡ñæ:9248
    // 0x9248 (Windows-31J)
    // 0x8fbf (UTF-16BE)
    if (argCheck == 'íH') {
        return true;
    }
    // No.2370
    // ê‡ñæ:9249
    // 0x9249 (Windows-31J)
    // 0x68da (UTF-16BE)
    if (argCheck == 'íI') {
        return true;
    }
    // No.2371
    // ê‡ñæ:924a
    // 0x924a (Windows-31J)
    // 0x8c37 (UTF-16BE)
    if (argCheck == 'íJ') {
        return true;
    }
    // No.2372
    // ê‡ñæ:924b
    // 0x924b (Windows-31J)
    // 0x72f8 (UTF-16BE)
    if (argCheck == 'íK') {
        return true;
    }
    // No.2373
    // ê‡ñæ:924c
    // 0x924c (Windows-31J)
    // 0x9c48 (UTF-16BE)
    if (argCheck == 'íL') {
        return true;
    }
    // No.2374
    // ê‡ñæ:924d
    // 0x924d (Windows-31J)
    // 0x6a3d (UTF-16BE)
    if (argCheck == 'íM') {
        return true;
    }
    // No.2375
    // ê‡ñæ:924e
    // 0x924e (Windows-31J)
    // 0x8ab0 (UTF-16BE)
    if (argCheck == 'íN') {
        return true;
    }
    // No.2376
    // ê‡ñæ:924f
    // 0x924f (Windows-31J)
    // 0x4e39 (UTF-16BE)
    if (argCheck == 'íO') {
        return true;
    }
    // No.2377
    // ê‡ñæ:9250
    // 0x9250 (Windows-31J)
    // 0x5358 (UTF-16BE)
    if (argCheck == 'íP') {
        return true;
    }
    // No.2378
    // ê‡ñæ:9251
    // 0x9251 (Windows-31J)
    // 0x5606 (UTF-16BE)
    if (argCheck == 'íQ') {
        return true;
    }
    // No.2379
    // ê‡ñæ:9252
    // 0x9252 (Windows-31J)
    // 0x5766 (UTF-16BE)
    if (argCheck == 'íR') {
        return true;
    }
    // No.2380
    // ê‡ñæ:9253
    // 0x9253 (Windows-31J)
    // 0x62c5 (UTF-16BE)
    if (argCheck == 'íS') {
        return true;
    }
    // No.2381
    // ê‡ñæ:9254
    // 0x9254 (Windows-31J)
    // 0x63a2 (UTF-16BE)
    if (argCheck == 'íT') {
        return true;
    }
    // No.2382
    // ê‡ñæ:9255
    // 0x9255 (Windows-31J)
    // 0x65e6 (UTF-16BE)
    if (argCheck == 'íU') {
        return true;
    }
    // No.2383
    // ê‡ñæ:9256
    // 0x9256 (Windows-31J)
    // 0x6b4e (UTF-16BE)
    if (argCheck == 'íV') {
        return true;
    }
    // No.2384
    // ê‡ñæ:9257
    // 0x9257 (Windows-31J)
    // 0x6de1 (UTF-16BE)
    if (argCheck == 'íW') {
        return true;
    }
    // No.2385
    // ê‡ñæ:9258
    // 0x9258 (Windows-31J)
    // 0x6e5b (UTF-16BE)
    if (argCheck == 'íX') {
        return true;
    }
    // No.2386
    // ê‡ñæ:9259
    // 0x9259 (Windows-31J)
    // 0x70ad (UTF-16BE)
    if (argCheck == 'íY') {
        return true;
    }
    // No.2387
    // ê‡ñæ:925a
    // 0x925a (Windows-31J)
    // 0x77ed (UTF-16BE)
    if (argCheck == 'íZ') {
        return true;
    }
    // No.2388
    // ê‡ñæ:925b
    // 0x925b (Windows-31J)
    // 0x7aef (UTF-16BE)
    if (argCheck == 'í[') {
        return true;
    }
    // No.2389
    // ê‡ñæ:925c
    // 0x925c (Windows-31J)
    // 0x7baa (UTF-16BE)
    if (argCheck == 'í\') {
        return true;
    }
    // No.2390
    // ê‡ñæ:925d
    // 0x925d (Windows-31J)
    // 0x7dbb (UTF-16BE)
    if (argCheck == 'í]') {
        return true;
    }
    // No.2391
    // ê‡ñæ:925e
    // 0x925e (Windows-31J)
    // 0x803d (UTF-16BE)
    if (argCheck == 'í^') {
        return true;
    }
    // No.2392
    // ê‡ñæ:925f
    // 0x925f (Windows-31J)
    // 0x80c6 (UTF-16BE)
    if (argCheck == 'í_') {
        return true;
    }
    // No.2393
    // ê‡ñæ:9260
    // 0x9260 (Windows-31J)
    // 0x86cb (UTF-16BE)
    if (argCheck == 'í`') {
        return true;
    }
    // No.2394
    // ê‡ñæ:9261
    // 0x9261 (Windows-31J)
    // 0x8a95 (UTF-16BE)
    if (argCheck == 'ía') {
        return true;
    }
    // No.2395
    // ê‡ñæ:9262
    // 0x9262 (Windows-31J)
    // 0x935b (UTF-16BE)
    if (argCheck == 'íb') {
        return true;
    }
    // No.2396
    // ê‡ñæ:9263
    // 0x9263 (Windows-31J)
    // 0x56e3 (UTF-16BE)
    if (argCheck == 'íc') {
        return true;
    }
    // No.2397
    // ê‡ñæ:9264
    // 0x9264 (Windows-31J)
    // 0x58c7 (UTF-16BE)
    if (argCheck == 'íd') {
        return true;
    }
    // No.2398
    // ê‡ñæ:9265
    // 0x9265 (Windows-31J)
    // 0x5f3e (UTF-16BE)
    if (argCheck == 'íe') {
        return true;
    }
    // No.2399
    // ê‡ñæ:9266
    // 0x9266 (Windows-31J)
    // 0x65ad (UTF-16BE)
    if (argCheck == 'íf') {
        return true;
    }
    // No.2400
    // ê‡ñæ:9267
    // 0x9267 (Windows-31J)
    // 0x6696 (UTF-16BE)
    if (argCheck == 'íg') {
        return true;
    }
    // No.2401
    // ê‡ñæ:9268
    // 0x9268 (Windows-31J)
    // 0x6a80 (UTF-16BE)
    if (argCheck == 'íh') {
        return true;
    }
    // No.2402
    // ê‡ñæ:9269
    // 0x9269 (Windows-31J)
    // 0x6bb5 (UTF-16BE)
    if (argCheck == 'íi') {
        return true;
    }
    // No.2403
    // ê‡ñæ:926a
    // 0x926a (Windows-31J)
    // 0x7537 (UTF-16BE)
    if (argCheck == 'íj') {
        return true;
    }
    // No.2404
    // ê‡ñæ:926b
    // 0x926b (Windows-31J)
    // 0x8ac7 (UTF-16BE)
    if (argCheck == 'ík') {
        return true;
    }
    // No.2405
    // ê‡ñæ:926c
    // 0x926c (Windows-31J)
    // 0x5024 (UTF-16BE)
    if (argCheck == 'íl') {
        return true;
    }
    // No.2406
    // ê‡ñæ:926d
    // 0x926d (Windows-31J)
    // 0x77e5 (UTF-16BE)
    if (argCheck == 'ím') {
        return true;
    }
    // No.2407
    // ê‡ñæ:926e
    // 0x926e (Windows-31J)
    // 0x5730 (UTF-16BE)
    if (argCheck == 'ín') {
        return true;
    }
    // No.2408
    // ê‡ñæ:926f
    // 0x926f (Windows-31J)
    // 0x5f1b (UTF-16BE)
    if (argCheck == 'ío') {
        return true;
    }
    // No.2409
    // ê‡ñæ:9270
    // 0x9270 (Windows-31J)
    // 0x6065 (UTF-16BE)
    if (argCheck == 'íp') {
        return true;
    }
    // No.2410
    // ê‡ñæ:9271
    // 0x9271 (Windows-31J)
    // 0x667a (UTF-16BE)
    if (argCheck == 'íq') {
        return true;
    }
    // No.2411
    // ê‡ñæ:9272
    // 0x9272 (Windows-31J)
    // 0x6c60 (UTF-16BE)
    if (argCheck == 'ír') {
        return true;
    }
    // No.2412
    // ê‡ñæ:9273
    // 0x9273 (Windows-31J)
    // 0x75f4 (UTF-16BE)
    if (argCheck == 'ís') {
        return true;
    }
    // No.2413
    // ê‡ñæ:9274
    // 0x9274 (Windows-31J)
    // 0x7a1a (UTF-16BE)
    if (argCheck == 'ít') {
        return true;
    }
    // No.2414
    // ê‡ñæ:9275
    // 0x9275 (Windows-31J)
    // 0x7f6e (UTF-16BE)
    if (argCheck == 'íu') {
        return true;
    }
    // No.2415
    // ê‡ñæ:9276
    // 0x9276 (Windows-31J)
    // 0x81f4 (UTF-16BE)
    if (argCheck == 'ív') {
        return true;
    }
    // No.2416
    // ê‡ñæ:9277
    // 0x9277 (Windows-31J)
    // 0x8718 (UTF-16BE)
    if (argCheck == 'íw') {
        return true;
    }
    // No.2417
    // ê‡ñæ:9278
    // 0x9278 (Windows-31J)
    // 0x9045 (UTF-16BE)
    if (argCheck == 'íx') {
        return true;
    }
    // No.2418
    // ê‡ñæ:9279
    // 0x9279 (Windows-31J)
    // 0x99b3 (UTF-16BE)
    if (argCheck == 'íy') {
        return true;
    }
    // No.2419
    // ê‡ñæ:927a
    // 0x927a (Windows-31J)
    // 0x7bc9 (UTF-16BE)
    if (argCheck == 'íz') {
        return true;
    }
    // No.2420
    // ê‡ñæ:927b
    // 0x927b (Windows-31J)
    // 0x755c (UTF-16BE)
    if (argCheck == 'í{') {
        return true;
    }
    // No.2421
    // ê‡ñæ:927c
    // 0x927c (Windows-31J)
    // 0x7af9 (UTF-16BE)
    if (argCheck == 'í|') {
        return true;
    }
    // No.2422
    // ê‡ñæ:927d
    // 0x927d (Windows-31J)
    // 0x7b51 (UTF-16BE)
    if (argCheck == 'í}') {
        return true;
    }
    // No.2423
    // ê‡ñæ:927e
    // 0x927e (Windows-31J)
    // 0x84c4 (UTF-16BE)
    if (argCheck == 'í~') {
        return true;
    }
    // No.2424
    // ê‡ñæ:9280
    // 0x9280 (Windows-31J)
    // 0x9010 (UTF-16BE)
    if (argCheck == 'íÄ') {
        return true;
    }
    // No.2425
    // ê‡ñæ:9281
    // 0x9281 (Windows-31J)
    // 0x79e9 (UTF-16BE)
    if (argCheck == 'íÅ') {
        return true;
    }
    // No.2426
    // ê‡ñæ:9282
    // 0x9282 (Windows-31J)
    // 0x7a92 (UTF-16BE)
    if (argCheck == 'íÇ') {
        return true;
    }
    // No.2427
    // ê‡ñæ:9283
    // 0x9283 (Windows-31J)
    // 0x8336 (UTF-16BE)
    if (argCheck == 'íÉ') {
        return true;
    }
    // No.2428
    // ê‡ñæ:9284
    // 0x9284 (Windows-31J)
    // 0x5ae1 (UTF-16BE)
    if (argCheck == 'íÑ') {
        return true;
    }
    // No.2429
    // ê‡ñæ:9285
    // 0x9285 (Windows-31J)
    // 0x7740 (UTF-16BE)
    if (argCheck == 'íÖ') {
        return true;
    }
    // No.2430
    // ê‡ñæ:9286
    // 0x9286 (Windows-31J)
    // 0x4e2d (UTF-16BE)
    if (argCheck == 'íÜ') {
        return true;
    }
    // No.2431
    // ê‡ñæ:9287
    // 0x9287 (Windows-31J)
    // 0x4ef2 (UTF-16BE)
    if (argCheck == 'íá') {
        return true;
    }
    // No.2432
    // ê‡ñæ:9288
    // 0x9288 (Windows-31J)
    // 0x5b99 (UTF-16BE)
    if (argCheck == 'íà') {
        return true;
    }
    // No.2433
    // ê‡ñæ:9289
    // 0x9289 (Windows-31J)
    // 0x5fe0 (UTF-16BE)
    if (argCheck == 'íâ') {
        return true;
    }
    // No.2434
    // ê‡ñæ:928a
    // 0x928a (Windows-31J)
    // 0x62bd (UTF-16BE)
    if (argCheck == 'íä') {
        return true;
    }
    // No.2435
    // ê‡ñæ:928b
    // 0x928b (Windows-31J)
    // 0x663c (UTF-16BE)
    if (argCheck == 'íã') {
        return true;
    }
    // No.2436
    // ê‡ñæ:928c
    // 0x928c (Windows-31J)
    // 0x67f1 (UTF-16BE)
    if (argCheck == 'íå') {
        return true;
    }
    // No.2437
    // ê‡ñæ:928d
    // 0x928d (Windows-31J)
    // 0x6ce8 (UTF-16BE)
    if (argCheck == 'íç') {
        return true;
    }
    // No.2438
    // ê‡ñæ:928e
    // 0x928e (Windows-31J)
    // 0x866b (UTF-16BE)
    if (argCheck == 'íé') {
        return true;
    }
    // No.2439
    // ê‡ñæ:928f
    // 0x928f (Windows-31J)
    // 0x8877 (UTF-16BE)
    if (argCheck == 'íè') {
        return true;
    }
    // No.2440
    // ê‡ñæ:9290
    // 0x9290 (Windows-31J)
    // 0x8a3b (UTF-16BE)
    if (argCheck == 'íê') {
        return true;
    }
    // No.2441
    // ê‡ñæ:9291
    // 0x9291 (Windows-31J)
    // 0x914e (UTF-16BE)
    if (argCheck == 'íë') {
        return true;
    }
    // No.2442
    // ê‡ñæ:9292
    // 0x9292 (Windows-31J)
    // 0x92f3 (UTF-16BE)
    if (argCheck == 'íí') {
        return true;
    }
    // No.2443
    // ê‡ñæ:9293
    // 0x9293 (Windows-31J)
    // 0x99d0 (UTF-16BE)
    if (argCheck == 'íì') {
        return true;
    }
    // No.2444
    // ê‡ñæ:9294
    // 0x9294 (Windows-31J)
    // 0x6a17 (UTF-16BE)
    if (argCheck == 'íî') {
        return true;
    }
    // No.2445
    // ê‡ñæ:9295
    // 0x9295 (Windows-31J)
    // 0x7026 (UTF-16BE)
    if (argCheck == 'íï') {
        return true;
    }
    // No.2446
    // ê‡ñæ:9296
    // 0x9296 (Windows-31J)
    // 0x732a (UTF-16BE)
    if (argCheck == 'íñ') {
        return true;
    }
    // No.2447
    // ê‡ñæ:9297
    // 0x9297 (Windows-31J)
    // 0x82e7 (UTF-16BE)
    if (argCheck == 'íó') {
        return true;
    }
    // No.2448
    // ê‡ñæ:9298
    // 0x9298 (Windows-31J)
    // 0x8457 (UTF-16BE)
    if (argCheck == 'íò') {
        return true;
    }
    // No.2449
    // ê‡ñæ:9299
    // 0x9299 (Windows-31J)
    // 0x8caf (UTF-16BE)
    if (argCheck == 'íô') {
        return true;
    }
    // No.2450
    // ê‡ñæ:929a
    // 0x929a (Windows-31J)
    // 0x4e01 (UTF-16BE)
    if (argCheck == 'íö') {
        return true;
    }
    // No.2451
    // ê‡ñæ:929b
    // 0x929b (Windows-31J)
    // 0x5146 (UTF-16BE)
    if (argCheck == 'íõ') {
        return true;
    }
    // No.2452
    // ê‡ñæ:929c
    // 0x929c (Windows-31J)
    // 0x51cb (UTF-16BE)
    if (argCheck == 'íú') {
        return true;
    }
    // No.2453
    // ê‡ñæ:929d
    // 0x929d (Windows-31J)
    // 0x558b (UTF-16BE)
    if (argCheck == 'íù') {
        return true;
    }
    // No.2454
    // ê‡ñæ:929e
    // 0x929e (Windows-31J)
    // 0x5bf5 (UTF-16BE)
    if (argCheck == 'íû') {
        return true;
    }
    // No.2455
    // ê‡ñæ:929f
    // 0x929f (Windows-31J)
    // 0x5e16 (UTF-16BE)
    if (argCheck == 'íü') {
        return true;
    }
    // No.2456
    // ê‡ñæ:92a0
    // 0x92a0 (Windows-31J)
    // 0x5e33 (UTF-16BE)
    if (argCheck == 'í†') {
        return true;
    }
    // No.2457
    // ê‡ñæ:92a1
    // 0x92a1 (Windows-31J)
    // 0x5e81 (UTF-16BE)
    if (argCheck == 'í°') {
        return true;
    }
    // No.2458
    // ê‡ñæ:92a2
    // 0x92a2 (Windows-31J)
    // 0x5f14 (UTF-16BE)
    if (argCheck == 'í¢') {
        return true;
    }
    // No.2459
    // ê‡ñæ:92a3
    // 0x92a3 (Windows-31J)
    // 0x5f35 (UTF-16BE)
    if (argCheck == 'í£') {
        return true;
    }
    // No.2460
    // ê‡ñæ:92a4
    // 0x92a4 (Windows-31J)
    // 0x5f6b (UTF-16BE)
    if (argCheck == 'í§') {
        return true;
    }
    // No.2461
    // ê‡ñæ:92a5
    // 0x92a5 (Windows-31J)
    // 0x5fb4 (UTF-16BE)
    if (argCheck == 'í•') {
        return true;
    }
    // No.2462
    // ê‡ñæ:92a6
    // 0x92a6 (Windows-31J)
    // 0x61f2 (UTF-16BE)
    if (argCheck == 'í¶') {
        return true;
    }
    // No.2463
    // ê‡ñæ:92a7
    // 0x92a7 (Windows-31J)
    // 0x6311 (UTF-16BE)
    if (argCheck == 'íß') {
        return true;
    }
    // No.2464
    // ê‡ñæ:92a8
    // 0x92a8 (Windows-31J)
    // 0x66a2 (UTF-16BE)
    if (argCheck == 'í®') {
        return true;
    }
    // No.2465
    // ê‡ñæ:92a9
    // 0x92a9 (Windows-31J)
    // 0x671d (UTF-16BE)
    if (argCheck == 'í©') {
        return true;
    }
    // No.2466
    // ê‡ñæ:92aa
    // 0x92aa (Windows-31J)
    // 0x6f6e (UTF-16BE)
    if (argCheck == 'í™') {
        return true;
    }
    // No.2467
    // ê‡ñæ:92ab
    // 0x92ab (Windows-31J)
    // 0x7252 (UTF-16BE)
    if (argCheck == 'í´') {
        return true;
    }
    // No.2468
    // ê‡ñæ:92ac
    // 0x92ac (Windows-31J)
    // 0x753a (UTF-16BE)
    if (argCheck == 'í¨') {
        return true;
    }
    // No.2469
    // ê‡ñæ:92ad
    // 0x92ad (Windows-31J)
    // 0x773a (UTF-16BE)
    if (argCheck == 'í≠') {
        return true;
    }
    // No.2470
    // ê‡ñæ:92ae
    // 0x92ae (Windows-31J)
    // 0x8074 (UTF-16BE)
    if (argCheck == 'íÆ') {
        return true;
    }
    // No.2471
    // ê‡ñæ:92af
    // 0x92af (Windows-31J)
    // 0x8139 (UTF-16BE)
    if (argCheck == 'íØ') {
        return true;
    }
    // No.2472
    // ê‡ñæ:92b0
    // 0x92b0 (Windows-31J)
    // 0x8178 (UTF-16BE)
    if (argCheck == 'í∞') {
        return true;
    }
    // No.2473
    // ê‡ñæ:92b1
    // 0x92b1 (Windows-31J)
    // 0x8776 (UTF-16BE)
    if (argCheck == 'í±') {
        return true;
    }
    // No.2474
    // ê‡ñæ:92b2
    // 0x92b2 (Windows-31J)
    // 0x8abf (UTF-16BE)
    if (argCheck == 'í≤') {
        return true;
    }
    // No.2475
    // ê‡ñæ:92b3
    // 0x92b3 (Windows-31J)
    // 0x8adc (UTF-16BE)
    if (argCheck == 'í≥') {
        return true;
    }
    // No.2476
    // ê‡ñæ:92b4
    // 0x92b4 (Windows-31J)
    // 0x8d85 (UTF-16BE)
    if (argCheck == 'í¥') {
        return true;
    }
    // No.2477
    // ê‡ñæ:92b5
    // 0x92b5 (Windows-31J)
    // 0x8df3 (UTF-16BE)
    if (argCheck == 'íµ') {
        return true;
    }
    // No.2478
    // ê‡ñæ:92b6
    // 0x92b6 (Windows-31J)
    // 0x929a (UTF-16BE)
    if (argCheck == 'í∂') {
        return true;
    }
    // No.2479
    // ê‡ñæ:92b7
    // 0x92b7 (Windows-31J)
    // 0x9577 (UTF-16BE)
    if (argCheck == 'í∑') {
        return true;
    }
    // No.2480
    // ê‡ñæ:92b8
    // 0x92b8 (Windows-31J)
    // 0x9802 (UTF-16BE)
    if (argCheck == 'í∏') {
        return true;
    }
    // No.2481
    // ê‡ñæ:92b9
    // 0x92b9 (Windows-31J)
    // 0x9ce5 (UTF-16BE)
    if (argCheck == 'íπ') {
        return true;
    }
    // No.2482
    // ê‡ñæ:92ba
    // 0x92ba (Windows-31J)
    // 0x52c5 (UTF-16BE)
    if (argCheck == 'í∫') {
        return true;
    }
    // No.2483
    // ê‡ñæ:92bb
    // 0x92bb (Windows-31J)
    // 0x6357 (UTF-16BE)
    if (argCheck == 'íª') {
        return true;
    }
    // No.2484
    // ê‡ñæ:92bc
    // 0x92bc (Windows-31J)
    // 0x76f4 (UTF-16BE)
    if (argCheck == 'íº') {
        return true;
    }
    // No.2485
    // ê‡ñæ:92bd
    // 0x92bd (Windows-31J)
    // 0x6715 (UTF-16BE)
    if (argCheck == 'íΩ') {
        return true;
    }
    // No.2486
    // ê‡ñæ:92be
    // 0x92be (Windows-31J)
    // 0x6c88 (UTF-16BE)
    if (argCheck == 'íæ') {
        return true;
    }
    // No.2487
    // ê‡ñæ:92bf
    // 0x92bf (Windows-31J)
    // 0x73cd (UTF-16BE)
    if (argCheck == 'íø') {
        return true;
    }
    // No.2488
    // ê‡ñæ:92c0
    // 0x92c0 (Windows-31J)
    // 0x8cc3 (UTF-16BE)
    if (argCheck == 'í¿') {
        return true;
    }
    // No.2489
    // ê‡ñæ:92c1
    // 0x92c1 (Windows-31J)
    // 0x93ae (UTF-16BE)
    if (argCheck == 'í¡') {
        return true;
    }
    // No.2490
    // ê‡ñæ:92c2
    // 0x92c2 (Windows-31J)
    // 0x9673 (UTF-16BE)
    if (argCheck == 'í¬') {
        return true;
    }
    // No.2491
    // ê‡ñæ:92c3
    // 0x92c3 (Windows-31J)
    // 0x6d25 (UTF-16BE)
    if (argCheck == 'í√') {
        return true;
    }
    // No.2492
    // ê‡ñæ:92c4
    // 0x92c4 (Windows-31J)
    // 0x589c (UTF-16BE)
    if (argCheck == 'íƒ') {
        return true;
    }
    // No.2493
    // ê‡ñæ:92c5
    // 0x92c5 (Windows-31J)
    // 0x690e (UTF-16BE)
    if (argCheck == 'í≈') {
        return true;
    }
    // No.2494
    // ê‡ñæ:92c6
    // 0x92c6 (Windows-31J)
    // 0x69cc (UTF-16BE)
    if (argCheck == 'í∆') {
        return true;
    }
    // No.2495
    // ê‡ñæ:92c7
    // 0x92c7 (Windows-31J)
    // 0x8ffd (UTF-16BE)
    if (argCheck == 'í«') {
        return true;
    }
    // No.2496
    // ê‡ñæ:92c8
    // 0x92c8 (Windows-31J)
    // 0x939a (UTF-16BE)
    if (argCheck == 'í»') {
        return true;
    }
    // No.2497
    // ê‡ñæ:92c9
    // 0x92c9 (Windows-31J)
    // 0x75db (UTF-16BE)
    if (argCheck == 'í…') {
        return true;
    }
    // No.2498
    // ê‡ñæ:92ca
    // 0x92ca (Windows-31J)
    // 0x901a (UTF-16BE)
    if (argCheck == 'í ') {
        return true;
    }
    // No.2499
    // ê‡ñæ:92cb
    // 0x92cb (Windows-31J)
    // 0x585a (UTF-16BE)
    if (argCheck == 'íÀ') {
        return true;
    }
    // No.2500
    // ê‡ñæ:92cc
    // 0x92cc (Windows-31J)
    // 0x6802 (UTF-16BE)
    if (argCheck == 'íÃ') {
        return true;
    }
    // No.2501
    // ê‡ñæ:92cd
    // 0x92cd (Windows-31J)
    // 0x63b4 (UTF-16BE)
    if (argCheck == 'íÕ') {
        return true;
    }
    // No.2502
    // ê‡ñæ:92ce
    // 0x92ce (Windows-31J)
    // 0x69fb (UTF-16BE)
    if (argCheck == 'íŒ') {
        return true;
    }
    // No.2503
    // ê‡ñæ:92cf
    // 0x92cf (Windows-31J)
    // 0x4f43 (UTF-16BE)
    if (argCheck == 'íœ') {
        return true;
    }
    // No.2504
    // ê‡ñæ:92d0
    // 0x92d0 (Windows-31J)
    // 0x6f2c (UTF-16BE)
    if (argCheck == 'í–') {
        return true;
    }
    // No.2505
    // ê‡ñæ:92d1
    // 0x92d1 (Windows-31J)
    // 0x67d8 (UTF-16BE)
    if (argCheck == 'í—') {
        return true;
    }
    // No.2506
    // ê‡ñæ:92d2
    // 0x92d2 (Windows-31J)
    // 0x8fbb (UTF-16BE)
    if (argCheck == 'í“') {
        return true;
    }
    // No.2507
    // ê‡ñæ:92d3
    // 0x92d3 (Windows-31J)
    // 0x8526 (UTF-16BE)
    if (argCheck == 'í”') {
        return true;
    }
    // No.2508
    // ê‡ñæ:92d4
    // 0x92d4 (Windows-31J)
    // 0x7db4 (UTF-16BE)
    if (argCheck == 'í‘') {
        return true;
    }
    // No.2509
    // ê‡ñæ:92d5
    // 0x92d5 (Windows-31J)
    // 0x9354 (UTF-16BE)
    if (argCheck == 'í’') {
        return true;
    }
    // No.2510
    // ê‡ñæ:92d6
    // 0x92d6 (Windows-31J)
    // 0x693f (UTF-16BE)
    if (argCheck == 'í÷') {
        return true;
    }
    // No.2511
    // ê‡ñæ:92d7
    // 0x92d7 (Windows-31J)
    // 0x6f70 (UTF-16BE)
    if (argCheck == 'í◊') {
        return true;
    }
    // No.2512
    // ê‡ñæ:92d8
    // 0x92d8 (Windows-31J)
    // 0x576a (UTF-16BE)
    if (argCheck == 'íÿ') {
        return true;
    }
    // No.2513
    // ê‡ñæ:92d9
    // 0x92d9 (Windows-31J)
    // 0x58f7 (UTF-16BE)
    if (argCheck == 'íŸ') {
        return true;
    }
    // No.2514
    // ê‡ñæ:92da
    // 0x92da (Windows-31J)
    // 0x5b2c (UTF-16BE)
    if (argCheck == 'í⁄') {
        return true;
    }
    // No.2515
    // ê‡ñæ:92db
    // 0x92db (Windows-31J)
    // 0x7d2c (UTF-16BE)
    if (argCheck == 'í€') {
        return true;
    }
    // No.2516
    // ê‡ñæ:92dc
    // 0x92dc (Windows-31J)
    // 0x722a (UTF-16BE)
    if (argCheck == 'í‹') {
        return true;
    }
    // No.2517
    // ê‡ñæ:92dd
    // 0x92dd (Windows-31J)
    // 0x540a (UTF-16BE)
    if (argCheck == 'í›') {
        return true;
    }
    // No.2518
    // ê‡ñæ:92de
    // 0x92de (Windows-31J)
    // 0x91e3 (UTF-16BE)
    if (argCheck == 'íﬁ') {
        return true;
    }
    // No.2519
    // ê‡ñæ:92df
    // 0x92df (Windows-31J)
    // 0x9db4 (UTF-16BE)
    if (argCheck == 'íﬂ') {
        return true;
    }
    // No.2520
    // ê‡ñæ:92e0
    // 0x92e0 (Windows-31J)
    // 0x4ead (UTF-16BE)
    if (argCheck == 'í‡') {
        return true;
    }
    // No.2521
    // ê‡ñæ:92e1
    // 0x92e1 (Windows-31J)
    // 0x4f4e (UTF-16BE)
    if (argCheck == 'í·') {
        return true;
    }
    // No.2522
    // ê‡ñæ:92e2
    // 0x92e2 (Windows-31J)
    // 0x505c (UTF-16BE)
    if (argCheck == 'í‚') {
        return true;
    }
    // No.2523
    // ê‡ñæ:92e3
    // 0x92e3 (Windows-31J)
    // 0x5075 (UTF-16BE)
    if (argCheck == 'í„') {
        return true;
    }
    // No.2524
    // ê‡ñæ:92e4
    // 0x92e4 (Windows-31J)
    // 0x5243 (UTF-16BE)
    if (argCheck == 'í‰') {
        return true;
    }
    // No.2525
    // ê‡ñæ:92e5
    // 0x92e5 (Windows-31J)
    // 0x8c9e (UTF-16BE)
    if (argCheck == 'íÂ') {
        return true;
    }
    // No.2526
    // ê‡ñæ:92e6
    // 0x92e6 (Windows-31J)
    // 0x5448 (UTF-16BE)
    if (argCheck == 'íÊ') {
        return true;
    }
    // No.2527
    // ê‡ñæ:92e7
    // 0x92e7 (Windows-31J)
    // 0x5824 (UTF-16BE)
    if (argCheck == 'íÁ') {
        return true;
    }
    // No.2528
    // ê‡ñæ:92e8
    // 0x92e8 (Windows-31J)
    // 0x5b9a (UTF-16BE)
    if (argCheck == 'íË') {
        return true;
    }
    // No.2529
    // ê‡ñæ:92e9
    // 0x92e9 (Windows-31J)
    // 0x5e1d (UTF-16BE)
    if (argCheck == 'íÈ') {
        return true;
    }
    // No.2530
    // ê‡ñæ:92ea
    // 0x92ea (Windows-31J)
    // 0x5e95 (UTF-16BE)
    if (argCheck == 'íÍ') {
        return true;
    }
    // No.2531
    // ê‡ñæ:92eb
    // 0x92eb (Windows-31J)
    // 0x5ead (UTF-16BE)
    if (argCheck == 'íÎ') {
        return true;
    }
    // No.2532
    // ê‡ñæ:92ec
    // 0x92ec (Windows-31J)
    // 0x5ef7 (UTF-16BE)
    if (argCheck == 'íÏ') {
        return true;
    }
    // No.2533
    // ê‡ñæ:92ed
    // 0x92ed (Windows-31J)
    // 0x5f1f (UTF-16BE)
    if (argCheck == 'íÌ') {
        return true;
    }
    // No.2534
    // ê‡ñæ:92ee
    // 0x92ee (Windows-31J)
    // 0x608c (UTF-16BE)
    if (argCheck == 'íÓ') {
        return true;
    }
    // No.2535
    // ê‡ñæ:92ef
    // 0x92ef (Windows-31J)
    // 0x62b5 (UTF-16BE)
    if (argCheck == 'íÔ') {
        return true;
    }
    // No.2536
    // ê‡ñæ:92f0
    // 0x92f0 (Windows-31J)
    // 0x633a (UTF-16BE)
    if (argCheck == 'í') {
        return true;
    }
    // No.2537
    // ê‡ñæ:92f1
    // 0x92f1 (Windows-31J)
    // 0x63d0 (UTF-16BE)
    if (argCheck == 'íÒ') {
        return true;
    }
    // No.2538
    // ê‡ñæ:92f2
    // 0x92f2 (Windows-31J)
    // 0x68af (UTF-16BE)
    if (argCheck == 'íÚ') {
        return true;
    }
    // No.2539
    // ê‡ñæ:92f3
    // 0x92f3 (Windows-31J)
    // 0x6c40 (UTF-16BE)
    if (argCheck == 'íÛ') {
        return true;
    }
    // No.2540
    // ê‡ñæ:92f4
    // 0x92f4 (Windows-31J)
    // 0x7887 (UTF-16BE)
    if (argCheck == 'íÙ') {
        return true;
    }
    // No.2541
    // ê‡ñæ:92f5
    // 0x92f5 (Windows-31J)
    // 0x798e (UTF-16BE)
    if (argCheck == 'íı') {
        return true;
    }
    // No.2542
    // ê‡ñæ:92f6
    // 0x92f6 (Windows-31J)
    // 0x7a0b (UTF-16BE)
    if (argCheck == 'íˆ') {
        return true;
    }
    // No.2543
    // ê‡ñæ:92f7
    // 0x92f7 (Windows-31J)
    // 0x7de0 (UTF-16BE)
    if (argCheck == 'í˜') {
        return true;
    }
    // No.2544
    // ê‡ñæ:92f8
    // 0x92f8 (Windows-31J)
    // 0x8247 (UTF-16BE)
    if (argCheck == 'í¯') {
        return true;
    }
    // No.2545
    // ê‡ñæ:92f9
    // 0x92f9 (Windows-31J)
    // 0x8a02 (UTF-16BE)
    if (argCheck == 'í˘') {
        return true;
    }
    // No.2546
    // ê‡ñæ:92fa
    // 0x92fa (Windows-31J)
    // 0x8ae6 (UTF-16BE)
    if (argCheck == 'í˙') {
        return true;
    }
    // No.2547
    // ê‡ñæ:92fb
    // 0x92fb (Windows-31J)
    // 0x8e44 (UTF-16BE)
    if (argCheck == 'í˚') {
        return true;
    }
    // No.2548
    // ê‡ñæ:92fc
    // 0x92fc (Windows-31J)
    // 0x9013 (UTF-16BE)
    if (argCheck == 'í¸') {
        return true;
    }
    // No.2549
    // ê‡ñæ:9340
    // 0x9340 (Windows-31J)
    // 0x90b8 (UTF-16BE)
    if (argCheck == 'ì@') {
        return true;
    }
    // No.2550
    // ê‡ñæ:9341
    // 0x9341 (Windows-31J)
    // 0x912d (UTF-16BE)
    if (argCheck == 'ìA') {
        return true;
    }
    // No.2551
    // ê‡ñæ:9342
    // 0x9342 (Windows-31J)
    // 0x91d8 (UTF-16BE)
    if (argCheck == 'ìB') {
        return true;
    }
    // No.2552
    // ê‡ñæ:9343
    // 0x9343 (Windows-31J)
    // 0x9f0e (UTF-16BE)
    if (argCheck == 'ìC') {
        return true;
    }
    // No.2553
    // ê‡ñæ:9344
    // 0x9344 (Windows-31J)
    // 0x6ce5 (UTF-16BE)
    if (argCheck == 'ìD') {
        return true;
    }
    // No.2554
    // ê‡ñæ:9345
    // 0x9345 (Windows-31J)
    // 0x6458 (UTF-16BE)
    if (argCheck == 'ìE') {
        return true;
    }
    // No.2555
    // ê‡ñæ:9346
    // 0x9346 (Windows-31J)
    // 0x64e2 (UTF-16BE)
    if (argCheck == 'ìF') {
        return true;
    }
    // No.2556
    // ê‡ñæ:9347
    // 0x9347 (Windows-31J)
    // 0x6575 (UTF-16BE)
    if (argCheck == 'ìG') {
        return true;
    }
    // No.2557
    // ê‡ñæ:9348
    // 0x9348 (Windows-31J)
    // 0x6ef4 (UTF-16BE)
    if (argCheck == 'ìH') {
        return true;
    }
    // No.2558
    // ê‡ñæ:9349
    // 0x9349 (Windows-31J)
    // 0x7684 (UTF-16BE)
    if (argCheck == 'ìI') {
        return true;
    }
    // No.2559
    // ê‡ñæ:934a
    // 0x934a (Windows-31J)
    // 0x7b1b (UTF-16BE)
    if (argCheck == 'ìJ') {
        return true;
    }
    // No.2560
    // ê‡ñæ:934b
    // 0x934b (Windows-31J)
    // 0x9069 (UTF-16BE)
    if (argCheck == 'ìK') {
        return true;
    }
    // No.2561
    // ê‡ñæ:934c
    // 0x934c (Windows-31J)
    // 0x93d1 (UTF-16BE)
    if (argCheck == 'ìL') {
        return true;
    }
    // No.2562
    // ê‡ñæ:934d
    // 0x934d (Windows-31J)
    // 0x6eba (UTF-16BE)
    if (argCheck == 'ìM') {
        return true;
    }
    // No.2563
    // ê‡ñæ:934e
    // 0x934e (Windows-31J)
    // 0x54f2 (UTF-16BE)
    if (argCheck == 'ìN') {
        return true;
    }
    // No.2564
    // ê‡ñæ:934f
    // 0x934f (Windows-31J)
    // 0x5fb9 (UTF-16BE)
    if (argCheck == 'ìO') {
        return true;
    }
    // No.2565
    // ê‡ñæ:9350
    // 0x9350 (Windows-31J)
    // 0x64a4 (UTF-16BE)
    if (argCheck == 'ìP') {
        return true;
    }
    // No.2566
    // ê‡ñæ:9351
    // 0x9351 (Windows-31J)
    // 0x8f4d (UTF-16BE)
    if (argCheck == 'ìQ') {
        return true;
    }
    // No.2567
    // ê‡ñæ:9352
    // 0x9352 (Windows-31J)
    // 0x8fed (UTF-16BE)
    if (argCheck == 'ìR') {
        return true;
    }
    // No.2568
    // ê‡ñæ:9353
    // 0x9353 (Windows-31J)
    // 0x9244 (UTF-16BE)
    if (argCheck == 'ìS') {
        return true;
    }
    // No.2569
    // ê‡ñæ:9354
    // 0x9354 (Windows-31J)
    // 0x5178 (UTF-16BE)
    if (argCheck == 'ìT') {
        return true;
    }
    // No.2570
    // ê‡ñæ:9355
    // 0x9355 (Windows-31J)
    // 0x586b (UTF-16BE)
    if (argCheck == 'ìU') {
        return true;
    }
    // No.2571
    // ê‡ñæ:9356
    // 0x9356 (Windows-31J)
    // 0x5929 (UTF-16BE)
    if (argCheck == 'ìV') {
        return true;
    }
    // No.2572
    // ê‡ñæ:9357
    // 0x9357 (Windows-31J)
    // 0x5c55 (UTF-16BE)
    if (argCheck == 'ìW') {
        return true;
    }
    // No.2573
    // ê‡ñæ:9358
    // 0x9358 (Windows-31J)
    // 0x5e97 (UTF-16BE)
    if (argCheck == 'ìX') {
        return true;
    }
    // No.2574
    // ê‡ñæ:9359
    // 0x9359 (Windows-31J)
    // 0x6dfb (UTF-16BE)
    if (argCheck == 'ìY') {
        return true;
    }
    // No.2575
    // ê‡ñæ:935a
    // 0x935a (Windows-31J)
    // 0x7e8f (UTF-16BE)
    if (argCheck == 'ìZ') {
        return true;
    }
    // No.2576
    // ê‡ñæ:935b
    // 0x935b (Windows-31J)
    // 0x751c (UTF-16BE)
    if (argCheck == 'ì[') {
        return true;
    }
    // No.2577
    // ê‡ñæ:935c
    // 0x935c (Windows-31J)
    // 0x8cbc (UTF-16BE)
    if (argCheck == 'ì\') {
        return true;
    }
    // No.2578
    // ê‡ñæ:935d
    // 0x935d (Windows-31J)
    // 0x8ee2 (UTF-16BE)
    if (argCheck == 'ì]') {
        return true;
    }
    // No.2579
    // ê‡ñæ:935e
    // 0x935e (Windows-31J)
    // 0x985b (UTF-16BE)
    if (argCheck == 'ì^') {
        return true;
    }
    // No.2580
    // ê‡ñæ:935f
    // 0x935f (Windows-31J)
    // 0x70b9 (UTF-16BE)
    if (argCheck == 'ì_') {
        return true;
    }
    // No.2581
    // ê‡ñæ:9360
    // 0x9360 (Windows-31J)
    // 0x4f1d (UTF-16BE)
    if (argCheck == 'ì`') {
        return true;
    }
    // No.2582
    // ê‡ñæ:9361
    // 0x9361 (Windows-31J)
    // 0x6bbf (UTF-16BE)
    if (argCheck == 'ìa') {
        return true;
    }
    // No.2583
    // ê‡ñæ:9362
    // 0x9362 (Windows-31J)
    // 0x6fb1 (UTF-16BE)
    if (argCheck == 'ìb') {
        return true;
    }
    // No.2584
    // ê‡ñæ:9363
    // 0x9363 (Windows-31J)
    // 0x7530 (UTF-16BE)
    if (argCheck == 'ìc') {
        return true;
    }
    // No.2585
    // ê‡ñæ:9364
    // 0x9364 (Windows-31J)
    // 0x96fb (UTF-16BE)
    if (argCheck == 'ìd') {
        return true;
    }
    // No.2586
    // ê‡ñæ:9365
    // 0x9365 (Windows-31J)
    // 0x514e (UTF-16BE)
    if (argCheck == 'ìe') {
        return true;
    }
    // No.2587
    // ê‡ñæ:9366
    // 0x9366 (Windows-31J)
    // 0x5410 (UTF-16BE)
    if (argCheck == 'ìf') {
        return true;
    }
    // No.2588
    // ê‡ñæ:9367
    // 0x9367 (Windows-31J)
    // 0x5835 (UTF-16BE)
    if (argCheck == 'ìg') {
        return true;
    }
    // No.2589
    // ê‡ñæ:9368
    // 0x9368 (Windows-31J)
    // 0x5857 (UTF-16BE)
    if (argCheck == 'ìh') {
        return true;
    }
    // No.2590
    // ê‡ñæ:9369
    // 0x9369 (Windows-31J)
    // 0x59ac (UTF-16BE)
    if (argCheck == 'ìi') {
        return true;
    }
    // No.2591
    // ê‡ñæ:936a
    // 0x936a (Windows-31J)
    // 0x5c60 (UTF-16BE)
    if (argCheck == 'ìj') {
        return true;
    }
    // No.2592
    // ê‡ñæ:936b
    // 0x936b (Windows-31J)
    // 0x5f92 (UTF-16BE)
    if (argCheck == 'ìk') {
        return true;
    }
    // No.2593
    // ê‡ñæ:936c
    // 0x936c (Windows-31J)
    // 0x6597 (UTF-16BE)
    if (argCheck == 'ìl') {
        return true;
    }
    // No.2594
    // ê‡ñæ:936d
    // 0x936d (Windows-31J)
    // 0x675c (UTF-16BE)
    if (argCheck == 'ìm') {
        return true;
    }
    // No.2595
    // ê‡ñæ:936e
    // 0x936e (Windows-31J)
    // 0x6e21 (UTF-16BE)
    if (argCheck == 'ìn') {
        return true;
    }
    // No.2596
    // ê‡ñæ:936f
    // 0x936f (Windows-31J)
    // 0x767b (UTF-16BE)
    if (argCheck == 'ìo') {
        return true;
    }
    // No.2597
    // ê‡ñæ:9370
    // 0x9370 (Windows-31J)
    // 0x83df (UTF-16BE)
    if (argCheck == 'ìp') {
        return true;
    }
    // No.2598
    // ê‡ñæ:9371
    // 0x9371 (Windows-31J)
    // 0x8ced (UTF-16BE)
    if (argCheck == 'ìq') {
        return true;
    }
    // No.2599
    // ê‡ñæ:9372
    // 0x9372 (Windows-31J)
    // 0x9014 (UTF-16BE)
    if (argCheck == 'ìr') {
        return true;
    }
    // No.2600
    // ê‡ñæ:9373
    // 0x9373 (Windows-31J)
    // 0x90fd (UTF-16BE)
    if (argCheck == 'ìs') {
        return true;
    }
    // No.2601
    // ê‡ñæ:9374
    // 0x9374 (Windows-31J)
    // 0x934d (UTF-16BE)
    if (argCheck == 'ìt') {
        return true;
    }
    // No.2602
    // ê‡ñæ:9375
    // 0x9375 (Windows-31J)
    // 0x7825 (UTF-16BE)
    if (argCheck == 'ìu') {
        return true;
    }
    // No.2603
    // ê‡ñæ:9376
    // 0x9376 (Windows-31J)
    // 0x783a (UTF-16BE)
    if (argCheck == 'ìv') {
        return true;
    }
    // No.2604
    // ê‡ñæ:9377
    // 0x9377 (Windows-31J)
    // 0x52aa (UTF-16BE)
    if (argCheck == 'ìw') {
        return true;
    }
    // No.2605
    // ê‡ñæ:9378
    // 0x9378 (Windows-31J)
    // 0x5ea6 (UTF-16BE)
    if (argCheck == 'ìx') {
        return true;
    }
    // No.2606
    // ê‡ñæ:9379
    // 0x9379 (Windows-31J)
    // 0x571f (UTF-16BE)
    if (argCheck == 'ìy') {
        return true;
    }
    // No.2607
    // ê‡ñæ:937a
    // 0x937a (Windows-31J)
    // 0x5974 (UTF-16BE)
    if (argCheck == 'ìz') {
        return true;
    }
    // No.2608
    // ê‡ñæ:937b
    // 0x937b (Windows-31J)
    // 0x6012 (UTF-16BE)
    if (argCheck == 'ì{') {
        return true;
    }
    // No.2609
    // ê‡ñæ:937c
    // 0x937c (Windows-31J)
    // 0x5012 (UTF-16BE)
    if (argCheck == 'ì|') {
        return true;
    }
    // No.2610
    // ê‡ñæ:937d
    // 0x937d (Windows-31J)
    // 0x515a (UTF-16BE)
    if (argCheck == 'ì}') {
        return true;
    }
    // No.2611
    // ê‡ñæ:937e
    // 0x937e (Windows-31J)
    // 0x51ac (UTF-16BE)
    if (argCheck == 'ì~') {
        return true;
    }
    // No.2612
    // ê‡ñæ:9380
    // 0x9380 (Windows-31J)
    // 0x51cd (UTF-16BE)
    if (argCheck == 'ìÄ') {
        return true;
    }
    // No.2613
    // ê‡ñæ:9381
    // 0x9381 (Windows-31J)
    // 0x5200 (UTF-16BE)
    if (argCheck == 'ìÅ') {
        return true;
    }
    // No.2614
    // ê‡ñæ:9382
    // 0x9382 (Windows-31J)
    // 0x5510 (UTF-16BE)
    if (argCheck == 'ìÇ') {
        return true;
    }
    // No.2615
    // ê‡ñæ:9383
    // 0x9383 (Windows-31J)
    // 0x5854 (UTF-16BE)
    if (argCheck == 'ìÉ') {
        return true;
    }
    // No.2616
    // ê‡ñæ:9384
    // 0x9384 (Windows-31J)
    // 0x5858 (UTF-16BE)
    if (argCheck == 'ìÑ') {
        return true;
    }
    // No.2617
    // ê‡ñæ:9385
    // 0x9385 (Windows-31J)
    // 0x5957 (UTF-16BE)
    if (argCheck == 'ìÖ') {
        return true;
    }
    // No.2618
    // ê‡ñæ:9386
    // 0x9386 (Windows-31J)
    // 0x5b95 (UTF-16BE)
    if (argCheck == 'ìÜ') {
        return true;
    }
    // No.2619
    // ê‡ñæ:9387
    // 0x9387 (Windows-31J)
    // 0x5cf6 (UTF-16BE)
    if (argCheck == 'ìá') {
        return true;
    }
    // No.2620
    // ê‡ñæ:9388
    // 0x9388 (Windows-31J)
    // 0x5d8b (UTF-16BE)
    if (argCheck == 'ìà') {
        return true;
    }
    // No.2621
    // ê‡ñæ:9389
    // 0x9389 (Windows-31J)
    // 0x60bc (UTF-16BE)
    if (argCheck == 'ìâ') {
        return true;
    }
    // No.2622
    // ê‡ñæ:938a
    // 0x938a (Windows-31J)
    // 0x6295 (UTF-16BE)
    if (argCheck == 'ìä') {
        return true;
    }
    // No.2623
    // ê‡ñæ:938b
    // 0x938b (Windows-31J)
    // 0x642d (UTF-16BE)
    if (argCheck == 'ìã') {
        return true;
    }
    // No.2624
    // ê‡ñæ:938c
    // 0x938c (Windows-31J)
    // 0x6771 (UTF-16BE)
    if (argCheck == 'ìå') {
        return true;
    }
    // No.2625
    // ê‡ñæ:938d
    // 0x938d (Windows-31J)
    // 0x6843 (UTF-16BE)
    if (argCheck == 'ìç') {
        return true;
    }
    // No.2626
    // ê‡ñæ:938e
    // 0x938e (Windows-31J)
    // 0x68bc (UTF-16BE)
    if (argCheck == 'ìé') {
        return true;
    }
    // No.2627
    // ê‡ñæ:938f
    // 0x938f (Windows-31J)
    // 0x68df (UTF-16BE)
    if (argCheck == 'ìè') {
        return true;
    }
    // No.2628
    // ê‡ñæ:9390
    // 0x9390 (Windows-31J)
    // 0x76d7 (UTF-16BE)
    if (argCheck == 'ìê') {
        return true;
    }
    // No.2629
    // ê‡ñæ:9391
    // 0x9391 (Windows-31J)
    // 0x6dd8 (UTF-16BE)
    if (argCheck == 'ìë') {
        return true;
    }
    // No.2630
    // ê‡ñæ:9392
    // 0x9392 (Windows-31J)
    // 0x6e6f (UTF-16BE)
    if (argCheck == 'ìí') {
        return true;
    }
    // No.2631
    // ê‡ñæ:9393
    // 0x9393 (Windows-31J)
    // 0x6d9b (UTF-16BE)
    if (argCheck == 'ìì') {
        return true;
    }
    // No.2632
    // ê‡ñæ:9394
    // 0x9394 (Windows-31J)
    // 0x706f (UTF-16BE)
    if (argCheck == 'ìî') {
        return true;
    }
    // No.2633
    // ê‡ñæ:9395
    // 0x9395 (Windows-31J)
    // 0x71c8 (UTF-16BE)
    if (argCheck == 'ìï') {
        return true;
    }
    // No.2634
    // ê‡ñæ:9396
    // 0x9396 (Windows-31J)
    // 0x5f53 (UTF-16BE)
    if (argCheck == 'ìñ') {
        return true;
    }
    // No.2635
    // ê‡ñæ:9397
    // 0x9397 (Windows-31J)
    // 0x75d8 (UTF-16BE)
    if (argCheck == 'ìó') {
        return true;
    }
    // No.2636
    // ê‡ñæ:9398
    // 0x9398 (Windows-31J)
    // 0x7977 (UTF-16BE)
    if (argCheck == 'ìò') {
        return true;
    }
    // No.2637
    // ê‡ñæ:9399
    // 0x9399 (Windows-31J)
    // 0x7b49 (UTF-16BE)
    if (argCheck == 'ìô') {
        return true;
    }
    // No.2638
    // ê‡ñæ:939a
    // 0x939a (Windows-31J)
    // 0x7b54 (UTF-16BE)
    if (argCheck == 'ìö') {
        return true;
    }
    // No.2639
    // ê‡ñæ:939b
    // 0x939b (Windows-31J)
    // 0x7b52 (UTF-16BE)
    if (argCheck == 'ìõ') {
        return true;
    }
    // No.2640
    // ê‡ñæ:939c
    // 0x939c (Windows-31J)
    // 0x7cd6 (UTF-16BE)
    if (argCheck == 'ìú') {
        return true;
    }
    // No.2641
    // ê‡ñæ:939d
    // 0x939d (Windows-31J)
    // 0x7d71 (UTF-16BE)
    if (argCheck == 'ìù') {
        return true;
    }
    // No.2642
    // ê‡ñæ:939e
    // 0x939e (Windows-31J)
    // 0x5230 (UTF-16BE)
    if (argCheck == 'ìû') {
        return true;
    }
    // No.2643
    // ê‡ñæ:939f
    // 0x939f (Windows-31J)
    // 0x8463 (UTF-16BE)
    if (argCheck == 'ìü') {
        return true;
    }
    // No.2644
    // ê‡ñæ:93a0
    // 0x93a0 (Windows-31J)
    // 0x8569 (UTF-16BE)
    if (argCheck == 'ì†') {
        return true;
    }
    // No.2645
    // ê‡ñæ:93a1
    // 0x93a1 (Windows-31J)
    // 0x85e4 (UTF-16BE)
    if (argCheck == 'ì°') {
        return true;
    }
    // No.2646
    // ê‡ñæ:93a2
    // 0x93a2 (Windows-31J)
    // 0x8a0e (UTF-16BE)
    if (argCheck == 'ì¢') {
        return true;
    }
    // No.2647
    // ê‡ñæ:93a3
    // 0x93a3 (Windows-31J)
    // 0x8b04 (UTF-16BE)
    if (argCheck == 'ì£') {
        return true;
    }
    // No.2648
    // ê‡ñæ:93a4
    // 0x93a4 (Windows-31J)
    // 0x8c46 (UTF-16BE)
    if (argCheck == 'ì§') {
        return true;
    }
    // No.2649
    // ê‡ñæ:93a5
    // 0x93a5 (Windows-31J)
    // 0x8e0f (UTF-16BE)
    if (argCheck == 'ì•') {
        return true;
    }
    // No.2650
    // ê‡ñæ:93a6
    // 0x93a6 (Windows-31J)
    // 0x9003 (UTF-16BE)
    if (argCheck == 'ì¶') {
        return true;
    }
    // No.2651
    // ê‡ñæ:93a7
    // 0x93a7 (Windows-31J)
    // 0x900f (UTF-16BE)
    if (argCheck == 'ìß') {
        return true;
    }
    // No.2652
    // ê‡ñæ:93a8
    // 0x93a8 (Windows-31J)
    // 0x9419 (UTF-16BE)
    if (argCheck == 'ì®') {
        return true;
    }
    // No.2653
    // ê‡ñæ:93a9
    // 0x93a9 (Windows-31J)
    // 0x9676 (UTF-16BE)
    if (argCheck == 'ì©') {
        return true;
    }
    // No.2654
    // ê‡ñæ:93aa
    // 0x93aa (Windows-31J)
    // 0x982d (UTF-16BE)
    if (argCheck == 'ì™') {
        return true;
    }
    // No.2655
    // ê‡ñæ:93ab
    // 0x93ab (Windows-31J)
    // 0x9a30 (UTF-16BE)
    if (argCheck == 'ì´') {
        return true;
    }
    // No.2656
    // ê‡ñæ:93ac
    // 0x93ac (Windows-31J)
    // 0x95d8 (UTF-16BE)
    if (argCheck == 'ì¨') {
        return true;
    }
    // No.2657
    // ê‡ñæ:93ad
    // 0x93ad (Windows-31J)
    // 0x50cd (UTF-16BE)
    if (argCheck == 'ì≠') {
        return true;
    }
    // No.2658
    // ê‡ñæ:93ae
    // 0x93ae (Windows-31J)
    // 0x52d5 (UTF-16BE)
    if (argCheck == 'ìÆ') {
        return true;
    }
    // No.2659
    // ê‡ñæ:93af
    // 0x93af (Windows-31J)
    // 0x540c (UTF-16BE)
    if (argCheck == 'ìØ') {
        return true;
    }
    // No.2660
    // ê‡ñæ:93b0
    // 0x93b0 (Windows-31J)
    // 0x5802 (UTF-16BE)
    if (argCheck == 'ì∞') {
        return true;
    }
    // No.2661
    // ê‡ñæ:93b1
    // 0x93b1 (Windows-31J)
    // 0x5c0e (UTF-16BE)
    if (argCheck == 'ì±') {
        return true;
    }
    // No.2662
    // ê‡ñæ:93b2
    // 0x93b2 (Windows-31J)
    // 0x61a7 (UTF-16BE)
    if (argCheck == 'ì≤') {
        return true;
    }
    // No.2663
    // ê‡ñæ:93b3
    // 0x93b3 (Windows-31J)
    // 0x649e (UTF-16BE)
    if (argCheck == 'ì≥') {
        return true;
    }
    // No.2664
    // ê‡ñæ:93b4
    // 0x93b4 (Windows-31J)
    // 0x6d1e (UTF-16BE)
    if (argCheck == 'ì¥') {
        return true;
    }
    // No.2665
    // ê‡ñæ:93b5
    // 0x93b5 (Windows-31J)
    // 0x77b3 (UTF-16BE)
    if (argCheck == 'ìµ') {
        return true;
    }
    // No.2666
    // ê‡ñæ:93b6
    // 0x93b6 (Windows-31J)
    // 0x7ae5 (UTF-16BE)
    if (argCheck == 'ì∂') {
        return true;
    }
    // No.2667
    // ê‡ñæ:93b7
    // 0x93b7 (Windows-31J)
    // 0x80f4 (UTF-16BE)
    if (argCheck == 'ì∑') {
        return true;
    }
    // No.2668
    // ê‡ñæ:93b8
    // 0x93b8 (Windows-31J)
    // 0x8404 (UTF-16BE)
    if (argCheck == 'ì∏') {
        return true;
    }
    // No.2669
    // ê‡ñæ:93b9
    // 0x93b9 (Windows-31J)
    // 0x9053 (UTF-16BE)
    if (argCheck == 'ìπ') {
        return true;
    }
    // No.2670
    // ê‡ñæ:93ba
    // 0x93ba (Windows-31J)
    // 0x9285 (UTF-16BE)
    if (argCheck == 'ì∫') {
        return true;
    }
    // No.2671
    // ê‡ñæ:93bb
    // 0x93bb (Windows-31J)
    // 0x5ce0 (UTF-16BE)
    if (argCheck == 'ìª') {
        return true;
    }
    // No.2672
    // ê‡ñæ:93bc
    // 0x93bc (Windows-31J)
    // 0x9d07 (UTF-16BE)
    if (argCheck == 'ìº') {
        return true;
    }
    // No.2673
    // ê‡ñæ:93bd
    // 0x93bd (Windows-31J)
    // 0x533f (UTF-16BE)
    if (argCheck == 'ìΩ') {
        return true;
    }
    // No.2674
    // ê‡ñæ:93be
    // 0x93be (Windows-31J)
    // 0x5f97 (UTF-16BE)
    if (argCheck == 'ìæ') {
        return true;
    }
    // No.2675
    // ê‡ñæ:93bf
    // 0x93bf (Windows-31J)
    // 0x5fb3 (UTF-16BE)
    if (argCheck == 'ìø') {
        return true;
    }
    // No.2676
    // ê‡ñæ:93c0
    // 0x93c0 (Windows-31J)
    // 0x6d9c (UTF-16BE)
    if (argCheck == 'ì¿') {
        return true;
    }
    // No.2677
    // ê‡ñæ:93c1
    // 0x93c1 (Windows-31J)
    // 0x7279 (UTF-16BE)
    if (argCheck == 'ì¡') {
        return true;
    }
    // No.2678
    // ê‡ñæ:93c2
    // 0x93c2 (Windows-31J)
    // 0x7763 (UTF-16BE)
    if (argCheck == 'ì¬') {
        return true;
    }
    // No.2679
    // ê‡ñæ:93c3
    // 0x93c3 (Windows-31J)
    // 0x79bf (UTF-16BE)
    if (argCheck == 'ì√') {
        return true;
    }
    // No.2680
    // ê‡ñæ:93c4
    // 0x93c4 (Windows-31J)
    // 0x7be4 (UTF-16BE)
    if (argCheck == 'ìƒ') {
        return true;
    }
    // No.2681
    // ê‡ñæ:93c5
    // 0x93c5 (Windows-31J)
    // 0x6bd2 (UTF-16BE)
    if (argCheck == 'ì≈') {
        return true;
    }
    // No.2682
    // ê‡ñæ:93c6
    // 0x93c6 (Windows-31J)
    // 0x72ec (UTF-16BE)
    if (argCheck == 'ì∆') {
        return true;
    }
    // No.2683
    // ê‡ñæ:93c7
    // 0x93c7 (Windows-31J)
    // 0x8aad (UTF-16BE)
    if (argCheck == 'ì«') {
        return true;
    }
    // No.2684
    // ê‡ñæ:93c8
    // 0x93c8 (Windows-31J)
    // 0x6803 (UTF-16BE)
    if (argCheck == 'ì»') {
        return true;
    }
    // No.2685
    // ê‡ñæ:93c9
    // 0x93c9 (Windows-31J)
    // 0x6a61 (UTF-16BE)
    if (argCheck == 'ì…') {
        return true;
    }
    // No.2686
    // ê‡ñæ:93ca
    // 0x93ca (Windows-31J)
    // 0x51f8 (UTF-16BE)
    if (argCheck == 'ì ') {
        return true;
    }
    // No.2687
    // ê‡ñæ:93cb
    // 0x93cb (Windows-31J)
    // 0x7a81 (UTF-16BE)
    if (argCheck == 'ìÀ') {
        return true;
    }
    // No.2688
    // ê‡ñæ:93cc
    // 0x93cc (Windows-31J)
    // 0x6934 (UTF-16BE)
    if (argCheck == 'ìÃ') {
        return true;
    }
    // No.2689
    // ê‡ñæ:93cd
    // 0x93cd (Windows-31J)
    // 0x5c4a (UTF-16BE)
    if (argCheck == 'ìÕ') {
        return true;
    }
    // No.2690
    // ê‡ñæ:93ce
    // 0x93ce (Windows-31J)
    // 0x9cf6 (UTF-16BE)
    if (argCheck == 'ìŒ') {
        return true;
    }
    // No.2691
    // ê‡ñæ:93cf
    // 0x93cf (Windows-31J)
    // 0x82eb (UTF-16BE)
    if (argCheck == 'ìœ') {
        return true;
    }
    // No.2692
    // ê‡ñæ:93d0
    // 0x93d0 (Windows-31J)
    // 0x5bc5 (UTF-16BE)
    if (argCheck == 'ì–') {
        return true;
    }
    // No.2693
    // ê‡ñæ:93d1
    // 0x93d1 (Windows-31J)
    // 0x9149 (UTF-16BE)
    if (argCheck == 'ì—') {
        return true;
    }
    // No.2694
    // ê‡ñæ:93d2
    // 0x93d2 (Windows-31J)
    // 0x701e (UTF-16BE)
    if (argCheck == 'ì“') {
        return true;
    }
    // No.2695
    // ê‡ñæ:93d3
    // 0x93d3 (Windows-31J)
    // 0x5678 (UTF-16BE)
    if (argCheck == 'ì”') {
        return true;
    }
    // No.2696
    // ê‡ñæ:93d4
    // 0x93d4 (Windows-31J)
    // 0x5c6f (UTF-16BE)
    if (argCheck == 'ì‘') {
        return true;
    }
    // No.2697
    // ê‡ñæ:93d5
    // 0x93d5 (Windows-31J)
    // 0x60c7 (UTF-16BE)
    if (argCheck == 'ì’') {
        return true;
    }
    // No.2698
    // ê‡ñæ:93d6
    // 0x93d6 (Windows-31J)
    // 0x6566 (UTF-16BE)
    if (argCheck == 'ì÷') {
        return true;
    }
    // No.2699
    // ê‡ñæ:93d7
    // 0x93d7 (Windows-31J)
    // 0x6c8c (UTF-16BE)
    if (argCheck == 'ì◊') {
        return true;
    }
    // No.2700
    // ê‡ñæ:93d8
    // 0x93d8 (Windows-31J)
    // 0x8c5a (UTF-16BE)
    if (argCheck == 'ìÿ') {
        return true;
    }
    // No.2701
    // ê‡ñæ:93d9
    // 0x93d9 (Windows-31J)
    // 0x9041 (UTF-16BE)
    if (argCheck == 'ìŸ') {
        return true;
    }
    // No.2702
    // ê‡ñæ:93da
    // 0x93da (Windows-31J)
    // 0x9813 (UTF-16BE)
    if (argCheck == 'ì⁄') {
        return true;
    }
    // No.2703
    // ê‡ñæ:93db
    // 0x93db (Windows-31J)
    // 0x5451 (UTF-16BE)
    if (argCheck == 'ì€') {
        return true;
    }
    // No.2704
    // ê‡ñæ:93dc
    // 0x93dc (Windows-31J)
    // 0x66c7 (UTF-16BE)
    if (argCheck == 'ì‹') {
        return true;
    }
    // No.2705
    // ê‡ñæ:93dd
    // 0x93dd (Windows-31J)
    // 0x920d (UTF-16BE)
    if (argCheck == 'ì›') {
        return true;
    }
    // No.2706
    // ê‡ñæ:93de
    // 0x93de (Windows-31J)
    // 0x5948 (UTF-16BE)
    if (argCheck == 'ìﬁ') {
        return true;
    }
    // No.2707
    // ê‡ñæ:93df
    // 0x93df (Windows-31J)
    // 0x90a3 (UTF-16BE)
    if (argCheck == 'ìﬂ') {
        return true;
    }
    // No.2708
    // ê‡ñæ:93e0
    // 0x93e0 (Windows-31J)
    // 0x5185 (UTF-16BE)
    if (argCheck == 'ì‡') {
        return true;
    }
    // No.2709
    // ê‡ñæ:93e1
    // 0x93e1 (Windows-31J)
    // 0x4e4d (UTF-16BE)
    if (argCheck == 'ì·') {
        return true;
    }
    // No.2710
    // ê‡ñæ:93e2
    // 0x93e2 (Windows-31J)
    // 0x51ea (UTF-16BE)
    if (argCheck == 'ì‚') {
        return true;
    }
    // No.2711
    // ê‡ñæ:93e3
    // 0x93e3 (Windows-31J)
    // 0x8599 (UTF-16BE)
    if (argCheck == 'ì„') {
        return true;
    }
    // No.2712
    // ê‡ñæ:93e4
    // 0x93e4 (Windows-31J)
    // 0x8b0e (UTF-16BE)
    if (argCheck == 'ì‰') {
        return true;
    }
    // No.2713
    // ê‡ñæ:93e5
    // 0x93e5 (Windows-31J)
    // 0x7058 (UTF-16BE)
    if (argCheck == 'ìÂ') {
        return true;
    }
    // No.2714
    // ê‡ñæ:93e6
    // 0x93e6 (Windows-31J)
    // 0x637a (UTF-16BE)
    if (argCheck == 'ìÊ') {
        return true;
    }
    // No.2715
    // ê‡ñæ:93e7
    // 0x93e7 (Windows-31J)
    // 0x934b (UTF-16BE)
    if (argCheck == 'ìÁ') {
        return true;
    }
    // No.2716
    // ê‡ñæ:93e8
    // 0x93e8 (Windows-31J)
    // 0x6962 (UTF-16BE)
    if (argCheck == 'ìË') {
        return true;
    }
    // No.2717
    // ê‡ñæ:93e9
    // 0x93e9 (Windows-31J)
    // 0x99b4 (UTF-16BE)
    if (argCheck == 'ìÈ') {
        return true;
    }
    // No.2718
    // ê‡ñæ:93ea
    // 0x93ea (Windows-31J)
    // 0x7e04 (UTF-16BE)
    if (argCheck == 'ìÍ') {
        return true;
    }
    // No.2719
    // ê‡ñæ:93eb
    // 0x93eb (Windows-31J)
    // 0x7577 (UTF-16BE)
    if (argCheck == 'ìÎ') {
        return true;
    }
    // No.2720
    // ê‡ñæ:93ec
    // 0x93ec (Windows-31J)
    // 0x5357 (UTF-16BE)
    if (argCheck == 'ìÏ') {
        return true;
    }
    // No.2721
    // ê‡ñæ:93ed
    // 0x93ed (Windows-31J)
    // 0x6960 (UTF-16BE)
    if (argCheck == 'ìÌ') {
        return true;
    }
    // No.2722
    // ê‡ñæ:93ee
    // 0x93ee (Windows-31J)
    // 0x8edf (UTF-16BE)
    if (argCheck == 'ìÓ') {
        return true;
    }
    // No.2723
    // ê‡ñæ:93ef
    // 0x93ef (Windows-31J)
    // 0x96e3 (UTF-16BE)
    if (argCheck == 'ìÔ') {
        return true;
    }
    // No.2724
    // ê‡ñæ:93f0
    // 0x93f0 (Windows-31J)
    // 0x6c5d (UTF-16BE)
    if (argCheck == 'ì') {
        return true;
    }
    // No.2725
    // ê‡ñæ:93f1
    // 0x93f1 (Windows-31J)
    // 0x4e8c (UTF-16BE)
    if (argCheck == 'ìÒ') {
        return true;
    }
    // No.2726
    // ê‡ñæ:93f2
    // 0x93f2 (Windows-31J)
    // 0x5c3c (UTF-16BE)
    if (argCheck == 'ìÚ') {
        return true;
    }
    // No.2727
    // ê‡ñæ:93f3
    // 0x93f3 (Windows-31J)
    // 0x5f10 (UTF-16BE)
    if (argCheck == 'ìÛ') {
        return true;
    }
    // No.2728
    // ê‡ñæ:93f4
    // 0x93f4 (Windows-31J)
    // 0x8fe9 (UTF-16BE)
    if (argCheck == 'ìÙ') {
        return true;
    }
    // No.2729
    // ê‡ñæ:93f5
    // 0x93f5 (Windows-31J)
    // 0x5302 (UTF-16BE)
    if (argCheck == 'ìı') {
        return true;
    }
    // No.2730
    // ê‡ñæ:93f6
    // 0x93f6 (Windows-31J)
    // 0x8cd1 (UTF-16BE)
    if (argCheck == 'ìˆ') {
        return true;
    }
    // No.2731
    // ê‡ñæ:93f7
    // 0x93f7 (Windows-31J)
    // 0x8089 (UTF-16BE)
    if (argCheck == 'ì˜') {
        return true;
    }
    // No.2732
    // ê‡ñæ:93f8
    // 0x93f8 (Windows-31J)
    // 0x8679 (UTF-16BE)
    if (argCheck == 'ì¯') {
        return true;
    }
    // No.2733
    // ê‡ñæ:93f9
    // 0x93f9 (Windows-31J)
    // 0x5eff (UTF-16BE)
    if (argCheck == 'ì˘') {
        return true;
    }
    // No.2734
    // ê‡ñæ:93fa
    // 0x93fa (Windows-31J)
    // 0x65e5 (UTF-16BE)
    if (argCheck == 'ì˙') {
        return true;
    }
    // No.2735
    // ê‡ñæ:93fb
    // 0x93fb (Windows-31J)
    // 0x4e73 (UTF-16BE)
    if (argCheck == 'ì˚') {
        return true;
    }
    // No.2736
    // ê‡ñæ:93fc
    // 0x93fc (Windows-31J)
    // 0x5165 (UTF-16BE)
    if (argCheck == 'ì¸') {
        return true;
    }
    // No.2737
    // ê‡ñæ:9440
    // 0x9440 (Windows-31J)
    // 0x5982 (UTF-16BE)
    if (argCheck == 'î@') {
        return true;
    }
    // No.2738
    // ê‡ñæ:9441
    // 0x9441 (Windows-31J)
    // 0x5c3f (UTF-16BE)
    if (argCheck == 'îA') {
        return true;
    }
    // No.2739
    // ê‡ñæ:9442
    // 0x9442 (Windows-31J)
    // 0x97ee (UTF-16BE)
    if (argCheck == 'îB') {
        return true;
    }
    // No.2740
    // ê‡ñæ:9443
    // 0x9443 (Windows-31J)
    // 0x4efb (UTF-16BE)
    if (argCheck == 'îC') {
        return true;
    }
    // No.2741
    // ê‡ñæ:9444
    // 0x9444 (Windows-31J)
    // 0x598a (UTF-16BE)
    if (argCheck == 'îD') {
        return true;
    }
    // No.2742
    // ê‡ñæ:9445
    // 0x9445 (Windows-31J)
    // 0x5fcd (UTF-16BE)
    if (argCheck == 'îE') {
        return true;
    }
    // No.2743
    // ê‡ñæ:9446
    // 0x9446 (Windows-31J)
    // 0x8a8d (UTF-16BE)
    if (argCheck == 'îF') {
        return true;
    }
    // No.2744
    // ê‡ñæ:9447
    // 0x9447 (Windows-31J)
    // 0x6fe1 (UTF-16BE)
    if (argCheck == 'îG') {
        return true;
    }
    // No.2745
    // ê‡ñæ:9448
    // 0x9448 (Windows-31J)
    // 0x79b0 (UTF-16BE)
    if (argCheck == 'îH') {
        return true;
    }
    // No.2746
    // ê‡ñæ:9449
    // 0x9449 (Windows-31J)
    // 0x7962 (UTF-16BE)
    if (argCheck == 'îI') {
        return true;
    }
    // No.2747
    // ê‡ñæ:944a
    // 0x944a (Windows-31J)
    // 0x5be7 (UTF-16BE)
    if (argCheck == 'îJ') {
        return true;
    }
    // No.2748
    // ê‡ñæ:944b
    // 0x944b (Windows-31J)
    // 0x8471 (UTF-16BE)
    if (argCheck == 'îK') {
        return true;
    }
    // No.2749
    // ê‡ñæ:944c
    // 0x944c (Windows-31J)
    // 0x732b (UTF-16BE)
    if (argCheck == 'îL') {
        return true;
    }
    // No.2750
    // ê‡ñæ:944d
    // 0x944d (Windows-31J)
    // 0x71b1 (UTF-16BE)
    if (argCheck == 'îM') {
        return true;
    }
    // No.2751
    // ê‡ñæ:944e
    // 0x944e (Windows-31J)
    // 0x5e74 (UTF-16BE)
    if (argCheck == 'îN') {
        return true;
    }
    // No.2752
    // ê‡ñæ:944f
    // 0x944f (Windows-31J)
    // 0x5ff5 (UTF-16BE)
    if (argCheck == 'îO') {
        return true;
    }
    // No.2753
    // ê‡ñæ:9450
    // 0x9450 (Windows-31J)
    // 0x637b (UTF-16BE)
    if (argCheck == 'îP') {
        return true;
    }
    // No.2754
    // ê‡ñæ:9451
    // 0x9451 (Windows-31J)
    // 0x649a (UTF-16BE)
    if (argCheck == 'îQ') {
        return true;
    }
    // No.2755
    // ê‡ñæ:9452
    // 0x9452 (Windows-31J)
    // 0x71c3 (UTF-16BE)
    if (argCheck == 'îR') {
        return true;
    }
    // No.2756
    // ê‡ñæ:9453
    // 0x9453 (Windows-31J)
    // 0x7c98 (UTF-16BE)
    if (argCheck == 'îS') {
        return true;
    }
    // No.2757
    // ê‡ñæ:9454
    // 0x9454 (Windows-31J)
    // 0x4e43 (UTF-16BE)
    if (argCheck == 'îT') {
        return true;
    }
    // No.2758
    // ê‡ñæ:9455
    // 0x9455 (Windows-31J)
    // 0x5efc (UTF-16BE)
    if (argCheck == 'îU') {
        return true;
    }
    // No.2759
    // ê‡ñæ:9456
    // 0x9456 (Windows-31J)
    // 0x4e4b (UTF-16BE)
    if (argCheck == 'îV') {
        return true;
    }
    // No.2760
    // ê‡ñæ:9457
    // 0x9457 (Windows-31J)
    // 0x57dc (UTF-16BE)
    if (argCheck == 'îW') {
        return true;
    }
    // No.2761
    // ê‡ñæ:9458
    // 0x9458 (Windows-31J)
    // 0x56a2 (UTF-16BE)
    if (argCheck == 'îX') {
        return true;
    }
    // No.2762
    // ê‡ñæ:9459
    // 0x9459 (Windows-31J)
    // 0x60a9 (UTF-16BE)
    if (argCheck == 'îY') {
        return true;
    }
    // No.2763
    // ê‡ñæ:945a
    // 0x945a (Windows-31J)
    // 0x6fc3 (UTF-16BE)
    if (argCheck == 'îZ') {
        return true;
    }
    // No.2764
    // ê‡ñæ:945b
    // 0x945b (Windows-31J)
    // 0x7d0d (UTF-16BE)
    if (argCheck == 'î[') {
        return true;
    }
    // No.2765
    // ê‡ñæ:945c
    // 0x945c (Windows-31J)
    // 0x80fd (UTF-16BE)
    if (argCheck == 'î\') {
        return true;
    }
    // No.2766
    // ê‡ñæ:945d
    // 0x945d (Windows-31J)
    // 0x8133 (UTF-16BE)
    if (argCheck == 'î]') {
        return true;
    }
    // No.2767
    // ê‡ñæ:945e
    // 0x945e (Windows-31J)
    // 0x81bf (UTF-16BE)
    if (argCheck == 'î^') {
        return true;
    }
    // No.2768
    // ê‡ñæ:945f
    // 0x945f (Windows-31J)
    // 0x8fb2 (UTF-16BE)
    if (argCheck == 'î_') {
        return true;
    }
    // No.2769
    // ê‡ñæ:9460
    // 0x9460 (Windows-31J)
    // 0x8997 (UTF-16BE)
    if (argCheck == 'î`') {
        return true;
    }
    // No.2770
    // ê‡ñæ:9461
    // 0x9461 (Windows-31J)
    // 0x86a4 (UTF-16BE)
    if (argCheck == 'îa') {
        return true;
    }
    // No.2771
    // ê‡ñæ:9462
    // 0x9462 (Windows-31J)
    // 0x5df4 (UTF-16BE)
    if (argCheck == 'îb') {
        return true;
    }
    // No.2772
    // ê‡ñæ:9463
    // 0x9463 (Windows-31J)
    // 0x628a (UTF-16BE)
    if (argCheck == 'îc') {
        return true;
    }
    // No.2773
    // ê‡ñæ:9464
    // 0x9464 (Windows-31J)
    // 0x64ad (UTF-16BE)
    if (argCheck == 'îd') {
        return true;
    }
    // No.2774
    // ê‡ñæ:9465
    // 0x9465 (Windows-31J)
    // 0x8987 (UTF-16BE)
    if (argCheck == 'îe') {
        return true;
    }
    // No.2775
    // ê‡ñæ:9466
    // 0x9466 (Windows-31J)
    // 0x6777 (UTF-16BE)
    if (argCheck == 'îf') {
        return true;
    }
    // No.2776
    // ê‡ñæ:9467
    // 0x9467 (Windows-31J)
    // 0x6ce2 (UTF-16BE)
    if (argCheck == 'îg') {
        return true;
    }
    // No.2777
    // ê‡ñæ:9468
    // 0x9468 (Windows-31J)
    // 0x6d3e (UTF-16BE)
    if (argCheck == 'îh') {
        return true;
    }
    // No.2778
    // ê‡ñæ:9469
    // 0x9469 (Windows-31J)
    // 0x7436 (UTF-16BE)
    if (argCheck == 'îi') {
        return true;
    }
    // No.2779
    // ê‡ñæ:946a
    // 0x946a (Windows-31J)
    // 0x7834 (UTF-16BE)
    if (argCheck == 'îj') {
        return true;
    }
    // No.2780
    // ê‡ñæ:946b
    // 0x946b (Windows-31J)
    // 0x5a46 (UTF-16BE)
    if (argCheck == 'îk') {
        return true;
    }
    // No.2781
    // ê‡ñæ:946c
    // 0x946c (Windows-31J)
    // 0x7f75 (UTF-16BE)
    if (argCheck == 'îl') {
        return true;
    }
    // No.2782
    // ê‡ñæ:946d
    // 0x946d (Windows-31J)
    // 0x82ad (UTF-16BE)
    if (argCheck == 'îm') {
        return true;
    }
    // No.2783
    // ê‡ñæ:946e
    // 0x946e (Windows-31J)
    // 0x99ac (UTF-16BE)
    if (argCheck == 'în') {
        return true;
    }
    // No.2784
    // ê‡ñæ:946f
    // 0x946f (Windows-31J)
    // 0x4ff3 (UTF-16BE)
    if (argCheck == 'îo') {
        return true;
    }
    // No.2785
    // ê‡ñæ:9470
    // 0x9470 (Windows-31J)
    // 0x5ec3 (UTF-16BE)
    if (argCheck == 'îp') {
        return true;
    }
    // No.2786
    // ê‡ñæ:9471
    // 0x9471 (Windows-31J)
    // 0x62dd (UTF-16BE)
    if (argCheck == 'îq') {
        return true;
    }
    // No.2787
    // ê‡ñæ:9472
    // 0x9472 (Windows-31J)
    // 0x6392 (UTF-16BE)
    if (argCheck == 'îr') {
        return true;
    }
    // No.2788
    // ê‡ñæ:9473
    // 0x9473 (Windows-31J)
    // 0x6557 (UTF-16BE)
    if (argCheck == 'îs') {
        return true;
    }
    // No.2789
    // ê‡ñæ:9474
    // 0x9474 (Windows-31J)
    // 0x676f (UTF-16BE)
    if (argCheck == 'ît') {
        return true;
    }
    // No.2790
    // ê‡ñæ:9475
    // 0x9475 (Windows-31J)
    // 0x76c3 (UTF-16BE)
    if (argCheck == 'îu') {
        return true;
    }
    // No.2791
    // ê‡ñæ:9476
    // 0x9476 (Windows-31J)
    // 0x724c (UTF-16BE)
    if (argCheck == 'îv') {
        return true;
    }
    // No.2792
    // ê‡ñæ:9477
    // 0x9477 (Windows-31J)
    // 0x80cc (UTF-16BE)
    if (argCheck == 'îw') {
        return true;
    }
    // No.2793
    // ê‡ñæ:9478
    // 0x9478 (Windows-31J)
    // 0x80ba (UTF-16BE)
    if (argCheck == 'îx') {
        return true;
    }
    // No.2794
    // ê‡ñæ:9479
    // 0x9479 (Windows-31J)
    // 0x8f29 (UTF-16BE)
    if (argCheck == 'îy') {
        return true;
    }
    // No.2795
    // ê‡ñæ:947a
    // 0x947a (Windows-31J)
    // 0x914d (UTF-16BE)
    if (argCheck == 'îz') {
        return true;
    }
    // No.2796
    // ê‡ñæ:947b
    // 0x947b (Windows-31J)
    // 0x500d (UTF-16BE)
    if (argCheck == 'î{') {
        return true;
    }
    // No.2797
    // ê‡ñæ:947c
    // 0x947c (Windows-31J)
    // 0x57f9 (UTF-16BE)
    if (argCheck == 'î|') {
        return true;
    }
    // No.2798
    // ê‡ñæ:947d
    // 0x947d (Windows-31J)
    // 0x5a92 (UTF-16BE)
    if (argCheck == 'î}') {
        return true;
    }
    // No.2799
    // ê‡ñæ:947e
    // 0x947e (Windows-31J)
    // 0x6885 (UTF-16BE)
    if (argCheck == 'î~') {
        return true;
    }
    // No.2800
    // ê‡ñæ:9480
    // 0x9480 (Windows-31J)
    // 0x6973 (UTF-16BE)
    if (argCheck == 'îÄ') {
        return true;
    }
    // No.2801
    // ê‡ñæ:9481
    // 0x9481 (Windows-31J)
    // 0x7164 (UTF-16BE)
    if (argCheck == 'îÅ') {
        return true;
    }
    // No.2802
    // ê‡ñæ:9482
    // 0x9482 (Windows-31J)
    // 0x72fd (UTF-16BE)
    if (argCheck == 'îÇ') {
        return true;
    }
    // No.2803
    // ê‡ñæ:9483
    // 0x9483 (Windows-31J)
    // 0x8cb7 (UTF-16BE)
    if (argCheck == 'îÉ') {
        return true;
    }
    // No.2804
    // ê‡ñæ:9484
    // 0x9484 (Windows-31J)
    // 0x58f2 (UTF-16BE)
    if (argCheck == 'îÑ') {
        return true;
    }
    // No.2805
    // ê‡ñæ:9485
    // 0x9485 (Windows-31J)
    // 0x8ce0 (UTF-16BE)
    if (argCheck == 'îÖ') {
        return true;
    }
    // No.2806
    // ê‡ñæ:9486
    // 0x9486 (Windows-31J)
    // 0x966a (UTF-16BE)
    if (argCheck == 'îÜ') {
        return true;
    }
    // No.2807
    // ê‡ñæ:9487
    // 0x9487 (Windows-31J)
    // 0x9019 (UTF-16BE)
    if (argCheck == 'îá') {
        return true;
    }
    // No.2808
    // ê‡ñæ:9488
    // 0x9488 (Windows-31J)
    // 0x877f (UTF-16BE)
    if (argCheck == 'îà') {
        return true;
    }
    // No.2809
    // ê‡ñæ:9489
    // 0x9489 (Windows-31J)
    // 0x79e4 (UTF-16BE)
    if (argCheck == 'îâ') {
        return true;
    }
    // No.2810
    // ê‡ñæ:948a
    // 0x948a (Windows-31J)
    // 0x77e7 (UTF-16BE)
    if (argCheck == 'îä') {
        return true;
    }
    // No.2811
    // ê‡ñæ:948b
    // 0x948b (Windows-31J)
    // 0x8429 (UTF-16BE)
    if (argCheck == 'îã') {
        return true;
    }
    // No.2812
    // ê‡ñæ:948c
    // 0x948c (Windows-31J)
    // 0x4f2f (UTF-16BE)
    if (argCheck == 'îå') {
        return true;
    }
    // No.2813
    // ê‡ñæ:948d
    // 0x948d (Windows-31J)
    // 0x5265 (UTF-16BE)
    if (argCheck == 'îç') {
        return true;
    }
    // No.2814
    // ê‡ñæ:948e
    // 0x948e (Windows-31J)
    // 0x535a (UTF-16BE)
    if (argCheck == 'îé') {
        return true;
    }
    // No.2815
    // ê‡ñæ:948f
    // 0x948f (Windows-31J)
    // 0x62cd (UTF-16BE)
    if (argCheck == 'îè') {
        return true;
    }
    // No.2816
    // ê‡ñæ:9490
    // 0x9490 (Windows-31J)
    // 0x67cf (UTF-16BE)
    if (argCheck == 'îê') {
        return true;
    }
    // No.2817
    // ê‡ñæ:9491
    // 0x9491 (Windows-31J)
    // 0x6cca (UTF-16BE)
    if (argCheck == 'îë') {
        return true;
    }
    // No.2818
    // ê‡ñæ:9492
    // 0x9492 (Windows-31J)
    // 0x767d (UTF-16BE)
    if (argCheck == 'îí') {
        return true;
    }
    // No.2819
    // ê‡ñæ:9493
    // 0x9493 (Windows-31J)
    // 0x7b94 (UTF-16BE)
    if (argCheck == 'îì') {
        return true;
    }
    // No.2820
    // ê‡ñæ:9494
    // 0x9494 (Windows-31J)
    // 0x7c95 (UTF-16BE)
    if (argCheck == 'îî') {
        return true;
    }
    // No.2821
    // ê‡ñæ:9495
    // 0x9495 (Windows-31J)
    // 0x8236 (UTF-16BE)
    if (argCheck == 'îï') {
        return true;
    }
    // No.2822
    // ê‡ñæ:9496
    // 0x9496 (Windows-31J)
    // 0x8584 (UTF-16BE)
    if (argCheck == 'îñ') {
        return true;
    }
    // No.2823
    // ê‡ñæ:9497
    // 0x9497 (Windows-31J)
    // 0x8feb (UTF-16BE)
    if (argCheck == 'îó') {
        return true;
    }
    // No.2824
    // ê‡ñæ:9498
    // 0x9498 (Windows-31J)
    // 0x66dd (UTF-16BE)
    if (argCheck == 'îò') {
        return true;
    }
    // No.2825
    // ê‡ñæ:9499
    // 0x9499 (Windows-31J)
    // 0x6f20 (UTF-16BE)
    if (argCheck == 'îô') {
        return true;
    }
    // No.2826
    // ê‡ñæ:949a
    // 0x949a (Windows-31J)
    // 0x7206 (UTF-16BE)
    if (argCheck == 'îö') {
        return true;
    }
    // No.2827
    // ê‡ñæ:949b
    // 0x949b (Windows-31J)
    // 0x7e1b (UTF-16BE)
    if (argCheck == 'îõ') {
        return true;
    }
    // No.2828
    // ê‡ñæ:949c
    // 0x949c (Windows-31J)
    // 0x83ab (UTF-16BE)
    if (argCheck == 'îú') {
        return true;
    }
    // No.2829
    // ê‡ñæ:949d
    // 0x949d (Windows-31J)
    // 0x99c1 (UTF-16BE)
    if (argCheck == 'îù') {
        return true;
    }
    // No.2830
    // ê‡ñæ:949e
    // 0x949e (Windows-31J)
    // 0x9ea6 (UTF-16BE)
    if (argCheck == 'îû') {
        return true;
    }
    // No.2831
    // ê‡ñæ:949f
    // 0x949f (Windows-31J)
    // 0x51fd (UTF-16BE)
    if (argCheck == 'îü') {
        return true;
    }
    // No.2832
    // ê‡ñæ:94a0
    // 0x94a0 (Windows-31J)
    // 0x7bb1 (UTF-16BE)
    if (argCheck == 'î†') {
        return true;
    }
    // No.2833
    // ê‡ñæ:94a1
    // 0x94a1 (Windows-31J)
    // 0x7872 (UTF-16BE)
    if (argCheck == 'î°') {
        return true;
    }
    // No.2834
    // ê‡ñæ:94a2
    // 0x94a2 (Windows-31J)
    // 0x7bb8 (UTF-16BE)
    if (argCheck == 'î¢') {
        return true;
    }
    // No.2835
    // ê‡ñæ:94a3
    // 0x94a3 (Windows-31J)
    // 0x8087 (UTF-16BE)
    if (argCheck == 'î£') {
        return true;
    }
    // No.2836
    // ê‡ñæ:94a4
    // 0x94a4 (Windows-31J)
    // 0x7b48 (UTF-16BE)
    if (argCheck == 'î§') {
        return true;
    }
    // No.2837
    // ê‡ñæ:94a5
    // 0x94a5 (Windows-31J)
    // 0x6ae8 (UTF-16BE)
    if (argCheck == 'î•') {
        return true;
    }
    // No.2838
    // ê‡ñæ:94a6
    // 0x94a6 (Windows-31J)
    // 0x5e61 (UTF-16BE)
    if (argCheck == 'î¶') {
        return true;
    }
    // No.2839
    // ê‡ñæ:94a7
    // 0x94a7 (Windows-31J)
    // 0x808c (UTF-16BE)
    if (argCheck == 'îß') {
        return true;
    }
    // No.2840
    // ê‡ñæ:94a8
    // 0x94a8 (Windows-31J)
    // 0x7551 (UTF-16BE)
    if (argCheck == 'î®') {
        return true;
    }
    // No.2841
    // ê‡ñæ:94a9
    // 0x94a9 (Windows-31J)
    // 0x7560 (UTF-16BE)
    if (argCheck == 'î©') {
        return true;
    }
    // No.2842
    // ê‡ñæ:94aa
    // 0x94aa (Windows-31J)
    // 0x516b (UTF-16BE)
    if (argCheck == 'î™') {
        return true;
    }
    // No.2843
    // ê‡ñæ:94ab
    // 0x94ab (Windows-31J)
    // 0x9262 (UTF-16BE)
    if (argCheck == 'î´') {
        return true;
    }
    // No.2844
    // ê‡ñæ:94ac
    // 0x94ac (Windows-31J)
    // 0x6e8c (UTF-16BE)
    if (argCheck == 'î¨') {
        return true;
    }
    // No.2845
    // ê‡ñæ:94ad
    // 0x94ad (Windows-31J)
    // 0x767a (UTF-16BE)
    if (argCheck == 'î≠') {
        return true;
    }
    // No.2846
    // ê‡ñæ:94ae
    // 0x94ae (Windows-31J)
    // 0x9197 (UTF-16BE)
    if (argCheck == 'îÆ') {
        return true;
    }
    // No.2847
    // ê‡ñæ:94af
    // 0x94af (Windows-31J)
    // 0x9aea (UTF-16BE)
    if (argCheck == 'îØ') {
        return true;
    }
    // No.2848
    // ê‡ñæ:94b0
    // 0x94b0 (Windows-31J)
    // 0x4f10 (UTF-16BE)
    if (argCheck == 'î∞') {
        return true;
    }
    // No.2849
    // ê‡ñæ:94b1
    // 0x94b1 (Windows-31J)
    // 0x7f70 (UTF-16BE)
    if (argCheck == 'î±') {
        return true;
    }
    // No.2850
    // ê‡ñæ:94b2
    // 0x94b2 (Windows-31J)
    // 0x629c (UTF-16BE)
    if (argCheck == 'î≤') {
        return true;
    }
    // No.2851
    // ê‡ñæ:94b3
    // 0x94b3 (Windows-31J)
    // 0x7b4f (UTF-16BE)
    if (argCheck == 'î≥') {
        return true;
    }
    // No.2852
    // ê‡ñæ:94b4
    // 0x94b4 (Windows-31J)
    // 0x95a5 (UTF-16BE)
    if (argCheck == 'î¥') {
        return true;
    }
    // No.2853
    // ê‡ñæ:94b5
    // 0x94b5 (Windows-31J)
    // 0x9ce9 (UTF-16BE)
    if (argCheck == 'îµ') {
        return true;
    }
    // No.2854
    // ê‡ñæ:94b6
    // 0x94b6 (Windows-31J)
    // 0x567a (UTF-16BE)
    if (argCheck == 'î∂') {
        return true;
    }
    // No.2855
    // ê‡ñæ:94b7
    // 0x94b7 (Windows-31J)
    // 0x5859 (UTF-16BE)
    if (argCheck == 'î∑') {
        return true;
    }
    // No.2856
    // ê‡ñæ:94b8
    // 0x94b8 (Windows-31J)
    // 0x86e4 (UTF-16BE)
    if (argCheck == 'î∏') {
        return true;
    }
    // No.2857
    // ê‡ñæ:94b9
    // 0x94b9 (Windows-31J)
    // 0x96bc (UTF-16BE)
    if (argCheck == 'îπ') {
        return true;
    }
    // No.2858
    // ê‡ñæ:94ba
    // 0x94ba (Windows-31J)
    // 0x4f34 (UTF-16BE)
    if (argCheck == 'î∫') {
        return true;
    }
    // No.2859
    // ê‡ñæ:94bb
    // 0x94bb (Windows-31J)
    // 0x5224 (UTF-16BE)
    if (argCheck == 'îª') {
        return true;
    }
    // No.2860
    // ê‡ñæ:94bc
    // 0x94bc (Windows-31J)
    // 0x534a (UTF-16BE)
    if (argCheck == 'îº') {
        return true;
    }
    // No.2861
    // ê‡ñæ:94bd
    // 0x94bd (Windows-31J)
    // 0x53cd (UTF-16BE)
    if (argCheck == 'îΩ') {
        return true;
    }
    // No.2862
    // ê‡ñæ:94be
    // 0x94be (Windows-31J)
    // 0x53db (UTF-16BE)
    if (argCheck == 'îæ') {
        return true;
    }
    // No.2863
    // ê‡ñæ:94bf
    // 0x94bf (Windows-31J)
    // 0x5e06 (UTF-16BE)
    if (argCheck == 'îø') {
        return true;
    }
    // No.2864
    // ê‡ñæ:94c0
    // 0x94c0 (Windows-31J)
    // 0x642c (UTF-16BE)
    if (argCheck == 'î¿') {
        return true;
    }
    // No.2865
    // ê‡ñæ:94c1
    // 0x94c1 (Windows-31J)
    // 0x6591 (UTF-16BE)
    if (argCheck == 'î¡') {
        return true;
    }
    // No.2866
    // ê‡ñæ:94c2
    // 0x94c2 (Windows-31J)
    // 0x677f (UTF-16BE)
    if (argCheck == 'î¬') {
        return true;
    }
    // No.2867
    // ê‡ñæ:94c3
    // 0x94c3 (Windows-31J)
    // 0x6c3e (UTF-16BE)
    if (argCheck == 'î√') {
        return true;
    }
    // No.2868
    // ê‡ñæ:94c4
    // 0x94c4 (Windows-31J)
    // 0x6c4e (UTF-16BE)
    if (argCheck == 'îƒ') {
        return true;
    }
    // No.2869
    // ê‡ñæ:94c5
    // 0x94c5 (Windows-31J)
    // 0x7248 (UTF-16BE)
    if (argCheck == 'î≈') {
        return true;
    }
    // No.2870
    // ê‡ñæ:94c6
    // 0x94c6 (Windows-31J)
    // 0x72af (UTF-16BE)
    if (argCheck == 'î∆') {
        return true;
    }
    // No.2871
    // ê‡ñæ:94c7
    // 0x94c7 (Windows-31J)
    // 0x73ed (UTF-16BE)
    if (argCheck == 'î«') {
        return true;
    }
    // No.2872
    // ê‡ñæ:94c8
    // 0x94c8 (Windows-31J)
    // 0x7554 (UTF-16BE)
    if (argCheck == 'î»') {
        return true;
    }
    // No.2873
    // ê‡ñæ:94c9
    // 0x94c9 (Windows-31J)
    // 0x7e41 (UTF-16BE)
    if (argCheck == 'î…') {
        return true;
    }
    // No.2874
    // ê‡ñæ:94ca
    // 0x94ca (Windows-31J)
    // 0x822c (UTF-16BE)
    if (argCheck == 'î ') {
        return true;
    }
    // No.2875
    // ê‡ñæ:94cb
    // 0x94cb (Windows-31J)
    // 0x85e9 (UTF-16BE)
    if (argCheck == 'îÀ') {
        return true;
    }
    // No.2876
    // ê‡ñæ:94cc
    // 0x94cc (Windows-31J)
    // 0x8ca9 (UTF-16BE)
    if (argCheck == 'îÃ') {
        return true;
    }
    // No.2877
    // ê‡ñæ:94cd
    // 0x94cd (Windows-31J)
    // 0x7bc4 (UTF-16BE)
    if (argCheck == 'îÕ') {
        return true;
    }
    // No.2878
    // ê‡ñæ:94ce
    // 0x94ce (Windows-31J)
    // 0x91c6 (UTF-16BE)
    if (argCheck == 'îŒ') {
        return true;
    }
    // No.2879
    // ê‡ñæ:94cf
    // 0x94cf (Windows-31J)
    // 0x7169 (UTF-16BE)
    if (argCheck == 'îœ') {
        return true;
    }
    // No.2880
    // ê‡ñæ:94d0
    // 0x94d0 (Windows-31J)
    // 0x9812 (UTF-16BE)
    if (argCheck == 'î–') {
        return true;
    }
    // No.2881
    // ê‡ñæ:94d1
    // 0x94d1 (Windows-31J)
    // 0x98ef (UTF-16BE)
    if (argCheck == 'î—') {
        return true;
    }
    // No.2882
    // ê‡ñæ:94d2
    // 0x94d2 (Windows-31J)
    // 0x633d (UTF-16BE)
    if (argCheck == 'î“') {
        return true;
    }
    // No.2883
    // ê‡ñæ:94d3
    // 0x94d3 (Windows-31J)
    // 0x6669 (UTF-16BE)
    if (argCheck == 'î”') {
        return true;
    }
    // No.2884
    // ê‡ñæ:94d4
    // 0x94d4 (Windows-31J)
    // 0x756a (UTF-16BE)
    if (argCheck == 'î‘') {
        return true;
    }
    // No.2885
    // ê‡ñæ:94d5
    // 0x94d5 (Windows-31J)
    // 0x76e4 (UTF-16BE)
    if (argCheck == 'î’') {
        return true;
    }
    // No.2886
    // ê‡ñæ:94d6
    // 0x94d6 (Windows-31J)
    // 0x78d0 (UTF-16BE)
    if (argCheck == 'î÷') {
        return true;
    }
    // No.2887
    // ê‡ñæ:94d7
    // 0x94d7 (Windows-31J)
    // 0x8543 (UTF-16BE)
    if (argCheck == 'î◊') {
        return true;
    }
    // No.2888
    // ê‡ñæ:94d8
    // 0x94d8 (Windows-31J)
    // 0x86ee (UTF-16BE)
    if (argCheck == 'îÿ') {
        return true;
    }
    // No.2889
    // ê‡ñæ:94d9
    // 0x94d9 (Windows-31J)
    // 0x532a (UTF-16BE)
    if (argCheck == 'îŸ') {
        return true;
    }
    // No.2890
    // ê‡ñæ:94da
    // 0x94da (Windows-31J)
    // 0x5351 (UTF-16BE)
    if (argCheck == 'î⁄') {
        return true;
    }
    // No.2891
    // ê‡ñæ:94db
    // 0x94db (Windows-31J)
    // 0x5426 (UTF-16BE)
    if (argCheck == 'î€') {
        return true;
    }
    // No.2892
    // ê‡ñæ:94dc
    // 0x94dc (Windows-31J)
    // 0x5983 (UTF-16BE)
    if (argCheck == 'î‹') {
        return true;
    }
    // No.2893
    // ê‡ñæ:94dd
    // 0x94dd (Windows-31J)
    // 0x5e87 (UTF-16BE)
    if (argCheck == 'î›') {
        return true;
    }
    // No.2894
    // ê‡ñæ:94de
    // 0x94de (Windows-31J)
    // 0x5f7c (UTF-16BE)
    if (argCheck == 'îﬁ') {
        return true;
    }
    // No.2895
    // ê‡ñæ:94df
    // 0x94df (Windows-31J)
    // 0x60b2 (UTF-16BE)
    if (argCheck == 'îﬂ') {
        return true;
    }
    // No.2896
    // ê‡ñæ:94e0
    // 0x94e0 (Windows-31J)
    // 0x6249 (UTF-16BE)
    if (argCheck == 'î‡') {
        return true;
    }
    // No.2897
    // ê‡ñæ:94e1
    // 0x94e1 (Windows-31J)
    // 0x6279 (UTF-16BE)
    if (argCheck == 'î·') {
        return true;
    }
    // No.2898
    // ê‡ñæ:94e2
    // 0x94e2 (Windows-31J)
    // 0x62ab (UTF-16BE)
    if (argCheck == 'î‚') {
        return true;
    }
    // No.2899
    // ê‡ñæ:94e3
    // 0x94e3 (Windows-31J)
    // 0x6590 (UTF-16BE)
    if (argCheck == 'î„') {
        return true;
    }
    // No.2900
    // ê‡ñæ:94e4
    // 0x94e4 (Windows-31J)
    // 0x6bd4 (UTF-16BE)
    if (argCheck == 'î‰') {
        return true;
    }
    // No.2901
    // ê‡ñæ:94e5
    // 0x94e5 (Windows-31J)
    // 0x6ccc (UTF-16BE)
    if (argCheck == 'îÂ') {
        return true;
    }
    // No.2902
    // ê‡ñæ:94e6
    // 0x94e6 (Windows-31J)
    // 0x75b2 (UTF-16BE)
    if (argCheck == 'îÊ') {
        return true;
    }
    // No.2903
    // ê‡ñæ:94e7
    // 0x94e7 (Windows-31J)
    // 0x76ae (UTF-16BE)
    if (argCheck == 'îÁ') {
        return true;
    }
    // No.2904
    // ê‡ñæ:94e8
    // 0x94e8 (Windows-31J)
    // 0x7891 (UTF-16BE)
    if (argCheck == 'îË') {
        return true;
    }
    // No.2905
    // ê‡ñæ:94e9
    // 0x94e9 (Windows-31J)
    // 0x79d8 (UTF-16BE)
    if (argCheck == 'îÈ') {
        return true;
    }
    // No.2906
    // ê‡ñæ:94ea
    // 0x94ea (Windows-31J)
    // 0x7dcb (UTF-16BE)
    if (argCheck == 'îÍ') {
        return true;
    }
    // No.2907
    // ê‡ñæ:94eb
    // 0x94eb (Windows-31J)
    // 0x7f77 (UTF-16BE)
    if (argCheck == 'îÎ') {
        return true;
    }
    // No.2908
    // ê‡ñæ:94ec
    // 0x94ec (Windows-31J)
    // 0x80a5 (UTF-16BE)
    if (argCheck == 'îÏ') {
        return true;
    }
    // No.2909
    // ê‡ñæ:94ed
    // 0x94ed (Windows-31J)
    // 0x88ab (UTF-16BE)
    if (argCheck == 'îÌ') {
        return true;
    }
    // No.2910
    // ê‡ñæ:94ee
    // 0x94ee (Windows-31J)
    // 0x8ab9 (UTF-16BE)
    if (argCheck == 'îÓ') {
        return true;
    }
    // No.2911
    // ê‡ñæ:94ef
    // 0x94ef (Windows-31J)
    // 0x8cbb (UTF-16BE)
    if (argCheck == 'îÔ') {
        return true;
    }
    // No.2912
    // ê‡ñæ:94f0
    // 0x94f0 (Windows-31J)
    // 0x907f (UTF-16BE)
    if (argCheck == 'î') {
        return true;
    }
    // No.2913
    // ê‡ñæ:94f1
    // 0x94f1 (Windows-31J)
    // 0x975e (UTF-16BE)
    if (argCheck == 'îÒ') {
        return true;
    }
    // No.2914
    // ê‡ñæ:94f2
    // 0x94f2 (Windows-31J)
    // 0x98db (UTF-16BE)
    if (argCheck == 'îÚ') {
        return true;
    }
    // No.2915
    // ê‡ñæ:94f3
    // 0x94f3 (Windows-31J)
    // 0x6a0b (UTF-16BE)
    if (argCheck == 'îÛ') {
        return true;
    }
    // No.2916
    // ê‡ñæ:94f4
    // 0x94f4 (Windows-31J)
    // 0x7c38 (UTF-16BE)
    if (argCheck == 'îÙ') {
        return true;
    }
    // No.2917
    // ê‡ñæ:94f5
    // 0x94f5 (Windows-31J)
    // 0x5099 (UTF-16BE)
    if (argCheck == 'îı') {
        return true;
    }
    // No.2918
    // ê‡ñæ:94f6
    // 0x94f6 (Windows-31J)
    // 0x5c3e (UTF-16BE)
    if (argCheck == 'îˆ') {
        return true;
    }
    // No.2919
    // ê‡ñæ:94f7
    // 0x94f7 (Windows-31J)
    // 0x5fae (UTF-16BE)
    if (argCheck == 'î˜') {
        return true;
    }
    // No.2920
    // ê‡ñæ:94f8
    // 0x94f8 (Windows-31J)
    // 0x6787 (UTF-16BE)
    if (argCheck == 'î¯') {
        return true;
    }
    // No.2921
    // ê‡ñæ:94f9
    // 0x94f9 (Windows-31J)
    // 0x6bd8 (UTF-16BE)
    if (argCheck == 'î˘') {
        return true;
    }
    // No.2922
    // ê‡ñæ:94fa
    // 0x94fa (Windows-31J)
    // 0x7435 (UTF-16BE)
    if (argCheck == 'î˙') {
        return true;
    }
    // No.2923
    // ê‡ñæ:94fb
    // 0x94fb (Windows-31J)
    // 0x7709 (UTF-16BE)
    if (argCheck == 'î˚') {
        return true;
    }
    // No.2924
    // ê‡ñæ:94fc
    // 0x94fc (Windows-31J)
    // 0x7f8e (UTF-16BE)
    if (argCheck == 'î¸') {
        return true;
    }
    // No.2925
    // ê‡ñæ:9540
    // 0x9540 (Windows-31J)
    // 0x9f3b (UTF-16BE)
    if (argCheck == 'ï@') {
        return true;
    }
    // No.2926
    // ê‡ñæ:9541
    // 0x9541 (Windows-31J)
    // 0x67ca (UTF-16BE)
    if (argCheck == 'ïA') {
        return true;
    }
    // No.2927
    // ê‡ñæ:9542
    // 0x9542 (Windows-31J)
    // 0x7a17 (UTF-16BE)
    if (argCheck == 'ïB') {
        return true;
    }
    // No.2928
    // ê‡ñæ:9543
    // 0x9543 (Windows-31J)
    // 0x5339 (UTF-16BE)
    if (argCheck == 'ïC') {
        return true;
    }
    // No.2929
    // ê‡ñæ:9544
    // 0x9544 (Windows-31J)
    // 0x758b (UTF-16BE)
    if (argCheck == 'ïD') {
        return true;
    }
    // No.2930
    // ê‡ñæ:9545
    // 0x9545 (Windows-31J)
    // 0x9aed (UTF-16BE)
    if (argCheck == 'ïE') {
        return true;
    }
    // No.2931
    // ê‡ñæ:9546
    // 0x9546 (Windows-31J)
    // 0x5f66 (UTF-16BE)
    if (argCheck == 'ïF') {
        return true;
    }
    // No.2932
    // ê‡ñæ:9547
    // 0x9547 (Windows-31J)
    // 0x819d (UTF-16BE)
    if (argCheck == 'ïG') {
        return true;
    }
    // No.2933
    // ê‡ñæ:9548
    // 0x9548 (Windows-31J)
    // 0x83f1 (UTF-16BE)
    if (argCheck == 'ïH') {
        return true;
    }
    // No.2934
    // ê‡ñæ:9549
    // 0x9549 (Windows-31J)
    // 0x8098 (UTF-16BE)
    if (argCheck == 'ïI') {
        return true;
    }
    // No.2935
    // ê‡ñæ:954a
    // 0x954a (Windows-31J)
    // 0x5f3c (UTF-16BE)
    if (argCheck == 'ïJ') {
        return true;
    }
    // No.2936
    // ê‡ñæ:954b
    // 0x954b (Windows-31J)
    // 0x5fc5 (UTF-16BE)
    if (argCheck == 'ïK') {
        return true;
    }
    // No.2937
    // ê‡ñæ:954c
    // 0x954c (Windows-31J)
    // 0x7562 (UTF-16BE)
    if (argCheck == 'ïL') {
        return true;
    }
    // No.2938
    // ê‡ñæ:954d
    // 0x954d (Windows-31J)
    // 0x7b46 (UTF-16BE)
    if (argCheck == 'ïM') {
        return true;
    }
    // No.2939
    // ê‡ñæ:954e
    // 0x954e (Windows-31J)
    // 0x903c (UTF-16BE)
    if (argCheck == 'ïN') {
        return true;
    }
    // No.2940
    // ê‡ñæ:954f
    // 0x954f (Windows-31J)
    // 0x6867 (UTF-16BE)
    if (argCheck == 'ïO') {
        return true;
    }
    // No.2941
    // ê‡ñæ:9550
    // 0x9550 (Windows-31J)
    // 0x59eb (UTF-16BE)
    if (argCheck == 'ïP') {
        return true;
    }
    // No.2942
    // ê‡ñæ:9551
    // 0x9551 (Windows-31J)
    // 0x5a9b (UTF-16BE)
    if (argCheck == 'ïQ') {
        return true;
    }
    // No.2943
    // ê‡ñæ:9552
    // 0x9552 (Windows-31J)
    // 0x7d10 (UTF-16BE)
    if (argCheck == 'ïR') {
        return true;
    }
    // No.2944
    // ê‡ñæ:9553
    // 0x9553 (Windows-31J)
    // 0x767e (UTF-16BE)
    if (argCheck == 'ïS') {
        return true;
    }
    // No.2945
    // ê‡ñæ:9554
    // 0x9554 (Windows-31J)
    // 0x8b2c (UTF-16BE)
    if (argCheck == 'ïT') {
        return true;
    }
    // No.2946
    // ê‡ñæ:9555
    // 0x9555 (Windows-31J)
    // 0x4ff5 (UTF-16BE)
    if (argCheck == 'ïU') {
        return true;
    }
    // No.2947
    // ê‡ñæ:9556
    // 0x9556 (Windows-31J)
    // 0x5f6a (UTF-16BE)
    if (argCheck == 'ïV') {
        return true;
    }
    // No.2948
    // ê‡ñæ:9557
    // 0x9557 (Windows-31J)
    // 0x6a19 (UTF-16BE)
    if (argCheck == 'ïW') {
        return true;
    }
    // No.2949
    // ê‡ñæ:9558
    // 0x9558 (Windows-31J)
    // 0x6c37 (UTF-16BE)
    if (argCheck == 'ïX') {
        return true;
    }
    // No.2950
    // ê‡ñæ:9559
    // 0x9559 (Windows-31J)
    // 0x6f02 (UTF-16BE)
    if (argCheck == 'ïY') {
        return true;
    }
    // No.2951
    // ê‡ñæ:955a
    // 0x955a (Windows-31J)
    // 0x74e2 (UTF-16BE)
    if (argCheck == 'ïZ') {
        return true;
    }
    // No.2952
    // ê‡ñæ:955b
    // 0x955b (Windows-31J)
    // 0x7968 (UTF-16BE)
    if (argCheck == 'ï[') {
        return true;
    }
    // No.2953
    // ê‡ñæ:955c
    // 0x955c (Windows-31J)
    // 0x8868 (UTF-16BE)
    if (argCheck == 'ï\') {
        return true;
    }
    // No.2954
    // ê‡ñæ:955d
    // 0x955d (Windows-31J)
    // 0x8a55 (UTF-16BE)
    if (argCheck == 'ï]') {
        return true;
    }
    // No.2955
    // ê‡ñæ:955e
    // 0x955e (Windows-31J)
    // 0x8c79 (UTF-16BE)
    if (argCheck == 'ï^') {
        return true;
    }
    // No.2956
    // ê‡ñæ:955f
    // 0x955f (Windows-31J)
    // 0x5edf (UTF-16BE)
    if (argCheck == 'ï_') {
        return true;
    }
    // No.2957
    // ê‡ñæ:9560
    // 0x9560 (Windows-31J)
    // 0x63cf (UTF-16BE)
    if (argCheck == 'ï`') {
        return true;
    }
    // No.2958
    // ê‡ñæ:9561
    // 0x9561 (Windows-31J)
    // 0x75c5 (UTF-16BE)
    if (argCheck == 'ïa') {
        return true;
    }
    // No.2959
    // ê‡ñæ:9562
    // 0x9562 (Windows-31J)
    // 0x79d2 (UTF-16BE)
    if (argCheck == 'ïb') {
        return true;
    }
    // No.2960
    // ê‡ñæ:9563
    // 0x9563 (Windows-31J)
    // 0x82d7 (UTF-16BE)
    if (argCheck == 'ïc') {
        return true;
    }
    // No.2961
    // ê‡ñæ:9564
    // 0x9564 (Windows-31J)
    // 0x9328 (UTF-16BE)
    if (argCheck == 'ïd') {
        return true;
    }
    // No.2962
    // ê‡ñæ:9565
    // 0x9565 (Windows-31J)
    // 0x92f2 (UTF-16BE)
    if (argCheck == 'ïe') {
        return true;
    }
    // No.2963
    // ê‡ñæ:9566
    // 0x9566 (Windows-31J)
    // 0x849c (UTF-16BE)
    if (argCheck == 'ïf') {
        return true;
    }
    // No.2964
    // ê‡ñæ:9567
    // 0x9567 (Windows-31J)
    // 0x86ed (UTF-16BE)
    if (argCheck == 'ïg') {
        return true;
    }
    // No.2965
    // ê‡ñæ:9568
    // 0x9568 (Windows-31J)
    // 0x9c2d (UTF-16BE)
    if (argCheck == 'ïh') {
        return true;
    }
    // No.2966
    // ê‡ñæ:9569
    // 0x9569 (Windows-31J)
    // 0x54c1 (UTF-16BE)
    if (argCheck == 'ïi') {
        return true;
    }
    // No.2967
    // ê‡ñæ:956a
    // 0x956a (Windows-31J)
    // 0x5f6c (UTF-16BE)
    if (argCheck == 'ïj') {
        return true;
    }
    // No.2968
    // ê‡ñæ:956b
    // 0x956b (Windows-31J)
    // 0x658c (UTF-16BE)
    if (argCheck == 'ïk') {
        return true;
    }
    // No.2969
    // ê‡ñæ:956c
    // 0x956c (Windows-31J)
    // 0x6d5c (UTF-16BE)
    if (argCheck == 'ïl') {
        return true;
    }
    // No.2970
    // ê‡ñæ:956d
    // 0x956d (Windows-31J)
    // 0x7015 (UTF-16BE)
    if (argCheck == 'ïm') {
        return true;
    }
    // No.2971
    // ê‡ñæ:956e
    // 0x956e (Windows-31J)
    // 0x8ca7 (UTF-16BE)
    if (argCheck == 'ïn') {
        return true;
    }
    // No.2972
    // ê‡ñæ:956f
    // 0x956f (Windows-31J)
    // 0x8cd3 (UTF-16BE)
    if (argCheck == 'ïo') {
        return true;
    }
    // No.2973
    // ê‡ñæ:9570
    // 0x9570 (Windows-31J)
    // 0x983b (UTF-16BE)
    if (argCheck == 'ïp') {
        return true;
    }
    // No.2974
    // ê‡ñæ:9571
    // 0x9571 (Windows-31J)
    // 0x654f (UTF-16BE)
    if (argCheck == 'ïq') {
        return true;
    }
    // No.2975
    // ê‡ñæ:9572
    // 0x9572 (Windows-31J)
    // 0x74f6 (UTF-16BE)
    if (argCheck == 'ïr') {
        return true;
    }
    // No.2976
    // ê‡ñæ:9573
    // 0x9573 (Windows-31J)
    // 0x4e0d (UTF-16BE)
    if (argCheck == 'ïs') {
        return true;
    }
    // No.2977
    // ê‡ñæ:9574
    // 0x9574 (Windows-31J)
    // 0x4ed8 (UTF-16BE)
    if (argCheck == 'ït') {
        return true;
    }
    // No.2978
    // ê‡ñæ:9575
    // 0x9575 (Windows-31J)
    // 0x57e0 (UTF-16BE)
    if (argCheck == 'ïu') {
        return true;
    }
    // No.2979
    // ê‡ñæ:9576
    // 0x9576 (Windows-31J)
    // 0x592b (UTF-16BE)
    if (argCheck == 'ïv') {
        return true;
    }
    // No.2980
    // ê‡ñæ:9577
    // 0x9577 (Windows-31J)
    // 0x5a66 (UTF-16BE)
    if (argCheck == 'ïw') {
        return true;
    }
    // No.2981
    // ê‡ñæ:9578
    // 0x9578 (Windows-31J)
    // 0x5bcc (UTF-16BE)
    if (argCheck == 'ïx') {
        return true;
    }
    // No.2982
    // ê‡ñæ:9579
    // 0x9579 (Windows-31J)
    // 0x51a8 (UTF-16BE)
    if (argCheck == 'ïy') {
        return true;
    }
    // No.2983
    // ê‡ñæ:957a
    // 0x957a (Windows-31J)
    // 0x5e03 (UTF-16BE)
    if (argCheck == 'ïz') {
        return true;
    }
    // No.2984
    // ê‡ñæ:957b
    // 0x957b (Windows-31J)
    // 0x5e9c (UTF-16BE)
    if (argCheck == 'ï{') {
        return true;
    }
    // No.2985
    // ê‡ñæ:957c
    // 0x957c (Windows-31J)
    // 0x6016 (UTF-16BE)
    if (argCheck == 'ï|') {
        return true;
    }
    // No.2986
    // ê‡ñæ:957d
    // 0x957d (Windows-31J)
    // 0x6276 (UTF-16BE)
    if (argCheck == 'ï}') {
        return true;
    }
    // No.2987
    // ê‡ñæ:957e
    // 0x957e (Windows-31J)
    // 0x6577 (UTF-16BE)
    if (argCheck == 'ï~') {
        return true;
    }
    // No.2988
    // ê‡ñæ:9580
    // 0x9580 (Windows-31J)
    // 0x65a7 (UTF-16BE)
    if (argCheck == 'ïÄ') {
        return true;
    }
    // No.2989
    // ê‡ñæ:9581
    // 0x9581 (Windows-31J)
    // 0x666e (UTF-16BE)
    if (argCheck == 'ïÅ') {
        return true;
    }
    // No.2990
    // ê‡ñæ:9582
    // 0x9582 (Windows-31J)
    // 0x6d6e (UTF-16BE)
    if (argCheck == 'ïÇ') {
        return true;
    }
    // No.2991
    // ê‡ñæ:9583
    // 0x9583 (Windows-31J)
    // 0x7236 (UTF-16BE)
    if (argCheck == 'ïÉ') {
        return true;
    }
    // No.2992
    // ê‡ñæ:9584
    // 0x9584 (Windows-31J)
    // 0x7b26 (UTF-16BE)
    if (argCheck == 'ïÑ') {
        return true;
    }
    // No.2993
    // ê‡ñæ:9585
    // 0x9585 (Windows-31J)
    // 0x8150 (UTF-16BE)
    if (argCheck == 'ïÖ') {
        return true;
    }
    // No.2994
    // ê‡ñæ:9586
    // 0x9586 (Windows-31J)
    // 0x819a (UTF-16BE)
    if (argCheck == 'ïÜ') {
        return true;
    }
    // No.2995
    // ê‡ñæ:9587
    // 0x9587 (Windows-31J)
    // 0x8299 (UTF-16BE)
    if (argCheck == 'ïá') {
        return true;
    }
    // No.2996
    // ê‡ñæ:9588
    // 0x9588 (Windows-31J)
    // 0x8b5c (UTF-16BE)
    if (argCheck == 'ïà') {
        return true;
    }
    // No.2997
    // ê‡ñæ:9589
    // 0x9589 (Windows-31J)
    // 0x8ca0 (UTF-16BE)
    if (argCheck == 'ïâ') {
        return true;
    }
    // No.2998
    // ê‡ñæ:958a
    // 0x958a (Windows-31J)
    // 0x8ce6 (UTF-16BE)
    if (argCheck == 'ïä') {
        return true;
    }
    // No.2999
    // ê‡ñæ:958b
    // 0x958b (Windows-31J)
    // 0x8d74 (UTF-16BE)
    if (argCheck == 'ïã') {
        return true;
    }
    // No.3000
    // ê‡ñæ:958c
    // 0x958c (Windows-31J)
    // 0x961c (UTF-16BE)
    if (argCheck == 'ïå') {
        return true;
    }
    // No.3001
    // ê‡ñæ:958d
    // 0x958d (Windows-31J)
    // 0x9644 (UTF-16BE)
    if (argCheck == 'ïç') {
        return true;
    }
    // No.3002
    // ê‡ñæ:958e
    // 0x958e (Windows-31J)
    // 0x4fae (UTF-16BE)
    if (argCheck == 'ïé') {
        return true;
    }
    // No.3003
    // ê‡ñæ:958f
    // 0x958f (Windows-31J)
    // 0x64ab (UTF-16BE)
    if (argCheck == 'ïè') {
        return true;
    }
    // No.3004
    // ê‡ñæ:9590
    // 0x9590 (Windows-31J)
    // 0x6b66 (UTF-16BE)
    if (argCheck == 'ïê') {
        return true;
    }
    // No.3005
    // ê‡ñæ:9591
    // 0x9591 (Windows-31J)
    // 0x821e (UTF-16BE)
    if (argCheck == 'ïë') {
        return true;
    }
    // No.3006
    // ê‡ñæ:9592
    // 0x9592 (Windows-31J)
    // 0x8461 (UTF-16BE)
    if (argCheck == 'ïí') {
        return true;
    }
    // No.3007
    // ê‡ñæ:9593
    // 0x9593 (Windows-31J)
    // 0x856a (UTF-16BE)
    if (argCheck == 'ïì') {
        return true;
    }
    // No.3008
    // ê‡ñæ:9594
    // 0x9594 (Windows-31J)
    // 0x90e8 (UTF-16BE)
    if (argCheck == 'ïî') {
        return true;
    }
    // No.3009
    // ê‡ñæ:9595
    // 0x9595 (Windows-31J)
    // 0x5c01 (UTF-16BE)
    if (argCheck == 'ïï') {
        return true;
    }
    // No.3010
    // ê‡ñæ:9596
    // 0x9596 (Windows-31J)
    // 0x6953 (UTF-16BE)
    if (argCheck == 'ïñ') {
        return true;
    }
    // No.3011
    // ê‡ñæ:9597
    // 0x9597 (Windows-31J)
    // 0x98a8 (UTF-16BE)
    if (argCheck == 'ïó') {
        return true;
    }
    // No.3012
    // ê‡ñæ:9598
    // 0x9598 (Windows-31J)
    // 0x847a (UTF-16BE)
    if (argCheck == 'ïò') {
        return true;
    }
    // No.3013
    // ê‡ñæ:9599
    // 0x9599 (Windows-31J)
    // 0x8557 (UTF-16BE)
    if (argCheck == 'ïô') {
        return true;
    }
    // No.3014
    // ê‡ñæ:959a
    // 0x959a (Windows-31J)
    // 0x4f0f (UTF-16BE)
    if (argCheck == 'ïö') {
        return true;
    }
    // No.3015
    // ê‡ñæ:959b
    // 0x959b (Windows-31J)
    // 0x526f (UTF-16BE)
    if (argCheck == 'ïõ') {
        return true;
    }
    // No.3016
    // ê‡ñæ:959c
    // 0x959c (Windows-31J)
    // 0x5fa9 (UTF-16BE)
    if (argCheck == 'ïú') {
        return true;
    }
    // No.3017
    // ê‡ñæ:959d
    // 0x959d (Windows-31J)
    // 0x5e45 (UTF-16BE)
    if (argCheck == 'ïù') {
        return true;
    }
    // No.3018
    // ê‡ñæ:959e
    // 0x959e (Windows-31J)
    // 0x670d (UTF-16BE)
    if (argCheck == 'ïû') {
        return true;
    }
    // No.3019
    // ê‡ñæ:959f
    // 0x959f (Windows-31J)
    // 0x798f (UTF-16BE)
    if (argCheck == 'ïü') {
        return true;
    }
    // No.3020
    // ê‡ñæ:95a0
    // 0x95a0 (Windows-31J)
    // 0x8179 (UTF-16BE)
    if (argCheck == 'ï†') {
        return true;
    }
    // No.3021
    // ê‡ñæ:95a1
    // 0x95a1 (Windows-31J)
    // 0x8907 (UTF-16BE)
    if (argCheck == 'ï°') {
        return true;
    }
    // No.3022
    // ê‡ñæ:95a2
    // 0x95a2 (Windows-31J)
    // 0x8986 (UTF-16BE)
    if (argCheck == 'ï¢') {
        return true;
    }
    // No.3023
    // ê‡ñæ:95a3
    // 0x95a3 (Windows-31J)
    // 0x6df5 (UTF-16BE)
    if (argCheck == 'ï£') {
        return true;
    }
    // No.3024
    // ê‡ñæ:95a4
    // 0x95a4 (Windows-31J)
    // 0x5f17 (UTF-16BE)
    if (argCheck == 'ï§') {
        return true;
    }
    // No.3025
    // ê‡ñæ:95a5
    // 0x95a5 (Windows-31J)
    // 0x6255 (UTF-16BE)
    if (argCheck == 'ï•') {
        return true;
    }
    // No.3026
    // ê‡ñæ:95a6
    // 0x95a6 (Windows-31J)
    // 0x6cb8 (UTF-16BE)
    if (argCheck == 'ï¶') {
        return true;
    }
    // No.3027
    // ê‡ñæ:95a7
    // 0x95a7 (Windows-31J)
    // 0x4ecf (UTF-16BE)
    if (argCheck == 'ïß') {
        return true;
    }
    // No.3028
    // ê‡ñæ:95a8
    // 0x95a8 (Windows-31J)
    // 0x7269 (UTF-16BE)
    if (argCheck == 'ï®') {
        return true;
    }
    // No.3029
    // ê‡ñæ:95a9
    // 0x95a9 (Windows-31J)
    // 0x9b92 (UTF-16BE)
    if (argCheck == 'ï©') {
        return true;
    }
    // No.3030
    // ê‡ñæ:95aa
    // 0x95aa (Windows-31J)
    // 0x5206 (UTF-16BE)
    if (argCheck == 'ï™') {
        return true;
    }
    // No.3031
    // ê‡ñæ:95ab
    // 0x95ab (Windows-31J)
    // 0x543b (UTF-16BE)
    if (argCheck == 'ï´') {
        return true;
    }
    // No.3032
    // ê‡ñæ:95ac
    // 0x95ac (Windows-31J)
    // 0x5674 (UTF-16BE)
    if (argCheck == 'ï¨') {
        return true;
    }
    // No.3033
    // ê‡ñæ:95ad
    // 0x95ad (Windows-31J)
    // 0x58b3 (UTF-16BE)
    if (argCheck == 'ï≠') {
        return true;
    }
    // No.3034
    // ê‡ñæ:95ae
    // 0x95ae (Windows-31J)
    // 0x61a4 (UTF-16BE)
    if (argCheck == 'ïÆ') {
        return true;
    }
    // No.3035
    // ê‡ñæ:95af
    // 0x95af (Windows-31J)
    // 0x626e (UTF-16BE)
    if (argCheck == 'ïØ') {
        return true;
    }
    // No.3036
    // ê‡ñæ:95b0
    // 0x95b0 (Windows-31J)
    // 0x711a (UTF-16BE)
    if (argCheck == 'ï∞') {
        return true;
    }
    // No.3037
    // ê‡ñæ:95b1
    // 0x95b1 (Windows-31J)
    // 0x596e (UTF-16BE)
    if (argCheck == 'ï±') {
        return true;
    }
    // No.3038
    // ê‡ñæ:95b2
    // 0x95b2 (Windows-31J)
    // 0x7c89 (UTF-16BE)
    if (argCheck == 'ï≤') {
        return true;
    }
    // No.3039
    // ê‡ñæ:95b3
    // 0x95b3 (Windows-31J)
    // 0x7cde (UTF-16BE)
    if (argCheck == 'ï≥') {
        return true;
    }
    // No.3040
    // ê‡ñæ:95b4
    // 0x95b4 (Windows-31J)
    // 0x7d1b (UTF-16BE)
    if (argCheck == 'ï¥') {
        return true;
    }
    // No.3041
    // ê‡ñæ:95b5
    // 0x95b5 (Windows-31J)
    // 0x96f0 (UTF-16BE)
    if (argCheck == 'ïµ') {
        return true;
    }
    // No.3042
    // ê‡ñæ:95b6
    // 0x95b6 (Windows-31J)
    // 0x6587 (UTF-16BE)
    if (argCheck == 'ï∂') {
        return true;
    }
    // No.3043
    // ê‡ñæ:95b7
    // 0x95b7 (Windows-31J)
    // 0x805e (UTF-16BE)
    if (argCheck == 'ï∑') {
        return true;
    }
    // No.3044
    // ê‡ñæ:95b8
    // 0x95b8 (Windows-31J)
    // 0x4e19 (UTF-16BE)
    if (argCheck == 'ï∏') {
        return true;
    }
    // No.3045
    // ê‡ñæ:95b9
    // 0x95b9 (Windows-31J)
    // 0x4f75 (UTF-16BE)
    if (argCheck == 'ïπ') {
        return true;
    }
    // No.3046
    // ê‡ñæ:95ba
    // 0x95ba (Windows-31J)
    // 0x5175 (UTF-16BE)
    if (argCheck == 'ï∫') {
        return true;
    }
    // No.3047
    // ê‡ñæ:95bb
    // 0x95bb (Windows-31J)
    // 0x5840 (UTF-16BE)
    if (argCheck == 'ïª') {
        return true;
    }
    // No.3048
    // ê‡ñæ:95bc
    // 0x95bc (Windows-31J)
    // 0x5e63 (UTF-16BE)
    if (argCheck == 'ïº') {
        return true;
    }
    // No.3049
    // ê‡ñæ:95bd
    // 0x95bd (Windows-31J)
    // 0x5e73 (UTF-16BE)
    if (argCheck == 'ïΩ') {
        return true;
    }
    // No.3050
    // ê‡ñæ:95be
    // 0x95be (Windows-31J)
    // 0x5f0a (UTF-16BE)
    if (argCheck == 'ïæ') {
        return true;
    }
    // No.3051
    // ê‡ñæ:95bf
    // 0x95bf (Windows-31J)
    // 0x67c4 (UTF-16BE)
    if (argCheck == 'ïø') {
        return true;
    }
    // No.3052
    // ê‡ñæ:95c0
    // 0x95c0 (Windows-31J)
    // 0x4e26 (UTF-16BE)
    if (argCheck == 'ï¿') {
        return true;
    }
    // No.3053
    // ê‡ñæ:95c1
    // 0x95c1 (Windows-31J)
    // 0x853d (UTF-16BE)
    if (argCheck == 'ï¡') {
        return true;
    }
    // No.3054
    // ê‡ñæ:95c2
    // 0x95c2 (Windows-31J)
    // 0x9589 (UTF-16BE)
    if (argCheck == 'ï¬') {
        return true;
    }
    // No.3055
    // ê‡ñæ:95c3
    // 0x95c3 (Windows-31J)
    // 0x965b (UTF-16BE)
    if (argCheck == 'ï√') {
        return true;
    }
    // No.3056
    // ê‡ñæ:95c4
    // 0x95c4 (Windows-31J)
    // 0x7c73 (UTF-16BE)
    if (argCheck == 'ïƒ') {
        return true;
    }
    // No.3057
    // ê‡ñæ:95c5
    // 0x95c5 (Windows-31J)
    // 0x9801 (UTF-16BE)
    if (argCheck == 'ï≈') {
        return true;
    }
    // No.3058
    // ê‡ñæ:95c6
    // 0x95c6 (Windows-31J)
    // 0x50fb (UTF-16BE)
    if (argCheck == 'ï∆') {
        return true;
    }
    // No.3059
    // ê‡ñæ:95c7
    // 0x95c7 (Windows-31J)
    // 0x58c1 (UTF-16BE)
    if (argCheck == 'ï«') {
        return true;
    }
    // No.3060
    // ê‡ñæ:95c8
    // 0x95c8 (Windows-31J)
    // 0x7656 (UTF-16BE)
    if (argCheck == 'ï»') {
        return true;
    }
    // No.3061
    // ê‡ñæ:95c9
    // 0x95c9 (Windows-31J)
    // 0x78a7 (UTF-16BE)
    if (argCheck == 'ï…') {
        return true;
    }
    // No.3062
    // ê‡ñæ:95ca
    // 0x95ca (Windows-31J)
    // 0x5225 (UTF-16BE)
    if (argCheck == 'ï ') {
        return true;
    }
    // No.3063
    // ê‡ñæ:95cb
    // 0x95cb (Windows-31J)
    // 0x77a5 (UTF-16BE)
    if (argCheck == 'ïÀ') {
        return true;
    }
    // No.3064
    // ê‡ñæ:95cc
    // 0x95cc (Windows-31J)
    // 0x8511 (UTF-16BE)
    if (argCheck == 'ïÃ') {
        return true;
    }
    // No.3065
    // ê‡ñæ:95cd
    // 0x95cd (Windows-31J)
    // 0x7b86 (UTF-16BE)
    if (argCheck == 'ïÕ') {
        return true;
    }
    // No.3066
    // ê‡ñæ:95ce
    // 0x95ce (Windows-31J)
    // 0x504f (UTF-16BE)
    if (argCheck == 'ïŒ') {
        return true;
    }
    // No.3067
    // ê‡ñæ:95cf
    // 0x95cf (Windows-31J)
    // 0x5909 (UTF-16BE)
    if (argCheck == 'ïœ') {
        return true;
    }
    // No.3068
    // ê‡ñæ:95d0
    // 0x95d0 (Windows-31J)
    // 0x7247 (UTF-16BE)
    if (argCheck == 'ï–') {
        return true;
    }
    // No.3069
    // ê‡ñæ:95d1
    // 0x95d1 (Windows-31J)
    // 0x7bc7 (UTF-16BE)
    if (argCheck == 'ï—') {
        return true;
    }
    // No.3070
    // ê‡ñæ:95d2
    // 0x95d2 (Windows-31J)
    // 0x7de8 (UTF-16BE)
    if (argCheck == 'ï“') {
        return true;
    }
    // No.3071
    // ê‡ñæ:95d3
    // 0x95d3 (Windows-31J)
    // 0x8fba (UTF-16BE)
    if (argCheck == 'ï”') {
        return true;
    }
    // No.3072
    // ê‡ñæ:95d4
    // 0x95d4 (Windows-31J)
    // 0x8fd4 (UTF-16BE)
    if (argCheck == 'ï‘') {
        return true;
    }
    // No.3073
    // ê‡ñæ:95d5
    // 0x95d5 (Windows-31J)
    // 0x904d (UTF-16BE)
    if (argCheck == 'ï’') {
        return true;
    }
    // No.3074
    // ê‡ñæ:95d6
    // 0x95d6 (Windows-31J)
    // 0x4fbf (UTF-16BE)
    if (argCheck == 'ï÷') {
        return true;
    }
    // No.3075
    // ê‡ñæ:95d7
    // 0x95d7 (Windows-31J)
    // 0x52c9 (UTF-16BE)
    if (argCheck == 'ï◊') {
        return true;
    }
    // No.3076
    // ê‡ñæ:95d8
    // 0x95d8 (Windows-31J)
    // 0x5a29 (UTF-16BE)
    if (argCheck == 'ïÿ') {
        return true;
    }
    // No.3077
    // ê‡ñæ:95d9
    // 0x95d9 (Windows-31J)
    // 0x5f01 (UTF-16BE)
    if (argCheck == 'ïŸ') {
        return true;
    }
    // No.3078
    // ê‡ñæ:95da
    // 0x95da (Windows-31J)
    // 0x97ad (UTF-16BE)
    if (argCheck == 'ï⁄') {
        return true;
    }
    // No.3079
    // ê‡ñæ:95db
    // 0x95db (Windows-31J)
    // 0x4fdd (UTF-16BE)
    if (argCheck == 'ï€') {
        return true;
    }
    // No.3080
    // ê‡ñæ:95dc
    // 0x95dc (Windows-31J)
    // 0x8217 (UTF-16BE)
    if (argCheck == 'ï‹') {
        return true;
    }
    // No.3081
    // ê‡ñæ:95dd
    // 0x95dd (Windows-31J)
    // 0x92ea (UTF-16BE)
    if (argCheck == 'ï›') {
        return true;
    }
    // No.3082
    // ê‡ñæ:95de
    // 0x95de (Windows-31J)
    // 0x5703 (UTF-16BE)
    if (argCheck == 'ïﬁ') {
        return true;
    }
    // No.3083
    // ê‡ñæ:95df
    // 0x95df (Windows-31J)
    // 0x6355 (UTF-16BE)
    if (argCheck == 'ïﬂ') {
        return true;
    }
    // No.3084
    // ê‡ñæ:95e0
    // 0x95e0 (Windows-31J)
    // 0x6b69 (UTF-16BE)
    if (argCheck == 'ï‡') {
        return true;
    }
    // No.3085
    // ê‡ñæ:95e1
    // 0x95e1 (Windows-31J)
    // 0x752b (UTF-16BE)
    if (argCheck == 'ï·') {
        return true;
    }
    // No.3086
    // ê‡ñæ:95e2
    // 0x95e2 (Windows-31J)
    // 0x88dc (UTF-16BE)
    if (argCheck == 'ï‚') {
        return true;
    }
    // No.3087
    // ê‡ñæ:95e3
    // 0x95e3 (Windows-31J)
    // 0x8f14 (UTF-16BE)
    if (argCheck == 'ï„') {
        return true;
    }
    // No.3088
    // ê‡ñæ:95e4
    // 0x95e4 (Windows-31J)
    // 0x7a42 (UTF-16BE)
    if (argCheck == 'ï‰') {
        return true;
    }
    // No.3089
    // ê‡ñæ:95e5
    // 0x95e5 (Windows-31J)
    // 0x52df (UTF-16BE)
    if (argCheck == 'ïÂ') {
        return true;
    }
    // No.3090
    // ê‡ñæ:95e6
    // 0x95e6 (Windows-31J)
    // 0x5893 (UTF-16BE)
    if (argCheck == 'ïÊ') {
        return true;
    }
    // No.3091
    // ê‡ñæ:95e7
    // 0x95e7 (Windows-31J)
    // 0x6155 (UTF-16BE)
    if (argCheck == 'ïÁ') {
        return true;
    }
    // No.3092
    // ê‡ñæ:95e8
    // 0x95e8 (Windows-31J)
    // 0x620a (UTF-16BE)
    if (argCheck == 'ïË') {
        return true;
    }
    // No.3093
    // ê‡ñæ:95e9
    // 0x95e9 (Windows-31J)
    // 0x66ae (UTF-16BE)
    if (argCheck == 'ïÈ') {
        return true;
    }
    // No.3094
    // ê‡ñæ:95ea
    // 0x95ea (Windows-31J)
    // 0x6bcd (UTF-16BE)
    if (argCheck == 'ïÍ') {
        return true;
    }
    // No.3095
    // ê‡ñæ:95eb
    // 0x95eb (Windows-31J)
    // 0x7c3f (UTF-16BE)
    if (argCheck == 'ïÎ') {
        return true;
    }
    // No.3096
    // ê‡ñæ:95ec
    // 0x95ec (Windows-31J)
    // 0x83e9 (UTF-16BE)
    if (argCheck == 'ïÏ') {
        return true;
    }
    // No.3097
    // ê‡ñæ:95ed
    // 0x95ed (Windows-31J)
    // 0x5023 (UTF-16BE)
    if (argCheck == 'ïÌ') {
        return true;
    }
    // No.3098
    // ê‡ñæ:95ee
    // 0x95ee (Windows-31J)
    // 0x4ff8 (UTF-16BE)
    if (argCheck == 'ïÓ') {
        return true;
    }
    // No.3099
    // ê‡ñæ:95ef
    // 0x95ef (Windows-31J)
    // 0x5305 (UTF-16BE)
    if (argCheck == 'ïÔ') {
        return true;
    }
    // No.3100
    // ê‡ñæ:95f0
    // 0x95f0 (Windows-31J)
    // 0x5446 (UTF-16BE)
    if (argCheck == 'ï') {
        return true;
    }
    // No.3101
    // ê‡ñæ:95f1
    // 0x95f1 (Windows-31J)
    // 0x5831 (UTF-16BE)
    if (argCheck == 'ïÒ') {
        return true;
    }
    // No.3102
    // ê‡ñæ:95f2
    // 0x95f2 (Windows-31J)
    // 0x5949 (UTF-16BE)
    if (argCheck == 'ïÚ') {
        return true;
    }
    // No.3103
    // ê‡ñæ:95f3
    // 0x95f3 (Windows-31J)
    // 0x5b9d (UTF-16BE)
    if (argCheck == 'ïÛ') {
        return true;
    }
    // No.3104
    // ê‡ñæ:95f4
    // 0x95f4 (Windows-31J)
    // 0x5cf0 (UTF-16BE)
    if (argCheck == 'ïÙ') {
        return true;
    }
    // No.3105
    // ê‡ñæ:95f5
    // 0x95f5 (Windows-31J)
    // 0x5cef (UTF-16BE)
    if (argCheck == 'ïı') {
        return true;
    }
    // No.3106
    // ê‡ñæ:95f6
    // 0x95f6 (Windows-31J)
    // 0x5d29 (UTF-16BE)
    if (argCheck == 'ïˆ') {
        return true;
    }
    // No.3107
    // ê‡ñæ:95f7
    // 0x95f7 (Windows-31J)
    // 0x5e96 (UTF-16BE)
    if (argCheck == 'ï˜') {
        return true;
    }
    // No.3108
    // ê‡ñæ:95f8
    // 0x95f8 (Windows-31J)
    // 0x62b1 (UTF-16BE)
    if (argCheck == 'ï¯') {
        return true;
    }
    // No.3109
    // ê‡ñæ:95f9
    // 0x95f9 (Windows-31J)
    // 0x6367 (UTF-16BE)
    if (argCheck == 'ï˘') {
        return true;
    }
    // No.3110
    // ê‡ñæ:95fa
    // 0x95fa (Windows-31J)
    // 0x653e (UTF-16BE)
    if (argCheck == 'ï˙') {
        return true;
    }
    // No.3111
    // ê‡ñæ:95fb
    // 0x95fb (Windows-31J)
    // 0x65b9 (UTF-16BE)
    if (argCheck == 'ï˚') {
        return true;
    }
    // No.3112
    // ê‡ñæ:95fc
    // 0x95fc (Windows-31J)
    // 0x670b (UTF-16BE)
    if (argCheck == 'ï¸') {
        return true;
    }
    // No.3113
    // ê‡ñæ:9640
    // 0x9640 (Windows-31J)
    // 0x6cd5 (UTF-16BE)
    if (argCheck == 'ñ@') {
        return true;
    }
    // No.3114
    // ê‡ñæ:9641
    // 0x9641 (Windows-31J)
    // 0x6ce1 (UTF-16BE)
    if (argCheck == 'ñA') {
        return true;
    }
    // No.3115
    // ê‡ñæ:9642
    // 0x9642 (Windows-31J)
    // 0x70f9 (UTF-16BE)
    if (argCheck == 'ñB') {
        return true;
    }
    // No.3116
    // ê‡ñæ:9643
    // 0x9643 (Windows-31J)
    // 0x7832 (UTF-16BE)
    if (argCheck == 'ñC') {
        return true;
    }
    // No.3117
    // ê‡ñæ:9644
    // 0x9644 (Windows-31J)
    // 0x7e2b (UTF-16BE)
    if (argCheck == 'ñD') {
        return true;
    }
    // No.3118
    // ê‡ñæ:9645
    // 0x9645 (Windows-31J)
    // 0x80de (UTF-16BE)
    if (argCheck == 'ñE') {
        return true;
    }
    // No.3119
    // ê‡ñæ:9646
    // 0x9646 (Windows-31J)
    // 0x82b3 (UTF-16BE)
    if (argCheck == 'ñF') {
        return true;
    }
    // No.3120
    // ê‡ñæ:9647
    // 0x9647 (Windows-31J)
    // 0x840c (UTF-16BE)
    if (argCheck == 'ñG') {
        return true;
    }
    // No.3121
    // ê‡ñæ:9648
    // 0x9648 (Windows-31J)
    // 0x84ec (UTF-16BE)
    if (argCheck == 'ñH') {
        return true;
    }
    // No.3122
    // ê‡ñæ:9649
    // 0x9649 (Windows-31J)
    // 0x8702 (UTF-16BE)
    if (argCheck == 'ñI') {
        return true;
    }
    // No.3123
    // ê‡ñæ:964a
    // 0x964a (Windows-31J)
    // 0x8912 (UTF-16BE)
    if (argCheck == 'ñJ') {
        return true;
    }
    // No.3124
    // ê‡ñæ:964b
    // 0x964b (Windows-31J)
    // 0x8a2a (UTF-16BE)
    if (argCheck == 'ñK') {
        return true;
    }
    // No.3125
    // ê‡ñæ:964c
    // 0x964c (Windows-31J)
    // 0x8c4a (UTF-16BE)
    if (argCheck == 'ñL') {
        return true;
    }
    // No.3126
    // ê‡ñæ:964d
    // 0x964d (Windows-31J)
    // 0x90a6 (UTF-16BE)
    if (argCheck == 'ñM') {
        return true;
    }
    // No.3127
    // ê‡ñæ:964e
    // 0x964e (Windows-31J)
    // 0x92d2 (UTF-16BE)
    if (argCheck == 'ñN') {
        return true;
    }
    // No.3128
    // ê‡ñæ:964f
    // 0x964f (Windows-31J)
    // 0x98fd (UTF-16BE)
    if (argCheck == 'ñO') {
        return true;
    }
    // No.3129
    // ê‡ñæ:9650
    // 0x9650 (Windows-31J)
    // 0x9cf3 (UTF-16BE)
    if (argCheck == 'ñP') {
        return true;
    }
    // No.3130
    // ê‡ñæ:9651
    // 0x9651 (Windows-31J)
    // 0x9d6c (UTF-16BE)
    if (argCheck == 'ñQ') {
        return true;
    }
    // No.3131
    // ê‡ñæ:9652
    // 0x9652 (Windows-31J)
    // 0x4e4f (UTF-16BE)
    if (argCheck == 'ñR') {
        return true;
    }
    // No.3132
    // ê‡ñæ:9653
    // 0x9653 (Windows-31J)
    // 0x4ea1 (UTF-16BE)
    if (argCheck == 'ñS') {
        return true;
    }
    // No.3133
    // ê‡ñæ:9654
    // 0x9654 (Windows-31J)
    // 0x508d (UTF-16BE)
    if (argCheck == 'ñT') {
        return true;
    }
    // No.3134
    // ê‡ñæ:9655
    // 0x9655 (Windows-31J)
    // 0x5256 (UTF-16BE)
    if (argCheck == 'ñU') {
        return true;
    }
    // No.3135
    // ê‡ñæ:9656
    // 0x9656 (Windows-31J)
    // 0x574a (UTF-16BE)
    if (argCheck == 'ñV') {
        return true;
    }
    // No.3136
    // ê‡ñæ:9657
    // 0x9657 (Windows-31J)
    // 0x59a8 (UTF-16BE)
    if (argCheck == 'ñW') {
        return true;
    }
    // No.3137
    // ê‡ñæ:9658
    // 0x9658 (Windows-31J)
    // 0x5e3d (UTF-16BE)
    if (argCheck == 'ñX') {
        return true;
    }
    // No.3138
    // ê‡ñæ:9659
    // 0x9659 (Windows-31J)
    // 0x5fd8 (UTF-16BE)
    if (argCheck == 'ñY') {
        return true;
    }
    // No.3139
    // ê‡ñæ:965a
    // 0x965a (Windows-31J)
    // 0x5fd9 (UTF-16BE)
    if (argCheck == 'ñZ') {
        return true;
    }
    // No.3140
    // ê‡ñæ:965b
    // 0x965b (Windows-31J)
    // 0x623f (UTF-16BE)
    if (argCheck == 'ñ[') {
        return true;
    }
    // No.3141
    // ê‡ñæ:965c
    // 0x965c (Windows-31J)
    // 0x66b4 (UTF-16BE)
    if (argCheck == 'ñ\') {
        return true;
    }
    // No.3142
    // ê‡ñæ:965d
    // 0x965d (Windows-31J)
    // 0x671b (UTF-16BE)
    if (argCheck == 'ñ]') {
        return true;
    }
    // No.3143
    // ê‡ñæ:965e
    // 0x965e (Windows-31J)
    // 0x67d0 (UTF-16BE)
    if (argCheck == 'ñ^') {
        return true;
    }
    // No.3144
    // ê‡ñæ:965f
    // 0x965f (Windows-31J)
    // 0x68d2 (UTF-16BE)
    if (argCheck == 'ñ_') {
        return true;
    }
    // No.3145
    // ê‡ñæ:9660
    // 0x9660 (Windows-31J)
    // 0x5192 (UTF-16BE)
    if (argCheck == 'ñ`') {
        return true;
    }
    // No.3146
    // ê‡ñæ:9661
    // 0x9661 (Windows-31J)
    // 0x7d21 (UTF-16BE)
    if (argCheck == 'ña') {
        return true;
    }
    // No.3147
    // ê‡ñæ:9662
    // 0x9662 (Windows-31J)
    // 0x80aa (UTF-16BE)
    if (argCheck == 'ñb') {
        return true;
    }
    // No.3148
    // ê‡ñæ:9663
    // 0x9663 (Windows-31J)
    // 0x81a8 (UTF-16BE)
    if (argCheck == 'ñc') {
        return true;
    }
    // No.3149
    // ê‡ñæ:9664
    // 0x9664 (Windows-31J)
    // 0x8b00 (UTF-16BE)
    if (argCheck == 'ñd') {
        return true;
    }
    // No.3150
    // ê‡ñæ:9665
    // 0x9665 (Windows-31J)
    // 0x8c8c (UTF-16BE)
    if (argCheck == 'ñe') {
        return true;
    }
    // No.3151
    // ê‡ñæ:9666
    // 0x9666 (Windows-31J)
    // 0x8cbf (UTF-16BE)
    if (argCheck == 'ñf') {
        return true;
    }
    // No.3152
    // ê‡ñæ:9667
    // 0x9667 (Windows-31J)
    // 0x927e (UTF-16BE)
    if (argCheck == 'ñg') {
        return true;
    }
    // No.3153
    // ê‡ñæ:9668
    // 0x9668 (Windows-31J)
    // 0x9632 (UTF-16BE)
    if (argCheck == 'ñh') {
        return true;
    }
    // No.3154
    // ê‡ñæ:9669
    // 0x9669 (Windows-31J)
    // 0x5420 (UTF-16BE)
    if (argCheck == 'ñi') {
        return true;
    }
    // No.3155
    // ê‡ñæ:966a
    // 0x966a (Windows-31J)
    // 0x982c (UTF-16BE)
    if (argCheck == 'ñj') {
        return true;
    }
    // No.3156
    // ê‡ñæ:966b
    // 0x966b (Windows-31J)
    // 0x5317 (UTF-16BE)
    if (argCheck == 'ñk') {
        return true;
    }
    // No.3157
    // ê‡ñæ:966c
    // 0x966c (Windows-31J)
    // 0x50d5 (UTF-16BE)
    if (argCheck == 'ñl') {
        return true;
    }
    // No.3158
    // ê‡ñæ:966d
    // 0x966d (Windows-31J)
    // 0x535c (UTF-16BE)
    if (argCheck == 'ñm') {
        return true;
    }
    // No.3159
    // ê‡ñæ:966e
    // 0x966e (Windows-31J)
    // 0x58a8 (UTF-16BE)
    if (argCheck == 'ñn') {
        return true;
    }
    // No.3160
    // ê‡ñæ:966f
    // 0x966f (Windows-31J)
    // 0x64b2 (UTF-16BE)
    if (argCheck == 'ño') {
        return true;
    }
    // No.3161
    // ê‡ñæ:9670
    // 0x9670 (Windows-31J)
    // 0x6734 (UTF-16BE)
    if (argCheck == 'ñp') {
        return true;
    }
    // No.3162
    // ê‡ñæ:9671
    // 0x9671 (Windows-31J)
    // 0x7267 (UTF-16BE)
    if (argCheck == 'ñq') {
        return true;
    }
    // No.3163
    // ê‡ñæ:9672
    // 0x9672 (Windows-31J)
    // 0x7766 (UTF-16BE)
    if (argCheck == 'ñr') {
        return true;
    }
    // No.3164
    // ê‡ñæ:9673
    // 0x9673 (Windows-31J)
    // 0x7a46 (UTF-16BE)
    if (argCheck == 'ñs') {
        return true;
    }
    // No.3165
    // ê‡ñæ:9674
    // 0x9674 (Windows-31J)
    // 0x91e6 (UTF-16BE)
    if (argCheck == 'ñt') {
        return true;
    }
    // No.3166
    // ê‡ñæ:9675
    // 0x9675 (Windows-31J)
    // 0x52c3 (UTF-16BE)
    if (argCheck == 'ñu') {
        return true;
    }
    // No.3167
    // ê‡ñæ:9676
    // 0x9676 (Windows-31J)
    // 0x6ca1 (UTF-16BE)
    if (argCheck == 'ñv') {
        return true;
    }
    // No.3168
    // ê‡ñæ:9677
    // 0x9677 (Windows-31J)
    // 0x6b86 (UTF-16BE)
    if (argCheck == 'ñw') {
        return true;
    }
    // No.3169
    // ê‡ñæ:9678
    // 0x9678 (Windows-31J)
    // 0x5800 (UTF-16BE)
    if (argCheck == 'ñx') {
        return true;
    }
    // No.3170
    // ê‡ñæ:9679
    // 0x9679 (Windows-31J)
    // 0x5e4c (UTF-16BE)
    if (argCheck == 'ñy') {
        return true;
    }
    // No.3171
    // ê‡ñæ:967a
    // 0x967a (Windows-31J)
    // 0x5954 (UTF-16BE)
    if (argCheck == 'ñz') {
        return true;
    }
    // No.3172
    // ê‡ñæ:967b
    // 0x967b (Windows-31J)
    // 0x672c (UTF-16BE)
    if (argCheck == 'ñ{') {
        return true;
    }
    // No.3173
    // ê‡ñæ:967c
    // 0x967c (Windows-31J)
    // 0x7ffb (UTF-16BE)
    if (argCheck == 'ñ|') {
        return true;
    }
    // No.3174
    // ê‡ñæ:967d
    // 0x967d (Windows-31J)
    // 0x51e1 (UTF-16BE)
    if (argCheck == 'ñ}') {
        return true;
    }
    // No.3175
    // ê‡ñæ:967e
    // 0x967e (Windows-31J)
    // 0x76c6 (UTF-16BE)
    if (argCheck == 'ñ~') {
        return true;
    }
    // No.3176
    // ê‡ñæ:9680
    // 0x9680 (Windows-31J)
    // 0x6469 (UTF-16BE)
    if (argCheck == 'ñÄ') {
        return true;
    }
    // No.3177
    // ê‡ñæ:9681
    // 0x9681 (Windows-31J)
    // 0x78e8 (UTF-16BE)
    if (argCheck == 'ñÅ') {
        return true;
    }
    // No.3178
    // ê‡ñæ:9682
    // 0x9682 (Windows-31J)
    // 0x9b54 (UTF-16BE)
    if (argCheck == 'ñÇ') {
        return true;
    }
    // No.3179
    // ê‡ñæ:9683
    // 0x9683 (Windows-31J)
    // 0x9ebb (UTF-16BE)
    if (argCheck == 'ñÉ') {
        return true;
    }
    // No.3180
    // ê‡ñæ:9684
    // 0x9684 (Windows-31J)
    // 0x57cb (UTF-16BE)
    if (argCheck == 'ñÑ') {
        return true;
    }
    // No.3181
    // ê‡ñæ:9685
    // 0x9685 (Windows-31J)
    // 0x59b9 (UTF-16BE)
    if (argCheck == 'ñÖ') {
        return true;
    }
    // No.3182
    // ê‡ñæ:9686
    // 0x9686 (Windows-31J)
    // 0x6627 (UTF-16BE)
    if (argCheck == 'ñÜ') {
        return true;
    }
    // No.3183
    // ê‡ñæ:9687
    // 0x9687 (Windows-31J)
    // 0x679a (UTF-16BE)
    if (argCheck == 'ñá') {
        return true;
    }
    // No.3184
    // ê‡ñæ:9688
    // 0x9688 (Windows-31J)
    // 0x6bce (UTF-16BE)
    if (argCheck == 'ñà') {
        return true;
    }
    // No.3185
    // ê‡ñæ:9689
    // 0x9689 (Windows-31J)
    // 0x54e9 (UTF-16BE)
    if (argCheck == 'ñâ') {
        return true;
    }
    // No.3186
    // ê‡ñæ:968a
    // 0x968a (Windows-31J)
    // 0x69d9 (UTF-16BE)
    if (argCheck == 'ñä') {
        return true;
    }
    // No.3187
    // ê‡ñæ:968b
    // 0x968b (Windows-31J)
    // 0x5e55 (UTF-16BE)
    if (argCheck == 'ñã') {
        return true;
    }
    // No.3188
    // ê‡ñæ:968c
    // 0x968c (Windows-31J)
    // 0x819c (UTF-16BE)
    if (argCheck == 'ñå') {
        return true;
    }
    // No.3189
    // ê‡ñæ:968d
    // 0x968d (Windows-31J)
    // 0x6795 (UTF-16BE)
    if (argCheck == 'ñç') {
        return true;
    }
    // No.3190
    // ê‡ñæ:968e
    // 0x968e (Windows-31J)
    // 0x9baa (UTF-16BE)
    if (argCheck == 'ñé') {
        return true;
    }
    // No.3191
    // ê‡ñæ:968f
    // 0x968f (Windows-31J)
    // 0x67fe (UTF-16BE)
    if (argCheck == 'ñè') {
        return true;
    }
    // No.3192
    // ê‡ñæ:9690
    // 0x9690 (Windows-31J)
    // 0x9c52 (UTF-16BE)
    if (argCheck == 'ñê') {
        return true;
    }
    // No.3193
    // ê‡ñæ:9691
    // 0x9691 (Windows-31J)
    // 0x685d (UTF-16BE)
    if (argCheck == 'ñë') {
        return true;
    }
    // No.3194
    // ê‡ñæ:9692
    // 0x9692 (Windows-31J)
    // 0x4ea6 (UTF-16BE)
    if (argCheck == 'ñí') {
        return true;
    }
    // No.3195
    // ê‡ñæ:9693
    // 0x9693 (Windows-31J)
    // 0x4fe3 (UTF-16BE)
    if (argCheck == 'ñì') {
        return true;
    }
    // No.3196
    // ê‡ñæ:9694
    // 0x9694 (Windows-31J)
    // 0x53c8 (UTF-16BE)
    if (argCheck == 'ñî') {
        return true;
    }
    // No.3197
    // ê‡ñæ:9695
    // 0x9695 (Windows-31J)
    // 0x62b9 (UTF-16BE)
    if (argCheck == 'ñï') {
        return true;
    }
    // No.3198
    // ê‡ñæ:9696
    // 0x9696 (Windows-31J)
    // 0x672b (UTF-16BE)
    if (argCheck == 'ññ') {
        return true;
    }
    // No.3199
    // ê‡ñæ:9697
    // 0x9697 (Windows-31J)
    // 0x6cab (UTF-16BE)
    if (argCheck == 'ñó') {
        return true;
    }
    // No.3200
    // ê‡ñæ:9698
    // 0x9698 (Windows-31J)
    // 0x8fc4 (UTF-16BE)
    if (argCheck == 'ñò') {
        return true;
    }
    // No.3201
    // ê‡ñæ:9699
    // 0x9699 (Windows-31J)
    // 0x4fad (UTF-16BE)
    if (argCheck == 'ñô') {
        return true;
    }
    // No.3202
    // ê‡ñæ:969a
    // 0x969a (Windows-31J)
    // 0x7e6d (UTF-16BE)
    if (argCheck == 'ñö') {
        return true;
    }
    // No.3203
    // ê‡ñæ:969b
    // 0x969b (Windows-31J)
    // 0x9ebf (UTF-16BE)
    if (argCheck == 'ñõ') {
        return true;
    }
    // No.3204
    // ê‡ñæ:969c
    // 0x969c (Windows-31J)
    // 0x4e07 (UTF-16BE)
    if (argCheck == 'ñú') {
        return true;
    }
    // No.3205
    // ê‡ñæ:969d
    // 0x969d (Windows-31J)
    // 0x6162 (UTF-16BE)
    if (argCheck == 'ñù') {
        return true;
    }
    // No.3206
    // ê‡ñæ:969e
    // 0x969e (Windows-31J)
    // 0x6e80 (UTF-16BE)
    if (argCheck == 'ñû') {
        return true;
    }
    // No.3207
    // ê‡ñæ:969f
    // 0x969f (Windows-31J)
    // 0x6f2b (UTF-16BE)
    if (argCheck == 'ñü') {
        return true;
    }
    // No.3208
    // ê‡ñæ:96a0
    // 0x96a0 (Windows-31J)
    // 0x8513 (UTF-16BE)
    if (argCheck == 'ñ†') {
        return true;
    }
    // No.3209
    // ê‡ñæ:96a1
    // 0x96a1 (Windows-31J)
    // 0x5473 (UTF-16BE)
    if (argCheck == 'ñ°') {
        return true;
    }
    // No.3210
    // ê‡ñæ:96a2
    // 0x96a2 (Windows-31J)
    // 0x672a (UTF-16BE)
    if (argCheck == 'ñ¢') {
        return true;
    }
    // No.3211
    // ê‡ñæ:96a3
    // 0x96a3 (Windows-31J)
    // 0x9b45 (UTF-16BE)
    if (argCheck == 'ñ£') {
        return true;
    }
    // No.3212
    // ê‡ñæ:96a4
    // 0x96a4 (Windows-31J)
    // 0x5df3 (UTF-16BE)
    if (argCheck == 'ñ§') {
        return true;
    }
    // No.3213
    // ê‡ñæ:96a5
    // 0x96a5 (Windows-31J)
    // 0x7b95 (UTF-16BE)
    if (argCheck == 'ñ•') {
        return true;
    }
    // No.3214
    // ê‡ñæ:96a6
    // 0x96a6 (Windows-31J)
    // 0x5cac (UTF-16BE)
    if (argCheck == 'ñ¶') {
        return true;
    }
    // No.3215
    // ê‡ñæ:96a7
    // 0x96a7 (Windows-31J)
    // 0x5bc6 (UTF-16BE)
    if (argCheck == 'ñß') {
        return true;
    }
    // No.3216
    // ê‡ñæ:96a8
    // 0x96a8 (Windows-31J)
    // 0x871c (UTF-16BE)
    if (argCheck == 'ñ®') {
        return true;
    }
    // No.3217
    // ê‡ñæ:96a9
    // 0x96a9 (Windows-31J)
    // 0x6e4a (UTF-16BE)
    if (argCheck == 'ñ©') {
        return true;
    }
    // No.3218
    // ê‡ñæ:96aa
    // 0x96aa (Windows-31J)
    // 0x84d1 (UTF-16BE)
    if (argCheck == 'ñ™') {
        return true;
    }
    // No.3219
    // ê‡ñæ:96ab
    // 0x96ab (Windows-31J)
    // 0x7a14 (UTF-16BE)
    if (argCheck == 'ñ´') {
        return true;
    }
    // No.3220
    // ê‡ñæ:96ac
    // 0x96ac (Windows-31J)
    // 0x8108 (UTF-16BE)
    if (argCheck == 'ñ¨') {
        return true;
    }
    // No.3221
    // ê‡ñæ:96ad
    // 0x96ad (Windows-31J)
    // 0x5999 (UTF-16BE)
    if (argCheck == 'ñ≠') {
        return true;
    }
    // No.3222
    // ê‡ñæ:96ae
    // 0x96ae (Windows-31J)
    // 0x7c8d (UTF-16BE)
    if (argCheck == 'ñÆ') {
        return true;
    }
    // No.3223
    // ê‡ñæ:96af
    // 0x96af (Windows-31J)
    // 0x6c11 (UTF-16BE)
    if (argCheck == 'ñØ') {
        return true;
    }
    // No.3224
    // ê‡ñæ:96b0
    // 0x96b0 (Windows-31J)
    // 0x7720 (UTF-16BE)
    if (argCheck == 'ñ∞') {
        return true;
    }
    // No.3225
    // ê‡ñæ:96b1
    // 0x96b1 (Windows-31J)
    // 0x52d9 (UTF-16BE)
    if (argCheck == 'ñ±') {
        return true;
    }
    // No.3226
    // ê‡ñæ:96b2
    // 0x96b2 (Windows-31J)
    // 0x5922 (UTF-16BE)
    if (argCheck == 'ñ≤') {
        return true;
    }
    // No.3227
    // ê‡ñæ:96b3
    // 0x96b3 (Windows-31J)
    // 0x7121 (UTF-16BE)
    if (argCheck == 'ñ≥') {
        return true;
    }
    // No.3228
    // ê‡ñæ:96b4
    // 0x96b4 (Windows-31J)
    // 0x725f (UTF-16BE)
    if (argCheck == 'ñ¥') {
        return true;
    }
    // No.3229
    // ê‡ñæ:96b5
    // 0x96b5 (Windows-31J)
    // 0x77db (UTF-16BE)
    if (argCheck == 'ñµ') {
        return true;
    }
    // No.3230
    // ê‡ñæ:96b6
    // 0x96b6 (Windows-31J)
    // 0x9727 (UTF-16BE)
    if (argCheck == 'ñ∂') {
        return true;
    }
    // No.3231
    // ê‡ñæ:96b7
    // 0x96b7 (Windows-31J)
    // 0x9d61 (UTF-16BE)
    if (argCheck == 'ñ∑') {
        return true;
    }
    // No.3232
    // ê‡ñæ:96b8
    // 0x96b8 (Windows-31J)
    // 0x690b (UTF-16BE)
    if (argCheck == 'ñ∏') {
        return true;
    }
    // No.3233
    // ê‡ñæ:96b9
    // 0x96b9 (Windows-31J)
    // 0x5a7f (UTF-16BE)
    if (argCheck == 'ñπ') {
        return true;
    }
    // No.3234
    // ê‡ñæ:96ba
    // 0x96ba (Windows-31J)
    // 0x5a18 (UTF-16BE)
    if (argCheck == 'ñ∫') {
        return true;
    }
    // No.3235
    // ê‡ñæ:96bb
    // 0x96bb (Windows-31J)
    // 0x51a5 (UTF-16BE)
    if (argCheck == 'ñª') {
        return true;
    }
    // No.3236
    // ê‡ñæ:96bc
    // 0x96bc (Windows-31J)
    // 0x540d (UTF-16BE)
    if (argCheck == 'ñº') {
        return true;
    }
    // No.3237
    // ê‡ñæ:96bd
    // 0x96bd (Windows-31J)
    // 0x547d (UTF-16BE)
    if (argCheck == 'ñΩ') {
        return true;
    }
    // No.3238
    // ê‡ñæ:96be
    // 0x96be (Windows-31J)
    // 0x660e (UTF-16BE)
    if (argCheck == 'ñæ') {
        return true;
    }
    // No.3239
    // ê‡ñæ:96bf
    // 0x96bf (Windows-31J)
    // 0x76df (UTF-16BE)
    if (argCheck == 'ñø') {
        return true;
    }
    // No.3240
    // ê‡ñæ:96c0
    // 0x96c0 (Windows-31J)
    // 0x8ff7 (UTF-16BE)
    if (argCheck == 'ñ¿') {
        return true;
    }
    // No.3241
    // ê‡ñæ:96c1
    // 0x96c1 (Windows-31J)
    // 0x9298 (UTF-16BE)
    if (argCheck == 'ñ¡') {
        return true;
    }
    // No.3242
    // ê‡ñæ:96c2
    // 0x96c2 (Windows-31J)
    // 0x9cf4 (UTF-16BE)
    if (argCheck == 'ñ¬') {
        return true;
    }
    // No.3243
    // ê‡ñæ:96c3
    // 0x96c3 (Windows-31J)
    // 0x59ea (UTF-16BE)
    if (argCheck == 'ñ√') {
        return true;
    }
    // No.3244
    // ê‡ñæ:96c4
    // 0x96c4 (Windows-31J)
    // 0x725d (UTF-16BE)
    if (argCheck == 'ñƒ') {
        return true;
    }
    // No.3245
    // ê‡ñæ:96c5
    // 0x96c5 (Windows-31J)
    // 0x6ec5 (UTF-16BE)
    if (argCheck == 'ñ≈') {
        return true;
    }
    // No.3246
    // ê‡ñæ:96c6
    // 0x96c6 (Windows-31J)
    // 0x514d (UTF-16BE)
    if (argCheck == 'ñ∆') {
        return true;
    }
    // No.3247
    // ê‡ñæ:96c7
    // 0x96c7 (Windows-31J)
    // 0x68c9 (UTF-16BE)
    if (argCheck == 'ñ«') {
        return true;
    }
    // No.3248
    // ê‡ñæ:96c8
    // 0x96c8 (Windows-31J)
    // 0x7dbf (UTF-16BE)
    if (argCheck == 'ñ»') {
        return true;
    }
    // No.3249
    // ê‡ñæ:96c9
    // 0x96c9 (Windows-31J)
    // 0x7dec (UTF-16BE)
    if (argCheck == 'ñ…') {
        return true;
    }
    // No.3250
    // ê‡ñæ:96ca
    // 0x96ca (Windows-31J)
    // 0x9762 (UTF-16BE)
    if (argCheck == 'ñ ') {
        return true;
    }
    // No.3251
    // ê‡ñæ:96cb
    // 0x96cb (Windows-31J)
    // 0x9eba (UTF-16BE)
    if (argCheck == 'ñÀ') {
        return true;
    }
    // No.3252
    // ê‡ñæ:96cc
    // 0x96cc (Windows-31J)
    // 0x6478 (UTF-16BE)
    if (argCheck == 'ñÃ') {
        return true;
    }
    // No.3253
    // ê‡ñæ:96cd
    // 0x96cd (Windows-31J)
    // 0x6a21 (UTF-16BE)
    if (argCheck == 'ñÕ') {
        return true;
    }
    // No.3254
    // ê‡ñæ:96ce
    // 0x96ce (Windows-31J)
    // 0x8302 (UTF-16BE)
    if (argCheck == 'ñŒ') {
        return true;
    }
    // No.3255
    // ê‡ñæ:96cf
    // 0x96cf (Windows-31J)
    // 0x5984 (UTF-16BE)
    if (argCheck == 'ñœ') {
        return true;
    }
    // No.3256
    // ê‡ñæ:96d0
    // 0x96d0 (Windows-31J)
    // 0x5b5f (UTF-16BE)
    if (argCheck == 'ñ–') {
        return true;
    }
    // No.3257
    // ê‡ñæ:96d1
    // 0x96d1 (Windows-31J)
    // 0x6bdb (UTF-16BE)
    if (argCheck == 'ñ—') {
        return true;
    }
    // No.3258
    // ê‡ñæ:96d2
    // 0x96d2 (Windows-31J)
    // 0x731b (UTF-16BE)
    if (argCheck == 'ñ“') {
        return true;
    }
    // No.3259
    // ê‡ñæ:96d3
    // 0x96d3 (Windows-31J)
    // 0x76f2 (UTF-16BE)
    if (argCheck == 'ñ”') {
        return true;
    }
    // No.3260
    // ê‡ñæ:96d4
    // 0x96d4 (Windows-31J)
    // 0x7db2 (UTF-16BE)
    if (argCheck == 'ñ‘') {
        return true;
    }
    // No.3261
    // ê‡ñæ:96d5
    // 0x96d5 (Windows-31J)
    // 0x8017 (UTF-16BE)
    if (argCheck == 'ñ’') {
        return true;
    }
    // No.3262
    // ê‡ñæ:96d6
    // 0x96d6 (Windows-31J)
    // 0x8499 (UTF-16BE)
    if (argCheck == 'ñ÷') {
        return true;
    }
    // No.3263
    // ê‡ñæ:96d7
    // 0x96d7 (Windows-31J)
    // 0x5132 (UTF-16BE)
    if (argCheck == 'ñ◊') {
        return true;
    }
    // No.3264
    // ê‡ñæ:96d8
    // 0x96d8 (Windows-31J)
    // 0x6728 (UTF-16BE)
    if (argCheck == 'ñÿ') {
        return true;
    }
    // No.3265
    // ê‡ñæ:96d9
    // 0x96d9 (Windows-31J)
    // 0x9ed9 (UTF-16BE)
    if (argCheck == 'ñŸ') {
        return true;
    }
    // No.3266
    // ê‡ñæ:96da
    // 0x96da (Windows-31J)
    // 0x76ee (UTF-16BE)
    if (argCheck == 'ñ⁄') {
        return true;
    }
    // No.3267
    // ê‡ñæ:96db
    // 0x96db (Windows-31J)
    // 0x6762 (UTF-16BE)
    if (argCheck == 'ñ€') {
        return true;
    }
    // No.3268
    // ê‡ñæ:96dc
    // 0x96dc (Windows-31J)
    // 0x52ff (UTF-16BE)
    if (argCheck == 'ñ‹') {
        return true;
    }
    // No.3269
    // ê‡ñæ:96dd
    // 0x96dd (Windows-31J)
    // 0x9905 (UTF-16BE)
    if (argCheck == 'ñ›') {
        return true;
    }
    // No.3270
    // ê‡ñæ:96de
    // 0x96de (Windows-31J)
    // 0x5c24 (UTF-16BE)
    if (argCheck == 'ñﬁ') {
        return true;
    }
    // No.3271
    // ê‡ñæ:96df
    // 0x96df (Windows-31J)
    // 0x623b (UTF-16BE)
    if (argCheck == 'ñﬂ') {
        return true;
    }
    // No.3272
    // ê‡ñæ:96e0
    // 0x96e0 (Windows-31J)
    // 0x7c7e (UTF-16BE)
    if (argCheck == 'ñ‡') {
        return true;
    }
    // No.3273
    // ê‡ñæ:96e1
    // 0x96e1 (Windows-31J)
    // 0x8cb0 (UTF-16BE)
    if (argCheck == 'ñ·') {
        return true;
    }
    // No.3274
    // ê‡ñæ:96e2
    // 0x96e2 (Windows-31J)
    // 0x554f (UTF-16BE)
    if (argCheck == 'ñ‚') {
        return true;
    }
    // No.3275
    // ê‡ñæ:96e3
    // 0x96e3 (Windows-31J)
    // 0x60b6 (UTF-16BE)
    if (argCheck == 'ñ„') {
        return true;
    }
    // No.3276
    // ê‡ñæ:96e4
    // 0x96e4 (Windows-31J)
    // 0x7d0b (UTF-16BE)
    if (argCheck == 'ñ‰') {
        return true;
    }
    // No.3277
    // ê‡ñæ:96e5
    // 0x96e5 (Windows-31J)
    // 0x9580 (UTF-16BE)
    if (argCheck == 'ñÂ') {
        return true;
    }
    // No.3278
    // ê‡ñæ:96e6
    // 0x96e6 (Windows-31J)
    // 0x5301 (UTF-16BE)
    if (argCheck == 'ñÊ') {
        return true;
    }
    // No.3279
    // ê‡ñæ:96e7
    // 0x96e7 (Windows-31J)
    // 0x4e5f (UTF-16BE)
    if (argCheck == 'ñÁ') {
        return true;
    }
    // No.3280
    // ê‡ñæ:96e8
    // 0x96e8 (Windows-31J)
    // 0x51b6 (UTF-16BE)
    if (argCheck == 'ñË') {
        return true;
    }
    // No.3281
    // ê‡ñæ:96e9
    // 0x96e9 (Windows-31J)
    // 0x591c (UTF-16BE)
    if (argCheck == 'ñÈ') {
        return true;
    }
    // No.3282
    // ê‡ñæ:96ea
    // 0x96ea (Windows-31J)
    // 0x723a (UTF-16BE)
    if (argCheck == 'ñÍ') {
        return true;
    }
    // No.3283
    // ê‡ñæ:96eb
    // 0x96eb (Windows-31J)
    // 0x8036 (UTF-16BE)
    if (argCheck == 'ñÎ') {
        return true;
    }
    // No.3284
    // ê‡ñæ:96ec
    // 0x96ec (Windows-31J)
    // 0x91ce (UTF-16BE)
    if (argCheck == 'ñÏ') {
        return true;
    }
    // No.3285
    // ê‡ñæ:96ed
    // 0x96ed (Windows-31J)
    // 0x5f25 (UTF-16BE)
    if (argCheck == 'ñÌ') {
        return true;
    }
    // No.3286
    // ê‡ñæ:96ee
    // 0x96ee (Windows-31J)
    // 0x77e2 (UTF-16BE)
    if (argCheck == 'ñÓ') {
        return true;
    }
    // No.3287
    // ê‡ñæ:96ef
    // 0x96ef (Windows-31J)
    // 0x5384 (UTF-16BE)
    if (argCheck == 'ñÔ') {
        return true;
    }
    // No.3288
    // ê‡ñæ:96f0
    // 0x96f0 (Windows-31J)
    // 0x5f79 (UTF-16BE)
    if (argCheck == 'ñ') {
        return true;
    }
    // No.3289
    // ê‡ñæ:96f1
    // 0x96f1 (Windows-31J)
    // 0x7d04 (UTF-16BE)
    if (argCheck == 'ñÒ') {
        return true;
    }
    // No.3290
    // ê‡ñæ:96f2
    // 0x96f2 (Windows-31J)
    // 0x85ac (UTF-16BE)
    if (argCheck == 'ñÚ') {
        return true;
    }
    // No.3291
    // ê‡ñæ:96f3
    // 0x96f3 (Windows-31J)
    // 0x8a33 (UTF-16BE)
    if (argCheck == 'ñÛ') {
        return true;
    }
    // No.3292
    // ê‡ñæ:96f4
    // 0x96f4 (Windows-31J)
    // 0x8e8d (UTF-16BE)
    if (argCheck == 'ñÙ') {
        return true;
    }
    // No.3293
    // ê‡ñæ:96f5
    // 0x96f5 (Windows-31J)
    // 0x9756 (UTF-16BE)
    if (argCheck == 'ñı') {
        return true;
    }
    // No.3294
    // ê‡ñæ:96f6
    // 0x96f6 (Windows-31J)
    // 0x67f3 (UTF-16BE)
    if (argCheck == 'ñˆ') {
        return true;
    }
    // No.3295
    // ê‡ñæ:96f7
    // 0x96f7 (Windows-31J)
    // 0x85ae (UTF-16BE)
    if (argCheck == 'ñ˜') {
        return true;
    }
    // No.3296
    // ê‡ñæ:96f8
    // 0x96f8 (Windows-31J)
    // 0x9453 (UTF-16BE)
    if (argCheck == 'ñ¯') {
        return true;
    }
    // No.3297
    // ê‡ñæ:96f9
    // 0x96f9 (Windows-31J)
    // 0x6109 (UTF-16BE)
    if (argCheck == 'ñ˘') {
        return true;
    }
    // No.3298
    // ê‡ñæ:96fa
    // 0x96fa (Windows-31J)
    // 0x6108 (UTF-16BE)
    if (argCheck == 'ñ˙') {
        return true;
    }
    // No.3299
    // ê‡ñæ:96fb
    // 0x96fb (Windows-31J)
    // 0x6cb9 (UTF-16BE)
    if (argCheck == 'ñ˚') {
        return true;
    }
    // No.3300
    // ê‡ñæ:96fc
    // 0x96fc (Windows-31J)
    // 0x7652 (UTF-16BE)
    if (argCheck == 'ñ¸') {
        return true;
    }
    // No.3301
    // ê‡ñæ:9740
    // 0x9740 (Windows-31J)
    // 0x8aed (UTF-16BE)
    if (argCheck == 'ó@') {
        return true;
    }
    // No.3302
    // ê‡ñæ:9741
    // 0x9741 (Windows-31J)
    // 0x8f38 (UTF-16BE)
    if (argCheck == 'óA') {
        return true;
    }
    // No.3303
    // ê‡ñæ:9742
    // 0x9742 (Windows-31J)
    // 0x552f (UTF-16BE)
    if (argCheck == 'óB') {
        return true;
    }
    // No.3304
    // ê‡ñæ:9743
    // 0x9743 (Windows-31J)
    // 0x4f51 (UTF-16BE)
    if (argCheck == 'óC') {
        return true;
    }
    // No.3305
    // ê‡ñæ:9744
    // 0x9744 (Windows-31J)
    // 0x512a (UTF-16BE)
    if (argCheck == 'óD') {
        return true;
    }
    // No.3306
    // ê‡ñæ:9745
    // 0x9745 (Windows-31J)
    // 0x52c7 (UTF-16BE)
    if (argCheck == 'óE') {
        return true;
    }
    // No.3307
    // ê‡ñæ:9746
    // 0x9746 (Windows-31J)
    // 0x53cb (UTF-16BE)
    if (argCheck == 'óF') {
        return true;
    }
    // No.3308
    // ê‡ñæ:9747
    // 0x9747 (Windows-31J)
    // 0x5ba5 (UTF-16BE)
    if (argCheck == 'óG') {
        return true;
    }
    // No.3309
    // ê‡ñæ:9748
    // 0x9748 (Windows-31J)
    // 0x5e7d (UTF-16BE)
    if (argCheck == 'óH') {
        return true;
    }
    // No.3310
    // ê‡ñæ:9749
    // 0x9749 (Windows-31J)
    // 0x60a0 (UTF-16BE)
    if (argCheck == 'óI') {
        return true;
    }
    // No.3311
    // ê‡ñæ:974a
    // 0x974a (Windows-31J)
    // 0x6182 (UTF-16BE)
    if (argCheck == 'óJ') {
        return true;
    }
    // No.3312
    // ê‡ñæ:974b
    // 0x974b (Windows-31J)
    // 0x63d6 (UTF-16BE)
    if (argCheck == 'óK') {
        return true;
    }
    // No.3313
    // ê‡ñæ:974c
    // 0x974c (Windows-31J)
    // 0x6709 (UTF-16BE)
    if (argCheck == 'óL') {
        return true;
    }
    // No.3314
    // ê‡ñæ:974d
    // 0x974d (Windows-31J)
    // 0x67da (UTF-16BE)
    if (argCheck == 'óM') {
        return true;
    }
    // No.3315
    // ê‡ñæ:974e
    // 0x974e (Windows-31J)
    // 0x6e67 (UTF-16BE)
    if (argCheck == 'óN') {
        return true;
    }
    // No.3316
    // ê‡ñæ:974f
    // 0x974f (Windows-31J)
    // 0x6d8c (UTF-16BE)
    if (argCheck == 'óO') {
        return true;
    }
    // No.3317
    // ê‡ñæ:9750
    // 0x9750 (Windows-31J)
    // 0x7336 (UTF-16BE)
    if (argCheck == 'óP') {
        return true;
    }
    // No.3318
    // ê‡ñæ:9751
    // 0x9751 (Windows-31J)
    // 0x7337 (UTF-16BE)
    if (argCheck == 'óQ') {
        return true;
    }
    // No.3319
    // ê‡ñæ:9752
    // 0x9752 (Windows-31J)
    // 0x7531 (UTF-16BE)
    if (argCheck == 'óR') {
        return true;
    }
    // No.3320
    // ê‡ñæ:9753
    // 0x9753 (Windows-31J)
    // 0x7950 (UTF-16BE)
    if (argCheck == 'óS') {
        return true;
    }
    // No.3321
    // ê‡ñæ:9754
    // 0x9754 (Windows-31J)
    // 0x88d5 (UTF-16BE)
    if (argCheck == 'óT') {
        return true;
    }
    // No.3322
    // ê‡ñæ:9755
    // 0x9755 (Windows-31J)
    // 0x8a98 (UTF-16BE)
    if (argCheck == 'óU') {
        return true;
    }
    // No.3323
    // ê‡ñæ:9756
    // 0x9756 (Windows-31J)
    // 0x904a (UTF-16BE)
    if (argCheck == 'óV') {
        return true;
    }
    // No.3324
    // ê‡ñæ:9757
    // 0x9757 (Windows-31J)
    // 0x9091 (UTF-16BE)
    if (argCheck == 'óW') {
        return true;
    }
    // No.3325
    // ê‡ñæ:9758
    // 0x9758 (Windows-31J)
    // 0x90f5 (UTF-16BE)
    if (argCheck == 'óX') {
        return true;
    }
    // No.3326
    // ê‡ñæ:9759
    // 0x9759 (Windows-31J)
    // 0x96c4 (UTF-16BE)
    if (argCheck == 'óY') {
        return true;
    }
    // No.3327
    // ê‡ñæ:975a
    // 0x975a (Windows-31J)
    // 0x878d (UTF-16BE)
    if (argCheck == 'óZ') {
        return true;
    }
    // No.3328
    // ê‡ñæ:975b
    // 0x975b (Windows-31J)
    // 0x5915 (UTF-16BE)
    if (argCheck == 'ó[') {
        return true;
    }
    // No.3329
    // ê‡ñæ:975c
    // 0x975c (Windows-31J)
    // 0x4e88 (UTF-16BE)
    if (argCheck == 'ó\') {
        return true;
    }
    // No.3330
    // ê‡ñæ:975d
    // 0x975d (Windows-31J)
    // 0x4f59 (UTF-16BE)
    if (argCheck == 'ó]') {
        return true;
    }
    // No.3331
    // ê‡ñæ:975e
    // 0x975e (Windows-31J)
    // 0x4e0e (UTF-16BE)
    if (argCheck == 'ó^') {
        return true;
    }
    // No.3332
    // ê‡ñæ:975f
    // 0x975f (Windows-31J)
    // 0x8a89 (UTF-16BE)
    if (argCheck == 'ó_') {
        return true;
    }
    // No.3333
    // ê‡ñæ:9760
    // 0x9760 (Windows-31J)
    // 0x8f3f (UTF-16BE)
    if (argCheck == 'ó`') {
        return true;
    }
    // No.3334
    // ê‡ñæ:9761
    // 0x9761 (Windows-31J)
    // 0x9810 (UTF-16BE)
    if (argCheck == 'óa') {
        return true;
    }
    // No.3335
    // ê‡ñæ:9762
    // 0x9762 (Windows-31J)
    // 0x50ad (UTF-16BE)
    if (argCheck == 'ób') {
        return true;
    }
    // No.3336
    // ê‡ñæ:9763
    // 0x9763 (Windows-31J)
    // 0x5e7c (UTF-16BE)
    if (argCheck == 'óc') {
        return true;
    }
    // No.3337
    // ê‡ñæ:9764
    // 0x9764 (Windows-31J)
    // 0x5996 (UTF-16BE)
    if (argCheck == 'ód') {
        return true;
    }
    // No.3338
    // ê‡ñæ:9765
    // 0x9765 (Windows-31J)
    // 0x5bb9 (UTF-16BE)
    if (argCheck == 'óe') {
        return true;
    }
    // No.3339
    // ê‡ñæ:9766
    // 0x9766 (Windows-31J)
    // 0x5eb8 (UTF-16BE)
    if (argCheck == 'óf') {
        return true;
    }
    // No.3340
    // ê‡ñæ:9767
    // 0x9767 (Windows-31J)
    // 0x63da (UTF-16BE)
    if (argCheck == 'óg') {
        return true;
    }
    // No.3341
    // ê‡ñæ:9768
    // 0x9768 (Windows-31J)
    // 0x63fa (UTF-16BE)
    if (argCheck == 'óh') {
        return true;
    }
    // No.3342
    // ê‡ñæ:9769
    // 0x9769 (Windows-31J)
    // 0x64c1 (UTF-16BE)
    if (argCheck == 'ói') {
        return true;
    }
    // No.3343
    // ê‡ñæ:976a
    // 0x976a (Windows-31J)
    // 0x66dc (UTF-16BE)
    if (argCheck == 'ój') {
        return true;
    }
    // No.3344
    // ê‡ñæ:976b
    // 0x976b (Windows-31J)
    // 0x694a (UTF-16BE)
    if (argCheck == 'ók') {
        return true;
    }
    // No.3345
    // ê‡ñæ:976c
    // 0x976c (Windows-31J)
    // 0x69d8 (UTF-16BE)
    if (argCheck == 'ól') {
        return true;
    }
    // No.3346
    // ê‡ñæ:976d
    // 0x976d (Windows-31J)
    // 0x6d0b (UTF-16BE)
    if (argCheck == 'óm') {
        return true;
    }
    // No.3347
    // ê‡ñæ:976e
    // 0x976e (Windows-31J)
    // 0x6eb6 (UTF-16BE)
    if (argCheck == 'ón') {
        return true;
    }
    // No.3348
    // ê‡ñæ:976f
    // 0x976f (Windows-31J)
    // 0x7194 (UTF-16BE)
    if (argCheck == 'óo') {
        return true;
    }
    // No.3349
    // ê‡ñæ:9770
    // 0x9770 (Windows-31J)
    // 0x7528 (UTF-16BE)
    if (argCheck == 'óp') {
        return true;
    }
    // No.3350
    // ê‡ñæ:9771
    // 0x9771 (Windows-31J)
    // 0x7aaf (UTF-16BE)
    if (argCheck == 'óq') {
        return true;
    }
    // No.3351
    // ê‡ñæ:9772
    // 0x9772 (Windows-31J)
    // 0x7f8a (UTF-16BE)
    if (argCheck == 'ór') {
        return true;
    }
    // No.3352
    // ê‡ñæ:9773
    // 0x9773 (Windows-31J)
    // 0x8000 (UTF-16BE)
    if (argCheck == 'ós') {
        return true;
    }
    // No.3353
    // ê‡ñæ:9774
    // 0x9774 (Windows-31J)
    // 0x8449 (UTF-16BE)
    if (argCheck == 'ót') {
        return true;
    }
    // No.3354
    // ê‡ñæ:9775
    // 0x9775 (Windows-31J)
    // 0x84c9 (UTF-16BE)
    if (argCheck == 'óu') {
        return true;
    }
    // No.3355
    // ê‡ñæ:9776
    // 0x9776 (Windows-31J)
    // 0x8981 (UTF-16BE)
    if (argCheck == 'óv') {
        return true;
    }
    // No.3356
    // ê‡ñæ:9777
    // 0x9777 (Windows-31J)
    // 0x8b21 (UTF-16BE)
    if (argCheck == 'ów') {
        return true;
    }
    // No.3357
    // ê‡ñæ:9778
    // 0x9778 (Windows-31J)
    // 0x8e0a (UTF-16BE)
    if (argCheck == 'óx') {
        return true;
    }
    // No.3358
    // ê‡ñæ:9779
    // 0x9779 (Windows-31J)
    // 0x9065 (UTF-16BE)
    if (argCheck == 'óy') {
        return true;
    }
    // No.3359
    // ê‡ñæ:977a
    // 0x977a (Windows-31J)
    // 0x967d (UTF-16BE)
    if (argCheck == 'óz') {
        return true;
    }
    // No.3360
    // ê‡ñæ:977b
    // 0x977b (Windows-31J)
    // 0x990a (UTF-16BE)
    if (argCheck == 'ó{') {
        return true;
    }
    // No.3361
    // ê‡ñæ:977c
    // 0x977c (Windows-31J)
    // 0x617e (UTF-16BE)
    if (argCheck == 'ó|') {
        return true;
    }
    // No.3362
    // ê‡ñæ:977d
    // 0x977d (Windows-31J)
    // 0x6291 (UTF-16BE)
    if (argCheck == 'ó}') {
        return true;
    }
    // No.3363
    // ê‡ñæ:977e
    // 0x977e (Windows-31J)
    // 0x6b32 (UTF-16BE)
    if (argCheck == 'ó~') {
        return true;
    }
    // No.3364
    // ê‡ñæ:9780
    // 0x9780 (Windows-31J)
    // 0x6c83 (UTF-16BE)
    if (argCheck == 'óÄ') {
        return true;
    }
    // No.3365
    // ê‡ñæ:9781
    // 0x9781 (Windows-31J)
    // 0x6d74 (UTF-16BE)
    if (argCheck == 'óÅ') {
        return true;
    }
    // No.3366
    // ê‡ñæ:9782
    // 0x9782 (Windows-31J)
    // 0x7fcc (UTF-16BE)
    if (argCheck == 'óÇ') {
        return true;
    }
    // No.3367
    // ê‡ñæ:9783
    // 0x9783 (Windows-31J)
    // 0x7ffc (UTF-16BE)
    if (argCheck == 'óÉ') {
        return true;
    }
    // No.3368
    // ê‡ñæ:9784
    // 0x9784 (Windows-31J)
    // 0x6dc0 (UTF-16BE)
    if (argCheck == 'óÑ') {
        return true;
    }
    // No.3369
    // ê‡ñæ:9785
    // 0x9785 (Windows-31J)
    // 0x7f85 (UTF-16BE)
    if (argCheck == 'óÖ') {
        return true;
    }
    // No.3370
    // ê‡ñæ:9786
    // 0x9786 (Windows-31J)
    // 0x87ba (UTF-16BE)
    if (argCheck == 'óÜ') {
        return true;
    }
    // No.3371
    // ê‡ñæ:9787
    // 0x9787 (Windows-31J)
    // 0x88f8 (UTF-16BE)
    if (argCheck == 'óá') {
        return true;
    }
    // No.3372
    // ê‡ñæ:9788
    // 0x9788 (Windows-31J)
    // 0x6765 (UTF-16BE)
    if (argCheck == 'óà') {
        return true;
    }
    // No.3373
    // ê‡ñæ:9789
    // 0x9789 (Windows-31J)
    // 0x83b1 (UTF-16BE)
    if (argCheck == 'óâ') {
        return true;
    }
    // No.3374
    // ê‡ñæ:978a
    // 0x978a (Windows-31J)
    // 0x983c (UTF-16BE)
    if (argCheck == 'óä') {
        return true;
    }
    // No.3375
    // ê‡ñæ:978b
    // 0x978b (Windows-31J)
    // 0x96f7 (UTF-16BE)
    if (argCheck == 'óã') {
        return true;
    }
    // No.3376
    // ê‡ñæ:978c
    // 0x978c (Windows-31J)
    // 0x6d1b (UTF-16BE)
    if (argCheck == 'óå') {
        return true;
    }
    // No.3377
    // ê‡ñæ:978d
    // 0x978d (Windows-31J)
    // 0x7d61 (UTF-16BE)
    if (argCheck == 'óç') {
        return true;
    }
    // No.3378
    // ê‡ñæ:978e
    // 0x978e (Windows-31J)
    // 0x843d (UTF-16BE)
    if (argCheck == 'óé') {
        return true;
    }
    // No.3379
    // ê‡ñæ:978f
    // 0x978f (Windows-31J)
    // 0x916a (UTF-16BE)
    if (argCheck == 'óè') {
        return true;
    }
    // No.3380
    // ê‡ñæ:9790
    // 0x9790 (Windows-31J)
    // 0x4e71 (UTF-16BE)
    if (argCheck == 'óê') {
        return true;
    }
    // No.3381
    // ê‡ñæ:9791
    // 0x9791 (Windows-31J)
    // 0x5375 (UTF-16BE)
    if (argCheck == 'óë') {
        return true;
    }
    // No.3382
    // ê‡ñæ:9792
    // 0x9792 (Windows-31J)
    // 0x5d50 (UTF-16BE)
    if (argCheck == 'óí') {
        return true;
    }
    // No.3383
    // ê‡ñæ:9793
    // 0x9793 (Windows-31J)
    // 0x6b04 (UTF-16BE)
    if (argCheck == 'óì') {
        return true;
    }
    // No.3384
    // ê‡ñæ:9794
    // 0x9794 (Windows-31J)
    // 0x6feb (UTF-16BE)
    if (argCheck == 'óî') {
        return true;
    }
    // No.3385
    // ê‡ñæ:9795
    // 0x9795 (Windows-31J)
    // 0x85cd (UTF-16BE)
    if (argCheck == 'óï') {
        return true;
    }
    // No.3386
    // ê‡ñæ:9796
    // 0x9796 (Windows-31J)
    // 0x862d (UTF-16BE)
    if (argCheck == 'óñ') {
        return true;
    }
    // No.3387
    // ê‡ñæ:9797
    // 0x9797 (Windows-31J)
    // 0x89a7 (UTF-16BE)
    if (argCheck == 'óó') {
        return true;
    }
    // No.3388
    // ê‡ñæ:9798
    // 0x9798 (Windows-31J)
    // 0x5229 (UTF-16BE)
    if (argCheck == 'óò') {
        return true;
    }
    // No.3389
    // ê‡ñæ:9799
    // 0x9799 (Windows-31J)
    // 0x540f (UTF-16BE)
    if (argCheck == 'óô') {
        return true;
    }
    // No.3390
    // ê‡ñæ:979a
    // 0x979a (Windows-31J)
    // 0x5c65 (UTF-16BE)
    if (argCheck == 'óö') {
        return true;
    }
    // No.3391
    // ê‡ñæ:979b
    // 0x979b (Windows-31J)
    // 0x674e (UTF-16BE)
    if (argCheck == 'óõ') {
        return true;
    }
    // No.3392
    // ê‡ñæ:979c
    // 0x979c (Windows-31J)
    // 0x68a8 (UTF-16BE)
    if (argCheck == 'óú') {
        return true;
    }
    // No.3393
    // ê‡ñæ:979d
    // 0x979d (Windows-31J)
    // 0x7406 (UTF-16BE)
    if (argCheck == 'óù') {
        return true;
    }
    // No.3394
    // ê‡ñæ:979e
    // 0x979e (Windows-31J)
    // 0x7483 (UTF-16BE)
    if (argCheck == 'óû') {
        return true;
    }
    // No.3395
    // ê‡ñæ:979f
    // 0x979f (Windows-31J)
    // 0x75e2 (UTF-16BE)
    if (argCheck == 'óü') {
        return true;
    }
    // No.3396
    // ê‡ñæ:97a0
    // 0x97a0 (Windows-31J)
    // 0x88cf (UTF-16BE)
    if (argCheck == 'ó†') {
        return true;
    }
    // No.3397
    // ê‡ñæ:97a1
    // 0x97a1 (Windows-31J)
    // 0x88e1 (UTF-16BE)
    if (argCheck == 'ó°') {
        return true;
    }
    // No.3398
    // ê‡ñæ:97a2
    // 0x97a2 (Windows-31J)
    // 0x91cc (UTF-16BE)
    if (argCheck == 'ó¢') {
        return true;
    }
    // No.3399
    // ê‡ñæ:97a3
    // 0x97a3 (Windows-31J)
    // 0x96e2 (UTF-16BE)
    if (argCheck == 'ó£') {
        return true;
    }
    // No.3400
    // ê‡ñæ:97a4
    // 0x97a4 (Windows-31J)
    // 0x9678 (UTF-16BE)
    if (argCheck == 'ó§') {
        return true;
    }
    // No.3401
    // ê‡ñæ:97a5
    // 0x97a5 (Windows-31J)
    // 0x5f8b (UTF-16BE)
    if (argCheck == 'ó•') {
        return true;
    }
    // No.3402
    // ê‡ñæ:97a6
    // 0x97a6 (Windows-31J)
    // 0x7387 (UTF-16BE)
    if (argCheck == 'ó¶') {
        return true;
    }
    // No.3403
    // ê‡ñæ:97a7
    // 0x97a7 (Windows-31J)
    // 0x7acb (UTF-16BE)
    if (argCheck == 'óß') {
        return true;
    }
    // No.3404
    // ê‡ñæ:97a8
    // 0x97a8 (Windows-31J)
    // 0x844e (UTF-16BE)
    if (argCheck == 'ó®') {
        return true;
    }
    // No.3405
    // ê‡ñæ:97a9
    // 0x97a9 (Windows-31J)
    // 0x63a0 (UTF-16BE)
    if (argCheck == 'ó©') {
        return true;
    }
    // No.3406
    // ê‡ñæ:97aa
    // 0x97aa (Windows-31J)
    // 0x7565 (UTF-16BE)
    if (argCheck == 'ó™') {
        return true;
    }
    // No.3407
    // ê‡ñæ:97ab
    // 0x97ab (Windows-31J)
    // 0x5289 (UTF-16BE)
    if (argCheck == 'ó´') {
        return true;
    }
    // No.3408
    // ê‡ñæ:97ac
    // 0x97ac (Windows-31J)
    // 0x6d41 (UTF-16BE)
    if (argCheck == 'ó¨') {
        return true;
    }
    // No.3409
    // ê‡ñæ:97ad
    // 0x97ad (Windows-31J)
    // 0x6e9c (UTF-16BE)
    if (argCheck == 'ó≠') {
        return true;
    }
    // No.3410
    // ê‡ñæ:97ae
    // 0x97ae (Windows-31J)
    // 0x7409 (UTF-16BE)
    if (argCheck == 'óÆ') {
        return true;
    }
    // No.3411
    // ê‡ñæ:97af
    // 0x97af (Windows-31J)
    // 0x7559 (UTF-16BE)
    if (argCheck == 'óØ') {
        return true;
    }
    // No.3412
    // ê‡ñæ:97b0
    // 0x97b0 (Windows-31J)
    // 0x786b (UTF-16BE)
    if (argCheck == 'ó∞') {
        return true;
    }
    // No.3413
    // ê‡ñæ:97b1
    // 0x97b1 (Windows-31J)
    // 0x7c92 (UTF-16BE)
    if (argCheck == 'ó±') {
        return true;
    }
    // No.3414
    // ê‡ñæ:97b2
    // 0x97b2 (Windows-31J)
    // 0x9686 (UTF-16BE)
    if (argCheck == 'ó≤') {
        return true;
    }
    // No.3415
    // ê‡ñæ:97b3
    // 0x97b3 (Windows-31J)
    // 0x7adc (UTF-16BE)
    if (argCheck == 'ó≥') {
        return true;
    }
    // No.3416
    // ê‡ñæ:97b4
    // 0x97b4 (Windows-31J)
    // 0x9f8d (UTF-16BE)
    if (argCheck == 'ó¥') {
        return true;
    }
    // No.3417
    // ê‡ñæ:97b5
    // 0x97b5 (Windows-31J)
    // 0x4fb6 (UTF-16BE)
    if (argCheck == 'óµ') {
        return true;
    }
    // No.3418
    // ê‡ñæ:97b6
    // 0x97b6 (Windows-31J)
    // 0x616e (UTF-16BE)
    if (argCheck == 'ó∂') {
        return true;
    }
    // No.3419
    // ê‡ñæ:97b7
    // 0x97b7 (Windows-31J)
    // 0x65c5 (UTF-16BE)
    if (argCheck == 'ó∑') {
        return true;
    }
    // No.3420
    // ê‡ñæ:97b8
    // 0x97b8 (Windows-31J)
    // 0x865c (UTF-16BE)
    if (argCheck == 'ó∏') {
        return true;
    }
    // No.3421
    // ê‡ñæ:97b9
    // 0x97b9 (Windows-31J)
    // 0x4e86 (UTF-16BE)
    if (argCheck == 'óπ') {
        return true;
    }
    // No.3422
    // ê‡ñæ:97ba
    // 0x97ba (Windows-31J)
    // 0x4eae (UTF-16BE)
    if (argCheck == 'ó∫') {
        return true;
    }
    // No.3423
    // ê‡ñæ:97bb
    // 0x97bb (Windows-31J)
    // 0x50da (UTF-16BE)
    if (argCheck == 'óª') {
        return true;
    }
    // No.3424
    // ê‡ñæ:97bc
    // 0x97bc (Windows-31J)
    // 0x4e21 (UTF-16BE)
    if (argCheck == 'óº') {
        return true;
    }
    // No.3425
    // ê‡ñæ:97bd
    // 0x97bd (Windows-31J)
    // 0x51cc (UTF-16BE)
    if (argCheck == 'óΩ') {
        return true;
    }
    // No.3426
    // ê‡ñæ:97be
    // 0x97be (Windows-31J)
    // 0x5bee (UTF-16BE)
    if (argCheck == 'óæ') {
        return true;
    }
    // No.3427
    // ê‡ñæ:97bf
    // 0x97bf (Windows-31J)
    // 0x6599 (UTF-16BE)
    if (argCheck == 'óø') {
        return true;
    }
    // No.3428
    // ê‡ñæ:97c0
    // 0x97c0 (Windows-31J)
    // 0x6881 (UTF-16BE)
    if (argCheck == 'ó¿') {
        return true;
    }
    // No.3429
    // ê‡ñæ:97c1
    // 0x97c1 (Windows-31J)
    // 0x6dbc (UTF-16BE)
    if (argCheck == 'ó¡') {
        return true;
    }
    // No.3430
    // ê‡ñæ:97c2
    // 0x97c2 (Windows-31J)
    // 0x731f (UTF-16BE)
    if (argCheck == 'ó¬') {
        return true;
    }
    // No.3431
    // ê‡ñæ:97c3
    // 0x97c3 (Windows-31J)
    // 0x7642 (UTF-16BE)
    if (argCheck == 'ó√') {
        return true;
    }
    // No.3432
    // ê‡ñæ:97c4
    // 0x97c4 (Windows-31J)
    // 0x77ad (UTF-16BE)
    if (argCheck == 'óƒ') {
        return true;
    }
    // No.3433
    // ê‡ñæ:97c5
    // 0x97c5 (Windows-31J)
    // 0x7a1c (UTF-16BE)
    if (argCheck == 'ó≈') {
        return true;
    }
    // No.3434
    // ê‡ñæ:97c6
    // 0x97c6 (Windows-31J)
    // 0x7ce7 (UTF-16BE)
    if (argCheck == 'ó∆') {
        return true;
    }
    // No.3435
    // ê‡ñæ:97c7
    // 0x97c7 (Windows-31J)
    // 0x826f (UTF-16BE)
    if (argCheck == 'ó«') {
        return true;
    }
    // No.3436
    // ê‡ñæ:97c8
    // 0x97c8 (Windows-31J)
    // 0x8ad2 (UTF-16BE)
    if (argCheck == 'ó»') {
        return true;
    }
    // No.3437
    // ê‡ñæ:97c9
    // 0x97c9 (Windows-31J)
    // 0x907c (UTF-16BE)
    if (argCheck == 'ó…') {
        return true;
    }
    // No.3438
    // ê‡ñæ:97ca
    // 0x97ca (Windows-31J)
    // 0x91cf (UTF-16BE)
    if (argCheck == 'ó ') {
        return true;
    }
    // No.3439
    // ê‡ñæ:97cb
    // 0x97cb (Windows-31J)
    // 0x9675 (UTF-16BE)
    if (argCheck == 'óÀ') {
        return true;
    }
    // No.3440
    // ê‡ñæ:97cc
    // 0x97cc (Windows-31J)
    // 0x9818 (UTF-16BE)
    if (argCheck == 'óÃ') {
        return true;
    }
    // No.3441
    // ê‡ñæ:97cd
    // 0x97cd (Windows-31J)
    // 0x529b (UTF-16BE)
    if (argCheck == 'óÕ') {
        return true;
    }
    // No.3442
    // ê‡ñæ:97ce
    // 0x97ce (Windows-31J)
    // 0x7dd1 (UTF-16BE)
    if (argCheck == 'óŒ') {
        return true;
    }
    // No.3443
    // ê‡ñæ:97cf
    // 0x97cf (Windows-31J)
    // 0x502b (UTF-16BE)
    if (argCheck == 'óœ') {
        return true;
    }
    // No.3444
    // ê‡ñæ:97d0
    // 0x97d0 (Windows-31J)
    // 0x5398 (UTF-16BE)
    if (argCheck == 'ó–') {
        return true;
    }
    // No.3445
    // ê‡ñæ:97d1
    // 0x97d1 (Windows-31J)
    // 0x6797 (UTF-16BE)
    if (argCheck == 'ó—') {
        return true;
    }
    // No.3446
    // ê‡ñæ:97d2
    // 0x97d2 (Windows-31J)
    // 0x6dcb (UTF-16BE)
    if (argCheck == 'ó“') {
        return true;
    }
    // No.3447
    // ê‡ñæ:97d3
    // 0x97d3 (Windows-31J)
    // 0x71d0 (UTF-16BE)
    if (argCheck == 'ó”') {
        return true;
    }
    // No.3448
    // ê‡ñæ:97d4
    // 0x97d4 (Windows-31J)
    // 0x7433 (UTF-16BE)
    if (argCheck == 'ó‘') {
        return true;
    }
    // No.3449
    // ê‡ñæ:97d5
    // 0x97d5 (Windows-31J)
    // 0x81e8 (UTF-16BE)
    if (argCheck == 'ó’') {
        return true;
    }
    // No.3450
    // ê‡ñæ:97d6
    // 0x97d6 (Windows-31J)
    // 0x8f2a (UTF-16BE)
    if (argCheck == 'ó÷') {
        return true;
    }
    // No.3451
    // ê‡ñæ:97d7
    // 0x97d7 (Windows-31J)
    // 0x96a3 (UTF-16BE)
    if (argCheck == 'ó◊') {
        return true;
    }
    // No.3452
    // ê‡ñæ:97d8
    // 0x97d8 (Windows-31J)
    // 0x9c57 (UTF-16BE)
    if (argCheck == 'óÿ') {
        return true;
    }
    // No.3453
    // ê‡ñæ:97d9
    // 0x97d9 (Windows-31J)
    // 0x9e9f (UTF-16BE)
    if (argCheck == 'óŸ') {
        return true;
    }
    // No.3454
    // ê‡ñæ:97da
    // 0x97da (Windows-31J)
    // 0x7460 (UTF-16BE)
    if (argCheck == 'ó⁄') {
        return true;
    }
    // No.3455
    // ê‡ñæ:97db
    // 0x97db (Windows-31J)
    // 0x5841 (UTF-16BE)
    if (argCheck == 'ó€') {
        return true;
    }
    // No.3456
    // ê‡ñæ:97dc
    // 0x97dc (Windows-31J)
    // 0x6d99 (UTF-16BE)
    if (argCheck == 'ó‹') {
        return true;
    }
    // No.3457
    // ê‡ñæ:97dd
    // 0x97dd (Windows-31J)
    // 0x7d2f (UTF-16BE)
    if (argCheck == 'ó›') {
        return true;
    }
    // No.3458
    // ê‡ñæ:97de
    // 0x97de (Windows-31J)
    // 0x985e (UTF-16BE)
    if (argCheck == 'óﬁ') {
        return true;
    }
    // No.3459
    // ê‡ñæ:97df
    // 0x97df (Windows-31J)
    // 0x4ee4 (UTF-16BE)
    if (argCheck == 'óﬂ') {
        return true;
    }
    // No.3460
    // ê‡ñæ:97e0
    // 0x97e0 (Windows-31J)
    // 0x4f36 (UTF-16BE)
    if (argCheck == 'ó‡') {
        return true;
    }
    // No.3461
    // ê‡ñæ:97e1
    // 0x97e1 (Windows-31J)
    // 0x4f8b (UTF-16BE)
    if (argCheck == 'ó·') {
        return true;
    }
    // No.3462
    // ê‡ñæ:97e2
    // 0x97e2 (Windows-31J)
    // 0x51b7 (UTF-16BE)
    if (argCheck == 'ó‚') {
        return true;
    }
    // No.3463
    // ê‡ñæ:97e3
    // 0x97e3 (Windows-31J)
    // 0x52b1 (UTF-16BE)
    if (argCheck == 'ó„') {
        return true;
    }
    // No.3464
    // ê‡ñæ:97e4
    // 0x97e4 (Windows-31J)
    // 0x5dba (UTF-16BE)
    if (argCheck == 'ó‰') {
        return true;
    }
    // No.3465
    // ê‡ñæ:97e5
    // 0x97e5 (Windows-31J)
    // 0x601c (UTF-16BE)
    if (argCheck == 'óÂ') {
        return true;
    }
    // No.3466
    // ê‡ñæ:97e6
    // 0x97e6 (Windows-31J)
    // 0x73b2 (UTF-16BE)
    if (argCheck == 'óÊ') {
        return true;
    }
    // No.3467
    // ê‡ñæ:97e7
    // 0x97e7 (Windows-31J)
    // 0x793c (UTF-16BE)
    if (argCheck == 'óÁ') {
        return true;
    }
    // No.3468
    // ê‡ñæ:97e8
    // 0x97e8 (Windows-31J)
    // 0x82d3 (UTF-16BE)
    if (argCheck == 'óË') {
        return true;
    }
    // No.3469
    // ê‡ñæ:97e9
    // 0x97e9 (Windows-31J)
    // 0x9234 (UTF-16BE)
    if (argCheck == 'óÈ') {
        return true;
    }
    // No.3470
    // ê‡ñæ:97ea
    // 0x97ea (Windows-31J)
    // 0x96b7 (UTF-16BE)
    if (argCheck == 'óÍ') {
        return true;
    }
    // No.3471
    // ê‡ñæ:97eb
    // 0x97eb (Windows-31J)
    // 0x96f6 (UTF-16BE)
    if (argCheck == 'óÎ') {
        return true;
    }
    // No.3472
    // ê‡ñæ:97ec
    // 0x97ec (Windows-31J)
    // 0x970a (UTF-16BE)
    if (argCheck == 'óÏ') {
        return true;
    }
    // No.3473
    // ê‡ñæ:97ed
    // 0x97ed (Windows-31J)
    // 0x9e97 (UTF-16BE)
    if (argCheck == 'óÌ') {
        return true;
    }
    // No.3474
    // ê‡ñæ:97ee
    // 0x97ee (Windows-31J)
    // 0x9f62 (UTF-16BE)
    if (argCheck == 'óÓ') {
        return true;
    }
    // No.3475
    // ê‡ñæ:97ef
    // 0x97ef (Windows-31J)
    // 0x66a6 (UTF-16BE)
    if (argCheck == 'óÔ') {
        return true;
    }
    // No.3476
    // ê‡ñæ:97f0
    // 0x97f0 (Windows-31J)
    // 0x6b74 (UTF-16BE)
    if (argCheck == 'ó') {
        return true;
    }
    // No.3477
    // ê‡ñæ:97f1
    // 0x97f1 (Windows-31J)
    // 0x5217 (UTF-16BE)
    if (argCheck == 'óÒ') {
        return true;
    }
    // No.3478
    // ê‡ñæ:97f2
    // 0x97f2 (Windows-31J)
    // 0x52a3 (UTF-16BE)
    if (argCheck == 'óÚ') {
        return true;
    }
    // No.3479
    // ê‡ñæ:97f3
    // 0x97f3 (Windows-31J)
    // 0x70c8 (UTF-16BE)
    if (argCheck == 'óÛ') {
        return true;
    }
    // No.3480
    // ê‡ñæ:97f4
    // 0x97f4 (Windows-31J)
    // 0x88c2 (UTF-16BE)
    if (argCheck == 'óÙ') {
        return true;
    }
    // No.3481
    // ê‡ñæ:97f5
    // 0x97f5 (Windows-31J)
    // 0x5ec9 (UTF-16BE)
    if (argCheck == 'óı') {
        return true;
    }
    // No.3482
    // ê‡ñæ:97f6
    // 0x97f6 (Windows-31J)
    // 0x604b (UTF-16BE)
    if (argCheck == 'óˆ') {
        return true;
    }
    // No.3483
    // ê‡ñæ:97f7
    // 0x97f7 (Windows-31J)
    // 0x6190 (UTF-16BE)
    if (argCheck == 'ó˜') {
        return true;
    }
    // No.3484
    // ê‡ñæ:97f8
    // 0x97f8 (Windows-31J)
    // 0x6f23 (UTF-16BE)
    if (argCheck == 'ó¯') {
        return true;
    }
    // No.3485
    // ê‡ñæ:97f9
    // 0x97f9 (Windows-31J)
    // 0x7149 (UTF-16BE)
    if (argCheck == 'ó˘') {
        return true;
    }
    // No.3486
    // ê‡ñæ:97fa
    // 0x97fa (Windows-31J)
    // 0x7c3e (UTF-16BE)
    if (argCheck == 'ó˙') {
        return true;
    }
    // No.3487
    // ê‡ñæ:97fb
    // 0x97fb (Windows-31J)
    // 0x7df4 (UTF-16BE)
    if (argCheck == 'ó˚') {
        return true;
    }
    // No.3488
    // ê‡ñæ:97fc
    // 0x97fc (Windows-31J)
    // 0x806f (UTF-16BE)
    if (argCheck == 'ó¸') {
        return true;
    }
    // No.3489
    // ê‡ñæ:9840
    // 0x9840 (Windows-31J)
    // 0x84ee (UTF-16BE)
    if (argCheck == 'ò@') {
        return true;
    }
    // No.3490
    // ê‡ñæ:9841
    // 0x9841 (Windows-31J)
    // 0x9023 (UTF-16BE)
    if (argCheck == 'òA') {
        return true;
    }
    // No.3491
    // ê‡ñæ:9842
    // 0x9842 (Windows-31J)
    // 0x932c (UTF-16BE)
    if (argCheck == 'òB') {
        return true;
    }
    // No.3492
    // ê‡ñæ:9843
    // 0x9843 (Windows-31J)
    // 0x5442 (UTF-16BE)
    if (argCheck == 'òC') {
        return true;
    }
    // No.3493
    // ê‡ñæ:9844
    // 0x9844 (Windows-31J)
    // 0x9b6f (UTF-16BE)
    if (argCheck == 'òD') {
        return true;
    }
    // No.3494
    // ê‡ñæ:9845
    // 0x9845 (Windows-31J)
    // 0x6ad3 (UTF-16BE)
    if (argCheck == 'òE') {
        return true;
    }
    // No.3495
    // ê‡ñæ:9846
    // 0x9846 (Windows-31J)
    // 0x7089 (UTF-16BE)
    if (argCheck == 'òF') {
        return true;
    }
    // No.3496
    // ê‡ñæ:9847
    // 0x9847 (Windows-31J)
    // 0x8cc2 (UTF-16BE)
    if (argCheck == 'òG') {
        return true;
    }
    // No.3497
    // ê‡ñæ:9848
    // 0x9848 (Windows-31J)
    // 0x8def (UTF-16BE)
    if (argCheck == 'òH') {
        return true;
    }
    // No.3498
    // ê‡ñæ:9849
    // 0x9849 (Windows-31J)
    // 0x9732 (UTF-16BE)
    if (argCheck == 'òI') {
        return true;
    }
    // No.3499
    // ê‡ñæ:984a
    // 0x984a (Windows-31J)
    // 0x52b4 (UTF-16BE)
    if (argCheck == 'òJ') {
        return true;
    }
    // No.3500
    // ê‡ñæ:984b
    // 0x984b (Windows-31J)
    // 0x5a41 (UTF-16BE)
    if (argCheck == 'òK') {
        return true;
    }
    // No.3501
    // ê‡ñæ:984c
    // 0x984c (Windows-31J)
    // 0x5eca (UTF-16BE)
    if (argCheck == 'òL') {
        return true;
    }
    // No.3502
    // ê‡ñæ:984d
    // 0x984d (Windows-31J)
    // 0x5f04 (UTF-16BE)
    if (argCheck == 'òM') {
        return true;
    }
    // No.3503
    // ê‡ñæ:984e
    // 0x984e (Windows-31J)
    // 0x6717 (UTF-16BE)
    if (argCheck == 'òN') {
        return true;
    }
    // No.3504
    // ê‡ñæ:984f
    // 0x984f (Windows-31J)
    // 0x697c (UTF-16BE)
    if (argCheck == 'òO') {
        return true;
    }
    // No.3505
    // ê‡ñæ:9850
    // 0x9850 (Windows-31J)
    // 0x6994 (UTF-16BE)
    if (argCheck == 'òP') {
        return true;
    }
    // No.3506
    // ê‡ñæ:9851
    // 0x9851 (Windows-31J)
    // 0x6d6a (UTF-16BE)
    if (argCheck == 'òQ') {
        return true;
    }
    // No.3507
    // ê‡ñæ:9852
    // 0x9852 (Windows-31J)
    // 0x6f0f (UTF-16BE)
    if (argCheck == 'òR') {
        return true;
    }
    // No.3508
    // ê‡ñæ:9853
    // 0x9853 (Windows-31J)
    // 0x7262 (UTF-16BE)
    if (argCheck == 'òS') {
        return true;
    }
    // No.3509
    // ê‡ñæ:9854
    // 0x9854 (Windows-31J)
    // 0x72fc (UTF-16BE)
    if (argCheck == 'òT') {
        return true;
    }
    // No.3510
    // ê‡ñæ:9855
    // 0x9855 (Windows-31J)
    // 0x7bed (UTF-16BE)
    if (argCheck == 'òU') {
        return true;
    }
    // No.3511
    // ê‡ñæ:9856
    // 0x9856 (Windows-31J)
    // 0x8001 (UTF-16BE)
    if (argCheck == 'òV') {
        return true;
    }
    // No.3512
    // ê‡ñæ:9857
    // 0x9857 (Windows-31J)
    // 0x807e (UTF-16BE)
    if (argCheck == 'òW') {
        return true;
    }
    // No.3513
    // ê‡ñæ:9858
    // 0x9858 (Windows-31J)
    // 0x874b (UTF-16BE)
    if (argCheck == 'òX') {
        return true;
    }
    // No.3514
    // ê‡ñæ:9859
    // 0x9859 (Windows-31J)
    // 0x90ce (UTF-16BE)
    if (argCheck == 'òY') {
        return true;
    }
    // No.3515
    // ê‡ñæ:985a
    // 0x985a (Windows-31J)
    // 0x516d (UTF-16BE)
    if (argCheck == 'òZ') {
        return true;
    }
    // No.3516
    // ê‡ñæ:985b
    // 0x985b (Windows-31J)
    // 0x9e93 (UTF-16BE)
    if (argCheck == 'ò[') {
        return true;
    }
    // No.3517
    // ê‡ñæ:985c
    // 0x985c (Windows-31J)
    // 0x7984 (UTF-16BE)
    if (argCheck == 'ò\') {
        return true;
    }
    // No.3518
    // ê‡ñæ:985d
    // 0x985d (Windows-31J)
    // 0x808b (UTF-16BE)
    if (argCheck == 'ò]') {
        return true;
    }
    // No.3519
    // ê‡ñæ:985e
    // 0x985e (Windows-31J)
    // 0x9332 (UTF-16BE)
    if (argCheck == 'ò^') {
        return true;
    }
    // No.3520
    // ê‡ñæ:985f
    // 0x985f (Windows-31J)
    // 0x8ad6 (UTF-16BE)
    if (argCheck == 'ò_') {
        return true;
    }
    // No.3521
    // ê‡ñæ:9860
    // 0x9860 (Windows-31J)
    // 0x502d (UTF-16BE)
    if (argCheck == 'ò`') {
        return true;
    }
    // No.3522
    // ê‡ñæ:9861
    // 0x9861 (Windows-31J)
    // 0x548c (UTF-16BE)
    if (argCheck == 'òa') {
        return true;
    }
    // No.3523
    // ê‡ñæ:9862
    // 0x9862 (Windows-31J)
    // 0x8a71 (UTF-16BE)
    if (argCheck == 'òb') {
        return true;
    }
    // No.3524
    // ê‡ñæ:9863
    // 0x9863 (Windows-31J)
    // 0x6b6a (UTF-16BE)
    if (argCheck == 'òc') {
        return true;
    }
    // No.3525
    // ê‡ñæ:9864
    // 0x9864 (Windows-31J)
    // 0x8cc4 (UTF-16BE)
    if (argCheck == 'òd') {
        return true;
    }
    // No.3526
    // ê‡ñæ:9865
    // 0x9865 (Windows-31J)
    // 0x8107 (UTF-16BE)
    if (argCheck == 'òe') {
        return true;
    }
    // No.3527
    // ê‡ñæ:9866
    // 0x9866 (Windows-31J)
    // 0x60d1 (UTF-16BE)
    if (argCheck == 'òf') {
        return true;
    }
    // No.3528
    // ê‡ñæ:9867
    // 0x9867 (Windows-31J)
    // 0x67a0 (UTF-16BE)
    if (argCheck == 'òg') {
        return true;
    }
    // No.3529
    // ê‡ñæ:9868
    // 0x9868 (Windows-31J)
    // 0x9df2 (UTF-16BE)
    if (argCheck == 'òh') {
        return true;
    }
    // No.3530
    // ê‡ñæ:9869
    // 0x9869 (Windows-31J)
    // 0x4e99 (UTF-16BE)
    if (argCheck == 'òi') {
        return true;
    }
    // No.3531
    // ê‡ñæ:986a
    // 0x986a (Windows-31J)
    // 0x4e98 (UTF-16BE)
    if (argCheck == 'òj') {
        return true;
    }
    // No.3532
    // ê‡ñæ:986b
    // 0x986b (Windows-31J)
    // 0x9c10 (UTF-16BE)
    if (argCheck == 'òk') {
        return true;
    }
    // No.3533
    // ê‡ñæ:986c
    // 0x986c (Windows-31J)
    // 0x8a6b (UTF-16BE)
    if (argCheck == 'òl') {
        return true;
    }
    // No.3534
    // ê‡ñæ:986d
    // 0x986d (Windows-31J)
    // 0x85c1 (UTF-16BE)
    if (argCheck == 'òm') {
        return true;
    }
    // No.3535
    // ê‡ñæ:986e
    // 0x986e (Windows-31J)
    // 0x8568 (UTF-16BE)
    if (argCheck == 'òn') {
        return true;
    }
    // No.3536
    // ê‡ñæ:986f
    // 0x986f (Windows-31J)
    // 0x6900 (UTF-16BE)
    if (argCheck == 'òo') {
        return true;
    }
    // No.3537
    // ê‡ñæ:9870
    // 0x9870 (Windows-31J)
    // 0x6e7e (UTF-16BE)
    if (argCheck == 'òp') {
        return true;
    }
    // No.3538
    // ê‡ñæ:9871
    // 0x9871 (Windows-31J)
    // 0x7897 (UTF-16BE)
    if (argCheck == 'òq') {
        return true;
    }
    // No.3539
    // ê‡ñæ:9872
    // 0x9872 (Windows-31J)
    // 0x8155 (UTF-16BE)
    if (argCheck == 'òr') {
        return true;
    }
    // No.3543
    // ê‡ñæ:989f
    // 0x989f (Windows-31J)
    // 0x5f0c (UTF-16BE)
    if (argCheck == 'òü') {
        return true;
    }
    // No.3544
    // ê‡ñæ:98a0
    // 0x98a0 (Windows-31J)
    // 0x4e10 (UTF-16BE)
    if (argCheck == 'ò†') {
        return true;
    }
    // No.3545
    // ê‡ñæ:98a1
    // 0x98a1 (Windows-31J)
    // 0x4e15 (UTF-16BE)
    if (argCheck == 'ò°') {
        return true;
    }
    // No.3546
    // ê‡ñæ:98a2
    // 0x98a2 (Windows-31J)
    // 0x4e2a (UTF-16BE)
    if (argCheck == 'ò¢') {
        return true;
    }
    // No.3547
    // ê‡ñæ:98a3
    // 0x98a3 (Windows-31J)
    // 0x4e31 (UTF-16BE)
    if (argCheck == 'ò£') {
        return true;
    }
    // No.3548
    // ê‡ñæ:98a4
    // 0x98a4 (Windows-31J)
    // 0x4e36 (UTF-16BE)
    if (argCheck == 'ò§') {
        return true;
    }
    // No.3549
    // ê‡ñæ:98a5
    // 0x98a5 (Windows-31J)
    // 0x4e3c (UTF-16BE)
    if (argCheck == 'ò•') {
        return true;
    }
    // No.3550
    // ê‡ñæ:98a6
    // 0x98a6 (Windows-31J)
    // 0x4e3f (UTF-16BE)
    if (argCheck == 'ò¶') {
        return true;
    }
    // No.3551
    // ê‡ñæ:98a7
    // 0x98a7 (Windows-31J)
    // 0x4e42 (UTF-16BE)
    if (argCheck == 'òß') {
        return true;
    }
    // No.3552
    // ê‡ñæ:98a8
    // 0x98a8 (Windows-31J)
    // 0x4e56 (UTF-16BE)
    if (argCheck == 'ò®') {
        return true;
    }
    // No.3553
    // ê‡ñæ:98a9
    // 0x98a9 (Windows-31J)
    // 0x4e58 (UTF-16BE)
    if (argCheck == 'ò©') {
        return true;
    }
    // No.3554
    // ê‡ñæ:98aa
    // 0x98aa (Windows-31J)
    // 0x4e82 (UTF-16BE)
    if (argCheck == 'ò™') {
        return true;
    }
    // No.3555
    // ê‡ñæ:98ab
    // 0x98ab (Windows-31J)
    // 0x4e85 (UTF-16BE)
    if (argCheck == 'ò´') {
        return true;
    }
    // No.3556
    // ê‡ñæ:98ac
    // 0x98ac (Windows-31J)
    // 0x8c6b (UTF-16BE)
    if (argCheck == 'ò¨') {
        return true;
    }
    // No.3557
    // ê‡ñæ:98ad
    // 0x98ad (Windows-31J)
    // 0x4e8a (UTF-16BE)
    if (argCheck == 'ò≠') {
        return true;
    }
    // No.3558
    // ê‡ñæ:98ae
    // 0x98ae (Windows-31J)
    // 0x8212 (UTF-16BE)
    if (argCheck == 'òÆ') {
        return true;
    }
    // No.3559
    // ê‡ñæ:98af
    // 0x98af (Windows-31J)
    // 0x5f0d (UTF-16BE)
    if (argCheck == 'òØ') {
        return true;
    }
    // No.3560
    // ê‡ñæ:98b0
    // 0x98b0 (Windows-31J)
    // 0x4e8e (UTF-16BE)
    if (argCheck == 'ò∞') {
        return true;
    }
    // No.3561
    // ê‡ñæ:98b1
    // 0x98b1 (Windows-31J)
    // 0x4e9e (UTF-16BE)
    if (argCheck == 'ò±') {
        return true;
    }
    // No.3562
    // ê‡ñæ:98b2
    // 0x98b2 (Windows-31J)
    // 0x4e9f (UTF-16BE)
    if (argCheck == 'ò≤') {
        return true;
    }
    // No.3563
    // ê‡ñæ:98b3
    // 0x98b3 (Windows-31J)
    // 0x4ea0 (UTF-16BE)
    if (argCheck == 'ò≥') {
        return true;
    }
    // No.3564
    // ê‡ñæ:98b4
    // 0x98b4 (Windows-31J)
    // 0x4ea2 (UTF-16BE)
    if (argCheck == 'ò¥') {
        return true;
    }
    // No.3565
    // ê‡ñæ:98b5
    // 0x98b5 (Windows-31J)
    // 0x4eb0 (UTF-16BE)
    if (argCheck == 'òµ') {
        return true;
    }
    // No.3566
    // ê‡ñæ:98b6
    // 0x98b6 (Windows-31J)
    // 0x4eb3 (UTF-16BE)
    if (argCheck == 'ò∂') {
        return true;
    }
    // No.3567
    // ê‡ñæ:98b7
    // 0x98b7 (Windows-31J)
    // 0x4eb6 (UTF-16BE)
    if (argCheck == 'ò∑') {
        return true;
    }
    // No.3568
    // ê‡ñæ:98b8
    // 0x98b8 (Windows-31J)
    // 0x4ece (UTF-16BE)
    if (argCheck == 'ò∏') {
        return true;
    }
    // No.3569
    // ê‡ñæ:98b9
    // 0x98b9 (Windows-31J)
    // 0x4ecd (UTF-16BE)
    if (argCheck == 'òπ') {
        return true;
    }
    // No.3570
    // ê‡ñæ:98ba
    // 0x98ba (Windows-31J)
    // 0x4ec4 (UTF-16BE)
    if (argCheck == 'ò∫') {
        return true;
    }
    // No.3571
    // ê‡ñæ:98bb
    // 0x98bb (Windows-31J)
    // 0x4ec6 (UTF-16BE)
    if (argCheck == 'òª') {
        return true;
    }
    // No.3572
    // ê‡ñæ:98bc
    // 0x98bc (Windows-31J)
    // 0x4ec2 (UTF-16BE)
    if (argCheck == 'òº') {
        return true;
    }
    // No.3573
    // ê‡ñæ:98bd
    // 0x98bd (Windows-31J)
    // 0x4ed7 (UTF-16BE)
    if (argCheck == 'òΩ') {
        return true;
    }
    // No.3574
    // ê‡ñæ:98be
    // 0x98be (Windows-31J)
    // 0x4ede (UTF-16BE)
    if (argCheck == 'òæ') {
        return true;
    }
    // No.3575
    // ê‡ñæ:98bf
    // 0x98bf (Windows-31J)
    // 0x4eed (UTF-16BE)
    if (argCheck == 'òø') {
        return true;
    }
    // No.3576
    // ê‡ñæ:98c0
    // 0x98c0 (Windows-31J)
    // 0x4edf (UTF-16BE)
    if (argCheck == 'ò¿') {
        return true;
    }
    // No.3577
    // ê‡ñæ:98c1
    // 0x98c1 (Windows-31J)
    // 0x4ef7 (UTF-16BE)
    if (argCheck == 'ò¡') {
        return true;
    }
    // No.3578
    // ê‡ñæ:98c2
    // 0x98c2 (Windows-31J)
    // 0x4f09 (UTF-16BE)
    if (argCheck == 'ò¬') {
        return true;
    }
    // No.3579
    // ê‡ñæ:98c3
    // 0x98c3 (Windows-31J)
    // 0x4f5a (UTF-16BE)
    if (argCheck == 'ò√') {
        return true;
    }
    // No.3580
    // ê‡ñæ:98c4
    // 0x98c4 (Windows-31J)
    // 0x4f30 (UTF-16BE)
    if (argCheck == 'òƒ') {
        return true;
    }
    // No.3581
    // ê‡ñæ:98c5
    // 0x98c5 (Windows-31J)
    // 0x4f5b (UTF-16BE)
    if (argCheck == 'ò≈') {
        return true;
    }
    // No.3582
    // ê‡ñæ:98c6
    // 0x98c6 (Windows-31J)
    // 0x4f5d (UTF-16BE)
    if (argCheck == 'ò∆') {
        return true;
    }
    // No.3583
    // ê‡ñæ:98c7
    // 0x98c7 (Windows-31J)
    // 0x4f57 (UTF-16BE)
    if (argCheck == 'ò«') {
        return true;
    }
    // No.3584
    // ê‡ñæ:98c8
    // 0x98c8 (Windows-31J)
    // 0x4f47 (UTF-16BE)
    if (argCheck == 'ò»') {
        return true;
    }
    // No.3585
    // ê‡ñæ:98c9
    // 0x98c9 (Windows-31J)
    // 0x4f76 (UTF-16BE)
    if (argCheck == 'ò…') {
        return true;
    }
    // No.3586
    // ê‡ñæ:98ca
    // 0x98ca (Windows-31J)
    // 0x4f88 (UTF-16BE)
    if (argCheck == 'ò ') {
        return true;
    }
    // No.3587
    // ê‡ñæ:98cb
    // 0x98cb (Windows-31J)
    // 0x4f8f (UTF-16BE)
    if (argCheck == 'òÀ') {
        return true;
    }
    // No.3588
    // ê‡ñæ:98cc
    // 0x98cc (Windows-31J)
    // 0x4f98 (UTF-16BE)
    if (argCheck == 'òÃ') {
        return true;
    }
    // No.3589
    // ê‡ñæ:98cd
    // 0x98cd (Windows-31J)
    // 0x4f7b (UTF-16BE)
    if (argCheck == 'òÕ') {
        return true;
    }
    // No.3590
    // ê‡ñæ:98ce
    // 0x98ce (Windows-31J)
    // 0x4f69 (UTF-16BE)
    if (argCheck == 'òŒ') {
        return true;
    }
    // No.3591
    // ê‡ñæ:98cf
    // 0x98cf (Windows-31J)
    // 0x4f70 (UTF-16BE)
    if (argCheck == 'òœ') {
        return true;
    }
    // No.3592
    // ê‡ñæ:98d0
    // 0x98d0 (Windows-31J)
    // 0x4f91 (UTF-16BE)
    if (argCheck == 'ò–') {
        return true;
    }
    // No.3593
    // ê‡ñæ:98d1
    // 0x98d1 (Windows-31J)
    // 0x4f6f (UTF-16BE)
    if (argCheck == 'ò—') {
        return true;
    }
    // No.3594
    // ê‡ñæ:98d2
    // 0x98d2 (Windows-31J)
    // 0x4f86 (UTF-16BE)
    if (argCheck == 'ò“') {
        return true;
    }
    // No.3595
    // ê‡ñæ:98d3
    // 0x98d3 (Windows-31J)
    // 0x4f96 (UTF-16BE)
    if (argCheck == 'ò”') {
        return true;
    }
    // No.3596
    // ê‡ñæ:98d4
    // 0x98d4 (Windows-31J)
    // 0x5118 (UTF-16BE)
    if (argCheck == 'ò‘') {
        return true;
    }
    // No.3597
    // ê‡ñæ:98d5
    // 0x98d5 (Windows-31J)
    // 0x4fd4 (UTF-16BE)
    if (argCheck == 'ò’') {
        return true;
    }
    // No.3598
    // ê‡ñæ:98d6
    // 0x98d6 (Windows-31J)
    // 0x4fdf (UTF-16BE)
    if (argCheck == 'ò÷') {
        return true;
    }
    // No.3599
    // ê‡ñæ:98d7
    // 0x98d7 (Windows-31J)
    // 0x4fce (UTF-16BE)
    if (argCheck == 'ò◊') {
        return true;
    }
    // No.3600
    // ê‡ñæ:98d8
    // 0x98d8 (Windows-31J)
    // 0x4fd8 (UTF-16BE)
    if (argCheck == 'òÿ') {
        return true;
    }
    // No.3601
    // ê‡ñæ:98d9
    // 0x98d9 (Windows-31J)
    // 0x4fdb (UTF-16BE)
    if (argCheck == 'òŸ') {
        return true;
    }
    // No.3602
    // ê‡ñæ:98da
    // 0x98da (Windows-31J)
    // 0x4fd1 (UTF-16BE)
    if (argCheck == 'ò⁄') {
        return true;
    }
    // No.3603
    // ê‡ñæ:98db
    // 0x98db (Windows-31J)
    // 0x4fda (UTF-16BE)
    if (argCheck == 'ò€') {
        return true;
    }
    // No.3604
    // ê‡ñæ:98dc
    // 0x98dc (Windows-31J)
    // 0x4fd0 (UTF-16BE)
    if (argCheck == 'ò‹') {
        return true;
    }
    // No.3605
    // ê‡ñæ:98dd
    // 0x98dd (Windows-31J)
    // 0x4fe4 (UTF-16BE)
    if (argCheck == 'ò›') {
        return true;
    }
    // No.3606
    // ê‡ñæ:98de
    // 0x98de (Windows-31J)
    // 0x4fe5 (UTF-16BE)
    if (argCheck == 'òﬁ') {
        return true;
    }
    // No.3607
    // ê‡ñæ:98df
    // 0x98df (Windows-31J)
    // 0x501a (UTF-16BE)
    if (argCheck == 'òﬂ') {
        return true;
    }
    // No.3608
    // ê‡ñæ:98e0
    // 0x98e0 (Windows-31J)
    // 0x5028 (UTF-16BE)
    if (argCheck == 'ò‡') {
        return true;
    }
    // No.3609
    // ê‡ñæ:98e1
    // 0x98e1 (Windows-31J)
    // 0x5014 (UTF-16BE)
    if (argCheck == 'ò·') {
        return true;
    }
    // No.3610
    // ê‡ñæ:98e2
    // 0x98e2 (Windows-31J)
    // 0x502a (UTF-16BE)
    if (argCheck == 'ò‚') {
        return true;
    }
    // No.3611
    // ê‡ñæ:98e3
    // 0x98e3 (Windows-31J)
    // 0x5025 (UTF-16BE)
    if (argCheck == 'ò„') {
        return true;
    }
    // No.3612
    // ê‡ñæ:98e4
    // 0x98e4 (Windows-31J)
    // 0x5005 (UTF-16BE)
    if (argCheck == 'ò‰') {
        return true;
    }
    // No.3613
    // ê‡ñæ:98e5
    // 0x98e5 (Windows-31J)
    // 0x4f1c (UTF-16BE)
    if (argCheck == 'òÂ') {
        return true;
    }
    // No.3614
    // ê‡ñæ:98e6
    // 0x98e6 (Windows-31J)
    // 0x4ff6 (UTF-16BE)
    if (argCheck == 'òÊ') {
        return true;
    }
    // No.3615
    // ê‡ñæ:98e7
    // 0x98e7 (Windows-31J)
    // 0x5021 (UTF-16BE)
    if (argCheck == 'òÁ') {
        return true;
    }
    // No.3616
    // ê‡ñæ:98e8
    // 0x98e8 (Windows-31J)
    // 0x5029 (UTF-16BE)
    if (argCheck == 'òË') {
        return true;
    }
    // No.3617
    // ê‡ñæ:98e9
    // 0x98e9 (Windows-31J)
    // 0x502c (UTF-16BE)
    if (argCheck == 'òÈ') {
        return true;
    }
    // No.3618
    // ê‡ñæ:98ea
    // 0x98ea (Windows-31J)
    // 0x4ffe (UTF-16BE)
    if (argCheck == 'òÍ') {
        return true;
    }
    // No.3619
    // ê‡ñæ:98eb
    // 0x98eb (Windows-31J)
    // 0x4fef (UTF-16BE)
    if (argCheck == 'òÎ') {
        return true;
    }
    // No.3620
    // ê‡ñæ:98ec
    // 0x98ec (Windows-31J)
    // 0x5011 (UTF-16BE)
    if (argCheck == 'òÏ') {
        return true;
    }
    // No.3621
    // ê‡ñæ:98ed
    // 0x98ed (Windows-31J)
    // 0x5006 (UTF-16BE)
    if (argCheck == 'òÌ') {
        return true;
    }
    // No.3622
    // ê‡ñæ:98ee
    // 0x98ee (Windows-31J)
    // 0x5043 (UTF-16BE)
    if (argCheck == 'òÓ') {
        return true;
    }
    // No.3623
    // ê‡ñæ:98ef
    // 0x98ef (Windows-31J)
    // 0x5047 (UTF-16BE)
    if (argCheck == 'òÔ') {
        return true;
    }
    // No.3624
    // ê‡ñæ:98f0
    // 0x98f0 (Windows-31J)
    // 0x6703 (UTF-16BE)
    if (argCheck == 'ò') {
        return true;
    }
    // No.3625
    // ê‡ñæ:98f1
    // 0x98f1 (Windows-31J)
    // 0x5055 (UTF-16BE)
    if (argCheck == 'òÒ') {
        return true;
    }
    // No.3626
    // ê‡ñæ:98f2
    // 0x98f2 (Windows-31J)
    // 0x5050 (UTF-16BE)
    if (argCheck == 'òÚ') {
        return true;
    }
    // No.3627
    // ê‡ñæ:98f3
    // 0x98f3 (Windows-31J)
    // 0x5048 (UTF-16BE)
    if (argCheck == 'òÛ') {
        return true;
    }
    // No.3628
    // ê‡ñæ:98f4
    // 0x98f4 (Windows-31J)
    // 0x505a (UTF-16BE)
    if (argCheck == 'òÙ') {
        return true;
    }
    // No.3629
    // ê‡ñæ:98f5
    // 0x98f5 (Windows-31J)
    // 0x5056 (UTF-16BE)
    if (argCheck == 'òı') {
        return true;
    }
    // No.3630
    // ê‡ñæ:98f6
    // 0x98f6 (Windows-31J)
    // 0x506c (UTF-16BE)
    if (argCheck == 'òˆ') {
        return true;
    }
    // No.3631
    // ê‡ñæ:98f7
    // 0x98f7 (Windows-31J)
    // 0x5078 (UTF-16BE)
    if (argCheck == 'ò˜') {
        return true;
    }
    // No.3632
    // ê‡ñæ:98f8
    // 0x98f8 (Windows-31J)
    // 0x5080 (UTF-16BE)
    if (argCheck == 'ò¯') {
        return true;
    }
    // No.3633
    // ê‡ñæ:98f9
    // 0x98f9 (Windows-31J)
    // 0x509a (UTF-16BE)
    if (argCheck == 'ò˘') {
        return true;
    }
    // No.3634
    // ê‡ñæ:98fa
    // 0x98fa (Windows-31J)
    // 0x5085 (UTF-16BE)
    if (argCheck == 'ò˙') {
        return true;
    }
    // No.3635
    // ê‡ñæ:98fb
    // 0x98fb (Windows-31J)
    // 0x50b4 (UTF-16BE)
    if (argCheck == 'ò˚') {
        return true;
    }
    // No.3636
    // ê‡ñæ:98fc
    // 0x98fc (Windows-31J)
    // 0x50b2 (UTF-16BE)
    if (argCheck == 'ò¸') {
        return true;
    }
    // No.3637
    // ê‡ñæ:9940
    // 0x9940 (Windows-31J)
    // 0x50c9 (UTF-16BE)
    if (argCheck == 'ô@') {
        return true;
    }
    // No.3638
    // ê‡ñæ:9941
    // 0x9941 (Windows-31J)
    // 0x50ca (UTF-16BE)
    if (argCheck == 'ôA') {
        return true;
    }
    // No.3639
    // ê‡ñæ:9942
    // 0x9942 (Windows-31J)
    // 0x50b3 (UTF-16BE)
    if (argCheck == 'ôB') {
        return true;
    }
    // No.3640
    // ê‡ñæ:9943
    // 0x9943 (Windows-31J)
    // 0x50c2 (UTF-16BE)
    if (argCheck == 'ôC') {
        return true;
    }
    // No.3641
    // ê‡ñæ:9944
    // 0x9944 (Windows-31J)
    // 0x50d6 (UTF-16BE)
    if (argCheck == 'ôD') {
        return true;
    }
    // No.3642
    // ê‡ñæ:9945
    // 0x9945 (Windows-31J)
    // 0x50de (UTF-16BE)
    if (argCheck == 'ôE') {
        return true;
    }
    // No.3643
    // ê‡ñæ:9946
    // 0x9946 (Windows-31J)
    // 0x50e5 (UTF-16BE)
    if (argCheck == 'ôF') {
        return true;
    }
    // No.3644
    // ê‡ñæ:9947
    // 0x9947 (Windows-31J)
    // 0x50ed (UTF-16BE)
    if (argCheck == 'ôG') {
        return true;
    }
    // No.3645
    // ê‡ñæ:9948
    // 0x9948 (Windows-31J)
    // 0x50e3 (UTF-16BE)
    if (argCheck == 'ôH') {
        return true;
    }
    // No.3646
    // ê‡ñæ:9949
    // 0x9949 (Windows-31J)
    // 0x50ee (UTF-16BE)
    if (argCheck == 'ôI') {
        return true;
    }
    // No.3647
    // ê‡ñæ:994a
    // 0x994a (Windows-31J)
    // 0x50f9 (UTF-16BE)
    if (argCheck == 'ôJ') {
        return true;
    }
    // No.3648
    // ê‡ñæ:994b
    // 0x994b (Windows-31J)
    // 0x50f5 (UTF-16BE)
    if (argCheck == 'ôK') {
        return true;
    }
    // No.3649
    // ê‡ñæ:994c
    // 0x994c (Windows-31J)
    // 0x5109 (UTF-16BE)
    if (argCheck == 'ôL') {
        return true;
    }
    // No.3650
    // ê‡ñæ:994d
    // 0x994d (Windows-31J)
    // 0x5101 (UTF-16BE)
    if (argCheck == 'ôM') {
        return true;
    }
    // No.3651
    // ê‡ñæ:994e
    // 0x994e (Windows-31J)
    // 0x5102 (UTF-16BE)
    if (argCheck == 'ôN') {
        return true;
    }
    // No.3652
    // ê‡ñæ:994f
    // 0x994f (Windows-31J)
    // 0x5116 (UTF-16BE)
    if (argCheck == 'ôO') {
        return true;
    }
    // No.3653
    // ê‡ñæ:9950
    // 0x9950 (Windows-31J)
    // 0x5115 (UTF-16BE)
    if (argCheck == 'ôP') {
        return true;
    }
    // No.3654
    // ê‡ñæ:9951
    // 0x9951 (Windows-31J)
    // 0x5114 (UTF-16BE)
    if (argCheck == 'ôQ') {
        return true;
    }
    // No.3655
    // ê‡ñæ:9952
    // 0x9952 (Windows-31J)
    // 0x511a (UTF-16BE)
    if (argCheck == 'ôR') {
        return true;
    }
    // No.3656
    // ê‡ñæ:9953
    // 0x9953 (Windows-31J)
    // 0x5121 (UTF-16BE)
    if (argCheck == 'ôS') {
        return true;
    }
    // No.3657
    // ê‡ñæ:9954
    // 0x9954 (Windows-31J)
    // 0x513a (UTF-16BE)
    if (argCheck == 'ôT') {
        return true;
    }
    // No.3658
    // ê‡ñæ:9955
    // 0x9955 (Windows-31J)
    // 0x5137 (UTF-16BE)
    if (argCheck == 'ôU') {
        return true;
    }
    // No.3659
    // ê‡ñæ:9956
    // 0x9956 (Windows-31J)
    // 0x513c (UTF-16BE)
    if (argCheck == 'ôV') {
        return true;
    }
    // No.3660
    // ê‡ñæ:9957
    // 0x9957 (Windows-31J)
    // 0x513b (UTF-16BE)
    if (argCheck == 'ôW') {
        return true;
    }
    // No.3661
    // ê‡ñæ:9958
    // 0x9958 (Windows-31J)
    // 0x513f (UTF-16BE)
    if (argCheck == 'ôX') {
        return true;
    }
    // No.3662
    // ê‡ñæ:9959
    // 0x9959 (Windows-31J)
    // 0x5140 (UTF-16BE)
    if (argCheck == 'ôY') {
        return true;
    }
    // No.3663
    // ê‡ñæ:995a
    // 0x995a (Windows-31J)
    // 0x5152 (UTF-16BE)
    if (argCheck == 'ôZ') {
        return true;
    }
    // No.3664
    // ê‡ñæ:995b
    // 0x995b (Windows-31J)
    // 0x514c (UTF-16BE)
    if (argCheck == 'ô[') {
        return true;
    }
    // No.3665
    // ê‡ñæ:995c
    // 0x995c (Windows-31J)
    // 0x5154 (UTF-16BE)
    if (argCheck == 'ô\') {
        return true;
    }
    // No.3666
    // ê‡ñæ:995d
    // 0x995d (Windows-31J)
    // 0x5162 (UTF-16BE)
    if (argCheck == 'ô]') {
        return true;
    }
    // No.3667
    // ê‡ñæ:995e
    // 0x995e (Windows-31J)
    // 0x7af8 (UTF-16BE)
    if (argCheck == 'ô^') {
        return true;
    }
    // No.3668
    // ê‡ñæ:995f
    // 0x995f (Windows-31J)
    // 0x5169 (UTF-16BE)
    if (argCheck == 'ô_') {
        return true;
    }
    // No.3669
    // ê‡ñæ:9960
    // 0x9960 (Windows-31J)
    // 0x516a (UTF-16BE)
    if (argCheck == 'ô`') {
        return true;
    }
    // No.3670
    // ê‡ñæ:9961
    // 0x9961 (Windows-31J)
    // 0x516e (UTF-16BE)
    if (argCheck == 'ôa') {
        return true;
    }
    // No.3671
    // ê‡ñæ:9962
    // 0x9962 (Windows-31J)
    // 0x5180 (UTF-16BE)
    if (argCheck == 'ôb') {
        return true;
    }
    // No.3672
    // ê‡ñæ:9963
    // 0x9963 (Windows-31J)
    // 0x5182 (UTF-16BE)
    if (argCheck == 'ôc') {
        return true;
    }
    // No.3673
    // ê‡ñæ:9964
    // 0x9964 (Windows-31J)
    // 0x56d8 (UTF-16BE)
    if (argCheck == 'ôd') {
        return true;
    }
    // No.3674
    // ê‡ñæ:9965
    // 0x9965 (Windows-31J)
    // 0x518c (UTF-16BE)
    if (argCheck == 'ôe') {
        return true;
    }
    // No.3675
    // ê‡ñæ:9966
    // 0x9966 (Windows-31J)
    // 0x5189 (UTF-16BE)
    if (argCheck == 'ôf') {
        return true;
    }
    // No.3676
    // ê‡ñæ:9967
    // 0x9967 (Windows-31J)
    // 0x518f (UTF-16BE)
    if (argCheck == 'ôg') {
        return true;
    }
    // No.3677
    // ê‡ñæ:9968
    // 0x9968 (Windows-31J)
    // 0x5191 (UTF-16BE)
    if (argCheck == 'ôh') {
        return true;
    }
    // No.3678
    // ê‡ñæ:9969
    // 0x9969 (Windows-31J)
    // 0x5193 (UTF-16BE)
    if (argCheck == 'ôi') {
        return true;
    }
    // No.3679
    // ê‡ñæ:996a
    // 0x996a (Windows-31J)
    // 0x5195 (UTF-16BE)
    if (argCheck == 'ôj') {
        return true;
    }
    // No.3680
    // ê‡ñæ:996b
    // 0x996b (Windows-31J)
    // 0x5196 (UTF-16BE)
    if (argCheck == 'ôk') {
        return true;
    }
    // No.3681
    // ê‡ñæ:996c
    // 0x996c (Windows-31J)
    // 0x51a4 (UTF-16BE)
    if (argCheck == 'ôl') {
        return true;
    }
    // No.3682
    // ê‡ñæ:996d
    // 0x996d (Windows-31J)
    // 0x51a6 (UTF-16BE)
    if (argCheck == 'ôm') {
        return true;
    }
    // No.3683
    // ê‡ñæ:996e
    // 0x996e (Windows-31J)
    // 0x51a2 (UTF-16BE)
    if (argCheck == 'ôn') {
        return true;
    }
    // No.3684
    // ê‡ñæ:996f
    // 0x996f (Windows-31J)
    // 0x51a9 (UTF-16BE)
    if (argCheck == 'ôo') {
        return true;
    }
    // No.3685
    // ê‡ñæ:9970
    // 0x9970 (Windows-31J)
    // 0x51aa (UTF-16BE)
    if (argCheck == 'ôp') {
        return true;
    }
    // No.3686
    // ê‡ñæ:9971
    // 0x9971 (Windows-31J)
    // 0x51ab (UTF-16BE)
    if (argCheck == 'ôq') {
        return true;
    }
    // No.3687
    // ê‡ñæ:9972
    // 0x9972 (Windows-31J)
    // 0x51b3 (UTF-16BE)
    if (argCheck == 'ôr') {
        return true;
    }
    // No.3688
    // ê‡ñæ:9973
    // 0x9973 (Windows-31J)
    // 0x51b1 (UTF-16BE)
    if (argCheck == 'ôs') {
        return true;
    }
    // No.3689
    // ê‡ñæ:9974
    // 0x9974 (Windows-31J)
    // 0x51b2 (UTF-16BE)
    if (argCheck == 'ôt') {
        return true;
    }
    // No.3690
    // ê‡ñæ:9975
    // 0x9975 (Windows-31J)
    // 0x51b0 (UTF-16BE)
    if (argCheck == 'ôu') {
        return true;
    }
    // No.3691
    // ê‡ñæ:9976
    // 0x9976 (Windows-31J)
    // 0x51b5 (UTF-16BE)
    if (argCheck == 'ôv') {
        return true;
    }
    // No.3692
    // ê‡ñæ:9977
    // 0x9977 (Windows-31J)
    // 0x51bd (UTF-16BE)
    if (argCheck == 'ôw') {
        return true;
    }
    // No.3693
    // ê‡ñæ:9978
    // 0x9978 (Windows-31J)
    // 0x51c5 (UTF-16BE)
    if (argCheck == 'ôx') {
        return true;
    }
    // No.3694
    // ê‡ñæ:9979
    // 0x9979 (Windows-31J)
    // 0x51c9 (UTF-16BE)
    if (argCheck == 'ôy') {
        return true;
    }
    // No.3695
    // ê‡ñæ:997a
    // 0x997a (Windows-31J)
    // 0x51db (UTF-16BE)
    if (argCheck == 'ôz') {
        return true;
    }
    // No.3696
    // ê‡ñæ:997b
    // 0x997b (Windows-31J)
    // 0x51e0 (UTF-16BE)
    if (argCheck == 'ô{') {
        return true;
    }
    // No.3697
    // ê‡ñæ:997c
    // 0x997c (Windows-31J)
    // 0x8655 (UTF-16BE)
    if (argCheck == 'ô|') {
        return true;
    }
    // No.3698
    // ê‡ñæ:997d
    // 0x997d (Windows-31J)
    // 0x51e9 (UTF-16BE)
    if (argCheck == 'ô}') {
        return true;
    }
    // No.3699
    // ê‡ñæ:997e
    // 0x997e (Windows-31J)
    // 0x51ed (UTF-16BE)
    if (argCheck == 'ô~') {
        return true;
    }
    // No.3700
    // ê‡ñæ:9980
    // 0x9980 (Windows-31J)
    // 0x51f0 (UTF-16BE)
    if (argCheck == 'ôÄ') {
        return true;
    }
    // No.3701
    // ê‡ñæ:9981
    // 0x9981 (Windows-31J)
    // 0x51f5 (UTF-16BE)
    if (argCheck == 'ôÅ') {
        return true;
    }
    // No.3702
    // ê‡ñæ:9982
    // 0x9982 (Windows-31J)
    // 0x51fe (UTF-16BE)
    if (argCheck == 'ôÇ') {
        return true;
    }
    // No.3703
    // ê‡ñæ:9983
    // 0x9983 (Windows-31J)
    // 0x5204 (UTF-16BE)
    if (argCheck == 'ôÉ') {
        return true;
    }
    // No.3704
    // ê‡ñæ:9984
    // 0x9984 (Windows-31J)
    // 0x520b (UTF-16BE)
    if (argCheck == 'ôÑ') {
        return true;
    }
    // No.3705
    // ê‡ñæ:9985
    // 0x9985 (Windows-31J)
    // 0x5214 (UTF-16BE)
    if (argCheck == 'ôÖ') {
        return true;
    }
    // No.3706
    // ê‡ñæ:9986
    // 0x9986 (Windows-31J)
    // 0x520e (UTF-16BE)
    if (argCheck == 'ôÜ') {
        return true;
    }
    // No.3707
    // ê‡ñæ:9987
    // 0x9987 (Windows-31J)
    // 0x5227 (UTF-16BE)
    if (argCheck == 'ôá') {
        return true;
    }
    // No.3708
    // ê‡ñæ:9988
    // 0x9988 (Windows-31J)
    // 0x522a (UTF-16BE)
    if (argCheck == 'ôà') {
        return true;
    }
    // No.3709
    // ê‡ñæ:9989
    // 0x9989 (Windows-31J)
    // 0x522e (UTF-16BE)
    if (argCheck == 'ôâ') {
        return true;
    }
    // No.3710
    // ê‡ñæ:998a
    // 0x998a (Windows-31J)
    // 0x5233 (UTF-16BE)
    if (argCheck == 'ôä') {
        return true;
    }
    // No.3711
    // ê‡ñæ:998b
    // 0x998b (Windows-31J)
    // 0x5239 (UTF-16BE)
    if (argCheck == 'ôã') {
        return true;
    }
    // No.3712
    // ê‡ñæ:998c
    // 0x998c (Windows-31J)
    // 0x524f (UTF-16BE)
    if (argCheck == 'ôå') {
        return true;
    }
    // No.3713
    // ê‡ñæ:998d
    // 0x998d (Windows-31J)
    // 0x5244 (UTF-16BE)
    if (argCheck == 'ôç') {
        return true;
    }
    // No.3714
    // ê‡ñæ:998e
    // 0x998e (Windows-31J)
    // 0x524b (UTF-16BE)
    if (argCheck == 'ôé') {
        return true;
    }
    // No.3715
    // ê‡ñæ:998f
    // 0x998f (Windows-31J)
    // 0x524c (UTF-16BE)
    if (argCheck == 'ôè') {
        return true;
    }
    // No.3716
    // ê‡ñæ:9990
    // 0x9990 (Windows-31J)
    // 0x525e (UTF-16BE)
    if (argCheck == 'ôê') {
        return true;
    }
    // No.3717
    // ê‡ñæ:9991
    // 0x9991 (Windows-31J)
    // 0x5254 (UTF-16BE)
    if (argCheck == 'ôë') {
        return true;
    }
    // No.3718
    // ê‡ñæ:9992
    // 0x9992 (Windows-31J)
    // 0x526a (UTF-16BE)
    if (argCheck == 'ôí') {
        return true;
    }
    // No.3719
    // ê‡ñæ:9993
    // 0x9993 (Windows-31J)
    // 0x5274 (UTF-16BE)
    if (argCheck == 'ôì') {
        return true;
    }
    // No.3720
    // ê‡ñæ:9994
    // 0x9994 (Windows-31J)
    // 0x5269 (UTF-16BE)
    if (argCheck == 'ôî') {
        return true;
    }
    // No.3721
    // ê‡ñæ:9995
    // 0x9995 (Windows-31J)
    // 0x5273 (UTF-16BE)
    if (argCheck == 'ôï') {
        return true;
    }
    // No.3722
    // ê‡ñæ:9996
    // 0x9996 (Windows-31J)
    // 0x527f (UTF-16BE)
    if (argCheck == 'ôñ') {
        return true;
    }
    // No.3723
    // ê‡ñæ:9997
    // 0x9997 (Windows-31J)
    // 0x527d (UTF-16BE)
    if (argCheck == 'ôó') {
        return true;
    }
    // No.3724
    // ê‡ñæ:9998
    // 0x9998 (Windows-31J)
    // 0x528d (UTF-16BE)
    if (argCheck == 'ôò') {
        return true;
    }
    // No.3725
    // ê‡ñæ:9999
    // 0x9999 (Windows-31J)
    // 0x5294 (UTF-16BE)
    if (argCheck == 'ôô') {
        return true;
    }
    // No.3726
    // ê‡ñæ:999a
    // 0x999a (Windows-31J)
    // 0x5292 (UTF-16BE)
    if (argCheck == 'ôö') {
        return true;
    }
    // No.3727
    // ê‡ñæ:999b
    // 0x999b (Windows-31J)
    // 0x5271 (UTF-16BE)
    if (argCheck == 'ôõ') {
        return true;
    }
    // No.3728
    // ê‡ñæ:999c
    // 0x999c (Windows-31J)
    // 0x5288 (UTF-16BE)
    if (argCheck == 'ôú') {
        return true;
    }
    // No.3729
    // ê‡ñæ:999d
    // 0x999d (Windows-31J)
    // 0x5291 (UTF-16BE)
    if (argCheck == 'ôù') {
        return true;
    }
    // No.3730
    // ê‡ñæ:999e
    // 0x999e (Windows-31J)
    // 0x8fa8 (UTF-16BE)
    if (argCheck == 'ôû') {
        return true;
    }
    // No.3731
    // ê‡ñæ:999f
    // 0x999f (Windows-31J)
    // 0x8fa7 (UTF-16BE)
    if (argCheck == 'ôü') {
        return true;
    }
    // No.3732
    // ê‡ñæ:99a0
    // 0x99a0 (Windows-31J)
    // 0x52ac (UTF-16BE)
    if (argCheck == 'ô†') {
        return true;
    }
    // No.3733
    // ê‡ñæ:99a1
    // 0x99a1 (Windows-31J)
    // 0x52ad (UTF-16BE)
    if (argCheck == 'ô°') {
        return true;
    }
    // No.3734
    // ê‡ñæ:99a2
    // 0x99a2 (Windows-31J)
    // 0x52bc (UTF-16BE)
    if (argCheck == 'ô¢') {
        return true;
    }
    // No.3735
    // ê‡ñæ:99a3
    // 0x99a3 (Windows-31J)
    // 0x52b5 (UTF-16BE)
    if (argCheck == 'ô£') {
        return true;
    }
    // No.3736
    // ê‡ñæ:99a4
    // 0x99a4 (Windows-31J)
    // 0x52c1 (UTF-16BE)
    if (argCheck == 'ô§') {
        return true;
    }
    // No.3737
    // ê‡ñæ:99a5
    // 0x99a5 (Windows-31J)
    // 0x52cd (UTF-16BE)
    if (argCheck == 'ô•') {
        return true;
    }
    // No.3738
    // ê‡ñæ:99a6
    // 0x99a6 (Windows-31J)
    // 0x52d7 (UTF-16BE)
    if (argCheck == 'ô¶') {
        return true;
    }
    // No.3739
    // ê‡ñæ:99a7
    // 0x99a7 (Windows-31J)
    // 0x52de (UTF-16BE)
    if (argCheck == 'ôß') {
        return true;
    }
    // No.3740
    // ê‡ñæ:99a8
    // 0x99a8 (Windows-31J)
    // 0x52e3 (UTF-16BE)
    if (argCheck == 'ô®') {
        return true;
    }
    // No.3741
    // ê‡ñæ:99a9
    // 0x99a9 (Windows-31J)
    // 0x52e6 (UTF-16BE)
    if (argCheck == 'ô©') {
        return true;
    }
    // No.3742
    // ê‡ñæ:99aa
    // 0x99aa (Windows-31J)
    // 0x98ed (UTF-16BE)
    if (argCheck == 'ô™') {
        return true;
    }
    // No.3743
    // ê‡ñæ:99ab
    // 0x99ab (Windows-31J)
    // 0x52e0 (UTF-16BE)
    if (argCheck == 'ô´') {
        return true;
    }
    // No.3744
    // ê‡ñæ:99ac
    // 0x99ac (Windows-31J)
    // 0x52f3 (UTF-16BE)
    if (argCheck == 'ô¨') {
        return true;
    }
    // No.3745
    // ê‡ñæ:99ad
    // 0x99ad (Windows-31J)
    // 0x52f5 (UTF-16BE)
    if (argCheck == 'ô≠') {
        return true;
    }
    // No.3746
    // ê‡ñæ:99ae
    // 0x99ae (Windows-31J)
    // 0x52f8 (UTF-16BE)
    if (argCheck == 'ôÆ') {
        return true;
    }
    // No.3747
    // ê‡ñæ:99af
    // 0x99af (Windows-31J)
    // 0x52f9 (UTF-16BE)
    if (argCheck == 'ôØ') {
        return true;
    }
    // No.3748
    // ê‡ñæ:99b0
    // 0x99b0 (Windows-31J)
    // 0x5306 (UTF-16BE)
    if (argCheck == 'ô∞') {
        return true;
    }
    // No.3749
    // ê‡ñæ:99b1
    // 0x99b1 (Windows-31J)
    // 0x5308 (UTF-16BE)
    if (argCheck == 'ô±') {
        return true;
    }
    // No.3750
    // ê‡ñæ:99b2
    // 0x99b2 (Windows-31J)
    // 0x7538 (UTF-16BE)
    if (argCheck == 'ô≤') {
        return true;
    }
    // No.3751
    // ê‡ñæ:99b3
    // 0x99b3 (Windows-31J)
    // 0x530d (UTF-16BE)
    if (argCheck == 'ô≥') {
        return true;
    }
    // No.3752
    // ê‡ñæ:99b4
    // 0x99b4 (Windows-31J)
    // 0x5310 (UTF-16BE)
    if (argCheck == 'ô¥') {
        return true;
    }
    // No.3753
    // ê‡ñæ:99b5
    // 0x99b5 (Windows-31J)
    // 0x530f (UTF-16BE)
    if (argCheck == 'ôµ') {
        return true;
    }
    // No.3754
    // ê‡ñæ:99b6
    // 0x99b6 (Windows-31J)
    // 0x5315 (UTF-16BE)
    if (argCheck == 'ô∂') {
        return true;
    }
    // No.3755
    // ê‡ñæ:99b7
    // 0x99b7 (Windows-31J)
    // 0x531a (UTF-16BE)
    if (argCheck == 'ô∑') {
        return true;
    }
    // No.3756
    // ê‡ñæ:99b8
    // 0x99b8 (Windows-31J)
    // 0x5323 (UTF-16BE)
    if (argCheck == 'ô∏') {
        return true;
    }
    // No.3757
    // ê‡ñæ:99b9
    // 0x99b9 (Windows-31J)
    // 0x532f (UTF-16BE)
    if (argCheck == 'ôπ') {
        return true;
    }
    // No.3758
    // ê‡ñæ:99ba
    // 0x99ba (Windows-31J)
    // 0x5331 (UTF-16BE)
    if (argCheck == 'ô∫') {
        return true;
    }
    // No.3759
    // ê‡ñæ:99bb
    // 0x99bb (Windows-31J)
    // 0x5333 (UTF-16BE)
    if (argCheck == 'ôª') {
        return true;
    }
    // No.3760
    // ê‡ñæ:99bc
    // 0x99bc (Windows-31J)
    // 0x5338 (UTF-16BE)
    if (argCheck == 'ôº') {
        return true;
    }
    // No.3761
    // ê‡ñæ:99bd
    // 0x99bd (Windows-31J)
    // 0x5340 (UTF-16BE)
    if (argCheck == 'ôΩ') {
        return true;
    }
    // No.3762
    // ê‡ñæ:99be
    // 0x99be (Windows-31J)
    // 0x5346 (UTF-16BE)
    if (argCheck == 'ôæ') {
        return true;
    }
    // No.3763
    // ê‡ñæ:99bf
    // 0x99bf (Windows-31J)
    // 0x5345 (UTF-16BE)
    if (argCheck == 'ôø') {
        return true;
    }
    // No.3764
    // ê‡ñæ:99c0
    // 0x99c0 (Windows-31J)
    // 0x4e17 (UTF-16BE)
    if (argCheck == 'ô¿') {
        return true;
    }
    // No.3765
    // ê‡ñæ:99c1
    // 0x99c1 (Windows-31J)
    // 0x5349 (UTF-16BE)
    if (argCheck == 'ô¡') {
        return true;
    }
    // No.3766
    // ê‡ñæ:99c2
    // 0x99c2 (Windows-31J)
    // 0x534d (UTF-16BE)
    if (argCheck == 'ô¬') {
        return true;
    }
    // No.3767
    // ê‡ñæ:99c3
    // 0x99c3 (Windows-31J)
    // 0x51d6 (UTF-16BE)
    if (argCheck == 'ô√') {
        return true;
    }
    // No.3768
    // ê‡ñæ:99c4
    // 0x99c4 (Windows-31J)
    // 0x535e (UTF-16BE)
    if (argCheck == 'ôƒ') {
        return true;
    }
    // No.3769
    // ê‡ñæ:99c5
    // 0x99c5 (Windows-31J)
    // 0x5369 (UTF-16BE)
    if (argCheck == 'ô≈') {
        return true;
    }
    // No.3770
    // ê‡ñæ:99c6
    // 0x99c6 (Windows-31J)
    // 0x536e (UTF-16BE)
    if (argCheck == 'ô∆') {
        return true;
    }
    // No.3771
    // ê‡ñæ:99c7
    // 0x99c7 (Windows-31J)
    // 0x5918 (UTF-16BE)
    if (argCheck == 'ô«') {
        return true;
    }
    // No.3772
    // ê‡ñæ:99c8
    // 0x99c8 (Windows-31J)
    // 0x537b (UTF-16BE)
    if (argCheck == 'ô»') {
        return true;
    }
    // No.3773
    // ê‡ñæ:99c9
    // 0x99c9 (Windows-31J)
    // 0x5377 (UTF-16BE)
    if (argCheck == 'ô…') {
        return true;
    }
    // No.3774
    // ê‡ñæ:99ca
    // 0x99ca (Windows-31J)
    // 0x5382 (UTF-16BE)
    if (argCheck == 'ô ') {
        return true;
    }
    // No.3775
    // ê‡ñæ:99cb
    // 0x99cb (Windows-31J)
    // 0x5396 (UTF-16BE)
    if (argCheck == 'ôÀ') {
        return true;
    }
    // No.3776
    // ê‡ñæ:99cc
    // 0x99cc (Windows-31J)
    // 0x53a0 (UTF-16BE)
    if (argCheck == 'ôÃ') {
        return true;
    }
    // No.3777
    // ê‡ñæ:99cd
    // 0x99cd (Windows-31J)
    // 0x53a6 (UTF-16BE)
    if (argCheck == 'ôÕ') {
        return true;
    }
    // No.3778
    // ê‡ñæ:99ce
    // 0x99ce (Windows-31J)
    // 0x53a5 (UTF-16BE)
    if (argCheck == 'ôŒ') {
        return true;
    }
    // No.3779
    // ê‡ñæ:99cf
    // 0x99cf (Windows-31J)
    // 0x53ae (UTF-16BE)
    if (argCheck == 'ôœ') {
        return true;
    }
    // No.3780
    // ê‡ñæ:99d0
    // 0x99d0 (Windows-31J)
    // 0x53b0 (UTF-16BE)
    if (argCheck == 'ô–') {
        return true;
    }
    // No.3781
    // ê‡ñæ:99d1
    // 0x99d1 (Windows-31J)
    // 0x53b6 (UTF-16BE)
    if (argCheck == 'ô—') {
        return true;
    }
    // No.3782
    // ê‡ñæ:99d2
    // 0x99d2 (Windows-31J)
    // 0x53c3 (UTF-16BE)
    if (argCheck == 'ô“') {
        return true;
    }
    // No.3783
    // ê‡ñæ:99d3
    // 0x99d3 (Windows-31J)
    // 0x7c12 (UTF-16BE)
    if (argCheck == 'ô”') {
        return true;
    }
    // No.3784
    // ê‡ñæ:99d4
    // 0x99d4 (Windows-31J)
    // 0x96d9 (UTF-16BE)
    if (argCheck == 'ô‘') {
        return true;
    }
    // No.3785
    // ê‡ñæ:99d5
    // 0x99d5 (Windows-31J)
    // 0x53df (UTF-16BE)
    if (argCheck == 'ô’') {
        return true;
    }
    // No.3786
    // ê‡ñæ:99d6
    // 0x99d6 (Windows-31J)
    // 0x66fc (UTF-16BE)
    if (argCheck == 'ô÷') {
        return true;
    }
    // No.3787
    // ê‡ñæ:99d7
    // 0x99d7 (Windows-31J)
    // 0x71ee (UTF-16BE)
    if (argCheck == 'ô◊') {
        return true;
    }
    // No.3788
    // ê‡ñæ:99d8
    // 0x99d8 (Windows-31J)
    // 0x53ee (UTF-16BE)
    if (argCheck == 'ôÿ') {
        return true;
    }
    // No.3789
    // ê‡ñæ:99d9
    // 0x99d9 (Windows-31J)
    // 0x53e8 (UTF-16BE)
    if (argCheck == 'ôŸ') {
        return true;
    }
    // No.3790
    // ê‡ñæ:99da
    // 0x99da (Windows-31J)
    // 0x53ed (UTF-16BE)
    if (argCheck == 'ô⁄') {
        return true;
    }
    // No.3791
    // ê‡ñæ:99db
    // 0x99db (Windows-31J)
    // 0x53fa (UTF-16BE)
    if (argCheck == 'ô€') {
        return true;
    }
    // No.3792
    // ê‡ñæ:99dc
    // 0x99dc (Windows-31J)
    // 0x5401 (UTF-16BE)
    if (argCheck == 'ô‹') {
        return true;
    }
    // No.3793
    // ê‡ñæ:99dd
    // 0x99dd (Windows-31J)
    // 0x543d (UTF-16BE)
    if (argCheck == 'ô›') {
        return true;
    }
    // No.3794
    // ê‡ñæ:99de
    // 0x99de (Windows-31J)
    // 0x5440 (UTF-16BE)
    if (argCheck == 'ôﬁ') {
        return true;
    }
    // No.3795
    // ê‡ñæ:99df
    // 0x99df (Windows-31J)
    // 0x542c (UTF-16BE)
    if (argCheck == 'ôﬂ') {
        return true;
    }
    // No.3796
    // ê‡ñæ:99e0
    // 0x99e0 (Windows-31J)
    // 0x542d (UTF-16BE)
    if (argCheck == 'ô‡') {
        return true;
    }
    // No.3797
    // ê‡ñæ:99e1
    // 0x99e1 (Windows-31J)
    // 0x543c (UTF-16BE)
    if (argCheck == 'ô·') {
        return true;
    }
    // No.3798
    // ê‡ñæ:99e2
    // 0x99e2 (Windows-31J)
    // 0x542e (UTF-16BE)
    if (argCheck == 'ô‚') {
        return true;
    }
    // No.3799
    // ê‡ñæ:99e3
    // 0x99e3 (Windows-31J)
    // 0x5436 (UTF-16BE)
    if (argCheck == 'ô„') {
        return true;
    }
    // No.3800
    // ê‡ñæ:99e4
    // 0x99e4 (Windows-31J)
    // 0x5429 (UTF-16BE)
    if (argCheck == 'ô‰') {
        return true;
    }
    // No.3801
    // ê‡ñæ:99e5
    // 0x99e5 (Windows-31J)
    // 0x541d (UTF-16BE)
    if (argCheck == 'ôÂ') {
        return true;
    }
    // No.3802
    // ê‡ñæ:99e6
    // 0x99e6 (Windows-31J)
    // 0x544e (UTF-16BE)
    if (argCheck == 'ôÊ') {
        return true;
    }
    // No.3803
    // ê‡ñæ:99e7
    // 0x99e7 (Windows-31J)
    // 0x548f (UTF-16BE)
    if (argCheck == 'ôÁ') {
        return true;
    }
    // No.3804
    // ê‡ñæ:99e8
    // 0x99e8 (Windows-31J)
    // 0x5475 (UTF-16BE)
    if (argCheck == 'ôË') {
        return true;
    }
    // No.3805
    // ê‡ñæ:99e9
    // 0x99e9 (Windows-31J)
    // 0x548e (UTF-16BE)
    if (argCheck == 'ôÈ') {
        return true;
    }
    // No.3806
    // ê‡ñæ:99ea
    // 0x99ea (Windows-31J)
    // 0x545f (UTF-16BE)
    if (argCheck == 'ôÍ') {
        return true;
    }
    // No.3807
    // ê‡ñæ:99eb
    // 0x99eb (Windows-31J)
    // 0x5471 (UTF-16BE)
    if (argCheck == 'ôÎ') {
        return true;
    }
    // No.3808
    // ê‡ñæ:99ec
    // 0x99ec (Windows-31J)
    // 0x5477 (UTF-16BE)
    if (argCheck == 'ôÏ') {
        return true;
    }
    // No.3809
    // ê‡ñæ:99ed
    // 0x99ed (Windows-31J)
    // 0x5470 (UTF-16BE)
    if (argCheck == 'ôÌ') {
        return true;
    }
    // No.3810
    // ê‡ñæ:99ee
    // 0x99ee (Windows-31J)
    // 0x5492 (UTF-16BE)
    if (argCheck == 'ôÓ') {
        return true;
    }
    // No.3811
    // ê‡ñæ:99ef
    // 0x99ef (Windows-31J)
    // 0x547b (UTF-16BE)
    if (argCheck == 'ôÔ') {
        return true;
    }
    // No.3812
    // ê‡ñæ:99f0
    // 0x99f0 (Windows-31J)
    // 0x5480 (UTF-16BE)
    if (argCheck == 'ô') {
        return true;
    }
    // No.3813
    // ê‡ñæ:99f1
    // 0x99f1 (Windows-31J)
    // 0x5476 (UTF-16BE)
    if (argCheck == 'ôÒ') {
        return true;
    }
    // No.3814
    // ê‡ñæ:99f2
    // 0x99f2 (Windows-31J)
    // 0x5484 (UTF-16BE)
    if (argCheck == 'ôÚ') {
        return true;
    }
    // No.3815
    // ê‡ñæ:99f3
    // 0x99f3 (Windows-31J)
    // 0x5490 (UTF-16BE)
    if (argCheck == 'ôÛ') {
        return true;
    }
    // No.3816
    // ê‡ñæ:99f4
    // 0x99f4 (Windows-31J)
    // 0x5486 (UTF-16BE)
    if (argCheck == 'ôÙ') {
        return true;
    }
    // No.3817
    // ê‡ñæ:99f5
    // 0x99f5 (Windows-31J)
    // 0x54c7 (UTF-16BE)
    if (argCheck == 'ôı') {
        return true;
    }
    // No.3818
    // ê‡ñæ:99f6
    // 0x99f6 (Windows-31J)
    // 0x54a2 (UTF-16BE)
    if (argCheck == 'ôˆ') {
        return true;
    }
    // No.3819
    // ê‡ñæ:99f7
    // 0x99f7 (Windows-31J)
    // 0x54b8 (UTF-16BE)
    if (argCheck == 'ô˜') {
        return true;
    }
    // No.3820
    // ê‡ñæ:99f8
    // 0x99f8 (Windows-31J)
    // 0x54a5 (UTF-16BE)
    if (argCheck == 'ô¯') {
        return true;
    }
    // No.3821
    // ê‡ñæ:99f9
    // 0x99f9 (Windows-31J)
    // 0x54ac (UTF-16BE)
    if (argCheck == 'ô˘') {
        return true;
    }
    // No.3822
    // ê‡ñæ:99fa
    // 0x99fa (Windows-31J)
    // 0x54c4 (UTF-16BE)
    if (argCheck == 'ô˙') {
        return true;
    }
    // No.3823
    // ê‡ñæ:99fb
    // 0x99fb (Windows-31J)
    // 0x54c8 (UTF-16BE)
    if (argCheck == 'ô˚') {
        return true;
    }
    // No.3824
    // ê‡ñæ:99fc
    // 0x99fc (Windows-31J)
    // 0x54a8 (UTF-16BE)
    if (argCheck == 'ô¸') {
        return true;
    }
    // No.3825
    // ê‡ñæ:9a40
    // 0x9a40 (Windows-31J)
    // 0x54ab (UTF-16BE)
    if (argCheck == 'ö@') {
        return true;
    }
    // No.3826
    // ê‡ñæ:9a41
    // 0x9a41 (Windows-31J)
    // 0x54c2 (UTF-16BE)
    if (argCheck == 'öA') {
        return true;
    }
    // No.3827
    // ê‡ñæ:9a42
    // 0x9a42 (Windows-31J)
    // 0x54a4 (UTF-16BE)
    if (argCheck == 'öB') {
        return true;
    }
    // No.3828
    // ê‡ñæ:9a43
    // 0x9a43 (Windows-31J)
    // 0x54be (UTF-16BE)
    if (argCheck == 'öC') {
        return true;
    }
    // No.3829
    // ê‡ñæ:9a44
    // 0x9a44 (Windows-31J)
    // 0x54bc (UTF-16BE)
    if (argCheck == 'öD') {
        return true;
    }
    // No.3830
    // ê‡ñæ:9a45
    // 0x9a45 (Windows-31J)
    // 0x54d8 (UTF-16BE)
    if (argCheck == 'öE') {
        return true;
    }
    // No.3831
    // ê‡ñæ:9a46
    // 0x9a46 (Windows-31J)
    // 0x54e5 (UTF-16BE)
    if (argCheck == 'öF') {
        return true;
    }
    // No.3832
    // ê‡ñæ:9a47
    // 0x9a47 (Windows-31J)
    // 0x54e6 (UTF-16BE)
    if (argCheck == 'öG') {
        return true;
    }
    // No.3833
    // ê‡ñæ:9a48
    // 0x9a48 (Windows-31J)
    // 0x550f (UTF-16BE)
    if (argCheck == 'öH') {
        return true;
    }
    // No.3834
    // ê‡ñæ:9a49
    // 0x9a49 (Windows-31J)
    // 0x5514 (UTF-16BE)
    if (argCheck == 'öI') {
        return true;
    }
    // No.3835
    // ê‡ñæ:9a4a
    // 0x9a4a (Windows-31J)
    // 0x54fd (UTF-16BE)
    if (argCheck == 'öJ') {
        return true;
    }
    // No.3836
    // ê‡ñæ:9a4b
    // 0x9a4b (Windows-31J)
    // 0x54ee (UTF-16BE)
    if (argCheck == 'öK') {
        return true;
    }
    // No.3837
    // ê‡ñæ:9a4c
    // 0x9a4c (Windows-31J)
    // 0x54ed (UTF-16BE)
    if (argCheck == 'öL') {
        return true;
    }
    // No.3838
    // ê‡ñæ:9a4d
    // 0x9a4d (Windows-31J)
    // 0x54fa (UTF-16BE)
    if (argCheck == 'öM') {
        return true;
    }
    // No.3839
    // ê‡ñæ:9a4e
    // 0x9a4e (Windows-31J)
    // 0x54e2 (UTF-16BE)
    if (argCheck == 'öN') {
        return true;
    }
    // No.3840
    // ê‡ñæ:9a4f
    // 0x9a4f (Windows-31J)
    // 0x5539 (UTF-16BE)
    if (argCheck == 'öO') {
        return true;
    }
    // No.3841
    // ê‡ñæ:9a50
    // 0x9a50 (Windows-31J)
    // 0x5540 (UTF-16BE)
    if (argCheck == 'öP') {
        return true;
    }
    // No.3842
    // ê‡ñæ:9a51
    // 0x9a51 (Windows-31J)
    // 0x5563 (UTF-16BE)
    if (argCheck == 'öQ') {
        return true;
    }
    // No.3843
    // ê‡ñæ:9a52
    // 0x9a52 (Windows-31J)
    // 0x554c (UTF-16BE)
    if (argCheck == 'öR') {
        return true;
    }
    // No.3844
    // ê‡ñæ:9a53
    // 0x9a53 (Windows-31J)
    // 0x552e (UTF-16BE)
    if (argCheck == 'öS') {
        return true;
    }
    // No.3845
    // ê‡ñæ:9a54
    // 0x9a54 (Windows-31J)
    // 0x555c (UTF-16BE)
    if (argCheck == 'öT') {
        return true;
    }
    // No.3846
    // ê‡ñæ:9a55
    // 0x9a55 (Windows-31J)
    // 0x5545 (UTF-16BE)
    if (argCheck == 'öU') {
        return true;
    }
    // No.3847
    // ê‡ñæ:9a56
    // 0x9a56 (Windows-31J)
    // 0x5556 (UTF-16BE)
    if (argCheck == 'öV') {
        return true;
    }
    // No.3848
    // ê‡ñæ:9a57
    // 0x9a57 (Windows-31J)
    // 0x5557 (UTF-16BE)
    if (argCheck == 'öW') {
        return true;
    }
    // No.3849
    // ê‡ñæ:9a58
    // 0x9a58 (Windows-31J)
    // 0x5538 (UTF-16BE)
    if (argCheck == 'öX') {
        return true;
    }
    // No.3850
    // ê‡ñæ:9a59
    // 0x9a59 (Windows-31J)
    // 0x5533 (UTF-16BE)
    if (argCheck == 'öY') {
        return true;
    }
    // No.3851
    // ê‡ñæ:9a5a
    // 0x9a5a (Windows-31J)
    // 0x555d (UTF-16BE)
    if (argCheck == 'öZ') {
        return true;
    }
    // No.3852
    // ê‡ñæ:9a5b
    // 0x9a5b (Windows-31J)
    // 0x5599 (UTF-16BE)
    if (argCheck == 'ö[') {
        return true;
    }
    // No.3853
    // ê‡ñæ:9a5c
    // 0x9a5c (Windows-31J)
    // 0x5580 (UTF-16BE)
    if (argCheck == 'ö\') {
        return true;
    }
    // No.3854
    // ê‡ñæ:9a5d
    // 0x9a5d (Windows-31J)
    // 0x54af (UTF-16BE)
    if (argCheck == 'ö]') {
        return true;
    }
    // No.3855
    // ê‡ñæ:9a5e
    // 0x9a5e (Windows-31J)
    // 0x558a (UTF-16BE)
    if (argCheck == 'ö^') {
        return true;
    }
    // No.3856
    // ê‡ñæ:9a5f
    // 0x9a5f (Windows-31J)
    // 0x559f (UTF-16BE)
    if (argCheck == 'ö_') {
        return true;
    }
    // No.3857
    // ê‡ñæ:9a60
    // 0x9a60 (Windows-31J)
    // 0x557b (UTF-16BE)
    if (argCheck == 'ö`') {
        return true;
    }
    // No.3858
    // ê‡ñæ:9a61
    // 0x9a61 (Windows-31J)
    // 0x557e (UTF-16BE)
    if (argCheck == 'öa') {
        return true;
    }
    // No.3859
    // ê‡ñæ:9a62
    // 0x9a62 (Windows-31J)
    // 0x5598 (UTF-16BE)
    if (argCheck == 'öb') {
        return true;
    }
    // No.3860
    // ê‡ñæ:9a63
    // 0x9a63 (Windows-31J)
    // 0x559e (UTF-16BE)
    if (argCheck == 'öc') {
        return true;
    }
    // No.3861
    // ê‡ñæ:9a64
    // 0x9a64 (Windows-31J)
    // 0x55ae (UTF-16BE)
    if (argCheck == 'öd') {
        return true;
    }
    // No.3862
    // ê‡ñæ:9a65
    // 0x9a65 (Windows-31J)
    // 0x557c (UTF-16BE)
    if (argCheck == 'öe') {
        return true;
    }
    // No.3863
    // ê‡ñæ:9a66
    // 0x9a66 (Windows-31J)
    // 0x5583 (UTF-16BE)
    if (argCheck == 'öf') {
        return true;
    }
    // No.3864
    // ê‡ñæ:9a67
    // 0x9a67 (Windows-31J)
    // 0x55a9 (UTF-16BE)
    if (argCheck == 'ög') {
        return true;
    }
    // No.3865
    // ê‡ñæ:9a68
    // 0x9a68 (Windows-31J)
    // 0x5587 (UTF-16BE)
    if (argCheck == 'öh') {
        return true;
    }
    // No.3866
    // ê‡ñæ:9a69
    // 0x9a69 (Windows-31J)
    // 0x55a8 (UTF-16BE)
    if (argCheck == 'öi') {
        return true;
    }
    // No.3867
    // ê‡ñæ:9a6a
    // 0x9a6a (Windows-31J)
    // 0x55da (UTF-16BE)
    if (argCheck == 'öj') {
        return true;
    }
    // No.3868
    // ê‡ñæ:9a6b
    // 0x9a6b (Windows-31J)
    // 0x55c5 (UTF-16BE)
    if (argCheck == 'ök') {
        return true;
    }
    // No.3869
    // ê‡ñæ:9a6c
    // 0x9a6c (Windows-31J)
    // 0x55df (UTF-16BE)
    if (argCheck == 'öl') {
        return true;
    }
    // No.3870
    // ê‡ñæ:9a6d
    // 0x9a6d (Windows-31J)
    // 0x55c4 (UTF-16BE)
    if (argCheck == 'öm') {
        return true;
    }
    // No.3871
    // ê‡ñæ:9a6e
    // 0x9a6e (Windows-31J)
    // 0x55dc (UTF-16BE)
    if (argCheck == 'ön') {
        return true;
    }
    // No.3872
    // ê‡ñæ:9a6f
    // 0x9a6f (Windows-31J)
    // 0x55e4 (UTF-16BE)
    if (argCheck == 'öo') {
        return true;
    }
    // No.3873
    // ê‡ñæ:9a70
    // 0x9a70 (Windows-31J)
    // 0x55d4 (UTF-16BE)
    if (argCheck == 'öp') {
        return true;
    }
    // No.3874
    // ê‡ñæ:9a71
    // 0x9a71 (Windows-31J)
    // 0x5614 (UTF-16BE)
    if (argCheck == 'öq') {
        return true;
    }
    // No.3875
    // ê‡ñæ:9a72
    // 0x9a72 (Windows-31J)
    // 0x55f7 (UTF-16BE)
    if (argCheck == 'ör') {
        return true;
    }
    // No.3876
    // ê‡ñæ:9a73
    // 0x9a73 (Windows-31J)
    // 0x5616 (UTF-16BE)
    if (argCheck == 'ös') {
        return true;
    }
    // No.3877
    // ê‡ñæ:9a74
    // 0x9a74 (Windows-31J)
    // 0x55fe (UTF-16BE)
    if (argCheck == 'öt') {
        return true;
    }
    // No.3878
    // ê‡ñæ:9a75
    // 0x9a75 (Windows-31J)
    // 0x55fd (UTF-16BE)
    if (argCheck == 'öu') {
        return true;
    }
    // No.3879
    // ê‡ñæ:9a76
    // 0x9a76 (Windows-31J)
    // 0x561b (UTF-16BE)
    if (argCheck == 'öv') {
        return true;
    }
    // No.3880
    // ê‡ñæ:9a77
    // 0x9a77 (Windows-31J)
    // 0x55f9 (UTF-16BE)
    if (argCheck == 'öw') {
        return true;
    }
    // No.3881
    // ê‡ñæ:9a78
    // 0x9a78 (Windows-31J)
    // 0x564e (UTF-16BE)
    if (argCheck == 'öx') {
        return true;
    }
    // No.3882
    // ê‡ñæ:9a79
    // 0x9a79 (Windows-31J)
    // 0x5650 (UTF-16BE)
    if (argCheck == 'öy') {
        return true;
    }
    // No.3883
    // ê‡ñæ:9a7a
    // 0x9a7a (Windows-31J)
    // 0x71df (UTF-16BE)
    if (argCheck == 'öz') {
        return true;
    }
    // No.3884
    // ê‡ñæ:9a7b
    // 0x9a7b (Windows-31J)
    // 0x5634 (UTF-16BE)
    if (argCheck == 'ö{') {
        return true;
    }
    // No.3885
    // ê‡ñæ:9a7c
    // 0x9a7c (Windows-31J)
    // 0x5636 (UTF-16BE)
    if (argCheck == 'ö|') {
        return true;
    }
    // No.3886
    // ê‡ñæ:9a7d
    // 0x9a7d (Windows-31J)
    // 0x5632 (UTF-16BE)
    if (argCheck == 'ö}') {
        return true;
    }
    // No.3887
    // ê‡ñæ:9a7e
    // 0x9a7e (Windows-31J)
    // 0x5638 (UTF-16BE)
    if (argCheck == 'ö~') {
        return true;
    }
    // No.3888
    // ê‡ñæ:9a80
    // 0x9a80 (Windows-31J)
    // 0x566b (UTF-16BE)
    if (argCheck == 'öÄ') {
        return true;
    }
    // No.3889
    // ê‡ñæ:9a81
    // 0x9a81 (Windows-31J)
    // 0x5664 (UTF-16BE)
    if (argCheck == 'öÅ') {
        return true;
    }
    // No.3890
    // ê‡ñæ:9a82
    // 0x9a82 (Windows-31J)
    // 0x562f (UTF-16BE)
    if (argCheck == 'öÇ') {
        return true;
    }
    // No.3891
    // ê‡ñæ:9a83
    // 0x9a83 (Windows-31J)
    // 0x566c (UTF-16BE)
    if (argCheck == 'öÉ') {
        return true;
    }
    // No.3892
    // ê‡ñæ:9a84
    // 0x9a84 (Windows-31J)
    // 0x566a (UTF-16BE)
    if (argCheck == 'öÑ') {
        return true;
    }
    // No.3893
    // ê‡ñæ:9a85
    // 0x9a85 (Windows-31J)
    // 0x5686 (UTF-16BE)
    if (argCheck == 'öÖ') {
        return true;
    }
    // No.3894
    // ê‡ñæ:9a86
    // 0x9a86 (Windows-31J)
    // 0x5680 (UTF-16BE)
    if (argCheck == 'öÜ') {
        return true;
    }
    // No.3895
    // ê‡ñæ:9a87
    // 0x9a87 (Windows-31J)
    // 0x568a (UTF-16BE)
    if (argCheck == 'öá') {
        return true;
    }
    // No.3896
    // ê‡ñæ:9a88
    // 0x9a88 (Windows-31J)
    // 0x56a0 (UTF-16BE)
    if (argCheck == 'öà') {
        return true;
    }
    // No.3897
    // ê‡ñæ:9a89
    // 0x9a89 (Windows-31J)
    // 0x5694 (UTF-16BE)
    if (argCheck == 'öâ') {
        return true;
    }
    // No.3898
    // ê‡ñæ:9a8a
    // 0x9a8a (Windows-31J)
    // 0x568f (UTF-16BE)
    if (argCheck == 'öä') {
        return true;
    }
    // No.3899
    // ê‡ñæ:9a8b
    // 0x9a8b (Windows-31J)
    // 0x56a5 (UTF-16BE)
    if (argCheck == 'öã') {
        return true;
    }
    // No.3900
    // ê‡ñæ:9a8c
    // 0x9a8c (Windows-31J)
    // 0x56ae (UTF-16BE)
    if (argCheck == 'öå') {
        return true;
    }
    // No.3901
    // ê‡ñæ:9a8d
    // 0x9a8d (Windows-31J)
    // 0x56b6 (UTF-16BE)
    if (argCheck == 'öç') {
        return true;
    }
    // No.3902
    // ê‡ñæ:9a8e
    // 0x9a8e (Windows-31J)
    // 0x56b4 (UTF-16BE)
    if (argCheck == 'öé') {
        return true;
    }
    // No.3903
    // ê‡ñæ:9a8f
    // 0x9a8f (Windows-31J)
    // 0x56c2 (UTF-16BE)
    if (argCheck == 'öè') {
        return true;
    }
    // No.3904
    // ê‡ñæ:9a90
    // 0x9a90 (Windows-31J)
    // 0x56bc (UTF-16BE)
    if (argCheck == 'öê') {
        return true;
    }
    // No.3905
    // ê‡ñæ:9a91
    // 0x9a91 (Windows-31J)
    // 0x56c1 (UTF-16BE)
    if (argCheck == 'öë') {
        return true;
    }
    // No.3906
    // ê‡ñæ:9a92
    // 0x9a92 (Windows-31J)
    // 0x56c3 (UTF-16BE)
    if (argCheck == 'öí') {
        return true;
    }
    // No.3907
    // ê‡ñæ:9a93
    // 0x9a93 (Windows-31J)
    // 0x56c0 (UTF-16BE)
    if (argCheck == 'öì') {
        return true;
    }
    // No.3908
    // ê‡ñæ:9a94
    // 0x9a94 (Windows-31J)
    // 0x56c8 (UTF-16BE)
    if (argCheck == 'öî') {
        return true;
    }
    // No.3909
    // ê‡ñæ:9a95
    // 0x9a95 (Windows-31J)
    // 0x56ce (UTF-16BE)
    if (argCheck == 'öï') {
        return true;
    }
    // No.3910
    // ê‡ñæ:9a96
    // 0x9a96 (Windows-31J)
    // 0x56d1 (UTF-16BE)
    if (argCheck == 'öñ') {
        return true;
    }
    // No.3911
    // ê‡ñæ:9a97
    // 0x9a97 (Windows-31J)
    // 0x56d3 (UTF-16BE)
    if (argCheck == 'öó') {
        return true;
    }
    // No.3912
    // ê‡ñæ:9a98
    // 0x9a98 (Windows-31J)
    // 0x56d7 (UTF-16BE)
    if (argCheck == 'öò') {
        return true;
    }
    // No.3913
    // ê‡ñæ:9a99
    // 0x9a99 (Windows-31J)
    // 0x56ee (UTF-16BE)
    if (argCheck == 'öô') {
        return true;
    }
    // No.3914
    // ê‡ñæ:9a9a
    // 0x9a9a (Windows-31J)
    // 0x56f9 (UTF-16BE)
    if (argCheck == 'öö') {
        return true;
    }
    // No.3915
    // ê‡ñæ:9a9b
    // 0x9a9b (Windows-31J)
    // 0x5700 (UTF-16BE)
    if (argCheck == 'öõ') {
        return true;
    }
    // No.3916
    // ê‡ñæ:9a9c
    // 0x9a9c (Windows-31J)
    // 0x56ff (UTF-16BE)
    if (argCheck == 'öú') {
        return true;
    }
    // No.3917
    // ê‡ñæ:9a9d
    // 0x9a9d (Windows-31J)
    // 0x5704 (UTF-16BE)
    if (argCheck == 'öù') {
        return true;
    }
    // No.3918
    // ê‡ñæ:9a9e
    // 0x9a9e (Windows-31J)
    // 0x5709 (UTF-16BE)
    if (argCheck == 'öû') {
        return true;
    }
    // No.3919
    // ê‡ñæ:9a9f
    // 0x9a9f (Windows-31J)
    // 0x5708 (UTF-16BE)
    if (argCheck == 'öü') {
        return true;
    }
    // No.3920
    // ê‡ñæ:9aa0
    // 0x9aa0 (Windows-31J)
    // 0x570b (UTF-16BE)
    if (argCheck == 'ö†') {
        return true;
    }
    // No.3921
    // ê‡ñæ:9aa1
    // 0x9aa1 (Windows-31J)
    // 0x570d (UTF-16BE)
    if (argCheck == 'ö°') {
        return true;
    }
    // No.3922
    // ê‡ñæ:9aa2
    // 0x9aa2 (Windows-31J)
    // 0x5713 (UTF-16BE)
    if (argCheck == 'ö¢') {
        return true;
    }
    // No.3923
    // ê‡ñæ:9aa3
    // 0x9aa3 (Windows-31J)
    // 0x5718 (UTF-16BE)
    if (argCheck == 'ö£') {
        return true;
    }
    // No.3924
    // ê‡ñæ:9aa4
    // 0x9aa4 (Windows-31J)
    // 0x5716 (UTF-16BE)
    if (argCheck == 'ö§') {
        return true;
    }
    // No.3925
    // ê‡ñæ:9aa5
    // 0x9aa5 (Windows-31J)
    // 0x55c7 (UTF-16BE)
    if (argCheck == 'ö•') {
        return true;
    }
    // No.3926
    // ê‡ñæ:9aa6
    // 0x9aa6 (Windows-31J)
    // 0x571c (UTF-16BE)
    if (argCheck == 'ö¶') {
        return true;
    }
    // No.3927
    // ê‡ñæ:9aa7
    // 0x9aa7 (Windows-31J)
    // 0x5726 (UTF-16BE)
    if (argCheck == 'öß') {
        return true;
    }
    // No.3928
    // ê‡ñæ:9aa8
    // 0x9aa8 (Windows-31J)
    // 0x5737 (UTF-16BE)
    if (argCheck == 'ö®') {
        return true;
    }
    // No.3929
    // ê‡ñæ:9aa9
    // 0x9aa9 (Windows-31J)
    // 0x5738 (UTF-16BE)
    if (argCheck == 'ö©') {
        return true;
    }
    // No.3930
    // ê‡ñæ:9aaa
    // 0x9aaa (Windows-31J)
    // 0x574e (UTF-16BE)
    if (argCheck == 'ö™') {
        return true;
    }
    // No.3931
    // ê‡ñæ:9aab
    // 0x9aab (Windows-31J)
    // 0x573b (UTF-16BE)
    if (argCheck == 'ö´') {
        return true;
    }
    // No.3932
    // ê‡ñæ:9aac
    // 0x9aac (Windows-31J)
    // 0x5740 (UTF-16BE)
    if (argCheck == 'ö¨') {
        return true;
    }
    // No.3933
    // ê‡ñæ:9aad
    // 0x9aad (Windows-31J)
    // 0x574f (UTF-16BE)
    if (argCheck == 'ö≠') {
        return true;
    }
    // No.3934
    // ê‡ñæ:9aae
    // 0x9aae (Windows-31J)
    // 0x5769 (UTF-16BE)
    if (argCheck == 'öÆ') {
        return true;
    }
    // No.3935
    // ê‡ñæ:9aaf
    // 0x9aaf (Windows-31J)
    // 0x57c0 (UTF-16BE)
    if (argCheck == 'öØ') {
        return true;
    }
    // No.3936
    // ê‡ñæ:9ab0
    // 0x9ab0 (Windows-31J)
    // 0x5788 (UTF-16BE)
    if (argCheck == 'ö∞') {
        return true;
    }
    // No.3937
    // ê‡ñæ:9ab1
    // 0x9ab1 (Windows-31J)
    // 0x5761 (UTF-16BE)
    if (argCheck == 'ö±') {
        return true;
    }
    // No.3938
    // ê‡ñæ:9ab2
    // 0x9ab2 (Windows-31J)
    // 0x577f (UTF-16BE)
    if (argCheck == 'ö≤') {
        return true;
    }
    // No.3939
    // ê‡ñæ:9ab3
    // 0x9ab3 (Windows-31J)
    // 0x5789 (UTF-16BE)
    if (argCheck == 'ö≥') {
        return true;
    }
    // No.3940
    // ê‡ñæ:9ab4
    // 0x9ab4 (Windows-31J)
    // 0x5793 (UTF-16BE)
    if (argCheck == 'ö¥') {
        return true;
    }
    // No.3941
    // ê‡ñæ:9ab5
    // 0x9ab5 (Windows-31J)
    // 0x57a0 (UTF-16BE)
    if (argCheck == 'öµ') {
        return true;
    }
    // No.3942
    // ê‡ñæ:9ab6
    // 0x9ab6 (Windows-31J)
    // 0x57b3 (UTF-16BE)
    if (argCheck == 'ö∂') {
        return true;
    }
    // No.3943
    // ê‡ñæ:9ab7
    // 0x9ab7 (Windows-31J)
    // 0x57a4 (UTF-16BE)
    if (argCheck == 'ö∑') {
        return true;
    }
    // No.3944
    // ê‡ñæ:9ab8
    // 0x9ab8 (Windows-31J)
    // 0x57aa (UTF-16BE)
    if (argCheck == 'ö∏') {
        return true;
    }
    // No.3945
    // ê‡ñæ:9ab9
    // 0x9ab9 (Windows-31J)
    // 0x57b0 (UTF-16BE)
    if (argCheck == 'öπ') {
        return true;
    }
    // No.3946
    // ê‡ñæ:9aba
    // 0x9aba (Windows-31J)
    // 0x57c3 (UTF-16BE)
    if (argCheck == 'ö∫') {
        return true;
    }
    // No.3947
    // ê‡ñæ:9abb
    // 0x9abb (Windows-31J)
    // 0x57c6 (UTF-16BE)
    if (argCheck == 'öª') {
        return true;
    }
    // No.3948
    // ê‡ñæ:9abc
    // 0x9abc (Windows-31J)
    // 0x57d4 (UTF-16BE)
    if (argCheck == 'öº') {
        return true;
    }
    // No.3949
    // ê‡ñæ:9abd
    // 0x9abd (Windows-31J)
    // 0x57d2 (UTF-16BE)
    if (argCheck == 'öΩ') {
        return true;
    }
    // No.3950
    // ê‡ñæ:9abe
    // 0x9abe (Windows-31J)
    // 0x57d3 (UTF-16BE)
    if (argCheck == 'öæ') {
        return true;
    }
    // No.3951
    // ê‡ñæ:9abf
    // 0x9abf (Windows-31J)
    // 0x580a (UTF-16BE)
    if (argCheck == 'öø') {
        return true;
    }
    // No.3952
    // ê‡ñæ:9ac0
    // 0x9ac0 (Windows-31J)
    // 0x57d6 (UTF-16BE)
    if (argCheck == 'ö¿') {
        return true;
    }
    // No.3953
    // ê‡ñæ:9ac1
    // 0x9ac1 (Windows-31J)
    // 0x57e3 (UTF-16BE)
    if (argCheck == 'ö¡') {
        return true;
    }
    // No.3954
    // ê‡ñæ:9ac2
    // 0x9ac2 (Windows-31J)
    // 0x580b (UTF-16BE)
    if (argCheck == 'ö¬') {
        return true;
    }
    // No.3955
    // ê‡ñæ:9ac3
    // 0x9ac3 (Windows-31J)
    // 0x5819 (UTF-16BE)
    if (argCheck == 'ö√') {
        return true;
    }
    // No.3956
    // ê‡ñæ:9ac4
    // 0x9ac4 (Windows-31J)
    // 0x581d (UTF-16BE)
    if (argCheck == 'öƒ') {
        return true;
    }
    // No.3957
    // ê‡ñæ:9ac5
    // 0x9ac5 (Windows-31J)
    // 0x5872 (UTF-16BE)
    if (argCheck == 'ö≈') {
        return true;
    }
    // No.3958
    // ê‡ñæ:9ac6
    // 0x9ac6 (Windows-31J)
    // 0x5821 (UTF-16BE)
    if (argCheck == 'ö∆') {
        return true;
    }
    // No.3959
    // ê‡ñæ:9ac7
    // 0x9ac7 (Windows-31J)
    // 0x5862 (UTF-16BE)
    if (argCheck == 'ö«') {
        return true;
    }
    // No.3960
    // ê‡ñæ:9ac8
    // 0x9ac8 (Windows-31J)
    // 0x584b (UTF-16BE)
    if (argCheck == 'ö»') {
        return true;
    }
    // No.3961
    // ê‡ñæ:9ac9
    // 0x9ac9 (Windows-31J)
    // 0x5870 (UTF-16BE)
    if (argCheck == 'ö…') {
        return true;
    }
    // No.3962
    // ê‡ñæ:9aca
    // 0x9aca (Windows-31J)
    // 0x6bc0 (UTF-16BE)
    if (argCheck == 'ö ') {
        return true;
    }
    // No.3963
    // ê‡ñæ:9acb
    // 0x9acb (Windows-31J)
    // 0x5852 (UTF-16BE)
    if (argCheck == 'öÀ') {
        return true;
    }
    // No.3964
    // ê‡ñæ:9acc
    // 0x9acc (Windows-31J)
    // 0x583d (UTF-16BE)
    if (argCheck == 'öÃ') {
        return true;
    }
    // No.3965
    // ê‡ñæ:9acd
    // 0x9acd (Windows-31J)
    // 0x5879 (UTF-16BE)
    if (argCheck == 'öÕ') {
        return true;
    }
    // No.3966
    // ê‡ñæ:9ace
    // 0x9ace (Windows-31J)
    // 0x5885 (UTF-16BE)
    if (argCheck == 'öŒ') {
        return true;
    }
    // No.3967
    // ê‡ñæ:9acf
    // 0x9acf (Windows-31J)
    // 0x58b9 (UTF-16BE)
    if (argCheck == 'öœ') {
        return true;
    }
    // No.3968
    // ê‡ñæ:9ad0
    // 0x9ad0 (Windows-31J)
    // 0x589f (UTF-16BE)
    if (argCheck == 'ö–') {
        return true;
    }
    // No.3969
    // ê‡ñæ:9ad1
    // 0x9ad1 (Windows-31J)
    // 0x58ab (UTF-16BE)
    if (argCheck == 'ö—') {
        return true;
    }
    // No.3970
    // ê‡ñæ:9ad2
    // 0x9ad2 (Windows-31J)
    // 0x58ba (UTF-16BE)
    if (argCheck == 'ö“') {
        return true;
    }
    // No.3971
    // ê‡ñæ:9ad3
    // 0x9ad3 (Windows-31J)
    // 0x58de (UTF-16BE)
    if (argCheck == 'ö”') {
        return true;
    }
    // No.3972
    // ê‡ñæ:9ad4
    // 0x9ad4 (Windows-31J)
    // 0x58bb (UTF-16BE)
    if (argCheck == 'ö‘') {
        return true;
    }
    // No.3973
    // ê‡ñæ:9ad5
    // 0x9ad5 (Windows-31J)
    // 0x58b8 (UTF-16BE)
    if (argCheck == 'ö’') {
        return true;
    }
    // No.3974
    // ê‡ñæ:9ad6
    // 0x9ad6 (Windows-31J)
    // 0x58ae (UTF-16BE)
    if (argCheck == 'ö÷') {
        return true;
    }
    // No.3975
    // ê‡ñæ:9ad7
    // 0x9ad7 (Windows-31J)
    // 0x58c5 (UTF-16BE)
    if (argCheck == 'ö◊') {
        return true;
    }
    // No.3976
    // ê‡ñæ:9ad8
    // 0x9ad8 (Windows-31J)
    // 0x58d3 (UTF-16BE)
    if (argCheck == 'öÿ') {
        return true;
    }
    // No.3977
    // ê‡ñæ:9ad9
    // 0x9ad9 (Windows-31J)
    // 0x58d1 (UTF-16BE)
    if (argCheck == 'öŸ') {
        return true;
    }
    // No.3978
    // ê‡ñæ:9ada
    // 0x9ada (Windows-31J)
    // 0x58d7 (UTF-16BE)
    if (argCheck == 'ö⁄') {
        return true;
    }
    // No.3979
    // ê‡ñæ:9adb
    // 0x9adb (Windows-31J)
    // 0x58d9 (UTF-16BE)
    if (argCheck == 'ö€') {
        return true;
    }
    // No.3980
    // ê‡ñæ:9adc
    // 0x9adc (Windows-31J)
    // 0x58d8 (UTF-16BE)
    if (argCheck == 'ö‹') {
        return true;
    }
    // No.3981
    // ê‡ñæ:9add
    // 0x9add (Windows-31J)
    // 0x58e5 (UTF-16BE)
    if (argCheck == 'ö›') {
        return true;
    }
    // No.3982
    // ê‡ñæ:9ade
    // 0x9ade (Windows-31J)
    // 0x58dc (UTF-16BE)
    if (argCheck == 'öﬁ') {
        return true;
    }
    // No.3983
    // ê‡ñæ:9adf
    // 0x9adf (Windows-31J)
    // 0x58e4 (UTF-16BE)
    if (argCheck == 'öﬂ') {
        return true;
    }
    // No.3984
    // ê‡ñæ:9ae0
    // 0x9ae0 (Windows-31J)
    // 0x58df (UTF-16BE)
    if (argCheck == 'ö‡') {
        return true;
    }
    // No.3985
    // ê‡ñæ:9ae1
    // 0x9ae1 (Windows-31J)
    // 0x58ef (UTF-16BE)
    if (argCheck == 'ö·') {
        return true;
    }
    // No.3986
    // ê‡ñæ:9ae2
    // 0x9ae2 (Windows-31J)
    // 0x58fa (UTF-16BE)
    if (argCheck == 'ö‚') {
        return true;
    }
    // No.3987
    // ê‡ñæ:9ae3
    // 0x9ae3 (Windows-31J)
    // 0x58f9 (UTF-16BE)
    if (argCheck == 'ö„') {
        return true;
    }
    // No.3988
    // ê‡ñæ:9ae4
    // 0x9ae4 (Windows-31J)
    // 0x58fb (UTF-16BE)
    if (argCheck == 'ö‰') {
        return true;
    }
    // No.3989
    // ê‡ñæ:9ae5
    // 0x9ae5 (Windows-31J)
    // 0x58fc (UTF-16BE)
    if (argCheck == 'öÂ') {
        return true;
    }
    // No.3990
    // ê‡ñæ:9ae6
    // 0x9ae6 (Windows-31J)
    // 0x58fd (UTF-16BE)
    if (argCheck == 'öÊ') {
        return true;
    }
    // No.3991
    // ê‡ñæ:9ae7
    // 0x9ae7 (Windows-31J)
    // 0x5902 (UTF-16BE)
    if (argCheck == 'öÁ') {
        return true;
    }
    // No.3992
    // ê‡ñæ:9ae8
    // 0x9ae8 (Windows-31J)
    // 0x590a (UTF-16BE)
    if (argCheck == 'öË') {
        return true;
    }
    // No.3993
    // ê‡ñæ:9ae9
    // 0x9ae9 (Windows-31J)
    // 0x5910 (UTF-16BE)
    if (argCheck == 'öÈ') {
        return true;
    }
    // No.3994
    // ê‡ñæ:9aea
    // 0x9aea (Windows-31J)
    // 0x591b (UTF-16BE)
    if (argCheck == 'öÍ') {
        return true;
    }
    // No.3995
    // ê‡ñæ:9aeb
    // 0x9aeb (Windows-31J)
    // 0x68a6 (UTF-16BE)
    if (argCheck == 'öÎ') {
        return true;
    }
    // No.3996
    // ê‡ñæ:9aec
    // 0x9aec (Windows-31J)
    // 0x5925 (UTF-16BE)
    if (argCheck == 'öÏ') {
        return true;
    }
    // No.3997
    // ê‡ñæ:9aed
    // 0x9aed (Windows-31J)
    // 0x592c (UTF-16BE)
    if (argCheck == 'öÌ') {
        return true;
    }
    // No.3998
    // ê‡ñæ:9aee
    // 0x9aee (Windows-31J)
    // 0x592d (UTF-16BE)
    if (argCheck == 'öÓ') {
        return true;
    }
    // No.3999
    // ê‡ñæ:9aef
    // 0x9aef (Windows-31J)
    // 0x5932 (UTF-16BE)
    if (argCheck == 'öÔ') {
        return true;
    }
    // No.4000
    // ê‡ñæ:9af0
    // 0x9af0 (Windows-31J)
    // 0x5938 (UTF-16BE)
    if (argCheck == 'ö') {
        return true;
    }
    // No.4001
    // ê‡ñæ:9af1
    // 0x9af1 (Windows-31J)
    // 0x593e (UTF-16BE)
    if (argCheck == 'öÒ') {
        return true;
    }
    // No.4002
    // ê‡ñæ:9af2
    // 0x9af2 (Windows-31J)
    // 0x7ad2 (UTF-16BE)
    if (argCheck == 'öÚ') {
        return true;
    }
    // No.4003
    // ê‡ñæ:9af3
    // 0x9af3 (Windows-31J)
    // 0x5955 (UTF-16BE)
    if (argCheck == 'öÛ') {
        return true;
    }
    // No.4004
    // ê‡ñæ:9af4
    // 0x9af4 (Windows-31J)
    // 0x5950 (UTF-16BE)
    if (argCheck == 'öÙ') {
        return true;
    }
    // No.4005
    // ê‡ñæ:9af5
    // 0x9af5 (Windows-31J)
    // 0x594e (UTF-16BE)
    if (argCheck == 'öı') {
        return true;
    }
    // No.4006
    // ê‡ñæ:9af6
    // 0x9af6 (Windows-31J)
    // 0x595a (UTF-16BE)
    if (argCheck == 'öˆ') {
        return true;
    }
    // No.4007
    // ê‡ñæ:9af7
    // 0x9af7 (Windows-31J)
    // 0x5958 (UTF-16BE)
    if (argCheck == 'ö˜') {
        return true;
    }
    // No.4008
    // ê‡ñæ:9af8
    // 0x9af8 (Windows-31J)
    // 0x5962 (UTF-16BE)
    if (argCheck == 'ö¯') {
        return true;
    }
    // No.4009
    // ê‡ñæ:9af9
    // 0x9af9 (Windows-31J)
    // 0x5960 (UTF-16BE)
    if (argCheck == 'ö˘') {
        return true;
    }
    // No.4010
    // ê‡ñæ:9afa
    // 0x9afa (Windows-31J)
    // 0x5967 (UTF-16BE)
    if (argCheck == 'ö˙') {
        return true;
    }
    // No.4011
    // ê‡ñæ:9afb
    // 0x9afb (Windows-31J)
    // 0x596c (UTF-16BE)
    if (argCheck == 'ö˚') {
        return true;
    }
    // No.4012
    // ê‡ñæ:9afc
    // 0x9afc (Windows-31J)
    // 0x5969 (UTF-16BE)
    if (argCheck == 'ö¸') {
        return true;
    }
    // No.4013
    // ê‡ñæ:9b40
    // 0x9b40 (Windows-31J)
    // 0x5978 (UTF-16BE)
    if (argCheck == 'õ@') {
        return true;
    }
    // No.4014
    // ê‡ñæ:9b41
    // 0x9b41 (Windows-31J)
    // 0x5981 (UTF-16BE)
    if (argCheck == 'õA') {
        return true;
    }
    // No.4015
    // ê‡ñæ:9b42
    // 0x9b42 (Windows-31J)
    // 0x599d (UTF-16BE)
    if (argCheck == 'õB') {
        return true;
    }
    // No.4016
    // ê‡ñæ:9b43
    // 0x9b43 (Windows-31J)
    // 0x4f5e (UTF-16BE)
    if (argCheck == 'õC') {
        return true;
    }
    // No.4017
    // ê‡ñæ:9b44
    // 0x9b44 (Windows-31J)
    // 0x4fab (UTF-16BE)
    if (argCheck == 'õD') {
        return true;
    }
    // No.4018
    // ê‡ñæ:9b45
    // 0x9b45 (Windows-31J)
    // 0x59a3 (UTF-16BE)
    if (argCheck == 'õE') {
        return true;
    }
    // No.4019
    // ê‡ñæ:9b46
    // 0x9b46 (Windows-31J)
    // 0x59b2 (UTF-16BE)
    if (argCheck == 'õF') {
        return true;
    }
    // No.4020
    // ê‡ñæ:9b47
    // 0x9b47 (Windows-31J)
    // 0x59c6 (UTF-16BE)
    if (argCheck == 'õG') {
        return true;
    }
    // No.4021
    // ê‡ñæ:9b48
    // 0x9b48 (Windows-31J)
    // 0x59e8 (UTF-16BE)
    if (argCheck == 'õH') {
        return true;
    }
    // No.4022
    // ê‡ñæ:9b49
    // 0x9b49 (Windows-31J)
    // 0x59dc (UTF-16BE)
    if (argCheck == 'õI') {
        return true;
    }
    // No.4023
    // ê‡ñæ:9b4a
    // 0x9b4a (Windows-31J)
    // 0x598d (UTF-16BE)
    if (argCheck == 'õJ') {
        return true;
    }
    // No.4024
    // ê‡ñæ:9b4b
    // 0x9b4b (Windows-31J)
    // 0x59d9 (UTF-16BE)
    if (argCheck == 'õK') {
        return true;
    }
    // No.4025
    // ê‡ñæ:9b4c
    // 0x9b4c (Windows-31J)
    // 0x59da (UTF-16BE)
    if (argCheck == 'õL') {
        return true;
    }
    // No.4026
    // ê‡ñæ:9b4d
    // 0x9b4d (Windows-31J)
    // 0x5a25 (UTF-16BE)
    if (argCheck == 'õM') {
        return true;
    }
    // No.4027
    // ê‡ñæ:9b4e
    // 0x9b4e (Windows-31J)
    // 0x5a1f (UTF-16BE)
    if (argCheck == 'õN') {
        return true;
    }
    // No.4028
    // ê‡ñæ:9b4f
    // 0x9b4f (Windows-31J)
    // 0x5a11 (UTF-16BE)
    if (argCheck == 'õO') {
        return true;
    }
    // No.4029
    // ê‡ñæ:9b50
    // 0x9b50 (Windows-31J)
    // 0x5a1c (UTF-16BE)
    if (argCheck == 'õP') {
        return true;
    }
    // No.4030
    // ê‡ñæ:9b51
    // 0x9b51 (Windows-31J)
    // 0x5a09 (UTF-16BE)
    if (argCheck == 'õQ') {
        return true;
    }
    // No.4031
    // ê‡ñæ:9b52
    // 0x9b52 (Windows-31J)
    // 0x5a1a (UTF-16BE)
    if (argCheck == 'õR') {
        return true;
    }
    // No.4032
    // ê‡ñæ:9b53
    // 0x9b53 (Windows-31J)
    // 0x5a40 (UTF-16BE)
    if (argCheck == 'õS') {
        return true;
    }
    // No.4033
    // ê‡ñæ:9b54
    // 0x9b54 (Windows-31J)
    // 0x5a6c (UTF-16BE)
    if (argCheck == 'õT') {
        return true;
    }
    // No.4034
    // ê‡ñæ:9b55
    // 0x9b55 (Windows-31J)
    // 0x5a49 (UTF-16BE)
    if (argCheck == 'õU') {
        return true;
    }
    // No.4035
    // ê‡ñæ:9b56
    // 0x9b56 (Windows-31J)
    // 0x5a35 (UTF-16BE)
    if (argCheck == 'õV') {
        return true;
    }
    // No.4036
    // ê‡ñæ:9b57
    // 0x9b57 (Windows-31J)
    // 0x5a36 (UTF-16BE)
    if (argCheck == 'õW') {
        return true;
    }
    // No.4037
    // ê‡ñæ:9b58
    // 0x9b58 (Windows-31J)
    // 0x5a62 (UTF-16BE)
    if (argCheck == 'õX') {
        return true;
    }
    // No.4038
    // ê‡ñæ:9b59
    // 0x9b59 (Windows-31J)
    // 0x5a6a (UTF-16BE)
    if (argCheck == 'õY') {
        return true;
    }
    // No.4039
    // ê‡ñæ:9b5a
    // 0x9b5a (Windows-31J)
    // 0x5a9a (UTF-16BE)
    if (argCheck == 'õZ') {
        return true;
    }
    // No.4040
    // ê‡ñæ:9b5b
    // 0x9b5b (Windows-31J)
    // 0x5abc (UTF-16BE)
    if (argCheck == 'õ[') {
        return true;
    }
    // No.4041
    // ê‡ñæ:9b5c
    // 0x9b5c (Windows-31J)
    // 0x5abe (UTF-16BE)
    if (argCheck == 'õ\') {
        return true;
    }
    // No.4042
    // ê‡ñæ:9b5d
    // 0x9b5d (Windows-31J)
    // 0x5acb (UTF-16BE)
    if (argCheck == 'õ]') {
        return true;
    }
    // No.4043
    // ê‡ñæ:9b5e
    // 0x9b5e (Windows-31J)
    // 0x5ac2 (UTF-16BE)
    if (argCheck == 'õ^') {
        return true;
    }
    // No.4044
    // ê‡ñæ:9b5f
    // 0x9b5f (Windows-31J)
    // 0x5abd (UTF-16BE)
    if (argCheck == 'õ_') {
        return true;
    }
    // No.4045
    // ê‡ñæ:9b60
    // 0x9b60 (Windows-31J)
    // 0x5ae3 (UTF-16BE)
    if (argCheck == 'õ`') {
        return true;
    }
    // No.4046
    // ê‡ñæ:9b61
    // 0x9b61 (Windows-31J)
    // 0x5ad7 (UTF-16BE)
    if (argCheck == 'õa') {
        return true;
    }
    // No.4047
    // ê‡ñæ:9b62
    // 0x9b62 (Windows-31J)
    // 0x5ae6 (UTF-16BE)
    if (argCheck == 'õb') {
        return true;
    }
    // No.4048
    // ê‡ñæ:9b63
    // 0x9b63 (Windows-31J)
    // 0x5ae9 (UTF-16BE)
    if (argCheck == 'õc') {
        return true;
    }
    // No.4049
    // ê‡ñæ:9b64
    // 0x9b64 (Windows-31J)
    // 0x5ad6 (UTF-16BE)
    if (argCheck == 'õd') {
        return true;
    }
    // No.4050
    // ê‡ñæ:9b65
    // 0x9b65 (Windows-31J)
    // 0x5afa (UTF-16BE)
    if (argCheck == 'õe') {
        return true;
    }
    // No.4051
    // ê‡ñæ:9b66
    // 0x9b66 (Windows-31J)
    // 0x5afb (UTF-16BE)
    if (argCheck == 'õf') {
        return true;
    }
    // No.4052
    // ê‡ñæ:9b67
    // 0x9b67 (Windows-31J)
    // 0x5b0c (UTF-16BE)
    if (argCheck == 'õg') {
        return true;
    }
    // No.4053
    // ê‡ñæ:9b68
    // 0x9b68 (Windows-31J)
    // 0x5b0b (UTF-16BE)
    if (argCheck == 'õh') {
        return true;
    }
    // No.4054
    // ê‡ñæ:9b69
    // 0x9b69 (Windows-31J)
    // 0x5b16 (UTF-16BE)
    if (argCheck == 'õi') {
        return true;
    }
    // No.4055
    // ê‡ñæ:9b6a
    // 0x9b6a (Windows-31J)
    // 0x5b32 (UTF-16BE)
    if (argCheck == 'õj') {
        return true;
    }
    // No.4056
    // ê‡ñæ:9b6b
    // 0x9b6b (Windows-31J)
    // 0x5ad0 (UTF-16BE)
    if (argCheck == 'õk') {
        return true;
    }
    // No.4057
    // ê‡ñæ:9b6c
    // 0x9b6c (Windows-31J)
    // 0x5b2a (UTF-16BE)
    if (argCheck == 'õl') {
        return true;
    }
    // No.4058
    // ê‡ñæ:9b6d
    // 0x9b6d (Windows-31J)
    // 0x5b36 (UTF-16BE)
    if (argCheck == 'õm') {
        return true;
    }
    // No.4059
    // ê‡ñæ:9b6e
    // 0x9b6e (Windows-31J)
    // 0x5b3e (UTF-16BE)
    if (argCheck == 'õn') {
        return true;
    }
    // No.4060
    // ê‡ñæ:9b6f
    // 0x9b6f (Windows-31J)
    // 0x5b43 (UTF-16BE)
    if (argCheck == 'õo') {
        return true;
    }
    // No.4061
    // ê‡ñæ:9b70
    // 0x9b70 (Windows-31J)
    // 0x5b45 (UTF-16BE)
    if (argCheck == 'õp') {
        return true;
    }
    // No.4062
    // ê‡ñæ:9b71
    // 0x9b71 (Windows-31J)
    // 0x5b40 (UTF-16BE)
    if (argCheck == 'õq') {
        return true;
    }
    // No.4063
    // ê‡ñæ:9b72
    // 0x9b72 (Windows-31J)
    // 0x5b51 (UTF-16BE)
    if (argCheck == 'õr') {
        return true;
    }
    // No.4064
    // ê‡ñæ:9b73
    // 0x9b73 (Windows-31J)
    // 0x5b55 (UTF-16BE)
    if (argCheck == 'õs') {
        return true;
    }
    // No.4065
    // ê‡ñæ:9b74
    // 0x9b74 (Windows-31J)
    // 0x5b5a (UTF-16BE)
    if (argCheck == 'õt') {
        return true;
    }
    // No.4066
    // ê‡ñæ:9b75
    // 0x9b75 (Windows-31J)
    // 0x5b5b (UTF-16BE)
    if (argCheck == 'õu') {
        return true;
    }
    // No.4067
    // ê‡ñæ:9b76
    // 0x9b76 (Windows-31J)
    // 0x5b65 (UTF-16BE)
    if (argCheck == 'õv') {
        return true;
    }
    // No.4068
    // ê‡ñæ:9b77
    // 0x9b77 (Windows-31J)
    // 0x5b69 (UTF-16BE)
    if (argCheck == 'õw') {
        return true;
    }
    // No.4069
    // ê‡ñæ:9b78
    // 0x9b78 (Windows-31J)
    // 0x5b70 (UTF-16BE)
    if (argCheck == 'õx') {
        return true;
    }
    // No.4070
    // ê‡ñæ:9b79
    // 0x9b79 (Windows-31J)
    // 0x5b73 (UTF-16BE)
    if (argCheck == 'õy') {
        return true;
    }
    // No.4071
    // ê‡ñæ:9b7a
    // 0x9b7a (Windows-31J)
    // 0x5b75 (UTF-16BE)
    if (argCheck == 'õz') {
        return true;
    }
    // No.4072
    // ê‡ñæ:9b7b
    // 0x9b7b (Windows-31J)
    // 0x5b78 (UTF-16BE)
    if (argCheck == 'õ{') {
        return true;
    }
    // No.4073
    // ê‡ñæ:9b7c
    // 0x9b7c (Windows-31J)
    // 0x6588 (UTF-16BE)
    if (argCheck == 'õ|') {
        return true;
    }
    // No.4074
    // ê‡ñæ:9b7d
    // 0x9b7d (Windows-31J)
    // 0x5b7a (UTF-16BE)
    if (argCheck == 'õ}') {
        return true;
    }
    // No.4075
    // ê‡ñæ:9b7e
    // 0x9b7e (Windows-31J)
    // 0x5b80 (UTF-16BE)
    if (argCheck == 'õ~') {
        return true;
    }
    // No.4076
    // ê‡ñæ:9b80
    // 0x9b80 (Windows-31J)
    // 0x5b83 (UTF-16BE)
    if (argCheck == 'õÄ') {
        return true;
    }
    // No.4077
    // ê‡ñæ:9b81
    // 0x9b81 (Windows-31J)
    // 0x5ba6 (UTF-16BE)
    if (argCheck == 'õÅ') {
        return true;
    }
    // No.4078
    // ê‡ñæ:9b82
    // 0x9b82 (Windows-31J)
    // 0x5bb8 (UTF-16BE)
    if (argCheck == 'õÇ') {
        return true;
    }
    // No.4079
    // ê‡ñæ:9b83
    // 0x9b83 (Windows-31J)
    // 0x5bc3 (UTF-16BE)
    if (argCheck == 'õÉ') {
        return true;
    }
    // No.4080
    // ê‡ñæ:9b84
    // 0x9b84 (Windows-31J)
    // 0x5bc7 (UTF-16BE)
    if (argCheck == 'õÑ') {
        return true;
    }
    // No.4081
    // ê‡ñæ:9b85
    // 0x9b85 (Windows-31J)
    // 0x5bc9 (UTF-16BE)
    if (argCheck == 'õÖ') {
        return true;
    }
    // No.4082
    // ê‡ñæ:9b86
    // 0x9b86 (Windows-31J)
    // 0x5bd4 (UTF-16BE)
    if (argCheck == 'õÜ') {
        return true;
    }
    // No.4083
    // ê‡ñæ:9b87
    // 0x9b87 (Windows-31J)
    // 0x5bd0 (UTF-16BE)
    if (argCheck == 'õá') {
        return true;
    }
    // No.4084
    // ê‡ñæ:9b88
    // 0x9b88 (Windows-31J)
    // 0x5be4 (UTF-16BE)
    if (argCheck == 'õà') {
        return true;
    }
    // No.4085
    // ê‡ñæ:9b89
    // 0x9b89 (Windows-31J)
    // 0x5be6 (UTF-16BE)
    if (argCheck == 'õâ') {
        return true;
    }
    // No.4086
    // ê‡ñæ:9b8a
    // 0x9b8a (Windows-31J)
    // 0x5be2 (UTF-16BE)
    if (argCheck == 'õä') {
        return true;
    }
    // No.4087
    // ê‡ñæ:9b8b
    // 0x9b8b (Windows-31J)
    // 0x5bde (UTF-16BE)
    if (argCheck == 'õã') {
        return true;
    }
    // No.4088
    // ê‡ñæ:9b8c
    // 0x9b8c (Windows-31J)
    // 0x5be5 (UTF-16BE)
    if (argCheck == 'õå') {
        return true;
    }
    // No.4089
    // ê‡ñæ:9b8d
    // 0x9b8d (Windows-31J)
    // 0x5beb (UTF-16BE)
    if (argCheck == 'õç') {
        return true;
    }
    // No.4090
    // ê‡ñæ:9b8e
    // 0x9b8e (Windows-31J)
    // 0x5bf0 (UTF-16BE)
    if (argCheck == 'õé') {
        return true;
    }
    // No.4091
    // ê‡ñæ:9b8f
    // 0x9b8f (Windows-31J)
    // 0x5bf6 (UTF-16BE)
    if (argCheck == 'õè') {
        return true;
    }
    // No.4092
    // ê‡ñæ:9b90
    // 0x9b90 (Windows-31J)
    // 0x5bf3 (UTF-16BE)
    if (argCheck == 'õê') {
        return true;
    }
    // No.4093
    // ê‡ñæ:9b91
    // 0x9b91 (Windows-31J)
    // 0x5c05 (UTF-16BE)
    if (argCheck == 'õë') {
        return true;
    }
    // No.4094
    // ê‡ñæ:9b92
    // 0x9b92 (Windows-31J)
    // 0x5c07 (UTF-16BE)
    if (argCheck == 'õí') {
        return true;
    }
    // No.4095
    // ê‡ñæ:9b93
    // 0x9b93 (Windows-31J)
    // 0x5c08 (UTF-16BE)
    if (argCheck == 'õì') {
        return true;
    }
    // No.4096
    // ê‡ñæ:9b94
    // 0x9b94 (Windows-31J)
    // 0x5c0d (UTF-16BE)
    if (argCheck == 'õî') {
        return true;
    }
    // No.4097
    // ê‡ñæ:9b95
    // 0x9b95 (Windows-31J)
    // 0x5c13 (UTF-16BE)
    if (argCheck == 'õï') {
        return true;
    }
    // No.4098
    // ê‡ñæ:9b96
    // 0x9b96 (Windows-31J)
    // 0x5c20 (UTF-16BE)
    if (argCheck == 'õñ') {
        return true;
    }
    // No.4099
    // ê‡ñæ:9b97
    // 0x9b97 (Windows-31J)
    // 0x5c22 (UTF-16BE)
    if (argCheck == 'õó') {
        return true;
    }
    // No.4100
    // ê‡ñæ:9b98
    // 0x9b98 (Windows-31J)
    // 0x5c28 (UTF-16BE)
    if (argCheck == 'õò') {
        return true;
    }
    // No.4101
    // ê‡ñæ:9b99
    // 0x9b99 (Windows-31J)
    // 0x5c38 (UTF-16BE)
    if (argCheck == 'õô') {
        return true;
    }
    // No.4102
    // ê‡ñæ:9b9a
    // 0x9b9a (Windows-31J)
    // 0x5c39 (UTF-16BE)
    if (argCheck == 'õö') {
        return true;
    }
    // No.4103
    // ê‡ñæ:9b9b
    // 0x9b9b (Windows-31J)
    // 0x5c41 (UTF-16BE)
    if (argCheck == 'õõ') {
        return true;
    }
    // No.4104
    // ê‡ñæ:9b9c
    // 0x9b9c (Windows-31J)
    // 0x5c46 (UTF-16BE)
    if (argCheck == 'õú') {
        return true;
    }
    // No.4105
    // ê‡ñæ:9b9d
    // 0x9b9d (Windows-31J)
    // 0x5c4e (UTF-16BE)
    if (argCheck == 'õù') {
        return true;
    }
    // No.4106
    // ê‡ñæ:9b9e
    // 0x9b9e (Windows-31J)
    // 0x5c53 (UTF-16BE)
    if (argCheck == 'õû') {
        return true;
    }
    // No.4107
    // ê‡ñæ:9b9f
    // 0x9b9f (Windows-31J)
    // 0x5c50 (UTF-16BE)
    if (argCheck == 'õü') {
        return true;
    }
    // No.4108
    // ê‡ñæ:9ba0
    // 0x9ba0 (Windows-31J)
    // 0x5c4f (UTF-16BE)
    if (argCheck == 'õ†') {
        return true;
    }
    // No.4109
    // ê‡ñæ:9ba1
    // 0x9ba1 (Windows-31J)
    // 0x5b71 (UTF-16BE)
    if (argCheck == 'õ°') {
        return true;
    }
    // No.4110
    // ê‡ñæ:9ba2
    // 0x9ba2 (Windows-31J)
    // 0x5c6c (UTF-16BE)
    if (argCheck == 'õ¢') {
        return true;
    }
    // No.4111
    // ê‡ñæ:9ba3
    // 0x9ba3 (Windows-31J)
    // 0x5c6e (UTF-16BE)
    if (argCheck == 'õ£') {
        return true;
    }
    // No.4112
    // ê‡ñæ:9ba4
    // 0x9ba4 (Windows-31J)
    // 0x4e62 (UTF-16BE)
    if (argCheck == 'õ§') {
        return true;
    }
    // No.4113
    // ê‡ñæ:9ba5
    // 0x9ba5 (Windows-31J)
    // 0x5c76 (UTF-16BE)
    if (argCheck == 'õ•') {
        return true;
    }
    // No.4114
    // ê‡ñæ:9ba6
    // 0x9ba6 (Windows-31J)
    // 0x5c79 (UTF-16BE)
    if (argCheck == 'õ¶') {
        return true;
    }
    // No.4115
    // ê‡ñæ:9ba7
    // 0x9ba7 (Windows-31J)
    // 0x5c8c (UTF-16BE)
    if (argCheck == 'õß') {
        return true;
    }
    // No.4116
    // ê‡ñæ:9ba8
    // 0x9ba8 (Windows-31J)
    // 0x5c91 (UTF-16BE)
    if (argCheck == 'õ®') {
        return true;
    }
    // No.4117
    // ê‡ñæ:9ba9
    // 0x9ba9 (Windows-31J)
    // 0x5c94 (UTF-16BE)
    if (argCheck == 'õ©') {
        return true;
    }
    // No.4118
    // ê‡ñæ:9baa
    // 0x9baa (Windows-31J)
    // 0x599b (UTF-16BE)
    if (argCheck == 'õ™') {
        return true;
    }
    // No.4119
    // ê‡ñæ:9bab
    // 0x9bab (Windows-31J)
    // 0x5cab (UTF-16BE)
    if (argCheck == 'õ´') {
        return true;
    }
    // No.4120
    // ê‡ñæ:9bac
    // 0x9bac (Windows-31J)
    // 0x5cbb (UTF-16BE)
    if (argCheck == 'õ¨') {
        return true;
    }
    // No.4121
    // ê‡ñæ:9bad
    // 0x9bad (Windows-31J)
    // 0x5cb6 (UTF-16BE)
    if (argCheck == 'õ≠') {
        return true;
    }
    // No.4122
    // ê‡ñæ:9bae
    // 0x9bae (Windows-31J)
    // 0x5cbc (UTF-16BE)
    if (argCheck == 'õÆ') {
        return true;
    }
    // No.4123
    // ê‡ñæ:9baf
    // 0x9baf (Windows-31J)
    // 0x5cb7 (UTF-16BE)
    if (argCheck == 'õØ') {
        return true;
    }
    // No.4124
    // ê‡ñæ:9bb0
    // 0x9bb0 (Windows-31J)
    // 0x5cc5 (UTF-16BE)
    if (argCheck == 'õ∞') {
        return true;
    }
    // No.4125
    // ê‡ñæ:9bb1
    // 0x9bb1 (Windows-31J)
    // 0x5cbe (UTF-16BE)
    if (argCheck == 'õ±') {
        return true;
    }
    // No.4126
    // ê‡ñæ:9bb2
    // 0x9bb2 (Windows-31J)
    // 0x5cc7 (UTF-16BE)
    if (argCheck == 'õ≤') {
        return true;
    }
    // No.4127
    // ê‡ñæ:9bb3
    // 0x9bb3 (Windows-31J)
    // 0x5cd9 (UTF-16BE)
    if (argCheck == 'õ≥') {
        return true;
    }
    // No.4128
    // ê‡ñæ:9bb4
    // 0x9bb4 (Windows-31J)
    // 0x5ce9 (UTF-16BE)
    if (argCheck == 'õ¥') {
        return true;
    }
    // No.4129
    // ê‡ñæ:9bb5
    // 0x9bb5 (Windows-31J)
    // 0x5cfd (UTF-16BE)
    if (argCheck == 'õµ') {
        return true;
    }
    // No.4130
    // ê‡ñæ:9bb6
    // 0x9bb6 (Windows-31J)
    // 0x5cfa (UTF-16BE)
    if (argCheck == 'õ∂') {
        return true;
    }
    // No.4131
    // ê‡ñæ:9bb7
    // 0x9bb7 (Windows-31J)
    // 0x5ced (UTF-16BE)
    if (argCheck == 'õ∑') {
        return true;
    }
    // No.4132
    // ê‡ñæ:9bb8
    // 0x9bb8 (Windows-31J)
    // 0x5d8c (UTF-16BE)
    if (argCheck == 'õ∏') {
        return true;
    }
    // No.4133
    // ê‡ñæ:9bb9
    // 0x9bb9 (Windows-31J)
    // 0x5cea (UTF-16BE)
    if (argCheck == 'õπ') {
        return true;
    }
    // No.4134
    // ê‡ñæ:9bba
    // 0x9bba (Windows-31J)
    // 0x5d0b (UTF-16BE)
    if (argCheck == 'õ∫') {
        return true;
    }
    // No.4135
    // ê‡ñæ:9bbb
    // 0x9bbb (Windows-31J)
    // 0x5d15 (UTF-16BE)
    if (argCheck == 'õª') {
        return true;
    }
    // No.4136
    // ê‡ñæ:9bbc
    // 0x9bbc (Windows-31J)
    // 0x5d17 (UTF-16BE)
    if (argCheck == 'õº') {
        return true;
    }
    // No.4137
    // ê‡ñæ:9bbd
    // 0x9bbd (Windows-31J)
    // 0x5d5c (UTF-16BE)
    if (argCheck == 'õΩ') {
        return true;
    }
    // No.4138
    // ê‡ñæ:9bbe
    // 0x9bbe (Windows-31J)
    // 0x5d1f (UTF-16BE)
    if (argCheck == 'õæ') {
        return true;
    }
    // No.4139
    // ê‡ñæ:9bbf
    // 0x9bbf (Windows-31J)
    // 0x5d1b (UTF-16BE)
    if (argCheck == 'õø') {
        return true;
    }
    // No.4140
    // ê‡ñæ:9bc0
    // 0x9bc0 (Windows-31J)
    // 0x5d11 (UTF-16BE)
    if (argCheck == 'õ¿') {
        return true;
    }
    // No.4141
    // ê‡ñæ:9bc1
    // 0x9bc1 (Windows-31J)
    // 0x5d14 (UTF-16BE)
    if (argCheck == 'õ¡') {
        return true;
    }
    // No.4142
    // ê‡ñæ:9bc2
    // 0x9bc2 (Windows-31J)
    // 0x5d22 (UTF-16BE)
    if (argCheck == 'õ¬') {
        return true;
    }
    // No.4143
    // ê‡ñæ:9bc3
    // 0x9bc3 (Windows-31J)
    // 0x5d1a (UTF-16BE)
    if (argCheck == 'õ√') {
        return true;
    }
    // No.4144
    // ê‡ñæ:9bc4
    // 0x9bc4 (Windows-31J)
    // 0x5d19 (UTF-16BE)
    if (argCheck == 'õƒ') {
        return true;
    }
    // No.4145
    // ê‡ñæ:9bc5
    // 0x9bc5 (Windows-31J)
    // 0x5d18 (UTF-16BE)
    if (argCheck == 'õ≈') {
        return true;
    }
    // No.4146
    // ê‡ñæ:9bc6
    // 0x9bc6 (Windows-31J)
    // 0x5d4c (UTF-16BE)
    if (argCheck == 'õ∆') {
        return true;
    }
    // No.4147
    // ê‡ñæ:9bc7
    // 0x9bc7 (Windows-31J)
    // 0x5d52 (UTF-16BE)
    if (argCheck == 'õ«') {
        return true;
    }
    // No.4148
    // ê‡ñæ:9bc8
    // 0x9bc8 (Windows-31J)
    // 0x5d4e (UTF-16BE)
    if (argCheck == 'õ»') {
        return true;
    }
    // No.4149
    // ê‡ñæ:9bc9
    // 0x9bc9 (Windows-31J)
    // 0x5d4b (UTF-16BE)
    if (argCheck == 'õ…') {
        return true;
    }
    // No.4150
    // ê‡ñæ:9bca
    // 0x9bca (Windows-31J)
    // 0x5d6c (UTF-16BE)
    if (argCheck == 'õ ') {
        return true;
    }
    // No.4151
    // ê‡ñæ:9bcb
    // 0x9bcb (Windows-31J)
    // 0x5d73 (UTF-16BE)
    if (argCheck == 'õÀ') {
        return true;
    }
    // No.4152
    // ê‡ñæ:9bcc
    // 0x9bcc (Windows-31J)
    // 0x5d76 (UTF-16BE)
    if (argCheck == 'õÃ') {
        return true;
    }
    // No.4153
    // ê‡ñæ:9bcd
    // 0x9bcd (Windows-31J)
    // 0x5d87 (UTF-16BE)
    if (argCheck == 'õÕ') {
        return true;
    }
    // No.4154
    // ê‡ñæ:9bce
    // 0x9bce (Windows-31J)
    // 0x5d84 (UTF-16BE)
    if (argCheck == 'õŒ') {
        return true;
    }
    // No.4155
    // ê‡ñæ:9bcf
    // 0x9bcf (Windows-31J)
    // 0x5d82 (UTF-16BE)
    if (argCheck == 'õœ') {
        return true;
    }
    // No.4156
    // ê‡ñæ:9bd0
    // 0x9bd0 (Windows-31J)
    // 0x5da2 (UTF-16BE)
    if (argCheck == 'õ–') {
        return true;
    }
    // No.4157
    // ê‡ñæ:9bd1
    // 0x9bd1 (Windows-31J)
    // 0x5d9d (UTF-16BE)
    if (argCheck == 'õ—') {
        return true;
    }
    // No.4158
    // ê‡ñæ:9bd2
    // 0x9bd2 (Windows-31J)
    // 0x5dac (UTF-16BE)
    if (argCheck == 'õ“') {
        return true;
    }
    // No.4159
    // ê‡ñæ:9bd3
    // 0x9bd3 (Windows-31J)
    // 0x5dae (UTF-16BE)
    if (argCheck == 'õ”') {
        return true;
    }
    // No.4160
    // ê‡ñæ:9bd4
    // 0x9bd4 (Windows-31J)
    // 0x5dbd (UTF-16BE)
    if (argCheck == 'õ‘') {
        return true;
    }
    // No.4161
    // ê‡ñæ:9bd5
    // 0x9bd5 (Windows-31J)
    // 0x5d90 (UTF-16BE)
    if (argCheck == 'õ’') {
        return true;
    }
    // No.4162
    // ê‡ñæ:9bd6
    // 0x9bd6 (Windows-31J)
    // 0x5db7 (UTF-16BE)
    if (argCheck == 'õ÷') {
        return true;
    }
    // No.4163
    // ê‡ñæ:9bd7
    // 0x9bd7 (Windows-31J)
    // 0x5dbc (UTF-16BE)
    if (argCheck == 'õ◊') {
        return true;
    }
    // No.4164
    // ê‡ñæ:9bd8
    // 0x9bd8 (Windows-31J)
    // 0x5dc9 (UTF-16BE)
    if (argCheck == 'õÿ') {
        return true;
    }
    // No.4165
    // ê‡ñæ:9bd9
    // 0x9bd9 (Windows-31J)
    // 0x5dcd (UTF-16BE)
    if (argCheck == 'õŸ') {
        return true;
    }
    // No.4166
    // ê‡ñæ:9bda
    // 0x9bda (Windows-31J)
    // 0x5dd3 (UTF-16BE)
    if (argCheck == 'õ⁄') {
        return true;
    }
    // No.4167
    // ê‡ñæ:9bdb
    // 0x9bdb (Windows-31J)
    // 0x5dd2 (UTF-16BE)
    if (argCheck == 'õ€') {
        return true;
    }
    // No.4168
    // ê‡ñæ:9bdc
    // 0x9bdc (Windows-31J)
    // 0x5dd6 (UTF-16BE)
    if (argCheck == 'õ‹') {
        return true;
    }
    // No.4169
    // ê‡ñæ:9bdd
    // 0x9bdd (Windows-31J)
    // 0x5ddb (UTF-16BE)
    if (argCheck == 'õ›') {
        return true;
    }
    // No.4170
    // ê‡ñæ:9bde
    // 0x9bde (Windows-31J)
    // 0x5deb (UTF-16BE)
    if (argCheck == 'õﬁ') {
        return true;
    }
    // No.4171
    // ê‡ñæ:9bdf
    // 0x9bdf (Windows-31J)
    // 0x5df2 (UTF-16BE)
    if (argCheck == 'õﬂ') {
        return true;
    }
    // No.4172
    // ê‡ñæ:9be0
    // 0x9be0 (Windows-31J)
    // 0x5df5 (UTF-16BE)
    if (argCheck == 'õ‡') {
        return true;
    }
    // No.4173
    // ê‡ñæ:9be1
    // 0x9be1 (Windows-31J)
    // 0x5e0b (UTF-16BE)
    if (argCheck == 'õ·') {
        return true;
    }
    // No.4174
    // ê‡ñæ:9be2
    // 0x9be2 (Windows-31J)
    // 0x5e1a (UTF-16BE)
    if (argCheck == 'õ‚') {
        return true;
    }
    // No.4175
    // ê‡ñæ:9be3
    // 0x9be3 (Windows-31J)
    // 0x5e19 (UTF-16BE)
    if (argCheck == 'õ„') {
        return true;
    }
    // No.4176
    // ê‡ñæ:9be4
    // 0x9be4 (Windows-31J)
    // 0x5e11 (UTF-16BE)
    if (argCheck == 'õ‰') {
        return true;
    }
    // No.4177
    // ê‡ñæ:9be5
    // 0x9be5 (Windows-31J)
    // 0x5e1b (UTF-16BE)
    if (argCheck == 'õÂ') {
        return true;
    }
    // No.4178
    // ê‡ñæ:9be6
    // 0x9be6 (Windows-31J)
    // 0x5e36 (UTF-16BE)
    if (argCheck == 'õÊ') {
        return true;
    }
    // No.4179
    // ê‡ñæ:9be7
    // 0x9be7 (Windows-31J)
    // 0x5e37 (UTF-16BE)
    if (argCheck == 'õÁ') {
        return true;
    }
    // No.4180
    // ê‡ñæ:9be8
    // 0x9be8 (Windows-31J)
    // 0x5e44 (UTF-16BE)
    if (argCheck == 'õË') {
        return true;
    }
    // No.4181
    // ê‡ñæ:9be9
    // 0x9be9 (Windows-31J)
    // 0x5e43 (UTF-16BE)
    if (argCheck == 'õÈ') {
        return true;
    }
    // No.4182
    // ê‡ñæ:9bea
    // 0x9bea (Windows-31J)
    // 0x5e40 (UTF-16BE)
    if (argCheck == 'õÍ') {
        return true;
    }
    // No.4183
    // ê‡ñæ:9beb
    // 0x9beb (Windows-31J)
    // 0x5e4e (UTF-16BE)
    if (argCheck == 'õÎ') {
        return true;
    }
    // No.4184
    // ê‡ñæ:9bec
    // 0x9bec (Windows-31J)
    // 0x5e57 (UTF-16BE)
    if (argCheck == 'õÏ') {
        return true;
    }
    // No.4185
    // ê‡ñæ:9bed
    // 0x9bed (Windows-31J)
    // 0x5e54 (UTF-16BE)
    if (argCheck == 'õÌ') {
        return true;
    }
    // No.4186
    // ê‡ñæ:9bee
    // 0x9bee (Windows-31J)
    // 0x5e5f (UTF-16BE)
    if (argCheck == 'õÓ') {
        return true;
    }
    // No.4187
    // ê‡ñæ:9bef
    // 0x9bef (Windows-31J)
    // 0x5e62 (UTF-16BE)
    if (argCheck == 'õÔ') {
        return true;
    }
    // No.4188
    // ê‡ñæ:9bf0
    // 0x9bf0 (Windows-31J)
    // 0x5e64 (UTF-16BE)
    if (argCheck == 'õ') {
        return true;
    }
    // No.4189
    // ê‡ñæ:9bf1
    // 0x9bf1 (Windows-31J)
    // 0x5e47 (UTF-16BE)
    if (argCheck == 'õÒ') {
        return true;
    }
    // No.4190
    // ê‡ñæ:9bf2
    // 0x9bf2 (Windows-31J)
    // 0x5e75 (UTF-16BE)
    if (argCheck == 'õÚ') {
        return true;
    }
    // No.4191
    // ê‡ñæ:9bf3
    // 0x9bf3 (Windows-31J)
    // 0x5e76 (UTF-16BE)
    if (argCheck == 'õÛ') {
        return true;
    }
    // No.4192
    // ê‡ñæ:9bf4
    // 0x9bf4 (Windows-31J)
    // 0x5e7a (UTF-16BE)
    if (argCheck == 'õÙ') {
        return true;
    }
    // No.4193
    // ê‡ñæ:9bf5
    // 0x9bf5 (Windows-31J)
    // 0x9ebc (UTF-16BE)
    if (argCheck == 'õı') {
        return true;
    }
    // No.4194
    // ê‡ñæ:9bf6
    // 0x9bf6 (Windows-31J)
    // 0x5e7f (UTF-16BE)
    if (argCheck == 'õˆ') {
        return true;
    }
    // No.4195
    // ê‡ñæ:9bf7
    // 0x9bf7 (Windows-31J)
    // 0x5ea0 (UTF-16BE)
    if (argCheck == 'õ˜') {
        return true;
    }
    // No.4196
    // ê‡ñæ:9bf8
    // 0x9bf8 (Windows-31J)
    // 0x5ec1 (UTF-16BE)
    if (argCheck == 'õ¯') {
        return true;
    }
    // No.4197
    // ê‡ñæ:9bf9
    // 0x9bf9 (Windows-31J)
    // 0x5ec2 (UTF-16BE)
    if (argCheck == 'õ˘') {
        return true;
    }
    // No.4198
    // ê‡ñæ:9bfa
    // 0x9bfa (Windows-31J)
    // 0x5ec8 (UTF-16BE)
    if (argCheck == 'õ˙') {
        return true;
    }
    // No.4199
    // ê‡ñæ:9bfb
    // 0x9bfb (Windows-31J)
    // 0x5ed0 (UTF-16BE)
    if (argCheck == 'õ˚') {
        return true;
    }
    // No.4200
    // ê‡ñæ:9bfc
    // 0x9bfc (Windows-31J)
    // 0x5ecf (UTF-16BE)
    if (argCheck == 'õ¸') {
        return true;
    }
    // No.4201
    // ê‡ñæ:9c40
    // 0x9c40 (Windows-31J)
    // 0x5ed6 (UTF-16BE)
    if (argCheck == 'ú@') {
        return true;
    }
    // No.4202
    // ê‡ñæ:9c41
    // 0x9c41 (Windows-31J)
    // 0x5ee3 (UTF-16BE)
    if (argCheck == 'úA') {
        return true;
    }
    // No.4203
    // ê‡ñæ:9c42
    // 0x9c42 (Windows-31J)
    // 0x5edd (UTF-16BE)
    if (argCheck == 'úB') {
        return true;
    }
    // No.4204
    // ê‡ñæ:9c43
    // 0x9c43 (Windows-31J)
    // 0x5eda (UTF-16BE)
    if (argCheck == 'úC') {
        return true;
    }
    // No.4205
    // ê‡ñæ:9c44
    // 0x9c44 (Windows-31J)
    // 0x5edb (UTF-16BE)
    if (argCheck == 'úD') {
        return true;
    }
    // No.4206
    // ê‡ñæ:9c45
    // 0x9c45 (Windows-31J)
    // 0x5ee2 (UTF-16BE)
    if (argCheck == 'úE') {
        return true;
    }
    // No.4207
    // ê‡ñæ:9c46
    // 0x9c46 (Windows-31J)
    // 0x5ee1 (UTF-16BE)
    if (argCheck == 'úF') {
        return true;
    }
    // No.4208
    // ê‡ñæ:9c47
    // 0x9c47 (Windows-31J)
    // 0x5ee8 (UTF-16BE)
    if (argCheck == 'úG') {
        return true;
    }
    // No.4209
    // ê‡ñæ:9c48
    // 0x9c48 (Windows-31J)
    // 0x5ee9 (UTF-16BE)
    if (argCheck == 'úH') {
        return true;
    }
    // No.4210
    // ê‡ñæ:9c49
    // 0x9c49 (Windows-31J)
    // 0x5eec (UTF-16BE)
    if (argCheck == 'úI') {
        return true;
    }
    // No.4211
    // ê‡ñæ:9c4a
    // 0x9c4a (Windows-31J)
    // 0x5ef1 (UTF-16BE)
    if (argCheck == 'úJ') {
        return true;
    }
    // No.4212
    // ê‡ñæ:9c4b
    // 0x9c4b (Windows-31J)
    // 0x5ef3 (UTF-16BE)
    if (argCheck == 'úK') {
        return true;
    }
    // No.4213
    // ê‡ñæ:9c4c
    // 0x9c4c (Windows-31J)
    // 0x5ef0 (UTF-16BE)
    if (argCheck == 'úL') {
        return true;
    }
    // No.4214
    // ê‡ñæ:9c4d
    // 0x9c4d (Windows-31J)
    // 0x5ef4 (UTF-16BE)
    if (argCheck == 'úM') {
        return true;
    }
    // No.4215
    // ê‡ñæ:9c4e
    // 0x9c4e (Windows-31J)
    // 0x5ef8 (UTF-16BE)
    if (argCheck == 'úN') {
        return true;
    }
    // No.4216
    // ê‡ñæ:9c4f
    // 0x9c4f (Windows-31J)
    // 0x5efe (UTF-16BE)
    if (argCheck == 'úO') {
        return true;
    }
    // No.4217
    // ê‡ñæ:9c50
    // 0x9c50 (Windows-31J)
    // 0x5f03 (UTF-16BE)
    if (argCheck == 'úP') {
        return true;
    }
    // No.4218
    // ê‡ñæ:9c51
    // 0x9c51 (Windows-31J)
    // 0x5f09 (UTF-16BE)
    if (argCheck == 'úQ') {
        return true;
    }
    // No.4219
    // ê‡ñæ:9c52
    // 0x9c52 (Windows-31J)
    // 0x5f5d (UTF-16BE)
    if (argCheck == 'úR') {
        return true;
    }
    // No.4220
    // ê‡ñæ:9c53
    // 0x9c53 (Windows-31J)
    // 0x5f5c (UTF-16BE)
    if (argCheck == 'úS') {
        return true;
    }
    // No.4221
    // ê‡ñæ:9c54
    // 0x9c54 (Windows-31J)
    // 0x5f0b (UTF-16BE)
    if (argCheck == 'úT') {
        return true;
    }
    // No.4222
    // ê‡ñæ:9c55
    // 0x9c55 (Windows-31J)
    // 0x5f11 (UTF-16BE)
    if (argCheck == 'úU') {
        return true;
    }
    // No.4223
    // ê‡ñæ:9c56
    // 0x9c56 (Windows-31J)
    // 0x5f16 (UTF-16BE)
    if (argCheck == 'úV') {
        return true;
    }
    // No.4224
    // ê‡ñæ:9c57
    // 0x9c57 (Windows-31J)
    // 0x5f29 (UTF-16BE)
    if (argCheck == 'úW') {
        return true;
    }
    // No.4225
    // ê‡ñæ:9c58
    // 0x9c58 (Windows-31J)
    // 0x5f2d (UTF-16BE)
    if (argCheck == 'úX') {
        return true;
    }
    // No.4226
    // ê‡ñæ:9c59
    // 0x9c59 (Windows-31J)
    // 0x5f38 (UTF-16BE)
    if (argCheck == 'úY') {
        return true;
    }
    // No.4227
    // ê‡ñæ:9c5a
    // 0x9c5a (Windows-31J)
    // 0x5f41 (UTF-16BE)
    if (argCheck == 'úZ') {
        return true;
    }
    // No.4228
    // ê‡ñæ:9c5b
    // 0x9c5b (Windows-31J)
    // 0x5f48 (UTF-16BE)
    if (argCheck == 'ú[') {
        return true;
    }
    // No.4229
    // ê‡ñæ:9c5c
    // 0x9c5c (Windows-31J)
    // 0x5f4c (UTF-16BE)
    if (argCheck == 'ú\') {
        return true;
    }
    // No.4230
    // ê‡ñæ:9c5d
    // 0x9c5d (Windows-31J)
    // 0x5f4e (UTF-16BE)
    if (argCheck == 'ú]') {
        return true;
    }
    // No.4231
    // ê‡ñæ:9c5e
    // 0x9c5e (Windows-31J)
    // 0x5f2f (UTF-16BE)
    if (argCheck == 'ú^') {
        return true;
    }
    // No.4232
    // ê‡ñæ:9c5f
    // 0x9c5f (Windows-31J)
    // 0x5f51 (UTF-16BE)
    if (argCheck == 'ú_') {
        return true;
    }
    // No.4233
    // ê‡ñæ:9c60
    // 0x9c60 (Windows-31J)
    // 0x5f56 (UTF-16BE)
    if (argCheck == 'ú`') {
        return true;
    }
    // No.4234
    // ê‡ñæ:9c61
    // 0x9c61 (Windows-31J)
    // 0x5f57 (UTF-16BE)
    if (argCheck == 'úa') {
        return true;
    }
    // No.4235
    // ê‡ñæ:9c62
    // 0x9c62 (Windows-31J)
    // 0x5f59 (UTF-16BE)
    if (argCheck == 'úb') {
        return true;
    }
    // No.4236
    // ê‡ñæ:9c63
    // 0x9c63 (Windows-31J)
    // 0x5f61 (UTF-16BE)
    if (argCheck == 'úc') {
        return true;
    }
    // No.4237
    // ê‡ñæ:9c64
    // 0x9c64 (Windows-31J)
    // 0x5f6d (UTF-16BE)
    if (argCheck == 'úd') {
        return true;
    }
    // No.4238
    // ê‡ñæ:9c65
    // 0x9c65 (Windows-31J)
    // 0x5f73 (UTF-16BE)
    if (argCheck == 'úe') {
        return true;
    }
    // No.4239
    // ê‡ñæ:9c66
    // 0x9c66 (Windows-31J)
    // 0x5f77 (UTF-16BE)
    if (argCheck == 'úf') {
        return true;
    }
    // No.4240
    // ê‡ñæ:9c67
    // 0x9c67 (Windows-31J)
    // 0x5f83 (UTF-16BE)
    if (argCheck == 'úg') {
        return true;
    }
    // No.4241
    // ê‡ñæ:9c68
    // 0x9c68 (Windows-31J)
    // 0x5f82 (UTF-16BE)
    if (argCheck == 'úh') {
        return true;
    }
    // No.4242
    // ê‡ñæ:9c69
    // 0x9c69 (Windows-31J)
    // 0x5f7f (UTF-16BE)
    if (argCheck == 'úi') {
        return true;
    }
    // No.4243
    // ê‡ñæ:9c6a
    // 0x9c6a (Windows-31J)
    // 0x5f8a (UTF-16BE)
    if (argCheck == 'új') {
        return true;
    }
    // No.4244
    // ê‡ñæ:9c6b
    // 0x9c6b (Windows-31J)
    // 0x5f88 (UTF-16BE)
    if (argCheck == 'úk') {
        return true;
    }
    // No.4245
    // ê‡ñæ:9c6c
    // 0x9c6c (Windows-31J)
    // 0x5f91 (UTF-16BE)
    if (argCheck == 'úl') {
        return true;
    }
    // No.4246
    // ê‡ñæ:9c6d
    // 0x9c6d (Windows-31J)
    // 0x5f87 (UTF-16BE)
    if (argCheck == 'úm') {
        return true;
    }
    // No.4247
    // ê‡ñæ:9c6e
    // 0x9c6e (Windows-31J)
    // 0x5f9e (UTF-16BE)
    if (argCheck == 'ún') {
        return true;
    }
    // No.4248
    // ê‡ñæ:9c6f
    // 0x9c6f (Windows-31J)
    // 0x5f99 (UTF-16BE)
    if (argCheck == 'úo') {
        return true;
    }
    // No.4249
    // ê‡ñæ:9c70
    // 0x9c70 (Windows-31J)
    // 0x5f98 (UTF-16BE)
    if (argCheck == 'úp') {
        return true;
    }
    // No.4250
    // ê‡ñæ:9c71
    // 0x9c71 (Windows-31J)
    // 0x5fa0 (UTF-16BE)
    if (argCheck == 'úq') {
        return true;
    }
    // No.4251
    // ê‡ñæ:9c72
    // 0x9c72 (Windows-31J)
    // 0x5fa8 (UTF-16BE)
    if (argCheck == 'úr') {
        return true;
    }
    // No.4252
    // ê‡ñæ:9c73
    // 0x9c73 (Windows-31J)
    // 0x5fad (UTF-16BE)
    if (argCheck == 'ús') {
        return true;
    }
    // No.4253
    // ê‡ñæ:9c74
    // 0x9c74 (Windows-31J)
    // 0x5fbc (UTF-16BE)
    if (argCheck == 'út') {
        return true;
    }
    // No.4254
    // ê‡ñæ:9c75
    // 0x9c75 (Windows-31J)
    // 0x5fd6 (UTF-16BE)
    if (argCheck == 'úu') {
        return true;
    }
    // No.4255
    // ê‡ñæ:9c76
    // 0x9c76 (Windows-31J)
    // 0x5ffb (UTF-16BE)
    if (argCheck == 'úv') {
        return true;
    }
    // No.4256
    // ê‡ñæ:9c77
    // 0x9c77 (Windows-31J)
    // 0x5fe4 (UTF-16BE)
    if (argCheck == 'úw') {
        return true;
    }
    // No.4257
    // ê‡ñæ:9c78
    // 0x9c78 (Windows-31J)
    // 0x5ff8 (UTF-16BE)
    if (argCheck == 'úx') {
        return true;
    }
    // No.4258
    // ê‡ñæ:9c79
    // 0x9c79 (Windows-31J)
    // 0x5ff1 (UTF-16BE)
    if (argCheck == 'úy') {
        return true;
    }
    // No.4259
    // ê‡ñæ:9c7a
    // 0x9c7a (Windows-31J)
    // 0x5fdd (UTF-16BE)
    if (argCheck == 'úz') {
        return true;
    }
    // No.4260
    // ê‡ñæ:9c7b
    // 0x9c7b (Windows-31J)
    // 0x60b3 (UTF-16BE)
    if (argCheck == 'ú{') {
        return true;
    }
    // No.4261
    // ê‡ñæ:9c7c
    // 0x9c7c (Windows-31J)
    // 0x5fff (UTF-16BE)
    if (argCheck == 'ú|') {
        return true;
    }
    // No.4262
    // ê‡ñæ:9c7d
    // 0x9c7d (Windows-31J)
    // 0x6021 (UTF-16BE)
    if (argCheck == 'ú}') {
        return true;
    }
    // No.4263
    // ê‡ñæ:9c7e
    // 0x9c7e (Windows-31J)
    // 0x6060 (UTF-16BE)
    if (argCheck == 'ú~') {
        return true;
    }
    // No.4264
    // ê‡ñæ:9c80
    // 0x9c80 (Windows-31J)
    // 0x6019 (UTF-16BE)
    if (argCheck == 'úÄ') {
        return true;
    }
    // No.4265
    // ê‡ñæ:9c81
    // 0x9c81 (Windows-31J)
    // 0x6010 (UTF-16BE)
    if (argCheck == 'úÅ') {
        return true;
    }
    // No.4266
    // ê‡ñæ:9c82
    // 0x9c82 (Windows-31J)
    // 0x6029 (UTF-16BE)
    if (argCheck == 'úÇ') {
        return true;
    }
    // No.4267
    // ê‡ñæ:9c83
    // 0x9c83 (Windows-31J)
    // 0x600e (UTF-16BE)
    if (argCheck == 'úÉ') {
        return true;
    }
    // No.4268
    // ê‡ñæ:9c84
    // 0x9c84 (Windows-31J)
    // 0x6031 (UTF-16BE)
    if (argCheck == 'úÑ') {
        return true;
    }
    // No.4269
    // ê‡ñæ:9c85
    // 0x9c85 (Windows-31J)
    // 0x601b (UTF-16BE)
    if (argCheck == 'úÖ') {
        return true;
    }
    // No.4270
    // ê‡ñæ:9c86
    // 0x9c86 (Windows-31J)
    // 0x6015 (UTF-16BE)
    if (argCheck == 'úÜ') {
        return true;
    }
    // No.4271
    // ê‡ñæ:9c87
    // 0x9c87 (Windows-31J)
    // 0x602b (UTF-16BE)
    if (argCheck == 'úá') {
        return true;
    }
    // No.4272
    // ê‡ñæ:9c88
    // 0x9c88 (Windows-31J)
    // 0x6026 (UTF-16BE)
    if (argCheck == 'úà') {
        return true;
    }
    // No.4273
    // ê‡ñæ:9c89
    // 0x9c89 (Windows-31J)
    // 0x600f (UTF-16BE)
    if (argCheck == 'úâ') {
        return true;
    }
    // No.4274
    // ê‡ñæ:9c8a
    // 0x9c8a (Windows-31J)
    // 0x603a (UTF-16BE)
    if (argCheck == 'úä') {
        return true;
    }
    // No.4275
    // ê‡ñæ:9c8b
    // 0x9c8b (Windows-31J)
    // 0x605a (UTF-16BE)
    if (argCheck == 'úã') {
        return true;
    }
    // No.4276
    // ê‡ñæ:9c8c
    // 0x9c8c (Windows-31J)
    // 0x6041 (UTF-16BE)
    if (argCheck == 'úå') {
        return true;
    }
    // No.4277
    // ê‡ñæ:9c8d
    // 0x9c8d (Windows-31J)
    // 0x606a (UTF-16BE)
    if (argCheck == 'úç') {
        return true;
    }
    // No.4278
    // ê‡ñæ:9c8e
    // 0x9c8e (Windows-31J)
    // 0x6077 (UTF-16BE)
    if (argCheck == 'úé') {
        return true;
    }
    // No.4279
    // ê‡ñæ:9c8f
    // 0x9c8f (Windows-31J)
    // 0x605f (UTF-16BE)
    if (argCheck == 'úè') {
        return true;
    }
    // No.4280
    // ê‡ñæ:9c90
    // 0x9c90 (Windows-31J)
    // 0x604a (UTF-16BE)
    if (argCheck == 'úê') {
        return true;
    }
    // No.4281
    // ê‡ñæ:9c91
    // 0x9c91 (Windows-31J)
    // 0x6046 (UTF-16BE)
    if (argCheck == 'úë') {
        return true;
    }
    // No.4282
    // ê‡ñæ:9c92
    // 0x9c92 (Windows-31J)
    // 0x604d (UTF-16BE)
    if (argCheck == 'úí') {
        return true;
    }
    // No.4283
    // ê‡ñæ:9c93
    // 0x9c93 (Windows-31J)
    // 0x6063 (UTF-16BE)
    if (argCheck == 'úì') {
        return true;
    }
    // No.4284
    // ê‡ñæ:9c94
    // 0x9c94 (Windows-31J)
    // 0x6043 (UTF-16BE)
    if (argCheck == 'úî') {
        return true;
    }
    // No.4285
    // ê‡ñæ:9c95
    // 0x9c95 (Windows-31J)
    // 0x6064 (UTF-16BE)
    if (argCheck == 'úï') {
        return true;
    }
    // No.4286
    // ê‡ñæ:9c96
    // 0x9c96 (Windows-31J)
    // 0x6042 (UTF-16BE)
    if (argCheck == 'úñ') {
        return true;
    }
    // No.4287
    // ê‡ñæ:9c97
    // 0x9c97 (Windows-31J)
    // 0x606c (UTF-16BE)
    if (argCheck == 'úó') {
        return true;
    }
    // No.4288
    // ê‡ñæ:9c98
    // 0x9c98 (Windows-31J)
    // 0x606b (UTF-16BE)
    if (argCheck == 'úò') {
        return true;
    }
    // No.4289
    // ê‡ñæ:9c99
    // 0x9c99 (Windows-31J)
    // 0x6059 (UTF-16BE)
    if (argCheck == 'úô') {
        return true;
    }
    // No.4290
    // ê‡ñæ:9c9a
    // 0x9c9a (Windows-31J)
    // 0x6081 (UTF-16BE)
    if (argCheck == 'úö') {
        return true;
    }
    // No.4291
    // ê‡ñæ:9c9b
    // 0x9c9b (Windows-31J)
    // 0x608d (UTF-16BE)
    if (argCheck == 'úõ') {
        return true;
    }
    // No.4292
    // ê‡ñæ:9c9c
    // 0x9c9c (Windows-31J)
    // 0x60e7 (UTF-16BE)
    if (argCheck == 'úú') {
        return true;
    }
    // No.4293
    // ê‡ñæ:9c9d
    // 0x9c9d (Windows-31J)
    // 0x6083 (UTF-16BE)
    if (argCheck == 'úù') {
        return true;
    }
    // No.4294
    // ê‡ñæ:9c9e
    // 0x9c9e (Windows-31J)
    // 0x609a (UTF-16BE)
    if (argCheck == 'úû') {
        return true;
    }
    // No.4295
    // ê‡ñæ:9c9f
    // 0x9c9f (Windows-31J)
    // 0x6084 (UTF-16BE)
    if (argCheck == 'úü') {
        return true;
    }
    // No.4296
    // ê‡ñæ:9ca0
    // 0x9ca0 (Windows-31J)
    // 0x609b (UTF-16BE)
    if (argCheck == 'ú†') {
        return true;
    }
    // No.4297
    // ê‡ñæ:9ca1
    // 0x9ca1 (Windows-31J)
    // 0x6096 (UTF-16BE)
    if (argCheck == 'ú°') {
        return true;
    }
    // No.4298
    // ê‡ñæ:9ca2
    // 0x9ca2 (Windows-31J)
    // 0x6097 (UTF-16BE)
    if (argCheck == 'ú¢') {
        return true;
    }
    // No.4299
    // ê‡ñæ:9ca3
    // 0x9ca3 (Windows-31J)
    // 0x6092 (UTF-16BE)
    if (argCheck == 'ú£') {
        return true;
    }
    // No.4300
    // ê‡ñæ:9ca4
    // 0x9ca4 (Windows-31J)
    // 0x60a7 (UTF-16BE)
    if (argCheck == 'ú§') {
        return true;
    }
    // No.4301
    // ê‡ñæ:9ca5
    // 0x9ca5 (Windows-31J)
    // 0x608b (UTF-16BE)
    if (argCheck == 'ú•') {
        return true;
    }
    // No.4302
    // ê‡ñæ:9ca6
    // 0x9ca6 (Windows-31J)
    // 0x60e1 (UTF-16BE)
    if (argCheck == 'ú¶') {
        return true;
    }
    // No.4303
    // ê‡ñæ:9ca7
    // 0x9ca7 (Windows-31J)
    // 0x60b8 (UTF-16BE)
    if (argCheck == 'úß') {
        return true;
    }
    // No.4304
    // ê‡ñæ:9ca8
    // 0x9ca8 (Windows-31J)
    // 0x60e0 (UTF-16BE)
    if (argCheck == 'ú®') {
        return true;
    }
    // No.4305
    // ê‡ñæ:9ca9
    // 0x9ca9 (Windows-31J)
    // 0x60d3 (UTF-16BE)
    if (argCheck == 'ú©') {
        return true;
    }
    // No.4306
    // ê‡ñæ:9caa
    // 0x9caa (Windows-31J)
    // 0x60b4 (UTF-16BE)
    if (argCheck == 'ú™') {
        return true;
    }
    // No.4307
    // ê‡ñæ:9cab
    // 0x9cab (Windows-31J)
    // 0x5ff0 (UTF-16BE)
    if (argCheck == 'ú´') {
        return true;
    }
    // No.4308
    // ê‡ñæ:9cac
    // 0x9cac (Windows-31J)
    // 0x60bd (UTF-16BE)
    if (argCheck == 'ú¨') {
        return true;
    }
    // No.4309
    // ê‡ñæ:9cad
    // 0x9cad (Windows-31J)
    // 0x60c6 (UTF-16BE)
    if (argCheck == 'ú≠') {
        return true;
    }
    // No.4310
    // ê‡ñæ:9cae
    // 0x9cae (Windows-31J)
    // 0x60b5 (UTF-16BE)
    if (argCheck == 'úÆ') {
        return true;
    }
    // No.4311
    // ê‡ñæ:9caf
    // 0x9caf (Windows-31J)
    // 0x60d8 (UTF-16BE)
    if (argCheck == 'úØ') {
        return true;
    }
    // No.4312
    // ê‡ñæ:9cb0
    // 0x9cb0 (Windows-31J)
    // 0x614d (UTF-16BE)
    if (argCheck == 'ú∞') {
        return true;
    }
    // No.4313
    // ê‡ñæ:9cb1
    // 0x9cb1 (Windows-31J)
    // 0x6115 (UTF-16BE)
    if (argCheck == 'ú±') {
        return true;
    }
    // No.4314
    // ê‡ñæ:9cb2
    // 0x9cb2 (Windows-31J)
    // 0x6106 (UTF-16BE)
    if (argCheck == 'ú≤') {
        return true;
    }
    // No.4315
    // ê‡ñæ:9cb3
    // 0x9cb3 (Windows-31J)
    // 0x60f6 (UTF-16BE)
    if (argCheck == 'ú≥') {
        return true;
    }
    // No.4316
    // ê‡ñæ:9cb4
    // 0x9cb4 (Windows-31J)
    // 0x60f7 (UTF-16BE)
    if (argCheck == 'ú¥') {
        return true;
    }
    // No.4317
    // ê‡ñæ:9cb5
    // 0x9cb5 (Windows-31J)
    // 0x6100 (UTF-16BE)
    if (argCheck == 'úµ') {
        return true;
    }
    // No.4318
    // ê‡ñæ:9cb6
    // 0x9cb6 (Windows-31J)
    // 0x60f4 (UTF-16BE)
    if (argCheck == 'ú∂') {
        return true;
    }
    // No.4319
    // ê‡ñæ:9cb7
    // 0x9cb7 (Windows-31J)
    // 0x60fa (UTF-16BE)
    if (argCheck == 'ú∑') {
        return true;
    }
    // No.4320
    // ê‡ñæ:9cb8
    // 0x9cb8 (Windows-31J)
    // 0x6103 (UTF-16BE)
    if (argCheck == 'ú∏') {
        return true;
    }
    // No.4321
    // ê‡ñæ:9cb9
    // 0x9cb9 (Windows-31J)
    // 0x6121 (UTF-16BE)
    if (argCheck == 'úπ') {
        return true;
    }
    // No.4322
    // ê‡ñæ:9cba
    // 0x9cba (Windows-31J)
    // 0x60fb (UTF-16BE)
    if (argCheck == 'ú∫') {
        return true;
    }
    // No.4323
    // ê‡ñæ:9cbb
    // 0x9cbb (Windows-31J)
    // 0x60f1 (UTF-16BE)
    if (argCheck == 'úª') {
        return true;
    }
    // No.4324
    // ê‡ñæ:9cbc
    // 0x9cbc (Windows-31J)
    // 0x610d (UTF-16BE)
    if (argCheck == 'úº') {
        return true;
    }
    // No.4325
    // ê‡ñæ:9cbd
    // 0x9cbd (Windows-31J)
    // 0x610e (UTF-16BE)
    if (argCheck == 'úΩ') {
        return true;
    }
    // No.4326
    // ê‡ñæ:9cbe
    // 0x9cbe (Windows-31J)
    // 0x6147 (UTF-16BE)
    if (argCheck == 'úæ') {
        return true;
    }
    // No.4327
    // ê‡ñæ:9cbf
    // 0x9cbf (Windows-31J)
    // 0x613e (UTF-16BE)
    if (argCheck == 'úø') {
        return true;
    }
    // No.4328
    // ê‡ñæ:9cc0
    // 0x9cc0 (Windows-31J)
    // 0x6128 (UTF-16BE)
    if (argCheck == 'ú¿') {
        return true;
    }
    // No.4329
    // ê‡ñæ:9cc1
    // 0x9cc1 (Windows-31J)
    // 0x6127 (UTF-16BE)
    if (argCheck == 'ú¡') {
        return true;
    }
    // No.4330
    // ê‡ñæ:9cc2
    // 0x9cc2 (Windows-31J)
    // 0x614a (UTF-16BE)
    if (argCheck == 'ú¬') {
        return true;
    }
    // No.4331
    // ê‡ñæ:9cc3
    // 0x9cc3 (Windows-31J)
    // 0x613f (UTF-16BE)
    if (argCheck == 'ú√') {
        return true;
    }
    // No.4332
    // ê‡ñæ:9cc4
    // 0x9cc4 (Windows-31J)
    // 0x613c (UTF-16BE)
    if (argCheck == 'úƒ') {
        return true;
    }
    // No.4333
    // ê‡ñæ:9cc5
    // 0x9cc5 (Windows-31J)
    // 0x612c (UTF-16BE)
    if (argCheck == 'ú≈') {
        return true;
    }
    // No.4334
    // ê‡ñæ:9cc6
    // 0x9cc6 (Windows-31J)
    // 0x6134 (UTF-16BE)
    if (argCheck == 'ú∆') {
        return true;
    }
    // No.4335
    // ê‡ñæ:9cc7
    // 0x9cc7 (Windows-31J)
    // 0x613d (UTF-16BE)
    if (argCheck == 'ú«') {
        return true;
    }
    // No.4336
    // ê‡ñæ:9cc8
    // 0x9cc8 (Windows-31J)
    // 0x6142 (UTF-16BE)
    if (argCheck == 'ú»') {
        return true;
    }
    // No.4337
    // ê‡ñæ:9cc9
    // 0x9cc9 (Windows-31J)
    // 0x6144 (UTF-16BE)
    if (argCheck == 'ú…') {
        return true;
    }
    // No.4338
    // ê‡ñæ:9cca
    // 0x9cca (Windows-31J)
    // 0x6173 (UTF-16BE)
    if (argCheck == 'ú ') {
        return true;
    }
    // No.4339
    // ê‡ñæ:9ccb
    // 0x9ccb (Windows-31J)
    // 0x6177 (UTF-16BE)
    if (argCheck == 'úÀ') {
        return true;
    }
    // No.4340
    // ê‡ñæ:9ccc
    // 0x9ccc (Windows-31J)
    // 0x6158 (UTF-16BE)
    if (argCheck == 'úÃ') {
        return true;
    }
    // No.4341
    // ê‡ñæ:9ccd
    // 0x9ccd (Windows-31J)
    // 0x6159 (UTF-16BE)
    if (argCheck == 'úÕ') {
        return true;
    }
    // No.4342
    // ê‡ñæ:9cce
    // 0x9cce (Windows-31J)
    // 0x615a (UTF-16BE)
    if (argCheck == 'úŒ') {
        return true;
    }
    // No.4343
    // ê‡ñæ:9ccf
    // 0x9ccf (Windows-31J)
    // 0x616b (UTF-16BE)
    if (argCheck == 'úœ') {
        return true;
    }
    // No.4344
    // ê‡ñæ:9cd0
    // 0x9cd0 (Windows-31J)
    // 0x6174 (UTF-16BE)
    if (argCheck == 'ú–') {
        return true;
    }
    // No.4345
    // ê‡ñæ:9cd1
    // 0x9cd1 (Windows-31J)
    // 0x616f (UTF-16BE)
    if (argCheck == 'ú—') {
        return true;
    }
    // No.4346
    // ê‡ñæ:9cd2
    // 0x9cd2 (Windows-31J)
    // 0x6165 (UTF-16BE)
    if (argCheck == 'ú“') {
        return true;
    }
    // No.4347
    // ê‡ñæ:9cd3
    // 0x9cd3 (Windows-31J)
    // 0x6171 (UTF-16BE)
    if (argCheck == 'ú”') {
        return true;
    }
    // No.4348
    // ê‡ñæ:9cd4
    // 0x9cd4 (Windows-31J)
    // 0x615f (UTF-16BE)
    if (argCheck == 'ú‘') {
        return true;
    }
    // No.4349
    // ê‡ñæ:9cd5
    // 0x9cd5 (Windows-31J)
    // 0x615d (UTF-16BE)
    if (argCheck == 'ú’') {
        return true;
    }
    // No.4350
    // ê‡ñæ:9cd6
    // 0x9cd6 (Windows-31J)
    // 0x6153 (UTF-16BE)
    if (argCheck == 'ú÷') {
        return true;
    }
    // No.4351
    // ê‡ñæ:9cd7
    // 0x9cd7 (Windows-31J)
    // 0x6175 (UTF-16BE)
    if (argCheck == 'ú◊') {
        return true;
    }
    // No.4352
    // ê‡ñæ:9cd8
    // 0x9cd8 (Windows-31J)
    // 0x6199 (UTF-16BE)
    if (argCheck == 'úÿ') {
        return true;
    }
    // No.4353
    // ê‡ñæ:9cd9
    // 0x9cd9 (Windows-31J)
    // 0x6196 (UTF-16BE)
    if (argCheck == 'úŸ') {
        return true;
    }
    // No.4354
    // ê‡ñæ:9cda
    // 0x9cda (Windows-31J)
    // 0x6187 (UTF-16BE)
    if (argCheck == 'ú⁄') {
        return true;
    }
    // No.4355
    // ê‡ñæ:9cdb
    // 0x9cdb (Windows-31J)
    // 0x61ac (UTF-16BE)
    if (argCheck == 'ú€') {
        return true;
    }
    // No.4356
    // ê‡ñæ:9cdc
    // 0x9cdc (Windows-31J)
    // 0x6194 (UTF-16BE)
    if (argCheck == 'ú‹') {
        return true;
    }
    // No.4357
    // ê‡ñæ:9cdd
    // 0x9cdd (Windows-31J)
    // 0x619a (UTF-16BE)
    if (argCheck == 'ú›') {
        return true;
    }
    // No.4358
    // ê‡ñæ:9cde
    // 0x9cde (Windows-31J)
    // 0x618a (UTF-16BE)
    if (argCheck == 'úﬁ') {
        return true;
    }
    // No.4359
    // ê‡ñæ:9cdf
    // 0x9cdf (Windows-31J)
    // 0x6191 (UTF-16BE)
    if (argCheck == 'úﬂ') {
        return true;
    }
    // No.4360
    // ê‡ñæ:9ce0
    // 0x9ce0 (Windows-31J)
    // 0x61ab (UTF-16BE)
    if (argCheck == 'ú‡') {
        return true;
    }
    // No.4361
    // ê‡ñæ:9ce1
    // 0x9ce1 (Windows-31J)
    // 0x61ae (UTF-16BE)
    if (argCheck == 'ú·') {
        return true;
    }
    // No.4362
    // ê‡ñæ:9ce2
    // 0x9ce2 (Windows-31J)
    // 0x61cc (UTF-16BE)
    if (argCheck == 'ú‚') {
        return true;
    }
    // No.4363
    // ê‡ñæ:9ce3
    // 0x9ce3 (Windows-31J)
    // 0x61ca (UTF-16BE)
    if (argCheck == 'ú„') {
        return true;
    }
    // No.4364
    // ê‡ñæ:9ce4
    // 0x9ce4 (Windows-31J)
    // 0x61c9 (UTF-16BE)
    if (argCheck == 'ú‰') {
        return true;
    }
    // No.4365
    // ê‡ñæ:9ce5
    // 0x9ce5 (Windows-31J)
    // 0x61f7 (UTF-16BE)
    if (argCheck == 'úÂ') {
        return true;
    }
    // No.4366
    // ê‡ñæ:9ce6
    // 0x9ce6 (Windows-31J)
    // 0x61c8 (UTF-16BE)
    if (argCheck == 'úÊ') {
        return true;
    }
    // No.4367
    // ê‡ñæ:9ce7
    // 0x9ce7 (Windows-31J)
    // 0x61c3 (UTF-16BE)
    if (argCheck == 'úÁ') {
        return true;
    }
    // No.4368
    // ê‡ñæ:9ce8
    // 0x9ce8 (Windows-31J)
    // 0x61c6 (UTF-16BE)
    if (argCheck == 'úË') {
        return true;
    }
    // No.4369
    // ê‡ñæ:9ce9
    // 0x9ce9 (Windows-31J)
    // 0x61ba (UTF-16BE)
    if (argCheck == 'úÈ') {
        return true;
    }
    // No.4370
    // ê‡ñæ:9cea
    // 0x9cea (Windows-31J)
    // 0x61cb (UTF-16BE)
    if (argCheck == 'úÍ') {
        return true;
    }
    // No.4371
    // ê‡ñæ:9ceb
    // 0x9ceb (Windows-31J)
    // 0x7f79 (UTF-16BE)
    if (argCheck == 'úÎ') {
        return true;
    }
    // No.4372
    // ê‡ñæ:9cec
    // 0x9cec (Windows-31J)
    // 0x61cd (UTF-16BE)
    if (argCheck == 'úÏ') {
        return true;
    }
    // No.4373
    // ê‡ñæ:9ced
    // 0x9ced (Windows-31J)
    // 0x61e6 (UTF-16BE)
    if (argCheck == 'úÌ') {
        return true;
    }
    // No.4374
    // ê‡ñæ:9cee
    // 0x9cee (Windows-31J)
    // 0x61e3 (UTF-16BE)
    if (argCheck == 'úÓ') {
        return true;
    }
    // No.4375
    // ê‡ñæ:9cef
    // 0x9cef (Windows-31J)
    // 0x61f6 (UTF-16BE)
    if (argCheck == 'úÔ') {
        return true;
    }
    // No.4376
    // ê‡ñæ:9cf0
    // 0x9cf0 (Windows-31J)
    // 0x61fa (UTF-16BE)
    if (argCheck == 'ú') {
        return true;
    }
    // No.4377
    // ê‡ñæ:9cf1
    // 0x9cf1 (Windows-31J)
    // 0x61f4 (UTF-16BE)
    if (argCheck == 'úÒ') {
        return true;
    }
    // No.4378
    // ê‡ñæ:9cf2
    // 0x9cf2 (Windows-31J)
    // 0x61ff (UTF-16BE)
    if (argCheck == 'úÚ') {
        return true;
    }
    // No.4379
    // ê‡ñæ:9cf3
    // 0x9cf3 (Windows-31J)
    // 0x61fd (UTF-16BE)
    if (argCheck == 'úÛ') {
        return true;
    }
    // No.4380
    // ê‡ñæ:9cf4
    // 0x9cf4 (Windows-31J)
    // 0x61fc (UTF-16BE)
    if (argCheck == 'úÙ') {
        return true;
    }
    // No.4381
    // ê‡ñæ:9cf5
    // 0x9cf5 (Windows-31J)
    // 0x61fe (UTF-16BE)
    if (argCheck == 'úı') {
        return true;
    }
    // No.4382
    // ê‡ñæ:9cf6
    // 0x9cf6 (Windows-31J)
    // 0x6200 (UTF-16BE)
    if (argCheck == 'úˆ') {
        return true;
    }
    // No.4383
    // ê‡ñæ:9cf7
    // 0x9cf7 (Windows-31J)
    // 0x6208 (UTF-16BE)
    if (argCheck == 'ú˜') {
        return true;
    }
    // No.4384
    // ê‡ñæ:9cf8
    // 0x9cf8 (Windows-31J)
    // 0x6209 (UTF-16BE)
    if (argCheck == 'ú¯') {
        return true;
    }
    // No.4385
    // ê‡ñæ:9cf9
    // 0x9cf9 (Windows-31J)
    // 0x620d (UTF-16BE)
    if (argCheck == 'ú˘') {
        return true;
    }
    // No.4386
    // ê‡ñæ:9cfa
    // 0x9cfa (Windows-31J)
    // 0x620c (UTF-16BE)
    if (argCheck == 'ú˙') {
        return true;
    }
    // No.4387
    // ê‡ñæ:9cfb
    // 0x9cfb (Windows-31J)
    // 0x6214 (UTF-16BE)
    if (argCheck == 'ú˚') {
        return true;
    }
    // No.4388
    // ê‡ñæ:9cfc
    // 0x9cfc (Windows-31J)
    // 0x621b (UTF-16BE)
    if (argCheck == 'ú¸') {
        return true;
    }
    // No.4389
    // ê‡ñæ:9d40
    // 0x9d40 (Windows-31J)
    // 0x621e (UTF-16BE)
    if (argCheck == 'ù@') {
        return true;
    }
    // No.4390
    // ê‡ñæ:9d41
    // 0x9d41 (Windows-31J)
    // 0x6221 (UTF-16BE)
    if (argCheck == 'ùA') {
        return true;
    }
    // No.4391
    // ê‡ñæ:9d42
    // 0x9d42 (Windows-31J)
    // 0x622a (UTF-16BE)
    if (argCheck == 'ùB') {
        return true;
    }
    // No.4392
    // ê‡ñæ:9d43
    // 0x9d43 (Windows-31J)
    // 0x622e (UTF-16BE)
    if (argCheck == 'ùC') {
        return true;
    }
    // No.4393
    // ê‡ñæ:9d44
    // 0x9d44 (Windows-31J)
    // 0x6230 (UTF-16BE)
    if (argCheck == 'ùD') {
        return true;
    }
    // No.4394
    // ê‡ñæ:9d45
    // 0x9d45 (Windows-31J)
    // 0x6232 (UTF-16BE)
    if (argCheck == 'ùE') {
        return true;
    }
    // No.4395
    // ê‡ñæ:9d46
    // 0x9d46 (Windows-31J)
    // 0x6233 (UTF-16BE)
    if (argCheck == 'ùF') {
        return true;
    }
    // No.4396
    // ê‡ñæ:9d47
    // 0x9d47 (Windows-31J)
    // 0x6241 (UTF-16BE)
    if (argCheck == 'ùG') {
        return true;
    }
    // No.4397
    // ê‡ñæ:9d48
    // 0x9d48 (Windows-31J)
    // 0x624e (UTF-16BE)
    if (argCheck == 'ùH') {
        return true;
    }
    // No.4398
    // ê‡ñæ:9d49
    // 0x9d49 (Windows-31J)
    // 0x625e (UTF-16BE)
    if (argCheck == 'ùI') {
        return true;
    }
    // No.4399
    // ê‡ñæ:9d4a
    // 0x9d4a (Windows-31J)
    // 0x6263 (UTF-16BE)
    if (argCheck == 'ùJ') {
        return true;
    }
    // No.4400
    // ê‡ñæ:9d4b
    // 0x9d4b (Windows-31J)
    // 0x625b (UTF-16BE)
    if (argCheck == 'ùK') {
        return true;
    }
    // No.4401
    // ê‡ñæ:9d4c
    // 0x9d4c (Windows-31J)
    // 0x6260 (UTF-16BE)
    if (argCheck == 'ùL') {
        return true;
    }
    // No.4402
    // ê‡ñæ:9d4d
    // 0x9d4d (Windows-31J)
    // 0x6268 (UTF-16BE)
    if (argCheck == 'ùM') {
        return true;
    }
    // No.4403
    // ê‡ñæ:9d4e
    // 0x9d4e (Windows-31J)
    // 0x627c (UTF-16BE)
    if (argCheck == 'ùN') {
        return true;
    }
    // No.4404
    // ê‡ñæ:9d4f
    // 0x9d4f (Windows-31J)
    // 0x6282 (UTF-16BE)
    if (argCheck == 'ùO') {
        return true;
    }
    // No.4405
    // ê‡ñæ:9d50
    // 0x9d50 (Windows-31J)
    // 0x6289 (UTF-16BE)
    if (argCheck == 'ùP') {
        return true;
    }
    // No.4406
    // ê‡ñæ:9d51
    // 0x9d51 (Windows-31J)
    // 0x627e (UTF-16BE)
    if (argCheck == 'ùQ') {
        return true;
    }
    // No.4407
    // ê‡ñæ:9d52
    // 0x9d52 (Windows-31J)
    // 0x6292 (UTF-16BE)
    if (argCheck == 'ùR') {
        return true;
    }
    // No.4408
    // ê‡ñæ:9d53
    // 0x9d53 (Windows-31J)
    // 0x6293 (UTF-16BE)
    if (argCheck == 'ùS') {
        return true;
    }
    // No.4409
    // ê‡ñæ:9d54
    // 0x9d54 (Windows-31J)
    // 0x6296 (UTF-16BE)
    if (argCheck == 'ùT') {
        return true;
    }
    // No.4410
    // ê‡ñæ:9d55
    // 0x9d55 (Windows-31J)
    // 0x62d4 (UTF-16BE)
    if (argCheck == 'ùU') {
        return true;
    }
    // No.4411
    // ê‡ñæ:9d56
    // 0x9d56 (Windows-31J)
    // 0x6283 (UTF-16BE)
    if (argCheck == 'ùV') {
        return true;
    }
    // No.4412
    // ê‡ñæ:9d57
    // 0x9d57 (Windows-31J)
    // 0x6294 (UTF-16BE)
    if (argCheck == 'ùW') {
        return true;
    }
    // No.4413
    // ê‡ñæ:9d58
    // 0x9d58 (Windows-31J)
    // 0x62d7 (UTF-16BE)
    if (argCheck == 'ùX') {
        return true;
    }
    // No.4414
    // ê‡ñæ:9d59
    // 0x9d59 (Windows-31J)
    // 0x62d1 (UTF-16BE)
    if (argCheck == 'ùY') {
        return true;
    }
    // No.4415
    // ê‡ñæ:9d5a
    // 0x9d5a (Windows-31J)
    // 0x62bb (UTF-16BE)
    if (argCheck == 'ùZ') {
        return true;
    }
    // No.4416
    // ê‡ñæ:9d5b
    // 0x9d5b (Windows-31J)
    // 0x62cf (UTF-16BE)
    if (argCheck == 'ù[') {
        return true;
    }
    // No.4417
    // ê‡ñæ:9d5c
    // 0x9d5c (Windows-31J)
    // 0x62ff (UTF-16BE)
    if (argCheck == 'ù\') {
        return true;
    }
    // No.4418
    // ê‡ñæ:9d5d
    // 0x9d5d (Windows-31J)
    // 0x62c6 (UTF-16BE)
    if (argCheck == 'ù]') {
        return true;
    }
    // No.4419
    // ê‡ñæ:9d5e
    // 0x9d5e (Windows-31J)
    // 0x64d4 (UTF-16BE)
    if (argCheck == 'ù^') {
        return true;
    }
    // No.4420
    // ê‡ñæ:9d5f
    // 0x9d5f (Windows-31J)
    // 0x62c8 (UTF-16BE)
    if (argCheck == 'ù_') {
        return true;
    }
    // No.4421
    // ê‡ñæ:9d60
    // 0x9d60 (Windows-31J)
    // 0x62dc (UTF-16BE)
    if (argCheck == 'ù`') {
        return true;
    }
    // No.4422
    // ê‡ñæ:9d61
    // 0x9d61 (Windows-31J)
    // 0x62cc (UTF-16BE)
    if (argCheck == 'ùa') {
        return true;
    }
    // No.4423
    // ê‡ñæ:9d62
    // 0x9d62 (Windows-31J)
    // 0x62ca (UTF-16BE)
    if (argCheck == 'ùb') {
        return true;
    }
    // No.4424
    // ê‡ñæ:9d63
    // 0x9d63 (Windows-31J)
    // 0x62c2 (UTF-16BE)
    if (argCheck == 'ùc') {
        return true;
    }
    // No.4425
    // ê‡ñæ:9d64
    // 0x9d64 (Windows-31J)
    // 0x62c7 (UTF-16BE)
    if (argCheck == 'ùd') {
        return true;
    }
    // No.4426
    // ê‡ñæ:9d65
    // 0x9d65 (Windows-31J)
    // 0x629b (UTF-16BE)
    if (argCheck == 'ùe') {
        return true;
    }
    // No.4427
    // ê‡ñæ:9d66
    // 0x9d66 (Windows-31J)
    // 0x62c9 (UTF-16BE)
    if (argCheck == 'ùf') {
        return true;
    }
    // No.4428
    // ê‡ñæ:9d67
    // 0x9d67 (Windows-31J)
    // 0x630c (UTF-16BE)
    if (argCheck == 'ùg') {
        return true;
    }
    // No.4429
    // ê‡ñæ:9d68
    // 0x9d68 (Windows-31J)
    // 0x62ee (UTF-16BE)
    if (argCheck == 'ùh') {
        return true;
    }
    // No.4430
    // ê‡ñæ:9d69
    // 0x9d69 (Windows-31J)
    // 0x62f1 (UTF-16BE)
    if (argCheck == 'ùi') {
        return true;
    }
    // No.4431
    // ê‡ñæ:9d6a
    // 0x9d6a (Windows-31J)
    // 0x6327 (UTF-16BE)
    if (argCheck == 'ùj') {
        return true;
    }
    // No.4432
    // ê‡ñæ:9d6b
    // 0x9d6b (Windows-31J)
    // 0x6302 (UTF-16BE)
    if (argCheck == 'ùk') {
        return true;
    }
    // No.4433
    // ê‡ñæ:9d6c
    // 0x9d6c (Windows-31J)
    // 0x6308 (UTF-16BE)
    if (argCheck == 'ùl') {
        return true;
    }
    // No.4434
    // ê‡ñæ:9d6d
    // 0x9d6d (Windows-31J)
    // 0x62ef (UTF-16BE)
    if (argCheck == 'ùm') {
        return true;
    }
    // No.4435
    // ê‡ñæ:9d6e
    // 0x9d6e (Windows-31J)
    // 0x62f5 (UTF-16BE)
    if (argCheck == 'ùn') {
        return true;
    }
    // No.4436
    // ê‡ñæ:9d6f
    // 0x9d6f (Windows-31J)
    // 0x6350 (UTF-16BE)
    if (argCheck == 'ùo') {
        return true;
    }
    // No.4437
    // ê‡ñæ:9d70
    // 0x9d70 (Windows-31J)
    // 0x633e (UTF-16BE)
    if (argCheck == 'ùp') {
        return true;
    }
    // No.4438
    // ê‡ñæ:9d71
    // 0x9d71 (Windows-31J)
    // 0x634d (UTF-16BE)
    if (argCheck == 'ùq') {
        return true;
    }
    // No.4439
    // ê‡ñæ:9d72
    // 0x9d72 (Windows-31J)
    // 0x641c (UTF-16BE)
    if (argCheck == 'ùr') {
        return true;
    }
    // No.4440
    // ê‡ñæ:9d73
    // 0x9d73 (Windows-31J)
    // 0x634f (UTF-16BE)
    if (argCheck == 'ùs') {
        return true;
    }
    // No.4441
    // ê‡ñæ:9d74
    // 0x9d74 (Windows-31J)
    // 0x6396 (UTF-16BE)
    if (argCheck == 'ùt') {
        return true;
    }
    // No.4442
    // ê‡ñæ:9d75
    // 0x9d75 (Windows-31J)
    // 0x638e (UTF-16BE)
    if (argCheck == 'ùu') {
        return true;
    }
    // No.4443
    // ê‡ñæ:9d76
    // 0x9d76 (Windows-31J)
    // 0x6380 (UTF-16BE)
    if (argCheck == 'ùv') {
        return true;
    }
    // No.4444
    // ê‡ñæ:9d77
    // 0x9d77 (Windows-31J)
    // 0x63ab (UTF-16BE)
    if (argCheck == 'ùw') {
        return true;
    }
    // No.4445
    // ê‡ñæ:9d78
    // 0x9d78 (Windows-31J)
    // 0x6376 (UTF-16BE)
    if (argCheck == 'ùx') {
        return true;
    }
    // No.4446
    // ê‡ñæ:9d79
    // 0x9d79 (Windows-31J)
    // 0x63a3 (UTF-16BE)
    if (argCheck == 'ùy') {
        return true;
    }
    // No.4447
    // ê‡ñæ:9d7a
    // 0x9d7a (Windows-31J)
    // 0x638f (UTF-16BE)
    if (argCheck == 'ùz') {
        return true;
    }
    // No.4448
    // ê‡ñæ:9d7b
    // 0x9d7b (Windows-31J)
    // 0x6389 (UTF-16BE)
    if (argCheck == 'ù{') {
        return true;
    }
    // No.4449
    // ê‡ñæ:9d7c
    // 0x9d7c (Windows-31J)
    // 0x639f (UTF-16BE)
    if (argCheck == 'ù|') {
        return true;
    }
    // No.4450
    // ê‡ñæ:9d7d
    // 0x9d7d (Windows-31J)
    // 0x63b5 (UTF-16BE)
    if (argCheck == 'ù}') {
        return true;
    }
    // No.4451
    // ê‡ñæ:9d7e
    // 0x9d7e (Windows-31J)
    // 0x636b (UTF-16BE)
    if (argCheck == 'ù~') {
        return true;
    }
    // No.4452
    // ê‡ñæ:9d80
    // 0x9d80 (Windows-31J)
    // 0x6369 (UTF-16BE)
    if (argCheck == 'ùÄ') {
        return true;
    }
    // No.4453
    // ê‡ñæ:9d81
    // 0x9d81 (Windows-31J)
    // 0x63be (UTF-16BE)
    if (argCheck == 'ùÅ') {
        return true;
    }
    // No.4454
    // ê‡ñæ:9d82
    // 0x9d82 (Windows-31J)
    // 0x63e9 (UTF-16BE)
    if (argCheck == 'ùÇ') {
        return true;
    }
    // No.4455
    // ê‡ñæ:9d83
    // 0x9d83 (Windows-31J)
    // 0x63c0 (UTF-16BE)
    if (argCheck == 'ùÉ') {
        return true;
    }
    // No.4456
    // ê‡ñæ:9d84
    // 0x9d84 (Windows-31J)
    // 0x63c6 (UTF-16BE)
    if (argCheck == 'ùÑ') {
        return true;
    }
    // No.4457
    // ê‡ñæ:9d85
    // 0x9d85 (Windows-31J)
    // 0x63e3 (UTF-16BE)
    if (argCheck == 'ùÖ') {
        return true;
    }
    // No.4458
    // ê‡ñæ:9d86
    // 0x9d86 (Windows-31J)
    // 0x63c9 (UTF-16BE)
    if (argCheck == 'ùÜ') {
        return true;
    }
    // No.4459
    // ê‡ñæ:9d87
    // 0x9d87 (Windows-31J)
    // 0x63d2 (UTF-16BE)
    if (argCheck == 'ùá') {
        return true;
    }
    // No.4460
    // ê‡ñæ:9d88
    // 0x9d88 (Windows-31J)
    // 0x63f6 (UTF-16BE)
    if (argCheck == 'ùà') {
        return true;
    }
    // No.4461
    // ê‡ñæ:9d89
    // 0x9d89 (Windows-31J)
    // 0x63c4 (UTF-16BE)
    if (argCheck == 'ùâ') {
        return true;
    }
    // No.4462
    // ê‡ñæ:9d8a
    // 0x9d8a (Windows-31J)
    // 0x6416 (UTF-16BE)
    if (argCheck == 'ùä') {
        return true;
    }
    // No.4463
    // ê‡ñæ:9d8b
    // 0x9d8b (Windows-31J)
    // 0x6434 (UTF-16BE)
    if (argCheck == 'ùã') {
        return true;
    }
    // No.4464
    // ê‡ñæ:9d8c
    // 0x9d8c (Windows-31J)
    // 0x6406 (UTF-16BE)
    if (argCheck == 'ùå') {
        return true;
    }
    // No.4465
    // ê‡ñæ:9d8d
    // 0x9d8d (Windows-31J)
    // 0x6413 (UTF-16BE)
    if (argCheck == 'ùç') {
        return true;
    }
    // No.4466
    // ê‡ñæ:9d8e
    // 0x9d8e (Windows-31J)
    // 0x6426 (UTF-16BE)
    if (argCheck == 'ùé') {
        return true;
    }
    // No.4467
    // ê‡ñæ:9d8f
    // 0x9d8f (Windows-31J)
    // 0x6436 (UTF-16BE)
    if (argCheck == 'ùè') {
        return true;
    }
    // No.4468
    // ê‡ñæ:9d90
    // 0x9d90 (Windows-31J)
    // 0x651d (UTF-16BE)
    if (argCheck == 'ùê') {
        return true;
    }
    // No.4469
    // ê‡ñæ:9d91
    // 0x9d91 (Windows-31J)
    // 0x6417 (UTF-16BE)
    if (argCheck == 'ùë') {
        return true;
    }
    // No.4470
    // ê‡ñæ:9d92
    // 0x9d92 (Windows-31J)
    // 0x6428 (UTF-16BE)
    if (argCheck == 'ùí') {
        return true;
    }
    // No.4471
    // ê‡ñæ:9d93
    // 0x9d93 (Windows-31J)
    // 0x640f (UTF-16BE)
    if (argCheck == 'ùì') {
        return true;
    }
    // No.4472
    // ê‡ñæ:9d94
    // 0x9d94 (Windows-31J)
    // 0x6467 (UTF-16BE)
    if (argCheck == 'ùî') {
        return true;
    }
    // No.4473
    // ê‡ñæ:9d95
    // 0x9d95 (Windows-31J)
    // 0x646f (UTF-16BE)
    if (argCheck == 'ùï') {
        return true;
    }
    // No.4474
    // ê‡ñæ:9d96
    // 0x9d96 (Windows-31J)
    // 0x6476 (UTF-16BE)
    if (argCheck == 'ùñ') {
        return true;
    }
    // No.4475
    // ê‡ñæ:9d97
    // 0x9d97 (Windows-31J)
    // 0x644e (UTF-16BE)
    if (argCheck == 'ùó') {
        return true;
    }
    // No.4476
    // ê‡ñæ:9d98
    // 0x9d98 (Windows-31J)
    // 0x652a (UTF-16BE)
    if (argCheck == 'ùò') {
        return true;
    }
    // No.4477
    // ê‡ñæ:9d99
    // 0x9d99 (Windows-31J)
    // 0x6495 (UTF-16BE)
    if (argCheck == 'ùô') {
        return true;
    }
    // No.4478
    // ê‡ñæ:9d9a
    // 0x9d9a (Windows-31J)
    // 0x6493 (UTF-16BE)
    if (argCheck == 'ùö') {
        return true;
    }
    // No.4479
    // ê‡ñæ:9d9b
    // 0x9d9b (Windows-31J)
    // 0x64a5 (UTF-16BE)
    if (argCheck == 'ùõ') {
        return true;
    }
    // No.4480
    // ê‡ñæ:9d9c
    // 0x9d9c (Windows-31J)
    // 0x64a9 (UTF-16BE)
    if (argCheck == 'ùú') {
        return true;
    }
    // No.4481
    // ê‡ñæ:9d9d
    // 0x9d9d (Windows-31J)
    // 0x6488 (UTF-16BE)
    if (argCheck == 'ùù') {
        return true;
    }
    // No.4482
    // ê‡ñæ:9d9e
    // 0x9d9e (Windows-31J)
    // 0x64bc (UTF-16BE)
    if (argCheck == 'ùû') {
        return true;
    }
    // No.4483
    // ê‡ñæ:9d9f
    // 0x9d9f (Windows-31J)
    // 0x64da (UTF-16BE)
    if (argCheck == 'ùü') {
        return true;
    }
    // No.4484
    // ê‡ñæ:9da0
    // 0x9da0 (Windows-31J)
    // 0x64d2 (UTF-16BE)
    if (argCheck == 'ù†') {
        return true;
    }
    // No.4485
    // ê‡ñæ:9da1
    // 0x9da1 (Windows-31J)
    // 0x64c5 (UTF-16BE)
    if (argCheck == 'ù°') {
        return true;
    }
    // No.4486
    // ê‡ñæ:9da2
    // 0x9da2 (Windows-31J)
    // 0x64c7 (UTF-16BE)
    if (argCheck == 'ù¢') {
        return true;
    }
    // No.4487
    // ê‡ñæ:9da3
    // 0x9da3 (Windows-31J)
    // 0x64bb (UTF-16BE)
    if (argCheck == 'ù£') {
        return true;
    }
    // No.4488
    // ê‡ñæ:9da4
    // 0x9da4 (Windows-31J)
    // 0x64d8 (UTF-16BE)
    if (argCheck == 'ù§') {
        return true;
    }
    // No.4489
    // ê‡ñæ:9da5
    // 0x9da5 (Windows-31J)
    // 0x64c2 (UTF-16BE)
    if (argCheck == 'ù•') {
        return true;
    }
    // No.4490
    // ê‡ñæ:9da6
    // 0x9da6 (Windows-31J)
    // 0x64f1 (UTF-16BE)
    if (argCheck == 'ù¶') {
        return true;
    }
    // No.4491
    // ê‡ñæ:9da7
    // 0x9da7 (Windows-31J)
    // 0x64e7 (UTF-16BE)
    if (argCheck == 'ùß') {
        return true;
    }
    // No.4492
    // ê‡ñæ:9da8
    // 0x9da8 (Windows-31J)
    // 0x8209 (UTF-16BE)
    if (argCheck == 'ù®') {
        return true;
    }
    // No.4493
    // ê‡ñæ:9da9
    // 0x9da9 (Windows-31J)
    // 0x64e0 (UTF-16BE)
    if (argCheck == 'ù©') {
        return true;
    }
    // No.4494
    // ê‡ñæ:9daa
    // 0x9daa (Windows-31J)
    // 0x64e1 (UTF-16BE)
    if (argCheck == 'ù™') {
        return true;
    }
    // No.4495
    // ê‡ñæ:9dab
    // 0x9dab (Windows-31J)
    // 0x62ac (UTF-16BE)
    if (argCheck == 'ù´') {
        return true;
    }
    // No.4496
    // ê‡ñæ:9dac
    // 0x9dac (Windows-31J)
    // 0x64e3 (UTF-16BE)
    if (argCheck == 'ù¨') {
        return true;
    }
    // No.4497
    // ê‡ñæ:9dad
    // 0x9dad (Windows-31J)
    // 0x64ef (UTF-16BE)
    if (argCheck == 'ù≠') {
        return true;
    }
    // No.4498
    // ê‡ñæ:9dae
    // 0x9dae (Windows-31J)
    // 0x652c (UTF-16BE)
    if (argCheck == 'ùÆ') {
        return true;
    }
    // No.4499
    // ê‡ñæ:9daf
    // 0x9daf (Windows-31J)
    // 0x64f6 (UTF-16BE)
    if (argCheck == 'ùØ') {
        return true;
    }
    // No.4500
    // ê‡ñæ:9db0
    // 0x9db0 (Windows-31J)
    // 0x64f4 (UTF-16BE)
    if (argCheck == 'ù∞') {
        return true;
    }
    // No.4501
    // ê‡ñæ:9db1
    // 0x9db1 (Windows-31J)
    // 0x64f2 (UTF-16BE)
    if (argCheck == 'ù±') {
        return true;
    }
    // No.4502
    // ê‡ñæ:9db2
    // 0x9db2 (Windows-31J)
    // 0x64fa (UTF-16BE)
    if (argCheck == 'ù≤') {
        return true;
    }
    // No.4503
    // ê‡ñæ:9db3
    // 0x9db3 (Windows-31J)
    // 0x6500 (UTF-16BE)
    if (argCheck == 'ù≥') {
        return true;
    }
    // No.4504
    // ê‡ñæ:9db4
    // 0x9db4 (Windows-31J)
    // 0x64fd (UTF-16BE)
    if (argCheck == 'ù¥') {
        return true;
    }
    // No.4505
    // ê‡ñæ:9db5
    // 0x9db5 (Windows-31J)
    // 0x6518 (UTF-16BE)
    if (argCheck == 'ùµ') {
        return true;
    }
    // No.4506
    // ê‡ñæ:9db6
    // 0x9db6 (Windows-31J)
    // 0x651c (UTF-16BE)
    if (argCheck == 'ù∂') {
        return true;
    }
    // No.4507
    // ê‡ñæ:9db7
    // 0x9db7 (Windows-31J)
    // 0x6505 (UTF-16BE)
    if (argCheck == 'ù∑') {
        return true;
    }
    // No.4508
    // ê‡ñæ:9db8
    // 0x9db8 (Windows-31J)
    // 0x6524 (UTF-16BE)
    if (argCheck == 'ù∏') {
        return true;
    }
    // No.4509
    // ê‡ñæ:9db9
    // 0x9db9 (Windows-31J)
    // 0x6523 (UTF-16BE)
    if (argCheck == 'ùπ') {
        return true;
    }
    // No.4510
    // ê‡ñæ:9dba
    // 0x9dba (Windows-31J)
    // 0x652b (UTF-16BE)
    if (argCheck == 'ù∫') {
        return true;
    }
    // No.4511
    // ê‡ñæ:9dbb
    // 0x9dbb (Windows-31J)
    // 0x6534 (UTF-16BE)
    if (argCheck == 'ùª') {
        return true;
    }
    // No.4512
    // ê‡ñæ:9dbc
    // 0x9dbc (Windows-31J)
    // 0x6535 (UTF-16BE)
    if (argCheck == 'ùº') {
        return true;
    }
    // No.4513
    // ê‡ñæ:9dbd
    // 0x9dbd (Windows-31J)
    // 0x6537 (UTF-16BE)
    if (argCheck == 'ùΩ') {
        return true;
    }
    // No.4514
    // ê‡ñæ:9dbe
    // 0x9dbe (Windows-31J)
    // 0x6536 (UTF-16BE)
    if (argCheck == 'ùæ') {
        return true;
    }
    // No.4515
    // ê‡ñæ:9dbf
    // 0x9dbf (Windows-31J)
    // 0x6538 (UTF-16BE)
    if (argCheck == 'ùø') {
        return true;
    }
    // No.4516
    // ê‡ñæ:9dc0
    // 0x9dc0 (Windows-31J)
    // 0x754b (UTF-16BE)
    if (argCheck == 'ù¿') {
        return true;
    }
    // No.4517
    // ê‡ñæ:9dc1
    // 0x9dc1 (Windows-31J)
    // 0x6548 (UTF-16BE)
    if (argCheck == 'ù¡') {
        return true;
    }
    // No.4518
    // ê‡ñæ:9dc2
    // 0x9dc2 (Windows-31J)
    // 0x6556 (UTF-16BE)
    if (argCheck == 'ù¬') {
        return true;
    }
    // No.4519
    // ê‡ñæ:9dc3
    // 0x9dc3 (Windows-31J)
    // 0x6555 (UTF-16BE)
    if (argCheck == 'ù√') {
        return true;
    }
    // No.4520
    // ê‡ñæ:9dc4
    // 0x9dc4 (Windows-31J)
    // 0x654d (UTF-16BE)
    if (argCheck == 'ùƒ') {
        return true;
    }
    // No.4521
    // ê‡ñæ:9dc5
    // 0x9dc5 (Windows-31J)
    // 0x6558 (UTF-16BE)
    if (argCheck == 'ù≈') {
        return true;
    }
    // No.4522
    // ê‡ñæ:9dc6
    // 0x9dc6 (Windows-31J)
    // 0x655e (UTF-16BE)
    if (argCheck == 'ù∆') {
        return true;
    }
    // No.4523
    // ê‡ñæ:9dc7
    // 0x9dc7 (Windows-31J)
    // 0x655d (UTF-16BE)
    if (argCheck == 'ù«') {
        return true;
    }
    // No.4524
    // ê‡ñæ:9dc8
    // 0x9dc8 (Windows-31J)
    // 0x6572 (UTF-16BE)
    if (argCheck == 'ù»') {
        return true;
    }
    // No.4525
    // ê‡ñæ:9dc9
    // 0x9dc9 (Windows-31J)
    // 0x6578 (UTF-16BE)
    if (argCheck == 'ù…') {
        return true;
    }
    // No.4526
    // ê‡ñæ:9dca
    // 0x9dca (Windows-31J)
    // 0x6582 (UTF-16BE)
    if (argCheck == 'ù ') {
        return true;
    }
    // No.4527
    // ê‡ñæ:9dcb
    // 0x9dcb (Windows-31J)
    // 0x6583 (UTF-16BE)
    if (argCheck == 'ùÀ') {
        return true;
    }
    // No.4528
    // ê‡ñæ:9dcc
    // 0x9dcc (Windows-31J)
    // 0x8b8a (UTF-16BE)
    if (argCheck == 'ùÃ') {
        return true;
    }
    // No.4529
    // ê‡ñæ:9dcd
    // 0x9dcd (Windows-31J)
    // 0x659b (UTF-16BE)
    if (argCheck == 'ùÕ') {
        return true;
    }
    // No.4530
    // ê‡ñæ:9dce
    // 0x9dce (Windows-31J)
    // 0x659f (UTF-16BE)
    if (argCheck == 'ùŒ') {
        return true;
    }
    // No.4531
    // ê‡ñæ:9dcf
    // 0x9dcf (Windows-31J)
    // 0x65ab (UTF-16BE)
    if (argCheck == 'ùœ') {
        return true;
    }
    // No.4532
    // ê‡ñæ:9dd0
    // 0x9dd0 (Windows-31J)
    // 0x65b7 (UTF-16BE)
    if (argCheck == 'ù–') {
        return true;
    }
    // No.4533
    // ê‡ñæ:9dd1
    // 0x9dd1 (Windows-31J)
    // 0x65c3 (UTF-16BE)
    if (argCheck == 'ù—') {
        return true;
    }
    // No.4534
    // ê‡ñæ:9dd2
    // 0x9dd2 (Windows-31J)
    // 0x65c6 (UTF-16BE)
    if (argCheck == 'ù“') {
        return true;
    }
    // No.4535
    // ê‡ñæ:9dd3
    // 0x9dd3 (Windows-31J)
    // 0x65c1 (UTF-16BE)
    if (argCheck == 'ù”') {
        return true;
    }
    // No.4536
    // ê‡ñæ:9dd4
    // 0x9dd4 (Windows-31J)
    // 0x65c4 (UTF-16BE)
    if (argCheck == 'ù‘') {
        return true;
    }
    // No.4537
    // ê‡ñæ:9dd5
    // 0x9dd5 (Windows-31J)
    // 0x65cc (UTF-16BE)
    if (argCheck == 'ù’') {
        return true;
    }
    // No.4538
    // ê‡ñæ:9dd6
    // 0x9dd6 (Windows-31J)
    // 0x65d2 (UTF-16BE)
    if (argCheck == 'ù÷') {
        return true;
    }
    // No.4539
    // ê‡ñæ:9dd7
    // 0x9dd7 (Windows-31J)
    // 0x65db (UTF-16BE)
    if (argCheck == 'ù◊') {
        return true;
    }
    // No.4540
    // ê‡ñæ:9dd8
    // 0x9dd8 (Windows-31J)
    // 0x65d9 (UTF-16BE)
    if (argCheck == 'ùÿ') {
        return true;
    }
    // No.4541
    // ê‡ñæ:9dd9
    // 0x9dd9 (Windows-31J)
    // 0x65e0 (UTF-16BE)
    if (argCheck == 'ùŸ') {
        return true;
    }
    // No.4542
    // ê‡ñæ:9dda
    // 0x9dda (Windows-31J)
    // 0x65e1 (UTF-16BE)
    if (argCheck == 'ù⁄') {
        return true;
    }
    // No.4543
    // ê‡ñæ:9ddb
    // 0x9ddb (Windows-31J)
    // 0x65f1 (UTF-16BE)
    if (argCheck == 'ù€') {
        return true;
    }
    // No.4544
    // ê‡ñæ:9ddc
    // 0x9ddc (Windows-31J)
    // 0x6772 (UTF-16BE)
    if (argCheck == 'ù‹') {
        return true;
    }
    // No.4545
    // ê‡ñæ:9ddd
    // 0x9ddd (Windows-31J)
    // 0x660a (UTF-16BE)
    if (argCheck == 'ù›') {
        return true;
    }
    // No.4546
    // ê‡ñæ:9dde
    // 0x9dde (Windows-31J)
    // 0x6603 (UTF-16BE)
    if (argCheck == 'ùﬁ') {
        return true;
    }
    // No.4547
    // ê‡ñæ:9ddf
    // 0x9ddf (Windows-31J)
    // 0x65fb (UTF-16BE)
    if (argCheck == 'ùﬂ') {
        return true;
    }
    // No.4548
    // ê‡ñæ:9de0
    // 0x9de0 (Windows-31J)
    // 0x6773 (UTF-16BE)
    if (argCheck == 'ù‡') {
        return true;
    }
    // No.4549
    // ê‡ñæ:9de1
    // 0x9de1 (Windows-31J)
    // 0x6635 (UTF-16BE)
    if (argCheck == 'ù·') {
        return true;
    }
    // No.4550
    // ê‡ñæ:9de2
    // 0x9de2 (Windows-31J)
    // 0x6636 (UTF-16BE)
    if (argCheck == 'ù‚') {
        return true;
    }
    // No.4551
    // ê‡ñæ:9de3
    // 0x9de3 (Windows-31J)
    // 0x6634 (UTF-16BE)
    if (argCheck == 'ù„') {
        return true;
    }
    // No.4552
    // ê‡ñæ:9de4
    // 0x9de4 (Windows-31J)
    // 0x661c (UTF-16BE)
    if (argCheck == 'ù‰') {
        return true;
    }
    // No.4553
    // ê‡ñæ:9de5
    // 0x9de5 (Windows-31J)
    // 0x664f (UTF-16BE)
    if (argCheck == 'ùÂ') {
        return true;
    }
    // No.4554
    // ê‡ñæ:9de6
    // 0x9de6 (Windows-31J)
    // 0x6644 (UTF-16BE)
    if (argCheck == 'ùÊ') {
        return true;
    }
    // No.4555
    // ê‡ñæ:9de7
    // 0x9de7 (Windows-31J)
    // 0x6649 (UTF-16BE)
    if (argCheck == 'ùÁ') {
        return true;
    }
    // No.4556
    // ê‡ñæ:9de8
    // 0x9de8 (Windows-31J)
    // 0x6641 (UTF-16BE)
    if (argCheck == 'ùË') {
        return true;
    }
    // No.4557
    // ê‡ñæ:9de9
    // 0x9de9 (Windows-31J)
    // 0x665e (UTF-16BE)
    if (argCheck == 'ùÈ') {
        return true;
    }
    // No.4558
    // ê‡ñæ:9dea
    // 0x9dea (Windows-31J)
    // 0x665d (UTF-16BE)
    if (argCheck == 'ùÍ') {
        return true;
    }
    // No.4559
    // ê‡ñæ:9deb
    // 0x9deb (Windows-31J)
    // 0x6664 (UTF-16BE)
    if (argCheck == 'ùÎ') {
        return true;
    }
    // No.4560
    // ê‡ñæ:9dec
    // 0x9dec (Windows-31J)
    // 0x6667 (UTF-16BE)
    if (argCheck == 'ùÏ') {
        return true;
    }
    // No.4561
    // ê‡ñæ:9ded
    // 0x9ded (Windows-31J)
    // 0x6668 (UTF-16BE)
    if (argCheck == 'ùÌ') {
        return true;
    }
    // No.4562
    // ê‡ñæ:9dee
    // 0x9dee (Windows-31J)
    // 0x665f (UTF-16BE)
    if (argCheck == 'ùÓ') {
        return true;
    }
    // No.4563
    // ê‡ñæ:9def
    // 0x9def (Windows-31J)
    // 0x6662 (UTF-16BE)
    if (argCheck == 'ùÔ') {
        return true;
    }
    // No.4564
    // ê‡ñæ:9df0
    // 0x9df0 (Windows-31J)
    // 0x6670 (UTF-16BE)
    if (argCheck == 'ù') {
        return true;
    }
    // No.4565
    // ê‡ñæ:9df1
    // 0x9df1 (Windows-31J)
    // 0x6683 (UTF-16BE)
    if (argCheck == 'ùÒ') {
        return true;
    }
    // No.4566
    // ê‡ñæ:9df2
    // 0x9df2 (Windows-31J)
    // 0x6688 (UTF-16BE)
    if (argCheck == 'ùÚ') {
        return true;
    }
    // No.4567
    // ê‡ñæ:9df3
    // 0x9df3 (Windows-31J)
    // 0x668e (UTF-16BE)
    if (argCheck == 'ùÛ') {
        return true;
    }
    // No.4568
    // ê‡ñæ:9df4
    // 0x9df4 (Windows-31J)
    // 0x6689 (UTF-16BE)
    if (argCheck == 'ùÙ') {
        return true;
    }
    // No.4569
    // ê‡ñæ:9df5
    // 0x9df5 (Windows-31J)
    // 0x6684 (UTF-16BE)
    if (argCheck == 'ùı') {
        return true;
    }
    // No.4570
    // ê‡ñæ:9df6
    // 0x9df6 (Windows-31J)
    // 0x6698 (UTF-16BE)
    if (argCheck == 'ùˆ') {
        return true;
    }
    // No.4571
    // ê‡ñæ:9df7
    // 0x9df7 (Windows-31J)
    // 0x669d (UTF-16BE)
    if (argCheck == 'ù˜') {
        return true;
    }
    // No.4572
    // ê‡ñæ:9df8
    // 0x9df8 (Windows-31J)
    // 0x66c1 (UTF-16BE)
    if (argCheck == 'ù¯') {
        return true;
    }
    // No.4573
    // ê‡ñæ:9df9
    // 0x9df9 (Windows-31J)
    // 0x66b9 (UTF-16BE)
    if (argCheck == 'ù˘') {
        return true;
    }
    // No.4574
    // ê‡ñæ:9dfa
    // 0x9dfa (Windows-31J)
    // 0x66c9 (UTF-16BE)
    if (argCheck == 'ù˙') {
        return true;
    }
    // No.4575
    // ê‡ñæ:9dfb
    // 0x9dfb (Windows-31J)
    // 0x66be (UTF-16BE)
    if (argCheck == 'ù˚') {
        return true;
    }
    // No.4576
    // ê‡ñæ:9dfc
    // 0x9dfc (Windows-31J)
    // 0x66bc (UTF-16BE)
    if (argCheck == 'ù¸') {
        return true;
    }
    // No.4577
    // ê‡ñæ:9e40
    // 0x9e40 (Windows-31J)
    // 0x66c4 (UTF-16BE)
    if (argCheck == 'û@') {
        return true;
    }
    // No.4578
    // ê‡ñæ:9e41
    // 0x9e41 (Windows-31J)
    // 0x66b8 (UTF-16BE)
    if (argCheck == 'ûA') {
        return true;
    }
    // No.4579
    // ê‡ñæ:9e42
    // 0x9e42 (Windows-31J)
    // 0x66d6 (UTF-16BE)
    if (argCheck == 'ûB') {
        return true;
    }
    // No.4580
    // ê‡ñæ:9e43
    // 0x9e43 (Windows-31J)
    // 0x66da (UTF-16BE)
    if (argCheck == 'ûC') {
        return true;
    }
    // No.4581
    // ê‡ñæ:9e44
    // 0x9e44 (Windows-31J)
    // 0x66e0 (UTF-16BE)
    if (argCheck == 'ûD') {
        return true;
    }
    // No.4582
    // ê‡ñæ:9e45
    // 0x9e45 (Windows-31J)
    // 0x663f (UTF-16BE)
    if (argCheck == 'ûE') {
        return true;
    }
    // No.4583
    // ê‡ñæ:9e46
    // 0x9e46 (Windows-31J)
    // 0x66e6 (UTF-16BE)
    if (argCheck == 'ûF') {
        return true;
    }
    // No.4584
    // ê‡ñæ:9e47
    // 0x9e47 (Windows-31J)
    // 0x66e9 (UTF-16BE)
    if (argCheck == 'ûG') {
        return true;
    }
    // No.4585
    // ê‡ñæ:9e48
    // 0x9e48 (Windows-31J)
    // 0x66f0 (UTF-16BE)
    if (argCheck == 'ûH') {
        return true;
    }
    // No.4586
    // ê‡ñæ:9e49
    // 0x9e49 (Windows-31J)
    // 0x66f5 (UTF-16BE)
    if (argCheck == 'ûI') {
        return true;
    }
    // No.4587
    // ê‡ñæ:9e4a
    // 0x9e4a (Windows-31J)
    // 0x66f7 (UTF-16BE)
    if (argCheck == 'ûJ') {
        return true;
    }
    // No.4588
    // ê‡ñæ:9e4b
    // 0x9e4b (Windows-31J)
    // 0x670f (UTF-16BE)
    if (argCheck == 'ûK') {
        return true;
    }
    // No.4589
    // ê‡ñæ:9e4c
    // 0x9e4c (Windows-31J)
    // 0x6716 (UTF-16BE)
    if (argCheck == 'ûL') {
        return true;
    }
    // No.4590
    // ê‡ñæ:9e4d
    // 0x9e4d (Windows-31J)
    // 0x671e (UTF-16BE)
    if (argCheck == 'ûM') {
        return true;
    }
    // No.4591
    // ê‡ñæ:9e4e
    // 0x9e4e (Windows-31J)
    // 0x6726 (UTF-16BE)
    if (argCheck == 'ûN') {
        return true;
    }
    // No.4592
    // ê‡ñæ:9e4f
    // 0x9e4f (Windows-31J)
    // 0x6727 (UTF-16BE)
    if (argCheck == 'ûO') {
        return true;
    }
    // No.4593
    // ê‡ñæ:9e50
    // 0x9e50 (Windows-31J)
    // 0x9738 (UTF-16BE)
    if (argCheck == 'ûP') {
        return true;
    }
    // No.4594
    // ê‡ñæ:9e51
    // 0x9e51 (Windows-31J)
    // 0x672e (UTF-16BE)
    if (argCheck == 'ûQ') {
        return true;
    }
    // No.4595
    // ê‡ñæ:9e52
    // 0x9e52 (Windows-31J)
    // 0x673f (UTF-16BE)
    if (argCheck == 'ûR') {
        return true;
    }
    // No.4596
    // ê‡ñæ:9e53
    // 0x9e53 (Windows-31J)
    // 0x6736 (UTF-16BE)
    if (argCheck == 'ûS') {
        return true;
    }
    // No.4597
    // ê‡ñæ:9e54
    // 0x9e54 (Windows-31J)
    // 0x6741 (UTF-16BE)
    if (argCheck == 'ûT') {
        return true;
    }
    // No.4598
    // ê‡ñæ:9e55
    // 0x9e55 (Windows-31J)
    // 0x6738 (UTF-16BE)
    if (argCheck == 'ûU') {
        return true;
    }
    // No.4599
    // ê‡ñæ:9e56
    // 0x9e56 (Windows-31J)
    // 0x6737 (UTF-16BE)
    if (argCheck == 'ûV') {
        return true;
    }
    // No.4600
    // ê‡ñæ:9e57
    // 0x9e57 (Windows-31J)
    // 0x6746 (UTF-16BE)
    if (argCheck == 'ûW') {
        return true;
    }
    // No.4601
    // ê‡ñæ:9e58
    // 0x9e58 (Windows-31J)
    // 0x675e (UTF-16BE)
    if (argCheck == 'ûX') {
        return true;
    }
    // No.4602
    // ê‡ñæ:9e59
    // 0x9e59 (Windows-31J)
    // 0x6760 (UTF-16BE)
    if (argCheck == 'ûY') {
        return true;
    }
    // No.4603
    // ê‡ñæ:9e5a
    // 0x9e5a (Windows-31J)
    // 0x6759 (UTF-16BE)
    if (argCheck == 'ûZ') {
        return true;
    }
    // No.4604
    // ê‡ñæ:9e5b
    // 0x9e5b (Windows-31J)
    // 0x6763 (UTF-16BE)
    if (argCheck == 'û[') {
        return true;
    }
    // No.4605
    // ê‡ñæ:9e5c
    // 0x9e5c (Windows-31J)
    // 0x6764 (UTF-16BE)
    if (argCheck == 'û\') {
        return true;
    }
    // No.4606
    // ê‡ñæ:9e5d
    // 0x9e5d (Windows-31J)
    // 0x6789 (UTF-16BE)
    if (argCheck == 'û]') {
        return true;
    }
    // No.4607
    // ê‡ñæ:9e5e
    // 0x9e5e (Windows-31J)
    // 0x6770 (UTF-16BE)
    if (argCheck == 'û^') {
        return true;
    }
    // No.4608
    // ê‡ñæ:9e5f
    // 0x9e5f (Windows-31J)
    // 0x67a9 (UTF-16BE)
    if (argCheck == 'û_') {
        return true;
    }
    // No.4609
    // ê‡ñæ:9e60
    // 0x9e60 (Windows-31J)
    // 0x677c (UTF-16BE)
    if (argCheck == 'û`') {
        return true;
    }
    // No.4610
    // ê‡ñæ:9e61
    // 0x9e61 (Windows-31J)
    // 0x676a (UTF-16BE)
    if (argCheck == 'ûa') {
        return true;
    }
    // No.4611
    // ê‡ñæ:9e62
    // 0x9e62 (Windows-31J)
    // 0x678c (UTF-16BE)
    if (argCheck == 'ûb') {
        return true;
    }
    // No.4612
    // ê‡ñæ:9e63
    // 0x9e63 (Windows-31J)
    // 0x678b (UTF-16BE)
    if (argCheck == 'ûc') {
        return true;
    }
    // No.4613
    // ê‡ñæ:9e64
    // 0x9e64 (Windows-31J)
    // 0x67a6 (UTF-16BE)
    if (argCheck == 'ûd') {
        return true;
    }
    // No.4614
    // ê‡ñæ:9e65
    // 0x9e65 (Windows-31J)
    // 0x67a1 (UTF-16BE)
    if (argCheck == 'ûe') {
        return true;
    }
    // No.4615
    // ê‡ñæ:9e66
    // 0x9e66 (Windows-31J)
    // 0x6785 (UTF-16BE)
    if (argCheck == 'ûf') {
        return true;
    }
    // No.4616
    // ê‡ñæ:9e67
    // 0x9e67 (Windows-31J)
    // 0x67b7 (UTF-16BE)
    if (argCheck == 'ûg') {
        return true;
    }
    // No.4617
    // ê‡ñæ:9e68
    // 0x9e68 (Windows-31J)
    // 0x67ef (UTF-16BE)
    if (argCheck == 'ûh') {
        return true;
    }
    // No.4618
    // ê‡ñæ:9e69
    // 0x9e69 (Windows-31J)
    // 0x67b4 (UTF-16BE)
    if (argCheck == 'ûi') {
        return true;
    }
    // No.4619
    // ê‡ñæ:9e6a
    // 0x9e6a (Windows-31J)
    // 0x67ec (UTF-16BE)
    if (argCheck == 'ûj') {
        return true;
    }
    // No.4620
    // ê‡ñæ:9e6b
    // 0x9e6b (Windows-31J)
    // 0x67b3 (UTF-16BE)
    if (argCheck == 'ûk') {
        return true;
    }
    // No.4621
    // ê‡ñæ:9e6c
    // 0x9e6c (Windows-31J)
    // 0x67e9 (UTF-16BE)
    if (argCheck == 'ûl') {
        return true;
    }
    // No.4622
    // ê‡ñæ:9e6d
    // 0x9e6d (Windows-31J)
    // 0x67b8 (UTF-16BE)
    if (argCheck == 'ûm') {
        return true;
    }
    // No.4623
    // ê‡ñæ:9e6e
    // 0x9e6e (Windows-31J)
    // 0x67e4 (UTF-16BE)
    if (argCheck == 'ûn') {
        return true;
    }
    // No.4624
    // ê‡ñæ:9e6f
    // 0x9e6f (Windows-31J)
    // 0x67de (UTF-16BE)
    if (argCheck == 'ûo') {
        return true;
    }
    // No.4625
    // ê‡ñæ:9e70
    // 0x9e70 (Windows-31J)
    // 0x67dd (UTF-16BE)
    if (argCheck == 'ûp') {
        return true;
    }
    // No.4626
    // ê‡ñæ:9e71
    // 0x9e71 (Windows-31J)
    // 0x67e2 (UTF-16BE)
    if (argCheck == 'ûq') {
        return true;
    }
    // No.4627
    // ê‡ñæ:9e72
    // 0x9e72 (Windows-31J)
    // 0x67ee (UTF-16BE)
    if (argCheck == 'ûr') {
        return true;
    }
    // No.4628
    // ê‡ñæ:9e73
    // 0x9e73 (Windows-31J)
    // 0x67b9 (UTF-16BE)
    if (argCheck == 'ûs') {
        return true;
    }
    // No.4629
    // ê‡ñæ:9e74
    // 0x9e74 (Windows-31J)
    // 0x67ce (UTF-16BE)
    if (argCheck == 'ût') {
        return true;
    }
    // No.4630
    // ê‡ñæ:9e75
    // 0x9e75 (Windows-31J)
    // 0x67c6 (UTF-16BE)
    if (argCheck == 'ûu') {
        return true;
    }
    // No.4631
    // ê‡ñæ:9e76
    // 0x9e76 (Windows-31J)
    // 0x67e7 (UTF-16BE)
    if (argCheck == 'ûv') {
        return true;
    }
    // No.4632
    // ê‡ñæ:9e77
    // 0x9e77 (Windows-31J)
    // 0x6a9c (UTF-16BE)
    if (argCheck == 'ûw') {
        return true;
    }
    // No.4633
    // ê‡ñæ:9e78
    // 0x9e78 (Windows-31J)
    // 0x681e (UTF-16BE)
    if (argCheck == 'ûx') {
        return true;
    }
    // No.4634
    // ê‡ñæ:9e79
    // 0x9e79 (Windows-31J)
    // 0x6846 (UTF-16BE)
    if (argCheck == 'ûy') {
        return true;
    }
    // No.4635
    // ê‡ñæ:9e7a
    // 0x9e7a (Windows-31J)
    // 0x6829 (UTF-16BE)
    if (argCheck == 'ûz') {
        return true;
    }
    // No.4636
    // ê‡ñæ:9e7b
    // 0x9e7b (Windows-31J)
    // 0x6840 (UTF-16BE)
    if (argCheck == 'û{') {
        return true;
    }
    // No.4637
    // ê‡ñæ:9e7c
    // 0x9e7c (Windows-31J)
    // 0x684d (UTF-16BE)
    if (argCheck == 'û|') {
        return true;
    }
    // No.4638
    // ê‡ñæ:9e7d
    // 0x9e7d (Windows-31J)
    // 0x6832 (UTF-16BE)
    if (argCheck == 'û}') {
        return true;
    }
    // No.4639
    // ê‡ñæ:9e7e
    // 0x9e7e (Windows-31J)
    // 0x684e (UTF-16BE)
    if (argCheck == 'û~') {
        return true;
    }
    // No.4640
    // ê‡ñæ:9e80
    // 0x9e80 (Windows-31J)
    // 0x68b3 (UTF-16BE)
    if (argCheck == 'ûÄ') {
        return true;
    }
    // No.4641
    // ê‡ñæ:9e81
    // 0x9e81 (Windows-31J)
    // 0x682b (UTF-16BE)
    if (argCheck == 'ûÅ') {
        return true;
    }
    // No.4642
    // ê‡ñæ:9e82
    // 0x9e82 (Windows-31J)
    // 0x6859 (UTF-16BE)
    if (argCheck == 'ûÇ') {
        return true;
    }
    // No.4643
    // ê‡ñæ:9e83
    // 0x9e83 (Windows-31J)
    // 0x6863 (UTF-16BE)
    if (argCheck == 'ûÉ') {
        return true;
    }
    // No.4644
    // ê‡ñæ:9e84
    // 0x9e84 (Windows-31J)
    // 0x6877 (UTF-16BE)
    if (argCheck == 'ûÑ') {
        return true;
    }
    // No.4645
    // ê‡ñæ:9e85
    // 0x9e85 (Windows-31J)
    // 0x687f (UTF-16BE)
    if (argCheck == 'ûÖ') {
        return true;
    }
    // No.4646
    // ê‡ñæ:9e86
    // 0x9e86 (Windows-31J)
    // 0x689f (UTF-16BE)
    if (argCheck == 'ûÜ') {
        return true;
    }
    // No.4647
    // ê‡ñæ:9e87
    // 0x9e87 (Windows-31J)
    // 0x688f (UTF-16BE)
    if (argCheck == 'ûá') {
        return true;
    }
    // No.4648
    // ê‡ñæ:9e88
    // 0x9e88 (Windows-31J)
    // 0x68ad (UTF-16BE)
    if (argCheck == 'ûà') {
        return true;
    }
    // No.4649
    // ê‡ñæ:9e89
    // 0x9e89 (Windows-31J)
    // 0x6894 (UTF-16BE)
    if (argCheck == 'ûâ') {
        return true;
    }
    // No.4650
    // ê‡ñæ:9e8a
    // 0x9e8a (Windows-31J)
    // 0x689d (UTF-16BE)
    if (argCheck == 'ûä') {
        return true;
    }
    // No.4651
    // ê‡ñæ:9e8b
    // 0x9e8b (Windows-31J)
    // 0x689b (UTF-16BE)
    if (argCheck == 'ûã') {
        return true;
    }
    // No.4652
    // ê‡ñæ:9e8c
    // 0x9e8c (Windows-31J)
    // 0x6883 (UTF-16BE)
    if (argCheck == 'ûå') {
        return true;
    }
    // No.4653
    // ê‡ñæ:9e8d
    // 0x9e8d (Windows-31J)
    // 0x6aae (UTF-16BE)
    if (argCheck == 'ûç') {
        return true;
    }
    // No.4654
    // ê‡ñæ:9e8e
    // 0x9e8e (Windows-31J)
    // 0x68b9 (UTF-16BE)
    if (argCheck == 'ûé') {
        return true;
    }
    // No.4655
    // ê‡ñæ:9e8f
    // 0x9e8f (Windows-31J)
    // 0x6874 (UTF-16BE)
    if (argCheck == 'ûè') {
        return true;
    }
    // No.4656
    // ê‡ñæ:9e90
    // 0x9e90 (Windows-31J)
    // 0x68b5 (UTF-16BE)
    if (argCheck == 'ûê') {
        return true;
    }
    // No.4657
    // ê‡ñæ:9e91
    // 0x9e91 (Windows-31J)
    // 0x68a0 (UTF-16BE)
    if (argCheck == 'ûë') {
        return true;
    }
    // No.4658
    // ê‡ñæ:9e92
    // 0x9e92 (Windows-31J)
    // 0x68ba (UTF-16BE)
    if (argCheck == 'ûí') {
        return true;
    }
    // No.4659
    // ê‡ñæ:9e93
    // 0x9e93 (Windows-31J)
    // 0x690f (UTF-16BE)
    if (argCheck == 'ûì') {
        return true;
    }
    // No.4660
    // ê‡ñæ:9e94
    // 0x9e94 (Windows-31J)
    // 0x688d (UTF-16BE)
    if (argCheck == 'ûî') {
        return true;
    }
    // No.4661
    // ê‡ñæ:9e95
    // 0x9e95 (Windows-31J)
    // 0x687e (UTF-16BE)
    if (argCheck == 'ûï') {
        return true;
    }
    // No.4662
    // ê‡ñæ:9e96
    // 0x9e96 (Windows-31J)
    // 0x6901 (UTF-16BE)
    if (argCheck == 'ûñ') {
        return true;
    }
    // No.4663
    // ê‡ñæ:9e97
    // 0x9e97 (Windows-31J)
    // 0x68ca (UTF-16BE)
    if (argCheck == 'ûó') {
        return true;
    }
    // No.4664
    // ê‡ñæ:9e98
    // 0x9e98 (Windows-31J)
    // 0x6908 (UTF-16BE)
    if (argCheck == 'ûò') {
        return true;
    }
    // No.4665
    // ê‡ñæ:9e99
    // 0x9e99 (Windows-31J)
    // 0x68d8 (UTF-16BE)
    if (argCheck == 'ûô') {
        return true;
    }
    // No.4666
    // ê‡ñæ:9e9a
    // 0x9e9a (Windows-31J)
    // 0x6922 (UTF-16BE)
    if (argCheck == 'ûö') {
        return true;
    }
    // No.4667
    // ê‡ñæ:9e9b
    // 0x9e9b (Windows-31J)
    // 0x6926 (UTF-16BE)
    if (argCheck == 'ûõ') {
        return true;
    }
    // No.4668
    // ê‡ñæ:9e9c
    // 0x9e9c (Windows-31J)
    // 0x68e1 (UTF-16BE)
    if (argCheck == 'ûú') {
        return true;
    }
    // No.4669
    // ê‡ñæ:9e9d
    // 0x9e9d (Windows-31J)
    // 0x690c (UTF-16BE)
    if (argCheck == 'ûù') {
        return true;
    }
    // No.4670
    // ê‡ñæ:9e9e
    // 0x9e9e (Windows-31J)
    // 0x68cd (UTF-16BE)
    if (argCheck == 'ûû') {
        return true;
    }
    // No.4671
    // ê‡ñæ:9e9f
    // 0x9e9f (Windows-31J)
    // 0x68d4 (UTF-16BE)
    if (argCheck == 'ûü') {
        return true;
    }
    // No.4672
    // ê‡ñæ:9ea0
    // 0x9ea0 (Windows-31J)
    // 0x68e7 (UTF-16BE)
    if (argCheck == 'û†') {
        return true;
    }
    // No.4673
    // ê‡ñæ:9ea1
    // 0x9ea1 (Windows-31J)
    // 0x68d5 (UTF-16BE)
    if (argCheck == 'û°') {
        return true;
    }
    // No.4674
    // ê‡ñæ:9ea2
    // 0x9ea2 (Windows-31J)
    // 0x6936 (UTF-16BE)
    if (argCheck == 'û¢') {
        return true;
    }
    // No.4675
    // ê‡ñæ:9ea3
    // 0x9ea3 (Windows-31J)
    // 0x6912 (UTF-16BE)
    if (argCheck == 'û£') {
        return true;
    }
    // No.4676
    // ê‡ñæ:9ea4
    // 0x9ea4 (Windows-31J)
    // 0x6904 (UTF-16BE)
    if (argCheck == 'û§') {
        return true;
    }
    // No.4677
    // ê‡ñæ:9ea5
    // 0x9ea5 (Windows-31J)
    // 0x68d7 (UTF-16BE)
    if (argCheck == 'û•') {
        return true;
    }
    // No.4678
    // ê‡ñæ:9ea6
    // 0x9ea6 (Windows-31J)
    // 0x68e3 (UTF-16BE)
    if (argCheck == 'û¶') {
        return true;
    }
    // No.4679
    // ê‡ñæ:9ea7
    // 0x9ea7 (Windows-31J)
    // 0x6925 (UTF-16BE)
    if (argCheck == 'ûß') {
        return true;
    }
    // No.4680
    // ê‡ñæ:9ea8
    // 0x9ea8 (Windows-31J)
    // 0x68f9 (UTF-16BE)
    if (argCheck == 'û®') {
        return true;
    }
    // No.4681
    // ê‡ñæ:9ea9
    // 0x9ea9 (Windows-31J)
    // 0x68e0 (UTF-16BE)
    if (argCheck == 'û©') {
        return true;
    }
    // No.4682
    // ê‡ñæ:9eaa
    // 0x9eaa (Windows-31J)
    // 0x68ef (UTF-16BE)
    if (argCheck == 'û™') {
        return true;
    }
    // No.4683
    // ê‡ñæ:9eab
    // 0x9eab (Windows-31J)
    // 0x6928 (UTF-16BE)
    if (argCheck == 'û´') {
        return true;
    }
    // No.4684
    // ê‡ñæ:9eac
    // 0x9eac (Windows-31J)
    // 0x692a (UTF-16BE)
    if (argCheck == 'û¨') {
        return true;
    }
    // No.4685
    // ê‡ñæ:9ead
    // 0x9ead (Windows-31J)
    // 0x691a (UTF-16BE)
    if (argCheck == 'û≠') {
        return true;
    }
    // No.4686
    // ê‡ñæ:9eae
    // 0x9eae (Windows-31J)
    // 0x6923 (UTF-16BE)
    if (argCheck == 'ûÆ') {
        return true;
    }
    // No.4687
    // ê‡ñæ:9eaf
    // 0x9eaf (Windows-31J)
    // 0x6921 (UTF-16BE)
    if (argCheck == 'ûØ') {
        return true;
    }
    // No.4688
    // ê‡ñæ:9eb0
    // 0x9eb0 (Windows-31J)
    // 0x68c6 (UTF-16BE)
    if (argCheck == 'û∞') {
        return true;
    }
    // No.4689
    // ê‡ñæ:9eb1
    // 0x9eb1 (Windows-31J)
    // 0x6979 (UTF-16BE)
    if (argCheck == 'û±') {
        return true;
    }
    // No.4690
    // ê‡ñæ:9eb2
    // 0x9eb2 (Windows-31J)
    // 0x6977 (UTF-16BE)
    if (argCheck == 'û≤') {
        return true;
    }
    // No.4691
    // ê‡ñæ:9eb3
    // 0x9eb3 (Windows-31J)
    // 0x695c (UTF-16BE)
    if (argCheck == 'û≥') {
        return true;
    }
    // No.4692
    // ê‡ñæ:9eb4
    // 0x9eb4 (Windows-31J)
    // 0x6978 (UTF-16BE)
    if (argCheck == 'û¥') {
        return true;
    }
    // No.4693
    // ê‡ñæ:9eb5
    // 0x9eb5 (Windows-31J)
    // 0x696b (UTF-16BE)
    if (argCheck == 'ûµ') {
        return true;
    }
    // No.4694
    // ê‡ñæ:9eb6
    // 0x9eb6 (Windows-31J)
    // 0x6954 (UTF-16BE)
    if (argCheck == 'û∂') {
        return true;
    }
    // No.4695
    // ê‡ñæ:9eb7
    // 0x9eb7 (Windows-31J)
    // 0x697e (UTF-16BE)
    if (argCheck == 'û∑') {
        return true;
    }
    // No.4696
    // ê‡ñæ:9eb8
    // 0x9eb8 (Windows-31J)
    // 0x696e (UTF-16BE)
    if (argCheck == 'û∏') {
        return true;
    }
    // No.4697
    // ê‡ñæ:9eb9
    // 0x9eb9 (Windows-31J)
    // 0x6939 (UTF-16BE)
    if (argCheck == 'ûπ') {
        return true;
    }
    // No.4698
    // ê‡ñæ:9eba
    // 0x9eba (Windows-31J)
    // 0x6974 (UTF-16BE)
    if (argCheck == 'û∫') {
        return true;
    }
    // No.4699
    // ê‡ñæ:9ebb
    // 0x9ebb (Windows-31J)
    // 0x693d (UTF-16BE)
    if (argCheck == 'ûª') {
        return true;
    }
    // No.4700
    // ê‡ñæ:9ebc
    // 0x9ebc (Windows-31J)
    // 0x6959 (UTF-16BE)
    if (argCheck == 'ûº') {
        return true;
    }
    // No.4701
    // ê‡ñæ:9ebd
    // 0x9ebd (Windows-31J)
    // 0x6930 (UTF-16BE)
    if (argCheck == 'ûΩ') {
        return true;
    }
    // No.4702
    // ê‡ñæ:9ebe
    // 0x9ebe (Windows-31J)
    // 0x6961 (UTF-16BE)
    if (argCheck == 'ûæ') {
        return true;
    }
    // No.4703
    // ê‡ñæ:9ebf
    // 0x9ebf (Windows-31J)
    // 0x695e (UTF-16BE)
    if (argCheck == 'ûø') {
        return true;
    }
    // No.4704
    // ê‡ñæ:9ec0
    // 0x9ec0 (Windows-31J)
    // 0x695d (UTF-16BE)
    if (argCheck == 'û¿') {
        return true;
    }
    // No.4705
    // ê‡ñæ:9ec1
    // 0x9ec1 (Windows-31J)
    // 0x6981 (UTF-16BE)
    if (argCheck == 'û¡') {
        return true;
    }
    // No.4706
    // ê‡ñæ:9ec2
    // 0x9ec2 (Windows-31J)
    // 0x696a (UTF-16BE)
    if (argCheck == 'û¬') {
        return true;
    }
    // No.4707
    // ê‡ñæ:9ec3
    // 0x9ec3 (Windows-31J)
    // 0x69b2 (UTF-16BE)
    if (argCheck == 'û√') {
        return true;
    }
    // No.4708
    // ê‡ñæ:9ec4
    // 0x9ec4 (Windows-31J)
    // 0x69ae (UTF-16BE)
    if (argCheck == 'ûƒ') {
        return true;
    }
    // No.4709
    // ê‡ñæ:9ec5
    // 0x9ec5 (Windows-31J)
    // 0x69d0 (UTF-16BE)
    if (argCheck == 'û≈') {
        return true;
    }
    // No.4710
    // ê‡ñæ:9ec6
    // 0x9ec6 (Windows-31J)
    // 0x69bf (UTF-16BE)
    if (argCheck == 'û∆') {
        return true;
    }
    // No.4711
    // ê‡ñæ:9ec7
    // 0x9ec7 (Windows-31J)
    // 0x69c1 (UTF-16BE)
    if (argCheck == 'û«') {
        return true;
    }
    // No.4712
    // ê‡ñæ:9ec8
    // 0x9ec8 (Windows-31J)
    // 0x69d3 (UTF-16BE)
    if (argCheck == 'û»') {
        return true;
    }
    // No.4713
    // ê‡ñæ:9ec9
    // 0x9ec9 (Windows-31J)
    // 0x69be (UTF-16BE)
    if (argCheck == 'û…') {
        return true;
    }
    // No.4714
    // ê‡ñæ:9eca
    // 0x9eca (Windows-31J)
    // 0x69ce (UTF-16BE)
    if (argCheck == 'û ') {
        return true;
    }
    // No.4715
    // ê‡ñæ:9ecb
    // 0x9ecb (Windows-31J)
    // 0x5be8 (UTF-16BE)
    if (argCheck == 'ûÀ') {
        return true;
    }
    // No.4716
    // ê‡ñæ:9ecc
    // 0x9ecc (Windows-31J)
    // 0x69ca (UTF-16BE)
    if (argCheck == 'ûÃ') {
        return true;
    }
    // No.4717
    // ê‡ñæ:9ecd
    // 0x9ecd (Windows-31J)
    // 0x69dd (UTF-16BE)
    if (argCheck == 'ûÕ') {
        return true;
    }
    // No.4718
    // ê‡ñæ:9ece
    // 0x9ece (Windows-31J)
    // 0x69bb (UTF-16BE)
    if (argCheck == 'ûŒ') {
        return true;
    }
    // No.4719
    // ê‡ñæ:9ecf
    // 0x9ecf (Windows-31J)
    // 0x69c3 (UTF-16BE)
    if (argCheck == 'ûœ') {
        return true;
    }
    // No.4720
    // ê‡ñæ:9ed0
    // 0x9ed0 (Windows-31J)
    // 0x69a7 (UTF-16BE)
    if (argCheck == 'û–') {
        return true;
    }
    // No.4721
    // ê‡ñæ:9ed1
    // 0x9ed1 (Windows-31J)
    // 0x6a2e (UTF-16BE)
    if (argCheck == 'û—') {
        return true;
    }
    // No.4722
    // ê‡ñæ:9ed2
    // 0x9ed2 (Windows-31J)
    // 0x6991 (UTF-16BE)
    if (argCheck == 'û“') {
        return true;
    }
    // No.4723
    // ê‡ñæ:9ed3
    // 0x9ed3 (Windows-31J)
    // 0x69a0 (UTF-16BE)
    if (argCheck == 'û”') {
        return true;
    }
    // No.4724
    // ê‡ñæ:9ed4
    // 0x9ed4 (Windows-31J)
    // 0x699c (UTF-16BE)
    if (argCheck == 'û‘') {
        return true;
    }
    // No.4725
    // ê‡ñæ:9ed5
    // 0x9ed5 (Windows-31J)
    // 0x6995 (UTF-16BE)
    if (argCheck == 'û’') {
        return true;
    }
    // No.4726
    // ê‡ñæ:9ed6
    // 0x9ed6 (Windows-31J)
    // 0x69b4 (UTF-16BE)
    if (argCheck == 'û÷') {
        return true;
    }
    // No.4727
    // ê‡ñæ:9ed7
    // 0x9ed7 (Windows-31J)
    // 0x69de (UTF-16BE)
    if (argCheck == 'û◊') {
        return true;
    }
    // No.4728
    // ê‡ñæ:9ed8
    // 0x9ed8 (Windows-31J)
    // 0x69e8 (UTF-16BE)
    if (argCheck == 'ûÿ') {
        return true;
    }
    // No.4729
    // ê‡ñæ:9ed9
    // 0x9ed9 (Windows-31J)
    // 0x6a02 (UTF-16BE)
    if (argCheck == 'ûŸ') {
        return true;
    }
    // No.4730
    // ê‡ñæ:9eda
    // 0x9eda (Windows-31J)
    // 0x6a1b (UTF-16BE)
    if (argCheck == 'û⁄') {
        return true;
    }
    // No.4731
    // ê‡ñæ:9edb
    // 0x9edb (Windows-31J)
    // 0x69ff (UTF-16BE)
    if (argCheck == 'û€') {
        return true;
    }
    // No.4732
    // ê‡ñæ:9edc
    // 0x9edc (Windows-31J)
    // 0x6b0a (UTF-16BE)
    if (argCheck == 'û‹') {
        return true;
    }
    // No.4733
    // ê‡ñæ:9edd
    // 0x9edd (Windows-31J)
    // 0x69f9 (UTF-16BE)
    if (argCheck == 'û›') {
        return true;
    }
    // No.4734
    // ê‡ñæ:9ede
    // 0x9ede (Windows-31J)
    // 0x69f2 (UTF-16BE)
    if (argCheck == 'ûﬁ') {
        return true;
    }
    // No.4735
    // ê‡ñæ:9edf
    // 0x9edf (Windows-31J)
    // 0x69e7 (UTF-16BE)
    if (argCheck == 'ûﬂ') {
        return true;
    }
    // No.4736
    // ê‡ñæ:9ee0
    // 0x9ee0 (Windows-31J)
    // 0x6a05 (UTF-16BE)
    if (argCheck == 'û‡') {
        return true;
    }
    // No.4737
    // ê‡ñæ:9ee1
    // 0x9ee1 (Windows-31J)
    // 0x69b1 (UTF-16BE)
    if (argCheck == 'û·') {
        return true;
    }
    // No.4738
    // ê‡ñæ:9ee2
    // 0x9ee2 (Windows-31J)
    // 0x6a1e (UTF-16BE)
    if (argCheck == 'û‚') {
        return true;
    }
    // No.4739
    // ê‡ñæ:9ee3
    // 0x9ee3 (Windows-31J)
    // 0x69ed (UTF-16BE)
    if (argCheck == 'û„') {
        return true;
    }
    // No.4740
    // ê‡ñæ:9ee4
    // 0x9ee4 (Windows-31J)
    // 0x6a14 (UTF-16BE)
    if (argCheck == 'û‰') {
        return true;
    }
    // No.4741
    // ê‡ñæ:9ee5
    // 0x9ee5 (Windows-31J)
    // 0x69eb (UTF-16BE)
    if (argCheck == 'ûÂ') {
        return true;
    }
    // No.4742
    // ê‡ñæ:9ee6
    // 0x9ee6 (Windows-31J)
    // 0x6a0a (UTF-16BE)
    if (argCheck == 'ûÊ') {
        return true;
    }
    // No.4743
    // ê‡ñæ:9ee7
    // 0x9ee7 (Windows-31J)
    // 0x6a12 (UTF-16BE)
    if (argCheck == 'ûÁ') {
        return true;
    }
    // No.4744
    // ê‡ñæ:9ee8
    // 0x9ee8 (Windows-31J)
    // 0x6ac1 (UTF-16BE)
    if (argCheck == 'ûË') {
        return true;
    }
    // No.4745
    // ê‡ñæ:9ee9
    // 0x9ee9 (Windows-31J)
    // 0x6a23 (UTF-16BE)
    if (argCheck == 'ûÈ') {
        return true;
    }
    // No.4746
    // ê‡ñæ:9eea
    // 0x9eea (Windows-31J)
    // 0x6a13 (UTF-16BE)
    if (argCheck == 'ûÍ') {
        return true;
    }
    // No.4747
    // ê‡ñæ:9eeb
    // 0x9eeb (Windows-31J)
    // 0x6a44 (UTF-16BE)
    if (argCheck == 'ûÎ') {
        return true;
    }
    // No.4748
    // ê‡ñæ:9eec
    // 0x9eec (Windows-31J)
    // 0x6a0c (UTF-16BE)
    if (argCheck == 'ûÏ') {
        return true;
    }
    // No.4749
    // ê‡ñæ:9eed
    // 0x9eed (Windows-31J)
    // 0x6a72 (UTF-16BE)
    if (argCheck == 'ûÌ') {
        return true;
    }
    // No.4750
    // ê‡ñæ:9eee
    // 0x9eee (Windows-31J)
    // 0x6a36 (UTF-16BE)
    if (argCheck == 'ûÓ') {
        return true;
    }
    // No.4751
    // ê‡ñæ:9eef
    // 0x9eef (Windows-31J)
    // 0x6a78 (UTF-16BE)
    if (argCheck == 'ûÔ') {
        return true;
    }
    // No.4752
    // ê‡ñæ:9ef0
    // 0x9ef0 (Windows-31J)
    // 0x6a47 (UTF-16BE)
    if (argCheck == 'û') {
        return true;
    }
    // No.4753
    // ê‡ñæ:9ef1
    // 0x9ef1 (Windows-31J)
    // 0x6a62 (UTF-16BE)
    if (argCheck == 'ûÒ') {
        return true;
    }
    // No.4754
    // ê‡ñæ:9ef2
    // 0x9ef2 (Windows-31J)
    // 0x6a59 (UTF-16BE)
    if (argCheck == 'ûÚ') {
        return true;
    }
    // No.4755
    // ê‡ñæ:9ef3
    // 0x9ef3 (Windows-31J)
    // 0x6a66 (UTF-16BE)
    if (argCheck == 'ûÛ') {
        return true;
    }
    // No.4756
    // ê‡ñæ:9ef4
    // 0x9ef4 (Windows-31J)
    // 0x6a48 (UTF-16BE)
    if (argCheck == 'ûÙ') {
        return true;
    }
    // No.4757
    // ê‡ñæ:9ef5
    // 0x9ef5 (Windows-31J)
    // 0x6a38 (UTF-16BE)
    if (argCheck == 'ûı') {
        return true;
    }
    // No.4758
    // ê‡ñæ:9ef6
    // 0x9ef6 (Windows-31J)
    // 0x6a22 (UTF-16BE)
    if (argCheck == 'ûˆ') {
        return true;
    }
    // No.4759
    // ê‡ñæ:9ef7
    // 0x9ef7 (Windows-31J)
    // 0x6a90 (UTF-16BE)
    if (argCheck == 'û˜') {
        return true;
    }
    // No.4760
    // ê‡ñæ:9ef8
    // 0x9ef8 (Windows-31J)
    // 0x6a8d (UTF-16BE)
    if (argCheck == 'û¯') {
        return true;
    }
    // No.4761
    // ê‡ñæ:9ef9
    // 0x9ef9 (Windows-31J)
    // 0x6aa0 (UTF-16BE)
    if (argCheck == 'û˘') {
        return true;
    }
    // No.4762
    // ê‡ñæ:9efa
    // 0x9efa (Windows-31J)
    // 0x6a84 (UTF-16BE)
    if (argCheck == 'û˙') {
        return true;
    }
    // No.4763
    // ê‡ñæ:9efb
    // 0x9efb (Windows-31J)
    // 0x6aa2 (UTF-16BE)
    if (argCheck == 'û˚') {
        return true;
    }
    // No.4764
    // ê‡ñæ:9efc
    // 0x9efc (Windows-31J)
    // 0x6aa3 (UTF-16BE)
    if (argCheck == 'û¸') {
        return true;
    }
    // No.4765
    // ê‡ñæ:9f40
    // 0x9f40 (Windows-31J)
    // 0x6a97 (UTF-16BE)
    if (argCheck == 'ü@') {
        return true;
    }
    // No.4766
    // ê‡ñæ:9f41
    // 0x9f41 (Windows-31J)
    // 0x8617 (UTF-16BE)
    if (argCheck == 'üA') {
        return true;
    }
    // No.4767
    // ê‡ñæ:9f42
    // 0x9f42 (Windows-31J)
    // 0x6abb (UTF-16BE)
    if (argCheck == 'üB') {
        return true;
    }
    // No.4768
    // ê‡ñæ:9f43
    // 0x9f43 (Windows-31J)
    // 0x6ac3 (UTF-16BE)
    if (argCheck == 'üC') {
        return true;
    }
    // No.4769
    // ê‡ñæ:9f44
    // 0x9f44 (Windows-31J)
    // 0x6ac2 (UTF-16BE)
    if (argCheck == 'üD') {
        return true;
    }
    // No.4770
    // ê‡ñæ:9f45
    // 0x9f45 (Windows-31J)
    // 0x6ab8 (UTF-16BE)
    if (argCheck == 'üE') {
        return true;
    }
    // No.4771
    // ê‡ñæ:9f46
    // 0x9f46 (Windows-31J)
    // 0x6ab3 (UTF-16BE)
    if (argCheck == 'üF') {
        return true;
    }
    // No.4772
    // ê‡ñæ:9f47
    // 0x9f47 (Windows-31J)
    // 0x6aac (UTF-16BE)
    if (argCheck == 'üG') {
        return true;
    }
    // No.4773
    // ê‡ñæ:9f48
    // 0x9f48 (Windows-31J)
    // 0x6ade (UTF-16BE)
    if (argCheck == 'üH') {
        return true;
    }
    // No.4774
    // ê‡ñæ:9f49
    // 0x9f49 (Windows-31J)
    // 0x6ad1 (UTF-16BE)
    if (argCheck == 'üI') {
        return true;
    }
    // No.4775
    // ê‡ñæ:9f4a
    // 0x9f4a (Windows-31J)
    // 0x6adf (UTF-16BE)
    if (argCheck == 'üJ') {
        return true;
    }
    // No.4776
    // ê‡ñæ:9f4b
    // 0x9f4b (Windows-31J)
    // 0x6aaa (UTF-16BE)
    if (argCheck == 'üK') {
        return true;
    }
    // No.4777
    // ê‡ñæ:9f4c
    // 0x9f4c (Windows-31J)
    // 0x6ada (UTF-16BE)
    if (argCheck == 'üL') {
        return true;
    }
    // No.4778
    // ê‡ñæ:9f4d
    // 0x9f4d (Windows-31J)
    // 0x6aea (UTF-16BE)
    if (argCheck == 'üM') {
        return true;
    }
    // No.4779
    // ê‡ñæ:9f4e
    // 0x9f4e (Windows-31J)
    // 0x6afb (UTF-16BE)
    if (argCheck == 'üN') {
        return true;
    }
    // No.4780
    // ê‡ñæ:9f4f
    // 0x9f4f (Windows-31J)
    // 0x6b05 (UTF-16BE)
    if (argCheck == 'üO') {
        return true;
    }
    // No.4781
    // ê‡ñæ:9f50
    // 0x9f50 (Windows-31J)
    // 0x8616 (UTF-16BE)
    if (argCheck == 'üP') {
        return true;
    }
    // No.4782
    // ê‡ñæ:9f51
    // 0x9f51 (Windows-31J)
    // 0x6afa (UTF-16BE)
    if (argCheck == 'üQ') {
        return true;
    }
    // No.4783
    // ê‡ñæ:9f52
    // 0x9f52 (Windows-31J)
    // 0x6b12 (UTF-16BE)
    if (argCheck == 'üR') {
        return true;
    }
    // No.4784
    // ê‡ñæ:9f53
    // 0x9f53 (Windows-31J)
    // 0x6b16 (UTF-16BE)
    if (argCheck == 'üS') {
        return true;
    }
    // No.4785
    // ê‡ñæ:9f54
    // 0x9f54 (Windows-31J)
    // 0x9b31 (UTF-16BE)
    if (argCheck == 'üT') {
        return true;
    }
    // No.4786
    // ê‡ñæ:9f55
    // 0x9f55 (Windows-31J)
    // 0x6b1f (UTF-16BE)
    if (argCheck == 'üU') {
        return true;
    }
    // No.4787
    // ê‡ñæ:9f56
    // 0x9f56 (Windows-31J)
    // 0x6b38 (UTF-16BE)
    if (argCheck == 'üV') {
        return true;
    }
    // No.4788
    // ê‡ñæ:9f57
    // 0x9f57 (Windows-31J)
    // 0x6b37 (UTF-16BE)
    if (argCheck == 'üW') {
        return true;
    }
    // No.4789
    // ê‡ñæ:9f58
    // 0x9f58 (Windows-31J)
    // 0x76dc (UTF-16BE)
    if (argCheck == 'üX') {
        return true;
    }
    // No.4790
    // ê‡ñæ:9f59
    // 0x9f59 (Windows-31J)
    // 0x6b39 (UTF-16BE)
    if (argCheck == 'üY') {
        return true;
    }
    // No.4791
    // ê‡ñæ:9f5a
    // 0x9f5a (Windows-31J)
    // 0x98ee (UTF-16BE)
    if (argCheck == 'üZ') {
        return true;
    }
    // No.4792
    // ê‡ñæ:9f5b
    // 0x9f5b (Windows-31J)
    // 0x6b47 (UTF-16BE)
    if (argCheck == 'ü[') {
        return true;
    }
    // No.4793
    // ê‡ñæ:9f5c
    // 0x9f5c (Windows-31J)
    // 0x6b43 (UTF-16BE)
    if (argCheck == 'ü\') {
        return true;
    }
    // No.4794
    // ê‡ñæ:9f5d
    // 0x9f5d (Windows-31J)
    // 0x6b49 (UTF-16BE)
    if (argCheck == 'ü]') {
        return true;
    }
    // No.4795
    // ê‡ñæ:9f5e
    // 0x9f5e (Windows-31J)
    // 0x6b50 (UTF-16BE)
    if (argCheck == 'ü^') {
        return true;
    }
    // No.4796
    // ê‡ñæ:9f5f
    // 0x9f5f (Windows-31J)
    // 0x6b59 (UTF-16BE)
    if (argCheck == 'ü_') {
        return true;
    }
    // No.4797
    // ê‡ñæ:9f60
    // 0x9f60 (Windows-31J)
    // 0x6b54 (UTF-16BE)
    if (argCheck == 'ü`') {
        return true;
    }
    // No.4798
    // ê‡ñæ:9f61
    // 0x9f61 (Windows-31J)
    // 0x6b5b (UTF-16BE)
    if (argCheck == 'üa') {
        return true;
    }
    // No.4799
    // ê‡ñæ:9f62
    // 0x9f62 (Windows-31J)
    // 0x6b5f (UTF-16BE)
    if (argCheck == 'üb') {
        return true;
    }
    // No.4800
    // ê‡ñæ:9f63
    // 0x9f63 (Windows-31J)
    // 0x6b61 (UTF-16BE)
    if (argCheck == 'üc') {
        return true;
    }
    // No.4801
    // ê‡ñæ:9f64
    // 0x9f64 (Windows-31J)
    // 0x6b78 (UTF-16BE)
    if (argCheck == 'üd') {
        return true;
    }
    // No.4802
    // ê‡ñæ:9f65
    // 0x9f65 (Windows-31J)
    // 0x6b79 (UTF-16BE)
    if (argCheck == 'üe') {
        return true;
    }
    // No.4803
    // ê‡ñæ:9f66
    // 0x9f66 (Windows-31J)
    // 0x6b7f (UTF-16BE)
    if (argCheck == 'üf') {
        return true;
    }
    // No.4804
    // ê‡ñæ:9f67
    // 0x9f67 (Windows-31J)
    // 0x6b80 (UTF-16BE)
    if (argCheck == 'üg') {
        return true;
    }
    // No.4805
    // ê‡ñæ:9f68
    // 0x9f68 (Windows-31J)
    // 0x6b84 (UTF-16BE)
    if (argCheck == 'üh') {
        return true;
    }
    // No.4806
    // ê‡ñæ:9f69
    // 0x9f69 (Windows-31J)
    // 0x6b83 (UTF-16BE)
    if (argCheck == 'üi') {
        return true;
    }
    // No.4807
    // ê‡ñæ:9f6a
    // 0x9f6a (Windows-31J)
    // 0x6b8d (UTF-16BE)
    if (argCheck == 'üj') {
        return true;
    }
    // No.4808
    // ê‡ñæ:9f6b
    // 0x9f6b (Windows-31J)
    // 0x6b98 (UTF-16BE)
    if (argCheck == 'ük') {
        return true;
    }
    // No.4809
    // ê‡ñæ:9f6c
    // 0x9f6c (Windows-31J)
    // 0x6b95 (UTF-16BE)
    if (argCheck == 'ül') {
        return true;
    }
    // No.4810
    // ê‡ñæ:9f6d
    // 0x9f6d (Windows-31J)
    // 0x6b9e (UTF-16BE)
    if (argCheck == 'üm') {
        return true;
    }
    // No.4811
    // ê‡ñæ:9f6e
    // 0x9f6e (Windows-31J)
    // 0x6ba4 (UTF-16BE)
    if (argCheck == 'ün') {
        return true;
    }
    // No.4812
    // ê‡ñæ:9f6f
    // 0x9f6f (Windows-31J)
    // 0x6baa (UTF-16BE)
    if (argCheck == 'üo') {
        return true;
    }
    // No.4813
    // ê‡ñæ:9f70
    // 0x9f70 (Windows-31J)
    // 0x6bab (UTF-16BE)
    if (argCheck == 'üp') {
        return true;
    }
    // No.4814
    // ê‡ñæ:9f71
    // 0x9f71 (Windows-31J)
    // 0x6baf (UTF-16BE)
    if (argCheck == 'üq') {
        return true;
    }
    // No.4815
    // ê‡ñæ:9f72
    // 0x9f72 (Windows-31J)
    // 0x6bb2 (UTF-16BE)
    if (argCheck == 'ür') {
        return true;
    }
    // No.4816
    // ê‡ñæ:9f73
    // 0x9f73 (Windows-31J)
    // 0x6bb1 (UTF-16BE)
    if (argCheck == 'üs') {
        return true;
    }
    // No.4817
    // ê‡ñæ:9f74
    // 0x9f74 (Windows-31J)
    // 0x6bb3 (UTF-16BE)
    if (argCheck == 'üt') {
        return true;
    }
    // No.4818
    // ê‡ñæ:9f75
    // 0x9f75 (Windows-31J)
    // 0x6bb7 (UTF-16BE)
    if (argCheck == 'üu') {
        return true;
    }
    // No.4819
    // ê‡ñæ:9f76
    // 0x9f76 (Windows-31J)
    // 0x6bbc (UTF-16BE)
    if (argCheck == 'üv') {
        return true;
    }
    // No.4820
    // ê‡ñæ:9f77
    // 0x9f77 (Windows-31J)
    // 0x6bc6 (UTF-16BE)
    if (argCheck == 'üw') {
        return true;
    }
    // No.4821
    // ê‡ñæ:9f78
    // 0x9f78 (Windows-31J)
    // 0x6bcb (UTF-16BE)
    if (argCheck == 'üx') {
        return true;
    }
    // No.4822
    // ê‡ñæ:9f79
    // 0x9f79 (Windows-31J)
    // 0x6bd3 (UTF-16BE)
    if (argCheck == 'üy') {
        return true;
    }
    // No.4823
    // ê‡ñæ:9f7a
    // 0x9f7a (Windows-31J)
    // 0x6bdf (UTF-16BE)
    if (argCheck == 'üz') {
        return true;
    }
    // No.4824
    // ê‡ñæ:9f7b
    // 0x9f7b (Windows-31J)
    // 0x6bec (UTF-16BE)
    if (argCheck == 'ü{') {
        return true;
    }
    // No.4825
    // ê‡ñæ:9f7c
    // 0x9f7c (Windows-31J)
    // 0x6beb (UTF-16BE)
    if (argCheck == 'ü|') {
        return true;
    }
    // No.4826
    // ê‡ñæ:9f7d
    // 0x9f7d (Windows-31J)
    // 0x6bf3 (UTF-16BE)
    if (argCheck == 'ü}') {
        return true;
    }
    // No.4827
    // ê‡ñæ:9f7e
    // 0x9f7e (Windows-31J)
    // 0x6bef (UTF-16BE)
    if (argCheck == 'ü~') {
        return true;
    }
    // No.4828
    // ê‡ñæ:9f80
    // 0x9f80 (Windows-31J)
    // 0x9ebe (UTF-16BE)
    if (argCheck == 'üÄ') {
        return true;
    }
    // No.4829
    // ê‡ñæ:9f81
    // 0x9f81 (Windows-31J)
    // 0x6c08 (UTF-16BE)
    if (argCheck == 'üÅ') {
        return true;
    }
    // No.4830
    // ê‡ñæ:9f82
    // 0x9f82 (Windows-31J)
    // 0x6c13 (UTF-16BE)
    if (argCheck == 'üÇ') {
        return true;
    }
    // No.4831
    // ê‡ñæ:9f83
    // 0x9f83 (Windows-31J)
    // 0x6c14 (UTF-16BE)
    if (argCheck == 'üÉ') {
        return true;
    }
    // No.4832
    // ê‡ñæ:9f84
    // 0x9f84 (Windows-31J)
    // 0x6c1b (UTF-16BE)
    if (argCheck == 'üÑ') {
        return true;
    }
    // No.4833
    // ê‡ñæ:9f85
    // 0x9f85 (Windows-31J)
    // 0x6c24 (UTF-16BE)
    if (argCheck == 'üÖ') {
        return true;
    }
    // No.4834
    // ê‡ñæ:9f86
    // 0x9f86 (Windows-31J)
    // 0x6c23 (UTF-16BE)
    if (argCheck == 'üÜ') {
        return true;
    }
    // No.4835
    // ê‡ñæ:9f87
    // 0x9f87 (Windows-31J)
    // 0x6c5e (UTF-16BE)
    if (argCheck == 'üá') {
        return true;
    }
    // No.4836
    // ê‡ñæ:9f88
    // 0x9f88 (Windows-31J)
    // 0x6c55 (UTF-16BE)
    if (argCheck == 'üà') {
        return true;
    }
    // No.4837
    // ê‡ñæ:9f89
    // 0x9f89 (Windows-31J)
    // 0x6c62 (UTF-16BE)
    if (argCheck == 'üâ') {
        return true;
    }
    // No.4838
    // ê‡ñæ:9f8a
    // 0x9f8a (Windows-31J)
    // 0x6c6a (UTF-16BE)
    if (argCheck == 'üä') {
        return true;
    }
    // No.4839
    // ê‡ñæ:9f8b
    // 0x9f8b (Windows-31J)
    // 0x6c82 (UTF-16BE)
    if (argCheck == 'üã') {
        return true;
    }
    // No.4840
    // ê‡ñæ:9f8c
    // 0x9f8c (Windows-31J)
    // 0x6c8d (UTF-16BE)
    if (argCheck == 'üå') {
        return true;
    }
    // No.4841
    // ê‡ñæ:9f8d
    // 0x9f8d (Windows-31J)
    // 0x6c9a (UTF-16BE)
    if (argCheck == 'üç') {
        return true;
    }
    // No.4842
    // ê‡ñæ:9f8e
    // 0x9f8e (Windows-31J)
    // 0x6c81 (UTF-16BE)
    if (argCheck == 'üé') {
        return true;
    }
    // No.4843
    // ê‡ñæ:9f8f
    // 0x9f8f (Windows-31J)
    // 0x6c9b (UTF-16BE)
    if (argCheck == 'üè') {
        return true;
    }
    // No.4844
    // ê‡ñæ:9f90
    // 0x9f90 (Windows-31J)
    // 0x6c7e (UTF-16BE)
    if (argCheck == 'üê') {
        return true;
    }
    // No.4845
    // ê‡ñæ:9f91
    // 0x9f91 (Windows-31J)
    // 0x6c68 (UTF-16BE)
    if (argCheck == 'üë') {
        return true;
    }
    // No.4846
    // ê‡ñæ:9f92
    // 0x9f92 (Windows-31J)
    // 0x6c73 (UTF-16BE)
    if (argCheck == 'üí') {
        return true;
    }
    // No.4847
    // ê‡ñæ:9f93
    // 0x9f93 (Windows-31J)
    // 0x6c92 (UTF-16BE)
    if (argCheck == 'üì') {
        return true;
    }
    // No.4848
    // ê‡ñæ:9f94
    // 0x9f94 (Windows-31J)
    // 0x6c90 (UTF-16BE)
    if (argCheck == 'üî') {
        return true;
    }
    // No.4849
    // ê‡ñæ:9f95
    // 0x9f95 (Windows-31J)
    // 0x6cc4 (UTF-16BE)
    if (argCheck == 'üï') {
        return true;
    }
    // No.4850
    // ê‡ñæ:9f96
    // 0x9f96 (Windows-31J)
    // 0x6cf1 (UTF-16BE)
    if (argCheck == 'üñ') {
        return true;
    }
    // No.4851
    // ê‡ñæ:9f97
    // 0x9f97 (Windows-31J)
    // 0x6cd3 (UTF-16BE)
    if (argCheck == 'üó') {
        return true;
    }
    // No.4852
    // ê‡ñæ:9f98
    // 0x9f98 (Windows-31J)
    // 0x6cbd (UTF-16BE)
    if (argCheck == 'üò') {
        return true;
    }
    // No.4853
    // ê‡ñæ:9f99
    // 0x9f99 (Windows-31J)
    // 0x6cd7 (UTF-16BE)
    if (argCheck == 'üô') {
        return true;
    }
    // No.4854
    // ê‡ñæ:9f9a
    // 0x9f9a (Windows-31J)
    // 0x6cc5 (UTF-16BE)
    if (argCheck == 'üö') {
        return true;
    }
    // No.4855
    // ê‡ñæ:9f9b
    // 0x9f9b (Windows-31J)
    // 0x6cdd (UTF-16BE)
    if (argCheck == 'üõ') {
        return true;
    }
    // No.4856
    // ê‡ñæ:9f9c
    // 0x9f9c (Windows-31J)
    // 0x6cae (UTF-16BE)
    if (argCheck == 'üú') {
        return true;
    }
    // No.4857
    // ê‡ñæ:9f9d
    // 0x9f9d (Windows-31J)
    // 0x6cb1 (UTF-16BE)
    if (argCheck == 'üù') {
        return true;
    }
    // No.4858
    // ê‡ñæ:9f9e
    // 0x9f9e (Windows-31J)
    // 0x6cbe (UTF-16BE)
    if (argCheck == 'üû') {
        return true;
    }
    // No.4859
    // ê‡ñæ:9f9f
    // 0x9f9f (Windows-31J)
    // 0x6cba (UTF-16BE)
    if (argCheck == 'üü') {
        return true;
    }
    // No.4860
    // ê‡ñæ:9fa0
    // 0x9fa0 (Windows-31J)
    // 0x6cdb (UTF-16BE)
    if (argCheck == 'ü†') {
        return true;
    }
    // No.4861
    // ê‡ñæ:9fa1
    // 0x9fa1 (Windows-31J)
    // 0x6cef (UTF-16BE)
    if (argCheck == 'ü°') {
        return true;
    }
    // No.4862
    // ê‡ñæ:9fa2
    // 0x9fa2 (Windows-31J)
    // 0x6cd9 (UTF-16BE)
    if (argCheck == 'ü¢') {
        return true;
    }
    // No.4863
    // ê‡ñæ:9fa3
    // 0x9fa3 (Windows-31J)
    // 0x6cea (UTF-16BE)
    if (argCheck == 'ü£') {
        return true;
    }
    // No.4864
    // ê‡ñæ:9fa4
    // 0x9fa4 (Windows-31J)
    // 0x6d1f (UTF-16BE)
    if (argCheck == 'ü§') {
        return true;
    }
    // No.4865
    // ê‡ñæ:9fa5
    // 0x9fa5 (Windows-31J)
    // 0x884d (UTF-16BE)
    if (argCheck == 'ü•') {
        return true;
    }
    // No.4866
    // ê‡ñæ:9fa6
    // 0x9fa6 (Windows-31J)
    // 0x6d36 (UTF-16BE)
    if (argCheck == 'ü¶') {
        return true;
    }
    // No.4867
    // ê‡ñæ:9fa7
    // 0x9fa7 (Windows-31J)
    // 0x6d2b (UTF-16BE)
    if (argCheck == 'üß') {
        return true;
    }
    // No.4868
    // ê‡ñæ:9fa8
    // 0x9fa8 (Windows-31J)
    // 0x6d3d (UTF-16BE)
    if (argCheck == 'ü®') {
        return true;
    }
    // No.4869
    // ê‡ñæ:9fa9
    // 0x9fa9 (Windows-31J)
    // 0x6d38 (UTF-16BE)
    if (argCheck == 'ü©') {
        return true;
    }
    // No.4870
    // ê‡ñæ:9faa
    // 0x9faa (Windows-31J)
    // 0x6d19 (UTF-16BE)
    if (argCheck == 'ü™') {
        return true;
    }
    // No.4871
    // ê‡ñæ:9fab
    // 0x9fab (Windows-31J)
    // 0x6d35 (UTF-16BE)
    if (argCheck == 'ü´') {
        return true;
    }
    // No.4872
    // ê‡ñæ:9fac
    // 0x9fac (Windows-31J)
    // 0x6d33 (UTF-16BE)
    if (argCheck == 'ü¨') {
        return true;
    }
    // No.4873
    // ê‡ñæ:9fad
    // 0x9fad (Windows-31J)
    // 0x6d12 (UTF-16BE)
    if (argCheck == 'ü≠') {
        return true;
    }
    // No.4874
    // ê‡ñæ:9fae
    // 0x9fae (Windows-31J)
    // 0x6d0c (UTF-16BE)
    if (argCheck == 'üÆ') {
        return true;
    }
    // No.4875
    // ê‡ñæ:9faf
    // 0x9faf (Windows-31J)
    // 0x6d63 (UTF-16BE)
    if (argCheck == 'üØ') {
        return true;
    }
    // No.4876
    // ê‡ñæ:9fb0
    // 0x9fb0 (Windows-31J)
    // 0x6d93 (UTF-16BE)
    if (argCheck == 'ü∞') {
        return true;
    }
    // No.4877
    // ê‡ñæ:9fb1
    // 0x9fb1 (Windows-31J)
    // 0x6d64 (UTF-16BE)
    if (argCheck == 'ü±') {
        return true;
    }
    // No.4878
    // ê‡ñæ:9fb2
    // 0x9fb2 (Windows-31J)
    // 0x6d5a (UTF-16BE)
    if (argCheck == 'ü≤') {
        return true;
    }
    // No.4879
    // ê‡ñæ:9fb3
    // 0x9fb3 (Windows-31J)
    // 0x6d79 (UTF-16BE)
    if (argCheck == 'ü≥') {
        return true;
    }
    // No.4880
    // ê‡ñæ:9fb4
    // 0x9fb4 (Windows-31J)
    // 0x6d59 (UTF-16BE)
    if (argCheck == 'ü¥') {
        return true;
    }
    // No.4881
    // ê‡ñæ:9fb5
    // 0x9fb5 (Windows-31J)
    // 0x6d8e (UTF-16BE)
    if (argCheck == 'üµ') {
        return true;
    }
    // No.4882
    // ê‡ñæ:9fb6
    // 0x9fb6 (Windows-31J)
    // 0x6d95 (UTF-16BE)
    if (argCheck == 'ü∂') {
        return true;
    }
    // No.4883
    // ê‡ñæ:9fb7
    // 0x9fb7 (Windows-31J)
    // 0x6fe4 (UTF-16BE)
    if (argCheck == 'ü∑') {
        return true;
    }
    // No.4884
    // ê‡ñæ:9fb8
    // 0x9fb8 (Windows-31J)
    // 0x6d85 (UTF-16BE)
    if (argCheck == 'ü∏') {
        return true;
    }
    // No.4885
    // ê‡ñæ:9fb9
    // 0x9fb9 (Windows-31J)
    // 0x6df9 (UTF-16BE)
    if (argCheck == 'üπ') {
        return true;
    }
    // No.4886
    // ê‡ñæ:9fba
    // 0x9fba (Windows-31J)
    // 0x6e15 (UTF-16BE)
    if (argCheck == 'ü∫') {
        return true;
    }
    // No.4887
    // ê‡ñæ:9fbb
    // 0x9fbb (Windows-31J)
    // 0x6e0a (UTF-16BE)
    if (argCheck == 'üª') {
        return true;
    }
    // No.4888
    // ê‡ñæ:9fbc
    // 0x9fbc (Windows-31J)
    // 0x6db5 (UTF-16BE)
    if (argCheck == 'üº') {
        return true;
    }
    // No.4889
    // ê‡ñæ:9fbd
    // 0x9fbd (Windows-31J)
    // 0x6dc7 (UTF-16BE)
    if (argCheck == 'üΩ') {
        return true;
    }
    // No.4890
    // ê‡ñæ:9fbe
    // 0x9fbe (Windows-31J)
    // 0x6de6 (UTF-16BE)
    if (argCheck == 'üæ') {
        return true;
    }
    // No.4891
    // ê‡ñæ:9fbf
    // 0x9fbf (Windows-31J)
    // 0x6db8 (UTF-16BE)
    if (argCheck == 'üø') {
        return true;
    }
    // No.4892
    // ê‡ñæ:9fc0
    // 0x9fc0 (Windows-31J)
    // 0x6dc6 (UTF-16BE)
    if (argCheck == 'ü¿') {
        return true;
    }
    // No.4893
    // ê‡ñæ:9fc1
    // 0x9fc1 (Windows-31J)
    // 0x6dec (UTF-16BE)
    if (argCheck == 'ü¡') {
        return true;
    }
    // No.4894
    // ê‡ñæ:9fc2
    // 0x9fc2 (Windows-31J)
    // 0x6dde (UTF-16BE)
    if (argCheck == 'ü¬') {
        return true;
    }
    // No.4895
    // ê‡ñæ:9fc3
    // 0x9fc3 (Windows-31J)
    // 0x6dcc (UTF-16BE)
    if (argCheck == 'ü√') {
        return true;
    }
    // No.4896
    // ê‡ñæ:9fc4
    // 0x9fc4 (Windows-31J)
    // 0x6de8 (UTF-16BE)
    if (argCheck == 'üƒ') {
        return true;
    }
    // No.4897
    // ê‡ñæ:9fc5
    // 0x9fc5 (Windows-31J)
    // 0x6dd2 (UTF-16BE)
    if (argCheck == 'ü≈') {
        return true;
    }
    // No.4898
    // ê‡ñæ:9fc6
    // 0x9fc6 (Windows-31J)
    // 0x6dc5 (UTF-16BE)
    if (argCheck == 'ü∆') {
        return true;
    }
    // No.4899
    // ê‡ñæ:9fc7
    // 0x9fc7 (Windows-31J)
    // 0x6dfa (UTF-16BE)
    if (argCheck == 'ü«') {
        return true;
    }
    // No.4900
    // ê‡ñæ:9fc8
    // 0x9fc8 (Windows-31J)
    // 0x6dd9 (UTF-16BE)
    if (argCheck == 'ü»') {
        return true;
    }
    // No.4901
    // ê‡ñæ:9fc9
    // 0x9fc9 (Windows-31J)
    // 0x6de4 (UTF-16BE)
    if (argCheck == 'ü…') {
        return true;
    }
    // No.4902
    // ê‡ñæ:9fca
    // 0x9fca (Windows-31J)
    // 0x6dd5 (UTF-16BE)
    if (argCheck == 'ü ') {
        return true;
    }
    // No.4903
    // ê‡ñæ:9fcb
    // 0x9fcb (Windows-31J)
    // 0x6dea (UTF-16BE)
    if (argCheck == 'üÀ') {
        return true;
    }
    // No.4904
    // ê‡ñæ:9fcc
    // 0x9fcc (Windows-31J)
    // 0x6dee (UTF-16BE)
    if (argCheck == 'üÃ') {
        return true;
    }
    // No.4905
    // ê‡ñæ:9fcd
    // 0x9fcd (Windows-31J)
    // 0x6e2d (UTF-16BE)
    if (argCheck == 'üÕ') {
        return true;
    }
    // No.4906
    // ê‡ñæ:9fce
    // 0x9fce (Windows-31J)
    // 0x6e6e (UTF-16BE)
    if (argCheck == 'üŒ') {
        return true;
    }
    // No.4907
    // ê‡ñæ:9fcf
    // 0x9fcf (Windows-31J)
    // 0x6e2e (UTF-16BE)
    if (argCheck == 'üœ') {
        return true;
    }
    // No.4908
    // ê‡ñæ:9fd0
    // 0x9fd0 (Windows-31J)
    // 0x6e19 (UTF-16BE)
    if (argCheck == 'ü–') {
        return true;
    }
    // No.4909
    // ê‡ñæ:9fd1
    // 0x9fd1 (Windows-31J)
    // 0x6e72 (UTF-16BE)
    if (argCheck == 'ü—') {
        return true;
    }
    // No.4910
    // ê‡ñæ:9fd2
    // 0x9fd2 (Windows-31J)
    // 0x6e5f (UTF-16BE)
    if (argCheck == 'ü“') {
        return true;
    }
    // No.4911
    // ê‡ñæ:9fd3
    // 0x9fd3 (Windows-31J)
    // 0x6e3e (UTF-16BE)
    if (argCheck == 'ü”') {
        return true;
    }
    // No.4912
    // ê‡ñæ:9fd4
    // 0x9fd4 (Windows-31J)
    // 0x6e23 (UTF-16BE)
    if (argCheck == 'ü‘') {
        return true;
    }
    // No.4913
    // ê‡ñæ:9fd5
    // 0x9fd5 (Windows-31J)
    // 0x6e6b (UTF-16BE)
    if (argCheck == 'ü’') {
        return true;
    }
    // No.4914
    // ê‡ñæ:9fd6
    // 0x9fd6 (Windows-31J)
    // 0x6e2b (UTF-16BE)
    if (argCheck == 'ü÷') {
        return true;
    }
    // No.4915
    // ê‡ñæ:9fd7
    // 0x9fd7 (Windows-31J)
    // 0x6e76 (UTF-16BE)
    if (argCheck == 'ü◊') {
        return true;
    }
    // No.4916
    // ê‡ñæ:9fd8
    // 0x9fd8 (Windows-31J)
    // 0x6e4d (UTF-16BE)
    if (argCheck == 'üÿ') {
        return true;
    }
    // No.4917
    // ê‡ñæ:9fd9
    // 0x9fd9 (Windows-31J)
    // 0x6e1f (UTF-16BE)
    if (argCheck == 'üŸ') {
        return true;
    }
    // No.4918
    // ê‡ñæ:9fda
    // 0x9fda (Windows-31J)
    // 0x6e43 (UTF-16BE)
    if (argCheck == 'ü⁄') {
        return true;
    }
    // No.4919
    // ê‡ñæ:9fdb
    // 0x9fdb (Windows-31J)
    // 0x6e3a (UTF-16BE)
    if (argCheck == 'ü€') {
        return true;
    }
    // No.4920
    // ê‡ñæ:9fdc
    // 0x9fdc (Windows-31J)
    // 0x6e4e (UTF-16BE)
    if (argCheck == 'ü‹') {
        return true;
    }
    // No.4921
    // ê‡ñæ:9fdd
    // 0x9fdd (Windows-31J)
    // 0x6e24 (UTF-16BE)
    if (argCheck == 'ü›') {
        return true;
    }
    // No.4922
    // ê‡ñæ:9fde
    // 0x9fde (Windows-31J)
    // 0x6eff (UTF-16BE)
    if (argCheck == 'üﬁ') {
        return true;
    }
    // No.4923
    // ê‡ñæ:9fdf
    // 0x9fdf (Windows-31J)
    // 0x6e1d (UTF-16BE)
    if (argCheck == 'üﬂ') {
        return true;
    }
    // No.4924
    // ê‡ñæ:9fe0
    // 0x9fe0 (Windows-31J)
    // 0x6e38 (UTF-16BE)
    if (argCheck == 'ü‡') {
        return true;
    }
    // No.4925
    // ê‡ñæ:9fe1
    // 0x9fe1 (Windows-31J)
    // 0x6e82 (UTF-16BE)
    if (argCheck == 'ü·') {
        return true;
    }
    // No.4926
    // ê‡ñæ:9fe2
    // 0x9fe2 (Windows-31J)
    // 0x6eaa (UTF-16BE)
    if (argCheck == 'ü‚') {
        return true;
    }
    // No.4927
    // ê‡ñæ:9fe3
    // 0x9fe3 (Windows-31J)
    // 0x6e98 (UTF-16BE)
    if (argCheck == 'ü„') {
        return true;
    }
    // No.4928
    // ê‡ñæ:9fe4
    // 0x9fe4 (Windows-31J)
    // 0x6ec9 (UTF-16BE)
    if (argCheck == 'ü‰') {
        return true;
    }
    // No.4929
    // ê‡ñæ:9fe5
    // 0x9fe5 (Windows-31J)
    // 0x6eb7 (UTF-16BE)
    if (argCheck == 'üÂ') {
        return true;
    }
    // No.4930
    // ê‡ñæ:9fe6
    // 0x9fe6 (Windows-31J)
    // 0x6ed3 (UTF-16BE)
    if (argCheck == 'üÊ') {
        return true;
    }
    // No.4931
    // ê‡ñæ:9fe7
    // 0x9fe7 (Windows-31J)
    // 0x6ebd (UTF-16BE)
    if (argCheck == 'üÁ') {
        return true;
    }
    // No.4932
    // ê‡ñæ:9fe8
    // 0x9fe8 (Windows-31J)
    // 0x6eaf (UTF-16BE)
    if (argCheck == 'üË') {
        return true;
    }
    // No.4933
    // ê‡ñæ:9fe9
    // 0x9fe9 (Windows-31J)
    // 0x6ec4 (UTF-16BE)
    if (argCheck == 'üÈ') {
        return true;
    }
    // No.4934
    // ê‡ñæ:9fea
    // 0x9fea (Windows-31J)
    // 0x6eb2 (UTF-16BE)
    if (argCheck == 'üÍ') {
        return true;
    }
    // No.4935
    // ê‡ñæ:9feb
    // 0x9feb (Windows-31J)
    // 0x6ed4 (UTF-16BE)
    if (argCheck == 'üÎ') {
        return true;
    }
    // No.4936
    // ê‡ñæ:9fec
    // 0x9fec (Windows-31J)
    // 0x6ed5 (UTF-16BE)
    if (argCheck == 'üÏ') {
        return true;
    }
    // No.4937
    // ê‡ñæ:9fed
    // 0x9fed (Windows-31J)
    // 0x6e8f (UTF-16BE)
    if (argCheck == 'üÌ') {
        return true;
    }
    // No.4938
    // ê‡ñæ:9fee
    // 0x9fee (Windows-31J)
    // 0x6ea5 (UTF-16BE)
    if (argCheck == 'üÓ') {
        return true;
    }
    // No.4939
    // ê‡ñæ:9fef
    // 0x9fef (Windows-31J)
    // 0x6ec2 (UTF-16BE)
    if (argCheck == 'üÔ') {
        return true;
    }
    // No.4940
    // ê‡ñæ:9ff0
    // 0x9ff0 (Windows-31J)
    // 0x6e9f (UTF-16BE)
    if (argCheck == 'ü') {
        return true;
    }
    // No.4941
    // ê‡ñæ:9ff1
    // 0x9ff1 (Windows-31J)
    // 0x6f41 (UTF-16BE)
    if (argCheck == 'üÒ') {
        return true;
    }
    // No.4942
    // ê‡ñæ:9ff2
    // 0x9ff2 (Windows-31J)
    // 0x6f11 (UTF-16BE)
    if (argCheck == 'üÚ') {
        return true;
    }
    // No.4943
    // ê‡ñæ:9ff3
    // 0x9ff3 (Windows-31J)
    // 0x704c (UTF-16BE)
    if (argCheck == 'üÛ') {
        return true;
    }
    // No.4944
    // ê‡ñæ:9ff4
    // 0x9ff4 (Windows-31J)
    // 0x6eec (UTF-16BE)
    if (argCheck == 'üÙ') {
        return true;
    }
    // No.4945
    // ê‡ñæ:9ff5
    // 0x9ff5 (Windows-31J)
    // 0x6ef8 (UTF-16BE)
    if (argCheck == 'üı') {
        return true;
    }
    // No.4946
    // ê‡ñæ:9ff6
    // 0x9ff6 (Windows-31J)
    // 0x6efe (UTF-16BE)
    if (argCheck == 'üˆ') {
        return true;
    }
    // No.4947
    // ê‡ñæ:9ff7
    // 0x9ff7 (Windows-31J)
    // 0x6f3f (UTF-16BE)
    if (argCheck == 'ü˜') {
        return true;
    }
    // No.4948
    // ê‡ñæ:9ff8
    // 0x9ff8 (Windows-31J)
    // 0x6ef2 (UTF-16BE)
    if (argCheck == 'ü¯') {
        return true;
    }
    // No.4949
    // ê‡ñæ:9ff9
    // 0x9ff9 (Windows-31J)
    // 0x6f31 (UTF-16BE)
    if (argCheck == 'ü˘') {
        return true;
    }
    // No.4950
    // ê‡ñæ:9ffa
    // 0x9ffa (Windows-31J)
    // 0x6eef (UTF-16BE)
    if (argCheck == 'ü˙') {
        return true;
    }
    // No.4951
    // ê‡ñæ:9ffb
    // 0x9ffb (Windows-31J)
    // 0x6f32 (UTF-16BE)
    if (argCheck == 'ü˚') {
        return true;
    }
    // No.4952
    // ê‡ñæ:9ffc
    // 0x9ffc (Windows-31J)
    // 0x6ecc (UTF-16BE)
    if (argCheck == 'ü¸') {
        return true;
    }
    // No.4956
    // ê‡ñæ:e040
    // 0xe040 (Windows-31J)
    // 0x6f3e (UTF-16BE)
    if (argCheck == '‡@') {
        return true;
    }
    // No.4957
    // ê‡ñæ:e041
    // 0xe041 (Windows-31J)
    // 0x6f13 (UTF-16BE)
    if (argCheck == '‡A') {
        return true;
    }
    // No.4958
    // ê‡ñæ:e042
    // 0xe042 (Windows-31J)
    // 0x6ef7 (UTF-16BE)
    if (argCheck == '‡B') {
        return true;
    }
    // No.4959
    // ê‡ñæ:e043
    // 0xe043 (Windows-31J)
    // 0x6f86 (UTF-16BE)
    if (argCheck == '‡C') {
        return true;
    }
    // No.4960
    // ê‡ñæ:e044
    // 0xe044 (Windows-31J)
    // 0x6f7a (UTF-16BE)
    if (argCheck == '‡D') {
        return true;
    }
    // No.4961
    // ê‡ñæ:e045
    // 0xe045 (Windows-31J)
    // 0x6f78 (UTF-16BE)
    if (argCheck == '‡E') {
        return true;
    }
    // No.4962
    // ê‡ñæ:e046
    // 0xe046 (Windows-31J)
    // 0x6f81 (UTF-16BE)
    if (argCheck == '‡F') {
        return true;
    }
    // No.4963
    // ê‡ñæ:e047
    // 0xe047 (Windows-31J)
    // 0x6f80 (UTF-16BE)
    if (argCheck == '‡G') {
        return true;
    }
    // No.4964
    // ê‡ñæ:e048
    // 0xe048 (Windows-31J)
    // 0x6f6f (UTF-16BE)
    if (argCheck == '‡H') {
        return true;
    }
    // No.4965
    // ê‡ñæ:e049
    // 0xe049 (Windows-31J)
    // 0x6f5b (UTF-16BE)
    if (argCheck == '‡I') {
        return true;
    }
    // No.4966
    // ê‡ñæ:e04a
    // 0xe04a (Windows-31J)
    // 0x6ff3 (UTF-16BE)
    if (argCheck == '‡J') {
        return true;
    }
    // No.4967
    // ê‡ñæ:e04b
    // 0xe04b (Windows-31J)
    // 0x6f6d (UTF-16BE)
    if (argCheck == '‡K') {
        return true;
    }
    // No.4968
    // ê‡ñæ:e04c
    // 0xe04c (Windows-31J)
    // 0x6f82 (UTF-16BE)
    if (argCheck == '‡L') {
        return true;
    }
    // No.4969
    // ê‡ñæ:e04d
    // 0xe04d (Windows-31J)
    // 0x6f7c (UTF-16BE)
    if (argCheck == '‡M') {
        return true;
    }
    // No.4970
    // ê‡ñæ:e04e
    // 0xe04e (Windows-31J)
    // 0x6f58 (UTF-16BE)
    if (argCheck == '‡N') {
        return true;
    }
    // No.4971
    // ê‡ñæ:e04f
    // 0xe04f (Windows-31J)
    // 0x6f8e (UTF-16BE)
    if (argCheck == '‡O') {
        return true;
    }
    // No.4972
    // ê‡ñæ:e050
    // 0xe050 (Windows-31J)
    // 0x6f91 (UTF-16BE)
    if (argCheck == '‡P') {
        return true;
    }
    // No.4973
    // ê‡ñæ:e051
    // 0xe051 (Windows-31J)
    // 0x6fc2 (UTF-16BE)
    if (argCheck == '‡Q') {
        return true;
    }
    // No.4974
    // ê‡ñæ:e052
    // 0xe052 (Windows-31J)
    // 0x6f66 (UTF-16BE)
    if (argCheck == '‡R') {
        return true;
    }
    // No.4975
    // ê‡ñæ:e053
    // 0xe053 (Windows-31J)
    // 0x6fb3 (UTF-16BE)
    if (argCheck == '‡S') {
        return true;
    }
    // No.4976
    // ê‡ñæ:e054
    // 0xe054 (Windows-31J)
    // 0x6fa3 (UTF-16BE)
    if (argCheck == '‡T') {
        return true;
    }
    // No.4977
    // ê‡ñæ:e055
    // 0xe055 (Windows-31J)
    // 0x6fa1 (UTF-16BE)
    if (argCheck == '‡U') {
        return true;
    }
    // No.4978
    // ê‡ñæ:e056
    // 0xe056 (Windows-31J)
    // 0x6fa4 (UTF-16BE)
    if (argCheck == '‡V') {
        return true;
    }
    // No.4979
    // ê‡ñæ:e057
    // 0xe057 (Windows-31J)
    // 0x6fb9 (UTF-16BE)
    if (argCheck == '‡W') {
        return true;
    }
    // No.4980
    // ê‡ñæ:e058
    // 0xe058 (Windows-31J)
    // 0x6fc6 (UTF-16BE)
    if (argCheck == '‡X') {
        return true;
    }
    // No.4981
    // ê‡ñæ:e059
    // 0xe059 (Windows-31J)
    // 0x6faa (UTF-16BE)
    if (argCheck == '‡Y') {
        return true;
    }
    // No.4982
    // ê‡ñæ:e05a
    // 0xe05a (Windows-31J)
    // 0x6fdf (UTF-16BE)
    if (argCheck == '‡Z') {
        return true;
    }
    // No.4983
    // ê‡ñæ:e05b
    // 0xe05b (Windows-31J)
    // 0x6fd5 (UTF-16BE)
    if (argCheck == '‡[') {
        return true;
    }
    // No.4984
    // ê‡ñæ:e05c
    // 0xe05c (Windows-31J)
    // 0x6fec (UTF-16BE)
    if (argCheck == '‡\') {
        return true;
    }
    // No.4985
    // ê‡ñæ:e05d
    // 0xe05d (Windows-31J)
    // 0x6fd4 (UTF-16BE)
    if (argCheck == '‡]') {
        return true;
    }
    // No.4986
    // ê‡ñæ:e05e
    // 0xe05e (Windows-31J)
    // 0x6fd8 (UTF-16BE)
    if (argCheck == '‡^') {
        return true;
    }
    // No.4987
    // ê‡ñæ:e05f
    // 0xe05f (Windows-31J)
    // 0x6ff1 (UTF-16BE)
    if (argCheck == '‡_') {
        return true;
    }
    // No.4988
    // ê‡ñæ:e060
    // 0xe060 (Windows-31J)
    // 0x6fee (UTF-16BE)
    if (argCheck == '‡`') {
        return true;
    }
    // No.4989
    // ê‡ñæ:e061
    // 0xe061 (Windows-31J)
    // 0x6fdb (UTF-16BE)
    if (argCheck == '‡a') {
        return true;
    }
    // No.4990
    // ê‡ñæ:e062
    // 0xe062 (Windows-31J)
    // 0x7009 (UTF-16BE)
    if (argCheck == '‡b') {
        return true;
    }
    // No.4991
    // ê‡ñæ:e063
    // 0xe063 (Windows-31J)
    // 0x700b (UTF-16BE)
    if (argCheck == '‡c') {
        return true;
    }
    // No.4992
    // ê‡ñæ:e064
    // 0xe064 (Windows-31J)
    // 0x6ffa (UTF-16BE)
    if (argCheck == '‡d') {
        return true;
    }
    // No.4993
    // ê‡ñæ:e065
    // 0xe065 (Windows-31J)
    // 0x7011 (UTF-16BE)
    if (argCheck == '‡e') {
        return true;
    }
    // No.4994
    // ê‡ñæ:e066
    // 0xe066 (Windows-31J)
    // 0x7001 (UTF-16BE)
    if (argCheck == '‡f') {
        return true;
    }
    // No.4995
    // ê‡ñæ:e067
    // 0xe067 (Windows-31J)
    // 0x700f (UTF-16BE)
    if (argCheck == '‡g') {
        return true;
    }
    // No.4996
    // ê‡ñæ:e068
    // 0xe068 (Windows-31J)
    // 0x6ffe (UTF-16BE)
    if (argCheck == '‡h') {
        return true;
    }
    // No.4997
    // ê‡ñæ:e069
    // 0xe069 (Windows-31J)
    // 0x701b (UTF-16BE)
    if (argCheck == '‡i') {
        return true;
    }
    // No.4998
    // ê‡ñæ:e06a
    // 0xe06a (Windows-31J)
    // 0x701a (UTF-16BE)
    if (argCheck == '‡j') {
        return true;
    }
    // No.4999
    // ê‡ñæ:e06b
    // 0xe06b (Windows-31J)
    // 0x6f74 (UTF-16BE)
    if (argCheck == '‡k') {
        return true;
    }
    // No.5000
    // ê‡ñæ:e06c
    // 0xe06c (Windows-31J)
    // 0x701d (UTF-16BE)
    if (argCheck == '‡l') {
        return true;
    }
    // No.5001
    // ê‡ñæ:e06d
    // 0xe06d (Windows-31J)
    // 0x7018 (UTF-16BE)
    if (argCheck == '‡m') {
        return true;
    }
    // No.5002
    // ê‡ñæ:e06e
    // 0xe06e (Windows-31J)
    // 0x701f (UTF-16BE)
    if (argCheck == '‡n') {
        return true;
    }
    // No.5003
    // ê‡ñæ:e06f
    // 0xe06f (Windows-31J)
    // 0x7030 (UTF-16BE)
    if (argCheck == '‡o') {
        return true;
    }
    // No.5004
    // ê‡ñæ:e070
    // 0xe070 (Windows-31J)
    // 0x703e (UTF-16BE)
    if (argCheck == '‡p') {
        return true;
    }
    // No.5005
    // ê‡ñæ:e071
    // 0xe071 (Windows-31J)
    // 0x7032 (UTF-16BE)
    if (argCheck == '‡q') {
        return true;
    }
    // No.5006
    // ê‡ñæ:e072
    // 0xe072 (Windows-31J)
    // 0x7051 (UTF-16BE)
    if (argCheck == '‡r') {
        return true;
    }
    // No.5007
    // ê‡ñæ:e073
    // 0xe073 (Windows-31J)
    // 0x7063 (UTF-16BE)
    if (argCheck == '‡s') {
        return true;
    }
    // No.5008
    // ê‡ñæ:e074
    // 0xe074 (Windows-31J)
    // 0x7099 (UTF-16BE)
    if (argCheck == '‡t') {
        return true;
    }
    // No.5009
    // ê‡ñæ:e075
    // 0xe075 (Windows-31J)
    // 0x7092 (UTF-16BE)
    if (argCheck == '‡u') {
        return true;
    }
    // No.5010
    // ê‡ñæ:e076
    // 0xe076 (Windows-31J)
    // 0x70af (UTF-16BE)
    if (argCheck == '‡v') {
        return true;
    }
    // No.5011
    // ê‡ñæ:e077
    // 0xe077 (Windows-31J)
    // 0x70f1 (UTF-16BE)
    if (argCheck == '‡w') {
        return true;
    }
    // No.5012
    // ê‡ñæ:e078
    // 0xe078 (Windows-31J)
    // 0x70ac (UTF-16BE)
    if (argCheck == '‡x') {
        return true;
    }
    // No.5013
    // ê‡ñæ:e079
    // 0xe079 (Windows-31J)
    // 0x70b8 (UTF-16BE)
    if (argCheck == '‡y') {
        return true;
    }
    // No.5014
    // ê‡ñæ:e07a
    // 0xe07a (Windows-31J)
    // 0x70b3 (UTF-16BE)
    if (argCheck == '‡z') {
        return true;
    }
    // No.5015
    // ê‡ñæ:e07b
    // 0xe07b (Windows-31J)
    // 0x70ae (UTF-16BE)
    if (argCheck == '‡{') {
        return true;
    }
    // No.5016
    // ê‡ñæ:e07c
    // 0xe07c (Windows-31J)
    // 0x70df (UTF-16BE)
    if (argCheck == '‡|') {
        return true;
    }
    // No.5017
    // ê‡ñæ:e07d
    // 0xe07d (Windows-31J)
    // 0x70cb (UTF-16BE)
    if (argCheck == '‡}') {
        return true;
    }
    // No.5018
    // ê‡ñæ:e07e
    // 0xe07e (Windows-31J)
    // 0x70dd (UTF-16BE)
    if (argCheck == '‡~') {
        return true;
    }
    // No.5019
    // ê‡ñæ:e080
    // 0xe080 (Windows-31J)
    // 0x70d9 (UTF-16BE)
    if (argCheck == '‡Ä') {
        return true;
    }
    // No.5020
    // ê‡ñæ:e081
    // 0xe081 (Windows-31J)
    // 0x7109 (UTF-16BE)
    if (argCheck == '‡Å') {
        return true;
    }
    // No.5021
    // ê‡ñæ:e082
    // 0xe082 (Windows-31J)
    // 0x70fd (UTF-16BE)
    if (argCheck == '‡Ç') {
        return true;
    }
    // No.5022
    // ê‡ñæ:e083
    // 0xe083 (Windows-31J)
    // 0x711c (UTF-16BE)
    if (argCheck == '‡É') {
        return true;
    }
    // No.5023
    // ê‡ñæ:e084
    // 0xe084 (Windows-31J)
    // 0x7119 (UTF-16BE)
    if (argCheck == '‡Ñ') {
        return true;
    }
    // No.5024
    // ê‡ñæ:e085
    // 0xe085 (Windows-31J)
    // 0x7165 (UTF-16BE)
    if (argCheck == '‡Ö') {
        return true;
    }
    // No.5025
    // ê‡ñæ:e086
    // 0xe086 (Windows-31J)
    // 0x7155 (UTF-16BE)
    if (argCheck == '‡Ü') {
        return true;
    }
    // No.5026
    // ê‡ñæ:e087
    // 0xe087 (Windows-31J)
    // 0x7188 (UTF-16BE)
    if (argCheck == '‡á') {
        return true;
    }
    // No.5027
    // ê‡ñæ:e088
    // 0xe088 (Windows-31J)
    // 0x7166 (UTF-16BE)
    if (argCheck == '‡à') {
        return true;
    }
    // No.5028
    // ê‡ñæ:e089
    // 0xe089 (Windows-31J)
    // 0x7162 (UTF-16BE)
    if (argCheck == '‡â') {
        return true;
    }
    // No.5029
    // ê‡ñæ:e08a
    // 0xe08a (Windows-31J)
    // 0x714c (UTF-16BE)
    if (argCheck == '‡ä') {
        return true;
    }
    // No.5030
    // ê‡ñæ:e08b
    // 0xe08b (Windows-31J)
    // 0x7156 (UTF-16BE)
    if (argCheck == '‡ã') {
        return true;
    }
    // No.5031
    // ê‡ñæ:e08c
    // 0xe08c (Windows-31J)
    // 0x716c (UTF-16BE)
    if (argCheck == '‡å') {
        return true;
    }
    // No.5032
    // ê‡ñæ:e08d
    // 0xe08d (Windows-31J)
    // 0x718f (UTF-16BE)
    if (argCheck == '‡ç') {
        return true;
    }
    // No.5033
    // ê‡ñæ:e08e
    // 0xe08e (Windows-31J)
    // 0x71fb (UTF-16BE)
    if (argCheck == '‡é') {
        return true;
    }
    // No.5034
    // ê‡ñæ:e08f
    // 0xe08f (Windows-31J)
    // 0x7184 (UTF-16BE)
    if (argCheck == '‡è') {
        return true;
    }
    // No.5035
    // ê‡ñæ:e090
    // 0xe090 (Windows-31J)
    // 0x7195 (UTF-16BE)
    if (argCheck == '‡ê') {
        return true;
    }
    // No.5036
    // ê‡ñæ:e091
    // 0xe091 (Windows-31J)
    // 0x71a8 (UTF-16BE)
    if (argCheck == '‡ë') {
        return true;
    }
    // No.5037
    // ê‡ñæ:e092
    // 0xe092 (Windows-31J)
    // 0x71ac (UTF-16BE)
    if (argCheck == '‡í') {
        return true;
    }
    // No.5038
    // ê‡ñæ:e093
    // 0xe093 (Windows-31J)
    // 0x71d7 (UTF-16BE)
    if (argCheck == '‡ì') {
        return true;
    }
    // No.5039
    // ê‡ñæ:e094
    // 0xe094 (Windows-31J)
    // 0x71b9 (UTF-16BE)
    if (argCheck == '‡î') {
        return true;
    }
    // No.5040
    // ê‡ñæ:e095
    // 0xe095 (Windows-31J)
    // 0x71be (UTF-16BE)
    if (argCheck == '‡ï') {
        return true;
    }
    // No.5041
    // ê‡ñæ:e096
    // 0xe096 (Windows-31J)
    // 0x71d2 (UTF-16BE)
    if (argCheck == '‡ñ') {
        return true;
    }
    // No.5042
    // ê‡ñæ:e097
    // 0xe097 (Windows-31J)
    // 0x71c9 (UTF-16BE)
    if (argCheck == '‡ó') {
        return true;
    }
    // No.5043
    // ê‡ñæ:e098
    // 0xe098 (Windows-31J)
    // 0x71d4 (UTF-16BE)
    if (argCheck == '‡ò') {
        return true;
    }
    // No.5044
    // ê‡ñæ:e099
    // 0xe099 (Windows-31J)
    // 0x71ce (UTF-16BE)
    if (argCheck == '‡ô') {
        return true;
    }
    // No.5045
    // ê‡ñæ:e09a
    // 0xe09a (Windows-31J)
    // 0x71e0 (UTF-16BE)
    if (argCheck == '‡ö') {
        return true;
    }
    // No.5046
    // ê‡ñæ:e09b
    // 0xe09b (Windows-31J)
    // 0x71ec (UTF-16BE)
    if (argCheck == '‡õ') {
        return true;
    }
    // No.5047
    // ê‡ñæ:e09c
    // 0xe09c (Windows-31J)
    // 0x71e7 (UTF-16BE)
    if (argCheck == '‡ú') {
        return true;
    }
    // No.5048
    // ê‡ñæ:e09d
    // 0xe09d (Windows-31J)
    // 0x71f5 (UTF-16BE)
    if (argCheck == '‡ù') {
        return true;
    }
    // No.5049
    // ê‡ñæ:e09e
    // 0xe09e (Windows-31J)
    // 0x71fc (UTF-16BE)
    if (argCheck == '‡û') {
        return true;
    }
    // No.5050
    // ê‡ñæ:e09f
    // 0xe09f (Windows-31J)
    // 0x71f9 (UTF-16BE)
    if (argCheck == '‡ü') {
        return true;
    }
    // No.5051
    // ê‡ñæ:e0a0
    // 0xe0a0 (Windows-31J)
    // 0x71ff (UTF-16BE)
    if (argCheck == '‡†') {
        return true;
    }
    // No.5052
    // ê‡ñæ:e0a1
    // 0xe0a1 (Windows-31J)
    // 0x720d (UTF-16BE)
    if (argCheck == '‡°') {
        return true;
    }
    // No.5053
    // ê‡ñæ:e0a2
    // 0xe0a2 (Windows-31J)
    // 0x7210 (UTF-16BE)
    if (argCheck == '‡¢') {
        return true;
    }
    // No.5054
    // ê‡ñæ:e0a3
    // 0xe0a3 (Windows-31J)
    // 0x721b (UTF-16BE)
    if (argCheck == '‡£') {
        return true;
    }
    // No.5055
    // ê‡ñæ:e0a4
    // 0xe0a4 (Windows-31J)
    // 0x7228 (UTF-16BE)
    if (argCheck == '‡§') {
        return true;
    }
    // No.5056
    // ê‡ñæ:e0a5
    // 0xe0a5 (Windows-31J)
    // 0x722d (UTF-16BE)
    if (argCheck == '‡•') {
        return true;
    }
    // No.5057
    // ê‡ñæ:e0a6
    // 0xe0a6 (Windows-31J)
    // 0x722c (UTF-16BE)
    if (argCheck == '‡¶') {
        return true;
    }
    // No.5058
    // ê‡ñæ:e0a7
    // 0xe0a7 (Windows-31J)
    // 0x7230 (UTF-16BE)
    if (argCheck == '‡ß') {
        return true;
    }
    // No.5059
    // ê‡ñæ:e0a8
    // 0xe0a8 (Windows-31J)
    // 0x7232 (UTF-16BE)
    if (argCheck == '‡®') {
        return true;
    }
    // No.5060
    // ê‡ñæ:e0a9
    // 0xe0a9 (Windows-31J)
    // 0x723b (UTF-16BE)
    if (argCheck == '‡©') {
        return true;
    }
    // No.5061
    // ê‡ñæ:e0aa
    // 0xe0aa (Windows-31J)
    // 0x723c (UTF-16BE)
    if (argCheck == '‡™') {
        return true;
    }
    // No.5062
    // ê‡ñæ:e0ab
    // 0xe0ab (Windows-31J)
    // 0x723f (UTF-16BE)
    if (argCheck == '‡´') {
        return true;
    }
    // No.5063
    // ê‡ñæ:e0ac
    // 0xe0ac (Windows-31J)
    // 0x7240 (UTF-16BE)
    if (argCheck == '‡¨') {
        return true;
    }
    // No.5064
    // ê‡ñæ:e0ad
    // 0xe0ad (Windows-31J)
    // 0x7246 (UTF-16BE)
    if (argCheck == '‡≠') {
        return true;
    }
    // No.5065
    // ê‡ñæ:e0ae
    // 0xe0ae (Windows-31J)
    // 0x724b (UTF-16BE)
    if (argCheck == '‡Æ') {
        return true;
    }
    // No.5066
    // ê‡ñæ:e0af
    // 0xe0af (Windows-31J)
    // 0x7258 (UTF-16BE)
    if (argCheck == '‡Ø') {
        return true;
    }
    // No.5067
    // ê‡ñæ:e0b0
    // 0xe0b0 (Windows-31J)
    // 0x7274 (UTF-16BE)
    if (argCheck == '‡∞') {
        return true;
    }
    // No.5068
    // ê‡ñæ:e0b1
    // 0xe0b1 (Windows-31J)
    // 0x727e (UTF-16BE)
    if (argCheck == '‡±') {
        return true;
    }
    // No.5069
    // ê‡ñæ:e0b2
    // 0xe0b2 (Windows-31J)
    // 0x7282 (UTF-16BE)
    if (argCheck == '‡≤') {
        return true;
    }
    // No.5070
    // ê‡ñæ:e0b3
    // 0xe0b3 (Windows-31J)
    // 0x7281 (UTF-16BE)
    if (argCheck == '‡≥') {
        return true;
    }
    // No.5071
    // ê‡ñæ:e0b4
    // 0xe0b4 (Windows-31J)
    // 0x7287 (UTF-16BE)
    if (argCheck == '‡¥') {
        return true;
    }
    // No.5072
    // ê‡ñæ:e0b5
    // 0xe0b5 (Windows-31J)
    // 0x7292 (UTF-16BE)
    if (argCheck == '‡µ') {
        return true;
    }
    // No.5073
    // ê‡ñæ:e0b6
    // 0xe0b6 (Windows-31J)
    // 0x7296 (UTF-16BE)
    if (argCheck == '‡∂') {
        return true;
    }
    // No.5074
    // ê‡ñæ:e0b7
    // 0xe0b7 (Windows-31J)
    // 0x72a2 (UTF-16BE)
    if (argCheck == '‡∑') {
        return true;
    }
    // No.5075
    // ê‡ñæ:e0b8
    // 0xe0b8 (Windows-31J)
    // 0x72a7 (UTF-16BE)
    if (argCheck == '‡∏') {
        return true;
    }
    // No.5076
    // ê‡ñæ:e0b9
    // 0xe0b9 (Windows-31J)
    // 0x72b9 (UTF-16BE)
    if (argCheck == '‡π') {
        return true;
    }
    // No.5077
    // ê‡ñæ:e0ba
    // 0xe0ba (Windows-31J)
    // 0x72b2 (UTF-16BE)
    if (argCheck == '‡∫') {
        return true;
    }
    // No.5078
    // ê‡ñæ:e0bb
    // 0xe0bb (Windows-31J)
    // 0x72c3 (UTF-16BE)
    if (argCheck == '‡ª') {
        return true;
    }
    // No.5079
    // ê‡ñæ:e0bc
    // 0xe0bc (Windows-31J)
    // 0x72c6 (UTF-16BE)
    if (argCheck == '‡º') {
        return true;
    }
    // No.5080
    // ê‡ñæ:e0bd
    // 0xe0bd (Windows-31J)
    // 0x72c4 (UTF-16BE)
    if (argCheck == '‡Ω') {
        return true;
    }
    // No.5081
    // ê‡ñæ:e0be
    // 0xe0be (Windows-31J)
    // 0x72ce (UTF-16BE)
    if (argCheck == '‡æ') {
        return true;
    }
    // No.5082
    // ê‡ñæ:e0bf
    // 0xe0bf (Windows-31J)
    // 0x72d2 (UTF-16BE)
    if (argCheck == '‡ø') {
        return true;
    }
    // No.5083
    // ê‡ñæ:e0c0
    // 0xe0c0 (Windows-31J)
    // 0x72e2 (UTF-16BE)
    if (argCheck == '‡¿') {
        return true;
    }
    // No.5084
    // ê‡ñæ:e0c1
    // 0xe0c1 (Windows-31J)
    // 0x72e0 (UTF-16BE)
    if (argCheck == '‡¡') {
        return true;
    }
    // No.5085
    // ê‡ñæ:e0c2
    // 0xe0c2 (Windows-31J)
    // 0x72e1 (UTF-16BE)
    if (argCheck == '‡¬') {
        return true;
    }
    // No.5086
    // ê‡ñæ:e0c3
    // 0xe0c3 (Windows-31J)
    // 0x72f9 (UTF-16BE)
    if (argCheck == '‡√') {
        return true;
    }
    // No.5087
    // ê‡ñæ:e0c4
    // 0xe0c4 (Windows-31J)
    // 0x72f7 (UTF-16BE)
    if (argCheck == '‡ƒ') {
        return true;
    }
    // No.5088
    // ê‡ñæ:e0c5
    // 0xe0c5 (Windows-31J)
    // 0x500f (UTF-16BE)
    if (argCheck == '‡≈') {
        return true;
    }
    // No.5089
    // ê‡ñæ:e0c6
    // 0xe0c6 (Windows-31J)
    // 0x7317 (UTF-16BE)
    if (argCheck == '‡∆') {
        return true;
    }
    // No.5090
    // ê‡ñæ:e0c7
    // 0xe0c7 (Windows-31J)
    // 0x730a (UTF-16BE)
    if (argCheck == '‡«') {
        return true;
    }
    // No.5091
    // ê‡ñæ:e0c8
    // 0xe0c8 (Windows-31J)
    // 0x731c (UTF-16BE)
    if (argCheck == '‡»') {
        return true;
    }
    // No.5092
    // ê‡ñæ:e0c9
    // 0xe0c9 (Windows-31J)
    // 0x7316 (UTF-16BE)
    if (argCheck == '‡…') {
        return true;
    }
    // No.5093
    // ê‡ñæ:e0ca
    // 0xe0ca (Windows-31J)
    // 0x731d (UTF-16BE)
    if (argCheck == '‡ ') {
        return true;
    }
    // No.5094
    // ê‡ñæ:e0cb
    // 0xe0cb (Windows-31J)
    // 0x7334 (UTF-16BE)
    if (argCheck == '‡À') {
        return true;
    }
    // No.5095
    // ê‡ñæ:e0cc
    // 0xe0cc (Windows-31J)
    // 0x732f (UTF-16BE)
    if (argCheck == '‡Ã') {
        return true;
    }
    // No.5096
    // ê‡ñæ:e0cd
    // 0xe0cd (Windows-31J)
    // 0x7329 (UTF-16BE)
    if (argCheck == '‡Õ') {
        return true;
    }
    // No.5097
    // ê‡ñæ:e0ce
    // 0xe0ce (Windows-31J)
    // 0x7325 (UTF-16BE)
    if (argCheck == '‡Œ') {
        return true;
    }
    // No.5098
    // ê‡ñæ:e0cf
    // 0xe0cf (Windows-31J)
    // 0x733e (UTF-16BE)
    if (argCheck == '‡œ') {
        return true;
    }
    // No.5099
    // ê‡ñæ:e0d0
    // 0xe0d0 (Windows-31J)
    // 0x734e (UTF-16BE)
    if (argCheck == '‡–') {
        return true;
    }
    // No.5100
    // ê‡ñæ:e0d1
    // 0xe0d1 (Windows-31J)
    // 0x734f (UTF-16BE)
    if (argCheck == '‡—') {
        return true;
    }
    // No.5101
    // ê‡ñæ:e0d2
    // 0xe0d2 (Windows-31J)
    // 0x9ed8 (UTF-16BE)
    if (argCheck == '‡“') {
        return true;
    }
    // No.5102
    // ê‡ñæ:e0d3
    // 0xe0d3 (Windows-31J)
    // 0x7357 (UTF-16BE)
    if (argCheck == '‡”') {
        return true;
    }
    // No.5103
    // ê‡ñæ:e0d4
    // 0xe0d4 (Windows-31J)
    // 0x736a (UTF-16BE)
    if (argCheck == '‡‘') {
        return true;
    }
    // No.5104
    // ê‡ñæ:e0d5
    // 0xe0d5 (Windows-31J)
    // 0x7368 (UTF-16BE)
    if (argCheck == '‡’') {
        return true;
    }
    // No.5105
    // ê‡ñæ:e0d6
    // 0xe0d6 (Windows-31J)
    // 0x7370 (UTF-16BE)
    if (argCheck == '‡÷') {
        return true;
    }
    // No.5106
    // ê‡ñæ:e0d7
    // 0xe0d7 (Windows-31J)
    // 0x7378 (UTF-16BE)
    if (argCheck == '‡◊') {
        return true;
    }
    // No.5107
    // ê‡ñæ:e0d8
    // 0xe0d8 (Windows-31J)
    // 0x7375 (UTF-16BE)
    if (argCheck == '‡ÿ') {
        return true;
    }
    // No.5108
    // ê‡ñæ:e0d9
    // 0xe0d9 (Windows-31J)
    // 0x737b (UTF-16BE)
    if (argCheck == '‡Ÿ') {
        return true;
    }
    // No.5109
    // ê‡ñæ:e0da
    // 0xe0da (Windows-31J)
    // 0x737a (UTF-16BE)
    if (argCheck == '‡⁄') {
        return true;
    }
    // No.5110
    // ê‡ñæ:e0db
    // 0xe0db (Windows-31J)
    // 0x73c8 (UTF-16BE)
    if (argCheck == '‡€') {
        return true;
    }
    // No.5111
    // ê‡ñæ:e0dc
    // 0xe0dc (Windows-31J)
    // 0x73b3 (UTF-16BE)
    if (argCheck == '‡‹') {
        return true;
    }
    // No.5112
    // ê‡ñæ:e0dd
    // 0xe0dd (Windows-31J)
    // 0x73ce (UTF-16BE)
    if (argCheck == '‡›') {
        return true;
    }
    // No.5113
    // ê‡ñæ:e0de
    // 0xe0de (Windows-31J)
    // 0x73bb (UTF-16BE)
    if (argCheck == '‡ﬁ') {
        return true;
    }
    // No.5114
    // ê‡ñæ:e0df
    // 0xe0df (Windows-31J)
    // 0x73c0 (UTF-16BE)
    if (argCheck == '‡ﬂ') {
        return true;
    }
    // No.5115
    // ê‡ñæ:e0e0
    // 0xe0e0 (Windows-31J)
    // 0x73e5 (UTF-16BE)
    if (argCheck == '‡‡') {
        return true;
    }
    // No.5116
    // ê‡ñæ:e0e1
    // 0xe0e1 (Windows-31J)
    // 0x73ee (UTF-16BE)
    if (argCheck == '‡·') {
        return true;
    }
    // No.5117
    // ê‡ñæ:e0e2
    // 0xe0e2 (Windows-31J)
    // 0x73de (UTF-16BE)
    if (argCheck == '‡‚') {
        return true;
    }
    // No.5118
    // ê‡ñæ:e0e3
    // 0xe0e3 (Windows-31J)
    // 0x74a2 (UTF-16BE)
    if (argCheck == '‡„') {
        return true;
    }
    // No.5119
    // ê‡ñæ:e0e4
    // 0xe0e4 (Windows-31J)
    // 0x7405 (UTF-16BE)
    if (argCheck == '‡‰') {
        return true;
    }
    // No.5120
    // ê‡ñæ:e0e5
    // 0xe0e5 (Windows-31J)
    // 0x746f (UTF-16BE)
    if (argCheck == '‡Â') {
        return true;
    }
    // No.5121
    // ê‡ñæ:e0e6
    // 0xe0e6 (Windows-31J)
    // 0x7425 (UTF-16BE)
    if (argCheck == '‡Ê') {
        return true;
    }
    // No.5122
    // ê‡ñæ:e0e7
    // 0xe0e7 (Windows-31J)
    // 0x73f8 (UTF-16BE)
    if (argCheck == '‡Á') {
        return true;
    }
    // No.5123
    // ê‡ñæ:e0e8
    // 0xe0e8 (Windows-31J)
    // 0x7432 (UTF-16BE)
    if (argCheck == '‡Ë') {
        return true;
    }
    // No.5124
    // ê‡ñæ:e0e9
    // 0xe0e9 (Windows-31J)
    // 0x743a (UTF-16BE)
    if (argCheck == '‡È') {
        return true;
    }
    // No.5125
    // ê‡ñæ:e0ea
    // 0xe0ea (Windows-31J)
    // 0x7455 (UTF-16BE)
    if (argCheck == '‡Í') {
        return true;
    }
    // No.5126
    // ê‡ñæ:e0eb
    // 0xe0eb (Windows-31J)
    // 0x743f (UTF-16BE)
    if (argCheck == '‡Î') {
        return true;
    }
    // No.5127
    // ê‡ñæ:e0ec
    // 0xe0ec (Windows-31J)
    // 0x745f (UTF-16BE)
    if (argCheck == '‡Ï') {
        return true;
    }
    // No.5128
    // ê‡ñæ:e0ed
    // 0xe0ed (Windows-31J)
    // 0x7459 (UTF-16BE)
    if (argCheck == '‡Ì') {
        return true;
    }
    // No.5129
    // ê‡ñæ:e0ee
    // 0xe0ee (Windows-31J)
    // 0x7441 (UTF-16BE)
    if (argCheck == '‡Ó') {
        return true;
    }
    // No.5130
    // ê‡ñæ:e0ef
    // 0xe0ef (Windows-31J)
    // 0x745c (UTF-16BE)
    if (argCheck == '‡Ô') {
        return true;
    }
    // No.5131
    // ê‡ñæ:e0f0
    // 0xe0f0 (Windows-31J)
    // 0x7469 (UTF-16BE)
    if (argCheck == '‡') {
        return true;
    }
    // No.5132
    // ê‡ñæ:e0f1
    // 0xe0f1 (Windows-31J)
    // 0x7470 (UTF-16BE)
    if (argCheck == '‡Ò') {
        return true;
    }
    // No.5133
    // ê‡ñæ:e0f2
    // 0xe0f2 (Windows-31J)
    // 0x7463 (UTF-16BE)
    if (argCheck == '‡Ú') {
        return true;
    }
    // No.5134
    // ê‡ñæ:e0f3
    // 0xe0f3 (Windows-31J)
    // 0x746a (UTF-16BE)
    if (argCheck == '‡Û') {
        return true;
    }
    // No.5135
    // ê‡ñæ:e0f4
    // 0xe0f4 (Windows-31J)
    // 0x7476 (UTF-16BE)
    if (argCheck == '‡Ù') {
        return true;
    }
    // No.5136
    // ê‡ñæ:e0f5
    // 0xe0f5 (Windows-31J)
    // 0x747e (UTF-16BE)
    if (argCheck == '‡ı') {
        return true;
    }
    // No.5137
    // ê‡ñæ:e0f6
    // 0xe0f6 (Windows-31J)
    // 0x748b (UTF-16BE)
    if (argCheck == '‡ˆ') {
        return true;
    }
    // No.5138
    // ê‡ñæ:e0f7
    // 0xe0f7 (Windows-31J)
    // 0x749e (UTF-16BE)
    if (argCheck == '‡˜') {
        return true;
    }
    // No.5139
    // ê‡ñæ:e0f8
    // 0xe0f8 (Windows-31J)
    // 0x74a7 (UTF-16BE)
    if (argCheck == '‡¯') {
        return true;
    }
    // No.5140
    // ê‡ñæ:e0f9
    // 0xe0f9 (Windows-31J)
    // 0x74ca (UTF-16BE)
    if (argCheck == '‡˘') {
        return true;
    }
    // No.5141
    // ê‡ñæ:e0fa
    // 0xe0fa (Windows-31J)
    // 0x74cf (UTF-16BE)
    if (argCheck == '‡˙') {
        return true;
    }
    // No.5142
    // ê‡ñæ:e0fb
    // 0xe0fb (Windows-31J)
    // 0x74d4 (UTF-16BE)
    if (argCheck == '‡˚') {
        return true;
    }
    // No.5143
    // ê‡ñæ:e0fc
    // 0xe0fc (Windows-31J)
    // 0x73f1 (UTF-16BE)
    if (argCheck == '‡¸') {
        return true;
    }
    // No.5144
    // ê‡ñæ:e140
    // 0xe140 (Windows-31J)
    // 0x74e0 (UTF-16BE)
    if (argCheck == '·@') {
        return true;
    }
    // No.5145
    // ê‡ñæ:e141
    // 0xe141 (Windows-31J)
    // 0x74e3 (UTF-16BE)
    if (argCheck == '·A') {
        return true;
    }
    // No.5146
    // ê‡ñæ:e142
    // 0xe142 (Windows-31J)
    // 0x74e7 (UTF-16BE)
    if (argCheck == '·B') {
        return true;
    }
    // No.5147
    // ê‡ñæ:e143
    // 0xe143 (Windows-31J)
    // 0x74e9 (UTF-16BE)
    if (argCheck == '·C') {
        return true;
    }
    // No.5148
    // ê‡ñæ:e144
    // 0xe144 (Windows-31J)
    // 0x74ee (UTF-16BE)
    if (argCheck == '·D') {
        return true;
    }
    // No.5149
    // ê‡ñæ:e145
    // 0xe145 (Windows-31J)
    // 0x74f2 (UTF-16BE)
    if (argCheck == '·E') {
        return true;
    }
    // No.5150
    // ê‡ñæ:e146
    // 0xe146 (Windows-31J)
    // 0x74f0 (UTF-16BE)
    if (argCheck == '·F') {
        return true;
    }
    // No.5151
    // ê‡ñæ:e147
    // 0xe147 (Windows-31J)
    // 0x74f1 (UTF-16BE)
    if (argCheck == '·G') {
        return true;
    }
    // No.5152
    // ê‡ñæ:e148
    // 0xe148 (Windows-31J)
    // 0x74f8 (UTF-16BE)
    if (argCheck == '·H') {
        return true;
    }
    // No.5153
    // ê‡ñæ:e149
    // 0xe149 (Windows-31J)
    // 0x74f7 (UTF-16BE)
    if (argCheck == '·I') {
        return true;
    }
    // No.5154
    // ê‡ñæ:e14a
    // 0xe14a (Windows-31J)
    // 0x7504 (UTF-16BE)
    if (argCheck == '·J') {
        return true;
    }
    // No.5155
    // ê‡ñæ:e14b
    // 0xe14b (Windows-31J)
    // 0x7503 (UTF-16BE)
    if (argCheck == '·K') {
        return true;
    }
    // No.5156
    // ê‡ñæ:e14c
    // 0xe14c (Windows-31J)
    // 0x7505 (UTF-16BE)
    if (argCheck == '·L') {
        return true;
    }
    // No.5157
    // ê‡ñæ:e14d
    // 0xe14d (Windows-31J)
    // 0x750c (UTF-16BE)
    if (argCheck == '·M') {
        return true;
    }
    // No.5158
    // ê‡ñæ:e14e
    // 0xe14e (Windows-31J)
    // 0x750e (UTF-16BE)
    if (argCheck == '·N') {
        return true;
    }
    // No.5159
    // ê‡ñæ:e14f
    // 0xe14f (Windows-31J)
    // 0x750d (UTF-16BE)
    if (argCheck == '·O') {
        return true;
    }
    // No.5160
    // ê‡ñæ:e150
    // 0xe150 (Windows-31J)
    // 0x7515 (UTF-16BE)
    if (argCheck == '·P') {
        return true;
    }
    // No.5161
    // ê‡ñæ:e151
    // 0xe151 (Windows-31J)
    // 0x7513 (UTF-16BE)
    if (argCheck == '·Q') {
        return true;
    }
    // No.5162
    // ê‡ñæ:e152
    // 0xe152 (Windows-31J)
    // 0x751e (UTF-16BE)
    if (argCheck == '·R') {
        return true;
    }
    // No.5163
    // ê‡ñæ:e153
    // 0xe153 (Windows-31J)
    // 0x7526 (UTF-16BE)
    if (argCheck == '·S') {
        return true;
    }
    // No.5164
    // ê‡ñæ:e154
    // 0xe154 (Windows-31J)
    // 0x752c (UTF-16BE)
    if (argCheck == '·T') {
        return true;
    }
    // No.5165
    // ê‡ñæ:e155
    // 0xe155 (Windows-31J)
    // 0x753c (UTF-16BE)
    if (argCheck == '·U') {
        return true;
    }
    // No.5166
    // ê‡ñæ:e156
    // 0xe156 (Windows-31J)
    // 0x7544 (UTF-16BE)
    if (argCheck == '·V') {
        return true;
    }
    // No.5167
    // ê‡ñæ:e157
    // 0xe157 (Windows-31J)
    // 0x754d (UTF-16BE)
    if (argCheck == '·W') {
        return true;
    }
    // No.5168
    // ê‡ñæ:e158
    // 0xe158 (Windows-31J)
    // 0x754a (UTF-16BE)
    if (argCheck == '·X') {
        return true;
    }
    // No.5169
    // ê‡ñæ:e159
    // 0xe159 (Windows-31J)
    // 0x7549 (UTF-16BE)
    if (argCheck == '·Y') {
        return true;
    }
    // No.5170
    // ê‡ñæ:e15a
    // 0xe15a (Windows-31J)
    // 0x755b (UTF-16BE)
    if (argCheck == '·Z') {
        return true;
    }
    // No.5171
    // ê‡ñæ:e15b
    // 0xe15b (Windows-31J)
    // 0x7546 (UTF-16BE)
    if (argCheck == '·[') {
        return true;
    }
    // No.5172
    // ê‡ñæ:e15c
    // 0xe15c (Windows-31J)
    // 0x755a (UTF-16BE)
    if (argCheck == '·\') {
        return true;
    }
    // No.5173
    // ê‡ñæ:e15d
    // 0xe15d (Windows-31J)
    // 0x7569 (UTF-16BE)
    if (argCheck == '·]') {
        return true;
    }
    // No.5174
    // ê‡ñæ:e15e
    // 0xe15e (Windows-31J)
    // 0x7564 (UTF-16BE)
    if (argCheck == '·^') {
        return true;
    }
    // No.5175
    // ê‡ñæ:e15f
    // 0xe15f (Windows-31J)
    // 0x7567 (UTF-16BE)
    if (argCheck == '·_') {
        return true;
    }
    // No.5176
    // ê‡ñæ:e160
    // 0xe160 (Windows-31J)
    // 0x756b (UTF-16BE)
    if (argCheck == '·`') {
        return true;
    }
    // No.5177
    // ê‡ñæ:e161
    // 0xe161 (Windows-31J)
    // 0x756d (UTF-16BE)
    if (argCheck == '·a') {
        return true;
    }
    // No.5178
    // ê‡ñæ:e162
    // 0xe162 (Windows-31J)
    // 0x7578 (UTF-16BE)
    if (argCheck == '·b') {
        return true;
    }
    // No.5179
    // ê‡ñæ:e163
    // 0xe163 (Windows-31J)
    // 0x7576 (UTF-16BE)
    if (argCheck == '·c') {
        return true;
    }
    // No.5180
    // ê‡ñæ:e164
    // 0xe164 (Windows-31J)
    // 0x7586 (UTF-16BE)
    if (argCheck == '·d') {
        return true;
    }
    // No.5181
    // ê‡ñæ:e165
    // 0xe165 (Windows-31J)
    // 0x7587 (UTF-16BE)
    if (argCheck == '·e') {
        return true;
    }
    // No.5182
    // ê‡ñæ:e166
    // 0xe166 (Windows-31J)
    // 0x7574 (UTF-16BE)
    if (argCheck == '·f') {
        return true;
    }
    // No.5183
    // ê‡ñæ:e167
    // 0xe167 (Windows-31J)
    // 0x758a (UTF-16BE)
    if (argCheck == '·g') {
        return true;
    }
    // No.5184
    // ê‡ñæ:e168
    // 0xe168 (Windows-31J)
    // 0x7589 (UTF-16BE)
    if (argCheck == '·h') {
        return true;
    }
    // No.5185
    // ê‡ñæ:e169
    // 0xe169 (Windows-31J)
    // 0x7582 (UTF-16BE)
    if (argCheck == '·i') {
        return true;
    }
    // No.5186
    // ê‡ñæ:e16a
    // 0xe16a (Windows-31J)
    // 0x7594 (UTF-16BE)
    if (argCheck == '·j') {
        return true;
    }
    // No.5187
    // ê‡ñæ:e16b
    // 0xe16b (Windows-31J)
    // 0x759a (UTF-16BE)
    if (argCheck == '·k') {
        return true;
    }
    // No.5188
    // ê‡ñæ:e16c
    // 0xe16c (Windows-31J)
    // 0x759d (UTF-16BE)
    if (argCheck == '·l') {
        return true;
    }
    // No.5189
    // ê‡ñæ:e16d
    // 0xe16d (Windows-31J)
    // 0x75a5 (UTF-16BE)
    if (argCheck == '·m') {
        return true;
    }
    // No.5190
    // ê‡ñæ:e16e
    // 0xe16e (Windows-31J)
    // 0x75a3 (UTF-16BE)
    if (argCheck == '·n') {
        return true;
    }
    // No.5191
    // ê‡ñæ:e16f
    // 0xe16f (Windows-31J)
    // 0x75c2 (UTF-16BE)
    if (argCheck == '·o') {
        return true;
    }
    // No.5192
    // ê‡ñæ:e170
    // 0xe170 (Windows-31J)
    // 0x75b3 (UTF-16BE)
    if (argCheck == '·p') {
        return true;
    }
    // No.5193
    // ê‡ñæ:e171
    // 0xe171 (Windows-31J)
    // 0x75c3 (UTF-16BE)
    if (argCheck == '·q') {
        return true;
    }
    // No.5194
    // ê‡ñæ:e172
    // 0xe172 (Windows-31J)
    // 0x75b5 (UTF-16BE)
    if (argCheck == '·r') {
        return true;
    }
    // No.5195
    // ê‡ñæ:e173
    // 0xe173 (Windows-31J)
    // 0x75bd (UTF-16BE)
    if (argCheck == '·s') {
        return true;
    }
    // No.5196
    // ê‡ñæ:e174
    // 0xe174 (Windows-31J)
    // 0x75b8 (UTF-16BE)
    if (argCheck == '·t') {
        return true;
    }
    // No.5197
    // ê‡ñæ:e175
    // 0xe175 (Windows-31J)
    // 0x75bc (UTF-16BE)
    if (argCheck == '·u') {
        return true;
    }
    // No.5198
    // ê‡ñæ:e176
    // 0xe176 (Windows-31J)
    // 0x75b1 (UTF-16BE)
    if (argCheck == '·v') {
        return true;
    }
    // No.5199
    // ê‡ñæ:e177
    // 0xe177 (Windows-31J)
    // 0x75cd (UTF-16BE)
    if (argCheck == '·w') {
        return true;
    }
    // No.5200
    // ê‡ñæ:e178
    // 0xe178 (Windows-31J)
    // 0x75ca (UTF-16BE)
    if (argCheck == '·x') {
        return true;
    }
    // No.5201
    // ê‡ñæ:e179
    // 0xe179 (Windows-31J)
    // 0x75d2 (UTF-16BE)
    if (argCheck == '·y') {
        return true;
    }
    // No.5202
    // ê‡ñæ:e17a
    // 0xe17a (Windows-31J)
    // 0x75d9 (UTF-16BE)
    if (argCheck == '·z') {
        return true;
    }
    // No.5203
    // ê‡ñæ:e17b
    // 0xe17b (Windows-31J)
    // 0x75e3 (UTF-16BE)
    if (argCheck == '·{') {
        return true;
    }
    // No.5204
    // ê‡ñæ:e17c
    // 0xe17c (Windows-31J)
    // 0x75de (UTF-16BE)
    if (argCheck == '·|') {
        return true;
    }
    // No.5205
    // ê‡ñæ:e17d
    // 0xe17d (Windows-31J)
    // 0x75fe (UTF-16BE)
    if (argCheck == '·}') {
        return true;
    }
    // No.5206
    // ê‡ñæ:e17e
    // 0xe17e (Windows-31J)
    // 0x75ff (UTF-16BE)
    if (argCheck == '·~') {
        return true;
    }
    // No.5207
    // ê‡ñæ:e180
    // 0xe180 (Windows-31J)
    // 0x75fc (UTF-16BE)
    if (argCheck == '·Ä') {
        return true;
    }
    // No.5208
    // ê‡ñæ:e181
    // 0xe181 (Windows-31J)
    // 0x7601 (UTF-16BE)
    if (argCheck == '·Å') {
        return true;
    }
    // No.5209
    // ê‡ñæ:e182
    // 0xe182 (Windows-31J)
    // 0x75f0 (UTF-16BE)
    if (argCheck == '·Ç') {
        return true;
    }
    // No.5210
    // ê‡ñæ:e183
    // 0xe183 (Windows-31J)
    // 0x75fa (UTF-16BE)
    if (argCheck == '·É') {
        return true;
    }
    // No.5211
    // ê‡ñæ:e184
    // 0xe184 (Windows-31J)
    // 0x75f2 (UTF-16BE)
    if (argCheck == '·Ñ') {
        return true;
    }
    // No.5212
    // ê‡ñæ:e185
    // 0xe185 (Windows-31J)
    // 0x75f3 (UTF-16BE)
    if (argCheck == '·Ö') {
        return true;
    }
    // No.5213
    // ê‡ñæ:e186
    // 0xe186 (Windows-31J)
    // 0x760b (UTF-16BE)
    if (argCheck == '·Ü') {
        return true;
    }
    // No.5214
    // ê‡ñæ:e187
    // 0xe187 (Windows-31J)
    // 0x760d (UTF-16BE)
    if (argCheck == '·á') {
        return true;
    }
    // No.5215
    // ê‡ñæ:e188
    // 0xe188 (Windows-31J)
    // 0x7609 (UTF-16BE)
    if (argCheck == '·à') {
        return true;
    }
    // No.5216
    // ê‡ñæ:e189
    // 0xe189 (Windows-31J)
    // 0x761f (UTF-16BE)
    if (argCheck == '·â') {
        return true;
    }
    // No.5217
    // ê‡ñæ:e18a
    // 0xe18a (Windows-31J)
    // 0x7627 (UTF-16BE)
    if (argCheck == '·ä') {
        return true;
    }
    // No.5218
    // ê‡ñæ:e18b
    // 0xe18b (Windows-31J)
    // 0x7620 (UTF-16BE)
    if (argCheck == '·ã') {
        return true;
    }
    // No.5219
    // ê‡ñæ:e18c
    // 0xe18c (Windows-31J)
    // 0x7621 (UTF-16BE)
    if (argCheck == '·å') {
        return true;
    }
    // No.5220
    // ê‡ñæ:e18d
    // 0xe18d (Windows-31J)
    // 0x7622 (UTF-16BE)
    if (argCheck == '·ç') {
        return true;
    }
    // No.5221
    // ê‡ñæ:e18e
    // 0xe18e (Windows-31J)
    // 0x7624 (UTF-16BE)
    if (argCheck == '·é') {
        return true;
    }
    // No.5222
    // ê‡ñæ:e18f
    // 0xe18f (Windows-31J)
    // 0x7634 (UTF-16BE)
    if (argCheck == '·è') {
        return true;
    }
    // No.5223
    // ê‡ñæ:e190
    // 0xe190 (Windows-31J)
    // 0x7630 (UTF-16BE)
    if (argCheck == '·ê') {
        return true;
    }
    // No.5224
    // ê‡ñæ:e191
    // 0xe191 (Windows-31J)
    // 0x763b (UTF-16BE)
    if (argCheck == '·ë') {
        return true;
    }
    // No.5225
    // ê‡ñæ:e192
    // 0xe192 (Windows-31J)
    // 0x7647 (UTF-16BE)
    if (argCheck == '·í') {
        return true;
    }
    // No.5226
    // ê‡ñæ:e193
    // 0xe193 (Windows-31J)
    // 0x7648 (UTF-16BE)
    if (argCheck == '·ì') {
        return true;
    }
    // No.5227
    // ê‡ñæ:e194
    // 0xe194 (Windows-31J)
    // 0x7646 (UTF-16BE)
    if (argCheck == '·î') {
        return true;
    }
    // No.5228
    // ê‡ñæ:e195
    // 0xe195 (Windows-31J)
    // 0x765c (UTF-16BE)
    if (argCheck == '·ï') {
        return true;
    }
    // No.5229
    // ê‡ñæ:e196
    // 0xe196 (Windows-31J)
    // 0x7658 (UTF-16BE)
    if (argCheck == '·ñ') {
        return true;
    }
    // No.5230
    // ê‡ñæ:e197
    // 0xe197 (Windows-31J)
    // 0x7661 (UTF-16BE)
    if (argCheck == '·ó') {
        return true;
    }
    // No.5231
    // ê‡ñæ:e198
    // 0xe198 (Windows-31J)
    // 0x7662 (UTF-16BE)
    if (argCheck == '·ò') {
        return true;
    }
    // No.5232
    // ê‡ñæ:e199
    // 0xe199 (Windows-31J)
    // 0x7668 (UTF-16BE)
    if (argCheck == '·ô') {
        return true;
    }
    // No.5233
    // ê‡ñæ:e19a
    // 0xe19a (Windows-31J)
    // 0x7669 (UTF-16BE)
    if (argCheck == '·ö') {
        return true;
    }
    // No.5234
    // ê‡ñæ:e19b
    // 0xe19b (Windows-31J)
    // 0x766a (UTF-16BE)
    if (argCheck == '·õ') {
        return true;
    }
    // No.5235
    // ê‡ñæ:e19c
    // 0xe19c (Windows-31J)
    // 0x7667 (UTF-16BE)
    if (argCheck == '·ú') {
        return true;
    }
    // No.5236
    // ê‡ñæ:e19d
    // 0xe19d (Windows-31J)
    // 0x766c (UTF-16BE)
    if (argCheck == '·ù') {
        return true;
    }
    // No.5237
    // ê‡ñæ:e19e
    // 0xe19e (Windows-31J)
    // 0x7670 (UTF-16BE)
    if (argCheck == '·û') {
        return true;
    }
    // No.5238
    // ê‡ñæ:e19f
    // 0xe19f (Windows-31J)
    // 0x7672 (UTF-16BE)
    if (argCheck == '·ü') {
        return true;
    }
    // No.5239
    // ê‡ñæ:e1a0
    // 0xe1a0 (Windows-31J)
    // 0x7676 (UTF-16BE)
    if (argCheck == '·†') {
        return true;
    }
    // No.5240
    // ê‡ñæ:e1a1
    // 0xe1a1 (Windows-31J)
    // 0x7678 (UTF-16BE)
    if (argCheck == '·°') {
        return true;
    }
    // No.5241
    // ê‡ñæ:e1a2
    // 0xe1a2 (Windows-31J)
    // 0x767c (UTF-16BE)
    if (argCheck == '·¢') {
        return true;
    }
    // No.5242
    // ê‡ñæ:e1a3
    // 0xe1a3 (Windows-31J)
    // 0x7680 (UTF-16BE)
    if (argCheck == '·£') {
        return true;
    }
    // No.5243
    // ê‡ñæ:e1a4
    // 0xe1a4 (Windows-31J)
    // 0x7683 (UTF-16BE)
    if (argCheck == '·§') {
        return true;
    }
    // No.5244
    // ê‡ñæ:e1a5
    // 0xe1a5 (Windows-31J)
    // 0x7688 (UTF-16BE)
    if (argCheck == '·•') {
        return true;
    }
    // No.5245
    // ê‡ñæ:e1a6
    // 0xe1a6 (Windows-31J)
    // 0x768b (UTF-16BE)
    if (argCheck == '·¶') {
        return true;
    }
    // No.5246
    // ê‡ñæ:e1a7
    // 0xe1a7 (Windows-31J)
    // 0x768e (UTF-16BE)
    if (argCheck == '·ß') {
        return true;
    }
    // No.5247
    // ê‡ñæ:e1a8
    // 0xe1a8 (Windows-31J)
    // 0x7696 (UTF-16BE)
    if (argCheck == '·®') {
        return true;
    }
    // No.5248
    // ê‡ñæ:e1a9
    // 0xe1a9 (Windows-31J)
    // 0x7693 (UTF-16BE)
    if (argCheck == '·©') {
        return true;
    }
    // No.5249
    // ê‡ñæ:e1aa
    // 0xe1aa (Windows-31J)
    // 0x7699 (UTF-16BE)
    if (argCheck == '·™') {
        return true;
    }
    // No.5250
    // ê‡ñæ:e1ab
    // 0xe1ab (Windows-31J)
    // 0x769a (UTF-16BE)
    if (argCheck == '·´') {
        return true;
    }
    // No.5251
    // ê‡ñæ:e1ac
    // 0xe1ac (Windows-31J)
    // 0x76b0 (UTF-16BE)
    if (argCheck == '·¨') {
        return true;
    }
    // No.5252
    // ê‡ñæ:e1ad
    // 0xe1ad (Windows-31J)
    // 0x76b4 (UTF-16BE)
    if (argCheck == '·≠') {
        return true;
    }
    // No.5253
    // ê‡ñæ:e1ae
    // 0xe1ae (Windows-31J)
    // 0x76b8 (UTF-16BE)
    if (argCheck == '·Æ') {
        return true;
    }
    // No.5254
    // ê‡ñæ:e1af
    // 0xe1af (Windows-31J)
    // 0x76b9 (UTF-16BE)
    if (argCheck == '·Ø') {
        return true;
    }
    // No.5255
    // ê‡ñæ:e1b0
    // 0xe1b0 (Windows-31J)
    // 0x76ba (UTF-16BE)
    if (argCheck == '·∞') {
        return true;
    }
    // No.5256
    // ê‡ñæ:e1b1
    // 0xe1b1 (Windows-31J)
    // 0x76c2 (UTF-16BE)
    if (argCheck == '·±') {
        return true;
    }
    // No.5257
    // ê‡ñæ:e1b2
    // 0xe1b2 (Windows-31J)
    // 0x76cd (UTF-16BE)
    if (argCheck == '·≤') {
        return true;
    }
    // No.5258
    // ê‡ñæ:e1b3
    // 0xe1b3 (Windows-31J)
    // 0x76d6 (UTF-16BE)
    if (argCheck == '·≥') {
        return true;
    }
    // No.5259
    // ê‡ñæ:e1b4
    // 0xe1b4 (Windows-31J)
    // 0x76d2 (UTF-16BE)
    if (argCheck == '·¥') {
        return true;
    }
    // No.5260
    // ê‡ñæ:e1b5
    // 0xe1b5 (Windows-31J)
    // 0x76de (UTF-16BE)
    if (argCheck == '·µ') {
        return true;
    }
    // No.5261
    // ê‡ñæ:e1b6
    // 0xe1b6 (Windows-31J)
    // 0x76e1 (UTF-16BE)
    if (argCheck == '·∂') {
        return true;
    }
    // No.5262
    // ê‡ñæ:e1b7
    // 0xe1b7 (Windows-31J)
    // 0x76e5 (UTF-16BE)
    if (argCheck == '·∑') {
        return true;
    }
    // No.5263
    // ê‡ñæ:e1b8
    // 0xe1b8 (Windows-31J)
    // 0x76e7 (UTF-16BE)
    if (argCheck == '·∏') {
        return true;
    }
    // No.5264
    // ê‡ñæ:e1b9
    // 0xe1b9 (Windows-31J)
    // 0x76ea (UTF-16BE)
    if (argCheck == '·π') {
        return true;
    }
    // No.5265
    // ê‡ñæ:e1ba
    // 0xe1ba (Windows-31J)
    // 0x862f (UTF-16BE)
    if (argCheck == '·∫') {
        return true;
    }
    // No.5266
    // ê‡ñæ:e1bb
    // 0xe1bb (Windows-31J)
    // 0x76fb (UTF-16BE)
    if (argCheck == '·ª') {
        return true;
    }
    // No.5267
    // ê‡ñæ:e1bc
    // 0xe1bc (Windows-31J)
    // 0x7708 (UTF-16BE)
    if (argCheck == '·º') {
        return true;
    }
    // No.5268
    // ê‡ñæ:e1bd
    // 0xe1bd (Windows-31J)
    // 0x7707 (UTF-16BE)
    if (argCheck == '·Ω') {
        return true;
    }
    // No.5269
    // ê‡ñæ:e1be
    // 0xe1be (Windows-31J)
    // 0x7704 (UTF-16BE)
    if (argCheck == '·æ') {
        return true;
    }
    // No.5270
    // ê‡ñæ:e1bf
    // 0xe1bf (Windows-31J)
    // 0x7729 (UTF-16BE)
    if (argCheck == '·ø') {
        return true;
    }
    // No.5271
    // ê‡ñæ:e1c0
    // 0xe1c0 (Windows-31J)
    // 0x7724 (UTF-16BE)
    if (argCheck == '·¿') {
        return true;
    }
    // No.5272
    // ê‡ñæ:e1c1
    // 0xe1c1 (Windows-31J)
    // 0x771e (UTF-16BE)
    if (argCheck == '·¡') {
        return true;
    }
    // No.5273
    // ê‡ñæ:e1c2
    // 0xe1c2 (Windows-31J)
    // 0x7725 (UTF-16BE)
    if (argCheck == '·¬') {
        return true;
    }
    // No.5274
    // ê‡ñæ:e1c3
    // 0xe1c3 (Windows-31J)
    // 0x7726 (UTF-16BE)
    if (argCheck == '·√') {
        return true;
    }
    // No.5275
    // ê‡ñæ:e1c4
    // 0xe1c4 (Windows-31J)
    // 0x771b (UTF-16BE)
    if (argCheck == '·ƒ') {
        return true;
    }
    // No.5276
    // ê‡ñæ:e1c5
    // 0xe1c5 (Windows-31J)
    // 0x7737 (UTF-16BE)
    if (argCheck == '·≈') {
        return true;
    }
    // No.5277
    // ê‡ñæ:e1c6
    // 0xe1c6 (Windows-31J)
    // 0x7738 (UTF-16BE)
    if (argCheck == '·∆') {
        return true;
    }
    // No.5278
    // ê‡ñæ:e1c7
    // 0xe1c7 (Windows-31J)
    // 0x7747 (UTF-16BE)
    if (argCheck == '·«') {
        return true;
    }
    // No.5279
    // ê‡ñæ:e1c8
    // 0xe1c8 (Windows-31J)
    // 0x775a (UTF-16BE)
    if (argCheck == '·»') {
        return true;
    }
    // No.5280
    // ê‡ñæ:e1c9
    // 0xe1c9 (Windows-31J)
    // 0x7768 (UTF-16BE)
    if (argCheck == '·…') {
        return true;
    }
    // No.5281
    // ê‡ñæ:e1ca
    // 0xe1ca (Windows-31J)
    // 0x776b (UTF-16BE)
    if (argCheck == '· ') {
        return true;
    }
    // No.5282
    // ê‡ñæ:e1cb
    // 0xe1cb (Windows-31J)
    // 0x775b (UTF-16BE)
    if (argCheck == '·À') {
        return true;
    }
    // No.5283
    // ê‡ñæ:e1cc
    // 0xe1cc (Windows-31J)
    // 0x7765 (UTF-16BE)
    if (argCheck == '·Ã') {
        return true;
    }
    // No.5284
    // ê‡ñæ:e1cd
    // 0xe1cd (Windows-31J)
    // 0x777f (UTF-16BE)
    if (argCheck == '·Õ') {
        return true;
    }
    // No.5285
    // ê‡ñæ:e1ce
    // 0xe1ce (Windows-31J)
    // 0x777e (UTF-16BE)
    if (argCheck == '·Œ') {
        return true;
    }
    // No.5286
    // ê‡ñæ:e1cf
    // 0xe1cf (Windows-31J)
    // 0x7779 (UTF-16BE)
    if (argCheck == '·œ') {
        return true;
    }
    // No.5287
    // ê‡ñæ:e1d0
    // 0xe1d0 (Windows-31J)
    // 0x778e (UTF-16BE)
    if (argCheck == '·–') {
        return true;
    }
    // No.5288
    // ê‡ñæ:e1d1
    // 0xe1d1 (Windows-31J)
    // 0x778b (UTF-16BE)
    if (argCheck == '·—') {
        return true;
    }
    // No.5289
    // ê‡ñæ:e1d2
    // 0xe1d2 (Windows-31J)
    // 0x7791 (UTF-16BE)
    if (argCheck == '·“') {
        return true;
    }
    // No.5290
    // ê‡ñæ:e1d3
    // 0xe1d3 (Windows-31J)
    // 0x77a0 (UTF-16BE)
    if (argCheck == '·”') {
        return true;
    }
    // No.5291
    // ê‡ñæ:e1d4
    // 0xe1d4 (Windows-31J)
    // 0x779e (UTF-16BE)
    if (argCheck == '·‘') {
        return true;
    }
    // No.5292
    // ê‡ñæ:e1d5
    // 0xe1d5 (Windows-31J)
    // 0x77b0 (UTF-16BE)
    if (argCheck == '·’') {
        return true;
    }
    // No.5293
    // ê‡ñæ:e1d6
    // 0xe1d6 (Windows-31J)
    // 0x77b6 (UTF-16BE)
    if (argCheck == '·÷') {
        return true;
    }
    // No.5294
    // ê‡ñæ:e1d7
    // 0xe1d7 (Windows-31J)
    // 0x77b9 (UTF-16BE)
    if (argCheck == '·◊') {
        return true;
    }
    // No.5295
    // ê‡ñæ:e1d8
    // 0xe1d8 (Windows-31J)
    // 0x77bf (UTF-16BE)
    if (argCheck == '·ÿ') {
        return true;
    }
    // No.5296
    // ê‡ñæ:e1d9
    // 0xe1d9 (Windows-31J)
    // 0x77bc (UTF-16BE)
    if (argCheck == '·Ÿ') {
        return true;
    }
    // No.5297
    // ê‡ñæ:e1da
    // 0xe1da (Windows-31J)
    // 0x77bd (UTF-16BE)
    if (argCheck == '·⁄') {
        return true;
    }
    // No.5298
    // ê‡ñæ:e1db
    // 0xe1db (Windows-31J)
    // 0x77bb (UTF-16BE)
    if (argCheck == '·€') {
        return true;
    }
    // No.5299
    // ê‡ñæ:e1dc
    // 0xe1dc (Windows-31J)
    // 0x77c7 (UTF-16BE)
    if (argCheck == '·‹') {
        return true;
    }
    // No.5300
    // ê‡ñæ:e1dd
    // 0xe1dd (Windows-31J)
    // 0x77cd (UTF-16BE)
    if (argCheck == '·›') {
        return true;
    }
    // No.5301
    // ê‡ñæ:e1de
    // 0xe1de (Windows-31J)
    // 0x77d7 (UTF-16BE)
    if (argCheck == '·ﬁ') {
        return true;
    }
    // No.5302
    // ê‡ñæ:e1df
    // 0xe1df (Windows-31J)
    // 0x77da (UTF-16BE)
    if (argCheck == '·ﬂ') {
        return true;
    }
    // No.5303
    // ê‡ñæ:e1e0
    // 0xe1e0 (Windows-31J)
    // 0x77dc (UTF-16BE)
    if (argCheck == '·‡') {
        return true;
    }
    // No.5304
    // ê‡ñæ:e1e1
    // 0xe1e1 (Windows-31J)
    // 0x77e3 (UTF-16BE)
    if (argCheck == '··') {
        return true;
    }
    // No.5305
    // ê‡ñæ:e1e2
    // 0xe1e2 (Windows-31J)
    // 0x77ee (UTF-16BE)
    if (argCheck == '·‚') {
        return true;
    }
    // No.5306
    // ê‡ñæ:e1e3
    // 0xe1e3 (Windows-31J)
    // 0x77fc (UTF-16BE)
    if (argCheck == '·„') {
        return true;
    }
    // No.5307
    // ê‡ñæ:e1e4
    // 0xe1e4 (Windows-31J)
    // 0x780c (UTF-16BE)
    if (argCheck == '·‰') {
        return true;
    }
    // No.5308
    // ê‡ñæ:e1e5
    // 0xe1e5 (Windows-31J)
    // 0x7812 (UTF-16BE)
    if (argCheck == '·Â') {
        return true;
    }
    // No.5309
    // ê‡ñæ:e1e6
    // 0xe1e6 (Windows-31J)
    // 0x7926 (UTF-16BE)
    if (argCheck == '·Ê') {
        return true;
    }
    // No.5310
    // ê‡ñæ:e1e7
    // 0xe1e7 (Windows-31J)
    // 0x7820 (UTF-16BE)
    if (argCheck == '·Á') {
        return true;
    }
    // No.5311
    // ê‡ñæ:e1e8
    // 0xe1e8 (Windows-31J)
    // 0x792a (UTF-16BE)
    if (argCheck == '·Ë') {
        return true;
    }
    // No.5312
    // ê‡ñæ:e1e9
    // 0xe1e9 (Windows-31J)
    // 0x7845 (UTF-16BE)
    if (argCheck == '·È') {
        return true;
    }
    // No.5313
    // ê‡ñæ:e1ea
    // 0xe1ea (Windows-31J)
    // 0x788e (UTF-16BE)
    if (argCheck == '·Í') {
        return true;
    }
    // No.5314
    // ê‡ñæ:e1eb
    // 0xe1eb (Windows-31J)
    // 0x7874 (UTF-16BE)
    if (argCheck == '·Î') {
        return true;
    }
    // No.5315
    // ê‡ñæ:e1ec
    // 0xe1ec (Windows-31J)
    // 0x7886 (UTF-16BE)
    if (argCheck == '·Ï') {
        return true;
    }
    // No.5316
    // ê‡ñæ:e1ed
    // 0xe1ed (Windows-31J)
    // 0x787c (UTF-16BE)
    if (argCheck == '·Ì') {
        return true;
    }
    // No.5317
    // ê‡ñæ:e1ee
    // 0xe1ee (Windows-31J)
    // 0x789a (UTF-16BE)
    if (argCheck == '·Ó') {
        return true;
    }
    // No.5318
    // ê‡ñæ:e1ef
    // 0xe1ef (Windows-31J)
    // 0x788c (UTF-16BE)
    if (argCheck == '·Ô') {
        return true;
    }
    // No.5319
    // ê‡ñæ:e1f0
    // 0xe1f0 (Windows-31J)
    // 0x78a3 (UTF-16BE)
    if (argCheck == '·') {
        return true;
    }
    // No.5320
    // ê‡ñæ:e1f1
    // 0xe1f1 (Windows-31J)
    // 0x78b5 (UTF-16BE)
    if (argCheck == '·Ò') {
        return true;
    }
    // No.5321
    // ê‡ñæ:e1f2
    // 0xe1f2 (Windows-31J)
    // 0x78aa (UTF-16BE)
    if (argCheck == '·Ú') {
        return true;
    }
    // No.5322
    // ê‡ñæ:e1f3
    // 0xe1f3 (Windows-31J)
    // 0x78af (UTF-16BE)
    if (argCheck == '·Û') {
        return true;
    }
    // No.5323
    // ê‡ñæ:e1f4
    // 0xe1f4 (Windows-31J)
    // 0x78d1 (UTF-16BE)
    if (argCheck == '·Ù') {
        return true;
    }
    // No.5324
    // ê‡ñæ:e1f5
    // 0xe1f5 (Windows-31J)
    // 0x78c6 (UTF-16BE)
    if (argCheck == '·ı') {
        return true;
    }
    // No.5325
    // ê‡ñæ:e1f6
    // 0xe1f6 (Windows-31J)
    // 0x78cb (UTF-16BE)
    if (argCheck == '·ˆ') {
        return true;
    }
    // No.5326
    // ê‡ñæ:e1f7
    // 0xe1f7 (Windows-31J)
    // 0x78d4 (UTF-16BE)
    if (argCheck == '·˜') {
        return true;
    }
    // No.5327
    // ê‡ñæ:e1f8
    // 0xe1f8 (Windows-31J)
    // 0x78be (UTF-16BE)
    if (argCheck == '·¯') {
        return true;
    }
    // No.5328
    // ê‡ñæ:e1f9
    // 0xe1f9 (Windows-31J)
    // 0x78bc (UTF-16BE)
    if (argCheck == '·˘') {
        return true;
    }
    // No.5329
    // ê‡ñæ:e1fa
    // 0xe1fa (Windows-31J)
    // 0x78c5 (UTF-16BE)
    if (argCheck == '·˙') {
        return true;
    }
    // No.5330
    // ê‡ñæ:e1fb
    // 0xe1fb (Windows-31J)
    // 0x78ca (UTF-16BE)
    if (argCheck == '·˚') {
        return true;
    }
    // No.5331
    // ê‡ñæ:e1fc
    // 0xe1fc (Windows-31J)
    // 0x78ec (UTF-16BE)
    if (argCheck == '·¸') {
        return true;
    }
    // No.5332
    // ê‡ñæ:e240
    // 0xe240 (Windows-31J)
    // 0x78e7 (UTF-16BE)
    if (argCheck == '‚@') {
        return true;
    }
    // No.5333
    // ê‡ñæ:e241
    // 0xe241 (Windows-31J)
    // 0x78da (UTF-16BE)
    if (argCheck == '‚A') {
        return true;
    }
    // No.5334
    // ê‡ñæ:e242
    // 0xe242 (Windows-31J)
    // 0x78fd (UTF-16BE)
    if (argCheck == '‚B') {
        return true;
    }
    // No.5335
    // ê‡ñæ:e243
    // 0xe243 (Windows-31J)
    // 0x78f4 (UTF-16BE)
    if (argCheck == '‚C') {
        return true;
    }
    // No.5336
    // ê‡ñæ:e244
    // 0xe244 (Windows-31J)
    // 0x7907 (UTF-16BE)
    if (argCheck == '‚D') {
        return true;
    }
    // No.5337
    // ê‡ñæ:e245
    // 0xe245 (Windows-31J)
    // 0x7912 (UTF-16BE)
    if (argCheck == '‚E') {
        return true;
    }
    // No.5338
    // ê‡ñæ:e246
    // 0xe246 (Windows-31J)
    // 0x7911 (UTF-16BE)
    if (argCheck == '‚F') {
        return true;
    }
    // No.5339
    // ê‡ñæ:e247
    // 0xe247 (Windows-31J)
    // 0x7919 (UTF-16BE)
    if (argCheck == '‚G') {
        return true;
    }
    // No.5340
    // ê‡ñæ:e248
    // 0xe248 (Windows-31J)
    // 0x792c (UTF-16BE)
    if (argCheck == '‚H') {
        return true;
    }
    // No.5341
    // ê‡ñæ:e249
    // 0xe249 (Windows-31J)
    // 0x792b (UTF-16BE)
    if (argCheck == '‚I') {
        return true;
    }
    // No.5342
    // ê‡ñæ:e24a
    // 0xe24a (Windows-31J)
    // 0x7940 (UTF-16BE)
    if (argCheck == '‚J') {
        return true;
    }
    // No.5343
    // ê‡ñæ:e24b
    // 0xe24b (Windows-31J)
    // 0x7960 (UTF-16BE)
    if (argCheck == '‚K') {
        return true;
    }
    // No.5344
    // ê‡ñæ:e24c
    // 0xe24c (Windows-31J)
    // 0x7957 (UTF-16BE)
    if (argCheck == '‚L') {
        return true;
    }
    // No.5345
    // ê‡ñæ:e24d
    // 0xe24d (Windows-31J)
    // 0x795f (UTF-16BE)
    if (argCheck == '‚M') {
        return true;
    }
    // No.5346
    // ê‡ñæ:e24e
    // 0xe24e (Windows-31J)
    // 0x795a (UTF-16BE)
    if (argCheck == '‚N') {
        return true;
    }
    // No.5347
    // ê‡ñæ:e24f
    // 0xe24f (Windows-31J)
    // 0x7955 (UTF-16BE)
    if (argCheck == '‚O') {
        return true;
    }
    // No.5348
    // ê‡ñæ:e250
    // 0xe250 (Windows-31J)
    // 0x7953 (UTF-16BE)
    if (argCheck == '‚P') {
        return true;
    }
    // No.5349
    // ê‡ñæ:e251
    // 0xe251 (Windows-31J)
    // 0x797a (UTF-16BE)
    if (argCheck == '‚Q') {
        return true;
    }
    // No.5350
    // ê‡ñæ:e252
    // 0xe252 (Windows-31J)
    // 0x797f (UTF-16BE)
    if (argCheck == '‚R') {
        return true;
    }
    // No.5351
    // ê‡ñæ:e253
    // 0xe253 (Windows-31J)
    // 0x798a (UTF-16BE)
    if (argCheck == '‚S') {
        return true;
    }
    // No.5352
    // ê‡ñæ:e254
    // 0xe254 (Windows-31J)
    // 0x799d (UTF-16BE)
    if (argCheck == '‚T') {
        return true;
    }
    // No.5353
    // ê‡ñæ:e255
    // 0xe255 (Windows-31J)
    // 0x79a7 (UTF-16BE)
    if (argCheck == '‚U') {
        return true;
    }
    // No.5354
    // ê‡ñæ:e256
    // 0xe256 (Windows-31J)
    // 0x9f4b (UTF-16BE)
    if (argCheck == '‚V') {
        return true;
    }
    // No.5355
    // ê‡ñæ:e257
    // 0xe257 (Windows-31J)
    // 0x79aa (UTF-16BE)
    if (argCheck == '‚W') {
        return true;
    }
    // No.5356
    // ê‡ñæ:e258
    // 0xe258 (Windows-31J)
    // 0x79ae (UTF-16BE)
    if (argCheck == '‚X') {
        return true;
    }
    // No.5357
    // ê‡ñæ:e259
    // 0xe259 (Windows-31J)
    // 0x79b3 (UTF-16BE)
    if (argCheck == '‚Y') {
        return true;
    }
    // No.5358
    // ê‡ñæ:e25a
    // 0xe25a (Windows-31J)
    // 0x79b9 (UTF-16BE)
    if (argCheck == '‚Z') {
        return true;
    }
    // No.5359
    // ê‡ñæ:e25b
    // 0xe25b (Windows-31J)
    // 0x79ba (UTF-16BE)
    if (argCheck == '‚[') {
        return true;
    }
    // No.5360
    // ê‡ñæ:e25c
    // 0xe25c (Windows-31J)
    // 0x79c9 (UTF-16BE)
    if (argCheck == '‚\') {
        return true;
    }
    // No.5361
    // ê‡ñæ:e25d
    // 0xe25d (Windows-31J)
    // 0x79d5 (UTF-16BE)
    if (argCheck == '‚]') {
        return true;
    }
    // No.5362
    // ê‡ñæ:e25e
    // 0xe25e (Windows-31J)
    // 0x79e7 (UTF-16BE)
    if (argCheck == '‚^') {
        return true;
    }
    // No.5363
    // ê‡ñæ:e25f
    // 0xe25f (Windows-31J)
    // 0x79ec (UTF-16BE)
    if (argCheck == '‚_') {
        return true;
    }
    // No.5364
    // ê‡ñæ:e260
    // 0xe260 (Windows-31J)
    // 0x79e1 (UTF-16BE)
    if (argCheck == '‚`') {
        return true;
    }
    // No.5365
    // ê‡ñæ:e261
    // 0xe261 (Windows-31J)
    // 0x79e3 (UTF-16BE)
    if (argCheck == '‚a') {
        return true;
    }
    // No.5366
    // ê‡ñæ:e262
    // 0xe262 (Windows-31J)
    // 0x7a08 (UTF-16BE)
    if (argCheck == '‚b') {
        return true;
    }
    // No.5367
    // ê‡ñæ:e263
    // 0xe263 (Windows-31J)
    // 0x7a0d (UTF-16BE)
    if (argCheck == '‚c') {
        return true;
    }
    // No.5368
    // ê‡ñæ:e264
    // 0xe264 (Windows-31J)
    // 0x7a18 (UTF-16BE)
    if (argCheck == '‚d') {
        return true;
    }
    // No.5369
    // ê‡ñæ:e265
    // 0xe265 (Windows-31J)
    // 0x7a19 (UTF-16BE)
    if (argCheck == '‚e') {
        return true;
    }
    // No.5370
    // ê‡ñæ:e266
    // 0xe266 (Windows-31J)
    // 0x7a20 (UTF-16BE)
    if (argCheck == '‚f') {
        return true;
    }
    // No.5371
    // ê‡ñæ:e267
    // 0xe267 (Windows-31J)
    // 0x7a1f (UTF-16BE)
    if (argCheck == '‚g') {
        return true;
    }
    // No.5372
    // ê‡ñæ:e268
    // 0xe268 (Windows-31J)
    // 0x7980 (UTF-16BE)
    if (argCheck == '‚h') {
        return true;
    }
    // No.5373
    // ê‡ñæ:e269
    // 0xe269 (Windows-31J)
    // 0x7a31 (UTF-16BE)
    if (argCheck == '‚i') {
        return true;
    }
    // No.5374
    // ê‡ñæ:e26a
    // 0xe26a (Windows-31J)
    // 0x7a3b (UTF-16BE)
    if (argCheck == '‚j') {
        return true;
    }
    // No.5375
    // ê‡ñæ:e26b
    // 0xe26b (Windows-31J)
    // 0x7a3e (UTF-16BE)
    if (argCheck == '‚k') {
        return true;
    }
    // No.5376
    // ê‡ñæ:e26c
    // 0xe26c (Windows-31J)
    // 0x7a37 (UTF-16BE)
    if (argCheck == '‚l') {
        return true;
    }
    // No.5377
    // ê‡ñæ:e26d
    // 0xe26d (Windows-31J)
    // 0x7a43 (UTF-16BE)
    if (argCheck == '‚m') {
        return true;
    }
    // No.5378
    // ê‡ñæ:e26e
    // 0xe26e (Windows-31J)
    // 0x7a57 (UTF-16BE)
    if (argCheck == '‚n') {
        return true;
    }
    // No.5379
    // ê‡ñæ:e26f
    // 0xe26f (Windows-31J)
    // 0x7a49 (UTF-16BE)
    if (argCheck == '‚o') {
        return true;
    }
    // No.5380
    // ê‡ñæ:e270
    // 0xe270 (Windows-31J)
    // 0x7a61 (UTF-16BE)
    if (argCheck == '‚p') {
        return true;
    }
    // No.5381
    // ê‡ñæ:e271
    // 0xe271 (Windows-31J)
    // 0x7a62 (UTF-16BE)
    if (argCheck == '‚q') {
        return true;
    }
    // No.5382
    // ê‡ñæ:e272
    // 0xe272 (Windows-31J)
    // 0x7a69 (UTF-16BE)
    if (argCheck == '‚r') {
        return true;
    }
    // No.5383
    // ê‡ñæ:e273
    // 0xe273 (Windows-31J)
    // 0x9f9d (UTF-16BE)
    if (argCheck == '‚s') {
        return true;
    }
    // No.5384
    // ê‡ñæ:e274
    // 0xe274 (Windows-31J)
    // 0x7a70 (UTF-16BE)
    if (argCheck == '‚t') {
        return true;
    }
    // No.5385
    // ê‡ñæ:e275
    // 0xe275 (Windows-31J)
    // 0x7a79 (UTF-16BE)
    if (argCheck == '‚u') {
        return true;
    }
    // No.5386
    // ê‡ñæ:e276
    // 0xe276 (Windows-31J)
    // 0x7a7d (UTF-16BE)
    if (argCheck == '‚v') {
        return true;
    }
    // No.5387
    // ê‡ñæ:e277
    // 0xe277 (Windows-31J)
    // 0x7a88 (UTF-16BE)
    if (argCheck == '‚w') {
        return true;
    }
    // No.5388
    // ê‡ñæ:e278
    // 0xe278 (Windows-31J)
    // 0x7a97 (UTF-16BE)
    if (argCheck == '‚x') {
        return true;
    }
    // No.5389
    // ê‡ñæ:e279
    // 0xe279 (Windows-31J)
    // 0x7a95 (UTF-16BE)
    if (argCheck == '‚y') {
        return true;
    }
    // No.5390
    // ê‡ñæ:e27a
    // 0xe27a (Windows-31J)
    // 0x7a98 (UTF-16BE)
    if (argCheck == '‚z') {
        return true;
    }
    // No.5391
    // ê‡ñæ:e27b
    // 0xe27b (Windows-31J)
    // 0x7a96 (UTF-16BE)
    if (argCheck == '‚{') {
        return true;
    }
    // No.5392
    // ê‡ñæ:e27c
    // 0xe27c (Windows-31J)
    // 0x7aa9 (UTF-16BE)
    if (argCheck == '‚|') {
        return true;
    }
    // No.5393
    // ê‡ñæ:e27d
    // 0xe27d (Windows-31J)
    // 0x7ac8 (UTF-16BE)
    if (argCheck == '‚}') {
        return true;
    }
    // No.5394
    // ê‡ñæ:e27e
    // 0xe27e (Windows-31J)
    // 0x7ab0 (UTF-16BE)
    if (argCheck == '‚~') {
        return true;
    }
    // No.5395
    // ê‡ñæ:e280
    // 0xe280 (Windows-31J)
    // 0x7ab6 (UTF-16BE)
    if (argCheck == '‚Ä') {
        return true;
    }
    // No.5396
    // ê‡ñæ:e281
    // 0xe281 (Windows-31J)
    // 0x7ac5 (UTF-16BE)
    if (argCheck == '‚Å') {
        return true;
    }
    // No.5397
    // ê‡ñæ:e282
    // 0xe282 (Windows-31J)
    // 0x7ac4 (UTF-16BE)
    if (argCheck == '‚Ç') {
        return true;
    }
    // No.5398
    // ê‡ñæ:e283
    // 0xe283 (Windows-31J)
    // 0x7abf (UTF-16BE)
    if (argCheck == '‚É') {
        return true;
    }
    // No.5399
    // ê‡ñæ:e284
    // 0xe284 (Windows-31J)
    // 0x9083 (UTF-16BE)
    if (argCheck == '‚Ñ') {
        return true;
    }
    // No.5400
    // ê‡ñæ:e285
    // 0xe285 (Windows-31J)
    // 0x7ac7 (UTF-16BE)
    if (argCheck == '‚Ö') {
        return true;
    }
    // No.5401
    // ê‡ñæ:e286
    // 0xe286 (Windows-31J)
    // 0x7aca (UTF-16BE)
    if (argCheck == '‚Ü') {
        return true;
    }
    // No.5402
    // ê‡ñæ:e287
    // 0xe287 (Windows-31J)
    // 0x7acd (UTF-16BE)
    if (argCheck == '‚á') {
        return true;
    }
    // No.5403
    // ê‡ñæ:e288
    // 0xe288 (Windows-31J)
    // 0x7acf (UTF-16BE)
    if (argCheck == '‚à') {
        return true;
    }
    // No.5404
    // ê‡ñæ:e289
    // 0xe289 (Windows-31J)
    // 0x7ad5 (UTF-16BE)
    if (argCheck == '‚â') {
        return true;
    }
    // No.5405
    // ê‡ñæ:e28a
    // 0xe28a (Windows-31J)
    // 0x7ad3 (UTF-16BE)
    if (argCheck == '‚ä') {
        return true;
    }
    // No.5406
    // ê‡ñæ:e28b
    // 0xe28b (Windows-31J)
    // 0x7ad9 (UTF-16BE)
    if (argCheck == '‚ã') {
        return true;
    }
    // No.5407
    // ê‡ñæ:e28c
    // 0xe28c (Windows-31J)
    // 0x7ada (UTF-16BE)
    if (argCheck == '‚å') {
        return true;
    }
    // No.5408
    // ê‡ñæ:e28d
    // 0xe28d (Windows-31J)
    // 0x7add (UTF-16BE)
    if (argCheck == '‚ç') {
        return true;
    }
    // No.5409
    // ê‡ñæ:e28e
    // 0xe28e (Windows-31J)
    // 0x7ae1 (UTF-16BE)
    if (argCheck == '‚é') {
        return true;
    }
    // No.5410
    // ê‡ñæ:e28f
    // 0xe28f (Windows-31J)
    // 0x7ae2 (UTF-16BE)
    if (argCheck == '‚è') {
        return true;
    }
    // No.5411
    // ê‡ñæ:e290
    // 0xe290 (Windows-31J)
    // 0x7ae6 (UTF-16BE)
    if (argCheck == '‚ê') {
        return true;
    }
    // No.5412
    // ê‡ñæ:e291
    // 0xe291 (Windows-31J)
    // 0x7aed (UTF-16BE)
    if (argCheck == '‚ë') {
        return true;
    }
    // No.5413
    // ê‡ñæ:e292
    // 0xe292 (Windows-31J)
    // 0x7af0 (UTF-16BE)
    if (argCheck == '‚í') {
        return true;
    }
    // No.5414
    // ê‡ñæ:e293
    // 0xe293 (Windows-31J)
    // 0x7b02 (UTF-16BE)
    if (argCheck == '‚ì') {
        return true;
    }
    // No.5415
    // ê‡ñæ:e294
    // 0xe294 (Windows-31J)
    // 0x7b0f (UTF-16BE)
    if (argCheck == '‚î') {
        return true;
    }
    // No.5416
    // ê‡ñæ:e295
    // 0xe295 (Windows-31J)
    // 0x7b0a (UTF-16BE)
    if (argCheck == '‚ï') {
        return true;
    }
    // No.5417
    // ê‡ñæ:e296
    // 0xe296 (Windows-31J)
    // 0x7b06 (UTF-16BE)
    if (argCheck == '‚ñ') {
        return true;
    }
    // No.5418
    // ê‡ñæ:e297
    // 0xe297 (Windows-31J)
    // 0x7b33 (UTF-16BE)
    if (argCheck == '‚ó') {
        return true;
    }
    // No.5419
    // ê‡ñæ:e298
    // 0xe298 (Windows-31J)
    // 0x7b18 (UTF-16BE)
    if (argCheck == '‚ò') {
        return true;
    }
    // No.5420
    // ê‡ñæ:e299
    // 0xe299 (Windows-31J)
    // 0x7b19 (UTF-16BE)
    if (argCheck == '‚ô') {
        return true;
    }
    // No.5421
    // ê‡ñæ:e29a
    // 0xe29a (Windows-31J)
    // 0x7b1e (UTF-16BE)
    if (argCheck == '‚ö') {
        return true;
    }
    // No.5422
    // ê‡ñæ:e29b
    // 0xe29b (Windows-31J)
    // 0x7b35 (UTF-16BE)
    if (argCheck == '‚õ') {
        return true;
    }
    // No.5423
    // ê‡ñæ:e29c
    // 0xe29c (Windows-31J)
    // 0x7b28 (UTF-16BE)
    if (argCheck == '‚ú') {
        return true;
    }
    // No.5424
    // ê‡ñæ:e29d
    // 0xe29d (Windows-31J)
    // 0x7b36 (UTF-16BE)
    if (argCheck == '‚ù') {
        return true;
    }
    // No.5425
    // ê‡ñæ:e29e
    // 0xe29e (Windows-31J)
    // 0x7b50 (UTF-16BE)
    if (argCheck == '‚û') {
        return true;
    }
    // No.5426
    // ê‡ñæ:e29f
    // 0xe29f (Windows-31J)
    // 0x7b7a (UTF-16BE)
    if (argCheck == '‚ü') {
        return true;
    }
    // No.5427
    // ê‡ñæ:e2a0
    // 0xe2a0 (Windows-31J)
    // 0x7b04 (UTF-16BE)
    if (argCheck == '‚†') {
        return true;
    }
    // No.5428
    // ê‡ñæ:e2a1
    // 0xe2a1 (Windows-31J)
    // 0x7b4d (UTF-16BE)
    if (argCheck == '‚°') {
        return true;
    }
    // No.5429
    // ê‡ñæ:e2a2
    // 0xe2a2 (Windows-31J)
    // 0x7b0b (UTF-16BE)
    if (argCheck == '‚¢') {
        return true;
    }
    // No.5430
    // ê‡ñæ:e2a3
    // 0xe2a3 (Windows-31J)
    // 0x7b4c (UTF-16BE)
    if (argCheck == '‚£') {
        return true;
    }
    // No.5431
    // ê‡ñæ:e2a4
    // 0xe2a4 (Windows-31J)
    // 0x7b45 (UTF-16BE)
    if (argCheck == '‚§') {
        return true;
    }
    // No.5432
    // ê‡ñæ:e2a5
    // 0xe2a5 (Windows-31J)
    // 0x7b75 (UTF-16BE)
    if (argCheck == '‚•') {
        return true;
    }
    // No.5433
    // ê‡ñæ:e2a6
    // 0xe2a6 (Windows-31J)
    // 0x7b65 (UTF-16BE)
    if (argCheck == '‚¶') {
        return true;
    }
    // No.5434
    // ê‡ñæ:e2a7
    // 0xe2a7 (Windows-31J)
    // 0x7b74 (UTF-16BE)
    if (argCheck == '‚ß') {
        return true;
    }
    // No.5435
    // ê‡ñæ:e2a8
    // 0xe2a8 (Windows-31J)
    // 0x7b67 (UTF-16BE)
    if (argCheck == '‚®') {
        return true;
    }
    // No.5436
    // ê‡ñæ:e2a9
    // 0xe2a9 (Windows-31J)
    // 0x7b70 (UTF-16BE)
    if (argCheck == '‚©') {
        return true;
    }
    // No.5437
    // ê‡ñæ:e2aa
    // 0xe2aa (Windows-31J)
    // 0x7b71 (UTF-16BE)
    if (argCheck == '‚™') {
        return true;
    }
    // No.5438
    // ê‡ñæ:e2ab
    // 0xe2ab (Windows-31J)
    // 0x7b6c (UTF-16BE)
    if (argCheck == '‚´') {
        return true;
    }
    // No.5439
    // ê‡ñæ:e2ac
    // 0xe2ac (Windows-31J)
    // 0x7b6e (UTF-16BE)
    if (argCheck == '‚¨') {
        return true;
    }
    // No.5440
    // ê‡ñæ:e2ad
    // 0xe2ad (Windows-31J)
    // 0x7b9d (UTF-16BE)
    if (argCheck == '‚≠') {
        return true;
    }
    // No.5441
    // ê‡ñæ:e2ae
    // 0xe2ae (Windows-31J)
    // 0x7b98 (UTF-16BE)
    if (argCheck == '‚Æ') {
        return true;
    }
    // No.5442
    // ê‡ñæ:e2af
    // 0xe2af (Windows-31J)
    // 0x7b9f (UTF-16BE)
    if (argCheck == '‚Ø') {
        return true;
    }
    // No.5443
    // ê‡ñæ:e2b0
    // 0xe2b0 (Windows-31J)
    // 0x7b8d (UTF-16BE)
    if (argCheck == '‚∞') {
        return true;
    }
    // No.5444
    // ê‡ñæ:e2b1
    // 0xe2b1 (Windows-31J)
    // 0x7b9c (UTF-16BE)
    if (argCheck == '‚±') {
        return true;
    }
    // No.5445
    // ê‡ñæ:e2b2
    // 0xe2b2 (Windows-31J)
    // 0x7b9a (UTF-16BE)
    if (argCheck == '‚≤') {
        return true;
    }
    // No.5446
    // ê‡ñæ:e2b3
    // 0xe2b3 (Windows-31J)
    // 0x7b8b (UTF-16BE)
    if (argCheck == '‚≥') {
        return true;
    }
    // No.5447
    // ê‡ñæ:e2b4
    // 0xe2b4 (Windows-31J)
    // 0x7b92 (UTF-16BE)
    if (argCheck == '‚¥') {
        return true;
    }
    // No.5448
    // ê‡ñæ:e2b5
    // 0xe2b5 (Windows-31J)
    // 0x7b8f (UTF-16BE)
    if (argCheck == '‚µ') {
        return true;
    }
    // No.5449
    // ê‡ñæ:e2b6
    // 0xe2b6 (Windows-31J)
    // 0x7b5d (UTF-16BE)
    if (argCheck == '‚∂') {
        return true;
    }
    // No.5450
    // ê‡ñæ:e2b7
    // 0xe2b7 (Windows-31J)
    // 0x7b99 (UTF-16BE)
    if (argCheck == '‚∑') {
        return true;
    }
    // No.5451
    // ê‡ñæ:e2b8
    // 0xe2b8 (Windows-31J)
    // 0x7bcb (UTF-16BE)
    if (argCheck == '‚∏') {
        return true;
    }
    // No.5452
    // ê‡ñæ:e2b9
    // 0xe2b9 (Windows-31J)
    // 0x7bc1 (UTF-16BE)
    if (argCheck == '‚π') {
        return true;
    }
    // No.5453
    // ê‡ñæ:e2ba
    // 0xe2ba (Windows-31J)
    // 0x7bcc (UTF-16BE)
    if (argCheck == '‚∫') {
        return true;
    }
    // No.5454
    // ê‡ñæ:e2bb
    // 0xe2bb (Windows-31J)
    // 0x7bcf (UTF-16BE)
    if (argCheck == '‚ª') {
        return true;
    }
    // No.5455
    // ê‡ñæ:e2bc
    // 0xe2bc (Windows-31J)
    // 0x7bb4 (UTF-16BE)
    if (argCheck == '‚º') {
        return true;
    }
    // No.5456
    // ê‡ñæ:e2bd
    // 0xe2bd (Windows-31J)
    // 0x7bc6 (UTF-16BE)
    if (argCheck == '‚Ω') {
        return true;
    }
    // No.5457
    // ê‡ñæ:e2be
    // 0xe2be (Windows-31J)
    // 0x7bdd (UTF-16BE)
    if (argCheck == '‚æ') {
        return true;
    }
    // No.5458
    // ê‡ñæ:e2bf
    // 0xe2bf (Windows-31J)
    // 0x7be9 (UTF-16BE)
    if (argCheck == '‚ø') {
        return true;
    }
    // No.5459
    // ê‡ñæ:e2c0
    // 0xe2c0 (Windows-31J)
    // 0x7c11 (UTF-16BE)
    if (argCheck == '‚¿') {
        return true;
    }
    // No.5460
    // ê‡ñæ:e2c1
    // 0xe2c1 (Windows-31J)
    // 0x7c14 (UTF-16BE)
    if (argCheck == '‚¡') {
        return true;
    }
    // No.5461
    // ê‡ñæ:e2c2
    // 0xe2c2 (Windows-31J)
    // 0x7be6 (UTF-16BE)
    if (argCheck == '‚¬') {
        return true;
    }
    // No.5462
    // ê‡ñæ:e2c3
    // 0xe2c3 (Windows-31J)
    // 0x7be5 (UTF-16BE)
    if (argCheck == '‚√') {
        return true;
    }
    // No.5463
    // ê‡ñæ:e2c4
    // 0xe2c4 (Windows-31J)
    // 0x7c60 (UTF-16BE)
    if (argCheck == '‚ƒ') {
        return true;
    }
    // No.5464
    // ê‡ñæ:e2c5
    // 0xe2c5 (Windows-31J)
    // 0x7c00 (UTF-16BE)
    if (argCheck == '‚≈') {
        return true;
    }
    // No.5465
    // ê‡ñæ:e2c6
    // 0xe2c6 (Windows-31J)
    // 0x7c07 (UTF-16BE)
    if (argCheck == '‚∆') {
        return true;
    }
    // No.5466
    // ê‡ñæ:e2c7
    // 0xe2c7 (Windows-31J)
    // 0x7c13 (UTF-16BE)
    if (argCheck == '‚«') {
        return true;
    }
    // No.5467
    // ê‡ñæ:e2c8
    // 0xe2c8 (Windows-31J)
    // 0x7bf3 (UTF-16BE)
    if (argCheck == '‚»') {
        return true;
    }
    // No.5468
    // ê‡ñæ:e2c9
    // 0xe2c9 (Windows-31J)
    // 0x7bf7 (UTF-16BE)
    if (argCheck == '‚…') {
        return true;
    }
    // No.5469
    // ê‡ñæ:e2ca
    // 0xe2ca (Windows-31J)
    // 0x7c17 (UTF-16BE)
    if (argCheck == '‚ ') {
        return true;
    }
    // No.5470
    // ê‡ñæ:e2cb
    // 0xe2cb (Windows-31J)
    // 0x7c0d (UTF-16BE)
    if (argCheck == '‚À') {
        return true;
    }
    // No.5471
    // ê‡ñæ:e2cc
    // 0xe2cc (Windows-31J)
    // 0x7bf6 (UTF-16BE)
    if (argCheck == '‚Ã') {
        return true;
    }
    // No.5472
    // ê‡ñæ:e2cd
    // 0xe2cd (Windows-31J)
    // 0x7c23 (UTF-16BE)
    if (argCheck == '‚Õ') {
        return true;
    }
    // No.5473
    // ê‡ñæ:e2ce
    // 0xe2ce (Windows-31J)
    // 0x7c27 (UTF-16BE)
    if (argCheck == '‚Œ') {
        return true;
    }
    // No.5474
    // ê‡ñæ:e2cf
    // 0xe2cf (Windows-31J)
    // 0x7c2a (UTF-16BE)
    if (argCheck == '‚œ') {
        return true;
    }
    // No.5475
    // ê‡ñæ:e2d0
    // 0xe2d0 (Windows-31J)
    // 0x7c1f (UTF-16BE)
    if (argCheck == '‚–') {
        return true;
    }
    // No.5476
    // ê‡ñæ:e2d1
    // 0xe2d1 (Windows-31J)
    // 0x7c37 (UTF-16BE)
    if (argCheck == '‚—') {
        return true;
    }
    // No.5477
    // ê‡ñæ:e2d2
    // 0xe2d2 (Windows-31J)
    // 0x7c2b (UTF-16BE)
    if (argCheck == '‚“') {
        return true;
    }
    // No.5478
    // ê‡ñæ:e2d3
    // 0xe2d3 (Windows-31J)
    // 0x7c3d (UTF-16BE)
    if (argCheck == '‚”') {
        return true;
    }
    // No.5479
    // ê‡ñæ:e2d4
    // 0xe2d4 (Windows-31J)
    // 0x7c4c (UTF-16BE)
    if (argCheck == '‚‘') {
        return true;
    }
    // No.5480
    // ê‡ñæ:e2d5
    // 0xe2d5 (Windows-31J)
    // 0x7c43 (UTF-16BE)
    if (argCheck == '‚’') {
        return true;
    }
    // No.5481
    // ê‡ñæ:e2d6
    // 0xe2d6 (Windows-31J)
    // 0x7c54 (UTF-16BE)
    if (argCheck == '‚÷') {
        return true;
    }
    // No.5482
    // ê‡ñæ:e2d7
    // 0xe2d7 (Windows-31J)
    // 0x7c4f (UTF-16BE)
    if (argCheck == '‚◊') {
        return true;
    }
    // No.5483
    // ê‡ñæ:e2d8
    // 0xe2d8 (Windows-31J)
    // 0x7c40 (UTF-16BE)
    if (argCheck == '‚ÿ') {
        return true;
    }
    // No.5484
    // ê‡ñæ:e2d9
    // 0xe2d9 (Windows-31J)
    // 0x7c50 (UTF-16BE)
    if (argCheck == '‚Ÿ') {
        return true;
    }
    // No.5485
    // ê‡ñæ:e2da
    // 0xe2da (Windows-31J)
    // 0x7c58 (UTF-16BE)
    if (argCheck == '‚⁄') {
        return true;
    }
    // No.5486
    // ê‡ñæ:e2db
    // 0xe2db (Windows-31J)
    // 0x7c5f (UTF-16BE)
    if (argCheck == '‚€') {
        return true;
    }
    // No.5487
    // ê‡ñæ:e2dc
    // 0xe2dc (Windows-31J)
    // 0x7c64 (UTF-16BE)
    if (argCheck == '‚‹') {
        return true;
    }
    // No.5488
    // ê‡ñæ:e2dd
    // 0xe2dd (Windows-31J)
    // 0x7c56 (UTF-16BE)
    if (argCheck == '‚›') {
        return true;
    }
    // No.5489
    // ê‡ñæ:e2de
    // 0xe2de (Windows-31J)
    // 0x7c65 (UTF-16BE)
    if (argCheck == '‚ﬁ') {
        return true;
    }
    // No.5490
    // ê‡ñæ:e2df
    // 0xe2df (Windows-31J)
    // 0x7c6c (UTF-16BE)
    if (argCheck == '‚ﬂ') {
        return true;
    }
    // No.5491
    // ê‡ñæ:e2e0
    // 0xe2e0 (Windows-31J)
    // 0x7c75 (UTF-16BE)
    if (argCheck == '‚‡') {
        return true;
    }
    // No.5492
    // ê‡ñæ:e2e1
    // 0xe2e1 (Windows-31J)
    // 0x7c83 (UTF-16BE)
    if (argCheck == '‚·') {
        return true;
    }
    // No.5493
    // ê‡ñæ:e2e2
    // 0xe2e2 (Windows-31J)
    // 0x7c90 (UTF-16BE)
    if (argCheck == '‚‚') {
        return true;
    }
    // No.5494
    // ê‡ñæ:e2e3
    // 0xe2e3 (Windows-31J)
    // 0x7ca4 (UTF-16BE)
    if (argCheck == '‚„') {
        return true;
    }
    // No.5495
    // ê‡ñæ:e2e4
    // 0xe2e4 (Windows-31J)
    // 0x7cad (UTF-16BE)
    if (argCheck == '‚‰') {
        return true;
    }
    // No.5496
    // ê‡ñæ:e2e5
    // 0xe2e5 (Windows-31J)
    // 0x7ca2 (UTF-16BE)
    if (argCheck == '‚Â') {
        return true;
    }
    // No.5497
    // ê‡ñæ:e2e6
    // 0xe2e6 (Windows-31J)
    // 0x7cab (UTF-16BE)
    if (argCheck == '‚Ê') {
        return true;
    }
    // No.5498
    // ê‡ñæ:e2e7
    // 0xe2e7 (Windows-31J)
    // 0x7ca1 (UTF-16BE)
    if (argCheck == '‚Á') {
        return true;
    }
    // No.5499
    // ê‡ñæ:e2e8
    // 0xe2e8 (Windows-31J)
    // 0x7ca8 (UTF-16BE)
    if (argCheck == '‚Ë') {
        return true;
    }
    // No.5500
    // ê‡ñæ:e2e9
    // 0xe2e9 (Windows-31J)
    // 0x7cb3 (UTF-16BE)
    if (argCheck == '‚È') {
        return true;
    }
    // No.5501
    // ê‡ñæ:e2ea
    // 0xe2ea (Windows-31J)
    // 0x7cb2 (UTF-16BE)
    if (argCheck == '‚Í') {
        return true;
    }
    // No.5502
    // ê‡ñæ:e2eb
    // 0xe2eb (Windows-31J)
    // 0x7cb1 (UTF-16BE)
    if (argCheck == '‚Î') {
        return true;
    }
    // No.5503
    // ê‡ñæ:e2ec
    // 0xe2ec (Windows-31J)
    // 0x7cae (UTF-16BE)
    if (argCheck == '‚Ï') {
        return true;
    }
    // No.5504
    // ê‡ñæ:e2ed
    // 0xe2ed (Windows-31J)
    // 0x7cb9 (UTF-16BE)
    if (argCheck == '‚Ì') {
        return true;
    }
    // No.5505
    // ê‡ñæ:e2ee
    // 0xe2ee (Windows-31J)
    // 0x7cbd (UTF-16BE)
    if (argCheck == '‚Ó') {
        return true;
    }
    // No.5506
    // ê‡ñæ:e2ef
    // 0xe2ef (Windows-31J)
    // 0x7cc0 (UTF-16BE)
    if (argCheck == '‚Ô') {
        return true;
    }
    // No.5507
    // ê‡ñæ:e2f0
    // 0xe2f0 (Windows-31J)
    // 0x7cc5 (UTF-16BE)
    if (argCheck == '‚') {
        return true;
    }
    // No.5508
    // ê‡ñæ:e2f1
    // 0xe2f1 (Windows-31J)
    // 0x7cc2 (UTF-16BE)
    if (argCheck == '‚Ò') {
        return true;
    }
    // No.5509
    // ê‡ñæ:e2f2
    // 0xe2f2 (Windows-31J)
    // 0x7cd8 (UTF-16BE)
    if (argCheck == '‚Ú') {
        return true;
    }
    // No.5510
    // ê‡ñæ:e2f3
    // 0xe2f3 (Windows-31J)
    // 0x7cd2 (UTF-16BE)
    if (argCheck == '‚Û') {
        return true;
    }
    // No.5511
    // ê‡ñæ:e2f4
    // 0xe2f4 (Windows-31J)
    // 0x7cdc (UTF-16BE)
    if (argCheck == '‚Ù') {
        return true;
    }
    // No.5512
    // ê‡ñæ:e2f5
    // 0xe2f5 (Windows-31J)
    // 0x7ce2 (UTF-16BE)
    if (argCheck == '‚ı') {
        return true;
    }
    // No.5513
    // ê‡ñæ:e2f6
    // 0xe2f6 (Windows-31J)
    // 0x9b3b (UTF-16BE)
    if (argCheck == '‚ˆ') {
        return true;
    }
    // No.5514
    // ê‡ñæ:e2f7
    // 0xe2f7 (Windows-31J)
    // 0x7cef (UTF-16BE)
    if (argCheck == '‚˜') {
        return true;
    }
    // No.5515
    // ê‡ñæ:e2f8
    // 0xe2f8 (Windows-31J)
    // 0x7cf2 (UTF-16BE)
    if (argCheck == '‚¯') {
        return true;
    }
    // No.5516
    // ê‡ñæ:e2f9
    // 0xe2f9 (Windows-31J)
    // 0x7cf4 (UTF-16BE)
    if (argCheck == '‚˘') {
        return true;
    }
    // No.5517
    // ê‡ñæ:e2fa
    // 0xe2fa (Windows-31J)
    // 0x7cf6 (UTF-16BE)
    if (argCheck == '‚˙') {
        return true;
    }
    // No.5518
    // ê‡ñæ:e2fb
    // 0xe2fb (Windows-31J)
    // 0x7cfa (UTF-16BE)
    if (argCheck == '‚˚') {
        return true;
    }
    // No.5519
    // ê‡ñæ:e2fc
    // 0xe2fc (Windows-31J)
    // 0x7d06 (UTF-16BE)
    if (argCheck == '‚¸') {
        return true;
    }
    // No.5520
    // ê‡ñæ:e340
    // 0xe340 (Windows-31J)
    // 0x7d02 (UTF-16BE)
    if (argCheck == '„@') {
        return true;
    }
    // No.5521
    // ê‡ñæ:e341
    // 0xe341 (Windows-31J)
    // 0x7d1c (UTF-16BE)
    if (argCheck == '„A') {
        return true;
    }
    // No.5522
    // ê‡ñæ:e342
    // 0xe342 (Windows-31J)
    // 0x7d15 (UTF-16BE)
    if (argCheck == '„B') {
        return true;
    }
    // No.5523
    // ê‡ñæ:e343
    // 0xe343 (Windows-31J)
    // 0x7d0a (UTF-16BE)
    if (argCheck == '„C') {
        return true;
    }
    // No.5524
    // ê‡ñæ:e344
    // 0xe344 (Windows-31J)
    // 0x7d45 (UTF-16BE)
    if (argCheck == '„D') {
        return true;
    }
    // No.5525
    // ê‡ñæ:e345
    // 0xe345 (Windows-31J)
    // 0x7d4b (UTF-16BE)
    if (argCheck == '„E') {
        return true;
    }
    // No.5526
    // ê‡ñæ:e346
    // 0xe346 (Windows-31J)
    // 0x7d2e (UTF-16BE)
    if (argCheck == '„F') {
        return true;
    }
    // No.5527
    // ê‡ñæ:e347
    // 0xe347 (Windows-31J)
    // 0x7d32 (UTF-16BE)
    if (argCheck == '„G') {
        return true;
    }
    // No.5528
    // ê‡ñæ:e348
    // 0xe348 (Windows-31J)
    // 0x7d3f (UTF-16BE)
    if (argCheck == '„H') {
        return true;
    }
    // No.5529
    // ê‡ñæ:e349
    // 0xe349 (Windows-31J)
    // 0x7d35 (UTF-16BE)
    if (argCheck == '„I') {
        return true;
    }
    // No.5530
    // ê‡ñæ:e34a
    // 0xe34a (Windows-31J)
    // 0x7d46 (UTF-16BE)
    if (argCheck == '„J') {
        return true;
    }
    // No.5531
    // ê‡ñæ:e34b
    // 0xe34b (Windows-31J)
    // 0x7d73 (UTF-16BE)
    if (argCheck == '„K') {
        return true;
    }
    // No.5532
    // ê‡ñæ:e34c
    // 0xe34c (Windows-31J)
    // 0x7d56 (UTF-16BE)
    if (argCheck == '„L') {
        return true;
    }
    // No.5533
    // ê‡ñæ:e34d
    // 0xe34d (Windows-31J)
    // 0x7d4e (UTF-16BE)
    if (argCheck == '„M') {
        return true;
    }
    // No.5534
    // ê‡ñæ:e34e
    // 0xe34e (Windows-31J)
    // 0x7d72 (UTF-16BE)
    if (argCheck == '„N') {
        return true;
    }
    // No.5535
    // ê‡ñæ:e34f
    // 0xe34f (Windows-31J)
    // 0x7d68 (UTF-16BE)
    if (argCheck == '„O') {
        return true;
    }
    // No.5536
    // ê‡ñæ:e350
    // 0xe350 (Windows-31J)
    // 0x7d6e (UTF-16BE)
    if (argCheck == '„P') {
        return true;
    }
    // No.5537
    // ê‡ñæ:e351
    // 0xe351 (Windows-31J)
    // 0x7d4f (UTF-16BE)
    if (argCheck == '„Q') {
        return true;
    }
    // No.5538
    // ê‡ñæ:e352
    // 0xe352 (Windows-31J)
    // 0x7d63 (UTF-16BE)
    if (argCheck == '„R') {
        return true;
    }
    // No.5539
    // ê‡ñæ:e353
    // 0xe353 (Windows-31J)
    // 0x7d93 (UTF-16BE)
    if (argCheck == '„S') {
        return true;
    }
    // No.5540
    // ê‡ñæ:e354
    // 0xe354 (Windows-31J)
    // 0x7d89 (UTF-16BE)
    if (argCheck == '„T') {
        return true;
    }
    // No.5541
    // ê‡ñæ:e355
    // 0xe355 (Windows-31J)
    // 0x7d5b (UTF-16BE)
    if (argCheck == '„U') {
        return true;
    }
    // No.5542
    // ê‡ñæ:e356
    // 0xe356 (Windows-31J)
    // 0x7d8f (UTF-16BE)
    if (argCheck == '„V') {
        return true;
    }
    // No.5543
    // ê‡ñæ:e357
    // 0xe357 (Windows-31J)
    // 0x7d7d (UTF-16BE)
    if (argCheck == '„W') {
        return true;
    }
    // No.5544
    // ê‡ñæ:e358
    // 0xe358 (Windows-31J)
    // 0x7d9b (UTF-16BE)
    if (argCheck == '„X') {
        return true;
    }
    // No.5545
    // ê‡ñæ:e359
    // 0xe359 (Windows-31J)
    // 0x7dba (UTF-16BE)
    if (argCheck == '„Y') {
        return true;
    }
    // No.5546
    // ê‡ñæ:e35a
    // 0xe35a (Windows-31J)
    // 0x7dae (UTF-16BE)
    if (argCheck == '„Z') {
        return true;
    }
    // No.5547
    // ê‡ñæ:e35b
    // 0xe35b (Windows-31J)
    // 0x7da3 (UTF-16BE)
    if (argCheck == '„[') {
        return true;
    }
    // No.5548
    // ê‡ñæ:e35c
    // 0xe35c (Windows-31J)
    // 0x7db5 (UTF-16BE)
    if (argCheck == '„\') {
        return true;
    }
    // No.5549
    // ê‡ñæ:e35d
    // 0xe35d (Windows-31J)
    // 0x7dc7 (UTF-16BE)
    if (argCheck == '„]') {
        return true;
    }
    // No.5550
    // ê‡ñæ:e35e
    // 0xe35e (Windows-31J)
    // 0x7dbd (UTF-16BE)
    if (argCheck == '„^') {
        return true;
    }
    // No.5551
    // ê‡ñæ:e35f
    // 0xe35f (Windows-31J)
    // 0x7dab (UTF-16BE)
    if (argCheck == '„_') {
        return true;
    }
    // No.5552
    // ê‡ñæ:e360
    // 0xe360 (Windows-31J)
    // 0x7e3d (UTF-16BE)
    if (argCheck == '„`') {
        return true;
    }
    // No.5553
    // ê‡ñæ:e361
    // 0xe361 (Windows-31J)
    // 0x7da2 (UTF-16BE)
    if (argCheck == '„a') {
        return true;
    }
    // No.5554
    // ê‡ñæ:e362
    // 0xe362 (Windows-31J)
    // 0x7daf (UTF-16BE)
    if (argCheck == '„b') {
        return true;
    }
    // No.5555
    // ê‡ñæ:e363
    // 0xe363 (Windows-31J)
    // 0x7ddc (UTF-16BE)
    if (argCheck == '„c') {
        return true;
    }
    // No.5556
    // ê‡ñæ:e364
    // 0xe364 (Windows-31J)
    // 0x7db8 (UTF-16BE)
    if (argCheck == '„d') {
        return true;
    }
    // No.5557
    // ê‡ñæ:e365
    // 0xe365 (Windows-31J)
    // 0x7d9f (UTF-16BE)
    if (argCheck == '„e') {
        return true;
    }
    // No.5558
    // ê‡ñæ:e366
    // 0xe366 (Windows-31J)
    // 0x7db0 (UTF-16BE)
    if (argCheck == '„f') {
        return true;
    }
    // No.5559
    // ê‡ñæ:e367
    // 0xe367 (Windows-31J)
    // 0x7dd8 (UTF-16BE)
    if (argCheck == '„g') {
        return true;
    }
    // No.5560
    // ê‡ñæ:e368
    // 0xe368 (Windows-31J)
    // 0x7ddd (UTF-16BE)
    if (argCheck == '„h') {
        return true;
    }
    // No.5561
    // ê‡ñæ:e369
    // 0xe369 (Windows-31J)
    // 0x7de4 (UTF-16BE)
    if (argCheck == '„i') {
        return true;
    }
    // No.5562
    // ê‡ñæ:e36a
    // 0xe36a (Windows-31J)
    // 0x7dde (UTF-16BE)
    if (argCheck == '„j') {
        return true;
    }
    // No.5563
    // ê‡ñæ:e36b
    // 0xe36b (Windows-31J)
    // 0x7dfb (UTF-16BE)
    if (argCheck == '„k') {
        return true;
    }
    // No.5564
    // ê‡ñæ:e36c
    // 0xe36c (Windows-31J)
    // 0x7df2 (UTF-16BE)
    if (argCheck == '„l') {
        return true;
    }
    // No.5565
    // ê‡ñæ:e36d
    // 0xe36d (Windows-31J)
    // 0x7de1 (UTF-16BE)
    if (argCheck == '„m') {
        return true;
    }
    // No.5566
    // ê‡ñæ:e36e
    // 0xe36e (Windows-31J)
    // 0x7e05 (UTF-16BE)
    if (argCheck == '„n') {
        return true;
    }
    // No.5567
    // ê‡ñæ:e36f
    // 0xe36f (Windows-31J)
    // 0x7e0a (UTF-16BE)
    if (argCheck == '„o') {
        return true;
    }
    // No.5568
    // ê‡ñæ:e370
    // 0xe370 (Windows-31J)
    // 0x7e23 (UTF-16BE)
    if (argCheck == '„p') {
        return true;
    }
    // No.5569
    // ê‡ñæ:e371
    // 0xe371 (Windows-31J)
    // 0x7e21 (UTF-16BE)
    if (argCheck == '„q') {
        return true;
    }
    // No.5570
    // ê‡ñæ:e372
    // 0xe372 (Windows-31J)
    // 0x7e12 (UTF-16BE)
    if (argCheck == '„r') {
        return true;
    }
    // No.5571
    // ê‡ñæ:e373
    // 0xe373 (Windows-31J)
    // 0x7e31 (UTF-16BE)
    if (argCheck == '„s') {
        return true;
    }
    // No.5572
    // ê‡ñæ:e374
    // 0xe374 (Windows-31J)
    // 0x7e1f (UTF-16BE)
    if (argCheck == '„t') {
        return true;
    }
    // No.5573
    // ê‡ñæ:e375
    // 0xe375 (Windows-31J)
    // 0x7e09 (UTF-16BE)
    if (argCheck == '„u') {
        return true;
    }
    // No.5574
    // ê‡ñæ:e376
    // 0xe376 (Windows-31J)
    // 0x7e0b (UTF-16BE)
    if (argCheck == '„v') {
        return true;
    }
    // No.5575
    // ê‡ñæ:e377
    // 0xe377 (Windows-31J)
    // 0x7e22 (UTF-16BE)
    if (argCheck == '„w') {
        return true;
    }
    // No.5576
    // ê‡ñæ:e378
    // 0xe378 (Windows-31J)
    // 0x7e46 (UTF-16BE)
    if (argCheck == '„x') {
        return true;
    }
    // No.5577
    // ê‡ñæ:e379
    // 0xe379 (Windows-31J)
    // 0x7e66 (UTF-16BE)
    if (argCheck == '„y') {
        return true;
    }
    // No.5578
    // ê‡ñæ:e37a
    // 0xe37a (Windows-31J)
    // 0x7e3b (UTF-16BE)
    if (argCheck == '„z') {
        return true;
    }
    // No.5579
    // ê‡ñæ:e37b
    // 0xe37b (Windows-31J)
    // 0x7e35 (UTF-16BE)
    if (argCheck == '„{') {
        return true;
    }
    // No.5580
    // ê‡ñæ:e37c
    // 0xe37c (Windows-31J)
    // 0x7e39 (UTF-16BE)
    if (argCheck == '„|') {
        return true;
    }
    // No.5581
    // ê‡ñæ:e37d
    // 0xe37d (Windows-31J)
    // 0x7e43 (UTF-16BE)
    if (argCheck == '„}') {
        return true;
    }
    // No.5582
    // ê‡ñæ:e37e
    // 0xe37e (Windows-31J)
    // 0x7e37 (UTF-16BE)
    if (argCheck == '„~') {
        return true;
    }
    // No.5583
    // ê‡ñæ:e380
    // 0xe380 (Windows-31J)
    // 0x7e32 (UTF-16BE)
    if (argCheck == '„Ä') {
        return true;
    }
    // No.5584
    // ê‡ñæ:e381
    // 0xe381 (Windows-31J)
    // 0x7e3a (UTF-16BE)
    if (argCheck == '„Å') {
        return true;
    }
    // No.5585
    // ê‡ñæ:e382
    // 0xe382 (Windows-31J)
    // 0x7e67 (UTF-16BE)
    if (argCheck == '„Ç') {
        return true;
    }
    // No.5586
    // ê‡ñæ:e383
    // 0xe383 (Windows-31J)
    // 0x7e5d (UTF-16BE)
    if (argCheck == '„É') {
        return true;
    }
    // No.5587
    // ê‡ñæ:e384
    // 0xe384 (Windows-31J)
    // 0x7e56 (UTF-16BE)
    if (argCheck == '„Ñ') {
        return true;
    }
    // No.5588
    // ê‡ñæ:e385
    // 0xe385 (Windows-31J)
    // 0x7e5e (UTF-16BE)
    if (argCheck == '„Ö') {
        return true;
    }
    // No.5589
    // ê‡ñæ:e386
    // 0xe386 (Windows-31J)
    // 0x7e59 (UTF-16BE)
    if (argCheck == '„Ü') {
        return true;
    }
    // No.5590
    // ê‡ñæ:e387
    // 0xe387 (Windows-31J)
    // 0x7e5a (UTF-16BE)
    if (argCheck == '„á') {
        return true;
    }
    // No.5591
    // ê‡ñæ:e388
    // 0xe388 (Windows-31J)
    // 0x7e79 (UTF-16BE)
    if (argCheck == '„à') {
        return true;
    }
    // No.5592
    // ê‡ñæ:e389
    // 0xe389 (Windows-31J)
    // 0x7e6a (UTF-16BE)
    if (argCheck == '„â') {
        return true;
    }
    // No.5593
    // ê‡ñæ:e38a
    // 0xe38a (Windows-31J)
    // 0x7e69 (UTF-16BE)
    if (argCheck == '„ä') {
        return true;
    }
    // No.5594
    // ê‡ñæ:e38b
    // 0xe38b (Windows-31J)
    // 0x7e7c (UTF-16BE)
    if (argCheck == '„ã') {
        return true;
    }
    // No.5595
    // ê‡ñæ:e38c
    // 0xe38c (Windows-31J)
    // 0x7e7b (UTF-16BE)
    if (argCheck == '„å') {
        return true;
    }
    // No.5596
    // ê‡ñæ:e38d
    // 0xe38d (Windows-31J)
    // 0x7e83 (UTF-16BE)
    if (argCheck == '„ç') {
        return true;
    }
    // No.5597
    // ê‡ñæ:e38e
    // 0xe38e (Windows-31J)
    // 0x7dd5 (UTF-16BE)
    if (argCheck == '„é') {
        return true;
    }
    // No.5598
    // ê‡ñæ:e38f
    // 0xe38f (Windows-31J)
    // 0x7e7d (UTF-16BE)
    if (argCheck == '„è') {
        return true;
    }
    // No.5599
    // ê‡ñæ:e390
    // 0xe390 (Windows-31J)
    // 0x8fae (UTF-16BE)
    if (argCheck == '„ê') {
        return true;
    }
    // No.5600
    // ê‡ñæ:e391
    // 0xe391 (Windows-31J)
    // 0x7e7f (UTF-16BE)
    if (argCheck == '„ë') {
        return true;
    }
    // No.5601
    // ê‡ñæ:e392
    // 0xe392 (Windows-31J)
    // 0x7e88 (UTF-16BE)
    if (argCheck == '„í') {
        return true;
    }
    // No.5602
    // ê‡ñæ:e393
    // 0xe393 (Windows-31J)
    // 0x7e89 (UTF-16BE)
    if (argCheck == '„ì') {
        return true;
    }
    // No.5603
    // ê‡ñæ:e394
    // 0xe394 (Windows-31J)
    // 0x7e8c (UTF-16BE)
    if (argCheck == '„î') {
        return true;
    }
    // No.5604
    // ê‡ñæ:e395
    // 0xe395 (Windows-31J)
    // 0x7e92 (UTF-16BE)
    if (argCheck == '„ï') {
        return true;
    }
    // No.5605
    // ê‡ñæ:e396
    // 0xe396 (Windows-31J)
    // 0x7e90 (UTF-16BE)
    if (argCheck == '„ñ') {
        return true;
    }
    // No.5606
    // ê‡ñæ:e397
    // 0xe397 (Windows-31J)
    // 0x7e93 (UTF-16BE)
    if (argCheck == '„ó') {
        return true;
    }
    // No.5607
    // ê‡ñæ:e398
    // 0xe398 (Windows-31J)
    // 0x7e94 (UTF-16BE)
    if (argCheck == '„ò') {
        return true;
    }
    // No.5608
    // ê‡ñæ:e399
    // 0xe399 (Windows-31J)
    // 0x7e96 (UTF-16BE)
    if (argCheck == '„ô') {
        return true;
    }
    // No.5609
    // ê‡ñæ:e39a
    // 0xe39a (Windows-31J)
    // 0x7e8e (UTF-16BE)
    if (argCheck == '„ö') {
        return true;
    }
    // No.5610
    // ê‡ñæ:e39b
    // 0xe39b (Windows-31J)
    // 0x7e9b (UTF-16BE)
    if (argCheck == '„õ') {
        return true;
    }
    // No.5611
    // ê‡ñæ:e39c
    // 0xe39c (Windows-31J)
    // 0x7e9c (UTF-16BE)
    if (argCheck == '„ú') {
        return true;
    }
    // No.5612
    // ê‡ñæ:e39d
    // 0xe39d (Windows-31J)
    // 0x7f38 (UTF-16BE)
    if (argCheck == '„ù') {
        return true;
    }
    // No.5613
    // ê‡ñæ:e39e
    // 0xe39e (Windows-31J)
    // 0x7f3a (UTF-16BE)
    if (argCheck == '„û') {
        return true;
    }
    // No.5614
    // ê‡ñæ:e39f
    // 0xe39f (Windows-31J)
    // 0x7f45 (UTF-16BE)
    if (argCheck == '„ü') {
        return true;
    }
    // No.5615
    // ê‡ñæ:e3a0
    // 0xe3a0 (Windows-31J)
    // 0x7f4c (UTF-16BE)
    if (argCheck == '„†') {
        return true;
    }
    // No.5616
    // ê‡ñæ:e3a1
    // 0xe3a1 (Windows-31J)
    // 0x7f4d (UTF-16BE)
    if (argCheck == '„°') {
        return true;
    }
    // No.5617
    // ê‡ñæ:e3a2
    // 0xe3a2 (Windows-31J)
    // 0x7f4e (UTF-16BE)
    if (argCheck == '„¢') {
        return true;
    }
    // No.5618
    // ê‡ñæ:e3a3
    // 0xe3a3 (Windows-31J)
    // 0x7f50 (UTF-16BE)
    if (argCheck == '„£') {
        return true;
    }
    // No.5619
    // ê‡ñæ:e3a4
    // 0xe3a4 (Windows-31J)
    // 0x7f51 (UTF-16BE)
    if (argCheck == '„§') {
        return true;
    }
    // No.5620
    // ê‡ñæ:e3a5
    // 0xe3a5 (Windows-31J)
    // 0x7f55 (UTF-16BE)
    if (argCheck == '„•') {
        return true;
    }
    // No.5621
    // ê‡ñæ:e3a6
    // 0xe3a6 (Windows-31J)
    // 0x7f54 (UTF-16BE)
    if (argCheck == '„¶') {
        return true;
    }
    // No.5622
    // ê‡ñæ:e3a7
    // 0xe3a7 (Windows-31J)
    // 0x7f58 (UTF-16BE)
    if (argCheck == '„ß') {
        return true;
    }
    // No.5623
    // ê‡ñæ:e3a8
    // 0xe3a8 (Windows-31J)
    // 0x7f5f (UTF-16BE)
    if (argCheck == '„®') {
        return true;
    }
    // No.5624
    // ê‡ñæ:e3a9
    // 0xe3a9 (Windows-31J)
    // 0x7f60 (UTF-16BE)
    if (argCheck == '„©') {
        return true;
    }
    // No.5625
    // ê‡ñæ:e3aa
    // 0xe3aa (Windows-31J)
    // 0x7f68 (UTF-16BE)
    if (argCheck == '„™') {
        return true;
    }
    // No.5626
    // ê‡ñæ:e3ab
    // 0xe3ab (Windows-31J)
    // 0x7f69 (UTF-16BE)
    if (argCheck == '„´') {
        return true;
    }
    // No.5627
    // ê‡ñæ:e3ac
    // 0xe3ac (Windows-31J)
    // 0x7f67 (UTF-16BE)
    if (argCheck == '„¨') {
        return true;
    }
    // No.5628
    // ê‡ñæ:e3ad
    // 0xe3ad (Windows-31J)
    // 0x7f78 (UTF-16BE)
    if (argCheck == '„≠') {
        return true;
    }
    // No.5629
    // ê‡ñæ:e3ae
    // 0xe3ae (Windows-31J)
    // 0x7f82 (UTF-16BE)
    if (argCheck == '„Æ') {
        return true;
    }
    // No.5630
    // ê‡ñæ:e3af
    // 0xe3af (Windows-31J)
    // 0x7f86 (UTF-16BE)
    if (argCheck == '„Ø') {
        return true;
    }
    // No.5631
    // ê‡ñæ:e3b0
    // 0xe3b0 (Windows-31J)
    // 0x7f83 (UTF-16BE)
    if (argCheck == '„∞') {
        return true;
    }
    // No.5632
    // ê‡ñæ:e3b1
    // 0xe3b1 (Windows-31J)
    // 0x7f88 (UTF-16BE)
    if (argCheck == '„±') {
        return true;
    }
    // No.5633
    // ê‡ñæ:e3b2
    // 0xe3b2 (Windows-31J)
    // 0x7f87 (UTF-16BE)
    if (argCheck == '„≤') {
        return true;
    }
    // No.5634
    // ê‡ñæ:e3b3
    // 0xe3b3 (Windows-31J)
    // 0x7f8c (UTF-16BE)
    if (argCheck == '„≥') {
        return true;
    }
    // No.5635
    // ê‡ñæ:e3b4
    // 0xe3b4 (Windows-31J)
    // 0x7f94 (UTF-16BE)
    if (argCheck == '„¥') {
        return true;
    }
    // No.5636
    // ê‡ñæ:e3b5
    // 0xe3b5 (Windows-31J)
    // 0x7f9e (UTF-16BE)
    if (argCheck == '„µ') {
        return true;
    }
    // No.5637
    // ê‡ñæ:e3b6
    // 0xe3b6 (Windows-31J)
    // 0x7f9d (UTF-16BE)
    if (argCheck == '„∂') {
        return true;
    }
    // No.5638
    // ê‡ñæ:e3b7
    // 0xe3b7 (Windows-31J)
    // 0x7f9a (UTF-16BE)
    if (argCheck == '„∑') {
        return true;
    }
    // No.5639
    // ê‡ñæ:e3b8
    // 0xe3b8 (Windows-31J)
    // 0x7fa3 (UTF-16BE)
    if (argCheck == '„∏') {
        return true;
    }
    // No.5640
    // ê‡ñæ:e3b9
    // 0xe3b9 (Windows-31J)
    // 0x7faf (UTF-16BE)
    if (argCheck == '„π') {
        return true;
    }
    // No.5641
    // ê‡ñæ:e3ba
    // 0xe3ba (Windows-31J)
    // 0x7fb2 (UTF-16BE)
    if (argCheck == '„∫') {
        return true;
    }
    // No.5642
    // ê‡ñæ:e3bb
    // 0xe3bb (Windows-31J)
    // 0x7fb9 (UTF-16BE)
    if (argCheck == '„ª') {
        return true;
    }
    // No.5643
    // ê‡ñæ:e3bc
    // 0xe3bc (Windows-31J)
    // 0x7fae (UTF-16BE)
    if (argCheck == '„º') {
        return true;
    }
    // No.5644
    // ê‡ñæ:e3bd
    // 0xe3bd (Windows-31J)
    // 0x7fb6 (UTF-16BE)
    if (argCheck == '„Ω') {
        return true;
    }
    // No.5645
    // ê‡ñæ:e3be
    // 0xe3be (Windows-31J)
    // 0x7fb8 (UTF-16BE)
    if (argCheck == '„æ') {
        return true;
    }
    // No.5646
    // ê‡ñæ:e3bf
    // 0xe3bf (Windows-31J)
    // 0x8b71 (UTF-16BE)
    if (argCheck == '„ø') {
        return true;
    }
    // No.5647
    // ê‡ñæ:e3c0
    // 0xe3c0 (Windows-31J)
    // 0x7fc5 (UTF-16BE)
    if (argCheck == '„¿') {
        return true;
    }
    // No.5648
    // ê‡ñæ:e3c1
    // 0xe3c1 (Windows-31J)
    // 0x7fc6 (UTF-16BE)
    if (argCheck == '„¡') {
        return true;
    }
    // No.5649
    // ê‡ñæ:e3c2
    // 0xe3c2 (Windows-31J)
    // 0x7fca (UTF-16BE)
    if (argCheck == '„¬') {
        return true;
    }
    // No.5650
    // ê‡ñæ:e3c3
    // 0xe3c3 (Windows-31J)
    // 0x7fd5 (UTF-16BE)
    if (argCheck == '„√') {
        return true;
    }
    // No.5651
    // ê‡ñæ:e3c4
    // 0xe3c4 (Windows-31J)
    // 0x7fd4 (UTF-16BE)
    if (argCheck == '„ƒ') {
        return true;
    }
    // No.5652
    // ê‡ñæ:e3c5
    // 0xe3c5 (Windows-31J)
    // 0x7fe1 (UTF-16BE)
    if (argCheck == '„≈') {
        return true;
    }
    // No.5653
    // ê‡ñæ:e3c6
    // 0xe3c6 (Windows-31J)
    // 0x7fe6 (UTF-16BE)
    if (argCheck == '„∆') {
        return true;
    }
    // No.5654
    // ê‡ñæ:e3c7
    // 0xe3c7 (Windows-31J)
    // 0x7fe9 (UTF-16BE)
    if (argCheck == '„«') {
        return true;
    }
    // No.5655
    // ê‡ñæ:e3c8
    // 0xe3c8 (Windows-31J)
    // 0x7ff3 (UTF-16BE)
    if (argCheck == '„»') {
        return true;
    }
    // No.5656
    // ê‡ñæ:e3c9
    // 0xe3c9 (Windows-31J)
    // 0x7ff9 (UTF-16BE)
    if (argCheck == '„…') {
        return true;
    }
    // No.5657
    // ê‡ñæ:e3ca
    // 0xe3ca (Windows-31J)
    // 0x98dc (UTF-16BE)
    if (argCheck == '„ ') {
        return true;
    }
    // No.5658
    // ê‡ñæ:e3cb
    // 0xe3cb (Windows-31J)
    // 0x8006 (UTF-16BE)
    if (argCheck == '„À') {
        return true;
    }
    // No.5659
    // ê‡ñæ:e3cc
    // 0xe3cc (Windows-31J)
    // 0x8004 (UTF-16BE)
    if (argCheck == '„Ã') {
        return true;
    }
    // No.5660
    // ê‡ñæ:e3cd
    // 0xe3cd (Windows-31J)
    // 0x800b (UTF-16BE)
    if (argCheck == '„Õ') {
        return true;
    }
    // No.5661
    // ê‡ñæ:e3ce
    // 0xe3ce (Windows-31J)
    // 0x8012 (UTF-16BE)
    if (argCheck == '„Œ') {
        return true;
    }
    // No.5662
    // ê‡ñæ:e3cf
    // 0xe3cf (Windows-31J)
    // 0x8018 (UTF-16BE)
    if (argCheck == '„œ') {
        return true;
    }
    // No.5663
    // ê‡ñæ:e3d0
    // 0xe3d0 (Windows-31J)
    // 0x8019 (UTF-16BE)
    if (argCheck == '„–') {
        return true;
    }
    // No.5664
    // ê‡ñæ:e3d1
    // 0xe3d1 (Windows-31J)
    // 0x801c (UTF-16BE)
    if (argCheck == '„—') {
        return true;
    }
    // No.5665
    // ê‡ñæ:e3d2
    // 0xe3d2 (Windows-31J)
    // 0x8021 (UTF-16BE)
    if (argCheck == '„“') {
        return true;
    }
    // No.5666
    // ê‡ñæ:e3d3
    // 0xe3d3 (Windows-31J)
    // 0x8028 (UTF-16BE)
    if (argCheck == '„”') {
        return true;
    }
    // No.5667
    // ê‡ñæ:e3d4
    // 0xe3d4 (Windows-31J)
    // 0x803f (UTF-16BE)
    if (argCheck == '„‘') {
        return true;
    }
    // No.5668
    // ê‡ñæ:e3d5
    // 0xe3d5 (Windows-31J)
    // 0x803b (UTF-16BE)
    if (argCheck == '„’') {
        return true;
    }
    // No.5669
    // ê‡ñæ:e3d6
    // 0xe3d6 (Windows-31J)
    // 0x804a (UTF-16BE)
    if (argCheck == '„÷') {
        return true;
    }
    // No.5670
    // ê‡ñæ:e3d7
    // 0xe3d7 (Windows-31J)
    // 0x8046 (UTF-16BE)
    if (argCheck == '„◊') {
        return true;
    }
    // No.5671
    // ê‡ñæ:e3d8
    // 0xe3d8 (Windows-31J)
    // 0x8052 (UTF-16BE)
    if (argCheck == '„ÿ') {
        return true;
    }
    // No.5672
    // ê‡ñæ:e3d9
    // 0xe3d9 (Windows-31J)
    // 0x8058 (UTF-16BE)
    if (argCheck == '„Ÿ') {
        return true;
    }
    // No.5673
    // ê‡ñæ:e3da
    // 0xe3da (Windows-31J)
    // 0x805a (UTF-16BE)
    if (argCheck == '„⁄') {
        return true;
    }
    // No.5674
    // ê‡ñæ:e3db
    // 0xe3db (Windows-31J)
    // 0x805f (UTF-16BE)
    if (argCheck == '„€') {
        return true;
    }
    // No.5675
    // ê‡ñæ:e3dc
    // 0xe3dc (Windows-31J)
    // 0x8062 (UTF-16BE)
    if (argCheck == '„‹') {
        return true;
    }
    // No.5676
    // ê‡ñæ:e3dd
    // 0xe3dd (Windows-31J)
    // 0x8068 (UTF-16BE)
    if (argCheck == '„›') {
        return true;
    }
    // No.5677
    // ê‡ñæ:e3de
    // 0xe3de (Windows-31J)
    // 0x8073 (UTF-16BE)
    if (argCheck == '„ﬁ') {
        return true;
    }
    // No.5678
    // ê‡ñæ:e3df
    // 0xe3df (Windows-31J)
    // 0x8072 (UTF-16BE)
    if (argCheck == '„ﬂ') {
        return true;
    }
    // No.5679
    // ê‡ñæ:e3e0
    // 0xe3e0 (Windows-31J)
    // 0x8070 (UTF-16BE)
    if (argCheck == '„‡') {
        return true;
    }
    // No.5680
    // ê‡ñæ:e3e1
    // 0xe3e1 (Windows-31J)
    // 0x8076 (UTF-16BE)
    if (argCheck == '„·') {
        return true;
    }
    // No.5681
    // ê‡ñæ:e3e2
    // 0xe3e2 (Windows-31J)
    // 0x8079 (UTF-16BE)
    if (argCheck == '„‚') {
        return true;
    }
    // No.5682
    // ê‡ñæ:e3e3
    // 0xe3e3 (Windows-31J)
    // 0x807d (UTF-16BE)
    if (argCheck == '„„') {
        return true;
    }
    // No.5683
    // ê‡ñæ:e3e4
    // 0xe3e4 (Windows-31J)
    // 0x807f (UTF-16BE)
    if (argCheck == '„‰') {
        return true;
    }
    // No.5684
    // ê‡ñæ:e3e5
    // 0xe3e5 (Windows-31J)
    // 0x8084 (UTF-16BE)
    if (argCheck == '„Â') {
        return true;
    }
    // No.5685
    // ê‡ñæ:e3e6
    // 0xe3e6 (Windows-31J)
    // 0x8086 (UTF-16BE)
    if (argCheck == '„Ê') {
        return true;
    }
    // No.5686
    // ê‡ñæ:e3e7
    // 0xe3e7 (Windows-31J)
    // 0x8085 (UTF-16BE)
    if (argCheck == '„Á') {
        return true;
    }
    // No.5687
    // ê‡ñæ:e3e8
    // 0xe3e8 (Windows-31J)
    // 0x809b (UTF-16BE)
    if (argCheck == '„Ë') {
        return true;
    }
    // No.5688
    // ê‡ñæ:e3e9
    // 0xe3e9 (Windows-31J)
    // 0x8093 (UTF-16BE)
    if (argCheck == '„È') {
        return true;
    }
    // No.5689
    // ê‡ñæ:e3ea
    // 0xe3ea (Windows-31J)
    // 0x809a (UTF-16BE)
    if (argCheck == '„Í') {
        return true;
    }
    // No.5690
    // ê‡ñæ:e3eb
    // 0xe3eb (Windows-31J)
    // 0x80ad (UTF-16BE)
    if (argCheck == '„Î') {
        return true;
    }
    // No.5691
    // ê‡ñæ:e3ec
    // 0xe3ec (Windows-31J)
    // 0x5190 (UTF-16BE)
    if (argCheck == '„Ï') {
        return true;
    }
    // No.5692
    // ê‡ñæ:e3ed
    // 0xe3ed (Windows-31J)
    // 0x80ac (UTF-16BE)
    if (argCheck == '„Ì') {
        return true;
    }
    // No.5693
    // ê‡ñæ:e3ee
    // 0xe3ee (Windows-31J)
    // 0x80db (UTF-16BE)
    if (argCheck == '„Ó') {
        return true;
    }
    // No.5694
    // ê‡ñæ:e3ef
    // 0xe3ef (Windows-31J)
    // 0x80e5 (UTF-16BE)
    if (argCheck == '„Ô') {
        return true;
    }
    // No.5695
    // ê‡ñæ:e3f0
    // 0xe3f0 (Windows-31J)
    // 0x80d9 (UTF-16BE)
    if (argCheck == '„') {
        return true;
    }
    // No.5696
    // ê‡ñæ:e3f1
    // 0xe3f1 (Windows-31J)
    // 0x80dd (UTF-16BE)
    if (argCheck == '„Ò') {
        return true;
    }
    // No.5697
    // ê‡ñæ:e3f2
    // 0xe3f2 (Windows-31J)
    // 0x80c4 (UTF-16BE)
    if (argCheck == '„Ú') {
        return true;
    }
    // No.5698
    // ê‡ñæ:e3f3
    // 0xe3f3 (Windows-31J)
    // 0x80da (UTF-16BE)
    if (argCheck == '„Û') {
        return true;
    }
    // No.5699
    // ê‡ñæ:e3f4
    // 0xe3f4 (Windows-31J)
    // 0x80d6 (UTF-16BE)
    if (argCheck == '„Ù') {
        return true;
    }
    // No.5700
    // ê‡ñæ:e3f5
    // 0xe3f5 (Windows-31J)
    // 0x8109 (UTF-16BE)
    if (argCheck == '„ı') {
        return true;
    }
    // No.5701
    // ê‡ñæ:e3f6
    // 0xe3f6 (Windows-31J)
    // 0x80ef (UTF-16BE)
    if (argCheck == '„ˆ') {
        return true;
    }
    // No.5702
    // ê‡ñæ:e3f7
    // 0xe3f7 (Windows-31J)
    // 0x80f1 (UTF-16BE)
    if (argCheck == '„˜') {
        return true;
    }
    // No.5703
    // ê‡ñæ:e3f8
    // 0xe3f8 (Windows-31J)
    // 0x811b (UTF-16BE)
    if (argCheck == '„¯') {
        return true;
    }
    // No.5704
    // ê‡ñæ:e3f9
    // 0xe3f9 (Windows-31J)
    // 0x8129 (UTF-16BE)
    if (argCheck == '„˘') {
        return true;
    }
    // No.5705
    // ê‡ñæ:e3fa
    // 0xe3fa (Windows-31J)
    // 0x8123 (UTF-16BE)
    if (argCheck == '„˙') {
        return true;
    }
    // No.5706
    // ê‡ñæ:e3fb
    // 0xe3fb (Windows-31J)
    // 0x812f (UTF-16BE)
    if (argCheck == '„˚') {
        return true;
    }
    // No.5707
    // ê‡ñæ:e3fc
    // 0xe3fc (Windows-31J)
    // 0x814b (UTF-16BE)
    if (argCheck == '„¸') {
        return true;
    }
    // No.5708
    // ê‡ñæ:e440
    // 0xe440 (Windows-31J)
    // 0x968b (UTF-16BE)
    if (argCheck == '‰@') {
        return true;
    }
    // No.5709
    // ê‡ñæ:e441
    // 0xe441 (Windows-31J)
    // 0x8146 (UTF-16BE)
    if (argCheck == '‰A') {
        return true;
    }
    // No.5710
    // ê‡ñæ:e442
    // 0xe442 (Windows-31J)
    // 0x813e (UTF-16BE)
    if (argCheck == '‰B') {
        return true;
    }
    // No.5711
    // ê‡ñæ:e443
    // 0xe443 (Windows-31J)
    // 0x8153 (UTF-16BE)
    if (argCheck == '‰C') {
        return true;
    }
    // No.5712
    // ê‡ñæ:e444
    // 0xe444 (Windows-31J)
    // 0x8151 (UTF-16BE)
    if (argCheck == '‰D') {
        return true;
    }
    // No.5713
    // ê‡ñæ:e445
    // 0xe445 (Windows-31J)
    // 0x80fc (UTF-16BE)
    if (argCheck == '‰E') {
        return true;
    }
    // No.5714
    // ê‡ñæ:e446
    // 0xe446 (Windows-31J)
    // 0x8171 (UTF-16BE)
    if (argCheck == '‰F') {
        return true;
    }
    // No.5715
    // ê‡ñæ:e447
    // 0xe447 (Windows-31J)
    // 0x816e (UTF-16BE)
    if (argCheck == '‰G') {
        return true;
    }
    // No.5716
    // ê‡ñæ:e448
    // 0xe448 (Windows-31J)
    // 0x8165 (UTF-16BE)
    if (argCheck == '‰H') {
        return true;
    }
    // No.5717
    // ê‡ñæ:e449
    // 0xe449 (Windows-31J)
    // 0x8166 (UTF-16BE)
    if (argCheck == '‰I') {
        return true;
    }
    // No.5718
    // ê‡ñæ:e44a
    // 0xe44a (Windows-31J)
    // 0x8174 (UTF-16BE)
    if (argCheck == '‰J') {
        return true;
    }
    // No.5719
    // ê‡ñæ:e44b
    // 0xe44b (Windows-31J)
    // 0x8183 (UTF-16BE)
    if (argCheck == '‰K') {
        return true;
    }
    // No.5720
    // ê‡ñæ:e44c
    // 0xe44c (Windows-31J)
    // 0x8188 (UTF-16BE)
    if (argCheck == '‰L') {
        return true;
    }
    // No.5721
    // ê‡ñæ:e44d
    // 0xe44d (Windows-31J)
    // 0x818a (UTF-16BE)
    if (argCheck == '‰M') {
        return true;
    }
    // No.5722
    // ê‡ñæ:e44e
    // 0xe44e (Windows-31J)
    // 0x8180 (UTF-16BE)
    if (argCheck == '‰N') {
        return true;
    }
    // No.5723
    // ê‡ñæ:e44f
    // 0xe44f (Windows-31J)
    // 0x8182 (UTF-16BE)
    if (argCheck == '‰O') {
        return true;
    }
    // No.5724
    // ê‡ñæ:e450
    // 0xe450 (Windows-31J)
    // 0x81a0 (UTF-16BE)
    if (argCheck == '‰P') {
        return true;
    }
    // No.5725
    // ê‡ñæ:e451
    // 0xe451 (Windows-31J)
    // 0x8195 (UTF-16BE)
    if (argCheck == '‰Q') {
        return true;
    }
    // No.5726
    // ê‡ñæ:e452
    // 0xe452 (Windows-31J)
    // 0x81a4 (UTF-16BE)
    if (argCheck == '‰R') {
        return true;
    }
    // No.5727
    // ê‡ñæ:e453
    // 0xe453 (Windows-31J)
    // 0x81a3 (UTF-16BE)
    if (argCheck == '‰S') {
        return true;
    }
    // No.5728
    // ê‡ñæ:e454
    // 0xe454 (Windows-31J)
    // 0x815f (UTF-16BE)
    if (argCheck == '‰T') {
        return true;
    }
    // No.5729
    // ê‡ñæ:e455
    // 0xe455 (Windows-31J)
    // 0x8193 (UTF-16BE)
    if (argCheck == '‰U') {
        return true;
    }
    // No.5730
    // ê‡ñæ:e456
    // 0xe456 (Windows-31J)
    // 0x81a9 (UTF-16BE)
    if (argCheck == '‰V') {
        return true;
    }
    // No.5731
    // ê‡ñæ:e457
    // 0xe457 (Windows-31J)
    // 0x81b0 (UTF-16BE)
    if (argCheck == '‰W') {
        return true;
    }
    // No.5732
    // ê‡ñæ:e458
    // 0xe458 (Windows-31J)
    // 0x81b5 (UTF-16BE)
    if (argCheck == '‰X') {
        return true;
    }
    // No.5733
    // ê‡ñæ:e459
    // 0xe459 (Windows-31J)
    // 0x81be (UTF-16BE)
    if (argCheck == '‰Y') {
        return true;
    }
    // No.5734
    // ê‡ñæ:e45a
    // 0xe45a (Windows-31J)
    // 0x81b8 (UTF-16BE)
    if (argCheck == '‰Z') {
        return true;
    }
    // No.5735
    // ê‡ñæ:e45b
    // 0xe45b (Windows-31J)
    // 0x81bd (UTF-16BE)
    if (argCheck == '‰[') {
        return true;
    }
    // No.5736
    // ê‡ñæ:e45c
    // 0xe45c (Windows-31J)
    // 0x81c0 (UTF-16BE)
    if (argCheck == '‰\') {
        return true;
    }
    // No.5737
    // ê‡ñæ:e45d
    // 0xe45d (Windows-31J)
    // 0x81c2 (UTF-16BE)
    if (argCheck == '‰]') {
        return true;
    }
    // No.5738
    // ê‡ñæ:e45e
    // 0xe45e (Windows-31J)
    // 0x81ba (UTF-16BE)
    if (argCheck == '‰^') {
        return true;
    }
    // No.5739
    // ê‡ñæ:e45f
    // 0xe45f (Windows-31J)
    // 0x81c9 (UTF-16BE)
    if (argCheck == '‰_') {
        return true;
    }
    // No.5740
    // ê‡ñæ:e460
    // 0xe460 (Windows-31J)
    // 0x81cd (UTF-16BE)
    if (argCheck == '‰`') {
        return true;
    }
    // No.5741
    // ê‡ñæ:e461
    // 0xe461 (Windows-31J)
    // 0x81d1 (UTF-16BE)
    if (argCheck == '‰a') {
        return true;
    }
    // No.5742
    // ê‡ñæ:e462
    // 0xe462 (Windows-31J)
    // 0x81d9 (UTF-16BE)
    if (argCheck == '‰b') {
        return true;
    }
    // No.5743
    // ê‡ñæ:e463
    // 0xe463 (Windows-31J)
    // 0x81d8 (UTF-16BE)
    if (argCheck == '‰c') {
        return true;
    }
    // No.5744
    // ê‡ñæ:e464
    // 0xe464 (Windows-31J)
    // 0x81c8 (UTF-16BE)
    if (argCheck == '‰d') {
        return true;
    }
    // No.5745
    // ê‡ñæ:e465
    // 0xe465 (Windows-31J)
    // 0x81da (UTF-16BE)
    if (argCheck == '‰e') {
        return true;
    }
    // No.5746
    // ê‡ñæ:e466
    // 0xe466 (Windows-31J)
    // 0x81df (UTF-16BE)
    if (argCheck == '‰f') {
        return true;
    }
    // No.5747
    // ê‡ñæ:e467
    // 0xe467 (Windows-31J)
    // 0x81e0 (UTF-16BE)
    if (argCheck == '‰g') {
        return true;
    }
    // No.5748
    // ê‡ñæ:e468
    // 0xe468 (Windows-31J)
    // 0x81e7 (UTF-16BE)
    if (argCheck == '‰h') {
        return true;
    }
    // No.5749
    // ê‡ñæ:e469
    // 0xe469 (Windows-31J)
    // 0x81fa (UTF-16BE)
    if (argCheck == '‰i') {
        return true;
    }
    // No.5750
    // ê‡ñæ:e46a
    // 0xe46a (Windows-31J)
    // 0x81fb (UTF-16BE)
    if (argCheck == '‰j') {
        return true;
    }
    // No.5751
    // ê‡ñæ:e46b
    // 0xe46b (Windows-31J)
    // 0x81fe (UTF-16BE)
    if (argCheck == '‰k') {
        return true;
    }
    // No.5752
    // ê‡ñæ:e46c
    // 0xe46c (Windows-31J)
    // 0x8201 (UTF-16BE)
    if (argCheck == '‰l') {
        return true;
    }
    // No.5753
    // ê‡ñæ:e46d
    // 0xe46d (Windows-31J)
    // 0x8202 (UTF-16BE)
    if (argCheck == '‰m') {
        return true;
    }
    // No.5754
    // ê‡ñæ:e46e
    // 0xe46e (Windows-31J)
    // 0x8205 (UTF-16BE)
    if (argCheck == '‰n') {
        return true;
    }
    // No.5755
    // ê‡ñæ:e46f
    // 0xe46f (Windows-31J)
    // 0x8207 (UTF-16BE)
    if (argCheck == '‰o') {
        return true;
    }
    // No.5756
    // ê‡ñæ:e470
    // 0xe470 (Windows-31J)
    // 0x820a (UTF-16BE)
    if (argCheck == '‰p') {
        return true;
    }
    // No.5757
    // ê‡ñæ:e471
    // 0xe471 (Windows-31J)
    // 0x820d (UTF-16BE)
    if (argCheck == '‰q') {
        return true;
    }
    // No.5758
    // ê‡ñæ:e472
    // 0xe472 (Windows-31J)
    // 0x8210 (UTF-16BE)
    if (argCheck == '‰r') {
        return true;
    }
    // No.5759
    // ê‡ñæ:e473
    // 0xe473 (Windows-31J)
    // 0x8216 (UTF-16BE)
    if (argCheck == '‰s') {
        return true;
    }
    // No.5760
    // ê‡ñæ:e474
    // 0xe474 (Windows-31J)
    // 0x8229 (UTF-16BE)
    if (argCheck == '‰t') {
        return true;
    }
    // No.5761
    // ê‡ñæ:e475
    // 0xe475 (Windows-31J)
    // 0x822b (UTF-16BE)
    if (argCheck == '‰u') {
        return true;
    }
    // No.5762
    // ê‡ñæ:e476
    // 0xe476 (Windows-31J)
    // 0x8238 (UTF-16BE)
    if (argCheck == '‰v') {
        return true;
    }
    // No.5763
    // ê‡ñæ:e477
    // 0xe477 (Windows-31J)
    // 0x8233 (UTF-16BE)
    if (argCheck == '‰w') {
        return true;
    }
    // No.5764
    // ê‡ñæ:e478
    // 0xe478 (Windows-31J)
    // 0x8240 (UTF-16BE)
    if (argCheck == '‰x') {
        return true;
    }
    // No.5765
    // ê‡ñæ:e479
    // 0xe479 (Windows-31J)
    // 0x8259 (UTF-16BE)
    if (argCheck == '‰y') {
        return true;
    }
    // No.5766
    // ê‡ñæ:e47a
    // 0xe47a (Windows-31J)
    // 0x8258 (UTF-16BE)
    if (argCheck == '‰z') {
        return true;
    }
    // No.5767
    // ê‡ñæ:e47b
    // 0xe47b (Windows-31J)
    // 0x825d (UTF-16BE)
    if (argCheck == '‰{') {
        return true;
    }
    // No.5768
    // ê‡ñæ:e47c
    // 0xe47c (Windows-31J)
    // 0x825a (UTF-16BE)
    if (argCheck == '‰|') {
        return true;
    }
    // No.5769
    // ê‡ñæ:e47d
    // 0xe47d (Windows-31J)
    // 0x825f (UTF-16BE)
    if (argCheck == '‰}') {
        return true;
    }
    // No.5770
    // ê‡ñæ:e47e
    // 0xe47e (Windows-31J)
    // 0x8264 (UTF-16BE)
    if (argCheck == '‰~') {
        return true;
    }
    // No.5771
    // ê‡ñæ:e480
    // 0xe480 (Windows-31J)
    // 0x8262 (UTF-16BE)
    if (argCheck == '‰Ä') {
        return true;
    }
    // No.5772
    // ê‡ñæ:e481
    // 0xe481 (Windows-31J)
    // 0x8268 (UTF-16BE)
    if (argCheck == '‰Å') {
        return true;
    }
    // No.5773
    // ê‡ñæ:e482
    // 0xe482 (Windows-31J)
    // 0x826a (UTF-16BE)
    if (argCheck == '‰Ç') {
        return true;
    }
    // No.5774
    // ê‡ñæ:e483
    // 0xe483 (Windows-31J)
    // 0x826b (UTF-16BE)
    if (argCheck == '‰É') {
        return true;
    }
    // No.5775
    // ê‡ñæ:e484
    // 0xe484 (Windows-31J)
    // 0x822e (UTF-16BE)
    if (argCheck == '‰Ñ') {
        return true;
    }
    // No.5776
    // ê‡ñæ:e485
    // 0xe485 (Windows-31J)
    // 0x8271 (UTF-16BE)
    if (argCheck == '‰Ö') {
        return true;
    }
    // No.5777
    // ê‡ñæ:e486
    // 0xe486 (Windows-31J)
    // 0x8277 (UTF-16BE)
    if (argCheck == '‰Ü') {
        return true;
    }
    // No.5778
    // ê‡ñæ:e487
    // 0xe487 (Windows-31J)
    // 0x8278 (UTF-16BE)
    if (argCheck == '‰á') {
        return true;
    }
    // No.5779
    // ê‡ñæ:e488
    // 0xe488 (Windows-31J)
    // 0x827e (UTF-16BE)
    if (argCheck == '‰à') {
        return true;
    }
    // No.5780
    // ê‡ñæ:e489
    // 0xe489 (Windows-31J)
    // 0x828d (UTF-16BE)
    if (argCheck == '‰â') {
        return true;
    }
    // No.5781
    // ê‡ñæ:e48a
    // 0xe48a (Windows-31J)
    // 0x8292 (UTF-16BE)
    if (argCheck == '‰ä') {
        return true;
    }
    // No.5782
    // ê‡ñæ:e48b
    // 0xe48b (Windows-31J)
    // 0x82ab (UTF-16BE)
    if (argCheck == '‰ã') {
        return true;
    }
    // No.5783
    // ê‡ñæ:e48c
    // 0xe48c (Windows-31J)
    // 0x829f (UTF-16BE)
    if (argCheck == '‰å') {
        return true;
    }
    // No.5784
    // ê‡ñæ:e48d
    // 0xe48d (Windows-31J)
    // 0x82bb (UTF-16BE)
    if (argCheck == '‰ç') {
        return true;
    }
    // No.5785
    // ê‡ñæ:e48e
    // 0xe48e (Windows-31J)
    // 0x82ac (UTF-16BE)
    if (argCheck == '‰é') {
        return true;
    }
    // No.5786
    // ê‡ñæ:e48f
    // 0xe48f (Windows-31J)
    // 0x82e1 (UTF-16BE)
    if (argCheck == '‰è') {
        return true;
    }
    // No.5787
    // ê‡ñæ:e490
    // 0xe490 (Windows-31J)
    // 0x82e3 (UTF-16BE)
    if (argCheck == '‰ê') {
        return true;
    }
    // No.5788
    // ê‡ñæ:e491
    // 0xe491 (Windows-31J)
    // 0x82df (UTF-16BE)
    if (argCheck == '‰ë') {
        return true;
    }
    // No.5789
    // ê‡ñæ:e492
    // 0xe492 (Windows-31J)
    // 0x82d2 (UTF-16BE)
    if (argCheck == '‰í') {
        return true;
    }
    // No.5790
    // ê‡ñæ:e493
    // 0xe493 (Windows-31J)
    // 0x82f4 (UTF-16BE)
    if (argCheck == '‰ì') {
        return true;
    }
    // No.5791
    // ê‡ñæ:e494
    // 0xe494 (Windows-31J)
    // 0x82f3 (UTF-16BE)
    if (argCheck == '‰î') {
        return true;
    }
    // No.5792
    // ê‡ñæ:e495
    // 0xe495 (Windows-31J)
    // 0x82fa (UTF-16BE)
    if (argCheck == '‰ï') {
        return true;
    }
    // No.5793
    // ê‡ñæ:e496
    // 0xe496 (Windows-31J)
    // 0x8393 (UTF-16BE)
    if (argCheck == '‰ñ') {
        return true;
    }
    // No.5794
    // ê‡ñæ:e497
    // 0xe497 (Windows-31J)
    // 0x8303 (UTF-16BE)
    if (argCheck == '‰ó') {
        return true;
    }
    // No.5795
    // ê‡ñæ:e498
    // 0xe498 (Windows-31J)
    // 0x82fb (UTF-16BE)
    if (argCheck == '‰ò') {
        return true;
    }
    // No.5796
    // ê‡ñæ:e499
    // 0xe499 (Windows-31J)
    // 0x82f9 (UTF-16BE)
    if (argCheck == '‰ô') {
        return true;
    }
    // No.5797
    // ê‡ñæ:e49a
    // 0xe49a (Windows-31J)
    // 0x82de (UTF-16BE)
    if (argCheck == '‰ö') {
        return true;
    }
    // No.5798
    // ê‡ñæ:e49b
    // 0xe49b (Windows-31J)
    // 0x8306 (UTF-16BE)
    if (argCheck == '‰õ') {
        return true;
    }
    // No.5799
    // ê‡ñæ:e49c
    // 0xe49c (Windows-31J)
    // 0x82dc (UTF-16BE)
    if (argCheck == '‰ú') {
        return true;
    }
    // No.5800
    // ê‡ñæ:e49d
    // 0xe49d (Windows-31J)
    // 0x8309 (UTF-16BE)
    if (argCheck == '‰ù') {
        return true;
    }
    // No.5801
    // ê‡ñæ:e49e
    // 0xe49e (Windows-31J)
    // 0x82d9 (UTF-16BE)
    if (argCheck == '‰û') {
        return true;
    }
    // No.5802
    // ê‡ñæ:e49f
    // 0xe49f (Windows-31J)
    // 0x8335 (UTF-16BE)
    if (argCheck == '‰ü') {
        return true;
    }
    // No.5803
    // ê‡ñæ:e4a0
    // 0xe4a0 (Windows-31J)
    // 0x8334 (UTF-16BE)
    if (argCheck == '‰†') {
        return true;
    }
    // No.5804
    // ê‡ñæ:e4a1
    // 0xe4a1 (Windows-31J)
    // 0x8316 (UTF-16BE)
    if (argCheck == '‰°') {
        return true;
    }
    // No.5805
    // ê‡ñæ:e4a2
    // 0xe4a2 (Windows-31J)
    // 0x8332 (UTF-16BE)
    if (argCheck == '‰¢') {
        return true;
    }
    // No.5806
    // ê‡ñæ:e4a3
    // 0xe4a3 (Windows-31J)
    // 0x8331 (UTF-16BE)
    if (argCheck == '‰£') {
        return true;
    }
    // No.5807
    // ê‡ñæ:e4a4
    // 0xe4a4 (Windows-31J)
    // 0x8340 (UTF-16BE)
    if (argCheck == '‰§') {
        return true;
    }
    // No.5808
    // ê‡ñæ:e4a5
    // 0xe4a5 (Windows-31J)
    // 0x8339 (UTF-16BE)
    if (argCheck == '‰•') {
        return true;
    }
    // No.5809
    // ê‡ñæ:e4a6
    // 0xe4a6 (Windows-31J)
    // 0x8350 (UTF-16BE)
    if (argCheck == '‰¶') {
        return true;
    }
    // No.5810
    // ê‡ñæ:e4a7
    // 0xe4a7 (Windows-31J)
    // 0x8345 (UTF-16BE)
    if (argCheck == '‰ß') {
        return true;
    }
    // No.5811
    // ê‡ñæ:e4a8
    // 0xe4a8 (Windows-31J)
    // 0x832f (UTF-16BE)
    if (argCheck == '‰®') {
        return true;
    }
    // No.5812
    // ê‡ñæ:e4a9
    // 0xe4a9 (Windows-31J)
    // 0x832b (UTF-16BE)
    if (argCheck == '‰©') {
        return true;
    }
    // No.5813
    // ê‡ñæ:e4aa
    // 0xe4aa (Windows-31J)
    // 0x8317 (UTF-16BE)
    if (argCheck == '‰™') {
        return true;
    }
    // No.5814
    // ê‡ñæ:e4ab
    // 0xe4ab (Windows-31J)
    // 0x8318 (UTF-16BE)
    if (argCheck == '‰´') {
        return true;
    }
    // No.5815
    // ê‡ñæ:e4ac
    // 0xe4ac (Windows-31J)
    // 0x8385 (UTF-16BE)
    if (argCheck == '‰¨') {
        return true;
    }
    // No.5816
    // ê‡ñæ:e4ad
    // 0xe4ad (Windows-31J)
    // 0x839a (UTF-16BE)
    if (argCheck == '‰≠') {
        return true;
    }
    // No.5817
    // ê‡ñæ:e4ae
    // 0xe4ae (Windows-31J)
    // 0x83aa (UTF-16BE)
    if (argCheck == '‰Æ') {
        return true;
    }
    // No.5818
    // ê‡ñæ:e4af
    // 0xe4af (Windows-31J)
    // 0x839f (UTF-16BE)
    if (argCheck == '‰Ø') {
        return true;
    }
    // No.5819
    // ê‡ñæ:e4b0
    // 0xe4b0 (Windows-31J)
    // 0x83a2 (UTF-16BE)
    if (argCheck == '‰∞') {
        return true;
    }
    // No.5820
    // ê‡ñæ:e4b1
    // 0xe4b1 (Windows-31J)
    // 0x8396 (UTF-16BE)
    if (argCheck == '‰±') {
        return true;
    }
    // No.5821
    // ê‡ñæ:e4b2
    // 0xe4b2 (Windows-31J)
    // 0x8323 (UTF-16BE)
    if (argCheck == '‰≤') {
        return true;
    }
    // No.5822
    // ê‡ñæ:e4b3
    // 0xe4b3 (Windows-31J)
    // 0x838e (UTF-16BE)
    if (argCheck == '‰≥') {
        return true;
    }
    // No.5823
    // ê‡ñæ:e4b4
    // 0xe4b4 (Windows-31J)
    // 0x8387 (UTF-16BE)
    if (argCheck == '‰¥') {
        return true;
    }
    // No.5824
    // ê‡ñæ:e4b5
    // 0xe4b5 (Windows-31J)
    // 0x838a (UTF-16BE)
    if (argCheck == '‰µ') {
        return true;
    }
    // No.5825
    // ê‡ñæ:e4b6
    // 0xe4b6 (Windows-31J)
    // 0x837c (UTF-16BE)
    if (argCheck == '‰∂') {
        return true;
    }
    // No.5826
    // ê‡ñæ:e4b7
    // 0xe4b7 (Windows-31J)
    // 0x83b5 (UTF-16BE)
    if (argCheck == '‰∑') {
        return true;
    }
    // No.5827
    // ê‡ñæ:e4b8
    // 0xe4b8 (Windows-31J)
    // 0x8373 (UTF-16BE)
    if (argCheck == '‰∏') {
        return true;
    }
    // No.5828
    // ê‡ñæ:e4b9
    // 0xe4b9 (Windows-31J)
    // 0x8375 (UTF-16BE)
    if (argCheck == '‰π') {
        return true;
    }
    // No.5829
    // ê‡ñæ:e4ba
    // 0xe4ba (Windows-31J)
    // 0x83a0 (UTF-16BE)
    if (argCheck == '‰∫') {
        return true;
    }
    // No.5830
    // ê‡ñæ:e4bb
    // 0xe4bb (Windows-31J)
    // 0x8389 (UTF-16BE)
    if (argCheck == '‰ª') {
        return true;
    }
    // No.5831
    // ê‡ñæ:e4bc
    // 0xe4bc (Windows-31J)
    // 0x83a8 (UTF-16BE)
    if (argCheck == '‰º') {
        return true;
    }
    // No.5832
    // ê‡ñæ:e4bd
    // 0xe4bd (Windows-31J)
    // 0x83f4 (UTF-16BE)
    if (argCheck == '‰Ω') {
        return true;
    }
    // No.5833
    // ê‡ñæ:e4be
    // 0xe4be (Windows-31J)
    // 0x8413 (UTF-16BE)
    if (argCheck == '‰æ') {
        return true;
    }
    // No.5834
    // ê‡ñæ:e4bf
    // 0xe4bf (Windows-31J)
    // 0x83eb (UTF-16BE)
    if (argCheck == '‰ø') {
        return true;
    }
    // No.5835
    // ê‡ñæ:e4c0
    // 0xe4c0 (Windows-31J)
    // 0x83ce (UTF-16BE)
    if (argCheck == '‰¿') {
        return true;
    }
    // No.5836
    // ê‡ñæ:e4c1
    // 0xe4c1 (Windows-31J)
    // 0x83fd (UTF-16BE)
    if (argCheck == '‰¡') {
        return true;
    }
    // No.5837
    // ê‡ñæ:e4c2
    // 0xe4c2 (Windows-31J)
    // 0x8403 (UTF-16BE)
    if (argCheck == '‰¬') {
        return true;
    }
    // No.5838
    // ê‡ñæ:e4c3
    // 0xe4c3 (Windows-31J)
    // 0x83d8 (UTF-16BE)
    if (argCheck == '‰√') {
        return true;
    }
    // No.5839
    // ê‡ñæ:e4c4
    // 0xe4c4 (Windows-31J)
    // 0x840b (UTF-16BE)
    if (argCheck == '‰ƒ') {
        return true;
    }
    // No.5840
    // ê‡ñæ:e4c5
    // 0xe4c5 (Windows-31J)
    // 0x83c1 (UTF-16BE)
    if (argCheck == '‰≈') {
        return true;
    }
    // No.5841
    // ê‡ñæ:e4c6
    // 0xe4c6 (Windows-31J)
    // 0x83f7 (UTF-16BE)
    if (argCheck == '‰∆') {
        return true;
    }
    // No.5842
    // ê‡ñæ:e4c7
    // 0xe4c7 (Windows-31J)
    // 0x8407 (UTF-16BE)
    if (argCheck == '‰«') {
        return true;
    }
    // No.5843
    // ê‡ñæ:e4c8
    // 0xe4c8 (Windows-31J)
    // 0x83e0 (UTF-16BE)
    if (argCheck == '‰»') {
        return true;
    }
    // No.5844
    // ê‡ñæ:e4c9
    // 0xe4c9 (Windows-31J)
    // 0x83f2 (UTF-16BE)
    if (argCheck == '‰…') {
        return true;
    }
    // No.5845
    // ê‡ñæ:e4ca
    // 0xe4ca (Windows-31J)
    // 0x840d (UTF-16BE)
    if (argCheck == '‰ ') {
        return true;
    }
    // No.5846
    // ê‡ñæ:e4cb
    // 0xe4cb (Windows-31J)
    // 0x8422 (UTF-16BE)
    if (argCheck == '‰À') {
        return true;
    }
    // No.5847
    // ê‡ñæ:e4cc
    // 0xe4cc (Windows-31J)
    // 0x8420 (UTF-16BE)
    if (argCheck == '‰Ã') {
        return true;
    }
    // No.5848
    // ê‡ñæ:e4cd
    // 0xe4cd (Windows-31J)
    // 0x83bd (UTF-16BE)
    if (argCheck == '‰Õ') {
        return true;
    }
    // No.5849
    // ê‡ñæ:e4ce
    // 0xe4ce (Windows-31J)
    // 0x8438 (UTF-16BE)
    if (argCheck == '‰Œ') {
        return true;
    }
    // No.5850
    // ê‡ñæ:e4cf
    // 0xe4cf (Windows-31J)
    // 0x8506 (UTF-16BE)
    if (argCheck == '‰œ') {
        return true;
    }
    // No.5851
    // ê‡ñæ:e4d0
    // 0xe4d0 (Windows-31J)
    // 0x83fb (UTF-16BE)
    if (argCheck == '‰–') {
        return true;
    }
    // No.5852
    // ê‡ñæ:e4d1
    // 0xe4d1 (Windows-31J)
    // 0x846d (UTF-16BE)
    if (argCheck == '‰—') {
        return true;
    }
    // No.5853
    // ê‡ñæ:e4d2
    // 0xe4d2 (Windows-31J)
    // 0x842a (UTF-16BE)
    if (argCheck == '‰“') {
        return true;
    }
    // No.5854
    // ê‡ñæ:e4d3
    // 0xe4d3 (Windows-31J)
    // 0x843c (UTF-16BE)
    if (argCheck == '‰”') {
        return true;
    }
    // No.5855
    // ê‡ñæ:e4d4
    // 0xe4d4 (Windows-31J)
    // 0x855a (UTF-16BE)
    if (argCheck == '‰‘') {
        return true;
    }
    // No.5856
    // ê‡ñæ:e4d5
    // 0xe4d5 (Windows-31J)
    // 0x8484 (UTF-16BE)
    if (argCheck == '‰’') {
        return true;
    }
    // No.5857
    // ê‡ñæ:e4d6
    // 0xe4d6 (Windows-31J)
    // 0x8477 (UTF-16BE)
    if (argCheck == '‰÷') {
        return true;
    }
    // No.5858
    // ê‡ñæ:e4d7
    // 0xe4d7 (Windows-31J)
    // 0x846b (UTF-16BE)
    if (argCheck == '‰◊') {
        return true;
    }
    // No.5859
    // ê‡ñæ:e4d8
    // 0xe4d8 (Windows-31J)
    // 0x84ad (UTF-16BE)
    if (argCheck == '‰ÿ') {
        return true;
    }
    // No.5860
    // ê‡ñæ:e4d9
    // 0xe4d9 (Windows-31J)
    // 0x846e (UTF-16BE)
    if (argCheck == '‰Ÿ') {
        return true;
    }
    // No.5861
    // ê‡ñæ:e4da
    // 0xe4da (Windows-31J)
    // 0x8482 (UTF-16BE)
    if (argCheck == '‰⁄') {
        return true;
    }
    // No.5862
    // ê‡ñæ:e4db
    // 0xe4db (Windows-31J)
    // 0x8469 (UTF-16BE)
    if (argCheck == '‰€') {
        return true;
    }
    // No.5863
    // ê‡ñæ:e4dc
    // 0xe4dc (Windows-31J)
    // 0x8446 (UTF-16BE)
    if (argCheck == '‰‹') {
        return true;
    }
    // No.5864
    // ê‡ñæ:e4dd
    // 0xe4dd (Windows-31J)
    // 0x842c (UTF-16BE)
    if (argCheck == '‰›') {
        return true;
    }
    // No.5865
    // ê‡ñæ:e4de
    // 0xe4de (Windows-31J)
    // 0x846f (UTF-16BE)
    if (argCheck == '‰ﬁ') {
        return true;
    }
    // No.5866
    // ê‡ñæ:e4df
    // 0xe4df (Windows-31J)
    // 0x8479 (UTF-16BE)
    if (argCheck == '‰ﬂ') {
        return true;
    }
    // No.5867
    // ê‡ñæ:e4e0
    // 0xe4e0 (Windows-31J)
    // 0x8435 (UTF-16BE)
    if (argCheck == '‰‡') {
        return true;
    }
    // No.5868
    // ê‡ñæ:e4e1
    // 0xe4e1 (Windows-31J)
    // 0x84ca (UTF-16BE)
    if (argCheck == '‰·') {
        return true;
    }
    // No.5869
    // ê‡ñæ:e4e2
    // 0xe4e2 (Windows-31J)
    // 0x8462 (UTF-16BE)
    if (argCheck == '‰‚') {
        return true;
    }
    // No.5870
    // ê‡ñæ:e4e3
    // 0xe4e3 (Windows-31J)
    // 0x84b9 (UTF-16BE)
    if (argCheck == '‰„') {
        return true;
    }
    // No.5871
    // ê‡ñæ:e4e4
    // 0xe4e4 (Windows-31J)
    // 0x84bf (UTF-16BE)
    if (argCheck == '‰‰') {
        return true;
    }
    // No.5872
    // ê‡ñæ:e4e5
    // 0xe4e5 (Windows-31J)
    // 0x849f (UTF-16BE)
    if (argCheck == '‰Â') {
        return true;
    }
    // No.5873
    // ê‡ñæ:e4e6
    // 0xe4e6 (Windows-31J)
    // 0x84d9 (UTF-16BE)
    if (argCheck == '‰Ê') {
        return true;
    }
    // No.5874
    // ê‡ñæ:e4e7
    // 0xe4e7 (Windows-31J)
    // 0x84cd (UTF-16BE)
    if (argCheck == '‰Á') {
        return true;
    }
    // No.5875
    // ê‡ñæ:e4e8
    // 0xe4e8 (Windows-31J)
    // 0x84bb (UTF-16BE)
    if (argCheck == '‰Ë') {
        return true;
    }
    // No.5876
    // ê‡ñæ:e4e9
    // 0xe4e9 (Windows-31J)
    // 0x84da (UTF-16BE)
    if (argCheck == '‰È') {
        return true;
    }
    // No.5877
    // ê‡ñæ:e4ea
    // 0xe4ea (Windows-31J)
    // 0x84d0 (UTF-16BE)
    if (argCheck == '‰Í') {
        return true;
    }
    // No.5878
    // ê‡ñæ:e4eb
    // 0xe4eb (Windows-31J)
    // 0x84c1 (UTF-16BE)
    if (argCheck == '‰Î') {
        return true;
    }
    // No.5879
    // ê‡ñæ:e4ec
    // 0xe4ec (Windows-31J)
    // 0x84c6 (UTF-16BE)
    if (argCheck == '‰Ï') {
        return true;
    }
    // No.5880
    // ê‡ñæ:e4ed
    // 0xe4ed (Windows-31J)
    // 0x84d6 (UTF-16BE)
    if (argCheck == '‰Ì') {
        return true;
    }
    // No.5881
    // ê‡ñæ:e4ee
    // 0xe4ee (Windows-31J)
    // 0x84a1 (UTF-16BE)
    if (argCheck == '‰Ó') {
        return true;
    }
    // No.5882
    // ê‡ñæ:e4ef
    // 0xe4ef (Windows-31J)
    // 0x8521 (UTF-16BE)
    if (argCheck == '‰Ô') {
        return true;
    }
    // No.5883
    // ê‡ñæ:e4f0
    // 0xe4f0 (Windows-31J)
    // 0x84ff (UTF-16BE)
    if (argCheck == '‰') {
        return true;
    }
    // No.5884
    // ê‡ñæ:e4f1
    // 0xe4f1 (Windows-31J)
    // 0x84f4 (UTF-16BE)
    if (argCheck == '‰Ò') {
        return true;
    }
    // No.5885
    // ê‡ñæ:e4f2
    // 0xe4f2 (Windows-31J)
    // 0x8517 (UTF-16BE)
    if (argCheck == '‰Ú') {
        return true;
    }
    // No.5886
    // ê‡ñæ:e4f3
    // 0xe4f3 (Windows-31J)
    // 0x8518 (UTF-16BE)
    if (argCheck == '‰Û') {
        return true;
    }
    // No.5887
    // ê‡ñæ:e4f4
    // 0xe4f4 (Windows-31J)
    // 0x852c (UTF-16BE)
    if (argCheck == '‰Ù') {
        return true;
    }
    // No.5888
    // ê‡ñæ:e4f5
    // 0xe4f5 (Windows-31J)
    // 0x851f (UTF-16BE)
    if (argCheck == '‰ı') {
        return true;
    }
    // No.5889
    // ê‡ñæ:e4f6
    // 0xe4f6 (Windows-31J)
    // 0x8515 (UTF-16BE)
    if (argCheck == '‰ˆ') {
        return true;
    }
    // No.5890
    // ê‡ñæ:e4f7
    // 0xe4f7 (Windows-31J)
    // 0x8514 (UTF-16BE)
    if (argCheck == '‰˜') {
        return true;
    }
    // No.5891
    // ê‡ñæ:e4f8
    // 0xe4f8 (Windows-31J)
    // 0x84fc (UTF-16BE)
    if (argCheck == '‰¯') {
        return true;
    }
    // No.5892
    // ê‡ñæ:e4f9
    // 0xe4f9 (Windows-31J)
    // 0x8540 (UTF-16BE)
    if (argCheck == '‰˘') {
        return true;
    }
    // No.5893
    // ê‡ñæ:e4fa
    // 0xe4fa (Windows-31J)
    // 0x8563 (UTF-16BE)
    if (argCheck == '‰˙') {
        return true;
    }
    // No.5894
    // ê‡ñæ:e4fb
    // 0xe4fb (Windows-31J)
    // 0x8558 (UTF-16BE)
    if (argCheck == '‰˚') {
        return true;
    }
    // No.5895
    // ê‡ñæ:e4fc
    // 0xe4fc (Windows-31J)
    // 0x8548 (UTF-16BE)
    if (argCheck == '‰¸') {
        return true;
    }
    // No.5896
    // ê‡ñæ:e540
    // 0xe540 (Windows-31J)
    // 0x8541 (UTF-16BE)
    if (argCheck == 'Â@') {
        return true;
    }
    // No.5897
    // ê‡ñæ:e541
    // 0xe541 (Windows-31J)
    // 0x8602 (UTF-16BE)
    if (argCheck == 'ÂA') {
        return true;
    }
    // No.5898
    // ê‡ñæ:e542
    // 0xe542 (Windows-31J)
    // 0x854b (UTF-16BE)
    if (argCheck == 'ÂB') {
        return true;
    }
    // No.5899
    // ê‡ñæ:e543
    // 0xe543 (Windows-31J)
    // 0x8555 (UTF-16BE)
    if (argCheck == 'ÂC') {
        return true;
    }
    // No.5900
    // ê‡ñæ:e544
    // 0xe544 (Windows-31J)
    // 0x8580 (UTF-16BE)
    if (argCheck == 'ÂD') {
        return true;
    }
    // No.5901
    // ê‡ñæ:e545
    // 0xe545 (Windows-31J)
    // 0x85a4 (UTF-16BE)
    if (argCheck == 'ÂE') {
        return true;
    }
    // No.5902
    // ê‡ñæ:e546
    // 0xe546 (Windows-31J)
    // 0x8588 (UTF-16BE)
    if (argCheck == 'ÂF') {
        return true;
    }
    // No.5903
    // ê‡ñæ:e547
    // 0xe547 (Windows-31J)
    // 0x8591 (UTF-16BE)
    if (argCheck == 'ÂG') {
        return true;
    }
    // No.5904
    // ê‡ñæ:e548
    // 0xe548 (Windows-31J)
    // 0x858a (UTF-16BE)
    if (argCheck == 'ÂH') {
        return true;
    }
    // No.5905
    // ê‡ñæ:e549
    // 0xe549 (Windows-31J)
    // 0x85a8 (UTF-16BE)
    if (argCheck == 'ÂI') {
        return true;
    }
    // No.5906
    // ê‡ñæ:e54a
    // 0xe54a (Windows-31J)
    // 0x856d (UTF-16BE)
    if (argCheck == 'ÂJ') {
        return true;
    }
    // No.5907
    // ê‡ñæ:e54b
    // 0xe54b (Windows-31J)
    // 0x8594 (UTF-16BE)
    if (argCheck == 'ÂK') {
        return true;
    }
    // No.5908
    // ê‡ñæ:e54c
    // 0xe54c (Windows-31J)
    // 0x859b (UTF-16BE)
    if (argCheck == 'ÂL') {
        return true;
    }
    // No.5909
    // ê‡ñæ:e54d
    // 0xe54d (Windows-31J)
    // 0x85ea (UTF-16BE)
    if (argCheck == 'ÂM') {
        return true;
    }
    // No.5910
    // ê‡ñæ:e54e
    // 0xe54e (Windows-31J)
    // 0x8587 (UTF-16BE)
    if (argCheck == 'ÂN') {
        return true;
    }
    // No.5911
    // ê‡ñæ:e54f
    // 0xe54f (Windows-31J)
    // 0x859c (UTF-16BE)
    if (argCheck == 'ÂO') {
        return true;
    }
    // No.5912
    // ê‡ñæ:e550
    // 0xe550 (Windows-31J)
    // 0x8577 (UTF-16BE)
    if (argCheck == 'ÂP') {
        return true;
    }
    // No.5913
    // ê‡ñæ:e551
    // 0xe551 (Windows-31J)
    // 0x857e (UTF-16BE)
    if (argCheck == 'ÂQ') {
        return true;
    }
    // No.5914
    // ê‡ñæ:e552
    // 0xe552 (Windows-31J)
    // 0x8590 (UTF-16BE)
    if (argCheck == 'ÂR') {
        return true;
    }
    // No.5915
    // ê‡ñæ:e553
    // 0xe553 (Windows-31J)
    // 0x85c9 (UTF-16BE)
    if (argCheck == 'ÂS') {
        return true;
    }
    // No.5916
    // ê‡ñæ:e554
    // 0xe554 (Windows-31J)
    // 0x85ba (UTF-16BE)
    if (argCheck == 'ÂT') {
        return true;
    }
    // No.5917
    // ê‡ñæ:e555
    // 0xe555 (Windows-31J)
    // 0x85cf (UTF-16BE)
    if (argCheck == 'ÂU') {
        return true;
    }
    // No.5918
    // ê‡ñæ:e556
    // 0xe556 (Windows-31J)
    // 0x85b9 (UTF-16BE)
    if (argCheck == 'ÂV') {
        return true;
    }
    // No.5919
    // ê‡ñæ:e557
    // 0xe557 (Windows-31J)
    // 0x85d0 (UTF-16BE)
    if (argCheck == 'ÂW') {
        return true;
    }
    // No.5920
    // ê‡ñæ:e558
    // 0xe558 (Windows-31J)
    // 0x85d5 (UTF-16BE)
    if (argCheck == 'ÂX') {
        return true;
    }
    // No.5921
    // ê‡ñæ:e559
    // 0xe559 (Windows-31J)
    // 0x85dd (UTF-16BE)
    if (argCheck == 'ÂY') {
        return true;
    }
    // No.5922
    // ê‡ñæ:e55a
    // 0xe55a (Windows-31J)
    // 0x85e5 (UTF-16BE)
    if (argCheck == 'ÂZ') {
        return true;
    }
    // No.5923
    // ê‡ñæ:e55b
    // 0xe55b (Windows-31J)
    // 0x85dc (UTF-16BE)
    if (argCheck == 'Â[') {
        return true;
    }
    // No.5924
    // ê‡ñæ:e55c
    // 0xe55c (Windows-31J)
    // 0x85f9 (UTF-16BE)
    if (argCheck == 'Â\') {
        return true;
    }
    // No.5925
    // ê‡ñæ:e55d
    // 0xe55d (Windows-31J)
    // 0x860a (UTF-16BE)
    if (argCheck == 'Â]') {
        return true;
    }
    // No.5926
    // ê‡ñæ:e55e
    // 0xe55e (Windows-31J)
    // 0x8613 (UTF-16BE)
    if (argCheck == 'Â^') {
        return true;
    }
    // No.5927
    // ê‡ñæ:e55f
    // 0xe55f (Windows-31J)
    // 0x860b (UTF-16BE)
    if (argCheck == 'Â_') {
        return true;
    }
    // No.5928
    // ê‡ñæ:e560
    // 0xe560 (Windows-31J)
    // 0x85fe (UTF-16BE)
    if (argCheck == 'Â`') {
        return true;
    }
    // No.5929
    // ê‡ñæ:e561
    // 0xe561 (Windows-31J)
    // 0x85fa (UTF-16BE)
    if (argCheck == 'Âa') {
        return true;
    }
    // No.5930
    // ê‡ñæ:e562
    // 0xe562 (Windows-31J)
    // 0x8606 (UTF-16BE)
    if (argCheck == 'Âb') {
        return true;
    }
    // No.5931
    // ê‡ñæ:e563
    // 0xe563 (Windows-31J)
    // 0x8622 (UTF-16BE)
    if (argCheck == 'Âc') {
        return true;
    }
    // No.5932
    // ê‡ñæ:e564
    // 0xe564 (Windows-31J)
    // 0x861a (UTF-16BE)
    if (argCheck == 'Âd') {
        return true;
    }
    // No.5933
    // ê‡ñæ:e565
    // 0xe565 (Windows-31J)
    // 0x8630 (UTF-16BE)
    if (argCheck == 'Âe') {
        return true;
    }
    // No.5934
    // ê‡ñæ:e566
    // 0xe566 (Windows-31J)
    // 0x863f (UTF-16BE)
    if (argCheck == 'Âf') {
        return true;
    }
    // No.5935
    // ê‡ñæ:e567
    // 0xe567 (Windows-31J)
    // 0x864d (UTF-16BE)
    if (argCheck == 'Âg') {
        return true;
    }
    // No.5936
    // ê‡ñæ:e568
    // 0xe568 (Windows-31J)
    // 0x4e55 (UTF-16BE)
    if (argCheck == 'Âh') {
        return true;
    }
    // No.5937
    // ê‡ñæ:e569
    // 0xe569 (Windows-31J)
    // 0x8654 (UTF-16BE)
    if (argCheck == 'Âi') {
        return true;
    }
    // No.5938
    // ê‡ñæ:e56a
    // 0xe56a (Windows-31J)
    // 0x865f (UTF-16BE)
    if (argCheck == 'Âj') {
        return true;
    }
    // No.5939
    // ê‡ñæ:e56b
    // 0xe56b (Windows-31J)
    // 0x8667 (UTF-16BE)
    if (argCheck == 'Âk') {
        return true;
    }
    // No.5940
    // ê‡ñæ:e56c
    // 0xe56c (Windows-31J)
    // 0x8671 (UTF-16BE)
    if (argCheck == 'Âl') {
        return true;
    }
    // No.5941
    // ê‡ñæ:e56d
    // 0xe56d (Windows-31J)
    // 0x8693 (UTF-16BE)
    if (argCheck == 'Âm') {
        return true;
    }
    // No.5942
    // ê‡ñæ:e56e
    // 0xe56e (Windows-31J)
    // 0x86a3 (UTF-16BE)
    if (argCheck == 'Ân') {
        return true;
    }
    // No.5943
    // ê‡ñæ:e56f
    // 0xe56f (Windows-31J)
    // 0x86a9 (UTF-16BE)
    if (argCheck == 'Âo') {
        return true;
    }
    // No.5944
    // ê‡ñæ:e570
    // 0xe570 (Windows-31J)
    // 0x86aa (UTF-16BE)
    if (argCheck == 'Âp') {
        return true;
    }
    // No.5945
    // ê‡ñæ:e571
    // 0xe571 (Windows-31J)
    // 0x868b (UTF-16BE)
    if (argCheck == 'Âq') {
        return true;
    }
    // No.5946
    // ê‡ñæ:e572
    // 0xe572 (Windows-31J)
    // 0x868c (UTF-16BE)
    if (argCheck == 'Âr') {
        return true;
    }
    // No.5947
    // ê‡ñæ:e573
    // 0xe573 (Windows-31J)
    // 0x86b6 (UTF-16BE)
    if (argCheck == 'Âs') {
        return true;
    }
    // No.5948
    // ê‡ñæ:e574
    // 0xe574 (Windows-31J)
    // 0x86af (UTF-16BE)
    if (argCheck == 'Ât') {
        return true;
    }
    // No.5949
    // ê‡ñæ:e575
    // 0xe575 (Windows-31J)
    // 0x86c4 (UTF-16BE)
    if (argCheck == 'Âu') {
        return true;
    }
    // No.5950
    // ê‡ñæ:e576
    // 0xe576 (Windows-31J)
    // 0x86c6 (UTF-16BE)
    if (argCheck == 'Âv') {
        return true;
    }
    // No.5951
    // ê‡ñæ:e577
    // 0xe577 (Windows-31J)
    // 0x86b0 (UTF-16BE)
    if (argCheck == 'Âw') {
        return true;
    }
    // No.5952
    // ê‡ñæ:e578
    // 0xe578 (Windows-31J)
    // 0x86c9 (UTF-16BE)
    if (argCheck == 'Âx') {
        return true;
    }
    // No.5953
    // ê‡ñæ:e579
    // 0xe579 (Windows-31J)
    // 0x8823 (UTF-16BE)
    if (argCheck == 'Ây') {
        return true;
    }
    // No.5954
    // ê‡ñæ:e57a
    // 0xe57a (Windows-31J)
    // 0x86ab (UTF-16BE)
    if (argCheck == 'Âz') {
        return true;
    }
    // No.5955
    // ê‡ñæ:e57b
    // 0xe57b (Windows-31J)
    // 0x86d4 (UTF-16BE)
    if (argCheck == 'Â{') {
        return true;
    }
    // No.5956
    // ê‡ñæ:e57c
    // 0xe57c (Windows-31J)
    // 0x86de (UTF-16BE)
    if (argCheck == 'Â|') {
        return true;
    }
    // No.5957
    // ê‡ñæ:e57d
    // 0xe57d (Windows-31J)
    // 0x86e9 (UTF-16BE)
    if (argCheck == 'Â}') {
        return true;
    }
    // No.5958
    // ê‡ñæ:e57e
    // 0xe57e (Windows-31J)
    // 0x86ec (UTF-16BE)
    if (argCheck == 'Â~') {
        return true;
    }
    // No.5959
    // ê‡ñæ:e580
    // 0xe580 (Windows-31J)
    // 0x86df (UTF-16BE)
    if (argCheck == 'ÂÄ') {
        return true;
    }
    // No.5960
    // ê‡ñæ:e581
    // 0xe581 (Windows-31J)
    // 0x86db (UTF-16BE)
    if (argCheck == 'ÂÅ') {
        return true;
    }
    // No.5961
    // ê‡ñæ:e582
    // 0xe582 (Windows-31J)
    // 0x86ef (UTF-16BE)
    if (argCheck == 'ÂÇ') {
        return true;
    }
    // No.5962
    // ê‡ñæ:e583
    // 0xe583 (Windows-31J)
    // 0x8712 (UTF-16BE)
    if (argCheck == 'ÂÉ') {
        return true;
    }
    // No.5963
    // ê‡ñæ:e584
    // 0xe584 (Windows-31J)
    // 0x8706 (UTF-16BE)
    if (argCheck == 'ÂÑ') {
        return true;
    }
    // No.5964
    // ê‡ñæ:e585
    // 0xe585 (Windows-31J)
    // 0x8708 (UTF-16BE)
    if (argCheck == 'ÂÖ') {
        return true;
    }
    // No.5965
    // ê‡ñæ:e586
    // 0xe586 (Windows-31J)
    // 0x8700 (UTF-16BE)
    if (argCheck == 'ÂÜ') {
        return true;
    }
    // No.5966
    // ê‡ñæ:e587
    // 0xe587 (Windows-31J)
    // 0x8703 (UTF-16BE)
    if (argCheck == 'Âá') {
        return true;
    }
    // No.5967
    // ê‡ñæ:e588
    // 0xe588 (Windows-31J)
    // 0x86fb (UTF-16BE)
    if (argCheck == 'Âà') {
        return true;
    }
    // No.5968
    // ê‡ñæ:e589
    // 0xe589 (Windows-31J)
    // 0x8711 (UTF-16BE)
    if (argCheck == 'Ââ') {
        return true;
    }
    // No.5969
    // ê‡ñæ:e58a
    // 0xe58a (Windows-31J)
    // 0x8709 (UTF-16BE)
    if (argCheck == 'Âä') {
        return true;
    }
    // No.5970
    // ê‡ñæ:e58b
    // 0xe58b (Windows-31J)
    // 0x870d (UTF-16BE)
    if (argCheck == 'Âã') {
        return true;
    }
    // No.5971
    // ê‡ñæ:e58c
    // 0xe58c (Windows-31J)
    // 0x86f9 (UTF-16BE)
    if (argCheck == 'Âå') {
        return true;
    }
    // No.5972
    // ê‡ñæ:e58d
    // 0xe58d (Windows-31J)
    // 0x870a (UTF-16BE)
    if (argCheck == 'Âç') {
        return true;
    }
    // No.5973
    // ê‡ñæ:e58e
    // 0xe58e (Windows-31J)
    // 0x8734 (UTF-16BE)
    if (argCheck == 'Âé') {
        return true;
    }
    // No.5974
    // ê‡ñæ:e58f
    // 0xe58f (Windows-31J)
    // 0x873f (UTF-16BE)
    if (argCheck == 'Âè') {
        return true;
    }
    // No.5975
    // ê‡ñæ:e590
    // 0xe590 (Windows-31J)
    // 0x8737 (UTF-16BE)
    if (argCheck == 'Âê') {
        return true;
    }
    // No.5976
    // ê‡ñæ:e591
    // 0xe591 (Windows-31J)
    // 0x873b (UTF-16BE)
    if (argCheck == 'Âë') {
        return true;
    }
    // No.5977
    // ê‡ñæ:e592
    // 0xe592 (Windows-31J)
    // 0x8725 (UTF-16BE)
    if (argCheck == 'Âí') {
        return true;
    }
    // No.5978
    // ê‡ñæ:e593
    // 0xe593 (Windows-31J)
    // 0x8729 (UTF-16BE)
    if (argCheck == 'Âì') {
        return true;
    }
    // No.5979
    // ê‡ñæ:e594
    // 0xe594 (Windows-31J)
    // 0x871a (UTF-16BE)
    if (argCheck == 'Âî') {
        return true;
    }
    // No.5980
    // ê‡ñæ:e595
    // 0xe595 (Windows-31J)
    // 0x8760 (UTF-16BE)
    if (argCheck == 'Âï') {
        return true;
    }
    // No.5981
    // ê‡ñæ:e596
    // 0xe596 (Windows-31J)
    // 0x875f (UTF-16BE)
    if (argCheck == 'Âñ') {
        return true;
    }
    // No.5982
    // ê‡ñæ:e597
    // 0xe597 (Windows-31J)
    // 0x8778 (UTF-16BE)
    if (argCheck == 'Âó') {
        return true;
    }
    // No.5983
    // ê‡ñæ:e598
    // 0xe598 (Windows-31J)
    // 0x874c (UTF-16BE)
    if (argCheck == 'Âò') {
        return true;
    }
    // No.5984
    // ê‡ñæ:e599
    // 0xe599 (Windows-31J)
    // 0x874e (UTF-16BE)
    if (argCheck == 'Âô') {
        return true;
    }
    // No.5985
    // ê‡ñæ:e59a
    // 0xe59a (Windows-31J)
    // 0x8774 (UTF-16BE)
    if (argCheck == 'Âö') {
        return true;
    }
    // No.5986
    // ê‡ñæ:e59b
    // 0xe59b (Windows-31J)
    // 0x8757 (UTF-16BE)
    if (argCheck == 'Âõ') {
        return true;
    }
    // No.5987
    // ê‡ñæ:e59c
    // 0xe59c (Windows-31J)
    // 0x8768 (UTF-16BE)
    if (argCheck == 'Âú') {
        return true;
    }
    // No.5988
    // ê‡ñæ:e59d
    // 0xe59d (Windows-31J)
    // 0x876e (UTF-16BE)
    if (argCheck == 'Âù') {
        return true;
    }
    // No.5989
    // ê‡ñæ:e59e
    // 0xe59e (Windows-31J)
    // 0x8759 (UTF-16BE)
    if (argCheck == 'Âû') {
        return true;
    }
    // No.5990
    // ê‡ñæ:e59f
    // 0xe59f (Windows-31J)
    // 0x8753 (UTF-16BE)
    if (argCheck == 'Âü') {
        return true;
    }
    // No.5991
    // ê‡ñæ:e5a0
    // 0xe5a0 (Windows-31J)
    // 0x8763 (UTF-16BE)
    if (argCheck == 'Â†') {
        return true;
    }
    // No.5992
    // ê‡ñæ:e5a1
    // 0xe5a1 (Windows-31J)
    // 0x876a (UTF-16BE)
    if (argCheck == 'Â°') {
        return true;
    }
    // No.5993
    // ê‡ñæ:e5a2
    // 0xe5a2 (Windows-31J)
    // 0x8805 (UTF-16BE)
    if (argCheck == 'Â¢') {
        return true;
    }
    // No.5994
    // ê‡ñæ:e5a3
    // 0xe5a3 (Windows-31J)
    // 0x87a2 (UTF-16BE)
    if (argCheck == 'Â£') {
        return true;
    }
    // No.5995
    // ê‡ñæ:e5a4
    // 0xe5a4 (Windows-31J)
    // 0x879f (UTF-16BE)
    if (argCheck == 'Â§') {
        return true;
    }
    // No.5996
    // ê‡ñæ:e5a5
    // 0xe5a5 (Windows-31J)
    // 0x8782 (UTF-16BE)
    if (argCheck == 'Â•') {
        return true;
    }
    // No.5997
    // ê‡ñæ:e5a6
    // 0xe5a6 (Windows-31J)
    // 0x87af (UTF-16BE)
    if (argCheck == 'Â¶') {
        return true;
    }
    // No.5998
    // ê‡ñæ:e5a7
    // 0xe5a7 (Windows-31J)
    // 0x87cb (UTF-16BE)
    if (argCheck == 'Âß') {
        return true;
    }
    // No.5999
    // ê‡ñæ:e5a8
    // 0xe5a8 (Windows-31J)
    // 0x87bd (UTF-16BE)
    if (argCheck == 'Â®') {
        return true;
    }
    // No.6000
    // ê‡ñæ:e5a9
    // 0xe5a9 (Windows-31J)
    // 0x87c0 (UTF-16BE)
    if (argCheck == 'Â©') {
        return true;
    }
    // No.6001
    // ê‡ñæ:e5aa
    // 0xe5aa (Windows-31J)
    // 0x87d0 (UTF-16BE)
    if (argCheck == 'Â™') {
        return true;
    }
    // No.6002
    // ê‡ñæ:e5ab
    // 0xe5ab (Windows-31J)
    // 0x96d6 (UTF-16BE)
    if (argCheck == 'Â´') {
        return true;
    }
    // No.6003
    // ê‡ñæ:e5ac
    // 0xe5ac (Windows-31J)
    // 0x87ab (UTF-16BE)
    if (argCheck == 'Â¨') {
        return true;
    }
    // No.6004
    // ê‡ñæ:e5ad
    // 0xe5ad (Windows-31J)
    // 0x87c4 (UTF-16BE)
    if (argCheck == 'Â≠') {
        return true;
    }
    // No.6005
    // ê‡ñæ:e5ae
    // 0xe5ae (Windows-31J)
    // 0x87b3 (UTF-16BE)
    if (argCheck == 'ÂÆ') {
        return true;
    }
    // No.6006
    // ê‡ñæ:e5af
    // 0xe5af (Windows-31J)
    // 0x87c7 (UTF-16BE)
    if (argCheck == 'ÂØ') {
        return true;
    }
    // No.6007
    // ê‡ñæ:e5b0
    // 0xe5b0 (Windows-31J)
    // 0x87c6 (UTF-16BE)
    if (argCheck == 'Â∞') {
        return true;
    }
    // No.6008
    // ê‡ñæ:e5b1
    // 0xe5b1 (Windows-31J)
    // 0x87bb (UTF-16BE)
    if (argCheck == 'Â±') {
        return true;
    }
    // No.6009
    // ê‡ñæ:e5b2
    // 0xe5b2 (Windows-31J)
    // 0x87ef (UTF-16BE)
    if (argCheck == 'Â≤') {
        return true;
    }
    // No.6010
    // ê‡ñæ:e5b3
    // 0xe5b3 (Windows-31J)
    // 0x87f2 (UTF-16BE)
    if (argCheck == 'Â≥') {
        return true;
    }
    // No.6011
    // ê‡ñæ:e5b4
    // 0xe5b4 (Windows-31J)
    // 0x87e0 (UTF-16BE)
    if (argCheck == 'Â¥') {
        return true;
    }
    // No.6012
    // ê‡ñæ:e5b5
    // 0xe5b5 (Windows-31J)
    // 0x880f (UTF-16BE)
    if (argCheck == 'Âµ') {
        return true;
    }
    // No.6013
    // ê‡ñæ:e5b6
    // 0xe5b6 (Windows-31J)
    // 0x880d (UTF-16BE)
    if (argCheck == 'Â∂') {
        return true;
    }
    // No.6014
    // ê‡ñæ:e5b7
    // 0xe5b7 (Windows-31J)
    // 0x87fe (UTF-16BE)
    if (argCheck == 'Â∑') {
        return true;
    }
    // No.6015
    // ê‡ñæ:e5b8
    // 0xe5b8 (Windows-31J)
    // 0x87f6 (UTF-16BE)
    if (argCheck == 'Â∏') {
        return true;
    }
    // No.6016
    // ê‡ñæ:e5b9
    // 0xe5b9 (Windows-31J)
    // 0x87f7 (UTF-16BE)
    if (argCheck == 'Âπ') {
        return true;
    }
    // No.6017
    // ê‡ñæ:e5ba
    // 0xe5ba (Windows-31J)
    // 0x880e (UTF-16BE)
    if (argCheck == 'Â∫') {
        return true;
    }
    // No.6018
    // ê‡ñæ:e5bb
    // 0xe5bb (Windows-31J)
    // 0x87d2 (UTF-16BE)
    if (argCheck == 'Âª') {
        return true;
    }
    // No.6019
    // ê‡ñæ:e5bc
    // 0xe5bc (Windows-31J)
    // 0x8811 (UTF-16BE)
    if (argCheck == 'Âº') {
        return true;
    }
    // No.6020
    // ê‡ñæ:e5bd
    // 0xe5bd (Windows-31J)
    // 0x8816 (UTF-16BE)
    if (argCheck == 'ÂΩ') {
        return true;
    }
    // No.6021
    // ê‡ñæ:e5be
    // 0xe5be (Windows-31J)
    // 0x8815 (UTF-16BE)
    if (argCheck == 'Âæ') {
        return true;
    }
    // No.6022
    // ê‡ñæ:e5bf
    // 0xe5bf (Windows-31J)
    // 0x8822 (UTF-16BE)
    if (argCheck == 'Âø') {
        return true;
    }
    // No.6023
    // ê‡ñæ:e5c0
    // 0xe5c0 (Windows-31J)
    // 0x8821 (UTF-16BE)
    if (argCheck == 'Â¿') {
        return true;
    }
    // No.6024
    // ê‡ñæ:e5c1
    // 0xe5c1 (Windows-31J)
    // 0x8831 (UTF-16BE)
    if (argCheck == 'Â¡') {
        return true;
    }
    // No.6025
    // ê‡ñæ:e5c2
    // 0xe5c2 (Windows-31J)
    // 0x8836 (UTF-16BE)
    if (argCheck == 'Â¬') {
        return true;
    }
    // No.6026
    // ê‡ñæ:e5c3
    // 0xe5c3 (Windows-31J)
    // 0x8839 (UTF-16BE)
    if (argCheck == 'Â√') {
        return true;
    }
    // No.6027
    // ê‡ñæ:e5c4
    // 0xe5c4 (Windows-31J)
    // 0x8827 (UTF-16BE)
    if (argCheck == 'Âƒ') {
        return true;
    }
    // No.6028
    // ê‡ñæ:e5c5
    // 0xe5c5 (Windows-31J)
    // 0x883b (UTF-16BE)
    if (argCheck == 'Â≈') {
        return true;
    }
    // No.6029
    // ê‡ñæ:e5c6
    // 0xe5c6 (Windows-31J)
    // 0x8844 (UTF-16BE)
    if (argCheck == 'Â∆') {
        return true;
    }
    // No.6030
    // ê‡ñæ:e5c7
    // 0xe5c7 (Windows-31J)
    // 0x8842 (UTF-16BE)
    if (argCheck == 'Â«') {
        return true;
    }
    // No.6031
    // ê‡ñæ:e5c8
    // 0xe5c8 (Windows-31J)
    // 0x8852 (UTF-16BE)
    if (argCheck == 'Â»') {
        return true;
    }
    // No.6032
    // ê‡ñæ:e5c9
    // 0xe5c9 (Windows-31J)
    // 0x8859 (UTF-16BE)
    if (argCheck == 'Â…') {
        return true;
    }
    // No.6033
    // ê‡ñæ:e5ca
    // 0xe5ca (Windows-31J)
    // 0x885e (UTF-16BE)
    if (argCheck == 'Â ') {
        return true;
    }
    // No.6034
    // ê‡ñæ:e5cb
    // 0xe5cb (Windows-31J)
    // 0x8862 (UTF-16BE)
    if (argCheck == 'ÂÀ') {
        return true;
    }
    // No.6035
    // ê‡ñæ:e5cc
    // 0xe5cc (Windows-31J)
    // 0x886b (UTF-16BE)
    if (argCheck == 'ÂÃ') {
        return true;
    }
    // No.6036
    // ê‡ñæ:e5cd
    // 0xe5cd (Windows-31J)
    // 0x8881 (UTF-16BE)
    if (argCheck == 'ÂÕ') {
        return true;
    }
    // No.6037
    // ê‡ñæ:e5ce
    // 0xe5ce (Windows-31J)
    // 0x887e (UTF-16BE)
    if (argCheck == 'ÂŒ') {
        return true;
    }
    // No.6038
    // ê‡ñæ:e5cf
    // 0xe5cf (Windows-31J)
    // 0x889e (UTF-16BE)
    if (argCheck == 'Âœ') {
        return true;
    }
    // No.6039
    // ê‡ñæ:e5d0
    // 0xe5d0 (Windows-31J)
    // 0x8875 (UTF-16BE)
    if (argCheck == 'Â–') {
        return true;
    }
    // No.6040
    // ê‡ñæ:e5d1
    // 0xe5d1 (Windows-31J)
    // 0x887d (UTF-16BE)
    if (argCheck == 'Â—') {
        return true;
    }
    // No.6041
    // ê‡ñæ:e5d2
    // 0xe5d2 (Windows-31J)
    // 0x88b5 (UTF-16BE)
    if (argCheck == 'Â“') {
        return true;
    }
    // No.6042
    // ê‡ñæ:e5d3
    // 0xe5d3 (Windows-31J)
    // 0x8872 (UTF-16BE)
    if (argCheck == 'Â”') {
        return true;
    }
    // No.6043
    // ê‡ñæ:e5d4
    // 0xe5d4 (Windows-31J)
    // 0x8882 (UTF-16BE)
    if (argCheck == 'Â‘') {
        return true;
    }
    // No.6044
    // ê‡ñæ:e5d5
    // 0xe5d5 (Windows-31J)
    // 0x8897 (UTF-16BE)
    if (argCheck == 'Â’') {
        return true;
    }
    // No.6045
    // ê‡ñæ:e5d6
    // 0xe5d6 (Windows-31J)
    // 0x8892 (UTF-16BE)
    if (argCheck == 'Â÷') {
        return true;
    }
    // No.6046
    // ê‡ñæ:e5d7
    // 0xe5d7 (Windows-31J)
    // 0x88ae (UTF-16BE)
    if (argCheck == 'Â◊') {
        return true;
    }
    // No.6047
    // ê‡ñæ:e5d8
    // 0xe5d8 (Windows-31J)
    // 0x8899 (UTF-16BE)
    if (argCheck == 'Âÿ') {
        return true;
    }
    // No.6048
    // ê‡ñæ:e5d9
    // 0xe5d9 (Windows-31J)
    // 0x88a2 (UTF-16BE)
    if (argCheck == 'ÂŸ') {
        return true;
    }
    // No.6049
    // ê‡ñæ:e5da
    // 0xe5da (Windows-31J)
    // 0x888d (UTF-16BE)
    if (argCheck == 'Â⁄') {
        return true;
    }
    // No.6050
    // ê‡ñæ:e5db
    // 0xe5db (Windows-31J)
    // 0x88a4 (UTF-16BE)
    if (argCheck == 'Â€') {
        return true;
    }
    // No.6051
    // ê‡ñæ:e5dc
    // 0xe5dc (Windows-31J)
    // 0x88b0 (UTF-16BE)
    if (argCheck == 'Â‹') {
        return true;
    }
    // No.6052
    // ê‡ñæ:e5dd
    // 0xe5dd (Windows-31J)
    // 0x88bf (UTF-16BE)
    if (argCheck == 'Â›') {
        return true;
    }
    // No.6053
    // ê‡ñæ:e5de
    // 0xe5de (Windows-31J)
    // 0x88b1 (UTF-16BE)
    if (argCheck == 'Âﬁ') {
        return true;
    }
    // No.6054
    // ê‡ñæ:e5df
    // 0xe5df (Windows-31J)
    // 0x88c3 (UTF-16BE)
    if (argCheck == 'Âﬂ') {
        return true;
    }
    // No.6055
    // ê‡ñæ:e5e0
    // 0xe5e0 (Windows-31J)
    // 0x88c4 (UTF-16BE)
    if (argCheck == 'Â‡') {
        return true;
    }
    // No.6056
    // ê‡ñæ:e5e1
    // 0xe5e1 (Windows-31J)
    // 0x88d4 (UTF-16BE)
    if (argCheck == 'Â·') {
        return true;
    }
    // No.6057
    // ê‡ñæ:e5e2
    // 0xe5e2 (Windows-31J)
    // 0x88d8 (UTF-16BE)
    if (argCheck == 'Â‚') {
        return true;
    }
    // No.6058
    // ê‡ñæ:e5e3
    // 0xe5e3 (Windows-31J)
    // 0x88d9 (UTF-16BE)
    if (argCheck == 'Â„') {
        return true;
    }
    // No.6059
    // ê‡ñæ:e5e4
    // 0xe5e4 (Windows-31J)
    // 0x88dd (UTF-16BE)
    if (argCheck == 'Â‰') {
        return true;
    }
    // No.6060
    // ê‡ñæ:e5e5
    // 0xe5e5 (Windows-31J)
    // 0x88f9 (UTF-16BE)
    if (argCheck == 'ÂÂ') {
        return true;
    }
    // No.6061
    // ê‡ñæ:e5e6
    // 0xe5e6 (Windows-31J)
    // 0x8902 (UTF-16BE)
    if (argCheck == 'ÂÊ') {
        return true;
    }
    // No.6062
    // ê‡ñæ:e5e7
    // 0xe5e7 (Windows-31J)
    // 0x88fc (UTF-16BE)
    if (argCheck == 'ÂÁ') {
        return true;
    }
    // No.6063
    // ê‡ñæ:e5e8
    // 0xe5e8 (Windows-31J)
    // 0x88f4 (UTF-16BE)
    if (argCheck == 'ÂË') {
        return true;
    }
    // No.6064
    // ê‡ñæ:e5e9
    // 0xe5e9 (Windows-31J)
    // 0x88e8 (UTF-16BE)
    if (argCheck == 'ÂÈ') {
        return true;
    }
    // No.6065
    // ê‡ñæ:e5ea
    // 0xe5ea (Windows-31J)
    // 0x88f2 (UTF-16BE)
    if (argCheck == 'ÂÍ') {
        return true;
    }
    // No.6066
    // ê‡ñæ:e5eb
    // 0xe5eb (Windows-31J)
    // 0x8904 (UTF-16BE)
    if (argCheck == 'ÂÎ') {
        return true;
    }
    // No.6067
    // ê‡ñæ:e5ec
    // 0xe5ec (Windows-31J)
    // 0x890c (UTF-16BE)
    if (argCheck == 'ÂÏ') {
        return true;
    }
    // No.6068
    // ê‡ñæ:e5ed
    // 0xe5ed (Windows-31J)
    // 0x890a (UTF-16BE)
    if (argCheck == 'ÂÌ') {
        return true;
    }
    // No.6069
    // ê‡ñæ:e5ee
    // 0xe5ee (Windows-31J)
    // 0x8913 (UTF-16BE)
    if (argCheck == 'ÂÓ') {
        return true;
    }
    // No.6070
    // ê‡ñæ:e5ef
    // 0xe5ef (Windows-31J)
    // 0x8943 (UTF-16BE)
    if (argCheck == 'ÂÔ') {
        return true;
    }
    // No.6071
    // ê‡ñæ:e5f0
    // 0xe5f0 (Windows-31J)
    // 0x891e (UTF-16BE)
    if (argCheck == 'Â') {
        return true;
    }
    // No.6072
    // ê‡ñæ:e5f1
    // 0xe5f1 (Windows-31J)
    // 0x8925 (UTF-16BE)
    if (argCheck == 'ÂÒ') {
        return true;
    }
    // No.6073
    // ê‡ñæ:e5f2
    // 0xe5f2 (Windows-31J)
    // 0x892a (UTF-16BE)
    if (argCheck == 'ÂÚ') {
        return true;
    }
    // No.6074
    // ê‡ñæ:e5f3
    // 0xe5f3 (Windows-31J)
    // 0x892b (UTF-16BE)
    if (argCheck == 'ÂÛ') {
        return true;
    }
    // No.6075
    // ê‡ñæ:e5f4
    // 0xe5f4 (Windows-31J)
    // 0x8941 (UTF-16BE)
    if (argCheck == 'ÂÙ') {
        return true;
    }
    // No.6076
    // ê‡ñæ:e5f5
    // 0xe5f5 (Windows-31J)
    // 0x8944 (UTF-16BE)
    if (argCheck == 'Âı') {
        return true;
    }
    // No.6077
    // ê‡ñæ:e5f6
    // 0xe5f6 (Windows-31J)
    // 0x893b (UTF-16BE)
    if (argCheck == 'Âˆ') {
        return true;
    }
    // No.6078
    // ê‡ñæ:e5f7
    // 0xe5f7 (Windows-31J)
    // 0x8936 (UTF-16BE)
    if (argCheck == 'Â˜') {
        return true;
    }
    // No.6079
    // ê‡ñæ:e5f8
    // 0xe5f8 (Windows-31J)
    // 0x8938 (UTF-16BE)
    if (argCheck == 'Â¯') {
        return true;
    }
    // No.6080
    // ê‡ñæ:e5f9
    // 0xe5f9 (Windows-31J)
    // 0x894c (UTF-16BE)
    if (argCheck == 'Â˘') {
        return true;
    }
    // No.6081
    // ê‡ñæ:e5fa
    // 0xe5fa (Windows-31J)
    // 0x891d (UTF-16BE)
    if (argCheck == 'Â˙') {
        return true;
    }
    // No.6082
    // ê‡ñæ:e5fb
    // 0xe5fb (Windows-31J)
    // 0x8960 (UTF-16BE)
    if (argCheck == 'Â˚') {
        return true;
    }
    // No.6083
    // ê‡ñæ:e5fc
    // 0xe5fc (Windows-31J)
    // 0x895e (UTF-16BE)
    if (argCheck == 'Â¸') {
        return true;
    }
    // No.6084
    // ê‡ñæ:e640
    // 0xe640 (Windows-31J)
    // 0x8966 (UTF-16BE)
    if (argCheck == 'Ê@') {
        return true;
    }
    // No.6085
    // ê‡ñæ:e641
    // 0xe641 (Windows-31J)
    // 0x8964 (UTF-16BE)
    if (argCheck == 'ÊA') {
        return true;
    }
    // No.6086
    // ê‡ñæ:e642
    // 0xe642 (Windows-31J)
    // 0x896d (UTF-16BE)
    if (argCheck == 'ÊB') {
        return true;
    }
    // No.6087
    // ê‡ñæ:e643
    // 0xe643 (Windows-31J)
    // 0x896a (UTF-16BE)
    if (argCheck == 'ÊC') {
        return true;
    }
    // No.6088
    // ê‡ñæ:e644
    // 0xe644 (Windows-31J)
    // 0x896f (UTF-16BE)
    if (argCheck == 'ÊD') {
        return true;
    }
    // No.6089
    // ê‡ñæ:e645
    // 0xe645 (Windows-31J)
    // 0x8974 (UTF-16BE)
    if (argCheck == 'ÊE') {
        return true;
    }
    // No.6090
    // ê‡ñæ:e646
    // 0xe646 (Windows-31J)
    // 0x8977 (UTF-16BE)
    if (argCheck == 'ÊF') {
        return true;
    }
    // No.6091
    // ê‡ñæ:e647
    // 0xe647 (Windows-31J)
    // 0x897e (UTF-16BE)
    if (argCheck == 'ÊG') {
        return true;
    }
    // No.6092
    // ê‡ñæ:e648
    // 0xe648 (Windows-31J)
    // 0x8983 (UTF-16BE)
    if (argCheck == 'ÊH') {
        return true;
    }
    // No.6093
    // ê‡ñæ:e649
    // 0xe649 (Windows-31J)
    // 0x8988 (UTF-16BE)
    if (argCheck == 'ÊI') {
        return true;
    }
    // No.6094
    // ê‡ñæ:e64a
    // 0xe64a (Windows-31J)
    // 0x898a (UTF-16BE)
    if (argCheck == 'ÊJ') {
        return true;
    }
    // No.6095
    // ê‡ñæ:e64b
    // 0xe64b (Windows-31J)
    // 0x8993 (UTF-16BE)
    if (argCheck == 'ÊK') {
        return true;
    }
    // No.6096
    // ê‡ñæ:e64c
    // 0xe64c (Windows-31J)
    // 0x8998 (UTF-16BE)
    if (argCheck == 'ÊL') {
        return true;
    }
    // No.6097
    // ê‡ñæ:e64d
    // 0xe64d (Windows-31J)
    // 0x89a1 (UTF-16BE)
    if (argCheck == 'ÊM') {
        return true;
    }
    // No.6098
    // ê‡ñæ:e64e
    // 0xe64e (Windows-31J)
    // 0x89a9 (UTF-16BE)
    if (argCheck == 'ÊN') {
        return true;
    }
    // No.6099
    // ê‡ñæ:e64f
    // 0xe64f (Windows-31J)
    // 0x89a6 (UTF-16BE)
    if (argCheck == 'ÊO') {
        return true;
    }
    // No.6100
    // ê‡ñæ:e650
    // 0xe650 (Windows-31J)
    // 0x89ac (UTF-16BE)
    if (argCheck == 'ÊP') {
        return true;
    }
    // No.6101
    // ê‡ñæ:e651
    // 0xe651 (Windows-31J)
    // 0x89af (UTF-16BE)
    if (argCheck == 'ÊQ') {
        return true;
    }
    // No.6102
    // ê‡ñæ:e652
    // 0xe652 (Windows-31J)
    // 0x89b2 (UTF-16BE)
    if (argCheck == 'ÊR') {
        return true;
    }
    // No.6103
    // ê‡ñæ:e653
    // 0xe653 (Windows-31J)
    // 0x89ba (UTF-16BE)
    if (argCheck == 'ÊS') {
        return true;
    }
    // No.6104
    // ê‡ñæ:e654
    // 0xe654 (Windows-31J)
    // 0x89bd (UTF-16BE)
    if (argCheck == 'ÊT') {
        return true;
    }
    // No.6105
    // ê‡ñæ:e655
    // 0xe655 (Windows-31J)
    // 0x89bf (UTF-16BE)
    if (argCheck == 'ÊU') {
        return true;
    }
    // No.6106
    // ê‡ñæ:e656
    // 0xe656 (Windows-31J)
    // 0x89c0 (UTF-16BE)
    if (argCheck == 'ÊV') {
        return true;
    }
    // No.6107
    // ê‡ñæ:e657
    // 0xe657 (Windows-31J)
    // 0x89da (UTF-16BE)
    if (argCheck == 'ÊW') {
        return true;
    }
    // No.6108
    // ê‡ñæ:e658
    // 0xe658 (Windows-31J)
    // 0x89dc (UTF-16BE)
    if (argCheck == 'ÊX') {
        return true;
    }
    // No.6109
    // ê‡ñæ:e659
    // 0xe659 (Windows-31J)
    // 0x89dd (UTF-16BE)
    if (argCheck == 'ÊY') {
        return true;
    }
    // No.6110
    // ê‡ñæ:e65a
    // 0xe65a (Windows-31J)
    // 0x89e7 (UTF-16BE)
    if (argCheck == 'ÊZ') {
        return true;
    }
    // No.6111
    // ê‡ñæ:e65b
    // 0xe65b (Windows-31J)
    // 0x89f4 (UTF-16BE)
    if (argCheck == 'Ê[') {
        return true;
    }
    // No.6112
    // ê‡ñæ:e65c
    // 0xe65c (Windows-31J)
    // 0x89f8 (UTF-16BE)
    if (argCheck == 'Ê\') {
        return true;
    }
    // No.6113
    // ê‡ñæ:e65d
    // 0xe65d (Windows-31J)
    // 0x8a03 (UTF-16BE)
    if (argCheck == 'Ê]') {
        return true;
    }
    // No.6114
    // ê‡ñæ:e65e
    // 0xe65e (Windows-31J)
    // 0x8a16 (UTF-16BE)
    if (argCheck == 'Ê^') {
        return true;
    }
    // No.6115
    // ê‡ñæ:e65f
    // 0xe65f (Windows-31J)
    // 0x8a10 (UTF-16BE)
    if (argCheck == 'Ê_') {
        return true;
    }
    // No.6116
    // ê‡ñæ:e660
    // 0xe660 (Windows-31J)
    // 0x8a0c (UTF-16BE)
    if (argCheck == 'Ê`') {
        return true;
    }
    // No.6117
    // ê‡ñæ:e661
    // 0xe661 (Windows-31J)
    // 0x8a1b (UTF-16BE)
    if (argCheck == 'Êa') {
        return true;
    }
    // No.6118
    // ê‡ñæ:e662
    // 0xe662 (Windows-31J)
    // 0x8a1d (UTF-16BE)
    if (argCheck == 'Êb') {
        return true;
    }
    // No.6119
    // ê‡ñæ:e663
    // 0xe663 (Windows-31J)
    // 0x8a25 (UTF-16BE)
    if (argCheck == 'Êc') {
        return true;
    }
    // No.6120
    // ê‡ñæ:e664
    // 0xe664 (Windows-31J)
    // 0x8a36 (UTF-16BE)
    if (argCheck == 'Êd') {
        return true;
    }
    // No.6121
    // ê‡ñæ:e665
    // 0xe665 (Windows-31J)
    // 0x8a41 (UTF-16BE)
    if (argCheck == 'Êe') {
        return true;
    }
    // No.6122
    // ê‡ñæ:e666
    // 0xe666 (Windows-31J)
    // 0x8a5b (UTF-16BE)
    if (argCheck == 'Êf') {
        return true;
    }
    // No.6123
    // ê‡ñæ:e667
    // 0xe667 (Windows-31J)
    // 0x8a52 (UTF-16BE)
    if (argCheck == 'Êg') {
        return true;
    }
    // No.6124
    // ê‡ñæ:e668
    // 0xe668 (Windows-31J)
    // 0x8a46 (UTF-16BE)
    if (argCheck == 'Êh') {
        return true;
    }
    // No.6125
    // ê‡ñæ:e669
    // 0xe669 (Windows-31J)
    // 0x8a48 (UTF-16BE)
    if (argCheck == 'Êi') {
        return true;
    }
    // No.6126
    // ê‡ñæ:e66a
    // 0xe66a (Windows-31J)
    // 0x8a7c (UTF-16BE)
    if (argCheck == 'Êj') {
        return true;
    }
    // No.6127
    // ê‡ñæ:e66b
    // 0xe66b (Windows-31J)
    // 0x8a6d (UTF-16BE)
    if (argCheck == 'Êk') {
        return true;
    }
    // No.6128
    // ê‡ñæ:e66c
    // 0xe66c (Windows-31J)
    // 0x8a6c (UTF-16BE)
    if (argCheck == 'Êl') {
        return true;
    }
    // No.6129
    // ê‡ñæ:e66d
    // 0xe66d (Windows-31J)
    // 0x8a62 (UTF-16BE)
    if (argCheck == 'Êm') {
        return true;
    }
    // No.6130
    // ê‡ñæ:e66e
    // 0xe66e (Windows-31J)
    // 0x8a85 (UTF-16BE)
    if (argCheck == 'Ên') {
        return true;
    }
    // No.6131
    // ê‡ñæ:e66f
    // 0xe66f (Windows-31J)
    // 0x8a82 (UTF-16BE)
    if (argCheck == 'Êo') {
        return true;
    }
    // No.6132
    // ê‡ñæ:e670
    // 0xe670 (Windows-31J)
    // 0x8a84 (UTF-16BE)
    if (argCheck == 'Êp') {
        return true;
    }
    // No.6133
    // ê‡ñæ:e671
    // 0xe671 (Windows-31J)
    // 0x8aa8 (UTF-16BE)
    if (argCheck == 'Êq') {
        return true;
    }
    // No.6134
    // ê‡ñæ:e672
    // 0xe672 (Windows-31J)
    // 0x8aa1 (UTF-16BE)
    if (argCheck == 'Êr') {
        return true;
    }
    // No.6135
    // ê‡ñæ:e673
    // 0xe673 (Windows-31J)
    // 0x8a91 (UTF-16BE)
    if (argCheck == 'Ês') {
        return true;
    }
    // No.6136
    // ê‡ñæ:e674
    // 0xe674 (Windows-31J)
    // 0x8aa5 (UTF-16BE)
    if (argCheck == 'Êt') {
        return true;
    }
    // No.6137
    // ê‡ñæ:e675
    // 0xe675 (Windows-31J)
    // 0x8aa6 (UTF-16BE)
    if (argCheck == 'Êu') {
        return true;
    }
    // No.6138
    // ê‡ñæ:e676
    // 0xe676 (Windows-31J)
    // 0x8a9a (UTF-16BE)
    if (argCheck == 'Êv') {
        return true;
    }
    // No.6139
    // ê‡ñæ:e677
    // 0xe677 (Windows-31J)
    // 0x8aa3 (UTF-16BE)
    if (argCheck == 'Êw') {
        return true;
    }
    // No.6140
    // ê‡ñæ:e678
    // 0xe678 (Windows-31J)
    // 0x8ac4 (UTF-16BE)
    if (argCheck == 'Êx') {
        return true;
    }
    // No.6141
    // ê‡ñæ:e679
    // 0xe679 (Windows-31J)
    // 0x8acd (UTF-16BE)
    if (argCheck == 'Êy') {
        return true;
    }
    // No.6142
    // ê‡ñæ:e67a
    // 0xe67a (Windows-31J)
    // 0x8ac2 (UTF-16BE)
    if (argCheck == 'Êz') {
        return true;
    }
    // No.6143
    // ê‡ñæ:e67b
    // 0xe67b (Windows-31J)
    // 0x8ada (UTF-16BE)
    if (argCheck == 'Ê{') {
        return true;
    }
    // No.6144
    // ê‡ñæ:e67c
    // 0xe67c (Windows-31J)
    // 0x8aeb (UTF-16BE)
    if (argCheck == 'Ê|') {
        return true;
    }
    // No.6145
    // ê‡ñæ:e67d
    // 0xe67d (Windows-31J)
    // 0x8af3 (UTF-16BE)
    if (argCheck == 'Ê}') {
        return true;
    }
    // No.6146
    // ê‡ñæ:e67e
    // 0xe67e (Windows-31J)
    // 0x8ae7 (UTF-16BE)
    if (argCheck == 'Ê~') {
        return true;
    }
    // No.6147
    // ê‡ñæ:e680
    // 0xe680 (Windows-31J)
    // 0x8ae4 (UTF-16BE)
    if (argCheck == 'ÊÄ') {
        return true;
    }
    // No.6148
    // ê‡ñæ:e681
    // 0xe681 (Windows-31J)
    // 0x8af1 (UTF-16BE)
    if (argCheck == 'ÊÅ') {
        return true;
    }
    // No.6149
    // ê‡ñæ:e682
    // 0xe682 (Windows-31J)
    // 0x8b14 (UTF-16BE)
    if (argCheck == 'ÊÇ') {
        return true;
    }
    // No.6150
    // ê‡ñæ:e683
    // 0xe683 (Windows-31J)
    // 0x8ae0 (UTF-16BE)
    if (argCheck == 'ÊÉ') {
        return true;
    }
    // No.6151
    // ê‡ñæ:e684
    // 0xe684 (Windows-31J)
    // 0x8ae2 (UTF-16BE)
    if (argCheck == 'ÊÑ') {
        return true;
    }
    // No.6152
    // ê‡ñæ:e685
    // 0xe685 (Windows-31J)
    // 0x8af7 (UTF-16BE)
    if (argCheck == 'ÊÖ') {
        return true;
    }
    // No.6153
    // ê‡ñæ:e686
    // 0xe686 (Windows-31J)
    // 0x8ade (UTF-16BE)
    if (argCheck == 'ÊÜ') {
        return true;
    }
    // No.6154
    // ê‡ñæ:e687
    // 0xe687 (Windows-31J)
    // 0x8adb (UTF-16BE)
    if (argCheck == 'Êá') {
        return true;
    }
    // No.6155
    // ê‡ñæ:e688
    // 0xe688 (Windows-31J)
    // 0x8b0c (UTF-16BE)
    if (argCheck == 'Êà') {
        return true;
    }
    // No.6156
    // ê‡ñæ:e689
    // 0xe689 (Windows-31J)
    // 0x8b07 (UTF-16BE)
    if (argCheck == 'Êâ') {
        return true;
    }
    // No.6157
    // ê‡ñæ:e68a
    // 0xe68a (Windows-31J)
    // 0x8b1a (UTF-16BE)
    if (argCheck == 'Êä') {
        return true;
    }
    // No.6158
    // ê‡ñæ:e68b
    // 0xe68b (Windows-31J)
    // 0x8ae1 (UTF-16BE)
    if (argCheck == 'Êã') {
        return true;
    }
    // No.6159
    // ê‡ñæ:e68c
    // 0xe68c (Windows-31J)
    // 0x8b16 (UTF-16BE)
    if (argCheck == 'Êå') {
        return true;
    }
    // No.6160
    // ê‡ñæ:e68d
    // 0xe68d (Windows-31J)
    // 0x8b10 (UTF-16BE)
    if (argCheck == 'Êç') {
        return true;
    }
    // No.6161
    // ê‡ñæ:e68e
    // 0xe68e (Windows-31J)
    // 0x8b17 (UTF-16BE)
    if (argCheck == 'Êé') {
        return true;
    }
    // No.6162
    // ê‡ñæ:e68f
    // 0xe68f (Windows-31J)
    // 0x8b20 (UTF-16BE)
    if (argCheck == 'Êè') {
        return true;
    }
    // No.6163
    // ê‡ñæ:e690
    // 0xe690 (Windows-31J)
    // 0x8b33 (UTF-16BE)
    if (argCheck == 'Êê') {
        return true;
    }
    // No.6164
    // ê‡ñæ:e691
    // 0xe691 (Windows-31J)
    // 0x97ab (UTF-16BE)
    if (argCheck == 'Êë') {
        return true;
    }
    // No.6165
    // ê‡ñæ:e692
    // 0xe692 (Windows-31J)
    // 0x8b26 (UTF-16BE)
    if (argCheck == 'Êí') {
        return true;
    }
    // No.6166
    // ê‡ñæ:e693
    // 0xe693 (Windows-31J)
    // 0x8b2b (UTF-16BE)
    if (argCheck == 'Êì') {
        return true;
    }
    // No.6167
    // ê‡ñæ:e694
    // 0xe694 (Windows-31J)
    // 0x8b3e (UTF-16BE)
    if (argCheck == 'Êî') {
        return true;
    }
    // No.6168
    // ê‡ñæ:e695
    // 0xe695 (Windows-31J)
    // 0x8b28 (UTF-16BE)
    if (argCheck == 'Êï') {
        return true;
    }
    // No.6169
    // ê‡ñæ:e696
    // 0xe696 (Windows-31J)
    // 0x8b41 (UTF-16BE)
    if (argCheck == 'Êñ') {
        return true;
    }
    // No.6170
    // ê‡ñæ:e697
    // 0xe697 (Windows-31J)
    // 0x8b4c (UTF-16BE)
    if (argCheck == 'Êó') {
        return true;
    }
    // No.6171
    // ê‡ñæ:e698
    // 0xe698 (Windows-31J)
    // 0x8b4f (UTF-16BE)
    if (argCheck == 'Êò') {
        return true;
    }
    // No.6172
    // ê‡ñæ:e699
    // 0xe699 (Windows-31J)
    // 0x8b4e (UTF-16BE)
    if (argCheck == 'Êô') {
        return true;
    }
    // No.6173
    // ê‡ñæ:e69a
    // 0xe69a (Windows-31J)
    // 0x8b49 (UTF-16BE)
    if (argCheck == 'Êö') {
        return true;
    }
    // No.6174
    // ê‡ñæ:e69b
    // 0xe69b (Windows-31J)
    // 0x8b56 (UTF-16BE)
    if (argCheck == 'Êõ') {
        return true;
    }
    // No.6175
    // ê‡ñæ:e69c
    // 0xe69c (Windows-31J)
    // 0x8b5b (UTF-16BE)
    if (argCheck == 'Êú') {
        return true;
    }
    // No.6176
    // ê‡ñæ:e69d
    // 0xe69d (Windows-31J)
    // 0x8b5a (UTF-16BE)
    if (argCheck == 'Êù') {
        return true;
    }
    // No.6177
    // ê‡ñæ:e69e
    // 0xe69e (Windows-31J)
    // 0x8b6b (UTF-16BE)
    if (argCheck == 'Êû') {
        return true;
    }
    // No.6178
    // ê‡ñæ:e69f
    // 0xe69f (Windows-31J)
    // 0x8b5f (UTF-16BE)
    if (argCheck == 'Êü') {
        return true;
    }
    // No.6179
    // ê‡ñæ:e6a0
    // 0xe6a0 (Windows-31J)
    // 0x8b6c (UTF-16BE)
    if (argCheck == 'Ê†') {
        return true;
    }
    // No.6180
    // ê‡ñæ:e6a1
    // 0xe6a1 (Windows-31J)
    // 0x8b6f (UTF-16BE)
    if (argCheck == 'Ê°') {
        return true;
    }
    // No.6181
    // ê‡ñæ:e6a2
    // 0xe6a2 (Windows-31J)
    // 0x8b74 (UTF-16BE)
    if (argCheck == 'Ê¢') {
        return true;
    }
    // No.6182
    // ê‡ñæ:e6a3
    // 0xe6a3 (Windows-31J)
    // 0x8b7d (UTF-16BE)
    if (argCheck == 'Ê£') {
        return true;
    }
    // No.6183
    // ê‡ñæ:e6a4
    // 0xe6a4 (Windows-31J)
    // 0x8b80 (UTF-16BE)
    if (argCheck == 'Ê§') {
        return true;
    }
    // No.6184
    // ê‡ñæ:e6a5
    // 0xe6a5 (Windows-31J)
    // 0x8b8c (UTF-16BE)
    if (argCheck == 'Ê•') {
        return true;
    }
    // No.6185
    // ê‡ñæ:e6a6
    // 0xe6a6 (Windows-31J)
    // 0x8b8e (UTF-16BE)
    if (argCheck == 'Ê¶') {
        return true;
    }
    // No.6186
    // ê‡ñæ:e6a7
    // 0xe6a7 (Windows-31J)
    // 0x8b92 (UTF-16BE)
    if (argCheck == 'Êß') {
        return true;
    }
    // No.6187
    // ê‡ñæ:e6a8
    // 0xe6a8 (Windows-31J)
    // 0x8b93 (UTF-16BE)
    if (argCheck == 'Ê®') {
        return true;
    }
    // No.6188
    // ê‡ñæ:e6a9
    // 0xe6a9 (Windows-31J)
    // 0x8b96 (UTF-16BE)
    if (argCheck == 'Ê©') {
        return true;
    }
    // No.6189
    // ê‡ñæ:e6aa
    // 0xe6aa (Windows-31J)
    // 0x8b99 (UTF-16BE)
    if (argCheck == 'Ê™') {
        return true;
    }
    // No.6190
    // ê‡ñæ:e6ab
    // 0xe6ab (Windows-31J)
    // 0x8b9a (UTF-16BE)
    if (argCheck == 'Ê´') {
        return true;
    }
    // No.6191
    // ê‡ñæ:e6ac
    // 0xe6ac (Windows-31J)
    // 0x8c3a (UTF-16BE)
    if (argCheck == 'Ê¨') {
        return true;
    }
    // No.6192
    // ê‡ñæ:e6ad
    // 0xe6ad (Windows-31J)
    // 0x8c41 (UTF-16BE)
    if (argCheck == 'Ê≠') {
        return true;
    }
    // No.6193
    // ê‡ñæ:e6ae
    // 0xe6ae (Windows-31J)
    // 0x8c3f (UTF-16BE)
    if (argCheck == 'ÊÆ') {
        return true;
    }
    // No.6194
    // ê‡ñæ:e6af
    // 0xe6af (Windows-31J)
    // 0x8c48 (UTF-16BE)
    if (argCheck == 'ÊØ') {
        return true;
    }
    // No.6195
    // ê‡ñæ:e6b0
    // 0xe6b0 (Windows-31J)
    // 0x8c4c (UTF-16BE)
    if (argCheck == 'Ê∞') {
        return true;
    }
    // No.6196
    // ê‡ñæ:e6b1
    // 0xe6b1 (Windows-31J)
    // 0x8c4e (UTF-16BE)
    if (argCheck == 'Ê±') {
        return true;
    }
    // No.6197
    // ê‡ñæ:e6b2
    // 0xe6b2 (Windows-31J)
    // 0x8c50 (UTF-16BE)
    if (argCheck == 'Ê≤') {
        return true;
    }
    // No.6198
    // ê‡ñæ:e6b3
    // 0xe6b3 (Windows-31J)
    // 0x8c55 (UTF-16BE)
    if (argCheck == 'Ê≥') {
        return true;
    }
    // No.6199
    // ê‡ñæ:e6b4
    // 0xe6b4 (Windows-31J)
    // 0x8c62 (UTF-16BE)
    if (argCheck == 'Ê¥') {
        return true;
    }
    // No.6200
    // ê‡ñæ:e6b5
    // 0xe6b5 (Windows-31J)
    // 0x8c6c (UTF-16BE)
    if (argCheck == 'Êµ') {
        return true;
    }
    // No.6201
    // ê‡ñæ:e6b6
    // 0xe6b6 (Windows-31J)
    // 0x8c78 (UTF-16BE)
    if (argCheck == 'Ê∂') {
        return true;
    }
    // No.6202
    // ê‡ñæ:e6b7
    // 0xe6b7 (Windows-31J)
    // 0x8c7a (UTF-16BE)
    if (argCheck == 'Ê∑') {
        return true;
    }
    // No.6203
    // ê‡ñæ:e6b8
    // 0xe6b8 (Windows-31J)
    // 0x8c82 (UTF-16BE)
    if (argCheck == 'Ê∏') {
        return true;
    }
    // No.6204
    // ê‡ñæ:e6b9
    // 0xe6b9 (Windows-31J)
    // 0x8c89 (UTF-16BE)
    if (argCheck == 'Êπ') {
        return true;
    }
    // No.6205
    // ê‡ñæ:e6ba
    // 0xe6ba (Windows-31J)
    // 0x8c85 (UTF-16BE)
    if (argCheck == 'Ê∫') {
        return true;
    }
    // No.6206
    // ê‡ñæ:e6bb
    // 0xe6bb (Windows-31J)
    // 0x8c8a (UTF-16BE)
    if (argCheck == 'Êª') {
        return true;
    }
    // No.6207
    // ê‡ñæ:e6bc
    // 0xe6bc (Windows-31J)
    // 0x8c8d (UTF-16BE)
    if (argCheck == 'Êº') {
        return true;
    }
    // No.6208
    // ê‡ñæ:e6bd
    // 0xe6bd (Windows-31J)
    // 0x8c8e (UTF-16BE)
    if (argCheck == 'ÊΩ') {
        return true;
    }
    // No.6209
    // ê‡ñæ:e6be
    // 0xe6be (Windows-31J)
    // 0x8c94 (UTF-16BE)
    if (argCheck == 'Êæ') {
        return true;
    }
    // No.6210
    // ê‡ñæ:e6bf
    // 0xe6bf (Windows-31J)
    // 0x8c7c (UTF-16BE)
    if (argCheck == 'Êø') {
        return true;
    }
    // No.6211
    // ê‡ñæ:e6c0
    // 0xe6c0 (Windows-31J)
    // 0x8c98 (UTF-16BE)
    if (argCheck == 'Ê¿') {
        return true;
    }
    // No.6212
    // ê‡ñæ:e6c1
    // 0xe6c1 (Windows-31J)
    // 0x621d (UTF-16BE)
    if (argCheck == 'Ê¡') {
        return true;
    }
    // No.6213
    // ê‡ñæ:e6c2
    // 0xe6c2 (Windows-31J)
    // 0x8cad (UTF-16BE)
    if (argCheck == 'Ê¬') {
        return true;
    }
    // No.6214
    // ê‡ñæ:e6c3
    // 0xe6c3 (Windows-31J)
    // 0x8caa (UTF-16BE)
    if (argCheck == 'Ê√') {
        return true;
    }
    // No.6215
    // ê‡ñæ:e6c4
    // 0xe6c4 (Windows-31J)
    // 0x8cbd (UTF-16BE)
    if (argCheck == 'Êƒ') {
        return true;
    }
    // No.6216
    // ê‡ñæ:e6c5
    // 0xe6c5 (Windows-31J)
    // 0x8cb2 (UTF-16BE)
    if (argCheck == 'Ê≈') {
        return true;
    }
    // No.6217
    // ê‡ñæ:e6c6
    // 0xe6c6 (Windows-31J)
    // 0x8cb3 (UTF-16BE)
    if (argCheck == 'Ê∆') {
        return true;
    }
    // No.6218
    // ê‡ñæ:e6c7
    // 0xe6c7 (Windows-31J)
    // 0x8cae (UTF-16BE)
    if (argCheck == 'Ê«') {
        return true;
    }
    // No.6219
    // ê‡ñæ:e6c8
    // 0xe6c8 (Windows-31J)
    // 0x8cb6 (UTF-16BE)
    if (argCheck == 'Ê»') {
        return true;
    }
    // No.6220
    // ê‡ñæ:e6c9
    // 0xe6c9 (Windows-31J)
    // 0x8cc8 (UTF-16BE)
    if (argCheck == 'Ê…') {
        return true;
    }
    // No.6221
    // ê‡ñæ:e6ca
    // 0xe6ca (Windows-31J)
    // 0x8cc1 (UTF-16BE)
    if (argCheck == 'Ê ') {
        return true;
    }
    // No.6222
    // ê‡ñæ:e6cb
    // 0xe6cb (Windows-31J)
    // 0x8ce4 (UTF-16BE)
    if (argCheck == 'ÊÀ') {
        return true;
    }
    // No.6223
    // ê‡ñæ:e6cc
    // 0xe6cc (Windows-31J)
    // 0x8ce3 (UTF-16BE)
    if (argCheck == 'ÊÃ') {
        return true;
    }
    // No.6224
    // ê‡ñæ:e6cd
    // 0xe6cd (Windows-31J)
    // 0x8cda (UTF-16BE)
    if (argCheck == 'ÊÕ') {
        return true;
    }
    // No.6225
    // ê‡ñæ:e6ce
    // 0xe6ce (Windows-31J)
    // 0x8cfd (UTF-16BE)
    if (argCheck == 'ÊŒ') {
        return true;
    }
    // No.6226
    // ê‡ñæ:e6cf
    // 0xe6cf (Windows-31J)
    // 0x8cfa (UTF-16BE)
    if (argCheck == 'Êœ') {
        return true;
    }
    // No.6227
    // ê‡ñæ:e6d0
    // 0xe6d0 (Windows-31J)
    // 0x8cfb (UTF-16BE)
    if (argCheck == 'Ê–') {
        return true;
    }
    // No.6228
    // ê‡ñæ:e6d1
    // 0xe6d1 (Windows-31J)
    // 0x8d04 (UTF-16BE)
    if (argCheck == 'Ê—') {
        return true;
    }
    // No.6229
    // ê‡ñæ:e6d2
    // 0xe6d2 (Windows-31J)
    // 0x8d05 (UTF-16BE)
    if (argCheck == 'Ê“') {
        return true;
    }
    // No.6230
    // ê‡ñæ:e6d3
    // 0xe6d3 (Windows-31J)
    // 0x8d0a (UTF-16BE)
    if (argCheck == 'Ê”') {
        return true;
    }
    // No.6231
    // ê‡ñæ:e6d4
    // 0xe6d4 (Windows-31J)
    // 0x8d07 (UTF-16BE)
    if (argCheck == 'Ê‘') {
        return true;
    }
    // No.6232
    // ê‡ñæ:e6d5
    // 0xe6d5 (Windows-31J)
    // 0x8d0f (UTF-16BE)
    if (argCheck == 'Ê’') {
        return true;
    }
    // No.6233
    // ê‡ñæ:e6d6
    // 0xe6d6 (Windows-31J)
    // 0x8d0d (UTF-16BE)
    if (argCheck == 'Ê÷') {
        return true;
    }
    // No.6234
    // ê‡ñæ:e6d7
    // 0xe6d7 (Windows-31J)
    // 0x8d10 (UTF-16BE)
    if (argCheck == 'Ê◊') {
        return true;
    }
    // No.6235
    // ê‡ñæ:e6d8
    // 0xe6d8 (Windows-31J)
    // 0x9f4e (UTF-16BE)
    if (argCheck == 'Êÿ') {
        return true;
    }
    // No.6236
    // ê‡ñæ:e6d9
    // 0xe6d9 (Windows-31J)
    // 0x8d13 (UTF-16BE)
    if (argCheck == 'ÊŸ') {
        return true;
    }
    // No.6237
    // ê‡ñæ:e6da
    // 0xe6da (Windows-31J)
    // 0x8ccd (UTF-16BE)
    if (argCheck == 'Ê⁄') {
        return true;
    }
    // No.6238
    // ê‡ñæ:e6db
    // 0xe6db (Windows-31J)
    // 0x8d14 (UTF-16BE)
    if (argCheck == 'Ê€') {
        return true;
    }
    // No.6239
    // ê‡ñæ:e6dc
    // 0xe6dc (Windows-31J)
    // 0x8d16 (UTF-16BE)
    if (argCheck == 'Ê‹') {
        return true;
    }
    // No.6240
    // ê‡ñæ:e6dd
    // 0xe6dd (Windows-31J)
    // 0x8d67 (UTF-16BE)
    if (argCheck == 'Ê›') {
        return true;
    }
    // No.6241
    // ê‡ñæ:e6de
    // 0xe6de (Windows-31J)
    // 0x8d6d (UTF-16BE)
    if (argCheck == 'Êﬁ') {
        return true;
    }
    // No.6242
    // ê‡ñæ:e6df
    // 0xe6df (Windows-31J)
    // 0x8d71 (UTF-16BE)
    if (argCheck == 'Êﬂ') {
        return true;
    }
    // No.6243
    // ê‡ñæ:e6e0
    // 0xe6e0 (Windows-31J)
    // 0x8d73 (UTF-16BE)
    if (argCheck == 'Ê‡') {
        return true;
    }
    // No.6244
    // ê‡ñæ:e6e1
    // 0xe6e1 (Windows-31J)
    // 0x8d81 (UTF-16BE)
    if (argCheck == 'Ê·') {
        return true;
    }
    // No.6245
    // ê‡ñæ:e6e2
    // 0xe6e2 (Windows-31J)
    // 0x8d99 (UTF-16BE)
    if (argCheck == 'Ê‚') {
        return true;
    }
    // No.6246
    // ê‡ñæ:e6e3
    // 0xe6e3 (Windows-31J)
    // 0x8dc2 (UTF-16BE)
    if (argCheck == 'Ê„') {
        return true;
    }
    // No.6247
    // ê‡ñæ:e6e4
    // 0xe6e4 (Windows-31J)
    // 0x8dbe (UTF-16BE)
    if (argCheck == 'Ê‰') {
        return true;
    }
    // No.6248
    // ê‡ñæ:e6e5
    // 0xe6e5 (Windows-31J)
    // 0x8dba (UTF-16BE)
    if (argCheck == 'ÊÂ') {
        return true;
    }
    // No.6249
    // ê‡ñæ:e6e6
    // 0xe6e6 (Windows-31J)
    // 0x8dcf (UTF-16BE)
    if (argCheck == 'ÊÊ') {
        return true;
    }
    // No.6250
    // ê‡ñæ:e6e7
    // 0xe6e7 (Windows-31J)
    // 0x8dda (UTF-16BE)
    if (argCheck == 'ÊÁ') {
        return true;
    }
    // No.6251
    // ê‡ñæ:e6e8
    // 0xe6e8 (Windows-31J)
    // 0x8dd6 (UTF-16BE)
    if (argCheck == 'ÊË') {
        return true;
    }
    // No.6252
    // ê‡ñæ:e6e9
    // 0xe6e9 (Windows-31J)
    // 0x8dcc (UTF-16BE)
    if (argCheck == 'ÊÈ') {
        return true;
    }
    // No.6253
    // ê‡ñæ:e6ea
    // 0xe6ea (Windows-31J)
    // 0x8ddb (UTF-16BE)
    if (argCheck == 'ÊÍ') {
        return true;
    }
    // No.6254
    // ê‡ñæ:e6eb
    // 0xe6eb (Windows-31J)
    // 0x8dcb (UTF-16BE)
    if (argCheck == 'ÊÎ') {
        return true;
    }
    // No.6255
    // ê‡ñæ:e6ec
    // 0xe6ec (Windows-31J)
    // 0x8dea (UTF-16BE)
    if (argCheck == 'ÊÏ') {
        return true;
    }
    // No.6256
    // ê‡ñæ:e6ed
    // 0xe6ed (Windows-31J)
    // 0x8deb (UTF-16BE)
    if (argCheck == 'ÊÌ') {
        return true;
    }
    // No.6257
    // ê‡ñæ:e6ee
    // 0xe6ee (Windows-31J)
    // 0x8ddf (UTF-16BE)
    if (argCheck == 'ÊÓ') {
        return true;
    }
    // No.6258
    // ê‡ñæ:e6ef
    // 0xe6ef (Windows-31J)
    // 0x8de3 (UTF-16BE)
    if (argCheck == 'ÊÔ') {
        return true;
    }
    // No.6259
    // ê‡ñæ:e6f0
    // 0xe6f0 (Windows-31J)
    // 0x8dfc (UTF-16BE)
    if (argCheck == 'Ê') {
        return true;
    }
    // No.6260
    // ê‡ñæ:e6f1
    // 0xe6f1 (Windows-31J)
    // 0x8e08 (UTF-16BE)
    if (argCheck == 'ÊÒ') {
        return true;
    }
    // No.6261
    // ê‡ñæ:e6f2
    // 0xe6f2 (Windows-31J)
    // 0x8e09 (UTF-16BE)
    if (argCheck == 'ÊÚ') {
        return true;
    }
    // No.6262
    // ê‡ñæ:e6f3
    // 0xe6f3 (Windows-31J)
    // 0x8dff (UTF-16BE)
    if (argCheck == 'ÊÛ') {
        return true;
    }
    // No.6263
    // ê‡ñæ:e6f4
    // 0xe6f4 (Windows-31J)
    // 0x8e1d (UTF-16BE)
    if (argCheck == 'ÊÙ') {
        return true;
    }
    // No.6264
    // ê‡ñæ:e6f5
    // 0xe6f5 (Windows-31J)
    // 0x8e1e (UTF-16BE)
    if (argCheck == 'Êı') {
        return true;
    }
    // No.6265
    // ê‡ñæ:e6f6
    // 0xe6f6 (Windows-31J)
    // 0x8e10 (UTF-16BE)
    if (argCheck == 'Êˆ') {
        return true;
    }
    // No.6266
    // ê‡ñæ:e6f7
    // 0xe6f7 (Windows-31J)
    // 0x8e1f (UTF-16BE)
    if (argCheck == 'Ê˜') {
        return true;
    }
    // No.6267
    // ê‡ñæ:e6f8
    // 0xe6f8 (Windows-31J)
    // 0x8e42 (UTF-16BE)
    if (argCheck == 'Ê¯') {
        return true;
    }
    // No.6268
    // ê‡ñæ:e6f9
    // 0xe6f9 (Windows-31J)
    // 0x8e35 (UTF-16BE)
    if (argCheck == 'Ê˘') {
        return true;
    }
    // No.6269
    // ê‡ñæ:e6fa
    // 0xe6fa (Windows-31J)
    // 0x8e30 (UTF-16BE)
    if (argCheck == 'Ê˙') {
        return true;
    }
    // No.6270
    // ê‡ñæ:e6fb
    // 0xe6fb (Windows-31J)
    // 0x8e34 (UTF-16BE)
    if (argCheck == 'Ê˚') {
        return true;
    }
    // No.6271
    // ê‡ñæ:e6fc
    // 0xe6fc (Windows-31J)
    // 0x8e4a (UTF-16BE)
    if (argCheck == 'Ê¸') {
        return true;
    }
    // No.6272
    // ê‡ñæ:e740
    // 0xe740 (Windows-31J)
    // 0x8e47 (UTF-16BE)
    if (argCheck == 'Á@') {
        return true;
    }
    // No.6273
    // ê‡ñæ:e741
    // 0xe741 (Windows-31J)
    // 0x8e49 (UTF-16BE)
    if (argCheck == 'ÁA') {
        return true;
    }
    // No.6274
    // ê‡ñæ:e742
    // 0xe742 (Windows-31J)
    // 0x8e4c (UTF-16BE)
    if (argCheck == 'ÁB') {
        return true;
    }
    // No.6275
    // ê‡ñæ:e743
    // 0xe743 (Windows-31J)
    // 0x8e50 (UTF-16BE)
    if (argCheck == 'ÁC') {
        return true;
    }
    // No.6276
    // ê‡ñæ:e744
    // 0xe744 (Windows-31J)
    // 0x8e48 (UTF-16BE)
    if (argCheck == 'ÁD') {
        return true;
    }
    // No.6277
    // ê‡ñæ:e745
    // 0xe745 (Windows-31J)
    // 0x8e59 (UTF-16BE)
    if (argCheck == 'ÁE') {
        return true;
    }
    // No.6278
    // ê‡ñæ:e746
    // 0xe746 (Windows-31J)
    // 0x8e64 (UTF-16BE)
    if (argCheck == 'ÁF') {
        return true;
    }
    // No.6279
    // ê‡ñæ:e747
    // 0xe747 (Windows-31J)
    // 0x8e60 (UTF-16BE)
    if (argCheck == 'ÁG') {
        return true;
    }
    // No.6280
    // ê‡ñæ:e748
    // 0xe748 (Windows-31J)
    // 0x8e2a (UTF-16BE)
    if (argCheck == 'ÁH') {
        return true;
    }
    // No.6281
    // ê‡ñæ:e749
    // 0xe749 (Windows-31J)
    // 0x8e63 (UTF-16BE)
    if (argCheck == 'ÁI') {
        return true;
    }
    // No.6282
    // ê‡ñæ:e74a
    // 0xe74a (Windows-31J)
    // 0x8e55 (UTF-16BE)
    if (argCheck == 'ÁJ') {
        return true;
    }
    // No.6283
    // ê‡ñæ:e74b
    // 0xe74b (Windows-31J)
    // 0x8e76 (UTF-16BE)
    if (argCheck == 'ÁK') {
        return true;
    }
    // No.6284
    // ê‡ñæ:e74c
    // 0xe74c (Windows-31J)
    // 0x8e72 (UTF-16BE)
    if (argCheck == 'ÁL') {
        return true;
    }
    // No.6285
    // ê‡ñæ:e74d
    // 0xe74d (Windows-31J)
    // 0x8e7c (UTF-16BE)
    if (argCheck == 'ÁM') {
        return true;
    }
    // No.6286
    // ê‡ñæ:e74e
    // 0xe74e (Windows-31J)
    // 0x8e81 (UTF-16BE)
    if (argCheck == 'ÁN') {
        return true;
    }
    // No.6287
    // ê‡ñæ:e74f
    // 0xe74f (Windows-31J)
    // 0x8e87 (UTF-16BE)
    if (argCheck == 'ÁO') {
        return true;
    }
    // No.6288
    // ê‡ñæ:e750
    // 0xe750 (Windows-31J)
    // 0x8e85 (UTF-16BE)
    if (argCheck == 'ÁP') {
        return true;
    }
    // No.6289
    // ê‡ñæ:e751
    // 0xe751 (Windows-31J)
    // 0x8e84 (UTF-16BE)
    if (argCheck == 'ÁQ') {
        return true;
    }
    // No.6290
    // ê‡ñæ:e752
    // 0xe752 (Windows-31J)
    // 0x8e8b (UTF-16BE)
    if (argCheck == 'ÁR') {
        return true;
    }
    // No.6291
    // ê‡ñæ:e753
    // 0xe753 (Windows-31J)
    // 0x8e8a (UTF-16BE)
    if (argCheck == 'ÁS') {
        return true;
    }
    // No.6292
    // ê‡ñæ:e754
    // 0xe754 (Windows-31J)
    // 0x8e93 (UTF-16BE)
    if (argCheck == 'ÁT') {
        return true;
    }
    // No.6293
    // ê‡ñæ:e755
    // 0xe755 (Windows-31J)
    // 0x8e91 (UTF-16BE)
    if (argCheck == 'ÁU') {
        return true;
    }
    // No.6294
    // ê‡ñæ:e756
    // 0xe756 (Windows-31J)
    // 0x8e94 (UTF-16BE)
    if (argCheck == 'ÁV') {
        return true;
    }
    // No.6295
    // ê‡ñæ:e757
    // 0xe757 (Windows-31J)
    // 0x8e99 (UTF-16BE)
    if (argCheck == 'ÁW') {
        return true;
    }
    // No.6296
    // ê‡ñæ:e758
    // 0xe758 (Windows-31J)
    // 0x8eaa (UTF-16BE)
    if (argCheck == 'ÁX') {
        return true;
    }
    // No.6297
    // ê‡ñæ:e759
    // 0xe759 (Windows-31J)
    // 0x8ea1 (UTF-16BE)
    if (argCheck == 'ÁY') {
        return true;
    }
    // No.6298
    // ê‡ñæ:e75a
    // 0xe75a (Windows-31J)
    // 0x8eac (UTF-16BE)
    if (argCheck == 'ÁZ') {
        return true;
    }
    // No.6299
    // ê‡ñæ:e75b
    // 0xe75b (Windows-31J)
    // 0x8eb0 (UTF-16BE)
    if (argCheck == 'Á[') {
        return true;
    }
    // No.6300
    // ê‡ñæ:e75c
    // 0xe75c (Windows-31J)
    // 0x8ec6 (UTF-16BE)
    if (argCheck == 'Á\') {
        return true;
    }
    // No.6301
    // ê‡ñæ:e75d
    // 0xe75d (Windows-31J)
    // 0x8eb1 (UTF-16BE)
    if (argCheck == 'Á]') {
        return true;
    }
    // No.6302
    // ê‡ñæ:e75e
    // 0xe75e (Windows-31J)
    // 0x8ebe (UTF-16BE)
    if (argCheck == 'Á^') {
        return true;
    }
    // No.6303
    // ê‡ñæ:e75f
    // 0xe75f (Windows-31J)
    // 0x8ec5 (UTF-16BE)
    if (argCheck == 'Á_') {
        return true;
    }
    // No.6304
    // ê‡ñæ:e760
    // 0xe760 (Windows-31J)
    // 0x8ec8 (UTF-16BE)
    if (argCheck == 'Á`') {
        return true;
    }
    // No.6305
    // ê‡ñæ:e761
    // 0xe761 (Windows-31J)
    // 0x8ecb (UTF-16BE)
    if (argCheck == 'Áa') {
        return true;
    }
    // No.6306
    // ê‡ñæ:e762
    // 0xe762 (Windows-31J)
    // 0x8edb (UTF-16BE)
    if (argCheck == 'Áb') {
        return true;
    }
    // No.6307
    // ê‡ñæ:e763
    // 0xe763 (Windows-31J)
    // 0x8ee3 (UTF-16BE)
    if (argCheck == 'Ác') {
        return true;
    }
    // No.6308
    // ê‡ñæ:e764
    // 0xe764 (Windows-31J)
    // 0x8efc (UTF-16BE)
    if (argCheck == 'Ád') {
        return true;
    }
    // No.6309
    // ê‡ñæ:e765
    // 0xe765 (Windows-31J)
    // 0x8efb (UTF-16BE)
    if (argCheck == 'Áe') {
        return true;
    }
    // No.6310
    // ê‡ñæ:e766
    // 0xe766 (Windows-31J)
    // 0x8eeb (UTF-16BE)
    if (argCheck == 'Áf') {
        return true;
    }
    // No.6311
    // ê‡ñæ:e767
    // 0xe767 (Windows-31J)
    // 0x8efe (UTF-16BE)
    if (argCheck == 'Ág') {
        return true;
    }
    // No.6312
    // ê‡ñæ:e768
    // 0xe768 (Windows-31J)
    // 0x8f0a (UTF-16BE)
    if (argCheck == 'Áh') {
        return true;
    }
    // No.6313
    // ê‡ñæ:e769
    // 0xe769 (Windows-31J)
    // 0x8f05 (UTF-16BE)
    if (argCheck == 'Ái') {
        return true;
    }
    // No.6314
    // ê‡ñæ:e76a
    // 0xe76a (Windows-31J)
    // 0x8f15 (UTF-16BE)
    if (argCheck == 'Áj') {
        return true;
    }
    // No.6315
    // ê‡ñæ:e76b
    // 0xe76b (Windows-31J)
    // 0x8f12 (UTF-16BE)
    if (argCheck == 'Ák') {
        return true;
    }
    // No.6316
    // ê‡ñæ:e76c
    // 0xe76c (Windows-31J)
    // 0x8f19 (UTF-16BE)
    if (argCheck == 'Ál') {
        return true;
    }
    // No.6317
    // ê‡ñæ:e76d
    // 0xe76d (Windows-31J)
    // 0x8f13 (UTF-16BE)
    if (argCheck == 'Ám') {
        return true;
    }
    // No.6318
    // ê‡ñæ:e76e
    // 0xe76e (Windows-31J)
    // 0x8f1c (UTF-16BE)
    if (argCheck == 'Án') {
        return true;
    }
    // No.6319
    // ê‡ñæ:e76f
    // 0xe76f (Windows-31J)
    // 0x8f1f (UTF-16BE)
    if (argCheck == 'Áo') {
        return true;
    }
    // No.6320
    // ê‡ñæ:e770
    // 0xe770 (Windows-31J)
    // 0x8f1b (UTF-16BE)
    if (argCheck == 'Áp') {
        return true;
    }
    // No.6321
    // ê‡ñæ:e771
    // 0xe771 (Windows-31J)
    // 0x8f0c (UTF-16BE)
    if (argCheck == 'Áq') {
        return true;
    }
    // No.6322
    // ê‡ñæ:e772
    // 0xe772 (Windows-31J)
    // 0x8f26 (UTF-16BE)
    if (argCheck == 'Ár') {
        return true;
    }
    // No.6323
    // ê‡ñæ:e773
    // 0xe773 (Windows-31J)
    // 0x8f33 (UTF-16BE)
    if (argCheck == 'Ás') {
        return true;
    }
    // No.6324
    // ê‡ñæ:e774
    // 0xe774 (Windows-31J)
    // 0x8f3b (UTF-16BE)
    if (argCheck == 'Át') {
        return true;
    }
    // No.6325
    // ê‡ñæ:e775
    // 0xe775 (Windows-31J)
    // 0x8f39 (UTF-16BE)
    if (argCheck == 'Áu') {
        return true;
    }
    // No.6326
    // ê‡ñæ:e776
    // 0xe776 (Windows-31J)
    // 0x8f45 (UTF-16BE)
    if (argCheck == 'Áv') {
        return true;
    }
    // No.6327
    // ê‡ñæ:e777
    // 0xe777 (Windows-31J)
    // 0x8f42 (UTF-16BE)
    if (argCheck == 'Áw') {
        return true;
    }
    // No.6328
    // ê‡ñæ:e778
    // 0xe778 (Windows-31J)
    // 0x8f3e (UTF-16BE)
    if (argCheck == 'Áx') {
        return true;
    }
    // No.6329
    // ê‡ñæ:e779
    // 0xe779 (Windows-31J)
    // 0x8f4c (UTF-16BE)
    if (argCheck == 'Áy') {
        return true;
    }
    // No.6330
    // ê‡ñæ:e77a
    // 0xe77a (Windows-31J)
    // 0x8f49 (UTF-16BE)
    if (argCheck == 'Áz') {
        return true;
    }
    // No.6331
    // ê‡ñæ:e77b
    // 0xe77b (Windows-31J)
    // 0x8f46 (UTF-16BE)
    if (argCheck == 'Á{') {
        return true;
    }
    // No.6332
    // ê‡ñæ:e77c
    // 0xe77c (Windows-31J)
    // 0x8f4e (UTF-16BE)
    if (argCheck == 'Á|') {
        return true;
    }
    // No.6333
    // ê‡ñæ:e77d
    // 0xe77d (Windows-31J)
    // 0x8f57 (UTF-16BE)
    if (argCheck == 'Á}') {
        return true;
    }
    // No.6334
    // ê‡ñæ:e77e
    // 0xe77e (Windows-31J)
    // 0x8f5c (UTF-16BE)
    if (argCheck == 'Á~') {
        return true;
    }
    // No.6335
    // ê‡ñæ:e780
    // 0xe780 (Windows-31J)
    // 0x8f62 (UTF-16BE)
    if (argCheck == 'ÁÄ') {
        return true;
    }
    // No.6336
    // ê‡ñæ:e781
    // 0xe781 (Windows-31J)
    // 0x8f63 (UTF-16BE)
    if (argCheck == 'ÁÅ') {
        return true;
    }
    // No.6337
    // ê‡ñæ:e782
    // 0xe782 (Windows-31J)
    // 0x8f64 (UTF-16BE)
    if (argCheck == 'ÁÇ') {
        return true;
    }
    // No.6338
    // ê‡ñæ:e783
    // 0xe783 (Windows-31J)
    // 0x8f9c (UTF-16BE)
    if (argCheck == 'ÁÉ') {
        return true;
    }
    // No.6339
    // ê‡ñæ:e784
    // 0xe784 (Windows-31J)
    // 0x8f9f (UTF-16BE)
    if (argCheck == 'ÁÑ') {
        return true;
    }
    // No.6340
    // ê‡ñæ:e785
    // 0xe785 (Windows-31J)
    // 0x8fa3 (UTF-16BE)
    if (argCheck == 'ÁÖ') {
        return true;
    }
    // No.6341
    // ê‡ñæ:e786
    // 0xe786 (Windows-31J)
    // 0x8fad (UTF-16BE)
    if (argCheck == 'ÁÜ') {
        return true;
    }
    // No.6342
    // ê‡ñæ:e787
    // 0xe787 (Windows-31J)
    // 0x8faf (UTF-16BE)
    if (argCheck == 'Áá') {
        return true;
    }
    // No.6343
    // ê‡ñæ:e788
    // 0xe788 (Windows-31J)
    // 0x8fb7 (UTF-16BE)
    if (argCheck == 'Áà') {
        return true;
    }
    // No.6344
    // ê‡ñæ:e789
    // 0xe789 (Windows-31J)
    // 0x8fda (UTF-16BE)
    if (argCheck == 'Áâ') {
        return true;
    }
    // No.6345
    // ê‡ñæ:e78a
    // 0xe78a (Windows-31J)
    // 0x8fe5 (UTF-16BE)
    if (argCheck == 'Áä') {
        return true;
    }
    // No.6346
    // ê‡ñæ:e78b
    // 0xe78b (Windows-31J)
    // 0x8fe2 (UTF-16BE)
    if (argCheck == 'Áã') {
        return true;
    }
    // No.6347
    // ê‡ñæ:e78c
    // 0xe78c (Windows-31J)
    // 0x8fea (UTF-16BE)
    if (argCheck == 'Áå') {
        return true;
    }
    // No.6348
    // ê‡ñæ:e78d
    // 0xe78d (Windows-31J)
    // 0x8fef (UTF-16BE)
    if (argCheck == 'Áç') {
        return true;
    }
    // No.6349
    // ê‡ñæ:e78e
    // 0xe78e (Windows-31J)
    // 0x9087 (UTF-16BE)
    if (argCheck == 'Áé') {
        return true;
    }
    // No.6350
    // ê‡ñæ:e78f
    // 0xe78f (Windows-31J)
    // 0x8ff4 (UTF-16BE)
    if (argCheck == 'Áè') {
        return true;
    }
    // No.6351
    // ê‡ñæ:e790
    // 0xe790 (Windows-31J)
    // 0x9005 (UTF-16BE)
    if (argCheck == 'Áê') {
        return true;
    }
    // No.6352
    // ê‡ñæ:e791
    // 0xe791 (Windows-31J)
    // 0x8ff9 (UTF-16BE)
    if (argCheck == 'Áë') {
        return true;
    }
    // No.6353
    // ê‡ñæ:e792
    // 0xe792 (Windows-31J)
    // 0x8ffa (UTF-16BE)
    if (argCheck == 'Áí') {
        return true;
    }
    // No.6354
    // ê‡ñæ:e793
    // 0xe793 (Windows-31J)
    // 0x9011 (UTF-16BE)
    if (argCheck == 'Áì') {
        return true;
    }
    // No.6355
    // ê‡ñæ:e794
    // 0xe794 (Windows-31J)
    // 0x9015 (UTF-16BE)
    if (argCheck == 'Áî') {
        return true;
    }
    // No.6356
    // ê‡ñæ:e795
    // 0xe795 (Windows-31J)
    // 0x9021 (UTF-16BE)
    if (argCheck == 'Áï') {
        return true;
    }
    // No.6357
    // ê‡ñæ:e796
    // 0xe796 (Windows-31J)
    // 0x900d (UTF-16BE)
    if (argCheck == 'Áñ') {
        return true;
    }
    // No.6358
    // ê‡ñæ:e797
    // 0xe797 (Windows-31J)
    // 0x901e (UTF-16BE)
    if (argCheck == 'Áó') {
        return true;
    }
    // No.6359
    // ê‡ñæ:e798
    // 0xe798 (Windows-31J)
    // 0x9016 (UTF-16BE)
    if (argCheck == 'Áò') {
        return true;
    }
    // No.6360
    // ê‡ñæ:e799
    // 0xe799 (Windows-31J)
    // 0x900b (UTF-16BE)
    if (argCheck == 'Áô') {
        return true;
    }
    // No.6361
    // ê‡ñæ:e79a
    // 0xe79a (Windows-31J)
    // 0x9027 (UTF-16BE)
    if (argCheck == 'Áö') {
        return true;
    }
    // No.6362
    // ê‡ñæ:e79b
    // 0xe79b (Windows-31J)
    // 0x9036 (UTF-16BE)
    if (argCheck == 'Áõ') {
        return true;
    }
    // No.6363
    // ê‡ñæ:e79c
    // 0xe79c (Windows-31J)
    // 0x9035 (UTF-16BE)
    if (argCheck == 'Áú') {
        return true;
    }
    // No.6364
    // ê‡ñæ:e79d
    // 0xe79d (Windows-31J)
    // 0x9039 (UTF-16BE)
    if (argCheck == 'Áù') {
        return true;
    }
    // No.6365
    // ê‡ñæ:e79e
    // 0xe79e (Windows-31J)
    // 0x8ff8 (UTF-16BE)
    if (argCheck == 'Áû') {
        return true;
    }
    // No.6366
    // ê‡ñæ:e79f
    // 0xe79f (Windows-31J)
    // 0x904f (UTF-16BE)
    if (argCheck == 'Áü') {
        return true;
    }
    // No.6367
    // ê‡ñæ:e7a0
    // 0xe7a0 (Windows-31J)
    // 0x9050 (UTF-16BE)
    if (argCheck == 'Á†') {
        return true;
    }
    // No.6368
    // ê‡ñæ:e7a1
    // 0xe7a1 (Windows-31J)
    // 0x9051 (UTF-16BE)
    if (argCheck == 'Á°') {
        return true;
    }
    // No.6369
    // ê‡ñæ:e7a2
    // 0xe7a2 (Windows-31J)
    // 0x9052 (UTF-16BE)
    if (argCheck == 'Á¢') {
        return true;
    }
    // No.6370
    // ê‡ñæ:e7a3
    // 0xe7a3 (Windows-31J)
    // 0x900e (UTF-16BE)
    if (argCheck == 'Á£') {
        return true;
    }
    // No.6371
    // ê‡ñæ:e7a4
    // 0xe7a4 (Windows-31J)
    // 0x9049 (UTF-16BE)
    if (argCheck == 'Á§') {
        return true;
    }
    // No.6372
    // ê‡ñæ:e7a5
    // 0xe7a5 (Windows-31J)
    // 0x903e (UTF-16BE)
    if (argCheck == 'Á•') {
        return true;
    }
    // No.6373
    // ê‡ñæ:e7a6
    // 0xe7a6 (Windows-31J)
    // 0x9056 (UTF-16BE)
    if (argCheck == 'Á¶') {
        return true;
    }
    // No.6374
    // ê‡ñæ:e7a7
    // 0xe7a7 (Windows-31J)
    // 0x9058 (UTF-16BE)
    if (argCheck == 'Áß') {
        return true;
    }
    // No.6375
    // ê‡ñæ:e7a8
    // 0xe7a8 (Windows-31J)
    // 0x905e (UTF-16BE)
    if (argCheck == 'Á®') {
        return true;
    }
    // No.6376
    // ê‡ñæ:e7a9
    // 0xe7a9 (Windows-31J)
    // 0x9068 (UTF-16BE)
    if (argCheck == 'Á©') {
        return true;
    }
    // No.6377
    // ê‡ñæ:e7aa
    // 0xe7aa (Windows-31J)
    // 0x906f (UTF-16BE)
    if (argCheck == 'Á™') {
        return true;
    }
    // No.6378
    // ê‡ñæ:e7ab
    // 0xe7ab (Windows-31J)
    // 0x9076 (UTF-16BE)
    if (argCheck == 'Á´') {
        return true;
    }
    // No.6379
    // ê‡ñæ:e7ac
    // 0xe7ac (Windows-31J)
    // 0x96a8 (UTF-16BE)
    if (argCheck == 'Á¨') {
        return true;
    }
    // No.6380
    // ê‡ñæ:e7ad
    // 0xe7ad (Windows-31J)
    // 0x9072 (UTF-16BE)
    if (argCheck == 'Á≠') {
        return true;
    }
    // No.6381
    // ê‡ñæ:e7ae
    // 0xe7ae (Windows-31J)
    // 0x9082 (UTF-16BE)
    if (argCheck == 'ÁÆ') {
        return true;
    }
    // No.6382
    // ê‡ñæ:e7af
    // 0xe7af (Windows-31J)
    // 0x907d (UTF-16BE)
    if (argCheck == 'ÁØ') {
        return true;
    }
    // No.6383
    // ê‡ñæ:e7b0
    // 0xe7b0 (Windows-31J)
    // 0x9081 (UTF-16BE)
    if (argCheck == 'Á∞') {
        return true;
    }
    // No.6384
    // ê‡ñæ:e7b1
    // 0xe7b1 (Windows-31J)
    // 0x9080 (UTF-16BE)
    if (argCheck == 'Á±') {
        return true;
    }
    // No.6385
    // ê‡ñæ:e7b2
    // 0xe7b2 (Windows-31J)
    // 0x908a (UTF-16BE)
    if (argCheck == 'Á≤') {
        return true;
    }
    // No.6386
    // ê‡ñæ:e7b3
    // 0xe7b3 (Windows-31J)
    // 0x9089 (UTF-16BE)
    if (argCheck == 'Á≥') {
        return true;
    }
    // No.6387
    // ê‡ñæ:e7b4
    // 0xe7b4 (Windows-31J)
    // 0x908f (UTF-16BE)
    if (argCheck == 'Á¥') {
        return true;
    }
    // No.6388
    // ê‡ñæ:e7b5
    // 0xe7b5 (Windows-31J)
    // 0x90a8 (UTF-16BE)
    if (argCheck == 'Áµ') {
        return true;
    }
    // No.6389
    // ê‡ñæ:e7b6
    // 0xe7b6 (Windows-31J)
    // 0x90af (UTF-16BE)
    if (argCheck == 'Á∂') {
        return true;
    }
    // No.6390
    // ê‡ñæ:e7b7
    // 0xe7b7 (Windows-31J)
    // 0x90b1 (UTF-16BE)
    if (argCheck == 'Á∑') {
        return true;
    }
    // No.6391
    // ê‡ñæ:e7b8
    // 0xe7b8 (Windows-31J)
    // 0x90b5 (UTF-16BE)
    if (argCheck == 'Á∏') {
        return true;
    }
    // No.6392
    // ê‡ñæ:e7b9
    // 0xe7b9 (Windows-31J)
    // 0x90e2 (UTF-16BE)
    if (argCheck == 'Áπ') {
        return true;
    }
    // No.6393
    // ê‡ñæ:e7ba
    // 0xe7ba (Windows-31J)
    // 0x90e4 (UTF-16BE)
    if (argCheck == 'Á∫') {
        return true;
    }
    // No.6394
    // ê‡ñæ:e7bb
    // 0xe7bb (Windows-31J)
    // 0x6248 (UTF-16BE)
    if (argCheck == 'Áª') {
        return true;
    }
    // No.6395
    // ê‡ñæ:e7bc
    // 0xe7bc (Windows-31J)
    // 0x90db (UTF-16BE)
    if (argCheck == 'Áº') {
        return true;
    }
    // No.6396
    // ê‡ñæ:e7bd
    // 0xe7bd (Windows-31J)
    // 0x9102 (UTF-16BE)
    if (argCheck == 'ÁΩ') {
        return true;
    }
    // No.6397
    // ê‡ñæ:e7be
    // 0xe7be (Windows-31J)
    // 0x9112 (UTF-16BE)
    if (argCheck == 'Áæ') {
        return true;
    }
    // No.6398
    // ê‡ñæ:e7bf
    // 0xe7bf (Windows-31J)
    // 0x9119 (UTF-16BE)
    if (argCheck == 'Áø') {
        return true;
    }
    // No.6399
    // ê‡ñæ:e7c0
    // 0xe7c0 (Windows-31J)
    // 0x9132 (UTF-16BE)
    if (argCheck == 'Á¿') {
        return true;
    }
    // No.6400
    // ê‡ñæ:e7c1
    // 0xe7c1 (Windows-31J)
    // 0x9130 (UTF-16BE)
    if (argCheck == 'Á¡') {
        return true;
    }
    // No.6401
    // ê‡ñæ:e7c2
    // 0xe7c2 (Windows-31J)
    // 0x914a (UTF-16BE)
    if (argCheck == 'Á¬') {
        return true;
    }
    // No.6402
    // ê‡ñæ:e7c3
    // 0xe7c3 (Windows-31J)
    // 0x9156 (UTF-16BE)
    if (argCheck == 'Á√') {
        return true;
    }
    // No.6403
    // ê‡ñæ:e7c4
    // 0xe7c4 (Windows-31J)
    // 0x9158 (UTF-16BE)
    if (argCheck == 'Áƒ') {
        return true;
    }
    // No.6404
    // ê‡ñæ:e7c5
    // 0xe7c5 (Windows-31J)
    // 0x9163 (UTF-16BE)
    if (argCheck == 'Á≈') {
        return true;
    }
    // No.6405
    // ê‡ñæ:e7c6
    // 0xe7c6 (Windows-31J)
    // 0x9165 (UTF-16BE)
    if (argCheck == 'Á∆') {
        return true;
    }
    // No.6406
    // ê‡ñæ:e7c7
    // 0xe7c7 (Windows-31J)
    // 0x9169 (UTF-16BE)
    if (argCheck == 'Á«') {
        return true;
    }
    // No.6407
    // ê‡ñæ:e7c8
    // 0xe7c8 (Windows-31J)
    // 0x9173 (UTF-16BE)
    if (argCheck == 'Á»') {
        return true;
    }
    // No.6408
    // ê‡ñæ:e7c9
    // 0xe7c9 (Windows-31J)
    // 0x9172 (UTF-16BE)
    if (argCheck == 'Á…') {
        return true;
    }
    // No.6409
    // ê‡ñæ:e7ca
    // 0xe7ca (Windows-31J)
    // 0x918b (UTF-16BE)
    if (argCheck == 'Á ') {
        return true;
    }
    // No.6410
    // ê‡ñæ:e7cb
    // 0xe7cb (Windows-31J)
    // 0x9189 (UTF-16BE)
    if (argCheck == 'ÁÀ') {
        return true;
    }
    // No.6411
    // ê‡ñæ:e7cc
    // 0xe7cc (Windows-31J)
    // 0x9182 (UTF-16BE)
    if (argCheck == 'ÁÃ') {
        return true;
    }
    // No.6412
    // ê‡ñæ:e7cd
    // 0xe7cd (Windows-31J)
    // 0x91a2 (UTF-16BE)
    if (argCheck == 'ÁÕ') {
        return true;
    }
    // No.6413
    // ê‡ñæ:e7ce
    // 0xe7ce (Windows-31J)
    // 0x91ab (UTF-16BE)
    if (argCheck == 'ÁŒ') {
        return true;
    }
    // No.6414
    // ê‡ñæ:e7cf
    // 0xe7cf (Windows-31J)
    // 0x91af (UTF-16BE)
    if (argCheck == 'Áœ') {
        return true;
    }
    // No.6415
    // ê‡ñæ:e7d0
    // 0xe7d0 (Windows-31J)
    // 0x91aa (UTF-16BE)
    if (argCheck == 'Á–') {
        return true;
    }
    // No.6416
    // ê‡ñæ:e7d1
    // 0xe7d1 (Windows-31J)
    // 0x91b5 (UTF-16BE)
    if (argCheck == 'Á—') {
        return true;
    }
    // No.6417
    // ê‡ñæ:e7d2
    // 0xe7d2 (Windows-31J)
    // 0x91b4 (UTF-16BE)
    if (argCheck == 'Á“') {
        return true;
    }
    // No.6418
    // ê‡ñæ:e7d3
    // 0xe7d3 (Windows-31J)
    // 0x91ba (UTF-16BE)
    if (argCheck == 'Á”') {
        return true;
    }
    // No.6419
    // ê‡ñæ:e7d4
    // 0xe7d4 (Windows-31J)
    // 0x91c0 (UTF-16BE)
    if (argCheck == 'Á‘') {
        return true;
    }
    // No.6420
    // ê‡ñæ:e7d5
    // 0xe7d5 (Windows-31J)
    // 0x91c1 (UTF-16BE)
    if (argCheck == 'Á’') {
        return true;
    }
    // No.6421
    // ê‡ñæ:e7d6
    // 0xe7d6 (Windows-31J)
    // 0x91c9 (UTF-16BE)
    if (argCheck == 'Á÷') {
        return true;
    }
    // No.6422
    // ê‡ñæ:e7d7
    // 0xe7d7 (Windows-31J)
    // 0x91cb (UTF-16BE)
    if (argCheck == 'Á◊') {
        return true;
    }
    // No.6423
    // ê‡ñæ:e7d8
    // 0xe7d8 (Windows-31J)
    // 0x91d0 (UTF-16BE)
    if (argCheck == 'Áÿ') {
        return true;
    }
    // No.6424
    // ê‡ñæ:e7d9
    // 0xe7d9 (Windows-31J)
    // 0x91d6 (UTF-16BE)
    if (argCheck == 'ÁŸ') {
        return true;
    }
    // No.6425
    // ê‡ñæ:e7da
    // 0xe7da (Windows-31J)
    // 0x91df (UTF-16BE)
    if (argCheck == 'Á⁄') {
        return true;
    }
    // No.6426
    // ê‡ñæ:e7db
    // 0xe7db (Windows-31J)
    // 0x91e1 (UTF-16BE)
    if (argCheck == 'Á€') {
        return true;
    }
    // No.6427
    // ê‡ñæ:e7dc
    // 0xe7dc (Windows-31J)
    // 0x91db (UTF-16BE)
    if (argCheck == 'Á‹') {
        return true;
    }
    // No.6428
    // ê‡ñæ:e7dd
    // 0xe7dd (Windows-31J)
    // 0x91fc (UTF-16BE)
    if (argCheck == 'Á›') {
        return true;
    }
    // No.6429
    // ê‡ñæ:e7de
    // 0xe7de (Windows-31J)
    // 0x91f5 (UTF-16BE)
    if (argCheck == 'Áﬁ') {
        return true;
    }
    // No.6430
    // ê‡ñæ:e7df
    // 0xe7df (Windows-31J)
    // 0x91f6 (UTF-16BE)
    if (argCheck == 'Áﬂ') {
        return true;
    }
    // No.6431
    // ê‡ñæ:e7e0
    // 0xe7e0 (Windows-31J)
    // 0x921e (UTF-16BE)
    if (argCheck == 'Á‡') {
        return true;
    }
    // No.6432
    // ê‡ñæ:e7e1
    // 0xe7e1 (Windows-31J)
    // 0x91ff (UTF-16BE)
    if (argCheck == 'Á·') {
        return true;
    }
    // No.6433
    // ê‡ñæ:e7e2
    // 0xe7e2 (Windows-31J)
    // 0x9214 (UTF-16BE)
    if (argCheck == 'Á‚') {
        return true;
    }
    // No.6434
    // ê‡ñæ:e7e3
    // 0xe7e3 (Windows-31J)
    // 0x922c (UTF-16BE)
    if (argCheck == 'Á„') {
        return true;
    }
    // No.6435
    // ê‡ñæ:e7e4
    // 0xe7e4 (Windows-31J)
    // 0x9215 (UTF-16BE)
    if (argCheck == 'Á‰') {
        return true;
    }
    // No.6436
    // ê‡ñæ:e7e5
    // 0xe7e5 (Windows-31J)
    // 0x9211 (UTF-16BE)
    if (argCheck == 'ÁÂ') {
        return true;
    }
    // No.6437
    // ê‡ñæ:e7e6
    // 0xe7e6 (Windows-31J)
    // 0x925e (UTF-16BE)
    if (argCheck == 'ÁÊ') {
        return true;
    }
    // No.6438
    // ê‡ñæ:e7e7
    // 0xe7e7 (Windows-31J)
    // 0x9257 (UTF-16BE)
    if (argCheck == 'ÁÁ') {
        return true;
    }
    // No.6439
    // ê‡ñæ:e7e8
    // 0xe7e8 (Windows-31J)
    // 0x9245 (UTF-16BE)
    if (argCheck == 'ÁË') {
        return true;
    }
    // No.6440
    // ê‡ñæ:e7e9
    // 0xe7e9 (Windows-31J)
    // 0x9249 (UTF-16BE)
    if (argCheck == 'ÁÈ') {
        return true;
    }
    // No.6441
    // ê‡ñæ:e7ea
    // 0xe7ea (Windows-31J)
    // 0x9264 (UTF-16BE)
    if (argCheck == 'ÁÍ') {
        return true;
    }
    // No.6442
    // ê‡ñæ:e7eb
    // 0xe7eb (Windows-31J)
    // 0x9248 (UTF-16BE)
    if (argCheck == 'ÁÎ') {
        return true;
    }
    // No.6443
    // ê‡ñæ:e7ec
    // 0xe7ec (Windows-31J)
    // 0x9295 (UTF-16BE)
    if (argCheck == 'ÁÏ') {
        return true;
    }
    // No.6444
    // ê‡ñæ:e7ed
    // 0xe7ed (Windows-31J)
    // 0x923f (UTF-16BE)
    if (argCheck == 'ÁÌ') {
        return true;
    }
    // No.6445
    // ê‡ñæ:e7ee
    // 0xe7ee (Windows-31J)
    // 0x924b (UTF-16BE)
    if (argCheck == 'ÁÓ') {
        return true;
    }
    // No.6446
    // ê‡ñæ:e7ef
    // 0xe7ef (Windows-31J)
    // 0x9250 (UTF-16BE)
    if (argCheck == 'ÁÔ') {
        return true;
    }
    // No.6447
    // ê‡ñæ:e7f0
    // 0xe7f0 (Windows-31J)
    // 0x929c (UTF-16BE)
    if (argCheck == 'Á') {
        return true;
    }
    // No.6448
    // ê‡ñæ:e7f1
    // 0xe7f1 (Windows-31J)
    // 0x9296 (UTF-16BE)
    if (argCheck == 'ÁÒ') {
        return true;
    }
    // No.6449
    // ê‡ñæ:e7f2
    // 0xe7f2 (Windows-31J)
    // 0x9293 (UTF-16BE)
    if (argCheck == 'ÁÚ') {
        return true;
    }
    // No.6450
    // ê‡ñæ:e7f3
    // 0xe7f3 (Windows-31J)
    // 0x929b (UTF-16BE)
    if (argCheck == 'ÁÛ') {
        return true;
    }
    // No.6451
    // ê‡ñæ:e7f4
    // 0xe7f4 (Windows-31J)
    // 0x925a (UTF-16BE)
    if (argCheck == 'ÁÙ') {
        return true;
    }
    // No.6452
    // ê‡ñæ:e7f5
    // 0xe7f5 (Windows-31J)
    // 0x92cf (UTF-16BE)
    if (argCheck == 'Áı') {
        return true;
    }
    // No.6453
    // ê‡ñæ:e7f6
    // 0xe7f6 (Windows-31J)
    // 0x92b9 (UTF-16BE)
    if (argCheck == 'Áˆ') {
        return true;
    }
    // No.6454
    // ê‡ñæ:e7f7
    // 0xe7f7 (Windows-31J)
    // 0x92b7 (UTF-16BE)
    if (argCheck == 'Á˜') {
        return true;
    }
    // No.6455
    // ê‡ñæ:e7f8
    // 0xe7f8 (Windows-31J)
    // 0x92e9 (UTF-16BE)
    if (argCheck == 'Á¯') {
        return true;
    }
    // No.6456
    // ê‡ñæ:e7f9
    // 0xe7f9 (Windows-31J)
    // 0x930f (UTF-16BE)
    if (argCheck == 'Á˘') {
        return true;
    }
    // No.6457
    // ê‡ñæ:e7fa
    // 0xe7fa (Windows-31J)
    // 0x92fa (UTF-16BE)
    if (argCheck == 'Á˙') {
        return true;
    }
    // No.6458
    // ê‡ñæ:e7fb
    // 0xe7fb (Windows-31J)
    // 0x9344 (UTF-16BE)
    if (argCheck == 'Á˚') {
        return true;
    }
    // No.6459
    // ê‡ñæ:e7fc
    // 0xe7fc (Windows-31J)
    // 0x932e (UTF-16BE)
    if (argCheck == 'Á¸') {
        return true;
    }
    // No.6460
    // ê‡ñæ:e840
    // 0xe840 (Windows-31J)
    // 0x9319 (UTF-16BE)
    if (argCheck == 'Ë@') {
        return true;
    }
    // No.6461
    // ê‡ñæ:e841
    // 0xe841 (Windows-31J)
    // 0x9322 (UTF-16BE)
    if (argCheck == 'ËA') {
        return true;
    }
    // No.6462
    // ê‡ñæ:e842
    // 0xe842 (Windows-31J)
    // 0x931a (UTF-16BE)
    if (argCheck == 'ËB') {
        return true;
    }
    // No.6463
    // ê‡ñæ:e843
    // 0xe843 (Windows-31J)
    // 0x9323 (UTF-16BE)
    if (argCheck == 'ËC') {
        return true;
    }
    // No.6464
    // ê‡ñæ:e844
    // 0xe844 (Windows-31J)
    // 0x933a (UTF-16BE)
    if (argCheck == 'ËD') {
        return true;
    }
    // No.6465
    // ê‡ñæ:e845
    // 0xe845 (Windows-31J)
    // 0x9335 (UTF-16BE)
    if (argCheck == 'ËE') {
        return true;
    }
    // No.6466
    // ê‡ñæ:e846
    // 0xe846 (Windows-31J)
    // 0x933b (UTF-16BE)
    if (argCheck == 'ËF') {
        return true;
    }
    // No.6467
    // ê‡ñæ:e847
    // 0xe847 (Windows-31J)
    // 0x935c (UTF-16BE)
    if (argCheck == 'ËG') {
        return true;
    }
    // No.6468
    // ê‡ñæ:e848
    // 0xe848 (Windows-31J)
    // 0x9360 (UTF-16BE)
    if (argCheck == 'ËH') {
        return true;
    }
    // No.6469
    // ê‡ñæ:e849
    // 0xe849 (Windows-31J)
    // 0x937c (UTF-16BE)
    if (argCheck == 'ËI') {
        return true;
    }
    // No.6470
    // ê‡ñæ:e84a
    // 0xe84a (Windows-31J)
    // 0x936e (UTF-16BE)
    if (argCheck == 'ËJ') {
        return true;
    }
    // No.6471
    // ê‡ñæ:e84b
    // 0xe84b (Windows-31J)
    // 0x9356 (UTF-16BE)
    if (argCheck == 'ËK') {
        return true;
    }
    // No.6472
    // ê‡ñæ:e84c
    // 0xe84c (Windows-31J)
    // 0x93b0 (UTF-16BE)
    if (argCheck == 'ËL') {
        return true;
    }
    // No.6473
    // ê‡ñæ:e84d
    // 0xe84d (Windows-31J)
    // 0x93ac (UTF-16BE)
    if (argCheck == 'ËM') {
        return true;
    }
    // No.6474
    // ê‡ñæ:e84e
    // 0xe84e (Windows-31J)
    // 0x93ad (UTF-16BE)
    if (argCheck == 'ËN') {
        return true;
    }
    // No.6475
    // ê‡ñæ:e84f
    // 0xe84f (Windows-31J)
    // 0x9394 (UTF-16BE)
    if (argCheck == 'ËO') {
        return true;
    }
    // No.6476
    // ê‡ñæ:e850
    // 0xe850 (Windows-31J)
    // 0x93b9 (UTF-16BE)
    if (argCheck == 'ËP') {
        return true;
    }
    // No.6477
    // ê‡ñæ:e851
    // 0xe851 (Windows-31J)
    // 0x93d6 (UTF-16BE)
    if (argCheck == 'ËQ') {
        return true;
    }
    // No.6478
    // ê‡ñæ:e852
    // 0xe852 (Windows-31J)
    // 0x93d7 (UTF-16BE)
    if (argCheck == 'ËR') {
        return true;
    }
    // No.6479
    // ê‡ñæ:e853
    // 0xe853 (Windows-31J)
    // 0x93e8 (UTF-16BE)
    if (argCheck == 'ËS') {
        return true;
    }
    // No.6480
    // ê‡ñæ:e854
    // 0xe854 (Windows-31J)
    // 0x93e5 (UTF-16BE)
    if (argCheck == 'ËT') {
        return true;
    }
    // No.6481
    // ê‡ñæ:e855
    // 0xe855 (Windows-31J)
    // 0x93d8 (UTF-16BE)
    if (argCheck == 'ËU') {
        return true;
    }
    // No.6482
    // ê‡ñæ:e856
    // 0xe856 (Windows-31J)
    // 0x93c3 (UTF-16BE)
    if (argCheck == 'ËV') {
        return true;
    }
    // No.6483
    // ê‡ñæ:e857
    // 0xe857 (Windows-31J)
    // 0x93dd (UTF-16BE)
    if (argCheck == 'ËW') {
        return true;
    }
    // No.6484
    // ê‡ñæ:e858
    // 0xe858 (Windows-31J)
    // 0x93d0 (UTF-16BE)
    if (argCheck == 'ËX') {
        return true;
    }
    // No.6485
    // ê‡ñæ:e859
    // 0xe859 (Windows-31J)
    // 0x93c8 (UTF-16BE)
    if (argCheck == 'ËY') {
        return true;
    }
    // No.6486
    // ê‡ñæ:e85a
    // 0xe85a (Windows-31J)
    // 0x93e4 (UTF-16BE)
    if (argCheck == 'ËZ') {
        return true;
    }
    // No.6487
    // ê‡ñæ:e85b
    // 0xe85b (Windows-31J)
    // 0x941a (UTF-16BE)
    if (argCheck == 'Ë[') {
        return true;
    }
    // No.6488
    // ê‡ñæ:e85c
    // 0xe85c (Windows-31J)
    // 0x9414 (UTF-16BE)
    if (argCheck == 'Ë\') {
        return true;
    }
    // No.6489
    // ê‡ñæ:e85d
    // 0xe85d (Windows-31J)
    // 0x9413 (UTF-16BE)
    if (argCheck == 'Ë]') {
        return true;
    }
    // No.6490
    // ê‡ñæ:e85e
    // 0xe85e (Windows-31J)
    // 0x9403 (UTF-16BE)
    if (argCheck == 'Ë^') {
        return true;
    }
    // No.6491
    // ê‡ñæ:e85f
    // 0xe85f (Windows-31J)
    // 0x9407 (UTF-16BE)
    if (argCheck == 'Ë_') {
        return true;
    }
    // No.6492
    // ê‡ñæ:e860
    // 0xe860 (Windows-31J)
    // 0x9410 (UTF-16BE)
    if (argCheck == 'Ë`') {
        return true;
    }
    // No.6493
    // ê‡ñæ:e861
    // 0xe861 (Windows-31J)
    // 0x9436 (UTF-16BE)
    if (argCheck == 'Ëa') {
        return true;
    }
    // No.6494
    // ê‡ñæ:e862
    // 0xe862 (Windows-31J)
    // 0x942b (UTF-16BE)
    if (argCheck == 'Ëb') {
        return true;
    }
    // No.6495
    // ê‡ñæ:e863
    // 0xe863 (Windows-31J)
    // 0x9435 (UTF-16BE)
    if (argCheck == 'Ëc') {
        return true;
    }
    // No.6496
    // ê‡ñæ:e864
    // 0xe864 (Windows-31J)
    // 0x9421 (UTF-16BE)
    if (argCheck == 'Ëd') {
        return true;
    }
    // No.6497
    // ê‡ñæ:e865
    // 0xe865 (Windows-31J)
    // 0x943a (UTF-16BE)
    if (argCheck == 'Ëe') {
        return true;
    }
    // No.6498
    // ê‡ñæ:e866
    // 0xe866 (Windows-31J)
    // 0x9441 (UTF-16BE)
    if (argCheck == 'Ëf') {
        return true;
    }
    // No.6499
    // ê‡ñæ:e867
    // 0xe867 (Windows-31J)
    // 0x9452 (UTF-16BE)
    if (argCheck == 'Ëg') {
        return true;
    }
    // No.6500
    // ê‡ñæ:e868
    // 0xe868 (Windows-31J)
    // 0x9444 (UTF-16BE)
    if (argCheck == 'Ëh') {
        return true;
    }
    // No.6501
    // ê‡ñæ:e869
    // 0xe869 (Windows-31J)
    // 0x945b (UTF-16BE)
    if (argCheck == 'Ëi') {
        return true;
    }
    // No.6502
    // ê‡ñæ:e86a
    // 0xe86a (Windows-31J)
    // 0x9460 (UTF-16BE)
    if (argCheck == 'Ëj') {
        return true;
    }
    // No.6503
    // ê‡ñæ:e86b
    // 0xe86b (Windows-31J)
    // 0x9462 (UTF-16BE)
    if (argCheck == 'Ëk') {
        return true;
    }
    // No.6504
    // ê‡ñæ:e86c
    // 0xe86c (Windows-31J)
    // 0x945e (UTF-16BE)
    if (argCheck == 'Ël') {
        return true;
    }
    // No.6505
    // ê‡ñæ:e86d
    // 0xe86d (Windows-31J)
    // 0x946a (UTF-16BE)
    if (argCheck == 'Ëm') {
        return true;
    }
    // No.6506
    // ê‡ñæ:e86e
    // 0xe86e (Windows-31J)
    // 0x9229 (UTF-16BE)
    if (argCheck == 'Ën') {
        return true;
    }
    // No.6507
    // ê‡ñæ:e86f
    // 0xe86f (Windows-31J)
    // 0x9470 (UTF-16BE)
    if (argCheck == 'Ëo') {
        return true;
    }
    // No.6508
    // ê‡ñæ:e870
    // 0xe870 (Windows-31J)
    // 0x9475 (UTF-16BE)
    if (argCheck == 'Ëp') {
        return true;
    }
    // No.6509
    // ê‡ñæ:e871
    // 0xe871 (Windows-31J)
    // 0x9477 (UTF-16BE)
    if (argCheck == 'Ëq') {
        return true;
    }
    // No.6510
    // ê‡ñæ:e872
    // 0xe872 (Windows-31J)
    // 0x947d (UTF-16BE)
    if (argCheck == 'Ër') {
        return true;
    }
    // No.6511
    // ê‡ñæ:e873
    // 0xe873 (Windows-31J)
    // 0x945a (UTF-16BE)
    if (argCheck == 'Ës') {
        return true;
    }
    // No.6512
    // ê‡ñæ:e874
    // 0xe874 (Windows-31J)
    // 0x947c (UTF-16BE)
    if (argCheck == 'Ët') {
        return true;
    }
    // No.6513
    // ê‡ñæ:e875
    // 0xe875 (Windows-31J)
    // 0x947e (UTF-16BE)
    if (argCheck == 'Ëu') {
        return true;
    }
    // No.6514
    // ê‡ñæ:e876
    // 0xe876 (Windows-31J)
    // 0x9481 (UTF-16BE)
    if (argCheck == 'Ëv') {
        return true;
    }
    // No.6515
    // ê‡ñæ:e877
    // 0xe877 (Windows-31J)
    // 0x947f (UTF-16BE)
    if (argCheck == 'Ëw') {
        return true;
    }
    // No.6516
    // ê‡ñæ:e878
    // 0xe878 (Windows-31J)
    // 0x9582 (UTF-16BE)
    if (argCheck == 'Ëx') {
        return true;
    }
    // No.6517
    // ê‡ñæ:e879
    // 0xe879 (Windows-31J)
    // 0x9587 (UTF-16BE)
    if (argCheck == 'Ëy') {
        return true;
    }
    // No.6518
    // ê‡ñæ:e87a
    // 0xe87a (Windows-31J)
    // 0x958a (UTF-16BE)
    if (argCheck == 'Ëz') {
        return true;
    }
    // No.6519
    // ê‡ñæ:e87b
    // 0xe87b (Windows-31J)
    // 0x9594 (UTF-16BE)
    if (argCheck == 'Ë{') {
        return true;
    }
    // No.6520
    // ê‡ñæ:e87c
    // 0xe87c (Windows-31J)
    // 0x9596 (UTF-16BE)
    if (argCheck == 'Ë|') {
        return true;
    }
    // No.6521
    // ê‡ñæ:e87d
    // 0xe87d (Windows-31J)
    // 0x9598 (UTF-16BE)
    if (argCheck == 'Ë}') {
        return true;
    }
    // No.6522
    // ê‡ñæ:e87e
    // 0xe87e (Windows-31J)
    // 0x9599 (UTF-16BE)
    if (argCheck == 'Ë~') {
        return true;
    }
    // No.6523
    // ê‡ñæ:e880
    // 0xe880 (Windows-31J)
    // 0x95a0 (UTF-16BE)
    if (argCheck == 'ËÄ') {
        return true;
    }
    // No.6524
    // ê‡ñæ:e881
    // 0xe881 (Windows-31J)
    // 0x95a8 (UTF-16BE)
    if (argCheck == 'ËÅ') {
        return true;
    }
    // No.6525
    // ê‡ñæ:e882
    // 0xe882 (Windows-31J)
    // 0x95a7 (UTF-16BE)
    if (argCheck == 'ËÇ') {
        return true;
    }
    // No.6526
    // ê‡ñæ:e883
    // 0xe883 (Windows-31J)
    // 0x95ad (UTF-16BE)
    if (argCheck == 'ËÉ') {
        return true;
    }
    // No.6527
    // ê‡ñæ:e884
    // 0xe884 (Windows-31J)
    // 0x95bc (UTF-16BE)
    if (argCheck == 'ËÑ') {
        return true;
    }
    // No.6528
    // ê‡ñæ:e885
    // 0xe885 (Windows-31J)
    // 0x95bb (UTF-16BE)
    if (argCheck == 'ËÖ') {
        return true;
    }
    // No.6529
    // ê‡ñæ:e886
    // 0xe886 (Windows-31J)
    // 0x95b9 (UTF-16BE)
    if (argCheck == 'ËÜ') {
        return true;
    }
    // No.6530
    // ê‡ñæ:e887
    // 0xe887 (Windows-31J)
    // 0x95be (UTF-16BE)
    if (argCheck == 'Ëá') {
        return true;
    }
    // No.6531
    // ê‡ñæ:e888
    // 0xe888 (Windows-31J)
    // 0x95ca (UTF-16BE)
    if (argCheck == 'Ëà') {
        return true;
    }
    // No.6532
    // ê‡ñæ:e889
    // 0xe889 (Windows-31J)
    // 0x6ff6 (UTF-16BE)
    if (argCheck == 'Ëâ') {
        return true;
    }
    // No.6533
    // ê‡ñæ:e88a
    // 0xe88a (Windows-31J)
    // 0x95c3 (UTF-16BE)
    if (argCheck == 'Ëä') {
        return true;
    }
    // No.6534
    // ê‡ñæ:e88b
    // 0xe88b (Windows-31J)
    // 0x95cd (UTF-16BE)
    if (argCheck == 'Ëã') {
        return true;
    }
    // No.6535
    // ê‡ñæ:e88c
    // 0xe88c (Windows-31J)
    // 0x95cc (UTF-16BE)
    if (argCheck == 'Ëå') {
        return true;
    }
    // No.6536
    // ê‡ñæ:e88d
    // 0xe88d (Windows-31J)
    // 0x95d5 (UTF-16BE)
    if (argCheck == 'Ëç') {
        return true;
    }
    // No.6537
    // ê‡ñæ:e88e
    // 0xe88e (Windows-31J)
    // 0x95d4 (UTF-16BE)
    if (argCheck == 'Ëé') {
        return true;
    }
    // No.6538
    // ê‡ñæ:e88f
    // 0xe88f (Windows-31J)
    // 0x95d6 (UTF-16BE)
    if (argCheck == 'Ëè') {
        return true;
    }
    // No.6539
    // ê‡ñæ:e890
    // 0xe890 (Windows-31J)
    // 0x95dc (UTF-16BE)
    if (argCheck == 'Ëê') {
        return true;
    }
    // No.6540
    // ê‡ñæ:e891
    // 0xe891 (Windows-31J)
    // 0x95e1 (UTF-16BE)
    if (argCheck == 'Ëë') {
        return true;
    }
    // No.6541
    // ê‡ñæ:e892
    // 0xe892 (Windows-31J)
    // 0x95e5 (UTF-16BE)
    if (argCheck == 'Ëí') {
        return true;
    }
    // No.6542
    // ê‡ñæ:e893
    // 0xe893 (Windows-31J)
    // 0x95e2 (UTF-16BE)
    if (argCheck == 'Ëì') {
        return true;
    }
    // No.6543
    // ê‡ñæ:e894
    // 0xe894 (Windows-31J)
    // 0x9621 (UTF-16BE)
    if (argCheck == 'Ëî') {
        return true;
    }
    // No.6544
    // ê‡ñæ:e895
    // 0xe895 (Windows-31J)
    // 0x9628 (UTF-16BE)
    if (argCheck == 'Ëï') {
        return true;
    }
    // No.6545
    // ê‡ñæ:e896
    // 0xe896 (Windows-31J)
    // 0x962e (UTF-16BE)
    if (argCheck == 'Ëñ') {
        return true;
    }
    // No.6546
    // ê‡ñæ:e897
    // 0xe897 (Windows-31J)
    // 0x962f (UTF-16BE)
    if (argCheck == 'Ëó') {
        return true;
    }
    // No.6547
    // ê‡ñæ:e898
    // 0xe898 (Windows-31J)
    // 0x9642 (UTF-16BE)
    if (argCheck == 'Ëò') {
        return true;
    }
    // No.6548
    // ê‡ñæ:e899
    // 0xe899 (Windows-31J)
    // 0x964c (UTF-16BE)
    if (argCheck == 'Ëô') {
        return true;
    }
    // No.6549
    // ê‡ñæ:e89a
    // 0xe89a (Windows-31J)
    // 0x964f (UTF-16BE)
    if (argCheck == 'Ëö') {
        return true;
    }
    // No.6550
    // ê‡ñæ:e89b
    // 0xe89b (Windows-31J)
    // 0x964b (UTF-16BE)
    if (argCheck == 'Ëõ') {
        return true;
    }
    // No.6551
    // ê‡ñæ:e89c
    // 0xe89c (Windows-31J)
    // 0x9677 (UTF-16BE)
    if (argCheck == 'Ëú') {
        return true;
    }
    // No.6552
    // ê‡ñæ:e89d
    // 0xe89d (Windows-31J)
    // 0x965c (UTF-16BE)
    if (argCheck == 'Ëù') {
        return true;
    }
    // No.6553
    // ê‡ñæ:e89e
    // 0xe89e (Windows-31J)
    // 0x965e (UTF-16BE)
    if (argCheck == 'Ëû') {
        return true;
    }
    // No.6554
    // ê‡ñæ:e89f
    // 0xe89f (Windows-31J)
    // 0x965d (UTF-16BE)
    if (argCheck == 'Ëü') {
        return true;
    }
    // No.6555
    // ê‡ñæ:e8a0
    // 0xe8a0 (Windows-31J)
    // 0x965f (UTF-16BE)
    if (argCheck == 'Ë†') {
        return true;
    }
    // No.6556
    // ê‡ñæ:e8a1
    // 0xe8a1 (Windows-31J)
    // 0x9666 (UTF-16BE)
    if (argCheck == 'Ë°') {
        return true;
    }
    // No.6557
    // ê‡ñæ:e8a2
    // 0xe8a2 (Windows-31J)
    // 0x9672 (UTF-16BE)
    if (argCheck == 'Ë¢') {
        return true;
    }
    // No.6558
    // ê‡ñæ:e8a3
    // 0xe8a3 (Windows-31J)
    // 0x966c (UTF-16BE)
    if (argCheck == 'Ë£') {
        return true;
    }
    // No.6559
    // ê‡ñæ:e8a4
    // 0xe8a4 (Windows-31J)
    // 0x968d (UTF-16BE)
    if (argCheck == 'Ë§') {
        return true;
    }
    // No.6560
    // ê‡ñæ:e8a5
    // 0xe8a5 (Windows-31J)
    // 0x9698 (UTF-16BE)
    if (argCheck == 'Ë•') {
        return true;
    }
    // No.6561
    // ê‡ñæ:e8a6
    // 0xe8a6 (Windows-31J)
    // 0x9695 (UTF-16BE)
    if (argCheck == 'Ë¶') {
        return true;
    }
    // No.6562
    // ê‡ñæ:e8a7
    // 0xe8a7 (Windows-31J)
    // 0x9697 (UTF-16BE)
    if (argCheck == 'Ëß') {
        return true;
    }
    // No.6563
    // ê‡ñæ:e8a8
    // 0xe8a8 (Windows-31J)
    // 0x96aa (UTF-16BE)
    if (argCheck == 'Ë®') {
        return true;
    }
    // No.6564
    // ê‡ñæ:e8a9
    // 0xe8a9 (Windows-31J)
    // 0x96a7 (UTF-16BE)
    if (argCheck == 'Ë©') {
        return true;
    }
    // No.6565
    // ê‡ñæ:e8aa
    // 0xe8aa (Windows-31J)
    // 0x96b1 (UTF-16BE)
    if (argCheck == 'Ë™') {
        return true;
    }
    // No.6566
    // ê‡ñæ:e8ab
    // 0xe8ab (Windows-31J)
    // 0x96b2 (UTF-16BE)
    if (argCheck == 'Ë´') {
        return true;
    }
    // No.6567
    // ê‡ñæ:e8ac
    // 0xe8ac (Windows-31J)
    // 0x96b0 (UTF-16BE)
    if (argCheck == 'Ë¨') {
        return true;
    }
    // No.6568
    // ê‡ñæ:e8ad
    // 0xe8ad (Windows-31J)
    // 0x96b4 (UTF-16BE)
    if (argCheck == 'Ë≠') {
        return true;
    }
    // No.6569
    // ê‡ñæ:e8ae
    // 0xe8ae (Windows-31J)
    // 0x96b6 (UTF-16BE)
    if (argCheck == 'ËÆ') {
        return true;
    }
    // No.6570
    // ê‡ñæ:e8af
    // 0xe8af (Windows-31J)
    // 0x96b8 (UTF-16BE)
    if (argCheck == 'ËØ') {
        return true;
    }
    // No.6571
    // ê‡ñæ:e8b0
    // 0xe8b0 (Windows-31J)
    // 0x96b9 (UTF-16BE)
    if (argCheck == 'Ë∞') {
        return true;
    }
    // No.6572
    // ê‡ñæ:e8b1
    // 0xe8b1 (Windows-31J)
    // 0x96ce (UTF-16BE)
    if (argCheck == 'Ë±') {
        return true;
    }
    // No.6573
    // ê‡ñæ:e8b2
    // 0xe8b2 (Windows-31J)
    // 0x96cb (UTF-16BE)
    if (argCheck == 'Ë≤') {
        return true;
    }
    // No.6574
    // ê‡ñæ:e8b3
    // 0xe8b3 (Windows-31J)
    // 0x96c9 (UTF-16BE)
    if (argCheck == 'Ë≥') {
        return true;
    }
    // No.6575
    // ê‡ñæ:e8b4
    // 0xe8b4 (Windows-31J)
    // 0x96cd (UTF-16BE)
    if (argCheck == 'Ë¥') {
        return true;
    }
    // No.6576
    // ê‡ñæ:e8b5
    // 0xe8b5 (Windows-31J)
    // 0x894d (UTF-16BE)
    if (argCheck == 'Ëµ') {
        return true;
    }
    // No.6577
    // ê‡ñæ:e8b6
    // 0xe8b6 (Windows-31J)
    // 0x96dc (UTF-16BE)
    if (argCheck == 'Ë∂') {
        return true;
    }
    // No.6578
    // ê‡ñæ:e8b7
    // 0xe8b7 (Windows-31J)
    // 0x970d (UTF-16BE)
    if (argCheck == 'Ë∑') {
        return true;
    }
    // No.6579
    // ê‡ñæ:e8b8
    // 0xe8b8 (Windows-31J)
    // 0x96d5 (UTF-16BE)
    if (argCheck == 'Ë∏') {
        return true;
    }
    // No.6580
    // ê‡ñæ:e8b9
    // 0xe8b9 (Windows-31J)
    // 0x96f9 (UTF-16BE)
    if (argCheck == 'Ëπ') {
        return true;
    }
    // No.6581
    // ê‡ñæ:e8ba
    // 0xe8ba (Windows-31J)
    // 0x9704 (UTF-16BE)
    if (argCheck == 'Ë∫') {
        return true;
    }
    // No.6582
    // ê‡ñæ:e8bb
    // 0xe8bb (Windows-31J)
    // 0x9706 (UTF-16BE)
    if (argCheck == 'Ëª') {
        return true;
    }
    // No.6583
    // ê‡ñæ:e8bc
    // 0xe8bc (Windows-31J)
    // 0x9708 (UTF-16BE)
    if (argCheck == 'Ëº') {
        return true;
    }
    // No.6584
    // ê‡ñæ:e8bd
    // 0xe8bd (Windows-31J)
    // 0x9713 (UTF-16BE)
    if (argCheck == 'ËΩ') {
        return true;
    }
    // No.6585
    // ê‡ñæ:e8be
    // 0xe8be (Windows-31J)
    // 0x970e (UTF-16BE)
    if (argCheck == 'Ëæ') {
        return true;
    }
    // No.6586
    // ê‡ñæ:e8bf
    // 0xe8bf (Windows-31J)
    // 0x9711 (UTF-16BE)
    if (argCheck == 'Ëø') {
        return true;
    }
    // No.6587
    // ê‡ñæ:e8c0
    // 0xe8c0 (Windows-31J)
    // 0x970f (UTF-16BE)
    if (argCheck == 'Ë¿') {
        return true;
    }
    // No.6588
    // ê‡ñæ:e8c1
    // 0xe8c1 (Windows-31J)
    // 0x9716 (UTF-16BE)
    if (argCheck == 'Ë¡') {
        return true;
    }
    // No.6589
    // ê‡ñæ:e8c2
    // 0xe8c2 (Windows-31J)
    // 0x9719 (UTF-16BE)
    if (argCheck == 'Ë¬') {
        return true;
    }
    // No.6590
    // ê‡ñæ:e8c3
    // 0xe8c3 (Windows-31J)
    // 0x9724 (UTF-16BE)
    if (argCheck == 'Ë√') {
        return true;
    }
    // No.6591
    // ê‡ñæ:e8c4
    // 0xe8c4 (Windows-31J)
    // 0x972a (UTF-16BE)
    if (argCheck == 'Ëƒ') {
        return true;
    }
    // No.6592
    // ê‡ñæ:e8c5
    // 0xe8c5 (Windows-31J)
    // 0x9730 (UTF-16BE)
    if (argCheck == 'Ë≈') {
        return true;
    }
    // No.6593
    // ê‡ñæ:e8c6
    // 0xe8c6 (Windows-31J)
    // 0x9739 (UTF-16BE)
    if (argCheck == 'Ë∆') {
        return true;
    }
    // No.6594
    // ê‡ñæ:e8c7
    // 0xe8c7 (Windows-31J)
    // 0x973d (UTF-16BE)
    if (argCheck == 'Ë«') {
        return true;
    }
    // No.6595
    // ê‡ñæ:e8c8
    // 0xe8c8 (Windows-31J)
    // 0x973e (UTF-16BE)
    if (argCheck == 'Ë»') {
        return true;
    }
    // No.6596
    // ê‡ñæ:e8c9
    // 0xe8c9 (Windows-31J)
    // 0x9744 (UTF-16BE)
    if (argCheck == 'Ë…') {
        return true;
    }
    // No.6597
    // ê‡ñæ:e8ca
    // 0xe8ca (Windows-31J)
    // 0x9746 (UTF-16BE)
    if (argCheck == 'Ë ') {
        return true;
    }
    // No.6598
    // ê‡ñæ:e8cb
    // 0xe8cb (Windows-31J)
    // 0x9748 (UTF-16BE)
    if (argCheck == 'ËÀ') {
        return true;
    }
    // No.6599
    // ê‡ñæ:e8cc
    // 0xe8cc (Windows-31J)
    // 0x9742 (UTF-16BE)
    if (argCheck == 'ËÃ') {
        return true;
    }
    // No.6600
    // ê‡ñæ:e8cd
    // 0xe8cd (Windows-31J)
    // 0x9749 (UTF-16BE)
    if (argCheck == 'ËÕ') {
        return true;
    }
    // No.6601
    // ê‡ñæ:e8ce
    // 0xe8ce (Windows-31J)
    // 0x975c (UTF-16BE)
    if (argCheck == 'ËŒ') {
        return true;
    }
    // No.6602
    // ê‡ñæ:e8cf
    // 0xe8cf (Windows-31J)
    // 0x9760 (UTF-16BE)
    if (argCheck == 'Ëœ') {
        return true;
    }
    // No.6603
    // ê‡ñæ:e8d0
    // 0xe8d0 (Windows-31J)
    // 0x9764 (UTF-16BE)
    if (argCheck == 'Ë–') {
        return true;
    }
    // No.6604
    // ê‡ñæ:e8d1
    // 0xe8d1 (Windows-31J)
    // 0x9766 (UTF-16BE)
    if (argCheck == 'Ë—') {
        return true;
    }
    // No.6605
    // ê‡ñæ:e8d2
    // 0xe8d2 (Windows-31J)
    // 0x9768 (UTF-16BE)
    if (argCheck == 'Ë“') {
        return true;
    }
    // No.6606
    // ê‡ñæ:e8d3
    // 0xe8d3 (Windows-31J)
    // 0x52d2 (UTF-16BE)
    if (argCheck == 'Ë”') {
        return true;
    }
    // No.6607
    // ê‡ñæ:e8d4
    // 0xe8d4 (Windows-31J)
    // 0x976b (UTF-16BE)
    if (argCheck == 'Ë‘') {
        return true;
    }
    // No.6608
    // ê‡ñæ:e8d5
    // 0xe8d5 (Windows-31J)
    // 0x9771 (UTF-16BE)
    if (argCheck == 'Ë’') {
        return true;
    }
    // No.6609
    // ê‡ñæ:e8d6
    // 0xe8d6 (Windows-31J)
    // 0x9779 (UTF-16BE)
    if (argCheck == 'Ë÷') {
        return true;
    }
    // No.6610
    // ê‡ñæ:e8d7
    // 0xe8d7 (Windows-31J)
    // 0x9785 (UTF-16BE)
    if (argCheck == 'Ë◊') {
        return true;
    }
    // No.6611
    // ê‡ñæ:e8d8
    // 0xe8d8 (Windows-31J)
    // 0x977c (UTF-16BE)
    if (argCheck == 'Ëÿ') {
        return true;
    }
    // No.6612
    // ê‡ñæ:e8d9
    // 0xe8d9 (Windows-31J)
    // 0x9781 (UTF-16BE)
    if (argCheck == 'ËŸ') {
        return true;
    }
    // No.6613
    // ê‡ñæ:e8da
    // 0xe8da (Windows-31J)
    // 0x977a (UTF-16BE)
    if (argCheck == 'Ë⁄') {
        return true;
    }
    // No.6614
    // ê‡ñæ:e8db
    // 0xe8db (Windows-31J)
    // 0x9786 (UTF-16BE)
    if (argCheck == 'Ë€') {
        return true;
    }
    // No.6615
    // ê‡ñæ:e8dc
    // 0xe8dc (Windows-31J)
    // 0x978b (UTF-16BE)
    if (argCheck == 'Ë‹') {
        return true;
    }
    // No.6616
    // ê‡ñæ:e8dd
    // 0xe8dd (Windows-31J)
    // 0x978f (UTF-16BE)
    if (argCheck == 'Ë›') {
        return true;
    }
    // No.6617
    // ê‡ñæ:e8de
    // 0xe8de (Windows-31J)
    // 0x9790 (UTF-16BE)
    if (argCheck == 'Ëﬁ') {
        return true;
    }
    // No.6618
    // ê‡ñæ:e8df
    // 0xe8df (Windows-31J)
    // 0x979c (UTF-16BE)
    if (argCheck == 'Ëﬂ') {
        return true;
    }
    // No.6619
    // ê‡ñæ:e8e0
    // 0xe8e0 (Windows-31J)
    // 0x97a8 (UTF-16BE)
    if (argCheck == 'Ë‡') {
        return true;
    }
    // No.6620
    // ê‡ñæ:e8e1
    // 0xe8e1 (Windows-31J)
    // 0x97a6 (UTF-16BE)
    if (argCheck == 'Ë·') {
        return true;
    }
    // No.6621
    // ê‡ñæ:e8e2
    // 0xe8e2 (Windows-31J)
    // 0x97a3 (UTF-16BE)
    if (argCheck == 'Ë‚') {
        return true;
    }
    // No.6622
    // ê‡ñæ:e8e3
    // 0xe8e3 (Windows-31J)
    // 0x97b3 (UTF-16BE)
    if (argCheck == 'Ë„') {
        return true;
    }
    // No.6623
    // ê‡ñæ:e8e4
    // 0xe8e4 (Windows-31J)
    // 0x97b4 (UTF-16BE)
    if (argCheck == 'Ë‰') {
        return true;
    }
    // No.6624
    // ê‡ñæ:e8e5
    // 0xe8e5 (Windows-31J)
    // 0x97c3 (UTF-16BE)
    if (argCheck == 'ËÂ') {
        return true;
    }
    // No.6625
    // ê‡ñæ:e8e6
    // 0xe8e6 (Windows-31J)
    // 0x97c6 (UTF-16BE)
    if (argCheck == 'ËÊ') {
        return true;
    }
    // No.6626
    // ê‡ñæ:e8e7
    // 0xe8e7 (Windows-31J)
    // 0x97c8 (UTF-16BE)
    if (argCheck == 'ËÁ') {
        return true;
    }
    // No.6627
    // ê‡ñæ:e8e8
    // 0xe8e8 (Windows-31J)
    // 0x97cb (UTF-16BE)
    if (argCheck == 'ËË') {
        return true;
    }
    // No.6628
    // ê‡ñæ:e8e9
    // 0xe8e9 (Windows-31J)
    // 0x97dc (UTF-16BE)
    if (argCheck == 'ËÈ') {
        return true;
    }
    // No.6629
    // ê‡ñæ:e8ea
    // 0xe8ea (Windows-31J)
    // 0x97ed (UTF-16BE)
    if (argCheck == 'ËÍ') {
        return true;
    }
    // No.6630
    // ê‡ñæ:e8eb
    // 0xe8eb (Windows-31J)
    // 0x9f4f (UTF-16BE)
    if (argCheck == 'ËÎ') {
        return true;
    }
    // No.6631
    // ê‡ñæ:e8ec
    // 0xe8ec (Windows-31J)
    // 0x97f2 (UTF-16BE)
    if (argCheck == 'ËÏ') {
        return true;
    }
    // No.6632
    // ê‡ñæ:e8ed
    // 0xe8ed (Windows-31J)
    // 0x7adf (UTF-16BE)
    if (argCheck == 'ËÌ') {
        return true;
    }
    // No.6633
    // ê‡ñæ:e8ee
    // 0xe8ee (Windows-31J)
    // 0x97f6 (UTF-16BE)
    if (argCheck == 'ËÓ') {
        return true;
    }
    // No.6634
    // ê‡ñæ:e8ef
    // 0xe8ef (Windows-31J)
    // 0x97f5 (UTF-16BE)
    if (argCheck == 'ËÔ') {
        return true;
    }
    // No.6635
    // ê‡ñæ:e8f0
    // 0xe8f0 (Windows-31J)
    // 0x980f (UTF-16BE)
    if (argCheck == 'Ë') {
        return true;
    }
    // No.6636
    // ê‡ñæ:e8f1
    // 0xe8f1 (Windows-31J)
    // 0x980c (UTF-16BE)
    if (argCheck == 'ËÒ') {
        return true;
    }
    // No.6637
    // ê‡ñæ:e8f2
    // 0xe8f2 (Windows-31J)
    // 0x9838 (UTF-16BE)
    if (argCheck == 'ËÚ') {
        return true;
    }
    // No.6638
    // ê‡ñæ:e8f3
    // 0xe8f3 (Windows-31J)
    // 0x9824 (UTF-16BE)
    if (argCheck == 'ËÛ') {
        return true;
    }
    // No.6639
    // ê‡ñæ:e8f4
    // 0xe8f4 (Windows-31J)
    // 0x9821 (UTF-16BE)
    if (argCheck == 'ËÙ') {
        return true;
    }
    // No.6640
    // ê‡ñæ:e8f5
    // 0xe8f5 (Windows-31J)
    // 0x9837 (UTF-16BE)
    if (argCheck == 'Ëı') {
        return true;
    }
    // No.6641
    // ê‡ñæ:e8f6
    // 0xe8f6 (Windows-31J)
    // 0x983d (UTF-16BE)
    if (argCheck == 'Ëˆ') {
        return true;
    }
    // No.6642
    // ê‡ñæ:e8f7
    // 0xe8f7 (Windows-31J)
    // 0x9846 (UTF-16BE)
    if (argCheck == 'Ë˜') {
        return true;
    }
    // No.6643
    // ê‡ñæ:e8f8
    // 0xe8f8 (Windows-31J)
    // 0x984f (UTF-16BE)
    if (argCheck == 'Ë¯') {
        return true;
    }
    // No.6644
    // ê‡ñæ:e8f9
    // 0xe8f9 (Windows-31J)
    // 0x984b (UTF-16BE)
    if (argCheck == 'Ë˘') {
        return true;
    }
    // No.6645
    // ê‡ñæ:e8fa
    // 0xe8fa (Windows-31J)
    // 0x986b (UTF-16BE)
    if (argCheck == 'Ë˙') {
        return true;
    }
    // No.6646
    // ê‡ñæ:e8fb
    // 0xe8fb (Windows-31J)
    // 0x986f (UTF-16BE)
    if (argCheck == 'Ë˚') {
        return true;
    }
    // No.6647
    // ê‡ñæ:e8fc
    // 0xe8fc (Windows-31J)
    // 0x9870 (UTF-16BE)
    if (argCheck == 'Ë¸') {
        return true;
    }
    // No.6648
    // ê‡ñæ:e940
    // 0xe940 (Windows-31J)
    // 0x9871 (UTF-16BE)
    if (argCheck == 'È@') {
        return true;
    }
    // No.6649
    // ê‡ñæ:e941
    // 0xe941 (Windows-31J)
    // 0x9874 (UTF-16BE)
    if (argCheck == 'ÈA') {
        return true;
    }
    // No.6650
    // ê‡ñæ:e942
    // 0xe942 (Windows-31J)
    // 0x9873 (UTF-16BE)
    if (argCheck == 'ÈB') {
        return true;
    }
    // No.6651
    // ê‡ñæ:e943
    // 0xe943 (Windows-31J)
    // 0x98aa (UTF-16BE)
    if (argCheck == 'ÈC') {
        return true;
    }
    // No.6652
    // ê‡ñæ:e944
    // 0xe944 (Windows-31J)
    // 0x98af (UTF-16BE)
    if (argCheck == 'ÈD') {
        return true;
    }
    // No.6653
    // ê‡ñæ:e945
    // 0xe945 (Windows-31J)
    // 0x98b1 (UTF-16BE)
    if (argCheck == 'ÈE') {
        return true;
    }
    // No.6654
    // ê‡ñæ:e946
    // 0xe946 (Windows-31J)
    // 0x98b6 (UTF-16BE)
    if (argCheck == 'ÈF') {
        return true;
    }
    // No.6655
    // ê‡ñæ:e947
    // 0xe947 (Windows-31J)
    // 0x98c4 (UTF-16BE)
    if (argCheck == 'ÈG') {
        return true;
    }
    // No.6656
    // ê‡ñæ:e948
    // 0xe948 (Windows-31J)
    // 0x98c3 (UTF-16BE)
    if (argCheck == 'ÈH') {
        return true;
    }
    // No.6657
    // ê‡ñæ:e949
    // 0xe949 (Windows-31J)
    // 0x98c6 (UTF-16BE)
    if (argCheck == 'ÈI') {
        return true;
    }
    // No.6658
    // ê‡ñæ:e94a
    // 0xe94a (Windows-31J)
    // 0x98e9 (UTF-16BE)
    if (argCheck == 'ÈJ') {
        return true;
    }
    // No.6659
    // ê‡ñæ:e94b
    // 0xe94b (Windows-31J)
    // 0x98eb (UTF-16BE)
    if (argCheck == 'ÈK') {
        return true;
    }
    // No.6660
    // ê‡ñæ:e94c
    // 0xe94c (Windows-31J)
    // 0x9903 (UTF-16BE)
    if (argCheck == 'ÈL') {
        return true;
    }
    // No.6661
    // ê‡ñæ:e94d
    // 0xe94d (Windows-31J)
    // 0x9909 (UTF-16BE)
    if (argCheck == 'ÈM') {
        return true;
    }
    // No.6662
    // ê‡ñæ:e94e
    // 0xe94e (Windows-31J)
    // 0x9912 (UTF-16BE)
    if (argCheck == 'ÈN') {
        return true;
    }
    // No.6663
    // ê‡ñæ:e94f
    // 0xe94f (Windows-31J)
    // 0x9914 (UTF-16BE)
    if (argCheck == 'ÈO') {
        return true;
    }
    // No.6664
    // ê‡ñæ:e950
    // 0xe950 (Windows-31J)
    // 0x9918 (UTF-16BE)
    if (argCheck == 'ÈP') {
        return true;
    }
    // No.6665
    // ê‡ñæ:e951
    // 0xe951 (Windows-31J)
    // 0x9921 (UTF-16BE)
    if (argCheck == 'ÈQ') {
        return true;
    }
    // No.6666
    // ê‡ñæ:e952
    // 0xe952 (Windows-31J)
    // 0x991d (UTF-16BE)
    if (argCheck == 'ÈR') {
        return true;
    }
    // No.6667
    // ê‡ñæ:e953
    // 0xe953 (Windows-31J)
    // 0x991e (UTF-16BE)
    if (argCheck == 'ÈS') {
        return true;
    }
    // No.6668
    // ê‡ñæ:e954
    // 0xe954 (Windows-31J)
    // 0x9924 (UTF-16BE)
    if (argCheck == 'ÈT') {
        return true;
    }
    // No.6669
    // ê‡ñæ:e955
    // 0xe955 (Windows-31J)
    // 0x9920 (UTF-16BE)
    if (argCheck == 'ÈU') {
        return true;
    }
    // No.6670
    // ê‡ñæ:e956
    // 0xe956 (Windows-31J)
    // 0x992c (UTF-16BE)
    if (argCheck == 'ÈV') {
        return true;
    }
    // No.6671
    // ê‡ñæ:e957
    // 0xe957 (Windows-31J)
    // 0x992e (UTF-16BE)
    if (argCheck == 'ÈW') {
        return true;
    }
    // No.6672
    // ê‡ñæ:e958
    // 0xe958 (Windows-31J)
    // 0x993d (UTF-16BE)
    if (argCheck == 'ÈX') {
        return true;
    }
    // No.6673
    // ê‡ñæ:e959
    // 0xe959 (Windows-31J)
    // 0x993e (UTF-16BE)
    if (argCheck == 'ÈY') {
        return true;
    }
    // No.6674
    // ê‡ñæ:e95a
    // 0xe95a (Windows-31J)
    // 0x9942 (UTF-16BE)
    if (argCheck == 'ÈZ') {
        return true;
    }
    // No.6675
    // ê‡ñæ:e95b
    // 0xe95b (Windows-31J)
    // 0x9949 (UTF-16BE)
    if (argCheck == 'È[') {
        return true;
    }
    // No.6676
    // ê‡ñæ:e95c
    // 0xe95c (Windows-31J)
    // 0x9945 (UTF-16BE)
    if (argCheck == 'È\') {
        return true;
    }
    // No.6677
    // ê‡ñæ:e95d
    // 0xe95d (Windows-31J)
    // 0x9950 (UTF-16BE)
    if (argCheck == 'È]') {
        return true;
    }
    // No.6678
    // ê‡ñæ:e95e
    // 0xe95e (Windows-31J)
    // 0x994b (UTF-16BE)
    if (argCheck == 'È^') {
        return true;
    }
    // No.6679
    // ê‡ñæ:e95f
    // 0xe95f (Windows-31J)
    // 0x9951 (UTF-16BE)
    if (argCheck == 'È_') {
        return true;
    }
    // No.6680
    // ê‡ñæ:e960
    // 0xe960 (Windows-31J)
    // 0x9952 (UTF-16BE)
    if (argCheck == 'È`') {
        return true;
    }
    // No.6681
    // ê‡ñæ:e961
    // 0xe961 (Windows-31J)
    // 0x994c (UTF-16BE)
    if (argCheck == 'Èa') {
        return true;
    }
    // No.6682
    // ê‡ñæ:e962
    // 0xe962 (Windows-31J)
    // 0x9955 (UTF-16BE)
    if (argCheck == 'Èb') {
        return true;
    }
    // No.6683
    // ê‡ñæ:e963
    // 0xe963 (Windows-31J)
    // 0x9997 (UTF-16BE)
    if (argCheck == 'Èc') {
        return true;
    }
    // No.6684
    // ê‡ñæ:e964
    // 0xe964 (Windows-31J)
    // 0x9998 (UTF-16BE)
    if (argCheck == 'Èd') {
        return true;
    }
    // No.6685
    // ê‡ñæ:e965
    // 0xe965 (Windows-31J)
    // 0x99a5 (UTF-16BE)
    if (argCheck == 'Èe') {
        return true;
    }
    // No.6686
    // ê‡ñæ:e966
    // 0xe966 (Windows-31J)
    // 0x99ad (UTF-16BE)
    if (argCheck == 'Èf') {
        return true;
    }
    // No.6687
    // ê‡ñæ:e967
    // 0xe967 (Windows-31J)
    // 0x99ae (UTF-16BE)
    if (argCheck == 'Èg') {
        return true;
    }
    // No.6688
    // ê‡ñæ:e968
    // 0xe968 (Windows-31J)
    // 0x99bc (UTF-16BE)
    if (argCheck == 'Èh') {
        return true;
    }
    // No.6689
    // ê‡ñæ:e969
    // 0xe969 (Windows-31J)
    // 0x99df (UTF-16BE)
    if (argCheck == 'Èi') {
        return true;
    }
    // No.6690
    // ê‡ñæ:e96a
    // 0xe96a (Windows-31J)
    // 0x99db (UTF-16BE)
    if (argCheck == 'Èj') {
        return true;
    }
    // No.6691
    // ê‡ñæ:e96b
    // 0xe96b (Windows-31J)
    // 0x99dd (UTF-16BE)
    if (argCheck == 'Èk') {
        return true;
    }
    // No.6692
    // ê‡ñæ:e96c
    // 0xe96c (Windows-31J)
    // 0x99d8 (UTF-16BE)
    if (argCheck == 'Èl') {
        return true;
    }
    // No.6693
    // ê‡ñæ:e96d
    // 0xe96d (Windows-31J)
    // 0x99d1 (UTF-16BE)
    if (argCheck == 'Èm') {
        return true;
    }
    // No.6694
    // ê‡ñæ:e96e
    // 0xe96e (Windows-31J)
    // 0x99ed (UTF-16BE)
    if (argCheck == 'Èn') {
        return true;
    }
    // No.6695
    // ê‡ñæ:e96f
    // 0xe96f (Windows-31J)
    // 0x99ee (UTF-16BE)
    if (argCheck == 'Èo') {
        return true;
    }
    // No.6696
    // ê‡ñæ:e970
    // 0xe970 (Windows-31J)
    // 0x99f1 (UTF-16BE)
    if (argCheck == 'Èp') {
        return true;
    }
    // No.6697
    // ê‡ñæ:e971
    // 0xe971 (Windows-31J)
    // 0x99f2 (UTF-16BE)
    if (argCheck == 'Èq') {
        return true;
    }
    // No.6698
    // ê‡ñæ:e972
    // 0xe972 (Windows-31J)
    // 0x99fb (UTF-16BE)
    if (argCheck == 'Èr') {
        return true;
    }
    // No.6699
    // ê‡ñæ:e973
    // 0xe973 (Windows-31J)
    // 0x99f8 (UTF-16BE)
    if (argCheck == 'Ès') {
        return true;
    }
    // No.6700
    // ê‡ñæ:e974
    // 0xe974 (Windows-31J)
    // 0x9a01 (UTF-16BE)
    if (argCheck == 'Èt') {
        return true;
    }
    // No.6701
    // ê‡ñæ:e975
    // 0xe975 (Windows-31J)
    // 0x9a0f (UTF-16BE)
    if (argCheck == 'Èu') {
        return true;
    }
    // No.6702
    // ê‡ñæ:e976
    // 0xe976 (Windows-31J)
    // 0x9a05 (UTF-16BE)
    if (argCheck == 'Èv') {
        return true;
    }
    // No.6703
    // ê‡ñæ:e977
    // 0xe977 (Windows-31J)
    // 0x99e2 (UTF-16BE)
    if (argCheck == 'Èw') {
        return true;
    }
    // No.6704
    // ê‡ñæ:e978
    // 0xe978 (Windows-31J)
    // 0x9a19 (UTF-16BE)
    if (argCheck == 'Èx') {
        return true;
    }
    // No.6705
    // ê‡ñæ:e979
    // 0xe979 (Windows-31J)
    // 0x9a2b (UTF-16BE)
    if (argCheck == 'Èy') {
        return true;
    }
    // No.6706
    // ê‡ñæ:e97a
    // 0xe97a (Windows-31J)
    // 0x9a37 (UTF-16BE)
    if (argCheck == 'Èz') {
        return true;
    }
    // No.6707
    // ê‡ñæ:e97b
    // 0xe97b (Windows-31J)
    // 0x9a45 (UTF-16BE)
    if (argCheck == 'È{') {
        return true;
    }
    // No.6708
    // ê‡ñæ:e97c
    // 0xe97c (Windows-31J)
    // 0x9a42 (UTF-16BE)
    if (argCheck == 'È|') {
        return true;
    }
    // No.6709
    // ê‡ñæ:e97d
    // 0xe97d (Windows-31J)
    // 0x9a40 (UTF-16BE)
    if (argCheck == 'È}') {
        return true;
    }
    // No.6710
    // ê‡ñæ:e97e
    // 0xe97e (Windows-31J)
    // 0x9a43 (UTF-16BE)
    if (argCheck == 'È~') {
        return true;
    }
    // No.6711
    // ê‡ñæ:e980
    // 0xe980 (Windows-31J)
    // 0x9a3e (UTF-16BE)
    if (argCheck == 'ÈÄ') {
        return true;
    }
    // No.6712
    // ê‡ñæ:e981
    // 0xe981 (Windows-31J)
    // 0x9a55 (UTF-16BE)
    if (argCheck == 'ÈÅ') {
        return true;
    }
    // No.6713
    // ê‡ñæ:e982
    // 0xe982 (Windows-31J)
    // 0x9a4d (UTF-16BE)
    if (argCheck == 'ÈÇ') {
        return true;
    }
    // No.6714
    // ê‡ñæ:e983
    // 0xe983 (Windows-31J)
    // 0x9a5b (UTF-16BE)
    if (argCheck == 'ÈÉ') {
        return true;
    }
    // No.6715
    // ê‡ñæ:e984
    // 0xe984 (Windows-31J)
    // 0x9a57 (UTF-16BE)
    if (argCheck == 'ÈÑ') {
        return true;
    }
    // No.6716
    // ê‡ñæ:e985
    // 0xe985 (Windows-31J)
    // 0x9a5f (UTF-16BE)
    if (argCheck == 'ÈÖ') {
        return true;
    }
    // No.6717
    // ê‡ñæ:e986
    // 0xe986 (Windows-31J)
    // 0x9a62 (UTF-16BE)
    if (argCheck == 'ÈÜ') {
        return true;
    }
    // No.6718
    // ê‡ñæ:e987
    // 0xe987 (Windows-31J)
    // 0x9a65 (UTF-16BE)
    if (argCheck == 'Èá') {
        return true;
    }
    // No.6719
    // ê‡ñæ:e988
    // 0xe988 (Windows-31J)
    // 0x9a64 (UTF-16BE)
    if (argCheck == 'Èà') {
        return true;
    }
    // No.6720
    // ê‡ñæ:e989
    // 0xe989 (Windows-31J)
    // 0x9a69 (UTF-16BE)
    if (argCheck == 'Èâ') {
        return true;
    }
    // No.6721
    // ê‡ñæ:e98a
    // 0xe98a (Windows-31J)
    // 0x9a6b (UTF-16BE)
    if (argCheck == 'Èä') {
        return true;
    }
    // No.6722
    // ê‡ñæ:e98b
    // 0xe98b (Windows-31J)
    // 0x9a6a (UTF-16BE)
    if (argCheck == 'Èã') {
        return true;
    }
    // No.6723
    // ê‡ñæ:e98c
    // 0xe98c (Windows-31J)
    // 0x9aad (UTF-16BE)
    if (argCheck == 'Èå') {
        return true;
    }
    // No.6724
    // ê‡ñæ:e98d
    // 0xe98d (Windows-31J)
    // 0x9ab0 (UTF-16BE)
    if (argCheck == 'Èç') {
        return true;
    }
    // No.6725
    // ê‡ñæ:e98e
    // 0xe98e (Windows-31J)
    // 0x9abc (UTF-16BE)
    if (argCheck == 'Èé') {
        return true;
    }
    // No.6726
    // ê‡ñæ:e98f
    // 0xe98f (Windows-31J)
    // 0x9ac0 (UTF-16BE)
    if (argCheck == 'Èè') {
        return true;
    }
    // No.6727
    // ê‡ñæ:e990
    // 0xe990 (Windows-31J)
    // 0x9acf (UTF-16BE)
    if (argCheck == 'Èê') {
        return true;
    }
    // No.6728
    // ê‡ñæ:e991
    // 0xe991 (Windows-31J)
    // 0x9ad1 (UTF-16BE)
    if (argCheck == 'Èë') {
        return true;
    }
    // No.6729
    // ê‡ñæ:e992
    // 0xe992 (Windows-31J)
    // 0x9ad3 (UTF-16BE)
    if (argCheck == 'Èí') {
        return true;
    }
    // No.6730
    // ê‡ñæ:e993
    // 0xe993 (Windows-31J)
    // 0x9ad4 (UTF-16BE)
    if (argCheck == 'Èì') {
        return true;
    }
    // No.6731
    // ê‡ñæ:e994
    // 0xe994 (Windows-31J)
    // 0x9ade (UTF-16BE)
    if (argCheck == 'Èî') {
        return true;
    }
    // No.6732
    // ê‡ñæ:e995
    // 0xe995 (Windows-31J)
    // 0x9adf (UTF-16BE)
    if (argCheck == 'Èï') {
        return true;
    }
    // No.6733
    // ê‡ñæ:e996
    // 0xe996 (Windows-31J)
    // 0x9ae2 (UTF-16BE)
    if (argCheck == 'Èñ') {
        return true;
    }
    // No.6734
    // ê‡ñæ:e997
    // 0xe997 (Windows-31J)
    // 0x9ae3 (UTF-16BE)
    if (argCheck == 'Èó') {
        return true;
    }
    // No.6735
    // ê‡ñæ:e998
    // 0xe998 (Windows-31J)
    // 0x9ae6 (UTF-16BE)
    if (argCheck == 'Èò') {
        return true;
    }
    // No.6736
    // ê‡ñæ:e999
    // 0xe999 (Windows-31J)
    // 0x9aef (UTF-16BE)
    if (argCheck == 'Èô') {
        return true;
    }
    // No.6737
    // ê‡ñæ:e99a
    // 0xe99a (Windows-31J)
    // 0x9aeb (UTF-16BE)
    if (argCheck == 'Èö') {
        return true;
    }
    // No.6738
    // ê‡ñæ:e99b
    // 0xe99b (Windows-31J)
    // 0x9aee (UTF-16BE)
    if (argCheck == 'Èõ') {
        return true;
    }
    // No.6739
    // ê‡ñæ:e99c
    // 0xe99c (Windows-31J)
    // 0x9af4 (UTF-16BE)
    if (argCheck == 'Èú') {
        return true;
    }
    // No.6740
    // ê‡ñæ:e99d
    // 0xe99d (Windows-31J)
    // 0x9af1 (UTF-16BE)
    if (argCheck == 'Èù') {
        return true;
    }
    // No.6741
    // ê‡ñæ:e99e
    // 0xe99e (Windows-31J)
    // 0x9af7 (UTF-16BE)
    if (argCheck == 'Èû') {
        return true;
    }
    // No.6742
    // ê‡ñæ:e99f
    // 0xe99f (Windows-31J)
    // 0x9afb (UTF-16BE)
    if (argCheck == 'Èü') {
        return true;
    }
    // No.6743
    // ê‡ñæ:e9a0
    // 0xe9a0 (Windows-31J)
    // 0x9b06 (UTF-16BE)
    if (argCheck == 'È†') {
        return true;
    }
    // No.6744
    // ê‡ñæ:e9a1
    // 0xe9a1 (Windows-31J)
    // 0x9b18 (UTF-16BE)
    if (argCheck == 'È°') {
        return true;
    }
    // No.6745
    // ê‡ñæ:e9a2
    // 0xe9a2 (Windows-31J)
    // 0x9b1a (UTF-16BE)
    if (argCheck == 'È¢') {
        return true;
    }
    // No.6746
    // ê‡ñæ:e9a3
    // 0xe9a3 (Windows-31J)
    // 0x9b1f (UTF-16BE)
    if (argCheck == 'È£') {
        return true;
    }
    // No.6747
    // ê‡ñæ:e9a4
    // 0xe9a4 (Windows-31J)
    // 0x9b22 (UTF-16BE)
    if (argCheck == 'È§') {
        return true;
    }
    // No.6748
    // ê‡ñæ:e9a5
    // 0xe9a5 (Windows-31J)
    // 0x9b23 (UTF-16BE)
    if (argCheck == 'È•') {
        return true;
    }
    // No.6749
    // ê‡ñæ:e9a6
    // 0xe9a6 (Windows-31J)
    // 0x9b25 (UTF-16BE)
    if (argCheck == 'È¶') {
        return true;
    }
    // No.6750
    // ê‡ñæ:e9a7
    // 0xe9a7 (Windows-31J)
    // 0x9b27 (UTF-16BE)
    if (argCheck == 'Èß') {
        return true;
    }
    // No.6751
    // ê‡ñæ:e9a8
    // 0xe9a8 (Windows-31J)
    // 0x9b28 (UTF-16BE)
    if (argCheck == 'È®') {
        return true;
    }
    // No.6752
    // ê‡ñæ:e9a9
    // 0xe9a9 (Windows-31J)
    // 0x9b29 (UTF-16BE)
    if (argCheck == 'È©') {
        return true;
    }
    // No.6753
    // ê‡ñæ:e9aa
    // 0xe9aa (Windows-31J)
    // 0x9b2a (UTF-16BE)
    if (argCheck == 'È™') {
        return true;
    }
    // No.6754
    // ê‡ñæ:e9ab
    // 0xe9ab (Windows-31J)
    // 0x9b2e (UTF-16BE)
    if (argCheck == 'È´') {
        return true;
    }
    // No.6755
    // ê‡ñæ:e9ac
    // 0xe9ac (Windows-31J)
    // 0x9b2f (UTF-16BE)
    if (argCheck == 'È¨') {
        return true;
    }
    // No.6756
    // ê‡ñæ:e9ad
    // 0xe9ad (Windows-31J)
    // 0x9b32 (UTF-16BE)
    if (argCheck == 'È≠') {
        return true;
    }
    // No.6757
    // ê‡ñæ:e9ae
    // 0xe9ae (Windows-31J)
    // 0x9b44 (UTF-16BE)
    if (argCheck == 'ÈÆ') {
        return true;
    }
    // No.6758
    // ê‡ñæ:e9af
    // 0xe9af (Windows-31J)
    // 0x9b43 (UTF-16BE)
    if (argCheck == 'ÈØ') {
        return true;
    }
    // No.6759
    // ê‡ñæ:e9b0
    // 0xe9b0 (Windows-31J)
    // 0x9b4f (UTF-16BE)
    if (argCheck == 'È∞') {
        return true;
    }
    // No.6760
    // ê‡ñæ:e9b1
    // 0xe9b1 (Windows-31J)
    // 0x9b4d (UTF-16BE)
    if (argCheck == 'È±') {
        return true;
    }
    // No.6761
    // ê‡ñæ:e9b2
    // 0xe9b2 (Windows-31J)
    // 0x9b4e (UTF-16BE)
    if (argCheck == 'È≤') {
        return true;
    }
    // No.6762
    // ê‡ñæ:e9b3
    // 0xe9b3 (Windows-31J)
    // 0x9b51 (UTF-16BE)
    if (argCheck == 'È≥') {
        return true;
    }
    // No.6763
    // ê‡ñæ:e9b4
    // 0xe9b4 (Windows-31J)
    // 0x9b58 (UTF-16BE)
    if (argCheck == 'È¥') {
        return true;
    }
    // No.6764
    // ê‡ñæ:e9b5
    // 0xe9b5 (Windows-31J)
    // 0x9b74 (UTF-16BE)
    if (argCheck == 'Èµ') {
        return true;
    }
    // No.6765
    // ê‡ñæ:e9b6
    // 0xe9b6 (Windows-31J)
    // 0x9b93 (UTF-16BE)
    if (argCheck == 'È∂') {
        return true;
    }
    // No.6766
    // ê‡ñæ:e9b7
    // 0xe9b7 (Windows-31J)
    // 0x9b83 (UTF-16BE)
    if (argCheck == 'È∑') {
        return true;
    }
    // No.6767
    // ê‡ñæ:e9b8
    // 0xe9b8 (Windows-31J)
    // 0x9b91 (UTF-16BE)
    if (argCheck == 'È∏') {
        return true;
    }
    // No.6768
    // ê‡ñæ:e9b9
    // 0xe9b9 (Windows-31J)
    // 0x9b96 (UTF-16BE)
    if (argCheck == 'Èπ') {
        return true;
    }
    // No.6769
    // ê‡ñæ:e9ba
    // 0xe9ba (Windows-31J)
    // 0x9b97 (UTF-16BE)
    if (argCheck == 'È∫') {
        return true;
    }
    // No.6770
    // ê‡ñæ:e9bb
    // 0xe9bb (Windows-31J)
    // 0x9b9f (UTF-16BE)
    if (argCheck == 'Èª') {
        return true;
    }
    // No.6771
    // ê‡ñæ:e9bc
    // 0xe9bc (Windows-31J)
    // 0x9ba0 (UTF-16BE)
    if (argCheck == 'Èº') {
        return true;
    }
    // No.6772
    // ê‡ñæ:e9bd
    // 0xe9bd (Windows-31J)
    // 0x9ba8 (UTF-16BE)
    if (argCheck == 'ÈΩ') {
        return true;
    }
    // No.6773
    // ê‡ñæ:e9be
    // 0xe9be (Windows-31J)
    // 0x9bb4 (UTF-16BE)
    if (argCheck == 'Èæ') {
        return true;
    }
    // No.6774
    // ê‡ñæ:e9bf
    // 0xe9bf (Windows-31J)
    // 0x9bc0 (UTF-16BE)
    if (argCheck == 'Èø') {
        return true;
    }
    // No.6775
    // ê‡ñæ:e9c0
    // 0xe9c0 (Windows-31J)
    // 0x9bca (UTF-16BE)
    if (argCheck == 'È¿') {
        return true;
    }
    // No.6776
    // ê‡ñæ:e9c1
    // 0xe9c1 (Windows-31J)
    // 0x9bb9 (UTF-16BE)
    if (argCheck == 'È¡') {
        return true;
    }
    // No.6777
    // ê‡ñæ:e9c2
    // 0xe9c2 (Windows-31J)
    // 0x9bc6 (UTF-16BE)
    if (argCheck == 'È¬') {
        return true;
    }
    // No.6778
    // ê‡ñæ:e9c3
    // 0xe9c3 (Windows-31J)
    // 0x9bcf (UTF-16BE)
    if (argCheck == 'È√') {
        return true;
    }
    // No.6779
    // ê‡ñæ:e9c4
    // 0xe9c4 (Windows-31J)
    // 0x9bd1 (UTF-16BE)
    if (argCheck == 'Èƒ') {
        return true;
    }
    // No.6780
    // ê‡ñæ:e9c5
    // 0xe9c5 (Windows-31J)
    // 0x9bd2 (UTF-16BE)
    if (argCheck == 'È≈') {
        return true;
    }
    // No.6781
    // ê‡ñæ:e9c6
    // 0xe9c6 (Windows-31J)
    // 0x9be3 (UTF-16BE)
    if (argCheck == 'È∆') {
        return true;
    }
    // No.6782
    // ê‡ñæ:e9c7
    // 0xe9c7 (Windows-31J)
    // 0x9be2 (UTF-16BE)
    if (argCheck == 'È«') {
        return true;
    }
    // No.6783
    // ê‡ñæ:e9c8
    // 0xe9c8 (Windows-31J)
    // 0x9be4 (UTF-16BE)
    if (argCheck == 'È»') {
        return true;
    }
    // No.6784
    // ê‡ñæ:e9c9
    // 0xe9c9 (Windows-31J)
    // 0x9bd4 (UTF-16BE)
    if (argCheck == 'È…') {
        return true;
    }
    // No.6785
    // ê‡ñæ:e9ca
    // 0xe9ca (Windows-31J)
    // 0x9be1 (UTF-16BE)
    if (argCheck == 'È ') {
        return true;
    }
    // No.6786
    // ê‡ñæ:e9cb
    // 0xe9cb (Windows-31J)
    // 0x9c3a (UTF-16BE)
    if (argCheck == 'ÈÀ') {
        return true;
    }
    // No.6787
    // ê‡ñæ:e9cc
    // 0xe9cc (Windows-31J)
    // 0x9bf2 (UTF-16BE)
    if (argCheck == 'ÈÃ') {
        return true;
    }
    // No.6788
    // ê‡ñæ:e9cd
    // 0xe9cd (Windows-31J)
    // 0x9bf1 (UTF-16BE)
    if (argCheck == 'ÈÕ') {
        return true;
    }
    // No.6789
    // ê‡ñæ:e9ce
    // 0xe9ce (Windows-31J)
    // 0x9bf0 (UTF-16BE)
    if (argCheck == 'ÈŒ') {
        return true;
    }
    // No.6790
    // ê‡ñæ:e9cf
    // 0xe9cf (Windows-31J)
    // 0x9c15 (UTF-16BE)
    if (argCheck == 'Èœ') {
        return true;
    }
    // No.6791
    // ê‡ñæ:e9d0
    // 0xe9d0 (Windows-31J)
    // 0x9c14 (UTF-16BE)
    if (argCheck == 'È–') {
        return true;
    }
    // No.6792
    // ê‡ñæ:e9d1
    // 0xe9d1 (Windows-31J)
    // 0x9c09 (UTF-16BE)
    if (argCheck == 'È—') {
        return true;
    }
    // No.6793
    // ê‡ñæ:e9d2
    // 0xe9d2 (Windows-31J)
    // 0x9c13 (UTF-16BE)
    if (argCheck == 'È“') {
        return true;
    }
    // No.6794
    // ê‡ñæ:e9d3
    // 0xe9d3 (Windows-31J)
    // 0x9c0c (UTF-16BE)
    if (argCheck == 'È”') {
        return true;
    }
    // No.6795
    // ê‡ñæ:e9d4
    // 0xe9d4 (Windows-31J)
    // 0x9c06 (UTF-16BE)
    if (argCheck == 'È‘') {
        return true;
    }
    // No.6796
    // ê‡ñæ:e9d5
    // 0xe9d5 (Windows-31J)
    // 0x9c08 (UTF-16BE)
    if (argCheck == 'È’') {
        return true;
    }
    // No.6797
    // ê‡ñæ:e9d6
    // 0xe9d6 (Windows-31J)
    // 0x9c12 (UTF-16BE)
    if (argCheck == 'È÷') {
        return true;
    }
    // No.6798
    // ê‡ñæ:e9d7
    // 0xe9d7 (Windows-31J)
    // 0x9c0a (UTF-16BE)
    if (argCheck == 'È◊') {
        return true;
    }
    // No.6799
    // ê‡ñæ:e9d8
    // 0xe9d8 (Windows-31J)
    // 0x9c04 (UTF-16BE)
    if (argCheck == 'Èÿ') {
        return true;
    }
    // No.6800
    // ê‡ñæ:e9d9
    // 0xe9d9 (Windows-31J)
    // 0x9c2e (UTF-16BE)
    if (argCheck == 'ÈŸ') {
        return true;
    }
    // No.6801
    // ê‡ñæ:e9da
    // 0xe9da (Windows-31J)
    // 0x9c1b (UTF-16BE)
    if (argCheck == 'È⁄') {
        return true;
    }
    // No.6802
    // ê‡ñæ:e9db
    // 0xe9db (Windows-31J)
    // 0x9c25 (UTF-16BE)
    if (argCheck == 'È€') {
        return true;
    }
    // No.6803
    // ê‡ñæ:e9dc
    // 0xe9dc (Windows-31J)
    // 0x9c24 (UTF-16BE)
    if (argCheck == 'È‹') {
        return true;
    }
    // No.6804
    // ê‡ñæ:e9dd
    // 0xe9dd (Windows-31J)
    // 0x9c21 (UTF-16BE)
    if (argCheck == 'È›') {
        return true;
    }
    // No.6805
    // ê‡ñæ:e9de
    // 0xe9de (Windows-31J)
    // 0x9c30 (UTF-16BE)
    if (argCheck == 'Èﬁ') {
        return true;
    }
    // No.6806
    // ê‡ñæ:e9df
    // 0xe9df (Windows-31J)
    // 0x9c47 (UTF-16BE)
    if (argCheck == 'Èﬂ') {
        return true;
    }
    // No.6807
    // ê‡ñæ:e9e0
    // 0xe9e0 (Windows-31J)
    // 0x9c32 (UTF-16BE)
    if (argCheck == 'È‡') {
        return true;
    }
    // No.6808
    // ê‡ñæ:e9e1
    // 0xe9e1 (Windows-31J)
    // 0x9c46 (UTF-16BE)
    if (argCheck == 'È·') {
        return true;
    }
    // No.6809
    // ê‡ñæ:e9e2
    // 0xe9e2 (Windows-31J)
    // 0x9c3e (UTF-16BE)
    if (argCheck == 'È‚') {
        return true;
    }
    // No.6810
    // ê‡ñæ:e9e3
    // 0xe9e3 (Windows-31J)
    // 0x9c5a (UTF-16BE)
    if (argCheck == 'È„') {
        return true;
    }
    // No.6811
    // ê‡ñæ:e9e4
    // 0xe9e4 (Windows-31J)
    // 0x9c60 (UTF-16BE)
    if (argCheck == 'È‰') {
        return true;
    }
    // No.6812
    // ê‡ñæ:e9e5
    // 0xe9e5 (Windows-31J)
    // 0x9c67 (UTF-16BE)
    if (argCheck == 'ÈÂ') {
        return true;
    }
    // No.6813
    // ê‡ñæ:e9e6
    // 0xe9e6 (Windows-31J)
    // 0x9c76 (UTF-16BE)
    if (argCheck == 'ÈÊ') {
        return true;
    }
    // No.6814
    // ê‡ñæ:e9e7
    // 0xe9e7 (Windows-31J)
    // 0x9c78 (UTF-16BE)
    if (argCheck == 'ÈÁ') {
        return true;
    }
    // No.6815
    // ê‡ñæ:e9e8
    // 0xe9e8 (Windows-31J)
    // 0x9ce7 (UTF-16BE)
    if (argCheck == 'ÈË') {
        return true;
    }
    // No.6816
    // ê‡ñæ:e9e9
    // 0xe9e9 (Windows-31J)
    // 0x9cec (UTF-16BE)
    if (argCheck == 'ÈÈ') {
        return true;
    }
    // No.6817
    // ê‡ñæ:e9ea
    // 0xe9ea (Windows-31J)
    // 0x9cf0 (UTF-16BE)
    if (argCheck == 'ÈÍ') {
        return true;
    }
    // No.6818
    // ê‡ñæ:e9eb
    // 0xe9eb (Windows-31J)
    // 0x9d09 (UTF-16BE)
    if (argCheck == 'ÈÎ') {
        return true;
    }
    // No.6819
    // ê‡ñæ:e9ec
    // 0xe9ec (Windows-31J)
    // 0x9d08 (UTF-16BE)
    if (argCheck == 'ÈÏ') {
        return true;
    }
    // No.6820
    // ê‡ñæ:e9ed
    // 0xe9ed (Windows-31J)
    // 0x9ceb (UTF-16BE)
    if (argCheck == 'ÈÌ') {
        return true;
    }
    // No.6821
    // ê‡ñæ:e9ee
    // 0xe9ee (Windows-31J)
    // 0x9d03 (UTF-16BE)
    if (argCheck == 'ÈÓ') {
        return true;
    }
    // No.6822
    // ê‡ñæ:e9ef
    // 0xe9ef (Windows-31J)
    // 0x9d06 (UTF-16BE)
    if (argCheck == 'ÈÔ') {
        return true;
    }
    // No.6823
    // ê‡ñæ:e9f0
    // 0xe9f0 (Windows-31J)
    // 0x9d2a (UTF-16BE)
    if (argCheck == 'È') {
        return true;
    }
    // No.6824
    // ê‡ñæ:e9f1
    // 0xe9f1 (Windows-31J)
    // 0x9d26 (UTF-16BE)
    if (argCheck == 'ÈÒ') {
        return true;
    }
    // No.6825
    // ê‡ñæ:e9f2
    // 0xe9f2 (Windows-31J)
    // 0x9daf (UTF-16BE)
    if (argCheck == 'ÈÚ') {
        return true;
    }
    // No.6826
    // ê‡ñæ:e9f3
    // 0xe9f3 (Windows-31J)
    // 0x9d23 (UTF-16BE)
    if (argCheck == 'ÈÛ') {
        return true;
    }
    // No.6827
    // ê‡ñæ:e9f4
    // 0xe9f4 (Windows-31J)
    // 0x9d1f (UTF-16BE)
    if (argCheck == 'ÈÙ') {
        return true;
    }
    // No.6828
    // ê‡ñæ:e9f5
    // 0xe9f5 (Windows-31J)
    // 0x9d44 (UTF-16BE)
    if (argCheck == 'Èı') {
        return true;
    }
    // No.6829
    // ê‡ñæ:e9f6
    // 0xe9f6 (Windows-31J)
    // 0x9d15 (UTF-16BE)
    if (argCheck == 'Èˆ') {
        return true;
    }
    // No.6830
    // ê‡ñæ:e9f7
    // 0xe9f7 (Windows-31J)
    // 0x9d12 (UTF-16BE)
    if (argCheck == 'È˜') {
        return true;
    }
    // No.6831
    // ê‡ñæ:e9f8
    // 0xe9f8 (Windows-31J)
    // 0x9d41 (UTF-16BE)
    if (argCheck == 'È¯') {
        return true;
    }
    // No.6832
    // ê‡ñæ:e9f9
    // 0xe9f9 (Windows-31J)
    // 0x9d3f (UTF-16BE)
    if (argCheck == 'È˘') {
        return true;
    }
    // No.6833
    // ê‡ñæ:e9fa
    // 0xe9fa (Windows-31J)
    // 0x9d3e (UTF-16BE)
    if (argCheck == 'È˙') {
        return true;
    }
    // No.6834
    // ê‡ñæ:e9fb
    // 0xe9fb (Windows-31J)
    // 0x9d46 (UTF-16BE)
    if (argCheck == 'È˚') {
        return true;
    }
    // No.6835
    // ê‡ñæ:e9fc
    // 0xe9fc (Windows-31J)
    // 0x9d48 (UTF-16BE)
    if (argCheck == 'È¸') {
        return true;
    }
    // No.6836
    // ê‡ñæ:ea40
    // 0xea40 (Windows-31J)
    // 0x9d5d (UTF-16BE)
    if (argCheck == 'Í@') {
        return true;
    }
    // No.6837
    // ê‡ñæ:ea41
    // 0xea41 (Windows-31J)
    // 0x9d5e (UTF-16BE)
    if (argCheck == 'ÍA') {
        return true;
    }
    // No.6838
    // ê‡ñæ:ea42
    // 0xea42 (Windows-31J)
    // 0x9d64 (UTF-16BE)
    if (argCheck == 'ÍB') {
        return true;
    }
    // No.6839
    // ê‡ñæ:ea43
    // 0xea43 (Windows-31J)
    // 0x9d51 (UTF-16BE)
    if (argCheck == 'ÍC') {
        return true;
    }
    // No.6840
    // ê‡ñæ:ea44
    // 0xea44 (Windows-31J)
    // 0x9d50 (UTF-16BE)
    if (argCheck == 'ÍD') {
        return true;
    }
    // No.6841
    // ê‡ñæ:ea45
    // 0xea45 (Windows-31J)
    // 0x9d59 (UTF-16BE)
    if (argCheck == 'ÍE') {
        return true;
    }
    // No.6842
    // ê‡ñæ:ea46
    // 0xea46 (Windows-31J)
    // 0x9d72 (UTF-16BE)
    if (argCheck == 'ÍF') {
        return true;
    }
    // No.6843
    // ê‡ñæ:ea47
    // 0xea47 (Windows-31J)
    // 0x9d89 (UTF-16BE)
    if (argCheck == 'ÍG') {
        return true;
    }
    // No.6844
    // ê‡ñæ:ea48
    // 0xea48 (Windows-31J)
    // 0x9d87 (UTF-16BE)
    if (argCheck == 'ÍH') {
        return true;
    }
    // No.6845
    // ê‡ñæ:ea49
    // 0xea49 (Windows-31J)
    // 0x9dab (UTF-16BE)
    if (argCheck == 'ÍI') {
        return true;
    }
    // No.6846
    // ê‡ñæ:ea4a
    // 0xea4a (Windows-31J)
    // 0x9d6f (UTF-16BE)
    if (argCheck == 'ÍJ') {
        return true;
    }
    // No.6847
    // ê‡ñæ:ea4b
    // 0xea4b (Windows-31J)
    // 0x9d7a (UTF-16BE)
    if (argCheck == 'ÍK') {
        return true;
    }
    // No.6848
    // ê‡ñæ:ea4c
    // 0xea4c (Windows-31J)
    // 0x9d9a (UTF-16BE)
    if (argCheck == 'ÍL') {
        return true;
    }
    // No.6849
    // ê‡ñæ:ea4d
    // 0xea4d (Windows-31J)
    // 0x9da4 (UTF-16BE)
    if (argCheck == 'ÍM') {
        return true;
    }
    // No.6850
    // ê‡ñæ:ea4e
    // 0xea4e (Windows-31J)
    // 0x9da9 (UTF-16BE)
    if (argCheck == 'ÍN') {
        return true;
    }
    // No.6851
    // ê‡ñæ:ea4f
    // 0xea4f (Windows-31J)
    // 0x9db2 (UTF-16BE)
    if (argCheck == 'ÍO') {
        return true;
    }
    // No.6852
    // ê‡ñæ:ea50
    // 0xea50 (Windows-31J)
    // 0x9dc4 (UTF-16BE)
    if (argCheck == 'ÍP') {
        return true;
    }
    // No.6853
    // ê‡ñæ:ea51
    // 0xea51 (Windows-31J)
    // 0x9dc1 (UTF-16BE)
    if (argCheck == 'ÍQ') {
        return true;
    }
    // No.6854
    // ê‡ñæ:ea52
    // 0xea52 (Windows-31J)
    // 0x9dbb (UTF-16BE)
    if (argCheck == 'ÍR') {
        return true;
    }
    // No.6855
    // ê‡ñæ:ea53
    // 0xea53 (Windows-31J)
    // 0x9db8 (UTF-16BE)
    if (argCheck == 'ÍS') {
        return true;
    }
    // No.6856
    // ê‡ñæ:ea54
    // 0xea54 (Windows-31J)
    // 0x9dba (UTF-16BE)
    if (argCheck == 'ÍT') {
        return true;
    }
    // No.6857
    // ê‡ñæ:ea55
    // 0xea55 (Windows-31J)
    // 0x9dc6 (UTF-16BE)
    if (argCheck == 'ÍU') {
        return true;
    }
    // No.6858
    // ê‡ñæ:ea56
    // 0xea56 (Windows-31J)
    // 0x9dcf (UTF-16BE)
    if (argCheck == 'ÍV') {
        return true;
    }
    // No.6859
    // ê‡ñæ:ea57
    // 0xea57 (Windows-31J)
    // 0x9dc2 (UTF-16BE)
    if (argCheck == 'ÍW') {
        return true;
    }
    // No.6860
    // ê‡ñæ:ea58
    // 0xea58 (Windows-31J)
    // 0x9dd9 (UTF-16BE)
    if (argCheck == 'ÍX') {
        return true;
    }
    // No.6861
    // ê‡ñæ:ea59
    // 0xea59 (Windows-31J)
    // 0x9dd3 (UTF-16BE)
    if (argCheck == 'ÍY') {
        return true;
    }
    // No.6862
    // ê‡ñæ:ea5a
    // 0xea5a (Windows-31J)
    // 0x9df8 (UTF-16BE)
    if (argCheck == 'ÍZ') {
        return true;
    }
    // No.6863
    // ê‡ñæ:ea5b
    // 0xea5b (Windows-31J)
    // 0x9de6 (UTF-16BE)
    if (argCheck == 'Í[') {
        return true;
    }
    // No.6864
    // ê‡ñæ:ea5c
    // 0xea5c (Windows-31J)
    // 0x9ded (UTF-16BE)
    if (argCheck == 'Í\') {
        return true;
    }
    // No.6865
    // ê‡ñæ:ea5d
    // 0xea5d (Windows-31J)
    // 0x9def (UTF-16BE)
    if (argCheck == 'Í]') {
        return true;
    }
    // No.6866
    // ê‡ñæ:ea5e
    // 0xea5e (Windows-31J)
    // 0x9dfd (UTF-16BE)
    if (argCheck == 'Í^') {
        return true;
    }
    // No.6867
    // ê‡ñæ:ea5f
    // 0xea5f (Windows-31J)
    // 0x9e1a (UTF-16BE)
    if (argCheck == 'Í_') {
        return true;
    }
    // No.6868
    // ê‡ñæ:ea60
    // 0xea60 (Windows-31J)
    // 0x9e1b (UTF-16BE)
    if (argCheck == 'Í`') {
        return true;
    }
    // No.6869
    // ê‡ñæ:ea61
    // 0xea61 (Windows-31J)
    // 0x9e1e (UTF-16BE)
    if (argCheck == 'Ía') {
        return true;
    }
    // No.6870
    // ê‡ñæ:ea62
    // 0xea62 (Windows-31J)
    // 0x9e75 (UTF-16BE)
    if (argCheck == 'Íb') {
        return true;
    }
    // No.6871
    // ê‡ñæ:ea63
    // 0xea63 (Windows-31J)
    // 0x9e79 (UTF-16BE)
    if (argCheck == 'Íc') {
        return true;
    }
    // No.6872
    // ê‡ñæ:ea64
    // 0xea64 (Windows-31J)
    // 0x9e7d (UTF-16BE)
    if (argCheck == 'Íd') {
        return true;
    }
    // No.6873
    // ê‡ñæ:ea65
    // 0xea65 (Windows-31J)
    // 0x9e81 (UTF-16BE)
    if (argCheck == 'Íe') {
        return true;
    }
    // No.6874
    // ê‡ñæ:ea66
    // 0xea66 (Windows-31J)
    // 0x9e88 (UTF-16BE)
    if (argCheck == 'Íf') {
        return true;
    }
    // No.6875
    // ê‡ñæ:ea67
    // 0xea67 (Windows-31J)
    // 0x9e8b (UTF-16BE)
    if (argCheck == 'Íg') {
        return true;
    }
    // No.6876
    // ê‡ñæ:ea68
    // 0xea68 (Windows-31J)
    // 0x9e8c (UTF-16BE)
    if (argCheck == 'Íh') {
        return true;
    }
    // No.6877
    // ê‡ñæ:ea69
    // 0xea69 (Windows-31J)
    // 0x9e92 (UTF-16BE)
    if (argCheck == 'Íi') {
        return true;
    }
    // No.6878
    // ê‡ñæ:ea6a
    // 0xea6a (Windows-31J)
    // 0x9e95 (UTF-16BE)
    if (argCheck == 'Íj') {
        return true;
    }
    // No.6879
    // ê‡ñæ:ea6b
    // 0xea6b (Windows-31J)
    // 0x9e91 (UTF-16BE)
    if (argCheck == 'Ík') {
        return true;
    }
    // No.6880
    // ê‡ñæ:ea6c
    // 0xea6c (Windows-31J)
    // 0x9e9d (UTF-16BE)
    if (argCheck == 'Íl') {
        return true;
    }
    // No.6881
    // ê‡ñæ:ea6d
    // 0xea6d (Windows-31J)
    // 0x9ea5 (UTF-16BE)
    if (argCheck == 'Ím') {
        return true;
    }
    // No.6882
    // ê‡ñæ:ea6e
    // 0xea6e (Windows-31J)
    // 0x9ea9 (UTF-16BE)
    if (argCheck == 'Ín') {
        return true;
    }
    // No.6883
    // ê‡ñæ:ea6f
    // 0xea6f (Windows-31J)
    // 0x9eb8 (UTF-16BE)
    if (argCheck == 'Ío') {
        return true;
    }
    // No.6884
    // ê‡ñæ:ea70
    // 0xea70 (Windows-31J)
    // 0x9eaa (UTF-16BE)
    if (argCheck == 'Íp') {
        return true;
    }
    // No.6885
    // ê‡ñæ:ea71
    // 0xea71 (Windows-31J)
    // 0x9ead (UTF-16BE)
    if (argCheck == 'Íq') {
        return true;
    }
    // No.6886
    // ê‡ñæ:ea72
    // 0xea72 (Windows-31J)
    // 0x9761 (UTF-16BE)
    if (argCheck == 'Ír') {
        return true;
    }
    // No.6887
    // ê‡ñæ:ea73
    // 0xea73 (Windows-31J)
    // 0x9ecc (UTF-16BE)
    if (argCheck == 'Ís') {
        return true;
    }
    // No.6888
    // ê‡ñæ:ea74
    // 0xea74 (Windows-31J)
    // 0x9ece (UTF-16BE)
    if (argCheck == 'Ít') {
        return true;
    }
    // No.6889
    // ê‡ñæ:ea75
    // 0xea75 (Windows-31J)
    // 0x9ecf (UTF-16BE)
    if (argCheck == 'Íu') {
        return true;
    }
    // No.6890
    // ê‡ñæ:ea76
    // 0xea76 (Windows-31J)
    // 0x9ed0 (UTF-16BE)
    if (argCheck == 'Ív') {
        return true;
    }
    // No.6891
    // ê‡ñæ:ea77
    // 0xea77 (Windows-31J)
    // 0x9ed4 (UTF-16BE)
    if (argCheck == 'Íw') {
        return true;
    }
    // No.6892
    // ê‡ñæ:ea78
    // 0xea78 (Windows-31J)
    // 0x9edc (UTF-16BE)
    if (argCheck == 'Íx') {
        return true;
    }
    // No.6893
    // ê‡ñæ:ea79
    // 0xea79 (Windows-31J)
    // 0x9ede (UTF-16BE)
    if (argCheck == 'Íy') {
        return true;
    }
    // No.6894
    // ê‡ñæ:ea7a
    // 0xea7a (Windows-31J)
    // 0x9edd (UTF-16BE)
    if (argCheck == 'Íz') {
        return true;
    }
    // No.6895
    // ê‡ñæ:ea7b
    // 0xea7b (Windows-31J)
    // 0x9ee0 (UTF-16BE)
    if (argCheck == 'Í{') {
        return true;
    }
    // No.6896
    // ê‡ñæ:ea7c
    // 0xea7c (Windows-31J)
    // 0x9ee5 (UTF-16BE)
    if (argCheck == 'Í|') {
        return true;
    }
    // No.6897
    // ê‡ñæ:ea7d
    // 0xea7d (Windows-31J)
    // 0x9ee8 (UTF-16BE)
    if (argCheck == 'Í}') {
        return true;
    }
    // No.6898
    // ê‡ñæ:ea7e
    // 0xea7e (Windows-31J)
    // 0x9eef (UTF-16BE)
    if (argCheck == 'Í~') {
        return true;
    }
    // No.6899
    // ê‡ñæ:ea80
    // 0xea80 (Windows-31J)
    // 0x9ef4 (UTF-16BE)
    if (argCheck == 'ÍÄ') {
        return true;
    }
    // No.6900
    // ê‡ñæ:ea81
    // 0xea81 (Windows-31J)
    // 0x9ef6 (UTF-16BE)
    if (argCheck == 'ÍÅ') {
        return true;
    }
    // No.6901
    // ê‡ñæ:ea82
    // 0xea82 (Windows-31J)
    // 0x9ef7 (UTF-16BE)
    if (argCheck == 'ÍÇ') {
        return true;
    }
    // No.6902
    // ê‡ñæ:ea83
    // 0xea83 (Windows-31J)
    // 0x9ef9 (UTF-16BE)
    if (argCheck == 'ÍÉ') {
        return true;
    }
    // No.6903
    // ê‡ñæ:ea84
    // 0xea84 (Windows-31J)
    // 0x9efb (UTF-16BE)
    if (argCheck == 'ÍÑ') {
        return true;
    }
    // No.6904
    // ê‡ñæ:ea85
    // 0xea85 (Windows-31J)
    // 0x9efc (UTF-16BE)
    if (argCheck == 'ÍÖ') {
        return true;
    }
    // No.6905
    // ê‡ñæ:ea86
    // 0xea86 (Windows-31J)
    // 0x9efd (UTF-16BE)
    if (argCheck == 'ÍÜ') {
        return true;
    }
    // No.6906
    // ê‡ñæ:ea87
    // 0xea87 (Windows-31J)
    // 0x9f07 (UTF-16BE)
    if (argCheck == 'Íá') {
        return true;
    }
    // No.6907
    // ê‡ñæ:ea88
    // 0xea88 (Windows-31J)
    // 0x9f08 (UTF-16BE)
    if (argCheck == 'Íà') {
        return true;
    }
    // No.6908
    // ê‡ñæ:ea89
    // 0xea89 (Windows-31J)
    // 0x76b7 (UTF-16BE)
    if (argCheck == 'Íâ') {
        return true;
    }
    // No.6909
    // ê‡ñæ:ea8a
    // 0xea8a (Windows-31J)
    // 0x9f15 (UTF-16BE)
    if (argCheck == 'Íä') {
        return true;
    }
    // No.6910
    // ê‡ñæ:ea8b
    // 0xea8b (Windows-31J)
    // 0x9f21 (UTF-16BE)
    if (argCheck == 'Íã') {
        return true;
    }
    // No.6911
    // ê‡ñæ:ea8c
    // 0xea8c (Windows-31J)
    // 0x9f2c (UTF-16BE)
    if (argCheck == 'Íå') {
        return true;
    }
    // No.6912
    // ê‡ñæ:ea8d
    // 0xea8d (Windows-31J)
    // 0x9f3e (UTF-16BE)
    if (argCheck == 'Íç') {
        return true;
    }
    // No.6913
    // ê‡ñæ:ea8e
    // 0xea8e (Windows-31J)
    // 0x9f4a (UTF-16BE)
    if (argCheck == 'Íé') {
        return true;
    }
    // No.6914
    // ê‡ñæ:ea8f
    // 0xea8f (Windows-31J)
    // 0x9f52 (UTF-16BE)
    if (argCheck == 'Íè') {
        return true;
    }
    // No.6915
    // ê‡ñæ:ea90
    // 0xea90 (Windows-31J)
    // 0x9f54 (UTF-16BE)
    if (argCheck == 'Íê') {
        return true;
    }
    // No.6916
    // ê‡ñæ:ea91
    // 0xea91 (Windows-31J)
    // 0x9f63 (UTF-16BE)
    if (argCheck == 'Íë') {
        return true;
    }
    // No.6917
    // ê‡ñæ:ea92
    // 0xea92 (Windows-31J)
    // 0x9f5f (UTF-16BE)
    if (argCheck == 'Íí') {
        return true;
    }
    // No.6918
    // ê‡ñæ:ea93
    // 0xea93 (Windows-31J)
    // 0x9f60 (UTF-16BE)
    if (argCheck == 'Íì') {
        return true;
    }
    // No.6919
    // ê‡ñæ:ea94
    // 0xea94 (Windows-31J)
    // 0x9f61 (UTF-16BE)
    if (argCheck == 'Íî') {
        return true;
    }
    // No.6920
    // ê‡ñæ:ea95
    // 0xea95 (Windows-31J)
    // 0x9f66 (UTF-16BE)
    if (argCheck == 'Íï') {
        return true;
    }
    // No.6921
    // ê‡ñæ:ea96
    // 0xea96 (Windows-31J)
    // 0x9f67 (UTF-16BE)
    if (argCheck == 'Íñ') {
        return true;
    }
    // No.6922
    // ê‡ñæ:ea97
    // 0xea97 (Windows-31J)
    // 0x9f6c (UTF-16BE)
    if (argCheck == 'Íó') {
        return true;
    }
    // No.6923
    // ê‡ñæ:ea98
    // 0xea98 (Windows-31J)
    // 0x9f6a (UTF-16BE)
    if (argCheck == 'Íò') {
        return true;
    }
    // No.6924
    // ê‡ñæ:ea99
    // 0xea99 (Windows-31J)
    // 0x9f77 (UTF-16BE)
    if (argCheck == 'Íô') {
        return true;
    }
    // No.6925
    // ê‡ñæ:ea9a
    // 0xea9a (Windows-31J)
    // 0x9f72 (UTF-16BE)
    if (argCheck == 'Íö') {
        return true;
    }
    // No.6926
    // ê‡ñæ:ea9b
    // 0xea9b (Windows-31J)
    // 0x9f76 (UTF-16BE)
    if (argCheck == 'Íõ') {
        return true;
    }
    // No.6927
    // ê‡ñæ:ea9c
    // 0xea9c (Windows-31J)
    // 0x9f95 (UTF-16BE)
    if (argCheck == 'Íú') {
        return true;
    }
    // No.6928
    // ê‡ñæ:ea9d
    // 0xea9d (Windows-31J)
    // 0x9f9c (UTF-16BE)
    if (argCheck == 'Íù') {
        return true;
    }
    // No.6929
    // ê‡ñæ:ea9e
    // 0xea9e (Windows-31J)
    // 0x9fa0 (UTF-16BE)
    if (argCheck == 'Íû') {
        return true;
    }
    // No.6930
    // ê‡ñæ:ea9f
    // 0xea9f (Windows-31J)
    // 0x582f (UTF-16BE)
    if (argCheck == 'Íü') {
        return true;
    }
    // No.6931
    // ê‡ñæ:eaa0
    // 0xeaa0 (Windows-31J)
    // 0x69c7 (UTF-16BE)
    if (argCheck == 'Í†') {
        return true;
    }
    // No.6932
    // ê‡ñæ:eaa1
    // 0xeaa1 (Windows-31J)
    // 0x9059 (UTF-16BE)
    if (argCheck == 'Í°') {
        return true;
    }
    // No.6933
    // ê‡ñæ:eaa2
    // 0xeaa2 (Windows-31J)
    // 0x7464 (UTF-16BE)
    if (argCheck == 'Í¢') {
        return true;
    }
    // No.6934
    // ê‡ñæ:eaa3
    // 0xeaa3 (Windows-31J)
    // 0x51dc (UTF-16BE)
    if (argCheck == 'Í£') {
        return true;
    }
    // No.6935
    // ê‡ñæ:eaa4
    // 0xeaa4 (Windows-31J)
    // 0x7199 (UTF-16BE)
    if (argCheck == 'Í§') {
        return true;
    }
    return false;
};

/**
 * ó^Ç¶ÇÁÇÍÇΩï∂éöóÒÇ™ÅAëSÇƒï∂éöÉOÉãÅ[ÉvÇ…ä‹Ç‹ÇÍÇÈï∂éöÇ≈Ç†ÇÈÇ©Ç«Ç§Ç©ÇîªíËÇµÇ‹Ç∑ÅB
 * @addon
 * @param {string} argCheck É`ÉFÉbÉNÇçsÇ¢ÇΩÇ¢ï∂éöóÒÅB
 * @return ëSÇƒÇÃï∂éöÇ™ï∂éöÉOÉãÅ[ÉvÇ…ä‹Ç‹ÇÍÇƒÇ¢ÇÍÇŒtureÅBÉOÉãÅ[ÉvÇ…ä‹Ç‹ÇÍÇ»Ç¢ï∂éöÇ™ä‹Ç‹ÇÍÇƒÇ¢ÇÍÇŒfalseÅB
 * @type boolean
 */
SampleShiftJISCharacterGroup.prototype.matchAll = function(/* string */ argCheck) {
    /* ÉpÉâÉÅÅ[É^ÇÃêîÅAå^É`ÉFÉbÉNÇçsÇ¢Ç‹Ç∑ÅB */
    if (arguments.length !== 1) {
        throw new Error("[ArgumentException]: SampleShiftJISCharacterGroup.matchAll ÇÃÉpÉâÉÅÅ[É^ÇÕ[1]å¬Ç≈Ç†ÇÈïKóvÇ™Ç†ÇËÇ‹Ç∑ÅBÇµÇ©Çµé¿ç€Ç…ÇÕ[" + arguments.length +  "]å¬ÇÃÉpÉâÉÅÅ[É^Çî∫Ç¡ÇƒåƒÇ—èoÇ≥ÇÍÇ‹ÇµÇΩÅB");
    }
    if (typeof(argCheck) != "string") {
        throw new Error("[ArgumentException]: SampleShiftJISCharacterGroup.matchAll ÇÃ1î‘ñ⁄ÇÃÉpÉâÉÅÅ[É^ÇÕ[string]å^Ç≈Ç»Ç≠ÇƒÇÕÇ»ÇËÇ‹ÇπÇÒÅBÇµÇ©Çµé¿ç€Ç…ÇÕ[" + typeof(argCheck) + "]å^Ç™ó^Ç¶ÇÁÇÍÇ‹ÇµÇΩÅB");
    }

    var arraySize = argCheck.length;
    for (index = 0; index < arraySize; index++) {
        if (this.match(argCheck.charAt(index)) === false) {
            return false;
        }
    }
    return true;
};

/**
 * ó^Ç¶ÇÁÇÍÇΩï∂éöóÒÇ™ÅAï∂éöÉOÉãÅ[ÉvÇ…ä‹Ç‹ÇÍÇÈï∂éöÇÇ–Ç∆Ç¬Ç≈Ç‡ä‹ÇÒÇ≈Ç¢ÇÈÇ©Ç«Ç§Ç©ÇîªíËÇµÇ‹Ç∑ÅB
 * @addon
 * @param {string} argCheck É`ÉFÉbÉNÇçsÇ¢ÇΩÇ¢ï∂éöóÒÅB
 * @return ï∂éöÉOÉãÅ[ÉvÇ…ä‹Ç‹ÇÍÇƒÇ¢ÇÈï∂éöÇÇ–Ç∆Ç¬Ç≈Ç‡ä‹ÇÒÇ≈Ç¢ÇÍÇŒtureÅBÉOÉãÅ[ÉvÇ…ä‹Ç‹ÇÍÇÈï∂éöÇÇ–Ç∆Ç¬Ç‡ä‹Ç‹Ç»Ç¢èÍçáÇÕfalseÅB
 * @type boolean
 */
SampleShiftJISCharacterGroup.prototype.matchAny = function(/* string */ argCheck) {
    /* ÉpÉâÉÅÅ[É^ÇÃêîÅAå^É`ÉFÉbÉNÇçsÇ¢Ç‹Ç∑ÅB */
    if (arguments.length !== 1) {
        throw new Error("[ArgumentException]: SampleShiftJISCharacterGroup.matchAny ÇÃÉpÉâÉÅÅ[É^ÇÕ[1]å¬Ç≈Ç†ÇÈïKóvÇ™Ç†ÇËÇ‹Ç∑ÅBÇµÇ©Çµé¿ç€Ç…ÇÕ[" + arguments.length +  "]å¬ÇÃÉpÉâÉÅÅ[É^Çî∫Ç¡ÇƒåƒÇ—èoÇ≥ÇÍÇ‹ÇµÇΩÅB");
    }
    if (typeof(argCheck) != "string") {
        throw new Error("[ArgumentException]: SampleShiftJISCharacterGroup.matchAny ÇÃ1î‘ñ⁄ÇÃÉpÉâÉÅÅ[É^ÇÕ[string]å^Ç≈Ç»Ç≠ÇƒÇÕÇ»ÇËÇ‹ÇπÇÒÅBÇµÇ©Çµé¿ç€Ç…ÇÕ[" + typeof(argCheck) + "]å^Ç™ó^Ç¶ÇÁÇÍÇ‹ÇµÇΩÅB");
    }

    var arraySize = argCheck.length;
    for (index = 0; index < arraySize; index++) {
        if (this.match(argCheck.charAt(index))) {
            return true;
        }
    }
    return false;
};
/* ÉNÉâÉX[SampleShiftJISCharacterGroup]êÈåæÇÃèIóπÅB */

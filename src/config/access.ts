export const ACCESS_STORAGE_KEYS = {
  archive: 'archive-access',
  drafts: 'drafts-access',
} as const;

/** SHA-256 of default draft password "lulu" */
export const DRAFT_PASSWORD_HASH =
  'd2435e88f3575be3ee762a3183629548165f9ed6a81a6ab13725967e3c72ef36';

/** 访问会话有效期（毫秒） */
export const ACCESS_SESSION_TTL_MS = 2 * 60 * 60 * 1000;

/** 密码错误不计时次数 */
export const PASSWORD_FREE_ATTEMPTS = 3;

/**
 * 第 4 次起每次错误对应的锁定时长（毫秒）。
 * 第 9 次及之后统一使用最后一档（10 分钟）。
 */
export const PASSWORD_LOCK_SCHEDULE_MS = [
  30 * 1000,
  60 * 1000,
  2 * 60 * 1000,
  3 * 60 * 1000,
  5 * 60 * 1000,
  10 * 60 * 1000,
] as const;

export function getPasswordLockDurationMs(failCount: number): number | null {
  if (failCount <= PASSWORD_FREE_ATTEMPTS) {
    return null;
  }

  const scheduleIndex = failCount - PASSWORD_FREE_ATTEMPTS - 1;
  const maxIndex = PASSWORD_LOCK_SCHEDULE_MS.length - 1;

  if (scheduleIndex >= maxIndex) {
    return PASSWORD_LOCK_SCHEDULE_MS[maxIndex];
  }

  return PASSWORD_LOCK_SCHEDULE_MS[scheduleIndex];
}

/** 密码错误时的水豚噜噜台词（共 20 条） */
export const PASSWORD_QUOTES = [
  {
    text: '哎呀……密码又错啦？噜噜正在温泉里泡着，你先冷静一下再试嘛～',
    retrySafe: true,
  },
  {
    text: '唔好急呀。水豚的记忆只有三秒，但密码不能一直试错喔。',
    retrySafe: true,
  },
  {
    text: '噜噜歪头：是不是多按了一个键？再仔细瞧瞧键盘嘛～',
    retrySafe: true,
  },
  {
    text: '翻工已经好辛苦，连草稿密码都要跟我对抗？噜噜理解你，但门还是不开喔。',
    retrySafe: true,
  },
  {
    text: '嘿嘿，草稿箱有门禁的嘛。你再撞门，我就要叫保安水豚来了（其实只有我一只）。',
    retrySafe: true,
  },
  {
    text: '密码不对哦～噜噜不生气，只是默默啃两口草，你再试一次。',
    retrySafe: true,
  },
  {
    text: '哇，好有毅力！可惜噜噜的脑容量今日已满，请换个密码思路。',
    retrySafe: true,
  },
  {
    text: '你敲门的力度很大，但密钥不对呀。深呼吸，想想看？',
    retrySafe: true,
  },
  {
    text: '错归错，态度还是可以的分。再想想那个小写密码？',
    retrySafe: true,
  },
  {
    text: '草稿箱里藏着宝藏，但钥匙得配对才行～噜噜在门后为你加油。',
    retrySafe: true,
  },
  {
    text: '噜噜温馨提示：暴力破解不可取，不如去饮杯奶茶，回来可能就记起来了（大概）。',
    retrySafe: true,
  },
  {
    text: '本水豚宣布：你需要稍微放空一下，这对我们双方的心理健康都有好处。',
    retrySafe: true,
  },
  {
    text: '噜噜歪头：密钥好像不太对喔，倒计时结束前慢慢想～',
    retrySafe: false,
  },
  {
    text: '翻工已经好辛苦，连草稿密码都要跟我对抗？先歇一歇，等倒计时结束啦。',
    retrySafe: false,
  },
  {
    text: '唔好急呀，错五次啦。水豚的记忆只有三秒，倒计时帮你想办法冷静。',
    retrySafe: false,
  },
  {
    text: '密码错第五次咯……噜噜不生气，噜噜去啃草了，倒计时结束再来。',
    retrySafe: false,
  },
  {
    text: '错五次？正常正常，连我都经常记唔清今日系星期几。倒计时结束再战！',
    retrySafe: false,
  },
  {
    text: '唔该晒，你嘅耐心值正在充值中……倒计时归零前，请先同噜噜一齐放空。',
    retrySafe: false,
  },
  {
    text: '本水豚进入「发呆冷却期」——这不是惩罚，是倒计时在保护我们。',
    retrySafe: false,
  },
  {
    text: '安全水豚报告：冷却程序已启动，请等倒计时走完再添新密码～',
    retrySafe: false,
  },
] as const;

/** 锁定时随机展示（全部 20 条） */
export const PASSWORD_LOCK_QUOTES = PASSWORD_QUOTES.map((quote) => quote.text);

/** 前 3 次错误随机展示（不含倒计时相关表述） */
export const PASSWORD_RETRY_QUOTES = PASSWORD_QUOTES.filter((quote) => quote.retrySafe).map(
  (quote) => quote.text,
);

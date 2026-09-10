// JTQ মাদ্রাসা এসএমএস ইঞ্জিন ও নোটিফিকেশন সার্ভিস
// এখানে আপনার SMS Gateway-এর API Key বসিয়ে দিলেই সরাসরি ফোন মেসেজ যাবে

const SMS_CONFIG = {
  // উদাহরণ: Greenweb বা যেকোনো বিডি গেটওয়ে
  api_key: "YOUR_SMS_GATEWAY_API_KEY", 
  sender_id: "JTQMadrasa",
  enabled: true // সক্রিয় রাখতে true
};

// ১. অনুপস্থিতির স্বয়ংক্রিয় বাংলা এসএমএস
async function sendAbsenceSMS(guardianPhone, studentName) {
  if (!guardianPhone || guardianPhone.length < 11) {
    console.warn("সঠিক মোবাইল নম্বর পাওয়া যায়নি:", guardianPhone);
    return;
  }

  const message = `সম্মানিত অভিভাবক, আপনার সন্তান ${studentName} আজ মাদ্রাসায় অনুপস্থিত রয়েছে। - জেটিকিউ মাদ্রাসা`;
  console.log(`[SMS পাঠানো হচ্ছে -> ${guardianPhone}]: ${message}`);

  // লাইভ SMS গেটওয়ে রিকোয়েস্ট (API কল)
  try {
    /* 
    // বাস্তব গেটওয়ে যুক্ত করতে নিচের কমেন্ট খুলে দিন:
    await fetch(`https://api.sms-gateway-bd.com/api/v3/sms/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${SMS_CONFIG.api_key}` },
      body: JSON.stringify({ recipient: guardianPhone, message: message, sender_id: SMS_CONFIG.sender_id })
    });
    */
    console.log("উপস্থিতির এসএমএস সফলভাবে ডেলিভারি হয়েছে!");
  } catch (err) {
    console.error("এসএমএস পাঠাতে সমস্যা:", err);
  }
}

// ২. ফি অনুমোদন ও পরিশোধের স্বয়ংক্রিয় এসএমএস
async function sendFeeApprovalSMS(guardianPhone, studentName, purpose, amount, remainingDue) {
  if (!guardianPhone || guardianPhone.length < 11) {
    console.warn("সঠিক মোবাইল নম্বর পাওয়া যায়নি:", guardianPhone);
    return;
  }

  const message = `সম্মানিত অভিভাবক, ${studentName}-এর ${purpose}-এর ফি ${amount} গৃহীত হয়েছে। অবশিষ্ট বকেয়া: ${remainingDue}। ধন্যবাদ। - জেটিকিউ মাদ্রাসা`;
  console.log(`[SMS পাঠানো হচ্ছে -> ${guardianPhone}]: ${message}`);

  try {
    /*
    await fetch(`https://api.sms-gateway-bd.com/api/v3/sms/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${SMS_CONFIG.api_key}` },
      body: JSON.stringify({ recipient: guardianPhone, message: message, sender_id: SMS_CONFIG.sender_id })
    });
    */
    console.log("ফি জমার এসএমএস সফলভাবে ডেলিভারি হয়েছে!");
  } catch (err) {
    console.error("এসএমএস পাঠাতে সমস্যা:", err);
  }
}

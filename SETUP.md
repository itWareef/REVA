# دليل تشغيل لوحة تحكم موقع مسكن ريفا

هذا المشروع = موقعك الحالي بالظبط + لوحة تحكم على `/admin` تعدّل منها كل المحتوى والصور بنفسك،
مع نشر تلقائي على استضافتك (cPanel) بعد كل تعديل.

اتبع الأجزاء بالترتيب. أي خطوة تتعثّر فيها، قل لي وأساعدك فوراً.

---

## الجزء أ — رفع المشروع على GitHub

افتح موجّه الأوامر (CMD) **داخل مجلد المشروع** (المجلد اللي فيه `package.json`) ونفّذ:

```
git init
git add .
git commit -m "موقع مسكن ريفا + لوحة تحكم"
git branch -M main
git remote add origin https://github.com/itWareef/REVA.git
git push -u origin main
```

بعدها حدّث الصفحة على GitHub — المفروض تلاقي كل ملفات المشروع اترفعت.

---

## الجزء ب — إنشاء حساب FTP للنشر (من cPanel)

1. ادخل **cPanel** الخاص بـ rivacont ← **FTP Accounts**.
2. أنشئ حساباً:
   - **Log In:** `deploy`
   - **Password:** اختر كلمة مرور قوية (**احفظها** — هتحتاجها في الجزء ج)
   - **Directory:** `public_html`
   - اضغط **Create FTP Account**.

اسم المستخدم الكامل سيكون: `deploy@rivacontractingsa.com`

---

## الجزء ج — إضافة الأسرار في GitHub (قبل النشر)

في صفحة الريبو على GitHub ← **Settings** ← **Secrets and variables** ← **Actions** ← **New repository secret**.
أضِف الثلاثة التالية (واحداً واحداً):

| الاسم (Name)    | القيمة (Secret)                        |
|-----------------|----------------------------------------|
| `FTP_SERVER`    | `s18905.fra1.stableserver.net`         |
| `FTP_USERNAME`  | `deploy@rivacontractingsa.com`         |
| `FTP_PASSWORD`  | كلمة مرور حساب الـ FTP (من الجزء ب)      |

> أنا لا أرى هذه القيم إطلاقاً — أنت من يكتبها هنا، وGitHub يخزّنها مشفّرة.

---

## الجزء د — أول نشر تلقائي

بمجرد رفع المشروع (الجزء أ) وإضافة الأسرار (الجزء ج)، يبدأ النشر تلقائياً.
افتح تبويب **Actions** في الريبو:
- علامة ✅ خضراء = الموقع اتبنى واترفع على استضافتك بنجاح.
- لو ظهر ❌ أحمر، افتحه وابعتلي صورة الخطأ وأصلحه معك.

(لو النشر اشتغل **قبل** ما تضيف الأسرار، ادخل Actions ← آخر تشغيل ← **Re-run all jobs**.)

---

## الجزء هـ — تفعيل تسجيل الدخول للوحة `/admin`

اللوحة تحتاج وسيط دخول آمن عبر GitHub. خطوات لمرة واحدة:

### ١) انشر الـ Worker على Cloudflare
1. ادخل **Cloudflare** ← **Workers & Pages** ← **Create** ← **Create Worker**.
2. سمِّه مثلاً `riva-cms-auth` ← **Deploy** ← ثم **Edit code**.
3. امسح الكود الموجود، والصق محتوى الملف **`setup/cloudflare-worker.js`** بالكامل ← **Deploy**.
4. انسخ رابط الـ Worker (شكله: `https://riva-cms-auth.اسمك.workers.dev`).

### ٢) أنشئ GitHub OAuth App
1. GitHub ← صورتك ← **Settings** ← **Developer settings** ← **OAuth Apps** ← **New OAuth App**.
2. املأ:
   - **Application name:** `Riva CMS`
   - **Homepage URL:** `https://rivacontractingsa.com`
   - **Authorization callback URL:** `https://riva-cms-auth.اسمك.workers.dev/callback`
3. **Register application** ← انسخ **Client ID** ← اضغط **Generate a new client secret** وانسخه.

### ٣) اربط المفاتيح بالـ Worker
1. في Cloudflare ← الـ Worker ← **Settings** ← **Variables and Secrets**.
2. أضِف:
   - `GITHUB_CLIENT_ID` = الـ Client ID
   - `GITHUB_CLIENT_SECRET` = الـ Client Secret (اجعله **Encrypt/Secret**)
3. **Deploy** لحفظ التغييرات.

### ٤) اربط اللوحة بالـ Worker
عدّل ملف **`public/admin/config.yml`** (من GitHub مباشرة أو محلياً ثم push):
غيّر السطر:
```
base_url: https://REPLACE-WITH-YOUR-WORKER-URL
```
إلى رابط الـ Worker:
```
base_url: https://riva-cms-auth.اسمك.workers.dev
```
احفظ (commit). النشر التلقائي هيحدّث الموقع.

---

## تم! كيف تعدّل الموقع

1. افتح **`https://rivacontractingsa.com/admin`**
2. **Login with GitHub** ← وافق.
3. عدّل: المشاريع، الأخبار، الخدمات، الصور، الإعدادات… واضغط **Save** ثم **Publish**.
4. خلال ~دقيقتين، التعديل يظهر على الموقع تلقائياً.

### تغيير صورة (مثال)
المشاريع ← افتح المشروع ← اضغط على حقل **الصورة** ← **Upload** ← اختر صورة من جهازك ← **Save** ← **Publish**.

### إضافة مشروع جديد
المشاريع ← **Add** ← املأ الحقول (عربي + إنجليزي) وارفع الصور ← **Save** ← **Publish**.
> المعرّف (slug) اكتبه بالإنجليزية بدون مسافات، مثل: `king-fahd-tower`.

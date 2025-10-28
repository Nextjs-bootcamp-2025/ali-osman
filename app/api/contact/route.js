// app/api/contact/route.js
export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return Response.json(
      { error: 'الرجاء إدخال جميع الحقول' },
      { status: 400 }
    );
  }

  // في الحالة الحقيقية نحفظ البيانات في قاعدة بيانات
  console.log('📩 رسالة جديدة:', body);

  return Response.json({
    success: true,
    message: 'تم استقبال البيانات بنجاح ✅',
    data: body,
  });
}

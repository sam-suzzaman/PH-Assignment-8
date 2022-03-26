const QuestionAndAnswers=[
    {
        id:1,
        question: "How React Works?",
        answer:` Real DOM ব্যবহার করে Website এর UI তে Information গুলো দেখানো হয়। একবার রেন্ডার করার পরে পরবর্তীতে কোন পরিবর্তন করলে সেই পরিবর্তনকে সাইটে efficient ভাবে দেখানোর জন্য React এ virtual DOM ব্যবহার করা হয়। এই virtual dom হলো real dom এর মতোই দেখতে যা memory তে সেভ থাকে। কোন পরিবর্তন হলে তখন একটা instant নতুন dom তৈরি হয় এবং virtual dom এর সাথে তুলনা করে দেখে কোথায় কোথায় পরিবর্তন হয়েছে। এরপর পরিবর্তনগুলো খুঁজে বের করে Real dom এর শুধুমাত্র ঐ জায়গাগুলোতেই পরিবর্তন করে। এতে করে সাইটের performance ও ভালো থাকে। 
        
        এখন কোথায় কোথায় পরিবর্তনগুলো হয়েছে তা খুঁজে বের করার জন্য react এ "Diff Algorithm" ব্যবহার করা হয়। 
        `
    },
    {
        id:2,
        question: "Props vs State",
        answer:`  1. Props শুধুমাত্র read-only. একে পরবর্তীতে কোন কম্পোনেন্টের ভিতর মডিফাই করা যায় না। কিন্তু state কে পরিবর্তন করা যায়। তবে state এর পরিবর্তন Asynchronous.

        2. State কে mutable হলেও Props কিন্তু immutable.
        `
    },
];

export default QuestionAndAnswers;
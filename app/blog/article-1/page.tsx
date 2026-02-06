import Image from "next/image";

export default function FirstArticle() {
  return (
    <div className="container mx-auto md:px-4 py-8 max-w-3xl">
      <div id="posts-container">
        <article className="overflow-hidden mb-8 fade-in">
          <div className="p-4 md:p-8">
            <div className="flex items-center mb-4">
              <span className="bg-textcolor text-bgcolor text-sm px-3 py-1 rounded-full">
                Dec 20, 2025
              </span>
              <span className="text-textcolor text-sm ml-3">• 5:30 PM</span>
            </div>

            <h2 className="text-3xl font-bold text-textcolor mb-6 serif">
              A Journey of Deconstruction: From Religious Dogma to Independent
              Thought
            </h2>
            <div className="relative w-full h-64 sm:h-96 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/images/deconstruction.jpg"
                alt="Journey from religious dogma to independent thought"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* 
            <img
              src="/images/deconstruction.jpg"
              alt="Journey from religious dogma to independent thought"
              className="w-full h-62 sm:h-92 rounded-xl mb-6 object-cover"
            /> */}
            <div className="post-content  text-textcolor  serif">
              <p className="mb-4 text-base md:text-lg leading-7.5">
                The journey from religious certainty to skepticism is often
                complex and deeply personal. It is shaped by one's upbringing,
                the boundaries imposed by doctrine, and, eventually, the courage
                to pursue independent inquiry. While early immersion in a
                religious system can provide a strong sense of identity,
                purpose, and community, the absence of space for critical
                questioning often becomes problematic. When individuals begin to
                encounter logical inconsistencies or unresolved theological
                tensions, faith—once unquestioned—can slowly give way to doubt.
              </p>
              <p className="mb-4 text-base md:text-lg leading-7.5">
                For many, this transition is not driven by rebellion or a desire
                to reject belief, but by a sincere attempt to understand it. The
                crisis emerges not from a lack of devotion, but from an excess
                of it—from reading more closely, thinking more deeply, and
                asking questions that previously had no place. It is within this
                tension between belief and reason that personal deconstruction
                often begins.
              </p>
              <p className="mb-4 text-base md:text-lg leading-7.5">
                I was born into a religious family—both my parents are
                Seventh-day Adventists (SDA). I have to admit, they raised me
                the best way they knew how. From an early age, I was taught the
                fundamental beliefs of the SDA church: I memorized Bible verses,
                progressed through clubs like Adventurer, Pathfinder, and
                Ambassador (which were essential for any Adventist kid), and,
                most importantly, I learned the sacred importance of the
                Sabbath.
              </p>

              <p className="mb-4 text-base md:text-lg leading-7.5">
                As a child, I never doubted any of it. I truly believed the SDA
                church was God's one true church and that its teachings were the
                only right way to live—just as everyone around me had impressed
                upon me. My faith rested entirely on the Bible as it was
                explained by my parents, church teachers, and Adventist elders.
                Whenever someone asked me about a verse, I'd confidently repeat
                what had been taught to me.
              </p>

              <p className="mb-4 text-base md:text-lg leading-7.5">
                Never once in my childhood or teenage years was I encouraged to
                think for myself or to question what I was told. No one even
                hinted that I should. Looking back, I believe that was a fatal
                mistake.
              </p>

              <p className="mb-4 text-base md:text-lg leading-7.5">
                This unquestioning faith remained solid through my childhood and
                early teens. However, things began to shift during my high
                school years—not through external pressure or rebellion, but
                through an unexpected consequence of my deepening devotion. I
                started reading the Bible on my own and meditating deeply. I had
                an intense desire to connect personally with "God." Every day I
                read Scriptures, memorized a verse, and meditated on it. I
                studied and memorized quotations from Ellen G. White's books. I
                did everything I thought would please "God"—praying in the
                middle of the night, reciting the words, "Ask and it shall be
                given you; seek and ye shall find; knock and the door will be
                opened." I claimed God's promises and begged to be filled with
                the Holy Spirit. Honestly, I was all in. I asked, I sought, I
                knocked.
              </p>

              <p className="mb-4 text-base md:text-lg leading-7.5">
                Because of my efforts to deepen my connection with "God," along
                with my active participation in discussions and church
                activities, I was appointed to various leadership positions. I
                can simply say I was a valuable member of the church.
              </p>

              <p className="mb-4 text-base md:text-lg leading-7.5">
                It was during this period that I began reading the Bible
                microscopically—word by word. For the first time, I started to
                reason independently. Questions began piling up in my
                mind—questions I'd never encountered before because I'd never
                read so carefully. Initially, this didn't alarm me. Since I'd
                always been taught that the Holy Spirit is our teacher, I
                believed He would clarify everything through prayer and
                community discussion. So I prayed earnestly for understanding.
              </p>

              <p className="mb-4 text-base md:text-lg leading-7.5">
                In SDA churches, every Saturday there's a one-hour session where
                Bible teachers meet to discuss the Bible through "The Bible
                Study Guide," and a 45-minute session where members discuss the
                Bible through "The Bible Study Guide." I decided to bring up the
                questions that troubled me while reading on my own in both
                sessions. I asked them openly, but more often than not, I
                received no satisfying answers.
              </p>
              <p className="mb-4 text-base md:text-lg leading-7.5">
                My motive was clear: I wanted to truly understand what I
                believed and what "God" had said through the Bible. Yet the
                responses I got were rarely helpful. Some would say, "What is
                revealed is for us, but what is hidden belongs to God." Others
                would assure me, "One day everything that troubles us will be
                made clear—in heaven, all our questions will be answered." In
                essence, they seemed to be telling me to just believe without
                understanding. But what is the point of believing if you don't
                even understand what you believe?
              </p>
              <p className="mb-4 text-base md:text-lg leading-7.5">
                Some tried to answer based on their personal opinions, but most
                of those explanations didn't make sense. During my time as an
                SDA member, I noticed that many Adventists hold their beliefs
                primarily because that is how they were raised. When explaining
                their faith, they tend to repeat the same phrases they were
                taught or the ones they heard from pastors, Bible teachers,
                elders, evangelists, or other respected church leaders.
              </p>
              <p className="mb-4 text-base md:text-lg leading-7.5">
                There is also a smaller group of earnest readers who dig deeply
                and search the Scriptures diligently. However, I came to believe
                that their search is built on the foundation of established SDA
                teachings. This is the group that usually steps forward to
                answer difficult questions, yet their knowledge seems limited to
                those pre-established doctrines. They always try to respond in a
                way that does not challenge or violate the church's core
                beliefs. In my view, most in this group remain "inside the
                box"—their minds are not truly free.
              </p>
              <p className="mb-4 text-base md:text-lg leading-7.5">
                After months of bringing these questions to Bible study sessions
                and receiving the same unsatisfying responses—"what is hidden
                belongs to God" or "we'll understand in heaven"—I realized I
                needed to try a different approach. I eventually gave up on
                getting answers from others and decided to pursue more formal
                study. I even attended the beginner-level classes on the
                fundamentals of SDA faith, even though I was considered well
                past that stage. I didn't mind, because my only goal was to
                understand and resolve my questions. Unfortunately, the teachers
                in those classes were quite shallow. They simply repeated what
                they had been taught or what was officially established. When
                questions arose, they rarely provided genuine answers; instead,
                they recited standard doctrines to defend the beliefs. In my
                honest opinion, they were among the worst Bible teachers I have
                ever encountered.
              </p>
              <p className="mb-4 text-base md:text-lg leading-7.5">
                When even the structured classes proved disappointing—offering
                the same recycled explanations I'd heard before—I reached a
                turning point. If the church's most knowledgeable teachers
                couldn't provide satisfactory answers, perhaps the problem
                wasn't my understanding but my approach. Finally, I decided to
                search on my own, this time with a crucial difference. I set
                aside all the established teachings that had been instilled in
                me and began reading the Bible with an open mind—not as an
                Adventist, but as someone genuinely seeking answers. Yet, as I
                continued reading and searching, things still didn't make sense.
                Many verses remained confusing, and the God portrayed in the
                Bible no longer made sense to me—He seemed to contradict
                Himself. Most of the established teachings no longer aligned
                with my own understanding of Scripture. Moreover, when I tried
                to apply these teachings to real life, they often proved
                impractical. Everyday logic and my personal experiences
                frequently contradicted what was written and what God claimed to
                be or to do.
              </p>
              <p className="mb-4 text-base md:text-lg leading-7.5">
                Most Adventists argue that the Bible does not contradict itself.
                However, this belief rests on a pre-established rule imposed
                before reading the Bible: "The Bible does not contradict itself,
                so if you see a contradiction, the problem is the reader, not
                the Bible." I often ask myself why such a rule must be implanted
                in a reader's mind before reading Scripture. This notion
                diminishes the reader's confidence in their own reasoning
                abilities. As a result, whenever something does not make sense
                or appears contradictory, the reader is conditioned to assume
                they are the problem.
              </p>
              <p className="mb-4 text-base md:text-lg leading-7.5">
                The more I read without doctrinal filters, the more apparent the
                contradictions became. It was during this period of genuine,
                unbiased inquiry that I finally understood what Isaac Asimov
                meant when he said "Properly read, the Bible is the most potent
                force for atheism ever conceived". This statement rang true for
                me. When I began reading the Bible properly—applying reason and
                logic—I concluded that the God portrayed does not exist. The God
                described is said to be all-powerful, all-knowing, loving, and
                aware of the end from the beginning. Yet He behaves in ways that
                contradict these attributes. He appears to act as though He does
                not know what will happen next and allows events to unfold as if
                He cannot prevent them. I believe that a careful and honest
                reading of the Bible reveals that the God portrayed within it
                does not exist.
              </p>
              <p className="mb-4 text-base md:text-lg leading-7.5">
                This was the beginning of my deconstruction.
              </p>
              <p className="mb-4 text-base md:text-lg leading-7.5">
                Holding these views in society is difficult, especially since
                the majority believe in the God of the Bible and are highly
                sensitive when discussing such matters. Some have said I have
                lost my mind—but who cares what they think or say? What brings
                me peace is knowing that I have learned to think for myself, to
                use my reasoning abilities, and to question. I am no longer
                someone who believes simply because of how I was raised or what
                I was taught. I have learned to question what I once believed.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

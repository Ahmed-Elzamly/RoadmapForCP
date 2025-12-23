// Topics Data for Competitive Programming Roadmap - Phase 1
const topicsData = [
    {
        id: "complexity-analysis",
        title: "Complexity Analysis",
        shortDescription: "Learn Big O notation and analyze algorithm efficiency",
        image: "assets/images/time-complexity.webp",
        cardImage: "assets/images/TimeComplexity.webp",
        duration: "3-4 days",
        icon: "📊",
        color: "#6366f1",
        banner: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",

        explanation: `
            <p>Complexity analysis is the foundation of competitive programming. It helps you understand how efficient your algorithms are and whether they will run within time limits.</p>
            <p>You'll learn to analyze:</p>
            <ul>
                <li><strong>Time Complexity:</strong> How runtime grows with input size</li>
                <li><strong>Space Complexity:</strong> How memory usage scales</li>
                <li><strong>Big O Notation:</strong> O(1), O(log n), O(n), O(n log n), O(n²), etc.</li>
            </ul>
            <p>Understanding complexity helps you choose the right algorithm for the problem constraints.</p>
        `,
        objectives: [
            "Understand Big O, Big Theta, and Big Omega notations",
            "Analyze time complexity of loops and recursive functions",
            "Calculate space complexity of algorithms",
            "Compare algorithm efficiencies",
            "Predict if a solution will pass within time limits"
        ],
        resources: {
            videos: [
                { title: "Asymptotic Complexity 1 (Arabic)", url: "https://www.youtube.com/watch?v=SmxZQpW_zA4", duration: "9m" },
                { title: "Asymptotic Complexity 2 (Arabic)", url: "https://www.youtube.com/watch?v=krRT_US9Ll0", duration: "10m" },

                { title: "Big O Notation - Full Course", url: "https://www.youtube.com/watch?v=Mo4vesaut8g", duration: "1h 56m" },
                { title: "Time Complexity Analysis", url: "https://www.youtube.com/watch?v=9TlHvipP5yA", duration: "9m" },
                { title: "Space Complexity Explained", url: "https://www.youtube.com/watch?v=yOb0BL-84h8", duration: "20m" }
            ],
            articles: [
                { title: "Big O Cheat Sheet", url: "https://www.bigocheatsheet.com/", source: "bigocheatsheet.com" },
                { title: "Complexity Analysis - CP Algorithms", url: "https://cp-algorithms.com/", source: "cp-algorithms.com" },
                { title: "Time Complexity Tutorial", url: "https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/", source: "GeeksforGeeks" }
            ],
            practice: [
                { title: "Time Complexity Problems", url: "https://vjudge.net/contest/561493", platform: "VJudge" },
                { title: "Complexity Analysis Problems", url: "https://codeforces.com/problemset?tags=implementation", platform: "Codeforces" },
                { title: "Basic Implementation", url: "https://www.hackerrank.com/domains/algorithms", platform: "HackerRank" }
            ]
        }
    },
    {
        id: "recursion",
        title: "Recursion",
        shortDescription: "Master recursive thinking and problem decomposition",
        cardImage: "assets/images/Recursion.webp",
        duration: "4-5 days",
        icon: "🔄",
        color: "#ec4899",
        banner: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
        codeAnimationFirst: `
// When you go to ChatGPT and ask it to write a prompt
// to give to Claude to fix the style...
// that's recursion. AI asking AI for help 🔁🤖

function askForHelp(problem) {
    if (problem == unsolved) {
        return askForHelp(problem);
    }
    return "AI helping AI!";
}
        `,
        codeAnimation: `
// To understand this function,
// first understand this function

function understand(recursion) {
  if (!understood) {
    return understand(recursion);
  }
  return "Still confused";
}
        `,
        codeAnimation2: `
void infiniteRecursion() {
    cout << "I will stop... I promise 😇"<< endl;
    infiniteRecursion();
}
string studyForExam(int days) {
    if (days == 0)
        return "Passed by miracle ✨";
    return studyForExam(days - 1);
}

        `,
        explanation: `
            <p>Recursion is a powerful technique where a function calls itself to solve smaller instances of the same problem.</p>
            <p>Key concepts include:</p>
            <ul>
                <li><strong>Base Case:</strong> The condition that stops recursion</li>
                <li><strong>Recursive Case:</strong> Breaking the problem into smaller subproblems</li>
                <li><strong>Call Stack:</strong> How recursive calls are managed in memory</li>
            </ul>
            <p>Recursion is essential for understanding advanced topics like dynamic programming and divide-and-conquer algorithms.</p>
        `,
        objectives: [
            "Understand how recursion works under the hood",
            "Identify base cases and recursive cases",
            "Convert iterative solutions to recursive ones",
            "Trace recursive function calls",
            "Solve classic recursive problems (factorial, Fibonacci, etc.)"
        ],
        resources: {
            videos: [
                { title: "Recursion in Programming", url: "https://www.youtube.com/watch?v=IJDJ0kBx2LM", duration: "1h" },
                { title: "5 Simple Steps for Solving Any Recursive Problem", url: "https://www.youtube.com/watch?v=ngCos392W4w", duration: "20m" },
                { title: "Recursion Playlist", url: "https://www.youtube.com/watch?v=kHi1DUhp9kM", duration: "2h" }
            ],
            articles: [
                { title: "Recursion Tutorial", url: "https://www.geeksforgeeks.org/recursion/", source: "GeeksforGeeks" },
                { title: "Understanding Recursion", url: "https://www.programiz.com/cpp-programming/recursion", source: "Programiz" },
                { title: "Recursive Functions", url: "https://www.hackerearth.com/practice/basic-programming/recursion/recursion-and-backtracking/tutorial/", source: "HackerEarth" }
            ],
            practice: [
                { title: "Recursion Problems", url: "https://codeforces.com/problemset?tags=recursion", platform: "Codeforces" },
                { title: "Recursion Practice", url: "https://leetcode.com/tag/recursion/", platform: "LeetCode" }
            ]
        }
    },
    {
        id: "stl",
        title: "STL (Standard Template Library)",
        shortDescription: "Master C++ containers, algorithms, and iterators",
        duration: "5-7 days",
        icon: "📚",
        color: "#14b8a6",
        cardImage: "assets/images/stl.webp",
        banner: "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)",
        explanation: `
            <p>The Standard Template Library (STL) is a powerful toolbox that provides ready-to-use data structures and algorithms.</p>
            <p>Essential components:</p>
            <ul>
                <li><strong>Containers:</strong> vector, set, map, queue, stack, priority_queue</li>
                <li><strong>Algorithms:</strong> sort, binary_search, lower_bound, upper_bound</li>
                <li><strong>Iterators:</strong> Ways to traverse containers</li>
            </ul>
            <p>Mastering STL significantly speeds up your competitive programming solutions.</p>
        `,
        objectives: [
            "Use vectors, sets, maps, and other containers efficiently",
            "Apply STL algorithms for sorting and searching",
            "Understand iterator types and their usage",
            "Choose the right container for each problem",
            "Use pairs, tuples, and custom comparators"
        ],
        resources: {
            videos: [
                { title: "Complete STL in C++", url: "https://www.youtube.com/watch?v=RRVYpIET_RU", duration: "2h" },
                { title: "STL for Competitive Programming", url: "https://www.youtube.com/watch?v=g-1Cn3ccwXY", duration: "1h 30m" },
                { title: "Maps and Sets", url: "https://www.youtube.com/watch?v=aEgG4pidcKU", duration: "45m" }
            ],
            articles: [
                { title: "C++ STL Tutorial", url: "https://www.geeksforgeeks.org/the-c-standard-template-library-stl/", source: "GeeksforGeeks" },
                { title: "STL Containers", url: "https://cplusplus.com/reference/stl/", source: "cplusplus.com" },
                { title: "Competitive Programmer's Handbook - STL", url: "https://cses.fi/book/book.pdf", source: "CSES" }
            ],
            practice: [
                { title: "STL Problems", url: "https://www.hackerrank.com/domains/cpp/stl", platform: "HackerRank" },
                { title: "Data Structure Problems", url: "https://codeforces.com/problemset?tags=data+structures", platform: "Codeforces" }
            ]
        }
    },
    {
        id: "greedy",
        title: "Greedy Algorithms",
        shortDescription: "Learn to make locally optimal choices for global solutions",
        duration: "5-6 days",
        icon: "🎯",
        color: "#f59e0b",
        cardImage: "assets/images/Greedy.webp",
        banner: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
        explanation: `
            <p>Greedy algorithms make the locally optimal choice at each step, hoping to find a global optimum.</p>
            <p>Key characteristics:</p>
            <ul>
                <li><strong>Greedy Choice Property:</strong> Local optimum leads to global optimum</li>
                <li><strong>Optimal Substructure:</strong> Optimal solution contains optimal solutions to subproblems</li>
                <li><strong>No Backtracking:</strong> Once a choice is made, it's never reconsidered</li>
            </ul>
            <p>Classic problems: Activity Selection, Fractional Knapsack, Huffman Coding.</p>
        `,
        objectives: [
            "Identify when greedy approach works",
            "Prove greedy choice is correct",
            "Solve interval scheduling problems",
            "Apply greedy to optimization problems",
            "Recognize when greedy fails and alternatives are needed"
        ],
        resources: {
            videos: [
                { title: "Greedy Algorithms Tutorial", url: "https://www.youtube.com/watch?v=bC7o8P_Ste4", duration: "1h" },
                { title: "Activity Selection Problem", url: "https://www.youtube.com/watch?v=poWB2UCuozA", duration: "30m" },
                { title: "Greedy Problems for CP", url: "https://www.youtube.com/watch?v=ARvQcqJ_-NY", duration: "1h 30m" }
            ],
            articles: [
                { title: "Greedy Algorithms", url: "https://www.geeksforgeeks.org/greedy-algorithms/", source: "GeeksforGeeks" },
                { title: "Greedy Tutorial", url: "https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/tutorial/", source: "HackerEarth" },
                { title: "When to Use Greedy", url: "https://cp-algorithms.com/", source: "CP-Algorithms" }
            ],
            practice: [
                { title: "Greedy Problems", url: "https://codeforces.com/problemset?tags=greedy", platform: "Codeforces" },
                { title: "Greedy Challenges", url: "https://leetcode.com/tag/greedy/", platform: "LeetCode" }
            ]
        }
    },
    {
        id: "prefix-sum-sliding-window",
        title: "Prefix Sum & Sliding Window",
        shortDescription: "Optimize range queries and subarray problems",
        cardImage: "assets/images/Prefix Sum.webp",
        duration: "4-5 days",
        icon: "📈",
        color: "#8b5cf6",
        banner: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)",
        explanation: `
            <p>These techniques optimize problems involving ranges and subarrays.</p>
            <p><strong>Prefix Sum:</strong></p>
            <ul>
                <li>Precompute cumulative sums for O(1) range queries</li>
                <li>2D prefix sums for matrix range queries</li>
            </ul>
            <p><strong>Sliding Window:</strong></p>
            <ul>
                <li>Fixed-size window problems</li>
                <li>Variable-size window with two pointers</li>
                <li>Optimal for contiguous subarray problems</li>
            </ul>
        `,
        objectives: [
            "Build and query 1D prefix sum arrays",
            "Implement 2D prefix sums for matrices",
            "Apply fixed-size sliding window technique",
            "Use variable-size sliding window",
            "Combine techniques for complex problems"
        ],
        resources: {
            videos: [
                { title: "Prefix Sum Array", url: "https://www.youtube.com/watch?v=7pJo_rM0z_s", duration: "25m" },
                { title: "Sliding Window Technique", url: "https://www.youtube.com/watch?v=MK-NZ4hN7rs", duration: "40m" },
                { title: "2D Prefix Sum", url: "https://www.youtube.com/watch?v=KE8MQuwE2yA", duration: "30m" }
            ],
            articles: [
                { title: "Prefix Sum Tutorial", url: "https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/", source: "GeeksforGeeks" },
                { title: "Sliding Window Guide", url: "https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/1175088/C++-Maximum-Sliding-Window-Cheatsheet-Template/", source: "LeetCode" },
                { title: "Range Query Techniques", url: "https://cp-algorithms.com/data_structures/sparse-table.html", source: "CP-Algorithms" }
            ],
            practice: [
                { title: "Prefix Sum Problems", url: "https://codeforces.com/problemset?tags=prefix+sums", platform: "Codeforces" },
                { title: "Sliding Window Problems", url: "https://leetcode.com/tag/sliding-window/", platform: "LeetCode" }
            ]
        }
    },
    {
        id: "binary-search",
        title: "Binary Search",
        shortDescription: "Divide and conquer to find elements in O(log n)",
        duration: "4-5 days",
        icon: "🔍",
        cardImage: "assets/images/Binary Search.webp",
        color: "#ef4444",
        banner: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
        image: "assets/images/Binary Search.webp",
        codeAnimation: `
#include <functional>

using namespace std;

int first_true(int lo, int hi, function<bool(int)> f) {
    hi++;
    while (lo < hi) {
        int mid = (lo + hi) / 2;
        if (f(mid)) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
}
        `,
        explanation: `
            <p>Binary search is a fundamental algorithm for searching in sorted data in O(log n) time.</p>
            <p>Applications include:</p>
            <ul>
                <li><strong>Classic Binary Search:</strong> Find element in sorted array</li>
                <li><strong>Lower/Upper Bound:</strong> Find insertion points</li>
                <li><strong>Binary Search on Answer:</strong> Optimize monotonic functions</li>
            </ul>
            <p>Binary search on answer is especially powerful for optimization problems.</p>
        `,
        objectives: [
            "Implement binary search correctly (avoid off-by-one errors)",
            "Use lower_bound and upper_bound",
            "Apply binary search on answer technique",
            "Solve problems with monotonic properties",
            "Handle edge cases in binary search"
        ],
        resources: {
            videos: [
                { title: "Binary Search Tutorial", url: "https://www.youtube.com/watch?v=GU7DpgHINWQ", duration: "45m" },
                { title: "Binary Search on Answer", url: "https://youtu.be/IZP_8-JZqhM?si=zQOH31pT5euHCXOR", duration: "7m" },
                { title: "Advanced Binary Search", url: "https://www.youtube.com/watch?v=v57lNF2mb_s", duration: "1h" }
            ],
            articles: [
                { title: "Binary Search", url: "https://www.geeksforgeeks.org/binary-search/", source: "GeeksforGeeks" },
                { title: "Binary Search Patterns", url: "https://leetcode.com/discuss/general-discussion/786126/python-powerful-ultimate-binary-search-template-solved-many-problems", source: "LeetCode" },
                { title: "Binary Search the Answer", url: "https://usaco.guide/silver/binary-search/", source: "USACO Guide" }
            ],
            practice: [
                { title: "Binary Search Problems", url: "https://codeforces.com/problemset?tags=binary+search", platform: "Codeforces" },
                { title: "Binary Search Practice", url: "https://leetcode.com/tag/binary-search/", platform: "LeetCode" }
            ]
        }
    },
    {
        id: "two-pointers",
        title: "Two Pointers",
        shortDescription: "Efficiently solve array problems with dual pointers",
        duration: "3-4 days",
        icon: "👆👆",
        color: "#22c55e",
        cardImage: "assets/images/TwoPointers.webp",
        banner: "linear-gradient(135deg, #22c55e 0%, #10b981 100%)",
        explanation: `
            <p>Two pointers technique uses two indices to traverse data structures efficiently.</p>
            <p>Common patterns:</p>
            <ul>
                <li><strong>Opposite Direction:</strong> Start from both ends (e.g., Two Sum in sorted array)</li>
                <li><strong>Same Direction:</strong> Fast and slow pointers (e.g., remove duplicates)</li>
                <li><strong>Sliding Window:</strong> Often combined with two pointers</li>
            </ul>
            <p>Reduces O(n²) brute force to O(n) in many problems.</p>
        `,
        objectives: [
            "Identify problems suitable for two pointers",
            "Implement opposite direction two pointers",
            "Use same direction (fast/slow) pointers",
            "Combine with sorting for optimization",
            "Solve three-sum and k-sum variants"
        ],
        resources: {
            videos: [
                { title: "Two Pointers Technique", url: "https://www.youtube.com/watch?v=On03HWe2tZM", duration: "35m" },
                { title: "Two Pointers Patterns", url: "https://youtu.be/QzZ7nmouLTI?si=0lNlVnUS6vpY5NZg", duration: "8m" },
                { title: "Common Two Pointer Problems", url: "https://www.youtube.com/watch?v=cRBSOz49fQk", duration: "40m" }
            ],
            articles: [
                { title: "Two Pointers Tutorial", url: "https://www.geeksforgeeks.org/two-pointers-technique/", source: "GeeksforGeeks" },
                { title: "Two Pointers Guide", url: "https://leetcode.com/articles/two-pointer-technique/", source: "LeetCode" },
                { title: "Common Patterns", url: "https://www.hackerearth.com/practice/algorithms/searching/linear-search/tutorial/", source: "HackerEarth" }
            ],
            practice: [
                { title: "Two Pointers Problems", url: "https://codeforces.com/problemset?tags=two+pointers", platform: "Codeforces" },
                { title: "Two Pointers Practice", url: "https://leetcode.com/tag/two-pointers/", platform: "LeetCode" }
            ]
        }
    },
    {
        id: "bitmasking",
        title: "Bitmasking",
        shortDescription: "Use binary operations for efficient subset manipulation",
        duration: "4-5 days",
        icon: "🔢",
        color: "#06b6d4",
        cardImage: "assets/images/BitMast.webp",
        banner: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
        explanation: `
            <p>Bitmasking uses binary representations to efficiently handle subsets and states.</p>
            <p>Key operations:</p>
            <ul>
                <li><strong>AND (&):</strong> Check if bit is set</li>
                <li><strong>OR (|):</strong> Set a bit</li>
                <li><strong>XOR (^):</strong> Toggle a bit</li>
                <li><strong>Shifts:</strong> Multiply/divide by 2</li>
            </ul>
            <p>Essential for DP with subsets, permissions, and compact state representation.</p>
        `,
        objectives: [
            "Master bitwise operations (AND, OR, XOR, NOT, shifts)",
            "Represent subsets as bitmasks",
            "Iterate over all subsets of a set",
            "Use bitmasks in dynamic programming",
            "Solve problems with state compression"
        ],
        resources: {
            videos: [
                { title: "Bit Manipulation Basics", url: "https://www.youtube.com/watch?v=7jkIUgLC29I", duration: "50m" },
                { title: "Bitmask DP", url: "https://www.youtube.com/watch?v=rlTkd4yOQpE", duration: "1h" },
                { title: "Bitwise Tricks", url: "https://www.youtube.com/watch?v=ZusiKXcz_ac", duration: "30m" }
            ],
            articles: [
                { title: "Bit Manipulation", url: "https://www.geeksforgeeks.org/bitwise-algorithms/", source: "GeeksforGeeks" },
                { title: "Bitmask Tutorial", url: "https://cp-algorithms.com/algebra/bit-manipulation.html", source: "CP-Algorithms" },
                { title: "Bitmask DP", url: "https://usaco.guide/gold/dp-bitmasks/", source: "USACO Guide" }
            ],
            practice: [
                { title: "Bitmask Problems", url: "https://codeforces.com/problemset?tags=bitmasks", platform: "Codeforces" },
                { title: "Bit Manipulation", url: "https://leetcode.com/tag/bit-manipulation/", platform: "LeetCode" }
            ]
        }
    },
    {
        id: "number-theory",
        title: "Number Theory",
        shortDescription: "Master mathematical concepts for competitive programming",
        duration: "6-7 days",
        icon: "🔢",
        color: "#f43f5e",
        cardImage: "assets/images/NumberTheory.webp",
        banner: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)",
        codeAnimationFirst: `
int gcd(int a, int b) {
    if (b == 0) {
        cout << "b got tired... GCD found 😴" << endl;
        return a;
    }
    cout << "Fighting: " << a << " vs " << b << endl;
    return gcd(b, a % b);
}
        `,
        explanation: `
            <p>Number theory covers mathematical properties of integers essential for CP.</p>
            <p>Key topics:</p>
            <ul>
                <li><strong>GCD/LCM:</strong> Euclidean algorithm</li>
                <li><strong>Prime Numbers:</strong> Sieve of Eratosthenes, primality testing</li>
                <li><strong>Modular Arithmetic:</strong> Operations under modulo</li>
                <li><strong>Fast Exponentiation:</strong> Computing a^b mod m efficiently</li>
            </ul>
            <p>Many CP problems have mathematical solutions.</p>
        `,
        objectives: [
            "Implement GCD and LCM efficiently",
            "Use Sieve of Eratosthenes for prime generation",
            "Apply modular arithmetic correctly",
            "Compute modular inverse",
            "Solve problems involving prime factorization"
        ],
        resources: {
            videos: [
                { title: "Number Theory for CP", url: "https://www.youtube.com/watch?v=1xNbjMdbjug", duration: "1h 30m" },
                { title: "Sieve of Eratosthenes", url: "https://www.youtube.com/watch?v=pKvGYOnO9Ao", duration: "20m" },
                { title: "Modular Arithmetic", url: "https://youtu.be/RCq5TYMZEwg?si=UDxz835kJAiIC8jc", duration: "15m" }
            ],
            articles: [
                { title: "Number Theory Basics", url: "https://cp-algorithms.com/algebra/", source: "CP-Algorithms" },
                { title: "Modular Arithmetic", url: "https://www.geeksforgeeks.org/modular-arithmetic/", source: "GeeksforGeeks" },
                { title: "Prime Numbers", url: "https://www.hackerearth.com/practice/math/number-theory/primality-tests/tutorial/", source: "HackerEarth" }
            ],
            practice: [
                { title: "Number Theory Problems", url: "https://codeforces.com/problemset?tags=number+theory", platform: "Codeforces" },
                { title: "Math Problems", url: "https://codeforces.com/problemset?tags=math", platform: "Codeforces" }
            ]
        }
    },
    {
        id: "combinatorics",
        title: "Combinatorics",
        shortDescription: "Count arrangements, permutations, and combinations",
        duration: "5-6 days",
        icon: "🎲",
        color: "#a855f7",
        cardImage: "assets/images/Combinatorics.webp",
        banner: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
        explanation: `
            <p>Combinatorics is the mathematics of counting and arranging objects.</p>
            <p>Key concepts:</p>
            <ul>
                <li><strong>Permutations:</strong> Ordered arrangements (nPr)</li>
                <li><strong>Combinations:</strong> Unordered selections (nCr)</li>
                <li><strong>Pascal's Triangle:</strong> Efficient binomial coefficient computation</li>
                <li><strong>Inclusion-Exclusion:</strong> Count by adding and subtracting</li>
            </ul>
            <p>Essential for counting problems in competitive programming.</p>
        `,
        objectives: [
            "Calculate permutations and combinations",
            "Build Pascal's triangle for binomial coefficients",
            "Apply inclusion-exclusion principle",
            "Use combinatorics with modular arithmetic",
            "Solve counting problems efficiently"
        ],
        resources: {
            videos: [
                { title: "Combinatorics Basics", url: "https://youtu.be/XJnIdRXUi7A?si=8vtzrXouPQCWxqR3", duration: "17m" },
                { title: "nCr Computation", url: "https://youtu.be/bR7mQgwQ_o8?si=5sFWqIkXP0llm676", duration: "27m" },
                { title: "Inclusion-Exclusion", url: "https://youtu.be/GS7dIWA6Hpo?si=xv2HCYHhfRjmuWuJ", duration: "18m" }
            ],
            articles: [
                { title: "Combinatorics Tutorial", url: "https://cp-algorithms.com/combinatorics/binomial-coefficients.html", source: "CP-Algorithms" },
                { title: "Permutation and Combination", url: "https://www.geeksforgeeks.org/permutation-and-combination/", source: "GeeksforGeeks" },
                { title: "Counting Techniques", url: "https://usaco.guide/gold/combo/", source: "USACO Guide" }
            ],
            practice: [
                { title: "Combinatorics Problems", url: "https://codeforces.com/problemset?tags=combinatorics", platform: "Codeforces" },
                { title: "Counting Problems", url: "https://atcoder.jp/contests/abc", platform: "AtCoder" }
            ]
        }
    },
    {
        id: "complete-search",
        title: "Complete Search",
        shortDescription: "Explore all possibilities with brute force and backtracking",
        duration: "4-5 days",
        icon: "🔎",
        color: "#64748b",
        cardImage: "assets/images/CompleteSearch.webp",
        banner: "linear-gradient(135deg, #64748b 0%, #475569 100%)",
        explanation: `
            <p>Complete search explores all possible solutions to find the answer.</p>
            <p>Techniques include:</p>
            <ul>
                <li><strong>Brute Force:</strong> Try all possibilities</li>
                <li><strong>Backtracking:</strong> Build solutions incrementally, abandon bad paths</li>
                <li><strong>Pruning:</strong> Cut off branches that can't lead to solutions</li>
            </ul>
            <p>Often the first approach to try, and sometimes the only one needed!</p>
        `,
        objectives: [
            "Generate all permutations and combinations",
            "Implement backtracking algorithms",
            "Apply pruning to reduce search space",
            "Solve N-Queens and similar problems",
            "Know when complete search is feasible"
        ],
        resources: {
            videos: [
                { title: "Backtracking Explained", url: "https://www.youtube.com/watch?v=gBC_Fd8EE8A", duration: "45m" },
                { title: "Complete Search Tutorial", url: "https://www.youtube.com/watch?v=DKCbsiDBN6c", duration: "1h" },
                { title: "Pruning Techniques", url: "https://www.youtube.com/watch?v=Zq4upTEaQyM", duration: "30m" }
            ],
            articles: [
                { title: "Backtracking Guide", url: "https://www.geeksforgeeks.org/backtracking-algorithms/", source: "GeeksforGeeks" },
                { title: "Complete Search", url: "https://usaco.guide/bronze/intro-complete/", source: "USACO Guide" },
                { title: "Brute Force Techniques", url: "https://cp-algorithms.com/", source: "CP-Algorithms" }
            ],
            practice: [
                { title: "Brute Force Problems", url: "https://codeforces.com/problemset?tags=brute+force", platform: "Codeforces" },
                { title: "Backtracking Problems", url: "https://leetcode.com/tag/backtracking/", platform: "LeetCode" }
            ]
        }
    }
];

// make it global
window.topicsData = topicsData;


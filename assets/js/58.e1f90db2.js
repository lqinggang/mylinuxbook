(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{454:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"中断和异常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中断和异常"}},[s._v("#")]),s._v(" 中断和异常")]),s._v(" "),t("p",[s._v("中断通常被定义为一个事件，该事件改变处理器执行的指令顺序, 中断由间隔定时器和 I/O 设备产生的, 异常是由程序的错误产生的, 或者由内核必须处理的异常条件产生的")]),s._v(" "),t("p",[s._v("中断分为同步中断和异步中断")]),s._v(" "),t("ol",[t("li",[s._v("同步中断(Inte微处理器称为异常)")])]),s._v(" "),t("p",[s._v("同步中断是当指令执行时, 由 CPU 控制单元产生的, 之所以称为同步是因为只有在一条指令终止执行后 CPU 才会发出中断")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("异步中断(Inte微处理器称为中断)")])]),s._v(" "),t("p",[s._v("由其他硬件设备依照 CPU 时钟信号随机产生的")]),s._v(" "),t("h2",{attrs:{id:"中断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中断"}},[s._v("#")]),s._v(" 中断")]),s._v(" "),t("h3",{attrs:{id:"irq-数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#irq-数据结构"}},[s._v("#")]),s._v(" IRQ 数据结构")]),s._v(" "),t("h4",{attrs:{id:"irq-描述符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#irq-描述符"}},[s._v("#")]),s._v(" IRQ 描述符")]),s._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("irq_desc")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("irq_common_data")]),s._v("  irq_common_data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("irq_data")]),s._v("     irq_data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" __percpu   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("kstat_irqs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("irq_flow_handler_t")]),s._v("  handle_irq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("irqaction")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("action"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* IRQ action list */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("        status_use_accessors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("        core_internal_state__do_not_mess_with_it"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("        depth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* nested irq disables */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("        wake_depth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* nested wake enables */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("        tot_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("        irq_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* For detecting broken IRQs */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v("       last_unhandled"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Aging timer for unhandled count */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("        irqs_unhandled"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_t")]),s._v("        threads_handled"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("         threads_handled_last"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("raw_spinlock_t")]),s._v("      lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("cpumask")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("percpu_enabled"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("cpumask")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("percpu_affinity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("ifdef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("CONFIG_SMP")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("cpumask")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("affinity_hint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("irq_affinity_notify")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("affinity_notify"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("ifdef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("CONFIG_GENERIC_PENDING_IRQ")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("cpumask_var_t")]),s._v("       pending_mask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v("       threads_oneshot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_t")]),s._v("        threads_active"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("wait_queue_head_t")]),s._v("       wait_for_threads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("ifdef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("CONFIG_PM_SLEEP")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("        nr_actions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("        no_suspend_depth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("        cond_suspend_depth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("        force_resume_depth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("ifdef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("CONFIG_PROC_FS")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("proc_dir_entry")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("ifdef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("CONFIG_GENERIC_IRQ_DEBUGFS")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("dentry")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("debugfs_file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("dev_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("ifdef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("CONFIG_SPARSE_IRQ")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("rcu_head")]),s._v("     rcu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("kobject")]),s._v("      kobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("mutex")]),s._v("        request_mutex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("         parent_irq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("module")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("owner"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("ifdef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("CONFIG_HARDIRQS_SW_RESEND")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("hlist_node")]),s._v("   resend_node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" ____cacheline_internodealigned_in_smp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h4",{attrs:{id:"irqaction-描述符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#irqaction-描述符"}},[s._v("#")]),s._v(" irqaction 描述符")]),s._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("irqaction")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("irq_handler_t")]),s._v("       handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("dev_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" __percpu       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("percpu_dev_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("irqaction")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("next"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("irq_handler_t")]),s._v("       thread_fn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("task_struct")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("irqaction")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("secondary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("        irq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("        flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v("       thread_flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v("       thread_mask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("proc_dir_entry")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" ____cacheline_internodealigned_in_smp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"中断描述符表及初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中断描述符表及初始化"}},[s._v("#")]),s._v(" 中断描述符表及初始化")]),s._v(" "),t("p",[s._v("中断描述符表(Interrupt Discription Table) 是一个系统表，它与每一个中断异常向量相关联,每个向量在表中有相应的中断或异常处理程序的入口地址")]),s._v(" "),t("p",[s._v("内核启用中断前, 必须通过 lidt 汇编指令把 IDT 表装到 idtr 寄存器， 并初始化并初始化表中的每一项, IDT 存放在 idt_table 表中, 有 256 个表项, 对应256 个中断号, 6 字节的idt_descr 变量指定了 IDT 的大小和它的地址")]),s._v(" "),t("h3",{attrs:{id:"中断处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中断处理"}},[s._v("#")]),s._v(" 中断处理")]),s._v(" "),t("h4",{attrs:{id:"i-o-中断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-o-中断"}},[s._v("#")]),s._v(" I/O 中断")]),s._v(" "),t("p",[s._v("I/O 中断处理程序必须足够灵活以给多个设备同时提供服务，这部分由如下两种不同的方式实现")]),s._v(" "),t("ol",[t("li",[s._v("IRQ(Interrupt ReQuest) 共享")])]),s._v(" "),t("p",[s._v("中断处理程序执行多个中断服务例程(interrupt service routine, ISR), 每个 ISR 是一个与单独设备(共享 ISR 线) 相关的函数，因为不可能预先知道哪个特定的设备产生 IRQ，因此 ISR 都被执行, 以验证它的设备是否需要关注(即产生的中断是不是要该 ISR 执行), 如果是，当设备产生中断时, 就执行需要执行的所有操作")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("IRQ 动态分派")])]),s._v(" "),t("p",[s._v("一条 IRQ 线在可能的最后时刻才与一个设备驱动程序相关联")]),s._v(" "),t("h4",{attrs:{id:"时钟中断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时钟中断"}},[s._v("#")]),s._v(" 时钟中断")]),s._v(" "),t("h4",{attrs:{id:"处理器间中断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#处理器间中断"}},[s._v("#")]),s._v(" 处理器间中断")]),s._v(" "),t("h3",{attrs:{id:"软中断和-tasklet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软中断和-tasklet"}},[s._v("#")]),s._v(" 软中断和 tasklet")]),s._v(" "),t("p",[s._v("软中断通常表示可延迟函数的所有种类, tasklet 是在软中断之上实现的, 软中断的分配是静态的(即编译时定义), tasklet 的分配和初始化可以在运行是进行，软中断可以并非地运行在多个 CPU 上, 因此，软中断是可重入函数而且必须明确地使用自旋锁保护其数据结构, 而同类型的 tasklet总是被串行的执行")]),s._v(" "),t("p",[s._v("中断上下文表示内核当前正在执行一个中断处理程序或一个可延迟函数, 中断上下文中不允许被阻塞或者进行进程切换")]),s._v(" "),t("h3",{attrs:{id:"工作队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作队列"}},[s._v("#")]),s._v(" 工作队列")]),s._v(" "),t("p",[s._v("可延迟函数运行在中断上下文中, 工作队列运行在进程上下文中")]),s._v(" "),t("h4",{attrs:{id:"workqueue-struct-描述符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workqueue-struct-描述符"}},[s._v("#")]),s._v(" workqueue_struct 描述符")]),s._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("workqueue_struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("list_head")]),s._v("    pwqs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* WR: all pwqs of this wq */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("list_head")]),s._v("    list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* PR: list of all workqueues */")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("mutex")]),s._v("        mutex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* protects this wq */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("         work_color"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* WQ: current work color */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("         flush_color"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* WQ: current flush color */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_t")]),s._v("        nr_pwqs_to_flush"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* flush in progress */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("wq_flusher")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("first_flusher"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* WQ: first flusher */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("list_head")]),s._v("    flusher_queue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* WQ: flush waiters */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("list_head")]),s._v("    flusher_overflow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* WQ: flush overflow list */")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("list_head")]),s._v("    maydays"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* MD: pwqs requesting rescue */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("worker")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("rescuer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* MD: rescue worker */")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("         nr_drainers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* WQ: drain in progress */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("         saved_max_active"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* WQ: saved pwq max_active */")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("workqueue_attrs")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("unbound_attrs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* PW: only for unbound wqs */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("pool_workqueue")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("dfl_pwq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* PW: only for unbound wqs */")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("ifdef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("CONFIG_SYSFS")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("wq_device")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("wq_dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* I: for sysfs interface */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("ifdef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("CONFIG_LOCKDEP")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("lock_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("lock_class_key")]),s._v("   key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("lockdep_map")]),s._v("  lockdep_map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v("            name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("WQ_NAME_LEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* I: workqueue name */")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n     * Destruction of workqueue_struct is RCU protected to allow walking\n     * the workqueues list without grabbing wq_pool_mutex.\n     * This is used to dump all workqueues from sysrq.\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("rcu_head")]),s._v("     rcu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* hot fields used during command issue, aligned to cacheline */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("        flags ____cacheline_aligned"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* WQ: WQ_* flags */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("pool_workqueue")]),s._v(" __percpu __rcu "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("cpu_pwq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* I: per-cpu pwqs */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h4",{attrs:{id:"工作队列操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作队列操作"}},[s._v("#")]),s._v(" 工作队列操作")]),s._v(" "),t("ol",[t("li",[s._v("创建工作队列")])]),s._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("workqueue_struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alloc_workqueue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" max_active"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("create_workqueue")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                      ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alloc_workqueue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%s"')]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" __WQ_LEGACY "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" WQ_MEM_RECLAIM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("销毁工作队列")])]),s._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("destroy_workqueue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("workqueue_struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("wq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
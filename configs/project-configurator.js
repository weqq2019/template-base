#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

class ProjectConfigurator {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        this.projectConfig = {};
        this.projectInfo = {};
    }

    // Pure Claude Code智能分析
    async selectPreset() {
        console.log('\n🤖 Pure Claude Code 项目智能生成器\n');
        console.log('🎯 100% AI驱动的项目创建体验');
        console.log('✨ 基于自然语言描述，智能生成项目结构和技术方案\n');
        
        // 直接进入Claude Code智能分析，无需选择
        return 'claude';
    }

    // 自定义配置已移除 - Pure AI驱动模式

    // Claude Code智能配置
    async claudeConfiguration() {
        console.log('\n🤖 Claude Code 智能配置生成:\n');
        console.log('请详细描述您的项目需求，我将为您生成合适的配置。\n');
        
        const description = await this.ask('项目描述 (详细描述功能、技术需求、规模等): ');
        
        console.log('\n🔍 正在深度分析您的需求...\n');
        
        // 使用基础分析功能
        const analysis = this.analyzeProjectRequirements(description);
        
        console.log(`💡 基于您的描述，推荐技术栈: ${analysis.recommendedStack}`);
        console.log(`🎯 匹配的技术栈: ${analysis.techStack}`);
        console.log(`👥 推荐团队规模: ${analysis.teamSize}`);
        console.log(`📝 项目描述: "${analysis.originalDescription}"`);
        
        console.log('\n🤖 Claude Code智能分析计划:');
        console.log('   • 项目创建后，将启动Claude Code会话');
        console.log('   • AI将基于您的描述进行深度项目分析');
        console.log('   • 智能生成项目特定的文档和开发指导');
        console.log('   • 提供个性化的学习路径和技术建议');
        
        console.log('\n🎯 将生成的智能内容:');
        console.log('   📋 项目特定的README.md和功能规划');
        console.log('   🗂️ 基于需求的项目结构设计');
        console.log('   📝 定制的TODO清单和开发计划');
        console.log('   🤖 AI协作提示和技术指导');

        this.projectConfig = {
            name: `${analysis.originalDescription} - 智能分析项目`,
            description: analysis.originalDescription,
            variables: {
                PROJECT_NAME: this.extractProjectName(analysis.originalDescription),
                PROJECT_DESCRIPTION: analysis.originalDescription,
                TECH_STACK: analysis.techStack,
                TECH_STACK_DETAIL: `基于${analysis.techStack}的智能化开发`,
                PROJECT_TYPE: '智能分析项目',
                TEAM_SIZE: analysis.teamSize,
                CREATION_DATE: new Date().toISOString().split('T')[0],
                PROJECT_STATUS: '等待Claude Code深度分析'
            },
            ai_analysis: analysis,
            intelligent_generation: true
        };
        
        const confirm = await this.ask('\n是否使用此智能配置? (y/N): ');
        if (!confirm.toLowerCase().startsWith('y')) {
            return this.selectPreset();
        }
    }

    // 生成基础英文项目名（由Claude Code会话智能优化）
    extractProjectName(description) {
        // 移除特殊字符，保留字母数字和空格
        const cleanDesc = description.replace(/[^\w\s\u4e00-\u9fa5]/g, '').trim();
        
        // 生成基础项目名（后续由Claude Code智能分析优化）
        const words = cleanDesc.split(/\s+/).slice(0, 3);  // 最多取3个词
        const basicName = words.join('-').toLowerCase();
        
        // 如果包含中文，生成通用英文名，让Claude Code后续分析
        const hasChinese = /[\u4e00-\u9fa5]/.test(description);
        if (hasChinese) {
            return 'claude-project';  // Claude Code会话中会智能重命名
        }
        
        return basicName || 'my-project';
    }

    // 项目需求基础分析（为Claude Code会话提供上下文）
    analyzeProjectRequirements(description) {
        const lowerDesc = description.toLowerCase();
        
        // 基础技术栈识别
        let techStack = 'Vue3';
        let recommendedStack = 'Vue3 前端应用';
        
        // 简单技术栈检测
        if (lowerDesc.includes('react')) {
            techStack = 'React18';
            recommendedStack = 'React现代化开发';
        } else if (lowerDesc.includes('python')) {
            techStack = 'Vue3 + Python';
            recommendedStack = 'Vue3 + Python 数据驱动';
        } else if (lowerDesc.includes('java')) {
            techStack = 'React + Java';
            recommendedStack = 'React + Java 企业级';
        } else if (lowerDesc.includes('node')) {
            techStack = 'Vue3 + Node.js';
            recommendedStack = 'Vue3 + Node.js 全栈';
        }
        
        // 团队规模检测
        let teamSize = '个人开发';
        if (lowerDesc.includes('团队')) {
            teamSize = '小团队协作';
        } else if (lowerDesc.includes('企业') || lowerDesc.includes('大型')) {
            teamSize = '企业级团队';
        }
        
        return {
            // 基础信息
            projectType: '智能分析中...',  // 将由Claude Code会话确定
            complexity: '分析中...',       // 将由Claude Code会话确定
            features: ['待Claude Code分析'], // 将由Claude Code会话确定
            recommendations: ['启动Claude Code会话进行深度分析'], 
            techStack,
            recommendedStack,
            teamSize,
            // 原始描述和关键词，供Claude Code分析
            originalDescription: description,
            keywords: lowerDesc.split(/\s+/).filter(word => word.length > 1),
            // 标记需要Claude Code智能分析
            needsClaudeAnalysis: true
        };
    }

    // 团队规模选择已移除 - 由AI智能分析项目规模

    // 收集项目基本信息
    async collectProjectInfo() {
        this.projectInfo = {
            PROJECT_NAME: this.projectConfig.variables?.PROJECT_NAME || 'MyProject',
            PROJECT_DESCRIPTION: this.projectConfig.variables?.PROJECT_DESCRIPTION || '项目描述',
            TECH_STACK: this.projectConfig.variables?.TECH_STACK || 'Vue3',
            TECH_STACK_DETAIL: this.projectConfig.variables?.TECH_STACK_DETAIL || 'Vue3 + Vite',
            PROJECT_TYPE: this.projectConfig.variables?.PROJECT_TYPE || 'Web应用',
            TEAM_SIZE: this.projectConfig.variables?.TEAM_SIZE || '个人项目',
            CREATION_DATE: this.projectConfig.variables?.CREATION_DATE || new Date().toISOString().split('T')[0],
            PROJECT_STATUS: this.projectConfig.variables?.PROJECT_STATUS || '开发中'
        };
    }

    // 显示配置摘要
    showConfigSummary() {
        console.log('\n📋 项目配置摘要:');
        console.log('================================');
        console.log(`项目名称: ${this.projectInfo.PROJECT_NAME}`);
        console.log(`项目描述: ${this.projectInfo.PROJECT_DESCRIPTION}`);
        console.log(`技术栈: ${this.projectInfo.TECH_STACK}`);
        console.log(`项目类型: ${this.projectInfo.PROJECT_TYPE}`);
        console.log(`团队规模: ${this.projectInfo.TEAM_SIZE}`);
        console.log(`创建时间: ${this.projectInfo.CREATION_DATE}`);
        console.log('================================');
    }

    // 生成配置文件
    generateConfigFile() {
        const configFile = {
            timestamp: new Date().toISOString(),
            project_name: this.projectInfo.PROJECT_NAME,
            project_info: this.projectInfo,
            project_config: this.projectConfig,
            shell_variables: this.generateShellVariables()
        };

        const outputPath = path.join(process.cwd(), 'project-config.json');
        fs.writeFileSync(outputPath, JSON.stringify(configFile, null, 2));
        
        console.log(`✅ 配置文件已生成: ${outputPath}`);
        return outputPath;
    }

    // 生成 shell 脚本变量
    generateShellVariables() {
        const vars = {};
        Object.keys(this.projectInfo).forEach(key => {
            vars[key] = this.projectInfo[key].replace(/"/g, '\\"');
        });
        return vars;
    }

    // 显示使用说明
    showUsageInstructions() {
        console.log('\n🎯 下一步操作:');
        console.log('1. 使用生成的配置文件初始化项目');
        console.log('2. 运行 ./init-project.sh 开始项目创建');
        
        if (this.projectConfig.intelligent_generation) {
            console.log('\n🤖 Claude Code智能分析:');
            console.log('项目创建后，将生成 .claude_analysis_request.md 文件');
            console.log('请在Claude Code会话中查看该文件，进行深度项目分析');
        }
        
        console.log('\n💡 推荐流程:');
        console.log('1. ./init-project.sh  # 初始化项目');
        console.log('2. 启动Claude Code会话');
        console.log('3. 查看 .claude_analysis_request.md');
        console.log('4. 让AI生成项目特定的文档和开发指导');
    }

    // 询问用户输入
    ask(question) {
        return new Promise(resolve => {
            this.rl.question(question, resolve);
        });
    }

    // Pure AI驱动的主执行流程
    async run() {
        try {
            console.log('🚀 启动Pure AI项目生成器...\n');
            
            // 直接进入Claude Code智能分析
            await this.selectPreset();
            await this.claudeConfiguration();
            
            await this.collectProjectInfo();
            this.showConfigSummary();
            
            const confirm = await this.ask('\n🤖 开始AI驱动的项目创建? (y/N): ');
            if (confirm.toLowerCase().startsWith('y')) {
                this.generateConfigFile();
                this.showUsageInstructions();
                
                // 自动调用简化的初始化脚本
                const { spawn } = require('child_process');
                const initScript = spawn('./init-project-simple.sh', [], { stdio: 'inherit' });
                
                initScript.on('close', (code) => {
                    console.log(`\n🎉 AI驱动的项目生成完成! (退出码: ${code})`);
                    if (code === 0) {
                        console.log('\n🤖 下一步: 启动Claude Code会话，查看 .claude_analysis_request.md 进行深度AI分析');
                    }
                });
            } else {
                console.log('❌ 取消AI项目创建');
            }
            
        } catch (error) {
            console.error('❌ AI配置过程出错:', error.message);
        } finally {
            this.rl.close();
        }
    }
}

// 如果直接运行此文件，则启动配置器
if (require.main === module) {
    const configurator = new ProjectConfigurator();
    configurator.run();
}

module.exports = ProjectConfigurator;
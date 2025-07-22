#!/bin/bash

# 🚀 Claude Code智能项目创建脚本（简化版）
set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# 打印函数
print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# 读取配置文件
load_config() {
    if [ ! -f "project-config.json" ]; then
        print_error "配置文件 project-config.json 不存在"
        exit 1
    fi
    
    # 使用jq或简单的grep来读取配置
    if command -v jq >/dev/null 2>&1; then
        PROJECT_NAME=$(jq -r '.project_info.PROJECT_NAME' project-config.json)
        PROJECT_DESCRIPTION=$(jq -r '.project_info.PROJECT_DESCRIPTION' project-config.json)
        TECH_STACK=$(jq -r '.project_info.TECH_STACK' project-config.json)
        TEAM_SIZE=$(jq -r '.project_info.TEAM_SIZE' project-config.json)
        CREATION_DATE=$(jq -r '.project_info.CREATION_DATE' project-config.json)
    else
        # 备用方案：使用grep
        PROJECT_NAME=$(grep -o '"PROJECT_NAME": *"[^"]*"' project-config.json | head -1 | sed 's/.*: *"\([^"]*\)".*/\1/')
        PROJECT_DESCRIPTION=$(grep -o '"PROJECT_DESCRIPTION": *"[^"]*"' project-config.json | head -1 | sed 's/.*: *"\([^"]*\)".*/\1/')
        TECH_STACK=$(grep -o '"TECH_STACK": *"[^"]*"' project-config.json | head -1 | sed 's/.*: *"\([^"]*\)".*/\1/')
        TEAM_SIZE=$(grep -o '"TEAM_SIZE": *"[^"]*"' project-config.json | head -1 | sed 's/.*: *"\([^"]*\)".*/\1/')
        CREATION_DATE=$(grep -o '"CREATION_DATE": *"[^"]*"' project-config.json | head -1 | sed 's/.*: *"\([^"]*\)".*/\1/')
    fi
}

# 创建项目目录
create_project_directory() {
    TARGET_DIR="../$PROJECT_NAME"
    
    if [ -d "$TARGET_DIR" ]; then
        print_warning "目录 $TARGET_DIR 已存在，将覆盖"
        rm -rf "$TARGET_DIR"
    fi
    
    mkdir -p "$TARGET_DIR"
    print_success "项目目录创建完成: $TARGET_DIR"
}

# 复制模板文件
copy_template_files() {
    print_info "复制模板文件..."
    
    # 复制核心模板文件
    cp templates/README.md "$TARGET_DIR/"
    cp templates/CLAUDE.md "$TARGET_DIR/"
    cp templates/structure.md "$TARGET_DIR/"
    cp templates/CHANGELOG.md "$TARGET_DIR/"
    
    # 复制目录
    cp -r templates/doc/ "$TARGET_DIR/"
    cp -r project-rules-cn/ "$TARGET_DIR/"
    
    # 删除项目中不需要的模板说明文件
    rm -f "$TARGET_DIR/doc/Claude Code智能项目创建完整流程.md"
    
    # 创建工作区文件
    echo "{}" > "$TARGET_DIR/${PROJECT_NAME}.code-workspace"
    
    # 创建基础gitignore
    cat > "$TARGET_DIR/.gitignore" << 'EOF'
node_modules/
dist/
.env
.DS_Store
*.log
.vscode/settings.json
EOF

    print_success "模板文件复制完成（已移除不必要的说明文档）"
}

# 创建Claude分析请求文件
create_claude_analysis_request() {
    cat > "$TARGET_DIR/.claude_analysis_request.md" << EOF
# 🤖 Claude Code智能分析请求

## 项目基本信息
- **项目名称**: $PROJECT_NAME
- **项目描述**: $PROJECT_DESCRIPTION
- **技术栈**: $TECH_STACK
- **团队规模**: $TEAM_SIZE
- **创建时间**: $CREATION_DATE

## 🎯 请求Claude Code进行以下分析

### 1. 项目重命名（重要）
当前项目文件夹名: \`$PROJECT_NAME\`
请基于项目描述"$PROJECT_DESCRIPTION"生成更合适的英文项目名：
- 使用kebab-case格式 (如: snake-game, todo-app)
- 体现项目核心功能和类型
- 符合开发规范和Claude Code兼容性

### 2. 项目深度分析
请基于项目描述"$PROJECT_DESCRIPTION"进行智能分析：
- 识别项目类型和核心功能
- 评估技术复杂度和开发周期
- 提供具体的功能规划建议

### 3. 技术方案优化
- 基于项目需求优化技术栈选择
- 提供架构设计和最佳实践建议
- 推荐合适的开发工具和库

### 4. 智能内容生成
请更新以下文件为项目特定内容：
- **README.md**: 生成项目特定的介绍、功能规划、技术栈说明
- **structure.md**: 显示实时项目目录结构和文件组织
- **doc/todo.md**: 创建个性化的开发任务和学习路径
- **doc/architecture.md**: 设计详细的架构方案和技术实现

### 5. 开发环境建议
- 推荐适合的开发工具和VS Code插件
- 提供项目初始化命令和依赖安装
- 建议调试和测试方案

**🤖 期待AI生成真正针对"$PROJECT_DESCRIPTION"的技术方案和开发指导！**
EOF

    print_success "Claude分析请求文件创建完成"
}

# 初始化Git仓库
init_git_repository() {
    print_info "初始化Git仓库..."
    
    cd "$TARGET_DIR"
    git init
    git add .
    
    # 简化的提交消息
    git commit -m "🎉 feat: 初始化 $PROJECT_NAME 项目

- 基于Claude Code智能模板创建
- 项目描述: $PROJECT_DESCRIPTION
- 技术栈: $TECH_STACK
- 团队规模: $TEAM_SIZE

🤖 Generated with Claude Code"
    
    cd - > /dev/null
    print_success "Git仓库初始化完成"
}

# 运行AI智能分析器
run_ai_analyzer() {
    print_info "🤖 启动AI智能分析器..."
    
    if command -v node >/dev/null 2>&1; then
        # 运行AI分析器
        node ai-analyzer.js "$TARGET_DIR" "./project-config.json"
    else
        print_warning "Node.js未安装，跳过AI自动分析"
        print_info "请手动运行: node ai-analyzer.js"
    fi
}

# 显示完成信息
show_completion() {
    print_success "🎉 AI智能项目创建完成!"
    echo ""
    print_info "项目路径: $TARGET_DIR"
    print_info "项目名称: $PROJECT_NAME"  
    print_info "项目描述: $PROJECT_DESCRIPTION"
    echo ""
    print_success "✨ AI已完成以下工作:"
    echo "• 🎯 智能项目类型识别和重命名"
    echo "• 📝 个性化README.md生成"
    echo "• 🏗️ 项目结构设计(structure.md)"
    echo "• 📋 定制开发任务清单(todo.md)"
    echo "• 📊 智能变更日志(CHANGELOG.md)"
    echo ""
    print_info "🚀 现在就可以开始开发了!"
}

# 主函数
main() {
    print_info "🚀 Claude Code智能项目创建开始..."
    
    load_config
    create_project_directory
    copy_template_files
    create_claude_analysis_request
    init_git_repository
    run_ai_analyzer
    show_completion
    
    print_success "✨ 自动化项目创建完成!"
}

# 执行主函数
main "$@"
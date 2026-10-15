---
title: "Trustworthy AI Series #2: Text-to-SQL Security Patterns"
year: "2026"
order: 11
summary: "Deep dive into preventing SQL injection, handling schema misalignment, and building safe natural language interfaces to databases."
draft: true
---

# Trustworthy AI Series #2: Text-to-SQL Security Patterns

## Introduction

Natural language interfaces to databases are powerful but dangerous. This post explores the security patterns that make text-to-SQL systems safe for production use.

## The Threat Model

### What Can Go Wrong?

1. **SQL Injection**: User input manipulating queries
2. **Schema Leakage**: Exposing table/column names from errors
3. **Access Control Bypass**: Querying unauthorized data
4. **Resource Exhaustion**: Expensive queries consuming resources
5. **Data Exfiltration**: Extracting sensitive information

## Pattern 1: Never Concatenate User Input

### The Problem

```python
# DANGEROUS - SQL Injection vulnerability
query = f"SELECT * FROM users WHERE name = '{user_input}'"
```

If `user_input = "' OR 1=1 --"`, you've just returned all users.

### The Solution

Use parameterized queries exclusively:

```python
# Safe - Parameters bound separately
query = "SELECT * FROM users WHERE name = ?"
cursor.execute(query, (user_input,))
```

## Pattern 2: Semantic Intent, Not Text Translation

Instead of translating text → SQL directly:

1. Extract semantic intent (what dimensions, filters, aggregations?)
2. Map intent to predefined query templates
3. Bind extracted values as parameters

```python
def safe_query_builder(intent):
    # Intent: { "metric": "generation", "state": "Texas", "year": 2023 }
    template = "SELECT SUM(generation) FROM electricity WHERE state = ? AND year = ?"
    return template, (intent["state"], intent["year"])
```

## Pattern 3: Schema Validation

Before executing any query:

1. Verify all referenced tables exist
2. Verify all columns exist in those tables
3. Check that requested operations are valid for column types
4. Ensure no unauthorized tables are accessed

```python
def validate_query(parsed_query, allowed_schema):
    for table in parsed_query.tables:
        if table not in allowed_schema:
            return False, f"Table '{table}' not in allowed schema"
    
    for column in parsed_query.columns:
        if not column_exists(column, allowed_schema):
            return False, f"Column '{column}' does not exist"
    
    return True, "Valid"
```

## Pattern 4: Query Complexity Limits

Prevent resource exhaustion:

```python
def check_query_complexity(query):
    limits = {
        "max_joins": 3,
        "max_subqueries": 2,
        "requires_limit": True,
        "max_limit": 10000,
    }
    
    if count_joins(query) > limits["max_joins"]:
        return False, "Too many joins"
    
    if not has_limit_clause(query):
        return False, "Query must include LIMIT"
    
    return True, "Within limits"
```

## Pattern 5: Dry Run Validation

Before executing on real data:

1. Parse the query
2. Validate against schema
3. Check complexity limits
4. Generate EXPLAIN plan
5. Only then execute

## Real-World Example

From the [ai-agent-chatbot](/work/ai-agent-chatbot/) project:

**Question**: "How much wind generation did Texas produce in 2023?"

**Process**:
1. Extract intent: `{metric: "generation", source: "wind", state: "Texas", year: 2023}`
2. Validate: All fields exist in schema
3. Build query: `SELECT SUM(generation) FROM electricity WHERE state = ? AND source = ? AND year = ?`
4. Bind parameters: `("Texas", "wind", 2023)`
5. Execute and return result

**Refusal Example**:

**Question**: "What was customer revenue in Texas in 2023?"

**Process**:
1. Extract intent: `{metric: "revenue", state: "Texas", year: 2023}`
2. Validate: `revenue` column does not exist
3. Refuse: "The electricity generation table does not have revenue data."

## Key Takeaways

- Never concatenate user input into SQL strings
- Extract semantic intent and use query templates
- Validate every query against the schema before execution
- Limit query complexity to prevent resource exhaustion
- Make refusal explicit when questions can't be answered safely

## Further Reading

- [OWASP SQL Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)
- [ai-agent-chatbot Implementation](/work/ai-agent-chatbot/)
- Part 1: [Foundations of Safe AI Systems](/writing/trustworthy-ai-01-foundations/)

---

*Questions or comments? [Get in touch](/contact/)*
